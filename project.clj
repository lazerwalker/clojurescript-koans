(defproject koans "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :profiles {:dev
    {:dependencies [[specljs "2.8.0"]]}}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2014"]
                 [prismatic/dommy "0.1.2"]
                 [jayq "2.5.0"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]]

  :plugins [[lein-cljsbuild "1.0.0-alpha2"]
            [specljs "2.8.0"]]

  :source-paths ["src"]
  :test-paths ["spec"]

  :cljsbuild ~(let [run-specs ["phantomjs" "bin/specljs_runner.js" "repl.out/goog/base.js" "webrepl.js" "spec/stubs.js" "out/koans_spec.js"]]
    { :builds {
        :prod {
          :source-paths ["src"]
          :compiler {
            :output-to "koans.js"
            :output-dir "out"
            :optimizations :none
            :source-map true}}}
      :test-commands {"test" run-specs}}))
