// Compiled by ClojureScript 1.7.228 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.template');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;

return elem__$1;
});
dommy.core.html = (function dommy$core$html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);

return elem__$1;
});
dommy.core.text = (function dommy$core$text(elem){
var or__6142__auto__ = elem.textContent;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return elem.innerText;
}
});
dommy.core.value = (function dommy$core$value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;

return elem__$1;
});
/**
 * append `child` to `parent`. 'parent' and 'child' should be node-like
 * (work with dommy.template/->node-like). The node-like projection
 * of parent is returned after appending child.
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args7931 = [];
var len__7200__auto___7942 = arguments.length;
var i__7201__auto___7943 = (0);
while(true){
if((i__7201__auto___7943 < len__7200__auto___7942)){
args7931.push((arguments[i__7201__auto___7943]));

var G__7944 = (i__7201__auto___7943 + (1));
i__7201__auto___7943 = G__7944;
continue;
} else {
}
break;
}

var G__7936 = args7931.length;
switch (G__7936) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7219__auto__ = (new cljs.core.IndexedSeq(args7931.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7219__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__7937 = dommy.template.__GT_node_like.call(null,parent);
G__7937.appendChild(dommy.template.__GT_node_like.call(null,child));

return G__7937;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__7938_7946 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7939_7947 = null;
var count__7940_7948 = (0);
var i__7941_7949 = (0);
while(true){
if((i__7941_7949 < count__7940_7948)){
var c_7950 = cljs.core._nth.call(null,chunk__7939_7947,i__7941_7949);
dommy.core.append_BANG_.call(null,parent__$1,c_7950);

var G__7951 = seq__7938_7946;
var G__7952 = chunk__7939_7947;
var G__7953 = count__7940_7948;
var G__7954 = (i__7941_7949 + (1));
seq__7938_7946 = G__7951;
chunk__7939_7947 = G__7952;
count__7940_7948 = G__7953;
i__7941_7949 = G__7954;
continue;
} else {
var temp__4425__auto___7955 = cljs.core.seq.call(null,seq__7938_7946);
if(temp__4425__auto___7955){
var seq__7938_7956__$1 = temp__4425__auto___7955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_7956__$1)){
var c__6945__auto___7957 = cljs.core.chunk_first.call(null,seq__7938_7956__$1);
var G__7958 = cljs.core.chunk_rest.call(null,seq__7938_7956__$1);
var G__7959 = c__6945__auto___7957;
var G__7960 = cljs.core.count.call(null,c__6945__auto___7957);
var G__7961 = (0);
seq__7938_7946 = G__7958;
chunk__7939_7947 = G__7959;
count__7940_7948 = G__7960;
i__7941_7949 = G__7961;
continue;
} else {
var c_7962 = cljs.core.first.call(null,seq__7938_7956__$1);
dommy.core.append_BANG_.call(null,parent__$1,c_7962);

var G__7963 = cljs.core.next.call(null,seq__7938_7956__$1);
var G__7964 = null;
var G__7965 = (0);
var G__7966 = (0);
seq__7938_7946 = G__7963;
chunk__7939_7947 = G__7964;
count__7940_7948 = G__7965;
i__7941_7949 = G__7966;
continue;
}
} else {
}
}
break;
}

return parent__$1;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq7932){
var G__7933 = cljs.core.first.call(null,seq7932);
var seq7932__$1 = cljs.core.next.call(null,seq7932);
var G__7934 = cljs.core.first.call(null,seq7932__$1);
var seq7932__$2 = cljs.core.next.call(null,seq7932__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7933,G__7934,seq7932__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * prepend `child` to `parent`, both node-like
 * return ->node-like projection of `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args7967 = [];
var len__7200__auto___7977 = arguments.length;
var i__7201__auto___7978 = (0);
while(true){
if((i__7201__auto___7978 < len__7200__auto___7977)){
args7967.push((arguments[i__7201__auto___7978]));

var G__7979 = (i__7201__auto___7978 + (1));
i__7201__auto___7978 = G__7979;
continue;
} else {
}
break;
}

var G__7972 = args7967.length;
switch (G__7972) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7219__auto__ = (new cljs.core.IndexedSeq(args7967.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7219__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__7973_7981 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7974_7982 = null;
var count__7975_7983 = (0);
var i__7976_7984 = (0);
while(true){
if((i__7976_7984 < count__7975_7983)){
var c_7985 = cljs.core._nth.call(null,chunk__7974_7982,i__7976_7984);
dommy.core.prepend_BANG_.call(null,parent__$1,c_7985);

var G__7986 = seq__7973_7981;
var G__7987 = chunk__7974_7982;
var G__7988 = count__7975_7983;
var G__7989 = (i__7976_7984 + (1));
seq__7973_7981 = G__7986;
chunk__7974_7982 = G__7987;
count__7975_7983 = G__7988;
i__7976_7984 = G__7989;
continue;
} else {
var temp__4425__auto___7990 = cljs.core.seq.call(null,seq__7973_7981);
if(temp__4425__auto___7990){
var seq__7973_7991__$1 = temp__4425__auto___7990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7973_7991__$1)){
var c__6945__auto___7992 = cljs.core.chunk_first.call(null,seq__7973_7991__$1);
var G__7993 = cljs.core.chunk_rest.call(null,seq__7973_7991__$1);
var G__7994 = c__6945__auto___7992;
var G__7995 = cljs.core.count.call(null,c__6945__auto___7992);
var G__7996 = (0);
seq__7973_7981 = G__7993;
chunk__7974_7982 = G__7994;
count__7975_7983 = G__7995;
i__7976_7984 = G__7996;
continue;
} else {
var c_7997 = cljs.core.first.call(null,seq__7973_7991__$1);
dommy.core.prepend_BANG_.call(null,parent__$1,c_7997);

var G__7998 = cljs.core.next.call(null,seq__7973_7991__$1);
var G__7999 = null;
var G__8000 = (0);
var G__8001 = (0);
seq__7973_7981 = G__7998;
chunk__7974_7982 = G__7999;
count__7975_7983 = G__8000;
i__7976_7984 = G__8001;
continue;
}
} else {
}
}
break;
}

return parent__$1;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq7968){
var G__7969 = cljs.core.first.call(null,seq7968);
var seq7968__$1 = cljs.core.next.call(null,seq7968);
var G__7970 = cljs.core.first.call(null,seq7968__$1);
var seq7968__$2 = cljs.core.next.call(null,seq7968__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7969,G__7970,seq7968__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * insert `node` before `other`, both node-like,
 * `other` must have a parent. return `node`
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null))))].join('')));
}

other__$1.parentNode.insertBefore(actual_node,other__$1);

return actual_node;
});
/**
 * insert `node` after `other`, both node-like,
 * `other` must have a parent. return `node`
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4423__auto___8002 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4423__auto___8002)){
var next_8003 = temp__4423__auto___8002;
parent.insertBefore(actual_node,next_8003);
} else {
parent.appendChild(actual_node);
}

return actual_node;
});
/**
 * replace `elem` with `new`, both node-like, return node-like projection of new.
 * node-like projection of elem must have parent.
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null))))].join('')));
}

elem__$1.parentNode.replaceChild(new$__$1,elem__$1);

return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(parent,node_like){
var G__8005 = dommy.template.__GT_node_like.call(null,parent);
G__8005.innerHTML = "";

dommy.core.append_BANG_.call(null,G__8005,node_like);

return G__8005;
});
/**
 * remove node-like `elem` from parent, return node-like projection of elem
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__8007 = elem__$1.parentNode;
G__8007.removeChild(elem__$1);

return G__8007;
});
/**
 * clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.selector_map = (function dommy$core$selector_map(template,key_selectors_map){
var container = dommy.template.__GT_node_like.call(null,template);
if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707)))))].join('')));
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__8013){
var vec__8014 = p__8013;
var k = cljs.core.nth.call(null,vec__8014,(0),null);
var v = cljs.core.nth.call(null,vec__8014,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){
if(typeof dommy.core.t_dommy$core8015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
dommy.core.t_dommy$core8015 = (function (selector_map,template,key_selectors_map,container,p__8013,vec__8014,k,v,meta8016){
this.selector_map = selector_map;
this.template = template;
this.key_selectors_map = key_selectors_map;
this.container = container;
this.p__8013 = p__8013;
this.vec__8014 = vec__8014;
this.k = k;
this.v = v;
this.meta8016 = meta8016;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dommy.core.t_dommy$core8015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__8014,k,v,container){
return (function (_8017,meta8016__$1){
var self__ = this;
var _8017__$1 = this;
return (new dommy.core.t_dommy$core8015(self__.selector_map,self__.template,self__.key_selectors_map,self__.container,self__.p__8013,self__.vec__8014,self__.k,self__.v,meta8016__$1));
});})(vec__8014,k,v,container))
;

dommy.core.t_dommy$core8015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__8014,k,v,container){
return (function (_8017){
var self__ = this;
var _8017__$1 = this;
return self__.meta8016;
});})(vec__8014,k,v,container))
;

dommy.core.t_dommy$core8015.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__8014,k,v,container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__8014,k,v,container))
;

dommy.core.t_dommy$core8015.getBasis = ((function (vec__8014,k,v,container){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"selector-map","selector-map",808601327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null)], null)))], null)),new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"p__8013","p__8013",249051175,null),new cljs.core.Symbol(null,"vec__8014","vec__8014",617164640,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta8016","meta8016",-294243923,null)], null);
});})(vec__8014,k,v,container))
;

dommy.core.t_dommy$core8015.cljs$lang$type = true;

dommy.core.t_dommy$core8015.cljs$lang$ctorStr = "dommy.core/t_dommy$core8015";

dommy.core.t_dommy$core8015.cljs$lang$ctorPrWriter = ((function (vec__8014,k,v,container){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write.call(null,writer__6741__auto__,"dommy.core/t_dommy$core8015");
});})(vec__8014,k,v,container))
;

dommy.core.__GT_t_dommy$core8015 = ((function (vec__8014,k,v,container){
return (function dommy$core$selector_map_$___GT_t_dommy$core8015(selector_map__$1,template__$1,key_selectors_map__$1,container__$1,p__8013__$1,vec__8014__$1,k__$1,v__$1,meta8016){
return (new dommy.core.t_dommy$core8015(selector_map__$1,template__$1,key_selectors_map__$1,container__$1,p__8013__$1,vec__8014__$1,k__$1,v__$1,meta8016));
});})(vec__8014,k,v,container))
;

}

return (new dommy.core.t_dommy$core8015(dommy$core$selector_map,template,key_selectors_map,container,p__8013,vec__8014,k,v,cljs.core.PersistentArrayMap.EMPTY));
})()
:dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
 * a lazy seq of the ancestors of `node`
 */
dommy.core.ancestor_nodes = (function dommy$core$ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__8018_SHARP_){
return p1__8018_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
 * returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args8019 = [];
var len__7200__auto___8022 = arguments.length;
var i__7201__auto___8023 = (0);
while(true){
if((i__7201__auto___8023 < len__7200__auto___8022)){
args8019.push((arguments[i__7201__auto___8023]));

var G__8024 = (i__7201__auto___8023 + (1));
i__7201__auto___8023 = G__8024;
continue;
} else {
}
break;
}

var G__8021 = args8019.length;
switch (G__8021) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8019.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * closest ancestor of `node` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args8027 = [];
var len__7200__auto___8030 = arguments.length;
var i__7201__auto___8031 = (0);
while(true){
if((i__7201__auto___8031 < len__7200__auto___8030)){
args8027.push((arguments[i__7201__auto___8031]));

var G__8032 = (i__7201__auto___8031 + (1));
i__7201__auto___8031 = G__8032;
continue;
} else {
}
break;
}

var G__8029 = args8027.length;
switch (G__8029) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8027.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__8026_SHARP_){
return !((p1__8026_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * is `descendant` a descendant of `ancestor`?
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains)){
return ancestor__$1.contains(descendant__$1);
} else {
if(cljs.core.truth_(ancestor__$1.compareDocumentPosition)){
return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else {
return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8034){
var vec__8035 = p__8034;
var special_mouse_event = cljs.core.nth.call(null,vec__8035,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__8035,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__8035,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__8035,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6142__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6130__auto__ = related_target;
if(cljs.core.truth_(and__6130__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__6130__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__8035,special_mouse_event,real_mouse_event))
});})(vec__8035,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_((function (){var and__6130__auto__ = selected_target;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__6130__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `nodes`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6142__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___8039 = arguments.length;
var i__7201__auto___8040 = (0);
while(true){
if((i__7201__auto___8040 < len__7200__auto___8039)){
args__7207__auto__.push((arguments[i__7201__auto___8040]));

var G__8041 = (i__7201__auto___8040 + (1));
i__7201__auto___8040 = G__8041;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq8036){
var G__8037 = cljs.core.first.call(null,seq8036);
var seq8036__$1 = cljs.core.next.call(null,seq8036);
var G__8038 = cljs.core.first.call(null,seq8036__$1);
var seq8036__$2 = cljs.core.next.call(null,seq8036__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8037,G__8038,seq8036__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,(function (p1__8042_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__8042_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___8068 = arguments.length;
var i__7201__auto___8069 = (0);
while(true){
if((i__7201__auto___8069 < len__7200__auto___8068)){
args__7207__auto__.push((arguments[i__7201__auto___8069]));

var G__8070 = (i__7201__auto___8069 + (1));
i__7201__auto___8069 = G__8070;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__8045_8071 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8072 = cljs.core.nth.call(null,vec__8045_8071,(0),null);
var selector_8073 = cljs.core.nth.call(null,vec__8045_8071,(1),null);
var seq__8046_8074 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__8053_8075 = null;
var count__8054_8076 = (0);
var i__8055_8077 = (0);
while(true){
if((i__8055_8077 < count__8054_8076)){
var vec__8062_8078 = cljs.core._nth.call(null,chunk__8053_8075,i__8055_8077);
var orig_type_8079 = cljs.core.nth.call(null,vec__8062_8078,(0),null);
var f_8080 = cljs.core.nth.call(null,vec__8062_8078,(1),null);
var seq__8056_8081 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8079,cljs.core.PersistentArrayMap.fromArray([orig_type_8079,cljs.core.identity], true, false)));
var chunk__8058_8082 = null;
var count__8059_8083 = (0);
var i__8060_8084 = (0);
while(true){
if((i__8060_8084 < count__8059_8083)){
var vec__8063_8085 = cljs.core._nth.call(null,chunk__8058_8082,i__8060_8084);
var actual_type_8086 = cljs.core.nth.call(null,vec__8063_8085,(0),null);
var factory_8087 = cljs.core.nth.call(null,vec__8063_8085,(1),null);
var canonical_f_8088 = (cljs.core.truth_(selector_8073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8072,selector_8073):cljs.core.identity).call(null,factory_8087.call(null,f_8080));
dommy.core.update_event_listeners_BANG_.call(null,elem_8072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8073,actual_type_8086,f_8080], null),canonical_f_8088);

if(cljs.core.truth_(elem_8072.addEventListener)){
elem_8072.addEventListener(cljs.core.name.call(null,actual_type_8086),canonical_f_8088);
} else {
elem_8072.attachEvent(cljs.core.name.call(null,actual_type_8086),canonical_f_8088);
}

var G__8089 = seq__8056_8081;
var G__8090 = chunk__8058_8082;
var G__8091 = count__8059_8083;
var G__8092 = (i__8060_8084 + (1));
seq__8056_8081 = G__8089;
chunk__8058_8082 = G__8090;
count__8059_8083 = G__8091;
i__8060_8084 = G__8092;
continue;
} else {
var temp__4425__auto___8093 = cljs.core.seq.call(null,seq__8056_8081);
if(temp__4425__auto___8093){
var seq__8056_8094__$1 = temp__4425__auto___8093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8056_8094__$1)){
var c__6945__auto___8095 = cljs.core.chunk_first.call(null,seq__8056_8094__$1);
var G__8096 = cljs.core.chunk_rest.call(null,seq__8056_8094__$1);
var G__8097 = c__6945__auto___8095;
var G__8098 = cljs.core.count.call(null,c__6945__auto___8095);
var G__8099 = (0);
seq__8056_8081 = G__8096;
chunk__8058_8082 = G__8097;
count__8059_8083 = G__8098;
i__8060_8084 = G__8099;
continue;
} else {
var vec__8064_8100 = cljs.core.first.call(null,seq__8056_8094__$1);
var actual_type_8101 = cljs.core.nth.call(null,vec__8064_8100,(0),null);
var factory_8102 = cljs.core.nth.call(null,vec__8064_8100,(1),null);
var canonical_f_8103 = (cljs.core.truth_(selector_8073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8072,selector_8073):cljs.core.identity).call(null,factory_8102.call(null,f_8080));
dommy.core.update_event_listeners_BANG_.call(null,elem_8072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8073,actual_type_8101,f_8080], null),canonical_f_8103);

if(cljs.core.truth_(elem_8072.addEventListener)){
elem_8072.addEventListener(cljs.core.name.call(null,actual_type_8101),canonical_f_8103);
} else {
elem_8072.attachEvent(cljs.core.name.call(null,actual_type_8101),canonical_f_8103);
}

var G__8104 = cljs.core.next.call(null,seq__8056_8094__$1);
var G__8105 = null;
var G__8106 = (0);
var G__8107 = (0);
seq__8056_8081 = G__8104;
chunk__8058_8082 = G__8105;
count__8059_8083 = G__8106;
i__8060_8084 = G__8107;
continue;
}
} else {
}
}
break;
}

var G__8108 = seq__8046_8074;
var G__8109 = chunk__8053_8075;
var G__8110 = count__8054_8076;
var G__8111 = (i__8055_8077 + (1));
seq__8046_8074 = G__8108;
chunk__8053_8075 = G__8109;
count__8054_8076 = G__8110;
i__8055_8077 = G__8111;
continue;
} else {
var temp__4425__auto___8112 = cljs.core.seq.call(null,seq__8046_8074);
if(temp__4425__auto___8112){
var seq__8046_8113__$1 = temp__4425__auto___8112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8046_8113__$1)){
var c__6945__auto___8114 = cljs.core.chunk_first.call(null,seq__8046_8113__$1);
var G__8115 = cljs.core.chunk_rest.call(null,seq__8046_8113__$1);
var G__8116 = c__6945__auto___8114;
var G__8117 = cljs.core.count.call(null,c__6945__auto___8114);
var G__8118 = (0);
seq__8046_8074 = G__8115;
chunk__8053_8075 = G__8116;
count__8054_8076 = G__8117;
i__8055_8077 = G__8118;
continue;
} else {
var vec__8065_8119 = cljs.core.first.call(null,seq__8046_8113__$1);
var orig_type_8120 = cljs.core.nth.call(null,vec__8065_8119,(0),null);
var f_8121 = cljs.core.nth.call(null,vec__8065_8119,(1),null);
var seq__8047_8122 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8120,cljs.core.PersistentArrayMap.fromArray([orig_type_8120,cljs.core.identity], true, false)));
var chunk__8049_8123 = null;
var count__8050_8124 = (0);
var i__8051_8125 = (0);
while(true){
if((i__8051_8125 < count__8050_8124)){
var vec__8066_8126 = cljs.core._nth.call(null,chunk__8049_8123,i__8051_8125);
var actual_type_8127 = cljs.core.nth.call(null,vec__8066_8126,(0),null);
var factory_8128 = cljs.core.nth.call(null,vec__8066_8126,(1),null);
var canonical_f_8129 = (cljs.core.truth_(selector_8073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8072,selector_8073):cljs.core.identity).call(null,factory_8128.call(null,f_8121));
dommy.core.update_event_listeners_BANG_.call(null,elem_8072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8073,actual_type_8127,f_8121], null),canonical_f_8129);

if(cljs.core.truth_(elem_8072.addEventListener)){
elem_8072.addEventListener(cljs.core.name.call(null,actual_type_8127),canonical_f_8129);
} else {
elem_8072.attachEvent(cljs.core.name.call(null,actual_type_8127),canonical_f_8129);
}

var G__8130 = seq__8047_8122;
var G__8131 = chunk__8049_8123;
var G__8132 = count__8050_8124;
var G__8133 = (i__8051_8125 + (1));
seq__8047_8122 = G__8130;
chunk__8049_8123 = G__8131;
count__8050_8124 = G__8132;
i__8051_8125 = G__8133;
continue;
} else {
var temp__4425__auto___8134__$1 = cljs.core.seq.call(null,seq__8047_8122);
if(temp__4425__auto___8134__$1){
var seq__8047_8135__$1 = temp__4425__auto___8134__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8047_8135__$1)){
var c__6945__auto___8136 = cljs.core.chunk_first.call(null,seq__8047_8135__$1);
var G__8137 = cljs.core.chunk_rest.call(null,seq__8047_8135__$1);
var G__8138 = c__6945__auto___8136;
var G__8139 = cljs.core.count.call(null,c__6945__auto___8136);
var G__8140 = (0);
seq__8047_8122 = G__8137;
chunk__8049_8123 = G__8138;
count__8050_8124 = G__8139;
i__8051_8125 = G__8140;
continue;
} else {
var vec__8067_8141 = cljs.core.first.call(null,seq__8047_8135__$1);
var actual_type_8142 = cljs.core.nth.call(null,vec__8067_8141,(0),null);
var factory_8143 = cljs.core.nth.call(null,vec__8067_8141,(1),null);
var canonical_f_8144 = (cljs.core.truth_(selector_8073)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8072,selector_8073):cljs.core.identity).call(null,factory_8143.call(null,f_8121));
dommy.core.update_event_listeners_BANG_.call(null,elem_8072,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8073,actual_type_8142,f_8121], null),canonical_f_8144);

if(cljs.core.truth_(elem_8072.addEventListener)){
elem_8072.addEventListener(cljs.core.name.call(null,actual_type_8142),canonical_f_8144);
} else {
elem_8072.attachEvent(cljs.core.name.call(null,actual_type_8142),canonical_f_8144);
}

var G__8145 = cljs.core.next.call(null,seq__8047_8135__$1);
var G__8146 = null;
var G__8147 = (0);
var G__8148 = (0);
seq__8047_8122 = G__8145;
chunk__8049_8123 = G__8146;
count__8050_8124 = G__8147;
i__8051_8125 = G__8148;
continue;
}
} else {
}
}
break;
}

var G__8149 = cljs.core.next.call(null,seq__8046_8113__$1);
var G__8150 = null;
var G__8151 = (0);
var G__8152 = (0);
seq__8046_8074 = G__8149;
chunk__8053_8075 = G__8150;
count__8054_8076 = G__8151;
i__8055_8077 = G__8152;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq8043){
var G__8044 = cljs.core.first.call(null,seq8043);
var seq8043__$1 = cljs.core.next.call(null,seq8043);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8044,seq8043__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___8178 = arguments.length;
var i__7201__auto___8179 = (0);
while(true){
if((i__7201__auto___8179 < len__7200__auto___8178)){
args__7207__auto__.push((arguments[i__7201__auto___8179]));

var G__8180 = (i__7201__auto___8179 + (1));
i__7201__auto___8179 = G__8180;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__8155_8181 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8182 = cljs.core.nth.call(null,vec__8155_8181,(0),null);
var selector_8183 = cljs.core.nth.call(null,vec__8155_8181,(1),null);
var seq__8156_8184 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__8163_8185 = null;
var count__8164_8186 = (0);
var i__8165_8187 = (0);
while(true){
if((i__8165_8187 < count__8164_8186)){
var vec__8172_8188 = cljs.core._nth.call(null,chunk__8163_8185,i__8165_8187);
var orig_type_8189 = cljs.core.nth.call(null,vec__8172_8188,(0),null);
var f_8190 = cljs.core.nth.call(null,vec__8172_8188,(1),null);
var seq__8166_8191 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8189,cljs.core.PersistentArrayMap.fromArray([orig_type_8189,cljs.core.identity], true, false)));
var chunk__8168_8192 = null;
var count__8169_8193 = (0);
var i__8170_8194 = (0);
while(true){
if((i__8170_8194 < count__8169_8193)){
var vec__8173_8195 = cljs.core._nth.call(null,chunk__8168_8192,i__8170_8194);
var actual_type_8196 = cljs.core.nth.call(null,vec__8173_8195,(0),null);
var __8197 = cljs.core.nth.call(null,vec__8173_8195,(1),null);
var keys_8198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8196,f_8190], null);
var canonical_f_8199 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8182),keys_8198);
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,dommy.utils.dissoc_in,keys_8198);

if(cljs.core.truth_(elem_8182.removeEventListener)){
elem_8182.removeEventListener(cljs.core.name.call(null,actual_type_8196),canonical_f_8199);
} else {
elem_8182.detachEvent(cljs.core.name.call(null,actual_type_8196),canonical_f_8199);
}

var G__8200 = seq__8166_8191;
var G__8201 = chunk__8168_8192;
var G__8202 = count__8169_8193;
var G__8203 = (i__8170_8194 + (1));
seq__8166_8191 = G__8200;
chunk__8168_8192 = G__8201;
count__8169_8193 = G__8202;
i__8170_8194 = G__8203;
continue;
} else {
var temp__4425__auto___8204 = cljs.core.seq.call(null,seq__8166_8191);
if(temp__4425__auto___8204){
var seq__8166_8205__$1 = temp__4425__auto___8204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166_8205__$1)){
var c__6945__auto___8206 = cljs.core.chunk_first.call(null,seq__8166_8205__$1);
var G__8207 = cljs.core.chunk_rest.call(null,seq__8166_8205__$1);
var G__8208 = c__6945__auto___8206;
var G__8209 = cljs.core.count.call(null,c__6945__auto___8206);
var G__8210 = (0);
seq__8166_8191 = G__8207;
chunk__8168_8192 = G__8208;
count__8169_8193 = G__8209;
i__8170_8194 = G__8210;
continue;
} else {
var vec__8174_8211 = cljs.core.first.call(null,seq__8166_8205__$1);
var actual_type_8212 = cljs.core.nth.call(null,vec__8174_8211,(0),null);
var __8213 = cljs.core.nth.call(null,vec__8174_8211,(1),null);
var keys_8214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8212,f_8190], null);
var canonical_f_8215 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8182),keys_8214);
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,dommy.utils.dissoc_in,keys_8214);

if(cljs.core.truth_(elem_8182.removeEventListener)){
elem_8182.removeEventListener(cljs.core.name.call(null,actual_type_8212),canonical_f_8215);
} else {
elem_8182.detachEvent(cljs.core.name.call(null,actual_type_8212),canonical_f_8215);
}

var G__8216 = cljs.core.next.call(null,seq__8166_8205__$1);
var G__8217 = null;
var G__8218 = (0);
var G__8219 = (0);
seq__8166_8191 = G__8216;
chunk__8168_8192 = G__8217;
count__8169_8193 = G__8218;
i__8170_8194 = G__8219;
continue;
}
} else {
}
}
break;
}

var G__8220 = seq__8156_8184;
var G__8221 = chunk__8163_8185;
var G__8222 = count__8164_8186;
var G__8223 = (i__8165_8187 + (1));
seq__8156_8184 = G__8220;
chunk__8163_8185 = G__8221;
count__8164_8186 = G__8222;
i__8165_8187 = G__8223;
continue;
} else {
var temp__4425__auto___8224 = cljs.core.seq.call(null,seq__8156_8184);
if(temp__4425__auto___8224){
var seq__8156_8225__$1 = temp__4425__auto___8224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8156_8225__$1)){
var c__6945__auto___8226 = cljs.core.chunk_first.call(null,seq__8156_8225__$1);
var G__8227 = cljs.core.chunk_rest.call(null,seq__8156_8225__$1);
var G__8228 = c__6945__auto___8226;
var G__8229 = cljs.core.count.call(null,c__6945__auto___8226);
var G__8230 = (0);
seq__8156_8184 = G__8227;
chunk__8163_8185 = G__8228;
count__8164_8186 = G__8229;
i__8165_8187 = G__8230;
continue;
} else {
var vec__8175_8231 = cljs.core.first.call(null,seq__8156_8225__$1);
var orig_type_8232 = cljs.core.nth.call(null,vec__8175_8231,(0),null);
var f_8233 = cljs.core.nth.call(null,vec__8175_8231,(1),null);
var seq__8157_8234 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8232,cljs.core.PersistentArrayMap.fromArray([orig_type_8232,cljs.core.identity], true, false)));
var chunk__8159_8235 = null;
var count__8160_8236 = (0);
var i__8161_8237 = (0);
while(true){
if((i__8161_8237 < count__8160_8236)){
var vec__8176_8238 = cljs.core._nth.call(null,chunk__8159_8235,i__8161_8237);
var actual_type_8239 = cljs.core.nth.call(null,vec__8176_8238,(0),null);
var __8240 = cljs.core.nth.call(null,vec__8176_8238,(1),null);
var keys_8241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8239,f_8233], null);
var canonical_f_8242 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8182),keys_8241);
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,dommy.utils.dissoc_in,keys_8241);

if(cljs.core.truth_(elem_8182.removeEventListener)){
elem_8182.removeEventListener(cljs.core.name.call(null,actual_type_8239),canonical_f_8242);
} else {
elem_8182.detachEvent(cljs.core.name.call(null,actual_type_8239),canonical_f_8242);
}

var G__8243 = seq__8157_8234;
var G__8244 = chunk__8159_8235;
var G__8245 = count__8160_8236;
var G__8246 = (i__8161_8237 + (1));
seq__8157_8234 = G__8243;
chunk__8159_8235 = G__8244;
count__8160_8236 = G__8245;
i__8161_8237 = G__8246;
continue;
} else {
var temp__4425__auto___8247__$1 = cljs.core.seq.call(null,seq__8157_8234);
if(temp__4425__auto___8247__$1){
var seq__8157_8248__$1 = temp__4425__auto___8247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8157_8248__$1)){
var c__6945__auto___8249 = cljs.core.chunk_first.call(null,seq__8157_8248__$1);
var G__8250 = cljs.core.chunk_rest.call(null,seq__8157_8248__$1);
var G__8251 = c__6945__auto___8249;
var G__8252 = cljs.core.count.call(null,c__6945__auto___8249);
var G__8253 = (0);
seq__8157_8234 = G__8250;
chunk__8159_8235 = G__8251;
count__8160_8236 = G__8252;
i__8161_8237 = G__8253;
continue;
} else {
var vec__8177_8254 = cljs.core.first.call(null,seq__8157_8248__$1);
var actual_type_8255 = cljs.core.nth.call(null,vec__8177_8254,(0),null);
var __8256 = cljs.core.nth.call(null,vec__8177_8254,(1),null);
var keys_8257 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8255,f_8233], null);
var canonical_f_8258 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8182),keys_8257);
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,dommy.utils.dissoc_in,keys_8257);

if(cljs.core.truth_(elem_8182.removeEventListener)){
elem_8182.removeEventListener(cljs.core.name.call(null,actual_type_8255),canonical_f_8258);
} else {
elem_8182.detachEvent(cljs.core.name.call(null,actual_type_8255),canonical_f_8258);
}

var G__8259 = cljs.core.next.call(null,seq__8157_8248__$1);
var G__8260 = null;
var G__8261 = (0);
var G__8262 = (0);
seq__8157_8234 = G__8259;
chunk__8159_8235 = G__8260;
count__8160_8236 = G__8261;
i__8161_8237 = G__8262;
continue;
}
} else {
}
}
break;
}

var G__8263 = cljs.core.next.call(null,seq__8156_8225__$1);
var G__8264 = null;
var G__8265 = (0);
var G__8266 = (0);
seq__8156_8184 = G__8263;
chunk__8163_8185 = G__8264;
count__8164_8186 = G__8265;
i__8165_8187 = G__8266;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq8153){
var G__8154 = cljs.core.first.call(null,seq8153);
var seq8153__$1 = cljs.core.next.call(null,seq8153);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8154,seq8153__$1);
});
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___8276 = arguments.length;
var i__7201__auto___8277 = (0);
while(true){
if((i__7201__auto___8277 < len__7200__auto___8276)){
args__7207__auto__.push((arguments[i__7201__auto___8277]));

var G__8278 = (i__7201__auto___8277 + (1));
i__7201__auto___8277 = G__8278;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__8269_8279 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8280 = cljs.core.nth.call(null,vec__8269_8279,(0),null);
var selector_8281 = cljs.core.nth.call(null,vec__8269_8279,(1),null);
var seq__8270_8282 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__8271_8283 = null;
var count__8272_8284 = (0);
var i__8273_8285 = (0);
while(true){
if((i__8273_8285 < count__8272_8284)){
var vec__8274_8286 = cljs.core._nth.call(null,chunk__8271_8283,i__8273_8285);
var type_8287 = cljs.core.nth.call(null,vec__8274_8286,(0),null);
var f_8288 = cljs.core.nth.call(null,vec__8274_8286,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_8287,((function (seq__8270_8282,chunk__8271_8283,count__8272_8284,i__8273_8285,vec__8274_8286,type_8287,f_8288,vec__8269_8279,elem_8280,selector_8281){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_8287,dommy$core$this_fn);

return f_8288.call(null,e);
});})(seq__8270_8282,chunk__8271_8283,count__8272_8284,i__8273_8285,vec__8274_8286,type_8287,f_8288,vec__8269_8279,elem_8280,selector_8281))
);

var G__8289 = seq__8270_8282;
var G__8290 = chunk__8271_8283;
var G__8291 = count__8272_8284;
var G__8292 = (i__8273_8285 + (1));
seq__8270_8282 = G__8289;
chunk__8271_8283 = G__8290;
count__8272_8284 = G__8291;
i__8273_8285 = G__8292;
continue;
} else {
var temp__4425__auto___8293 = cljs.core.seq.call(null,seq__8270_8282);
if(temp__4425__auto___8293){
var seq__8270_8294__$1 = temp__4425__auto___8293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8270_8294__$1)){
var c__6945__auto___8295 = cljs.core.chunk_first.call(null,seq__8270_8294__$1);
var G__8296 = cljs.core.chunk_rest.call(null,seq__8270_8294__$1);
var G__8297 = c__6945__auto___8295;
var G__8298 = cljs.core.count.call(null,c__6945__auto___8295);
var G__8299 = (0);
seq__8270_8282 = G__8296;
chunk__8271_8283 = G__8297;
count__8272_8284 = G__8298;
i__8273_8285 = G__8299;
continue;
} else {
var vec__8275_8300 = cljs.core.first.call(null,seq__8270_8294__$1);
var type_8301 = cljs.core.nth.call(null,vec__8275_8300,(0),null);
var f_8302 = cljs.core.nth.call(null,vec__8275_8300,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_8301,((function (seq__8270_8282,chunk__8271_8283,count__8272_8284,i__8273_8285,vec__8275_8300,type_8301,f_8302,seq__8270_8294__$1,temp__4425__auto___8293,vec__8269_8279,elem_8280,selector_8281){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_8301,dommy$core$this_fn);

return f_8302.call(null,e);
});})(seq__8270_8282,chunk__8271_8283,count__8272_8284,i__8273_8285,vec__8275_8300,type_8301,f_8302,seq__8270_8294__$1,temp__4425__auto___8293,vec__8269_8279,elem_8280,selector_8281))
);

var G__8303 = cljs.core.next.call(null,seq__8270_8294__$1);
var G__8304 = null;
var G__8305 = (0);
var G__8306 = (0);
seq__8270_8282 = G__8303;
chunk__8271_8283 = G__8304;
count__8272_8284 = G__8305;
i__8273_8285 = G__8306;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq8267){
var G__8268 = cljs.core.first.call(null,seq8267);
var seq8267__$1 = cljs.core.next.call(null,seq8267);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8268,seq8267__$1);
});
/**
 * NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
 * event types or their bubbling behaviours
 * 
 * Creates an event of type `event-type`, optionally having
 * `update-event!` mutate and return an updated event object,
 * and fires it on `node`.
 * Only works when `node` is in the DOM
 */
dommy.core.fire_BANG_ = (function dommy$core$fire_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___8312 = arguments.length;
var i__7201__auto___8313 = (0);
while(true){
if((i__7201__auto___8313 < len__7200__auto___8312)){
args__7207__auto__.push((arguments[i__7201__auto___8313]));

var G__8314 = (i__7201__auto___8313 + (1));
i__7201__auto___8313 = G__8314;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (node,event_type,p__8310){
var vec__8311 = p__8310;
var update_event_BANG_ = cljs.core.nth.call(null,vec__8311,(0),null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null))))].join('')));
}

var update_event_BANG___$1 = (function (){var or__6142__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent)){
var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);

return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else {
return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
});

dommy.core.fire_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.fire_BANG_.cljs$lang$applyTo = (function (seq8307){
var G__8308 = cljs.core.first.call(null,seq8307);
var seq8307__$1 = cljs.core.next.call(null,seq8307);
var G__8309 = cljs.core.first.call(null,seq8307__$1);
var seq8307__$2 = cljs.core.next.call(null,seq8307__$1);
return dommy.core.fire_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8308,G__8309,seq8307__$2);
});

//# sourceMappingURL=core.js.map