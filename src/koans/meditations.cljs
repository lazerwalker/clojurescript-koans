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

(defn expr-to-string [expr]
  (clojure.string/replace (pr-str expr) #"\(quote \((.*?)\)\)|\(quote (.*?)\)" #(str "'(" %2 ")")))

(defn next-koan-index [koan]
  (let [next-in-category (KoanIndex. (:category koan) (inc (:index koan)))]
    (if (has-koan? next-in-category)
      next-in-category
      (KoanIndex. (next-category koan) 0))))

(defn koan-for-index [koan-index]
  (let [category-list (category-with-name (:category koan-index))
        item (try
          (nth category-list (:index koan-index))
          (catch js/Object _ (first category-list 0)))
        description (first item)
        full-text (expr-to-string (last item))
        [before after] (clojure.string/split full-text #":__")]
    (Koan. description before after)))
