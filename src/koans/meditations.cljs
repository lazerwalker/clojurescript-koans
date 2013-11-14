(ns koans.meditations
  (:require
    [koans.utils :as utils]
    [koans.repl :as repl]
    [koans.meditations.equality :as equality]
    [koans.meditations.lists :as lists]
    [koans.meditations.vectors :as vectors]
    [koans.meditations.sets :as sets]
    [koans.meditations.maps :as maps]
    [koans.meditations.functions :as functions]))

(def meditations {
  "equality" equality/koans
  "lists" lists/koans
  "vectors" vectors/koans
  "sets" sets/koans
  "maps" maps/koans
  "functions" functions/koans
})

(def functions {
  "functions" functions/fns
})

(defrecord Koan [description before after])
(defrecord KoanIndex [category index])

(defn category-with-name [category]
  (partition 2 (category meditations)))

(defn has-koan? [koan]
  (< (:index koan) (count (category-with-name (:category koan)))))

(defn next-category [koan]
  (let [index (inc (utils/index-of (:category koan) (keys meditations)))]
    (nth (keys meditations) index)))

(defn expr-to-string [expr]
  (if (string? expr)
    expr
    (clojure.string/replace (pr-str expr) #"\(quote (.*?)\)" #(str "'" %2))))

(defn next-koan-index [koan]
  (let [next-in-category (KoanIndex. (:category koan) (inc (:index koan)))]
    (if (has-koan? next-in-category)
      next-in-category
      (KoanIndex. (next-category koan) 0))))

(defn koan-for-index [koan-index]
  (let [category (:category koan-index)
        category-list (category-with-name category)
        item (try
          (nth category-list (:index koan-index))
          (catch js/Object _ (first category-list)))
        description (first item)
        full-text (expr-to-string (last item))
        [before after] (clojure.string/split full-text #":__")]
    (dorun (map #(repl/eval (pr-str %)) (category functions)))
    (Koan. description before after)))
