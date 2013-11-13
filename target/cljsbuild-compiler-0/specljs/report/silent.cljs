(ns specljs.report.silent
  (:require [specljs.reporting]))

(deftype SilentReporter [passes fails results]
  specljs.reporting/Reporter
  (report-message [this message])
  (report-description [this description])
  (report-pass [this result])
  (report-pending [this result])
  (report-fail [this result])
  (report-runs [this results])
  (report-error [this exception]))

(defn new-silent-reporter []
  (SilentReporter. (atom 0) (atom 0) (atom nil)))
