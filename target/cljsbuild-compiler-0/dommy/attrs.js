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
var G__17244 = (i + class$.length);
start_from = G__17244;
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
{var temp__4090__auto___17269 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17269))
{var class_list_17270 = temp__4090__auto___17269;var seq__17257_17271 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17258_17272 = null;var count__17259_17273 = 0;var i__17260_17274 = 0;while(true){
if((i__17260_17274 < count__17259_17273))
{var class_17275 = cljs.core._nth.call(null,chunk__17258_17272,i__17260_17274);class_list_17270.add(class_17275);
{
var G__17276 = seq__17257_17271;
var G__17277 = chunk__17258_17272;
var G__17278 = count__17259_17273;
var G__17279 = (i__17260_17274 + 1);
seq__17257_17271 = G__17276;
chunk__17258_17272 = G__17277;
count__17259_17273 = G__17278;
i__17260_17274 = G__17279;
continue;
}
} else
{var temp__4092__auto___17280 = cljs.core.seq.call(null,seq__17257_17271);if(temp__4092__auto___17280)
{var seq__17257_17281__$1 = temp__4092__auto___17280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17257_17281__$1))
{var c__3844__auto___17282 = cljs.core.chunk_first.call(null,seq__17257_17281__$1);{
var G__17283 = cljs.core.chunk_rest.call(null,seq__17257_17281__$1);
var G__17284 = c__3844__auto___17282;
var G__17285 = cljs.core.count.call(null,c__3844__auto___17282);
var G__17286 = 0;
seq__17257_17271 = G__17283;
chunk__17258_17272 = G__17284;
count__17259_17273 = G__17285;
i__17260_17274 = G__17286;
continue;
}
} else
{var class_17287 = cljs.core.first.call(null,seq__17257_17281__$1);class_list_17270.add(class_17287);
{
var G__17288 = cljs.core.next.call(null,seq__17257_17281__$1);
var G__17289 = null;
var G__17290 = 0;
var G__17291 = 0;
seq__17257_17271 = G__17288;
chunk__17258_17272 = G__17289;
count__17259_17273 = G__17290;
i__17260_17274 = G__17291;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_17292 = elem__$1.className;var seq__17261_17293 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17262_17294 = null;var count__17263_17295 = 0;var i__17264_17296 = 0;while(true){
if((i__17264_17296 < count__17263_17295))
{var class_17297 = cljs.core._nth.call(null,chunk__17262_17294,i__17264_17296);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17292,class_17297)))
{} else
{elem__$1.className = (((class_name_17292 === ""))?class_17297:[cljs.core.str(class_name_17292),cljs.core.str(" "),cljs.core.str(class_17297)].join(''));
}
{
var G__17298 = seq__17261_17293;
var G__17299 = chunk__17262_17294;
var G__17300 = count__17263_17295;
var G__17301 = (i__17264_17296 + 1);
seq__17261_17293 = G__17298;
chunk__17262_17294 = G__17299;
count__17263_17295 = G__17300;
i__17264_17296 = G__17301;
continue;
}
} else
{var temp__4092__auto___17302 = cljs.core.seq.call(null,seq__17261_17293);if(temp__4092__auto___17302)
{var seq__17261_17303__$1 = temp__4092__auto___17302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17261_17303__$1))
{var c__3844__auto___17304 = cljs.core.chunk_first.call(null,seq__17261_17303__$1);{
var G__17305 = cljs.core.chunk_rest.call(null,seq__17261_17303__$1);
var G__17306 = c__3844__auto___17304;
var G__17307 = cljs.core.count.call(null,c__3844__auto___17304);
var G__17308 = 0;
seq__17261_17293 = G__17305;
chunk__17262_17294 = G__17306;
count__17263_17295 = G__17307;
i__17264_17296 = G__17308;
continue;
}
} else
{var class_17309 = cljs.core.first.call(null,seq__17261_17303__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17292,class_17309)))
{} else
{elem__$1.className = (((class_name_17292 === ""))?class_17309:[cljs.core.str(class_name_17292),cljs.core.str(" "),cljs.core.str(class_17309)].join(''));
}
{
var G__17310 = cljs.core.next.call(null,seq__17261_17303__$1);
var G__17311 = null;
var G__17312 = 0;
var G__17313 = 0;
seq__17261_17293 = G__17310;
chunk__17262_17294 = G__17311;
count__17263_17295 = G__17312;
i__17264_17296 = G__17313;
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
var G__17314__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17265_17315 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__17266_17316 = null;var count__17267_17317 = 0;var i__17268_17318 = 0;while(true){
if((i__17268_17318 < count__17267_17317))
{var c_17319 = cljs.core._nth.call(null,chunk__17266_17316,i__17268_17318);add_class_BANG_.call(null,elem__$1,c_17319);
{
var G__17320 = seq__17265_17315;
var G__17321 = chunk__17266_17316;
var G__17322 = count__17267_17317;
var G__17323 = (i__17268_17318 + 1);
seq__17265_17315 = G__17320;
chunk__17266_17316 = G__17321;
count__17267_17317 = G__17322;
i__17268_17318 = G__17323;
continue;
}
} else
{var temp__4092__auto___17324 = cljs.core.seq.call(null,seq__17265_17315);if(temp__4092__auto___17324)
{var seq__17265_17325__$1 = temp__4092__auto___17324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17265_17325__$1))
{var c__3844__auto___17326 = cljs.core.chunk_first.call(null,seq__17265_17325__$1);{
var G__17327 = cljs.core.chunk_rest.call(null,seq__17265_17325__$1);
var G__17328 = c__3844__auto___17326;
var G__17329 = cljs.core.count.call(null,c__3844__auto___17326);
var G__17330 = 0;
seq__17265_17315 = G__17327;
chunk__17266_17316 = G__17328;
count__17267_17317 = G__17329;
i__17268_17318 = G__17330;
continue;
}
} else
{var c_17331 = cljs.core.first.call(null,seq__17265_17325__$1);add_class_BANG_.call(null,elem__$1,c_17331);
{
var G__17332 = cljs.core.next.call(null,seq__17265_17325__$1);
var G__17333 = null;
var G__17334 = 0;
var G__17335 = 0;
seq__17265_17315 = G__17332;
chunk__17266_17316 = G__17333;
count__17267_17317 = G__17334;
i__17268_17318 = G__17335;
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
var G__17314 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17314__delegate.call(this,elem,classes,more_classes);};
G__17314.cljs$lang$maxFixedArity = 2;
G__17314.cljs$lang$applyTo = (function (arglist__17336){
var elem = cljs.core.first(arglist__17336);
arglist__17336 = cljs.core.next(arglist__17336);
var classes = cljs.core.first(arglist__17336);
var more_classes = cljs.core.rest(arglist__17336);
return G__17314__delegate(elem,classes,more_classes);
});
G__17314.cljs$core$IFn$_invoke$arity$variadic = G__17314__delegate;
return G__17314;
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
var G__17337 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__17337;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17346 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17346))
{var class_list_17347 = temp__4090__auto___17346;class_list_17347.remove(class$__$1);
} else
{var class_name_17348 = elem__$1.className;var new_class_name_17349 = dommy.attrs.remove_class_str.call(null,class_name_17348,class$__$1);if((class_name_17348 === new_class_name_17349))
{} else
{elem__$1.className = new_class_name_17349;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__17350__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17342 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__17343 = null;var count__17344 = 0;var i__17345 = 0;while(true){
if((i__17345 < count__17344))
{var c = cljs.core._nth.call(null,chunk__17343,i__17345);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17351 = seq__17342;
var G__17352 = chunk__17343;
var G__17353 = count__17344;
var G__17354 = (i__17345 + 1);
seq__17342 = G__17351;
chunk__17343 = G__17352;
count__17344 = G__17353;
i__17345 = G__17354;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17342);if(temp__4092__auto__)
{var seq__17342__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17342__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17342__$1);{
var G__17355 = cljs.core.chunk_rest.call(null,seq__17342__$1);
var G__17356 = c__3844__auto__;
var G__17357 = cljs.core.count.call(null,c__3844__auto__);
var G__17358 = 0;
seq__17342 = G__17355;
chunk__17343 = G__17356;
count__17344 = G__17357;
i__17345 = G__17358;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17342__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17359 = cljs.core.next.call(null,seq__17342__$1);
var G__17360 = null;
var G__17361 = 0;
var G__17362 = 0;
seq__17342 = G__17359;
chunk__17343 = G__17360;
count__17344 = G__17361;
i__17345 = G__17362;
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
var G__17350 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17350__delegate.call(this,elem,class$,classes);};
G__17350.cljs$lang$maxFixedArity = 2;
G__17350.cljs$lang$applyTo = (function (arglist__17363){
var elem = cljs.core.first(arglist__17363);
arglist__17363 = cljs.core.next(arglist__17363);
var class$ = cljs.core.first(arglist__17363);
var classes = cljs.core.rest(arglist__17363);
return G__17350__delegate(elem,class$,classes);
});
G__17350.cljs$core$IFn$_invoke$arity$variadic = G__17350__delegate;
return G__17350;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17364 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17364))
{var class_list_17365 = temp__4090__auto___17364;class_list_17365.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__17368){var vec__17369 = p__17368;var k = cljs.core.nth.call(null,vec__17369,0,null);var v = cljs.core.nth.call(null,vec__17369,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__17376_17382 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17377_17383 = null;var count__17378_17384 = 0;var i__17379_17385 = 0;while(true){
if((i__17379_17385 < count__17378_17384))
{var vec__17380_17386 = cljs.core._nth.call(null,chunk__17377_17383,i__17379_17385);var k_17387 = cljs.core.nth.call(null,vec__17380_17386,0,null);var v_17388 = cljs.core.nth.call(null,vec__17380_17386,1,null);(style[cljs.core.name.call(null,k_17387)] = v_17388);
{
var G__17389 = seq__17376_17382;
var G__17390 = chunk__17377_17383;
var G__17391 = count__17378_17384;
var G__17392 = (i__17379_17385 + 1);
seq__17376_17382 = G__17389;
chunk__17377_17383 = G__17390;
count__17378_17384 = G__17391;
i__17379_17385 = G__17392;
continue;
}
} else
{var temp__4092__auto___17393 = cljs.core.seq.call(null,seq__17376_17382);if(temp__4092__auto___17393)
{var seq__17376_17394__$1 = temp__4092__auto___17393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17376_17394__$1))
{var c__3844__auto___17395 = cljs.core.chunk_first.call(null,seq__17376_17394__$1);{
var G__17396 = cljs.core.chunk_rest.call(null,seq__17376_17394__$1);
var G__17397 = c__3844__auto___17395;
var G__17398 = cljs.core.count.call(null,c__3844__auto___17395);
var G__17399 = 0;
seq__17376_17382 = G__17396;
chunk__17377_17383 = G__17397;
count__17378_17384 = G__17398;
i__17379_17385 = G__17399;
continue;
}
} else
{var vec__17381_17400 = cljs.core.first.call(null,seq__17376_17394__$1);var k_17401 = cljs.core.nth.call(null,vec__17381_17400,0,null);var v_17402 = cljs.core.nth.call(null,vec__17381_17400,1,null);(style[cljs.core.name.call(null,k_17401)] = v_17402);
{
var G__17403 = cljs.core.next.call(null,seq__17376_17394__$1);
var G__17404 = null;
var G__17405 = 0;
var G__17406 = 0;
seq__17376_17382 = G__17403;
chunk__17377_17383 = G__17404;
count__17378_17384 = G__17405;
i__17379_17385 = G__17406;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17407){
var elem = cljs.core.first(arglist__17407);
var kvs = cljs.core.rest(arglist__17407);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17414_17420 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17415_17421 = null;var count__17416_17422 = 0;var i__17417_17423 = 0;while(true){
if((i__17417_17423 < count__17416_17422))
{var vec__17418_17424 = cljs.core._nth.call(null,chunk__17415_17421,i__17417_17423);var k_17425 = cljs.core.nth.call(null,vec__17418_17424,0,null);var v_17426 = cljs.core.nth.call(null,vec__17418_17424,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17425,[cljs.core.str(v_17426),cljs.core.str("px")].join(''));
{
var G__17427 = seq__17414_17420;
var G__17428 = chunk__17415_17421;
var G__17429 = count__17416_17422;
var G__17430 = (i__17417_17423 + 1);
seq__17414_17420 = G__17427;
chunk__17415_17421 = G__17428;
count__17416_17422 = G__17429;
i__17417_17423 = G__17430;
continue;
}
} else
{var temp__4092__auto___17431 = cljs.core.seq.call(null,seq__17414_17420);if(temp__4092__auto___17431)
{var seq__17414_17432__$1 = temp__4092__auto___17431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17414_17432__$1))
{var c__3844__auto___17433 = cljs.core.chunk_first.call(null,seq__17414_17432__$1);{
var G__17434 = cljs.core.chunk_rest.call(null,seq__17414_17432__$1);
var G__17435 = c__3844__auto___17433;
var G__17436 = cljs.core.count.call(null,c__3844__auto___17433);
var G__17437 = 0;
seq__17414_17420 = G__17434;
chunk__17415_17421 = G__17435;
count__17416_17422 = G__17436;
i__17417_17423 = G__17437;
continue;
}
} else
{var vec__17419_17438 = cljs.core.first.call(null,seq__17414_17432__$1);var k_17439 = cljs.core.nth.call(null,vec__17419_17438,0,null);var v_17440 = cljs.core.nth.call(null,vec__17419_17438,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17439,[cljs.core.str(v_17440),cljs.core.str("px")].join(''));
{
var G__17441 = cljs.core.next.call(null,seq__17414_17432__$1);
var G__17442 = null;
var G__17443 = 0;
var G__17444 = 0;
seq__17414_17420 = G__17441;
chunk__17415_17421 = G__17442;
count__17416_17422 = G__17443;
i__17417_17423 = G__17444;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__17445){
var elem = cljs.core.first(arglist__17445);
var kvs = cljs.core.rest(arglist__17445);
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
{var G__17454 = dommy.template.__GT_node_like.call(null,elem);(G__17454[cljs.core.name.call(null,k)] = v);
return G__17454;
} else
{var G__17455 = dommy.template.__GT_node_like.call(null,elem);G__17455.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__17455;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__17462__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17456_17463 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__17457_17464 = null;var count__17458_17465 = 0;var i__17459_17466 = 0;while(true){
if((i__17459_17466 < count__17458_17465))
{var vec__17460_17467 = cljs.core._nth.call(null,chunk__17457_17464,i__17459_17466);var k_17468__$1 = cljs.core.nth.call(null,vec__17460_17467,0,null);var v_17469__$1 = cljs.core.nth.call(null,vec__17460_17467,1,null);set_attr_BANG_.call(null,elem__$1,k_17468__$1,v_17469__$1);
{
var G__17470 = seq__17456_17463;
var G__17471 = chunk__17457_17464;
var G__17472 = count__17458_17465;
var G__17473 = (i__17459_17466 + 1);
seq__17456_17463 = G__17470;
chunk__17457_17464 = G__17471;
count__17458_17465 = G__17472;
i__17459_17466 = G__17473;
continue;
}
} else
{var temp__4092__auto___17474 = cljs.core.seq.call(null,seq__17456_17463);if(temp__4092__auto___17474)
{var seq__17456_17475__$1 = temp__4092__auto___17474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17456_17475__$1))
{var c__3844__auto___17476 = cljs.core.chunk_first.call(null,seq__17456_17475__$1);{
var G__17477 = cljs.core.chunk_rest.call(null,seq__17456_17475__$1);
var G__17478 = c__3844__auto___17476;
var G__17479 = cljs.core.count.call(null,c__3844__auto___17476);
var G__17480 = 0;
seq__17456_17463 = G__17477;
chunk__17457_17464 = G__17478;
count__17458_17465 = G__17479;
i__17459_17466 = G__17480;
continue;
}
} else
{var vec__17461_17481 = cljs.core.first.call(null,seq__17456_17475__$1);var k_17482__$1 = cljs.core.nth.call(null,vec__17461_17481,0,null);var v_17483__$1 = cljs.core.nth.call(null,vec__17461_17481,1,null);set_attr_BANG_.call(null,elem__$1,k_17482__$1,v_17483__$1);
{
var G__17484 = cljs.core.next.call(null,seq__17456_17475__$1);
var G__17485 = null;
var G__17486 = 0;
var G__17487 = 0;
seq__17456_17463 = G__17484;
chunk__17457_17464 = G__17485;
count__17458_17465 = G__17486;
i__17459_17466 = G__17487;
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
var G__17462 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17462__delegate.call(this,elem,k,v,kvs);};
G__17462.cljs$lang$maxFixedArity = 3;
G__17462.cljs$lang$applyTo = (function (arglist__17488){
var elem = cljs.core.first(arglist__17488);
arglist__17488 = cljs.core.next(arglist__17488);
var k = cljs.core.first(arglist__17488);
arglist__17488 = cljs.core.next(arglist__17488);
var v = cljs.core.first(arglist__17488);
var kvs = cljs.core.rest(arglist__17488);
return G__17462__delegate(elem,k,v,kvs);
});
G__17462.cljs$core$IFn$_invoke$arity$variadic = G__17462__delegate;
return G__17462;
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
var G__17497__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17493_17498 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__17494_17499 = null;var count__17495_17500 = 0;var i__17496_17501 = 0;while(true){
if((i__17496_17501 < count__17495_17500))
{var k_17502__$1 = cljs.core._nth.call(null,chunk__17494_17499,i__17496_17501);remove_attr_BANG_.call(null,elem__$1,k_17502__$1);
{
var G__17503 = seq__17493_17498;
var G__17504 = chunk__17494_17499;
var G__17505 = count__17495_17500;
var G__17506 = (i__17496_17501 + 1);
seq__17493_17498 = G__17503;
chunk__17494_17499 = G__17504;
count__17495_17500 = G__17505;
i__17496_17501 = G__17506;
continue;
}
} else
{var temp__4092__auto___17507 = cljs.core.seq.call(null,seq__17493_17498);if(temp__4092__auto___17507)
{var seq__17493_17508__$1 = temp__4092__auto___17507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17493_17508__$1))
{var c__3844__auto___17509 = cljs.core.chunk_first.call(null,seq__17493_17508__$1);{
var G__17510 = cljs.core.chunk_rest.call(null,seq__17493_17508__$1);
var G__17511 = c__3844__auto___17509;
var G__17512 = cljs.core.count.call(null,c__3844__auto___17509);
var G__17513 = 0;
seq__17493_17498 = G__17510;
chunk__17494_17499 = G__17511;
count__17495_17500 = G__17512;
i__17496_17501 = G__17513;
continue;
}
} else
{var k_17514__$1 = cljs.core.first.call(null,seq__17493_17508__$1);remove_attr_BANG_.call(null,elem__$1,k_17514__$1);
{
var G__17515 = cljs.core.next.call(null,seq__17493_17508__$1);
var G__17516 = null;
var G__17517 = 0;
var G__17518 = 0;
seq__17493_17498 = G__17515;
chunk__17494_17499 = G__17516;
count__17495_17500 = G__17517;
i__17496_17501 = G__17518;
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
var G__17497 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17497__delegate.call(this,elem,k,ks);};
G__17497.cljs$lang$maxFixedArity = 2;
G__17497.cljs$lang$applyTo = (function (arglist__17519){
var elem = cljs.core.first(arglist__17519);
arglist__17519 = cljs.core.next(arglist__17519);
var k = cljs.core.first(arglist__17519);
var ks = cljs.core.rest(arglist__17519);
return G__17497__delegate(elem,k,ks);
});
G__17497.cljs$core$IFn$_invoke$arity$variadic = G__17497__delegate;
return G__17497;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17521 = dommy.template.__GT_node_like.call(null,elem);G__17521.style.display = ((show_QMARK_)?"":"none");
return G__17521;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17523 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17523,false);
return G__17523;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17525 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17525,true);
return G__17525;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17527 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17527["constructor"] = Object);
return G__17527;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
