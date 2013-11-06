goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__2952__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__2952__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__2952__auto__;
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
var G__6281 = (i + class$.length);
start_from = G__6281;
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
{var temp__4090__auto___6306 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6306))
{var class_list_6307 = temp__4090__auto___6306;var seq__6294_6308 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6295_6309 = null;var count__6296_6310 = 0;var i__6297_6311 = 0;while(true){
if((i__6297_6311 < count__6296_6310))
{var class_6312 = cljs.core._nth.call(null,chunk__6295_6309,i__6297_6311);class_list_6307.add(class_6312);
{
var G__6313 = seq__6294_6308;
var G__6314 = chunk__6295_6309;
var G__6315 = count__6296_6310;
var G__6316 = (i__6297_6311 + 1);
seq__6294_6308 = G__6313;
chunk__6295_6309 = G__6314;
count__6296_6310 = G__6315;
i__6297_6311 = G__6316;
continue;
}
} else
{var temp__4092__auto___6317 = cljs.core.seq.call(null,seq__6294_6308);if(temp__4092__auto___6317)
{var seq__6294_6318__$1 = temp__4092__auto___6317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6294_6318__$1))
{var c__3670__auto___6319 = cljs.core.chunk_first.call(null,seq__6294_6318__$1);{
var G__6320 = cljs.core.chunk_rest.call(null,seq__6294_6318__$1);
var G__6321 = c__3670__auto___6319;
var G__6322 = cljs.core.count.call(null,c__3670__auto___6319);
var G__6323 = 0;
seq__6294_6308 = G__6320;
chunk__6295_6309 = G__6321;
count__6296_6310 = G__6322;
i__6297_6311 = G__6323;
continue;
}
} else
{var class_6324 = cljs.core.first.call(null,seq__6294_6318__$1);class_list_6307.add(class_6324);
{
var G__6325 = cljs.core.next.call(null,seq__6294_6318__$1);
var G__6326 = null;
var G__6327 = 0;
var G__6328 = 0;
seq__6294_6308 = G__6325;
chunk__6295_6309 = G__6326;
count__6296_6310 = G__6327;
i__6297_6311 = G__6328;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_6329 = elem__$1.className;var seq__6298_6330 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6299_6331 = null;var count__6300_6332 = 0;var i__6301_6333 = 0;while(true){
if((i__6301_6333 < count__6300_6332))
{var class_6334 = cljs.core._nth.call(null,chunk__6299_6331,i__6301_6333);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6329,class_6334)))
{} else
{elem__$1.className = (((class_name_6329 === ""))?class_6334:[cljs.core.str(class_name_6329),cljs.core.str(" "),cljs.core.str(class_6334)].join(''));
}
{
var G__6335 = seq__6298_6330;
var G__6336 = chunk__6299_6331;
var G__6337 = count__6300_6332;
var G__6338 = (i__6301_6333 + 1);
seq__6298_6330 = G__6335;
chunk__6299_6331 = G__6336;
count__6300_6332 = G__6337;
i__6301_6333 = G__6338;
continue;
}
} else
{var temp__4092__auto___6339 = cljs.core.seq.call(null,seq__6298_6330);if(temp__4092__auto___6339)
{var seq__6298_6340__$1 = temp__4092__auto___6339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6298_6340__$1))
{var c__3670__auto___6341 = cljs.core.chunk_first.call(null,seq__6298_6340__$1);{
var G__6342 = cljs.core.chunk_rest.call(null,seq__6298_6340__$1);
var G__6343 = c__3670__auto___6341;
var G__6344 = cljs.core.count.call(null,c__3670__auto___6341);
var G__6345 = 0;
seq__6298_6330 = G__6342;
chunk__6299_6331 = G__6343;
count__6300_6332 = G__6344;
i__6301_6333 = G__6345;
continue;
}
} else
{var class_6346 = cljs.core.first.call(null,seq__6298_6340__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6329,class_6346)))
{} else
{elem__$1.className = (((class_name_6329 === ""))?class_6346:[cljs.core.str(class_name_6329),cljs.core.str(" "),cljs.core.str(class_6346)].join(''));
}
{
var G__6347 = cljs.core.next.call(null,seq__6298_6340__$1);
var G__6348 = null;
var G__6349 = 0;
var G__6350 = 0;
seq__6298_6330 = G__6347;
chunk__6299_6331 = G__6348;
count__6300_6332 = G__6349;
i__6301_6333 = G__6350;
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
var G__6351__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6302_6352 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6303_6353 = null;var count__6304_6354 = 0;var i__6305_6355 = 0;while(true){
if((i__6305_6355 < count__6304_6354))
{var c_6356 = cljs.core._nth.call(null,chunk__6303_6353,i__6305_6355);add_class_BANG_.call(null,elem__$1,c_6356);
{
var G__6357 = seq__6302_6352;
var G__6358 = chunk__6303_6353;
var G__6359 = count__6304_6354;
var G__6360 = (i__6305_6355 + 1);
seq__6302_6352 = G__6357;
chunk__6303_6353 = G__6358;
count__6304_6354 = G__6359;
i__6305_6355 = G__6360;
continue;
}
} else
{var temp__4092__auto___6361 = cljs.core.seq.call(null,seq__6302_6352);if(temp__4092__auto___6361)
{var seq__6302_6362__$1 = temp__4092__auto___6361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6302_6362__$1))
{var c__3670__auto___6363 = cljs.core.chunk_first.call(null,seq__6302_6362__$1);{
var G__6364 = cljs.core.chunk_rest.call(null,seq__6302_6362__$1);
var G__6365 = c__3670__auto___6363;
var G__6366 = cljs.core.count.call(null,c__3670__auto___6363);
var G__6367 = 0;
seq__6302_6352 = G__6364;
chunk__6303_6353 = G__6365;
count__6304_6354 = G__6366;
i__6305_6355 = G__6367;
continue;
}
} else
{var c_6368 = cljs.core.first.call(null,seq__6302_6362__$1);add_class_BANG_.call(null,elem__$1,c_6368);
{
var G__6369 = cljs.core.next.call(null,seq__6302_6362__$1);
var G__6370 = null;
var G__6371 = 0;
var G__6372 = 0;
seq__6302_6352 = G__6369;
chunk__6303_6353 = G__6370;
count__6304_6354 = G__6371;
i__6305_6355 = G__6372;
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
var G__6351 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6351__delegate.call(this,elem,classes,more_classes);};
G__6351.cljs$lang$maxFixedArity = 2;
G__6351.cljs$lang$applyTo = (function (arglist__6373){
var elem = cljs.core.first(arglist__6373);
arglist__6373 = cljs.core.next(arglist__6373);
var classes = cljs.core.first(arglist__6373);
var more_classes = cljs.core.rest(arglist__6373);
return G__6351__delegate(elem,classes,more_classes);
});
G__6351.cljs$core$IFn$_invoke$arity$variadic = G__6351__delegate;
return G__6351;
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
var G__6374 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__6374;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___6383 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6383))
{var class_list_6384 = temp__4090__auto___6383;class_list_6384.remove(class$__$1);
} else
{var class_name_6385 = elem__$1.className;var new_class_name_6386 = dommy.attrs.remove_class_str.call(null,class_name_6385,class$__$1);if((class_name_6385 === new_class_name_6386))
{} else
{elem__$1.className = new_class_name_6386;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__6387__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6379 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6380 = null;var count__6381 = 0;var i__6382 = 0;while(true){
if((i__6382 < count__6381))
{var c = cljs.core._nth.call(null,chunk__6380,i__6382);remove_class_BANG_.call(null,elem__$1,c);
{
var G__6388 = seq__6379;
var G__6389 = chunk__6380;
var G__6390 = count__6381;
var G__6391 = (i__6382 + 1);
seq__6379 = G__6388;
chunk__6380 = G__6389;
count__6381 = G__6390;
i__6382 = G__6391;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6379);if(temp__4092__auto__)
{var seq__6379__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6379__$1))
{var c__3670__auto__ = cljs.core.chunk_first.call(null,seq__6379__$1);{
var G__6392 = cljs.core.chunk_rest.call(null,seq__6379__$1);
var G__6393 = c__3670__auto__;
var G__6394 = cljs.core.count.call(null,c__3670__auto__);
var G__6395 = 0;
seq__6379 = G__6392;
chunk__6380 = G__6393;
count__6381 = G__6394;
i__6382 = G__6395;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6379__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__6396 = cljs.core.next.call(null,seq__6379__$1);
var G__6397 = null;
var G__6398 = 0;
var G__6399 = 0;
seq__6379 = G__6396;
chunk__6380 = G__6397;
count__6381 = G__6398;
i__6382 = G__6399;
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
var G__6387 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6387__delegate.call(this,elem,class$,classes);};
G__6387.cljs$lang$maxFixedArity = 2;
G__6387.cljs$lang$applyTo = (function (arglist__6400){
var elem = cljs.core.first(arglist__6400);
arglist__6400 = cljs.core.next(arglist__6400);
var class$ = cljs.core.first(arglist__6400);
var classes = cljs.core.rest(arglist__6400);
return G__6387__delegate(elem,class$,classes);
});
G__6387.cljs$core$IFn$_invoke$arity$variadic = G__6387__delegate;
return G__6387;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___6401 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___6401))
{var class_list_6402 = temp__4090__auto___6401;class_list_6402.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__6405){var vec__6406 = p__6405;var k = cljs.core.nth.call(null,vec__6406,0,null);var v = cljs.core.nth.call(null,vec__6406,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__6413_6419 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6414_6420 = null;var count__6415_6421 = 0;var i__6416_6422 = 0;while(true){
if((i__6416_6422 < count__6415_6421))
{var vec__6417_6423 = cljs.core._nth.call(null,chunk__6414_6420,i__6416_6422);var k_6424 = cljs.core.nth.call(null,vec__6417_6423,0,null);var v_6425 = cljs.core.nth.call(null,vec__6417_6423,1,null);(style[cljs.core.name.call(null,k_6424)] = v_6425);
{
var G__6426 = seq__6413_6419;
var G__6427 = chunk__6414_6420;
var G__6428 = count__6415_6421;
var G__6429 = (i__6416_6422 + 1);
seq__6413_6419 = G__6426;
chunk__6414_6420 = G__6427;
count__6415_6421 = G__6428;
i__6416_6422 = G__6429;
continue;
}
} else
{var temp__4092__auto___6430 = cljs.core.seq.call(null,seq__6413_6419);if(temp__4092__auto___6430)
{var seq__6413_6431__$1 = temp__4092__auto___6430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6413_6431__$1))
{var c__3670__auto___6432 = cljs.core.chunk_first.call(null,seq__6413_6431__$1);{
var G__6433 = cljs.core.chunk_rest.call(null,seq__6413_6431__$1);
var G__6434 = c__3670__auto___6432;
var G__6435 = cljs.core.count.call(null,c__3670__auto___6432);
var G__6436 = 0;
seq__6413_6419 = G__6433;
chunk__6414_6420 = G__6434;
count__6415_6421 = G__6435;
i__6416_6422 = G__6436;
continue;
}
} else
{var vec__6418_6437 = cljs.core.first.call(null,seq__6413_6431__$1);var k_6438 = cljs.core.nth.call(null,vec__6418_6437,0,null);var v_6439 = cljs.core.nth.call(null,vec__6418_6437,1,null);(style[cljs.core.name.call(null,k_6438)] = v_6439);
{
var G__6440 = cljs.core.next.call(null,seq__6413_6431__$1);
var G__6441 = null;
var G__6442 = 0;
var G__6443 = 0;
seq__6413_6419 = G__6440;
chunk__6414_6420 = G__6441;
count__6415_6421 = G__6442;
i__6416_6422 = G__6443;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6444){
var elem = cljs.core.first(arglist__6444);
var kvs = cljs.core.rest(arglist__6444);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6451_6457 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6452_6458 = null;var count__6453_6459 = 0;var i__6454_6460 = 0;while(true){
if((i__6454_6460 < count__6453_6459))
{var vec__6455_6461 = cljs.core._nth.call(null,chunk__6452_6458,i__6454_6460);var k_6462 = cljs.core.nth.call(null,vec__6455_6461,0,null);var v_6463 = cljs.core.nth.call(null,vec__6455_6461,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6462,[cljs.core.str(v_6463),cljs.core.str("px")].join(''));
{
var G__6464 = seq__6451_6457;
var G__6465 = chunk__6452_6458;
var G__6466 = count__6453_6459;
var G__6467 = (i__6454_6460 + 1);
seq__6451_6457 = G__6464;
chunk__6452_6458 = G__6465;
count__6453_6459 = G__6466;
i__6454_6460 = G__6467;
continue;
}
} else
{var temp__4092__auto___6468 = cljs.core.seq.call(null,seq__6451_6457);if(temp__4092__auto___6468)
{var seq__6451_6469__$1 = temp__4092__auto___6468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6451_6469__$1))
{var c__3670__auto___6470 = cljs.core.chunk_first.call(null,seq__6451_6469__$1);{
var G__6471 = cljs.core.chunk_rest.call(null,seq__6451_6469__$1);
var G__6472 = c__3670__auto___6470;
var G__6473 = cljs.core.count.call(null,c__3670__auto___6470);
var G__6474 = 0;
seq__6451_6457 = G__6471;
chunk__6452_6458 = G__6472;
count__6453_6459 = G__6473;
i__6454_6460 = G__6474;
continue;
}
} else
{var vec__6456_6475 = cljs.core.first.call(null,seq__6451_6469__$1);var k_6476 = cljs.core.nth.call(null,vec__6456_6475,0,null);var v_6477 = cljs.core.nth.call(null,vec__6456_6475,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6476,[cljs.core.str(v_6477),cljs.core.str("px")].join(''));
{
var G__6478 = cljs.core.next.call(null,seq__6451_6469__$1);
var G__6479 = null;
var G__6480 = 0;
var G__6481 = 0;
seq__6451_6457 = G__6478;
chunk__6452_6458 = G__6479;
count__6453_6459 = G__6480;
i__6454_6460 = G__6481;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6482){
var elem = cljs.core.first(arglist__6482);
var kvs = cljs.core.rest(arglist__6482);
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
{var G__6491 = dommy.template.__GT_node_like.call(null,elem);(G__6491[cljs.core.name.call(null,k)] = v);
return G__6491;
} else
{var G__6492 = dommy.template.__GT_node_like.call(null,elem);G__6492.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__6492;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6499__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6493_6500 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__6494_6501 = null;var count__6495_6502 = 0;var i__6496_6503 = 0;while(true){
if((i__6496_6503 < count__6495_6502))
{var vec__6497_6504 = cljs.core._nth.call(null,chunk__6494_6501,i__6496_6503);var k_6505__$1 = cljs.core.nth.call(null,vec__6497_6504,0,null);var v_6506__$1 = cljs.core.nth.call(null,vec__6497_6504,1,null);set_attr_BANG_.call(null,elem__$1,k_6505__$1,v_6506__$1);
{
var G__6507 = seq__6493_6500;
var G__6508 = chunk__6494_6501;
var G__6509 = count__6495_6502;
var G__6510 = (i__6496_6503 + 1);
seq__6493_6500 = G__6507;
chunk__6494_6501 = G__6508;
count__6495_6502 = G__6509;
i__6496_6503 = G__6510;
continue;
}
} else
{var temp__4092__auto___6511 = cljs.core.seq.call(null,seq__6493_6500);if(temp__4092__auto___6511)
{var seq__6493_6512__$1 = temp__4092__auto___6511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6493_6512__$1))
{var c__3670__auto___6513 = cljs.core.chunk_first.call(null,seq__6493_6512__$1);{
var G__6514 = cljs.core.chunk_rest.call(null,seq__6493_6512__$1);
var G__6515 = c__3670__auto___6513;
var G__6516 = cljs.core.count.call(null,c__3670__auto___6513);
var G__6517 = 0;
seq__6493_6500 = G__6514;
chunk__6494_6501 = G__6515;
count__6495_6502 = G__6516;
i__6496_6503 = G__6517;
continue;
}
} else
{var vec__6498_6518 = cljs.core.first.call(null,seq__6493_6512__$1);var k_6519__$1 = cljs.core.nth.call(null,vec__6498_6518,0,null);var v_6520__$1 = cljs.core.nth.call(null,vec__6498_6518,1,null);set_attr_BANG_.call(null,elem__$1,k_6519__$1,v_6520__$1);
{
var G__6521 = cljs.core.next.call(null,seq__6493_6512__$1);
var G__6522 = null;
var G__6523 = 0;
var G__6524 = 0;
seq__6493_6500 = G__6521;
chunk__6494_6501 = G__6522;
count__6495_6502 = G__6523;
i__6496_6503 = G__6524;
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
var G__6499 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6499__delegate.call(this,elem,k,v,kvs);};
G__6499.cljs$lang$maxFixedArity = 3;
G__6499.cljs$lang$applyTo = (function (arglist__6525){
var elem = cljs.core.first(arglist__6525);
arglist__6525 = cljs.core.next(arglist__6525);
var k = cljs.core.first(arglist__6525);
arglist__6525 = cljs.core.next(arglist__6525);
var v = cljs.core.first(arglist__6525);
var kvs = cljs.core.rest(arglist__6525);
return G__6499__delegate(elem,k,v,kvs);
});
G__6499.cljs$core$IFn$_invoke$arity$variadic = G__6499__delegate;
return G__6499;
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
var G__6534__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6530_6535 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6531_6536 = null;var count__6532_6537 = 0;var i__6533_6538 = 0;while(true){
if((i__6533_6538 < count__6532_6537))
{var k_6539__$1 = cljs.core._nth.call(null,chunk__6531_6536,i__6533_6538);remove_attr_BANG_.call(null,elem__$1,k_6539__$1);
{
var G__6540 = seq__6530_6535;
var G__6541 = chunk__6531_6536;
var G__6542 = count__6532_6537;
var G__6543 = (i__6533_6538 + 1);
seq__6530_6535 = G__6540;
chunk__6531_6536 = G__6541;
count__6532_6537 = G__6542;
i__6533_6538 = G__6543;
continue;
}
} else
{var temp__4092__auto___6544 = cljs.core.seq.call(null,seq__6530_6535);if(temp__4092__auto___6544)
{var seq__6530_6545__$1 = temp__4092__auto___6544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6530_6545__$1))
{var c__3670__auto___6546 = cljs.core.chunk_first.call(null,seq__6530_6545__$1);{
var G__6547 = cljs.core.chunk_rest.call(null,seq__6530_6545__$1);
var G__6548 = c__3670__auto___6546;
var G__6549 = cljs.core.count.call(null,c__3670__auto___6546);
var G__6550 = 0;
seq__6530_6535 = G__6547;
chunk__6531_6536 = G__6548;
count__6532_6537 = G__6549;
i__6533_6538 = G__6550;
continue;
}
} else
{var k_6551__$1 = cljs.core.first.call(null,seq__6530_6545__$1);remove_attr_BANG_.call(null,elem__$1,k_6551__$1);
{
var G__6552 = cljs.core.next.call(null,seq__6530_6545__$1);
var G__6553 = null;
var G__6554 = 0;
var G__6555 = 0;
seq__6530_6535 = G__6552;
chunk__6531_6536 = G__6553;
count__6532_6537 = G__6554;
i__6533_6538 = G__6555;
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
var G__6534 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6534__delegate.call(this,elem,k,ks);};
G__6534.cljs$lang$maxFixedArity = 2;
G__6534.cljs$lang$applyTo = (function (arglist__6556){
var elem = cljs.core.first(arglist__6556);
arglist__6556 = cljs.core.next(arglist__6556);
var k = cljs.core.first(arglist__6556);
var ks = cljs.core.rest(arglist__6556);
return G__6534__delegate(elem,k,ks);
});
G__6534.cljs$core$IFn$_invoke$arity$variadic = G__6534__delegate;
return G__6534;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__6558 = dommy.template.__GT_node_like.call(null,elem);G__6558.style.display = ((show_QMARK_)?"":"none");
return G__6558;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__6560 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6560,false);
return G__6560;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__6562 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6562,true);
return G__6562;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__6564 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__6564["constructor"] = Object);
return G__6564;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//@ sourceMappingURL=attrs.js.map