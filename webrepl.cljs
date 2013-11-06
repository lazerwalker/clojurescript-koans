(ns repl
  (:require [cljs.repl :as repl]))

(defn ^:export evaluate [text] (repl/eval-print text))

(set! (.-onload js/window) (fn []
  (repl/init)
  (set! *out* #(print % "out"))
  (set! *rtn* #(output % "rtn"))
  (set! *err* #(error % "err"))
  (set! *print-fn* #(*out* %1))
))

