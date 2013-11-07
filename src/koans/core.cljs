(ns koans.core
  (:require
    [koans.meditations :as meditations]
    [dommy.utils :as utils]
    [dommy.core :as dommy]
    [cljs.core.async :as async
    :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:use-macros
    [dommy.macros :only [node sel sel1 deftemplate]]))

(def current-koan-index (atom 0))
(def enter-key 13)

(defn load-next-koan []
  (reset! current-koan-index (inc @current-koan-index))
  (remove-active-koan)
  (load-koan @current-koan-index))

(defn load-koan [n]
  (let [koan (meditations/nth-koan n)]
    (render-koan koan)))

(deftemplate input-with-code [koan]
  [:div {:id "koan"}
    [:div {:class "description"} (:description koan)]
    [:span {:class "before"} (:before koan)]
    [:input {:class "user-input"}]
    [:span {:class "after"} (:after koan)]])

(defn input-string []
  (clojure.string/join " " [
    (dommy/text (sel1 :.before))
    (dommy/value (sel1 :input))
    (dommy/text (sel1 :.after))]))

(defn evaluate-koan []
  (repl/evaluate (input-string)))

(defn remove-active-koan []
  (dommy/remove! (sel1 :#koan)))

(defn render-koan [koan]
  (let [input (input-with-code koan)]
    (dommy/append! (sel1 :body) input)
    (dommy/listen! input :keypress (fn [e]
      (if (= (.-charCode e) enter-key)
        (evaluate-koan))))))

(set! (.-onready js/document) (fn []
  (load-koan @current-koan-index)))

(def output-chan (chan))
(def error-chan (chan))

(defn listen-for-output [chans]
  (go
    (while true
      (let [[text chan] (alts! chans)]
        (if (= text "true")
          (load-next-koan)
          () ;TODO: Display error message
          )))))

(defn channel-piping-fn [chan]
  (fn [text] (go (>! chan text))))

(set! (.-output js/repl) (channel-piping-fn output-chan))
(set! (.-error js/repl) (channel-piping-fn error-chan))
(set! (.-print js/repl) #()) ;TODO: What should be done with printed output?

(listen-for-output [output-chan error-chan])
