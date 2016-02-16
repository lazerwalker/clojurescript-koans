(defproject koans "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :profiles {:dev
    {:dependencies [[specljs "2.9.1"]]}}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [prismatic/dommy "0.1.2"]
                 [jayq "2.5.4"]
                 [org.clojure/core.async "0.2.374"]]

  :plugins [[lein-cljsbuild "1.1.2"]
            [specljs "2.9.1"]]

  :source-paths ["src"]
  :test-paths ["spec"]

  :cljsbuild ~(let [run-specs ["phantomjs" "bin/specljs_runner.js" "repl.out/goog/base.js" "webrepl.js" "spec/stubs.js" "out/koans_spec.js"]]
    { :builds {
        :prod {
          :source-paths ["src"]
          :compiler {
            :main 'koans.core
            :output-to "koans.js"
            :output-dir "out"
            :optimizations :none
            :source-map true}}}
      :test-commands {"test" run-specs}}))
