(ns koans.meditations
  (:require
    [koans.utils :as utils]
    [koans.equality :as equality]
    [koans.lists :as lists]))

(def meditations {
  "equality" equality/koans
  "lists" lists/koans
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

(defn next-koan-index [koan]
  (let [next-in-category (KoanIndex. (:category koan) (inc (:index koan)))]
    (if (has-koan? next-in-category)
      next-in-category
      (KoanIndex. (next-category koan) 0))))

(defn koan-for-index [koan-index]
  (let [category-list (category-with-name (:category koan-index))
        item (nth category-list (:index koan-index))
        description (first item)
        [before after] (clojure.string/split (pr-str (last item)) #":__")]
    (Koan. description before after)))
