(ns koans.core-spec
  (:require-macros [specljs.core :refer [describe it should should-not should=]])
  (:require [specljs.core]
            [koans.core]))

(describe "Truth"
  (it "is true"
    (should true))

  (it "is not false"
    (should-not false)))

