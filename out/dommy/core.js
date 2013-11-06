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
dommy.core.text = (function text(elem){var or__2961__auto__ = elem.textContent;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
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
var append_BANG___2 = (function (parent,child){var G__5725 = dommy.template.__GT_node_like.call(null,parent);G__5725.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5725;
});
var append_BANG___3 = (function() { 
var G__5730__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5726_5731 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5727_5732 = null;var count__5728_5733 = 0;var i__5729_5734 = 0;while(true){
if((i__5729_5734 < count__5728_5733))
{var c_5735 = cljs.core._nth.call(null,chunk__5727_5732,i__5729_5734);append_BANG_.call(null,parent__$1,c_5735);
{
var G__5736 = seq__5726_5731;
var G__5737 = chunk__5727_5732;
var G__5738 = count__5728_5733;
var G__5739 = (i__5729_5734 + 1);
seq__5726_5731 = G__5736;
chunk__5727_5732 = G__5737;
count__5728_5733 = G__5738;
i__5729_5734 = G__5739;
continue;
}
} else
{var temp__4092__auto___5740 = cljs.core.seq.call(null,seq__5726_5731);if(temp__4092__auto___5740)
{var seq__5726_5741__$1 = temp__4092__auto___5740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5726_5741__$1))
{var c__3670__auto___5742 = cljs.core.chunk_first.call(null,seq__5726_5741__$1);{
var G__5743 = cljs.core.chunk_rest.call(null,seq__5726_5741__$1);
var G__5744 = c__3670__auto___5742;
var G__5745 = cljs.core.count.call(null,c__3670__auto___5742);
var G__5746 = 0;
seq__5726_5731 = G__5743;
chunk__5727_5732 = G__5744;
count__5728_5733 = G__5745;
i__5729_5734 = G__5746;
continue;
}
} else
{var c_5747 = cljs.core.first.call(null,seq__5726_5741__$1);append_BANG_.call(null,parent__$1,c_5747);
{
var G__5748 = cljs.core.next.call(null,seq__5726_5741__$1);
var G__5749 = null;
var G__5750 = 0;
var G__5751 = 0;
seq__5726_5731 = G__5748;
chunk__5727_5732 = G__5749;
count__5728_5733 = G__5750;
i__5729_5734 = G__5751;
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
var G__5730 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5730__delegate.call(this,parent,child,more_children);};
G__5730.cljs$lang$maxFixedArity = 2;
G__5730.cljs$lang$applyTo = (function (arglist__5752){
var parent = cljs.core.first(arglist__5752);
arglist__5752 = cljs.core.next(arglist__5752);
var child = cljs.core.first(arglist__5752);
var more_children = cljs.core.rest(arglist__5752);
return G__5730__delegate(parent,child,more_children);
});
G__5730.cljs$core$IFn$_invoke$arity$variadic = G__5730__delegate;
return G__5730;
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
var G__5761__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5757_5762 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5758_5763 = null;var count__5759_5764 = 0;var i__5760_5765 = 0;while(true){
if((i__5760_5765 < count__5759_5764))
{var c_5766 = cljs.core._nth.call(null,chunk__5758_5763,i__5760_5765);prepend_BANG_.call(null,parent__$1,c_5766);
{
var G__5767 = seq__5757_5762;
var G__5768 = chunk__5758_5763;
var G__5769 = count__5759_5764;
var G__5770 = (i__5760_5765 + 1);
seq__5757_5762 = G__5767;
chunk__5758_5763 = G__5768;
count__5759_5764 = G__5769;
i__5760_5765 = G__5770;
continue;
}
} else
{var temp__4092__auto___5771 = cljs.core.seq.call(null,seq__5757_5762);if(temp__4092__auto___5771)
{var seq__5757_5772__$1 = temp__4092__auto___5771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5757_5772__$1))
{var c__3670__auto___5773 = cljs.core.chunk_first.call(null,seq__5757_5772__$1);{
var G__5774 = cljs.core.chunk_rest.call(null,seq__5757_5772__$1);
var G__5775 = c__3670__auto___5773;
var G__5776 = cljs.core.count.call(null,c__3670__auto___5773);
var G__5777 = 0;
seq__5757_5762 = G__5774;
chunk__5758_5763 = G__5775;
count__5759_5764 = G__5776;
i__5760_5765 = G__5777;
continue;
}
} else
{var c_5778 = cljs.core.first.call(null,seq__5757_5772__$1);prepend_BANG_.call(null,parent__$1,c_5778);
{
var G__5779 = cljs.core.next.call(null,seq__5757_5772__$1);
var G__5780 = null;
var G__5781 = 0;
var G__5782 = 0;
seq__5757_5762 = G__5779;
chunk__5758_5763 = G__5780;
count__5759_5764 = G__5781;
i__5760_5765 = G__5782;
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
var G__5761 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5761__delegate.call(this,parent,child,more_children);};
G__5761.cljs$lang$maxFixedArity = 2;
G__5761.cljs$lang$applyTo = (function (arglist__5783){
var parent = cljs.core.first(arglist__5783);
arglist__5783 = cljs.core.next(arglist__5783);
var child = cljs.core.first(arglist__5783);
var more_children = cljs.core.rest(arglist__5783);
return G__5761__delegate(parent,child,more_children);
});
G__5761.cljs$core$IFn$_invoke$arity$variadic = G__5761__delegate;
return G__5761;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___5784 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___5784))
{var next_5785 = temp__4090__auto___5784;parent.insertBefore(actual_node,next_5785);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__5787 = dommy.template.__GT_node_like.call(null,parent);G__5787.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5787,node_like);
return G__5787;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__5789 = elem__$1.parentNode;G__5789.removeChild(elem__$1);
return G__5789;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5795){var vec__5796 = p__5795;var k = cljs.core.nth.call(null,vec__5796,0,null);var v = cljs.core.nth.call(null,vec__5796,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t5797 !== 'undefined')
{} else
{goog.provide('dommy.core.t5797');

/**
* @constructor
*/
dommy.core.t5797 = (function (v,k,vec__5796,p__5795,container,key_selectors_map,template,selector_map,meta5798){
this.v = v;
this.k = k;
this.vec__5796 = vec__5796;
this.p__5795 = p__5795;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta5798 = meta5798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t5797.cljs$lang$type = true;
dommy.core.t5797.cljs$lang$ctorStr = "dommy.core/t5797";
dommy.core.t5797.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"dommy.core/t5797");
});
dommy.core.t5797.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t5797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5799){var self__ = this;
var _5799__$1 = this;return self__.meta5798;
});
dommy.core.t5797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5799,meta5798__$1){var self__ = this;
var _5799__$1 = this;return (new dommy.core.t5797(self__.v,self__.k,self__.vec__5796,self__.p__5795,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta5798__$1));
});
dommy.core.__GT_t5797 = (function __GT_t5797(v__$1,k__$1,vec__5796__$1,p__5795__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta5798){return (new dommy.core.t5797(v__$1,k__$1,vec__5796__$1,p__5795__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta5798));
});
}
return (new dommy.core.t5797(v,k,vec__5796,p__5795,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5800_SHARP_){return p1__5800_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5801_SHARP_){return !((p1__5801_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5802){var vec__5803 = p__5802;var special_mouse_event = cljs.core.nth.call(null,vec__5803,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__5803,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__2961__auto__ = event.selectedTarget;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__2952__auto__ = related_target;if(cljs.core.truth_(and__2952__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__2952__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__2952__auto__ = selected_target;if(cljs.core.truth_(and__2952__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__2952__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__2961__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5804){
var elem = cljs.core.first(arglist__5804);
arglist__5804 = cljs.core.next(arglist__5804);
var f = cljs.core.first(arglist__5804);
var args = cljs.core.rest(arglist__5804);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5805_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5805_SHARP_));
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
var vec__5829_5852 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5853 = cljs.core.nth.call(null,vec__5829_5852,0,null);var selector_5854 = cljs.core.nth.call(null,vec__5829_5852,1,null);var seq__5830_5855 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5837_5856 = null;var count__5838_5857 = 0;var i__5839_5858 = 0;while(true){
if((i__5839_5858 < count__5838_5857))
{var vec__5846_5859 = cljs.core._nth.call(null,chunk__5837_5856,i__5839_5858);var orig_type_5860 = cljs.core.nth.call(null,vec__5846_5859,0,null);var f_5861 = cljs.core.nth.call(null,vec__5846_5859,1,null);var seq__5840_5862 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5860,cljs.core.PersistentArrayMap.fromArray([orig_type_5860,cljs.core.identity], true)));var chunk__5842_5863 = null;var count__5843_5864 = 0;var i__5844_5865 = 0;while(true){
if((i__5844_5865 < count__5843_5864))
{var vec__5847_5866 = cljs.core._nth.call(null,chunk__5842_5863,i__5844_5865);var actual_type_5867 = cljs.core.nth.call(null,vec__5847_5866,0,null);var factory_5868 = cljs.core.nth.call(null,vec__5847_5866,1,null);var canonical_f_5869 = (cljs.core.truth_(selector_5854)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5853,selector_5854):cljs.core.identity).call(null,factory_5868.call(null,f_5861));dommy.core.update_event_listeners_BANG_.call(null,elem_5853,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5854,actual_type_5867,f_5861], true),canonical_f_5869);
if(cljs.core.truth_(elem_5853.addEventListener))
{elem_5853.addEventListener(cljs.core.name.call(null,actual_type_5867),canonical_f_5869);
} else
{elem_5853.attachEvent(cljs.core.name.call(null,actual_type_5867),canonical_f_5869);
}
{
var G__5870 = seq__5840_5862;
var G__5871 = chunk__5842_5863;
var G__5872 = count__5843_5864;
var G__5873 = (i__5844_5865 + 1);
seq__5840_5862 = G__5870;
chunk__5842_5863 = G__5871;
count__5843_5864 = G__5872;
i__5844_5865 = G__5873;
continue;
}
} else
{var temp__4092__auto___5874 = cljs.core.seq.call(null,seq__5840_5862);if(temp__4092__auto___5874)
{var seq__5840_5875__$1 = temp__4092__auto___5874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5840_5875__$1))
{var c__3670__auto___5876 = cljs.core.chunk_first.call(null,seq__5840_5875__$1);{
var G__5877 = cljs.core.chunk_rest.call(null,seq__5840_5875__$1);
var G__5878 = c__3670__auto___5876;
var G__5879 = cljs.core.count.call(null,c__3670__auto___5876);
var G__5880 = 0;
seq__5840_5862 = G__5877;
chunk__5842_5863 = G__5878;
count__5843_5864 = G__5879;
i__5844_5865 = G__5880;
continue;
}
} else
{var vec__5848_5881 = cljs.core.first.call(null,seq__5840_5875__$1);var actual_type_5882 = cljs.core.nth.call(null,vec__5848_5881,0,null);var factory_5883 = cljs.core.nth.call(null,vec__5848_5881,1,null);var canonical_f_5884 = (cljs.core.truth_(selector_5854)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5853,selector_5854):cljs.core.identity).call(null,factory_5883.call(null,f_5861));dommy.core.update_event_listeners_BANG_.call(null,elem_5853,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5854,actual_type_5882,f_5861], true),canonical_f_5884);
if(cljs.core.truth_(elem_5853.addEventListener))
{elem_5853.addEventListener(cljs.core.name.call(null,actual_type_5882),canonical_f_5884);
} else
{elem_5853.attachEvent(cljs.core.name.call(null,actual_type_5882),canonical_f_5884);
}
{
var G__5885 = cljs.core.next.call(null,seq__5840_5875__$1);
var G__5886 = null;
var G__5887 = 0;
var G__5888 = 0;
seq__5840_5862 = G__5885;
chunk__5842_5863 = G__5886;
count__5843_5864 = G__5887;
i__5844_5865 = G__5888;
continue;
}
}
} else
{}
}
break;
}
{
var G__5889 = seq__5830_5855;
var G__5890 = chunk__5837_5856;
var G__5891 = count__5838_5857;
var G__5892 = (i__5839_5858 + 1);
seq__5830_5855 = G__5889;
chunk__5837_5856 = G__5890;
count__5838_5857 = G__5891;
i__5839_5858 = G__5892;
continue;
}
} else
{var temp__4092__auto___5893 = cljs.core.seq.call(null,seq__5830_5855);if(temp__4092__auto___5893)
{var seq__5830_5894__$1 = temp__4092__auto___5893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5830_5894__$1))
{var c__3670__auto___5895 = cljs.core.chunk_first.call(null,seq__5830_5894__$1);{
var G__5896 = cljs.core.chunk_rest.call(null,seq__5830_5894__$1);
var G__5897 = c__3670__auto___5895;
var G__5898 = cljs.core.count.call(null,c__3670__auto___5895);
var G__5899 = 0;
seq__5830_5855 = G__5896;
chunk__5837_5856 = G__5897;
count__5838_5857 = G__5898;
i__5839_5858 = G__5899;
continue;
}
} else
{var vec__5849_5900 = cljs.core.first.call(null,seq__5830_5894__$1);var orig_type_5901 = cljs.core.nth.call(null,vec__5849_5900,0,null);var f_5902 = cljs.core.nth.call(null,vec__5849_5900,1,null);var seq__5831_5903 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5901,cljs.core.PersistentArrayMap.fromArray([orig_type_5901,cljs.core.identity], true)));var chunk__5833_5904 = null;var count__5834_5905 = 0;var i__5835_5906 = 0;while(true){
if((i__5835_5906 < count__5834_5905))
{var vec__5850_5907 = cljs.core._nth.call(null,chunk__5833_5904,i__5835_5906);var actual_type_5908 = cljs.core.nth.call(null,vec__5850_5907,0,null);var factory_5909 = cljs.core.nth.call(null,vec__5850_5907,1,null);var canonical_f_5910 = (cljs.core.truth_(selector_5854)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5853,selector_5854):cljs.core.identity).call(null,factory_5909.call(null,f_5902));dommy.core.update_event_listeners_BANG_.call(null,elem_5853,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5854,actual_type_5908,f_5902], true),canonical_f_5910);
if(cljs.core.truth_(elem_5853.addEventListener))
{elem_5853.addEventListener(cljs.core.name.call(null,actual_type_5908),canonical_f_5910);
} else
{elem_5853.attachEvent(cljs.core.name.call(null,actual_type_5908),canonical_f_5910);
}
{
var G__5911 = seq__5831_5903;
var G__5912 = chunk__5833_5904;
var G__5913 = count__5834_5905;
var G__5914 = (i__5835_5906 + 1);
seq__5831_5903 = G__5911;
chunk__5833_5904 = G__5912;
count__5834_5905 = G__5913;
i__5835_5906 = G__5914;
continue;
}
} else
{var temp__4092__auto___5915__$1 = cljs.core.seq.call(null,seq__5831_5903);if(temp__4092__auto___5915__$1)
{var seq__5831_5916__$1 = temp__4092__auto___5915__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5831_5916__$1))
{var c__3670__auto___5917 = cljs.core.chunk_first.call(null,seq__5831_5916__$1);{
var G__5918 = cljs.core.chunk_rest.call(null,seq__5831_5916__$1);
var G__5919 = c__3670__auto___5917;
var G__5920 = cljs.core.count.call(null,c__3670__auto___5917);
var G__5921 = 0;
seq__5831_5903 = G__5918;
chunk__5833_5904 = G__5919;
count__5834_5905 = G__5920;
i__5835_5906 = G__5921;
continue;
}
} else
{var vec__5851_5922 = cljs.core.first.call(null,seq__5831_5916__$1);var actual_type_5923 = cljs.core.nth.call(null,vec__5851_5922,0,null);var factory_5924 = cljs.core.nth.call(null,vec__5851_5922,1,null);var canonical_f_5925 = (cljs.core.truth_(selector_5854)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5853,selector_5854):cljs.core.identity).call(null,factory_5924.call(null,f_5902));dommy.core.update_event_listeners_BANG_.call(null,elem_5853,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_5854,actual_type_5923,f_5902], true),canonical_f_5925);
if(cljs.core.truth_(elem_5853.addEventListener))
{elem_5853.addEventListener(cljs.core.name.call(null,actual_type_5923),canonical_f_5925);
} else
{elem_5853.attachEvent(cljs.core.name.call(null,actual_type_5923),canonical_f_5925);
}
{
var G__5926 = cljs.core.next.call(null,seq__5831_5916__$1);
var G__5927 = null;
var G__5928 = 0;
var G__5929 = 0;
seq__5831_5903 = G__5926;
chunk__5833_5904 = G__5927;
count__5834_5905 = G__5928;
i__5835_5906 = G__5929;
continue;
}
}
} else
{}
}
break;
}
{
var G__5930 = cljs.core.next.call(null,seq__5830_5894__$1);
var G__5931 = null;
var G__5932 = 0;
var G__5933 = 0;
seq__5830_5855 = G__5930;
chunk__5837_5856 = G__5931;
count__5838_5857 = G__5932;
i__5839_5858 = G__5933;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__5934){
var elem_sel = cljs.core.first(arglist__5934);
var type_fs = cljs.core.rest(arglist__5934);
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
var vec__5958_5981 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5982 = cljs.core.nth.call(null,vec__5958_5981,0,null);var selector_5983 = cljs.core.nth.call(null,vec__5958_5981,1,null);var seq__5959_5984 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5966_5985 = null;var count__5967_5986 = 0;var i__5968_5987 = 0;while(true){
if((i__5968_5987 < count__5967_5986))
{var vec__5975_5988 = cljs.core._nth.call(null,chunk__5966_5985,i__5968_5987);var orig_type_5989 = cljs.core.nth.call(null,vec__5975_5988,0,null);var f_5990 = cljs.core.nth.call(null,vec__5975_5988,1,null);var seq__5969_5991 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5989,cljs.core.PersistentArrayMap.fromArray([orig_type_5989,cljs.core.identity], true)));var chunk__5971_5992 = null;var count__5972_5993 = 0;var i__5973_5994 = 0;while(true){
if((i__5973_5994 < count__5972_5993))
{var vec__5976_5995 = cljs.core._nth.call(null,chunk__5971_5992,i__5973_5994);var actual_type_5996 = cljs.core.nth.call(null,vec__5976_5995,0,null);var __5997 = cljs.core.nth.call(null,vec__5976_5995,1,null);var keys_5998 = cljs.core.PersistentVector.fromArray([selector_5983,actual_type_5996,f_5990], true);var canonical_f_5999 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5982),keys_5998);dommy.core.update_event_listeners_BANG_.call(null,elem_5982,dommy.utils.dissoc_in,keys_5998);
if(cljs.core.truth_(elem_5982.removeEventListener))
{elem_5982.removeEventListener(cljs.core.name.call(null,actual_type_5996),canonical_f_5999);
} else
{elem_5982.detachEvent(cljs.core.name.call(null,actual_type_5996),canonical_f_5999);
}
{
var G__6000 = seq__5969_5991;
var G__6001 = chunk__5971_5992;
var G__6002 = count__5972_5993;
var G__6003 = (i__5973_5994 + 1);
seq__5969_5991 = G__6000;
chunk__5971_5992 = G__6001;
count__5972_5993 = G__6002;
i__5973_5994 = G__6003;
continue;
}
} else
{var temp__4092__auto___6004 = cljs.core.seq.call(null,seq__5969_5991);if(temp__4092__auto___6004)
{var seq__5969_6005__$1 = temp__4092__auto___6004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5969_6005__$1))
{var c__3670__auto___6006 = cljs.core.chunk_first.call(null,seq__5969_6005__$1);{
var G__6007 = cljs.core.chunk_rest.call(null,seq__5969_6005__$1);
var G__6008 = c__3670__auto___6006;
var G__6009 = cljs.core.count.call(null,c__3670__auto___6006);
var G__6010 = 0;
seq__5969_5991 = G__6007;
chunk__5971_5992 = G__6008;
count__5972_5993 = G__6009;
i__5973_5994 = G__6010;
continue;
}
} else
{var vec__5977_6011 = cljs.core.first.call(null,seq__5969_6005__$1);var actual_type_6012 = cljs.core.nth.call(null,vec__5977_6011,0,null);var __6013 = cljs.core.nth.call(null,vec__5977_6011,1,null);var keys_6014 = cljs.core.PersistentVector.fromArray([selector_5983,actual_type_6012,f_5990], true);var canonical_f_6015 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5982),keys_6014);dommy.core.update_event_listeners_BANG_.call(null,elem_5982,dommy.utils.dissoc_in,keys_6014);
if(cljs.core.truth_(elem_5982.removeEventListener))
{elem_5982.removeEventListener(cljs.core.name.call(null,actual_type_6012),canonical_f_6015);
} else
{elem_5982.detachEvent(cljs.core.name.call(null,actual_type_6012),canonical_f_6015);
}
{
var G__6016 = cljs.core.next.call(null,seq__5969_6005__$1);
var G__6017 = null;
var G__6018 = 0;
var G__6019 = 0;
seq__5969_5991 = G__6016;
chunk__5971_5992 = G__6017;
count__5972_5993 = G__6018;
i__5973_5994 = G__6019;
continue;
}
}
} else
{}
}
break;
}
{
var G__6020 = seq__5959_5984;
var G__6021 = chunk__5966_5985;
var G__6022 = count__5967_5986;
var G__6023 = (i__5968_5987 + 1);
seq__5959_5984 = G__6020;
chunk__5966_5985 = G__6021;
count__5967_5986 = G__6022;
i__5968_5987 = G__6023;
continue;
}
} else
{var temp__4092__auto___6024 = cljs.core.seq.call(null,seq__5959_5984);if(temp__4092__auto___6024)
{var seq__5959_6025__$1 = temp__4092__auto___6024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5959_6025__$1))
{var c__3670__auto___6026 = cljs.core.chunk_first.call(null,seq__5959_6025__$1);{
var G__6027 = cljs.core.chunk_rest.call(null,seq__5959_6025__$1);
var G__6028 = c__3670__auto___6026;
var G__6029 = cljs.core.count.call(null,c__3670__auto___6026);
var G__6030 = 0;
seq__5959_5984 = G__6027;
chunk__5966_5985 = G__6028;
count__5967_5986 = G__6029;
i__5968_5987 = G__6030;
continue;
}
} else
{var vec__5978_6031 = cljs.core.first.call(null,seq__5959_6025__$1);var orig_type_6032 = cljs.core.nth.call(null,vec__5978_6031,0,null);var f_6033 = cljs.core.nth.call(null,vec__5978_6031,1,null);var seq__5960_6034 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6032,cljs.core.PersistentArrayMap.fromArray([orig_type_6032,cljs.core.identity], true)));var chunk__5962_6035 = null;var count__5963_6036 = 0;var i__5964_6037 = 0;while(true){
if((i__5964_6037 < count__5963_6036))
{var vec__5979_6038 = cljs.core._nth.call(null,chunk__5962_6035,i__5964_6037);var actual_type_6039 = cljs.core.nth.call(null,vec__5979_6038,0,null);var __6040 = cljs.core.nth.call(null,vec__5979_6038,1,null);var keys_6041 = cljs.core.PersistentVector.fromArray([selector_5983,actual_type_6039,f_6033], true);var canonical_f_6042 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5982),keys_6041);dommy.core.update_event_listeners_BANG_.call(null,elem_5982,dommy.utils.dissoc_in,keys_6041);
if(cljs.core.truth_(elem_5982.removeEventListener))
{elem_5982.removeEventListener(cljs.core.name.call(null,actual_type_6039),canonical_f_6042);
} else
{elem_5982.detachEvent(cljs.core.name.call(null,actual_type_6039),canonical_f_6042);
}
{
var G__6043 = seq__5960_6034;
var G__6044 = chunk__5962_6035;
var G__6045 = count__5963_6036;
var G__6046 = (i__5964_6037 + 1);
seq__5960_6034 = G__6043;
chunk__5962_6035 = G__6044;
count__5963_6036 = G__6045;
i__5964_6037 = G__6046;
continue;
}
} else
{var temp__4092__auto___6047__$1 = cljs.core.seq.call(null,seq__5960_6034);if(temp__4092__auto___6047__$1)
{var seq__5960_6048__$1 = temp__4092__auto___6047__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5960_6048__$1))
{var c__3670__auto___6049 = cljs.core.chunk_first.call(null,seq__5960_6048__$1);{
var G__6050 = cljs.core.chunk_rest.call(null,seq__5960_6048__$1);
var G__6051 = c__3670__auto___6049;
var G__6052 = cljs.core.count.call(null,c__3670__auto___6049);
var G__6053 = 0;
seq__5960_6034 = G__6050;
chunk__5962_6035 = G__6051;
count__5963_6036 = G__6052;
i__5964_6037 = G__6053;
continue;
}
} else
{var vec__5980_6054 = cljs.core.first.call(null,seq__5960_6048__$1);var actual_type_6055 = cljs.core.nth.call(null,vec__5980_6054,0,null);var __6056 = cljs.core.nth.call(null,vec__5980_6054,1,null);var keys_6057 = cljs.core.PersistentVector.fromArray([selector_5983,actual_type_6055,f_6033], true);var canonical_f_6058 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5982),keys_6057);dommy.core.update_event_listeners_BANG_.call(null,elem_5982,dommy.utils.dissoc_in,keys_6057);
if(cljs.core.truth_(elem_5982.removeEventListener))
{elem_5982.removeEventListener(cljs.core.name.call(null,actual_type_6055),canonical_f_6058);
} else
{elem_5982.detachEvent(cljs.core.name.call(null,actual_type_6055),canonical_f_6058);
}
{
var G__6059 = cljs.core.next.call(null,seq__5960_6048__$1);
var G__6060 = null;
var G__6061 = 0;
var G__6062 = 0;
seq__5960_6034 = G__6059;
chunk__5962_6035 = G__6060;
count__5963_6036 = G__6061;
i__5964_6037 = G__6062;
continue;
}
}
} else
{}
}
break;
}
{
var G__6063 = cljs.core.next.call(null,seq__5959_6025__$1);
var G__6064 = null;
var G__6065 = 0;
var G__6066 = 0;
seq__5959_5984 = G__6063;
chunk__5966_5985 = G__6064;
count__5967_5986 = G__6065;
i__5968_5987 = G__6066;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6067){
var elem_sel = cljs.core.first(arglist__6067);
var type_fs = cljs.core.rest(arglist__6067);
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
var vec__6075_6082 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6083 = cljs.core.nth.call(null,vec__6075_6082,0,null);var selector_6084 = cljs.core.nth.call(null,vec__6075_6082,1,null);var seq__6076_6085 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6077_6086 = null;var count__6078_6087 = 0;var i__6079_6088 = 0;while(true){
if((i__6079_6088 < count__6078_6087))
{var vec__6080_6089 = cljs.core._nth.call(null,chunk__6077_6086,i__6079_6088);var type_6090 = cljs.core.nth.call(null,vec__6080_6089,0,null);var f_6091 = cljs.core.nth.call(null,vec__6080_6089,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6090,((function (seq__6076_6085,chunk__6077_6086,count__6078_6087,i__6079_6088,vec__6080_6089,type_6090,f_6091){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6090,this_fn);
return f_6091.call(null,e);
});})(seq__6076_6085,chunk__6077_6086,count__6078_6087,i__6079_6088,vec__6080_6089,type_6090,f_6091))
);
{
var G__6092 = seq__6076_6085;
var G__6093 = chunk__6077_6086;
var G__6094 = count__6078_6087;
var G__6095 = (i__6079_6088 + 1);
seq__6076_6085 = G__6092;
chunk__6077_6086 = G__6093;
count__6078_6087 = G__6094;
i__6079_6088 = G__6095;
continue;
}
} else
{var temp__4092__auto___6096 = cljs.core.seq.call(null,seq__6076_6085);if(temp__4092__auto___6096)
{var seq__6076_6097__$1 = temp__4092__auto___6096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6076_6097__$1))
{var c__3670__auto___6098 = cljs.core.chunk_first.call(null,seq__6076_6097__$1);{
var G__6099 = cljs.core.chunk_rest.call(null,seq__6076_6097__$1);
var G__6100 = c__3670__auto___6098;
var G__6101 = cljs.core.count.call(null,c__3670__auto___6098);
var G__6102 = 0;
seq__6076_6085 = G__6099;
chunk__6077_6086 = G__6100;
count__6078_6087 = G__6101;
i__6079_6088 = G__6102;
continue;
}
} else
{var vec__6081_6103 = cljs.core.first.call(null,seq__6076_6097__$1);var type_6104 = cljs.core.nth.call(null,vec__6081_6103,0,null);var f_6105 = cljs.core.nth.call(null,vec__6081_6103,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6104,((function (seq__6076_6085,chunk__6077_6086,count__6078_6087,i__6079_6088,vec__6081_6103,type_6104,f_6105,seq__6076_6097__$1,temp__4092__auto___6096){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6104,this_fn);
return f_6105.call(null,e);
});})(seq__6076_6085,chunk__6077_6086,count__6078_6087,i__6079_6088,vec__6081_6103,type_6104,f_6105,seq__6076_6097__$1,temp__4092__auto___6096))
);
{
var G__6106 = cljs.core.next.call(null,seq__6076_6097__$1);
var G__6107 = null;
var G__6108 = 0;
var G__6109 = 0;
seq__6076_6085 = G__6106;
chunk__6077_6086 = G__6107;
count__6078_6087 = G__6108;
i__6079_6088 = G__6109;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6110){
var elem_sel = cljs.core.first(arglist__6110);
var type_fs = cljs.core.rest(arglist__6110);
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
var fire_BANG___delegate = function (node,event_type,p__6111){var vec__6113 = p__6111;var update_event_BANG_ = cljs.core.nth.call(null,vec__6113,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__2961__auto__ = update_event_BANG_;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
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
var p__6111 = null;if (arguments.length > 2) {
  p__6111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__6111);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__6114){
var node = cljs.core.first(arglist__6114);
arglist__6114 = cljs.core.next(arglist__6114);
var event_type = cljs.core.first(arglist__6114);
var p__6111 = cljs.core.rest(arglist__6114);
return fire_BANG___delegate(node,event_type,p__6111);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//@ sourceMappingURL=core.js.map