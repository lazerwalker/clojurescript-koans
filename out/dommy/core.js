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
var append_BANG___2 = (function (parent,child){var G__28592 = dommy.template.__GT_node_like.call(null,parent);G__28592.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__28592;
});
var append_BANG___3 = (function() { 
var G__28597__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28593_28598 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28594_28599 = null;var count__28595_28600 = 0;var i__28596_28601 = 0;while(true){
if((i__28596_28601 < count__28595_28600))
{var c_28602 = cljs.core._nth.call(null,chunk__28594_28599,i__28596_28601);append_BANG_.call(null,parent__$1,c_28602);
{
var G__28603 = seq__28593_28598;
var G__28604 = chunk__28594_28599;
var G__28605 = count__28595_28600;
var G__28606 = (i__28596_28601 + 1);
seq__28593_28598 = G__28603;
chunk__28594_28599 = G__28604;
count__28595_28600 = G__28605;
i__28596_28601 = G__28606;
continue;
}
} else
{var temp__4092__auto___28607 = cljs.core.seq.call(null,seq__28593_28598);if(temp__4092__auto___28607)
{var seq__28593_28608__$1 = temp__4092__auto___28607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28593_28608__$1))
{var c__3844__auto___28609 = cljs.core.chunk_first.call(null,seq__28593_28608__$1);{
var G__28610 = cljs.core.chunk_rest.call(null,seq__28593_28608__$1);
var G__28611 = c__3844__auto___28609;
var G__28612 = cljs.core.count.call(null,c__3844__auto___28609);
var G__28613 = 0;
seq__28593_28598 = G__28610;
chunk__28594_28599 = G__28611;
count__28595_28600 = G__28612;
i__28596_28601 = G__28613;
continue;
}
} else
{var c_28614 = cljs.core.first.call(null,seq__28593_28608__$1);append_BANG_.call(null,parent__$1,c_28614);
{
var G__28615 = cljs.core.next.call(null,seq__28593_28608__$1);
var G__28616 = null;
var G__28617 = 0;
var G__28618 = 0;
seq__28593_28598 = G__28615;
chunk__28594_28599 = G__28616;
count__28595_28600 = G__28617;
i__28596_28601 = G__28618;
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
var G__28597 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28597__delegate.call(this,parent,child,more_children);};
G__28597.cljs$lang$maxFixedArity = 2;
G__28597.cljs$lang$applyTo = (function (arglist__28619){
var parent = cljs.core.first(arglist__28619);
arglist__28619 = cljs.core.next(arglist__28619);
var child = cljs.core.first(arglist__28619);
var more_children = cljs.core.rest(arglist__28619);
return G__28597__delegate(parent,child,more_children);
});
G__28597.cljs$core$IFn$_invoke$arity$variadic = G__28597__delegate;
return G__28597;
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
var G__28628__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28624_28629 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28625_28630 = null;var count__28626_28631 = 0;var i__28627_28632 = 0;while(true){
if((i__28627_28632 < count__28626_28631))
{var c_28633 = cljs.core._nth.call(null,chunk__28625_28630,i__28627_28632);prepend_BANG_.call(null,parent__$1,c_28633);
{
var G__28634 = seq__28624_28629;
var G__28635 = chunk__28625_28630;
var G__28636 = count__28626_28631;
var G__28637 = (i__28627_28632 + 1);
seq__28624_28629 = G__28634;
chunk__28625_28630 = G__28635;
count__28626_28631 = G__28636;
i__28627_28632 = G__28637;
continue;
}
} else
{var temp__4092__auto___28638 = cljs.core.seq.call(null,seq__28624_28629);if(temp__4092__auto___28638)
{var seq__28624_28639__$1 = temp__4092__auto___28638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28624_28639__$1))
{var c__3844__auto___28640 = cljs.core.chunk_first.call(null,seq__28624_28639__$1);{
var G__28641 = cljs.core.chunk_rest.call(null,seq__28624_28639__$1);
var G__28642 = c__3844__auto___28640;
var G__28643 = cljs.core.count.call(null,c__3844__auto___28640);
var G__28644 = 0;
seq__28624_28629 = G__28641;
chunk__28625_28630 = G__28642;
count__28626_28631 = G__28643;
i__28627_28632 = G__28644;
continue;
}
} else
{var c_28645 = cljs.core.first.call(null,seq__28624_28639__$1);prepend_BANG_.call(null,parent__$1,c_28645);
{
var G__28646 = cljs.core.next.call(null,seq__28624_28639__$1);
var G__28647 = null;
var G__28648 = 0;
var G__28649 = 0;
seq__28624_28629 = G__28646;
chunk__28625_28630 = G__28647;
count__28626_28631 = G__28648;
i__28627_28632 = G__28649;
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
var G__28628 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28628__delegate.call(this,parent,child,more_children);};
G__28628.cljs$lang$maxFixedArity = 2;
G__28628.cljs$lang$applyTo = (function (arglist__28650){
var parent = cljs.core.first(arglist__28650);
arglist__28650 = cljs.core.next(arglist__28650);
var child = cljs.core.first(arglist__28650);
var more_children = cljs.core.rest(arglist__28650);
return G__28628__delegate(parent,child,more_children);
});
G__28628.cljs$core$IFn$_invoke$arity$variadic = G__28628__delegate;
return G__28628;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___28651 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___28651))
{var next_28652 = temp__4090__auto___28651;parent.insertBefore(actual_node,next_28652);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__28654 = dommy.template.__GT_node_like.call(null,parent);G__28654.innerHTML = "";
dommy.core.append_BANG_.call(null,G__28654,node_like);
return G__28654;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__28656 = elem__$1.parentNode;G__28656.removeChild(elem__$1);
return G__28656;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28662){var vec__28663 = p__28662;var k = cljs.core.nth.call(null,vec__28663,0,null);var v = cljs.core.nth.call(null,vec__28663,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t28664 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t28664 = (function (v,k,vec__28663,p__28662,container,key_selectors_map,template,selector_map,meta28665){
this.v = v;
this.k = k;
this.vec__28663 = vec__28663;
this.p__28662 = p__28662;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta28665 = meta28665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t28664.cljs$lang$type = true;
dommy.core.t28664.cljs$lang$ctorStr = "dommy.core/t28664";
dommy.core.t28664.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t28664");
});
dommy.core.t28664.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t28664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28666){var self__ = this;
var _28666__$1 = this;return self__.meta28665;
});
dommy.core.t28664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28666,meta28665__$1){var self__ = this;
var _28666__$1 = this;return (new dommy.core.t28664(self__.v,self__.k,self__.vec__28663,self__.p__28662,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta28665__$1));
});
dommy.core.__GT_t28664 = (function __GT_t28664(v__$1,k__$1,vec__28663__$1,p__28662__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28665){return (new dommy.core.t28664(v__$1,k__$1,vec__28663__$1,p__28662__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28665));
});
}
return (new dommy.core.t28664(v,k,vec__28663,p__28662,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__28667_SHARP_){return p1__28667_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__28668_SHARP_){return !((p1__28668_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28669){var vec__28670 = p__28669;var special_mouse_event = cljs.core.nth.call(null,vec__28670,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__28670,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__28671){
var elem = cljs.core.first(arglist__28671);
arglist__28671 = cljs.core.next(arglist__28671);
var f = cljs.core.first(arglist__28671);
var args = cljs.core.rest(arglist__28671);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__28672_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__28672_SHARP_));
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
var vec__28696_28719 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28720 = cljs.core.nth.call(null,vec__28696_28719,0,null);var selector_28721 = cljs.core.nth.call(null,vec__28696_28719,1,null);var seq__28697_28722 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28704_28723 = null;var count__28705_28724 = 0;var i__28706_28725 = 0;while(true){
if((i__28706_28725 < count__28705_28724))
{var vec__28713_28726 = cljs.core._nth.call(null,chunk__28704_28723,i__28706_28725);var orig_type_28727 = cljs.core.nth.call(null,vec__28713_28726,0,null);var f_28728 = cljs.core.nth.call(null,vec__28713_28726,1,null);var seq__28707_28729 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28727,cljs.core.PersistentArrayMap.fromArray([orig_type_28727,cljs.core.identity], true)));var chunk__28709_28730 = null;var count__28710_28731 = 0;var i__28711_28732 = 0;while(true){
if((i__28711_28732 < count__28710_28731))
{var vec__28714_28733 = cljs.core._nth.call(null,chunk__28709_28730,i__28711_28732);var actual_type_28734 = cljs.core.nth.call(null,vec__28714_28733,0,null);var factory_28735 = cljs.core.nth.call(null,vec__28714_28733,1,null);var canonical_f_28736 = (cljs.core.truth_(selector_28721)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28720,selector_28721):cljs.core.identity).call(null,factory_28735.call(null,f_28728));dommy.core.update_event_listeners_BANG_.call(null,elem_28720,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28721,actual_type_28734,f_28728], true),canonical_f_28736);
if(cljs.core.truth_(elem_28720.addEventListener))
{elem_28720.addEventListener(cljs.core.name.call(null,actual_type_28734),canonical_f_28736);
} else
{elem_28720.attachEvent(cljs.core.name.call(null,actual_type_28734),canonical_f_28736);
}
{
var G__28737 = seq__28707_28729;
var G__28738 = chunk__28709_28730;
var G__28739 = count__28710_28731;
var G__28740 = (i__28711_28732 + 1);
seq__28707_28729 = G__28737;
chunk__28709_28730 = G__28738;
count__28710_28731 = G__28739;
i__28711_28732 = G__28740;
continue;
}
} else
{var temp__4092__auto___28741 = cljs.core.seq.call(null,seq__28707_28729);if(temp__4092__auto___28741)
{var seq__28707_28742__$1 = temp__4092__auto___28741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28707_28742__$1))
{var c__3844__auto___28743 = cljs.core.chunk_first.call(null,seq__28707_28742__$1);{
var G__28744 = cljs.core.chunk_rest.call(null,seq__28707_28742__$1);
var G__28745 = c__3844__auto___28743;
var G__28746 = cljs.core.count.call(null,c__3844__auto___28743);
var G__28747 = 0;
seq__28707_28729 = G__28744;
chunk__28709_28730 = G__28745;
count__28710_28731 = G__28746;
i__28711_28732 = G__28747;
continue;
}
} else
{var vec__28715_28748 = cljs.core.first.call(null,seq__28707_28742__$1);var actual_type_28749 = cljs.core.nth.call(null,vec__28715_28748,0,null);var factory_28750 = cljs.core.nth.call(null,vec__28715_28748,1,null);var canonical_f_28751 = (cljs.core.truth_(selector_28721)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28720,selector_28721):cljs.core.identity).call(null,factory_28750.call(null,f_28728));dommy.core.update_event_listeners_BANG_.call(null,elem_28720,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28721,actual_type_28749,f_28728], true),canonical_f_28751);
if(cljs.core.truth_(elem_28720.addEventListener))
{elem_28720.addEventListener(cljs.core.name.call(null,actual_type_28749),canonical_f_28751);
} else
{elem_28720.attachEvent(cljs.core.name.call(null,actual_type_28749),canonical_f_28751);
}
{
var G__28752 = cljs.core.next.call(null,seq__28707_28742__$1);
var G__28753 = null;
var G__28754 = 0;
var G__28755 = 0;
seq__28707_28729 = G__28752;
chunk__28709_28730 = G__28753;
count__28710_28731 = G__28754;
i__28711_28732 = G__28755;
continue;
}
}
} else
{}
}
break;
}
{
var G__28756 = seq__28697_28722;
var G__28757 = chunk__28704_28723;
var G__28758 = count__28705_28724;
var G__28759 = (i__28706_28725 + 1);
seq__28697_28722 = G__28756;
chunk__28704_28723 = G__28757;
count__28705_28724 = G__28758;
i__28706_28725 = G__28759;
continue;
}
} else
{var temp__4092__auto___28760 = cljs.core.seq.call(null,seq__28697_28722);if(temp__4092__auto___28760)
{var seq__28697_28761__$1 = temp__4092__auto___28760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28697_28761__$1))
{var c__3844__auto___28762 = cljs.core.chunk_first.call(null,seq__28697_28761__$1);{
var G__28763 = cljs.core.chunk_rest.call(null,seq__28697_28761__$1);
var G__28764 = c__3844__auto___28762;
var G__28765 = cljs.core.count.call(null,c__3844__auto___28762);
var G__28766 = 0;
seq__28697_28722 = G__28763;
chunk__28704_28723 = G__28764;
count__28705_28724 = G__28765;
i__28706_28725 = G__28766;
continue;
}
} else
{var vec__28716_28767 = cljs.core.first.call(null,seq__28697_28761__$1);var orig_type_28768 = cljs.core.nth.call(null,vec__28716_28767,0,null);var f_28769 = cljs.core.nth.call(null,vec__28716_28767,1,null);var seq__28698_28770 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28768,cljs.core.PersistentArrayMap.fromArray([orig_type_28768,cljs.core.identity], true)));var chunk__28700_28771 = null;var count__28701_28772 = 0;var i__28702_28773 = 0;while(true){
if((i__28702_28773 < count__28701_28772))
{var vec__28717_28774 = cljs.core._nth.call(null,chunk__28700_28771,i__28702_28773);var actual_type_28775 = cljs.core.nth.call(null,vec__28717_28774,0,null);var factory_28776 = cljs.core.nth.call(null,vec__28717_28774,1,null);var canonical_f_28777 = (cljs.core.truth_(selector_28721)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28720,selector_28721):cljs.core.identity).call(null,factory_28776.call(null,f_28769));dommy.core.update_event_listeners_BANG_.call(null,elem_28720,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28721,actual_type_28775,f_28769], true),canonical_f_28777);
if(cljs.core.truth_(elem_28720.addEventListener))
{elem_28720.addEventListener(cljs.core.name.call(null,actual_type_28775),canonical_f_28777);
} else
{elem_28720.attachEvent(cljs.core.name.call(null,actual_type_28775),canonical_f_28777);
}
{
var G__28778 = seq__28698_28770;
var G__28779 = chunk__28700_28771;
var G__28780 = count__28701_28772;
var G__28781 = (i__28702_28773 + 1);
seq__28698_28770 = G__28778;
chunk__28700_28771 = G__28779;
count__28701_28772 = G__28780;
i__28702_28773 = G__28781;
continue;
}
} else
{var temp__4092__auto___28782__$1 = cljs.core.seq.call(null,seq__28698_28770);if(temp__4092__auto___28782__$1)
{var seq__28698_28783__$1 = temp__4092__auto___28782__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28698_28783__$1))
{var c__3844__auto___28784 = cljs.core.chunk_first.call(null,seq__28698_28783__$1);{
var G__28785 = cljs.core.chunk_rest.call(null,seq__28698_28783__$1);
var G__28786 = c__3844__auto___28784;
var G__28787 = cljs.core.count.call(null,c__3844__auto___28784);
var G__28788 = 0;
seq__28698_28770 = G__28785;
chunk__28700_28771 = G__28786;
count__28701_28772 = G__28787;
i__28702_28773 = G__28788;
continue;
}
} else
{var vec__28718_28789 = cljs.core.first.call(null,seq__28698_28783__$1);var actual_type_28790 = cljs.core.nth.call(null,vec__28718_28789,0,null);var factory_28791 = cljs.core.nth.call(null,vec__28718_28789,1,null);var canonical_f_28792 = (cljs.core.truth_(selector_28721)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28720,selector_28721):cljs.core.identity).call(null,factory_28791.call(null,f_28769));dommy.core.update_event_listeners_BANG_.call(null,elem_28720,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28721,actual_type_28790,f_28769], true),canonical_f_28792);
if(cljs.core.truth_(elem_28720.addEventListener))
{elem_28720.addEventListener(cljs.core.name.call(null,actual_type_28790),canonical_f_28792);
} else
{elem_28720.attachEvent(cljs.core.name.call(null,actual_type_28790),canonical_f_28792);
}
{
var G__28793 = cljs.core.next.call(null,seq__28698_28783__$1);
var G__28794 = null;
var G__28795 = 0;
var G__28796 = 0;
seq__28698_28770 = G__28793;
chunk__28700_28771 = G__28794;
count__28701_28772 = G__28795;
i__28702_28773 = G__28796;
continue;
}
}
} else
{}
}
break;
}
{
var G__28797 = cljs.core.next.call(null,seq__28697_28761__$1);
var G__28798 = null;
var G__28799 = 0;
var G__28800 = 0;
seq__28697_28722 = G__28797;
chunk__28704_28723 = G__28798;
count__28705_28724 = G__28799;
i__28706_28725 = G__28800;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__28801){
var elem_sel = cljs.core.first(arglist__28801);
var type_fs = cljs.core.rest(arglist__28801);
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
var vec__28825_28848 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28849 = cljs.core.nth.call(null,vec__28825_28848,0,null);var selector_28850 = cljs.core.nth.call(null,vec__28825_28848,1,null);var seq__28826_28851 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28833_28852 = null;var count__28834_28853 = 0;var i__28835_28854 = 0;while(true){
if((i__28835_28854 < count__28834_28853))
{var vec__28842_28855 = cljs.core._nth.call(null,chunk__28833_28852,i__28835_28854);var orig_type_28856 = cljs.core.nth.call(null,vec__28842_28855,0,null);var f_28857 = cljs.core.nth.call(null,vec__28842_28855,1,null);var seq__28836_28858 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28856,cljs.core.PersistentArrayMap.fromArray([orig_type_28856,cljs.core.identity], true)));var chunk__28838_28859 = null;var count__28839_28860 = 0;var i__28840_28861 = 0;while(true){
if((i__28840_28861 < count__28839_28860))
{var vec__28843_28862 = cljs.core._nth.call(null,chunk__28838_28859,i__28840_28861);var actual_type_28863 = cljs.core.nth.call(null,vec__28843_28862,0,null);var __28864 = cljs.core.nth.call(null,vec__28843_28862,1,null);var keys_28865 = cljs.core.PersistentVector.fromArray([selector_28850,actual_type_28863,f_28857], true);var canonical_f_28866 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28849),keys_28865);dommy.core.update_event_listeners_BANG_.call(null,elem_28849,dommy.utils.dissoc_in,keys_28865);
if(cljs.core.truth_(elem_28849.removeEventListener))
{elem_28849.removeEventListener(cljs.core.name.call(null,actual_type_28863),canonical_f_28866);
} else
{elem_28849.detachEvent(cljs.core.name.call(null,actual_type_28863),canonical_f_28866);
}
{
var G__28867 = seq__28836_28858;
var G__28868 = chunk__28838_28859;
var G__28869 = count__28839_28860;
var G__28870 = (i__28840_28861 + 1);
seq__28836_28858 = G__28867;
chunk__28838_28859 = G__28868;
count__28839_28860 = G__28869;
i__28840_28861 = G__28870;
continue;
}
} else
{var temp__4092__auto___28871 = cljs.core.seq.call(null,seq__28836_28858);if(temp__4092__auto___28871)
{var seq__28836_28872__$1 = temp__4092__auto___28871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28836_28872__$1))
{var c__3844__auto___28873 = cljs.core.chunk_first.call(null,seq__28836_28872__$1);{
var G__28874 = cljs.core.chunk_rest.call(null,seq__28836_28872__$1);
var G__28875 = c__3844__auto___28873;
var G__28876 = cljs.core.count.call(null,c__3844__auto___28873);
var G__28877 = 0;
seq__28836_28858 = G__28874;
chunk__28838_28859 = G__28875;
count__28839_28860 = G__28876;
i__28840_28861 = G__28877;
continue;
}
} else
{var vec__28844_28878 = cljs.core.first.call(null,seq__28836_28872__$1);var actual_type_28879 = cljs.core.nth.call(null,vec__28844_28878,0,null);var __28880 = cljs.core.nth.call(null,vec__28844_28878,1,null);var keys_28881 = cljs.core.PersistentVector.fromArray([selector_28850,actual_type_28879,f_28857], true);var canonical_f_28882 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28849),keys_28881);dommy.core.update_event_listeners_BANG_.call(null,elem_28849,dommy.utils.dissoc_in,keys_28881);
if(cljs.core.truth_(elem_28849.removeEventListener))
{elem_28849.removeEventListener(cljs.core.name.call(null,actual_type_28879),canonical_f_28882);
} else
{elem_28849.detachEvent(cljs.core.name.call(null,actual_type_28879),canonical_f_28882);
}
{
var G__28883 = cljs.core.next.call(null,seq__28836_28872__$1);
var G__28884 = null;
var G__28885 = 0;
var G__28886 = 0;
seq__28836_28858 = G__28883;
chunk__28838_28859 = G__28884;
count__28839_28860 = G__28885;
i__28840_28861 = G__28886;
continue;
}
}
} else
{}
}
break;
}
{
var G__28887 = seq__28826_28851;
var G__28888 = chunk__28833_28852;
var G__28889 = count__28834_28853;
var G__28890 = (i__28835_28854 + 1);
seq__28826_28851 = G__28887;
chunk__28833_28852 = G__28888;
count__28834_28853 = G__28889;
i__28835_28854 = G__28890;
continue;
}
} else
{var temp__4092__auto___28891 = cljs.core.seq.call(null,seq__28826_28851);if(temp__4092__auto___28891)
{var seq__28826_28892__$1 = temp__4092__auto___28891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28826_28892__$1))
{var c__3844__auto___28893 = cljs.core.chunk_first.call(null,seq__28826_28892__$1);{
var G__28894 = cljs.core.chunk_rest.call(null,seq__28826_28892__$1);
var G__28895 = c__3844__auto___28893;
var G__28896 = cljs.core.count.call(null,c__3844__auto___28893);
var G__28897 = 0;
seq__28826_28851 = G__28894;
chunk__28833_28852 = G__28895;
count__28834_28853 = G__28896;
i__28835_28854 = G__28897;
continue;
}
} else
{var vec__28845_28898 = cljs.core.first.call(null,seq__28826_28892__$1);var orig_type_28899 = cljs.core.nth.call(null,vec__28845_28898,0,null);var f_28900 = cljs.core.nth.call(null,vec__28845_28898,1,null);var seq__28827_28901 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28899,cljs.core.PersistentArrayMap.fromArray([orig_type_28899,cljs.core.identity], true)));var chunk__28829_28902 = null;var count__28830_28903 = 0;var i__28831_28904 = 0;while(true){
if((i__28831_28904 < count__28830_28903))
{var vec__28846_28905 = cljs.core._nth.call(null,chunk__28829_28902,i__28831_28904);var actual_type_28906 = cljs.core.nth.call(null,vec__28846_28905,0,null);var __28907 = cljs.core.nth.call(null,vec__28846_28905,1,null);var keys_28908 = cljs.core.PersistentVector.fromArray([selector_28850,actual_type_28906,f_28900], true);var canonical_f_28909 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28849),keys_28908);dommy.core.update_event_listeners_BANG_.call(null,elem_28849,dommy.utils.dissoc_in,keys_28908);
if(cljs.core.truth_(elem_28849.removeEventListener))
{elem_28849.removeEventListener(cljs.core.name.call(null,actual_type_28906),canonical_f_28909);
} else
{elem_28849.detachEvent(cljs.core.name.call(null,actual_type_28906),canonical_f_28909);
}
{
var G__28910 = seq__28827_28901;
var G__28911 = chunk__28829_28902;
var G__28912 = count__28830_28903;
var G__28913 = (i__28831_28904 + 1);
seq__28827_28901 = G__28910;
chunk__28829_28902 = G__28911;
count__28830_28903 = G__28912;
i__28831_28904 = G__28913;
continue;
}
} else
{var temp__4092__auto___28914__$1 = cljs.core.seq.call(null,seq__28827_28901);if(temp__4092__auto___28914__$1)
{var seq__28827_28915__$1 = temp__4092__auto___28914__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28827_28915__$1))
{var c__3844__auto___28916 = cljs.core.chunk_first.call(null,seq__28827_28915__$1);{
var G__28917 = cljs.core.chunk_rest.call(null,seq__28827_28915__$1);
var G__28918 = c__3844__auto___28916;
var G__28919 = cljs.core.count.call(null,c__3844__auto___28916);
var G__28920 = 0;
seq__28827_28901 = G__28917;
chunk__28829_28902 = G__28918;
count__28830_28903 = G__28919;
i__28831_28904 = G__28920;
continue;
}
} else
{var vec__28847_28921 = cljs.core.first.call(null,seq__28827_28915__$1);var actual_type_28922 = cljs.core.nth.call(null,vec__28847_28921,0,null);var __28923 = cljs.core.nth.call(null,vec__28847_28921,1,null);var keys_28924 = cljs.core.PersistentVector.fromArray([selector_28850,actual_type_28922,f_28900], true);var canonical_f_28925 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28849),keys_28924);dommy.core.update_event_listeners_BANG_.call(null,elem_28849,dommy.utils.dissoc_in,keys_28924);
if(cljs.core.truth_(elem_28849.removeEventListener))
{elem_28849.removeEventListener(cljs.core.name.call(null,actual_type_28922),canonical_f_28925);
} else
{elem_28849.detachEvent(cljs.core.name.call(null,actual_type_28922),canonical_f_28925);
}
{
var G__28926 = cljs.core.next.call(null,seq__28827_28915__$1);
var G__28927 = null;
var G__28928 = 0;
var G__28929 = 0;
seq__28827_28901 = G__28926;
chunk__28829_28902 = G__28927;
count__28830_28903 = G__28928;
i__28831_28904 = G__28929;
continue;
}
}
} else
{}
}
break;
}
{
var G__28930 = cljs.core.next.call(null,seq__28826_28892__$1);
var G__28931 = null;
var G__28932 = 0;
var G__28933 = 0;
seq__28826_28851 = G__28930;
chunk__28833_28852 = G__28931;
count__28834_28853 = G__28932;
i__28835_28854 = G__28933;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__28934){
var elem_sel = cljs.core.first(arglist__28934);
var type_fs = cljs.core.rest(arglist__28934);
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
var vec__28942_28949 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28950 = cljs.core.nth.call(null,vec__28942_28949,0,null);var selector_28951 = cljs.core.nth.call(null,vec__28942_28949,1,null);var seq__28943_28952 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28944_28953 = null;var count__28945_28954 = 0;var i__28946_28955 = 0;while(true){
if((i__28946_28955 < count__28945_28954))
{var vec__28947_28956 = cljs.core._nth.call(null,chunk__28944_28953,i__28946_28955);var type_28957 = cljs.core.nth.call(null,vec__28947_28956,0,null);var f_28958 = cljs.core.nth.call(null,vec__28947_28956,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28957,((function (seq__28943_28952,chunk__28944_28953,count__28945_28954,i__28946_28955,vec__28947_28956,type_28957,f_28958){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28957,this_fn);
return f_28958.call(null,e);
});})(seq__28943_28952,chunk__28944_28953,count__28945_28954,i__28946_28955,vec__28947_28956,type_28957,f_28958))
);
{
var G__28959 = seq__28943_28952;
var G__28960 = chunk__28944_28953;
var G__28961 = count__28945_28954;
var G__28962 = (i__28946_28955 + 1);
seq__28943_28952 = G__28959;
chunk__28944_28953 = G__28960;
count__28945_28954 = G__28961;
i__28946_28955 = G__28962;
continue;
}
} else
{var temp__4092__auto___28963 = cljs.core.seq.call(null,seq__28943_28952);if(temp__4092__auto___28963)
{var seq__28943_28964__$1 = temp__4092__auto___28963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28943_28964__$1))
{var c__3844__auto___28965 = cljs.core.chunk_first.call(null,seq__28943_28964__$1);{
var G__28966 = cljs.core.chunk_rest.call(null,seq__28943_28964__$1);
var G__28967 = c__3844__auto___28965;
var G__28968 = cljs.core.count.call(null,c__3844__auto___28965);
var G__28969 = 0;
seq__28943_28952 = G__28966;
chunk__28944_28953 = G__28967;
count__28945_28954 = G__28968;
i__28946_28955 = G__28969;
continue;
}
} else
{var vec__28948_28970 = cljs.core.first.call(null,seq__28943_28964__$1);var type_28971 = cljs.core.nth.call(null,vec__28948_28970,0,null);var f_28972 = cljs.core.nth.call(null,vec__28948_28970,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28971,((function (seq__28943_28952,chunk__28944_28953,count__28945_28954,i__28946_28955,vec__28948_28970,type_28971,f_28972,seq__28943_28964__$1,temp__4092__auto___28963){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28971,this_fn);
return f_28972.call(null,e);
});})(seq__28943_28952,chunk__28944_28953,count__28945_28954,i__28946_28955,vec__28948_28970,type_28971,f_28972,seq__28943_28964__$1,temp__4092__auto___28963))
);
{
var G__28973 = cljs.core.next.call(null,seq__28943_28964__$1);
var G__28974 = null;
var G__28975 = 0;
var G__28976 = 0;
seq__28943_28952 = G__28973;
chunk__28944_28953 = G__28974;
count__28945_28954 = G__28975;
i__28946_28955 = G__28976;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__28977){
var elem_sel = cljs.core.first(arglist__28977);
var type_fs = cljs.core.rest(arglist__28977);
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
var fire_BANG___delegate = function (node,event_type,p__28978){var vec__28980 = p__28978;var update_event_BANG_ = cljs.core.nth.call(null,vec__28980,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__28978 = null;if (arguments.length > 2) {
  p__28978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__28978);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__28981){
var node = cljs.core.first(arglist__28981);
arglist__28981 = cljs.core.next(arglist__28981);
var event_type = cljs.core.first(arglist__28981);
var p__28978 = cljs.core.rest(arglist__28981);
return fire_BANG___delegate(node,event_type,p__28978);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map