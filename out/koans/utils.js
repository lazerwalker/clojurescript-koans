// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.utils');
goog.require('cljs.core');
koans.utils.index_of = (function koans$utils$index_of(item,coll){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__13139_SHARP_,p2__13138_SHARP_){
if(cljs.core._EQ_.call(null,item,p2__13138_SHARP_)){
return p1__13139_SHARP_;
} else {
return null;
}
}),coll));
});

//# sourceMappingURL=utils.js.map