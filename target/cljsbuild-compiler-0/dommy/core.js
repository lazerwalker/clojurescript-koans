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
var append_BANG___2 = (function (parent,child){var G__16706 = dommy.template.__GT_node_like.call(null,parent);G__16706.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16706;
});
var append_BANG___3 = (function() { 
var G__16711__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16707_16712 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16708_16713 = null;var count__16709_16714 = 0;var i__16710_16715 = 0;while(true){
if((i__16710_16715 < count__16709_16714))
{var c_16716 = cljs.core._nth.call(null,chunk__16708_16713,i__16710_16715);append_BANG_.call(null,parent__$1,c_16716);
{
var G__16717 = seq__16707_16712;
var G__16718 = chunk__16708_16713;
var G__16719 = count__16709_16714;
var G__16720 = (i__16710_16715 + 1);
seq__16707_16712 = G__16717;
chunk__16708_16713 = G__16718;
count__16709_16714 = G__16719;
i__16710_16715 = G__16720;
continue;
}
} else
{var temp__4092__auto___16721 = cljs.core.seq.call(null,seq__16707_16712);if(temp__4092__auto___16721)
{var seq__16707_16722__$1 = temp__4092__auto___16721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16707_16722__$1))
{var c__3844__auto___16723 = cljs.core.chunk_first.call(null,seq__16707_16722__$1);{
var G__16724 = cljs.core.chunk_rest.call(null,seq__16707_16722__$1);
var G__16725 = c__3844__auto___16723;
var G__16726 = cljs.core.count.call(null,c__3844__auto___16723);
var G__16727 = 0;
seq__16707_16712 = G__16724;
chunk__16708_16713 = G__16725;
count__16709_16714 = G__16726;
i__16710_16715 = G__16727;
continue;
}
} else
{var c_16728 = cljs.core.first.call(null,seq__16707_16722__$1);append_BANG_.call(null,parent__$1,c_16728);
{
var G__16729 = cljs.core.next.call(null,seq__16707_16722__$1);
var G__16730 = null;
var G__16731 = 0;
var G__16732 = 0;
seq__16707_16712 = G__16729;
chunk__16708_16713 = G__16730;
count__16709_16714 = G__16731;
i__16710_16715 = G__16732;
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
var G__16711 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16711__delegate.call(this,parent,child,more_children);};
G__16711.cljs$lang$maxFixedArity = 2;
G__16711.cljs$lang$applyTo = (function (arglist__16733){
var parent = cljs.core.first(arglist__16733);
arglist__16733 = cljs.core.next(arglist__16733);
var child = cljs.core.first(arglist__16733);
var more_children = cljs.core.rest(arglist__16733);
return G__16711__delegate(parent,child,more_children);
});
G__16711.cljs$core$IFn$_invoke$arity$variadic = G__16711__delegate;
return G__16711;
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
var G__16742__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16738_16743 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16739_16744 = null;var count__16740_16745 = 0;var i__16741_16746 = 0;while(true){
if((i__16741_16746 < count__16740_16745))
{var c_16747 = cljs.core._nth.call(null,chunk__16739_16744,i__16741_16746);prepend_BANG_.call(null,parent__$1,c_16747);
{
var G__16748 = seq__16738_16743;
var G__16749 = chunk__16739_16744;
var G__16750 = count__16740_16745;
var G__16751 = (i__16741_16746 + 1);
seq__16738_16743 = G__16748;
chunk__16739_16744 = G__16749;
count__16740_16745 = G__16750;
i__16741_16746 = G__16751;
continue;
}
} else
{var temp__4092__auto___16752 = cljs.core.seq.call(null,seq__16738_16743);if(temp__4092__auto___16752)
{var seq__16738_16753__$1 = temp__4092__auto___16752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16738_16753__$1))
{var c__3844__auto___16754 = cljs.core.chunk_first.call(null,seq__16738_16753__$1);{
var G__16755 = cljs.core.chunk_rest.call(null,seq__16738_16753__$1);
var G__16756 = c__3844__auto___16754;
var G__16757 = cljs.core.count.call(null,c__3844__auto___16754);
var G__16758 = 0;
seq__16738_16743 = G__16755;
chunk__16739_16744 = G__16756;
count__16740_16745 = G__16757;
i__16741_16746 = G__16758;
continue;
}
} else
{var c_16759 = cljs.core.first.call(null,seq__16738_16753__$1);prepend_BANG_.call(null,parent__$1,c_16759);
{
var G__16760 = cljs.core.next.call(null,seq__16738_16753__$1);
var G__16761 = null;
var G__16762 = 0;
var G__16763 = 0;
seq__16738_16743 = G__16760;
chunk__16739_16744 = G__16761;
count__16740_16745 = G__16762;
i__16741_16746 = G__16763;
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
var G__16742 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16742__delegate.call(this,parent,child,more_children);};
G__16742.cljs$lang$maxFixedArity = 2;
G__16742.cljs$lang$applyTo = (function (arglist__16764){
var parent = cljs.core.first(arglist__16764);
arglist__16764 = cljs.core.next(arglist__16764);
var child = cljs.core.first(arglist__16764);
var more_children = cljs.core.rest(arglist__16764);
return G__16742__delegate(parent,child,more_children);
});
G__16742.cljs$core$IFn$_invoke$arity$variadic = G__16742__delegate;
return G__16742;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16765 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16765))
{var next_16766 = temp__4090__auto___16765;parent.insertBefore(actual_node,next_16766);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16768 = dommy.template.__GT_node_like.call(null,parent);G__16768.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16768,node_like);
return G__16768;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16770 = elem__$1.parentNode;G__16770.removeChild(elem__$1);
return G__16770;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16776){var vec__16777 = p__16776;var k = cljs.core.nth.call(null,vec__16777,0,null);var v = cljs.core.nth.call(null,vec__16777,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16778 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16778 = (function (v,k,vec__16777,p__16776,container,key_selectors_map,template,selector_map,meta16779){
this.v = v;
this.k = k;
this.vec__16777 = vec__16777;
this.p__16776 = p__16776;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16779 = meta16779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16778.cljs$lang$type = true;
dommy.core.t16778.cljs$lang$ctorStr = "dommy.core/t16778";
dommy.core.t16778.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t16778");
});
dommy.core.t16778.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16780){var self__ = this;
var _16780__$1 = this;return self__.meta16779;
});
dommy.core.t16778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16780,meta16779__$1){var self__ = this;
var _16780__$1 = this;return (new dommy.core.t16778(self__.v,self__.k,self__.vec__16777,self__.p__16776,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16779__$1));
});
dommy.core.__GT_t16778 = (function __GT_t16778(v__$1,k__$1,vec__16777__$1,p__16776__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16779){return (new dommy.core.t16778(v__$1,k__$1,vec__16777__$1,p__16776__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16779));
});
}
return (new dommy.core.t16778(v,k,vec__16777,p__16776,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16781_SHARP_){return p1__16781_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16782_SHARP_){return !((p1__16782_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16783){var vec__16784 = p__16783;var special_mouse_event = cljs.core.nth.call(null,vec__16784,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16784,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16785){
var elem = cljs.core.first(arglist__16785);
arglist__16785 = cljs.core.next(arglist__16785);
var f = cljs.core.first(arglist__16785);
var args = cljs.core.rest(arglist__16785);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16786_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16786_SHARP_));
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
var vec__16810_16833 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16834 = cljs.core.nth.call(null,vec__16810_16833,0,null);var selector_16835 = cljs.core.nth.call(null,vec__16810_16833,1,null);var seq__16811_16836 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16818_16837 = null;var count__16819_16838 = 0;var i__16820_16839 = 0;while(true){
if((i__16820_16839 < count__16819_16838))
{var vec__16827_16840 = cljs.core._nth.call(null,chunk__16818_16837,i__16820_16839);var orig_type_16841 = cljs.core.nth.call(null,vec__16827_16840,0,null);var f_16842 = cljs.core.nth.call(null,vec__16827_16840,1,null);var seq__16821_16843 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16841,cljs.core.PersistentArrayMap.fromArray([orig_type_16841,cljs.core.identity], true)));var chunk__16823_16844 = null;var count__16824_16845 = 0;var i__16825_16846 = 0;while(true){
if((i__16825_16846 < count__16824_16845))
{var vec__16828_16847 = cljs.core._nth.call(null,chunk__16823_16844,i__16825_16846);var actual_type_16848 = cljs.core.nth.call(null,vec__16828_16847,0,null);var factory_16849 = cljs.core.nth.call(null,vec__16828_16847,1,null);var canonical_f_16850 = (cljs.core.truth_(selector_16835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16834,selector_16835):cljs.core.identity).call(null,factory_16849.call(null,f_16842));dommy.core.update_event_listeners_BANG_.call(null,elem_16834,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16835,actual_type_16848,f_16842], true),canonical_f_16850);
if(cljs.core.truth_(elem_16834.addEventListener))
{elem_16834.addEventListener(cljs.core.name.call(null,actual_type_16848),canonical_f_16850);
} else
{elem_16834.attachEvent(cljs.core.name.call(null,actual_type_16848),canonical_f_16850);
}
{
var G__16851 = seq__16821_16843;
var G__16852 = chunk__16823_16844;
var G__16853 = count__16824_16845;
var G__16854 = (i__16825_16846 + 1);
seq__16821_16843 = G__16851;
chunk__16823_16844 = G__16852;
count__16824_16845 = G__16853;
i__16825_16846 = G__16854;
continue;
}
} else
{var temp__4092__auto___16855 = cljs.core.seq.call(null,seq__16821_16843);if(temp__4092__auto___16855)
{var seq__16821_16856__$1 = temp__4092__auto___16855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16821_16856__$1))
{var c__3844__auto___16857 = cljs.core.chunk_first.call(null,seq__16821_16856__$1);{
var G__16858 = cljs.core.chunk_rest.call(null,seq__16821_16856__$1);
var G__16859 = c__3844__auto___16857;
var G__16860 = cljs.core.count.call(null,c__3844__auto___16857);
var G__16861 = 0;
seq__16821_16843 = G__16858;
chunk__16823_16844 = G__16859;
count__16824_16845 = G__16860;
i__16825_16846 = G__16861;
continue;
}
} else
{var vec__16829_16862 = cljs.core.first.call(null,seq__16821_16856__$1);var actual_type_16863 = cljs.core.nth.call(null,vec__16829_16862,0,null);var factory_16864 = cljs.core.nth.call(null,vec__16829_16862,1,null);var canonical_f_16865 = (cljs.core.truth_(selector_16835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16834,selector_16835):cljs.core.identity).call(null,factory_16864.call(null,f_16842));dommy.core.update_event_listeners_BANG_.call(null,elem_16834,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16835,actual_type_16863,f_16842], true),canonical_f_16865);
if(cljs.core.truth_(elem_16834.addEventListener))
{elem_16834.addEventListener(cljs.core.name.call(null,actual_type_16863),canonical_f_16865);
} else
{elem_16834.attachEvent(cljs.core.name.call(null,actual_type_16863),canonical_f_16865);
}
{
var G__16866 = cljs.core.next.call(null,seq__16821_16856__$1);
var G__16867 = null;
var G__16868 = 0;
var G__16869 = 0;
seq__16821_16843 = G__16866;
chunk__16823_16844 = G__16867;
count__16824_16845 = G__16868;
i__16825_16846 = G__16869;
continue;
}
}
} else
{}
}
break;
}
{
var G__16870 = seq__16811_16836;
var G__16871 = chunk__16818_16837;
var G__16872 = count__16819_16838;
var G__16873 = (i__16820_16839 + 1);
seq__16811_16836 = G__16870;
chunk__16818_16837 = G__16871;
count__16819_16838 = G__16872;
i__16820_16839 = G__16873;
continue;
}
} else
{var temp__4092__auto___16874 = cljs.core.seq.call(null,seq__16811_16836);if(temp__4092__auto___16874)
{var seq__16811_16875__$1 = temp__4092__auto___16874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16811_16875__$1))
{var c__3844__auto___16876 = cljs.core.chunk_first.call(null,seq__16811_16875__$1);{
var G__16877 = cljs.core.chunk_rest.call(null,seq__16811_16875__$1);
var G__16878 = c__3844__auto___16876;
var G__16879 = cljs.core.count.call(null,c__3844__auto___16876);
var G__16880 = 0;
seq__16811_16836 = G__16877;
chunk__16818_16837 = G__16878;
count__16819_16838 = G__16879;
i__16820_16839 = G__16880;
continue;
}
} else
{var vec__16830_16881 = cljs.core.first.call(null,seq__16811_16875__$1);var orig_type_16882 = cljs.core.nth.call(null,vec__16830_16881,0,null);var f_16883 = cljs.core.nth.call(null,vec__16830_16881,1,null);var seq__16812_16884 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16882,cljs.core.PersistentArrayMap.fromArray([orig_type_16882,cljs.core.identity], true)));var chunk__16814_16885 = null;var count__16815_16886 = 0;var i__16816_16887 = 0;while(true){
if((i__16816_16887 < count__16815_16886))
{var vec__16831_16888 = cljs.core._nth.call(null,chunk__16814_16885,i__16816_16887);var actual_type_16889 = cljs.core.nth.call(null,vec__16831_16888,0,null);var factory_16890 = cljs.core.nth.call(null,vec__16831_16888,1,null);var canonical_f_16891 = (cljs.core.truth_(selector_16835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16834,selector_16835):cljs.core.identity).call(null,factory_16890.call(null,f_16883));dommy.core.update_event_listeners_BANG_.call(null,elem_16834,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16835,actual_type_16889,f_16883], true),canonical_f_16891);
if(cljs.core.truth_(elem_16834.addEventListener))
{elem_16834.addEventListener(cljs.core.name.call(null,actual_type_16889),canonical_f_16891);
} else
{elem_16834.attachEvent(cljs.core.name.call(null,actual_type_16889),canonical_f_16891);
}
{
var G__16892 = seq__16812_16884;
var G__16893 = chunk__16814_16885;
var G__16894 = count__16815_16886;
var G__16895 = (i__16816_16887 + 1);
seq__16812_16884 = G__16892;
chunk__16814_16885 = G__16893;
count__16815_16886 = G__16894;
i__16816_16887 = G__16895;
continue;
}
} else
{var temp__4092__auto___16896__$1 = cljs.core.seq.call(null,seq__16812_16884);if(temp__4092__auto___16896__$1)
{var seq__16812_16897__$1 = temp__4092__auto___16896__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16812_16897__$1))
{var c__3844__auto___16898 = cljs.core.chunk_first.call(null,seq__16812_16897__$1);{
var G__16899 = cljs.core.chunk_rest.call(null,seq__16812_16897__$1);
var G__16900 = c__3844__auto___16898;
var G__16901 = cljs.core.count.call(null,c__3844__auto___16898);
var G__16902 = 0;
seq__16812_16884 = G__16899;
chunk__16814_16885 = G__16900;
count__16815_16886 = G__16901;
i__16816_16887 = G__16902;
continue;
}
} else
{var vec__16832_16903 = cljs.core.first.call(null,seq__16812_16897__$1);var actual_type_16904 = cljs.core.nth.call(null,vec__16832_16903,0,null);var factory_16905 = cljs.core.nth.call(null,vec__16832_16903,1,null);var canonical_f_16906 = (cljs.core.truth_(selector_16835)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16834,selector_16835):cljs.core.identity).call(null,factory_16905.call(null,f_16883));dommy.core.update_event_listeners_BANG_.call(null,elem_16834,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16835,actual_type_16904,f_16883], true),canonical_f_16906);
if(cljs.core.truth_(elem_16834.addEventListener))
{elem_16834.addEventListener(cljs.core.name.call(null,actual_type_16904),canonical_f_16906);
} else
{elem_16834.attachEvent(cljs.core.name.call(null,actual_type_16904),canonical_f_16906);
}
{
var G__16907 = cljs.core.next.call(null,seq__16812_16897__$1);
var G__16908 = null;
var G__16909 = 0;
var G__16910 = 0;
seq__16812_16884 = G__16907;
chunk__16814_16885 = G__16908;
count__16815_16886 = G__16909;
i__16816_16887 = G__16910;
continue;
}
}
} else
{}
}
break;
}
{
var G__16911 = cljs.core.next.call(null,seq__16811_16875__$1);
var G__16912 = null;
var G__16913 = 0;
var G__16914 = 0;
seq__16811_16836 = G__16911;
chunk__16818_16837 = G__16912;
count__16819_16838 = G__16913;
i__16820_16839 = G__16914;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16915){
var elem_sel = cljs.core.first(arglist__16915);
var type_fs = cljs.core.rest(arglist__16915);
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
var vec__16939_16962 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16963 = cljs.core.nth.call(null,vec__16939_16962,0,null);var selector_16964 = cljs.core.nth.call(null,vec__16939_16962,1,null);var seq__16940_16965 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16947_16966 = null;var count__16948_16967 = 0;var i__16949_16968 = 0;while(true){
if((i__16949_16968 < count__16948_16967))
{var vec__16956_16969 = cljs.core._nth.call(null,chunk__16947_16966,i__16949_16968);var orig_type_16970 = cljs.core.nth.call(null,vec__16956_16969,0,null);var f_16971 = cljs.core.nth.call(null,vec__16956_16969,1,null);var seq__16950_16972 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16970,cljs.core.PersistentArrayMap.fromArray([orig_type_16970,cljs.core.identity], true)));var chunk__16952_16973 = null;var count__16953_16974 = 0;var i__16954_16975 = 0;while(true){
if((i__16954_16975 < count__16953_16974))
{var vec__16957_16976 = cljs.core._nth.call(null,chunk__16952_16973,i__16954_16975);var actual_type_16977 = cljs.core.nth.call(null,vec__16957_16976,0,null);var __16978 = cljs.core.nth.call(null,vec__16957_16976,1,null);var keys_16979 = cljs.core.PersistentVector.fromArray([selector_16964,actual_type_16977,f_16971], true);var canonical_f_16980 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16963),keys_16979);dommy.core.update_event_listeners_BANG_.call(null,elem_16963,dommy.utils.dissoc_in,keys_16979);
if(cljs.core.truth_(elem_16963.removeEventListener))
{elem_16963.removeEventListener(cljs.core.name.call(null,actual_type_16977),canonical_f_16980);
} else
{elem_16963.detachEvent(cljs.core.name.call(null,actual_type_16977),canonical_f_16980);
}
{
var G__16981 = seq__16950_16972;
var G__16982 = chunk__16952_16973;
var G__16983 = count__16953_16974;
var G__16984 = (i__16954_16975 + 1);
seq__16950_16972 = G__16981;
chunk__16952_16973 = G__16982;
count__16953_16974 = G__16983;
i__16954_16975 = G__16984;
continue;
}
} else
{var temp__4092__auto___16985 = cljs.core.seq.call(null,seq__16950_16972);if(temp__4092__auto___16985)
{var seq__16950_16986__$1 = temp__4092__auto___16985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16950_16986__$1))
{var c__3844__auto___16987 = cljs.core.chunk_first.call(null,seq__16950_16986__$1);{
var G__16988 = cljs.core.chunk_rest.call(null,seq__16950_16986__$1);
var G__16989 = c__3844__auto___16987;
var G__16990 = cljs.core.count.call(null,c__3844__auto___16987);
var G__16991 = 0;
seq__16950_16972 = G__16988;
chunk__16952_16973 = G__16989;
count__16953_16974 = G__16990;
i__16954_16975 = G__16991;
continue;
}
} else
{var vec__16958_16992 = cljs.core.first.call(null,seq__16950_16986__$1);var actual_type_16993 = cljs.core.nth.call(null,vec__16958_16992,0,null);var __16994 = cljs.core.nth.call(null,vec__16958_16992,1,null);var keys_16995 = cljs.core.PersistentVector.fromArray([selector_16964,actual_type_16993,f_16971], true);var canonical_f_16996 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16963),keys_16995);dommy.core.update_event_listeners_BANG_.call(null,elem_16963,dommy.utils.dissoc_in,keys_16995);
if(cljs.core.truth_(elem_16963.removeEventListener))
{elem_16963.removeEventListener(cljs.core.name.call(null,actual_type_16993),canonical_f_16996);
} else
{elem_16963.detachEvent(cljs.core.name.call(null,actual_type_16993),canonical_f_16996);
}
{
var G__16997 = cljs.core.next.call(null,seq__16950_16986__$1);
var G__16998 = null;
var G__16999 = 0;
var G__17000 = 0;
seq__16950_16972 = G__16997;
chunk__16952_16973 = G__16998;
count__16953_16974 = G__16999;
i__16954_16975 = G__17000;
continue;
}
}
} else
{}
}
break;
}
{
var G__17001 = seq__16940_16965;
var G__17002 = chunk__16947_16966;
var G__17003 = count__16948_16967;
var G__17004 = (i__16949_16968 + 1);
seq__16940_16965 = G__17001;
chunk__16947_16966 = G__17002;
count__16948_16967 = G__17003;
i__16949_16968 = G__17004;
continue;
}
} else
{var temp__4092__auto___17005 = cljs.core.seq.call(null,seq__16940_16965);if(temp__4092__auto___17005)
{var seq__16940_17006__$1 = temp__4092__auto___17005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16940_17006__$1))
{var c__3844__auto___17007 = cljs.core.chunk_first.call(null,seq__16940_17006__$1);{
var G__17008 = cljs.core.chunk_rest.call(null,seq__16940_17006__$1);
var G__17009 = c__3844__auto___17007;
var G__17010 = cljs.core.count.call(null,c__3844__auto___17007);
var G__17011 = 0;
seq__16940_16965 = G__17008;
chunk__16947_16966 = G__17009;
count__16948_16967 = G__17010;
i__16949_16968 = G__17011;
continue;
}
} else
{var vec__16959_17012 = cljs.core.first.call(null,seq__16940_17006__$1);var orig_type_17013 = cljs.core.nth.call(null,vec__16959_17012,0,null);var f_17014 = cljs.core.nth.call(null,vec__16959_17012,1,null);var seq__16941_17015 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17013,cljs.core.PersistentArrayMap.fromArray([orig_type_17013,cljs.core.identity], true)));var chunk__16943_17016 = null;var count__16944_17017 = 0;var i__16945_17018 = 0;while(true){
if((i__16945_17018 < count__16944_17017))
{var vec__16960_17019 = cljs.core._nth.call(null,chunk__16943_17016,i__16945_17018);var actual_type_17020 = cljs.core.nth.call(null,vec__16960_17019,0,null);var __17021 = cljs.core.nth.call(null,vec__16960_17019,1,null);var keys_17022 = cljs.core.PersistentVector.fromArray([selector_16964,actual_type_17020,f_17014], true);var canonical_f_17023 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16963),keys_17022);dommy.core.update_event_listeners_BANG_.call(null,elem_16963,dommy.utils.dissoc_in,keys_17022);
if(cljs.core.truth_(elem_16963.removeEventListener))
{elem_16963.removeEventListener(cljs.core.name.call(null,actual_type_17020),canonical_f_17023);
} else
{elem_16963.detachEvent(cljs.core.name.call(null,actual_type_17020),canonical_f_17023);
}
{
var G__17024 = seq__16941_17015;
var G__17025 = chunk__16943_17016;
var G__17026 = count__16944_17017;
var G__17027 = (i__16945_17018 + 1);
seq__16941_17015 = G__17024;
chunk__16943_17016 = G__17025;
count__16944_17017 = G__17026;
i__16945_17018 = G__17027;
continue;
}
} else
{var temp__4092__auto___17028__$1 = cljs.core.seq.call(null,seq__16941_17015);if(temp__4092__auto___17028__$1)
{var seq__16941_17029__$1 = temp__4092__auto___17028__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16941_17029__$1))
{var c__3844__auto___17030 = cljs.core.chunk_first.call(null,seq__16941_17029__$1);{
var G__17031 = cljs.core.chunk_rest.call(null,seq__16941_17029__$1);
var G__17032 = c__3844__auto___17030;
var G__17033 = cljs.core.count.call(null,c__3844__auto___17030);
var G__17034 = 0;
seq__16941_17015 = G__17031;
chunk__16943_17016 = G__17032;
count__16944_17017 = G__17033;
i__16945_17018 = G__17034;
continue;
}
} else
{var vec__16961_17035 = cljs.core.first.call(null,seq__16941_17029__$1);var actual_type_17036 = cljs.core.nth.call(null,vec__16961_17035,0,null);var __17037 = cljs.core.nth.call(null,vec__16961_17035,1,null);var keys_17038 = cljs.core.PersistentVector.fromArray([selector_16964,actual_type_17036,f_17014], true);var canonical_f_17039 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16963),keys_17038);dommy.core.update_event_listeners_BANG_.call(null,elem_16963,dommy.utils.dissoc_in,keys_17038);
if(cljs.core.truth_(elem_16963.removeEventListener))
{elem_16963.removeEventListener(cljs.core.name.call(null,actual_type_17036),canonical_f_17039);
} else
{elem_16963.detachEvent(cljs.core.name.call(null,actual_type_17036),canonical_f_17039);
}
{
var G__17040 = cljs.core.next.call(null,seq__16941_17029__$1);
var G__17041 = null;
var G__17042 = 0;
var G__17043 = 0;
seq__16941_17015 = G__17040;
chunk__16943_17016 = G__17041;
count__16944_17017 = G__17042;
i__16945_17018 = G__17043;
continue;
}
}
} else
{}
}
break;
}
{
var G__17044 = cljs.core.next.call(null,seq__16940_17006__$1);
var G__17045 = null;
var G__17046 = 0;
var G__17047 = 0;
seq__16940_16965 = G__17044;
chunk__16947_16966 = G__17045;
count__16948_16967 = G__17046;
i__16949_16968 = G__17047;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__17048){
var elem_sel = cljs.core.first(arglist__17048);
var type_fs = cljs.core.rest(arglist__17048);
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
var vec__17056_17063 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17064 = cljs.core.nth.call(null,vec__17056_17063,0,null);var selector_17065 = cljs.core.nth.call(null,vec__17056_17063,1,null);var seq__17057_17066 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__17058_17067 = null;var count__17059_17068 = 0;var i__17060_17069 = 0;while(true){
if((i__17060_17069 < count__17059_17068))
{var vec__17061_17070 = cljs.core._nth.call(null,chunk__17058_17067,i__17060_17069);var type_17071 = cljs.core.nth.call(null,vec__17061_17070,0,null);var f_17072 = cljs.core.nth.call(null,vec__17061_17070,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_17071,((function (seq__17057_17066,chunk__17058_17067,count__17059_17068,i__17060_17069,vec__17061_17070,type_17071,f_17072){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17071,this_fn);
return f_17072.call(null,e);
});})(seq__17057_17066,chunk__17058_17067,count__17059_17068,i__17060_17069,vec__17061_17070,type_17071,f_17072))
);
{
var G__17073 = seq__17057_17066;
var G__17074 = chunk__17058_17067;
var G__17075 = count__17059_17068;
var G__17076 = (i__17060_17069 + 1);
seq__17057_17066 = G__17073;
chunk__17058_17067 = G__17074;
count__17059_17068 = G__17075;
i__17060_17069 = G__17076;
continue;
}
} else
{var temp__4092__auto___17077 = cljs.core.seq.call(null,seq__17057_17066);if(temp__4092__auto___17077)
{var seq__17057_17078__$1 = temp__4092__auto___17077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17057_17078__$1))
{var c__3844__auto___17079 = cljs.core.chunk_first.call(null,seq__17057_17078__$1);{
var G__17080 = cljs.core.chunk_rest.call(null,seq__17057_17078__$1);
var G__17081 = c__3844__auto___17079;
var G__17082 = cljs.core.count.call(null,c__3844__auto___17079);
var G__17083 = 0;
seq__17057_17066 = G__17080;
chunk__17058_17067 = G__17081;
count__17059_17068 = G__17082;
i__17060_17069 = G__17083;
continue;
}
} else
{var vec__17062_17084 = cljs.core.first.call(null,seq__17057_17078__$1);var type_17085 = cljs.core.nth.call(null,vec__17062_17084,0,null);var f_17086 = cljs.core.nth.call(null,vec__17062_17084,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_17085,((function (seq__17057_17066,chunk__17058_17067,count__17059_17068,i__17060_17069,vec__17062_17084,type_17085,f_17086,seq__17057_17078__$1,temp__4092__auto___17077){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17085,this_fn);
return f_17086.call(null,e);
});})(seq__17057_17066,chunk__17058_17067,count__17059_17068,i__17060_17069,vec__17062_17084,type_17085,f_17086,seq__17057_17078__$1,temp__4092__auto___17077))
);
{
var G__17087 = cljs.core.next.call(null,seq__17057_17078__$1);
var G__17088 = null;
var G__17089 = 0;
var G__17090 = 0;
seq__17057_17066 = G__17087;
chunk__17058_17067 = G__17088;
count__17059_17068 = G__17089;
i__17060_17069 = G__17090;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__17091){
var elem_sel = cljs.core.first(arglist__17091);
var type_fs = cljs.core.rest(arglist__17091);
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
var fire_BANG___delegate = function (node,event_type,p__17092){var vec__17094 = p__17092;var update_event_BANG_ = cljs.core.nth.call(null,vec__17094,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__17092 = null;if (arguments.length > 2) {
  p__17092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__17092);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__17095){
var node = cljs.core.first(arglist__17095);
arglist__17095 = cljs.core.next(arglist__17095);
var event_type = cljs.core.first(arglist__17095);
var p__17092 = cljs.core.rest(arglist__17095);
return fire_BANG___delegate(node,event_type,p__17092);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
