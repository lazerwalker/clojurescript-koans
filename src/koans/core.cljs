(ns koans.core
  (:require
    [koans.meditations :as meditations]
    [koans.repl :as repl]
    [dommy.utils :as utils]
    [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [node sel sel1 deftemplate]]))

(def current-koan-index (atom 0))
(def enter-key 13)

(deftemplate input-with-code [koan]
  [:div {:class (str "koan koan-" @current-koan-index)}
    [:div {:class "description"} (:description koan)]
    [:div {:class "code"}
      [:span {:class "shadow"}]
      [:span {:class "before"} (:before koan)]
      [:input {:class "user-input"}]
      [:span {:class "after"} (:after koan)]]])

(defn input-string []
  (clojure.string/join " " [
    (dommy/text (sel1 :.before))
    (dommy/value (sel1 :input))
    (dommy/text (sel1 :.after))]))

(defn evaluate-koan []
  (repl/eval (input-string)))

(defn render-koan [koan]
  (let [elem (input-with-code koan)]
    (dommy/append! (sel1 :body) elem)
    (let [input (sel1 :.user-input)
          shadow (sel1 :.shadow)]
      (.focus input)
      (dommy/listen! input :keypress (fn [e]
        (if (= (.-charCode e) enter-key)
          (evaluate-koan))))
      (dommy/listen! input :input (fn [e]
        (dommy/set-text! shadow (dommy/value input))
        (dommy/set-px! input :width (+ 14 (.-width (.getBoundingClientRect shadow)))))))))

(defn remove-active-koan []
  (dommy/remove! (sel1 :.koan)))

(defn load-koan [n]
  (let [koan (meditations/nth-koan n)]
    (render-koan koan)))

(defn load-next-koan []
  (remove-active-koan)
  (reset! current-koan-index (inc @current-koan-index))
  (load-koan @current-koan-index))

(set! (.-onready js/document) (fn []
  (load-koan @current-koan-index)))

(defn handler [text]
  (if (= text "true")
    (load-next-koan)
    () ;TODO: Display error message
  ))

(repl/listen-for-output [repl/output-chan repl/input-chan] handler)