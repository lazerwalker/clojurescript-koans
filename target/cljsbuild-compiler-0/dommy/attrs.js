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
var G__17372 = (i + class$.length);
start_from = G__17372;
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
{var temp__4090__auto___17397 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17397))
{var class_list_17398 = temp__4090__auto___17397;var seq__17385_17399 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17386_17400 = null;var count__17387_17401 = 0;var i__17388_17402 = 0;while(true){
if((i__17388_17402 < count__17387_17401))
{var class_17403 = cljs.core._nth.call(null,chunk__17386_17400,i__17388_17402);class_list_17398.add(class_17403);
{
var G__17404 = seq__17385_17399;
var G__17405 = chunk__17386_17400;
var G__17406 = count__17387_17401;
var G__17407 = (i__17388_17402 + 1);
seq__17385_17399 = G__17404;
chunk__17386_17400 = G__17405;
count__17387_17401 = G__17406;
i__17388_17402 = G__17407;
continue;
}
} else
{var temp__4092__auto___17408 = cljs.core.seq.call(null,seq__17385_17399);if(temp__4092__auto___17408)
{var seq__17385_17409__$1 = temp__4092__auto___17408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17385_17409__$1))
{var c__3844__auto___17410 = cljs.core.chunk_first.call(null,seq__17385_17409__$1);{
var G__17411 = cljs.core.chunk_rest.call(null,seq__17385_17409__$1);
var G__17412 = c__3844__auto___17410;
var G__17413 = cljs.core.count.call(null,c__3844__auto___17410);
var G__17414 = 0;
seq__17385_17399 = G__17411;
chunk__17386_17400 = G__17412;
count__17387_17401 = G__17413;
i__17388_17402 = G__17414;
continue;
}
} else
{var class_17415 = cljs.core.first.call(null,seq__17385_17409__$1);class_list_17398.add(class_17415);
{
var G__17416 = cljs.core.next.call(null,seq__17385_17409__$1);
var G__17417 = null;
var G__17418 = 0;
var G__17419 = 0;
seq__17385_17399 = G__17416;
chunk__17386_17400 = G__17417;
count__17387_17401 = G__17418;
i__17388_17402 = G__17419;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_17420 = elem__$1.className;var seq__17389_17421 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17390_17422 = null;var count__17391_17423 = 0;var i__17392_17424 = 0;while(true){
if((i__17392_17424 < count__17391_17423))
{var class_17425 = cljs.core._nth.call(null,chunk__17390_17422,i__17392_17424);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17420,class_17425)))
{} else
{elem__$1.className = (((class_name_17420 === ""))?class_17425:[cljs.core.str(class_name_17420),cljs.core.str(" "),cljs.core.str(class_17425)].join(''));
}
{
var G__17426 = seq__17389_17421;
var G__17427 = chunk__17390_17422;
var G__17428 = count__17391_17423;
var G__17429 = (i__17392_17424 + 1);
seq__17389_17421 = G__17426;
chunk__17390_17422 = G__17427;
count__17391_17423 = G__17428;
i__17392_17424 = G__17429;
continue;
}
} else
{var temp__4092__auto___17430 = cljs.core.seq.call(null,seq__17389_17421);if(temp__4092__auto___17430)
{var seq__17389_17431__$1 = temp__4092__auto___17430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17389_17431__$1))
{var c__3844__auto___17432 = cljs.core.chunk_first.call(null,seq__17389_17431__$1);{
var G__17433 = cljs.core.chunk_rest.call(null,seq__17389_17431__$1);
var G__17434 = c__3844__auto___17432;
var G__17435 = cljs.core.count.call(null,c__3844__auto___17432);
var G__17436 = 0;
seq__17389_17421 = G__17433;
chunk__17390_17422 = G__17434;
count__17391_17423 = G__17435;
i__17392_17424 = G__17436;
continue;
}
} else
{var class_17437 = cljs.core.first.call(null,seq__17389_17431__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17420,class_17437)))
{} else
{elem__$1.className = (((class_name_17420 === ""))?class_17437:[cljs.core.str(class_name_17420),cljs.core.str(" "),cljs.core.str(class_17437)].join(''));
}
{
var G__17438 = cljs.core.next.call(null,seq__17389_17431__$1);
var G__17439 = null;
var G__17440 = 0;
var G__17441 = 0;
seq__17389_17421 = G__17438;
chunk__17390_17422 = G__17439;
count__17391_17423 = G__17440;
i__17392_17424 = G__17441;
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
var G__17442__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17393_17443 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__17394_17444 = null;var count__17395_17445 = 0;var i__17396_17446 = 0;while(true){
if((i__17396_17446 < count__17395_17445))
{var c_17447 = cljs.core._nth.call(null,chunk__17394_17444,i__17396_17446);add_class_BANG_.call(null,elem__$1,c_17447);
{
var G__17448 = seq__17393_17443;
var G__17449 = chunk__17394_17444;
var G__17450 = count__17395_17445;
var G__17451 = (i__17396_17446 + 1);
seq__17393_17443 = G__17448;
chunk__17394_17444 = G__17449;
count__17395_17445 = G__17450;
i__17396_17446 = G__17451;
continue;
}
} else
{var temp__4092__auto___17452 = cljs.core.seq.call(null,seq__17393_17443);if(temp__4092__auto___17452)
{var seq__17393_17453__$1 = temp__4092__auto___17452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17393_17453__$1))
{var c__3844__auto___17454 = cljs.core.chunk_first.call(null,seq__17393_17453__$1);{
var G__17455 = cljs.core.chunk_rest.call(null,seq__17393_17453__$1);
var G__17456 = c__3844__auto___17454;
var G__17457 = cljs.core.count.call(null,c__3844__auto___17454);
var G__17458 = 0;
seq__17393_17443 = G__17455;
chunk__17394_17444 = G__17456;
count__17395_17445 = G__17457;
i__17396_17446 = G__17458;
continue;
}
} else
{var c_17459 = cljs.core.first.call(null,seq__17393_17453__$1);add_class_BANG_.call(null,elem__$1,c_17459);
{
var G__17460 = cljs.core.next.call(null,seq__17393_17453__$1);
var G__17461 = null;
var G__17462 = 0;
var G__17463 = 0;
seq__17393_17443 = G__17460;
chunk__17394_17444 = G__17461;
count__17395_17445 = G__17462;
i__17396_17446 = G__17463;
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
var G__17442 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17442__delegate.call(this,elem,classes,more_classes);};
G__17442.cljs$lang$maxFixedArity = 2;
G__17442.cljs$lang$applyTo = (function (arglist__17464){
var elem = cljs.core.first(arglist__17464);
arglist__17464 = cljs.core.next(arglist__17464);
var classes = cljs.core.first(arglist__17464);
var more_classes = cljs.core.rest(arglist__17464);
return G__17442__delegate(elem,classes,more_classes);
});
G__17442.cljs$core$IFn$_invoke$arity$variadic = G__17442__delegate;
return G__17442;
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
var G__17465 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__17465;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17474 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17474))
{var class_list_17475 = temp__4090__auto___17474;class_list_17475.remove(class$__$1);
} else
{var class_name_17476 = elem__$1.className;var new_class_name_17477 = dommy.attrs.remove_class_str.call(null,class_name_17476,class$__$1);if((class_name_17476 === new_class_name_17477))
{} else
{elem__$1.className = new_class_name_17477;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__17478__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17470 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__17471 = null;var count__17472 = 0;var i__17473 = 0;while(true){
if((i__17473 < count__17472))
{var c = cljs.core._nth.call(null,chunk__17471,i__17473);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17479 = seq__17470;
var G__17480 = chunk__17471;
var G__17481 = count__17472;
var G__17482 = (i__17473 + 1);
seq__17470 = G__17479;
chunk__17471 = G__17480;
count__17472 = G__17481;
i__17473 = G__17482;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17470);if(temp__4092__auto__)
{var seq__17470__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17470__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17470__$1);{
var G__17483 = cljs.core.chunk_rest.call(null,seq__17470__$1);
var G__17484 = c__3844__auto__;
var G__17485 = cljs.core.count.call(null,c__3844__auto__);
var G__17486 = 0;
seq__17470 = G__17483;
chunk__17471 = G__17484;
count__17472 = G__17485;
i__17473 = G__17486;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17470__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17487 = cljs.core.next.call(null,seq__17470__$1);
var G__17488 = null;
var G__17489 = 0;
var G__17490 = 0;
seq__17470 = G__17487;
chunk__17471 = G__17488;
count__17472 = G__17489;
i__17473 = G__17490;
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
var G__17478 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17478__delegate.call(this,elem,class$,classes);};
G__17478.cljs$lang$maxFixedArity = 2;
G__17478.cljs$lang$applyTo = (function (arglist__17491){
var elem = cljs.core.first(arglist__17491);
arglist__17491 = cljs.core.next(arglist__17491);
var class$ = cljs.core.first(arglist__17491);
var classes = cljs.core.rest(arglist__17491);
return G__17478__delegate(elem,class$,classes);
});
G__17478.cljs$core$IFn$_invoke$arity$variadic = G__17478__delegate;
return G__17478;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17492 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17492))
{var class_list_17493 = temp__4090__auto___17492;class_list_17493.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__17496){var vec__17497 = p__17496;var k = cljs.core.nth.call(null,vec__17497,0,null);var v = cljs.core.nth.call(null,vec__17497,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__17504_17510 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17505_17511 = null;var count__17506_17512 = 0;var i__17507_17513 = 0;while(true){
if((i__17507_17513 < count__17506_17512))
{var vec__17508_17514 = cljs.core._nth.call(null,chunk__17505_17511,i__17507_17513);var k_17515 = cljs.core.nth.call(null,vec__17508_17514,0,null);var v_17516 = cljs.core.nth.call(null,vec__17508_17514,1,null);(style[cljs.core.name.call(null,k_17515)] = v_17516);
{
var G__17517 = seq__17504_17510;
var G__17518 = chunk__17505_17511;
var G__17519 = count__17506_17512;
var G__17520 = (i__17507_17513 + 1);
seq__17504_17510 = G__17517;
chunk__17505_17511 = G__17518;
count__17506_17512 = G__17519;
i__17507_17513 = G__17520;
continue;
}
} else
{var temp__4092__auto___17521 = cljs.core.seq.call(null,seq__17504_17510);if(temp__4092__auto___17521)
{var seq__17504_17522__$1 = temp__4092__auto___17521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17504_17522__$1))
{var c__3844__auto___17523 = cljs.core.chunk_first.call(null,seq__17504_17522__$1);{
var G__17524 = cljs.core.chunk_rest.call(null,seq__17504_17522__$1);
var G__17525 = c__3844__auto___17523;
var G__17526 = cljs.core.count.call(null,c__3844__auto___17523);
var G__17527 = 0;
seq__17504_17510 = G__17524;
chunk__17505_17511 = G__17525;
count__17506_17512 = G__17526;
i__17507_17513 = G__17527;
continue;
}
} else
{var vec__17509_17528 = cljs.core.first.call(null,seq__17504_17522__$1);var k_17529 = cljs.core.nth.call(null,vec__17509_17528,0,null);var v_17530 = cljs.core.nth.call(null,vec__17509_17528,1,null);(style[cljs.core.name.call(null,k_17529)] = v_17530);
{
var G__17531 = cljs.core.next.call(null,seq__17504_17522__$1);
var G__17532 = null;
var G__17533 = 0;
var G__17534 = 0;
seq__17504_17510 = G__17531;
chunk__17505_17511 = G__17532;
count__17506_17512 = G__17533;
i__17507_17513 = G__17534;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17535){
var elem = cljs.core.first(arglist__17535);
var kvs = cljs.core.rest(arglist__17535);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17542_17548 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17543_17549 = null;var count__17544_17550 = 0;var i__17545_17551 = 0;while(true){
if((i__17545_17551 < count__17544_17550))
{var vec__17546_17552 = cljs.core._nth.call(null,chunk__17543_17549,i__17545_17551);var k_17553 = cljs.core.nth.call(null,vec__17546_17552,0,null);var v_17554 = cljs.core.nth.call(null,vec__17546_17552,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17553,[cljs.core.str(v_17554),cljs.core.str("px")].join(''));
{
var G__17555 = seq__17542_17548;
var G__17556 = chunk__17543_17549;
var G__17557 = count__17544_17550;
var G__17558 = (i__17545_17551 + 1);
seq__17542_17548 = G__17555;
chunk__17543_17549 = G__17556;
count__17544_17550 = G__17557;
i__17545_17551 = G__17558;
continue;
}
} else
{var temp__4092__auto___17559 = cljs.core.seq.call(null,seq__17542_17548);if(temp__4092__auto___17559)
{var seq__17542_17560__$1 = temp__4092__auto___17559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17542_17560__$1))
{var c__3844__auto___17561 = cljs.core.chunk_first.call(null,seq__17542_17560__$1);{
var G__17562 = cljs.core.chunk_rest.call(null,seq__17542_17560__$1);
var G__17563 = c__3844__auto___17561;
var G__17564 = cljs.core.count.call(null,c__3844__auto___17561);
var G__17565 = 0;
seq__17542_17548 = G__17562;
chunk__17543_17549 = G__17563;
count__17544_17550 = G__17564;
i__17545_17551 = G__17565;
continue;
}
} else
{var vec__17547_17566 = cljs.core.first.call(null,seq__17542_17560__$1);var k_17567 = cljs.core.nth.call(null,vec__17547_17566,0,null);var v_17568 = cljs.core.nth.call(null,vec__17547_17566,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17567,[cljs.core.str(v_17568),cljs.core.str("px")].join(''));
{
var G__17569 = cljs.core.next.call(null,seq__17542_17560__$1);
var G__17570 = null;
var G__17571 = 0;
var G__17572 = 0;
seq__17542_17548 = G__17569;
chunk__17543_17549 = G__17570;
count__17544_17550 = G__17571;
i__17545_17551 = G__17572;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__17573){
var elem = cljs.core.first(arglist__17573);
var kvs = cljs.core.rest(arglist__17573);
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
{var G__17582 = dommy.template.__GT_node_like.call(null,elem);(G__17582[cljs.core.name.call(null,k)] = v);
return G__17582;
} else
{var G__17583 = dommy.template.__GT_node_like.call(null,elem);G__17583.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__17583;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__17590__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17584_17591 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__17585_17592 = null;var count__17586_17593 = 0;var i__17587_17594 = 0;while(true){
if((i__17587_17594 < count__17586_17593))
{var vec__17588_17595 = cljs.core._nth.call(null,chunk__17585_17592,i__17587_17594);var k_17596__$1 = cljs.core.nth.call(null,vec__17588_17595,0,null);var v_17597__$1 = cljs.core.nth.call(null,vec__17588_17595,1,null);set_attr_BANG_.call(null,elem__$1,k_17596__$1,v_17597__$1);
{
var G__17598 = seq__17584_17591;
var G__17599 = chunk__17585_17592;
var G__17600 = count__17586_17593;
var G__17601 = (i__17587_17594 + 1);
seq__17584_17591 = G__17598;
chunk__17585_17592 = G__17599;
count__17586_17593 = G__17600;
i__17587_17594 = G__17601;
continue;
}
} else
{var temp__4092__auto___17602 = cljs.core.seq.call(null,seq__17584_17591);if(temp__4092__auto___17602)
{var seq__17584_17603__$1 = temp__4092__auto___17602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17584_17603__$1))
{var c__3844__auto___17604 = cljs.core.chunk_first.call(null,seq__17584_17603__$1);{
var G__17605 = cljs.core.chunk_rest.call(null,seq__17584_17603__$1);
var G__17606 = c__3844__auto___17604;
var G__17607 = cljs.core.count.call(null,c__3844__auto___17604);
var G__17608 = 0;
seq__17584_17591 = G__17605;
chunk__17585_17592 = G__17606;
count__17586_17593 = G__17607;
i__17587_17594 = G__17608;
continue;
}
} else
{var vec__17589_17609 = cljs.core.first.call(null,seq__17584_17603__$1);var k_17610__$1 = cljs.core.nth.call(null,vec__17589_17609,0,null);var v_17611__$1 = cljs.core.nth.call(null,vec__17589_17609,1,null);set_attr_BANG_.call(null,elem__$1,k_17610__$1,v_17611__$1);
{
var G__17612 = cljs.core.next.call(null,seq__17584_17603__$1);
var G__17613 = null;
var G__17614 = 0;
var G__17615 = 0;
seq__17584_17591 = G__17612;
chunk__17585_17592 = G__17613;
count__17586_17593 = G__17614;
i__17587_17594 = G__17615;
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
var G__17590 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17590__delegate.call(this,elem,k,v,kvs);};
G__17590.cljs$lang$maxFixedArity = 3;
G__17590.cljs$lang$applyTo = (function (arglist__17616){
var elem = cljs.core.first(arglist__17616);
arglist__17616 = cljs.core.next(arglist__17616);
var k = cljs.core.first(arglist__17616);
arglist__17616 = cljs.core.next(arglist__17616);
var v = cljs.core.first(arglist__17616);
var kvs = cljs.core.rest(arglist__17616);
return G__17590__delegate(elem,k,v,kvs);
});
G__17590.cljs$core$IFn$_invoke$arity$variadic = G__17590__delegate;
return G__17590;
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
var G__17625__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17621_17626 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__17622_17627 = null;var count__17623_17628 = 0;var i__17624_17629 = 0;while(true){
if((i__17624_17629 < count__17623_17628))
{var k_17630__$1 = cljs.core._nth.call(null,chunk__17622_17627,i__17624_17629);remove_attr_BANG_.call(null,elem__$1,k_17630__$1);
{
var G__17631 = seq__17621_17626;
var G__17632 = chunk__17622_17627;
var G__17633 = count__17623_17628;
var G__17634 = (i__17624_17629 + 1);
seq__17621_17626 = G__17631;
chunk__17622_17627 = G__17632;
count__17623_17628 = G__17633;
i__17624_17629 = G__17634;
continue;
}
} else
{var temp__4092__auto___17635 = cljs.core.seq.call(null,seq__17621_17626);if(temp__4092__auto___17635)
{var seq__17621_17636__$1 = temp__4092__auto___17635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17621_17636__$1))
{var c__3844__auto___17637 = cljs.core.chunk_first.call(null,seq__17621_17636__$1);{
var G__17638 = cljs.core.chunk_rest.call(null,seq__17621_17636__$1);
var G__17639 = c__3844__auto___17637;
var G__17640 = cljs.core.count.call(null,c__3844__auto___17637);
var G__17641 = 0;
seq__17621_17626 = G__17638;
chunk__17622_17627 = G__17639;
count__17623_17628 = G__17640;
i__17624_17629 = G__17641;
continue;
}
} else
{var k_17642__$1 = cljs.core.first.call(null,seq__17621_17636__$1);remove_attr_BANG_.call(null,elem__$1,k_17642__$1);
{
var G__17643 = cljs.core.next.call(null,seq__17621_17636__$1);
var G__17644 = null;
var G__17645 = 0;
var G__17646 = 0;
seq__17621_17626 = G__17643;
chunk__17622_17627 = G__17644;
count__17623_17628 = G__17645;
i__17624_17629 = G__17646;
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
var G__17625 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17625__delegate.call(this,elem,k,ks);};
G__17625.cljs$lang$maxFixedArity = 2;
G__17625.cljs$lang$applyTo = (function (arglist__17647){
var elem = cljs.core.first(arglist__17647);
arglist__17647 = cljs.core.next(arglist__17647);
var k = cljs.core.first(arglist__17647);
var ks = cljs.core.rest(arglist__17647);
return G__17625__delegate(elem,k,ks);
});
G__17625.cljs$core$IFn$_invoke$arity$variadic = G__17625__delegate;
return G__17625;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17649 = dommy.template.__GT_node_like.call(null,elem);G__17649.style.display = ((show_QMARK_)?"":"none");
return G__17649;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17651 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17651,false);
return G__17651;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17653 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17653,true);
return G__17653;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17655 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17655["constructor"] = Object);
return G__17655;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
