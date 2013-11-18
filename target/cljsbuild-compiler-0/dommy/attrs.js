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
var G__17262 = (i + class$.length);
start_from = G__17262;
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
{var temp__4090__auto___17287 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17287))
{var class_list_17288 = temp__4090__auto___17287;var seq__17275_17289 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17276_17290 = null;var count__17277_17291 = 0;var i__17278_17292 = 0;while(true){
if((i__17278_17292 < count__17277_17291))
{var class_17293 = cljs.core._nth.call(null,chunk__17276_17290,i__17278_17292);class_list_17288.add(class_17293);
{
var G__17294 = seq__17275_17289;
var G__17295 = chunk__17276_17290;
var G__17296 = count__17277_17291;
var G__17297 = (i__17278_17292 + 1);
seq__17275_17289 = G__17294;
chunk__17276_17290 = G__17295;
count__17277_17291 = G__17296;
i__17278_17292 = G__17297;
continue;
}
} else
{var temp__4092__auto___17298 = cljs.core.seq.call(null,seq__17275_17289);if(temp__4092__auto___17298)
{var seq__17275_17299__$1 = temp__4092__auto___17298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17275_17299__$1))
{var c__3844__auto___17300 = cljs.core.chunk_first.call(null,seq__17275_17299__$1);{
var G__17301 = cljs.core.chunk_rest.call(null,seq__17275_17299__$1);
var G__17302 = c__3844__auto___17300;
var G__17303 = cljs.core.count.call(null,c__3844__auto___17300);
var G__17304 = 0;
seq__17275_17289 = G__17301;
chunk__17276_17290 = G__17302;
count__17277_17291 = G__17303;
i__17278_17292 = G__17304;
continue;
}
} else
{var class_17305 = cljs.core.first.call(null,seq__17275_17299__$1);class_list_17288.add(class_17305);
{
var G__17306 = cljs.core.next.call(null,seq__17275_17299__$1);
var G__17307 = null;
var G__17308 = 0;
var G__17309 = 0;
seq__17275_17289 = G__17306;
chunk__17276_17290 = G__17307;
count__17277_17291 = G__17308;
i__17278_17292 = G__17309;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_17310 = elem__$1.className;var seq__17279_17311 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17280_17312 = null;var count__17281_17313 = 0;var i__17282_17314 = 0;while(true){
if((i__17282_17314 < count__17281_17313))
{var class_17315 = cljs.core._nth.call(null,chunk__17280_17312,i__17282_17314);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17310,class_17315)))
{} else
{elem__$1.className = (((class_name_17310 === ""))?class_17315:[cljs.core.str(class_name_17310),cljs.core.str(" "),cljs.core.str(class_17315)].join(''));
}
{
var G__17316 = seq__17279_17311;
var G__17317 = chunk__17280_17312;
var G__17318 = count__17281_17313;
var G__17319 = (i__17282_17314 + 1);
seq__17279_17311 = G__17316;
chunk__17280_17312 = G__17317;
count__17281_17313 = G__17318;
i__17282_17314 = G__17319;
continue;
}
} else
{var temp__4092__auto___17320 = cljs.core.seq.call(null,seq__17279_17311);if(temp__4092__auto___17320)
{var seq__17279_17321__$1 = temp__4092__auto___17320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17279_17321__$1))
{var c__3844__auto___17322 = cljs.core.chunk_first.call(null,seq__17279_17321__$1);{
var G__17323 = cljs.core.chunk_rest.call(null,seq__17279_17321__$1);
var G__17324 = c__3844__auto___17322;
var G__17325 = cljs.core.count.call(null,c__3844__auto___17322);
var G__17326 = 0;
seq__17279_17311 = G__17323;
chunk__17280_17312 = G__17324;
count__17281_17313 = G__17325;
i__17282_17314 = G__17326;
continue;
}
} else
{var class_17327 = cljs.core.first.call(null,seq__17279_17321__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17310,class_17327)))
{} else
{elem__$1.className = (((class_name_17310 === ""))?class_17327:[cljs.core.str(class_name_17310),cljs.core.str(" "),cljs.core.str(class_17327)].join(''));
}
{
var G__17328 = cljs.core.next.call(null,seq__17279_17321__$1);
var G__17329 = null;
var G__17330 = 0;
var G__17331 = 0;
seq__17279_17311 = G__17328;
chunk__17280_17312 = G__17329;
count__17281_17313 = G__17330;
i__17282_17314 = G__17331;
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
var G__17332__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17283_17333 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__17284_17334 = null;var count__17285_17335 = 0;var i__17286_17336 = 0;while(true){
if((i__17286_17336 < count__17285_17335))
{var c_17337 = cljs.core._nth.call(null,chunk__17284_17334,i__17286_17336);add_class_BANG_.call(null,elem__$1,c_17337);
{
var G__17338 = seq__17283_17333;
var G__17339 = chunk__17284_17334;
var G__17340 = count__17285_17335;
var G__17341 = (i__17286_17336 + 1);
seq__17283_17333 = G__17338;
chunk__17284_17334 = G__17339;
count__17285_17335 = G__17340;
i__17286_17336 = G__17341;
continue;
}
} else
{var temp__4092__auto___17342 = cljs.core.seq.call(null,seq__17283_17333);if(temp__4092__auto___17342)
{var seq__17283_17343__$1 = temp__4092__auto___17342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17283_17343__$1))
{var c__3844__auto___17344 = cljs.core.chunk_first.call(null,seq__17283_17343__$1);{
var G__17345 = cljs.core.chunk_rest.call(null,seq__17283_17343__$1);
var G__17346 = c__3844__auto___17344;
var G__17347 = cljs.core.count.call(null,c__3844__auto___17344);
var G__17348 = 0;
seq__17283_17333 = G__17345;
chunk__17284_17334 = G__17346;
count__17285_17335 = G__17347;
i__17286_17336 = G__17348;
continue;
}
} else
{var c_17349 = cljs.core.first.call(null,seq__17283_17343__$1);add_class_BANG_.call(null,elem__$1,c_17349);
{
var G__17350 = cljs.core.next.call(null,seq__17283_17343__$1);
var G__17351 = null;
var G__17352 = 0;
var G__17353 = 0;
seq__17283_17333 = G__17350;
chunk__17284_17334 = G__17351;
count__17285_17335 = G__17352;
i__17286_17336 = G__17353;
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
var G__17332 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17332__delegate.call(this,elem,classes,more_classes);};
G__17332.cljs$lang$maxFixedArity = 2;
G__17332.cljs$lang$applyTo = (function (arglist__17354){
var elem = cljs.core.first(arglist__17354);
arglist__17354 = cljs.core.next(arglist__17354);
var classes = cljs.core.first(arglist__17354);
var more_classes = cljs.core.rest(arglist__17354);
return G__17332__delegate(elem,classes,more_classes);
});
G__17332.cljs$core$IFn$_invoke$arity$variadic = G__17332__delegate;
return G__17332;
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
var G__17355 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__17355;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17364 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17364))
{var class_list_17365 = temp__4090__auto___17364;class_list_17365.remove(class$__$1);
} else
{var class_name_17366 = elem__$1.className;var new_class_name_17367 = dommy.attrs.remove_class_str.call(null,class_name_17366,class$__$1);if((class_name_17366 === new_class_name_17367))
{} else
{elem__$1.className = new_class_name_17367;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__17368__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17360 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__17361 = null;var count__17362 = 0;var i__17363 = 0;while(true){
if((i__17363 < count__17362))
{var c = cljs.core._nth.call(null,chunk__17361,i__17363);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17369 = seq__17360;
var G__17370 = chunk__17361;
var G__17371 = count__17362;
var G__17372 = (i__17363 + 1);
seq__17360 = G__17369;
chunk__17361 = G__17370;
count__17362 = G__17371;
i__17363 = G__17372;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17360);if(temp__4092__auto__)
{var seq__17360__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17360__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17360__$1);{
var G__17373 = cljs.core.chunk_rest.call(null,seq__17360__$1);
var G__17374 = c__3844__auto__;
var G__17375 = cljs.core.count.call(null,c__3844__auto__);
var G__17376 = 0;
seq__17360 = G__17373;
chunk__17361 = G__17374;
count__17362 = G__17375;
i__17363 = G__17376;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17360__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17377 = cljs.core.next.call(null,seq__17360__$1);
var G__17378 = null;
var G__17379 = 0;
var G__17380 = 0;
seq__17360 = G__17377;
chunk__17361 = G__17378;
count__17362 = G__17379;
i__17363 = G__17380;
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
var G__17368 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17368__delegate.call(this,elem,class$,classes);};
G__17368.cljs$lang$maxFixedArity = 2;
G__17368.cljs$lang$applyTo = (function (arglist__17381){
var elem = cljs.core.first(arglist__17381);
arglist__17381 = cljs.core.next(arglist__17381);
var class$ = cljs.core.first(arglist__17381);
var classes = cljs.core.rest(arglist__17381);
return G__17368__delegate(elem,class$,classes);
});
G__17368.cljs$core$IFn$_invoke$arity$variadic = G__17368__delegate;
return G__17368;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17382 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17382))
{var class_list_17383 = temp__4090__auto___17382;class_list_17383.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__17386){var vec__17387 = p__17386;var k = cljs.core.nth.call(null,vec__17387,0,null);var v = cljs.core.nth.call(null,vec__17387,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__17394_17400 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17395_17401 = null;var count__17396_17402 = 0;var i__17397_17403 = 0;while(true){
if((i__17397_17403 < count__17396_17402))
{var vec__17398_17404 = cljs.core._nth.call(null,chunk__17395_17401,i__17397_17403);var k_17405 = cljs.core.nth.call(null,vec__17398_17404,0,null);var v_17406 = cljs.core.nth.call(null,vec__17398_17404,1,null);(style[cljs.core.name.call(null,k_17405)] = v_17406);
{
var G__17407 = seq__17394_17400;
var G__17408 = chunk__17395_17401;
var G__17409 = count__17396_17402;
var G__17410 = (i__17397_17403 + 1);
seq__17394_17400 = G__17407;
chunk__17395_17401 = G__17408;
count__17396_17402 = G__17409;
i__17397_17403 = G__17410;
continue;
}
} else
{var temp__4092__auto___17411 = cljs.core.seq.call(null,seq__17394_17400);if(temp__4092__auto___17411)
{var seq__17394_17412__$1 = temp__4092__auto___17411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17394_17412__$1))
{var c__3844__auto___17413 = cljs.core.chunk_first.call(null,seq__17394_17412__$1);{
var G__17414 = cljs.core.chunk_rest.call(null,seq__17394_17412__$1);
var G__17415 = c__3844__auto___17413;
var G__17416 = cljs.core.count.call(null,c__3844__auto___17413);
var G__17417 = 0;
seq__17394_17400 = G__17414;
chunk__17395_17401 = G__17415;
count__17396_17402 = G__17416;
i__17397_17403 = G__17417;
continue;
}
} else
{var vec__17399_17418 = cljs.core.first.call(null,seq__17394_17412__$1);var k_17419 = cljs.core.nth.call(null,vec__17399_17418,0,null);var v_17420 = cljs.core.nth.call(null,vec__17399_17418,1,null);(style[cljs.core.name.call(null,k_17419)] = v_17420);
{
var G__17421 = cljs.core.next.call(null,seq__17394_17412__$1);
var G__17422 = null;
var G__17423 = 0;
var G__17424 = 0;
seq__17394_17400 = G__17421;
chunk__17395_17401 = G__17422;
count__17396_17402 = G__17423;
i__17397_17403 = G__17424;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17425){
var elem = cljs.core.first(arglist__17425);
var kvs = cljs.core.rest(arglist__17425);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17432_17438 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17433_17439 = null;var count__17434_17440 = 0;var i__17435_17441 = 0;while(true){
if((i__17435_17441 < count__17434_17440))
{var vec__17436_17442 = cljs.core._nth.call(null,chunk__17433_17439,i__17435_17441);var k_17443 = cljs.core.nth.call(null,vec__17436_17442,0,null);var v_17444 = cljs.core.nth.call(null,vec__17436_17442,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17443,[cljs.core.str(v_17444),cljs.core.str("px")].join(''));
{
var G__17445 = seq__17432_17438;
var G__17446 = chunk__17433_17439;
var G__17447 = count__17434_17440;
var G__17448 = (i__17435_17441 + 1);
seq__17432_17438 = G__17445;
chunk__17433_17439 = G__17446;
count__17434_17440 = G__17447;
i__17435_17441 = G__17448;
continue;
}
} else
{var temp__4092__auto___17449 = cljs.core.seq.call(null,seq__17432_17438);if(temp__4092__auto___17449)
{var seq__17432_17450__$1 = temp__4092__auto___17449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17432_17450__$1))
{var c__3844__auto___17451 = cljs.core.chunk_first.call(null,seq__17432_17450__$1);{
var G__17452 = cljs.core.chunk_rest.call(null,seq__17432_17450__$1);
var G__17453 = c__3844__auto___17451;
var G__17454 = cljs.core.count.call(null,c__3844__auto___17451);
var G__17455 = 0;
seq__17432_17438 = G__17452;
chunk__17433_17439 = G__17453;
count__17434_17440 = G__17454;
i__17435_17441 = G__17455;
continue;
}
} else
{var vec__17437_17456 = cljs.core.first.call(null,seq__17432_17450__$1);var k_17457 = cljs.core.nth.call(null,vec__17437_17456,0,null);var v_17458 = cljs.core.nth.call(null,vec__17437_17456,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17457,[cljs.core.str(v_17458),cljs.core.str("px")].join(''));
{
var G__17459 = cljs.core.next.call(null,seq__17432_17450__$1);
var G__17460 = null;
var G__17461 = 0;
var G__17462 = 0;
seq__17432_17438 = G__17459;
chunk__17433_17439 = G__17460;
count__17434_17440 = G__17461;
i__17435_17441 = G__17462;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__17463){
var elem = cljs.core.first(arglist__17463);
var kvs = cljs.core.rest(arglist__17463);
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
{var G__17472 = dommy.template.__GT_node_like.call(null,elem);(G__17472[cljs.core.name.call(null,k)] = v);
return G__17472;
} else
{var G__17473 = dommy.template.__GT_node_like.call(null,elem);G__17473.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__17473;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__17480__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17474_17481 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__17475_17482 = null;var count__17476_17483 = 0;var i__17477_17484 = 0;while(true){
if((i__17477_17484 < count__17476_17483))
{var vec__17478_17485 = cljs.core._nth.call(null,chunk__17475_17482,i__17477_17484);var k_17486__$1 = cljs.core.nth.call(null,vec__17478_17485,0,null);var v_17487__$1 = cljs.core.nth.call(null,vec__17478_17485,1,null);set_attr_BANG_.call(null,elem__$1,k_17486__$1,v_17487__$1);
{
var G__17488 = seq__17474_17481;
var G__17489 = chunk__17475_17482;
var G__17490 = count__17476_17483;
var G__17491 = (i__17477_17484 + 1);
seq__17474_17481 = G__17488;
chunk__17475_17482 = G__17489;
count__17476_17483 = G__17490;
i__17477_17484 = G__17491;
continue;
}
} else
{var temp__4092__auto___17492 = cljs.core.seq.call(null,seq__17474_17481);if(temp__4092__auto___17492)
{var seq__17474_17493__$1 = temp__4092__auto___17492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17474_17493__$1))
{var c__3844__auto___17494 = cljs.core.chunk_first.call(null,seq__17474_17493__$1);{
var G__17495 = cljs.core.chunk_rest.call(null,seq__17474_17493__$1);
var G__17496 = c__3844__auto___17494;
var G__17497 = cljs.core.count.call(null,c__3844__auto___17494);
var G__17498 = 0;
seq__17474_17481 = G__17495;
chunk__17475_17482 = G__17496;
count__17476_17483 = G__17497;
i__17477_17484 = G__17498;
continue;
}
} else
{var vec__17479_17499 = cljs.core.first.call(null,seq__17474_17493__$1);var k_17500__$1 = cljs.core.nth.call(null,vec__17479_17499,0,null);var v_17501__$1 = cljs.core.nth.call(null,vec__17479_17499,1,null);set_attr_BANG_.call(null,elem__$1,k_17500__$1,v_17501__$1);
{
var G__17502 = cljs.core.next.call(null,seq__17474_17493__$1);
var G__17503 = null;
var G__17504 = 0;
var G__17505 = 0;
seq__17474_17481 = G__17502;
chunk__17475_17482 = G__17503;
count__17476_17483 = G__17504;
i__17477_17484 = G__17505;
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
var G__17480 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17480__delegate.call(this,elem,k,v,kvs);};
G__17480.cljs$lang$maxFixedArity = 3;
G__17480.cljs$lang$applyTo = (function (arglist__17506){
var elem = cljs.core.first(arglist__17506);
arglist__17506 = cljs.core.next(arglist__17506);
var k = cljs.core.first(arglist__17506);
arglist__17506 = cljs.core.next(arglist__17506);
var v = cljs.core.first(arglist__17506);
var kvs = cljs.core.rest(arglist__17506);
return G__17480__delegate(elem,k,v,kvs);
});
G__17480.cljs$core$IFn$_invoke$arity$variadic = G__17480__delegate;
return G__17480;
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
var G__17515__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17511_17516 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__17512_17517 = null;var count__17513_17518 = 0;var i__17514_17519 = 0;while(true){
if((i__17514_17519 < count__17513_17518))
{var k_17520__$1 = cljs.core._nth.call(null,chunk__17512_17517,i__17514_17519);remove_attr_BANG_.call(null,elem__$1,k_17520__$1);
{
var G__17521 = seq__17511_17516;
var G__17522 = chunk__17512_17517;
var G__17523 = count__17513_17518;
var G__17524 = (i__17514_17519 + 1);
seq__17511_17516 = G__17521;
chunk__17512_17517 = G__17522;
count__17513_17518 = G__17523;
i__17514_17519 = G__17524;
continue;
}
} else
{var temp__4092__auto___17525 = cljs.core.seq.call(null,seq__17511_17516);if(temp__4092__auto___17525)
{var seq__17511_17526__$1 = temp__4092__auto___17525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17511_17526__$1))
{var c__3844__auto___17527 = cljs.core.chunk_first.call(null,seq__17511_17526__$1);{
var G__17528 = cljs.core.chunk_rest.call(null,seq__17511_17526__$1);
var G__17529 = c__3844__auto___17527;
var G__17530 = cljs.core.count.call(null,c__3844__auto___17527);
var G__17531 = 0;
seq__17511_17516 = G__17528;
chunk__17512_17517 = G__17529;
count__17513_17518 = G__17530;
i__17514_17519 = G__17531;
continue;
}
} else
{var k_17532__$1 = cljs.core.first.call(null,seq__17511_17526__$1);remove_attr_BANG_.call(null,elem__$1,k_17532__$1);
{
var G__17533 = cljs.core.next.call(null,seq__17511_17526__$1);
var G__17534 = null;
var G__17535 = 0;
var G__17536 = 0;
seq__17511_17516 = G__17533;
chunk__17512_17517 = G__17534;
count__17513_17518 = G__17535;
i__17514_17519 = G__17536;
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
var G__17515 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17515__delegate.call(this,elem,k,ks);};
G__17515.cljs$lang$maxFixedArity = 2;
G__17515.cljs$lang$applyTo = (function (arglist__17537){
var elem = cljs.core.first(arglist__17537);
arglist__17537 = cljs.core.next(arglist__17537);
var k = cljs.core.first(arglist__17537);
var ks = cljs.core.rest(arglist__17537);
return G__17515__delegate(elem,k,ks);
});
G__17515.cljs$core$IFn$_invoke$arity$variadic = G__17515__delegate;
return G__17515;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17539 = dommy.template.__GT_node_like.call(null,elem);G__17539.style.display = ((show_QMARK_)?"":"none");
return G__17539;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17541 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17541,false);
return G__17541;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17543 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17543,true);
return G__17543;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17545 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17545["constructor"] = Object);
return G__17545;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
