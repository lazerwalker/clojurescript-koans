(ns koans.utils)

(defn index-of [item coll]
   (first (keep-indexed #(if (= item %2) %1) coll)))