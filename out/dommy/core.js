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
var append_BANG___2 = (function (parent,child){var G__16058 = dommy.template.__GT_node_like.call(null,parent);G__16058.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16058;
});
var append_BANG___3 = (function() { 
var G__16063__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16059_16064 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16060_16065 = null;var count__16061_16066 = 0;var i__16062_16067 = 0;while(true){
if((i__16062_16067 < count__16061_16066))
{var c_16068 = cljs.core._nth.call(null,chunk__16060_16065,i__16062_16067);append_BANG_.call(null,parent__$1,c_16068);
{
var G__16069 = seq__16059_16064;
var G__16070 = chunk__16060_16065;
var G__16071 = count__16061_16066;
var G__16072 = (i__16062_16067 + 1);
seq__16059_16064 = G__16069;
chunk__16060_16065 = G__16070;
count__16061_16066 = G__16071;
i__16062_16067 = G__16072;
continue;
}
} else
{var temp__4092__auto___16073 = cljs.core.seq.call(null,seq__16059_16064);if(temp__4092__auto___16073)
{var seq__16059_16074__$1 = temp__4092__auto___16073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16059_16074__$1))
{var c__3844__auto___16075 = cljs.core.chunk_first.call(null,seq__16059_16074__$1);{
var G__16076 = cljs.core.chunk_rest.call(null,seq__16059_16074__$1);
var G__16077 = c__3844__auto___16075;
var G__16078 = cljs.core.count.call(null,c__3844__auto___16075);
var G__16079 = 0;
seq__16059_16064 = G__16076;
chunk__16060_16065 = G__16077;
count__16061_16066 = G__16078;
i__16062_16067 = G__16079;
continue;
}
} else
{var c_16080 = cljs.core.first.call(null,seq__16059_16074__$1);append_BANG_.call(null,parent__$1,c_16080);
{
var G__16081 = cljs.core.next.call(null,seq__16059_16074__$1);
var G__16082 = null;
var G__16083 = 0;
var G__16084 = 0;
seq__16059_16064 = G__16081;
chunk__16060_16065 = G__16082;
count__16061_16066 = G__16083;
i__16062_16067 = G__16084;
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
var G__16063 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16063__delegate.call(this,parent,child,more_children);};
G__16063.cljs$lang$maxFixedArity = 2;
G__16063.cljs$lang$applyTo = (function (arglist__16085){
var parent = cljs.core.first(arglist__16085);
arglist__16085 = cljs.core.next(arglist__16085);
var child = cljs.core.first(arglist__16085);
var more_children = cljs.core.rest(arglist__16085);
return G__16063__delegate(parent,child,more_children);
});
G__16063.cljs$core$IFn$_invoke$arity$variadic = G__16063__delegate;
return G__16063;
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
var G__16094__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16090_16095 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16091_16096 = null;var count__16092_16097 = 0;var i__16093_16098 = 0;while(true){
if((i__16093_16098 < count__16092_16097))
{var c_16099 = cljs.core._nth.call(null,chunk__16091_16096,i__16093_16098);prepend_BANG_.call(null,parent__$1,c_16099);
{
var G__16100 = seq__16090_16095;
var G__16101 = chunk__16091_16096;
var G__16102 = count__16092_16097;
var G__16103 = (i__16093_16098 + 1);
seq__16090_16095 = G__16100;
chunk__16091_16096 = G__16101;
count__16092_16097 = G__16102;
i__16093_16098 = G__16103;
continue;
}
} else
{var temp__4092__auto___16104 = cljs.core.seq.call(null,seq__16090_16095);if(temp__4092__auto___16104)
{var seq__16090_16105__$1 = temp__4092__auto___16104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16090_16105__$1))
{var c__3844__auto___16106 = cljs.core.chunk_first.call(null,seq__16090_16105__$1);{
var G__16107 = cljs.core.chunk_rest.call(null,seq__16090_16105__$1);
var G__16108 = c__3844__auto___16106;
var G__16109 = cljs.core.count.call(null,c__3844__auto___16106);
var G__16110 = 0;
seq__16090_16095 = G__16107;
chunk__16091_16096 = G__16108;
count__16092_16097 = G__16109;
i__16093_16098 = G__16110;
continue;
}
} else
{var c_16111 = cljs.core.first.call(null,seq__16090_16105__$1);prepend_BANG_.call(null,parent__$1,c_16111);
{
var G__16112 = cljs.core.next.call(null,seq__16090_16105__$1);
var G__16113 = null;
var G__16114 = 0;
var G__16115 = 0;
seq__16090_16095 = G__16112;
chunk__16091_16096 = G__16113;
count__16092_16097 = G__16114;
i__16093_16098 = G__16115;
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
var G__16094 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16094__delegate.call(this,parent,child,more_children);};
G__16094.cljs$lang$maxFixedArity = 2;
G__16094.cljs$lang$applyTo = (function (arglist__16116){
var parent = cljs.core.first(arglist__16116);
arglist__16116 = cljs.core.next(arglist__16116);
var child = cljs.core.first(arglist__16116);
var more_children = cljs.core.rest(arglist__16116);
return G__16094__delegate(parent,child,more_children);
});
G__16094.cljs$core$IFn$_invoke$arity$variadic = G__16094__delegate;
return G__16094;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16117 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16117))
{var next_16118 = temp__4090__auto___16117;parent.insertBefore(actual_node,next_16118);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16120 = dommy.template.__GT_node_like.call(null,parent);G__16120.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16120,node_like);
return G__16120;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16122 = elem__$1.parentNode;G__16122.removeChild(elem__$1);
return G__16122;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16128){var vec__16129 = p__16128;var k = cljs.core.nth.call(null,vec__16129,0,null);var v = cljs.core.nth.call(null,vec__16129,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16130 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16130 = (function (v,k,vec__16129,p__16128,container,key_selectors_map,template,selector_map,meta16131){
this.v = v;
this.k = k;
this.vec__16129 = vec__16129;
this.p__16128 = p__16128;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16130.cljs$lang$type = true;
dommy.core.t16130.cljs$lang$ctorStr = "dommy.core/t16130";
dommy.core.t16130.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t16130");
});
dommy.core.t16130.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){var self__ = this;
var _16132__$1 = this;return self__.meta16131;
});
dommy.core.t16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){var self__ = this;
var _16132__$1 = this;return (new dommy.core.t16130(self__.v,self__.k,self__.vec__16129,self__.p__16128,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16131__$1));
});
dommy.core.__GT_t16130 = (function __GT_t16130(v__$1,k__$1,vec__16129__$1,p__16128__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16131){return (new dommy.core.t16130(v__$1,k__$1,vec__16129__$1,p__16128__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16131));
});
}
return (new dommy.core.t16130(v,k,vec__16129,p__16128,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16133_SHARP_){return p1__16133_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16134_SHARP_){return !((p1__16134_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16135){var vec__16136 = p__16135;var special_mouse_event = cljs.core.nth.call(null,vec__16136,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16136,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16137){
var elem = cljs.core.first(arglist__16137);
arglist__16137 = cljs.core.next(arglist__16137);
var f = cljs.core.first(arglist__16137);
var args = cljs.core.rest(arglist__16137);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16138_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16138_SHARP_));
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
var vec__16162_16185 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16186 = cljs.core.nth.call(null,vec__16162_16185,0,null);var selector_16187 = cljs.core.nth.call(null,vec__16162_16185,1,null);var seq__16163_16188 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16170_16189 = null;var count__16171_16190 = 0;var i__16172_16191 = 0;while(true){
if((i__16172_16191 < count__16171_16190))
{var vec__16179_16192 = cljs.core._nth.call(null,chunk__16170_16189,i__16172_16191);var orig_type_16193 = cljs.core.nth.call(null,vec__16179_16192,0,null);var f_16194 = cljs.core.nth.call(null,vec__16179_16192,1,null);var seq__16173_16195 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16193,cljs.core.PersistentArrayMap.fromArray([orig_type_16193,cljs.core.identity], true)));var chunk__16175_16196 = null;var count__16176_16197 = 0;var i__16177_16198 = 0;while(true){
if((i__16177_16198 < count__16176_16197))
{var vec__16180_16199 = cljs.core._nth.call(null,chunk__16175_16196,i__16177_16198);var actual_type_16200 = cljs.core.nth.call(null,vec__16180_16199,0,null);var factory_16201 = cljs.core.nth.call(null,vec__16180_16199,1,null);var canonical_f_16202 = (cljs.core.truth_(selector_16187)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16186,selector_16187):cljs.core.identity).call(null,factory_16201.call(null,f_16194));dommy.core.update_event_listeners_BANG_.call(null,elem_16186,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16187,actual_type_16200,f_16194], true),canonical_f_16202);
if(cljs.core.truth_(elem_16186.addEventListener))
{elem_16186.addEventListener(cljs.core.name.call(null,actual_type_16200),canonical_f_16202);
} else
{elem_16186.attachEvent(cljs.core.name.call(null,actual_type_16200),canonical_f_16202);
}
{
var G__16203 = seq__16173_16195;
var G__16204 = chunk__16175_16196;
var G__16205 = count__16176_16197;
var G__16206 = (i__16177_16198 + 1);
seq__16173_16195 = G__16203;
chunk__16175_16196 = G__16204;
count__16176_16197 = G__16205;
i__16177_16198 = G__16206;
continue;
}
} else
{var temp__4092__auto___16207 = cljs.core.seq.call(null,seq__16173_16195);if(temp__4092__auto___16207)
{var seq__16173_16208__$1 = temp__4092__auto___16207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16173_16208__$1))
{var c__3844__auto___16209 = cljs.core.chunk_first.call(null,seq__16173_16208__$1);{
var G__16210 = cljs.core.chunk_rest.call(null,seq__16173_16208__$1);
var G__16211 = c__3844__auto___16209;
var G__16212 = cljs.core.count.call(null,c__3844__auto___16209);
var G__16213 = 0;
seq__16173_16195 = G__16210;
chunk__16175_16196 = G__16211;
count__16176_16197 = G__16212;
i__16177_16198 = G__16213;
continue;
}
} else
{var vec__16181_16214 = cljs.core.first.call(null,seq__16173_16208__$1);var actual_type_16215 = cljs.core.nth.call(null,vec__16181_16214,0,null);var factory_16216 = cljs.core.nth.call(null,vec__16181_16214,1,null);var canonical_f_16217 = (cljs.core.truth_(selector_16187)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16186,selector_16187):cljs.core.identity).call(null,factory_16216.call(null,f_16194));dommy.core.update_event_listeners_BANG_.call(null,elem_16186,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16187,actual_type_16215,f_16194], true),canonical_f_16217);
if(cljs.core.truth_(elem_16186.addEventListener))
{elem_16186.addEventListener(cljs.core.name.call(null,actual_type_16215),canonical_f_16217);
} else
{elem_16186.attachEvent(cljs.core.name.call(null,actual_type_16215),canonical_f_16217);
}
{
var G__16218 = cljs.core.next.call(null,seq__16173_16208__$1);
var G__16219 = null;
var G__16220 = 0;
var G__16221 = 0;
seq__16173_16195 = G__16218;
chunk__16175_16196 = G__16219;
count__16176_16197 = G__16220;
i__16177_16198 = G__16221;
continue;
}
}
} else
{}
}
break;
}
{
var G__16222 = seq__16163_16188;
var G__16223 = chunk__16170_16189;
var G__16224 = count__16171_16190;
var G__16225 = (i__16172_16191 + 1);
seq__16163_16188 = G__16222;
chunk__16170_16189 = G__16223;
count__16171_16190 = G__16224;
i__16172_16191 = G__16225;
continue;
}
} else
{var temp__4092__auto___16226 = cljs.core.seq.call(null,seq__16163_16188);if(temp__4092__auto___16226)
{var seq__16163_16227__$1 = temp__4092__auto___16226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16163_16227__$1))
{var c__3844__auto___16228 = cljs.core.chunk_first.call(null,seq__16163_16227__$1);{
var G__16229 = cljs.core.chunk_rest.call(null,seq__16163_16227__$1);
var G__16230 = c__3844__auto___16228;
var G__16231 = cljs.core.count.call(null,c__3844__auto___16228);
var G__16232 = 0;
seq__16163_16188 = G__16229;
chunk__16170_16189 = G__16230;
count__16171_16190 = G__16231;
i__16172_16191 = G__16232;
continue;
}
} else
{var vec__16182_16233 = cljs.core.first.call(null,seq__16163_16227__$1);var orig_type_16234 = cljs.core.nth.call(null,vec__16182_16233,0,null);var f_16235 = cljs.core.nth.call(null,vec__16182_16233,1,null);var seq__16164_16236 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16234,cljs.core.PersistentArrayMap.fromArray([orig_type_16234,cljs.core.identity], true)));var chunk__16166_16237 = null;var count__16167_16238 = 0;var i__16168_16239 = 0;while(true){
if((i__16168_16239 < count__16167_16238))
{var vec__16183_16240 = cljs.core._nth.call(null,chunk__16166_16237,i__16168_16239);var actual_type_16241 = cljs.core.nth.call(null,vec__16183_16240,0,null);var factory_16242 = cljs.core.nth.call(null,vec__16183_16240,1,null);var canonical_f_16243 = (cljs.core.truth_(selector_16187)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16186,selector_16187):cljs.core.identity).call(null,factory_16242.call(null,f_16235));dommy.core.update_event_listeners_BANG_.call(null,elem_16186,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16187,actual_type_16241,f_16235], true),canonical_f_16243);
if(cljs.core.truth_(elem_16186.addEventListener))
{elem_16186.addEventListener(cljs.core.name.call(null,actual_type_16241),canonical_f_16243);
} else
{elem_16186.attachEvent(cljs.core.name.call(null,actual_type_16241),canonical_f_16243);
}
{
var G__16244 = seq__16164_16236;
var G__16245 = chunk__16166_16237;
var G__16246 = count__16167_16238;
var G__16247 = (i__16168_16239 + 1);
seq__16164_16236 = G__16244;
chunk__16166_16237 = G__16245;
count__16167_16238 = G__16246;
i__16168_16239 = G__16247;
continue;
}
} else
{var temp__4092__auto___16248__$1 = cljs.core.seq.call(null,seq__16164_16236);if(temp__4092__auto___16248__$1)
{var seq__16164_16249__$1 = temp__4092__auto___16248__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16164_16249__$1))
{var c__3844__auto___16250 = cljs.core.chunk_first.call(null,seq__16164_16249__$1);{
var G__16251 = cljs.core.chunk_rest.call(null,seq__16164_16249__$1);
var G__16252 = c__3844__auto___16250;
var G__16253 = cljs.core.count.call(null,c__3844__auto___16250);
var G__16254 = 0;
seq__16164_16236 = G__16251;
chunk__16166_16237 = G__16252;
count__16167_16238 = G__16253;
i__16168_16239 = G__16254;
continue;
}
} else
{var vec__16184_16255 = cljs.core.first.call(null,seq__16164_16249__$1);var actual_type_16256 = cljs.core.nth.call(null,vec__16184_16255,0,null);var factory_16257 = cljs.core.nth.call(null,vec__16184_16255,1,null);var canonical_f_16258 = (cljs.core.truth_(selector_16187)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16186,selector_16187):cljs.core.identity).call(null,factory_16257.call(null,f_16235));dommy.core.update_event_listeners_BANG_.call(null,elem_16186,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16187,actual_type_16256,f_16235], true),canonical_f_16258);
if(cljs.core.truth_(elem_16186.addEventListener))
{elem_16186.addEventListener(cljs.core.name.call(null,actual_type_16256),canonical_f_16258);
} else
{elem_16186.attachEvent(cljs.core.name.call(null,actual_type_16256),canonical_f_16258);
}
{
var G__16259 = cljs.core.next.call(null,seq__16164_16249__$1);
var G__16260 = null;
var G__16261 = 0;
var G__16262 = 0;
seq__16164_16236 = G__16259;
chunk__16166_16237 = G__16260;
count__16167_16238 = G__16261;
i__16168_16239 = G__16262;
continue;
}
}
} else
{}
}
break;
}
{
var G__16263 = cljs.core.next.call(null,seq__16163_16227__$1);
var G__16264 = null;
var G__16265 = 0;
var G__16266 = 0;
seq__16163_16188 = G__16263;
chunk__16170_16189 = G__16264;
count__16171_16190 = G__16265;
i__16172_16191 = G__16266;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16267){
var elem_sel = cljs.core.first(arglist__16267);
var type_fs = cljs.core.rest(arglist__16267);
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
var vec__16291_16314 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16315 = cljs.core.nth.call(null,vec__16291_16314,0,null);var selector_16316 = cljs.core.nth.call(null,vec__16291_16314,1,null);var seq__16292_16317 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16299_16318 = null;var count__16300_16319 = 0;var i__16301_16320 = 0;while(true){
if((i__16301_16320 < count__16300_16319))
{var vec__16308_16321 = cljs.core._nth.call(null,chunk__16299_16318,i__16301_16320);var orig_type_16322 = cljs.core.nth.call(null,vec__16308_16321,0,null);var f_16323 = cljs.core.nth.call(null,vec__16308_16321,1,null);var seq__16302_16324 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16322,cljs.core.PersistentArrayMap.fromArray([orig_type_16322,cljs.core.identity], true)));var chunk__16304_16325 = null;var count__16305_16326 = 0;var i__16306_16327 = 0;while(true){
if((i__16306_16327 < count__16305_16326))
{var vec__16309_16328 = cljs.core._nth.call(null,chunk__16304_16325,i__16306_16327);var actual_type_16329 = cljs.core.nth.call(null,vec__16309_16328,0,null);var __16330 = cljs.core.nth.call(null,vec__16309_16328,1,null);var keys_16331 = cljs.core.PersistentVector.fromArray([selector_16316,actual_type_16329,f_16323], true);var canonical_f_16332 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16315),keys_16331);dommy.core.update_event_listeners_BANG_.call(null,elem_16315,dommy.utils.dissoc_in,keys_16331);
if(cljs.core.truth_(elem_16315.removeEventListener))
{elem_16315.removeEventListener(cljs.core.name.call(null,actual_type_16329),canonical_f_16332);
} else
{elem_16315.detachEvent(cljs.core.name.call(null,actual_type_16329),canonical_f_16332);
}
{
var G__16333 = seq__16302_16324;
var G__16334 = chunk__16304_16325;
var G__16335 = count__16305_16326;
var G__16336 = (i__16306_16327 + 1);
seq__16302_16324 = G__16333;
chunk__16304_16325 = G__16334;
count__16305_16326 = G__16335;
i__16306_16327 = G__16336;
continue;
}
} else
{var temp__4092__auto___16337 = cljs.core.seq.call(null,seq__16302_16324);if(temp__4092__auto___16337)
{var seq__16302_16338__$1 = temp__4092__auto___16337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16302_16338__$1))
{var c__3844__auto___16339 = cljs.core.chunk_first.call(null,seq__16302_16338__$1);{
var G__16340 = cljs.core.chunk_rest.call(null,seq__16302_16338__$1);
var G__16341 = c__3844__auto___16339;
var G__16342 = cljs.core.count.call(null,c__3844__auto___16339);
var G__16343 = 0;
seq__16302_16324 = G__16340;
chunk__16304_16325 = G__16341;
count__16305_16326 = G__16342;
i__16306_16327 = G__16343;
continue;
}
} else
{var vec__16310_16344 = cljs.core.first.call(null,seq__16302_16338__$1);var actual_type_16345 = cljs.core.nth.call(null,vec__16310_16344,0,null);var __16346 = cljs.core.nth.call(null,vec__16310_16344,1,null);var keys_16347 = cljs.core.PersistentVector.fromArray([selector_16316,actual_type_16345,f_16323], true);var canonical_f_16348 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16315),keys_16347);dommy.core.update_event_listeners_BANG_.call(null,elem_16315,dommy.utils.dissoc_in,keys_16347);
if(cljs.core.truth_(elem_16315.removeEventListener))
{elem_16315.removeEventListener(cljs.core.name.call(null,actual_type_16345),canonical_f_16348);
} else
{elem_16315.detachEvent(cljs.core.name.call(null,actual_type_16345),canonical_f_16348);
}
{
var G__16349 = cljs.core.next.call(null,seq__16302_16338__$1);
var G__16350 = null;
var G__16351 = 0;
var G__16352 = 0;
seq__16302_16324 = G__16349;
chunk__16304_16325 = G__16350;
count__16305_16326 = G__16351;
i__16306_16327 = G__16352;
continue;
}
}
} else
{}
}
break;
}
{
var G__16353 = seq__16292_16317;
var G__16354 = chunk__16299_16318;
var G__16355 = count__16300_16319;
var G__16356 = (i__16301_16320 + 1);
seq__16292_16317 = G__16353;
chunk__16299_16318 = G__16354;
count__16300_16319 = G__16355;
i__16301_16320 = G__16356;
continue;
}
} else
{var temp__4092__auto___16357 = cljs.core.seq.call(null,seq__16292_16317);if(temp__4092__auto___16357)
{var seq__16292_16358__$1 = temp__4092__auto___16357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16292_16358__$1))
{var c__3844__auto___16359 = cljs.core.chunk_first.call(null,seq__16292_16358__$1);{
var G__16360 = cljs.core.chunk_rest.call(null,seq__16292_16358__$1);
var G__16361 = c__3844__auto___16359;
var G__16362 = cljs.core.count.call(null,c__3844__auto___16359);
var G__16363 = 0;
seq__16292_16317 = G__16360;
chunk__16299_16318 = G__16361;
count__16300_16319 = G__16362;
i__16301_16320 = G__16363;
continue;
}
} else
{var vec__16311_16364 = cljs.core.first.call(null,seq__16292_16358__$1);var orig_type_16365 = cljs.core.nth.call(null,vec__16311_16364,0,null);var f_16366 = cljs.core.nth.call(null,vec__16311_16364,1,null);var seq__16293_16367 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16365,cljs.core.PersistentArrayMap.fromArray([orig_type_16365,cljs.core.identity], true)));var chunk__16295_16368 = null;var count__16296_16369 = 0;var i__16297_16370 = 0;while(true){
if((i__16297_16370 < count__16296_16369))
{var vec__16312_16371 = cljs.core._nth.call(null,chunk__16295_16368,i__16297_16370);var actual_type_16372 = cljs.core.nth.call(null,vec__16312_16371,0,null);var __16373 = cljs.core.nth.call(null,vec__16312_16371,1,null);var keys_16374 = cljs.core.PersistentVector.fromArray([selector_16316,actual_type_16372,f_16366], true);var canonical_f_16375 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16315),keys_16374);dommy.core.update_event_listeners_BANG_.call(null,elem_16315,dommy.utils.dissoc_in,keys_16374);
if(cljs.core.truth_(elem_16315.removeEventListener))
{elem_16315.removeEventListener(cljs.core.name.call(null,actual_type_16372),canonical_f_16375);
} else
{elem_16315.detachEvent(cljs.core.name.call(null,actual_type_16372),canonical_f_16375);
}
{
var G__16376 = seq__16293_16367;
var G__16377 = chunk__16295_16368;
var G__16378 = count__16296_16369;
var G__16379 = (i__16297_16370 + 1);
seq__16293_16367 = G__16376;
chunk__16295_16368 = G__16377;
count__16296_16369 = G__16378;
i__16297_16370 = G__16379;
continue;
}
} else
{var temp__4092__auto___16380__$1 = cljs.core.seq.call(null,seq__16293_16367);if(temp__4092__auto___16380__$1)
{var seq__16293_16381__$1 = temp__4092__auto___16380__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16293_16381__$1))
{var c__3844__auto___16382 = cljs.core.chunk_first.call(null,seq__16293_16381__$1);{
var G__16383 = cljs.core.chunk_rest.call(null,seq__16293_16381__$1);
var G__16384 = c__3844__auto___16382;
var G__16385 = cljs.core.count.call(null,c__3844__auto___16382);
var G__16386 = 0;
seq__16293_16367 = G__16383;
chunk__16295_16368 = G__16384;
count__16296_16369 = G__16385;
i__16297_16370 = G__16386;
continue;
}
} else
{var vec__16313_16387 = cljs.core.first.call(null,seq__16293_16381__$1);var actual_type_16388 = cljs.core.nth.call(null,vec__16313_16387,0,null);var __16389 = cljs.core.nth.call(null,vec__16313_16387,1,null);var keys_16390 = cljs.core.PersistentVector.fromArray([selector_16316,actual_type_16388,f_16366], true);var canonical_f_16391 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16315),keys_16390);dommy.core.update_event_listeners_BANG_.call(null,elem_16315,dommy.utils.dissoc_in,keys_16390);
if(cljs.core.truth_(elem_16315.removeEventListener))
{elem_16315.removeEventListener(cljs.core.name.call(null,actual_type_16388),canonical_f_16391);
} else
{elem_16315.detachEvent(cljs.core.name.call(null,actual_type_16388),canonical_f_16391);
}
{
var G__16392 = cljs.core.next.call(null,seq__16293_16381__$1);
var G__16393 = null;
var G__16394 = 0;
var G__16395 = 0;
seq__16293_16367 = G__16392;
chunk__16295_16368 = G__16393;
count__16296_16369 = G__16394;
i__16297_16370 = G__16395;
continue;
}
}
} else
{}
}
break;
}
{
var G__16396 = cljs.core.next.call(null,seq__16292_16358__$1);
var G__16397 = null;
var G__16398 = 0;
var G__16399 = 0;
seq__16292_16317 = G__16396;
chunk__16299_16318 = G__16397;
count__16300_16319 = G__16398;
i__16301_16320 = G__16399;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16400){
var elem_sel = cljs.core.first(arglist__16400);
var type_fs = cljs.core.rest(arglist__16400);
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
var vec__16408_16415 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16416 = cljs.core.nth.call(null,vec__16408_16415,0,null);var selector_16417 = cljs.core.nth.call(null,vec__16408_16415,1,null);var seq__16409_16418 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16410_16419 = null;var count__16411_16420 = 0;var i__16412_16421 = 0;while(true){
if((i__16412_16421 < count__16411_16420))
{var vec__16413_16422 = cljs.core._nth.call(null,chunk__16410_16419,i__16412_16421);var type_16423 = cljs.core.nth.call(null,vec__16413_16422,0,null);var f_16424 = cljs.core.nth.call(null,vec__16413_16422,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16423,((function (seq__16409_16418,chunk__16410_16419,count__16411_16420,i__16412_16421,vec__16413_16422,type_16423,f_16424){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16423,this_fn);
return f_16424.call(null,e);
});})(seq__16409_16418,chunk__16410_16419,count__16411_16420,i__16412_16421,vec__16413_16422,type_16423,f_16424))
);
{
var G__16425 = seq__16409_16418;
var G__16426 = chunk__16410_16419;
var G__16427 = count__16411_16420;
var G__16428 = (i__16412_16421 + 1);
seq__16409_16418 = G__16425;
chunk__16410_16419 = G__16426;
count__16411_16420 = G__16427;
i__16412_16421 = G__16428;
continue;
}
} else
{var temp__4092__auto___16429 = cljs.core.seq.call(null,seq__16409_16418);if(temp__4092__auto___16429)
{var seq__16409_16430__$1 = temp__4092__auto___16429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16409_16430__$1))
{var c__3844__auto___16431 = cljs.core.chunk_first.call(null,seq__16409_16430__$1);{
var G__16432 = cljs.core.chunk_rest.call(null,seq__16409_16430__$1);
var G__16433 = c__3844__auto___16431;
var G__16434 = cljs.core.count.call(null,c__3844__auto___16431);
var G__16435 = 0;
seq__16409_16418 = G__16432;
chunk__16410_16419 = G__16433;
count__16411_16420 = G__16434;
i__16412_16421 = G__16435;
continue;
}
} else
{var vec__16414_16436 = cljs.core.first.call(null,seq__16409_16430__$1);var type_16437 = cljs.core.nth.call(null,vec__16414_16436,0,null);var f_16438 = cljs.core.nth.call(null,vec__16414_16436,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16437,((function (seq__16409_16418,chunk__16410_16419,count__16411_16420,i__16412_16421,vec__16414_16436,type_16437,f_16438,seq__16409_16430__$1,temp__4092__auto___16429){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16437,this_fn);
return f_16438.call(null,e);
});})(seq__16409_16418,chunk__16410_16419,count__16411_16420,i__16412_16421,vec__16414_16436,type_16437,f_16438,seq__16409_16430__$1,temp__4092__auto___16429))
);
{
var G__16439 = cljs.core.next.call(null,seq__16409_16430__$1);
var G__16440 = null;
var G__16441 = 0;
var G__16442 = 0;
seq__16409_16418 = G__16439;
chunk__16410_16419 = G__16440;
count__16411_16420 = G__16441;
i__16412_16421 = G__16442;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16443){
var elem_sel = cljs.core.first(arglist__16443);
var type_fs = cljs.core.rest(arglist__16443);
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
var fire_BANG___delegate = function (node,event_type,p__16444){var vec__16446 = p__16444;var update_event_BANG_ = cljs.core.nth.call(null,vec__16446,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__16444 = null;if (arguments.length > 2) {
  p__16444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16444);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16447){
var node = cljs.core.first(arglist__16447);
arglist__16447 = cljs.core.next(arglist__16447);
var event_type = cljs.core.first(arglist__16447);
var p__16444 = cljs.core.rest(arglist__16447);
return fire_BANG___delegate(node,event_type,p__16444);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map