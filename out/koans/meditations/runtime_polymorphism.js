// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.runtime_polymorphism');
goog.require('cljs.core');
koans.meditations.runtime_polymorphism.koans = cljs.core.list("Some functions can be used in different ways - with no arguments",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"hello","hello",-1541369205,null))),"With one argument",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"hello","hello",-1541369205,null),"world")),"Or with many arguments",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"hello","hello",-1541369205,null),"Peter","Paul","Mary")),"Multimethods allow more complex dispatching",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Bambi eats veggies.",cljs.core.list(new cljs.core.Symbol(null,"diet","diet",-1637448275,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"species","species",3300406446),"deer",new cljs.core.Keyword(null,"name","name",1017277949),"Bambi",new cljs.core.Keyword(null,"age","age",1014000753),1,new cljs.core.Keyword(null,"eater","eater",1110184311),new cljs.core.Keyword(null,"herbivore","herbivore",2949842490)], true))),"Different methods are used depending on the dispatch function result",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"Simba eats animals.",cljs.core.list(new cljs.core.Symbol(null,"diet","diet",-1637448275,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"species","species",3300406446),"lion",new cljs.core.Keyword(null,"name","name",1017277949),"Simba",new cljs.core.Keyword(null,"age","age",1014000753),1,new cljs.core.Keyword(null,"eater","eater",1110184311),new cljs.core.Keyword(null,"carnivore","carnivore",1064455981)], true))),"You may use a default method when no others match",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"I don't know what Rich Hickey eats.",cljs.core.list(new cljs.core.Symbol(null,"diet","diet",-1637448275,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"Rich Hickey"], true))));
koans.meditations.runtime_polymorphism.fns = cljs.core.PersistentVector.fromArray(["(defn hello\n  ([] \"Hello World!\")\n  ([a] (str \"Hello, you silly \" a \".\"))\n  ([a & more] (str \"Hello to this group: \"\n                   (apply str\n                          (interpose \", \" (concat (list a) more)))\n                   \"!\")))","(defmulti diet (fn [x] (:eater x)))","(defmethod diet :herbivore [a] :__)","(defmethod diet :carnivore [a] :__)","(defmethod diet :default [a] :__)"], true);

//# sourceMappingURL=runtime_polymorphism.js.map