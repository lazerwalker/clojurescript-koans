(ns koans.core
  (:require
    [koans.meditations :as meditations]
    [koans.repl :as repl]
    [dommy.utils :as utils]
    [dommy.core :as dommy]
    [cljs.core.async :as async
      :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:use-macros
    [dommy.macros :only [node sel sel1 deftemplate]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(def current-koan-index (atom 0))
(def fadeout-time 600)
(def char-width 14)
(def enter-key 13)

(defn fade-in! [elem]
  (js/setTimeout (fn [] (dommy/add-class! elem "unfaded")) 0))

(deftemplate input-with-code [koan]
  [:div {:class (str "koan koan-" @current-koan-index)}
    [:div {:class "description"} (:description koan)]
    [:div {:class "code"}
      [:span {:class "shadow"}]
      [:span {:class "before"} (:before koan)]
      [:input {:class "user-input", :name "code"}]
      [:span {:class "after"} (:after koan)]]])

(deftemplate error-message []
  [:div {:class "error"} "You have not yet attained enlightenment."])

(defn input-string []
  (clojure.string/join " " [
    (dommy/text (sel1 :.before))
    (dommy/value (sel1 :input))
    (dommy/text (sel1 :.after))]))

(defn evaluate-koan []
  (repl/eval (input-string)))

(def resize-chan (chan))

(defn render-koan [koan]
  (let [elem (input-with-code koan)]
    (js/setTimeout #(
      (dommy/append! (sel1 :body) elem)
      (fade-in! elem)
      (let [input (sel1 :.user-input)]
        (.focus input)
        (dommy/listen! input :keypress (fn [e]
          (if (= (.-charCode e) enter-key)
            (evaluate-koan))))
        (dommy/listen! input :input (fn [e]
          (go (>! resize-chan e)))))
      ) fadeout-time)))


(defn resize-input []
  (defn remove-spaces [text] (clojure.string/replace text " " "_"))

  (let [input (sel1 :.user-input)
        shadow (sel1 :.shadow)]
    (dommy/set-text! shadow (remove-spaces (dommy/value input)))
      (let [shadow-width (.-width (.getBoundingClientRect shadow))
            input-width (.-width (.getBoundingClientRect input))]
        (cond
          (>= shadow-width input-width)
            (dommy/set-px! input :width (+ shadow-width (* 4 char-width)))
          (>= (- input-width (* 4 char-width)) shadow-width)
            (dommy/set-px! input :width (+ shadow-width (* 4 char-width)))))))

(go
  (while true
    (let [e (<! resize-chan)]
      (resize-input))))

(defn remove-active-koan []
  (let [koan (sel1 :.koan)]
    (dommy/remove-class! koan "unfaded")
    (js/setTimeout #(dommy/remove! koan) fadeout-time)))

(defn load-koan [n]
  (let [koan (meditations/nth-koan n)]
    (render-koan koan)))

(defn load-next-koan []
  (remove-active-koan)
  (reset! current-koan-index (inc @current-koan-index))
  (load-koan @current-koan-index))

(set! (.-onready js/document) (fn []
  (load-koan @current-koan-index)))

(defn show-error-message []
  (if (dommy/has-class? (sel1 :.code) "incorrect")
    (do (let [code-box (sel1 :.code)
              error (sel1 :.error)]
      (dommy/remove-class! code-box "incorrect")
      (dommy/remove-class! error "unfaded")
      (js/setTimeout #(
        (dommy/add-class! code-box "incorrect")
        (dommy/add-class! error "unfaded")
      ) 300)))
    (do (let [error (error-message)]
      (dommy/append! (sel1 :.koan) error)
      (fade-in! error)
      (dommy/add-class! (sel1 :.code) "incorrect")))))

(defn evaluate-response [text]
  (if (= text "true")
    (load-next-koan)
    (show-error-message)
  ))

(repl/listen-for-output evaluate-response)