(ns koans.meditations-spec
  (:require-macros [specljs.core :refer [describe it should should-not
    should= should-not-be-same]])
  (:require [specljs.core]
            [koans.meditations :as meditations]))

#_(describe "nth-koan"
  (it "should return a valid Koan object"
    (def koan (meditations/nth-koan 0))
    (should (string? (:description koan)))
    (should (string? (:before koan)))
    (should (string? (:after koan))))

  (it "should return different koans for different indices"
    (def koan-0 (meditations/nth-koan 0))
    (def koan-1 (meditations/nth-koan 1))
    (should-not-be-same koan-0 koan-1)))