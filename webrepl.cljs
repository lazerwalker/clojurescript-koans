(ns repl
  (:require [cljs.repl :as repl]))

(defn ^:export evaluate [text] (repl/eval-print text))

(defn ^:export init-with-pipes [output error print-fn]
  (set! *out* #(print-fn % "out"))
  (set! *rtn* #(output %))
  (set! *err* #(error %))
  (set! *print-fn* #(*out* %1))
  (repl/init)
)

