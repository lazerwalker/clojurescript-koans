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
var G__29148 = (i + class$.length);
start_from = G__29148;
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
{var temp__4090__auto___29173 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29173))
{var class_list_29174 = temp__4090__auto___29173;var seq__29161_29175 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__29162_29176 = null;var count__29163_29177 = 0;var i__29164_29178 = 0;while(true){
if((i__29164_29178 < count__29163_29177))
{var class_29179 = cljs.core._nth.call(null,chunk__29162_29176,i__29164_29178);class_list_29174.add(class_29179);
{
var G__29180 = seq__29161_29175;
var G__29181 = chunk__29162_29176;
var G__29182 = count__29163_29177;
var G__29183 = (i__29164_29178 + 1);
seq__29161_29175 = G__29180;
chunk__29162_29176 = G__29181;
count__29163_29177 = G__29182;
i__29164_29178 = G__29183;
continue;
}
} else
{var temp__4092__auto___29184 = cljs.core.seq.call(null,seq__29161_29175);if(temp__4092__auto___29184)
{var seq__29161_29185__$1 = temp__4092__auto___29184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29161_29185__$1))
{var c__3844__auto___29186 = cljs.core.chunk_first.call(null,seq__29161_29185__$1);{
var G__29187 = cljs.core.chunk_rest.call(null,seq__29161_29185__$1);
var G__29188 = c__3844__auto___29186;
var G__29189 = cljs.core.count.call(null,c__3844__auto___29186);
var G__29190 = 0;
seq__29161_29175 = G__29187;
chunk__29162_29176 = G__29188;
count__29163_29177 = G__29189;
i__29164_29178 = G__29190;
continue;
}
} else
{var class_29191 = cljs.core.first.call(null,seq__29161_29185__$1);class_list_29174.add(class_29191);
{
var G__29192 = cljs.core.next.call(null,seq__29161_29185__$1);
var G__29193 = null;
var G__29194 = 0;
var G__29195 = 0;
seq__29161_29175 = G__29192;
chunk__29162_29176 = G__29193;
count__29163_29177 = G__29194;
i__29164_29178 = G__29195;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_29196 = elem__$1.className;var seq__29165_29197 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__29166_29198 = null;var count__29167_29199 = 0;var i__29168_29200 = 0;while(true){
if((i__29168_29200 < count__29167_29199))
{var class_29201 = cljs.core._nth.call(null,chunk__29166_29198,i__29168_29200);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_29196,class_29201)))
{} else
{elem__$1.className = (((class_name_29196 === ""))?class_29201:[cljs.core.str(class_name_29196),cljs.core.str(" "),cljs.core.str(class_29201)].join(''));
}
{
var G__29202 = seq__29165_29197;
var G__29203 = chunk__29166_29198;
var G__29204 = count__29167_29199;
var G__29205 = (i__29168_29200 + 1);
seq__29165_29197 = G__29202;
chunk__29166_29198 = G__29203;
count__29167_29199 = G__29204;
i__29168_29200 = G__29205;
continue;
}
} else
{var temp__4092__auto___29206 = cljs.core.seq.call(null,seq__29165_29197);if(temp__4092__auto___29206)
{var seq__29165_29207__$1 = temp__4092__auto___29206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29165_29207__$1))
{var c__3844__auto___29208 = cljs.core.chunk_first.call(null,seq__29165_29207__$1);{
var G__29209 = cljs.core.chunk_rest.call(null,seq__29165_29207__$1);
var G__29210 = c__3844__auto___29208;
var G__29211 = cljs.core.count.call(null,c__3844__auto___29208);
var G__29212 = 0;
seq__29165_29197 = G__29209;
chunk__29166_29198 = G__29210;
count__29167_29199 = G__29211;
i__29168_29200 = G__29212;
continue;
}
} else
{var class_29213 = cljs.core.first.call(null,seq__29165_29207__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_29196,class_29213)))
{} else
{elem__$1.className = (((class_name_29196 === ""))?class_29213:[cljs.core.str(class_name_29196),cljs.core.str(" "),cljs.core.str(class_29213)].join(''));
}
{
var G__29214 = cljs.core.next.call(null,seq__29165_29207__$1);
var G__29215 = null;
var G__29216 = 0;
var G__29217 = 0;
seq__29165_29197 = G__29214;
chunk__29166_29198 = G__29215;
count__29167_29199 = G__29216;
i__29168_29200 = G__29217;
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
var G__29218__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29169_29219 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__29170_29220 = null;var count__29171_29221 = 0;var i__29172_29222 = 0;while(true){
if((i__29172_29222 < count__29171_29221))
{var c_29223 = cljs.core._nth.call(null,chunk__29170_29220,i__29172_29222);add_class_BANG_.call(null,elem__$1,c_29223);
{
var G__29224 = seq__29169_29219;
var G__29225 = chunk__29170_29220;
var G__29226 = count__29171_29221;
var G__29227 = (i__29172_29222 + 1);
seq__29169_29219 = G__29224;
chunk__29170_29220 = G__29225;
count__29171_29221 = G__29226;
i__29172_29222 = G__29227;
continue;
}
} else
{var temp__4092__auto___29228 = cljs.core.seq.call(null,seq__29169_29219);if(temp__4092__auto___29228)
{var seq__29169_29229__$1 = temp__4092__auto___29228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29169_29229__$1))
{var c__3844__auto___29230 = cljs.core.chunk_first.call(null,seq__29169_29229__$1);{
var G__29231 = cljs.core.chunk_rest.call(null,seq__29169_29229__$1);
var G__29232 = c__3844__auto___29230;
var G__29233 = cljs.core.count.call(null,c__3844__auto___29230);
var G__29234 = 0;
seq__29169_29219 = G__29231;
chunk__29170_29220 = G__29232;
count__29171_29221 = G__29233;
i__29172_29222 = G__29234;
continue;
}
} else
{var c_29235 = cljs.core.first.call(null,seq__29169_29229__$1);add_class_BANG_.call(null,elem__$1,c_29235);
{
var G__29236 = cljs.core.next.call(null,seq__29169_29229__$1);
var G__29237 = null;
var G__29238 = 0;
var G__29239 = 0;
seq__29169_29219 = G__29236;
chunk__29170_29220 = G__29237;
count__29171_29221 = G__29238;
i__29172_29222 = G__29239;
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
var G__29218 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29218__delegate.call(this,elem,classes,more_classes);};
G__29218.cljs$lang$maxFixedArity = 2;
G__29218.cljs$lang$applyTo = (function (arglist__29240){
var elem = cljs.core.first(arglist__29240);
arglist__29240 = cljs.core.next(arglist__29240);
var classes = cljs.core.first(arglist__29240);
var more_classes = cljs.core.rest(arglist__29240);
return G__29218__delegate(elem,classes,more_classes);
});
G__29218.cljs$core$IFn$_invoke$arity$variadic = G__29218__delegate;
return G__29218;
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
var G__29241 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__29241;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29250 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29250))
{var class_list_29251 = temp__4090__auto___29250;class_list_29251.remove(class$__$1);
} else
{var class_name_29252 = elem__$1.className;var new_class_name_29253 = dommy.attrs.remove_class_str.call(null,class_name_29252,class$__$1);if((class_name_29252 === new_class_name_29253))
{} else
{elem__$1.className = new_class_name_29253;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__29254__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29246 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__29247 = null;var count__29248 = 0;var i__29249 = 0;while(true){
if((i__29249 < count__29248))
{var c = cljs.core._nth.call(null,chunk__29247,i__29249);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29255 = seq__29246;
var G__29256 = chunk__29247;
var G__29257 = count__29248;
var G__29258 = (i__29249 + 1);
seq__29246 = G__29255;
chunk__29247 = G__29256;
count__29248 = G__29257;
i__29249 = G__29258;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29246);if(temp__4092__auto__)
{var seq__29246__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29246__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__29246__$1);{
var G__29259 = cljs.core.chunk_rest.call(null,seq__29246__$1);
var G__29260 = c__3844__auto__;
var G__29261 = cljs.core.count.call(null,c__3844__auto__);
var G__29262 = 0;
seq__29246 = G__29259;
chunk__29247 = G__29260;
count__29248 = G__29261;
i__29249 = G__29262;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__29246__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29263 = cljs.core.next.call(null,seq__29246__$1);
var G__29264 = null;
var G__29265 = 0;
var G__29266 = 0;
seq__29246 = G__29263;
chunk__29247 = G__29264;
count__29248 = G__29265;
i__29249 = G__29266;
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
var G__29254 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29254__delegate.call(this,elem,class$,classes);};
G__29254.cljs$lang$maxFixedArity = 2;
G__29254.cljs$lang$applyTo = (function (arglist__29267){
var elem = cljs.core.first(arglist__29267);
arglist__29267 = cljs.core.next(arglist__29267);
var class$ = cljs.core.first(arglist__29267);
var classes = cljs.core.rest(arglist__29267);
return G__29254__delegate(elem,class$,classes);
});
G__29254.cljs$core$IFn$_invoke$arity$variadic = G__29254__delegate;
return G__29254;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29268 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29268))
{var class_list_29269 = temp__4090__auto___29268;class_list_29269.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__29272){var vec__29273 = p__29272;var k = cljs.core.nth.call(null,vec__29273,0,null);var v = cljs.core.nth.call(null,vec__29273,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__29280_29286 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29281_29287 = null;var count__29282_29288 = 0;var i__29283_29289 = 0;while(true){
if((i__29283_29289 < count__29282_29288))
{var vec__29284_29290 = cljs.core._nth.call(null,chunk__29281_29287,i__29283_29289);var k_29291 = cljs.core.nth.call(null,vec__29284_29290,0,null);var v_29292 = cljs.core.nth.call(null,vec__29284_29290,1,null);(style[cljs.core.name.call(null,k_29291)] = v_29292);
{
var G__29293 = seq__29280_29286;
var G__29294 = chunk__29281_29287;
var G__29295 = count__29282_29288;
var G__29296 = (i__29283_29289 + 1);
seq__29280_29286 = G__29293;
chunk__29281_29287 = G__29294;
count__29282_29288 = G__29295;
i__29283_29289 = G__29296;
continue;
}
} else
{var temp__4092__auto___29297 = cljs.core.seq.call(null,seq__29280_29286);if(temp__4092__auto___29297)
{var seq__29280_29298__$1 = temp__4092__auto___29297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29280_29298__$1))
{var c__3844__auto___29299 = cljs.core.chunk_first.call(null,seq__29280_29298__$1);{
var G__29300 = cljs.core.chunk_rest.call(null,seq__29280_29298__$1);
var G__29301 = c__3844__auto___29299;
var G__29302 = cljs.core.count.call(null,c__3844__auto___29299);
var G__29303 = 0;
seq__29280_29286 = G__29300;
chunk__29281_29287 = G__29301;
count__29282_29288 = G__29302;
i__29283_29289 = G__29303;
continue;
}
} else
{var vec__29285_29304 = cljs.core.first.call(null,seq__29280_29298__$1);var k_29305 = cljs.core.nth.call(null,vec__29285_29304,0,null);var v_29306 = cljs.core.nth.call(null,vec__29285_29304,1,null);(style[cljs.core.name.call(null,k_29305)] = v_29306);
{
var G__29307 = cljs.core.next.call(null,seq__29280_29298__$1);
var G__29308 = null;
var G__29309 = 0;
var G__29310 = 0;
seq__29280_29286 = G__29307;
chunk__29281_29287 = G__29308;
count__29282_29288 = G__29309;
i__29283_29289 = G__29310;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29311){
var elem = cljs.core.first(arglist__29311);
var kvs = cljs.core.rest(arglist__29311);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29318_29324 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29319_29325 = null;var count__29320_29326 = 0;var i__29321_29327 = 0;while(true){
if((i__29321_29327 < count__29320_29326))
{var vec__29322_29328 = cljs.core._nth.call(null,chunk__29319_29325,i__29321_29327);var k_29329 = cljs.core.nth.call(null,vec__29322_29328,0,null);var v_29330 = cljs.core.nth.call(null,vec__29322_29328,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29329,[cljs.core.str(v_29330),cljs.core.str("px")].join(''));
{
var G__29331 = seq__29318_29324;
var G__29332 = chunk__29319_29325;
var G__29333 = count__29320_29326;
var G__29334 = (i__29321_29327 + 1);
seq__29318_29324 = G__29331;
chunk__29319_29325 = G__29332;
count__29320_29326 = G__29333;
i__29321_29327 = G__29334;
continue;
}
} else
{var temp__4092__auto___29335 = cljs.core.seq.call(null,seq__29318_29324);if(temp__4092__auto___29335)
{var seq__29318_29336__$1 = temp__4092__auto___29335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29318_29336__$1))
{var c__3844__auto___29337 = cljs.core.chunk_first.call(null,seq__29318_29336__$1);{
var G__29338 = cljs.core.chunk_rest.call(null,seq__29318_29336__$1);
var G__29339 = c__3844__auto___29337;
var G__29340 = cljs.core.count.call(null,c__3844__auto___29337);
var G__29341 = 0;
seq__29318_29324 = G__29338;
chunk__29319_29325 = G__29339;
count__29320_29326 = G__29340;
i__29321_29327 = G__29341;
continue;
}
} else
{var vec__29323_29342 = cljs.core.first.call(null,seq__29318_29336__$1);var k_29343 = cljs.core.nth.call(null,vec__29323_29342,0,null);var v_29344 = cljs.core.nth.call(null,vec__29323_29342,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29343,[cljs.core.str(v_29344),cljs.core.str("px")].join(''));
{
var G__29345 = cljs.core.next.call(null,seq__29318_29336__$1);
var G__29346 = null;
var G__29347 = 0;
var G__29348 = 0;
seq__29318_29324 = G__29345;
chunk__29319_29325 = G__29346;
count__29320_29326 = G__29347;
i__29321_29327 = G__29348;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__29349){
var elem = cljs.core.first(arglist__29349);
var kvs = cljs.core.rest(arglist__29349);
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
{var G__29358 = dommy.template.__GT_node_like.call(null,elem);(G__29358[cljs.core.name.call(null,k)] = v);
return G__29358;
} else
{var G__29359 = dommy.template.__GT_node_like.call(null,elem);G__29359.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__29359;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__29366__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29360_29367 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__29361_29368 = null;var count__29362_29369 = 0;var i__29363_29370 = 0;while(true){
if((i__29363_29370 < count__29362_29369))
{var vec__29364_29371 = cljs.core._nth.call(null,chunk__29361_29368,i__29363_29370);var k_29372__$1 = cljs.core.nth.call(null,vec__29364_29371,0,null);var v_29373__$1 = cljs.core.nth.call(null,vec__29364_29371,1,null);set_attr_BANG_.call(null,elem__$1,k_29372__$1,v_29373__$1);
{
var G__29374 = seq__29360_29367;
var G__29375 = chunk__29361_29368;
var G__29376 = count__29362_29369;
var G__29377 = (i__29363_29370 + 1);
seq__29360_29367 = G__29374;
chunk__29361_29368 = G__29375;
count__29362_29369 = G__29376;
i__29363_29370 = G__29377;
continue;
}
} else
{var temp__4092__auto___29378 = cljs.core.seq.call(null,seq__29360_29367);if(temp__4092__auto___29378)
{var seq__29360_29379__$1 = temp__4092__auto___29378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29360_29379__$1))
{var c__3844__auto___29380 = cljs.core.chunk_first.call(null,seq__29360_29379__$1);{
var G__29381 = cljs.core.chunk_rest.call(null,seq__29360_29379__$1);
var G__29382 = c__3844__auto___29380;
var G__29383 = cljs.core.count.call(null,c__3844__auto___29380);
var G__29384 = 0;
seq__29360_29367 = G__29381;
chunk__29361_29368 = G__29382;
count__29362_29369 = G__29383;
i__29363_29370 = G__29384;
continue;
}
} else
{var vec__29365_29385 = cljs.core.first.call(null,seq__29360_29379__$1);var k_29386__$1 = cljs.core.nth.call(null,vec__29365_29385,0,null);var v_29387__$1 = cljs.core.nth.call(null,vec__29365_29385,1,null);set_attr_BANG_.call(null,elem__$1,k_29386__$1,v_29387__$1);
{
var G__29388 = cljs.core.next.call(null,seq__29360_29379__$1);
var G__29389 = null;
var G__29390 = 0;
var G__29391 = 0;
seq__29360_29367 = G__29388;
chunk__29361_29368 = G__29389;
count__29362_29369 = G__29390;
i__29363_29370 = G__29391;
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
var G__29366 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29366__delegate.call(this,elem,k,v,kvs);};
G__29366.cljs$lang$maxFixedArity = 3;
G__29366.cljs$lang$applyTo = (function (arglist__29392){
var elem = cljs.core.first(arglist__29392);
arglist__29392 = cljs.core.next(arglist__29392);
var k = cljs.core.first(arglist__29392);
arglist__29392 = cljs.core.next(arglist__29392);
var v = cljs.core.first(arglist__29392);
var kvs = cljs.core.rest(arglist__29392);
return G__29366__delegate(elem,k,v,kvs);
});
G__29366.cljs$core$IFn$_invoke$arity$variadic = G__29366__delegate;
return G__29366;
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
var G__29401__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29397_29402 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__29398_29403 = null;var count__29399_29404 = 0;var i__29400_29405 = 0;while(true){
if((i__29400_29405 < count__29399_29404))
{var k_29406__$1 = cljs.core._nth.call(null,chunk__29398_29403,i__29400_29405);remove_attr_BANG_.call(null,elem__$1,k_29406__$1);
{
var G__29407 = seq__29397_29402;
var G__29408 = chunk__29398_29403;
var G__29409 = count__29399_29404;
var G__29410 = (i__29400_29405 + 1);
seq__29397_29402 = G__29407;
chunk__29398_29403 = G__29408;
count__29399_29404 = G__29409;
i__29400_29405 = G__29410;
continue;
}
} else
{var temp__4092__auto___29411 = cljs.core.seq.call(null,seq__29397_29402);if(temp__4092__auto___29411)
{var seq__29397_29412__$1 = temp__4092__auto___29411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29397_29412__$1))
{var c__3844__auto___29413 = cljs.core.chunk_first.call(null,seq__29397_29412__$1);{
var G__29414 = cljs.core.chunk_rest.call(null,seq__29397_29412__$1);
var G__29415 = c__3844__auto___29413;
var G__29416 = cljs.core.count.call(null,c__3844__auto___29413);
var G__29417 = 0;
seq__29397_29402 = G__29414;
chunk__29398_29403 = G__29415;
count__29399_29404 = G__29416;
i__29400_29405 = G__29417;
continue;
}
} else
{var k_29418__$1 = cljs.core.first.call(null,seq__29397_29412__$1);remove_attr_BANG_.call(null,elem__$1,k_29418__$1);
{
var G__29419 = cljs.core.next.call(null,seq__29397_29412__$1);
var G__29420 = null;
var G__29421 = 0;
var G__29422 = 0;
seq__29397_29402 = G__29419;
chunk__29398_29403 = G__29420;
count__29399_29404 = G__29421;
i__29400_29405 = G__29422;
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
var G__29401 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29401__delegate.call(this,elem,k,ks);};
G__29401.cljs$lang$maxFixedArity = 2;
G__29401.cljs$lang$applyTo = (function (arglist__29423){
var elem = cljs.core.first(arglist__29423);
arglist__29423 = cljs.core.next(arglist__29423);
var k = cljs.core.first(arglist__29423);
var ks = cljs.core.rest(arglist__29423);
return G__29401__delegate(elem,k,ks);
});
G__29401.cljs$core$IFn$_invoke$arity$variadic = G__29401__delegate;
return G__29401;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__29425 = dommy.template.__GT_node_like.call(null,elem);G__29425.style.display = ((show_QMARK_)?"":"none");
return G__29425;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__29427 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29427,false);
return G__29427;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__29429 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29429,true);
return G__29429;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__29431 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__29431["constructor"] = Object);
return G__29431;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map