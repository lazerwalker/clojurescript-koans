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
var append_BANG___2 = (function (parent,child){var G__28730 = dommy.template.__GT_node_like.call(null,parent);G__28730.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__28730;
});
var append_BANG___3 = (function() { 
var G__28735__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28731_28736 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28732_28737 = null;var count__28733_28738 = 0;var i__28734_28739 = 0;while(true){
if((i__28734_28739 < count__28733_28738))
{var c_28740 = cljs.core._nth.call(null,chunk__28732_28737,i__28734_28739);append_BANG_.call(null,parent__$1,c_28740);
{
var G__28741 = seq__28731_28736;
var G__28742 = chunk__28732_28737;
var G__28743 = count__28733_28738;
var G__28744 = (i__28734_28739 + 1);
seq__28731_28736 = G__28741;
chunk__28732_28737 = G__28742;
count__28733_28738 = G__28743;
i__28734_28739 = G__28744;
continue;
}
} else
{var temp__4092__auto___28745 = cljs.core.seq.call(null,seq__28731_28736);if(temp__4092__auto___28745)
{var seq__28731_28746__$1 = temp__4092__auto___28745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28731_28746__$1))
{var c__3844__auto___28747 = cljs.core.chunk_first.call(null,seq__28731_28746__$1);{
var G__28748 = cljs.core.chunk_rest.call(null,seq__28731_28746__$1);
var G__28749 = c__3844__auto___28747;
var G__28750 = cljs.core.count.call(null,c__3844__auto___28747);
var G__28751 = 0;
seq__28731_28736 = G__28748;
chunk__28732_28737 = G__28749;
count__28733_28738 = G__28750;
i__28734_28739 = G__28751;
continue;
}
} else
{var c_28752 = cljs.core.first.call(null,seq__28731_28746__$1);append_BANG_.call(null,parent__$1,c_28752);
{
var G__28753 = cljs.core.next.call(null,seq__28731_28746__$1);
var G__28754 = null;
var G__28755 = 0;
var G__28756 = 0;
seq__28731_28736 = G__28753;
chunk__28732_28737 = G__28754;
count__28733_28738 = G__28755;
i__28734_28739 = G__28756;
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
var G__28735 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28735__delegate.call(this,parent,child,more_children);};
G__28735.cljs$lang$maxFixedArity = 2;
G__28735.cljs$lang$applyTo = (function (arglist__28757){
var parent = cljs.core.first(arglist__28757);
arglist__28757 = cljs.core.next(arglist__28757);
var child = cljs.core.first(arglist__28757);
var more_children = cljs.core.rest(arglist__28757);
return G__28735__delegate(parent,child,more_children);
});
G__28735.cljs$core$IFn$_invoke$arity$variadic = G__28735__delegate;
return G__28735;
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
var G__28766__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28762_28767 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28763_28768 = null;var count__28764_28769 = 0;var i__28765_28770 = 0;while(true){
if((i__28765_28770 < count__28764_28769))
{var c_28771 = cljs.core._nth.call(null,chunk__28763_28768,i__28765_28770);prepend_BANG_.call(null,parent__$1,c_28771);
{
var G__28772 = seq__28762_28767;
var G__28773 = chunk__28763_28768;
var G__28774 = count__28764_28769;
var G__28775 = (i__28765_28770 + 1);
seq__28762_28767 = G__28772;
chunk__28763_28768 = G__28773;
count__28764_28769 = G__28774;
i__28765_28770 = G__28775;
continue;
}
} else
{var temp__4092__auto___28776 = cljs.core.seq.call(null,seq__28762_28767);if(temp__4092__auto___28776)
{var seq__28762_28777__$1 = temp__4092__auto___28776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28762_28777__$1))
{var c__3844__auto___28778 = cljs.core.chunk_first.call(null,seq__28762_28777__$1);{
var G__28779 = cljs.core.chunk_rest.call(null,seq__28762_28777__$1);
var G__28780 = c__3844__auto___28778;
var G__28781 = cljs.core.count.call(null,c__3844__auto___28778);
var G__28782 = 0;
seq__28762_28767 = G__28779;
chunk__28763_28768 = G__28780;
count__28764_28769 = G__28781;
i__28765_28770 = G__28782;
continue;
}
} else
{var c_28783 = cljs.core.first.call(null,seq__28762_28777__$1);prepend_BANG_.call(null,parent__$1,c_28783);
{
var G__28784 = cljs.core.next.call(null,seq__28762_28777__$1);
var G__28785 = null;
var G__28786 = 0;
var G__28787 = 0;
seq__28762_28767 = G__28784;
chunk__28763_28768 = G__28785;
count__28764_28769 = G__28786;
i__28765_28770 = G__28787;
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
var G__28766 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28766__delegate.call(this,parent,child,more_children);};
G__28766.cljs$lang$maxFixedArity = 2;
G__28766.cljs$lang$applyTo = (function (arglist__28788){
var parent = cljs.core.first(arglist__28788);
arglist__28788 = cljs.core.next(arglist__28788);
var child = cljs.core.first(arglist__28788);
var more_children = cljs.core.rest(arglist__28788);
return G__28766__delegate(parent,child,more_children);
});
G__28766.cljs$core$IFn$_invoke$arity$variadic = G__28766__delegate;
return G__28766;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___28789 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___28789))
{var next_28790 = temp__4090__auto___28789;parent.insertBefore(actual_node,next_28790);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__28792 = dommy.template.__GT_node_like.call(null,parent);G__28792.innerHTML = "";
dommy.core.append_BANG_.call(null,G__28792,node_like);
return G__28792;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__28794 = elem__$1.parentNode;G__28794.removeChild(elem__$1);
return G__28794;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28800){var vec__28801 = p__28800;var k = cljs.core.nth.call(null,vec__28801,0,null);var v = cljs.core.nth.call(null,vec__28801,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t28802 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t28802 = (function (v,k,vec__28801,p__28800,container,key_selectors_map,template,selector_map,meta28803){
this.v = v;
this.k = k;
this.vec__28801 = vec__28801;
this.p__28800 = p__28800;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta28803 = meta28803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t28802.cljs$lang$type = true;
dommy.core.t28802.cljs$lang$ctorStr = "dommy.core/t28802";
dommy.core.t28802.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t28802");
});
dommy.core.t28802.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t28802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28804){var self__ = this;
var _28804__$1 = this;return self__.meta28803;
});
dommy.core.t28802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28804,meta28803__$1){var self__ = this;
var _28804__$1 = this;return (new dommy.core.t28802(self__.v,self__.k,self__.vec__28801,self__.p__28800,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta28803__$1));
});
dommy.core.__GT_t28802 = (function __GT_t28802(v__$1,k__$1,vec__28801__$1,p__28800__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28803){return (new dommy.core.t28802(v__$1,k__$1,vec__28801__$1,p__28800__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28803));
});
}
return (new dommy.core.t28802(v,k,vec__28801,p__28800,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__28805_SHARP_){return p1__28805_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__28806_SHARP_){return !((p1__28806_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28807){var vec__28808 = p__28807;var special_mouse_event = cljs.core.nth.call(null,vec__28808,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__28808,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__28809){
var elem = cljs.core.first(arglist__28809);
arglist__28809 = cljs.core.next(arglist__28809);
var f = cljs.core.first(arglist__28809);
var args = cljs.core.rest(arglist__28809);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__28810_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__28810_SHARP_));
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
var vec__28834_28857 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28858 = cljs.core.nth.call(null,vec__28834_28857,0,null);var selector_28859 = cljs.core.nth.call(null,vec__28834_28857,1,null);var seq__28835_28860 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28842_28861 = null;var count__28843_28862 = 0;var i__28844_28863 = 0;while(true){
if((i__28844_28863 < count__28843_28862))
{var vec__28851_28864 = cljs.core._nth.call(null,chunk__28842_28861,i__28844_28863);var orig_type_28865 = cljs.core.nth.call(null,vec__28851_28864,0,null);var f_28866 = cljs.core.nth.call(null,vec__28851_28864,1,null);var seq__28845_28867 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28865,cljs.core.PersistentArrayMap.fromArray([orig_type_28865,cljs.core.identity], true)));var chunk__28847_28868 = null;var count__28848_28869 = 0;var i__28849_28870 = 0;while(true){
if((i__28849_28870 < count__28848_28869))
{var vec__28852_28871 = cljs.core._nth.call(null,chunk__28847_28868,i__28849_28870);var actual_type_28872 = cljs.core.nth.call(null,vec__28852_28871,0,null);var factory_28873 = cljs.core.nth.call(null,vec__28852_28871,1,null);var canonical_f_28874 = (cljs.core.truth_(selector_28859)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28858,selector_28859):cljs.core.identity).call(null,factory_28873.call(null,f_28866));dommy.core.update_event_listeners_BANG_.call(null,elem_28858,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28859,actual_type_28872,f_28866], true),canonical_f_28874);
if(cljs.core.truth_(elem_28858.addEventListener))
{elem_28858.addEventListener(cljs.core.name.call(null,actual_type_28872),canonical_f_28874);
} else
{elem_28858.attachEvent(cljs.core.name.call(null,actual_type_28872),canonical_f_28874);
}
{
var G__28875 = seq__28845_28867;
var G__28876 = chunk__28847_28868;
var G__28877 = count__28848_28869;
var G__28878 = (i__28849_28870 + 1);
seq__28845_28867 = G__28875;
chunk__28847_28868 = G__28876;
count__28848_28869 = G__28877;
i__28849_28870 = G__28878;
continue;
}
} else
{var temp__4092__auto___28879 = cljs.core.seq.call(null,seq__28845_28867);if(temp__4092__auto___28879)
{var seq__28845_28880__$1 = temp__4092__auto___28879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28845_28880__$1))
{var c__3844__auto___28881 = cljs.core.chunk_first.call(null,seq__28845_28880__$1);{
var G__28882 = cljs.core.chunk_rest.call(null,seq__28845_28880__$1);
var G__28883 = c__3844__auto___28881;
var G__28884 = cljs.core.count.call(null,c__3844__auto___28881);
var G__28885 = 0;
seq__28845_28867 = G__28882;
chunk__28847_28868 = G__28883;
count__28848_28869 = G__28884;
i__28849_28870 = G__28885;
continue;
}
} else
{var vec__28853_28886 = cljs.core.first.call(null,seq__28845_28880__$1);var actual_type_28887 = cljs.core.nth.call(null,vec__28853_28886,0,null);var factory_28888 = cljs.core.nth.call(null,vec__28853_28886,1,null);var canonical_f_28889 = (cljs.core.truth_(selector_28859)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28858,selector_28859):cljs.core.identity).call(null,factory_28888.call(null,f_28866));dommy.core.update_event_listeners_BANG_.call(null,elem_28858,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28859,actual_type_28887,f_28866], true),canonical_f_28889);
if(cljs.core.truth_(elem_28858.addEventListener))
{elem_28858.addEventListener(cljs.core.name.call(null,actual_type_28887),canonical_f_28889);
} else
{elem_28858.attachEvent(cljs.core.name.call(null,actual_type_28887),canonical_f_28889);
}
{
var G__28890 = cljs.core.next.call(null,seq__28845_28880__$1);
var G__28891 = null;
var G__28892 = 0;
var G__28893 = 0;
seq__28845_28867 = G__28890;
chunk__28847_28868 = G__28891;
count__28848_28869 = G__28892;
i__28849_28870 = G__28893;
continue;
}
}
} else
{}
}
break;
}
{
var G__28894 = seq__28835_28860;
var G__28895 = chunk__28842_28861;
var G__28896 = count__28843_28862;
var G__28897 = (i__28844_28863 + 1);
seq__28835_28860 = G__28894;
chunk__28842_28861 = G__28895;
count__28843_28862 = G__28896;
i__28844_28863 = G__28897;
continue;
}
} else
{var temp__4092__auto___28898 = cljs.core.seq.call(null,seq__28835_28860);if(temp__4092__auto___28898)
{var seq__28835_28899__$1 = temp__4092__auto___28898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28835_28899__$1))
{var c__3844__auto___28900 = cljs.core.chunk_first.call(null,seq__28835_28899__$1);{
var G__28901 = cljs.core.chunk_rest.call(null,seq__28835_28899__$1);
var G__28902 = c__3844__auto___28900;
var G__28903 = cljs.core.count.call(null,c__3844__auto___28900);
var G__28904 = 0;
seq__28835_28860 = G__28901;
chunk__28842_28861 = G__28902;
count__28843_28862 = G__28903;
i__28844_28863 = G__28904;
continue;
}
} else
{var vec__28854_28905 = cljs.core.first.call(null,seq__28835_28899__$1);var orig_type_28906 = cljs.core.nth.call(null,vec__28854_28905,0,null);var f_28907 = cljs.core.nth.call(null,vec__28854_28905,1,null);var seq__28836_28908 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28906,cljs.core.PersistentArrayMap.fromArray([orig_type_28906,cljs.core.identity], true)));var chunk__28838_28909 = null;var count__28839_28910 = 0;var i__28840_28911 = 0;while(true){
if((i__28840_28911 < count__28839_28910))
{var vec__28855_28912 = cljs.core._nth.call(null,chunk__28838_28909,i__28840_28911);var actual_type_28913 = cljs.core.nth.call(null,vec__28855_28912,0,null);var factory_28914 = cljs.core.nth.call(null,vec__28855_28912,1,null);var canonical_f_28915 = (cljs.core.truth_(selector_28859)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28858,selector_28859):cljs.core.identity).call(null,factory_28914.call(null,f_28907));dommy.core.update_event_listeners_BANG_.call(null,elem_28858,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28859,actual_type_28913,f_28907], true),canonical_f_28915);
if(cljs.core.truth_(elem_28858.addEventListener))
{elem_28858.addEventListener(cljs.core.name.call(null,actual_type_28913),canonical_f_28915);
} else
{elem_28858.attachEvent(cljs.core.name.call(null,actual_type_28913),canonical_f_28915);
}
{
var G__28916 = seq__28836_28908;
var G__28917 = chunk__28838_28909;
var G__28918 = count__28839_28910;
var G__28919 = (i__28840_28911 + 1);
seq__28836_28908 = G__28916;
chunk__28838_28909 = G__28917;
count__28839_28910 = G__28918;
i__28840_28911 = G__28919;
continue;
}
} else
{var temp__4092__auto___28920__$1 = cljs.core.seq.call(null,seq__28836_28908);if(temp__4092__auto___28920__$1)
{var seq__28836_28921__$1 = temp__4092__auto___28920__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28836_28921__$1))
{var c__3844__auto___28922 = cljs.core.chunk_first.call(null,seq__28836_28921__$1);{
var G__28923 = cljs.core.chunk_rest.call(null,seq__28836_28921__$1);
var G__28924 = c__3844__auto___28922;
var G__28925 = cljs.core.count.call(null,c__3844__auto___28922);
var G__28926 = 0;
seq__28836_28908 = G__28923;
chunk__28838_28909 = G__28924;
count__28839_28910 = G__28925;
i__28840_28911 = G__28926;
continue;
}
} else
{var vec__28856_28927 = cljs.core.first.call(null,seq__28836_28921__$1);var actual_type_28928 = cljs.core.nth.call(null,vec__28856_28927,0,null);var factory_28929 = cljs.core.nth.call(null,vec__28856_28927,1,null);var canonical_f_28930 = (cljs.core.truth_(selector_28859)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28858,selector_28859):cljs.core.identity).call(null,factory_28929.call(null,f_28907));dommy.core.update_event_listeners_BANG_.call(null,elem_28858,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_28859,actual_type_28928,f_28907], true),canonical_f_28930);
if(cljs.core.truth_(elem_28858.addEventListener))
{elem_28858.addEventListener(cljs.core.name.call(null,actual_type_28928),canonical_f_28930);
} else
{elem_28858.attachEvent(cljs.core.name.call(null,actual_type_28928),canonical_f_28930);
}
{
var G__28931 = cljs.core.next.call(null,seq__28836_28921__$1);
var G__28932 = null;
var G__28933 = 0;
var G__28934 = 0;
seq__28836_28908 = G__28931;
chunk__28838_28909 = G__28932;
count__28839_28910 = G__28933;
i__28840_28911 = G__28934;
continue;
}
}
} else
{}
}
break;
}
{
var G__28935 = cljs.core.next.call(null,seq__28835_28899__$1);
var G__28936 = null;
var G__28937 = 0;
var G__28938 = 0;
seq__28835_28860 = G__28935;
chunk__28842_28861 = G__28936;
count__28843_28862 = G__28937;
i__28844_28863 = G__28938;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__28939){
var elem_sel = cljs.core.first(arglist__28939);
var type_fs = cljs.core.rest(arglist__28939);
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
var vec__28963_28986 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28987 = cljs.core.nth.call(null,vec__28963_28986,0,null);var selector_28988 = cljs.core.nth.call(null,vec__28963_28986,1,null);var seq__28964_28989 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28971_28990 = null;var count__28972_28991 = 0;var i__28973_28992 = 0;while(true){
if((i__28973_28992 < count__28972_28991))
{var vec__28980_28993 = cljs.core._nth.call(null,chunk__28971_28990,i__28973_28992);var orig_type_28994 = cljs.core.nth.call(null,vec__28980_28993,0,null);var f_28995 = cljs.core.nth.call(null,vec__28980_28993,1,null);var seq__28974_28996 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28994,cljs.core.PersistentArrayMap.fromArray([orig_type_28994,cljs.core.identity], true)));var chunk__28976_28997 = null;var count__28977_28998 = 0;var i__28978_28999 = 0;while(true){
if((i__28978_28999 < count__28977_28998))
{var vec__28981_29000 = cljs.core._nth.call(null,chunk__28976_28997,i__28978_28999);var actual_type_29001 = cljs.core.nth.call(null,vec__28981_29000,0,null);var __29002 = cljs.core.nth.call(null,vec__28981_29000,1,null);var keys_29003 = cljs.core.PersistentVector.fromArray([selector_28988,actual_type_29001,f_28995], true);var canonical_f_29004 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28987),keys_29003);dommy.core.update_event_listeners_BANG_.call(null,elem_28987,dommy.utils.dissoc_in,keys_29003);
if(cljs.core.truth_(elem_28987.removeEventListener))
{elem_28987.removeEventListener(cljs.core.name.call(null,actual_type_29001),canonical_f_29004);
} else
{elem_28987.detachEvent(cljs.core.name.call(null,actual_type_29001),canonical_f_29004);
}
{
var G__29005 = seq__28974_28996;
var G__29006 = chunk__28976_28997;
var G__29007 = count__28977_28998;
var G__29008 = (i__28978_28999 + 1);
seq__28974_28996 = G__29005;
chunk__28976_28997 = G__29006;
count__28977_28998 = G__29007;
i__28978_28999 = G__29008;
continue;
}
} else
{var temp__4092__auto___29009 = cljs.core.seq.call(null,seq__28974_28996);if(temp__4092__auto___29009)
{var seq__28974_29010__$1 = temp__4092__auto___29009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28974_29010__$1))
{var c__3844__auto___29011 = cljs.core.chunk_first.call(null,seq__28974_29010__$1);{
var G__29012 = cljs.core.chunk_rest.call(null,seq__28974_29010__$1);
var G__29013 = c__3844__auto___29011;
var G__29014 = cljs.core.count.call(null,c__3844__auto___29011);
var G__29015 = 0;
seq__28974_28996 = G__29012;
chunk__28976_28997 = G__29013;
count__28977_28998 = G__29014;
i__28978_28999 = G__29015;
continue;
}
} else
{var vec__28982_29016 = cljs.core.first.call(null,seq__28974_29010__$1);var actual_type_29017 = cljs.core.nth.call(null,vec__28982_29016,0,null);var __29018 = cljs.core.nth.call(null,vec__28982_29016,1,null);var keys_29019 = cljs.core.PersistentVector.fromArray([selector_28988,actual_type_29017,f_28995], true);var canonical_f_29020 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28987),keys_29019);dommy.core.update_event_listeners_BANG_.call(null,elem_28987,dommy.utils.dissoc_in,keys_29019);
if(cljs.core.truth_(elem_28987.removeEventListener))
{elem_28987.removeEventListener(cljs.core.name.call(null,actual_type_29017),canonical_f_29020);
} else
{elem_28987.detachEvent(cljs.core.name.call(null,actual_type_29017),canonical_f_29020);
}
{
var G__29021 = cljs.core.next.call(null,seq__28974_29010__$1);
var G__29022 = null;
var G__29023 = 0;
var G__29024 = 0;
seq__28974_28996 = G__29021;
chunk__28976_28997 = G__29022;
count__28977_28998 = G__29023;
i__28978_28999 = G__29024;
continue;
}
}
} else
{}
}
break;
}
{
var G__29025 = seq__28964_28989;
var G__29026 = chunk__28971_28990;
var G__29027 = count__28972_28991;
var G__29028 = (i__28973_28992 + 1);
seq__28964_28989 = G__29025;
chunk__28971_28990 = G__29026;
count__28972_28991 = G__29027;
i__28973_28992 = G__29028;
continue;
}
} else
{var temp__4092__auto___29029 = cljs.core.seq.call(null,seq__28964_28989);if(temp__4092__auto___29029)
{var seq__28964_29030__$1 = temp__4092__auto___29029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28964_29030__$1))
{var c__3844__auto___29031 = cljs.core.chunk_first.call(null,seq__28964_29030__$1);{
var G__29032 = cljs.core.chunk_rest.call(null,seq__28964_29030__$1);
var G__29033 = c__3844__auto___29031;
var G__29034 = cljs.core.count.call(null,c__3844__auto___29031);
var G__29035 = 0;
seq__28964_28989 = G__29032;
chunk__28971_28990 = G__29033;
count__28972_28991 = G__29034;
i__28973_28992 = G__29035;
continue;
}
} else
{var vec__28983_29036 = cljs.core.first.call(null,seq__28964_29030__$1);var orig_type_29037 = cljs.core.nth.call(null,vec__28983_29036,0,null);var f_29038 = cljs.core.nth.call(null,vec__28983_29036,1,null);var seq__28965_29039 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29037,cljs.core.PersistentArrayMap.fromArray([orig_type_29037,cljs.core.identity], true)));var chunk__28967_29040 = null;var count__28968_29041 = 0;var i__28969_29042 = 0;while(true){
if((i__28969_29042 < count__28968_29041))
{var vec__28984_29043 = cljs.core._nth.call(null,chunk__28967_29040,i__28969_29042);var actual_type_29044 = cljs.core.nth.call(null,vec__28984_29043,0,null);var __29045 = cljs.core.nth.call(null,vec__28984_29043,1,null);var keys_29046 = cljs.core.PersistentVector.fromArray([selector_28988,actual_type_29044,f_29038], true);var canonical_f_29047 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28987),keys_29046);dommy.core.update_event_listeners_BANG_.call(null,elem_28987,dommy.utils.dissoc_in,keys_29046);
if(cljs.core.truth_(elem_28987.removeEventListener))
{elem_28987.removeEventListener(cljs.core.name.call(null,actual_type_29044),canonical_f_29047);
} else
{elem_28987.detachEvent(cljs.core.name.call(null,actual_type_29044),canonical_f_29047);
}
{
var G__29048 = seq__28965_29039;
var G__29049 = chunk__28967_29040;
var G__29050 = count__28968_29041;
var G__29051 = (i__28969_29042 + 1);
seq__28965_29039 = G__29048;
chunk__28967_29040 = G__29049;
count__28968_29041 = G__29050;
i__28969_29042 = G__29051;
continue;
}
} else
{var temp__4092__auto___29052__$1 = cljs.core.seq.call(null,seq__28965_29039);if(temp__4092__auto___29052__$1)
{var seq__28965_29053__$1 = temp__4092__auto___29052__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28965_29053__$1))
{var c__3844__auto___29054 = cljs.core.chunk_first.call(null,seq__28965_29053__$1);{
var G__29055 = cljs.core.chunk_rest.call(null,seq__28965_29053__$1);
var G__29056 = c__3844__auto___29054;
var G__29057 = cljs.core.count.call(null,c__3844__auto___29054);
var G__29058 = 0;
seq__28965_29039 = G__29055;
chunk__28967_29040 = G__29056;
count__28968_29041 = G__29057;
i__28969_29042 = G__29058;
continue;
}
} else
{var vec__28985_29059 = cljs.core.first.call(null,seq__28965_29053__$1);var actual_type_29060 = cljs.core.nth.call(null,vec__28985_29059,0,null);var __29061 = cljs.core.nth.call(null,vec__28985_29059,1,null);var keys_29062 = cljs.core.PersistentVector.fromArray([selector_28988,actual_type_29060,f_29038], true);var canonical_f_29063 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28987),keys_29062);dommy.core.update_event_listeners_BANG_.call(null,elem_28987,dommy.utils.dissoc_in,keys_29062);
if(cljs.core.truth_(elem_28987.removeEventListener))
{elem_28987.removeEventListener(cljs.core.name.call(null,actual_type_29060),canonical_f_29063);
} else
{elem_28987.detachEvent(cljs.core.name.call(null,actual_type_29060),canonical_f_29063);
}
{
var G__29064 = cljs.core.next.call(null,seq__28965_29053__$1);
var G__29065 = null;
var G__29066 = 0;
var G__29067 = 0;
seq__28965_29039 = G__29064;
chunk__28967_29040 = G__29065;
count__28968_29041 = G__29066;
i__28969_29042 = G__29067;
continue;
}
}
} else
{}
}
break;
}
{
var G__29068 = cljs.core.next.call(null,seq__28964_29030__$1);
var G__29069 = null;
var G__29070 = 0;
var G__29071 = 0;
seq__28964_28989 = G__29068;
chunk__28971_28990 = G__29069;
count__28972_28991 = G__29070;
i__28973_28992 = G__29071;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__29072){
var elem_sel = cljs.core.first(arglist__29072);
var type_fs = cljs.core.rest(arglist__29072);
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
var vec__29080_29087 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_29088 = cljs.core.nth.call(null,vec__29080_29087,0,null);var selector_29089 = cljs.core.nth.call(null,vec__29080_29087,1,null);var seq__29081_29090 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__29082_29091 = null;var count__29083_29092 = 0;var i__29084_29093 = 0;while(true){
if((i__29084_29093 < count__29083_29092))
{var vec__29085_29094 = cljs.core._nth.call(null,chunk__29082_29091,i__29084_29093);var type_29095 = cljs.core.nth.call(null,vec__29085_29094,0,null);var f_29096 = cljs.core.nth.call(null,vec__29085_29094,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_29095,((function (seq__29081_29090,chunk__29082_29091,count__29083_29092,i__29084_29093,vec__29085_29094,type_29095,f_29096){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_29095,this_fn);
return f_29096.call(null,e);
});})(seq__29081_29090,chunk__29082_29091,count__29083_29092,i__29084_29093,vec__29085_29094,type_29095,f_29096))
);
{
var G__29097 = seq__29081_29090;
var G__29098 = chunk__29082_29091;
var G__29099 = count__29083_29092;
var G__29100 = (i__29084_29093 + 1);
seq__29081_29090 = G__29097;
chunk__29082_29091 = G__29098;
count__29083_29092 = G__29099;
i__29084_29093 = G__29100;
continue;
}
} else
{var temp__4092__auto___29101 = cljs.core.seq.call(null,seq__29081_29090);if(temp__4092__auto___29101)
{var seq__29081_29102__$1 = temp__4092__auto___29101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29081_29102__$1))
{var c__3844__auto___29103 = cljs.core.chunk_first.call(null,seq__29081_29102__$1);{
var G__29104 = cljs.core.chunk_rest.call(null,seq__29081_29102__$1);
var G__29105 = c__3844__auto___29103;
var G__29106 = cljs.core.count.call(null,c__3844__auto___29103);
var G__29107 = 0;
seq__29081_29090 = G__29104;
chunk__29082_29091 = G__29105;
count__29083_29092 = G__29106;
i__29084_29093 = G__29107;
continue;
}
} else
{var vec__29086_29108 = cljs.core.first.call(null,seq__29081_29102__$1);var type_29109 = cljs.core.nth.call(null,vec__29086_29108,0,null);var f_29110 = cljs.core.nth.call(null,vec__29086_29108,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_29109,((function (seq__29081_29090,chunk__29082_29091,count__29083_29092,i__29084_29093,vec__29086_29108,type_29109,f_29110,seq__29081_29102__$1,temp__4092__auto___29101){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_29109,this_fn);
return f_29110.call(null,e);
});})(seq__29081_29090,chunk__29082_29091,count__29083_29092,i__29084_29093,vec__29086_29108,type_29109,f_29110,seq__29081_29102__$1,temp__4092__auto___29101))
);
{
var G__29111 = cljs.core.next.call(null,seq__29081_29102__$1);
var G__29112 = null;
var G__29113 = 0;
var G__29114 = 0;
seq__29081_29090 = G__29111;
chunk__29082_29091 = G__29112;
count__29083_29092 = G__29113;
i__29084_29093 = G__29114;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__29115){
var elem_sel = cljs.core.first(arglist__29115);
var type_fs = cljs.core.rest(arglist__29115);
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
var fire_BANG___delegate = function (node,event_type,p__29116){var vec__29118 = p__29116;var update_event_BANG_ = cljs.core.nth.call(null,vec__29118,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__29116 = null;if (arguments.length > 2) {
  p__29116 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__29116);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__29119){
var node = cljs.core.first(arglist__29119);
arglist__29119 = cljs.core.next(arglist__29119);
var event_type = cljs.core.first(arglist__29119);
var p__29116 = cljs.core.rest(arglist__29119);
return fire_BANG___delegate(node,event_type,p__29116);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map