(ns koans.meditations
  (:require
    [koans.utils :as utils]
    [koans.meditations.equality :as equality]
    [koans.meditations.lists :as lists]
    [koans.meditations.vectors :as vectors]
    [koans.meditations.sets :as sets]
    [koans.meditations.maps :as maps]))

(def meditations {
  "equality" equality/koans
  "lists" lists/koans
  "vectors" vectors/koans
  "sets" sets/koans
  "maps" maps/koans
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
  (clojure.string/replace (pr-str expr) #"\(quote (.*?)\)" #(str "'" %2)))

(defn next-koan-index [koan]
  (let [next-in-category (KoanIndex. (:category koan) (inc (:index koan)))]
    (if (has-koan? next-in-category)
      next-in-category
      (KoanIndex. (next-category koan) 0))))

(defn koan-for-index [koan-index]
  (let [category-list (category-with-name (:category koan-index))
        item (try
          (nth category-list (:index koan-index))
          (catch js/Object _ (first category-list)))
        description (first item)
        full-text (expr-to-string (last item))
        [before after] (clojure.string/split full-text #":__")]
    (Koan. description before after)))
