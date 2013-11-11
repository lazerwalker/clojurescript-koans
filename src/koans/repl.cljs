(ns koans.repl
  (:require [cljs.core.async :as async
    :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(def output-chan (chan))
(def error-chan (chan))

(defn channel-piping-fn [chan]
  (fn [text] (go (>! chan text))))

(set! (.-output js/repl) (channel-piping-fn output-chan))
(set! (.-error js/repl) (channel-piping-fn error-chan))
(set! (.-print-fn js/repl) #()) ;TODO: What should be done with printed output?

(defn ^:export eval [input-string]
  (.evaluate js/repl input-string))

(defn ^:export listen-for-output [chans handler]
  (go
    (while true
      (let [[text chan] (alts! [output-chan])]
        (.log js/console text)
        (handler text)))))
