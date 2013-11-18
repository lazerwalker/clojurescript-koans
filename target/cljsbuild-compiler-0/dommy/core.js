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
var append_BANG___2 = (function (parent,child){var G__16816 = dommy.template.__GT_node_like.call(null,parent);G__16816.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16816;
});
var append_BANG___3 = (function() { 
var G__16821__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16817_16822 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16818_16823 = null;var count__16819_16824 = 0;var i__16820_16825 = 0;while(true){
if((i__16820_16825 < count__16819_16824))
{var c_16826 = cljs.core._nth.call(null,chunk__16818_16823,i__16820_16825);append_BANG_.call(null,parent__$1,c_16826);
{
var G__16827 = seq__16817_16822;
var G__16828 = chunk__16818_16823;
var G__16829 = count__16819_16824;
var G__16830 = (i__16820_16825 + 1);
seq__16817_16822 = G__16827;
chunk__16818_16823 = G__16828;
count__16819_16824 = G__16829;
i__16820_16825 = G__16830;
continue;
}
} else
{var temp__4092__auto___16831 = cljs.core.seq.call(null,seq__16817_16822);if(temp__4092__auto___16831)
{var seq__16817_16832__$1 = temp__4092__auto___16831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16817_16832__$1))
{var c__3844__auto___16833 = cljs.core.chunk_first.call(null,seq__16817_16832__$1);{
var G__16834 = cljs.core.chunk_rest.call(null,seq__16817_16832__$1);
var G__16835 = c__3844__auto___16833;
var G__16836 = cljs.core.count.call(null,c__3844__auto___16833);
var G__16837 = 0;
seq__16817_16822 = G__16834;
chunk__16818_16823 = G__16835;
count__16819_16824 = G__16836;
i__16820_16825 = G__16837;
continue;
}
} else
{var c_16838 = cljs.core.first.call(null,seq__16817_16832__$1);append_BANG_.call(null,parent__$1,c_16838);
{
var G__16839 = cljs.core.next.call(null,seq__16817_16832__$1);
var G__16840 = null;
var G__16841 = 0;
var G__16842 = 0;
seq__16817_16822 = G__16839;
chunk__16818_16823 = G__16840;
count__16819_16824 = G__16841;
i__16820_16825 = G__16842;
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
var G__16821 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16821__delegate.call(this,parent,child,more_children);};
G__16821.cljs$lang$maxFixedArity = 2;
G__16821.cljs$lang$applyTo = (function (arglist__16843){
var parent = cljs.core.first(arglist__16843);
arglist__16843 = cljs.core.next(arglist__16843);
var child = cljs.core.first(arglist__16843);
var more_children = cljs.core.rest(arglist__16843);
return G__16821__delegate(parent,child,more_children);
});
G__16821.cljs$core$IFn$_invoke$arity$variadic = G__16821__delegate;
return G__16821;
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
var G__16852__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16848_16853 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16849_16854 = null;var count__16850_16855 = 0;var i__16851_16856 = 0;while(true){
if((i__16851_16856 < count__16850_16855))
{var c_16857 = cljs.core._nth.call(null,chunk__16849_16854,i__16851_16856);prepend_BANG_.call(null,parent__$1,c_16857);
{
var G__16858 = seq__16848_16853;
var G__16859 = chunk__16849_16854;
var G__16860 = count__16850_16855;
var G__16861 = (i__16851_16856 + 1);
seq__16848_16853 = G__16858;
chunk__16849_16854 = G__16859;
count__16850_16855 = G__16860;
i__16851_16856 = G__16861;
continue;
}
} else
{var temp__4092__auto___16862 = cljs.core.seq.call(null,seq__16848_16853);if(temp__4092__auto___16862)
{var seq__16848_16863__$1 = temp__4092__auto___16862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16848_16863__$1))
{var c__3844__auto___16864 = cljs.core.chunk_first.call(null,seq__16848_16863__$1);{
var G__16865 = cljs.core.chunk_rest.call(null,seq__16848_16863__$1);
var G__16866 = c__3844__auto___16864;
var G__16867 = cljs.core.count.call(null,c__3844__auto___16864);
var G__16868 = 0;
seq__16848_16853 = G__16865;
chunk__16849_16854 = G__16866;
count__16850_16855 = G__16867;
i__16851_16856 = G__16868;
continue;
}
} else
{var c_16869 = cljs.core.first.call(null,seq__16848_16863__$1);prepend_BANG_.call(null,parent__$1,c_16869);
{
var G__16870 = cljs.core.next.call(null,seq__16848_16863__$1);
var G__16871 = null;
var G__16872 = 0;
var G__16873 = 0;
seq__16848_16853 = G__16870;
chunk__16849_16854 = G__16871;
count__16850_16855 = G__16872;
i__16851_16856 = G__16873;
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
var G__16852 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16852__delegate.call(this,parent,child,more_children);};
G__16852.cljs$lang$maxFixedArity = 2;
G__16852.cljs$lang$applyTo = (function (arglist__16874){
var parent = cljs.core.first(arglist__16874);
arglist__16874 = cljs.core.next(arglist__16874);
var child = cljs.core.first(arglist__16874);
var more_children = cljs.core.rest(arglist__16874);
return G__16852__delegate(parent,child,more_children);
});
G__16852.cljs$core$IFn$_invoke$arity$variadic = G__16852__delegate;
return G__16852;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16875 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16875))
{var next_16876 = temp__4090__auto___16875;parent.insertBefore(actual_node,next_16876);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16878 = dommy.template.__GT_node_like.call(null,parent);G__16878.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16878,node_like);
return G__16878;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16880 = elem__$1.parentNode;G__16880.removeChild(elem__$1);
return G__16880;
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
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"container","container",602947571),container], true),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16886){var vec__16887 = p__16886;var k = cljs.core.nth.call(null,vec__16887,0,null);var v = cljs.core.nth.call(null,vec__16887,1,null);return cljs.core.PersistentVector.fromArray([k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16888 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16888 = (function (v,k,vec__16887,p__16886,container,key_selectors_map,template,selector_map,meta16889){
this.v = v;
this.k = k;
this.vec__16887 = vec__16887;
this.p__16886 = p__16886;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16889 = meta16889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16888.cljs$lang$type = true;
dommy.core.t16888.cljs$lang$ctorStr = "dommy.core/t16888";
dommy.core.t16888.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"dommy.core/t16888");
});
dommy.core.t16888.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16890){var self__ = this;
var _16890__$1 = this;return self__.meta16889;
});
dommy.core.t16888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16890,meta16889__$1){var self__ = this;
var _16890__$1 = this;return (new dommy.core.t16888(self__.v,self__.k,self__.vec__16887,self__.p__16886,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16889__$1));
});
dommy.core.__GT_t16888 = (function __GT_t16888(v__$1,k__$1,vec__16887__$1,p__16886__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16889){return (new dommy.core.t16888(v__$1,k__$1,vec__16887__$1,p__16886__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16889));
});
}
return (new dommy.core.t16888(v,k,vec__16887,p__16886,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], true);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16891_SHARP_){return p1__16891_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16892_SHARP_){return !((p1__16892_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16893){var vec__16894 = p__16893;var special_mouse_event = cljs.core.nth.call(null,vec__16894,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16894,1,null);return cljs.core.PersistentVector.fromArray([special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3128__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3128__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16895){
var elem = cljs.core.first(arglist__16895);
arglist__16895 = cljs.core.next(arglist__16895);
var f = cljs.core.first(arglist__16895);
var args = cljs.core.rest(arglist__16895);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16896_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16896_SHARP_));
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
var vec__16920_16943 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16944 = cljs.core.nth.call(null,vec__16920_16943,0,null);var selector_16945 = cljs.core.nth.call(null,vec__16920_16943,1,null);var seq__16921_16946 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16928_16947 = null;var count__16929_16948 = 0;var i__16930_16949 = 0;while(true){
if((i__16930_16949 < count__16929_16948))
{var vec__16937_16950 = cljs.core._nth.call(null,chunk__16928_16947,i__16930_16949);var orig_type_16951 = cljs.core.nth.call(null,vec__16937_16950,0,null);var f_16952 = cljs.core.nth.call(null,vec__16937_16950,1,null);var seq__16931_16953 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16951,cljs.core.PersistentArrayMap.fromArray([orig_type_16951,cljs.core.identity], true)));var chunk__16933_16954 = null;var count__16934_16955 = 0;var i__16935_16956 = 0;while(true){
if((i__16935_16956 < count__16934_16955))
{var vec__16938_16957 = cljs.core._nth.call(null,chunk__16933_16954,i__16935_16956);var actual_type_16958 = cljs.core.nth.call(null,vec__16938_16957,0,null);var factory_16959 = cljs.core.nth.call(null,vec__16938_16957,1,null);var canonical_f_16960 = (cljs.core.truth_(selector_16945)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16944,selector_16945):cljs.core.identity).call(null,factory_16959.call(null,f_16952));dommy.core.update_event_listeners_BANG_.call(null,elem_16944,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16945,actual_type_16958,f_16952], true),canonical_f_16960);
if(cljs.core.truth_(elem_16944.addEventListener))
{elem_16944.addEventListener(cljs.core.name.call(null,actual_type_16958),canonical_f_16960);
} else
{elem_16944.attachEvent(cljs.core.name.call(null,actual_type_16958),canonical_f_16960);
}
{
var G__16961 = seq__16931_16953;
var G__16962 = chunk__16933_16954;
var G__16963 = count__16934_16955;
var G__16964 = (i__16935_16956 + 1);
seq__16931_16953 = G__16961;
chunk__16933_16954 = G__16962;
count__16934_16955 = G__16963;
i__16935_16956 = G__16964;
continue;
}
} else
{var temp__4092__auto___16965 = cljs.core.seq.call(null,seq__16931_16953);if(temp__4092__auto___16965)
{var seq__16931_16966__$1 = temp__4092__auto___16965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16931_16966__$1))
{var c__3844__auto___16967 = cljs.core.chunk_first.call(null,seq__16931_16966__$1);{
var G__16968 = cljs.core.chunk_rest.call(null,seq__16931_16966__$1);
var G__16969 = c__3844__auto___16967;
var G__16970 = cljs.core.count.call(null,c__3844__auto___16967);
var G__16971 = 0;
seq__16931_16953 = G__16968;
chunk__16933_16954 = G__16969;
count__16934_16955 = G__16970;
i__16935_16956 = G__16971;
continue;
}
} else
{var vec__16939_16972 = cljs.core.first.call(null,seq__16931_16966__$1);var actual_type_16973 = cljs.core.nth.call(null,vec__16939_16972,0,null);var factory_16974 = cljs.core.nth.call(null,vec__16939_16972,1,null);var canonical_f_16975 = (cljs.core.truth_(selector_16945)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16944,selector_16945):cljs.core.identity).call(null,factory_16974.call(null,f_16952));dommy.core.update_event_listeners_BANG_.call(null,elem_16944,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16945,actual_type_16973,f_16952], true),canonical_f_16975);
if(cljs.core.truth_(elem_16944.addEventListener))
{elem_16944.addEventListener(cljs.core.name.call(null,actual_type_16973),canonical_f_16975);
} else
{elem_16944.attachEvent(cljs.core.name.call(null,actual_type_16973),canonical_f_16975);
}
{
var G__16976 = cljs.core.next.call(null,seq__16931_16966__$1);
var G__16977 = null;
var G__16978 = 0;
var G__16979 = 0;
seq__16931_16953 = G__16976;
chunk__16933_16954 = G__16977;
count__16934_16955 = G__16978;
i__16935_16956 = G__16979;
continue;
}
}
} else
{}
}
break;
}
{
var G__16980 = seq__16921_16946;
var G__16981 = chunk__16928_16947;
var G__16982 = count__16929_16948;
var G__16983 = (i__16930_16949 + 1);
seq__16921_16946 = G__16980;
chunk__16928_16947 = G__16981;
count__16929_16948 = G__16982;
i__16930_16949 = G__16983;
continue;
}
} else
{var temp__4092__auto___16984 = cljs.core.seq.call(null,seq__16921_16946);if(temp__4092__auto___16984)
{var seq__16921_16985__$1 = temp__4092__auto___16984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16921_16985__$1))
{var c__3844__auto___16986 = cljs.core.chunk_first.call(null,seq__16921_16985__$1);{
var G__16987 = cljs.core.chunk_rest.call(null,seq__16921_16985__$1);
var G__16988 = c__3844__auto___16986;
var G__16989 = cljs.core.count.call(null,c__3844__auto___16986);
var G__16990 = 0;
seq__16921_16946 = G__16987;
chunk__16928_16947 = G__16988;
count__16929_16948 = G__16989;
i__16930_16949 = G__16990;
continue;
}
} else
{var vec__16940_16991 = cljs.core.first.call(null,seq__16921_16985__$1);var orig_type_16992 = cljs.core.nth.call(null,vec__16940_16991,0,null);var f_16993 = cljs.core.nth.call(null,vec__16940_16991,1,null);var seq__16922_16994 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16992,cljs.core.PersistentArrayMap.fromArray([orig_type_16992,cljs.core.identity], true)));var chunk__16924_16995 = null;var count__16925_16996 = 0;var i__16926_16997 = 0;while(true){
if((i__16926_16997 < count__16925_16996))
{var vec__16941_16998 = cljs.core._nth.call(null,chunk__16924_16995,i__16926_16997);var actual_type_16999 = cljs.core.nth.call(null,vec__16941_16998,0,null);var factory_17000 = cljs.core.nth.call(null,vec__16941_16998,1,null);var canonical_f_17001 = (cljs.core.truth_(selector_16945)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16944,selector_16945):cljs.core.identity).call(null,factory_17000.call(null,f_16993));dommy.core.update_event_listeners_BANG_.call(null,elem_16944,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16945,actual_type_16999,f_16993], true),canonical_f_17001);
if(cljs.core.truth_(elem_16944.addEventListener))
{elem_16944.addEventListener(cljs.core.name.call(null,actual_type_16999),canonical_f_17001);
} else
{elem_16944.attachEvent(cljs.core.name.call(null,actual_type_16999),canonical_f_17001);
}
{
var G__17002 = seq__16922_16994;
var G__17003 = chunk__16924_16995;
var G__17004 = count__16925_16996;
var G__17005 = (i__16926_16997 + 1);
seq__16922_16994 = G__17002;
chunk__16924_16995 = G__17003;
count__16925_16996 = G__17004;
i__16926_16997 = G__17005;
continue;
}
} else
{var temp__4092__auto___17006__$1 = cljs.core.seq.call(null,seq__16922_16994);if(temp__4092__auto___17006__$1)
{var seq__16922_17007__$1 = temp__4092__auto___17006__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16922_17007__$1))
{var c__3844__auto___17008 = cljs.core.chunk_first.call(null,seq__16922_17007__$1);{
var G__17009 = cljs.core.chunk_rest.call(null,seq__16922_17007__$1);
var G__17010 = c__3844__auto___17008;
var G__17011 = cljs.core.count.call(null,c__3844__auto___17008);
var G__17012 = 0;
seq__16922_16994 = G__17009;
chunk__16924_16995 = G__17010;
count__16925_16996 = G__17011;
i__16926_16997 = G__17012;
continue;
}
} else
{var vec__16942_17013 = cljs.core.first.call(null,seq__16922_17007__$1);var actual_type_17014 = cljs.core.nth.call(null,vec__16942_17013,0,null);var factory_17015 = cljs.core.nth.call(null,vec__16942_17013,1,null);var canonical_f_17016 = (cljs.core.truth_(selector_16945)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16944,selector_16945):cljs.core.identity).call(null,factory_17015.call(null,f_16993));dommy.core.update_event_listeners_BANG_.call(null,elem_16944,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([selector_16945,actual_type_17014,f_16993], true),canonical_f_17016);
if(cljs.core.truth_(elem_16944.addEventListener))
{elem_16944.addEventListener(cljs.core.name.call(null,actual_type_17014),canonical_f_17016);
} else
{elem_16944.attachEvent(cljs.core.name.call(null,actual_type_17014),canonical_f_17016);
}
{
var G__17017 = cljs.core.next.call(null,seq__16922_17007__$1);
var G__17018 = null;
var G__17019 = 0;
var G__17020 = 0;
seq__16922_16994 = G__17017;
chunk__16924_16995 = G__17018;
count__16925_16996 = G__17019;
i__16926_16997 = G__17020;
continue;
}
}
} else
{}
}
break;
}
{
var G__17021 = cljs.core.next.call(null,seq__16921_16985__$1);
var G__17022 = null;
var G__17023 = 0;
var G__17024 = 0;
seq__16921_16946 = G__17021;
chunk__16928_16947 = G__17022;
count__16929_16948 = G__17023;
i__16930_16949 = G__17024;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__17025){
var elem_sel = cljs.core.first(arglist__17025);
var type_fs = cljs.core.rest(arglist__17025);
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
var vec__17049_17072 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17073 = cljs.core.nth.call(null,vec__17049_17072,0,null);var selector_17074 = cljs.core.nth.call(null,vec__17049_17072,1,null);var seq__17050_17075 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__17057_17076 = null;var count__17058_17077 = 0;var i__17059_17078 = 0;while(true){
if((i__17059_17078 < count__17058_17077))
{var vec__17066_17079 = cljs.core._nth.call(null,chunk__17057_17076,i__17059_17078);var orig_type_17080 = cljs.core.nth.call(null,vec__17066_17079,0,null);var f_17081 = cljs.core.nth.call(null,vec__17066_17079,1,null);var seq__17060_17082 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17080,cljs.core.PersistentArrayMap.fromArray([orig_type_17080,cljs.core.identity], true)));var chunk__17062_17083 = null;var count__17063_17084 = 0;var i__17064_17085 = 0;while(true){
if((i__17064_17085 < count__17063_17084))
{var vec__17067_17086 = cljs.core._nth.call(null,chunk__17062_17083,i__17064_17085);var actual_type_17087 = cljs.core.nth.call(null,vec__17067_17086,0,null);var __17088 = cljs.core.nth.call(null,vec__17067_17086,1,null);var keys_17089 = cljs.core.PersistentVector.fromArray([selector_17074,actual_type_17087,f_17081], true);var canonical_f_17090 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17073),keys_17089);dommy.core.update_event_listeners_BANG_.call(null,elem_17073,dommy.utils.dissoc_in,keys_17089);
if(cljs.core.truth_(elem_17073.removeEventListener))
{elem_17073.removeEventListener(cljs.core.name.call(null,actual_type_17087),canonical_f_17090);
} else
{elem_17073.detachEvent(cljs.core.name.call(null,actual_type_17087),canonical_f_17090);
}
{
var G__17091 = seq__17060_17082;
var G__17092 = chunk__17062_17083;
var G__17093 = count__17063_17084;
var G__17094 = (i__17064_17085 + 1);
seq__17060_17082 = G__17091;
chunk__17062_17083 = G__17092;
count__17063_17084 = G__17093;
i__17064_17085 = G__17094;
continue;
}
} else
{var temp__4092__auto___17095 = cljs.core.seq.call(null,seq__17060_17082);if(temp__4092__auto___17095)
{var seq__17060_17096__$1 = temp__4092__auto___17095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17060_17096__$1))
{var c__3844__auto___17097 = cljs.core.chunk_first.call(null,seq__17060_17096__$1);{
var G__17098 = cljs.core.chunk_rest.call(null,seq__17060_17096__$1);
var G__17099 = c__3844__auto___17097;
var G__17100 = cljs.core.count.call(null,c__3844__auto___17097);
var G__17101 = 0;
seq__17060_17082 = G__17098;
chunk__17062_17083 = G__17099;
count__17063_17084 = G__17100;
i__17064_17085 = G__17101;
continue;
}
} else
{var vec__17068_17102 = cljs.core.first.call(null,seq__17060_17096__$1);var actual_type_17103 = cljs.core.nth.call(null,vec__17068_17102,0,null);var __17104 = cljs.core.nth.call(null,vec__17068_17102,1,null);var keys_17105 = cljs.core.PersistentVector.fromArray([selector_17074,actual_type_17103,f_17081], true);var canonical_f_17106 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17073),keys_17105);dommy.core.update_event_listeners_BANG_.call(null,elem_17073,dommy.utils.dissoc_in,keys_17105);
if(cljs.core.truth_(elem_17073.removeEventListener))
{elem_17073.removeEventListener(cljs.core.name.call(null,actual_type_17103),canonical_f_17106);
} else
{elem_17073.detachEvent(cljs.core.name.call(null,actual_type_17103),canonical_f_17106);
}
{
var G__17107 = cljs.core.next.call(null,seq__17060_17096__$1);
var G__17108 = null;
var G__17109 = 0;
var G__17110 = 0;
seq__17060_17082 = G__17107;
chunk__17062_17083 = G__17108;
count__17063_17084 = G__17109;
i__17064_17085 = G__17110;
continue;
}
}
} else
{}
}
break;
}
{
var G__17111 = seq__17050_17075;
var G__17112 = chunk__17057_17076;
var G__17113 = count__17058_17077;
var G__17114 = (i__17059_17078 + 1);
seq__17050_17075 = G__17111;
chunk__17057_17076 = G__17112;
count__17058_17077 = G__17113;
i__17059_17078 = G__17114;
continue;
}
} else
{var temp__4092__auto___17115 = cljs.core.seq.call(null,seq__17050_17075);if(temp__4092__auto___17115)
{var seq__17050_17116__$1 = temp__4092__auto___17115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17050_17116__$1))
{var c__3844__auto___17117 = cljs.core.chunk_first.call(null,seq__17050_17116__$1);{
var G__17118 = cljs.core.chunk_rest.call(null,seq__17050_17116__$1);
var G__17119 = c__3844__auto___17117;
var G__17120 = cljs.core.count.call(null,c__3844__auto___17117);
var G__17121 = 0;
seq__17050_17075 = G__17118;
chunk__17057_17076 = G__17119;
count__17058_17077 = G__17120;
i__17059_17078 = G__17121;
continue;
}
} else
{var vec__17069_17122 = cljs.core.first.call(null,seq__17050_17116__$1);var orig_type_17123 = cljs.core.nth.call(null,vec__17069_17122,0,null);var f_17124 = cljs.core.nth.call(null,vec__17069_17122,1,null);var seq__17051_17125 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17123,cljs.core.PersistentArrayMap.fromArray([orig_type_17123,cljs.core.identity], true)));var chunk__17053_17126 = null;var count__17054_17127 = 0;var i__17055_17128 = 0;while(true){
if((i__17055_17128 < count__17054_17127))
{var vec__17070_17129 = cljs.core._nth.call(null,chunk__17053_17126,i__17055_17128);var actual_type_17130 = cljs.core.nth.call(null,vec__17070_17129,0,null);var __17131 = cljs.core.nth.call(null,vec__17070_17129,1,null);var keys_17132 = cljs.core.PersistentVector.fromArray([selector_17074,actual_type_17130,f_17124], true);var canonical_f_17133 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17073),keys_17132);dommy.core.update_event_listeners_BANG_.call(null,elem_17073,dommy.utils.dissoc_in,keys_17132);
if(cljs.core.truth_(elem_17073.removeEventListener))
{elem_17073.removeEventListener(cljs.core.name.call(null,actual_type_17130),canonical_f_17133);
} else
{elem_17073.detachEvent(cljs.core.name.call(null,actual_type_17130),canonical_f_17133);
}
{
var G__17134 = seq__17051_17125;
var G__17135 = chunk__17053_17126;
var G__17136 = count__17054_17127;
var G__17137 = (i__17055_17128 + 1);
seq__17051_17125 = G__17134;
chunk__17053_17126 = G__17135;
count__17054_17127 = G__17136;
i__17055_17128 = G__17137;
continue;
}
} else
{var temp__4092__auto___17138__$1 = cljs.core.seq.call(null,seq__17051_17125);if(temp__4092__auto___17138__$1)
{var seq__17051_17139__$1 = temp__4092__auto___17138__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17051_17139__$1))
{var c__3844__auto___17140 = cljs.core.chunk_first.call(null,seq__17051_17139__$1);{
var G__17141 = cljs.core.chunk_rest.call(null,seq__17051_17139__$1);
var G__17142 = c__3844__auto___17140;
var G__17143 = cljs.core.count.call(null,c__3844__auto___17140);
var G__17144 = 0;
seq__17051_17125 = G__17141;
chunk__17053_17126 = G__17142;
count__17054_17127 = G__17143;
i__17055_17128 = G__17144;
continue;
}
} else
{var vec__17071_17145 = cljs.core.first.call(null,seq__17051_17139__$1);var actual_type_17146 = cljs.core.nth.call(null,vec__17071_17145,0,null);var __17147 = cljs.core.nth.call(null,vec__17071_17145,1,null);var keys_17148 = cljs.core.PersistentVector.fromArray([selector_17074,actual_type_17146,f_17124], true);var canonical_f_17149 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17073),keys_17148);dommy.core.update_event_listeners_BANG_.call(null,elem_17073,dommy.utils.dissoc_in,keys_17148);
if(cljs.core.truth_(elem_17073.removeEventListener))
{elem_17073.removeEventListener(cljs.core.name.call(null,actual_type_17146),canonical_f_17149);
} else
{elem_17073.detachEvent(cljs.core.name.call(null,actual_type_17146),canonical_f_17149);
}
{
var G__17150 = cljs.core.next.call(null,seq__17051_17139__$1);
var G__17151 = null;
var G__17152 = 0;
var G__17153 = 0;
seq__17051_17125 = G__17150;
chunk__17053_17126 = G__17151;
count__17054_17127 = G__17152;
i__17055_17128 = G__17153;
continue;
}
}
} else
{}
}
break;
}
{
var G__17154 = cljs.core.next.call(null,seq__17050_17116__$1);
var G__17155 = null;
var G__17156 = 0;
var G__17157 = 0;
seq__17050_17075 = G__17154;
chunk__17057_17076 = G__17155;
count__17058_17077 = G__17156;
i__17059_17078 = G__17157;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__17158){
var elem_sel = cljs.core.first(arglist__17158);
var type_fs = cljs.core.rest(arglist__17158);
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
var vec__17166_17173 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17174 = cljs.core.nth.call(null,vec__17166_17173,0,null);var selector_17175 = cljs.core.nth.call(null,vec__17166_17173,1,null);var seq__17167_17176 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__17168_17177 = null;var count__17169_17178 = 0;var i__17170_17179 = 0;while(true){
if((i__17170_17179 < count__17169_17178))
{var vec__17171_17180 = cljs.core._nth.call(null,chunk__17168_17177,i__17170_17179);var type_17181 = cljs.core.nth.call(null,vec__17171_17180,0,null);var f_17182 = cljs.core.nth.call(null,vec__17171_17180,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_17181,((function (seq__17167_17176,chunk__17168_17177,count__17169_17178,i__17170_17179,vec__17171_17180,type_17181,f_17182){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17181,this_fn);
return f_17182.call(null,e);
});})(seq__17167_17176,chunk__17168_17177,count__17169_17178,i__17170_17179,vec__17171_17180,type_17181,f_17182))
);
{
var G__17183 = seq__17167_17176;
var G__17184 = chunk__17168_17177;
var G__17185 = count__17169_17178;
var G__17186 = (i__17170_17179 + 1);
seq__17167_17176 = G__17183;
chunk__17168_17177 = G__17184;
count__17169_17178 = G__17185;
i__17170_17179 = G__17186;
continue;
}
} else
{var temp__4092__auto___17187 = cljs.core.seq.call(null,seq__17167_17176);if(temp__4092__auto___17187)
{var seq__17167_17188__$1 = temp__4092__auto___17187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17167_17188__$1))
{var c__3844__auto___17189 = cljs.core.chunk_first.call(null,seq__17167_17188__$1);{
var G__17190 = cljs.core.chunk_rest.call(null,seq__17167_17188__$1);
var G__17191 = c__3844__auto___17189;
var G__17192 = cljs.core.count.call(null,c__3844__auto___17189);
var G__17193 = 0;
seq__17167_17176 = G__17190;
chunk__17168_17177 = G__17191;
count__17169_17178 = G__17192;
i__17170_17179 = G__17193;
continue;
}
} else
{var vec__17172_17194 = cljs.core.first.call(null,seq__17167_17188__$1);var type_17195 = cljs.core.nth.call(null,vec__17172_17194,0,null);var f_17196 = cljs.core.nth.call(null,vec__17172_17194,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_17195,((function (seq__17167_17176,chunk__17168_17177,count__17169_17178,i__17170_17179,vec__17172_17194,type_17195,f_17196,seq__17167_17188__$1,temp__4092__auto___17187){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17195,this_fn);
return f_17196.call(null,e);
});})(seq__17167_17176,chunk__17168_17177,count__17169_17178,i__17170_17179,vec__17172_17194,type_17195,f_17196,seq__17167_17188__$1,temp__4092__auto___17187))
);
{
var G__17197 = cljs.core.next.call(null,seq__17167_17188__$1);
var G__17198 = null;
var G__17199 = 0;
var G__17200 = 0;
seq__17167_17176 = G__17197;
chunk__17168_17177 = G__17198;
count__17169_17178 = G__17199;
i__17170_17179 = G__17200;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__17201){
var elem_sel = cljs.core.first(arglist__17201);
var type_fs = cljs.core.rest(arglist__17201);
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
var fire_BANG___delegate = function (node,event_type,p__17202){var vec__17204 = p__17202;var update_event_BANG_ = cljs.core.nth.call(null,vec__17204,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__17202 = null;if (arguments.length > 2) {
  p__17202 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__17202);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__17205){
var node = cljs.core.first(arglist__17205);
arglist__17205 = cljs.core.next(arglist__17205);
var event_type = cljs.core.first(arglist__17205);
var p__17202 = cljs.core.rest(arglist__17205);
return fire_BANG___delegate(node,event_type,p__17202);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
