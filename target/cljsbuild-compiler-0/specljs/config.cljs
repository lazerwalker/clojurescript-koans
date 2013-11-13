(ns specljs.config
  (:require [specljs.platform :refer [dynamically-invoke print-stack-trace]]))

(declare ^:dynamic *parent-description*)

(declare #^{:dynamic true} *reporters*)
(def default-reporters (atom nil))
(defn active-reporters []
  
    (if *reporters*
    *reporters*
    (if-let [reporters @default-reporters]
      reporters
      (throw (js/Error. "*reporters* is unbound and no default value has been provided")))))

(declare #^{:dynamic true} *runner*)
(def default-runner (atom nil))
(def default-runner-fn (atom nil))
(defn active-runner []
  
    (if *runner*
    *runner*
    (if-let [runner @default-runner]
      runner
      (throw (js/Error. "*runner* is unbound and no default value has been provided")))))

(declare #^{:dynamic true} *specs*)

(def #^{:dynamic true} *color?* false)

(def #^{:dynamic true} *full-stack-trace?* false)

(def #^{:dynamic true} *tag-filter* {:include #{} :exclude #{}})

(def default-config
  {:specs ["spec"]
   :runner "standard"
   :reporters ["progress"]
   :tags []
   })


(defn config-bindings [] (throw "Not Supported"))

(defn load-runner [name]
  (try
    (dynamically-invoke (str "specljs.run." name) (str "new-" name "-runner"))
    (catch js/Error e (throw (js/Error. (str "Failed to load runner: " name) e)))))

(defn load-reporter [name]
  (try
    (dynamically-invoke (str "specljs.report." name) (str "new-" name "-reporter"))
    (catch js/Error e (throw (js/Error. (str "Failed to load reporter: " name) e)))))

(defn parse-tags [values]
  (loop [result {:includes #{} :excludes #{}} values values]
    (if (seq values)
      (let [value (name (first values))]
        (if (= \~ (first value))
          (recur (update-in result [:excludes] conj (keyword (apply str (rest value)))) (rest values))
          (recur (update-in result [:includes] conj (keyword value)) (rest values))))
      result)))


(defn config-mappings [_] (throw "Not Supported"))

(defn with-config
  "Runs the given function with all the cofigurations set.  Useful in cljs because config-mappings can't be used."
  [config action]
  (binding [*runner* (if (:runner config) (do (println "loading runner in config") (load-runner (:runner config))) (active-runner))
            *reporters* (if (:reporters config) (mapv load-reporter (:reporters config)) (active-reporters))
            *specs* (:specs config)
            *color?* (:color config)
            *full-stack-trace?* (not (nil? (:stacktrace config)))
            *tag-filter* (parse-tags (:tags config))]
    (action)))
