(ns koans.core
  (:use [jayq.core :only [$]]
        [jayq.util :only [log wait]])
  (:require
    [cljs.js :as cljs]
    [clojure.set]
    [clojure.string]
    [koans.meditations :as meditations]
    [jayq.core :as $]
    [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [deftemplate]]))

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
(def parentheses-classes-count 7)

(defn parentheses-class-name [index]
  (str "parentheses-" (mod index parentheses-classes-count)))

(defn input-with-code-block [parts]
  (for [part parts]
    (cond
      (= part :input)
        [:span {:class "code"}
          [:span {:class "shadow"}]
          [:input {:name "code"}]]
      (vector? part)
        [:span {:class (str "text " (parentheses-class-name (second part)))}
          (first part)]
      :else
        [:span {:class "text"}
          part])))

(deftemplate input-with-code [koan]
  [:div {:class (str "koan koan-" (:index (current-koan-index)))}
    [:div {:class "description"} (:description koan)]
    [:div {:class "code-box"}
      (input-with-code-block (:code-parts koan))]
      (if-not (nil? (:fn-strings koan))
        [:div {:class "functions"}
          (for [function (:fn-strings koan)]
            [:div {:class "function"}
              [:pre
                (input-with-code-block function)]])])])

(deftemplate error-message []
  [:div {:class "error"} "You have not yet attained enlightenment."])

(defn input-with-element-content [el]
  (->> ($/children ($ el))
       (map #(let [$el ($ %)]
              (cond ($/has-class $el "text") ($/text $el)
                    ($/has-class $el "code") ($/val ($ "input" $el)))))
       (clojure.string/join "")))

(defn input-is-empty? [el]
  (clojure.string/blank? ($/val ($ el))))

(defn input-string []
  (if (some input-is-empty? ($ ".code-box input"))
    ""
    (->> (concat ($ ".function pre")
                 ($ ".code-box"))
         (map input-with-element-content)
         (clojure.string/join " "))))

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
    (clojure.string/blank? (.-hash js/location))
       (render-static-page "#welcome")
    (= (:category (current-koan-index)) "complete")
      (render-static-page "#the-end")
    (meditations/koan-exists? (current-koan-index))
      (let [current-koan (meditations/koan-for-index (current-koan-index))]
        (render-koan current-koan))
    :else
      (update-location-hash)))

(defn resize-input [input]
  (let [$input ($ input)
        remove-spaces (fn [text] (clojure.string/replace text " " "_"))
        $parent ($/parent $input)
        $shadow ($/find $parent :.shadow)]
    ($/text $shadow (remove-spaces ($/val $input)))
    (let [shadow-width ($/width $shadow)
          input-width ($/width $input)]
      (cond
        (>= shadow-width input-width)
          ($/width $input (+ shadow-width (* 4 char-width)))
        (>= (- input-width (* 4 char-width)) shadow-width)
          ($/width $input (+ shadow-width (* 4 char-width)))))))

(defn show-error-message []
  (let [$code-box ($ :.code-box)]
    (if ($/has-class $code-box "incorrect")
      (let [$error ($ :.error)]
        ($/remove-class $code-box "incorrect")
        ($/fade-out $error)
        (wait 300 #(
          ($/add-class $code-box "incorrect")
          ($/fade-in $error))))
      (let [$error ($ (error-message))]
        ($/add-class $code-box "incorrect")
        ($/after ($ :.code-box) $error)
        ($/fade-in $error)))))

(defonce compiler-state
  (cljs/empty-state))

(defn evaluate-koan []
  (let [input (input-string)]
    (log "Evaluating " input)
    (cljs/eval-str compiler-state input nil
      {:eval cljs/js-eval}
      (fn [result]
        (log (clj->js result))
        (if (or (:error result) (not= (:value result) true))
          (show-error-message)
          (load-next-koan))))))

(defn handle-document-ready []
  (let [$doc ($ js/document)]
    ($/on $doc :click :.text #(.focus (first ($ :input))))
    ($/on $doc :keypress :input #(when (= (.-which %) enter-key) (evaluate-koan)))
    ($/on $doc :input :input #(resize-input (.-target %))))
  (render-current-koan))

(defn handle-hashchange []
  (render-current-koan)
  (js/ga "pageview" (subs (.-hash js/location) 1)))

(defn init []
  ($/document-ready handle-document-ready)
  (set! (.-onhashchange js/window) handle-hashchange)
  ;; initialize the cljs.user namespace so that def will actually work
  (cljs/eval compiler-state '(ns cljs.user) {:eval cljs/js-eval} identity))

(init)
