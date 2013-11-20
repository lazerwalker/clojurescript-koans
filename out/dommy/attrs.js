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
var G__16603 = (i + class$.length);
start_from = G__16603;
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
{var temp__4090__auto___16628 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16628))
{var class_list_16629 = temp__4090__auto___16628;var seq__16616_16630 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16617_16631 = null;var count__16618_16632 = 0;var i__16619_16633 = 0;while(true){
if((i__16619_16633 < count__16618_16632))
{var class_16634 = cljs.core._nth.call(null,chunk__16617_16631,i__16619_16633);class_list_16629.add(class_16634);
{
var G__16635 = seq__16616_16630;
var G__16636 = chunk__16617_16631;
var G__16637 = count__16618_16632;
var G__16638 = (i__16619_16633 + 1);
seq__16616_16630 = G__16635;
chunk__16617_16631 = G__16636;
count__16618_16632 = G__16637;
i__16619_16633 = G__16638;
continue;
}
} else
{var temp__4092__auto___16639 = cljs.core.seq.call(null,seq__16616_16630);if(temp__4092__auto___16639)
{var seq__16616_16640__$1 = temp__4092__auto___16639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16616_16640__$1))
{var c__3844__auto___16641 = cljs.core.chunk_first.call(null,seq__16616_16640__$1);{
var G__16642 = cljs.core.chunk_rest.call(null,seq__16616_16640__$1);
var G__16643 = c__3844__auto___16641;
var G__16644 = cljs.core.count.call(null,c__3844__auto___16641);
var G__16645 = 0;
seq__16616_16630 = G__16642;
chunk__16617_16631 = G__16643;
count__16618_16632 = G__16644;
i__16619_16633 = G__16645;
continue;
}
} else
{var class_16646 = cljs.core.first.call(null,seq__16616_16640__$1);class_list_16629.add(class_16646);
{
var G__16647 = cljs.core.next.call(null,seq__16616_16640__$1);
var G__16648 = null;
var G__16649 = 0;
var G__16650 = 0;
seq__16616_16630 = G__16647;
chunk__16617_16631 = G__16648;
count__16618_16632 = G__16649;
i__16619_16633 = G__16650;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16651 = elem__$1.className;var seq__16620_16652 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16621_16653 = null;var count__16622_16654 = 0;var i__16623_16655 = 0;while(true){
if((i__16623_16655 < count__16622_16654))
{var class_16656 = cljs.core._nth.call(null,chunk__16621_16653,i__16623_16655);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16651,class_16656)))
{} else
{elem__$1.className = (((class_name_16651 === ""))?class_16656:[cljs.core.str(class_name_16651),cljs.core.str(" "),cljs.core.str(class_16656)].join(''));
}
{
var G__16657 = seq__16620_16652;
var G__16658 = chunk__16621_16653;
var G__16659 = count__16622_16654;
var G__16660 = (i__16623_16655 + 1);
seq__16620_16652 = G__16657;
chunk__16621_16653 = G__16658;
count__16622_16654 = G__16659;
i__16623_16655 = G__16660;
continue;
}
} else
{var temp__4092__auto___16661 = cljs.core.seq.call(null,seq__16620_16652);if(temp__4092__auto___16661)
{var seq__16620_16662__$1 = temp__4092__auto___16661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16620_16662__$1))
{var c__3844__auto___16663 = cljs.core.chunk_first.call(null,seq__16620_16662__$1);{
var G__16664 = cljs.core.chunk_rest.call(null,seq__16620_16662__$1);
var G__16665 = c__3844__auto___16663;
var G__16666 = cljs.core.count.call(null,c__3844__auto___16663);
var G__16667 = 0;
seq__16620_16652 = G__16664;
chunk__16621_16653 = G__16665;
count__16622_16654 = G__16666;
i__16623_16655 = G__16667;
continue;
}
} else
{var class_16668 = cljs.core.first.call(null,seq__16620_16662__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16651,class_16668)))
{} else
{elem__$1.className = (((class_name_16651 === ""))?class_16668:[cljs.core.str(class_name_16651),cljs.core.str(" "),cljs.core.str(class_16668)].join(''));
}
{
var G__16669 = cljs.core.next.call(null,seq__16620_16662__$1);
var G__16670 = null;
var G__16671 = 0;
var G__16672 = 0;
seq__16620_16652 = G__16669;
chunk__16621_16653 = G__16670;
count__16622_16654 = G__16671;
i__16623_16655 = G__16672;
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
var G__16673__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16624_16674 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16625_16675 = null;var count__16626_16676 = 0;var i__16627_16677 = 0;while(true){
if((i__16627_16677 < count__16626_16676))
{var c_16678 = cljs.core._nth.call(null,chunk__16625_16675,i__16627_16677);add_class_BANG_.call(null,elem__$1,c_16678);
{
var G__16679 = seq__16624_16674;
var G__16680 = chunk__16625_16675;
var G__16681 = count__16626_16676;
var G__16682 = (i__16627_16677 + 1);
seq__16624_16674 = G__16679;
chunk__16625_16675 = G__16680;
count__16626_16676 = G__16681;
i__16627_16677 = G__16682;
continue;
}
} else
{var temp__4092__auto___16683 = cljs.core.seq.call(null,seq__16624_16674);if(temp__4092__auto___16683)
{var seq__16624_16684__$1 = temp__4092__auto___16683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16624_16684__$1))
{var c__3844__auto___16685 = cljs.core.chunk_first.call(null,seq__16624_16684__$1);{
var G__16686 = cljs.core.chunk_rest.call(null,seq__16624_16684__$1);
var G__16687 = c__3844__auto___16685;
var G__16688 = cljs.core.count.call(null,c__3844__auto___16685);
var G__16689 = 0;
seq__16624_16674 = G__16686;
chunk__16625_16675 = G__16687;
count__16626_16676 = G__16688;
i__16627_16677 = G__16689;
continue;
}
} else
{var c_16690 = cljs.core.first.call(null,seq__16624_16684__$1);add_class_BANG_.call(null,elem__$1,c_16690);
{
var G__16691 = cljs.core.next.call(null,seq__16624_16684__$1);
var G__16692 = null;
var G__16693 = 0;
var G__16694 = 0;
seq__16624_16674 = G__16691;
chunk__16625_16675 = G__16692;
count__16626_16676 = G__16693;
i__16627_16677 = G__16694;
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
var G__16673 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16673__delegate.call(this,elem,classes,more_classes);};
G__16673.cljs$lang$maxFixedArity = 2;
G__16673.cljs$lang$applyTo = (function (arglist__16695){
var elem = cljs.core.first(arglist__16695);
arglist__16695 = cljs.core.next(arglist__16695);
var classes = cljs.core.first(arglist__16695);
var more_classes = cljs.core.rest(arglist__16695);
return G__16673__delegate(elem,classes,more_classes);
});
G__16673.cljs$core$IFn$_invoke$arity$variadic = G__16673__delegate;
return G__16673;
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
var G__16696 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16696;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16705 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16705))
{var class_list_16706 = temp__4090__auto___16705;class_list_16706.remove(class$__$1);
} else
{var class_name_16707 = elem__$1.className;var new_class_name_16708 = dommy.attrs.remove_class_str.call(null,class_name_16707,class$__$1);if((class_name_16707 === new_class_name_16708))
{} else
{elem__$1.className = new_class_name_16708;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16709__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16701 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16702 = null;var count__16703 = 0;var i__16704 = 0;while(true){
if((i__16704 < count__16703))
{var c = cljs.core._nth.call(null,chunk__16702,i__16704);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16710 = seq__16701;
var G__16711 = chunk__16702;
var G__16712 = count__16703;
var G__16713 = (i__16704 + 1);
seq__16701 = G__16710;
chunk__16702 = G__16711;
count__16703 = G__16712;
i__16704 = G__16713;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16701);if(temp__4092__auto__)
{var seq__16701__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16701__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__16701__$1);{
var G__16714 = cljs.core.chunk_rest.call(null,seq__16701__$1);
var G__16715 = c__3844__auto__;
var G__16716 = cljs.core.count.call(null,c__3844__auto__);
var G__16717 = 0;
seq__16701 = G__16714;
chunk__16702 = G__16715;
count__16703 = G__16716;
i__16704 = G__16717;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16701__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16718 = cljs.core.next.call(null,seq__16701__$1);
var G__16719 = null;
var G__16720 = 0;
var G__16721 = 0;
seq__16701 = G__16718;
chunk__16702 = G__16719;
count__16703 = G__16720;
i__16704 = G__16721;
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
var G__16709 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16709__delegate.call(this,elem,class$,classes);};
G__16709.cljs$lang$maxFixedArity = 2;
G__16709.cljs$lang$applyTo = (function (arglist__16722){
var elem = cljs.core.first(arglist__16722);
arglist__16722 = cljs.core.next(arglist__16722);
var class$ = cljs.core.first(arglist__16722);
var classes = cljs.core.rest(arglist__16722);
return G__16709__delegate(elem,class$,classes);
});
G__16709.cljs$core$IFn$_invoke$arity$variadic = G__16709__delegate;
return G__16709;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16723 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16723))
{var class_list_16724 = temp__4090__auto___16723;class_list_16724.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16727){var vec__16728 = p__16727;var k = cljs.core.nth.call(null,vec__16728,0,null);var v = cljs.core.nth.call(null,vec__16728,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16735_16741 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16736_16742 = null;var count__16737_16743 = 0;var i__16738_16744 = 0;while(true){
if((i__16738_16744 < count__16737_16743))
{var vec__16739_16745 = cljs.core._nth.call(null,chunk__16736_16742,i__16738_16744);var k_16746 = cljs.core.nth.call(null,vec__16739_16745,0,null);var v_16747 = cljs.core.nth.call(null,vec__16739_16745,1,null);(style[cljs.core.name.call(null,k_16746)] = v_16747);
{
var G__16748 = seq__16735_16741;
var G__16749 = chunk__16736_16742;
var G__16750 = count__16737_16743;
var G__16751 = (i__16738_16744 + 1);
seq__16735_16741 = G__16748;
chunk__16736_16742 = G__16749;
count__16737_16743 = G__16750;
i__16738_16744 = G__16751;
continue;
}
} else
{var temp__4092__auto___16752 = cljs.core.seq.call(null,seq__16735_16741);if(temp__4092__auto___16752)
{var seq__16735_16753__$1 = temp__4092__auto___16752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16735_16753__$1))
{var c__3844__auto___16754 = cljs.core.chunk_first.call(null,seq__16735_16753__$1);{
var G__16755 = cljs.core.chunk_rest.call(null,seq__16735_16753__$1);
var G__16756 = c__3844__auto___16754;
var G__16757 = cljs.core.count.call(null,c__3844__auto___16754);
var G__16758 = 0;
seq__16735_16741 = G__16755;
chunk__16736_16742 = G__16756;
count__16737_16743 = G__16757;
i__16738_16744 = G__16758;
continue;
}
} else
{var vec__16740_16759 = cljs.core.first.call(null,seq__16735_16753__$1);var k_16760 = cljs.core.nth.call(null,vec__16740_16759,0,null);var v_16761 = cljs.core.nth.call(null,vec__16740_16759,1,null);(style[cljs.core.name.call(null,k_16760)] = v_16761);
{
var G__16762 = cljs.core.next.call(null,seq__16735_16753__$1);
var G__16763 = null;
var G__16764 = 0;
var G__16765 = 0;
seq__16735_16741 = G__16762;
chunk__16736_16742 = G__16763;
count__16737_16743 = G__16764;
i__16738_16744 = G__16765;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16766){
var elem = cljs.core.first(arglist__16766);
var kvs = cljs.core.rest(arglist__16766);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16773_16779 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16774_16780 = null;var count__16775_16781 = 0;var i__16776_16782 = 0;while(true){
if((i__16776_16782 < count__16775_16781))
{var vec__16777_16783 = cljs.core._nth.call(null,chunk__16774_16780,i__16776_16782);var k_16784 = cljs.core.nth.call(null,vec__16777_16783,0,null);var v_16785 = cljs.core.nth.call(null,vec__16777_16783,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16784,[cljs.core.str(v_16785),cljs.core.str("px")].join(''));
{
var G__16786 = seq__16773_16779;
var G__16787 = chunk__16774_16780;
var G__16788 = count__16775_16781;
var G__16789 = (i__16776_16782 + 1);
seq__16773_16779 = G__16786;
chunk__16774_16780 = G__16787;
count__16775_16781 = G__16788;
i__16776_16782 = G__16789;
continue;
}
} else
{var temp__4092__auto___16790 = cljs.core.seq.call(null,seq__16773_16779);if(temp__4092__auto___16790)
{var seq__16773_16791__$1 = temp__4092__auto___16790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16773_16791__$1))
{var c__3844__auto___16792 = cljs.core.chunk_first.call(null,seq__16773_16791__$1);{
var G__16793 = cljs.core.chunk_rest.call(null,seq__16773_16791__$1);
var G__16794 = c__3844__auto___16792;
var G__16795 = cljs.core.count.call(null,c__3844__auto___16792);
var G__16796 = 0;
seq__16773_16779 = G__16793;
chunk__16774_16780 = G__16794;
count__16775_16781 = G__16795;
i__16776_16782 = G__16796;
continue;
}
} else
{var vec__16778_16797 = cljs.core.first.call(null,seq__16773_16791__$1);var k_16798 = cljs.core.nth.call(null,vec__16778_16797,0,null);var v_16799 = cljs.core.nth.call(null,vec__16778_16797,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16798,[cljs.core.str(v_16799),cljs.core.str("px")].join(''));
{
var G__16800 = cljs.core.next.call(null,seq__16773_16791__$1);
var G__16801 = null;
var G__16802 = 0;
var G__16803 = 0;
seq__16773_16779 = G__16800;
chunk__16774_16780 = G__16801;
count__16775_16781 = G__16802;
i__16776_16782 = G__16803;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16804){
var elem = cljs.core.first(arglist__16804);
var kvs = cljs.core.rest(arglist__16804);
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
{var G__16813 = dommy.template.__GT_node_like.call(null,elem);(G__16813[cljs.core.name.call(null,k)] = v);
return G__16813;
} else
{var G__16814 = dommy.template.__GT_node_like.call(null,elem);G__16814.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16814;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16821__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16815_16822 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__16816_16823 = null;var count__16817_16824 = 0;var i__16818_16825 = 0;while(true){
if((i__16818_16825 < count__16817_16824))
{var vec__16819_16826 = cljs.core._nth.call(null,chunk__16816_16823,i__16818_16825);var k_16827__$1 = cljs.core.nth.call(null,vec__16819_16826,0,null);var v_16828__$1 = cljs.core.nth.call(null,vec__16819_16826,1,null);set_attr_BANG_.call(null,elem__$1,k_16827__$1,v_16828__$1);
{
var G__16829 = seq__16815_16822;
var G__16830 = chunk__16816_16823;
var G__16831 = count__16817_16824;
var G__16832 = (i__16818_16825 + 1);
seq__16815_16822 = G__16829;
chunk__16816_16823 = G__16830;
count__16817_16824 = G__16831;
i__16818_16825 = G__16832;
continue;
}
} else
{var temp__4092__auto___16833 = cljs.core.seq.call(null,seq__16815_16822);if(temp__4092__auto___16833)
{var seq__16815_16834__$1 = temp__4092__auto___16833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16815_16834__$1))
{var c__3844__auto___16835 = cljs.core.chunk_first.call(null,seq__16815_16834__$1);{
var G__16836 = cljs.core.chunk_rest.call(null,seq__16815_16834__$1);
var G__16837 = c__3844__auto___16835;
var G__16838 = cljs.core.count.call(null,c__3844__auto___16835);
var G__16839 = 0;
seq__16815_16822 = G__16836;
chunk__16816_16823 = G__16837;
count__16817_16824 = G__16838;
i__16818_16825 = G__16839;
continue;
}
} else
{var vec__16820_16840 = cljs.core.first.call(null,seq__16815_16834__$1);var k_16841__$1 = cljs.core.nth.call(null,vec__16820_16840,0,null);var v_16842__$1 = cljs.core.nth.call(null,vec__16820_16840,1,null);set_attr_BANG_.call(null,elem__$1,k_16841__$1,v_16842__$1);
{
var G__16843 = cljs.core.next.call(null,seq__16815_16834__$1);
var G__16844 = null;
var G__16845 = 0;
var G__16846 = 0;
seq__16815_16822 = G__16843;
chunk__16816_16823 = G__16844;
count__16817_16824 = G__16845;
i__16818_16825 = G__16846;
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
var G__16821 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16821__delegate.call(this,elem,k,v,kvs);};
G__16821.cljs$lang$maxFixedArity = 3;
G__16821.cljs$lang$applyTo = (function (arglist__16847){
var elem = cljs.core.first(arglist__16847);
arglist__16847 = cljs.core.next(arglist__16847);
var k = cljs.core.first(arglist__16847);
arglist__16847 = cljs.core.next(arglist__16847);
var v = cljs.core.first(arglist__16847);
var kvs = cljs.core.rest(arglist__16847);
return G__16821__delegate(elem,k,v,kvs);
});
G__16821.cljs$core$IFn$_invoke$arity$variadic = G__16821__delegate;
return G__16821;
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
var G__16856__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16852_16857 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16853_16858 = null;var count__16854_16859 = 0;var i__16855_16860 = 0;while(true){
if((i__16855_16860 < count__16854_16859))
{var k_16861__$1 = cljs.core._nth.call(null,chunk__16853_16858,i__16855_16860);remove_attr_BANG_.call(null,elem__$1,k_16861__$1);
{
var G__16862 = seq__16852_16857;
var G__16863 = chunk__16853_16858;
var G__16864 = count__16854_16859;
var G__16865 = (i__16855_16860 + 1);
seq__16852_16857 = G__16862;
chunk__16853_16858 = G__16863;
count__16854_16859 = G__16864;
i__16855_16860 = G__16865;
continue;
}
} else
{var temp__4092__auto___16866 = cljs.core.seq.call(null,seq__16852_16857);if(temp__4092__auto___16866)
{var seq__16852_16867__$1 = temp__4092__auto___16866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16852_16867__$1))
{var c__3844__auto___16868 = cljs.core.chunk_first.call(null,seq__16852_16867__$1);{
var G__16869 = cljs.core.chunk_rest.call(null,seq__16852_16867__$1);
var G__16870 = c__3844__auto___16868;
var G__16871 = cljs.core.count.call(null,c__3844__auto___16868);
var G__16872 = 0;
seq__16852_16857 = G__16869;
chunk__16853_16858 = G__16870;
count__16854_16859 = G__16871;
i__16855_16860 = G__16872;
continue;
}
} else
{var k_16873__$1 = cljs.core.first.call(null,seq__16852_16867__$1);remove_attr_BANG_.call(null,elem__$1,k_16873__$1);
{
var G__16874 = cljs.core.next.call(null,seq__16852_16867__$1);
var G__16875 = null;
var G__16876 = 0;
var G__16877 = 0;
seq__16852_16857 = G__16874;
chunk__16853_16858 = G__16875;
count__16854_16859 = G__16876;
i__16855_16860 = G__16877;
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
var G__16856 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16856__delegate.call(this,elem,k,ks);};
G__16856.cljs$lang$maxFixedArity = 2;
G__16856.cljs$lang$applyTo = (function (arglist__16878){
var elem = cljs.core.first(arglist__16878);
arglist__16878 = cljs.core.next(arglist__16878);
var k = cljs.core.first(arglist__16878);
var ks = cljs.core.rest(arglist__16878);
return G__16856__delegate(elem,k,ks);
});
G__16856.cljs$core$IFn$_invoke$arity$variadic = G__16856__delegate;
return G__16856;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__16880 = dommy.template.__GT_node_like.call(null,elem);G__16880.style.display = ((show_QMARK_)?"":"none");
return G__16880;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__16882 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16882,false);
return G__16882;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__16884 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16884,true);
return G__16884;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__16886 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__16886["constructor"] = Object);
return G__16886;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map