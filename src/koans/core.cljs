(ns koans.core
  (:require
    [dommy.utils :as utils]
    [dommy.core :as dommy]
    [cljs.core.async :as async
    :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
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
  (repl/evaluate (input-string)))

(defn show-koan [& {:keys [before after]}]
  (let [input (input-with-code before after)]
    (dommy/append! (sel1 :body) input)
    (dommy/listen! input :keypress (fn [e]
      (if (= (.-charCode e) enter-key)
        (evaluate-koan))))))

(set! (.-onready js/document) (fn []
  (show-koan :before "(=", :after "2)")))

(def output-chan (chan))
(def error-chan (chan))

(defn listen-for-output [chans]
  (go
    (while true
      (let [[text chan] (alts! chans)]
        (if (= text "true")
          (.log js/console "TRUE")
          (.log js/console "FALSE"))))))

(defn channel-piping-fn [chan]
  (fn [text] (go (>! chan text))))

(set! (.-output js/repl) (channel-piping-fn output-chan))
(set! (.-error js/repl) (channel-piping-fn error-chan))
(set! (.-print js/repl) #()) ;TODO: What should be done with printed output?

(listen-for-output [output-chan error-chan])
