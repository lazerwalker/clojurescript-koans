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
var append_BANG___2 = (function (parent,child){var G__16197 = dommy.template.__GT_node_like.call(null,parent);G__16197.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16197;
});
var append_BANG___3 = (function() { 
var G__16202__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16198_16203 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16199_16204 = null;var count__16200_16205 = 0;var i__16201_16206 = 0;while(true){
if((i__16201_16206 < count__16200_16205))
{var c_16207 = cljs.core._nth.call(null,chunk__16199_16204,i__16201_16206);append_BANG_.call(null,parent__$1,c_16207);
{
var G__16208 = seq__16198_16203;
var G__16209 = chunk__16199_16204;
var G__16210 = count__16200_16205;
var G__16211 = (i__16201_16206 + 1);
seq__16198_16203 = G__16208;
chunk__16199_16204 = G__16209;
count__16200_16205 = G__16210;
i__16201_16206 = G__16211;
continue;
}
} else
{var temp__4092__auto___16212 = cljs.core.seq.call(null,seq__16198_16203);if(temp__4092__auto___16212)
{var seq__16198_16213__$1 = temp__4092__auto___16212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16198_16213__$1))
{var c__3844__auto___16214 = cljs.core.chunk_first.call(null,seq__16198_16213__$1);{
var G__16215 = cljs.core.chunk_rest.call(null,seq__16198_16213__$1);
var G__16216 = c__3844__auto___16214;
var G__16217 = cljs.core.count.call(null,c__3844__auto___16214);
var G__16218 = 0;
seq__16198_16203 = G__16215;
chunk__16199_16204 = G__16216;
count__16200_16205 = G__16217;
i__16201_16206 = G__16218;
continue;
}
} else
{var c_16219 = cljs.core.first.call(null,seq__16198_16213__$1);append_BANG_.call(null,parent__$1,c_16219);
{
var G__16220 = cljs.core.next.call(null,seq__16198_16213__$1);
var G__16221 = null;
var G__16222 = 0;
var G__16223 = 0;
seq__16198_16203 = G__16220;
chunk__16199_16204 = G__16221;
count__16200_16205 = G__16222;
i__16201_16206 = G__16223;
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
var G__16202 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16202__delegate.call(this,parent,child,more_children);};
G__16202.cljs$lang$maxFixedArity = 2;
G__16202.cljs$lang$applyTo = (function (arglist__16224){
var parent = cljs.core.first(arglist__16224);
arglist__16224 = cljs.core.next(arglist__16224);
var child = cljs.core.first(arglist__16224);
var more_children = cljs.core.rest(arglist__16224);
return G__16202__delegate(parent,child,more_children);
});
G__16202.cljs$core$IFn$_invoke$arity$variadic = G__16202__delegate;
return G__16202;
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
var G__16233__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16229_16234 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16230_16235 = null;var count__16231_16236 = 0;var i__16232_16237 = 0;while(true){
if((i__16232_16237 < count__16231_16236))
{var c_16238 = cljs.core._nth.call(null,chunk__16230_16235,i__16232_16237);prepend_BANG_.call(null,parent__$1,c_16238);
{
var G__16239 = seq__16229_16234;
var G__16240 = chunk__16230_16235;
var G__16241 = count__16231_16236;
var G__16242 = (i__16232_16237 + 1);
seq__16229_16234 = G__16239;
chunk__16230_16235 = G__16240;
count__16231_16236 = G__16241;
i__16232_16237 = G__16242;
continue;
}
} else
{var temp__4092__auto___16243 = cljs.core.seq.call(null,seq__16229_16234);if(temp__4092__auto___16243)
{var seq__16229_16244__$1 = temp__4092__auto___16243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16229_16244__$1))
{var c__3844__auto___16245 = cljs.core.chunk_first.call(null,seq__16229_16244__$1);{
var G__16246 = cljs.core.chunk_rest.call(null,seq__16229_16244__$1);
var G__16247 = c__3844__auto___16245;
var G__16248 = cljs.core.count.call(null,c__3844__auto___16245);
var G__16249 = 0;
seq__16229_16234 = G__16246;
chunk__16230_16235 = G__16247;
count__16231_16236 = G__16248;
i__16232_16237 = G__16249;
continue;
}
} else
{var c_16250 = cljs.core.first.call(null,seq__16229_16244__$1);prepend_BANG_.call(null,parent__$1,c_16250);
{
var G__16251 = cljs.core.next.call(null,seq__16229_16244__$1);
var G__16252 = null;
var G__16253 = 0;
var G__16254 = 0;
seq__16229_16234 = G__16251;
chunk__16230_16235 = G__16252;
count__16231_16236 = G__16253;
i__16232_16237 = G__16254;
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
var G__16233 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16233__delegate.call(this,parent,child,more_children);};
G__16233.cljs$lang$maxFixedArity = 2;
G__16233.cljs$lang$applyTo = (function (arglist__16255){
var parent = cljs.core.first(arglist__16255);
arglist__16255 = cljs.core.next(arglist__16255);
var child = cljs.core.first(arglist__16255);
var more_children = cljs.core.rest(arglist__16255);
return G__16233__delegate(parent,child,more_children);
});
G__16233.cljs$core$IFn$_invoke$arity$variadic = G__16233__delegate;
return G__16233;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16256 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16256))
{var next_16257 = temp__4090__auto___16256;parent.insertBefore(actual_node,next_16257);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16259 = dommy.template.__GT_node_like.call(null,parent);G__16259.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16259,node_like);
return G__16259;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16261 = elem__$1.parentNode;G__16261.removeChild(elem__$1);
return G__16261;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16267){var vec__16268 = p__16267;var k = cljs.core.nth.call(null,vec__16268,0,null);var v = cljs.core.nth.call(null,vec__16268,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16269 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16269 = (function (v,k,vec__16268,p__16267,container,key_selectors_map,template,selector_map,meta16270){
this.v = v;
this.k = k;
this.vec__16268 = vec__16268;
this.p__16267 = p__16267;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16270 = meta16270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16269.cljs$lang$type = true;
dommy.core.t16269.cljs$lang$ctorStr = "dommy.core/t16269";
dommy.core.t16269.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t16269");
});
dommy.core.t16269.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16271){var self__ = this;
var _16271__$1 = this;return self__.meta16270;
});
dommy.core.t16269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16271,meta16270__$1){var self__ = this;
var _16271__$1 = this;return (new dommy.core.t16269(self__.v,self__.k,self__.vec__16268,self__.p__16267,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16270__$1));
});
dommy.core.__GT_t16269 = (function __GT_t16269(v__$1,k__$1,vec__16268__$1,p__16267__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16270){return (new dommy.core.t16269(v__$1,k__$1,vec__16268__$1,p__16267__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16270));
});
}
return (new dommy.core.t16269(v,k,vec__16268,p__16267,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16272_SHARP_){return p1__16272_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16273_SHARP_){return !((p1__16273_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16274){var vec__16275 = p__16274;var special_mouse_event = cljs.core.nth.call(null,vec__16275,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16275,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16276){
var elem = cljs.core.first(arglist__16276);
arglist__16276 = cljs.core.next(arglist__16276);
var f = cljs.core.first(arglist__16276);
var args = cljs.core.rest(arglist__16276);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16277_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16277_SHARP_));
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
var vec__16301_16324 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16325 = cljs.core.nth.call(null,vec__16301_16324,0,null);var selector_16326 = cljs.core.nth.call(null,vec__16301_16324,1,null);var seq__16302_16327 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16309_16328 = null;var count__16310_16329 = 0;var i__16311_16330 = 0;while(true){
if((i__16311_16330 < count__16310_16329))
{var vec__16318_16331 = cljs.core._nth.call(null,chunk__16309_16328,i__16311_16330);var orig_type_16332 = cljs.core.nth.call(null,vec__16318_16331,0,null);var f_16333 = cljs.core.nth.call(null,vec__16318_16331,1,null);var seq__16312_16334 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16332,cljs.core.PersistentArrayMap.fromArray([orig_type_16332,cljs.core.identity], true)));var chunk__16314_16335 = null;var count__16315_16336 = 0;var i__16316_16337 = 0;while(true){
if((i__16316_16337 < count__16315_16336))
{var vec__16319_16338 = cljs.core._nth.call(null,chunk__16314_16335,i__16316_16337);var actual_type_16339 = cljs.core.nth.call(null,vec__16319_16338,0,null);var factory_16340 = cljs.core.nth.call(null,vec__16319_16338,1,null);var canonical_f_16341 = (cljs.core.truth_(selector_16326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16325,selector_16326):cljs.core.identity).call(null,factory_16340.call(null,f_16333));dommy.core.update_event_listeners_BANG_.call(null,elem_16325,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16326,actual_type_16339,f_16333], true),canonical_f_16341);
if(cljs.core.truth_(elem_16325.addEventListener))
{elem_16325.addEventListener(cljs.core.name.call(null,actual_type_16339),canonical_f_16341);
} else
{elem_16325.attachEvent(cljs.core.name.call(null,actual_type_16339),canonical_f_16341);
}
{
var G__16342 = seq__16312_16334;
var G__16343 = chunk__16314_16335;
var G__16344 = count__16315_16336;
var G__16345 = (i__16316_16337 + 1);
seq__16312_16334 = G__16342;
chunk__16314_16335 = G__16343;
count__16315_16336 = G__16344;
i__16316_16337 = G__16345;
continue;
}
} else
{var temp__4092__auto___16346 = cljs.core.seq.call(null,seq__16312_16334);if(temp__4092__auto___16346)
{var seq__16312_16347__$1 = temp__4092__auto___16346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16312_16347__$1))
{var c__3844__auto___16348 = cljs.core.chunk_first.call(null,seq__16312_16347__$1);{
var G__16349 = cljs.core.chunk_rest.call(null,seq__16312_16347__$1);
var G__16350 = c__3844__auto___16348;
var G__16351 = cljs.core.count.call(null,c__3844__auto___16348);
var G__16352 = 0;
seq__16312_16334 = G__16349;
chunk__16314_16335 = G__16350;
count__16315_16336 = G__16351;
i__16316_16337 = G__16352;
continue;
}
} else
{var vec__16320_16353 = cljs.core.first.call(null,seq__16312_16347__$1);var actual_type_16354 = cljs.core.nth.call(null,vec__16320_16353,0,null);var factory_16355 = cljs.core.nth.call(null,vec__16320_16353,1,null);var canonical_f_16356 = (cljs.core.truth_(selector_16326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16325,selector_16326):cljs.core.identity).call(null,factory_16355.call(null,f_16333));dommy.core.update_event_listeners_BANG_.call(null,elem_16325,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16326,actual_type_16354,f_16333], true),canonical_f_16356);
if(cljs.core.truth_(elem_16325.addEventListener))
{elem_16325.addEventListener(cljs.core.name.call(null,actual_type_16354),canonical_f_16356);
} else
{elem_16325.attachEvent(cljs.core.name.call(null,actual_type_16354),canonical_f_16356);
}
{
var G__16357 = cljs.core.next.call(null,seq__16312_16347__$1);
var G__16358 = null;
var G__16359 = 0;
var G__16360 = 0;
seq__16312_16334 = G__16357;
chunk__16314_16335 = G__16358;
count__16315_16336 = G__16359;
i__16316_16337 = G__16360;
continue;
}
}
} else
{}
}
break;
}
{
var G__16361 = seq__16302_16327;
var G__16362 = chunk__16309_16328;
var G__16363 = count__16310_16329;
var G__16364 = (i__16311_16330 + 1);
seq__16302_16327 = G__16361;
chunk__16309_16328 = G__16362;
count__16310_16329 = G__16363;
i__16311_16330 = G__16364;
continue;
}
} else
{var temp__4092__auto___16365 = cljs.core.seq.call(null,seq__16302_16327);if(temp__4092__auto___16365)
{var seq__16302_16366__$1 = temp__4092__auto___16365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16302_16366__$1))
{var c__3844__auto___16367 = cljs.core.chunk_first.call(null,seq__16302_16366__$1);{
var G__16368 = cljs.core.chunk_rest.call(null,seq__16302_16366__$1);
var G__16369 = c__3844__auto___16367;
var G__16370 = cljs.core.count.call(null,c__3844__auto___16367);
var G__16371 = 0;
seq__16302_16327 = G__16368;
chunk__16309_16328 = G__16369;
count__16310_16329 = G__16370;
i__16311_16330 = G__16371;
continue;
}
} else
{var vec__16321_16372 = cljs.core.first.call(null,seq__16302_16366__$1);var orig_type_16373 = cljs.core.nth.call(null,vec__16321_16372,0,null);var f_16374 = cljs.core.nth.call(null,vec__16321_16372,1,null);var seq__16303_16375 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16373,cljs.core.PersistentArrayMap.fromArray([orig_type_16373,cljs.core.identity], true)));var chunk__16305_16376 = null;var count__16306_16377 = 0;var i__16307_16378 = 0;while(true){
if((i__16307_16378 < count__16306_16377))
{var vec__16322_16379 = cljs.core._nth.call(null,chunk__16305_16376,i__16307_16378);var actual_type_16380 = cljs.core.nth.call(null,vec__16322_16379,0,null);var factory_16381 = cljs.core.nth.call(null,vec__16322_16379,1,null);var canonical_f_16382 = (cljs.core.truth_(selector_16326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16325,selector_16326):cljs.core.identity).call(null,factory_16381.call(null,f_16374));dommy.core.update_event_listeners_BANG_.call(null,elem_16325,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16326,actual_type_16380,f_16374], true),canonical_f_16382);
if(cljs.core.truth_(elem_16325.addEventListener))
{elem_16325.addEventListener(cljs.core.name.call(null,actual_type_16380),canonical_f_16382);
} else
{elem_16325.attachEvent(cljs.core.name.call(null,actual_type_16380),canonical_f_16382);
}
{
var G__16383 = seq__16303_16375;
var G__16384 = chunk__16305_16376;
var G__16385 = count__16306_16377;
var G__16386 = (i__16307_16378 + 1);
seq__16303_16375 = G__16383;
chunk__16305_16376 = G__16384;
count__16306_16377 = G__16385;
i__16307_16378 = G__16386;
continue;
}
} else
{var temp__4092__auto___16387__$1 = cljs.core.seq.call(null,seq__16303_16375);if(temp__4092__auto___16387__$1)
{var seq__16303_16388__$1 = temp__4092__auto___16387__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16303_16388__$1))
{var c__3844__auto___16389 = cljs.core.chunk_first.call(null,seq__16303_16388__$1);{
var G__16390 = cljs.core.chunk_rest.call(null,seq__16303_16388__$1);
var G__16391 = c__3844__auto___16389;
var G__16392 = cljs.core.count.call(null,c__3844__auto___16389);
var G__16393 = 0;
seq__16303_16375 = G__16390;
chunk__16305_16376 = G__16391;
count__16306_16377 = G__16392;
i__16307_16378 = G__16393;
continue;
}
} else
{var vec__16323_16394 = cljs.core.first.call(null,seq__16303_16388__$1);var actual_type_16395 = cljs.core.nth.call(null,vec__16323_16394,0,null);var factory_16396 = cljs.core.nth.call(null,vec__16323_16394,1,null);var canonical_f_16397 = (cljs.core.truth_(selector_16326)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16325,selector_16326):cljs.core.identity).call(null,factory_16396.call(null,f_16374));dommy.core.update_event_listeners_BANG_.call(null,elem_16325,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16326,actual_type_16395,f_16374], true),canonical_f_16397);
if(cljs.core.truth_(elem_16325.addEventListener))
{elem_16325.addEventListener(cljs.core.name.call(null,actual_type_16395),canonical_f_16397);
} else
{elem_16325.attachEvent(cljs.core.name.call(null,actual_type_16395),canonical_f_16397);
}
{
var G__16398 = cljs.core.next.call(null,seq__16303_16388__$1);
var G__16399 = null;
var G__16400 = 0;
var G__16401 = 0;
seq__16303_16375 = G__16398;
chunk__16305_16376 = G__16399;
count__16306_16377 = G__16400;
i__16307_16378 = G__16401;
continue;
}
}
} else
{}
}
break;
}
{
var G__16402 = cljs.core.next.call(null,seq__16302_16366__$1);
var G__16403 = null;
var G__16404 = 0;
var G__16405 = 0;
seq__16302_16327 = G__16402;
chunk__16309_16328 = G__16403;
count__16310_16329 = G__16404;
i__16311_16330 = G__16405;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16406){
var elem_sel = cljs.core.first(arglist__16406);
var type_fs = cljs.core.rest(arglist__16406);
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
var vec__16430_16453 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16454 = cljs.core.nth.call(null,vec__16430_16453,0,null);var selector_16455 = cljs.core.nth.call(null,vec__16430_16453,1,null);var seq__16431_16456 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16438_16457 = null;var count__16439_16458 = 0;var i__16440_16459 = 0;while(true){
if((i__16440_16459 < count__16439_16458))
{var vec__16447_16460 = cljs.core._nth.call(null,chunk__16438_16457,i__16440_16459);var orig_type_16461 = cljs.core.nth.call(null,vec__16447_16460,0,null);var f_16462 = cljs.core.nth.call(null,vec__16447_16460,1,null);var seq__16441_16463 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16461,cljs.core.PersistentArrayMap.fromArray([orig_type_16461,cljs.core.identity], true)));var chunk__16443_16464 = null;var count__16444_16465 = 0;var i__16445_16466 = 0;while(true){
if((i__16445_16466 < count__16444_16465))
{var vec__16448_16467 = cljs.core._nth.call(null,chunk__16443_16464,i__16445_16466);var actual_type_16468 = cljs.core.nth.call(null,vec__16448_16467,0,null);var __16469 = cljs.core.nth.call(null,vec__16448_16467,1,null);var keys_16470 = cljs.core.PersistentVector.fromArray([selector_16455,actual_type_16468,f_16462], true);var canonical_f_16471 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16454),keys_16470);dommy.core.update_event_listeners_BANG_.call(null,elem_16454,dommy.utils.dissoc_in,keys_16470);
if(cljs.core.truth_(elem_16454.removeEventListener))
{elem_16454.removeEventListener(cljs.core.name.call(null,actual_type_16468),canonical_f_16471);
} else
{elem_16454.detachEvent(cljs.core.name.call(null,actual_type_16468),canonical_f_16471);
}
{
var G__16472 = seq__16441_16463;
var G__16473 = chunk__16443_16464;
var G__16474 = count__16444_16465;
var G__16475 = (i__16445_16466 + 1);
seq__16441_16463 = G__16472;
chunk__16443_16464 = G__16473;
count__16444_16465 = G__16474;
i__16445_16466 = G__16475;
continue;
}
} else
{var temp__4092__auto___16476 = cljs.core.seq.call(null,seq__16441_16463);if(temp__4092__auto___16476)
{var seq__16441_16477__$1 = temp__4092__auto___16476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16441_16477__$1))
{var c__3844__auto___16478 = cljs.core.chunk_first.call(null,seq__16441_16477__$1);{
var G__16479 = cljs.core.chunk_rest.call(null,seq__16441_16477__$1);
var G__16480 = c__3844__auto___16478;
var G__16481 = cljs.core.count.call(null,c__3844__auto___16478);
var G__16482 = 0;
seq__16441_16463 = G__16479;
chunk__16443_16464 = G__16480;
count__16444_16465 = G__16481;
i__16445_16466 = G__16482;
continue;
}
} else
{var vec__16449_16483 = cljs.core.first.call(null,seq__16441_16477__$1);var actual_type_16484 = cljs.core.nth.call(null,vec__16449_16483,0,null);var __16485 = cljs.core.nth.call(null,vec__16449_16483,1,null);var keys_16486 = cljs.core.PersistentVector.fromArray([selector_16455,actual_type_16484,f_16462], true);var canonical_f_16487 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16454),keys_16486);dommy.core.update_event_listeners_BANG_.call(null,elem_16454,dommy.utils.dissoc_in,keys_16486);
if(cljs.core.truth_(elem_16454.removeEventListener))
{elem_16454.removeEventListener(cljs.core.name.call(null,actual_type_16484),canonical_f_16487);
} else
{elem_16454.detachEvent(cljs.core.name.call(null,actual_type_16484),canonical_f_16487);
}
{
var G__16488 = cljs.core.next.call(null,seq__16441_16477__$1);
var G__16489 = null;
var G__16490 = 0;
var G__16491 = 0;
seq__16441_16463 = G__16488;
chunk__16443_16464 = G__16489;
count__16444_16465 = G__16490;
i__16445_16466 = G__16491;
continue;
}
}
} else
{}
}
break;
}
{
var G__16492 = seq__16431_16456;
var G__16493 = chunk__16438_16457;
var G__16494 = count__16439_16458;
var G__16495 = (i__16440_16459 + 1);
seq__16431_16456 = G__16492;
chunk__16438_16457 = G__16493;
count__16439_16458 = G__16494;
i__16440_16459 = G__16495;
continue;
}
} else
{var temp__4092__auto___16496 = cljs.core.seq.call(null,seq__16431_16456);if(temp__4092__auto___16496)
{var seq__16431_16497__$1 = temp__4092__auto___16496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16431_16497__$1))
{var c__3844__auto___16498 = cljs.core.chunk_first.call(null,seq__16431_16497__$1);{
var G__16499 = cljs.core.chunk_rest.call(null,seq__16431_16497__$1);
var G__16500 = c__3844__auto___16498;
var G__16501 = cljs.core.count.call(null,c__3844__auto___16498);
var G__16502 = 0;
seq__16431_16456 = G__16499;
chunk__16438_16457 = G__16500;
count__16439_16458 = G__16501;
i__16440_16459 = G__16502;
continue;
}
} else
{var vec__16450_16503 = cljs.core.first.call(null,seq__16431_16497__$1);var orig_type_16504 = cljs.core.nth.call(null,vec__16450_16503,0,null);var f_16505 = cljs.core.nth.call(null,vec__16450_16503,1,null);var seq__16432_16506 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16504,cljs.core.PersistentArrayMap.fromArray([orig_type_16504,cljs.core.identity], true)));var chunk__16434_16507 = null;var count__16435_16508 = 0;var i__16436_16509 = 0;while(true){
if((i__16436_16509 < count__16435_16508))
{var vec__16451_16510 = cljs.core._nth.call(null,chunk__16434_16507,i__16436_16509);var actual_type_16511 = cljs.core.nth.call(null,vec__16451_16510,0,null);var __16512 = cljs.core.nth.call(null,vec__16451_16510,1,null);var keys_16513 = cljs.core.PersistentVector.fromArray([selector_16455,actual_type_16511,f_16505], true);var canonical_f_16514 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16454),keys_16513);dommy.core.update_event_listeners_BANG_.call(null,elem_16454,dommy.utils.dissoc_in,keys_16513);
if(cljs.core.truth_(elem_16454.removeEventListener))
{elem_16454.removeEventListener(cljs.core.name.call(null,actual_type_16511),canonical_f_16514);
} else
{elem_16454.detachEvent(cljs.core.name.call(null,actual_type_16511),canonical_f_16514);
}
{
var G__16515 = seq__16432_16506;
var G__16516 = chunk__16434_16507;
var G__16517 = count__16435_16508;
var G__16518 = (i__16436_16509 + 1);
seq__16432_16506 = G__16515;
chunk__16434_16507 = G__16516;
count__16435_16508 = G__16517;
i__16436_16509 = G__16518;
continue;
}
} else
{var temp__4092__auto___16519__$1 = cljs.core.seq.call(null,seq__16432_16506);if(temp__4092__auto___16519__$1)
{var seq__16432_16520__$1 = temp__4092__auto___16519__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16432_16520__$1))
{var c__3844__auto___16521 = cljs.core.chunk_first.call(null,seq__16432_16520__$1);{
var G__16522 = cljs.core.chunk_rest.call(null,seq__16432_16520__$1);
var G__16523 = c__3844__auto___16521;
var G__16524 = cljs.core.count.call(null,c__3844__auto___16521);
var G__16525 = 0;
seq__16432_16506 = G__16522;
chunk__16434_16507 = G__16523;
count__16435_16508 = G__16524;
i__16436_16509 = G__16525;
continue;
}
} else
{var vec__16452_16526 = cljs.core.first.call(null,seq__16432_16520__$1);var actual_type_16527 = cljs.core.nth.call(null,vec__16452_16526,0,null);var __16528 = cljs.core.nth.call(null,vec__16452_16526,1,null);var keys_16529 = cljs.core.PersistentVector.fromArray([selector_16455,actual_type_16527,f_16505], true);var canonical_f_16530 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16454),keys_16529);dommy.core.update_event_listeners_BANG_.call(null,elem_16454,dommy.utils.dissoc_in,keys_16529);
if(cljs.core.truth_(elem_16454.removeEventListener))
{elem_16454.removeEventListener(cljs.core.name.call(null,actual_type_16527),canonical_f_16530);
} else
{elem_16454.detachEvent(cljs.core.name.call(null,actual_type_16527),canonical_f_16530);
}
{
var G__16531 = cljs.core.next.call(null,seq__16432_16520__$1);
var G__16532 = null;
var G__16533 = 0;
var G__16534 = 0;
seq__16432_16506 = G__16531;
chunk__16434_16507 = G__16532;
count__16435_16508 = G__16533;
i__16436_16509 = G__16534;
continue;
}
}
} else
{}
}
break;
}
{
var G__16535 = cljs.core.next.call(null,seq__16431_16497__$1);
var G__16536 = null;
var G__16537 = 0;
var G__16538 = 0;
seq__16431_16456 = G__16535;
chunk__16438_16457 = G__16536;
count__16439_16458 = G__16537;
i__16440_16459 = G__16538;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16539){
var elem_sel = cljs.core.first(arglist__16539);
var type_fs = cljs.core.rest(arglist__16539);
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
var vec__16547_16554 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16555 = cljs.core.nth.call(null,vec__16547_16554,0,null);var selector_16556 = cljs.core.nth.call(null,vec__16547_16554,1,null);var seq__16548_16557 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16549_16558 = null;var count__16550_16559 = 0;var i__16551_16560 = 0;while(true){
if((i__16551_16560 < count__16550_16559))
{var vec__16552_16561 = cljs.core._nth.call(null,chunk__16549_16558,i__16551_16560);var type_16562 = cljs.core.nth.call(null,vec__16552_16561,0,null);var f_16563 = cljs.core.nth.call(null,vec__16552_16561,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16562,((function (seq__16548_16557,chunk__16549_16558,count__16550_16559,i__16551_16560,vec__16552_16561,type_16562,f_16563){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16562,this_fn);
return f_16563.call(null,e);
});})(seq__16548_16557,chunk__16549_16558,count__16550_16559,i__16551_16560,vec__16552_16561,type_16562,f_16563))
);
{
var G__16564 = seq__16548_16557;
var G__16565 = chunk__16549_16558;
var G__16566 = count__16550_16559;
var G__16567 = (i__16551_16560 + 1);
seq__16548_16557 = G__16564;
chunk__16549_16558 = G__16565;
count__16550_16559 = G__16566;
i__16551_16560 = G__16567;
continue;
}
} else
{var temp__4092__auto___16568 = cljs.core.seq.call(null,seq__16548_16557);if(temp__4092__auto___16568)
{var seq__16548_16569__$1 = temp__4092__auto___16568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16548_16569__$1))
{var c__3844__auto___16570 = cljs.core.chunk_first.call(null,seq__16548_16569__$1);{
var G__16571 = cljs.core.chunk_rest.call(null,seq__16548_16569__$1);
var G__16572 = c__3844__auto___16570;
var G__16573 = cljs.core.count.call(null,c__3844__auto___16570);
var G__16574 = 0;
seq__16548_16557 = G__16571;
chunk__16549_16558 = G__16572;
count__16550_16559 = G__16573;
i__16551_16560 = G__16574;
continue;
}
} else
{var vec__16553_16575 = cljs.core.first.call(null,seq__16548_16569__$1);var type_16576 = cljs.core.nth.call(null,vec__16553_16575,0,null);var f_16577 = cljs.core.nth.call(null,vec__16553_16575,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16576,((function (seq__16548_16557,chunk__16549_16558,count__16550_16559,i__16551_16560,vec__16553_16575,type_16576,f_16577,seq__16548_16569__$1,temp__4092__auto___16568){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16576,this_fn);
return f_16577.call(null,e);
});})(seq__16548_16557,chunk__16549_16558,count__16550_16559,i__16551_16560,vec__16553_16575,type_16576,f_16577,seq__16548_16569__$1,temp__4092__auto___16568))
);
{
var G__16578 = cljs.core.next.call(null,seq__16548_16569__$1);
var G__16579 = null;
var G__16580 = 0;
var G__16581 = 0;
seq__16548_16557 = G__16578;
chunk__16549_16558 = G__16579;
count__16550_16559 = G__16580;
i__16551_16560 = G__16581;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16582){
var elem_sel = cljs.core.first(arglist__16582);
var type_fs = cljs.core.rest(arglist__16582);
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
var fire_BANG___delegate = function (node,event_type,p__16583){var vec__16585 = p__16583;var update_event_BANG_ = cljs.core.nth.call(null,vec__16585,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__16583 = null;if (arguments.length > 2) {
  p__16583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16583);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16586){
var node = cljs.core.first(arglist__16586);
arglist__16586 = cljs.core.next(arglist__16586);
var event_type = cljs.core.first(arglist__16586);
var p__16583 = cljs.core.rest(arglist__16586);
return fire_BANG___delegate(node,event_type,p__16583);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map