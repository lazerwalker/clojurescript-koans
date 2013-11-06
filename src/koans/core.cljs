(ns koans.core
  (:require
    [dommy.utils :as utils]
    [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [node sel sel1 deftemplate]]))

(def enter-key 13)

(deftemplate input-with-code [before after]
  [:div {:id "code"}
    [:span {:class "before"} before]
    [:input {:class "user-input"}]
    [:span {:class "after"} after]])

(defn input-string []
  (clojure.string/join " " [
    (dommy/text (sel1 :.before))
    (dommy/value (sel1 :input))
    (dommy/text (sel1 :.after))]))

(defn evaluate-koan []
  (let [text (input-string)]
    (.log js/console "Evaluating" text)
    (repl/evaluate text)))

(defn show-koan [& {:keys [before after]}]
  (let [input (input-with-code before after)]
    (dommy/append! (sel1 :body) input)
    (dommy/listen! input :keypress (fn [e]
      (if (= (.-charCode e) enter-key)
        (evaluate-koan))))))

(set! (.-onready js/document) (fn []
  (show-koan :before "(=", :after "2)")))

(defn repl-print [thing other-thing]
  (.log js/console thing other-thing))

(set! (.-output js/repl) repl-print)
(set! (.-error js/repl) repl-print)
(set! (.-print js/repl) repl-print)