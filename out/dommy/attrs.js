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
var G__29286 = (i + class$.length);
start_from = G__29286;
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
{var temp__4090__auto___29311 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29311))
{var class_list_29312 = temp__4090__auto___29311;var seq__29299_29313 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__29300_29314 = null;var count__29301_29315 = 0;var i__29302_29316 = 0;while(true){
if((i__29302_29316 < count__29301_29315))
{var class_29317 = cljs.core._nth.call(null,chunk__29300_29314,i__29302_29316);class_list_29312.add(class_29317);
{
var G__29318 = seq__29299_29313;
var G__29319 = chunk__29300_29314;
var G__29320 = count__29301_29315;
var G__29321 = (i__29302_29316 + 1);
seq__29299_29313 = G__29318;
chunk__29300_29314 = G__29319;
count__29301_29315 = G__29320;
i__29302_29316 = G__29321;
continue;
}
} else
{var temp__4092__auto___29322 = cljs.core.seq.call(null,seq__29299_29313);if(temp__4092__auto___29322)
{var seq__29299_29323__$1 = temp__4092__auto___29322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29299_29323__$1))
{var c__3844__auto___29324 = cljs.core.chunk_first.call(null,seq__29299_29323__$1);{
var G__29325 = cljs.core.chunk_rest.call(null,seq__29299_29323__$1);
var G__29326 = c__3844__auto___29324;
var G__29327 = cljs.core.count.call(null,c__3844__auto___29324);
var G__29328 = 0;
seq__29299_29313 = G__29325;
chunk__29300_29314 = G__29326;
count__29301_29315 = G__29327;
i__29302_29316 = G__29328;
continue;
}
} else
{var class_29329 = cljs.core.first.call(null,seq__29299_29323__$1);class_list_29312.add(class_29329);
{
var G__29330 = cljs.core.next.call(null,seq__29299_29323__$1);
var G__29331 = null;
var G__29332 = 0;
var G__29333 = 0;
seq__29299_29313 = G__29330;
chunk__29300_29314 = G__29331;
count__29301_29315 = G__29332;
i__29302_29316 = G__29333;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_29334 = elem__$1.className;var seq__29303_29335 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__29304_29336 = null;var count__29305_29337 = 0;var i__29306_29338 = 0;while(true){
if((i__29306_29338 < count__29305_29337))
{var class_29339 = cljs.core._nth.call(null,chunk__29304_29336,i__29306_29338);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_29334,class_29339)))
{} else
{elem__$1.className = (((class_name_29334 === ""))?class_29339:[cljs.core.str(class_name_29334),cljs.core.str(" "),cljs.core.str(class_29339)].join(''));
}
{
var G__29340 = seq__29303_29335;
var G__29341 = chunk__29304_29336;
var G__29342 = count__29305_29337;
var G__29343 = (i__29306_29338 + 1);
seq__29303_29335 = G__29340;
chunk__29304_29336 = G__29341;
count__29305_29337 = G__29342;
i__29306_29338 = G__29343;
continue;
}
} else
{var temp__4092__auto___29344 = cljs.core.seq.call(null,seq__29303_29335);if(temp__4092__auto___29344)
{var seq__29303_29345__$1 = temp__4092__auto___29344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29303_29345__$1))
{var c__3844__auto___29346 = cljs.core.chunk_first.call(null,seq__29303_29345__$1);{
var G__29347 = cljs.core.chunk_rest.call(null,seq__29303_29345__$1);
var G__29348 = c__3844__auto___29346;
var G__29349 = cljs.core.count.call(null,c__3844__auto___29346);
var G__29350 = 0;
seq__29303_29335 = G__29347;
chunk__29304_29336 = G__29348;
count__29305_29337 = G__29349;
i__29306_29338 = G__29350;
continue;
}
} else
{var class_29351 = cljs.core.first.call(null,seq__29303_29345__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_29334,class_29351)))
{} else
{elem__$1.className = (((class_name_29334 === ""))?class_29351:[cljs.core.str(class_name_29334),cljs.core.str(" "),cljs.core.str(class_29351)].join(''));
}
{
var G__29352 = cljs.core.next.call(null,seq__29303_29345__$1);
var G__29353 = null;
var G__29354 = 0;
var G__29355 = 0;
seq__29303_29335 = G__29352;
chunk__29304_29336 = G__29353;
count__29305_29337 = G__29354;
i__29306_29338 = G__29355;
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
var G__29356__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29307_29357 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__29308_29358 = null;var count__29309_29359 = 0;var i__29310_29360 = 0;while(true){
if((i__29310_29360 < count__29309_29359))
{var c_29361 = cljs.core._nth.call(null,chunk__29308_29358,i__29310_29360);add_class_BANG_.call(null,elem__$1,c_29361);
{
var G__29362 = seq__29307_29357;
var G__29363 = chunk__29308_29358;
var G__29364 = count__29309_29359;
var G__29365 = (i__29310_29360 + 1);
seq__29307_29357 = G__29362;
chunk__29308_29358 = G__29363;
count__29309_29359 = G__29364;
i__29310_29360 = G__29365;
continue;
}
} else
{var temp__4092__auto___29366 = cljs.core.seq.call(null,seq__29307_29357);if(temp__4092__auto___29366)
{var seq__29307_29367__$1 = temp__4092__auto___29366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29307_29367__$1))
{var c__3844__auto___29368 = cljs.core.chunk_first.call(null,seq__29307_29367__$1);{
var G__29369 = cljs.core.chunk_rest.call(null,seq__29307_29367__$1);
var G__29370 = c__3844__auto___29368;
var G__29371 = cljs.core.count.call(null,c__3844__auto___29368);
var G__29372 = 0;
seq__29307_29357 = G__29369;
chunk__29308_29358 = G__29370;
count__29309_29359 = G__29371;
i__29310_29360 = G__29372;
continue;
}
} else
{var c_29373 = cljs.core.first.call(null,seq__29307_29367__$1);add_class_BANG_.call(null,elem__$1,c_29373);
{
var G__29374 = cljs.core.next.call(null,seq__29307_29367__$1);
var G__29375 = null;
var G__29376 = 0;
var G__29377 = 0;
seq__29307_29357 = G__29374;
chunk__29308_29358 = G__29375;
count__29309_29359 = G__29376;
i__29310_29360 = G__29377;
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
var G__29356 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29356__delegate.call(this,elem,classes,more_classes);};
G__29356.cljs$lang$maxFixedArity = 2;
G__29356.cljs$lang$applyTo = (function (arglist__29378){
var elem = cljs.core.first(arglist__29378);
arglist__29378 = cljs.core.next(arglist__29378);
var classes = cljs.core.first(arglist__29378);
var more_classes = cljs.core.rest(arglist__29378);
return G__29356__delegate(elem,classes,more_classes);
});
G__29356.cljs$core$IFn$_invoke$arity$variadic = G__29356__delegate;
return G__29356;
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
var G__29379 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__29379;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29388 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29388))
{var class_list_29389 = temp__4090__auto___29388;class_list_29389.remove(class$__$1);
} else
{var class_name_29390 = elem__$1.className;var new_class_name_29391 = dommy.attrs.remove_class_str.call(null,class_name_29390,class$__$1);if((class_name_29390 === new_class_name_29391))
{} else
{elem__$1.className = new_class_name_29391;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__29392__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29384 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__29385 = null;var count__29386 = 0;var i__29387 = 0;while(true){
if((i__29387 < count__29386))
{var c = cljs.core._nth.call(null,chunk__29385,i__29387);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29393 = seq__29384;
var G__29394 = chunk__29385;
var G__29395 = count__29386;
var G__29396 = (i__29387 + 1);
seq__29384 = G__29393;
chunk__29385 = G__29394;
count__29386 = G__29395;
i__29387 = G__29396;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29384);if(temp__4092__auto__)
{var seq__29384__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29384__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__29384__$1);{
var G__29397 = cljs.core.chunk_rest.call(null,seq__29384__$1);
var G__29398 = c__3844__auto__;
var G__29399 = cljs.core.count.call(null,c__3844__auto__);
var G__29400 = 0;
seq__29384 = G__29397;
chunk__29385 = G__29398;
count__29386 = G__29399;
i__29387 = G__29400;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__29384__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29401 = cljs.core.next.call(null,seq__29384__$1);
var G__29402 = null;
var G__29403 = 0;
var G__29404 = 0;
seq__29384 = G__29401;
chunk__29385 = G__29402;
count__29386 = G__29403;
i__29387 = G__29404;
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
var G__29392 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29392__delegate.call(this,elem,class$,classes);};
G__29392.cljs$lang$maxFixedArity = 2;
G__29392.cljs$lang$applyTo = (function (arglist__29405){
var elem = cljs.core.first(arglist__29405);
arglist__29405 = cljs.core.next(arglist__29405);
var class$ = cljs.core.first(arglist__29405);
var classes = cljs.core.rest(arglist__29405);
return G__29392__delegate(elem,class$,classes);
});
G__29392.cljs$core$IFn$_invoke$arity$variadic = G__29392__delegate;
return G__29392;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29406 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29406))
{var class_list_29407 = temp__4090__auto___29406;class_list_29407.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__29410){var vec__29411 = p__29410;var k = cljs.core.nth.call(null,vec__29411,0,null);var v = cljs.core.nth.call(null,vec__29411,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__29418_29424 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29419_29425 = null;var count__29420_29426 = 0;var i__29421_29427 = 0;while(true){
if((i__29421_29427 < count__29420_29426))
{var vec__29422_29428 = cljs.core._nth.call(null,chunk__29419_29425,i__29421_29427);var k_29429 = cljs.core.nth.call(null,vec__29422_29428,0,null);var v_29430 = cljs.core.nth.call(null,vec__29422_29428,1,null);(style[cljs.core.name.call(null,k_29429)] = v_29430);
{
var G__29431 = seq__29418_29424;
var G__29432 = chunk__29419_29425;
var G__29433 = count__29420_29426;
var G__29434 = (i__29421_29427 + 1);
seq__29418_29424 = G__29431;
chunk__29419_29425 = G__29432;
count__29420_29426 = G__29433;
i__29421_29427 = G__29434;
continue;
}
} else
{var temp__4092__auto___29435 = cljs.core.seq.call(null,seq__29418_29424);if(temp__4092__auto___29435)
{var seq__29418_29436__$1 = temp__4092__auto___29435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29418_29436__$1))
{var c__3844__auto___29437 = cljs.core.chunk_first.call(null,seq__29418_29436__$1);{
var G__29438 = cljs.core.chunk_rest.call(null,seq__29418_29436__$1);
var G__29439 = c__3844__auto___29437;
var G__29440 = cljs.core.count.call(null,c__3844__auto___29437);
var G__29441 = 0;
seq__29418_29424 = G__29438;
chunk__29419_29425 = G__29439;
count__29420_29426 = G__29440;
i__29421_29427 = G__29441;
continue;
}
} else
{var vec__29423_29442 = cljs.core.first.call(null,seq__29418_29436__$1);var k_29443 = cljs.core.nth.call(null,vec__29423_29442,0,null);var v_29444 = cljs.core.nth.call(null,vec__29423_29442,1,null);(style[cljs.core.name.call(null,k_29443)] = v_29444);
{
var G__29445 = cljs.core.next.call(null,seq__29418_29436__$1);
var G__29446 = null;
var G__29447 = 0;
var G__29448 = 0;
seq__29418_29424 = G__29445;
chunk__29419_29425 = G__29446;
count__29420_29426 = G__29447;
i__29421_29427 = G__29448;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29449){
var elem = cljs.core.first(arglist__29449);
var kvs = cljs.core.rest(arglist__29449);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29456_29462 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29457_29463 = null;var count__29458_29464 = 0;var i__29459_29465 = 0;while(true){
if((i__29459_29465 < count__29458_29464))
{var vec__29460_29466 = cljs.core._nth.call(null,chunk__29457_29463,i__29459_29465);var k_29467 = cljs.core.nth.call(null,vec__29460_29466,0,null);var v_29468 = cljs.core.nth.call(null,vec__29460_29466,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29467,[cljs.core.str(v_29468),cljs.core.str("px")].join(''));
{
var G__29469 = seq__29456_29462;
var G__29470 = chunk__29457_29463;
var G__29471 = count__29458_29464;
var G__29472 = (i__29459_29465 + 1);
seq__29456_29462 = G__29469;
chunk__29457_29463 = G__29470;
count__29458_29464 = G__29471;
i__29459_29465 = G__29472;
continue;
}
} else
{var temp__4092__auto___29473 = cljs.core.seq.call(null,seq__29456_29462);if(temp__4092__auto___29473)
{var seq__29456_29474__$1 = temp__4092__auto___29473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29456_29474__$1))
{var c__3844__auto___29475 = cljs.core.chunk_first.call(null,seq__29456_29474__$1);{
var G__29476 = cljs.core.chunk_rest.call(null,seq__29456_29474__$1);
var G__29477 = c__3844__auto___29475;
var G__29478 = cljs.core.count.call(null,c__3844__auto___29475);
var G__29479 = 0;
seq__29456_29462 = G__29476;
chunk__29457_29463 = G__29477;
count__29458_29464 = G__29478;
i__29459_29465 = G__29479;
continue;
}
} else
{var vec__29461_29480 = cljs.core.first.call(null,seq__29456_29474__$1);var k_29481 = cljs.core.nth.call(null,vec__29461_29480,0,null);var v_29482 = cljs.core.nth.call(null,vec__29461_29480,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29481,[cljs.core.str(v_29482),cljs.core.str("px")].join(''));
{
var G__29483 = cljs.core.next.call(null,seq__29456_29474__$1);
var G__29484 = null;
var G__29485 = 0;
var G__29486 = 0;
seq__29456_29462 = G__29483;
chunk__29457_29463 = G__29484;
count__29458_29464 = G__29485;
i__29459_29465 = G__29486;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__29487){
var elem = cljs.core.first(arglist__29487);
var kvs = cljs.core.rest(arglist__29487);
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
{var G__29496 = dommy.template.__GT_node_like.call(null,elem);(G__29496[cljs.core.name.call(null,k)] = v);
return G__29496;
} else
{var G__29497 = dommy.template.__GT_node_like.call(null,elem);G__29497.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__29497;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__29504__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29498_29505 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__29499_29506 = null;var count__29500_29507 = 0;var i__29501_29508 = 0;while(true){
if((i__29501_29508 < count__29500_29507))
{var vec__29502_29509 = cljs.core._nth.call(null,chunk__29499_29506,i__29501_29508);var k_29510__$1 = cljs.core.nth.call(null,vec__29502_29509,0,null);var v_29511__$1 = cljs.core.nth.call(null,vec__29502_29509,1,null);set_attr_BANG_.call(null,elem__$1,k_29510__$1,v_29511__$1);
{
var G__29512 = seq__29498_29505;
var G__29513 = chunk__29499_29506;
var G__29514 = count__29500_29507;
var G__29515 = (i__29501_29508 + 1);
seq__29498_29505 = G__29512;
chunk__29499_29506 = G__29513;
count__29500_29507 = G__29514;
i__29501_29508 = G__29515;
continue;
}
} else
{var temp__4092__auto___29516 = cljs.core.seq.call(null,seq__29498_29505);if(temp__4092__auto___29516)
{var seq__29498_29517__$1 = temp__4092__auto___29516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29498_29517__$1))
{var c__3844__auto___29518 = cljs.core.chunk_first.call(null,seq__29498_29517__$1);{
var G__29519 = cljs.core.chunk_rest.call(null,seq__29498_29517__$1);
var G__29520 = c__3844__auto___29518;
var G__29521 = cljs.core.count.call(null,c__3844__auto___29518);
var G__29522 = 0;
seq__29498_29505 = G__29519;
chunk__29499_29506 = G__29520;
count__29500_29507 = G__29521;
i__29501_29508 = G__29522;
continue;
}
} else
{var vec__29503_29523 = cljs.core.first.call(null,seq__29498_29517__$1);var k_29524__$1 = cljs.core.nth.call(null,vec__29503_29523,0,null);var v_29525__$1 = cljs.core.nth.call(null,vec__29503_29523,1,null);set_attr_BANG_.call(null,elem__$1,k_29524__$1,v_29525__$1);
{
var G__29526 = cljs.core.next.call(null,seq__29498_29517__$1);
var G__29527 = null;
var G__29528 = 0;
var G__29529 = 0;
seq__29498_29505 = G__29526;
chunk__29499_29506 = G__29527;
count__29500_29507 = G__29528;
i__29501_29508 = G__29529;
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
var G__29504 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29504__delegate.call(this,elem,k,v,kvs);};
G__29504.cljs$lang$maxFixedArity = 3;
G__29504.cljs$lang$applyTo = (function (arglist__29530){
var elem = cljs.core.first(arglist__29530);
arglist__29530 = cljs.core.next(arglist__29530);
var k = cljs.core.first(arglist__29530);
arglist__29530 = cljs.core.next(arglist__29530);
var v = cljs.core.first(arglist__29530);
var kvs = cljs.core.rest(arglist__29530);
return G__29504__delegate(elem,k,v,kvs);
});
G__29504.cljs$core$IFn$_invoke$arity$variadic = G__29504__delegate;
return G__29504;
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
var G__29539__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29535_29540 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__29536_29541 = null;var count__29537_29542 = 0;var i__29538_29543 = 0;while(true){
if((i__29538_29543 < count__29537_29542))
{var k_29544__$1 = cljs.core._nth.call(null,chunk__29536_29541,i__29538_29543);remove_attr_BANG_.call(null,elem__$1,k_29544__$1);
{
var G__29545 = seq__29535_29540;
var G__29546 = chunk__29536_29541;
var G__29547 = count__29537_29542;
var G__29548 = (i__29538_29543 + 1);
seq__29535_29540 = G__29545;
chunk__29536_29541 = G__29546;
count__29537_29542 = G__29547;
i__29538_29543 = G__29548;
continue;
}
} else
{var temp__4092__auto___29549 = cljs.core.seq.call(null,seq__29535_29540);if(temp__4092__auto___29549)
{var seq__29535_29550__$1 = temp__4092__auto___29549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29535_29550__$1))
{var c__3844__auto___29551 = cljs.core.chunk_first.call(null,seq__29535_29550__$1);{
var G__29552 = cljs.core.chunk_rest.call(null,seq__29535_29550__$1);
var G__29553 = c__3844__auto___29551;
var G__29554 = cljs.core.count.call(null,c__3844__auto___29551);
var G__29555 = 0;
seq__29535_29540 = G__29552;
chunk__29536_29541 = G__29553;
count__29537_29542 = G__29554;
i__29538_29543 = G__29555;
continue;
}
} else
{var k_29556__$1 = cljs.core.first.call(null,seq__29535_29550__$1);remove_attr_BANG_.call(null,elem__$1,k_29556__$1);
{
var G__29557 = cljs.core.next.call(null,seq__29535_29550__$1);
var G__29558 = null;
var G__29559 = 0;
var G__29560 = 0;
seq__29535_29540 = G__29557;
chunk__29536_29541 = G__29558;
count__29537_29542 = G__29559;
i__29538_29543 = G__29560;
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
var G__29539 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29539__delegate.call(this,elem,k,ks);};
G__29539.cljs$lang$maxFixedArity = 2;
G__29539.cljs$lang$applyTo = (function (arglist__29561){
var elem = cljs.core.first(arglist__29561);
arglist__29561 = cljs.core.next(arglist__29561);
var k = cljs.core.first(arglist__29561);
var ks = cljs.core.rest(arglist__29561);
return G__29539__delegate(elem,k,ks);
});
G__29539.cljs$core$IFn$_invoke$arity$variadic = G__29539__delegate;
return G__29539;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__29563 = dommy.template.__GT_node_like.call(null,elem);G__29563.style.display = ((show_QMARK_)?"":"none");
return G__29563;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__29565 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29565,false);
return G__29565;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__29567 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29567,true);
return G__29567;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__29569 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__29569["constructor"] = Object);
return G__29569;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map