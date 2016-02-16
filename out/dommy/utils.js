// Compiled by ClojureScript 1.7.228 {}
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__7926){
var vec__7928 = p__7926;
var k = cljs.core.nth.call(null,vec__7928,(0),null);
var ks = cljs.core.nthnext.call(null,vec__7928,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__6130__auto__ = ks;
if(cljs.core.truth_(and__6130__auto__)){
return dommy$utils$dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__6130__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});

//# sourceMappingURL=utils.js.map