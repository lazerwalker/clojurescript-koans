(ns koans.core
  (:use [jayq.core :only [$ html val]])
  (:require
    [koans.meditations :as meditations]
    [koans.repl :as repl]
    [dommy.utils :as utils]
    [dommy.core :as dommy]
    [cljs.core.async :as async
      :refer [<! >! chan close! sliding-buffer put! alts! timeout]])
  (:use-macros
    [dommy.macros :only [node sel sel1 deftemplate]])
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
  (js/setTimeout (fn [] (dommy/add-class! elem "unfaded")) 0))

(defn listen-seq! [elems event handler]
  (mapv
    (fn [el] (dommy/listen! el event handler))
    elems))

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
      (->> (sel (sel1 :.code-box) ".text, input")
        (mapv (fn [el]
          (cond
            (= "text" (.-className el))
              (dommy/text el)
            (= "INPUT" (.-tagName el))
              (dommy/value el))))
        (clojure.string/join " ")))))

(defn evaluate-koan []
  (.log js/console "Evaluating " (input-string))
  (repl/eval (input-string)))

(def resize-chan (chan))

(defn load-next-koan []
  (update-location-hash))

(defn remove-active-koan []
  (let [koan (sel1 :.koan)]
    (if-not (nil? koan)
      (do (dommy/remove-class! koan "unfaded")
          (js/setTimeout #(dommy/remove! koan) fadeout-time)))))

(defn render-koan [koan]
  (remove-active-koan)
  (let [elem (input-with-code koan)]
    (js/setTimeout #(
      (dommy/append! (sel1 :body) elem)
      (fade-in! elem)
      (let [inputs (sel :input)
            texts  (sel :.text)]
        (.focus (first inputs))
        (listen-seq! texts :click (fn [e]
          (.focus (first inputs))))

        (listen-seq! inputs :keypress
          (fn [e]
            (when (= (.-charCode e) enter-key)
              (evaluate-koan))))

        (listen-seq! inputs :input (fn [e]
          (go (>! resize-chan e)))))

      ) fadeout-time)))

(defn render-current-koan []
  (if (meditations/koan-exists? (current-koan-index))
    (let [current-koan (meditations/koan-for-index (current-koan-index))]
      (render-koan current-koan))
    (update-location-hash)))

(defn resize-input [input]
  (defn remove-spaces [text] (clojure.string/replace text " " "_"))

  (let [parent (dommy/closest input :.code-box)
        shadow (sel1 parent :.shadow)]

    (dommy/set-text! shadow (remove-spaces (dommy/value input)))

    (let [shadow-width (.-width (.getBoundingClientRect shadow))
          input-width (.-width (.getBoundingClientRect input))]
      (cond
        (>= shadow-width input-width)
          (dommy/set-px! input :width (+ shadow-width (* 4 char-width)))
        (>= (- input-width (* 4 char-width)) shadow-width)
          (dommy/set-px! input :width (+ shadow-width (* 4 char-width)))))))

(go
  (while true
    (let [e (<! resize-chan)]
      (resize-input (.-target e)))))

(set! (.-onload js/window) (fn []
  (if (clojure/string.blank? (.-hash js/location))
    (set! (.-hash js/location) "equality/1")
    (render-current-koan))))

(set! (.-onhashchange js/window) (fn []
  (render-current-koan)))

(defn show-error-message []
  (if (dommy/has-class? (sel1 :.code-box) "incorrect")
    (do (let [code-box (sel1 :.code-box)
              error (sel1 :.error)]
      (dommy/remove-class! code-box "incorrect")
      (dommy/remove-class! error "unfaded")
      (js/setTimeout #(
        (dommy/add-class! code-box "incorrect")
        (dommy/add-class! error "unfaded")
      ) 300)))
    (do (let [error (error-message)]
      (dommy/append! (sel1 :.koan) error)
      (fade-in! error)
      (dommy/add-class! (sel1 :.code-box) "incorrect")))))

(defn evaluate-response [text]
  (.log js/console text)
  (cond
    (= text "true")
      (load-next-koan)
    (or (= text "false") (not (nil? (re-find #"\#\<[A-Za-z]*?Error:" text))))
      (show-error-message)))

  (repl/listen-for-output evaluate-response)