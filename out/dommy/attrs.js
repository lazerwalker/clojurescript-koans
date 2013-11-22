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
var G__16742 = (i + class$.length);
start_from = G__16742;
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
{var temp__4090__auto___16767 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16767))
{var class_list_16768 = temp__4090__auto___16767;var seq__16755_16769 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16756_16770 = null;var count__16757_16771 = 0;var i__16758_16772 = 0;while(true){
if((i__16758_16772 < count__16757_16771))
{var class_16773 = cljs.core._nth.call(null,chunk__16756_16770,i__16758_16772);class_list_16768.add(class_16773);
{
var G__16774 = seq__16755_16769;
var G__16775 = chunk__16756_16770;
var G__16776 = count__16757_16771;
var G__16777 = (i__16758_16772 + 1);
seq__16755_16769 = G__16774;
chunk__16756_16770 = G__16775;
count__16757_16771 = G__16776;
i__16758_16772 = G__16777;
continue;
}
} else
{var temp__4092__auto___16778 = cljs.core.seq.call(null,seq__16755_16769);if(temp__4092__auto___16778)
{var seq__16755_16779__$1 = temp__4092__auto___16778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16755_16779__$1))
{var c__3844__auto___16780 = cljs.core.chunk_first.call(null,seq__16755_16779__$1);{
var G__16781 = cljs.core.chunk_rest.call(null,seq__16755_16779__$1);
var G__16782 = c__3844__auto___16780;
var G__16783 = cljs.core.count.call(null,c__3844__auto___16780);
var G__16784 = 0;
seq__16755_16769 = G__16781;
chunk__16756_16770 = G__16782;
count__16757_16771 = G__16783;
i__16758_16772 = G__16784;
continue;
}
} else
{var class_16785 = cljs.core.first.call(null,seq__16755_16779__$1);class_list_16768.add(class_16785);
{
var G__16786 = cljs.core.next.call(null,seq__16755_16779__$1);
var G__16787 = null;
var G__16788 = 0;
var G__16789 = 0;
seq__16755_16769 = G__16786;
chunk__16756_16770 = G__16787;
count__16757_16771 = G__16788;
i__16758_16772 = G__16789;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16790 = elem__$1.className;var seq__16759_16791 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16760_16792 = null;var count__16761_16793 = 0;var i__16762_16794 = 0;while(true){
if((i__16762_16794 < count__16761_16793))
{var class_16795 = cljs.core._nth.call(null,chunk__16760_16792,i__16762_16794);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16790,class_16795)))
{} else
{elem__$1.className = (((class_name_16790 === ""))?class_16795:[cljs.core.str(class_name_16790),cljs.core.str(" "),cljs.core.str(class_16795)].join(''));
}
{
var G__16796 = seq__16759_16791;
var G__16797 = chunk__16760_16792;
var G__16798 = count__16761_16793;
var G__16799 = (i__16762_16794 + 1);
seq__16759_16791 = G__16796;
chunk__16760_16792 = G__16797;
count__16761_16793 = G__16798;
i__16762_16794 = G__16799;
continue;
}
} else
{var temp__4092__auto___16800 = cljs.core.seq.call(null,seq__16759_16791);if(temp__4092__auto___16800)
{var seq__16759_16801__$1 = temp__4092__auto___16800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16759_16801__$1))
{var c__3844__auto___16802 = cljs.core.chunk_first.call(null,seq__16759_16801__$1);{
var G__16803 = cljs.core.chunk_rest.call(null,seq__16759_16801__$1);
var G__16804 = c__3844__auto___16802;
var G__16805 = cljs.core.count.call(null,c__3844__auto___16802);
var G__16806 = 0;
seq__16759_16791 = G__16803;
chunk__16760_16792 = G__16804;
count__16761_16793 = G__16805;
i__16762_16794 = G__16806;
continue;
}
} else
{var class_16807 = cljs.core.first.call(null,seq__16759_16801__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16790,class_16807)))
{} else
{elem__$1.className = (((class_name_16790 === ""))?class_16807:[cljs.core.str(class_name_16790),cljs.core.str(" "),cljs.core.str(class_16807)].join(''));
}
{
var G__16808 = cljs.core.next.call(null,seq__16759_16801__$1);
var G__16809 = null;
var G__16810 = 0;
var G__16811 = 0;
seq__16759_16791 = G__16808;
chunk__16760_16792 = G__16809;
count__16761_16793 = G__16810;
i__16762_16794 = G__16811;
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
var G__16812__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16763_16813 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16764_16814 = null;var count__16765_16815 = 0;var i__16766_16816 = 0;while(true){
if((i__16766_16816 < count__16765_16815))
{var c_16817 = cljs.core._nth.call(null,chunk__16764_16814,i__16766_16816);add_class_BANG_.call(null,elem__$1,c_16817);
{
var G__16818 = seq__16763_16813;
var G__16819 = chunk__16764_16814;
var G__16820 = count__16765_16815;
var G__16821 = (i__16766_16816 + 1);
seq__16763_16813 = G__16818;
chunk__16764_16814 = G__16819;
count__16765_16815 = G__16820;
i__16766_16816 = G__16821;
continue;
}
} else
{var temp__4092__auto___16822 = cljs.core.seq.call(null,seq__16763_16813);if(temp__4092__auto___16822)
{var seq__16763_16823__$1 = temp__4092__auto___16822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16763_16823__$1))
{var c__3844__auto___16824 = cljs.core.chunk_first.call(null,seq__16763_16823__$1);{
var G__16825 = cljs.core.chunk_rest.call(null,seq__16763_16823__$1);
var G__16826 = c__3844__auto___16824;
var G__16827 = cljs.core.count.call(null,c__3844__auto___16824);
var G__16828 = 0;
seq__16763_16813 = G__16825;
chunk__16764_16814 = G__16826;
count__16765_16815 = G__16827;
i__16766_16816 = G__16828;
continue;
}
} else
{var c_16829 = cljs.core.first.call(null,seq__16763_16823__$1);add_class_BANG_.call(null,elem__$1,c_16829);
{
var G__16830 = cljs.core.next.call(null,seq__16763_16823__$1);
var G__16831 = null;
var G__16832 = 0;
var G__16833 = 0;
seq__16763_16813 = G__16830;
chunk__16764_16814 = G__16831;
count__16765_16815 = G__16832;
i__16766_16816 = G__16833;
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
var G__16812 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16812__delegate.call(this,elem,classes,more_classes);};
G__16812.cljs$lang$maxFixedArity = 2;
G__16812.cljs$lang$applyTo = (function (arglist__16834){
var elem = cljs.core.first(arglist__16834);
arglist__16834 = cljs.core.next(arglist__16834);
var classes = cljs.core.first(arglist__16834);
var more_classes = cljs.core.rest(arglist__16834);
return G__16812__delegate(elem,classes,more_classes);
});
G__16812.cljs$core$IFn$_invoke$arity$variadic = G__16812__delegate;
return G__16812;
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
var G__16835 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16835;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16844 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16844))
{var class_list_16845 = temp__4090__auto___16844;class_list_16845.remove(class$__$1);
} else
{var class_name_16846 = elem__$1.className;var new_class_name_16847 = dommy.attrs.remove_class_str.call(null,class_name_16846,class$__$1);if((class_name_16846 === new_class_name_16847))
{} else
{elem__$1.className = new_class_name_16847;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16848__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16840 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16841 = null;var count__16842 = 0;var i__16843 = 0;while(true){
if((i__16843 < count__16842))
{var c = cljs.core._nth.call(null,chunk__16841,i__16843);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16849 = seq__16840;
var G__16850 = chunk__16841;
var G__16851 = count__16842;
var G__16852 = (i__16843 + 1);
seq__16840 = G__16849;
chunk__16841 = G__16850;
count__16842 = G__16851;
i__16843 = G__16852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16840);if(temp__4092__auto__)
{var seq__16840__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16840__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__16840__$1);{
var G__16853 = cljs.core.chunk_rest.call(null,seq__16840__$1);
var G__16854 = c__3844__auto__;
var G__16855 = cljs.core.count.call(null,c__3844__auto__);
var G__16856 = 0;
seq__16840 = G__16853;
chunk__16841 = G__16854;
count__16842 = G__16855;
i__16843 = G__16856;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16840__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16857 = cljs.core.next.call(null,seq__16840__$1);
var G__16858 = null;
var G__16859 = 0;
var G__16860 = 0;
seq__16840 = G__16857;
chunk__16841 = G__16858;
count__16842 = G__16859;
i__16843 = G__16860;
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
var G__16848 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16848__delegate.call(this,elem,class$,classes);};
G__16848.cljs$lang$maxFixedArity = 2;
G__16848.cljs$lang$applyTo = (function (arglist__16861){
var elem = cljs.core.first(arglist__16861);
arglist__16861 = cljs.core.next(arglist__16861);
var class$ = cljs.core.first(arglist__16861);
var classes = cljs.core.rest(arglist__16861);
return G__16848__delegate(elem,class$,classes);
});
G__16848.cljs$core$IFn$_invoke$arity$variadic = G__16848__delegate;
return G__16848;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16862 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16862))
{var class_list_16863 = temp__4090__auto___16862;class_list_16863.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16866){var vec__16867 = p__16866;var k = cljs.core.nth.call(null,vec__16867,0,null);var v = cljs.core.nth.call(null,vec__16867,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16874_16880 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16875_16881 = null;var count__16876_16882 = 0;var i__16877_16883 = 0;while(true){
if((i__16877_16883 < count__16876_16882))
{var vec__16878_16884 = cljs.core._nth.call(null,chunk__16875_16881,i__16877_16883);var k_16885 = cljs.core.nth.call(null,vec__16878_16884,0,null);var v_16886 = cljs.core.nth.call(null,vec__16878_16884,1,null);(style[cljs.core.name.call(null,k_16885)] = v_16886);
{
var G__16887 = seq__16874_16880;
var G__16888 = chunk__16875_16881;
var G__16889 = count__16876_16882;
var G__16890 = (i__16877_16883 + 1);
seq__16874_16880 = G__16887;
chunk__16875_16881 = G__16888;
count__16876_16882 = G__16889;
i__16877_16883 = G__16890;
continue;
}
} else
{var temp__4092__auto___16891 = cljs.core.seq.call(null,seq__16874_16880);if(temp__4092__auto___16891)
{var seq__16874_16892__$1 = temp__4092__auto___16891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16874_16892__$1))
{var c__3844__auto___16893 = cljs.core.chunk_first.call(null,seq__16874_16892__$1);{
var G__16894 = cljs.core.chunk_rest.call(null,seq__16874_16892__$1);
var G__16895 = c__3844__auto___16893;
var G__16896 = cljs.core.count.call(null,c__3844__auto___16893);
var G__16897 = 0;
seq__16874_16880 = G__16894;
chunk__16875_16881 = G__16895;
count__16876_16882 = G__16896;
i__16877_16883 = G__16897;
continue;
}
} else
{var vec__16879_16898 = cljs.core.first.call(null,seq__16874_16892__$1);var k_16899 = cljs.core.nth.call(null,vec__16879_16898,0,null);var v_16900 = cljs.core.nth.call(null,vec__16879_16898,1,null);(style[cljs.core.name.call(null,k_16899)] = v_16900);
{
var G__16901 = cljs.core.next.call(null,seq__16874_16892__$1);
var G__16902 = null;
var G__16903 = 0;
var G__16904 = 0;
seq__16874_16880 = G__16901;
chunk__16875_16881 = G__16902;
count__16876_16882 = G__16903;
i__16877_16883 = G__16904;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16905){
var elem = cljs.core.first(arglist__16905);
var kvs = cljs.core.rest(arglist__16905);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16912_16918 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16913_16919 = null;var count__16914_16920 = 0;var i__16915_16921 = 0;while(true){
if((i__16915_16921 < count__16914_16920))
{var vec__16916_16922 = cljs.core._nth.call(null,chunk__16913_16919,i__16915_16921);var k_16923 = cljs.core.nth.call(null,vec__16916_16922,0,null);var v_16924 = cljs.core.nth.call(null,vec__16916_16922,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16923,[cljs.core.str(v_16924),cljs.core.str("px")].join(''));
{
var G__16925 = seq__16912_16918;
var G__16926 = chunk__16913_16919;
var G__16927 = count__16914_16920;
var G__16928 = (i__16915_16921 + 1);
seq__16912_16918 = G__16925;
chunk__16913_16919 = G__16926;
count__16914_16920 = G__16927;
i__16915_16921 = G__16928;
continue;
}
} else
{var temp__4092__auto___16929 = cljs.core.seq.call(null,seq__16912_16918);if(temp__4092__auto___16929)
{var seq__16912_16930__$1 = temp__4092__auto___16929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16912_16930__$1))
{var c__3844__auto___16931 = cljs.core.chunk_first.call(null,seq__16912_16930__$1);{
var G__16932 = cljs.core.chunk_rest.call(null,seq__16912_16930__$1);
var G__16933 = c__3844__auto___16931;
var G__16934 = cljs.core.count.call(null,c__3844__auto___16931);
var G__16935 = 0;
seq__16912_16918 = G__16932;
chunk__16913_16919 = G__16933;
count__16914_16920 = G__16934;
i__16915_16921 = G__16935;
continue;
}
} else
{var vec__16917_16936 = cljs.core.first.call(null,seq__16912_16930__$1);var k_16937 = cljs.core.nth.call(null,vec__16917_16936,0,null);var v_16938 = cljs.core.nth.call(null,vec__16917_16936,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16937,[cljs.core.str(v_16938),cljs.core.str("px")].join(''));
{
var G__16939 = cljs.core.next.call(null,seq__16912_16930__$1);
var G__16940 = null;
var G__16941 = 0;
var G__16942 = 0;
seq__16912_16918 = G__16939;
chunk__16913_16919 = G__16940;
count__16914_16920 = G__16941;
i__16915_16921 = G__16942;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16943){
var elem = cljs.core.first(arglist__16943);
var kvs = cljs.core.rest(arglist__16943);
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
{var G__16952 = dommy.template.__GT_node_like.call(null,elem);(G__16952[cljs.core.name.call(null,k)] = v);
return G__16952;
} else
{var G__16953 = dommy.template.__GT_node_like.call(null,elem);G__16953.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16953;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16960__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16954_16961 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__16955_16962 = null;var count__16956_16963 = 0;var i__16957_16964 = 0;while(true){
if((i__16957_16964 < count__16956_16963))
{var vec__16958_16965 = cljs.core._nth.call(null,chunk__16955_16962,i__16957_16964);var k_16966__$1 = cljs.core.nth.call(null,vec__16958_16965,0,null);var v_16967__$1 = cljs.core.nth.call(null,vec__16958_16965,1,null);set_attr_BANG_.call(null,elem__$1,k_16966__$1,v_16967__$1);
{
var G__16968 = seq__16954_16961;
var G__16969 = chunk__16955_16962;
var G__16970 = count__16956_16963;
var G__16971 = (i__16957_16964 + 1);
seq__16954_16961 = G__16968;
chunk__16955_16962 = G__16969;
count__16956_16963 = G__16970;
i__16957_16964 = G__16971;
continue;
}
} else
{var temp__4092__auto___16972 = cljs.core.seq.call(null,seq__16954_16961);if(temp__4092__auto___16972)
{var seq__16954_16973__$1 = temp__4092__auto___16972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16954_16973__$1))
{var c__3844__auto___16974 = cljs.core.chunk_first.call(null,seq__16954_16973__$1);{
var G__16975 = cljs.core.chunk_rest.call(null,seq__16954_16973__$1);
var G__16976 = c__3844__auto___16974;
var G__16977 = cljs.core.count.call(null,c__3844__auto___16974);
var G__16978 = 0;
seq__16954_16961 = G__16975;
chunk__16955_16962 = G__16976;
count__16956_16963 = G__16977;
i__16957_16964 = G__16978;
continue;
}
} else
{var vec__16959_16979 = cljs.core.first.call(null,seq__16954_16973__$1);var k_16980__$1 = cljs.core.nth.call(null,vec__16959_16979,0,null);var v_16981__$1 = cljs.core.nth.call(null,vec__16959_16979,1,null);set_attr_BANG_.call(null,elem__$1,k_16980__$1,v_16981__$1);
{
var G__16982 = cljs.core.next.call(null,seq__16954_16973__$1);
var G__16983 = null;
var G__16984 = 0;
var G__16985 = 0;
seq__16954_16961 = G__16982;
chunk__16955_16962 = G__16983;
count__16956_16963 = G__16984;
i__16957_16964 = G__16985;
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
var G__16960 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16960__delegate.call(this,elem,k,v,kvs);};
G__16960.cljs$lang$maxFixedArity = 3;
G__16960.cljs$lang$applyTo = (function (arglist__16986){
var elem = cljs.core.first(arglist__16986);
arglist__16986 = cljs.core.next(arglist__16986);
var k = cljs.core.first(arglist__16986);
arglist__16986 = cljs.core.next(arglist__16986);
var v = cljs.core.first(arglist__16986);
var kvs = cljs.core.rest(arglist__16986);
return G__16960__delegate(elem,k,v,kvs);
});
G__16960.cljs$core$IFn$_invoke$arity$variadic = G__16960__delegate;
return G__16960;
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
var G__16995__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16991_16996 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16992_16997 = null;var count__16993_16998 = 0;var i__16994_16999 = 0;while(true){
if((i__16994_16999 < count__16993_16998))
{var k_17000__$1 = cljs.core._nth.call(null,chunk__16992_16997,i__16994_16999);remove_attr_BANG_.call(null,elem__$1,k_17000__$1);
{
var G__17001 = seq__16991_16996;
var G__17002 = chunk__16992_16997;
var G__17003 = count__16993_16998;
var G__17004 = (i__16994_16999 + 1);
seq__16991_16996 = G__17001;
chunk__16992_16997 = G__17002;
count__16993_16998 = G__17003;
i__16994_16999 = G__17004;
continue;
}
} else
{var temp__4092__auto___17005 = cljs.core.seq.call(null,seq__16991_16996);if(temp__4092__auto___17005)
{var seq__16991_17006__$1 = temp__4092__auto___17005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16991_17006__$1))
{var c__3844__auto___17007 = cljs.core.chunk_first.call(null,seq__16991_17006__$1);{
var G__17008 = cljs.core.chunk_rest.call(null,seq__16991_17006__$1);
var G__17009 = c__3844__auto___17007;
var G__17010 = cljs.core.count.call(null,c__3844__auto___17007);
var G__17011 = 0;
seq__16991_16996 = G__17008;
chunk__16992_16997 = G__17009;
count__16993_16998 = G__17010;
i__16994_16999 = G__17011;
continue;
}
} else
{var k_17012__$1 = cljs.core.first.call(null,seq__16991_17006__$1);remove_attr_BANG_.call(null,elem__$1,k_17012__$1);
{
var G__17013 = cljs.core.next.call(null,seq__16991_17006__$1);
var G__17014 = null;
var G__17015 = 0;
var G__17016 = 0;
seq__16991_16996 = G__17013;
chunk__16992_16997 = G__17014;
count__16993_16998 = G__17015;
i__16994_16999 = G__17016;
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
var G__16995 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16995__delegate.call(this,elem,k,ks);};
G__16995.cljs$lang$maxFixedArity = 2;
G__16995.cljs$lang$applyTo = (function (arglist__17017){
var elem = cljs.core.first(arglist__17017);
arglist__17017 = cljs.core.next(arglist__17017);
var k = cljs.core.first(arglist__17017);
var ks = cljs.core.rest(arglist__17017);
return G__16995__delegate(elem,k,ks);
});
G__16995.cljs$core$IFn$_invoke$arity$variadic = G__16995__delegate;
return G__16995;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17019 = dommy.template.__GT_node_like.call(null,elem);G__17019.style.display = ((show_QMARK_)?"":"none");
return G__17019;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17021 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17021,false);
return G__17021;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17023 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17023,true);
return G__17023;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17025 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17025["constructor"] = Object);
return G__17025;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map