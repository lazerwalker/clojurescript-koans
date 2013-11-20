(ns koans.core
  (:use [jayq.core :only [$]]
        [jayq.util :only [log wait]])
  (:require
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

(defn fade-in! [elem]
  (wait 0 (fn [] ($/add-class ($ elem) "unfaded"))))

(deftemplate input-with-code [koan]
  [:div {:class (str "koan koan-" (:index (current-koan-index)))}
    [:div {:class "description"} (:description koan)]
    [:div {:class "code-box"}
      (for [text (:code-strings koan)]
        (if (= text "INPUT")
          [:span {:class "code"}
            [:span {:class "shadow"}]
            [:input {:name "code"}]]
          [:span {:class "text"} text]))]])

(deftemplate error-message []
  [:div {:class "error"} "You have not yet attained enlightenment."])

(defn input-string []
  (let [inputs ($ :input)
        inputs-are-empty? (map (fn [el] (clojure.string/blank? (.-value el))) ($ :input))
        is-empty? (reduce (fn [val result] (or val result)) inputs-are-empty?)]

    (if is-empty?
      ""
      (->> ($ ".text, input")
        (mapv (fn [el]
          (cond
            (= "text" (.-className (first el)))
              ($/text el)
            (= "INPUT" (.-tagName (first el)))
              ($/val el))))
        (clojure.string/join " ")))))

(defn evaluate-koan []
  (log "Evaluating " (input-string))
  (repl/eval (input-string)))

(def resize-chan (chan))

(defn load-next-koan []
  (update-location-hash))

(defn remove-active-koan []
  (let [koan ($ :.koan)]
    (if-not (= 0 (.-length koan))
      (do ($/remove-class koan "unfaded")
          (wait fadeout-time #($/remove koan))))))

(defn render-koan [koan]
  (remove-active-koan)
  (let [$elem ($ (input-with-code koan))]
    (wait fadeout-time #(
      ($/append ($ :body) $elem)
      (fade-in! $elem)
      (.focus (first ($/find $elem :input)))))))

(defn render-current-koan []
  (if (meditations/koan-exists? (current-koan-index))
    (let [current-koan (meditations/koan-for-index (current-koan-index))]
      (render-koan current-koan))
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
    (when (= (.-charCode e) enter-key)
      (evaluate-koan))))
  ($/on ($ js/document) :input :input (fn [e]
    (go (>! resize-chan e))))

  (if (clojure/string.blank? (.-hash js/location))
    (set! (.-hash js/location) "equality/1")
    (render-current-koan))))

(set! (.-onhashchange js/window) (fn []
  (render-current-koan)))

(defn show-error-message []
  (def $code-box ($ :.code-box))
  (if ($/has-class $code-box "incorrect")
    (do (let [$error ($ :.error)]
      ($/remove-class $code-box "incorrect")
      ($/remove-class $error "unfaded")
      (wait 300 #(
        ($/add-class $code-box "incorrect")
        ($/add-class $error "unfaded")))))
    (do (let [$error ($ (error-message))]
      ($/add-class $code-box "incorrect")
      ($/append ($ :.koan) $error)
      (fade-in! $error)))))

(defn evaluate-response [text]
  (log text)
  (cond
    (= text "true")
      (load-next-koan)
    (or (= text "false") (not (nil? (re-find #"\#\<[A-Za-z]*?Error:" text))))
      (show-error-message)))

  (repl/listen-for-output evaluate-response)