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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14113 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14113 = (function (f,fn_handler,meta14114){
this.f = f;
this.fn_handler = fn_handler;
this.meta14114 = meta14114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14113.cljs$lang$type = true;
cljs.core.async.t14113.cljs$lang$ctorStr = "cljs.core.async/t14113";
cljs.core.async.t14113.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14113");
});
cljs.core.async.t14113.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14115){var self__ = this;
var _14115__$1 = this;return self__.meta14114;
});
cljs.core.async.t14113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14115,meta14114__$1){var self__ = this;
var _14115__$1 = this;return (new cljs.core.async.t14113(self__.f,self__.fn_handler,meta14114__$1));
});
cljs.core.async.__GT_t14113 = (function __GT_t14113(f__$1,fn_handler__$1,meta14114){return (new cljs.core.async.t14113(f__$1,fn_handler__$1,meta14114));
});
}
return (new cljs.core.async.t14113(f,fn_handler,null));
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
{var val_14116 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14116);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14116);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___14117 = n;var x_14118 = 0;while(true){
if((x_14118 < n__3891__auto___14117))
{(a[x_14118] = 0);
{
var G__14119 = (x_14118 + 1);
x_14118 = G__14119;
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
var G__14120 = (i + 1);
i = G__14120;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14124 = (function (flag,alt_flag,meta14125){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14125 = meta14125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14124.cljs$lang$type = true;
cljs.core.async.t14124.cljs$lang$ctorStr = "cljs.core.async/t14124";
cljs.core.async.t14124.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14124");
});
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14126){var self__ = this;
var _14126__$1 = this;return self__.meta14125;
});
cljs.core.async.t14124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14126,meta14125__$1){var self__ = this;
var _14126__$1 = this;return (new cljs.core.async.t14124(self__.flag,self__.alt_flag,meta14125__$1));
});
cljs.core.async.__GT_t14124 = (function __GT_t14124(flag__$1,alt_flag__$1,meta14125){return (new cljs.core.async.t14124(flag__$1,alt_flag__$1,meta14125));
});
}
return (new cljs.core.async.t14124(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14130 = (function (cb,flag,alt_handler,meta14131){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14131 = meta14131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14130.cljs$lang$type = true;
cljs.core.async.t14130.cljs$lang$ctorStr = "cljs.core.async/t14130";
cljs.core.async.t14130.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14130");
});
cljs.core.async.t14130.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14132){var self__ = this;
var _14132__$1 = this;return self__.meta14131;
});
cljs.core.async.t14130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14132,meta14131__$1){var self__ = this;
var _14132__$1 = this;return (new cljs.core.async.t14130(self__.cb,self__.flag,self__.alt_handler,meta14131__$1));
});
cljs.core.async.__GT_t14130 = (function __GT_t14130(cb__$1,flag__$1,alt_handler__$1,meta14131){return (new cljs.core.async.t14130(cb__$1,flag__$1,alt_handler__$1,meta14131));
});
}
return (new cljs.core.async.t14130(cb,flag,alt_handler,null));
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
return (function (p1__14133_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14133_SHARP_,port], true));
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
var G__14134 = (i + 1);
i = G__14134;
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
var alts_BANG___delegate = function (ports,p__14135){var map__14137 = p__14135;var map__14137__$1 = ((cljs.core.seq_QMARK_.call(null,map__14137))?cljs.core.apply.call(null,cljs.core.hash_map,map__14137):map__14137);var opts = map__14137__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14135 = null;if (arguments.length > 1) {
  p__14135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14135);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14138){
var ports = cljs.core.first(arglist__14138);
var p__14135 = cljs.core.rest(arglist__14138);
return alts_BANG___delegate(ports,p__14135);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14146 = (function (ch,f,map_LT_,meta14147){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14147 = meta14147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14146.cljs$lang$type = true;
cljs.core.async.t14146.cljs$lang$ctorStr = "cljs.core.async/t14146";
cljs.core.async.t14146.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14146");
});
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14149 = (function (fn1,_,meta14147,ch,f,map_LT_,meta14150){
this.fn1 = fn1;
this._ = _;
this.meta14147 = meta14147;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14150 = meta14150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14149.cljs$lang$type = true;
cljs.core.async.t14149.cljs$lang$ctorStr = "cljs.core.async/t14149";
cljs.core.async.t14149.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14149");
});
cljs.core.async.t14149.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14149.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14139_SHARP_){return f1.call(null,(((p1__14139_SHARP_ == null))?null:self__.f.call(null,p1__14139_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14151){var self__ = this;
var _14151__$1 = this;return self__.meta14150;
});
cljs.core.async.t14149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14151,meta14150__$1){var self__ = this;
var _14151__$1 = this;return (new cljs.core.async.t14149(self__.fn1,self__._,self__.meta14147,self__.ch,self__.f,self__.map_LT_,meta14150__$1));
});
cljs.core.async.__GT_t14149 = (function __GT_t14149(fn1__$1,___$2,meta14147__$1,ch__$2,f__$2,map_LT___$2,meta14150){return (new cljs.core.async.t14149(fn1__$1,___$2,meta14147__$1,ch__$2,f__$2,map_LT___$2,meta14150));
});
}
return (new cljs.core.async.t14149(fn1,___$1,self__.meta14147,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14148){var self__ = this;
var _14148__$1 = this;return self__.meta14147;
});
cljs.core.async.t14146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14148,meta14147__$1){var self__ = this;
var _14148__$1 = this;return (new cljs.core.async.t14146(self__.ch,self__.f,self__.map_LT_,meta14147__$1));
});
cljs.core.async.__GT_t14146 = (function __GT_t14146(ch__$1,f__$1,map_LT___$1,meta14147){return (new cljs.core.async.t14146(ch__$1,f__$1,map_LT___$1,meta14147));
});
}
return (new cljs.core.async.t14146(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14155 = (function (ch,f,map_GT_,meta14156){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14156 = meta14156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14155.cljs$lang$type = true;
cljs.core.async.t14155.cljs$lang$ctorStr = "cljs.core.async/t14155";
cljs.core.async.t14155.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14155");
});
cljs.core.async.t14155.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14155.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14155.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14157){var self__ = this;
var _14157__$1 = this;return self__.meta14156;
});
cljs.core.async.t14155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14157,meta14156__$1){var self__ = this;
var _14157__$1 = this;return (new cljs.core.async.t14155(self__.ch,self__.f,self__.map_GT_,meta14156__$1));
});
cljs.core.async.__GT_t14155 = (function __GT_t14155(ch__$1,f__$1,map_GT___$1,meta14156){return (new cljs.core.async.t14155(ch__$1,f__$1,map_GT___$1,meta14156));
});
}
return (new cljs.core.async.t14155(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14161 = (function (ch,p,filter_GT_,meta14162){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14162 = meta14162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14161.cljs$lang$type = true;
cljs.core.async.t14161.cljs$lang$ctorStr = "cljs.core.async/t14161";
cljs.core.async.t14161.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14161");
});
cljs.core.async.t14161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14161.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14163){var self__ = this;
var _14163__$1 = this;return self__.meta14162;
});
cljs.core.async.t14161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14163,meta14162__$1){var self__ = this;
var _14163__$1 = this;return (new cljs.core.async.t14161(self__.ch,self__.p,self__.filter_GT_,meta14162__$1));
});
cljs.core.async.__GT_t14161 = (function __GT_t14161(ch__$1,p__$1,filter_GT___$1,meta14162){return (new cljs.core.async.t14161(ch__$1,p__$1,filter_GT___$1,meta14162));
});
}
return (new cljs.core.async.t14161(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5377__auto___14238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14221){var state_val_14222 = (state_14221[1]);if((state_val_14222 === 1))
{var state_14221__$1 = state_14221;var statearr_14223_14239 = state_14221__$1;(statearr_14223_14239[2] = null);
(statearr_14223_14239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 2))
{var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14221__$1,4,ch);
} else
{if((state_val_14222 === 3))
{var inst_14219 = (state_14221[2]);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14221__$1,inst_14219);
} else
{if((state_val_14222 === 4))
{var inst_14203 = (state_14221[5]);var inst_14203__$1 = (state_14221[2]);var inst_14204 = (inst_14203__$1 == null);var state_14221__$1 = (function (){var statearr_14224 = state_14221;(statearr_14224[5] = inst_14203__$1);
return statearr_14224;
})();if(cljs.core.truth_(inst_14204))
{var statearr_14225_14240 = state_14221__$1;(statearr_14225_14240[1] = 5);
} else
{var statearr_14226_14241 = state_14221__$1;(statearr_14226_14241[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 5))
{var inst_14206 = cljs.core.async.close_BANG_.call(null,out);var state_14221__$1 = state_14221;var statearr_14227_14242 = state_14221__$1;(statearr_14227_14242[2] = inst_14206);
(statearr_14227_14242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 6))
{var inst_14203 = (state_14221[5]);var inst_14208 = p.call(null,inst_14203);var state_14221__$1 = state_14221;if(cljs.core.truth_(inst_14208))
{var statearr_14228_14243 = state_14221__$1;(statearr_14228_14243[1] = 8);
} else
{var statearr_14229_14244 = state_14221__$1;(statearr_14229_14244[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 7))
{var inst_14217 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14230_14245 = state_14221__$1;(statearr_14230_14245[2] = inst_14217);
(statearr_14230_14245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 8))
{var inst_14203 = (state_14221[5]);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14221__$1,11,out,inst_14203);
} else
{if((state_val_14222 === 9))
{var state_14221__$1 = state_14221;var statearr_14231_14246 = state_14221__$1;(statearr_14231_14246[2] = null);
(statearr_14231_14246[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 10))
{var inst_14214 = (state_14221[2]);var state_14221__$1 = (function (){var statearr_14232 = state_14221;(statearr_14232[6] = inst_14214);
return statearr_14232;
})();var statearr_14233_14247 = state_14221__$1;(statearr_14233_14247[2] = null);
(statearr_14233_14247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14222 === 11))
{var inst_14211 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14234_14248 = state_14221__$1;(statearr_14234_14248[2] = inst_14211);
(statearr_14234_14248[1] = 10);
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
var state_machine__5328__auto____0 = (function (){var statearr_14236 = (new Array(7));(statearr_14236[0] = state_machine__5328__auto__);
(statearr_14236[1] = 1);
return statearr_14236;
});
var state_machine__5328__auto____1 = (function (state_14221){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14221);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14221){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14237 = f__5378__auto__.call(null);(statearr_14237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14238);
return statearr_14237;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14396){var state_val_14397 = (state_14396[1]);if((state_val_14397 === 1))
{var state_14396__$1 = state_14396;var statearr_14398_14431 = state_14396__$1;(statearr_14398_14431[2] = null);
(statearr_14398_14431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 2))
{var state_14396__$1 = state_14396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14396__$1,4,in$);
} else
{if((state_val_14397 === 3))
{var inst_14394 = (state_14396[2]);var state_14396__$1 = state_14396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14396__$1,inst_14394);
} else
{if((state_val_14397 === 4))
{var inst_14342 = (state_14396[5]);var inst_14342__$1 = (state_14396[2]);var inst_14343 = (inst_14342__$1 == null);var state_14396__$1 = (function (){var statearr_14399 = state_14396;(statearr_14399[5] = inst_14342__$1);
return statearr_14399;
})();if(cljs.core.truth_(inst_14343))
{var statearr_14400_14432 = state_14396__$1;(statearr_14400_14432[1] = 5);
} else
{var statearr_14401_14433 = state_14396__$1;(statearr_14401_14433[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 5))
{var inst_14345 = cljs.core.async.close_BANG_.call(null,out);var state_14396__$1 = state_14396;var statearr_14402_14434 = state_14396__$1;(statearr_14402_14434[2] = inst_14345);
(statearr_14402_14434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 6))
{var inst_14342 = (state_14396[5]);var inst_14347 = f.call(null,inst_14342);var inst_14352 = cljs.core.seq.call(null,inst_14347);var inst_14353 = inst_14352;var inst_14354 = null;var inst_14355 = 0;var inst_14356 = 0;var state_14396__$1 = (function (){var statearr_14403 = state_14396;(statearr_14403[6] = inst_14356);
(statearr_14403[7] = inst_14354);
(statearr_14403[8] = inst_14355);
(statearr_14403[9] = inst_14353);
return statearr_14403;
})();var statearr_14404_14435 = state_14396__$1;(statearr_14404_14435[2] = null);
(statearr_14404_14435[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 7))
{var inst_14392 = (state_14396[2]);var state_14396__$1 = state_14396;var statearr_14405_14436 = state_14396__$1;(statearr_14405_14436[2] = inst_14392);
(statearr_14405_14436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 8))
{var inst_14356 = (state_14396[6]);var inst_14355 = (state_14396[8]);var inst_14358 = (inst_14356 < inst_14355);var inst_14359 = inst_14358;var state_14396__$1 = state_14396;if(cljs.core.truth_(inst_14359))
{var statearr_14406_14437 = state_14396__$1;(statearr_14406_14437[1] = 10);
} else
{var statearr_14407_14438 = state_14396__$1;(statearr_14407_14438[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 9))
{var inst_14389 = (state_14396[2]);var state_14396__$1 = (function (){var statearr_14408 = state_14396;(statearr_14408[10] = inst_14389);
return statearr_14408;
})();var statearr_14409_14439 = state_14396__$1;(statearr_14409_14439[2] = null);
(statearr_14409_14439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 10))
{var inst_14356 = (state_14396[6]);var inst_14354 = (state_14396[7]);var inst_14361 = cljs.core._nth.call(null,inst_14354,inst_14356);var state_14396__$1 = state_14396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14396__$1,13,out,inst_14361);
} else
{if((state_val_14397 === 11))
{var inst_14367 = (state_14396[11]);var inst_14353 = (state_14396[9]);var inst_14367__$1 = cljs.core.seq.call(null,inst_14353);var state_14396__$1 = (function (){var statearr_14413 = state_14396;(statearr_14413[11] = inst_14367__$1);
return statearr_14413;
})();if(inst_14367__$1)
{var statearr_14414_14440 = state_14396__$1;(statearr_14414_14440[1] = 14);
} else
{var statearr_14415_14441 = state_14396__$1;(statearr_14415_14441[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 12))
{var inst_14387 = (state_14396[2]);var state_14396__$1 = state_14396;var statearr_14416_14442 = state_14396__$1;(statearr_14416_14442[2] = inst_14387);
(statearr_14416_14442[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 13))
{var inst_14356 = (state_14396[6]);var inst_14354 = (state_14396[7]);var inst_14355 = (state_14396[8]);var inst_14353 = (state_14396[9]);var inst_14363 = (state_14396[2]);var inst_14364 = (inst_14356 + 1);var tmp14410 = inst_14354;var tmp14411 = inst_14355;var tmp14412 = inst_14353;var inst_14353__$1 = tmp14412;var inst_14354__$1 = tmp14410;var inst_14355__$1 = tmp14411;var inst_14356__$1 = inst_14364;var state_14396__$1 = (function (){var statearr_14417 = state_14396;(statearr_14417[12] = inst_14363);
(statearr_14417[6] = inst_14356__$1);
(statearr_14417[7] = inst_14354__$1);
(statearr_14417[8] = inst_14355__$1);
(statearr_14417[9] = inst_14353__$1);
return statearr_14417;
})();var statearr_14418_14443 = state_14396__$1;(statearr_14418_14443[2] = null);
(statearr_14418_14443[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 14))
{var inst_14367 = (state_14396[11]);var inst_14369 = cljs.core.chunked_seq_QMARK_.call(null,inst_14367);var state_14396__$1 = state_14396;if(inst_14369)
{var statearr_14419_14444 = state_14396__$1;(statearr_14419_14444[1] = 17);
} else
{var statearr_14420_14445 = state_14396__$1;(statearr_14420_14445[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 15))
{var state_14396__$1 = state_14396;var statearr_14421_14446 = state_14396__$1;(statearr_14421_14446[2] = null);
(statearr_14421_14446[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 16))
{var inst_14385 = (state_14396[2]);var state_14396__$1 = state_14396;var statearr_14422_14447 = state_14396__$1;(statearr_14422_14447[2] = inst_14385);
(statearr_14422_14447[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 17))
{var inst_14367 = (state_14396[11]);var inst_14371 = cljs.core.chunk_first.call(null,inst_14367);var inst_14372 = cljs.core.chunk_rest.call(null,inst_14367);var inst_14373 = cljs.core.count.call(null,inst_14371);var inst_14353 = inst_14372;var inst_14354 = inst_14371;var inst_14355 = inst_14373;var inst_14356 = 0;var state_14396__$1 = (function (){var statearr_14423 = state_14396;(statearr_14423[6] = inst_14356);
(statearr_14423[7] = inst_14354);
(statearr_14423[8] = inst_14355);
(statearr_14423[9] = inst_14353);
return statearr_14423;
})();var statearr_14424_14448 = state_14396__$1;(statearr_14424_14448[2] = null);
(statearr_14424_14448[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 18))
{var inst_14367 = (state_14396[11]);var inst_14376 = cljs.core.first.call(null,inst_14367);var state_14396__$1 = state_14396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14396__$1,20,out,inst_14376);
} else
{if((state_val_14397 === 19))
{var inst_14382 = (state_14396[2]);var state_14396__$1 = state_14396;var statearr_14425_14449 = state_14396__$1;(statearr_14425_14449[2] = inst_14382);
(statearr_14425_14449[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14397 === 20))
{var inst_14367 = (state_14396[11]);var inst_14378 = (state_14396[2]);var inst_14379 = cljs.core.next.call(null,inst_14367);var inst_14353 = inst_14379;var inst_14354 = null;var inst_14355 = 0;var inst_14356 = 0;var state_14396__$1 = (function (){var statearr_14426 = state_14396;(statearr_14426[13] = inst_14378);
(statearr_14426[6] = inst_14356);
(statearr_14426[7] = inst_14354);
(statearr_14426[8] = inst_14355);
(statearr_14426[9] = inst_14353);
return statearr_14426;
})();var statearr_14427_14450 = state_14396__$1;(statearr_14427_14450[2] = null);
(statearr_14427_14450[1] = 8);
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
var state_machine__5328__auto____0 = (function (){var statearr_14429 = (new Array(14));(statearr_14429[0] = state_machine__5328__auto__);
(statearr_14429[1] = 1);
return statearr_14429;
});
var state_machine__5328__auto____1 = (function (state_14396){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14396);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14396){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14430 = f__5378__auto__.call(null);(statearr_14430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14430;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5377__auto___14523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14506){var state_val_14507 = (state_14506[1]);if((state_val_14507 === 1))
{var state_14506__$1 = state_14506;var statearr_14508_14524 = state_14506__$1;(statearr_14508_14524[2] = null);
(statearr_14508_14524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 2))
{var state_14506__$1 = state_14506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14506__$1,4,from);
} else
{if((state_val_14507 === 3))
{var inst_14504 = (state_14506[2]);var state_14506__$1 = state_14506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14506__$1,inst_14504);
} else
{if((state_val_14507 === 4))
{var inst_14489 = (state_14506[5]);var inst_14489__$1 = (state_14506[2]);var inst_14490 = (inst_14489__$1 == null);var state_14506__$1 = (function (){var statearr_14509 = state_14506;(statearr_14509[5] = inst_14489__$1);
return statearr_14509;
})();if(cljs.core.truth_(inst_14490))
{var statearr_14510_14525 = state_14506__$1;(statearr_14510_14525[1] = 5);
} else
{var statearr_14511_14526 = state_14506__$1;(statearr_14511_14526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 5))
{var state_14506__$1 = state_14506;if(cljs.core.truth_(close_QMARK_))
{var statearr_14512_14527 = state_14506__$1;(statearr_14512_14527[1] = 8);
} else
{var statearr_14513_14528 = state_14506__$1;(statearr_14513_14528[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 6))
{var inst_14489 = (state_14506[5]);var state_14506__$1 = state_14506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14506__$1,11,to,inst_14489);
} else
{if((state_val_14507 === 7))
{var inst_14502 = (state_14506[2]);var state_14506__$1 = state_14506;var statearr_14514_14529 = state_14506__$1;(statearr_14514_14529[2] = inst_14502);
(statearr_14514_14529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 8))
{var inst_14493 = cljs.core.async.close_BANG_.call(null,to);var state_14506__$1 = state_14506;var statearr_14515_14530 = state_14506__$1;(statearr_14515_14530[2] = inst_14493);
(statearr_14515_14530[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 9))
{var state_14506__$1 = state_14506;var statearr_14516_14531 = state_14506__$1;(statearr_14516_14531[2] = null);
(statearr_14516_14531[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 10))
{var inst_14496 = (state_14506[2]);var state_14506__$1 = state_14506;var statearr_14517_14532 = state_14506__$1;(statearr_14517_14532[2] = inst_14496);
(statearr_14517_14532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14507 === 11))
{var inst_14499 = (state_14506[2]);var state_14506__$1 = (function (){var statearr_14518 = state_14506;(statearr_14518[6] = inst_14499);
return statearr_14518;
})();var statearr_14519_14533 = state_14506__$1;(statearr_14519_14533[2] = null);
(statearr_14519_14533[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_14521 = (new Array(7));(statearr_14521[0] = state_machine__5328__auto__);
(statearr_14521[1] = 1);
return statearr_14521;
});
var state_machine__5328__auto____1 = (function (state_14506){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14506);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14506){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14522 = f__5378__auto__.call(null);(statearr_14522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14523);
return statearr_14522;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5377__auto___14612 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14594){var state_val_14595 = (state_14594[1]);if((state_val_14595 === 1))
{var state_14594__$1 = state_14594;var statearr_14596_14613 = state_14594__$1;(statearr_14596_14613[2] = null);
(statearr_14596_14613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 2))
{var state_14594__$1 = state_14594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14594__$1,4,ch);
} else
{if((state_val_14595 === 3))
{var inst_14592 = (state_14594[2]);var state_14594__$1 = state_14594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14594__$1,inst_14592);
} else
{if((state_val_14595 === 4))
{var inst_14575 = (state_14594[5]);var inst_14575__$1 = (state_14594[2]);var inst_14576 = (inst_14575__$1 == null);var state_14594__$1 = (function (){var statearr_14597 = state_14594;(statearr_14597[5] = inst_14575__$1);
return statearr_14597;
})();if(cljs.core.truth_(inst_14576))
{var statearr_14598_14614 = state_14594__$1;(statearr_14598_14614[1] = 5);
} else
{var statearr_14599_14615 = state_14594__$1;(statearr_14599_14615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 5))
{var inst_14578 = cljs.core.async.close_BANG_.call(null,tc);var inst_14579 = cljs.core.async.close_BANG_.call(null,fc);var state_14594__$1 = (function (){var statearr_14600 = state_14594;(statearr_14600[6] = inst_14578);
return statearr_14600;
})();var statearr_14601_14616 = state_14594__$1;(statearr_14601_14616[2] = inst_14579);
(statearr_14601_14616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 6))
{var inst_14575 = (state_14594[5]);var inst_14581 = p.call(null,inst_14575);var state_14594__$1 = state_14594;if(cljs.core.truth_(inst_14581))
{var statearr_14602_14617 = state_14594__$1;(statearr_14602_14617[1] = 9);
} else
{var statearr_14603_14618 = state_14594__$1;(statearr_14603_14618[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 7))
{var inst_14590 = (state_14594[2]);var state_14594__$1 = state_14594;var statearr_14604_14619 = state_14594__$1;(statearr_14604_14619[2] = inst_14590);
(statearr_14604_14619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 8))
{var inst_14587 = (state_14594[2]);var state_14594__$1 = (function (){var statearr_14605 = state_14594;(statearr_14605[7] = inst_14587);
return statearr_14605;
})();var statearr_14606_14620 = state_14594__$1;(statearr_14606_14620[2] = null);
(statearr_14606_14620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 9))
{var state_14594__$1 = state_14594;var statearr_14607_14621 = state_14594__$1;(statearr_14607_14621[2] = tc);
(statearr_14607_14621[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 10))
{var state_14594__$1 = state_14594;var statearr_14608_14622 = state_14594__$1;(statearr_14608_14622[2] = fc);
(statearr_14608_14622[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14595 === 11))
{var inst_14575 = (state_14594[5]);var inst_14585 = (state_14594[2]);var state_14594__$1 = state_14594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14594__$1,8,inst_14585,inst_14575);
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
var state_machine__5328__auto____0 = (function (){var statearr_14610 = (new Array(8));(statearr_14610[0] = state_machine__5328__auto__);
(statearr_14610[1] = 1);
return statearr_14610;
});
var state_machine__5328__auto____1 = (function (state_14594){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14594);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14594){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14611 = f__5378__auto__.call(null);(statearr_14611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14612);
return statearr_14611;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14665){var state_val_14666 = (state_14665[1]);if((state_val_14666 === 7))
{var inst_14661 = (state_14665[2]);var state_14665__$1 = state_14665;var statearr_14667_14679 = state_14665__$1;(statearr_14667_14679[2] = inst_14661);
(statearr_14667_14679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 6))
{var inst_14654 = (state_14665[5]);var inst_14651 = (state_14665[6]);var inst_14658 = f.call(null,inst_14651,inst_14654);var inst_14651__$1 = inst_14658;var state_14665__$1 = (function (){var statearr_14668 = state_14665;(statearr_14668[6] = inst_14651__$1);
return statearr_14668;
})();var statearr_14669_14680 = state_14665__$1;(statearr_14669_14680[2] = null);
(statearr_14669_14680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 5))
{var inst_14651 = (state_14665[6]);var state_14665__$1 = state_14665;var statearr_14670_14681 = state_14665__$1;(statearr_14670_14681[2] = inst_14651);
(statearr_14670_14681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 4))
{var inst_14654 = (state_14665[5]);var inst_14654__$1 = (state_14665[2]);var inst_14655 = (inst_14654__$1 == null);var state_14665__$1 = (function (){var statearr_14671 = state_14665;(statearr_14671[5] = inst_14654__$1);
return statearr_14671;
})();if(cljs.core.truth_(inst_14655))
{var statearr_14672_14682 = state_14665__$1;(statearr_14672_14682[1] = 5);
} else
{var statearr_14673_14683 = state_14665__$1;(statearr_14673_14683[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 3))
{var inst_14663 = (state_14665[2]);var state_14665__$1 = state_14665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14665__$1,inst_14663);
} else
{if((state_val_14666 === 2))
{var state_14665__$1 = state_14665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14665__$1,4,ch);
} else
{if((state_val_14666 === 1))
{var inst_14651 = init;var state_14665__$1 = (function (){var statearr_14674 = state_14665;(statearr_14674[6] = inst_14651);
return statearr_14674;
})();var statearr_14675_14684 = state_14665__$1;(statearr_14675_14684[2] = null);
(statearr_14675_14684[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_14677 = (new Array(7));(statearr_14677[0] = state_machine__5328__auto__);
(statearr_14677[1] = 1);
return statearr_14677;
});
var state_machine__5328__auto____1 = (function (state_14665){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14665);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14665){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14678 = f__5378__auto__.call(null);(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14678;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14742){var state_val_14743 = (state_14742[1]);if((state_val_14743 === 1))
{var inst_14722 = cljs.core.seq.call(null,coll);var inst_14723 = inst_14722;var state_14742__$1 = (function (){var statearr_14744 = state_14742;(statearr_14744[5] = inst_14723);
return statearr_14744;
})();var statearr_14745_14759 = state_14742__$1;(statearr_14745_14759[2] = null);
(statearr_14745_14759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 2))
{var inst_14723 = (state_14742[5]);var state_14742__$1 = state_14742;if(cljs.core.truth_(inst_14723))
{var statearr_14746_14760 = state_14742__$1;(statearr_14746_14760[1] = 4);
} else
{var statearr_14747_14761 = state_14742__$1;(statearr_14747_14761[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 3))
{var inst_14740 = (state_14742[2]);var state_14742__$1 = state_14742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14742__$1,inst_14740);
} else
{if((state_val_14743 === 4))
{var inst_14723 = (state_14742[5]);var inst_14726 = cljs.core.first.call(null,inst_14723);var state_14742__$1 = state_14742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14742__$1,7,ch,inst_14726);
} else
{if((state_val_14743 === 5))
{var state_14742__$1 = state_14742;if(cljs.core.truth_(close_QMARK_))
{var statearr_14748_14762 = state_14742__$1;(statearr_14748_14762[1] = 8);
} else
{var statearr_14749_14763 = state_14742__$1;(statearr_14749_14763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 6))
{var inst_14738 = (state_14742[2]);var state_14742__$1 = state_14742;var statearr_14750_14764 = state_14742__$1;(statearr_14750_14764[2] = inst_14738);
(statearr_14750_14764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 7))
{var inst_14723 = (state_14742[5]);var inst_14728 = (state_14742[2]);var inst_14729 = cljs.core.next.call(null,inst_14723);var inst_14723__$1 = inst_14729;var state_14742__$1 = (function (){var statearr_14751 = state_14742;(statearr_14751[5] = inst_14723__$1);
(statearr_14751[6] = inst_14728);
return statearr_14751;
})();var statearr_14752_14765 = state_14742__$1;(statearr_14752_14765[2] = null);
(statearr_14752_14765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 8))
{var inst_14733 = cljs.core.async.close_BANG_.call(null,ch);var state_14742__$1 = state_14742;var statearr_14753_14766 = state_14742__$1;(statearr_14753_14766[2] = inst_14733);
(statearr_14753_14766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 9))
{var state_14742__$1 = state_14742;var statearr_14754_14767 = state_14742__$1;(statearr_14754_14767[2] = null);
(statearr_14754_14767[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14743 === 10))
{var inst_14736 = (state_14742[2]);var state_14742__$1 = state_14742;var statearr_14755_14768 = state_14742__$1;(statearr_14755_14768[2] = inst_14736);
(statearr_14755_14768[1] = 6);
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
var state_machine__5328__auto____0 = (function (){var statearr_14757 = (new Array(7));(statearr_14757[0] = state_machine__5328__auto__);
(statearr_14757[1] = 1);
return statearr_14757;
});
var state_machine__5328__auto____1 = (function (state_14742){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14742);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14742){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14758 = f__5378__auto__.call(null);(statearr_14758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14758;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14981 = (function (cs,ch,mult,meta14982){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14982 = meta14982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14981.cljs$lang$type = true;
cljs.core.async.t14981.cljs$lang$ctorStr = "cljs.core.async/t14981";
cljs.core.async.t14981.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14981");
});})(cs))
;
cljs.core.async.t14981.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14981.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14981.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14981.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14981.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14983){var self__ = this;
var _14983__$1 = this;return self__.meta14982;
});})(cs))
;
cljs.core.async.t14981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14983,meta14982__$1){var self__ = this;
var _14983__$1 = this;return (new cljs.core.async.t14981(self__.cs,self__.ch,self__.mult,meta14982__$1));
});})(cs))
;
cljs.core.async.__GT_t14981 = ((function (cs){
return (function __GT_t14981(cs__$1,ch__$1,mult__$1,meta14982){return (new cljs.core.async.t14981(cs__$1,ch__$1,mult__$1,meta14982));
});})(cs))
;
}
return (new cljs.core.async.t14981(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5377__auto___15193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15111){var state_val_15112 = (state_15111[1]);if((state_val_15112 === 32))
{try{var inst_15062 = (state_15111[5]);var inst_14986 = (state_15111[6]);var inst_15068 = cljs.core.async.put_BANG_.call(null,inst_15062,inst_14986,done);var state_15111__$1 = state_15111;var statearr_15115_15194 = state_15111__$1;(statearr_15115_15194[2] = inst_15068);
(statearr_15115_15194[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15113){if((e15113 instanceof Object))
{var ex__5321__auto__ = e15113;var statearr_15114_15195 = state_15111;(statearr_15114_15195[1] = 31);
(statearr_15114_15195[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15113;
} else
{return null;
}
}
}} else
{if((state_val_15112 === 1))
{var state_15111__$1 = state_15111;var statearr_15116_15196 = state_15111__$1;(statearr_15116_15196[2] = null);
(statearr_15116_15196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 33))
{var inst_15074 = (state_15111[7]);var inst_15076 = cljs.core.chunked_seq_QMARK_.call(null,inst_15074);var state_15111__$1 = state_15111;if(inst_15076)
{var statearr_15117_15197 = state_15111__$1;(statearr_15117_15197[1] = 36);
} else
{var statearr_15118_15198 = state_15111__$1;(statearr_15118_15198[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 2))
{var state_15111__$1 = state_15111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15111__$1,4,ch);
} else
{if((state_val_15112 === 34))
{var state_15111__$1 = state_15111;var statearr_15119_15199 = state_15111__$1;(statearr_15119_15199[2] = null);
(statearr_15119_15199[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 3))
{var inst_15109 = (state_15111[2]);var state_15111__$1 = state_15111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15111__$1,inst_15109);
} else
{if((state_val_15112 === 35))
{var inst_15098 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15120_15200 = state_15111__$1;(statearr_15120_15200[2] = inst_15098);
(statearr_15120_15200[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 4))
{var inst_14986 = (state_15111[6]);var inst_14986__$1 = (state_15111[2]);var inst_14987 = (inst_14986__$1 == null);var state_15111__$1 = (function (){var statearr_15121 = state_15111;(statearr_15121[6] = inst_14986__$1);
return statearr_15121;
})();if(cljs.core.truth_(inst_14987))
{var statearr_15122_15201 = state_15111__$1;(statearr_15122_15201[1] = 5);
} else
{var statearr_15123_15202 = state_15111__$1;(statearr_15123_15202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 36))
{var inst_15074 = (state_15111[7]);var inst_15078 = cljs.core.chunk_first.call(null,inst_15074);var inst_15079 = cljs.core.chunk_rest.call(null,inst_15074);var inst_15080 = cljs.core.count.call(null,inst_15078);var inst_15054 = inst_15079;var inst_15055 = inst_15078;var inst_15056 = inst_15080;var inst_15057 = 0;var state_15111__$1 = (function (){var statearr_15124 = state_15111;(statearr_15124[8] = inst_15056);
(statearr_15124[9] = inst_15057);
(statearr_15124[10] = inst_15055);
(statearr_15124[11] = inst_15054);
return statearr_15124;
})();var statearr_15125_15203 = state_15111__$1;(statearr_15125_15203[2] = null);
(statearr_15125_15203[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 5))
{var inst_14993 = cljs.core.deref.call(null,cs);var inst_14994 = cljs.core.seq.call(null,inst_14993);var inst_14995 = inst_14994;var inst_14996 = null;var inst_14997 = 0;var inst_14998 = 0;var state_15111__$1 = (function (){var statearr_15126 = state_15111;(statearr_15126[12] = inst_14998);
(statearr_15126[13] = inst_14997);
(statearr_15126[14] = inst_14996);
(statearr_15126[15] = inst_14995);
return statearr_15126;
})();var statearr_15127_15204 = state_15111__$1;(statearr_15127_15204[2] = null);
(statearr_15127_15204[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 37))
{var inst_15074 = (state_15111[7]);var inst_15083 = cljs.core.first.call(null,inst_15074);var state_15111__$1 = (function (){var statearr_15128 = state_15111;(statearr_15128[16] = inst_15083);
return statearr_15128;
})();var statearr_15129_15205 = state_15111__$1;(statearr_15129_15205[2] = null);
(statearr_15129_15205[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 6))
{var inst_15045 = cljs.core.deref.call(null,cs);var inst_15046 = cljs.core.keys.call(null,inst_15045);var inst_15047 = cljs.core.count.call(null,inst_15046);var inst_15048 = cljs.core.reset_BANG_.call(null,dctr,inst_15047);var inst_15053 = cljs.core.seq.call(null,inst_15046);var inst_15054 = inst_15053;var inst_15055 = null;var inst_15056 = 0;var inst_15057 = 0;var state_15111__$1 = (function (){var statearr_15130 = state_15111;(statearr_15130[8] = inst_15056);
(statearr_15130[9] = inst_15057);
(statearr_15130[10] = inst_15055);
(statearr_15130[11] = inst_15054);
(statearr_15130[17] = inst_15048);
return statearr_15130;
})();var statearr_15131_15206 = state_15111__$1;(statearr_15131_15206[2] = null);
(statearr_15131_15206[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 38))
{var inst_15095 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15132_15207 = state_15111__$1;(statearr_15132_15207[2] = inst_15095);
(statearr_15132_15207[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 7))
{var inst_15107 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15133_15208 = state_15111__$1;(statearr_15133_15208[2] = inst_15107);
(statearr_15133_15208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 39))
{var inst_15074 = (state_15111[7]);var inst_15091 = (state_15111[2]);var inst_15092 = cljs.core.next.call(null,inst_15074);var inst_15054 = inst_15092;var inst_15055 = null;var inst_15056 = 0;var inst_15057 = 0;var state_15111__$1 = (function (){var statearr_15134 = state_15111;(statearr_15134[8] = inst_15056);
(statearr_15134[9] = inst_15057);
(statearr_15134[10] = inst_15055);
(statearr_15134[11] = inst_15054);
(statearr_15134[18] = inst_15091);
return statearr_15134;
})();var statearr_15135_15209 = state_15111__$1;(statearr_15135_15209[2] = null);
(statearr_15135_15209[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 8))
{var inst_14998 = (state_15111[12]);var inst_14997 = (state_15111[13]);var inst_15000 = (inst_14998 < inst_14997);var inst_15001 = inst_15000;var state_15111__$1 = state_15111;if(cljs.core.truth_(inst_15001))
{var statearr_15136_15210 = state_15111__$1;(statearr_15136_15210[1] = 10);
} else
{var statearr_15137_15211 = state_15111__$1;(statearr_15137_15211[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 40))
{var inst_15083 = (state_15111[16]);var inst_15084 = (state_15111[2]);var inst_15085 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15086 = cljs.core.async.untap_STAR_.call(null,m,inst_15083);var state_15111__$1 = (function (){var statearr_15138 = state_15111;(statearr_15138[19] = inst_15084);
(statearr_15138[20] = inst_15085);
return statearr_15138;
})();var statearr_15139_15212 = state_15111__$1;(statearr_15139_15212[2] = inst_15086);
(statearr_15139_15212[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 9))
{var inst_15043 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15140_15213 = state_15111__$1;(statearr_15140_15213[2] = inst_15043);
(statearr_15140_15213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 41))
{try{var inst_15083 = (state_15111[16]);var inst_14986 = (state_15111[6]);var inst_15089 = cljs.core.async.put_BANG_.call(null,inst_15083,inst_14986,done);var state_15111__$1 = state_15111;var statearr_15143_15214 = state_15111__$1;(statearr_15143_15214[2] = inst_15089);
(statearr_15143_15214[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15141){if((e15141 instanceof Object))
{var ex__5321__auto__ = e15141;var statearr_15142_15215 = state_15111;(statearr_15142_15215[1] = 40);
(statearr_15142_15215[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15141;
} else
{return null;
}
}
}} else
{if((state_val_15112 === 10))
{var inst_14998 = (state_15111[12]);var inst_14996 = (state_15111[14]);var inst_15004 = cljs.core._nth.call(null,inst_14996,inst_14998);var inst_15005 = cljs.core.nth.call(null,inst_15004,0,null);var inst_15006 = cljs.core.nth.call(null,inst_15004,1,null);var state_15111__$1 = (function (){var statearr_15144 = state_15111;(statearr_15144[21] = inst_15005);
return statearr_15144;
})();if(cljs.core.truth_(inst_15006))
{var statearr_15145_15216 = state_15111__$1;(statearr_15145_15216[1] = 13);
} else
{var statearr_15146_15217 = state_15111__$1;(statearr_15146_15217[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 42))
{var inst_15104 = (state_15111[2]);var state_15111__$1 = (function (){var statearr_15147 = state_15111;(statearr_15147[22] = inst_15104);
return statearr_15147;
})();var statearr_15148_15218 = state_15111__$1;(statearr_15148_15218[2] = null);
(statearr_15148_15218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 11))
{var inst_15015 = (state_15111[23]);var inst_14995 = (state_15111[15]);var inst_15015__$1 = cljs.core.seq.call(null,inst_14995);var state_15111__$1 = (function (){var statearr_15149 = state_15111;(statearr_15149[23] = inst_15015__$1);
return statearr_15149;
})();if(inst_15015__$1)
{var statearr_15150_15219 = state_15111__$1;(statearr_15150_15219[1] = 16);
} else
{var statearr_15151_15220 = state_15111__$1;(statearr_15151_15220[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 12))
{var inst_15041 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15152_15221 = state_15111__$1;(statearr_15152_15221[2] = inst_15041);
(statearr_15152_15221[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 13))
{var inst_15005 = (state_15111[21]);var inst_15008 = cljs.core.async.close_BANG_.call(null,inst_15005);var state_15111__$1 = state_15111;var statearr_15156_15222 = state_15111__$1;(statearr_15156_15222[2] = inst_15008);
(statearr_15156_15222[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 14))
{var state_15111__$1 = state_15111;var statearr_15157_15223 = state_15111__$1;(statearr_15157_15223[2] = null);
(statearr_15157_15223[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 15))
{var inst_14998 = (state_15111[12]);var inst_14997 = (state_15111[13]);var inst_14996 = (state_15111[14]);var inst_14995 = (state_15111[15]);var inst_15011 = (state_15111[2]);var inst_15012 = (inst_14998 + 1);var tmp15153 = inst_14997;var tmp15154 = inst_14996;var tmp15155 = inst_14995;var inst_14995__$1 = tmp15155;var inst_14996__$1 = tmp15154;var inst_14997__$1 = tmp15153;var inst_14998__$1 = inst_15012;var state_15111__$1 = (function (){var statearr_15158 = state_15111;(statearr_15158[24] = inst_15011);
(statearr_15158[12] = inst_14998__$1);
(statearr_15158[13] = inst_14997__$1);
(statearr_15158[14] = inst_14996__$1);
(statearr_15158[15] = inst_14995__$1);
return statearr_15158;
})();var statearr_15159_15224 = state_15111__$1;(statearr_15159_15224[2] = null);
(statearr_15159_15224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 16))
{var inst_15015 = (state_15111[23]);var inst_15017 = cljs.core.chunked_seq_QMARK_.call(null,inst_15015);var state_15111__$1 = state_15111;if(inst_15017)
{var statearr_15160_15225 = state_15111__$1;(statearr_15160_15225[1] = 19);
} else
{var statearr_15161_15226 = state_15111__$1;(statearr_15161_15226[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 17))
{var state_15111__$1 = state_15111;var statearr_15162_15227 = state_15111__$1;(statearr_15162_15227[2] = null);
(statearr_15162_15227[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 18))
{var inst_15039 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15163_15228 = state_15111__$1;(statearr_15163_15228[2] = inst_15039);
(statearr_15163_15228[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 19))
{var inst_15015 = (state_15111[23]);var inst_15019 = cljs.core.chunk_first.call(null,inst_15015);var inst_15020 = cljs.core.chunk_rest.call(null,inst_15015);var inst_15021 = cljs.core.count.call(null,inst_15019);var inst_14995 = inst_15020;var inst_14996 = inst_15019;var inst_14997 = inst_15021;var inst_14998 = 0;var state_15111__$1 = (function (){var statearr_15164 = state_15111;(statearr_15164[12] = inst_14998);
(statearr_15164[13] = inst_14997);
(statearr_15164[14] = inst_14996);
(statearr_15164[15] = inst_14995);
return statearr_15164;
})();var statearr_15165_15229 = state_15111__$1;(statearr_15165_15229[2] = null);
(statearr_15165_15229[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 20))
{var inst_15015 = (state_15111[23]);var inst_15025 = cljs.core.first.call(null,inst_15015);var inst_15026 = cljs.core.nth.call(null,inst_15025,0,null);var inst_15027 = cljs.core.nth.call(null,inst_15025,1,null);var state_15111__$1 = (function (){var statearr_15166 = state_15111;(statearr_15166[25] = inst_15026);
return statearr_15166;
})();if(cljs.core.truth_(inst_15027))
{var statearr_15167_15230 = state_15111__$1;(statearr_15167_15230[1] = 22);
} else
{var statearr_15168_15231 = state_15111__$1;(statearr_15168_15231[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 21))
{var inst_15036 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15169_15232 = state_15111__$1;(statearr_15169_15232[2] = inst_15036);
(statearr_15169_15232[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 22))
{var inst_15026 = (state_15111[25]);var inst_15029 = cljs.core.async.close_BANG_.call(null,inst_15026);var state_15111__$1 = state_15111;var statearr_15170_15233 = state_15111__$1;(statearr_15170_15233[2] = inst_15029);
(statearr_15170_15233[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 23))
{var state_15111__$1 = state_15111;var statearr_15171_15234 = state_15111__$1;(statearr_15171_15234[2] = null);
(statearr_15171_15234[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 24))
{var inst_15015 = (state_15111[23]);var inst_15032 = (state_15111[2]);var inst_15033 = cljs.core.next.call(null,inst_15015);var inst_14995 = inst_15033;var inst_14996 = null;var inst_14997 = 0;var inst_14998 = 0;var state_15111__$1 = (function (){var statearr_15172 = state_15111;(statearr_15172[12] = inst_14998);
(statearr_15172[13] = inst_14997);
(statearr_15172[14] = inst_14996);
(statearr_15172[15] = inst_14995);
(statearr_15172[26] = inst_15032);
return statearr_15172;
})();var statearr_15173_15235 = state_15111__$1;(statearr_15173_15235[2] = null);
(statearr_15173_15235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 25))
{var inst_15056 = (state_15111[8]);var inst_15057 = (state_15111[9]);var inst_15059 = (inst_15057 < inst_15056);var inst_15060 = inst_15059;var state_15111__$1 = state_15111;if(cljs.core.truth_(inst_15060))
{var statearr_15174_15236 = state_15111__$1;(statearr_15174_15236[1] = 27);
} else
{var statearr_15175_15237 = state_15111__$1;(statearr_15175_15237[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 26))
{var inst_15102 = (state_15111[2]);var state_15111__$1 = (function (){var statearr_15176 = state_15111;(statearr_15176[27] = inst_15102);
return statearr_15176;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15111__$1,42,dchan);
} else
{if((state_val_15112 === 27))
{var inst_15057 = (state_15111[9]);var inst_15055 = (state_15111[10]);var inst_15062 = cljs.core._nth.call(null,inst_15055,inst_15057);var state_15111__$1 = (function (){var statearr_15177 = state_15111;(statearr_15177[5] = inst_15062);
return statearr_15177;
})();var statearr_15178_15238 = state_15111__$1;(statearr_15178_15238[2] = null);
(statearr_15178_15238[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 28))
{var inst_15054 = (state_15111[11]);var inst_15074 = (state_15111[7]);var inst_15074__$1 = cljs.core.seq.call(null,inst_15054);var state_15111__$1 = (function (){var statearr_15182 = state_15111;(statearr_15182[7] = inst_15074__$1);
return statearr_15182;
})();if(inst_15074__$1)
{var statearr_15183_15239 = state_15111__$1;(statearr_15183_15239[1] = 33);
} else
{var statearr_15184_15240 = state_15111__$1;(statearr_15184_15240[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 29))
{var inst_15100 = (state_15111[2]);var state_15111__$1 = state_15111;var statearr_15185_15241 = state_15111__$1;(statearr_15185_15241[2] = inst_15100);
(statearr_15185_15241[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 30))
{var inst_15056 = (state_15111[8]);var inst_15057 = (state_15111[9]);var inst_15055 = (state_15111[10]);var inst_15054 = (state_15111[11]);var inst_15070 = (state_15111[2]);var inst_15071 = (inst_15057 + 1);var tmp15179 = inst_15056;var tmp15180 = inst_15055;var tmp15181 = inst_15054;var inst_15054__$1 = tmp15181;var inst_15055__$1 = tmp15180;var inst_15056__$1 = tmp15179;var inst_15057__$1 = inst_15071;var state_15111__$1 = (function (){var statearr_15186 = state_15111;(statearr_15186[8] = inst_15056__$1);
(statearr_15186[9] = inst_15057__$1);
(statearr_15186[10] = inst_15055__$1);
(statearr_15186[11] = inst_15054__$1);
(statearr_15186[28] = inst_15070);
return statearr_15186;
})();var statearr_15187_15242 = state_15111__$1;(statearr_15187_15242[2] = null);
(statearr_15187_15242[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15112 === 31))
{var inst_15062 = (state_15111[5]);var inst_15063 = (state_15111[2]);var inst_15064 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15065 = cljs.core.async.untap_STAR_.call(null,m,inst_15062);var state_15111__$1 = (function (){var statearr_15188 = state_15111;(statearr_15188[29] = inst_15064);
(statearr_15188[30] = inst_15063);
return statearr_15188;
})();var statearr_15189_15243 = state_15111__$1;(statearr_15189_15243[2] = inst_15065);
(statearr_15189_15243[1] = 30);
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
var state_machine__5328__auto____0 = (function (){var statearr_15191 = (new Array(31));(statearr_15191[0] = state_machine__5328__auto__);
(statearr_15191[1] = 1);
return statearr_15191;
});
var state_machine__5328__auto____1 = (function (state_15111){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15111){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15192 = f__5378__auto__.call(null);(statearr_15192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15193);
return statearr_15192;
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
;var m = (function (){if(typeof cljs.core.async.t15349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15349 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15350){
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
this.meta15350 = meta15350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15349.cljs$lang$type = true;
cljs.core.async.t15349.cljs$lang$ctorStr = "cljs.core.async/t15349";
cljs.core.async.t15349.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15349");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15349.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15351){var self__ = this;
var _15351__$1 = this;return self__.meta15350;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15351,meta15350__$1){var self__ = this;
var _15351__$1 = this;return (new cljs.core.async.t15349(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15350__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15349 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15349(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15350){return (new cljs.core.async.t15349(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15350));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15349(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5377__auto___15454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15416){var state_val_15417 = (state_15416[1]);if((state_val_15417 === 1))
{var inst_15355 = (state_15416[5]);var inst_15355__$1 = calc_state.call(null);var inst_15356 = cljs.core.seq_QMARK_.call(null,inst_15355__$1);var state_15416__$1 = (function (){var statearr_15418 = state_15416;(statearr_15418[5] = inst_15355__$1);
return statearr_15418;
})();if(inst_15356)
{var statearr_15419_15455 = state_15416__$1;(statearr_15419_15455[1] = 2);
} else
{var statearr_15420_15456 = state_15416__$1;(statearr_15420_15456[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 2))
{var inst_15355 = (state_15416[5]);var inst_15358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15355);var state_15416__$1 = state_15416;var statearr_15421_15457 = state_15416__$1;(statearr_15421_15457[2] = inst_15358);
(statearr_15421_15457[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 3))
{var inst_15355 = (state_15416[5]);var state_15416__$1 = state_15416;var statearr_15422_15458 = state_15416__$1;(statearr_15422_15458[2] = inst_15355);
(statearr_15422_15458[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 4))
{var inst_15355 = (state_15416[5]);var inst_15361 = (state_15416[2]);var inst_15362 = cljs.core.get.call(null,inst_15361,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15363 = cljs.core.get.call(null,inst_15361,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15364 = cljs.core.get.call(null,inst_15361,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15365 = inst_15355;var state_15416__$1 = (function (){var statearr_15423 = state_15416;(statearr_15423[6] = inst_15364);
(statearr_15423[7] = inst_15365);
(statearr_15423[8] = inst_15363);
(statearr_15423[9] = inst_15362);
return statearr_15423;
})();var statearr_15424_15459 = state_15416__$1;(statearr_15424_15459[2] = null);
(statearr_15424_15459[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 5))
{var inst_15365 = (state_15416[7]);var inst_15368 = cljs.core.seq_QMARK_.call(null,inst_15365);var state_15416__$1 = state_15416;if(inst_15368)
{var statearr_15425_15460 = state_15416__$1;(statearr_15425_15460[1] = 7);
} else
{var statearr_15426_15461 = state_15416__$1;(statearr_15426_15461[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 6))
{var inst_15414 = (state_15416[2]);var state_15416__$1 = state_15416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15416__$1,inst_15414);
} else
{if((state_val_15417 === 7))
{var inst_15365 = (state_15416[7]);var inst_15370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15365);var state_15416__$1 = state_15416;var statearr_15427_15462 = state_15416__$1;(statearr_15427_15462[2] = inst_15370);
(statearr_15427_15462[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 8))
{var inst_15365 = (state_15416[7]);var state_15416__$1 = state_15416;var statearr_15428_15463 = state_15416__$1;(statearr_15428_15463[2] = inst_15365);
(statearr_15428_15463[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 9))
{var inst_15373 = (state_15416[10]);var inst_15373__$1 = (state_15416[2]);var inst_15374 = cljs.core.get.call(null,inst_15373__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15375 = cljs.core.get.call(null,inst_15373__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15376 = cljs.core.get.call(null,inst_15373__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15416__$1 = (function (){var statearr_15429 = state_15416;(statearr_15429[11] = inst_15375);
(statearr_15429[12] = inst_15376);
(statearr_15429[10] = inst_15373__$1);
return statearr_15429;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15416__$1,10,inst_15374);
} else
{if((state_val_15417 === 10))
{var inst_15380 = (state_15416[13]);var inst_15381 = (state_15416[14]);var inst_15379 = (state_15416[2]);var inst_15380__$1 = cljs.core.nth.call(null,inst_15379,0,null);var inst_15381__$1 = cljs.core.nth.call(null,inst_15379,1,null);var inst_15382 = (inst_15380__$1 == null);var inst_15383 = cljs.core._EQ_.call(null,inst_15381__$1,change);var inst_15384 = (inst_15382) || (inst_15383);var state_15416__$1 = (function (){var statearr_15430 = state_15416;(statearr_15430[13] = inst_15380__$1);
(statearr_15430[14] = inst_15381__$1);
return statearr_15430;
})();if(cljs.core.truth_(inst_15384))
{var statearr_15431_15464 = state_15416__$1;(statearr_15431_15464[1] = 11);
} else
{var statearr_15432_15465 = state_15416__$1;(statearr_15432_15465[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 11))
{var inst_15380 = (state_15416[13]);var inst_15386 = (inst_15380 == null);var state_15416__$1 = state_15416;if(cljs.core.truth_(inst_15386))
{var statearr_15433_15466 = state_15416__$1;(statearr_15433_15466[1] = 14);
} else
{var statearr_15434_15467 = state_15416__$1;(statearr_15434_15467[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 12))
{var inst_15376 = (state_15416[12]);var inst_15381 = (state_15416[14]);var inst_15395 = (state_15416[15]);var inst_15395__$1 = inst_15376.call(null,inst_15381);var state_15416__$1 = (function (){var statearr_15435 = state_15416;(statearr_15435[15] = inst_15395__$1);
return statearr_15435;
})();if(cljs.core.truth_(inst_15395__$1))
{var statearr_15436_15468 = state_15416__$1;(statearr_15436_15468[1] = 17);
} else
{var statearr_15437_15469 = state_15416__$1;(statearr_15437_15469[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 13))
{var inst_15412 = (state_15416[2]);var state_15416__$1 = state_15416;var statearr_15438_15470 = state_15416__$1;(statearr_15438_15470[2] = inst_15412);
(statearr_15438_15470[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 14))
{var inst_15381 = (state_15416[14]);var inst_15388 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15381);var state_15416__$1 = state_15416;var statearr_15439_15471 = state_15416__$1;(statearr_15439_15471[2] = inst_15388);
(statearr_15439_15471[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 15))
{var state_15416__$1 = state_15416;var statearr_15440_15472 = state_15416__$1;(statearr_15440_15472[2] = null);
(statearr_15440_15472[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 16))
{var inst_15391 = (state_15416[2]);var inst_15392 = calc_state.call(null);var inst_15365 = inst_15392;var state_15416__$1 = (function (){var statearr_15441 = state_15416;(statearr_15441[16] = inst_15391);
(statearr_15441[7] = inst_15365);
return statearr_15441;
})();var statearr_15442_15473 = state_15416__$1;(statearr_15442_15473[2] = null);
(statearr_15442_15473[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 17))
{var inst_15395 = (state_15416[15]);var state_15416__$1 = state_15416;var statearr_15443_15474 = state_15416__$1;(statearr_15443_15474[2] = inst_15395);
(statearr_15443_15474[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 18))
{var inst_15375 = (state_15416[11]);var inst_15376 = (state_15416[12]);var inst_15381 = (state_15416[14]);var inst_15398 = cljs.core.empty_QMARK_.call(null,inst_15376);var inst_15399 = inst_15375.call(null,inst_15381);var inst_15400 = cljs.core.not.call(null,inst_15399);var inst_15401 = (inst_15398) && (inst_15400);var state_15416__$1 = state_15416;var statearr_15444_15475 = state_15416__$1;(statearr_15444_15475[2] = inst_15401);
(statearr_15444_15475[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 19))
{var inst_15403 = (state_15416[2]);var state_15416__$1 = state_15416;if(cljs.core.truth_(inst_15403))
{var statearr_15445_15476 = state_15416__$1;(statearr_15445_15476[1] = 20);
} else
{var statearr_15446_15477 = state_15416__$1;(statearr_15446_15477[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 20))
{var inst_15380 = (state_15416[13]);var state_15416__$1 = state_15416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15416__$1,23,out,inst_15380);
} else
{if((state_val_15417 === 21))
{var state_15416__$1 = state_15416;var statearr_15447_15478 = state_15416__$1;(statearr_15447_15478[2] = null);
(statearr_15447_15478[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 22))
{var inst_15373 = (state_15416[10]);var inst_15409 = (state_15416[2]);var inst_15365 = inst_15373;var state_15416__$1 = (function (){var statearr_15448 = state_15416;(statearr_15448[17] = inst_15409);
(statearr_15448[7] = inst_15365);
return statearr_15448;
})();var statearr_15449_15479 = state_15416__$1;(statearr_15449_15479[2] = null);
(statearr_15449_15479[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15417 === 23))
{var inst_15406 = (state_15416[2]);var state_15416__$1 = state_15416;var statearr_15450_15480 = state_15416__$1;(statearr_15450_15480[2] = inst_15406);
(statearr_15450_15480[1] = 22);
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
var state_machine__5328__auto____0 = (function (){var statearr_15452 = (new Array(18));(statearr_15452[0] = state_machine__5328__auto__);
(statearr_15452[1] = 1);
return statearr_15452;
});
var state_machine__5328__auto____1 = (function (state_15416){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15416);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15416){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15453 = f__5378__auto__.call(null);(statearr_15453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15454);
return statearr_15453;
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
return (function (p1__15481_SHARP_){if(cljs.core.truth_(p1__15481_SHARP_.call(null,topic)))
{return p1__15481_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15481_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15605 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15606){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15606 = meta15606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15605.cljs$lang$type = true;
cljs.core.async.t15605.cljs$lang$ctorStr = "cljs.core.async/t15605";
cljs.core.async.t15605.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15605");
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15607){var self__ = this;
var _15607__$1 = this;return self__.meta15606;
});})(mults,ensure_mult))
;
cljs.core.async.t15605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15607,meta15606__$1){var self__ = this;
var _15607__$1 = this;return (new cljs.core.async.t15605(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15606__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15605 = ((function (mults,ensure_mult){
return (function __GT_t15605(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15606){return (new cljs.core.async.t15605(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15606));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15605(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5377__auto___15728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15680){var state_val_15681 = (state_15680[1]);if((state_val_15681 === 1))
{var state_15680__$1 = state_15680;var statearr_15682_15729 = state_15680__$1;(statearr_15682_15729[2] = null);
(statearr_15682_15729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 2))
{var state_15680__$1 = state_15680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15680__$1,4,ch);
} else
{if((state_val_15681 === 3))
{var inst_15678 = (state_15680[2]);var state_15680__$1 = state_15680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15680__$1,inst_15678);
} else
{if((state_val_15681 === 4))
{var inst_15610 = (state_15680[5]);var inst_15610__$1 = (state_15680[2]);var inst_15611 = (inst_15610__$1 == null);var state_15680__$1 = (function (){var statearr_15683 = state_15680;(statearr_15683[5] = inst_15610__$1);
return statearr_15683;
})();if(cljs.core.truth_(inst_15611))
{var statearr_15684_15730 = state_15680__$1;(statearr_15684_15730[1] = 5);
} else
{var statearr_15685_15731 = state_15680__$1;(statearr_15685_15731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 5))
{var inst_15617 = cljs.core.deref.call(null,mults);var inst_15618 = cljs.core.vals.call(null,inst_15617);var inst_15619 = cljs.core.seq.call(null,inst_15618);var inst_15620 = inst_15619;var inst_15621 = null;var inst_15622 = 0;var inst_15623 = 0;var state_15680__$1 = (function (){var statearr_15686 = state_15680;(statearr_15686[6] = inst_15623);
(statearr_15686[7] = inst_15622);
(statearr_15686[8] = inst_15621);
(statearr_15686[9] = inst_15620);
return statearr_15686;
})();var statearr_15687_15732 = state_15680__$1;(statearr_15687_15732[2] = null);
(statearr_15687_15732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 6))
{var inst_15658 = (state_15680[10]);var inst_15660 = (state_15680[11]);var inst_15610 = (state_15680[5]);var inst_15658__$1 = topic_fn.call(null,inst_15610);var inst_15659 = cljs.core.deref.call(null,mults);var inst_15660__$1 = cljs.core.get.call(null,inst_15659,inst_15658__$1);var state_15680__$1 = (function (){var statearr_15688 = state_15680;(statearr_15688[10] = inst_15658__$1);
(statearr_15688[11] = inst_15660__$1);
return statearr_15688;
})();if(cljs.core.truth_(inst_15660__$1))
{var statearr_15689_15733 = state_15680__$1;(statearr_15689_15733[1] = 19);
} else
{var statearr_15690_15734 = state_15680__$1;(statearr_15690_15734[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 7))
{var inst_15676 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15691_15735 = state_15680__$1;(statearr_15691_15735[2] = inst_15676);
(statearr_15691_15735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 8))
{var inst_15623 = (state_15680[6]);var inst_15622 = (state_15680[7]);var inst_15625 = (inst_15623 < inst_15622);var inst_15626 = inst_15625;var state_15680__$1 = state_15680;if(cljs.core.truth_(inst_15626))
{var statearr_15695_15736 = state_15680__$1;(statearr_15695_15736[1] = 10);
} else
{var statearr_15696_15737 = state_15680__$1;(statearr_15696_15737[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 9))
{var inst_15656 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15697_15738 = state_15680__$1;(statearr_15697_15738[2] = inst_15656);
(statearr_15697_15738[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 10))
{var inst_15623 = (state_15680[6]);var inst_15622 = (state_15680[7]);var inst_15621 = (state_15680[8]);var inst_15620 = (state_15680[9]);var inst_15628 = cljs.core._nth.call(null,inst_15621,inst_15623);var inst_15629 = cljs.core.async.muxch_STAR_.call(null,inst_15628);var inst_15630 = cljs.core.async.close_BANG_.call(null,inst_15629);var inst_15631 = (inst_15623 + 1);var tmp15692 = inst_15622;var tmp15693 = inst_15621;var tmp15694 = inst_15620;var inst_15620__$1 = tmp15694;var inst_15621__$1 = tmp15693;var inst_15622__$1 = tmp15692;var inst_15623__$1 = inst_15631;var state_15680__$1 = (function (){var statearr_15698 = state_15680;(statearr_15698[6] = inst_15623__$1);
(statearr_15698[7] = inst_15622__$1);
(statearr_15698[8] = inst_15621__$1);
(statearr_15698[9] = inst_15620__$1);
(statearr_15698[12] = inst_15630);
return statearr_15698;
})();var statearr_15699_15739 = state_15680__$1;(statearr_15699_15739[2] = null);
(statearr_15699_15739[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 11))
{var inst_15620 = (state_15680[9]);var inst_15634 = (state_15680[13]);var inst_15634__$1 = cljs.core.seq.call(null,inst_15620);var state_15680__$1 = (function (){var statearr_15700 = state_15680;(statearr_15700[13] = inst_15634__$1);
return statearr_15700;
})();if(inst_15634__$1)
{var statearr_15701_15740 = state_15680__$1;(statearr_15701_15740[1] = 13);
} else
{var statearr_15702_15741 = state_15680__$1;(statearr_15702_15741[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 12))
{var inst_15654 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15703_15742 = state_15680__$1;(statearr_15703_15742[2] = inst_15654);
(statearr_15703_15742[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 13))
{var inst_15634 = (state_15680[13]);var inst_15636 = cljs.core.chunked_seq_QMARK_.call(null,inst_15634);var state_15680__$1 = state_15680;if(inst_15636)
{var statearr_15704_15743 = state_15680__$1;(statearr_15704_15743[1] = 16);
} else
{var statearr_15705_15744 = state_15680__$1;(statearr_15705_15744[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 14))
{var state_15680__$1 = state_15680;var statearr_15706_15745 = state_15680__$1;(statearr_15706_15745[2] = null);
(statearr_15706_15745[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 15))
{var inst_15652 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15707_15746 = state_15680__$1;(statearr_15707_15746[2] = inst_15652);
(statearr_15707_15746[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 16))
{var inst_15634 = (state_15680[13]);var inst_15638 = cljs.core.chunk_first.call(null,inst_15634);var inst_15639 = cljs.core.chunk_rest.call(null,inst_15634);var inst_15640 = cljs.core.count.call(null,inst_15638);var inst_15620 = inst_15639;var inst_15621 = inst_15638;var inst_15622 = inst_15640;var inst_15623 = 0;var state_15680__$1 = (function (){var statearr_15708 = state_15680;(statearr_15708[6] = inst_15623);
(statearr_15708[7] = inst_15622);
(statearr_15708[8] = inst_15621);
(statearr_15708[9] = inst_15620);
return statearr_15708;
})();var statearr_15709_15747 = state_15680__$1;(statearr_15709_15747[2] = null);
(statearr_15709_15747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 17))
{var inst_15634 = (state_15680[13]);var inst_15643 = cljs.core.first.call(null,inst_15634);var inst_15644 = cljs.core.async.muxch_STAR_.call(null,inst_15643);var inst_15645 = cljs.core.async.close_BANG_.call(null,inst_15644);var inst_15646 = cljs.core.next.call(null,inst_15634);var inst_15620 = inst_15646;var inst_15621 = null;var inst_15622 = 0;var inst_15623 = 0;var state_15680__$1 = (function (){var statearr_15710 = state_15680;(statearr_15710[6] = inst_15623);
(statearr_15710[7] = inst_15622);
(statearr_15710[8] = inst_15621);
(statearr_15710[9] = inst_15620);
(statearr_15710[14] = inst_15645);
return statearr_15710;
})();var statearr_15711_15748 = state_15680__$1;(statearr_15711_15748[2] = null);
(statearr_15711_15748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 18))
{var inst_15649 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15712_15749 = state_15680__$1;(statearr_15712_15749[2] = inst_15649);
(statearr_15712_15749[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 19))
{var state_15680__$1 = state_15680;var statearr_15713_15750 = state_15680__$1;(statearr_15713_15750[2] = null);
(statearr_15713_15750[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 20))
{var state_15680__$1 = state_15680;var statearr_15714_15751 = state_15680__$1;(statearr_15714_15751[2] = null);
(statearr_15714_15751[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 21))
{var inst_15673 = (state_15680[2]);var state_15680__$1 = (function (){var statearr_15715 = state_15680;(statearr_15715[15] = inst_15673);
return statearr_15715;
})();var statearr_15716_15752 = state_15680__$1;(statearr_15716_15752[2] = null);
(statearr_15716_15752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 22))
{var inst_15670 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15717_15753 = state_15680__$1;(statearr_15717_15753[2] = inst_15670);
(statearr_15717_15753[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 23))
{var inst_15658 = (state_15680[10]);var inst_15662 = (state_15680[2]);var inst_15663 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15658);var state_15680__$1 = (function (){var statearr_15718 = state_15680;(statearr_15718[16] = inst_15662);
return statearr_15718;
})();var statearr_15719_15754 = state_15680__$1;(statearr_15719_15754[2] = inst_15663);
(statearr_15719_15754[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15681 === 24))
{try{var inst_15660 = (state_15680[11]);var inst_15610 = (state_15680[5]);var inst_15666 = cljs.core.async.muxch_STAR_.call(null,inst_15660);var state_15680__$1 = state_15680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15680__$1,25,inst_15666,inst_15610);
}catch (e15720){if((e15720 instanceof Object))
{var ex__5321__auto__ = e15720;var statearr_15721_15755 = state_15680;(statearr_15721_15755[1] = 23);
(statearr_15721_15755[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15720;
} else
{return null;
}
}
}} else
{if((state_val_15681 === 25))
{try{var inst_15668 = (state_15680[2]);var state_15680__$1 = state_15680;var statearr_15724_15756 = state_15680__$1;(statearr_15724_15756[2] = inst_15668);
(statearr_15724_15756[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15722){if((e15722 instanceof Object))
{var ex__5321__auto__ = e15722;var statearr_15723_15757 = state_15680;(statearr_15723_15757[1] = 23);
(statearr_15723_15757[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15722;
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
var state_machine__5328__auto____0 = (function (){var statearr_15726 = (new Array(17));(statearr_15726[0] = state_machine__5328__auto__);
(statearr_15726[1] = 1);
return statearr_15726;
});
var state_machine__5328__auto____1 = (function (state_15680){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15680){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15727 = f__5378__auto__.call(null);(statearr_15727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15728);
return statearr_15727;
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
,cljs.core.range.call(null,cnt));var c__5377__auto___15888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15860){var state_val_15861 = (state_15860[1]);if((state_val_15861 === 1))
{var state_15860__$1 = state_15860;var statearr_15862_15889 = state_15860__$1;(statearr_15862_15889[2] = null);
(statearr_15862_15889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 2))
{var inst_15824 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15825 = 0;var state_15860__$1 = (function (){var statearr_15863 = state_15860;(statearr_15863[5] = inst_15824);
(statearr_15863[6] = inst_15825);
return statearr_15863;
})();var statearr_15864_15890 = state_15860__$1;(statearr_15864_15890[2] = null);
(statearr_15864_15890[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 3))
{var inst_15858 = (state_15860[2]);var state_15860__$1 = state_15860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15860__$1,inst_15858);
} else
{if((state_val_15861 === 4))
{var inst_15825 = (state_15860[6]);var inst_15827 = (inst_15825 < cnt);var state_15860__$1 = state_15860;if(cljs.core.truth_(inst_15827))
{var statearr_15865_15891 = state_15860__$1;(statearr_15865_15891[1] = 6);
} else
{var statearr_15866_15892 = state_15860__$1;(statearr_15866_15892[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 5))
{var inst_15844 = (state_15860[2]);var state_15860__$1 = (function (){var statearr_15867 = state_15860;(statearr_15867[7] = inst_15844);
return statearr_15867;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15860__$1,12,dchan);
} else
{if((state_val_15861 === 6))
{var state_15860__$1 = state_15860;var statearr_15868_15893 = state_15860__$1;(statearr_15868_15893[2] = null);
(statearr_15868_15893[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 7))
{var state_15860__$1 = state_15860;var statearr_15869_15894 = state_15860__$1;(statearr_15869_15894[2] = null);
(statearr_15869_15894[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 8))
{var inst_15842 = (state_15860[2]);var state_15860__$1 = state_15860;var statearr_15870_15895 = state_15860__$1;(statearr_15870_15895[2] = inst_15842);
(statearr_15870_15895[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 9))
{var inst_15825 = (state_15860[6]);var inst_15837 = (state_15860[2]);var inst_15838 = (inst_15825 + 1);var inst_15825__$1 = inst_15838;var state_15860__$1 = (function (){var statearr_15871 = state_15860;(statearr_15871[8] = inst_15837);
(statearr_15871[6] = inst_15825__$1);
return statearr_15871;
})();var statearr_15872_15896 = state_15860__$1;(statearr_15872_15896[2] = null);
(statearr_15872_15896[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 10))
{var inst_15829 = (state_15860[2]);var inst_15830 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15860__$1 = (function (){var statearr_15873 = state_15860;(statearr_15873[9] = inst_15829);
return statearr_15873;
})();var statearr_15874_15897 = state_15860__$1;(statearr_15874_15897[2] = inst_15830);
(statearr_15874_15897[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 11))
{try{var inst_15825 = (state_15860[6]);var inst_15833 = chs__$1.call(null,inst_15825);var inst_15834 = done.call(null,inst_15825);var inst_15835 = cljs.core.async.take_BANG_.call(null,inst_15833,inst_15834);var state_15860__$1 = state_15860;var statearr_15877_15898 = state_15860__$1;(statearr_15877_15898[2] = inst_15835);
(statearr_15877_15898[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15875){if((e15875 instanceof Object))
{var ex__5321__auto__ = e15875;var statearr_15876_15899 = state_15860;(statearr_15876_15899[1] = 10);
(statearr_15876_15899[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15875;
} else
{return null;
}
}
}} else
{if((state_val_15861 === 12))
{var inst_15846 = (state_15860[10]);var inst_15846__$1 = (state_15860[2]);var inst_15847 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15846__$1);var state_15860__$1 = (function (){var statearr_15878 = state_15860;(statearr_15878[10] = inst_15846__$1);
return statearr_15878;
})();if(cljs.core.truth_(inst_15847))
{var statearr_15879_15900 = state_15860__$1;(statearr_15879_15900[1] = 13);
} else
{var statearr_15880_15901 = state_15860__$1;(statearr_15880_15901[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 13))
{var inst_15849 = cljs.core.async.close_BANG_.call(null,out);var state_15860__$1 = state_15860;var statearr_15881_15902 = state_15860__$1;(statearr_15881_15902[2] = inst_15849);
(statearr_15881_15902[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 14))
{var inst_15846 = (state_15860[10]);var inst_15851 = cljs.core.apply.call(null,f,inst_15846);var state_15860__$1 = state_15860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15860__$1,16,out,inst_15851);
} else
{if((state_val_15861 === 15))
{var inst_15856 = (state_15860[2]);var state_15860__$1 = state_15860;var statearr_15882_15903 = state_15860__$1;(statearr_15882_15903[2] = inst_15856);
(statearr_15882_15903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15861 === 16))
{var inst_15853 = (state_15860[2]);var state_15860__$1 = (function (){var statearr_15883 = state_15860;(statearr_15883[11] = inst_15853);
return statearr_15883;
})();var statearr_15884_15904 = state_15860__$1;(statearr_15884_15904[2] = null);
(statearr_15884_15904[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_15886 = (new Array(12));(statearr_15886[0] = state_machine__5328__auto__);
(statearr_15886[1] = 1);
return statearr_15886;
});
var state_machine__5328__auto____1 = (function (state_15860){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15860);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15860){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15887 = f__5378__auto__.call(null);(statearr_15887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15888);
return statearr_15887;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5377__auto___16004 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15984){var state_val_15985 = (state_15984[1]);if((state_val_15985 === 1))
{var inst_15955 = cljs.core.vec.call(null,chs);var inst_15956 = inst_15955;var state_15984__$1 = (function (){var statearr_15986 = state_15984;(statearr_15986[5] = inst_15956);
return statearr_15986;
})();var statearr_15987_16005 = state_15984__$1;(statearr_15987_16005[2] = null);
(statearr_15987_16005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 2))
{var inst_15956 = (state_15984[5]);var inst_15958 = cljs.core.count.call(null,inst_15956);var inst_15959 = (inst_15958 > 0);var state_15984__$1 = state_15984;if(cljs.core.truth_(inst_15959))
{var statearr_15988_16006 = state_15984__$1;(statearr_15988_16006[1] = 4);
} else
{var statearr_15989_16007 = state_15984__$1;(statearr_15989_16007[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 3))
{var inst_15982 = (state_15984[2]);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15984__$1,inst_15982);
} else
{if((state_val_15985 === 4))
{var inst_15956 = (state_15984[5]);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15984__$1,7,inst_15956);
} else
{if((state_val_15985 === 5))
{var inst_15978 = cljs.core.async.close_BANG_.call(null,out);var state_15984__$1 = state_15984;var statearr_15990_16008 = state_15984__$1;(statearr_15990_16008[2] = inst_15978);
(statearr_15990_16008[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 6))
{var inst_15980 = (state_15984[2]);var state_15984__$1 = state_15984;var statearr_15991_16009 = state_15984__$1;(statearr_15991_16009[2] = inst_15980);
(statearr_15991_16009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 7))
{var inst_15964 = (state_15984[6]);var inst_15963 = (state_15984[7]);var inst_15963__$1 = (state_15984[2]);var inst_15964__$1 = cljs.core.nth.call(null,inst_15963__$1,0,null);var inst_15965 = cljs.core.nth.call(null,inst_15963__$1,1,null);var inst_15966 = (inst_15964__$1 == null);var state_15984__$1 = (function (){var statearr_15992 = state_15984;(statearr_15992[8] = inst_15965);
(statearr_15992[6] = inst_15964__$1);
(statearr_15992[7] = inst_15963__$1);
return statearr_15992;
})();if(cljs.core.truth_(inst_15966))
{var statearr_15993_16010 = state_15984__$1;(statearr_15993_16010[1] = 8);
} else
{var statearr_15994_16011 = state_15984__$1;(statearr_15994_16011[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 8))
{var inst_15965 = (state_15984[8]);var inst_15964 = (state_15984[6]);var inst_15956 = (state_15984[5]);var inst_15963 = (state_15984[7]);var inst_15968 = (function (){var c = inst_15965;var v = inst_15964;var vec__15961 = inst_15963;var cs = inst_15956;return ((function (c,v,vec__15961,cs,inst_15965,inst_15964,inst_15956,inst_15963,state_val_15985){
return (function (p1__15905_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15905_SHARP_);
});
;})(c,v,vec__15961,cs,inst_15965,inst_15964,inst_15956,inst_15963,state_val_15985))
})();var inst_15969 = cljs.core.filterv.call(null,inst_15968,inst_15956);var inst_15956__$1 = inst_15969;var state_15984__$1 = (function (){var statearr_15995 = state_15984;(statearr_15995[5] = inst_15956__$1);
return statearr_15995;
})();var statearr_15996_16012 = state_15984__$1;(statearr_15996_16012[2] = null);
(statearr_15996_16012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 9))
{var inst_15964 = (state_15984[6]);var state_15984__$1 = state_15984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15984__$1,11,out,inst_15964);
} else
{if((state_val_15985 === 10))
{var inst_15976 = (state_15984[2]);var state_15984__$1 = state_15984;var statearr_15998_16013 = state_15984__$1;(statearr_15998_16013[2] = inst_15976);
(statearr_15998_16013[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15985 === 11))
{var inst_15956 = (state_15984[5]);var inst_15973 = (state_15984[2]);var tmp15997 = inst_15956;var inst_15956__$1 = tmp15997;var state_15984__$1 = (function (){var statearr_15999 = state_15984;(statearr_15999[9] = inst_15973);
(statearr_15999[5] = inst_15956__$1);
return statearr_15999;
})();var statearr_16000_16014 = state_15984__$1;(statearr_16000_16014[2] = null);
(statearr_16000_16014[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_16002 = (new Array(10));(statearr_16002[0] = state_machine__5328__auto__);
(statearr_16002[1] = 1);
return statearr_16002;
});
var state_machine__5328__auto____1 = (function (state_15984){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15984){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_16003 = f__5378__auto__.call(null);(statearr_16003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___16004);
return statearr_16003;
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