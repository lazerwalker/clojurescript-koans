// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.datatypes');
goog.require('cljs.core');
koans.meditations.datatypes.koans = cljs.core.list("Holding records is meaningful only when the record is worthy of you",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Keyword(null,"prize","prize",1120839556),cljs.core.list(new cljs.core.Symbol(null,"Nobel.","Nobel.",698073055,null),"peace"))),"Types are quite similar",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,".prize",".prize",-216655267,null),cljs.core.list(new cljs.core.Symbol(null,"Pulitzer.","Pulitzer.",2020419954,null),"literature"))),"Records may be treated like maps",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Keyword(null,"prize","prize",1120839556),cljs.core.list(new cljs.core.Symbol(null,"Nobel.","Nobel.",698073055,null),"physics"))),"While types may not",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Keyword(null,"prize","prize",1120839556),cljs.core.list(new cljs.core.Symbol(null,"Pulitzer.","Pulitzer.",2020419954,null),"poetry"))),"Further study reveals why",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1640423659,null),new cljs.core.Symbol(null,"map?","map?",-1637187556,null),cljs.core.PersistentVector.fromArray([cljs.core.list(new cljs.core.Symbol(null,"Nobel.","Nobel.",698073055,null),"chemistry"),cljs.core.list(new cljs.core.Symbol(null,"Pulitzer.","Pulitzer.",2020419954,null),"music")], true))),"Either sort of datatype can define methods in a protocol",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",825586404,null),cljs.core.list(new cljs.core.Symbol(null,"present","present",-1958808972,null),cljs.core.list(new cljs.core.Symbol(null,"Oscar.","Oscar.",730422423,null),"Best Picture"),"Evil Alien Conquerors"))));
koans.meditations.datatypes.fns = cljs.core.PersistentVector.fromArray([cljs.core.list(new cljs.core.Symbol(null,"defrecord","defrecord",1623953999,null),new cljs.core.Symbol(null,"Nobel","Nobel",-1565092671,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"prize","prize",-1533596213,null)], true)),cljs.core.list(new cljs.core.Symbol(null,"deftype","deftype",-95157640,null),new cljs.core.Symbol(null,"Pulitzer","Pulitzer",1584334,null),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"prize","prize",-1533596213,null)], true)),"(defprotocol Award\n    (present [this recipient]))","(defrecord Oscar [category]\n    Award\n    (present [this recipient]\n      (print (str \"Congratulations on your \"\n                  (:category this) \" Oscar, \"\n                  recipient\n                  \"!\"))))","(deftype Razzie [category]\n    Award\n    (present [this recipient]\n      :__))"], true);

//# sourceMappingURL=datatypes.js.map