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
var append_BANG___2 = (function (parent,child){var G__16688 = dommy.template.__GT_node_like.call(null,parent);G__16688.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16688;
});
var append_BANG___3 = (function() { 
var G__16693__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16689_16694 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16690_16695 = null;var count__16691_16696 = 0;var i__16692_16697 = 0;while(true){
if((i__16692_16697 < count__16691_16696))
{var c_16698 = cljs.core._nth.call(null,chunk__16690_16695,i__16692_16697);append_BANG_.call(null,parent__$1,c_16698);
{
var G__16699 = seq__16689_16694;
var G__16700 = chunk__16690_16695;
var G__16701 = count__16691_16696;
var G__16702 = (i__16692_16697 + 1);
seq__16689_16694 = G__16699;
chunk__16690_16695 = G__16700;
count__16691_16696 = G__16701;
i__16692_16697 = G__16702;
continue;
}
} else
{var temp__4092__auto___16703 = cljs.core.seq.call(null,seq__16689_16694);if(temp__4092__auto___16703)
{var seq__16689_16704__$1 = temp__4092__auto___16703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16689_16704__$1))
{var c__3844__auto___16705 = cljs.core.chunk_first.call(null,seq__16689_16704__$1);{
var G__16706 = cljs.core.chunk_rest.call(null,seq__16689_16704__$1);
var G__16707 = c__3844__auto___16705;
var G__16708 = cljs.core.count.call(null,c__3844__auto___16705);
var G__16709 = 0;
seq__16689_16694 = G__16706;
chunk__16690_16695 = G__16707;
count__16691_16696 = G__16708;
i__16692_16697 = G__16709;
continue;
}
} else
{var c_16710 = cljs.core.first.call(null,seq__16689_16704__$1);append_BANG_.call(null,parent__$1,c_16710);
{
var G__16711 = cljs.core.next.call(null,seq__16689_16704__$1);
var G__16712 = null;
var G__16713 = 0;
var G__16714 = 0;
seq__16689_16694 = G__16711;
chunk__16690_16695 = G__16712;
count__16691_16696 = G__16713;
i__16692_16697 = G__16714;
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
var G__16693 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16693__delegate.call(this,parent,child,more_children);};
G__16693.cljs$lang$maxFixedArity = 2;
G__16693.cljs$lang$applyTo = (function (arglist__16715){
var parent = cljs.core.first(arglist__16715);
arglist__16715 = cljs.core.next(arglist__16715);
var child = cljs.core.first(arglist__16715);
var more_children = cljs.core.rest(arglist__16715);
return G__16693__delegate(parent,child,more_children);
});
G__16693.cljs$core$IFn$_invoke$arity$variadic = G__16693__delegate;
return G__16693;
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
var G__16724__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16720_16725 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16721_16726 = null;var count__16722_16727 = 0;var i__16723_16728 = 0;while(true){
if((i__16723_16728 < count__16722_16727))
{var c_16729 = cljs.core._nth.call(null,chunk__16721_16726,i__16723_16728);prepend_BANG_.call(null,parent__$1,c_16729);
{
var G__16730 = seq__16720_16725;
var G__16731 = chunk__16721_16726;
var G__16732 = count__16722_16727;
var G__16733 = (i__16723_16728 + 1);
seq__16720_16725 = G__16730;
chunk__16721_16726 = G__16731;
count__16722_16727 = G__16732;
i__16723_16728 = G__16733;
continue;
}
} else
{var temp__4092__auto___16734 = cljs.core.seq.call(null,seq__16720_16725);if(temp__4092__auto___16734)
{var seq__16720_16735__$1 = temp__4092__auto___16734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16720_16735__$1))
{var c__3844__auto___16736 = cljs.core.chunk_first.call(null,seq__16720_16735__$1);{
var G__16737 = cljs.core.chunk_rest.call(null,seq__16720_16735__$1);
var G__16738 = c__3844__auto___16736;
var G__16739 = cljs.core.count.call(null,c__3844__auto___16736);
var G__16740 = 0;
seq__16720_16725 = G__16737;
chunk__16721_16726 = G__16738;
count__16722_16727 = G__16739;
i__16723_16728 = G__16740;
continue;
}
} else
{var c_16741 = cljs.core.first.call(null,seq__16720_16735__$1);prepend_BANG_.call(null,parent__$1,c_16741);
{
var G__16742 = cljs.core.next.call(null,seq__16720_16735__$1);
var G__16743 = null;
var G__16744 = 0;
var G__16745 = 0;
seq__16720_16725 = G__16742;
chunk__16721_16726 = G__16743;
count__16722_16727 = G__16744;
i__16723_16728 = G__16745;
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
var G__16724 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16724__delegate.call(this,parent,child,more_children);};
G__16724.cljs$lang$maxFixedArity = 2;
G__16724.cljs$lang$applyTo = (function (arglist__16746){
var parent = cljs.core.first(arglist__16746);
arglist__16746 = cljs.core.next(arglist__16746);
var child = cljs.core.first(arglist__16746);
var more_children = cljs.core.rest(arglist__16746);
return G__16724__delegate(parent,child,more_children);
});
G__16724.cljs$core$IFn$_invoke$arity$variadic = G__16724__delegate;
return G__16724;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16747 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16747))
{var next_16748 = temp__4090__auto___16747;parent.insertBefore(actual_node,next_16748);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16750 = dommy.template.__GT_node_like.call(null,parent);G__16750.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16750,node_like);
return G__16750;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16752 = elem__$1.parentNode;G__16752.removeChild(elem__$1);
return G__16752;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16758){var vec__16759 = p__16758;var k = cljs.core.nth.call(null,vec__16759,0,null);var v = cljs.core.nth.call(null,vec__16759,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16760 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16760 = (function (v,k,vec__16759,p__16758,container,key_selectors_map,template,selector_map,meta16761){
this.v = v;
this.k = k;
this.vec__16759 = vec__16759;
this.p__16758 = p__16758;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16761 = meta16761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16760.cljs$lang$type = true;
dommy.core.t16760.cljs$lang$ctorStr = "dommy.core/t16760";
dommy.core.t16760.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t16760");
});
dommy.core.t16760.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16762){var self__ = this;
var _16762__$1 = this;return self__.meta16761;
});
dommy.core.t16760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16762,meta16761__$1){var self__ = this;
var _16762__$1 = this;return (new dommy.core.t16760(self__.v,self__.k,self__.vec__16759,self__.p__16758,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16761__$1));
});
dommy.core.__GT_t16760 = (function __GT_t16760(v__$1,k__$1,vec__16759__$1,p__16758__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16761){return (new dommy.core.t16760(v__$1,k__$1,vec__16759__$1,p__16758__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16761));
});
}
return (new dommy.core.t16760(v,k,vec__16759,p__16758,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16763_SHARP_){return p1__16763_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16764_SHARP_){return !((p1__16764_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16765){var vec__16766 = p__16765;var special_mouse_event = cljs.core.nth.call(null,vec__16766,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16766,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16767){
var elem = cljs.core.first(arglist__16767);
arglist__16767 = cljs.core.next(arglist__16767);
var f = cljs.core.first(arglist__16767);
var args = cljs.core.rest(arglist__16767);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16768_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16768_SHARP_));
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
var vec__16792_16815 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16816 = cljs.core.nth.call(null,vec__16792_16815,0,null);var selector_16817 = cljs.core.nth.call(null,vec__16792_16815,1,null);var seq__16793_16818 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16800_16819 = null;var count__16801_16820 = 0;var i__16802_16821 = 0;while(true){
if((i__16802_16821 < count__16801_16820))
{var vec__16809_16822 = cljs.core._nth.call(null,chunk__16800_16819,i__16802_16821);var orig_type_16823 = cljs.core.nth.call(null,vec__16809_16822,0,null);var f_16824 = cljs.core.nth.call(null,vec__16809_16822,1,null);var seq__16803_16825 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16823,cljs.core.PersistentArrayMap.fromArray([orig_type_16823,cljs.core.identity], true)));var chunk__16805_16826 = null;var count__16806_16827 = 0;var i__16807_16828 = 0;while(true){
if((i__16807_16828 < count__16806_16827))
{var vec__16810_16829 = cljs.core._nth.call(null,chunk__16805_16826,i__16807_16828);var actual_type_16830 = cljs.core.nth.call(null,vec__16810_16829,0,null);var factory_16831 = cljs.core.nth.call(null,vec__16810_16829,1,null);var canonical_f_16832 = (cljs.core.truth_(selector_16817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16816,selector_16817):cljs.core.identity).call(null,factory_16831.call(null,f_16824));dommy.core.update_event_listeners_BANG_.call(null,elem_16816,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16817,actual_type_16830,f_16824], true),canonical_f_16832);
if(cljs.core.truth_(elem_16816.addEventListener))
{elem_16816.addEventListener(cljs.core.name.call(null,actual_type_16830),canonical_f_16832);
} else
{elem_16816.attachEvent(cljs.core.name.call(null,actual_type_16830),canonical_f_16832);
}
{
var G__16833 = seq__16803_16825;
var G__16834 = chunk__16805_16826;
var G__16835 = count__16806_16827;
var G__16836 = (i__16807_16828 + 1);
seq__16803_16825 = G__16833;
chunk__16805_16826 = G__16834;
count__16806_16827 = G__16835;
i__16807_16828 = G__16836;
continue;
}
} else
{var temp__4092__auto___16837 = cljs.core.seq.call(null,seq__16803_16825);if(temp__4092__auto___16837)
{var seq__16803_16838__$1 = temp__4092__auto___16837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16803_16838__$1))
{var c__3844__auto___16839 = cljs.core.chunk_first.call(null,seq__16803_16838__$1);{
var G__16840 = cljs.core.chunk_rest.call(null,seq__16803_16838__$1);
var G__16841 = c__3844__auto___16839;
var G__16842 = cljs.core.count.call(null,c__3844__auto___16839);
var G__16843 = 0;
seq__16803_16825 = G__16840;
chunk__16805_16826 = G__16841;
count__16806_16827 = G__16842;
i__16807_16828 = G__16843;
continue;
}
} else
{var vec__16811_16844 = cljs.core.first.call(null,seq__16803_16838__$1);var actual_type_16845 = cljs.core.nth.call(null,vec__16811_16844,0,null);var factory_16846 = cljs.core.nth.call(null,vec__16811_16844,1,null);var canonical_f_16847 = (cljs.core.truth_(selector_16817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16816,selector_16817):cljs.core.identity).call(null,factory_16846.call(null,f_16824));dommy.core.update_event_listeners_BANG_.call(null,elem_16816,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16817,actual_type_16845,f_16824], true),canonical_f_16847);
if(cljs.core.truth_(elem_16816.addEventListener))
{elem_16816.addEventListener(cljs.core.name.call(null,actual_type_16845),canonical_f_16847);
} else
{elem_16816.attachEvent(cljs.core.name.call(null,actual_type_16845),canonical_f_16847);
}
{
var G__16848 = cljs.core.next.call(null,seq__16803_16838__$1);
var G__16849 = null;
var G__16850 = 0;
var G__16851 = 0;
seq__16803_16825 = G__16848;
chunk__16805_16826 = G__16849;
count__16806_16827 = G__16850;
i__16807_16828 = G__16851;
continue;
}
}
} else
{}
}
break;
}
{
var G__16852 = seq__16793_16818;
var G__16853 = chunk__16800_16819;
var G__16854 = count__16801_16820;
var G__16855 = (i__16802_16821 + 1);
seq__16793_16818 = G__16852;
chunk__16800_16819 = G__16853;
count__16801_16820 = G__16854;
i__16802_16821 = G__16855;
continue;
}
} else
{var temp__4092__auto___16856 = cljs.core.seq.call(null,seq__16793_16818);if(temp__4092__auto___16856)
{var seq__16793_16857__$1 = temp__4092__auto___16856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16793_16857__$1))
{var c__3844__auto___16858 = cljs.core.chunk_first.call(null,seq__16793_16857__$1);{
var G__16859 = cljs.core.chunk_rest.call(null,seq__16793_16857__$1);
var G__16860 = c__3844__auto___16858;
var G__16861 = cljs.core.count.call(null,c__3844__auto___16858);
var G__16862 = 0;
seq__16793_16818 = G__16859;
chunk__16800_16819 = G__16860;
count__16801_16820 = G__16861;
i__16802_16821 = G__16862;
continue;
}
} else
{var vec__16812_16863 = cljs.core.first.call(null,seq__16793_16857__$1);var orig_type_16864 = cljs.core.nth.call(null,vec__16812_16863,0,null);var f_16865 = cljs.core.nth.call(null,vec__16812_16863,1,null);var seq__16794_16866 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16864,cljs.core.PersistentArrayMap.fromArray([orig_type_16864,cljs.core.identity], true)));var chunk__16796_16867 = null;var count__16797_16868 = 0;var i__16798_16869 = 0;while(true){
if((i__16798_16869 < count__16797_16868))
{var vec__16813_16870 = cljs.core._nth.call(null,chunk__16796_16867,i__16798_16869);var actual_type_16871 = cljs.core.nth.call(null,vec__16813_16870,0,null);var factory_16872 = cljs.core.nth.call(null,vec__16813_16870,1,null);var canonical_f_16873 = (cljs.core.truth_(selector_16817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16816,selector_16817):cljs.core.identity).call(null,factory_16872.call(null,f_16865));dommy.core.update_event_listeners_BANG_.call(null,elem_16816,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16817,actual_type_16871,f_16865], true),canonical_f_16873);
if(cljs.core.truth_(elem_16816.addEventListener))
{elem_16816.addEventListener(cljs.core.name.call(null,actual_type_16871),canonical_f_16873);
} else
{elem_16816.attachEvent(cljs.core.name.call(null,actual_type_16871),canonical_f_16873);
}
{
var G__16874 = seq__16794_16866;
var G__16875 = chunk__16796_16867;
var G__16876 = count__16797_16868;
var G__16877 = (i__16798_16869 + 1);
seq__16794_16866 = G__16874;
chunk__16796_16867 = G__16875;
count__16797_16868 = G__16876;
i__16798_16869 = G__16877;
continue;
}
} else
{var temp__4092__auto___16878__$1 = cljs.core.seq.call(null,seq__16794_16866);if(temp__4092__auto___16878__$1)
{var seq__16794_16879__$1 = temp__4092__auto___16878__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16794_16879__$1))
{var c__3844__auto___16880 = cljs.core.chunk_first.call(null,seq__16794_16879__$1);{
var G__16881 = cljs.core.chunk_rest.call(null,seq__16794_16879__$1);
var G__16882 = c__3844__auto___16880;
var G__16883 = cljs.core.count.call(null,c__3844__auto___16880);
var G__16884 = 0;
seq__16794_16866 = G__16881;
chunk__16796_16867 = G__16882;
count__16797_16868 = G__16883;
i__16798_16869 = G__16884;
continue;
}
} else
{var vec__16814_16885 = cljs.core.first.call(null,seq__16794_16879__$1);var actual_type_16886 = cljs.core.nth.call(null,vec__16814_16885,0,null);var factory_16887 = cljs.core.nth.call(null,vec__16814_16885,1,null);var canonical_f_16888 = (cljs.core.truth_(selector_16817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16816,selector_16817):cljs.core.identity).call(null,factory_16887.call(null,f_16865));dommy.core.update_event_listeners_BANG_.call(null,elem_16816,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16817,actual_type_16886,f_16865], true),canonical_f_16888);
if(cljs.core.truth_(elem_16816.addEventListener))
{elem_16816.addEventListener(cljs.core.name.call(null,actual_type_16886),canonical_f_16888);
} else
{elem_16816.attachEvent(cljs.core.name.call(null,actual_type_16886),canonical_f_16888);
}
{
var G__16889 = cljs.core.next.call(null,seq__16794_16879__$1);
var G__16890 = null;
var G__16891 = 0;
var G__16892 = 0;
seq__16794_16866 = G__16889;
chunk__16796_16867 = G__16890;
count__16797_16868 = G__16891;
i__16798_16869 = G__16892;
continue;
}
}
} else
{}
}
break;
}
{
var G__16893 = cljs.core.next.call(null,seq__16793_16857__$1);
var G__16894 = null;
var G__16895 = 0;
var G__16896 = 0;
seq__16793_16818 = G__16893;
chunk__16800_16819 = G__16894;
count__16801_16820 = G__16895;
i__16802_16821 = G__16896;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16897){
var elem_sel = cljs.core.first(arglist__16897);
var type_fs = cljs.core.rest(arglist__16897);
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
var vec__16921_16944 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16945 = cljs.core.nth.call(null,vec__16921_16944,0,null);var selector_16946 = cljs.core.nth.call(null,vec__16921_16944,1,null);var seq__16922_16947 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16929_16948 = null;var count__16930_16949 = 0;var i__16931_16950 = 0;while(true){
if((i__16931_16950 < count__16930_16949))
{var vec__16938_16951 = cljs.core._nth.call(null,chunk__16929_16948,i__16931_16950);var orig_type_16952 = cljs.core.nth.call(null,vec__16938_16951,0,null);var f_16953 = cljs.core.nth.call(null,vec__16938_16951,1,null);var seq__16932_16954 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16952,cljs.core.PersistentArrayMap.fromArray([orig_type_16952,cljs.core.identity], true)));var chunk__16934_16955 = null;var count__16935_16956 = 0;var i__16936_16957 = 0;while(true){
if((i__16936_16957 < count__16935_16956))
{var vec__16939_16958 = cljs.core._nth.call(null,chunk__16934_16955,i__16936_16957);var actual_type_16959 = cljs.core.nth.call(null,vec__16939_16958,0,null);var __16960 = cljs.core.nth.call(null,vec__16939_16958,1,null);var keys_16961 = cljs.core.PersistentVector.fromArray([selector_16946,actual_type_16959,f_16953], true);var canonical_f_16962 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16945),keys_16961);dommy.core.update_event_listeners_BANG_.call(null,elem_16945,dommy.utils.dissoc_in,keys_16961);
if(cljs.core.truth_(elem_16945.removeEventListener))
{elem_16945.removeEventListener(cljs.core.name.call(null,actual_type_16959),canonical_f_16962);
} else
{elem_16945.detachEvent(cljs.core.name.call(null,actual_type_16959),canonical_f_16962);
}
{
var G__16963 = seq__16932_16954;
var G__16964 = chunk__16934_16955;
var G__16965 = count__16935_16956;
var G__16966 = (i__16936_16957 + 1);
seq__16932_16954 = G__16963;
chunk__16934_16955 = G__16964;
count__16935_16956 = G__16965;
i__16936_16957 = G__16966;
continue;
}
} else
{var temp__4092__auto___16967 = cljs.core.seq.call(null,seq__16932_16954);if(temp__4092__auto___16967)
{var seq__16932_16968__$1 = temp__4092__auto___16967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16932_16968__$1))
{var c__3844__auto___16969 = cljs.core.chunk_first.call(null,seq__16932_16968__$1);{
var G__16970 = cljs.core.chunk_rest.call(null,seq__16932_16968__$1);
var G__16971 = c__3844__auto___16969;
var G__16972 = cljs.core.count.call(null,c__3844__auto___16969);
var G__16973 = 0;
seq__16932_16954 = G__16970;
chunk__16934_16955 = G__16971;
count__16935_16956 = G__16972;
i__16936_16957 = G__16973;
continue;
}
} else
{var vec__16940_16974 = cljs.core.first.call(null,seq__16932_16968__$1);var actual_type_16975 = cljs.core.nth.call(null,vec__16940_16974,0,null);var __16976 = cljs.core.nth.call(null,vec__16940_16974,1,null);var keys_16977 = cljs.core.PersistentVector.fromArray([selector_16946,actual_type_16975,f_16953], true);var canonical_f_16978 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16945),keys_16977);dommy.core.update_event_listeners_BANG_.call(null,elem_16945,dommy.utils.dissoc_in,keys_16977);
if(cljs.core.truth_(elem_16945.removeEventListener))
{elem_16945.removeEventListener(cljs.core.name.call(null,actual_type_16975),canonical_f_16978);
} else
{elem_16945.detachEvent(cljs.core.name.call(null,actual_type_16975),canonical_f_16978);
}
{
var G__16979 = cljs.core.next.call(null,seq__16932_16968__$1);
var G__16980 = null;
var G__16981 = 0;
var G__16982 = 0;
seq__16932_16954 = G__16979;
chunk__16934_16955 = G__16980;
count__16935_16956 = G__16981;
i__16936_16957 = G__16982;
continue;
}
}
} else
{}
}
break;
}
{
var G__16983 = seq__16922_16947;
var G__16984 = chunk__16929_16948;
var G__16985 = count__16930_16949;
var G__16986 = (i__16931_16950 + 1);
seq__16922_16947 = G__16983;
chunk__16929_16948 = G__16984;
count__16930_16949 = G__16985;
i__16931_16950 = G__16986;
continue;
}
} else
{var temp__4092__auto___16987 = cljs.core.seq.call(null,seq__16922_16947);if(temp__4092__auto___16987)
{var seq__16922_16988__$1 = temp__4092__auto___16987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16922_16988__$1))
{var c__3844__auto___16989 = cljs.core.chunk_first.call(null,seq__16922_16988__$1);{
var G__16990 = cljs.core.chunk_rest.call(null,seq__16922_16988__$1);
var G__16991 = c__3844__auto___16989;
var G__16992 = cljs.core.count.call(null,c__3844__auto___16989);
var G__16993 = 0;
seq__16922_16947 = G__16990;
chunk__16929_16948 = G__16991;
count__16930_16949 = G__16992;
i__16931_16950 = G__16993;
continue;
}
} else
{var vec__16941_16994 = cljs.core.first.call(null,seq__16922_16988__$1);var orig_type_16995 = cljs.core.nth.call(null,vec__16941_16994,0,null);var f_16996 = cljs.core.nth.call(null,vec__16941_16994,1,null);var seq__16923_16997 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16995,cljs.core.PersistentArrayMap.fromArray([orig_type_16995,cljs.core.identity], true)));var chunk__16925_16998 = null;var count__16926_16999 = 0;var i__16927_17000 = 0;while(true){
if((i__16927_17000 < count__16926_16999))
{var vec__16942_17001 = cljs.core._nth.call(null,chunk__16925_16998,i__16927_17000);var actual_type_17002 = cljs.core.nth.call(null,vec__16942_17001,0,null);var __17003 = cljs.core.nth.call(null,vec__16942_17001,1,null);var keys_17004 = cljs.core.PersistentVector.fromArray([selector_16946,actual_type_17002,f_16996], true);var canonical_f_17005 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16945),keys_17004);dommy.core.update_event_listeners_BANG_.call(null,elem_16945,dommy.utils.dissoc_in,keys_17004);
if(cljs.core.truth_(elem_16945.removeEventListener))
{elem_16945.removeEventListener(cljs.core.name.call(null,actual_type_17002),canonical_f_17005);
} else
{elem_16945.detachEvent(cljs.core.name.call(null,actual_type_17002),canonical_f_17005);
}
{
var G__17006 = seq__16923_16997;
var G__17007 = chunk__16925_16998;
var G__17008 = count__16926_16999;
var G__17009 = (i__16927_17000 + 1);
seq__16923_16997 = G__17006;
chunk__16925_16998 = G__17007;
count__16926_16999 = G__17008;
i__16927_17000 = G__17009;
continue;
}
} else
{var temp__4092__auto___17010__$1 = cljs.core.seq.call(null,seq__16923_16997);if(temp__4092__auto___17010__$1)
{var seq__16923_17011__$1 = temp__4092__auto___17010__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16923_17011__$1))
{var c__3844__auto___17012 = cljs.core.chunk_first.call(null,seq__16923_17011__$1);{
var G__17013 = cljs.core.chunk_rest.call(null,seq__16923_17011__$1);
var G__17014 = c__3844__auto___17012;
var G__17015 = cljs.core.count.call(null,c__3844__auto___17012);
var G__17016 = 0;
seq__16923_16997 = G__17013;
chunk__16925_16998 = G__17014;
count__16926_16999 = G__17015;
i__16927_17000 = G__17016;
continue;
}
} else
{var vec__16943_17017 = cljs.core.first.call(null,seq__16923_17011__$1);var actual_type_17018 = cljs.core.nth.call(null,vec__16943_17017,0,null);var __17019 = cljs.core.nth.call(null,vec__16943_17017,1,null);var keys_17020 = cljs.core.PersistentVector.fromArray([selector_16946,actual_type_17018,f_16996], true);var canonical_f_17021 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16945),keys_17020);dommy.core.update_event_listeners_BANG_.call(null,elem_16945,dommy.utils.dissoc_in,keys_17020);
if(cljs.core.truth_(elem_16945.removeEventListener))
{elem_16945.removeEventListener(cljs.core.name.call(null,actual_type_17018),canonical_f_17021);
} else
{elem_16945.detachEvent(cljs.core.name.call(null,actual_type_17018),canonical_f_17021);
}
{
var G__17022 = cljs.core.next.call(null,seq__16923_17011__$1);
var G__17023 = null;
var G__17024 = 0;
var G__17025 = 0;
seq__16923_16997 = G__17022;
chunk__16925_16998 = G__17023;
count__16926_16999 = G__17024;
i__16927_17000 = G__17025;
continue;
}
}
} else
{}
}
break;
}
{
var G__17026 = cljs.core.next.call(null,seq__16922_16988__$1);
var G__17027 = null;
var G__17028 = 0;
var G__17029 = 0;
seq__16922_16947 = G__17026;
chunk__16929_16948 = G__17027;
count__16930_16949 = G__17028;
i__16931_16950 = G__17029;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__17030){
var elem_sel = cljs.core.first(arglist__17030);
var type_fs = cljs.core.rest(arglist__17030);
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
var vec__17038_17045 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17046 = cljs.core.nth.call(null,vec__17038_17045,0,null);var selector_17047 = cljs.core.nth.call(null,vec__17038_17045,1,null);var seq__17039_17048 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__17040_17049 = null;var count__17041_17050 = 0;var i__17042_17051 = 0;while(true){
if((i__17042_17051 < count__17041_17050))
{var vec__17043_17052 = cljs.core._nth.call(null,chunk__17040_17049,i__17042_17051);var type_17053 = cljs.core.nth.call(null,vec__17043_17052,0,null);var f_17054 = cljs.core.nth.call(null,vec__17043_17052,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_17053,((function (seq__17039_17048,chunk__17040_17049,count__17041_17050,i__17042_17051,vec__17043_17052,type_17053,f_17054){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17053,this_fn);
return f_17054.call(null,e);
});})(seq__17039_17048,chunk__17040_17049,count__17041_17050,i__17042_17051,vec__17043_17052,type_17053,f_17054))
);
{
var G__17055 = seq__17039_17048;
var G__17056 = chunk__17040_17049;
var G__17057 = count__17041_17050;
var G__17058 = (i__17042_17051 + 1);
seq__17039_17048 = G__17055;
chunk__17040_17049 = G__17056;
count__17041_17050 = G__17057;
i__17042_17051 = G__17058;
continue;
}
} else
{var temp__4092__auto___17059 = cljs.core.seq.call(null,seq__17039_17048);if(temp__4092__auto___17059)
{var seq__17039_17060__$1 = temp__4092__auto___17059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17039_17060__$1))
{var c__3844__auto___17061 = cljs.core.chunk_first.call(null,seq__17039_17060__$1);{
var G__17062 = cljs.core.chunk_rest.call(null,seq__17039_17060__$1);
var G__17063 = c__3844__auto___17061;
var G__17064 = cljs.core.count.call(null,c__3844__auto___17061);
var G__17065 = 0;
seq__17039_17048 = G__17062;
chunk__17040_17049 = G__17063;
count__17041_17050 = G__17064;
i__17042_17051 = G__17065;
continue;
}
} else
{var vec__17044_17066 = cljs.core.first.call(null,seq__17039_17060__$1);var type_17067 = cljs.core.nth.call(null,vec__17044_17066,0,null);var f_17068 = cljs.core.nth.call(null,vec__17044_17066,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_17067,((function (seq__17039_17048,chunk__17040_17049,count__17041_17050,i__17042_17051,vec__17044_17066,type_17067,f_17068,seq__17039_17060__$1,temp__4092__auto___17059){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17067,this_fn);
return f_17068.call(null,e);
});})(seq__17039_17048,chunk__17040_17049,count__17041_17050,i__17042_17051,vec__17044_17066,type_17067,f_17068,seq__17039_17060__$1,temp__4092__auto___17059))
);
{
var G__17069 = cljs.core.next.call(null,seq__17039_17060__$1);
var G__17070 = null;
var G__17071 = 0;
var G__17072 = 0;
seq__17039_17048 = G__17069;
chunk__17040_17049 = G__17070;
count__17041_17050 = G__17071;
i__17042_17051 = G__17072;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__17073){
var elem_sel = cljs.core.first(arglist__17073);
var type_fs = cljs.core.rest(arglist__17073);
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
var fire_BANG___delegate = function (node,event_type,p__17074){var vec__17076 = p__17074;var update_event_BANG_ = cljs.core.nth.call(null,vec__17076,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__17074 = null;if (arguments.length > 2) {
  p__17074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__17074);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__17077){
var node = cljs.core.first(arglist__17077);
arglist__17077 = cljs.core.next(arglist__17077);
var event_type = cljs.core.first(arglist__17077);
var p__17074 = cljs.core.rest(arglist__17077);
return fire_BANG___delegate(node,event_type,p__17074);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
