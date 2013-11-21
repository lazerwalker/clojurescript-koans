// Compiled by ClojureScript 0.0-2014
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14017 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14017 = (function (f,fn_handler,meta14018){
this.f = f;
this.fn_handler = fn_handler;
this.meta14018 = meta14018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14017.cljs$lang$type = true;
cljs.core.async.t14017.cljs$lang$ctorStr = "cljs.core.async/t14017";
cljs.core.async.t14017.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14017");
});
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14019){var self__ = this;
var _14019__$1 = this;return self__.meta14018;
});
cljs.core.async.t14017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14019,meta14018__$1){var self__ = this;
var _14019__$1 = this;return (new cljs.core.async.t14017(self__.f,self__.fn_handler,meta14018__$1));
});
cljs.core.async.__GT_t14017 = (function __GT_t14017(f__$1,fn_handler__$1,meta14018){return (new cljs.core.async.t14017(f__$1,fn_handler__$1,meta14018));
});
}
return (new cljs.core.async.t14017(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14020 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14020);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14020);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3119__auto__ = ret;if(cljs.core.truth_(and__3119__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3119__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___14021 = n;var x_14022 = 0;while(true){
if((x_14022 < n__3891__auto___14021))
{(a[x_14022] = 0);
{
var G__14023 = (x_14022 + 1);
x_14022 = G__14023;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14024 = (i + 1);
i = G__14024;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14028 = (function (flag,alt_flag,meta14029){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14029 = meta14029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14028.cljs$lang$type = true;
cljs.core.async.t14028.cljs$lang$ctorStr = "cljs.core.async/t14028";
cljs.core.async.t14028.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14028");
});
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14030){var self__ = this;
var _14030__$1 = this;return self__.meta14029;
});
cljs.core.async.t14028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14030,meta14029__$1){var self__ = this;
var _14030__$1 = this;return (new cljs.core.async.t14028(self__.flag,self__.alt_flag,meta14029__$1));
});
cljs.core.async.__GT_t14028 = (function __GT_t14028(flag__$1,alt_flag__$1,meta14029){return (new cljs.core.async.t14028(flag__$1,alt_flag__$1,meta14029));
});
}
return (new cljs.core.async.t14028(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14034 = (function (cb,flag,alt_handler,meta14035){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14035 = meta14035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14034.cljs$lang$type = true;
cljs.core.async.t14034.cljs$lang$ctorStr = "cljs.core.async/t14034";
cljs.core.async.t14034.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14034");
});
cljs.core.async.t14034.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14036){var self__ = this;
var _14036__$1 = this;return self__.meta14035;
});
cljs.core.async.t14034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14036,meta14035__$1){var self__ = this;
var _14036__$1 = this;return (new cljs.core.async.t14034(self__.cb,self__.flag,self__.alt_handler,meta14035__$1));
});
cljs.core.async.__GT_t14034 = (function __GT_t14034(cb__$1,flag__$1,alt_handler__$1,meta14035){return (new cljs.core.async.t14034(cb__$1,flag__$1,alt_handler__$1,meta14035));
});
}
return (new cljs.core.async.t14034(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14037_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14037_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3128__auto__ = wport;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__14038 = (i + 1);
i = G__14038;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3128__auto__ = ret;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3119__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3119__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3119__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14039){var map__14041 = p__14039;var map__14041__$1 = ((cljs.core.seq_QMARK_.call(null,map__14041))?cljs.core.apply.call(null,cljs.core.hash_map,map__14041):map__14041);var opts = map__14041__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14039 = null;if (arguments.length > 1) {
  p__14039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14039);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14042){
var ports = cljs.core.first(arglist__14042);
var p__14039 = cljs.core.rest(arglist__14042);
return alts_BANG___delegate(ports,p__14039);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14050 = (function (ch,f,map_LT_,meta14051){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14051 = meta14051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14050.cljs$lang$type = true;
cljs.core.async.t14050.cljs$lang$ctorStr = "cljs.core.async/t14050";
cljs.core.async.t14050.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14050");
});
cljs.core.async.t14050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14053 = (function (fn1,_,meta14051,ch,f,map_LT_,meta14054){
this.fn1 = fn1;
this._ = _;
this.meta14051 = meta14051;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14054 = meta14054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14053.cljs$lang$type = true;
cljs.core.async.t14053.cljs$lang$ctorStr = "cljs.core.async/t14053";
cljs.core.async.t14053.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14053");
});
cljs.core.async.t14053.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14053.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14043_SHARP_){return f1.call(null,(((p1__14043_SHARP_ == null))?null:self__.f.call(null,p1__14043_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14055){var self__ = this;
var _14055__$1 = this;return self__.meta14054;
});
cljs.core.async.t14053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14055,meta14054__$1){var self__ = this;
var _14055__$1 = this;return (new cljs.core.async.t14053(self__.fn1,self__._,self__.meta14051,self__.ch,self__.f,self__.map_LT_,meta14054__$1));
});
cljs.core.async.__GT_t14053 = (function __GT_t14053(fn1__$1,___$2,meta14051__$1,ch__$2,f__$2,map_LT___$2,meta14054){return (new cljs.core.async.t14053(fn1__$1,___$2,meta14051__$1,ch__$2,f__$2,map_LT___$2,meta14054));
});
}
return (new cljs.core.async.t14053(fn1,___$1,self__.meta14051,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3119__auto__ = ret;if(cljs.core.truth_(and__3119__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3119__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14050.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14052){var self__ = this;
var _14052__$1 = this;return self__.meta14051;
});
cljs.core.async.t14050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14052,meta14051__$1){var self__ = this;
var _14052__$1 = this;return (new cljs.core.async.t14050(self__.ch,self__.f,self__.map_LT_,meta14051__$1));
});
cljs.core.async.__GT_t14050 = (function __GT_t14050(ch__$1,f__$1,map_LT___$1,meta14051){return (new cljs.core.async.t14050(ch__$1,f__$1,map_LT___$1,meta14051));
});
}
return (new cljs.core.async.t14050(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14059 = (function (ch,f,map_GT_,meta14060){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14060 = meta14060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14059.cljs$lang$type = true;
cljs.core.async.t14059.cljs$lang$ctorStr = "cljs.core.async/t14059";
cljs.core.async.t14059.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14059");
});
cljs.core.async.t14059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14059.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14061){var self__ = this;
var _14061__$1 = this;return self__.meta14060;
});
cljs.core.async.t14059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14061,meta14060__$1){var self__ = this;
var _14061__$1 = this;return (new cljs.core.async.t14059(self__.ch,self__.f,self__.map_GT_,meta14060__$1));
});
cljs.core.async.__GT_t14059 = (function __GT_t14059(ch__$1,f__$1,map_GT___$1,meta14060){return (new cljs.core.async.t14059(ch__$1,f__$1,map_GT___$1,meta14060));
});
}
return (new cljs.core.async.t14059(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14065 = (function (ch,p,filter_GT_,meta14066){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14066 = meta14066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14065.cljs$lang$type = true;
cljs.core.async.t14065.cljs$lang$ctorStr = "cljs.core.async/t14065";
cljs.core.async.t14065.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14065");
});
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14067){var self__ = this;
var _14067__$1 = this;return self__.meta14066;
});
cljs.core.async.t14065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14067,meta14066__$1){var self__ = this;
var _14067__$1 = this;return (new cljs.core.async.t14065(self__.ch,self__.p,self__.filter_GT_,meta14066__$1));
});
cljs.core.async.__GT_t14065 = (function __GT_t14065(ch__$1,p__$1,filter_GT___$1,meta14066){return (new cljs.core.async.t14065(ch__$1,p__$1,filter_GT___$1,meta14066));
});
}
return (new cljs.core.async.t14065(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5377__auto___14142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14125){var state_val_14126 = (state_14125[1]);if((state_val_14126 === 1))
{var state_14125__$1 = state_14125;var statearr_14127_14143 = state_14125__$1;(statearr_14127_14143[2] = null);
(statearr_14127_14143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 2))
{var state_14125__$1 = state_14125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14125__$1,4,ch);
} else
{if((state_val_14126 === 3))
{var inst_14123 = (state_14125[2]);var state_14125__$1 = state_14125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14125__$1,inst_14123);
} else
{if((state_val_14126 === 4))
{var inst_14107 = (state_14125[5]);var inst_14107__$1 = (state_14125[2]);var inst_14108 = (inst_14107__$1 == null);var state_14125__$1 = (function (){var statearr_14128 = state_14125;(statearr_14128[5] = inst_14107__$1);
return statearr_14128;
})();if(cljs.core.truth_(inst_14108))
{var statearr_14129_14144 = state_14125__$1;(statearr_14129_14144[1] = 5);
} else
{var statearr_14130_14145 = state_14125__$1;(statearr_14130_14145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 5))
{var inst_14110 = cljs.core.async.close_BANG_.call(null,out);var state_14125__$1 = state_14125;var statearr_14131_14146 = state_14125__$1;(statearr_14131_14146[2] = inst_14110);
(statearr_14131_14146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 6))
{var inst_14107 = (state_14125[5]);var inst_14112 = p.call(null,inst_14107);var state_14125__$1 = state_14125;if(cljs.core.truth_(inst_14112))
{var statearr_14132_14147 = state_14125__$1;(statearr_14132_14147[1] = 8);
} else
{var statearr_14133_14148 = state_14125__$1;(statearr_14133_14148[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 7))
{var inst_14121 = (state_14125[2]);var state_14125__$1 = state_14125;var statearr_14134_14149 = state_14125__$1;(statearr_14134_14149[2] = inst_14121);
(statearr_14134_14149[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 8))
{var inst_14107 = (state_14125[5]);var state_14125__$1 = state_14125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14125__$1,11,out,inst_14107);
} else
{if((state_val_14126 === 9))
{var state_14125__$1 = state_14125;var statearr_14135_14150 = state_14125__$1;(statearr_14135_14150[2] = null);
(statearr_14135_14150[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 10))
{var inst_14118 = (state_14125[2]);var state_14125__$1 = (function (){var statearr_14136 = state_14125;(statearr_14136[6] = inst_14118);
return statearr_14136;
})();var statearr_14137_14151 = state_14125__$1;(statearr_14137_14151[2] = null);
(statearr_14137_14151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14126 === 11))
{var inst_14115 = (state_14125[2]);var state_14125__$1 = state_14125;var statearr_14138_14152 = state_14125__$1;(statearr_14138_14152[2] = inst_14115);
(statearr_14138_14152[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_14140 = (new Array(7));(statearr_14140[0] = state_machine__5328__auto__);
(statearr_14140[1] = 1);
return statearr_14140;
});
var state_machine__5328__auto____1 = (function (state_14125){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14125);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14125){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14141 = f__5378__auto__.call(null);(statearr_14141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14142);
return statearr_14141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14300){var state_val_14301 = (state_14300[1]);if((state_val_14301 === 1))
{var state_14300__$1 = state_14300;var statearr_14302_14335 = state_14300__$1;(statearr_14302_14335[2] = null);
(statearr_14302_14335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 2))
{var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14300__$1,4,in$);
} else
{if((state_val_14301 === 3))
{var inst_14298 = (state_14300[2]);var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14300__$1,inst_14298);
} else
{if((state_val_14301 === 4))
{var inst_14246 = (state_14300[5]);var inst_14246__$1 = (state_14300[2]);var inst_14247 = (inst_14246__$1 == null);var state_14300__$1 = (function (){var statearr_14303 = state_14300;(statearr_14303[5] = inst_14246__$1);
return statearr_14303;
})();if(cljs.core.truth_(inst_14247))
{var statearr_14304_14336 = state_14300__$1;(statearr_14304_14336[1] = 5);
} else
{var statearr_14305_14337 = state_14300__$1;(statearr_14305_14337[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 5))
{var inst_14249 = cljs.core.async.close_BANG_.call(null,out);var state_14300__$1 = state_14300;var statearr_14306_14338 = state_14300__$1;(statearr_14306_14338[2] = inst_14249);
(statearr_14306_14338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 6))
{var inst_14246 = (state_14300[5]);var inst_14251 = f.call(null,inst_14246);var inst_14256 = cljs.core.seq.call(null,inst_14251);var inst_14257 = inst_14256;var inst_14258 = null;var inst_14259 = 0;var inst_14260 = 0;var state_14300__$1 = (function (){var statearr_14307 = state_14300;(statearr_14307[6] = inst_14259);
(statearr_14307[7] = inst_14258);
(statearr_14307[8] = inst_14257);
(statearr_14307[9] = inst_14260);
return statearr_14307;
})();var statearr_14308_14339 = state_14300__$1;(statearr_14308_14339[2] = null);
(statearr_14308_14339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 7))
{var inst_14296 = (state_14300[2]);var state_14300__$1 = state_14300;var statearr_14309_14340 = state_14300__$1;(statearr_14309_14340[2] = inst_14296);
(statearr_14309_14340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 8))
{var inst_14259 = (state_14300[6]);var inst_14260 = (state_14300[9]);var inst_14262 = (inst_14260 < inst_14259);var inst_14263 = inst_14262;var state_14300__$1 = state_14300;if(cljs.core.truth_(inst_14263))
{var statearr_14310_14341 = state_14300__$1;(statearr_14310_14341[1] = 10);
} else
{var statearr_14311_14342 = state_14300__$1;(statearr_14311_14342[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 9))
{var inst_14293 = (state_14300[2]);var state_14300__$1 = (function (){var statearr_14312 = state_14300;(statearr_14312[10] = inst_14293);
return statearr_14312;
})();var statearr_14313_14343 = state_14300__$1;(statearr_14313_14343[2] = null);
(statearr_14313_14343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 10))
{var inst_14258 = (state_14300[7]);var inst_14260 = (state_14300[9]);var inst_14265 = cljs.core._nth.call(null,inst_14258,inst_14260);var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14300__$1,13,out,inst_14265);
} else
{if((state_val_14301 === 11))
{var inst_14257 = (state_14300[8]);var inst_14271 = (state_14300[11]);var inst_14271__$1 = cljs.core.seq.call(null,inst_14257);var state_14300__$1 = (function (){var statearr_14317 = state_14300;(statearr_14317[11] = inst_14271__$1);
return statearr_14317;
})();if(inst_14271__$1)
{var statearr_14318_14344 = state_14300__$1;(statearr_14318_14344[1] = 14);
} else
{var statearr_14319_14345 = state_14300__$1;(statearr_14319_14345[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 12))
{var inst_14291 = (state_14300[2]);var state_14300__$1 = state_14300;var statearr_14320_14346 = state_14300__$1;(statearr_14320_14346[2] = inst_14291);
(statearr_14320_14346[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 13))
{var inst_14259 = (state_14300[6]);var inst_14258 = (state_14300[7]);var inst_14257 = (state_14300[8]);var inst_14260 = (state_14300[9]);var inst_14267 = (state_14300[2]);var inst_14268 = (inst_14260 + 1);var tmp14314 = inst_14259;var tmp14315 = inst_14258;var tmp14316 = inst_14257;var inst_14257__$1 = tmp14316;var inst_14258__$1 = tmp14315;var inst_14259__$1 = tmp14314;var inst_14260__$1 = inst_14268;var state_14300__$1 = (function (){var statearr_14321 = state_14300;(statearr_14321[6] = inst_14259__$1);
(statearr_14321[7] = inst_14258__$1);
(statearr_14321[8] = inst_14257__$1);
(statearr_14321[12] = inst_14267);
(statearr_14321[9] = inst_14260__$1);
return statearr_14321;
})();var statearr_14322_14347 = state_14300__$1;(statearr_14322_14347[2] = null);
(statearr_14322_14347[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 14))
{var inst_14271 = (state_14300[11]);var inst_14273 = cljs.core.chunked_seq_QMARK_.call(null,inst_14271);var state_14300__$1 = state_14300;if(inst_14273)
{var statearr_14323_14348 = state_14300__$1;(statearr_14323_14348[1] = 17);
} else
{var statearr_14324_14349 = state_14300__$1;(statearr_14324_14349[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 15))
{var state_14300__$1 = state_14300;var statearr_14325_14350 = state_14300__$1;(statearr_14325_14350[2] = null);
(statearr_14325_14350[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 16))
{var inst_14289 = (state_14300[2]);var state_14300__$1 = state_14300;var statearr_14326_14351 = state_14300__$1;(statearr_14326_14351[2] = inst_14289);
(statearr_14326_14351[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 17))
{var inst_14271 = (state_14300[11]);var inst_14275 = cljs.core.chunk_first.call(null,inst_14271);var inst_14276 = cljs.core.chunk_rest.call(null,inst_14271);var inst_14277 = cljs.core.count.call(null,inst_14275);var inst_14257 = inst_14276;var inst_14258 = inst_14275;var inst_14259 = inst_14277;var inst_14260 = 0;var state_14300__$1 = (function (){var statearr_14327 = state_14300;(statearr_14327[6] = inst_14259);
(statearr_14327[7] = inst_14258);
(statearr_14327[8] = inst_14257);
(statearr_14327[9] = inst_14260);
return statearr_14327;
})();var statearr_14328_14352 = state_14300__$1;(statearr_14328_14352[2] = null);
(statearr_14328_14352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 18))
{var inst_14271 = (state_14300[11]);var inst_14280 = cljs.core.first.call(null,inst_14271);var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14300__$1,20,out,inst_14280);
} else
{if((state_val_14301 === 19))
{var inst_14286 = (state_14300[2]);var state_14300__$1 = state_14300;var statearr_14329_14353 = state_14300__$1;(statearr_14329_14353[2] = inst_14286);
(statearr_14329_14353[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14301 === 20))
{var inst_14271 = (state_14300[11]);var inst_14282 = (state_14300[2]);var inst_14283 = cljs.core.next.call(null,inst_14271);var inst_14257 = inst_14283;var inst_14258 = null;var inst_14259 = 0;var inst_14260 = 0;var state_14300__$1 = (function (){var statearr_14330 = state_14300;(statearr_14330[13] = inst_14282);
(statearr_14330[6] = inst_14259);
(statearr_14330[7] = inst_14258);
(statearr_14330[8] = inst_14257);
(statearr_14330[9] = inst_14260);
return statearr_14330;
})();var statearr_14331_14354 = state_14300__$1;(statearr_14331_14354[2] = null);
(statearr_14331_14354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_14333 = (new Array(14));(statearr_14333[0] = state_machine__5328__auto__);
(statearr_14333[1] = 1);
return statearr_14333;
});
var state_machine__5328__auto____1 = (function (state_14300){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14300){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14334 = f__5378__auto__.call(null);(statearr_14334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5377__auto___14427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14410){var state_val_14411 = (state_14410[1]);if((state_val_14411 === 1))
{var state_14410__$1 = state_14410;var statearr_14412_14428 = state_14410__$1;(statearr_14412_14428[2] = null);
(statearr_14412_14428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 2))
{var state_14410__$1 = state_14410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14410__$1,4,from);
} else
{if((state_val_14411 === 3))
{var inst_14408 = (state_14410[2]);var state_14410__$1 = state_14410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14410__$1,inst_14408);
} else
{if((state_val_14411 === 4))
{var inst_14393 = (state_14410[5]);var inst_14393__$1 = (state_14410[2]);var inst_14394 = (inst_14393__$1 == null);var state_14410__$1 = (function (){var statearr_14413 = state_14410;(statearr_14413[5] = inst_14393__$1);
return statearr_14413;
})();if(cljs.core.truth_(inst_14394))
{var statearr_14414_14429 = state_14410__$1;(statearr_14414_14429[1] = 5);
} else
{var statearr_14415_14430 = state_14410__$1;(statearr_14415_14430[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 5))
{var state_14410__$1 = state_14410;if(cljs.core.truth_(close_QMARK_))
{var statearr_14416_14431 = state_14410__$1;(statearr_14416_14431[1] = 8);
} else
{var statearr_14417_14432 = state_14410__$1;(statearr_14417_14432[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 6))
{var inst_14393 = (state_14410[5]);var state_14410__$1 = state_14410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14410__$1,11,to,inst_14393);
} else
{if((state_val_14411 === 7))
{var inst_14406 = (state_14410[2]);var state_14410__$1 = state_14410;var statearr_14418_14433 = state_14410__$1;(statearr_14418_14433[2] = inst_14406);
(statearr_14418_14433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 8))
{var inst_14397 = cljs.core.async.close_BANG_.call(null,to);var state_14410__$1 = state_14410;var statearr_14419_14434 = state_14410__$1;(statearr_14419_14434[2] = inst_14397);
(statearr_14419_14434[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 9))
{var state_14410__$1 = state_14410;var statearr_14420_14435 = state_14410__$1;(statearr_14420_14435[2] = null);
(statearr_14420_14435[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 10))
{var inst_14400 = (state_14410[2]);var state_14410__$1 = state_14410;var statearr_14421_14436 = state_14410__$1;(statearr_14421_14436[2] = inst_14400);
(statearr_14421_14436[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14411 === 11))
{var inst_14403 = (state_14410[2]);var state_14410__$1 = (function (){var statearr_14422 = state_14410;(statearr_14422[6] = inst_14403);
return statearr_14422;
})();var statearr_14423_14437 = state_14410__$1;(statearr_14423_14437[2] = null);
(statearr_14423_14437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_14425 = (new Array(7));(statearr_14425[0] = state_machine__5328__auto__);
(statearr_14425[1] = 1);
return statearr_14425;
});
var state_machine__5328__auto____1 = (function (state_14410){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14410);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14410){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14426 = f__5378__auto__.call(null);(statearr_14426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14427);
return statearr_14426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5377__auto___14516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14498){var state_val_14499 = (state_14498[1]);if((state_val_14499 === 1))
{var state_14498__$1 = state_14498;var statearr_14500_14517 = state_14498__$1;(statearr_14500_14517[2] = null);
(statearr_14500_14517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 2))
{var state_14498__$1 = state_14498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14498__$1,4,ch);
} else
{if((state_val_14499 === 3))
{var inst_14496 = (state_14498[2]);var state_14498__$1 = state_14498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14498__$1,inst_14496);
} else
{if((state_val_14499 === 4))
{var inst_14479 = (state_14498[5]);var inst_14479__$1 = (state_14498[2]);var inst_14480 = (inst_14479__$1 == null);var state_14498__$1 = (function (){var statearr_14501 = state_14498;(statearr_14501[5] = inst_14479__$1);
return statearr_14501;
})();if(cljs.core.truth_(inst_14480))
{var statearr_14502_14518 = state_14498__$1;(statearr_14502_14518[1] = 5);
} else
{var statearr_14503_14519 = state_14498__$1;(statearr_14503_14519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 5))
{var inst_14482 = cljs.core.async.close_BANG_.call(null,tc);var inst_14483 = cljs.core.async.close_BANG_.call(null,fc);var state_14498__$1 = (function (){var statearr_14504 = state_14498;(statearr_14504[6] = inst_14482);
return statearr_14504;
})();var statearr_14505_14520 = state_14498__$1;(statearr_14505_14520[2] = inst_14483);
(statearr_14505_14520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 6))
{var inst_14479 = (state_14498[5]);var inst_14485 = p.call(null,inst_14479);var state_14498__$1 = state_14498;if(cljs.core.truth_(inst_14485))
{var statearr_14506_14521 = state_14498__$1;(statearr_14506_14521[1] = 9);
} else
{var statearr_14507_14522 = state_14498__$1;(statearr_14507_14522[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 7))
{var inst_14494 = (state_14498[2]);var state_14498__$1 = state_14498;var statearr_14508_14523 = state_14498__$1;(statearr_14508_14523[2] = inst_14494);
(statearr_14508_14523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 8))
{var inst_14491 = (state_14498[2]);var state_14498__$1 = (function (){var statearr_14509 = state_14498;(statearr_14509[7] = inst_14491);
return statearr_14509;
})();var statearr_14510_14524 = state_14498__$1;(statearr_14510_14524[2] = null);
(statearr_14510_14524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 9))
{var state_14498__$1 = state_14498;var statearr_14511_14525 = state_14498__$1;(statearr_14511_14525[2] = tc);
(statearr_14511_14525[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 10))
{var state_14498__$1 = state_14498;var statearr_14512_14526 = state_14498__$1;(statearr_14512_14526[2] = fc);
(statearr_14512_14526[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 11))
{var inst_14479 = (state_14498[5]);var inst_14489 = (state_14498[2]);var state_14498__$1 = state_14498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14498__$1,8,inst_14489,inst_14479);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_14514 = (new Array(8));(statearr_14514[0] = state_machine__5328__auto__);
(statearr_14514[1] = 1);
return statearr_14514;
});
var state_machine__5328__auto____1 = (function (state_14498){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14498){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14515 = f__5378__auto__.call(null);(statearr_14515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14516);
return statearr_14515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14569){var state_val_14570 = (state_14569[1]);if((state_val_14570 === 7))
{var inst_14565 = (state_14569[2]);var state_14569__$1 = state_14569;var statearr_14571_14583 = state_14569__$1;(statearr_14571_14583[2] = inst_14565);
(statearr_14571_14583[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 6))
{var inst_14558 = (state_14569[5]);var inst_14555 = (state_14569[6]);var inst_14562 = f.call(null,inst_14555,inst_14558);var inst_14555__$1 = inst_14562;var state_14569__$1 = (function (){var statearr_14572 = state_14569;(statearr_14572[6] = inst_14555__$1);
return statearr_14572;
})();var statearr_14573_14584 = state_14569__$1;(statearr_14573_14584[2] = null);
(statearr_14573_14584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 5))
{var inst_14555 = (state_14569[6]);var state_14569__$1 = state_14569;var statearr_14574_14585 = state_14569__$1;(statearr_14574_14585[2] = inst_14555);
(statearr_14574_14585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 4))
{var inst_14558 = (state_14569[5]);var inst_14558__$1 = (state_14569[2]);var inst_14559 = (inst_14558__$1 == null);var state_14569__$1 = (function (){var statearr_14575 = state_14569;(statearr_14575[5] = inst_14558__$1);
return statearr_14575;
})();if(cljs.core.truth_(inst_14559))
{var statearr_14576_14586 = state_14569__$1;(statearr_14576_14586[1] = 5);
} else
{var statearr_14577_14587 = state_14569__$1;(statearr_14577_14587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14570 === 3))
{var inst_14567 = (state_14569[2]);var state_14569__$1 = state_14569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14569__$1,inst_14567);
} else
{if((state_val_14570 === 2))
{var state_14569__$1 = state_14569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14569__$1,4,ch);
} else
{if((state_val_14570 === 1))
{var inst_14555 = init;var state_14569__$1 = (function (){var statearr_14578 = state_14569;(statearr_14578[6] = inst_14555);
return statearr_14578;
})();var statearr_14579_14588 = state_14569__$1;(statearr_14579_14588[2] = null);
(statearr_14579_14588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_14581 = (new Array(7));(statearr_14581[0] = state_machine__5328__auto__);
(statearr_14581[1] = 1);
return statearr_14581;
});
var state_machine__5328__auto____1 = (function (state_14569){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14569){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14582 = f__5378__auto__.call(null);(statearr_14582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14646){var state_val_14647 = (state_14646[1]);if((state_val_14647 === 1))
{var inst_14626 = cljs.core.seq.call(null,coll);var inst_14627 = inst_14626;var state_14646__$1 = (function (){var statearr_14648 = state_14646;(statearr_14648[5] = inst_14627);
return statearr_14648;
})();var statearr_14649_14663 = state_14646__$1;(statearr_14649_14663[2] = null);
(statearr_14649_14663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 2))
{var inst_14627 = (state_14646[5]);var state_14646__$1 = state_14646;if(cljs.core.truth_(inst_14627))
{var statearr_14650_14664 = state_14646__$1;(statearr_14650_14664[1] = 4);
} else
{var statearr_14651_14665 = state_14646__$1;(statearr_14651_14665[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 3))
{var inst_14644 = (state_14646[2]);var state_14646__$1 = state_14646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14646__$1,inst_14644);
} else
{if((state_val_14647 === 4))
{var inst_14627 = (state_14646[5]);var inst_14630 = cljs.core.first.call(null,inst_14627);var state_14646__$1 = state_14646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14646__$1,7,ch,inst_14630);
} else
{if((state_val_14647 === 5))
{var state_14646__$1 = state_14646;if(cljs.core.truth_(close_QMARK_))
{var statearr_14652_14666 = state_14646__$1;(statearr_14652_14666[1] = 8);
} else
{var statearr_14653_14667 = state_14646__$1;(statearr_14653_14667[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 6))
{var inst_14642 = (state_14646[2]);var state_14646__$1 = state_14646;var statearr_14654_14668 = state_14646__$1;(statearr_14654_14668[2] = inst_14642);
(statearr_14654_14668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 7))
{var inst_14627 = (state_14646[5]);var inst_14632 = (state_14646[2]);var inst_14633 = cljs.core.next.call(null,inst_14627);var inst_14627__$1 = inst_14633;var state_14646__$1 = (function (){var statearr_14655 = state_14646;(statearr_14655[6] = inst_14632);
(statearr_14655[5] = inst_14627__$1);
return statearr_14655;
})();var statearr_14656_14669 = state_14646__$1;(statearr_14656_14669[2] = null);
(statearr_14656_14669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 8))
{var inst_14637 = cljs.core.async.close_BANG_.call(null,ch);var state_14646__$1 = state_14646;var statearr_14657_14670 = state_14646__$1;(statearr_14657_14670[2] = inst_14637);
(statearr_14657_14670[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 9))
{var state_14646__$1 = state_14646;var statearr_14658_14671 = state_14646__$1;(statearr_14658_14671[2] = null);
(statearr_14658_14671[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14647 === 10))
{var inst_14640 = (state_14646[2]);var state_14646__$1 = state_14646;var statearr_14659_14672 = state_14646__$1;(statearr_14659_14672[2] = inst_14640);
(statearr_14659_14672[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_14661 = (new Array(7));(statearr_14661[0] = state_machine__5328__auto__);
(statearr_14661[1] = 1);
return statearr_14661;
});
var state_machine__5328__auto____1 = (function (state_14646){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14646){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14662 = f__5378__auto__.call(null);(statearr_14662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3119__auto__ = _;if(and__3119__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3119__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3723__auto__ = (((_ == null))?null:_);return (function (){var or__3128__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14885 = (function (cs,ch,mult,meta14886){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14886 = meta14886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14885.cljs$lang$type = true;
cljs.core.async.t14885.cljs$lang$ctorStr = "cljs.core.async/t14885";
cljs.core.async.t14885.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14885");
});})(cs))
;
cljs.core.async.t14885.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14885.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14885.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14885.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14885.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14887){var self__ = this;
var _14887__$1 = this;return self__.meta14886;
});})(cs))
;
cljs.core.async.t14885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14887,meta14886__$1){var self__ = this;
var _14887__$1 = this;return (new cljs.core.async.t14885(self__.cs,self__.ch,self__.mult,meta14886__$1));
});})(cs))
;
cljs.core.async.__GT_t14885 = ((function (cs){
return (function __GT_t14885(cs__$1,ch__$1,mult__$1,meta14886){return (new cljs.core.async.t14885(cs__$1,ch__$1,mult__$1,meta14886));
});})(cs))
;
}
return (new cljs.core.async.t14885(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5377__auto___15097 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15015){var state_val_15016 = (state_15015[1]);if((state_val_15016 === 32))
{try{var inst_14966 = (state_15015[5]);var inst_14890 = (state_15015[6]);var inst_14972 = cljs.core.async.put_BANG_.call(null,inst_14966,inst_14890,done);var state_15015__$1 = state_15015;var statearr_15019_15098 = state_15015__$1;(statearr_15019_15098[2] = inst_14972);
(statearr_15019_15098[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15017){if((e15017 instanceof Object))
{var ex__5321__auto__ = e15017;var statearr_15018_15099 = state_15015;(statearr_15018_15099[1] = 31);
(statearr_15018_15099[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15017;
} else
{return null;
}
}
}} else
{if((state_val_15016 === 1))
{var state_15015__$1 = state_15015;var statearr_15020_15100 = state_15015__$1;(statearr_15020_15100[2] = null);
(statearr_15020_15100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 33))
{var inst_14978 = (state_15015[7]);var inst_14980 = cljs.core.chunked_seq_QMARK_.call(null,inst_14978);var state_15015__$1 = state_15015;if(inst_14980)
{var statearr_15021_15101 = state_15015__$1;(statearr_15021_15101[1] = 36);
} else
{var statearr_15022_15102 = state_15015__$1;(statearr_15022_15102[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 2))
{var state_15015__$1 = state_15015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15015__$1,4,ch);
} else
{if((state_val_15016 === 34))
{var state_15015__$1 = state_15015;var statearr_15023_15103 = state_15015__$1;(statearr_15023_15103[2] = null);
(statearr_15023_15103[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 3))
{var inst_15013 = (state_15015[2]);var state_15015__$1 = state_15015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15015__$1,inst_15013);
} else
{if((state_val_15016 === 35))
{var inst_15002 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15024_15104 = state_15015__$1;(statearr_15024_15104[2] = inst_15002);
(statearr_15024_15104[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 4))
{var inst_14890 = (state_15015[6]);var inst_14890__$1 = (state_15015[2]);var inst_14891 = (inst_14890__$1 == null);var state_15015__$1 = (function (){var statearr_15025 = state_15015;(statearr_15025[6] = inst_14890__$1);
return statearr_15025;
})();if(cljs.core.truth_(inst_14891))
{var statearr_15026_15105 = state_15015__$1;(statearr_15026_15105[1] = 5);
} else
{var statearr_15027_15106 = state_15015__$1;(statearr_15027_15106[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 36))
{var inst_14978 = (state_15015[7]);var inst_14982 = cljs.core.chunk_first.call(null,inst_14978);var inst_14983 = cljs.core.chunk_rest.call(null,inst_14978);var inst_14984 = cljs.core.count.call(null,inst_14982);var inst_14958 = inst_14983;var inst_14959 = inst_14982;var inst_14960 = inst_14984;var inst_14961 = 0;var state_15015__$1 = (function (){var statearr_15028 = state_15015;(statearr_15028[8] = inst_14960);
(statearr_15028[9] = inst_14961);
(statearr_15028[10] = inst_14959);
(statearr_15028[11] = inst_14958);
return statearr_15028;
})();var statearr_15029_15107 = state_15015__$1;(statearr_15029_15107[2] = null);
(statearr_15029_15107[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 5))
{var inst_14897 = cljs.core.deref.call(null,cs);var inst_14898 = cljs.core.seq.call(null,inst_14897);var inst_14899 = inst_14898;var inst_14900 = null;var inst_14901 = 0;var inst_14902 = 0;var state_15015__$1 = (function (){var statearr_15030 = state_15015;(statearr_15030[12] = inst_14900);
(statearr_15030[13] = inst_14901);
(statearr_15030[14] = inst_14902);
(statearr_15030[15] = inst_14899);
return statearr_15030;
})();var statearr_15031_15108 = state_15015__$1;(statearr_15031_15108[2] = null);
(statearr_15031_15108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 37))
{var inst_14978 = (state_15015[7]);var inst_14987 = cljs.core.first.call(null,inst_14978);var state_15015__$1 = (function (){var statearr_15032 = state_15015;(statearr_15032[16] = inst_14987);
return statearr_15032;
})();var statearr_15033_15109 = state_15015__$1;(statearr_15033_15109[2] = null);
(statearr_15033_15109[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 6))
{var inst_14949 = cljs.core.deref.call(null,cs);var inst_14950 = cljs.core.keys.call(null,inst_14949);var inst_14951 = cljs.core.count.call(null,inst_14950);var inst_14952 = cljs.core.reset_BANG_.call(null,dctr,inst_14951);var inst_14957 = cljs.core.seq.call(null,inst_14950);var inst_14958 = inst_14957;var inst_14959 = null;var inst_14960 = 0;var inst_14961 = 0;var state_15015__$1 = (function (){var statearr_15034 = state_15015;(statearr_15034[8] = inst_14960);
(statearr_15034[9] = inst_14961);
(statearr_15034[10] = inst_14959);
(statearr_15034[11] = inst_14958);
(statearr_15034[17] = inst_14952);
return statearr_15034;
})();var statearr_15035_15110 = state_15015__$1;(statearr_15035_15110[2] = null);
(statearr_15035_15110[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 38))
{var inst_14999 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15036_15111 = state_15015__$1;(statearr_15036_15111[2] = inst_14999);
(statearr_15036_15111[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 7))
{var inst_15011 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15037_15112 = state_15015__$1;(statearr_15037_15112[2] = inst_15011);
(statearr_15037_15112[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 39))
{var inst_14978 = (state_15015[7]);var inst_14995 = (state_15015[2]);var inst_14996 = cljs.core.next.call(null,inst_14978);var inst_14958 = inst_14996;var inst_14959 = null;var inst_14960 = 0;var inst_14961 = 0;var state_15015__$1 = (function (){var statearr_15038 = state_15015;(statearr_15038[8] = inst_14960);
(statearr_15038[9] = inst_14961);
(statearr_15038[10] = inst_14959);
(statearr_15038[11] = inst_14958);
(statearr_15038[18] = inst_14995);
return statearr_15038;
})();var statearr_15039_15113 = state_15015__$1;(statearr_15039_15113[2] = null);
(statearr_15039_15113[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 8))
{var inst_14901 = (state_15015[13]);var inst_14902 = (state_15015[14]);var inst_14904 = (inst_14902 < inst_14901);var inst_14905 = inst_14904;var state_15015__$1 = state_15015;if(cljs.core.truth_(inst_14905))
{var statearr_15040_15114 = state_15015__$1;(statearr_15040_15114[1] = 10);
} else
{var statearr_15041_15115 = state_15015__$1;(statearr_15041_15115[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 40))
{var inst_14987 = (state_15015[16]);var inst_14988 = (state_15015[2]);var inst_14989 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14990 = cljs.core.async.untap_STAR_.call(null,m,inst_14987);var state_15015__$1 = (function (){var statearr_15042 = state_15015;(statearr_15042[19] = inst_14988);
(statearr_15042[20] = inst_14989);
return statearr_15042;
})();var statearr_15043_15116 = state_15015__$1;(statearr_15043_15116[2] = inst_14990);
(statearr_15043_15116[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 9))
{var inst_14947 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15044_15117 = state_15015__$1;(statearr_15044_15117[2] = inst_14947);
(statearr_15044_15117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 41))
{try{var inst_14890 = (state_15015[6]);var inst_14987 = (state_15015[16]);var inst_14993 = cljs.core.async.put_BANG_.call(null,inst_14987,inst_14890,done);var state_15015__$1 = state_15015;var statearr_15047_15118 = state_15015__$1;(statearr_15047_15118[2] = inst_14993);
(statearr_15047_15118[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15045){if((e15045 instanceof Object))
{var ex__5321__auto__ = e15045;var statearr_15046_15119 = state_15015;(statearr_15046_15119[1] = 40);
(statearr_15046_15119[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15045;
} else
{return null;
}
}
}} else
{if((state_val_15016 === 10))
{var inst_14900 = (state_15015[12]);var inst_14902 = (state_15015[14]);var inst_14908 = cljs.core._nth.call(null,inst_14900,inst_14902);var inst_14909 = cljs.core.nth.call(null,inst_14908,0,null);var inst_14910 = cljs.core.nth.call(null,inst_14908,1,null);var state_15015__$1 = (function (){var statearr_15048 = state_15015;(statearr_15048[21] = inst_14909);
return statearr_15048;
})();if(cljs.core.truth_(inst_14910))
{var statearr_15049_15120 = state_15015__$1;(statearr_15049_15120[1] = 13);
} else
{var statearr_15050_15121 = state_15015__$1;(statearr_15050_15121[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 42))
{var inst_15008 = (state_15015[2]);var state_15015__$1 = (function (){var statearr_15051 = state_15015;(statearr_15051[22] = inst_15008);
return statearr_15051;
})();var statearr_15052_15122 = state_15015__$1;(statearr_15052_15122[2] = null);
(statearr_15052_15122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 11))
{var inst_14919 = (state_15015[23]);var inst_14899 = (state_15015[15]);var inst_14919__$1 = cljs.core.seq.call(null,inst_14899);var state_15015__$1 = (function (){var statearr_15053 = state_15015;(statearr_15053[23] = inst_14919__$1);
return statearr_15053;
})();if(inst_14919__$1)
{var statearr_15054_15123 = state_15015__$1;(statearr_15054_15123[1] = 16);
} else
{var statearr_15055_15124 = state_15015__$1;(statearr_15055_15124[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 12))
{var inst_14945 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15056_15125 = state_15015__$1;(statearr_15056_15125[2] = inst_14945);
(statearr_15056_15125[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 13))
{var inst_14909 = (state_15015[21]);var inst_14912 = cljs.core.async.close_BANG_.call(null,inst_14909);var state_15015__$1 = state_15015;var statearr_15060_15126 = state_15015__$1;(statearr_15060_15126[2] = inst_14912);
(statearr_15060_15126[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 14))
{var state_15015__$1 = state_15015;var statearr_15061_15127 = state_15015__$1;(statearr_15061_15127[2] = null);
(statearr_15061_15127[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 15))
{var inst_14900 = (state_15015[12]);var inst_14901 = (state_15015[13]);var inst_14902 = (state_15015[14]);var inst_14899 = (state_15015[15]);var inst_14915 = (state_15015[2]);var inst_14916 = (inst_14902 + 1);var tmp15057 = inst_14900;var tmp15058 = inst_14901;var tmp15059 = inst_14899;var inst_14899__$1 = tmp15059;var inst_14900__$1 = tmp15057;var inst_14901__$1 = tmp15058;var inst_14902__$1 = inst_14916;var state_15015__$1 = (function (){var statearr_15062 = state_15015;(statearr_15062[24] = inst_14915);
(statearr_15062[12] = inst_14900__$1);
(statearr_15062[13] = inst_14901__$1);
(statearr_15062[14] = inst_14902__$1);
(statearr_15062[15] = inst_14899__$1);
return statearr_15062;
})();var statearr_15063_15128 = state_15015__$1;(statearr_15063_15128[2] = null);
(statearr_15063_15128[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 16))
{var inst_14919 = (state_15015[23]);var inst_14921 = cljs.core.chunked_seq_QMARK_.call(null,inst_14919);var state_15015__$1 = state_15015;if(inst_14921)
{var statearr_15064_15129 = state_15015__$1;(statearr_15064_15129[1] = 19);
} else
{var statearr_15065_15130 = state_15015__$1;(statearr_15065_15130[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 17))
{var state_15015__$1 = state_15015;var statearr_15066_15131 = state_15015__$1;(statearr_15066_15131[2] = null);
(statearr_15066_15131[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 18))
{var inst_14943 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15067_15132 = state_15015__$1;(statearr_15067_15132[2] = inst_14943);
(statearr_15067_15132[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 19))
{var inst_14919 = (state_15015[23]);var inst_14923 = cljs.core.chunk_first.call(null,inst_14919);var inst_14924 = cljs.core.chunk_rest.call(null,inst_14919);var inst_14925 = cljs.core.count.call(null,inst_14923);var inst_14899 = inst_14924;var inst_14900 = inst_14923;var inst_14901 = inst_14925;var inst_14902 = 0;var state_15015__$1 = (function (){var statearr_15068 = state_15015;(statearr_15068[12] = inst_14900);
(statearr_15068[13] = inst_14901);
(statearr_15068[14] = inst_14902);
(statearr_15068[15] = inst_14899);
return statearr_15068;
})();var statearr_15069_15133 = state_15015__$1;(statearr_15069_15133[2] = null);
(statearr_15069_15133[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 20))
{var inst_14919 = (state_15015[23]);var inst_14929 = cljs.core.first.call(null,inst_14919);var inst_14930 = cljs.core.nth.call(null,inst_14929,0,null);var inst_14931 = cljs.core.nth.call(null,inst_14929,1,null);var state_15015__$1 = (function (){var statearr_15070 = state_15015;(statearr_15070[25] = inst_14930);
return statearr_15070;
})();if(cljs.core.truth_(inst_14931))
{var statearr_15071_15134 = state_15015__$1;(statearr_15071_15134[1] = 22);
} else
{var statearr_15072_15135 = state_15015__$1;(statearr_15072_15135[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 21))
{var inst_14940 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15073_15136 = state_15015__$1;(statearr_15073_15136[2] = inst_14940);
(statearr_15073_15136[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 22))
{var inst_14930 = (state_15015[25]);var inst_14933 = cljs.core.async.close_BANG_.call(null,inst_14930);var state_15015__$1 = state_15015;var statearr_15074_15137 = state_15015__$1;(statearr_15074_15137[2] = inst_14933);
(statearr_15074_15137[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 23))
{var state_15015__$1 = state_15015;var statearr_15075_15138 = state_15015__$1;(statearr_15075_15138[2] = null);
(statearr_15075_15138[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 24))
{var inst_14919 = (state_15015[23]);var inst_14936 = (state_15015[2]);var inst_14937 = cljs.core.next.call(null,inst_14919);var inst_14899 = inst_14937;var inst_14900 = null;var inst_14901 = 0;var inst_14902 = 0;var state_15015__$1 = (function (){var statearr_15076 = state_15015;(statearr_15076[26] = inst_14936);
(statearr_15076[12] = inst_14900);
(statearr_15076[13] = inst_14901);
(statearr_15076[14] = inst_14902);
(statearr_15076[15] = inst_14899);
return statearr_15076;
})();var statearr_15077_15139 = state_15015__$1;(statearr_15077_15139[2] = null);
(statearr_15077_15139[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 25))
{var inst_14960 = (state_15015[8]);var inst_14961 = (state_15015[9]);var inst_14963 = (inst_14961 < inst_14960);var inst_14964 = inst_14963;var state_15015__$1 = state_15015;if(cljs.core.truth_(inst_14964))
{var statearr_15078_15140 = state_15015__$1;(statearr_15078_15140[1] = 27);
} else
{var statearr_15079_15141 = state_15015__$1;(statearr_15079_15141[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 26))
{var inst_15006 = (state_15015[2]);var state_15015__$1 = (function (){var statearr_15080 = state_15015;(statearr_15080[27] = inst_15006);
return statearr_15080;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15015__$1,42,dchan);
} else
{if((state_val_15016 === 27))
{var inst_14961 = (state_15015[9]);var inst_14959 = (state_15015[10]);var inst_14966 = cljs.core._nth.call(null,inst_14959,inst_14961);var state_15015__$1 = (function (){var statearr_15081 = state_15015;(statearr_15081[5] = inst_14966);
return statearr_15081;
})();var statearr_15082_15142 = state_15015__$1;(statearr_15082_15142[2] = null);
(statearr_15082_15142[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 28))
{var inst_14958 = (state_15015[11]);var inst_14978 = (state_15015[7]);var inst_14978__$1 = cljs.core.seq.call(null,inst_14958);var state_15015__$1 = (function (){var statearr_15086 = state_15015;(statearr_15086[7] = inst_14978__$1);
return statearr_15086;
})();if(inst_14978__$1)
{var statearr_15087_15143 = state_15015__$1;(statearr_15087_15143[1] = 33);
} else
{var statearr_15088_15144 = state_15015__$1;(statearr_15088_15144[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 29))
{var inst_15004 = (state_15015[2]);var state_15015__$1 = state_15015;var statearr_15089_15145 = state_15015__$1;(statearr_15089_15145[2] = inst_15004);
(statearr_15089_15145[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 30))
{var inst_14960 = (state_15015[8]);var inst_14961 = (state_15015[9]);var inst_14959 = (state_15015[10]);var inst_14958 = (state_15015[11]);var inst_14974 = (state_15015[2]);var inst_14975 = (inst_14961 + 1);var tmp15083 = inst_14960;var tmp15084 = inst_14959;var tmp15085 = inst_14958;var inst_14958__$1 = tmp15085;var inst_14959__$1 = tmp15084;var inst_14960__$1 = tmp15083;var inst_14961__$1 = inst_14975;var state_15015__$1 = (function (){var statearr_15090 = state_15015;(statearr_15090[8] = inst_14960__$1);
(statearr_15090[28] = inst_14974);
(statearr_15090[9] = inst_14961__$1);
(statearr_15090[10] = inst_14959__$1);
(statearr_15090[11] = inst_14958__$1);
return statearr_15090;
})();var statearr_15091_15146 = state_15015__$1;(statearr_15091_15146[2] = null);
(statearr_15091_15146[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15016 === 31))
{var inst_14966 = (state_15015[5]);var inst_14967 = (state_15015[2]);var inst_14968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14969 = cljs.core.async.untap_STAR_.call(null,m,inst_14966);var state_15015__$1 = (function (){var statearr_15092 = state_15015;(statearr_15092[29] = inst_14967);
(statearr_15092[30] = inst_14968);
return statearr_15092;
})();var statearr_15093_15147 = state_15015__$1;(statearr_15093_15147[2] = inst_14969);
(statearr_15093_15147[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_15095 = (new Array(31));(statearr_15095[0] = state_machine__5328__auto__);
(statearr_15095[1] = 1);
return statearr_15095;
});
var state_machine__5328__auto____1 = (function (state_15015){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15015);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15015){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15096 = f__5378__auto__.call(null);(statearr_15096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15097);
return statearr_15096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3119__auto__ = m;if(and__3119__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3119__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3723__auto__ = (((m == null))?null:m);return (function (){var or__3128__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15253 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15254){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15254 = meta15254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15253.cljs$lang$type = true;
cljs.core.async.t15253.cljs$lang$ctorStr = "cljs.core.async/t15253";
cljs.core.async.t15253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15255){var self__ = this;
var _15255__$1 = this;return self__.meta15254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15255,meta15254__$1){var self__ = this;
var _15255__$1 = this;return (new cljs.core.async.t15253(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15254){return (new cljs.core.async.t15253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15253(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5377__auto___15358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15320){var state_val_15321 = (state_15320[1]);if((state_val_15321 === 1))
{var inst_15259 = (state_15320[5]);var inst_15259__$1 = calc_state.call(null);var inst_15260 = cljs.core.seq_QMARK_.call(null,inst_15259__$1);var state_15320__$1 = (function (){var statearr_15322 = state_15320;(statearr_15322[5] = inst_15259__$1);
return statearr_15322;
})();if(inst_15260)
{var statearr_15323_15359 = state_15320__$1;(statearr_15323_15359[1] = 2);
} else
{var statearr_15324_15360 = state_15320__$1;(statearr_15324_15360[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 2))
{var inst_15259 = (state_15320[5]);var inst_15262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15259);var state_15320__$1 = state_15320;var statearr_15325_15361 = state_15320__$1;(statearr_15325_15361[2] = inst_15262);
(statearr_15325_15361[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 3))
{var inst_15259 = (state_15320[5]);var state_15320__$1 = state_15320;var statearr_15326_15362 = state_15320__$1;(statearr_15326_15362[2] = inst_15259);
(statearr_15326_15362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 4))
{var inst_15259 = (state_15320[5]);var inst_15265 = (state_15320[2]);var inst_15266 = cljs.core.get.call(null,inst_15265,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15267 = cljs.core.get.call(null,inst_15265,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15268 = cljs.core.get.call(null,inst_15265,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15269 = inst_15259;var state_15320__$1 = (function (){var statearr_15327 = state_15320;(statearr_15327[6] = inst_15269);
(statearr_15327[7] = inst_15267);
(statearr_15327[8] = inst_15268);
(statearr_15327[9] = inst_15266);
return statearr_15327;
})();var statearr_15328_15363 = state_15320__$1;(statearr_15328_15363[2] = null);
(statearr_15328_15363[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 5))
{var inst_15269 = (state_15320[6]);var inst_15272 = cljs.core.seq_QMARK_.call(null,inst_15269);var state_15320__$1 = state_15320;if(inst_15272)
{var statearr_15329_15364 = state_15320__$1;(statearr_15329_15364[1] = 7);
} else
{var statearr_15330_15365 = state_15320__$1;(statearr_15330_15365[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 6))
{var inst_15318 = (state_15320[2]);var state_15320__$1 = state_15320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15320__$1,inst_15318);
} else
{if((state_val_15321 === 7))
{var inst_15269 = (state_15320[6]);var inst_15274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15269);var state_15320__$1 = state_15320;var statearr_15331_15366 = state_15320__$1;(statearr_15331_15366[2] = inst_15274);
(statearr_15331_15366[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 8))
{var inst_15269 = (state_15320[6]);var state_15320__$1 = state_15320;var statearr_15332_15367 = state_15320__$1;(statearr_15332_15367[2] = inst_15269);
(statearr_15332_15367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 9))
{var inst_15277 = (state_15320[10]);var inst_15277__$1 = (state_15320[2]);var inst_15278 = cljs.core.get.call(null,inst_15277__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15279 = cljs.core.get.call(null,inst_15277__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15280 = cljs.core.get.call(null,inst_15277__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15320__$1 = (function (){var statearr_15333 = state_15320;(statearr_15333[11] = inst_15280);
(statearr_15333[12] = inst_15279);
(statearr_15333[10] = inst_15277__$1);
return statearr_15333;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15320__$1,10,inst_15278);
} else
{if((state_val_15321 === 10))
{var inst_15284 = (state_15320[13]);var inst_15285 = (state_15320[14]);var inst_15283 = (state_15320[2]);var inst_15284__$1 = cljs.core.nth.call(null,inst_15283,0,null);var inst_15285__$1 = cljs.core.nth.call(null,inst_15283,1,null);var inst_15286 = (inst_15284__$1 == null);var inst_15287 = cljs.core._EQ_.call(null,inst_15285__$1,change);var inst_15288 = (inst_15286) || (inst_15287);var state_15320__$1 = (function (){var statearr_15334 = state_15320;(statearr_15334[13] = inst_15284__$1);
(statearr_15334[14] = inst_15285__$1);
return statearr_15334;
})();if(cljs.core.truth_(inst_15288))
{var statearr_15335_15368 = state_15320__$1;(statearr_15335_15368[1] = 11);
} else
{var statearr_15336_15369 = state_15320__$1;(statearr_15336_15369[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 11))
{var inst_15284 = (state_15320[13]);var inst_15290 = (inst_15284 == null);var state_15320__$1 = state_15320;if(cljs.core.truth_(inst_15290))
{var statearr_15337_15370 = state_15320__$1;(statearr_15337_15370[1] = 14);
} else
{var statearr_15338_15371 = state_15320__$1;(statearr_15338_15371[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 12))
{var inst_15280 = (state_15320[11]);var inst_15299 = (state_15320[15]);var inst_15285 = (state_15320[14]);var inst_15299__$1 = inst_15280.call(null,inst_15285);var state_15320__$1 = (function (){var statearr_15339 = state_15320;(statearr_15339[15] = inst_15299__$1);
return statearr_15339;
})();if(cljs.core.truth_(inst_15299__$1))
{var statearr_15340_15372 = state_15320__$1;(statearr_15340_15372[1] = 17);
} else
{var statearr_15341_15373 = state_15320__$1;(statearr_15341_15373[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 13))
{var inst_15316 = (state_15320[2]);var state_15320__$1 = state_15320;var statearr_15342_15374 = state_15320__$1;(statearr_15342_15374[2] = inst_15316);
(statearr_15342_15374[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 14))
{var inst_15285 = (state_15320[14]);var inst_15292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15285);var state_15320__$1 = state_15320;var statearr_15343_15375 = state_15320__$1;(statearr_15343_15375[2] = inst_15292);
(statearr_15343_15375[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 15))
{var state_15320__$1 = state_15320;var statearr_15344_15376 = state_15320__$1;(statearr_15344_15376[2] = null);
(statearr_15344_15376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 16))
{var inst_15295 = (state_15320[2]);var inst_15296 = calc_state.call(null);var inst_15269 = inst_15296;var state_15320__$1 = (function (){var statearr_15345 = state_15320;(statearr_15345[16] = inst_15295);
(statearr_15345[6] = inst_15269);
return statearr_15345;
})();var statearr_15346_15377 = state_15320__$1;(statearr_15346_15377[2] = null);
(statearr_15346_15377[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 17))
{var inst_15299 = (state_15320[15]);var state_15320__$1 = state_15320;var statearr_15347_15378 = state_15320__$1;(statearr_15347_15378[2] = inst_15299);
(statearr_15347_15378[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 18))
{var inst_15280 = (state_15320[11]);var inst_15279 = (state_15320[12]);var inst_15285 = (state_15320[14]);var inst_15302 = cljs.core.empty_QMARK_.call(null,inst_15280);var inst_15303 = inst_15279.call(null,inst_15285);var inst_15304 = cljs.core.not.call(null,inst_15303);var inst_15305 = (inst_15302) && (inst_15304);var state_15320__$1 = state_15320;var statearr_15348_15379 = state_15320__$1;(statearr_15348_15379[2] = inst_15305);
(statearr_15348_15379[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 19))
{var inst_15307 = (state_15320[2]);var state_15320__$1 = state_15320;if(cljs.core.truth_(inst_15307))
{var statearr_15349_15380 = state_15320__$1;(statearr_15349_15380[1] = 20);
} else
{var statearr_15350_15381 = state_15320__$1;(statearr_15350_15381[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 20))
{var inst_15284 = (state_15320[13]);var state_15320__$1 = state_15320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15320__$1,23,out,inst_15284);
} else
{if((state_val_15321 === 21))
{var state_15320__$1 = state_15320;var statearr_15351_15382 = state_15320__$1;(statearr_15351_15382[2] = null);
(statearr_15351_15382[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 22))
{var inst_15277 = (state_15320[10]);var inst_15313 = (state_15320[2]);var inst_15269 = inst_15277;var state_15320__$1 = (function (){var statearr_15352 = state_15320;(statearr_15352[6] = inst_15269);
(statearr_15352[17] = inst_15313);
return statearr_15352;
})();var statearr_15353_15383 = state_15320__$1;(statearr_15353_15383[2] = null);
(statearr_15353_15383[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 23))
{var inst_15310 = (state_15320[2]);var state_15320__$1 = state_15320;var statearr_15354_15384 = state_15320__$1;(statearr_15354_15384[2] = inst_15310);
(statearr_15354_15384[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_15356 = (new Array(18));(statearr_15356[0] = state_machine__5328__auto__);
(statearr_15356[1] = 1);
return statearr_15356;
});
var state_machine__5328__auto____1 = (function (state_15320){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15320){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15357 = f__5378__auto__.call(null);(statearr_15357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15358);
return statearr_15357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3119__auto__ = p;if(and__3119__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3119__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3723__auto__ = (((p == null))?null:p);return (function (){var or__3128__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3119__auto__ = p;if(and__3119__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3119__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3723__auto__ = (((p == null))?null:p);return (function (){var or__3128__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3119__auto__ = p;if(and__3119__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3119__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3723__auto__ = (((p == null))?null:p);return (function (){var or__3128__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3119__auto__ = p;if(and__3119__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3119__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3723__auto__ = (((p == null))?null:p);return (function (){var or__3128__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3128__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3128__auto__,mults){
return (function (p1__15385_SHARP_){if(cljs.core.truth_(p1__15385_SHARP_.call(null,topic)))
{return p1__15385_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15385_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15509 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15509 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15510){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15510 = meta15510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15509.cljs$lang$type = true;
cljs.core.async.t15509.cljs$lang$ctorStr = "cljs.core.async/t15509";
cljs.core.async.t15509.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15509");
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15511){var self__ = this;
var _15511__$1 = this;return self__.meta15510;
});})(mults,ensure_mult))
;
cljs.core.async.t15509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15511,meta15510__$1){var self__ = this;
var _15511__$1 = this;return (new cljs.core.async.t15509(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15510__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15509 = ((function (mults,ensure_mult){
return (function __GT_t15509(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15510){return (new cljs.core.async.t15509(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15510));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15509(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5377__auto___15632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15584){var state_val_15585 = (state_15584[1]);if((state_val_15585 === 1))
{var state_15584__$1 = state_15584;var statearr_15586_15633 = state_15584__$1;(statearr_15586_15633[2] = null);
(statearr_15586_15633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 2))
{var state_15584__$1 = state_15584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15584__$1,4,ch);
} else
{if((state_val_15585 === 3))
{var inst_15582 = (state_15584[2]);var state_15584__$1 = state_15584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15584__$1,inst_15582);
} else
{if((state_val_15585 === 4))
{var inst_15514 = (state_15584[5]);var inst_15514__$1 = (state_15584[2]);var inst_15515 = (inst_15514__$1 == null);var state_15584__$1 = (function (){var statearr_15587 = state_15584;(statearr_15587[5] = inst_15514__$1);
return statearr_15587;
})();if(cljs.core.truth_(inst_15515))
{var statearr_15588_15634 = state_15584__$1;(statearr_15588_15634[1] = 5);
} else
{var statearr_15589_15635 = state_15584__$1;(statearr_15589_15635[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 5))
{var inst_15521 = cljs.core.deref.call(null,mults);var inst_15522 = cljs.core.vals.call(null,inst_15521);var inst_15523 = cljs.core.seq.call(null,inst_15522);var inst_15524 = inst_15523;var inst_15525 = null;var inst_15526 = 0;var inst_15527 = 0;var state_15584__$1 = (function (){var statearr_15590 = state_15584;(statearr_15590[6] = inst_15526);
(statearr_15590[7] = inst_15527);
(statearr_15590[8] = inst_15525);
(statearr_15590[9] = inst_15524);
return statearr_15590;
})();var statearr_15591_15636 = state_15584__$1;(statearr_15591_15636[2] = null);
(statearr_15591_15636[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 6))
{var inst_15564 = (state_15584[10]);var inst_15562 = (state_15584[11]);var inst_15514 = (state_15584[5]);var inst_15562__$1 = topic_fn.call(null,inst_15514);var inst_15563 = cljs.core.deref.call(null,mults);var inst_15564__$1 = cljs.core.get.call(null,inst_15563,inst_15562__$1);var state_15584__$1 = (function (){var statearr_15592 = state_15584;(statearr_15592[10] = inst_15564__$1);
(statearr_15592[11] = inst_15562__$1);
return statearr_15592;
})();if(cljs.core.truth_(inst_15564__$1))
{var statearr_15593_15637 = state_15584__$1;(statearr_15593_15637[1] = 19);
} else
{var statearr_15594_15638 = state_15584__$1;(statearr_15594_15638[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 7))
{var inst_15580 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15595_15639 = state_15584__$1;(statearr_15595_15639[2] = inst_15580);
(statearr_15595_15639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 8))
{var inst_15526 = (state_15584[6]);var inst_15527 = (state_15584[7]);var inst_15529 = (inst_15527 < inst_15526);var inst_15530 = inst_15529;var state_15584__$1 = state_15584;if(cljs.core.truth_(inst_15530))
{var statearr_15599_15640 = state_15584__$1;(statearr_15599_15640[1] = 10);
} else
{var statearr_15600_15641 = state_15584__$1;(statearr_15600_15641[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 9))
{var inst_15560 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15601_15642 = state_15584__$1;(statearr_15601_15642[2] = inst_15560);
(statearr_15601_15642[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 10))
{var inst_15526 = (state_15584[6]);var inst_15527 = (state_15584[7]);var inst_15525 = (state_15584[8]);var inst_15524 = (state_15584[9]);var inst_15532 = cljs.core._nth.call(null,inst_15525,inst_15527);var inst_15533 = cljs.core.async.muxch_STAR_.call(null,inst_15532);var inst_15534 = cljs.core.async.close_BANG_.call(null,inst_15533);var inst_15535 = (inst_15527 + 1);var tmp15596 = inst_15526;var tmp15597 = inst_15525;var tmp15598 = inst_15524;var inst_15524__$1 = tmp15598;var inst_15525__$1 = tmp15597;var inst_15526__$1 = tmp15596;var inst_15527__$1 = inst_15535;var state_15584__$1 = (function (){var statearr_15602 = state_15584;(statearr_15602[6] = inst_15526__$1);
(statearr_15602[7] = inst_15527__$1);
(statearr_15602[12] = inst_15534);
(statearr_15602[8] = inst_15525__$1);
(statearr_15602[9] = inst_15524__$1);
return statearr_15602;
})();var statearr_15603_15643 = state_15584__$1;(statearr_15603_15643[2] = null);
(statearr_15603_15643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 11))
{var inst_15538 = (state_15584[13]);var inst_15524 = (state_15584[9]);var inst_15538__$1 = cljs.core.seq.call(null,inst_15524);var state_15584__$1 = (function (){var statearr_15604 = state_15584;(statearr_15604[13] = inst_15538__$1);
return statearr_15604;
})();if(inst_15538__$1)
{var statearr_15605_15644 = state_15584__$1;(statearr_15605_15644[1] = 13);
} else
{var statearr_15606_15645 = state_15584__$1;(statearr_15606_15645[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 12))
{var inst_15558 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15607_15646 = state_15584__$1;(statearr_15607_15646[2] = inst_15558);
(statearr_15607_15646[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 13))
{var inst_15538 = (state_15584[13]);var inst_15540 = cljs.core.chunked_seq_QMARK_.call(null,inst_15538);var state_15584__$1 = state_15584;if(inst_15540)
{var statearr_15608_15647 = state_15584__$1;(statearr_15608_15647[1] = 16);
} else
{var statearr_15609_15648 = state_15584__$1;(statearr_15609_15648[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 14))
{var state_15584__$1 = state_15584;var statearr_15610_15649 = state_15584__$1;(statearr_15610_15649[2] = null);
(statearr_15610_15649[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 15))
{var inst_15556 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15611_15650 = state_15584__$1;(statearr_15611_15650[2] = inst_15556);
(statearr_15611_15650[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 16))
{var inst_15538 = (state_15584[13]);var inst_15542 = cljs.core.chunk_first.call(null,inst_15538);var inst_15543 = cljs.core.chunk_rest.call(null,inst_15538);var inst_15544 = cljs.core.count.call(null,inst_15542);var inst_15524 = inst_15543;var inst_15525 = inst_15542;var inst_15526 = inst_15544;var inst_15527 = 0;var state_15584__$1 = (function (){var statearr_15612 = state_15584;(statearr_15612[6] = inst_15526);
(statearr_15612[7] = inst_15527);
(statearr_15612[8] = inst_15525);
(statearr_15612[9] = inst_15524);
return statearr_15612;
})();var statearr_15613_15651 = state_15584__$1;(statearr_15613_15651[2] = null);
(statearr_15613_15651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 17))
{var inst_15538 = (state_15584[13]);var inst_15547 = cljs.core.first.call(null,inst_15538);var inst_15548 = cljs.core.async.muxch_STAR_.call(null,inst_15547);var inst_15549 = cljs.core.async.close_BANG_.call(null,inst_15548);var inst_15550 = cljs.core.next.call(null,inst_15538);var inst_15524 = inst_15550;var inst_15525 = null;var inst_15526 = 0;var inst_15527 = 0;var state_15584__$1 = (function (){var statearr_15614 = state_15584;(statearr_15614[6] = inst_15526);
(statearr_15614[7] = inst_15527);
(statearr_15614[8] = inst_15525);
(statearr_15614[9] = inst_15524);
(statearr_15614[14] = inst_15549);
return statearr_15614;
})();var statearr_15615_15652 = state_15584__$1;(statearr_15615_15652[2] = null);
(statearr_15615_15652[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 18))
{var inst_15553 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15616_15653 = state_15584__$1;(statearr_15616_15653[2] = inst_15553);
(statearr_15616_15653[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 19))
{var state_15584__$1 = state_15584;var statearr_15617_15654 = state_15584__$1;(statearr_15617_15654[2] = null);
(statearr_15617_15654[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 20))
{var state_15584__$1 = state_15584;var statearr_15618_15655 = state_15584__$1;(statearr_15618_15655[2] = null);
(statearr_15618_15655[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 21))
{var inst_15577 = (state_15584[2]);var state_15584__$1 = (function (){var statearr_15619 = state_15584;(statearr_15619[15] = inst_15577);
return statearr_15619;
})();var statearr_15620_15656 = state_15584__$1;(statearr_15620_15656[2] = null);
(statearr_15620_15656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 22))
{var inst_15574 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15621_15657 = state_15584__$1;(statearr_15621_15657[2] = inst_15574);
(statearr_15621_15657[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 23))
{var inst_15562 = (state_15584[11]);var inst_15566 = (state_15584[2]);var inst_15567 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15562);var state_15584__$1 = (function (){var statearr_15622 = state_15584;(statearr_15622[16] = inst_15566);
return statearr_15622;
})();var statearr_15623_15658 = state_15584__$1;(statearr_15623_15658[2] = inst_15567);
(statearr_15623_15658[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 24))
{try{var inst_15564 = (state_15584[10]);var inst_15514 = (state_15584[5]);var inst_15570 = cljs.core.async.muxch_STAR_.call(null,inst_15564);var state_15584__$1 = state_15584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15584__$1,25,inst_15570,inst_15514);
}catch (e15624){if((e15624 instanceof Object))
{var ex__5321__auto__ = e15624;var statearr_15625_15659 = state_15584;(statearr_15625_15659[1] = 23);
(statearr_15625_15659[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15624;
} else
{return null;
}
}
}} else
{if((state_val_15585 === 25))
{try{var inst_15572 = (state_15584[2]);var state_15584__$1 = state_15584;var statearr_15628_15660 = state_15584__$1;(statearr_15628_15660[2] = inst_15572);
(statearr_15628_15660[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15626){if((e15626 instanceof Object))
{var ex__5321__auto__ = e15626;var statearr_15627_15661 = state_15584;(statearr_15627_15661[1] = 23);
(statearr_15627_15661[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15626;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_15630 = (new Array(17));(statearr_15630[0] = state_machine__5328__auto__);
(statearr_15630[1] = 1);
return statearr_15630;
});
var state_machine__5328__auto____1 = (function (state_15584){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15584);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15584){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15631 = f__5378__auto__.call(null);(statearr_15631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15632);
return statearr_15631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5377__auto___15792 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15764){var state_val_15765 = (state_15764[1]);if((state_val_15765 === 1))
{var state_15764__$1 = state_15764;var statearr_15766_15793 = state_15764__$1;(statearr_15766_15793[2] = null);
(statearr_15766_15793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 2))
{var inst_15728 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15729 = 0;var state_15764__$1 = (function (){var statearr_15767 = state_15764;(statearr_15767[5] = inst_15729);
(statearr_15767[6] = inst_15728);
return statearr_15767;
})();var statearr_15768_15794 = state_15764__$1;(statearr_15768_15794[2] = null);
(statearr_15768_15794[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 3))
{var inst_15762 = (state_15764[2]);var state_15764__$1 = state_15764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15764__$1,inst_15762);
} else
{if((state_val_15765 === 4))
{var inst_15729 = (state_15764[5]);var inst_15731 = (inst_15729 < cnt);var state_15764__$1 = state_15764;if(cljs.core.truth_(inst_15731))
{var statearr_15769_15795 = state_15764__$1;(statearr_15769_15795[1] = 6);
} else
{var statearr_15770_15796 = state_15764__$1;(statearr_15770_15796[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 5))
{var inst_15748 = (state_15764[2]);var state_15764__$1 = (function (){var statearr_15771 = state_15764;(statearr_15771[7] = inst_15748);
return statearr_15771;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15764__$1,12,dchan);
} else
{if((state_val_15765 === 6))
{var state_15764__$1 = state_15764;var statearr_15772_15797 = state_15764__$1;(statearr_15772_15797[2] = null);
(statearr_15772_15797[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 7))
{var state_15764__$1 = state_15764;var statearr_15773_15798 = state_15764__$1;(statearr_15773_15798[2] = null);
(statearr_15773_15798[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 8))
{var inst_15746 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15774_15799 = state_15764__$1;(statearr_15774_15799[2] = inst_15746);
(statearr_15774_15799[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 9))
{var inst_15729 = (state_15764[5]);var inst_15741 = (state_15764[2]);var inst_15742 = (inst_15729 + 1);var inst_15729__$1 = inst_15742;var state_15764__$1 = (function (){var statearr_15775 = state_15764;(statearr_15775[8] = inst_15741);
(statearr_15775[5] = inst_15729__$1);
return statearr_15775;
})();var statearr_15776_15800 = state_15764__$1;(statearr_15776_15800[2] = null);
(statearr_15776_15800[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 10))
{var inst_15733 = (state_15764[2]);var inst_15734 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15764__$1 = (function (){var statearr_15777 = state_15764;(statearr_15777[9] = inst_15733);
return statearr_15777;
})();var statearr_15778_15801 = state_15764__$1;(statearr_15778_15801[2] = inst_15734);
(statearr_15778_15801[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 11))
{try{var inst_15729 = (state_15764[5]);var inst_15737 = chs__$1.call(null,inst_15729);var inst_15738 = done.call(null,inst_15729);var inst_15739 = cljs.core.async.take_BANG_.call(null,inst_15737,inst_15738);var state_15764__$1 = state_15764;var statearr_15781_15802 = state_15764__$1;(statearr_15781_15802[2] = inst_15739);
(statearr_15781_15802[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15779){if((e15779 instanceof Object))
{var ex__5321__auto__ = e15779;var statearr_15780_15803 = state_15764;(statearr_15780_15803[1] = 10);
(statearr_15780_15803[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15779;
} else
{return null;
}
}
}} else
{if((state_val_15765 === 12))
{var inst_15750 = (state_15764[10]);var inst_15750__$1 = (state_15764[2]);var inst_15751 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15750__$1);var state_15764__$1 = (function (){var statearr_15782 = state_15764;(statearr_15782[10] = inst_15750__$1);
return statearr_15782;
})();if(cljs.core.truth_(inst_15751))
{var statearr_15783_15804 = state_15764__$1;(statearr_15783_15804[1] = 13);
} else
{var statearr_15784_15805 = state_15764__$1;(statearr_15784_15805[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 13))
{var inst_15753 = cljs.core.async.close_BANG_.call(null,out);var state_15764__$1 = state_15764;var statearr_15785_15806 = state_15764__$1;(statearr_15785_15806[2] = inst_15753);
(statearr_15785_15806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 14))
{var inst_15750 = (state_15764[10]);var inst_15755 = cljs.core.apply.call(null,f,inst_15750);var state_15764__$1 = state_15764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15764__$1,16,out,inst_15755);
} else
{if((state_val_15765 === 15))
{var inst_15760 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15786_15807 = state_15764__$1;(statearr_15786_15807[2] = inst_15760);
(statearr_15786_15807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 16))
{var inst_15757 = (state_15764[2]);var state_15764__$1 = (function (){var statearr_15787 = state_15764;(statearr_15787[11] = inst_15757);
return statearr_15787;
})();var statearr_15788_15808 = state_15764__$1;(statearr_15788_15808[2] = null);
(statearr_15788_15808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_15790 = (new Array(12));(statearr_15790[0] = state_machine__5328__auto__);
(statearr_15790[1] = 1);
return statearr_15790;
});
var state_machine__5328__auto____1 = (function (state_15764){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15764);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15791 = f__5378__auto__.call(null);(statearr_15791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15792);
return statearr_15791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5377__auto___15908 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15888){var state_val_15889 = (state_15888[1]);if((state_val_15889 === 1))
{var inst_15859 = cljs.core.vec.call(null,chs);var inst_15860 = inst_15859;var state_15888__$1 = (function (){var statearr_15890 = state_15888;(statearr_15890[5] = inst_15860);
return statearr_15890;
})();var statearr_15891_15909 = state_15888__$1;(statearr_15891_15909[2] = null);
(statearr_15891_15909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 2))
{var inst_15860 = (state_15888[5]);var inst_15862 = cljs.core.count.call(null,inst_15860);var inst_15863 = (inst_15862 > 0);var state_15888__$1 = state_15888;if(cljs.core.truth_(inst_15863))
{var statearr_15892_15910 = state_15888__$1;(statearr_15892_15910[1] = 4);
} else
{var statearr_15893_15911 = state_15888__$1;(statearr_15893_15911[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 3))
{var inst_15886 = (state_15888[2]);var state_15888__$1 = state_15888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15888__$1,inst_15886);
} else
{if((state_val_15889 === 4))
{var inst_15860 = (state_15888[5]);var state_15888__$1 = state_15888;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15888__$1,7,inst_15860);
} else
{if((state_val_15889 === 5))
{var inst_15882 = cljs.core.async.close_BANG_.call(null,out);var state_15888__$1 = state_15888;var statearr_15894_15912 = state_15888__$1;(statearr_15894_15912[2] = inst_15882);
(statearr_15894_15912[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 6))
{var inst_15884 = (state_15888[2]);var state_15888__$1 = state_15888;var statearr_15895_15913 = state_15888__$1;(statearr_15895_15913[2] = inst_15884);
(statearr_15895_15913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 7))
{var inst_15867 = (state_15888[6]);var inst_15868 = (state_15888[7]);var inst_15867__$1 = (state_15888[2]);var inst_15868__$1 = cljs.core.nth.call(null,inst_15867__$1,0,null);var inst_15869 = cljs.core.nth.call(null,inst_15867__$1,1,null);var inst_15870 = (inst_15868__$1 == null);var state_15888__$1 = (function (){var statearr_15896 = state_15888;(statearr_15896[6] = inst_15867__$1);
(statearr_15896[7] = inst_15868__$1);
(statearr_15896[8] = inst_15869);
return statearr_15896;
})();if(cljs.core.truth_(inst_15870))
{var statearr_15897_15914 = state_15888__$1;(statearr_15897_15914[1] = 8);
} else
{var statearr_15898_15915 = state_15888__$1;(statearr_15898_15915[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 8))
{var inst_15860 = (state_15888[5]);var inst_15867 = (state_15888[6]);var inst_15868 = (state_15888[7]);var inst_15869 = (state_15888[8]);var inst_15872 = (function (){var c = inst_15869;var v = inst_15868;var vec__15865 = inst_15867;var cs = inst_15860;return ((function (c,v,vec__15865,cs,inst_15860,inst_15867,inst_15868,inst_15869,state_val_15889){
return (function (p1__15809_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15809_SHARP_);
});
;})(c,v,vec__15865,cs,inst_15860,inst_15867,inst_15868,inst_15869,state_val_15889))
})();var inst_15873 = cljs.core.filterv.call(null,inst_15872,inst_15860);var inst_15860__$1 = inst_15873;var state_15888__$1 = (function (){var statearr_15899 = state_15888;(statearr_15899[5] = inst_15860__$1);
return statearr_15899;
})();var statearr_15900_15916 = state_15888__$1;(statearr_15900_15916[2] = null);
(statearr_15900_15916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 9))
{var inst_15868 = (state_15888[7]);var state_15888__$1 = state_15888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15888__$1,11,out,inst_15868);
} else
{if((state_val_15889 === 10))
{var inst_15880 = (state_15888[2]);var state_15888__$1 = state_15888;var statearr_15902_15917 = state_15888__$1;(statearr_15902_15917[2] = inst_15880);
(statearr_15902_15917[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15889 === 11))
{var inst_15860 = (state_15888[5]);var inst_15877 = (state_15888[2]);var tmp15901 = inst_15860;var inst_15860__$1 = tmp15901;var state_15888__$1 = (function (){var statearr_15903 = state_15888;(statearr_15903[5] = inst_15860__$1);
(statearr_15903[9] = inst_15877);
return statearr_15903;
})();var statearr_15904_15918 = state_15888__$1;(statearr_15904_15918[2] = null);
(statearr_15904_15918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_15906 = (new Array(10));(statearr_15906[0] = state_machine__5328__auto__);
(statearr_15906[1] = 1);
return statearr_15906;
});
var state_machine__5328__auto____1 = (function (state_15888){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15888);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15888){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15907 = f__5378__auto__.call(null);(statearr_15907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15908);
return statearr_15907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});

//# sourceMappingURL=async.js.map