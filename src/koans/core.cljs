(ns koans.core
  (:use [jayq.core :only [$]]
        [jayq.util :only [log wait]])
  (:require
    [clojure.set]
    [koans.meditations :as meditations]
    [koans.repl :as repl]
    [jayq.core :as $]
    [dommy.core :as dommy]
    [cljs.core.async :as async
      :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:use-macros
    [dommy.macros :only [deftemplate]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(defn hash-objects [] (clojure.string/split (.-hash js/location) "/" ))

(defn current-koan-index [] (meditations/KoanIndex.
  (subs (first (hash-objects)) 1)
  (dec (last (hash-objects)))))

(defn update-location-hash []
  (let [koan (meditations/next-koan-index (current-koan-index))]
    (set! (.-hash js/location) (str (:category koan) "/" (inc (:index koan))))))

(def fadeout-time 600)
(def char-width 14)
(def enter-key 13)

(defn defer [func] (wait 0 func))

(deftemplate input-with-code [koan]
  [:div {:class (str "koan koan-" (:index (current-koan-index)))}
    [:div {:class "description"} (:description koan)]
    [:div {:class "code-box"}
      (for [text (:code-strings koan)]
        (if (= text :input)
          [:span {:class "code"}
            [:span {:class "shadow"}]
            [:input {:name "code"}]]
          [:span {:class "text"} text]))]
      (if-not (nil? (:fn-strings koan))
        [:div {:class "functions"}
          (for [function (:fn-strings koan)]
            [:div {:class "function"}
              (for [text function]
                (if (= text :input)
                  [:span {:class "code"}
                    [:span {:class "shadow"}]
                    [:input {:name "code"}]]
                  [:pre {:class "text"} text]))])])])

(deftemplate error-message []
  [:div {:class "error"} "You have not yet attained enlightenment."])

(defn input-string []
  (let [$inputs ($ ".code-box input")
        inputs-are-empty? (map (fn [el] (clojure.string/blank? (.-value el))) $inputs)
        is-empty? (reduce (fn [val result] (or val result)) inputs-are-empty?)]

    (if is-empty?
      ""
      (let [code (->> ($ ".code-box .text, .code-box input")
                  (mapv (fn [el]
                    (cond
                      (= "text" (.-className (first el)))
                        ($/text el)
                      (= "INPUT" (.-tagName (first el)))
                        ($/val el))))
                  (clojure.string/join " "))
            fns (->> ($ ".functions .text, .functions input")
                (mapv (fn [el]
                  (cond
                    (= "text" (.-className (first el)))
                      ($/text el)
                    (= "INPUT" (.-tagName (first el)))
                      ($/val el))))
                (clojure.string/join " "))]
      (str fns " " code)))))

(defn evaluate-koan []
  (log "Evaluating " (input-string))
  (repl/eval (input-string)))

(def resize-chan (chan))

(defn load-next-koan []
  (update-location-hash))

(defn remove-active-koan []
  (let [$el ($ :.koan)]
    ($/fade-out $el
      #($/remove $el))))

(defn remove-static-pages []
  ($/fade-out ($ :.static)))

(defn category-name [koan-index]
  (let [category (:category koan-index)]
    (clojure.string/replace category "-" " ")))

(defn render-koan [koan]
  (remove-active-koan)
  (remove-static-pages)
  (let [$elem ($ (input-with-code koan))
        $category ($ :.category)
        current-category (category-name (current-koan-index))]
    (when-not (empty? (:fn-strings koan))
      ($/add-class $elem "has-functions"))
    (when (not (= ($/text $category) current-category))
      ($/fade-out $category))
    (wait fadeout-time (fn []
      ($/text $category current-category)
      ($/prepend ($ :body) $elem)
      ($/fade-in $elem)
      ($/fade-in $category)
      (.focus (first ($/find $elem :input)))))))

(defn render-static-page [selector]
  (remove-active-koan)
  (let [$el ($ selector)
        $other ($ (first (clojure.set/difference #{"#welcome" "#the-end"} #{selector})))]
    ($/fade-out $other)
    (wait fadeout-time (fn []
      ($/fade-out ($ :.category))
      ($/fade-in $el)))))

(defn render-current-koan []
  (cond
    (clojure/string.blank? (.-hash js/location))
       (render-static-page "#welcome")
    (= (:category (current-koan-index)) "complete")
      (render-static-page "#the-end")
    (meditations/koan-exists? (current-koan-index))
      (let [current-koan (meditations/koan-for-index (current-koan-index))]
        (render-koan current-koan))
    :else
      (update-location-hash)))

(defn resize-input [input]
  (def $input ($ input))
  (defn remove-spaces [text] (clojure.string/replace text " " "_"))

  (let [$parent ($/parent $input)
        $shadow ($/find $parent :.shadow)]

    ($/text $shadow (remove-spaces ($/val $input)))

    (let [shadow-width ($/width $shadow)
          input-width ($/width $input)]
      (cond
        (>= shadow-width input-width)
          ($/width $input (+ shadow-width (* 4 char-width)))
        (>= (- input-width (* 4 char-width)) shadow-width)
          ($/width $input (+ shadow-width (* 4 char-width)))))))

(go
  (while true
    (let [e (<! resize-chan)]
      (resize-input (.-target e)))))

($/document-ready (fn []
  ($/on ($ js/document) :click :.text (fn [e]
    (.focus (first ($ :input)))))
  ($/on ($ js/document) :keypress :input (fn [e]
    (when (= (.-which e) enter-key)
      (evaluate-koan))))
  ($/on ($ js/document) :input :input (fn [e]
    (go (>! resize-chan e))))

  #_(if-not (clojure/string.blank? (.-hash js/location))
    ($/hide ($ "#welcome")))
  (render-current-koan)))

(set! (.-onhashchange js/window) (fn []
  (render-current-koan)
  (js/ga "pageview", (subs (.-hash js/location) 1))))

(defn show-error-message []
  (def $code-box ($ :.code-box))
  (if ($/has-class $code-box "incorrect")
    (do (let [$error ($ :.error)]
      ($/remove-class $code-box "incorrect")
      ($/fade-out $error)
      (wait 300 #(
        ($/add-class $code-box "incorrect")
        ($/fade-in $error)))))
    (do (let [$error ($ (error-message))]
      ($/add-class $code-box "incorrect")
      ($/after ($ :.code-box) $error)
      ($/fade-in $error)))))

(defn evaluate-response [text]
  (log text)
  (cond
    (= text "true")
      (load-next-koan)
    (or (= text "false") (not (nil? (re-find #"\#\<[A-Za-z]*?Error:" text))))
      (show-error-message)))

  (repl/listen-for-output evaluate-response)