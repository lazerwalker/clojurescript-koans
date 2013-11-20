// Compiled by ClojureScript 0.0-2014
goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.wait = (function wait(ms,func){return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){var vs = ((typeof v === 'string')?cljs.core.apply.call(null,cljs.core.str,v,text):v);console.log(vs);
return v;
};
var log = function (v,var_args){
var text = null;if (arguments.length > 1) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,v,text);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14974){
var v = cljs.core.first(arglist__14974);
var text = cljs.core.rest(arglist__14974);
return log__delegate(v,text);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
