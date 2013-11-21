// Compiled by ClojureScript 0.0-2014
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3128__auto__ = elem.textContent;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__16101 = dommy.template.__GT_node_like.call(null,parent);G__16101.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16101;
});
var append_BANG___3 = (function() { 
var G__16106__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16102_16107 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16103_16108 = null;var count__16104_16109 = 0;var i__16105_16110 = 0;while(true){
if((i__16105_16110 < count__16104_16109))
{var c_16111 = cljs.core._nth.call(null,chunk__16103_16108,i__16105_16110);append_BANG_.call(null,parent__$1,c_16111);
{
var G__16112 = seq__16102_16107;
var G__16113 = chunk__16103_16108;
var G__16114 = count__16104_16109;
var G__16115 = (i__16105_16110 + 1);
seq__16102_16107 = G__16112;
chunk__16103_16108 = G__16113;
count__16104_16109 = G__16114;
i__16105_16110 = G__16115;
continue;
}
} else
{var temp__4092__auto___16116 = cljs.core.seq.call(null,seq__16102_16107);if(temp__4092__auto___16116)
{var seq__16102_16117__$1 = temp__4092__auto___16116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16102_16117__$1))
{var c__3844__auto___16118 = cljs.core.chunk_first.call(null,seq__16102_16117__$1);{
var G__16119 = cljs.core.chunk_rest.call(null,seq__16102_16117__$1);
var G__16120 = c__3844__auto___16118;
var G__16121 = cljs.core.count.call(null,c__3844__auto___16118);
var G__16122 = 0;
seq__16102_16107 = G__16119;
chunk__16103_16108 = G__16120;
count__16104_16109 = G__16121;
i__16105_16110 = G__16122;
continue;
}
} else
{var c_16123 = cljs.core.first.call(null,seq__16102_16117__$1);append_BANG_.call(null,parent__$1,c_16123);
{
var G__16124 = cljs.core.next.call(null,seq__16102_16117__$1);
var G__16125 = null;
var G__16126 = 0;
var G__16127 = 0;
seq__16102_16107 = G__16124;
chunk__16103_16108 = G__16125;
count__16104_16109 = G__16126;
i__16105_16110 = G__16127;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__16106 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16106__delegate.call(this,parent,child,more_children);};
G__16106.cljs$lang$maxFixedArity = 2;
G__16106.cljs$lang$applyTo = (function (arglist__16128){
var parent = cljs.core.first(arglist__16128);
arglist__16128 = cljs.core.next(arglist__16128);
var child = cljs.core.first(arglist__16128);
var more_children = cljs.core.rest(arglist__16128);
return G__16106__delegate(parent,child,more_children);
});
G__16106.cljs$core$IFn$_invoke$arity$variadic = G__16106__delegate;
return G__16106;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__16137__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16133_16138 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16134_16139 = null;var count__16135_16140 = 0;var i__16136_16141 = 0;while(true){
if((i__16136_16141 < count__16135_16140))
{var c_16142 = cljs.core._nth.call(null,chunk__16134_16139,i__16136_16141);prepend_BANG_.call(null,parent__$1,c_16142);
{
var G__16143 = seq__16133_16138;
var G__16144 = chunk__16134_16139;
var G__16145 = count__16135_16140;
var G__16146 = (i__16136_16141 + 1);
seq__16133_16138 = G__16143;
chunk__16134_16139 = G__16144;
count__16135_16140 = G__16145;
i__16136_16141 = G__16146;
continue;
}
} else
{var temp__4092__auto___16147 = cljs.core.seq.call(null,seq__16133_16138);if(temp__4092__auto___16147)
{var seq__16133_16148__$1 = temp__4092__auto___16147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16133_16148__$1))
{var c__3844__auto___16149 = cljs.core.chunk_first.call(null,seq__16133_16148__$1);{
var G__16150 = cljs.core.chunk_rest.call(null,seq__16133_16148__$1);
var G__16151 = c__3844__auto___16149;
var G__16152 = cljs.core.count.call(null,c__3844__auto___16149);
var G__16153 = 0;
seq__16133_16138 = G__16150;
chunk__16134_16139 = G__16151;
count__16135_16140 = G__16152;
i__16136_16141 = G__16153;
continue;
}
} else
{var c_16154 = cljs.core.first.call(null,seq__16133_16148__$1);prepend_BANG_.call(null,parent__$1,c_16154);
{
var G__16155 = cljs.core.next.call(null,seq__16133_16148__$1);
var G__16156 = null;
var G__16157 = 0;
var G__16158 = 0;
seq__16133_16138 = G__16155;
chunk__16134_16139 = G__16156;
count__16135_16140 = G__16157;
i__16136_16141 = G__16158;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__16137 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16137__delegate.call(this,parent,child,more_children);};
G__16137.cljs$lang$maxFixedArity = 2;
G__16137.cljs$lang$applyTo = (function (arglist__16159){
var parent = cljs.core.first(arglist__16159);
arglist__16159 = cljs.core.next(arglist__16159);
var child = cljs.core.first(arglist__16159);
var more_children = cljs.core.rest(arglist__16159);
return G__16137__delegate(parent,child,more_children);
});
G__16137.cljs$core$IFn$_invoke$arity$variadic = G__16137__delegate;
return G__16137;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16160 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16160))
{var next_16161 = temp__4090__auto___16160;parent.insertBefore(actual_node,next_16161);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16163 = dommy.template.__GT_node_like.call(null,parent);G__16163.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16163,node_like);
return G__16163;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16165 = elem__$1.parentNode;G__16165.removeChild(elem__$1);
return G__16165;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16171){var vec__16172 = p__16171;var k = cljs.core.nth.call(null,vec__16172,0,null);var v = cljs.core.nth.call(null,vec__16172,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16173 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16173 = (function (v,k,vec__16172,p__16171,container,key_selectors_map,template,selector_map,meta16174){
this.v = v;
this.k = k;
this.vec__16172 = vec__16172;
this.p__16171 = p__16171;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16174 = meta16174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16173.cljs$lang$type = true;
dommy.core.t16173.cljs$lang$ctorStr = "dommy.core/t16173";
dommy.core.t16173.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t16173");
});
dommy.core.t16173.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16175){var self__ = this;
var _16175__$1 = this;return self__.meta16174;
});
dommy.core.t16173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16175,meta16174__$1){var self__ = this;
var _16175__$1 = this;return (new dommy.core.t16173(self__.v,self__.k,self__.vec__16172,self__.p__16171,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16174__$1));
});
dommy.core.__GT_t16173 = (function __GT_t16173(v__$1,k__$1,vec__16172__$1,p__16171__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16174){return (new dommy.core.t16173(v__$1,k__$1,vec__16172__$1,p__16171__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16174));
});
}
return (new dommy.core.t16173(v,k,vec__16172,p__16171,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16176_SHARP_){return p1__16176_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16177_SHARP_){return !((p1__16177_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16178){var vec__16179 = p__16178;var special_mouse_event = cljs.core.nth.call(null,vec__16179,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16179,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3119__auto__ = related_target;if(cljs.core.truth_(and__3119__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3119__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true)], true);
}),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], true)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3119__auto__ = selected_target;if(cljs.core.truth_(and__3119__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3119__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3128__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16180){
var elem = cljs.core.first(arglist__16180);
arglist__16180 = cljs.core.next(arglist__16180);
var f = cljs.core.first(arglist__16180);
var args = cljs.core.rest(arglist__16180);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16181_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16181_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return cljs.core.PersistentVector.fromArray([dommy.template.__GT_node_like.call(null,elem_sel),null], true);
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
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16205_16228 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16229 = cljs.core.nth.call(null,vec__16205_16228,0,null);var selector_16230 = cljs.core.nth.call(null,vec__16205_16228,1,null);var seq__16206_16231 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16213_16232 = null;var count__16214_16233 = 0;var i__16215_16234 = 0;while(true){
if((i__16215_16234 < count__16214_16233))
{var vec__16222_16235 = cljs.core._nth.call(null,chunk__16213_16232,i__16215_16234);var orig_type_16236 = cljs.core.nth.call(null,vec__16222_16235,0,null);var f_16237 = cljs.core.nth.call(null,vec__16222_16235,1,null);var seq__16216_16238 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16236,cljs.core.PersistentArrayMap.fromArray([orig_type_16236,cljs.core.identity], true)));var chunk__16218_16239 = null;var count__16219_16240 = 0;var i__16220_16241 = 0;while(true){
if((i__16220_16241 < count__16219_16240))
{var vec__16223_16242 = cljs.core._nth.call(null,chunk__16218_16239,i__16220_16241);var actual_type_16243 = cljs.core.nth.call(null,vec__16223_16242,0,null);var factory_16244 = cljs.core.nth.call(null,vec__16223_16242,1,null);var canonical_f_16245 = (cljs.core.truth_(selector_16230)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16229,selector_16230):cljs.core.identity).call(null,factory_16244.call(null,f_16237));dommy.core.update_event_listeners_BANG_.call(null,elem_16229,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16230,actual_type_16243,f_16237], true),canonical_f_16245);
if(cljs.core.truth_(elem_16229.addEventListener))
{elem_16229.addEventListener(cljs.core.name.call(null,actual_type_16243),canonical_f_16245);
} else
{elem_16229.attachEvent(cljs.core.name.call(null,actual_type_16243),canonical_f_16245);
}
{
var G__16246 = seq__16216_16238;
var G__16247 = chunk__16218_16239;
var G__16248 = count__16219_16240;
var G__16249 = (i__16220_16241 + 1);
seq__16216_16238 = G__16246;
chunk__16218_16239 = G__16247;
count__16219_16240 = G__16248;
i__16220_16241 = G__16249;
continue;
}
} else
{var temp__4092__auto___16250 = cljs.core.seq.call(null,seq__16216_16238);if(temp__4092__auto___16250)
{var seq__16216_16251__$1 = temp__4092__auto___16250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16216_16251__$1))
{var c__3844__auto___16252 = cljs.core.chunk_first.call(null,seq__16216_16251__$1);{
var G__16253 = cljs.core.chunk_rest.call(null,seq__16216_16251__$1);
var G__16254 = c__3844__auto___16252;
var G__16255 = cljs.core.count.call(null,c__3844__auto___16252);
var G__16256 = 0;
seq__16216_16238 = G__16253;
chunk__16218_16239 = G__16254;
count__16219_16240 = G__16255;
i__16220_16241 = G__16256;
continue;
}
} else
{var vec__16224_16257 = cljs.core.first.call(null,seq__16216_16251__$1);var actual_type_16258 = cljs.core.nth.call(null,vec__16224_16257,0,null);var factory_16259 = cljs.core.nth.call(null,vec__16224_16257,1,null);var canonical_f_16260 = (cljs.core.truth_(selector_16230)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16229,selector_16230):cljs.core.identity).call(null,factory_16259.call(null,f_16237));dommy.core.update_event_listeners_BANG_.call(null,elem_16229,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16230,actual_type_16258,f_16237], true),canonical_f_16260);
if(cljs.core.truth_(elem_16229.addEventListener))
{elem_16229.addEventListener(cljs.core.name.call(null,actual_type_16258),canonical_f_16260);
} else
{elem_16229.attachEvent(cljs.core.name.call(null,actual_type_16258),canonical_f_16260);
}
{
var G__16261 = cljs.core.next.call(null,seq__16216_16251__$1);
var G__16262 = null;
var G__16263 = 0;
var G__16264 = 0;
seq__16216_16238 = G__16261;
chunk__16218_16239 = G__16262;
count__16219_16240 = G__16263;
i__16220_16241 = G__16264;
continue;
}
}
} else
{}
}
break;
}
{
var G__16265 = seq__16206_16231;
var G__16266 = chunk__16213_16232;
var G__16267 = count__16214_16233;
var G__16268 = (i__16215_16234 + 1);
seq__16206_16231 = G__16265;
chunk__16213_16232 = G__16266;
count__16214_16233 = G__16267;
i__16215_16234 = G__16268;
continue;
}
} else
{var temp__4092__auto___16269 = cljs.core.seq.call(null,seq__16206_16231);if(temp__4092__auto___16269)
{var seq__16206_16270__$1 = temp__4092__auto___16269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16206_16270__$1))
{var c__3844__auto___16271 = cljs.core.chunk_first.call(null,seq__16206_16270__$1);{
var G__16272 = cljs.core.chunk_rest.call(null,seq__16206_16270__$1);
var G__16273 = c__3844__auto___16271;
var G__16274 = cljs.core.count.call(null,c__3844__auto___16271);
var G__16275 = 0;
seq__16206_16231 = G__16272;
chunk__16213_16232 = G__16273;
count__16214_16233 = G__16274;
i__16215_16234 = G__16275;
continue;
}
} else
{var vec__16225_16276 = cljs.core.first.call(null,seq__16206_16270__$1);var orig_type_16277 = cljs.core.nth.call(null,vec__16225_16276,0,null);var f_16278 = cljs.core.nth.call(null,vec__16225_16276,1,null);var seq__16207_16279 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16277,cljs.core.PersistentArrayMap.fromArray([orig_type_16277,cljs.core.identity], true)));var chunk__16209_16280 = null;var count__16210_16281 = 0;var i__16211_16282 = 0;while(true){
if((i__16211_16282 < count__16210_16281))
{var vec__16226_16283 = cljs.core._nth.call(null,chunk__16209_16280,i__16211_16282);var actual_type_16284 = cljs.core.nth.call(null,vec__16226_16283,0,null);var factory_16285 = cljs.core.nth.call(null,vec__16226_16283,1,null);var canonical_f_16286 = (cljs.core.truth_(selector_16230)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16229,selector_16230):cljs.core.identity).call(null,factory_16285.call(null,f_16278));dommy.core.update_event_listeners_BANG_.call(null,elem_16229,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16230,actual_type_16284,f_16278], true),canonical_f_16286);
if(cljs.core.truth_(elem_16229.addEventListener))
{elem_16229.addEventListener(cljs.core.name.call(null,actual_type_16284),canonical_f_16286);
} else
{elem_16229.attachEvent(cljs.core.name.call(null,actual_type_16284),canonical_f_16286);
}
{
var G__16287 = seq__16207_16279;
var G__16288 = chunk__16209_16280;
var G__16289 = count__16210_16281;
var G__16290 = (i__16211_16282 + 1);
seq__16207_16279 = G__16287;
chunk__16209_16280 = G__16288;
count__16210_16281 = G__16289;
i__16211_16282 = G__16290;
continue;
}
} else
{var temp__4092__auto___16291__$1 = cljs.core.seq.call(null,seq__16207_16279);if(temp__4092__auto___16291__$1)
{var seq__16207_16292__$1 = temp__4092__auto___16291__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16207_16292__$1))
{var c__3844__auto___16293 = cljs.core.chunk_first.call(null,seq__16207_16292__$1);{
var G__16294 = cljs.core.chunk_rest.call(null,seq__16207_16292__$1);
var G__16295 = c__3844__auto___16293;
var G__16296 = cljs.core.count.call(null,c__3844__auto___16293);
var G__16297 = 0;
seq__16207_16279 = G__16294;
chunk__16209_16280 = G__16295;
count__16210_16281 = G__16296;
i__16211_16282 = G__16297;
continue;
}
} else
{var vec__16227_16298 = cljs.core.first.call(null,seq__16207_16292__$1);var actual_type_16299 = cljs.core.nth.call(null,vec__16227_16298,0,null);var factory_16300 = cljs.core.nth.call(null,vec__16227_16298,1,null);var canonical_f_16301 = (cljs.core.truth_(selector_16230)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16229,selector_16230):cljs.core.identity).call(null,factory_16300.call(null,f_16278));dommy.core.update_event_listeners_BANG_.call(null,elem_16229,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16230,actual_type_16299,f_16278], true),canonical_f_16301);
if(cljs.core.truth_(elem_16229.addEventListener))
{elem_16229.addEventListener(cljs.core.name.call(null,actual_type_16299),canonical_f_16301);
} else
{elem_16229.attachEvent(cljs.core.name.call(null,actual_type_16299),canonical_f_16301);
}
{
var G__16302 = cljs.core.next.call(null,seq__16207_16292__$1);
var G__16303 = null;
var G__16304 = 0;
var G__16305 = 0;
seq__16207_16279 = G__16302;
chunk__16209_16280 = G__16303;
count__16210_16281 = G__16304;
i__16211_16282 = G__16305;
continue;
}
}
} else
{}
}
break;
}
{
var G__16306 = cljs.core.next.call(null,seq__16206_16270__$1);
var G__16307 = null;
var G__16308 = 0;
var G__16309 = 0;
seq__16206_16231 = G__16306;
chunk__16213_16232 = G__16307;
count__16214_16233 = G__16308;
i__16215_16234 = G__16309;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__16310){
var elem_sel = cljs.core.first(arglist__16310);
var type_fs = cljs.core.rest(arglist__16310);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16334_16357 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16358 = cljs.core.nth.call(null,vec__16334_16357,0,null);var selector_16359 = cljs.core.nth.call(null,vec__16334_16357,1,null);var seq__16335_16360 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16342_16361 = null;var count__16343_16362 = 0;var i__16344_16363 = 0;while(true){
if((i__16344_16363 < count__16343_16362))
{var vec__16351_16364 = cljs.core._nth.call(null,chunk__16342_16361,i__16344_16363);var orig_type_16365 = cljs.core.nth.call(null,vec__16351_16364,0,null);var f_16366 = cljs.core.nth.call(null,vec__16351_16364,1,null);var seq__16345_16367 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16365,cljs.core.PersistentArrayMap.fromArray([orig_type_16365,cljs.core.identity], true)));var chunk__16347_16368 = null;var count__16348_16369 = 0;var i__16349_16370 = 0;while(true){
if((i__16349_16370 < count__16348_16369))
{var vec__16352_16371 = cljs.core._nth.call(null,chunk__16347_16368,i__16349_16370);var actual_type_16372 = cljs.core.nth.call(null,vec__16352_16371,0,null);var __16373 = cljs.core.nth.call(null,vec__16352_16371,1,null);var keys_16374 = cljs.core.PersistentVector.fromArray([selector_16359,actual_type_16372,f_16366], true);var canonical_f_16375 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16358),keys_16374);dommy.core.update_event_listeners_BANG_.call(null,elem_16358,dommy.utils.dissoc_in,keys_16374);
if(cljs.core.truth_(elem_16358.removeEventListener))
{elem_16358.removeEventListener(cljs.core.name.call(null,actual_type_16372),canonical_f_16375);
} else
{elem_16358.detachEvent(cljs.core.name.call(null,actual_type_16372),canonical_f_16375);
}
{
var G__16376 = seq__16345_16367;
var G__16377 = chunk__16347_16368;
var G__16378 = count__16348_16369;
var G__16379 = (i__16349_16370 + 1);
seq__16345_16367 = G__16376;
chunk__16347_16368 = G__16377;
count__16348_16369 = G__16378;
i__16349_16370 = G__16379;
continue;
}
} else
{var temp__4092__auto___16380 = cljs.core.seq.call(null,seq__16345_16367);if(temp__4092__auto___16380)
{var seq__16345_16381__$1 = temp__4092__auto___16380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16345_16381__$1))
{var c__3844__auto___16382 = cljs.core.chunk_first.call(null,seq__16345_16381__$1);{
var G__16383 = cljs.core.chunk_rest.call(null,seq__16345_16381__$1);
var G__16384 = c__3844__auto___16382;
var G__16385 = cljs.core.count.call(null,c__3844__auto___16382);
var G__16386 = 0;
seq__16345_16367 = G__16383;
chunk__16347_16368 = G__16384;
count__16348_16369 = G__16385;
i__16349_16370 = G__16386;
continue;
}
} else
{var vec__16353_16387 = cljs.core.first.call(null,seq__16345_16381__$1);var actual_type_16388 = cljs.core.nth.call(null,vec__16353_16387,0,null);var __16389 = cljs.core.nth.call(null,vec__16353_16387,1,null);var keys_16390 = cljs.core.PersistentVector.fromArray([selector_16359,actual_type_16388,f_16366], true);var canonical_f_16391 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16358),keys_16390);dommy.core.update_event_listeners_BANG_.call(null,elem_16358,dommy.utils.dissoc_in,keys_16390);
if(cljs.core.truth_(elem_16358.removeEventListener))
{elem_16358.removeEventListener(cljs.core.name.call(null,actual_type_16388),canonical_f_16391);
} else
{elem_16358.detachEvent(cljs.core.name.call(null,actual_type_16388),canonical_f_16391);
}
{
var G__16392 = cljs.core.next.call(null,seq__16345_16381__$1);
var G__16393 = null;
var G__16394 = 0;
var G__16395 = 0;
seq__16345_16367 = G__16392;
chunk__16347_16368 = G__16393;
count__16348_16369 = G__16394;
i__16349_16370 = G__16395;
continue;
}
}
} else
{}
}
break;
}
{
var G__16396 = seq__16335_16360;
var G__16397 = chunk__16342_16361;
var G__16398 = count__16343_16362;
var G__16399 = (i__16344_16363 + 1);
seq__16335_16360 = G__16396;
chunk__16342_16361 = G__16397;
count__16343_16362 = G__16398;
i__16344_16363 = G__16399;
continue;
}
} else
{var temp__4092__auto___16400 = cljs.core.seq.call(null,seq__16335_16360);if(temp__4092__auto___16400)
{var seq__16335_16401__$1 = temp__4092__auto___16400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16335_16401__$1))
{var c__3844__auto___16402 = cljs.core.chunk_first.call(null,seq__16335_16401__$1);{
var G__16403 = cljs.core.chunk_rest.call(null,seq__16335_16401__$1);
var G__16404 = c__3844__auto___16402;
var G__16405 = cljs.core.count.call(null,c__3844__auto___16402);
var G__16406 = 0;
seq__16335_16360 = G__16403;
chunk__16342_16361 = G__16404;
count__16343_16362 = G__16405;
i__16344_16363 = G__16406;
continue;
}
} else
{var vec__16354_16407 = cljs.core.first.call(null,seq__16335_16401__$1);var orig_type_16408 = cljs.core.nth.call(null,vec__16354_16407,0,null);var f_16409 = cljs.core.nth.call(null,vec__16354_16407,1,null);var seq__16336_16410 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16408,cljs.core.PersistentArrayMap.fromArray([orig_type_16408,cljs.core.identity], true)));var chunk__16338_16411 = null;var count__16339_16412 = 0;var i__16340_16413 = 0;while(true){
if((i__16340_16413 < count__16339_16412))
{var vec__16355_16414 = cljs.core._nth.call(null,chunk__16338_16411,i__16340_16413);var actual_type_16415 = cljs.core.nth.call(null,vec__16355_16414,0,null);var __16416 = cljs.core.nth.call(null,vec__16355_16414,1,null);var keys_16417 = cljs.core.PersistentVector.fromArray([selector_16359,actual_type_16415,f_16409], true);var canonical_f_16418 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16358),keys_16417);dommy.core.update_event_listeners_BANG_.call(null,elem_16358,dommy.utils.dissoc_in,keys_16417);
if(cljs.core.truth_(elem_16358.removeEventListener))
{elem_16358.removeEventListener(cljs.core.name.call(null,actual_type_16415),canonical_f_16418);
} else
{elem_16358.detachEvent(cljs.core.name.call(null,actual_type_16415),canonical_f_16418);
}
{
var G__16419 = seq__16336_16410;
var G__16420 = chunk__16338_16411;
var G__16421 = count__16339_16412;
var G__16422 = (i__16340_16413 + 1);
seq__16336_16410 = G__16419;
chunk__16338_16411 = G__16420;
count__16339_16412 = G__16421;
i__16340_16413 = G__16422;
continue;
}
} else
{var temp__4092__auto___16423__$1 = cljs.core.seq.call(null,seq__16336_16410);if(temp__4092__auto___16423__$1)
{var seq__16336_16424__$1 = temp__4092__auto___16423__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16336_16424__$1))
{var c__3844__auto___16425 = cljs.core.chunk_first.call(null,seq__16336_16424__$1);{
var G__16426 = cljs.core.chunk_rest.call(null,seq__16336_16424__$1);
var G__16427 = c__3844__auto___16425;
var G__16428 = cljs.core.count.call(null,c__3844__auto___16425);
var G__16429 = 0;
seq__16336_16410 = G__16426;
chunk__16338_16411 = G__16427;
count__16339_16412 = G__16428;
i__16340_16413 = G__16429;
continue;
}
} else
{var vec__16356_16430 = cljs.core.first.call(null,seq__16336_16424__$1);var actual_type_16431 = cljs.core.nth.call(null,vec__16356_16430,0,null);var __16432 = cljs.core.nth.call(null,vec__16356_16430,1,null);var keys_16433 = cljs.core.PersistentVector.fromArray([selector_16359,actual_type_16431,f_16409], true);var canonical_f_16434 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16358),keys_16433);dommy.core.update_event_listeners_BANG_.call(null,elem_16358,dommy.utils.dissoc_in,keys_16433);
if(cljs.core.truth_(elem_16358.removeEventListener))
{elem_16358.removeEventListener(cljs.core.name.call(null,actual_type_16431),canonical_f_16434);
} else
{elem_16358.detachEvent(cljs.core.name.call(null,actual_type_16431),canonical_f_16434);
}
{
var G__16435 = cljs.core.next.call(null,seq__16336_16424__$1);
var G__16436 = null;
var G__16437 = 0;
var G__16438 = 0;
seq__16336_16410 = G__16435;
chunk__16338_16411 = G__16436;
count__16339_16412 = G__16437;
i__16340_16413 = G__16438;
continue;
}
}
} else
{}
}
break;
}
{
var G__16439 = cljs.core.next.call(null,seq__16335_16401__$1);
var G__16440 = null;
var G__16441 = 0;
var G__16442 = 0;
seq__16335_16360 = G__16439;
chunk__16342_16361 = G__16440;
count__16343_16362 = G__16441;
i__16344_16363 = G__16442;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16443){
var elem_sel = cljs.core.first(arglist__16443);
var type_fs = cljs.core.rest(arglist__16443);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16451_16458 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16459 = cljs.core.nth.call(null,vec__16451_16458,0,null);var selector_16460 = cljs.core.nth.call(null,vec__16451_16458,1,null);var seq__16452_16461 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16453_16462 = null;var count__16454_16463 = 0;var i__16455_16464 = 0;while(true){
if((i__16455_16464 < count__16454_16463))
{var vec__16456_16465 = cljs.core._nth.call(null,chunk__16453_16462,i__16455_16464);var type_16466 = cljs.core.nth.call(null,vec__16456_16465,0,null);var f_16467 = cljs.core.nth.call(null,vec__16456_16465,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16466,((function (seq__16452_16461,chunk__16453_16462,count__16454_16463,i__16455_16464,vec__16456_16465,type_16466,f_16467){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16466,this_fn);
return f_16467.call(null,e);
});})(seq__16452_16461,chunk__16453_16462,count__16454_16463,i__16455_16464,vec__16456_16465,type_16466,f_16467))
);
{
var G__16468 = seq__16452_16461;
var G__16469 = chunk__16453_16462;
var G__16470 = count__16454_16463;
var G__16471 = (i__16455_16464 + 1);
seq__16452_16461 = G__16468;
chunk__16453_16462 = G__16469;
count__16454_16463 = G__16470;
i__16455_16464 = G__16471;
continue;
}
} else
{var temp__4092__auto___16472 = cljs.core.seq.call(null,seq__16452_16461);if(temp__4092__auto___16472)
{var seq__16452_16473__$1 = temp__4092__auto___16472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16452_16473__$1))
{var c__3844__auto___16474 = cljs.core.chunk_first.call(null,seq__16452_16473__$1);{
var G__16475 = cljs.core.chunk_rest.call(null,seq__16452_16473__$1);
var G__16476 = c__3844__auto___16474;
var G__16477 = cljs.core.count.call(null,c__3844__auto___16474);
var G__16478 = 0;
seq__16452_16461 = G__16475;
chunk__16453_16462 = G__16476;
count__16454_16463 = G__16477;
i__16455_16464 = G__16478;
continue;
}
} else
{var vec__16457_16479 = cljs.core.first.call(null,seq__16452_16473__$1);var type_16480 = cljs.core.nth.call(null,vec__16457_16479,0,null);var f_16481 = cljs.core.nth.call(null,vec__16457_16479,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16480,((function (seq__16452_16461,chunk__16453_16462,count__16454_16463,i__16455_16464,vec__16457_16479,type_16480,f_16481,seq__16452_16473__$1,temp__4092__auto___16472){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16480,this_fn);
return f_16481.call(null,e);
});})(seq__16452_16461,chunk__16453_16462,count__16454_16463,i__16455_16464,vec__16457_16479,type_16480,f_16481,seq__16452_16473__$1,temp__4092__auto___16472))
);
{
var G__16482 = cljs.core.next.call(null,seq__16452_16473__$1);
var G__16483 = null;
var G__16484 = 0;
var G__16485 = 0;
seq__16452_16461 = G__16482;
chunk__16453_16462 = G__16483;
count__16454_16463 = G__16484;
i__16455_16464 = G__16485;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16486){
var elem_sel = cljs.core.first(arglist__16486);
var type_fs = cljs.core.rest(arglist__16486);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__16487){var vec__16489 = p__16487;var update_event_BANG_ = cljs.core.nth.call(null,vec__16489,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3128__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__16487 = null;if (arguments.length > 2) {
  p__16487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16487);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16490){
var node = cljs.core.first(arglist__16490);
arglist__16490 = cljs.core.next(arglist__16490);
var event_type = cljs.core.first(arglist__16490);
var p__16487 = cljs.core.rest(arglist__16490);
return fire_BANG___delegate(node,event_type,p__16487);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map