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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14728 = (function (f,fn_handler,meta14729){
this.f = f;
this.fn_handler = fn_handler;
this.meta14729 = meta14729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14728.cljs$lang$type = true;
cljs.core.async.t14728.cljs$lang$ctorStr = "cljs.core.async/t14728";
cljs.core.async.t14728.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14728");
});
cljs.core.async.t14728.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14730){var self__ = this;
var _14730__$1 = this;return self__.meta14729;
});
cljs.core.async.t14728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14730,meta14729__$1){var self__ = this;
var _14730__$1 = this;return (new cljs.core.async.t14728(self__.f,self__.fn_handler,meta14729__$1));
});
cljs.core.async.__GT_t14728 = (function __GT_t14728(f__$1,fn_handler__$1,meta14729){return (new cljs.core.async.t14728(f__$1,fn_handler__$1,meta14729));
});
}
return (new cljs.core.async.t14728(f,fn_handler,null));
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
{var val_14731 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14731);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14731);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___14732 = n;var x_14733 = 0;while(true){
if((x_14733 < n__3891__auto___14732))
{(a[x_14733] = 0);
{
var G__14734 = (x_14733 + 1);
x_14733 = G__14734;
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
var G__14735 = (i + 1);
i = G__14735;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14739 = (function (flag,alt_flag,meta14740){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14740 = meta14740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14739.cljs$lang$type = true;
cljs.core.async.t14739.cljs$lang$ctorStr = "cljs.core.async/t14739";
cljs.core.async.t14739.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14739");
});
cljs.core.async.t14739.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14741){var self__ = this;
var _14741__$1 = this;return self__.meta14740;
});
cljs.core.async.t14739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14741,meta14740__$1){var self__ = this;
var _14741__$1 = this;return (new cljs.core.async.t14739(self__.flag,self__.alt_flag,meta14740__$1));
});
cljs.core.async.__GT_t14739 = (function __GT_t14739(flag__$1,alt_flag__$1,meta14740){return (new cljs.core.async.t14739(flag__$1,alt_flag__$1,meta14740));
});
}
return (new cljs.core.async.t14739(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14745 = (function (cb,flag,alt_handler,meta14746){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14746 = meta14746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14745.cljs$lang$type = true;
cljs.core.async.t14745.cljs$lang$ctorStr = "cljs.core.async/t14745";
cljs.core.async.t14745.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14745");
});
cljs.core.async.t14745.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14747){var self__ = this;
var _14747__$1 = this;return self__.meta14746;
});
cljs.core.async.t14745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14747,meta14746__$1){var self__ = this;
var _14747__$1 = this;return (new cljs.core.async.t14745(self__.cb,self__.flag,self__.alt_handler,meta14746__$1));
});
cljs.core.async.__GT_t14745 = (function __GT_t14745(cb__$1,flag__$1,alt_handler__$1,meta14746){return (new cljs.core.async.t14745(cb__$1,flag__$1,alt_handler__$1,meta14746));
});
}
return (new cljs.core.async.t14745(cb,flag,alt_handler,null));
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
return (function (p1__14748_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14748_SHARP_,port], true));
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
var G__14749 = (i + 1);
i = G__14749;
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
var alts_BANG___delegate = function (ports,p__14750){var map__14752 = p__14750;var map__14752__$1 = ((cljs.core.seq_QMARK_.call(null,map__14752))?cljs.core.apply.call(null,cljs.core.hash_map,map__14752):map__14752);var opts = map__14752__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14750 = null;if (arguments.length > 1) {
  p__14750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14750);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14753){
var ports = cljs.core.first(arglist__14753);
var p__14750 = cljs.core.rest(arglist__14753);
return alts_BANG___delegate(ports,p__14750);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14761 = (function (ch,f,map_LT_,meta14762){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14762 = meta14762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14761.cljs$lang$type = true;
cljs.core.async.t14761.cljs$lang$ctorStr = "cljs.core.async/t14761";
cljs.core.async.t14761.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14761");
});
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14764 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14764 = (function (fn1,_,meta14762,ch,f,map_LT_,meta14765){
this.fn1 = fn1;
this._ = _;
this.meta14762 = meta14762;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14765 = meta14765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14764.cljs$lang$type = true;
cljs.core.async.t14764.cljs$lang$ctorStr = "cljs.core.async/t14764";
cljs.core.async.t14764.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14764");
});
cljs.core.async.t14764.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14764.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14754_SHARP_){return f1.call(null,(((p1__14754_SHARP_ == null))?null:self__.f.call(null,p1__14754_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14766){var self__ = this;
var _14766__$1 = this;return self__.meta14765;
});
cljs.core.async.t14764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14766,meta14765__$1){var self__ = this;
var _14766__$1 = this;return (new cljs.core.async.t14764(self__.fn1,self__._,self__.meta14762,self__.ch,self__.f,self__.map_LT_,meta14765__$1));
});
cljs.core.async.__GT_t14764 = (function __GT_t14764(fn1__$1,___$2,meta14762__$1,ch__$2,f__$2,map_LT___$2,meta14765){return (new cljs.core.async.t14764(fn1__$1,___$2,meta14762__$1,ch__$2,f__$2,map_LT___$2,meta14765));
});
}
return (new cljs.core.async.t14764(fn1,___$1,self__.meta14762,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14763){var self__ = this;
var _14763__$1 = this;return self__.meta14762;
});
cljs.core.async.t14761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14763,meta14762__$1){var self__ = this;
var _14763__$1 = this;return (new cljs.core.async.t14761(self__.ch,self__.f,self__.map_LT_,meta14762__$1));
});
cljs.core.async.__GT_t14761 = (function __GT_t14761(ch__$1,f__$1,map_LT___$1,meta14762){return (new cljs.core.async.t14761(ch__$1,f__$1,map_LT___$1,meta14762));
});
}
return (new cljs.core.async.t14761(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14770 = (function (ch,f,map_GT_,meta14771){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14771 = meta14771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14770.cljs$lang$type = true;
cljs.core.async.t14770.cljs$lang$ctorStr = "cljs.core.async/t14770";
cljs.core.async.t14770.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14770");
});
cljs.core.async.t14770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14770.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14772){var self__ = this;
var _14772__$1 = this;return self__.meta14771;
});
cljs.core.async.t14770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14772,meta14771__$1){var self__ = this;
var _14772__$1 = this;return (new cljs.core.async.t14770(self__.ch,self__.f,self__.map_GT_,meta14771__$1));
});
cljs.core.async.__GT_t14770 = (function __GT_t14770(ch__$1,f__$1,map_GT___$1,meta14771){return (new cljs.core.async.t14770(ch__$1,f__$1,map_GT___$1,meta14771));
});
}
return (new cljs.core.async.t14770(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14776 = (function (ch,p,filter_GT_,meta14777){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14777 = meta14777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14776.cljs$lang$type = true;
cljs.core.async.t14776.cljs$lang$ctorStr = "cljs.core.async/t14776";
cljs.core.async.t14776.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14776");
});
cljs.core.async.t14776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14776.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14778){var self__ = this;
var _14778__$1 = this;return self__.meta14777;
});
cljs.core.async.t14776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14778,meta14777__$1){var self__ = this;
var _14778__$1 = this;return (new cljs.core.async.t14776(self__.ch,self__.p,self__.filter_GT_,meta14777__$1));
});
cljs.core.async.__GT_t14776 = (function __GT_t14776(ch__$1,p__$1,filter_GT___$1,meta14777){return (new cljs.core.async.t14776(ch__$1,p__$1,filter_GT___$1,meta14777));
});
}
return (new cljs.core.async.t14776(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___14853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_14836){var state_val_14837 = (state_14836[1]);if((state_val_14837 === 1))
{var state_14836__$1 = state_14836;var statearr_14838_14854 = state_14836__$1;(statearr_14838_14854[2] = null);
(statearr_14838_14854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 2))
{var state_14836__$1 = state_14836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14836__$1,4,ch);
} else
{if((state_val_14837 === 3))
{var inst_14834 = (state_14836[2]);var state_14836__$1 = state_14836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14836__$1,inst_14834);
} else
{if((state_val_14837 === 4))
{var inst_14818 = (state_14836[5]);var inst_14818__$1 = (state_14836[2]);var inst_14819 = (inst_14818__$1 == null);var state_14836__$1 = (function (){var statearr_14839 = state_14836;(statearr_14839[5] = inst_14818__$1);
return statearr_14839;
})();if(cljs.core.truth_(inst_14819))
{var statearr_14840_14855 = state_14836__$1;(statearr_14840_14855[1] = 5);
} else
{var statearr_14841_14856 = state_14836__$1;(statearr_14841_14856[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 5))
{var inst_14821 = cljs.core.async.close_BANG_.call(null,out);var state_14836__$1 = state_14836;var statearr_14842_14857 = state_14836__$1;(statearr_14842_14857[2] = inst_14821);
(statearr_14842_14857[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 6))
{var inst_14818 = (state_14836[5]);var inst_14823 = p.call(null,inst_14818);var state_14836__$1 = state_14836;if(cljs.core.truth_(inst_14823))
{var statearr_14843_14858 = state_14836__$1;(statearr_14843_14858[1] = 8);
} else
{var statearr_14844_14859 = state_14836__$1;(statearr_14844_14859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 7))
{var inst_14832 = (state_14836[2]);var state_14836__$1 = state_14836;var statearr_14845_14860 = state_14836__$1;(statearr_14845_14860[2] = inst_14832);
(statearr_14845_14860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 8))
{var inst_14818 = (state_14836[5]);var state_14836__$1 = state_14836;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14836__$1,11,out,inst_14818);
} else
{if((state_val_14837 === 9))
{var state_14836__$1 = state_14836;var statearr_14846_14861 = state_14836__$1;(statearr_14846_14861[2] = null);
(statearr_14846_14861[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 10))
{var inst_14829 = (state_14836[2]);var state_14836__$1 = (function (){var statearr_14847 = state_14836;(statearr_14847[6] = inst_14829);
return statearr_14847;
})();var statearr_14848_14862 = state_14836__$1;(statearr_14848_14862[2] = null);
(statearr_14848_14862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14837 === 11))
{var inst_14826 = (state_14836[2]);var state_14836__$1 = state_14836;var statearr_14849_14863 = state_14836__$1;(statearr_14849_14863[2] = inst_14826);
(statearr_14849_14863[1] = 10);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_14851 = (new Array(7));(statearr_14851[0] = state_machine__5331__auto__);
(statearr_14851[1] = 1);
return statearr_14851;
});
var state_machine__5331__auto____1 = (function (state_14836){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_14836);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_14836){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_14836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_14852 = f__5381__auto__.call(null);(statearr_14852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___14853);
return statearr_14852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15011){var state_val_15012 = (state_15011[1]);if((state_val_15012 === 1))
{var state_15011__$1 = state_15011;var statearr_15013_15046 = state_15011__$1;(statearr_15013_15046[2] = null);
(statearr_15013_15046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 2))
{var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15011__$1,4,in$);
} else
{if((state_val_15012 === 3))
{var inst_15009 = (state_15011[2]);var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15011__$1,inst_15009);
} else
{if((state_val_15012 === 4))
{var inst_14957 = (state_15011[5]);var inst_14957__$1 = (state_15011[2]);var inst_14958 = (inst_14957__$1 == null);var state_15011__$1 = (function (){var statearr_15014 = state_15011;(statearr_15014[5] = inst_14957__$1);
return statearr_15014;
})();if(cljs.core.truth_(inst_14958))
{var statearr_15015_15047 = state_15011__$1;(statearr_15015_15047[1] = 5);
} else
{var statearr_15016_15048 = state_15011__$1;(statearr_15016_15048[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 5))
{var inst_14960 = cljs.core.async.close_BANG_.call(null,out);var state_15011__$1 = state_15011;var statearr_15017_15049 = state_15011__$1;(statearr_15017_15049[2] = inst_14960);
(statearr_15017_15049[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 6))
{var inst_14957 = (state_15011[5]);var inst_14962 = f.call(null,inst_14957);var inst_14967 = cljs.core.seq.call(null,inst_14962);var inst_14968 = inst_14967;var inst_14969 = null;var inst_14970 = 0;var inst_14971 = 0;var state_15011__$1 = (function (){var statearr_15018 = state_15011;(statearr_15018[6] = inst_14968);
(statearr_15018[7] = inst_14970);
(statearr_15018[8] = inst_14971);
(statearr_15018[9] = inst_14969);
return statearr_15018;
})();var statearr_15019_15050 = state_15011__$1;(statearr_15019_15050[2] = null);
(statearr_15019_15050[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 7))
{var inst_15007 = (state_15011[2]);var state_15011__$1 = state_15011;var statearr_15020_15051 = state_15011__$1;(statearr_15020_15051[2] = inst_15007);
(statearr_15020_15051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 8))
{var inst_14970 = (state_15011[7]);var inst_14971 = (state_15011[8]);var inst_14973 = (inst_14971 < inst_14970);var inst_14974 = inst_14973;var state_15011__$1 = state_15011;if(cljs.core.truth_(inst_14974))
{var statearr_15021_15052 = state_15011__$1;(statearr_15021_15052[1] = 10);
} else
{var statearr_15022_15053 = state_15011__$1;(statearr_15022_15053[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 9))
{var inst_15004 = (state_15011[2]);var state_15011__$1 = (function (){var statearr_15023 = state_15011;(statearr_15023[10] = inst_15004);
return statearr_15023;
})();var statearr_15024_15054 = state_15011__$1;(statearr_15024_15054[2] = null);
(statearr_15024_15054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 10))
{var inst_14971 = (state_15011[8]);var inst_14969 = (state_15011[9]);var inst_14976 = cljs.core._nth.call(null,inst_14969,inst_14971);var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15011__$1,13,out,inst_14976);
} else
{if((state_val_15012 === 11))
{var inst_14968 = (state_15011[6]);var inst_14982 = (state_15011[11]);var inst_14982__$1 = cljs.core.seq.call(null,inst_14968);var state_15011__$1 = (function (){var statearr_15028 = state_15011;(statearr_15028[11] = inst_14982__$1);
return statearr_15028;
})();if(inst_14982__$1)
{var statearr_15029_15055 = state_15011__$1;(statearr_15029_15055[1] = 14);
} else
{var statearr_15030_15056 = state_15011__$1;(statearr_15030_15056[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 12))
{var inst_15002 = (state_15011[2]);var state_15011__$1 = state_15011;var statearr_15031_15057 = state_15011__$1;(statearr_15031_15057[2] = inst_15002);
(statearr_15031_15057[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 13))
{var inst_14968 = (state_15011[6]);var inst_14970 = (state_15011[7]);var inst_14971 = (state_15011[8]);var inst_14969 = (state_15011[9]);var inst_14978 = (state_15011[2]);var inst_14979 = (inst_14971 + 1);var tmp15025 = inst_14968;var tmp15026 = inst_14970;var tmp15027 = inst_14969;var inst_14968__$1 = tmp15025;var inst_14969__$1 = tmp15027;var inst_14970__$1 = tmp15026;var inst_14971__$1 = inst_14979;var state_15011__$1 = (function (){var statearr_15032 = state_15011;(statearr_15032[6] = inst_14968__$1);
(statearr_15032[7] = inst_14970__$1);
(statearr_15032[8] = inst_14971__$1);
(statearr_15032[9] = inst_14969__$1);
(statearr_15032[12] = inst_14978);
return statearr_15032;
})();var statearr_15033_15058 = state_15011__$1;(statearr_15033_15058[2] = null);
(statearr_15033_15058[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 14))
{var inst_14982 = (state_15011[11]);var inst_14984 = cljs.core.chunked_seq_QMARK_.call(null,inst_14982);var state_15011__$1 = state_15011;if(inst_14984)
{var statearr_15034_15059 = state_15011__$1;(statearr_15034_15059[1] = 17);
} else
{var statearr_15035_15060 = state_15011__$1;(statearr_15035_15060[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 15))
{var state_15011__$1 = state_15011;var statearr_15036_15061 = state_15011__$1;(statearr_15036_15061[2] = null);
(statearr_15036_15061[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 16))
{var inst_15000 = (state_15011[2]);var state_15011__$1 = state_15011;var statearr_15037_15062 = state_15011__$1;(statearr_15037_15062[2] = inst_15000);
(statearr_15037_15062[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 17))
{var inst_14982 = (state_15011[11]);var inst_14986 = cljs.core.chunk_first.call(null,inst_14982);var inst_14987 = cljs.core.chunk_rest.call(null,inst_14982);var inst_14988 = cljs.core.count.call(null,inst_14986);var inst_14968 = inst_14987;var inst_14969 = inst_14986;var inst_14970 = inst_14988;var inst_14971 = 0;var state_15011__$1 = (function (){var statearr_15038 = state_15011;(statearr_15038[6] = inst_14968);
(statearr_15038[7] = inst_14970);
(statearr_15038[8] = inst_14971);
(statearr_15038[9] = inst_14969);
return statearr_15038;
})();var statearr_15039_15063 = state_15011__$1;(statearr_15039_15063[2] = null);
(statearr_15039_15063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 18))
{var inst_14982 = (state_15011[11]);var inst_14991 = cljs.core.first.call(null,inst_14982);var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15011__$1,20,out,inst_14991);
} else
{if((state_val_15012 === 19))
{var inst_14997 = (state_15011[2]);var state_15011__$1 = state_15011;var statearr_15040_15064 = state_15011__$1;(statearr_15040_15064[2] = inst_14997);
(statearr_15040_15064[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 20))
{var inst_14982 = (state_15011[11]);var inst_14993 = (state_15011[2]);var inst_14994 = cljs.core.next.call(null,inst_14982);var inst_14968 = inst_14994;var inst_14969 = null;var inst_14970 = 0;var inst_14971 = 0;var state_15011__$1 = (function (){var statearr_15041 = state_15011;(statearr_15041[6] = inst_14968);
(statearr_15041[7] = inst_14970);
(statearr_15041[8] = inst_14971);
(statearr_15041[9] = inst_14969);
(statearr_15041[13] = inst_14993);
return statearr_15041;
})();var statearr_15042_15065 = state_15011__$1;(statearr_15042_15065[2] = null);
(statearr_15042_15065[1] = 8);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_15044 = (new Array(14));(statearr_15044[0] = state_machine__5331__auto__);
(statearr_15044[1] = 1);
return statearr_15044;
});
var state_machine__5331__auto____1 = (function (state_15011){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15011){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15045 = f__5381__auto__.call(null);(statearr_15045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5380__auto___15138 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15121){var state_val_15122 = (state_15121[1]);if((state_val_15122 === 1))
{var state_15121__$1 = state_15121;var statearr_15123_15139 = state_15121__$1;(statearr_15123_15139[2] = null);
(statearr_15123_15139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 2))
{var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15121__$1,4,from);
} else
{if((state_val_15122 === 3))
{var inst_15119 = (state_15121[2]);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15121__$1,inst_15119);
} else
{if((state_val_15122 === 4))
{var inst_15104 = (state_15121[5]);var inst_15104__$1 = (state_15121[2]);var inst_15105 = (inst_15104__$1 == null);var state_15121__$1 = (function (){var statearr_15124 = state_15121;(statearr_15124[5] = inst_15104__$1);
return statearr_15124;
})();if(cljs.core.truth_(inst_15105))
{var statearr_15125_15140 = state_15121__$1;(statearr_15125_15140[1] = 5);
} else
{var statearr_15126_15141 = state_15121__$1;(statearr_15126_15141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 5))
{var state_15121__$1 = state_15121;if(cljs.core.truth_(close_QMARK_))
{var statearr_15127_15142 = state_15121__$1;(statearr_15127_15142[1] = 8);
} else
{var statearr_15128_15143 = state_15121__$1;(statearr_15128_15143[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 6))
{var inst_15104 = (state_15121[5]);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15121__$1,11,to,inst_15104);
} else
{if((state_val_15122 === 7))
{var inst_15117 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15129_15144 = state_15121__$1;(statearr_15129_15144[2] = inst_15117);
(statearr_15129_15144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 8))
{var inst_15108 = cljs.core.async.close_BANG_.call(null,to);var state_15121__$1 = state_15121;var statearr_15130_15145 = state_15121__$1;(statearr_15130_15145[2] = inst_15108);
(statearr_15130_15145[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 9))
{var state_15121__$1 = state_15121;var statearr_15131_15146 = state_15121__$1;(statearr_15131_15146[2] = null);
(statearr_15131_15146[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 10))
{var inst_15111 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15132_15147 = state_15121__$1;(statearr_15132_15147[2] = inst_15111);
(statearr_15132_15147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 11))
{var inst_15114 = (state_15121[2]);var state_15121__$1 = (function (){var statearr_15133 = state_15121;(statearr_15133[6] = inst_15114);
return statearr_15133;
})();var statearr_15134_15148 = state_15121__$1;(statearr_15134_15148[2] = null);
(statearr_15134_15148[1] = 2);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_15136 = (new Array(7));(statearr_15136[0] = state_machine__5331__auto__);
(statearr_15136[1] = 1);
return statearr_15136;
});
var state_machine__5331__auto____1 = (function (state_15121){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15121);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15121){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15137 = f__5381__auto__.call(null);(statearr_15137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15138);
return statearr_15137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5380__auto___15227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15209){var state_val_15210 = (state_15209[1]);if((state_val_15210 === 1))
{var state_15209__$1 = state_15209;var statearr_15211_15228 = state_15209__$1;(statearr_15211_15228[2] = null);
(statearr_15211_15228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 2))
{var state_15209__$1 = state_15209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15209__$1,4,ch);
} else
{if((state_val_15210 === 3))
{var inst_15207 = (state_15209[2]);var state_15209__$1 = state_15209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15209__$1,inst_15207);
} else
{if((state_val_15210 === 4))
{var inst_15190 = (state_15209[5]);var inst_15190__$1 = (state_15209[2]);var inst_15191 = (inst_15190__$1 == null);var state_15209__$1 = (function (){var statearr_15212 = state_15209;(statearr_15212[5] = inst_15190__$1);
return statearr_15212;
})();if(cljs.core.truth_(inst_15191))
{var statearr_15213_15229 = state_15209__$1;(statearr_15213_15229[1] = 5);
} else
{var statearr_15214_15230 = state_15209__$1;(statearr_15214_15230[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 5))
{var inst_15193 = cljs.core.async.close_BANG_.call(null,tc);var inst_15194 = cljs.core.async.close_BANG_.call(null,fc);var state_15209__$1 = (function (){var statearr_15215 = state_15209;(statearr_15215[6] = inst_15193);
return statearr_15215;
})();var statearr_15216_15231 = state_15209__$1;(statearr_15216_15231[2] = inst_15194);
(statearr_15216_15231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 6))
{var inst_15190 = (state_15209[5]);var inst_15196 = p.call(null,inst_15190);var state_15209__$1 = state_15209;if(cljs.core.truth_(inst_15196))
{var statearr_15217_15232 = state_15209__$1;(statearr_15217_15232[1] = 9);
} else
{var statearr_15218_15233 = state_15209__$1;(statearr_15218_15233[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 7))
{var inst_15205 = (state_15209[2]);var state_15209__$1 = state_15209;var statearr_15219_15234 = state_15209__$1;(statearr_15219_15234[2] = inst_15205);
(statearr_15219_15234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 8))
{var inst_15202 = (state_15209[2]);var state_15209__$1 = (function (){var statearr_15220 = state_15209;(statearr_15220[7] = inst_15202);
return statearr_15220;
})();var statearr_15221_15235 = state_15209__$1;(statearr_15221_15235[2] = null);
(statearr_15221_15235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 9))
{var state_15209__$1 = state_15209;var statearr_15222_15236 = state_15209__$1;(statearr_15222_15236[2] = tc);
(statearr_15222_15236[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 10))
{var state_15209__$1 = state_15209;var statearr_15223_15237 = state_15209__$1;(statearr_15223_15237[2] = fc);
(statearr_15223_15237[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 11))
{var inst_15190 = (state_15209[5]);var inst_15200 = (state_15209[2]);var state_15209__$1 = state_15209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15209__$1,8,inst_15200,inst_15190);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_15225 = (new Array(8));(statearr_15225[0] = state_machine__5331__auto__);
(statearr_15225[1] = 1);
return statearr_15225;
});
var state_machine__5331__auto____1 = (function (state_15209){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15209){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15226 = f__5381__auto__.call(null);(statearr_15226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15227);
return statearr_15226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15280){var state_val_15281 = (state_15280[1]);if((state_val_15281 === 7))
{var inst_15276 = (state_15280[2]);var state_15280__$1 = state_15280;var statearr_15282_15294 = state_15280__$1;(statearr_15282_15294[2] = inst_15276);
(statearr_15282_15294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15281 === 6))
{var inst_15269 = (state_15280[5]);var inst_15266 = (state_15280[6]);var inst_15273 = f.call(null,inst_15266,inst_15269);var inst_15266__$1 = inst_15273;var state_15280__$1 = (function (){var statearr_15283 = state_15280;(statearr_15283[6] = inst_15266__$1);
return statearr_15283;
})();var statearr_15284_15295 = state_15280__$1;(statearr_15284_15295[2] = null);
(statearr_15284_15295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15281 === 5))
{var inst_15266 = (state_15280[6]);var state_15280__$1 = state_15280;var statearr_15285_15296 = state_15280__$1;(statearr_15285_15296[2] = inst_15266);
(statearr_15285_15296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15281 === 4))
{var inst_15269 = (state_15280[5]);var inst_15269__$1 = (state_15280[2]);var inst_15270 = (inst_15269__$1 == null);var state_15280__$1 = (function (){var statearr_15286 = state_15280;(statearr_15286[5] = inst_15269__$1);
return statearr_15286;
})();if(cljs.core.truth_(inst_15270))
{var statearr_15287_15297 = state_15280__$1;(statearr_15287_15297[1] = 5);
} else
{var statearr_15288_15298 = state_15280__$1;(statearr_15288_15298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15281 === 3))
{var inst_15278 = (state_15280[2]);var state_15280__$1 = state_15280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15280__$1,inst_15278);
} else
{if((state_val_15281 === 2))
{var state_15280__$1 = state_15280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15280__$1,4,ch);
} else
{if((state_val_15281 === 1))
{var inst_15266 = init;var state_15280__$1 = (function (){var statearr_15289 = state_15280;(statearr_15289[6] = inst_15266);
return statearr_15289;
})();var statearr_15290_15299 = state_15280__$1;(statearr_15290_15299[2] = null);
(statearr_15290_15299[1] = 2);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_15292 = (new Array(7));(statearr_15292[0] = state_machine__5331__auto__);
(statearr_15292[1] = 1);
return statearr_15292;
});
var state_machine__5331__auto____1 = (function (state_15280){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15280);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15280){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15293 = f__5381__auto__.call(null);(statearr_15293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15357){var state_val_15358 = (state_15357[1]);if((state_val_15358 === 1))
{var inst_15337 = cljs.core.seq.call(null,coll);var inst_15338 = inst_15337;var state_15357__$1 = (function (){var statearr_15359 = state_15357;(statearr_15359[5] = inst_15338);
return statearr_15359;
})();var statearr_15360_15374 = state_15357__$1;(statearr_15360_15374[2] = null);
(statearr_15360_15374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 2))
{var inst_15338 = (state_15357[5]);var state_15357__$1 = state_15357;if(cljs.core.truth_(inst_15338))
{var statearr_15361_15375 = state_15357__$1;(statearr_15361_15375[1] = 4);
} else
{var statearr_15362_15376 = state_15357__$1;(statearr_15362_15376[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 3))
{var inst_15355 = (state_15357[2]);var state_15357__$1 = state_15357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15357__$1,inst_15355);
} else
{if((state_val_15358 === 4))
{var inst_15338 = (state_15357[5]);var inst_15341 = cljs.core.first.call(null,inst_15338);var state_15357__$1 = state_15357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15357__$1,7,ch,inst_15341);
} else
{if((state_val_15358 === 5))
{var state_15357__$1 = state_15357;if(cljs.core.truth_(close_QMARK_))
{var statearr_15363_15377 = state_15357__$1;(statearr_15363_15377[1] = 8);
} else
{var statearr_15364_15378 = state_15357__$1;(statearr_15364_15378[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 6))
{var inst_15353 = (state_15357[2]);var state_15357__$1 = state_15357;var statearr_15365_15379 = state_15357__$1;(statearr_15365_15379[2] = inst_15353);
(statearr_15365_15379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 7))
{var inst_15338 = (state_15357[5]);var inst_15343 = (state_15357[2]);var inst_15344 = cljs.core.next.call(null,inst_15338);var inst_15338__$1 = inst_15344;var state_15357__$1 = (function (){var statearr_15366 = state_15357;(statearr_15366[6] = inst_15343);
(statearr_15366[5] = inst_15338__$1);
return statearr_15366;
})();var statearr_15367_15380 = state_15357__$1;(statearr_15367_15380[2] = null);
(statearr_15367_15380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 8))
{var inst_15348 = cljs.core.async.close_BANG_.call(null,ch);var state_15357__$1 = state_15357;var statearr_15368_15381 = state_15357__$1;(statearr_15368_15381[2] = inst_15348);
(statearr_15368_15381[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 9))
{var state_15357__$1 = state_15357;var statearr_15369_15382 = state_15357__$1;(statearr_15369_15382[2] = null);
(statearr_15369_15382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15358 === 10))
{var inst_15351 = (state_15357[2]);var state_15357__$1 = state_15357;var statearr_15370_15383 = state_15357__$1;(statearr_15370_15383[2] = inst_15351);
(statearr_15370_15383[1] = 6);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_15372 = (new Array(7));(statearr_15372[0] = state_machine__5331__auto__);
(statearr_15372[1] = 1);
return statearr_15372;
});
var state_machine__5331__auto____1 = (function (state_15357){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15357);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15357){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15373 = f__5381__auto__.call(null);(statearr_15373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15596 = (function (cs,ch,mult,meta15597){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15597 = meta15597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15596.cljs$lang$type = true;
cljs.core.async.t15596.cljs$lang$ctorStr = "cljs.core.async/t15596";
cljs.core.async.t15596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15596");
});})(cs))
;
cljs.core.async.t15596.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15598){var self__ = this;
var _15598__$1 = this;return self__.meta15597;
});})(cs))
;
cljs.core.async.t15596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15598,meta15597__$1){var self__ = this;
var _15598__$1 = this;return (new cljs.core.async.t15596(self__.cs,self__.ch,self__.mult,meta15597__$1));
});})(cs))
;
cljs.core.async.__GT_t15596 = ((function (cs){
return (function __GT_t15596(cs__$1,ch__$1,mult__$1,meta15597){return (new cljs.core.async.t15596(cs__$1,ch__$1,mult__$1,meta15597));
});})(cs))
;
}
return (new cljs.core.async.t15596(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5380__auto___15808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15726){var state_val_15727 = (state_15726[1]);if((state_val_15727 === 32))
{try{var inst_15601 = (state_15726[5]);var inst_15677 = (state_15726[6]);var inst_15683 = cljs.core.async.put_BANG_.call(null,inst_15677,inst_15601,done);var state_15726__$1 = state_15726;var statearr_15730_15809 = state_15726__$1;(statearr_15730_15809[2] = inst_15683);
(statearr_15730_15809[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15728){if((e15728 instanceof Object))
{var ex__5324__auto__ = e15728;var statearr_15729_15810 = state_15726;(statearr_15729_15810[1] = 31);
(statearr_15729_15810[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15728;
} else
{return null;
}
}
}} else
{if((state_val_15727 === 1))
{var state_15726__$1 = state_15726;var statearr_15731_15811 = state_15726__$1;(statearr_15731_15811[2] = null);
(statearr_15731_15811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 33))
{var inst_15689 = (state_15726[7]);var inst_15691 = cljs.core.chunked_seq_QMARK_.call(null,inst_15689);var state_15726__$1 = state_15726;if(inst_15691)
{var statearr_15732_15812 = state_15726__$1;(statearr_15732_15812[1] = 36);
} else
{var statearr_15733_15813 = state_15726__$1;(statearr_15733_15813[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 2))
{var state_15726__$1 = state_15726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15726__$1,4,ch);
} else
{if((state_val_15727 === 34))
{var state_15726__$1 = state_15726;var statearr_15734_15814 = state_15726__$1;(statearr_15734_15814[2] = null);
(statearr_15734_15814[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 3))
{var inst_15724 = (state_15726[2]);var state_15726__$1 = state_15726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15726__$1,inst_15724);
} else
{if((state_val_15727 === 35))
{var inst_15713 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15735_15815 = state_15726__$1;(statearr_15735_15815[2] = inst_15713);
(statearr_15735_15815[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 4))
{var inst_15601 = (state_15726[5]);var inst_15601__$1 = (state_15726[2]);var inst_15602 = (inst_15601__$1 == null);var state_15726__$1 = (function (){var statearr_15736 = state_15726;(statearr_15736[5] = inst_15601__$1);
return statearr_15736;
})();if(cljs.core.truth_(inst_15602))
{var statearr_15737_15816 = state_15726__$1;(statearr_15737_15816[1] = 5);
} else
{var statearr_15738_15817 = state_15726__$1;(statearr_15738_15817[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 36))
{var inst_15689 = (state_15726[7]);var inst_15693 = cljs.core.chunk_first.call(null,inst_15689);var inst_15694 = cljs.core.chunk_rest.call(null,inst_15689);var inst_15695 = cljs.core.count.call(null,inst_15693);var inst_15669 = inst_15694;var inst_15670 = inst_15693;var inst_15671 = inst_15695;var inst_15672 = 0;var state_15726__$1 = (function (){var statearr_15739 = state_15726;(statearr_15739[8] = inst_15672);
(statearr_15739[9] = inst_15671);
(statearr_15739[10] = inst_15670);
(statearr_15739[11] = inst_15669);
return statearr_15739;
})();var statearr_15740_15818 = state_15726__$1;(statearr_15740_15818[2] = null);
(statearr_15740_15818[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 5))
{var inst_15608 = cljs.core.deref.call(null,cs);var inst_15609 = cljs.core.seq.call(null,inst_15608);var inst_15610 = inst_15609;var inst_15611 = null;var inst_15612 = 0;var inst_15613 = 0;var state_15726__$1 = (function (){var statearr_15741 = state_15726;(statearr_15741[12] = inst_15613);
(statearr_15741[13] = inst_15612);
(statearr_15741[14] = inst_15611);
(statearr_15741[15] = inst_15610);
return statearr_15741;
})();var statearr_15742_15819 = state_15726__$1;(statearr_15742_15819[2] = null);
(statearr_15742_15819[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 37))
{var inst_15689 = (state_15726[7]);var inst_15698 = cljs.core.first.call(null,inst_15689);var state_15726__$1 = (function (){var statearr_15743 = state_15726;(statearr_15743[16] = inst_15698);
return statearr_15743;
})();var statearr_15744_15820 = state_15726__$1;(statearr_15744_15820[2] = null);
(statearr_15744_15820[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 6))
{var inst_15660 = cljs.core.deref.call(null,cs);var inst_15661 = cljs.core.keys.call(null,inst_15660);var inst_15662 = cljs.core.count.call(null,inst_15661);var inst_15663 = cljs.core.reset_BANG_.call(null,dctr,inst_15662);var inst_15668 = cljs.core.seq.call(null,inst_15661);var inst_15669 = inst_15668;var inst_15670 = null;var inst_15671 = 0;var inst_15672 = 0;var state_15726__$1 = (function (){var statearr_15745 = state_15726;(statearr_15745[17] = inst_15663);
(statearr_15745[8] = inst_15672);
(statearr_15745[9] = inst_15671);
(statearr_15745[10] = inst_15670);
(statearr_15745[11] = inst_15669);
return statearr_15745;
})();var statearr_15746_15821 = state_15726__$1;(statearr_15746_15821[2] = null);
(statearr_15746_15821[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 38))
{var inst_15710 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15747_15822 = state_15726__$1;(statearr_15747_15822[2] = inst_15710);
(statearr_15747_15822[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 7))
{var inst_15722 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15748_15823 = state_15726__$1;(statearr_15748_15823[2] = inst_15722);
(statearr_15748_15823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 39))
{var inst_15689 = (state_15726[7]);var inst_15706 = (state_15726[2]);var inst_15707 = cljs.core.next.call(null,inst_15689);var inst_15669 = inst_15707;var inst_15670 = null;var inst_15671 = 0;var inst_15672 = 0;var state_15726__$1 = (function (){var statearr_15749 = state_15726;(statearr_15749[18] = inst_15706);
(statearr_15749[8] = inst_15672);
(statearr_15749[9] = inst_15671);
(statearr_15749[10] = inst_15670);
(statearr_15749[11] = inst_15669);
return statearr_15749;
})();var statearr_15750_15824 = state_15726__$1;(statearr_15750_15824[2] = null);
(statearr_15750_15824[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 8))
{var inst_15613 = (state_15726[12]);var inst_15612 = (state_15726[13]);var inst_15615 = (inst_15613 < inst_15612);var inst_15616 = inst_15615;var state_15726__$1 = state_15726;if(cljs.core.truth_(inst_15616))
{var statearr_15751_15825 = state_15726__$1;(statearr_15751_15825[1] = 10);
} else
{var statearr_15752_15826 = state_15726__$1;(statearr_15752_15826[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 40))
{var inst_15698 = (state_15726[16]);var inst_15699 = (state_15726[2]);var inst_15700 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15701 = cljs.core.async.untap_STAR_.call(null,m,inst_15698);var state_15726__$1 = (function (){var statearr_15753 = state_15726;(statearr_15753[19] = inst_15700);
(statearr_15753[20] = inst_15699);
return statearr_15753;
})();var statearr_15754_15827 = state_15726__$1;(statearr_15754_15827[2] = inst_15701);
(statearr_15754_15827[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 9))
{var inst_15658 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15755_15828 = state_15726__$1;(statearr_15755_15828[2] = inst_15658);
(statearr_15755_15828[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 41))
{try{var inst_15698 = (state_15726[16]);var inst_15601 = (state_15726[5]);var inst_15704 = cljs.core.async.put_BANG_.call(null,inst_15698,inst_15601,done);var state_15726__$1 = state_15726;var statearr_15758_15829 = state_15726__$1;(statearr_15758_15829[2] = inst_15704);
(statearr_15758_15829[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15756){if((e15756 instanceof Object))
{var ex__5324__auto__ = e15756;var statearr_15757_15830 = state_15726;(statearr_15757_15830[1] = 40);
(statearr_15757_15830[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15756;
} else
{return null;
}
}
}} else
{if((state_val_15727 === 10))
{var inst_15613 = (state_15726[12]);var inst_15611 = (state_15726[14]);var inst_15619 = cljs.core._nth.call(null,inst_15611,inst_15613);var inst_15620 = cljs.core.nth.call(null,inst_15619,0,null);var inst_15621 = cljs.core.nth.call(null,inst_15619,1,null);var state_15726__$1 = (function (){var statearr_15759 = state_15726;(statearr_15759[21] = inst_15620);
return statearr_15759;
})();if(cljs.core.truth_(inst_15621))
{var statearr_15760_15831 = state_15726__$1;(statearr_15760_15831[1] = 13);
} else
{var statearr_15761_15832 = state_15726__$1;(statearr_15761_15832[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 42))
{var inst_15719 = (state_15726[2]);var state_15726__$1 = (function (){var statearr_15762 = state_15726;(statearr_15762[22] = inst_15719);
return statearr_15762;
})();var statearr_15763_15833 = state_15726__$1;(statearr_15763_15833[2] = null);
(statearr_15763_15833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 11))
{var inst_15610 = (state_15726[15]);var inst_15630 = (state_15726[23]);var inst_15630__$1 = cljs.core.seq.call(null,inst_15610);var state_15726__$1 = (function (){var statearr_15764 = state_15726;(statearr_15764[23] = inst_15630__$1);
return statearr_15764;
})();if(inst_15630__$1)
{var statearr_15765_15834 = state_15726__$1;(statearr_15765_15834[1] = 16);
} else
{var statearr_15766_15835 = state_15726__$1;(statearr_15766_15835[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 12))
{var inst_15656 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15767_15836 = state_15726__$1;(statearr_15767_15836[2] = inst_15656);
(statearr_15767_15836[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 13))
{var inst_15620 = (state_15726[21]);var inst_15623 = cljs.core.async.close_BANG_.call(null,inst_15620);var state_15726__$1 = state_15726;var statearr_15771_15837 = state_15726__$1;(statearr_15771_15837[2] = inst_15623);
(statearr_15771_15837[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 14))
{var state_15726__$1 = state_15726;var statearr_15772_15838 = state_15726__$1;(statearr_15772_15838[2] = null);
(statearr_15772_15838[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 15))
{var inst_15613 = (state_15726[12]);var inst_15612 = (state_15726[13]);var inst_15611 = (state_15726[14]);var inst_15610 = (state_15726[15]);var inst_15626 = (state_15726[2]);var inst_15627 = (inst_15613 + 1);var tmp15768 = inst_15612;var tmp15769 = inst_15611;var tmp15770 = inst_15610;var inst_15610__$1 = tmp15770;var inst_15611__$1 = tmp15769;var inst_15612__$1 = tmp15768;var inst_15613__$1 = inst_15627;var state_15726__$1 = (function (){var statearr_15773 = state_15726;(statearr_15773[12] = inst_15613__$1);
(statearr_15773[13] = inst_15612__$1);
(statearr_15773[14] = inst_15611__$1);
(statearr_15773[15] = inst_15610__$1);
(statearr_15773[24] = inst_15626);
return statearr_15773;
})();var statearr_15774_15839 = state_15726__$1;(statearr_15774_15839[2] = null);
(statearr_15774_15839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 16))
{var inst_15630 = (state_15726[23]);var inst_15632 = cljs.core.chunked_seq_QMARK_.call(null,inst_15630);var state_15726__$1 = state_15726;if(inst_15632)
{var statearr_15775_15840 = state_15726__$1;(statearr_15775_15840[1] = 19);
} else
{var statearr_15776_15841 = state_15726__$1;(statearr_15776_15841[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 17))
{var state_15726__$1 = state_15726;var statearr_15777_15842 = state_15726__$1;(statearr_15777_15842[2] = null);
(statearr_15777_15842[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 18))
{var inst_15654 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15778_15843 = state_15726__$1;(statearr_15778_15843[2] = inst_15654);
(statearr_15778_15843[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 19))
{var inst_15630 = (state_15726[23]);var inst_15634 = cljs.core.chunk_first.call(null,inst_15630);var inst_15635 = cljs.core.chunk_rest.call(null,inst_15630);var inst_15636 = cljs.core.count.call(null,inst_15634);var inst_15610 = inst_15635;var inst_15611 = inst_15634;var inst_15612 = inst_15636;var inst_15613 = 0;var state_15726__$1 = (function (){var statearr_15779 = state_15726;(statearr_15779[12] = inst_15613);
(statearr_15779[13] = inst_15612);
(statearr_15779[14] = inst_15611);
(statearr_15779[15] = inst_15610);
return statearr_15779;
})();var statearr_15780_15844 = state_15726__$1;(statearr_15780_15844[2] = null);
(statearr_15780_15844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 20))
{var inst_15630 = (state_15726[23]);var inst_15640 = cljs.core.first.call(null,inst_15630);var inst_15641 = cljs.core.nth.call(null,inst_15640,0,null);var inst_15642 = cljs.core.nth.call(null,inst_15640,1,null);var state_15726__$1 = (function (){var statearr_15781 = state_15726;(statearr_15781[25] = inst_15641);
return statearr_15781;
})();if(cljs.core.truth_(inst_15642))
{var statearr_15782_15845 = state_15726__$1;(statearr_15782_15845[1] = 22);
} else
{var statearr_15783_15846 = state_15726__$1;(statearr_15783_15846[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 21))
{var inst_15651 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15784_15847 = state_15726__$1;(statearr_15784_15847[2] = inst_15651);
(statearr_15784_15847[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 22))
{var inst_15641 = (state_15726[25]);var inst_15644 = cljs.core.async.close_BANG_.call(null,inst_15641);var state_15726__$1 = state_15726;var statearr_15785_15848 = state_15726__$1;(statearr_15785_15848[2] = inst_15644);
(statearr_15785_15848[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 23))
{var state_15726__$1 = state_15726;var statearr_15786_15849 = state_15726__$1;(statearr_15786_15849[2] = null);
(statearr_15786_15849[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 24))
{var inst_15630 = (state_15726[23]);var inst_15647 = (state_15726[2]);var inst_15648 = cljs.core.next.call(null,inst_15630);var inst_15610 = inst_15648;var inst_15611 = null;var inst_15612 = 0;var inst_15613 = 0;var state_15726__$1 = (function (){var statearr_15787 = state_15726;(statearr_15787[12] = inst_15613);
(statearr_15787[26] = inst_15647);
(statearr_15787[13] = inst_15612);
(statearr_15787[14] = inst_15611);
(statearr_15787[15] = inst_15610);
return statearr_15787;
})();var statearr_15788_15850 = state_15726__$1;(statearr_15788_15850[2] = null);
(statearr_15788_15850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 25))
{var inst_15672 = (state_15726[8]);var inst_15671 = (state_15726[9]);var inst_15674 = (inst_15672 < inst_15671);var inst_15675 = inst_15674;var state_15726__$1 = state_15726;if(cljs.core.truth_(inst_15675))
{var statearr_15789_15851 = state_15726__$1;(statearr_15789_15851[1] = 27);
} else
{var statearr_15790_15852 = state_15726__$1;(statearr_15790_15852[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 26))
{var inst_15717 = (state_15726[2]);var state_15726__$1 = (function (){var statearr_15791 = state_15726;(statearr_15791[27] = inst_15717);
return statearr_15791;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15726__$1,42,dchan);
} else
{if((state_val_15727 === 27))
{var inst_15672 = (state_15726[8]);var inst_15670 = (state_15726[10]);var inst_15677 = cljs.core._nth.call(null,inst_15670,inst_15672);var state_15726__$1 = (function (){var statearr_15792 = state_15726;(statearr_15792[6] = inst_15677);
return statearr_15792;
})();var statearr_15793_15853 = state_15726__$1;(statearr_15793_15853[2] = null);
(statearr_15793_15853[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 28))
{var inst_15689 = (state_15726[7]);var inst_15669 = (state_15726[11]);var inst_15689__$1 = cljs.core.seq.call(null,inst_15669);var state_15726__$1 = (function (){var statearr_15797 = state_15726;(statearr_15797[7] = inst_15689__$1);
return statearr_15797;
})();if(inst_15689__$1)
{var statearr_15798_15854 = state_15726__$1;(statearr_15798_15854[1] = 33);
} else
{var statearr_15799_15855 = state_15726__$1;(statearr_15799_15855[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 29))
{var inst_15715 = (state_15726[2]);var state_15726__$1 = state_15726;var statearr_15800_15856 = state_15726__$1;(statearr_15800_15856[2] = inst_15715);
(statearr_15800_15856[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 30))
{var inst_15672 = (state_15726[8]);var inst_15671 = (state_15726[9]);var inst_15670 = (state_15726[10]);var inst_15669 = (state_15726[11]);var inst_15685 = (state_15726[2]);var inst_15686 = (inst_15672 + 1);var tmp15794 = inst_15671;var tmp15795 = inst_15670;var tmp15796 = inst_15669;var inst_15669__$1 = tmp15796;var inst_15670__$1 = tmp15795;var inst_15671__$1 = tmp15794;var inst_15672__$1 = inst_15686;var state_15726__$1 = (function (){var statearr_15801 = state_15726;(statearr_15801[8] = inst_15672__$1);
(statearr_15801[9] = inst_15671__$1);
(statearr_15801[10] = inst_15670__$1);
(statearr_15801[28] = inst_15685);
(statearr_15801[11] = inst_15669__$1);
return statearr_15801;
})();var statearr_15802_15857 = state_15726__$1;(statearr_15802_15857[2] = null);
(statearr_15802_15857[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15727 === 31))
{var inst_15677 = (state_15726[6]);var inst_15678 = (state_15726[2]);var inst_15679 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15680 = cljs.core.async.untap_STAR_.call(null,m,inst_15677);var state_15726__$1 = (function (){var statearr_15803 = state_15726;(statearr_15803[29] = inst_15679);
(statearr_15803[30] = inst_15678);
return statearr_15803;
})();var statearr_15804_15858 = state_15726__$1;(statearr_15804_15858[2] = inst_15680);
(statearr_15804_15858[1] = 30);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_15806 = (new Array(31));(statearr_15806[0] = state_machine__5331__auto__);
(statearr_15806[1] = 1);
return statearr_15806;
});
var state_machine__5331__auto____1 = (function (state_15726){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15726);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15726){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15807 = f__5381__auto__.call(null);(statearr_15807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15808);
return statearr_15807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
;var m = (function (){if(typeof cljs.core.async.t15964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15964 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15965){
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
this.meta15965 = meta15965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15964.cljs$lang$type = true;
cljs.core.async.t15964.cljs$lang$ctorStr = "cljs.core.async/t15964";
cljs.core.async.t15964.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15964");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15964.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15966){var self__ = this;
var _15966__$1 = this;return self__.meta15965;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15966,meta15965__$1){var self__ = this;
var _15966__$1 = this;return (new cljs.core.async.t15964(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15965__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15964 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15964(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15965){return (new cljs.core.async.t15964(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15965));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15964(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5380__auto___16069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16031){var state_val_16032 = (state_16031[1]);if((state_val_16032 === 1))
{var inst_15970 = (state_16031[5]);var inst_15970__$1 = calc_state.call(null);var inst_15971 = cljs.core.seq_QMARK_.call(null,inst_15970__$1);var state_16031__$1 = (function (){var statearr_16033 = state_16031;(statearr_16033[5] = inst_15970__$1);
return statearr_16033;
})();if(inst_15971)
{var statearr_16034_16070 = state_16031__$1;(statearr_16034_16070[1] = 2);
} else
{var statearr_16035_16071 = state_16031__$1;(statearr_16035_16071[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 2))
{var inst_15970 = (state_16031[5]);var inst_15973 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15970);var state_16031__$1 = state_16031;var statearr_16036_16072 = state_16031__$1;(statearr_16036_16072[2] = inst_15973);
(statearr_16036_16072[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 3))
{var inst_15970 = (state_16031[5]);var state_16031__$1 = state_16031;var statearr_16037_16073 = state_16031__$1;(statearr_16037_16073[2] = inst_15970);
(statearr_16037_16073[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 4))
{var inst_15970 = (state_16031[5]);var inst_15976 = (state_16031[2]);var inst_15977 = cljs.core.get.call(null,inst_15976,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15978 = cljs.core.get.call(null,inst_15976,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15979 = cljs.core.get.call(null,inst_15976,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15980 = inst_15970;var state_16031__$1 = (function (){var statearr_16038 = state_16031;(statearr_16038[6] = inst_15977);
(statearr_16038[7] = inst_15978);
(statearr_16038[8] = inst_15979);
(statearr_16038[9] = inst_15980);
return statearr_16038;
})();var statearr_16039_16074 = state_16031__$1;(statearr_16039_16074[2] = null);
(statearr_16039_16074[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 5))
{var inst_15980 = (state_16031[9]);var inst_15983 = cljs.core.seq_QMARK_.call(null,inst_15980);var state_16031__$1 = state_16031;if(inst_15983)
{var statearr_16040_16075 = state_16031__$1;(statearr_16040_16075[1] = 7);
} else
{var statearr_16041_16076 = state_16031__$1;(statearr_16041_16076[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 6))
{var inst_16029 = (state_16031[2]);var state_16031__$1 = state_16031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16031__$1,inst_16029);
} else
{if((state_val_16032 === 7))
{var inst_15980 = (state_16031[9]);var inst_15985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15980);var state_16031__$1 = state_16031;var statearr_16042_16077 = state_16031__$1;(statearr_16042_16077[2] = inst_15985);
(statearr_16042_16077[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 8))
{var inst_15980 = (state_16031[9]);var state_16031__$1 = state_16031;var statearr_16043_16078 = state_16031__$1;(statearr_16043_16078[2] = inst_15980);
(statearr_16043_16078[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 9))
{var inst_15988 = (state_16031[10]);var inst_15988__$1 = (state_16031[2]);var inst_15989 = cljs.core.get.call(null,inst_15988__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15990 = cljs.core.get.call(null,inst_15988__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15991 = cljs.core.get.call(null,inst_15988__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16031__$1 = (function (){var statearr_16044 = state_16031;(statearr_16044[11] = inst_15991);
(statearr_16044[12] = inst_15990);
(statearr_16044[10] = inst_15988__$1);
return statearr_16044;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16031__$1,10,inst_15989);
} else
{if((state_val_16032 === 10))
{var inst_15996 = (state_16031[13]);var inst_15995 = (state_16031[14]);var inst_15994 = (state_16031[2]);var inst_15995__$1 = cljs.core.nth.call(null,inst_15994,0,null);var inst_15996__$1 = cljs.core.nth.call(null,inst_15994,1,null);var inst_15997 = (inst_15995__$1 == null);var inst_15998 = cljs.core._EQ_.call(null,inst_15996__$1,change);var inst_15999 = (inst_15997) || (inst_15998);var state_16031__$1 = (function (){var statearr_16045 = state_16031;(statearr_16045[13] = inst_15996__$1);
(statearr_16045[14] = inst_15995__$1);
return statearr_16045;
})();if(cljs.core.truth_(inst_15999))
{var statearr_16046_16079 = state_16031__$1;(statearr_16046_16079[1] = 11);
} else
{var statearr_16047_16080 = state_16031__$1;(statearr_16047_16080[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 11))
{var inst_15995 = (state_16031[14]);var inst_16001 = (inst_15995 == null);var state_16031__$1 = state_16031;if(cljs.core.truth_(inst_16001))
{var statearr_16048_16081 = state_16031__$1;(statearr_16048_16081[1] = 14);
} else
{var statearr_16049_16082 = state_16031__$1;(statearr_16049_16082[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 12))
{var inst_15991 = (state_16031[11]);var inst_16010 = (state_16031[15]);var inst_15996 = (state_16031[13]);var inst_16010__$1 = inst_15991.call(null,inst_15996);var state_16031__$1 = (function (){var statearr_16050 = state_16031;(statearr_16050[15] = inst_16010__$1);
return statearr_16050;
})();if(cljs.core.truth_(inst_16010__$1))
{var statearr_16051_16083 = state_16031__$1;(statearr_16051_16083[1] = 17);
} else
{var statearr_16052_16084 = state_16031__$1;(statearr_16052_16084[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 13))
{var inst_16027 = (state_16031[2]);var state_16031__$1 = state_16031;var statearr_16053_16085 = state_16031__$1;(statearr_16053_16085[2] = inst_16027);
(statearr_16053_16085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 14))
{var inst_15996 = (state_16031[13]);var inst_16003 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15996);var state_16031__$1 = state_16031;var statearr_16054_16086 = state_16031__$1;(statearr_16054_16086[2] = inst_16003);
(statearr_16054_16086[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 15))
{var state_16031__$1 = state_16031;var statearr_16055_16087 = state_16031__$1;(statearr_16055_16087[2] = null);
(statearr_16055_16087[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 16))
{var inst_16006 = (state_16031[2]);var inst_16007 = calc_state.call(null);var inst_15980 = inst_16007;var state_16031__$1 = (function (){var statearr_16056 = state_16031;(statearr_16056[9] = inst_15980);
(statearr_16056[16] = inst_16006);
return statearr_16056;
})();var statearr_16057_16088 = state_16031__$1;(statearr_16057_16088[2] = null);
(statearr_16057_16088[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 17))
{var inst_16010 = (state_16031[15]);var state_16031__$1 = state_16031;var statearr_16058_16089 = state_16031__$1;(statearr_16058_16089[2] = inst_16010);
(statearr_16058_16089[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 18))
{var inst_15991 = (state_16031[11]);var inst_15990 = (state_16031[12]);var inst_15996 = (state_16031[13]);var inst_16013 = cljs.core.empty_QMARK_.call(null,inst_15991);var inst_16014 = inst_15990.call(null,inst_15996);var inst_16015 = cljs.core.not.call(null,inst_16014);var inst_16016 = (inst_16013) && (inst_16015);var state_16031__$1 = state_16031;var statearr_16059_16090 = state_16031__$1;(statearr_16059_16090[2] = inst_16016);
(statearr_16059_16090[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 19))
{var inst_16018 = (state_16031[2]);var state_16031__$1 = state_16031;if(cljs.core.truth_(inst_16018))
{var statearr_16060_16091 = state_16031__$1;(statearr_16060_16091[1] = 20);
} else
{var statearr_16061_16092 = state_16031__$1;(statearr_16061_16092[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 20))
{var inst_15995 = (state_16031[14]);var state_16031__$1 = state_16031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16031__$1,23,out,inst_15995);
} else
{if((state_val_16032 === 21))
{var state_16031__$1 = state_16031;var statearr_16062_16093 = state_16031__$1;(statearr_16062_16093[2] = null);
(statearr_16062_16093[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 22))
{var inst_15988 = (state_16031[10]);var inst_16024 = (state_16031[2]);var inst_15980 = inst_15988;var state_16031__$1 = (function (){var statearr_16063 = state_16031;(statearr_16063[17] = inst_16024);
(statearr_16063[9] = inst_15980);
return statearr_16063;
})();var statearr_16064_16094 = state_16031__$1;(statearr_16064_16094[2] = null);
(statearr_16064_16094[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16032 === 23))
{var inst_16021 = (state_16031[2]);var state_16031__$1 = state_16031;var statearr_16065_16095 = state_16031__$1;(statearr_16065_16095[2] = inst_16021);
(statearr_16065_16095[1] = 22);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_16067 = (new Array(18));(statearr_16067[0] = state_machine__5331__auto__);
(statearr_16067[1] = 1);
return statearr_16067;
});
var state_machine__5331__auto____1 = (function (state_16031){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16031);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16031){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16068 = f__5381__auto__.call(null);(statearr_16068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16069);
return statearr_16068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
return (function (p1__16096_SHARP_){if(cljs.core.truth_(p1__16096_SHARP_.call(null,topic)))
{return p1__16096_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16096_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16220 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16220 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16221){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16221 = meta16221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16220.cljs$lang$type = true;
cljs.core.async.t16220.cljs$lang$ctorStr = "cljs.core.async/t16220";
cljs.core.async.t16220.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t16220");
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16220.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16222){var self__ = this;
var _16222__$1 = this;return self__.meta16221;
});})(mults,ensure_mult))
;
cljs.core.async.t16220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16222,meta16221__$1){var self__ = this;
var _16222__$1 = this;return (new cljs.core.async.t16220(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16221__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16220 = ((function (mults,ensure_mult){
return (function __GT_t16220(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16221){return (new cljs.core.async.t16220(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16221));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16220(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5380__auto___16343 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16295){var state_val_16296 = (state_16295[1]);if((state_val_16296 === 1))
{var state_16295__$1 = state_16295;var statearr_16297_16344 = state_16295__$1;(statearr_16297_16344[2] = null);
(statearr_16297_16344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 2))
{var state_16295__$1 = state_16295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16295__$1,4,ch);
} else
{if((state_val_16296 === 3))
{var inst_16293 = (state_16295[2]);var state_16295__$1 = state_16295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16295__$1,inst_16293);
} else
{if((state_val_16296 === 4))
{var inst_16225 = (state_16295[5]);var inst_16225__$1 = (state_16295[2]);var inst_16226 = (inst_16225__$1 == null);var state_16295__$1 = (function (){var statearr_16298 = state_16295;(statearr_16298[5] = inst_16225__$1);
return statearr_16298;
})();if(cljs.core.truth_(inst_16226))
{var statearr_16299_16345 = state_16295__$1;(statearr_16299_16345[1] = 5);
} else
{var statearr_16300_16346 = state_16295__$1;(statearr_16300_16346[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 5))
{var inst_16232 = cljs.core.deref.call(null,mults);var inst_16233 = cljs.core.vals.call(null,inst_16232);var inst_16234 = cljs.core.seq.call(null,inst_16233);var inst_16235 = inst_16234;var inst_16236 = null;var inst_16237 = 0;var inst_16238 = 0;var state_16295__$1 = (function (){var statearr_16301 = state_16295;(statearr_16301[6] = inst_16238);
(statearr_16301[7] = inst_16237);
(statearr_16301[8] = inst_16235);
(statearr_16301[9] = inst_16236);
return statearr_16301;
})();var statearr_16302_16347 = state_16295__$1;(statearr_16302_16347[2] = null);
(statearr_16302_16347[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 6))
{var inst_16225 = (state_16295[5]);var inst_16273 = (state_16295[10]);var inst_16275 = (state_16295[11]);var inst_16273__$1 = topic_fn.call(null,inst_16225);var inst_16274 = cljs.core.deref.call(null,mults);var inst_16275__$1 = cljs.core.get.call(null,inst_16274,inst_16273__$1);var state_16295__$1 = (function (){var statearr_16303 = state_16295;(statearr_16303[10] = inst_16273__$1);
(statearr_16303[11] = inst_16275__$1);
return statearr_16303;
})();if(cljs.core.truth_(inst_16275__$1))
{var statearr_16304_16348 = state_16295__$1;(statearr_16304_16348[1] = 19);
} else
{var statearr_16305_16349 = state_16295__$1;(statearr_16305_16349[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 7))
{var inst_16291 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16306_16350 = state_16295__$1;(statearr_16306_16350[2] = inst_16291);
(statearr_16306_16350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 8))
{var inst_16238 = (state_16295[6]);var inst_16237 = (state_16295[7]);var inst_16240 = (inst_16238 < inst_16237);var inst_16241 = inst_16240;var state_16295__$1 = state_16295;if(cljs.core.truth_(inst_16241))
{var statearr_16310_16351 = state_16295__$1;(statearr_16310_16351[1] = 10);
} else
{var statearr_16311_16352 = state_16295__$1;(statearr_16311_16352[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 9))
{var inst_16271 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16312_16353 = state_16295__$1;(statearr_16312_16353[2] = inst_16271);
(statearr_16312_16353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 10))
{var inst_16238 = (state_16295[6]);var inst_16237 = (state_16295[7]);var inst_16235 = (state_16295[8]);var inst_16236 = (state_16295[9]);var inst_16243 = cljs.core._nth.call(null,inst_16236,inst_16238);var inst_16244 = cljs.core.async.muxch_STAR_.call(null,inst_16243);var inst_16245 = cljs.core.async.close_BANG_.call(null,inst_16244);var inst_16246 = (inst_16238 + 1);var tmp16307 = inst_16237;var tmp16308 = inst_16235;var tmp16309 = inst_16236;var inst_16235__$1 = tmp16308;var inst_16236__$1 = tmp16309;var inst_16237__$1 = tmp16307;var inst_16238__$1 = inst_16246;var state_16295__$1 = (function (){var statearr_16313 = state_16295;(statearr_16313[6] = inst_16238__$1);
(statearr_16313[7] = inst_16237__$1);
(statearr_16313[8] = inst_16235__$1);
(statearr_16313[9] = inst_16236__$1);
(statearr_16313[12] = inst_16245);
return statearr_16313;
})();var statearr_16314_16354 = state_16295__$1;(statearr_16314_16354[2] = null);
(statearr_16314_16354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 11))
{var inst_16235 = (state_16295[8]);var inst_16249 = (state_16295[13]);var inst_16249__$1 = cljs.core.seq.call(null,inst_16235);var state_16295__$1 = (function (){var statearr_16315 = state_16295;(statearr_16315[13] = inst_16249__$1);
return statearr_16315;
})();if(inst_16249__$1)
{var statearr_16316_16355 = state_16295__$1;(statearr_16316_16355[1] = 13);
} else
{var statearr_16317_16356 = state_16295__$1;(statearr_16317_16356[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 12))
{var inst_16269 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16318_16357 = state_16295__$1;(statearr_16318_16357[2] = inst_16269);
(statearr_16318_16357[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 13))
{var inst_16249 = (state_16295[13]);var inst_16251 = cljs.core.chunked_seq_QMARK_.call(null,inst_16249);var state_16295__$1 = state_16295;if(inst_16251)
{var statearr_16319_16358 = state_16295__$1;(statearr_16319_16358[1] = 16);
} else
{var statearr_16320_16359 = state_16295__$1;(statearr_16320_16359[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 14))
{var state_16295__$1 = state_16295;var statearr_16321_16360 = state_16295__$1;(statearr_16321_16360[2] = null);
(statearr_16321_16360[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 15))
{var inst_16267 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16322_16361 = state_16295__$1;(statearr_16322_16361[2] = inst_16267);
(statearr_16322_16361[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 16))
{var inst_16249 = (state_16295[13]);var inst_16253 = cljs.core.chunk_first.call(null,inst_16249);var inst_16254 = cljs.core.chunk_rest.call(null,inst_16249);var inst_16255 = cljs.core.count.call(null,inst_16253);var inst_16235 = inst_16254;var inst_16236 = inst_16253;var inst_16237 = inst_16255;var inst_16238 = 0;var state_16295__$1 = (function (){var statearr_16323 = state_16295;(statearr_16323[6] = inst_16238);
(statearr_16323[7] = inst_16237);
(statearr_16323[8] = inst_16235);
(statearr_16323[9] = inst_16236);
return statearr_16323;
})();var statearr_16324_16362 = state_16295__$1;(statearr_16324_16362[2] = null);
(statearr_16324_16362[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 17))
{var inst_16249 = (state_16295[13]);var inst_16258 = cljs.core.first.call(null,inst_16249);var inst_16259 = cljs.core.async.muxch_STAR_.call(null,inst_16258);var inst_16260 = cljs.core.async.close_BANG_.call(null,inst_16259);var inst_16261 = cljs.core.next.call(null,inst_16249);var inst_16235 = inst_16261;var inst_16236 = null;var inst_16237 = 0;var inst_16238 = 0;var state_16295__$1 = (function (){var statearr_16325 = state_16295;(statearr_16325[6] = inst_16238);
(statearr_16325[7] = inst_16237);
(statearr_16325[8] = inst_16235);
(statearr_16325[9] = inst_16236);
(statearr_16325[14] = inst_16260);
return statearr_16325;
})();var statearr_16326_16363 = state_16295__$1;(statearr_16326_16363[2] = null);
(statearr_16326_16363[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 18))
{var inst_16264 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16327_16364 = state_16295__$1;(statearr_16327_16364[2] = inst_16264);
(statearr_16327_16364[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 19))
{var state_16295__$1 = state_16295;var statearr_16328_16365 = state_16295__$1;(statearr_16328_16365[2] = null);
(statearr_16328_16365[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 20))
{var state_16295__$1 = state_16295;var statearr_16329_16366 = state_16295__$1;(statearr_16329_16366[2] = null);
(statearr_16329_16366[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 21))
{var inst_16288 = (state_16295[2]);var state_16295__$1 = (function (){var statearr_16330 = state_16295;(statearr_16330[15] = inst_16288);
return statearr_16330;
})();var statearr_16331_16367 = state_16295__$1;(statearr_16331_16367[2] = null);
(statearr_16331_16367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 22))
{var inst_16285 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16332_16368 = state_16295__$1;(statearr_16332_16368[2] = inst_16285);
(statearr_16332_16368[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 23))
{var inst_16273 = (state_16295[10]);var inst_16277 = (state_16295[2]);var inst_16278 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16273);var state_16295__$1 = (function (){var statearr_16333 = state_16295;(statearr_16333[16] = inst_16277);
return statearr_16333;
})();var statearr_16334_16369 = state_16295__$1;(statearr_16334_16369[2] = inst_16278);
(statearr_16334_16369[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16296 === 24))
{try{var inst_16225 = (state_16295[5]);var inst_16275 = (state_16295[11]);var inst_16281 = cljs.core.async.muxch_STAR_.call(null,inst_16275);var state_16295__$1 = state_16295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16295__$1,25,inst_16281,inst_16225);
}catch (e16335){if((e16335 instanceof Object))
{var ex__5324__auto__ = e16335;var statearr_16336_16370 = state_16295;(statearr_16336_16370[1] = 23);
(statearr_16336_16370[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16335;
} else
{return null;
}
}
}} else
{if((state_val_16296 === 25))
{try{var inst_16283 = (state_16295[2]);var state_16295__$1 = state_16295;var statearr_16339_16371 = state_16295__$1;(statearr_16339_16371[2] = inst_16283);
(statearr_16339_16371[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16337){if((e16337 instanceof Object))
{var ex__5324__auto__ = e16337;var statearr_16338_16372 = state_16295;(statearr_16338_16372[1] = 23);
(statearr_16338_16372[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16337;
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_16341 = (new Array(17));(statearr_16341[0] = state_machine__5331__auto__);
(statearr_16341[1] = 1);
return statearr_16341;
});
var state_machine__5331__auto____1 = (function (state_16295){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16295);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16295){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16342 = f__5381__auto__.call(null);(statearr_16342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16343);
return statearr_16342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
,cljs.core.range.call(null,cnt));var c__5380__auto___16503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16475){var state_val_16476 = (state_16475[1]);if((state_val_16476 === 1))
{var state_16475__$1 = state_16475;var statearr_16477_16504 = state_16475__$1;(statearr_16477_16504[2] = null);
(statearr_16477_16504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 2))
{var inst_16439 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16440 = 0;var state_16475__$1 = (function (){var statearr_16478 = state_16475;(statearr_16478[5] = inst_16440);
(statearr_16478[6] = inst_16439);
return statearr_16478;
})();var statearr_16479_16505 = state_16475__$1;(statearr_16479_16505[2] = null);
(statearr_16479_16505[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 3))
{var inst_16473 = (state_16475[2]);var state_16475__$1 = state_16475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16475__$1,inst_16473);
} else
{if((state_val_16476 === 4))
{var inst_16440 = (state_16475[5]);var inst_16442 = (inst_16440 < cnt);var state_16475__$1 = state_16475;if(cljs.core.truth_(inst_16442))
{var statearr_16480_16506 = state_16475__$1;(statearr_16480_16506[1] = 6);
} else
{var statearr_16481_16507 = state_16475__$1;(statearr_16481_16507[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 5))
{var inst_16459 = (state_16475[2]);var state_16475__$1 = (function (){var statearr_16482 = state_16475;(statearr_16482[7] = inst_16459);
return statearr_16482;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16475__$1,12,dchan);
} else
{if((state_val_16476 === 6))
{var state_16475__$1 = state_16475;var statearr_16483_16508 = state_16475__$1;(statearr_16483_16508[2] = null);
(statearr_16483_16508[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 7))
{var state_16475__$1 = state_16475;var statearr_16484_16509 = state_16475__$1;(statearr_16484_16509[2] = null);
(statearr_16484_16509[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 8))
{var inst_16457 = (state_16475[2]);var state_16475__$1 = state_16475;var statearr_16485_16510 = state_16475__$1;(statearr_16485_16510[2] = inst_16457);
(statearr_16485_16510[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 9))
{var inst_16440 = (state_16475[5]);var inst_16452 = (state_16475[2]);var inst_16453 = (inst_16440 + 1);var inst_16440__$1 = inst_16453;var state_16475__$1 = (function (){var statearr_16486 = state_16475;(statearr_16486[5] = inst_16440__$1);
(statearr_16486[8] = inst_16452);
return statearr_16486;
})();var statearr_16487_16511 = state_16475__$1;(statearr_16487_16511[2] = null);
(statearr_16487_16511[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 10))
{var inst_16444 = (state_16475[2]);var inst_16445 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16475__$1 = (function (){var statearr_16488 = state_16475;(statearr_16488[9] = inst_16444);
return statearr_16488;
})();var statearr_16489_16512 = state_16475__$1;(statearr_16489_16512[2] = inst_16445);
(statearr_16489_16512[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 11))
{try{var inst_16440 = (state_16475[5]);var inst_16448 = chs__$1.call(null,inst_16440);var inst_16449 = done.call(null,inst_16440);var inst_16450 = cljs.core.async.take_BANG_.call(null,inst_16448,inst_16449);var state_16475__$1 = state_16475;var statearr_16492_16513 = state_16475__$1;(statearr_16492_16513[2] = inst_16450);
(statearr_16492_16513[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16490){if((e16490 instanceof Object))
{var ex__5324__auto__ = e16490;var statearr_16491_16514 = state_16475;(statearr_16491_16514[1] = 10);
(statearr_16491_16514[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16490;
} else
{return null;
}
}
}} else
{if((state_val_16476 === 12))
{var inst_16461 = (state_16475[10]);var inst_16461__$1 = (state_16475[2]);var inst_16462 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16461__$1);var state_16475__$1 = (function (){var statearr_16493 = state_16475;(statearr_16493[10] = inst_16461__$1);
return statearr_16493;
})();if(cljs.core.truth_(inst_16462))
{var statearr_16494_16515 = state_16475__$1;(statearr_16494_16515[1] = 13);
} else
{var statearr_16495_16516 = state_16475__$1;(statearr_16495_16516[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 13))
{var inst_16464 = cljs.core.async.close_BANG_.call(null,out);var state_16475__$1 = state_16475;var statearr_16496_16517 = state_16475__$1;(statearr_16496_16517[2] = inst_16464);
(statearr_16496_16517[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 14))
{var inst_16461 = (state_16475[10]);var inst_16466 = cljs.core.apply.call(null,f,inst_16461);var state_16475__$1 = state_16475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16475__$1,16,out,inst_16466);
} else
{if((state_val_16476 === 15))
{var inst_16471 = (state_16475[2]);var state_16475__$1 = state_16475;var statearr_16497_16518 = state_16475__$1;(statearr_16497_16518[2] = inst_16471);
(statearr_16497_16518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16476 === 16))
{var inst_16468 = (state_16475[2]);var state_16475__$1 = (function (){var statearr_16498 = state_16475;(statearr_16498[11] = inst_16468);
return statearr_16498;
})();var statearr_16499_16519 = state_16475__$1;(statearr_16499_16519[2] = null);
(statearr_16499_16519[1] = 2);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_16501 = (new Array(12));(statearr_16501[0] = state_machine__5331__auto__);
(statearr_16501[1] = 1);
return statearr_16501;
});
var state_machine__5331__auto____1 = (function (state_16475){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16475);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16475){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16502 = f__5381__auto__.call(null);(statearr_16502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16503);
return statearr_16502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___16619 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16599){var state_val_16600 = (state_16599[1]);if((state_val_16600 === 1))
{var inst_16570 = cljs.core.vec.call(null,chs);var inst_16571 = inst_16570;var state_16599__$1 = (function (){var statearr_16601 = state_16599;(statearr_16601[5] = inst_16571);
return statearr_16601;
})();var statearr_16602_16620 = state_16599__$1;(statearr_16602_16620[2] = null);
(statearr_16602_16620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 2))
{var inst_16571 = (state_16599[5]);var inst_16573 = cljs.core.count.call(null,inst_16571);var inst_16574 = (inst_16573 > 0);var state_16599__$1 = state_16599;if(cljs.core.truth_(inst_16574))
{var statearr_16603_16621 = state_16599__$1;(statearr_16603_16621[1] = 4);
} else
{var statearr_16604_16622 = state_16599__$1;(statearr_16604_16622[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 3))
{var inst_16597 = (state_16599[2]);var state_16599__$1 = state_16599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16599__$1,inst_16597);
} else
{if((state_val_16600 === 4))
{var inst_16571 = (state_16599[5]);var state_16599__$1 = state_16599;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16599__$1,7,inst_16571);
} else
{if((state_val_16600 === 5))
{var inst_16593 = cljs.core.async.close_BANG_.call(null,out);var state_16599__$1 = state_16599;var statearr_16605_16623 = state_16599__$1;(statearr_16605_16623[2] = inst_16593);
(statearr_16605_16623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 6))
{var inst_16595 = (state_16599[2]);var state_16599__$1 = state_16599;var statearr_16606_16624 = state_16599__$1;(statearr_16606_16624[2] = inst_16595);
(statearr_16606_16624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 7))
{var inst_16579 = (state_16599[6]);var inst_16578 = (state_16599[7]);var inst_16578__$1 = (state_16599[2]);var inst_16579__$1 = cljs.core.nth.call(null,inst_16578__$1,0,null);var inst_16580 = cljs.core.nth.call(null,inst_16578__$1,1,null);var inst_16581 = (inst_16579__$1 == null);var state_16599__$1 = (function (){var statearr_16607 = state_16599;(statearr_16607[6] = inst_16579__$1);
(statearr_16607[7] = inst_16578__$1);
(statearr_16607[8] = inst_16580);
return statearr_16607;
})();if(cljs.core.truth_(inst_16581))
{var statearr_16608_16625 = state_16599__$1;(statearr_16608_16625[1] = 8);
} else
{var statearr_16609_16626 = state_16599__$1;(statearr_16609_16626[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 8))
{var inst_16579 = (state_16599[6]);var inst_16578 = (state_16599[7]);var inst_16580 = (state_16599[8]);var inst_16571 = (state_16599[5]);var inst_16583 = (function (){var c = inst_16580;var v = inst_16579;var vec__16576 = inst_16578;var cs = inst_16571;return ((function (c,v,vec__16576,cs,inst_16579,inst_16578,inst_16580,inst_16571,state_val_16600){
return (function (p1__16520_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16520_SHARP_);
});
;})(c,v,vec__16576,cs,inst_16579,inst_16578,inst_16580,inst_16571,state_val_16600))
})();var inst_16584 = cljs.core.filterv.call(null,inst_16583,inst_16571);var inst_16571__$1 = inst_16584;var state_16599__$1 = (function (){var statearr_16610 = state_16599;(statearr_16610[5] = inst_16571__$1);
return statearr_16610;
})();var statearr_16611_16627 = state_16599__$1;(statearr_16611_16627[2] = null);
(statearr_16611_16627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 9))
{var inst_16579 = (state_16599[6]);var state_16599__$1 = state_16599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16599__$1,11,out,inst_16579);
} else
{if((state_val_16600 === 10))
{var inst_16591 = (state_16599[2]);var state_16599__$1 = state_16599;var statearr_16613_16628 = state_16599__$1;(statearr_16613_16628[2] = inst_16591);
(statearr_16613_16628[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16600 === 11))
{var inst_16571 = (state_16599[5]);var inst_16588 = (state_16599[2]);var tmp16612 = inst_16571;var inst_16571__$1 = tmp16612;var state_16599__$1 = (function (){var statearr_16614 = state_16599;(statearr_16614[9] = inst_16588);
(statearr_16614[5] = inst_16571__$1);
return statearr_16614;
})();var statearr_16615_16629 = state_16599__$1;(statearr_16615_16629[2] = null);
(statearr_16615_16629[1] = 2);
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
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_16617 = (new Array(10));(statearr_16617[0] = state_machine__5331__auto__);
(statearr_16617[1] = 1);
return statearr_16617;
});
var state_machine__5331__auto____1 = (function (state_16599){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16599){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16618 = f__5381__auto__.call(null);(statearr_16618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16619);
return statearr_16618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
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
