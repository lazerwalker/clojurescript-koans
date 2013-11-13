(ns koans.core-spec
  (:require [specljs.core]
          [koans.core :as core]
          [dommy.core :as dommy]
          [cljs.core.async :as async
            :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:use-macros
    [dommy.macros :only [node sel sel1 deftemplate]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
    [specljs.core :refer [describe before context it should should-not should= should-not-be-same]]))


#_(defn input-width [] (dommy/px (sel1 :input) :width))

#_(describe "auto-resizing text box"
  (before (core/render-koan 0))
  (it "should initially be 4 characters wide"
    (should= 56 (input-width)))

  (context "expanding the text to 5 characters"
    (it "should be larger"
      (dommy/set-value! (sel1 :input) "true ")
      (go (>! core/resize-chan ""))
      (should (> (input-width) 56)))))