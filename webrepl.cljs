(ns webrepl
  (:require [cljs.repl :as repl]))

(def append-dom)

(defn dom [o]
  (if (coll? o)
    (let [[tag attrs & body] o]
      (if (keyword? tag)
        (let [elem (.createElement js/document (name tag))]
          (when (map? attrs)
            (doseq [[k v] attrs]
              (when v (.setAttribute elem (name k) v))))
          [(append-dom elem (if (map? attrs) body (cons attrs body)))])
        (mapcat dom o)))
    (when o
      [(.createTextNode js/document (str o))])))

(defn append-dom [parent v]
  (doseq [i (dom v)]
    (.appendChild parent i))
  parent)

(defn repl-print [log text cls]
  (doseq [line (.split (str text) #"\n")]
    (append-dom log
      [:div {:class (str "cg "
                         (when cls
                           (str " " cls)))}
       line]))
  (set! (.-scrollTop log) (.-scrollHeight log)))

(defn postexpr [log text]
  (append-dom log
    [:table
     [:tbody
      [:tr
       [:td {:class "cg"} (repl/prompt)]
       [:td (.replace text #"\n$" "")]]]]))

(defn pep [log text]
 (postexpr log text)
 (repl/eval-print text))

(set! (.-onload js/window) (fn []
  (repl/init)

  (let [log (.getElementById js/document "log")
        input (.getElementById js/document "input")
        status1 (.getElementById js/document "status1")
        status2 (.getElementById js/document "status2")]

    ;; Setup the print function
    ;; Setup the print function
    (set! *out* #(repl-print log % nil))
    (set! *rtn* #(repl-print log % "rtn"))
    (set! *err* #(repl-print log % "err"))
    (set! *print-fn* #(*out* %1))

    (println ";; ClojureScript")
    (append-dom log [:div {:class "cg"}
      ";;   - "
      [:a {:href "http://github.com/kanaka/clojurescript"}
       "http://github.com/kanaka/clojurescript"]])
    (println ";;   - A port of the ClojureScript compiler to ClojureScript")
    (pep log "(+ 1 2)")
    (pep log "(defn sqr [x] (* x x))")
    (pep log "(sqr 8)")
    (pep log "(defmacro unless [pred a b] `(if (not ~pred) ~a ~b))")
    (pep log "(unless false :yep :nope)")

    (set! (.-onkeypress input)
          (fn [ev]
            (when (== (.-keyCode (or ev event)) 13)
              (let [line (.-value input)]
                (if (repl/complete-form? line)
                  (do
                    (pep log line)
                    (js/setTimeout #(set! (.-value input) "") 0)
                    (set! (.-visibility (.-style status1)) "visible")
                    (set! (.-visibility (.-style status2)) "hidden")
                    (set! (.-innerText (.getElementById js/document "ns")) (repl/prompt)))
                  (do
                    (set! (.-visibility (.-style status1)) "hidden")
                    (set! (.-visibility (.-style status2)) "visible")))))))

    (.focus input))))
