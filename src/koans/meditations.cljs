(ns koans.meditations
  (:require
    [clojure.string]
    [koans.utils :as utils]
    [koans.meditations.equality :as equality]
    [koans.meditations.lists :as lists]
    [koans.meditations.vectors :as vectors]
    [koans.meditations.sets :as sets]
    [koans.meditations.maps :as maps]
    [koans.meditations.functions :as functions]
    [koans.meditations.conditionals :as conditionals]
    [koans.meditations.higher-order-functions :as higher-order-functions]
    [koans.meditations.runtime-polymorphism :as runtime-polymorphism]
    [koans.meditations.lazy-sequences :as lazy-sequences]
    [koans.meditations.sequence-comprehensions :as sequence-comprehensions]
    [koans.meditations.creating-functions :as creating-functions]
    ;[koans.meditations.recursion :as recursion]
    [koans.meditations.destructuring :as destructuring]
    [koans.meditations.atoms :as atoms]
    [koans.meditations.datatypes :as datatypes]
    [koans.meditations.partition :as partition]))

(defrecord Koan [description code-parts fn-strings])
(defrecord KoanIndex [category index])
(defrecord Category [name koans fns])

(def categories [
  (Category. "equality" equality/koans)
  (Category. "lists" lists/koans)
  (Category. "vectors" vectors/koans)
  (Category. "sets" sets/koans)
  (Category. "maps" maps/koans)
  (Category. "functions" functions/koans functions/fns)
  (Category. "conditionals" conditionals/koans conditionals/fns)
  (Category. "higher-order-functions" higher-order-functions/koans)
  (Category. "runtime-polymorphism" runtime-polymorphism/koans runtime-polymorphism/fns)
  (Category. "lazy-sequences" lazy-sequences/koans)
  (Category. "sequence-comprehensions" sequence-comprehensions/koans)
  (Category. "creating-functions" creating-functions/koans creating-functions/fns)
  (Category. "destructuring" destructuring/koans destructuring/fns)
  (Category. "atoms" atoms/koans atoms/fns)
  ;(Category. "datatypes" datatypes/koans datatypes/fns)
  (Category. "partition" partition/koans)
  (Category. "complete" '(:the :end))
])

(defn category-from-koan-index [koan-index]
  (first (filter #(= (:name %) (:category koan-index)) categories)))

(defn koan-exists? [koan-index]
  (< (:index koan-index) (count (partition 2 (:koans (category-from-koan-index koan-index))))))

(defn next-category [koan-index]
  (let [index (inc (utils/index-of (category-from-koan-index koan-index) categories))]
    (:name (nth categories index))))

(defn expr-to-string [expr]
  (if (string? expr)
    expr
    (clojure.string/replace (pr-str expr) #"\(quote (.*?)\)" #(str "'" (%1 1)))))

(defn next-koan-index [koan]
  (let [next-in-category (KoanIndex. (:category koan) (inc (:index koan)))]
    (cond
      (koan-exists? next-in-category)
        next-in-category
      (nil? (category-from-koan-index koan))
        (KoanIndex. "equality" 0)
      (js/isNaN (:index next-in-category))
        (KoanIndex. (:category koan) 0)
      :else
        (KoanIndex. (next-category koan) 0))))

(defn expr-to-array [expr]
  (->> (clojure.string/replace (expr-to-string expr) #":__" "$")
       (reduce (fn [{:keys [index result change]} c]
                 (condp = c
                   "(" {:index (inc index)
                        :change true
                        :result (conj result [c index])}
                   ")" {:index (dec index)
                        :change true
                        :result (conj result [c (dec index)])}
                   "$" {:index index
                        :change true
                        :result (conj result :input)}
                   {:index index
                    :result (if change
                              (conj result c)
                              (update result (dec (count result)) #(str % c)))
                    :change false}))
               {:index 0
                :change false
                :result []})
       :result))

(defn koan-for-index [koan-index]
  (let [category (category-from-koan-index koan-index)
        category-list (partition 2 (:koans category))
        item (try
          (nth category-list (:index koan-index))
          (catch js/Object _ (first category-list)))
        description (first item)
        code-parts (expr-to-array (last item))
        fn-strings (map expr-to-array (:fns category))]
    (Koan. description code-parts fn-strings)))
