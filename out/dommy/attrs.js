// Compiled by ClojureScript 0.0-2014
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3119__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3119__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3119__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__16646 = (i + class$.length);
start_from = G__16646;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___16671 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16671))
{var class_list_16672 = temp__4090__auto___16671;var seq__16659_16673 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16660_16674 = null;var count__16661_16675 = 0;var i__16662_16676 = 0;while(true){
if((i__16662_16676 < count__16661_16675))
{var class_16677 = cljs.core._nth.call(null,chunk__16660_16674,i__16662_16676);class_list_16672.add(class_16677);
{
var G__16678 = seq__16659_16673;
var G__16679 = chunk__16660_16674;
var G__16680 = count__16661_16675;
var G__16681 = (i__16662_16676 + 1);
seq__16659_16673 = G__16678;
chunk__16660_16674 = G__16679;
count__16661_16675 = G__16680;
i__16662_16676 = G__16681;
continue;
}
} else
{var temp__4092__auto___16682 = cljs.core.seq.call(null,seq__16659_16673);if(temp__4092__auto___16682)
{var seq__16659_16683__$1 = temp__4092__auto___16682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16659_16683__$1))
{var c__3844__auto___16684 = cljs.core.chunk_first.call(null,seq__16659_16683__$1);{
var G__16685 = cljs.core.chunk_rest.call(null,seq__16659_16683__$1);
var G__16686 = c__3844__auto___16684;
var G__16687 = cljs.core.count.call(null,c__3844__auto___16684);
var G__16688 = 0;
seq__16659_16673 = G__16685;
chunk__16660_16674 = G__16686;
count__16661_16675 = G__16687;
i__16662_16676 = G__16688;
continue;
}
} else
{var class_16689 = cljs.core.first.call(null,seq__16659_16683__$1);class_list_16672.add(class_16689);
{
var G__16690 = cljs.core.next.call(null,seq__16659_16683__$1);
var G__16691 = null;
var G__16692 = 0;
var G__16693 = 0;
seq__16659_16673 = G__16690;
chunk__16660_16674 = G__16691;
count__16661_16675 = G__16692;
i__16662_16676 = G__16693;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16694 = elem__$1.className;var seq__16663_16695 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16664_16696 = null;var count__16665_16697 = 0;var i__16666_16698 = 0;while(true){
if((i__16666_16698 < count__16665_16697))
{var class_16699 = cljs.core._nth.call(null,chunk__16664_16696,i__16666_16698);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16694,class_16699)))
{} else
{elem__$1.className = (((class_name_16694 === ""))?class_16699:[cljs.core.str(class_name_16694),cljs.core.str(" "),cljs.core.str(class_16699)].join(''));
}
{
var G__16700 = seq__16663_16695;
var G__16701 = chunk__16664_16696;
var G__16702 = count__16665_16697;
var G__16703 = (i__16666_16698 + 1);
seq__16663_16695 = G__16700;
chunk__16664_16696 = G__16701;
count__16665_16697 = G__16702;
i__16666_16698 = G__16703;
continue;
}
} else
{var temp__4092__auto___16704 = cljs.core.seq.call(null,seq__16663_16695);if(temp__4092__auto___16704)
{var seq__16663_16705__$1 = temp__4092__auto___16704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16663_16705__$1))
{var c__3844__auto___16706 = cljs.core.chunk_first.call(null,seq__16663_16705__$1);{
var G__16707 = cljs.core.chunk_rest.call(null,seq__16663_16705__$1);
var G__16708 = c__3844__auto___16706;
var G__16709 = cljs.core.count.call(null,c__3844__auto___16706);
var G__16710 = 0;
seq__16663_16695 = G__16707;
chunk__16664_16696 = G__16708;
count__16665_16697 = G__16709;
i__16666_16698 = G__16710;
continue;
}
} else
{var class_16711 = cljs.core.first.call(null,seq__16663_16705__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16694,class_16711)))
{} else
{elem__$1.className = (((class_name_16694 === ""))?class_16711:[cljs.core.str(class_name_16694),cljs.core.str(" "),cljs.core.str(class_16711)].join(''));
}
{
var G__16712 = cljs.core.next.call(null,seq__16663_16705__$1);
var G__16713 = null;
var G__16714 = 0;
var G__16715 = 0;
seq__16663_16695 = G__16712;
chunk__16664_16696 = G__16713;
count__16665_16697 = G__16714;
i__16666_16698 = G__16715;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__16716__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16667_16717 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16668_16718 = null;var count__16669_16719 = 0;var i__16670_16720 = 0;while(true){
if((i__16670_16720 < count__16669_16719))
{var c_16721 = cljs.core._nth.call(null,chunk__16668_16718,i__16670_16720);add_class_BANG_.call(null,elem__$1,c_16721);
{
var G__16722 = seq__16667_16717;
var G__16723 = chunk__16668_16718;
var G__16724 = count__16669_16719;
var G__16725 = (i__16670_16720 + 1);
seq__16667_16717 = G__16722;
chunk__16668_16718 = G__16723;
count__16669_16719 = G__16724;
i__16670_16720 = G__16725;
continue;
}
} else
{var temp__4092__auto___16726 = cljs.core.seq.call(null,seq__16667_16717);if(temp__4092__auto___16726)
{var seq__16667_16727__$1 = temp__4092__auto___16726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16667_16727__$1))
{var c__3844__auto___16728 = cljs.core.chunk_first.call(null,seq__16667_16727__$1);{
var G__16729 = cljs.core.chunk_rest.call(null,seq__16667_16727__$1);
var G__16730 = c__3844__auto___16728;
var G__16731 = cljs.core.count.call(null,c__3844__auto___16728);
var G__16732 = 0;
seq__16667_16717 = G__16729;
chunk__16668_16718 = G__16730;
count__16669_16719 = G__16731;
i__16670_16720 = G__16732;
continue;
}
} else
{var c_16733 = cljs.core.first.call(null,seq__16667_16727__$1);add_class_BANG_.call(null,elem__$1,c_16733);
{
var G__16734 = cljs.core.next.call(null,seq__16667_16727__$1);
var G__16735 = null;
var G__16736 = 0;
var G__16737 = 0;
seq__16667_16717 = G__16734;
chunk__16668_16718 = G__16735;
count__16669_16719 = G__16736;
i__16670_16720 = G__16737;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__16716 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16716__delegate.call(this,elem,classes,more_classes);};
G__16716.cljs$lang$maxFixedArity = 2;
G__16716.cljs$lang$applyTo = (function (arglist__16738){
var elem = cljs.core.first(arglist__16738);
arglist__16738 = cljs.core.next(arglist__16738);
var classes = cljs.core.first(arglist__16738);
var more_classes = cljs.core.rest(arglist__16738);
return G__16716__delegate(elem,classes,more_classes);
});
G__16716.cljs$core$IFn$_invoke$arity$variadic = G__16716__delegate;
return G__16716;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__16739 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16739;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16748 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16748))
{var class_list_16749 = temp__4090__auto___16748;class_list_16749.remove(class$__$1);
} else
{var class_name_16750 = elem__$1.className;var new_class_name_16751 = dommy.attrs.remove_class_str.call(null,class_name_16750,class$__$1);if((class_name_16750 === new_class_name_16751))
{} else
{elem__$1.className = new_class_name_16751;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16752__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16744 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16745 = null;var count__16746 = 0;var i__16747 = 0;while(true){
if((i__16747 < count__16746))
{var c = cljs.core._nth.call(null,chunk__16745,i__16747);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16753 = seq__16744;
var G__16754 = chunk__16745;
var G__16755 = count__16746;
var G__16756 = (i__16747 + 1);
seq__16744 = G__16753;
chunk__16745 = G__16754;
count__16746 = G__16755;
i__16747 = G__16756;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16744);if(temp__4092__auto__)
{var seq__16744__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16744__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__16744__$1);{
var G__16757 = cljs.core.chunk_rest.call(null,seq__16744__$1);
var G__16758 = c__3844__auto__;
var G__16759 = cljs.core.count.call(null,c__3844__auto__);
var G__16760 = 0;
seq__16744 = G__16757;
chunk__16745 = G__16758;
count__16746 = G__16759;
i__16747 = G__16760;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16744__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16761 = cljs.core.next.call(null,seq__16744__$1);
var G__16762 = null;
var G__16763 = 0;
var G__16764 = 0;
seq__16744 = G__16761;
chunk__16745 = G__16762;
count__16746 = G__16763;
i__16747 = G__16764;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__16752 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16752__delegate.call(this,elem,class$,classes);};
G__16752.cljs$lang$maxFixedArity = 2;
G__16752.cljs$lang$applyTo = (function (arglist__16765){
var elem = cljs.core.first(arglist__16765);
arglist__16765 = cljs.core.next(arglist__16765);
var class$ = cljs.core.first(arglist__16765);
var classes = cljs.core.rest(arglist__16765);
return G__16752__delegate(elem,class$,classes);
});
G__16752.cljs$core$IFn$_invoke$arity$variadic = G__16752__delegate;
return G__16752;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16766 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16766))
{var class_list_16767 = temp__4090__auto___16766;class_list_16767.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16770){var vec__16771 = p__16770;var k = cljs.core.nth.call(null,vec__16771,0,null);var v = cljs.core.nth.call(null,vec__16771,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16778_16784 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16779_16785 = null;var count__16780_16786 = 0;var i__16781_16787 = 0;while(true){
if((i__16781_16787 < count__16780_16786))
{var vec__16782_16788 = cljs.core._nth.call(null,chunk__16779_16785,i__16781_16787);var k_16789 = cljs.core.nth.call(null,vec__16782_16788,0,null);var v_16790 = cljs.core.nth.call(null,vec__16782_16788,1,null);(style[cljs.core.name.call(null,k_16789)] = v_16790);
{
var G__16791 = seq__16778_16784;
var G__16792 = chunk__16779_16785;
var G__16793 = count__16780_16786;
var G__16794 = (i__16781_16787 + 1);
seq__16778_16784 = G__16791;
chunk__16779_16785 = G__16792;
count__16780_16786 = G__16793;
i__16781_16787 = G__16794;
continue;
}
} else
{var temp__4092__auto___16795 = cljs.core.seq.call(null,seq__16778_16784);if(temp__4092__auto___16795)
{var seq__16778_16796__$1 = temp__4092__auto___16795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16778_16796__$1))
{var c__3844__auto___16797 = cljs.core.chunk_first.call(null,seq__16778_16796__$1);{
var G__16798 = cljs.core.chunk_rest.call(null,seq__16778_16796__$1);
var G__16799 = c__3844__auto___16797;
var G__16800 = cljs.core.count.call(null,c__3844__auto___16797);
var G__16801 = 0;
seq__16778_16784 = G__16798;
chunk__16779_16785 = G__16799;
count__16780_16786 = G__16800;
i__16781_16787 = G__16801;
continue;
}
} else
{var vec__16783_16802 = cljs.core.first.call(null,seq__16778_16796__$1);var k_16803 = cljs.core.nth.call(null,vec__16783_16802,0,null);var v_16804 = cljs.core.nth.call(null,vec__16783_16802,1,null);(style[cljs.core.name.call(null,k_16803)] = v_16804);
{
var G__16805 = cljs.core.next.call(null,seq__16778_16796__$1);
var G__16806 = null;
var G__16807 = 0;
var G__16808 = 0;
seq__16778_16784 = G__16805;
chunk__16779_16785 = G__16806;
count__16780_16786 = G__16807;
i__16781_16787 = G__16808;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16809){
var elem = cljs.core.first(arglist__16809);
var kvs = cljs.core.rest(arglist__16809);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16816_16822 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16817_16823 = null;var count__16818_16824 = 0;var i__16819_16825 = 0;while(true){
if((i__16819_16825 < count__16818_16824))
{var vec__16820_16826 = cljs.core._nth.call(null,chunk__16817_16823,i__16819_16825);var k_16827 = cljs.core.nth.call(null,vec__16820_16826,0,null);var v_16828 = cljs.core.nth.call(null,vec__16820_16826,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16827,[cljs.core.str(v_16828),cljs.core.str("px")].join(''));
{
var G__16829 = seq__16816_16822;
var G__16830 = chunk__16817_16823;
var G__16831 = count__16818_16824;
var G__16832 = (i__16819_16825 + 1);
seq__16816_16822 = G__16829;
chunk__16817_16823 = G__16830;
count__16818_16824 = G__16831;
i__16819_16825 = G__16832;
continue;
}
} else
{var temp__4092__auto___16833 = cljs.core.seq.call(null,seq__16816_16822);if(temp__4092__auto___16833)
{var seq__16816_16834__$1 = temp__4092__auto___16833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16816_16834__$1))
{var c__3844__auto___16835 = cljs.core.chunk_first.call(null,seq__16816_16834__$1);{
var G__16836 = cljs.core.chunk_rest.call(null,seq__16816_16834__$1);
var G__16837 = c__3844__auto___16835;
var G__16838 = cljs.core.count.call(null,c__3844__auto___16835);
var G__16839 = 0;
seq__16816_16822 = G__16836;
chunk__16817_16823 = G__16837;
count__16818_16824 = G__16838;
i__16819_16825 = G__16839;
continue;
}
} else
{var vec__16821_16840 = cljs.core.first.call(null,seq__16816_16834__$1);var k_16841 = cljs.core.nth.call(null,vec__16821_16840,0,null);var v_16842 = cljs.core.nth.call(null,vec__16821_16840,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16841,[cljs.core.str(v_16842),cljs.core.str("px")].join(''));
{
var G__16843 = cljs.core.next.call(null,seq__16816_16834__$1);
var G__16844 = null;
var G__16845 = 0;
var G__16846 = 0;
seq__16816_16822 = G__16843;
chunk__16817_16823 = G__16844;
count__16818_16824 = G__16845;
i__16819_16825 = G__16846;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16847){
var elem = cljs.core.first(arglist__16847);
var kvs = cljs.core.rest(arglist__16847);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__16856 = dommy.template.__GT_node_like.call(null,elem);(G__16856[cljs.core.name.call(null,k)] = v);
return G__16856;
} else
{var G__16857 = dommy.template.__GT_node_like.call(null,elem);G__16857.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16857;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16864__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16858_16865 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__16859_16866 = null;var count__16860_16867 = 0;var i__16861_16868 = 0;while(true){
if((i__16861_16868 < count__16860_16867))
{var vec__16862_16869 = cljs.core._nth.call(null,chunk__16859_16866,i__16861_16868);var k_16870__$1 = cljs.core.nth.call(null,vec__16862_16869,0,null);var v_16871__$1 = cljs.core.nth.call(null,vec__16862_16869,1,null);set_attr_BANG_.call(null,elem__$1,k_16870__$1,v_16871__$1);
{
var G__16872 = seq__16858_16865;
var G__16873 = chunk__16859_16866;
var G__16874 = count__16860_16867;
var G__16875 = (i__16861_16868 + 1);
seq__16858_16865 = G__16872;
chunk__16859_16866 = G__16873;
count__16860_16867 = G__16874;
i__16861_16868 = G__16875;
continue;
}
} else
{var temp__4092__auto___16876 = cljs.core.seq.call(null,seq__16858_16865);if(temp__4092__auto___16876)
{var seq__16858_16877__$1 = temp__4092__auto___16876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16858_16877__$1))
{var c__3844__auto___16878 = cljs.core.chunk_first.call(null,seq__16858_16877__$1);{
var G__16879 = cljs.core.chunk_rest.call(null,seq__16858_16877__$1);
var G__16880 = c__3844__auto___16878;
var G__16881 = cljs.core.count.call(null,c__3844__auto___16878);
var G__16882 = 0;
seq__16858_16865 = G__16879;
chunk__16859_16866 = G__16880;
count__16860_16867 = G__16881;
i__16861_16868 = G__16882;
continue;
}
} else
{var vec__16863_16883 = cljs.core.first.call(null,seq__16858_16877__$1);var k_16884__$1 = cljs.core.nth.call(null,vec__16863_16883,0,null);var v_16885__$1 = cljs.core.nth.call(null,vec__16863_16883,1,null);set_attr_BANG_.call(null,elem__$1,k_16884__$1,v_16885__$1);
{
var G__16886 = cljs.core.next.call(null,seq__16858_16877__$1);
var G__16887 = null;
var G__16888 = 0;
var G__16889 = 0;
seq__16858_16865 = G__16886;
chunk__16859_16866 = G__16887;
count__16860_16867 = G__16888;
i__16861_16868 = G__16889;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__16864 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16864__delegate.call(this,elem,k,v,kvs);};
G__16864.cljs$lang$maxFixedArity = 3;
G__16864.cljs$lang$applyTo = (function (arglist__16890){
var elem = cljs.core.first(arglist__16890);
arglist__16890 = cljs.core.next(arglist__16890);
var k = cljs.core.first(arglist__16890);
arglist__16890 = cljs.core.next(arglist__16890);
var v = cljs.core.first(arglist__16890);
var kvs = cljs.core.rest(arglist__16890);
return G__16864__delegate(elem,k,v,kvs);
});
G__16864.cljs$core$IFn$_invoke$arity$variadic = G__16864__delegate;
return G__16864;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__16899__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16895_16900 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16896_16901 = null;var count__16897_16902 = 0;var i__16898_16903 = 0;while(true){
if((i__16898_16903 < count__16897_16902))
{var k_16904__$1 = cljs.core._nth.call(null,chunk__16896_16901,i__16898_16903);remove_attr_BANG_.call(null,elem__$1,k_16904__$1);
{
var G__16905 = seq__16895_16900;
var G__16906 = chunk__16896_16901;
var G__16907 = count__16897_16902;
var G__16908 = (i__16898_16903 + 1);
seq__16895_16900 = G__16905;
chunk__16896_16901 = G__16906;
count__16897_16902 = G__16907;
i__16898_16903 = G__16908;
continue;
}
} else
{var temp__4092__auto___16909 = cljs.core.seq.call(null,seq__16895_16900);if(temp__4092__auto___16909)
{var seq__16895_16910__$1 = temp__4092__auto___16909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16895_16910__$1))
{var c__3844__auto___16911 = cljs.core.chunk_first.call(null,seq__16895_16910__$1);{
var G__16912 = cljs.core.chunk_rest.call(null,seq__16895_16910__$1);
var G__16913 = c__3844__auto___16911;
var G__16914 = cljs.core.count.call(null,c__3844__auto___16911);
var G__16915 = 0;
seq__16895_16900 = G__16912;
chunk__16896_16901 = G__16913;
count__16897_16902 = G__16914;
i__16898_16903 = G__16915;
continue;
}
} else
{var k_16916__$1 = cljs.core.first.call(null,seq__16895_16910__$1);remove_attr_BANG_.call(null,elem__$1,k_16916__$1);
{
var G__16917 = cljs.core.next.call(null,seq__16895_16910__$1);
var G__16918 = null;
var G__16919 = 0;
var G__16920 = 0;
seq__16895_16900 = G__16917;
chunk__16896_16901 = G__16918;
count__16897_16902 = G__16919;
i__16898_16903 = G__16920;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__16899 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16899__delegate.call(this,elem,k,ks);};
G__16899.cljs$lang$maxFixedArity = 2;
G__16899.cljs$lang$applyTo = (function (arglist__16921){
var elem = cljs.core.first(arglist__16921);
arglist__16921 = cljs.core.next(arglist__16921);
var k = cljs.core.first(arglist__16921);
var ks = cljs.core.rest(arglist__16921);
return G__16899__delegate(elem,k,ks);
});
G__16899.cljs$core$IFn$_invoke$arity$variadic = G__16899__delegate;
return G__16899;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__16923 = dommy.template.__GT_node_like.call(null,elem);G__16923.style.display = ((show_QMARK_)?"":"none");
return G__16923;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__16925 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16925,false);
return G__16925;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__16927 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16927,true);
return G__16927;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__16929 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__16929["constructor"] = Object);
return G__16929;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map