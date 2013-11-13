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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14710 = (function (f,fn_handler,meta14711){
this.f = f;
this.fn_handler = fn_handler;
this.meta14711 = meta14711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14710.cljs$lang$type = true;
cljs.core.async.t14710.cljs$lang$ctorStr = "cljs.core.async/t14710";
cljs.core.async.t14710.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14710");
});
cljs.core.async.t14710.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14712){var self__ = this;
var _14712__$1 = this;return self__.meta14711;
});
cljs.core.async.t14710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14712,meta14711__$1){var self__ = this;
var _14712__$1 = this;return (new cljs.core.async.t14710(self__.f,self__.fn_handler,meta14711__$1));
});
cljs.core.async.__GT_t14710 = (function __GT_t14710(f__$1,fn_handler__$1,meta14711){return (new cljs.core.async.t14710(f__$1,fn_handler__$1,meta14711));
});
}
return (new cljs.core.async.t14710(f,fn_handler,null));
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
{var val_14713 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14713);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14713);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___14714 = n;var x_14715 = 0;while(true){
if((x_14715 < n__3891__auto___14714))
{(a[x_14715] = 0);
{
var G__14716 = (x_14715 + 1);
x_14715 = G__14716;
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
var G__14717 = (i + 1);
i = G__14717;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14721 = (function (flag,alt_flag,meta14722){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14722 = meta14722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14721.cljs$lang$type = true;
cljs.core.async.t14721.cljs$lang$ctorStr = "cljs.core.async/t14721";
cljs.core.async.t14721.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14721");
});
cljs.core.async.t14721.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14723){var self__ = this;
var _14723__$1 = this;return self__.meta14722;
});
cljs.core.async.t14721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14723,meta14722__$1){var self__ = this;
var _14723__$1 = this;return (new cljs.core.async.t14721(self__.flag,self__.alt_flag,meta14722__$1));
});
cljs.core.async.__GT_t14721 = (function __GT_t14721(flag__$1,alt_flag__$1,meta14722){return (new cljs.core.async.t14721(flag__$1,alt_flag__$1,meta14722));
});
}
return (new cljs.core.async.t14721(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14727 = (function (cb,flag,alt_handler,meta14728){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14728 = meta14728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14727.cljs$lang$type = true;
cljs.core.async.t14727.cljs$lang$ctorStr = "cljs.core.async/t14727";
cljs.core.async.t14727.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14727");
});
cljs.core.async.t14727.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14729){var self__ = this;
var _14729__$1 = this;return self__.meta14728;
});
cljs.core.async.t14727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14729,meta14728__$1){var self__ = this;
var _14729__$1 = this;return (new cljs.core.async.t14727(self__.cb,self__.flag,self__.alt_handler,meta14728__$1));
});
cljs.core.async.__GT_t14727 = (function __GT_t14727(cb__$1,flag__$1,alt_handler__$1,meta14728){return (new cljs.core.async.t14727(cb__$1,flag__$1,alt_handler__$1,meta14728));
});
}
return (new cljs.core.async.t14727(cb,flag,alt_handler,null));
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
return (function (p1__14730_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14730_SHARP_,port], true));
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
var G__14731 = (i + 1);
i = G__14731;
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
var alts_BANG___delegate = function (ports,p__14732){var map__14734 = p__14732;var map__14734__$1 = ((cljs.core.seq_QMARK_.call(null,map__14734))?cljs.core.apply.call(null,cljs.core.hash_map,map__14734):map__14734);var opts = map__14734__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14732 = null;if (arguments.length > 1) {
  p__14732 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14732);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14735){
var ports = cljs.core.first(arglist__14735);
var p__14732 = cljs.core.rest(arglist__14735);
return alts_BANG___delegate(ports,p__14732);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14743 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14743 = (function (ch,f,map_LT_,meta14744){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14744 = meta14744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14743.cljs$lang$type = true;
cljs.core.async.t14743.cljs$lang$ctorStr = "cljs.core.async/t14743";
cljs.core.async.t14743.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14743");
});
cljs.core.async.t14743.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14743.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14746 = (function (fn1,_,meta14744,ch,f,map_LT_,meta14747){
this.fn1 = fn1;
this._ = _;
this.meta14744 = meta14744;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14747 = meta14747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14746.cljs$lang$type = true;
cljs.core.async.t14746.cljs$lang$ctorStr = "cljs.core.async/t14746";
cljs.core.async.t14746.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14746");
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14736_SHARP_){return f1.call(null,(((p1__14736_SHARP_ == null))?null:self__.f.call(null,p1__14736_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14748){var self__ = this;
var _14748__$1 = this;return self__.meta14747;
});
cljs.core.async.t14746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14748,meta14747__$1){var self__ = this;
var _14748__$1 = this;return (new cljs.core.async.t14746(self__.fn1,self__._,self__.meta14744,self__.ch,self__.f,self__.map_LT_,meta14747__$1));
});
cljs.core.async.__GT_t14746 = (function __GT_t14746(fn1__$1,___$2,meta14744__$1,ch__$2,f__$2,map_LT___$2,meta14747){return (new cljs.core.async.t14746(fn1__$1,___$2,meta14744__$1,ch__$2,f__$2,map_LT___$2,meta14747));
});
}
return (new cljs.core.async.t14746(fn1,___$1,self__.meta14744,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14743.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14745){var self__ = this;
var _14745__$1 = this;return self__.meta14744;
});
cljs.core.async.t14743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14745,meta14744__$1){var self__ = this;
var _14745__$1 = this;return (new cljs.core.async.t14743(self__.ch,self__.f,self__.map_LT_,meta14744__$1));
});
cljs.core.async.__GT_t14743 = (function __GT_t14743(ch__$1,f__$1,map_LT___$1,meta14744){return (new cljs.core.async.t14743(ch__$1,f__$1,map_LT___$1,meta14744));
});
}
return (new cljs.core.async.t14743(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14752 = (function (ch,f,map_GT_,meta14753){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14753 = meta14753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14752.cljs$lang$type = true;
cljs.core.async.t14752.cljs$lang$ctorStr = "cljs.core.async/t14752";
cljs.core.async.t14752.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14752");
});
cljs.core.async.t14752.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14752.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14752.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14754){var self__ = this;
var _14754__$1 = this;return self__.meta14753;
});
cljs.core.async.t14752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14754,meta14753__$1){var self__ = this;
var _14754__$1 = this;return (new cljs.core.async.t14752(self__.ch,self__.f,self__.map_GT_,meta14753__$1));
});
cljs.core.async.__GT_t14752 = (function __GT_t14752(ch__$1,f__$1,map_GT___$1,meta14753){return (new cljs.core.async.t14752(ch__$1,f__$1,map_GT___$1,meta14753));
});
}
return (new cljs.core.async.t14752(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14758 = (function (ch,p,filter_GT_,meta14759){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14759 = meta14759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14758.cljs$lang$type = true;
cljs.core.async.t14758.cljs$lang$ctorStr = "cljs.core.async/t14758";
cljs.core.async.t14758.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14758");
});
cljs.core.async.t14758.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14758.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14758.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14760){var self__ = this;
var _14760__$1 = this;return self__.meta14759;
});
cljs.core.async.t14758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14760,meta14759__$1){var self__ = this;
var _14760__$1 = this;return (new cljs.core.async.t14758(self__.ch,self__.p,self__.filter_GT_,meta14759__$1));
});
cljs.core.async.__GT_t14758 = (function __GT_t14758(ch__$1,p__$1,filter_GT___$1,meta14759){return (new cljs.core.async.t14758(ch__$1,p__$1,filter_GT___$1,meta14759));
});
}
return (new cljs.core.async.t14758(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___14835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_14818){var state_val_14819 = (state_14818[1]);if((state_val_14819 === 1))
{var state_14818__$1 = state_14818;var statearr_14820_14836 = state_14818__$1;(statearr_14820_14836[2] = null);
(statearr_14820_14836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 2))
{var state_14818__$1 = state_14818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14818__$1,4,ch);
} else
{if((state_val_14819 === 3))
{var inst_14816 = (state_14818[2]);var state_14818__$1 = state_14818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14818__$1,inst_14816);
} else
{if((state_val_14819 === 4))
{var inst_14800 = (state_14818[5]);var inst_14800__$1 = (state_14818[2]);var inst_14801 = (inst_14800__$1 == null);var state_14818__$1 = (function (){var statearr_14821 = state_14818;(statearr_14821[5] = inst_14800__$1);
return statearr_14821;
})();if(cljs.core.truth_(inst_14801))
{var statearr_14822_14837 = state_14818__$1;(statearr_14822_14837[1] = 5);
} else
{var statearr_14823_14838 = state_14818__$1;(statearr_14823_14838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 5))
{var inst_14803 = cljs.core.async.close_BANG_.call(null,out);var state_14818__$1 = state_14818;var statearr_14824_14839 = state_14818__$1;(statearr_14824_14839[2] = inst_14803);
(statearr_14824_14839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 6))
{var inst_14800 = (state_14818[5]);var inst_14805 = p.call(null,inst_14800);var state_14818__$1 = state_14818;if(cljs.core.truth_(inst_14805))
{var statearr_14825_14840 = state_14818__$1;(statearr_14825_14840[1] = 8);
} else
{var statearr_14826_14841 = state_14818__$1;(statearr_14826_14841[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 7))
{var inst_14814 = (state_14818[2]);var state_14818__$1 = state_14818;var statearr_14827_14842 = state_14818__$1;(statearr_14827_14842[2] = inst_14814);
(statearr_14827_14842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 8))
{var inst_14800 = (state_14818[5]);var state_14818__$1 = state_14818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14818__$1,11,out,inst_14800);
} else
{if((state_val_14819 === 9))
{var state_14818__$1 = state_14818;var statearr_14828_14843 = state_14818__$1;(statearr_14828_14843[2] = null);
(statearr_14828_14843[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 10))
{var inst_14811 = (state_14818[2]);var state_14818__$1 = (function (){var statearr_14829 = state_14818;(statearr_14829[6] = inst_14811);
return statearr_14829;
})();var statearr_14830_14844 = state_14818__$1;(statearr_14830_14844[2] = null);
(statearr_14830_14844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14819 === 11))
{var inst_14808 = (state_14818[2]);var state_14818__$1 = state_14818;var statearr_14831_14845 = state_14818__$1;(statearr_14831_14845[2] = inst_14808);
(statearr_14831_14845[1] = 10);
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
var state_machine__5331__auto____0 = (function (){var statearr_14833 = (new Array(7));(statearr_14833[0] = state_machine__5331__auto__);
(statearr_14833[1] = 1);
return statearr_14833;
});
var state_machine__5331__auto____1 = (function (state_14818){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_14818);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_14818){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_14818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_14834 = f__5381__auto__.call(null);(statearr_14834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___14835);
return statearr_14834;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_14993){var state_val_14994 = (state_14993[1]);if((state_val_14994 === 1))
{var state_14993__$1 = state_14993;var statearr_14995_15028 = state_14993__$1;(statearr_14995_15028[2] = null);
(statearr_14995_15028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 2))
{var state_14993__$1 = state_14993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14993__$1,4,in$);
} else
{if((state_val_14994 === 3))
{var inst_14991 = (state_14993[2]);var state_14993__$1 = state_14993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14993__$1,inst_14991);
} else
{if((state_val_14994 === 4))
{var inst_14939 = (state_14993[5]);var inst_14939__$1 = (state_14993[2]);var inst_14940 = (inst_14939__$1 == null);var state_14993__$1 = (function (){var statearr_14996 = state_14993;(statearr_14996[5] = inst_14939__$1);
return statearr_14996;
})();if(cljs.core.truth_(inst_14940))
{var statearr_14997_15029 = state_14993__$1;(statearr_14997_15029[1] = 5);
} else
{var statearr_14998_15030 = state_14993__$1;(statearr_14998_15030[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 5))
{var inst_14942 = cljs.core.async.close_BANG_.call(null,out);var state_14993__$1 = state_14993;var statearr_14999_15031 = state_14993__$1;(statearr_14999_15031[2] = inst_14942);
(statearr_14999_15031[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 6))
{var inst_14939 = (state_14993[5]);var inst_14944 = f.call(null,inst_14939);var inst_14949 = cljs.core.seq.call(null,inst_14944);var inst_14950 = inst_14949;var inst_14951 = null;var inst_14952 = 0;var inst_14953 = 0;var state_14993__$1 = (function (){var statearr_15000 = state_14993;(statearr_15000[6] = inst_14953);
(statearr_15000[7] = inst_14952);
(statearr_15000[8] = inst_14951);
(statearr_15000[9] = inst_14950);
return statearr_15000;
})();var statearr_15001_15032 = state_14993__$1;(statearr_15001_15032[2] = null);
(statearr_15001_15032[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 7))
{var inst_14989 = (state_14993[2]);var state_14993__$1 = state_14993;var statearr_15002_15033 = state_14993__$1;(statearr_15002_15033[2] = inst_14989);
(statearr_15002_15033[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 8))
{var inst_14953 = (state_14993[6]);var inst_14952 = (state_14993[7]);var inst_14955 = (inst_14953 < inst_14952);var inst_14956 = inst_14955;var state_14993__$1 = state_14993;if(cljs.core.truth_(inst_14956))
{var statearr_15003_15034 = state_14993__$1;(statearr_15003_15034[1] = 10);
} else
{var statearr_15004_15035 = state_14993__$1;(statearr_15004_15035[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 9))
{var inst_14986 = (state_14993[2]);var state_14993__$1 = (function (){var statearr_15005 = state_14993;(statearr_15005[10] = inst_14986);
return statearr_15005;
})();var statearr_15006_15036 = state_14993__$1;(statearr_15006_15036[2] = null);
(statearr_15006_15036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 10))
{var inst_14953 = (state_14993[6]);var inst_14951 = (state_14993[8]);var inst_14958 = cljs.core._nth.call(null,inst_14951,inst_14953);var state_14993__$1 = state_14993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14993__$1,13,out,inst_14958);
} else
{if((state_val_14994 === 11))
{var inst_14964 = (state_14993[11]);var inst_14950 = (state_14993[9]);var inst_14964__$1 = cljs.core.seq.call(null,inst_14950);var state_14993__$1 = (function (){var statearr_15010 = state_14993;(statearr_15010[11] = inst_14964__$1);
return statearr_15010;
})();if(inst_14964__$1)
{var statearr_15011_15037 = state_14993__$1;(statearr_15011_15037[1] = 14);
} else
{var statearr_15012_15038 = state_14993__$1;(statearr_15012_15038[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 12))
{var inst_14984 = (state_14993[2]);var state_14993__$1 = state_14993;var statearr_15013_15039 = state_14993__$1;(statearr_15013_15039[2] = inst_14984);
(statearr_15013_15039[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 13))
{var inst_14953 = (state_14993[6]);var inst_14952 = (state_14993[7]);var inst_14951 = (state_14993[8]);var inst_14950 = (state_14993[9]);var inst_14960 = (state_14993[2]);var inst_14961 = (inst_14953 + 1);var tmp15007 = inst_14952;var tmp15008 = inst_14951;var tmp15009 = inst_14950;var inst_14950__$1 = tmp15009;var inst_14951__$1 = tmp15008;var inst_14952__$1 = tmp15007;var inst_14953__$1 = inst_14961;var state_14993__$1 = (function (){var statearr_15014 = state_14993;(statearr_15014[12] = inst_14960);
(statearr_15014[6] = inst_14953__$1);
(statearr_15014[7] = inst_14952__$1);
(statearr_15014[8] = inst_14951__$1);
(statearr_15014[9] = inst_14950__$1);
return statearr_15014;
})();var statearr_15015_15040 = state_14993__$1;(statearr_15015_15040[2] = null);
(statearr_15015_15040[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 14))
{var inst_14964 = (state_14993[11]);var inst_14966 = cljs.core.chunked_seq_QMARK_.call(null,inst_14964);var state_14993__$1 = state_14993;if(inst_14966)
{var statearr_15016_15041 = state_14993__$1;(statearr_15016_15041[1] = 17);
} else
{var statearr_15017_15042 = state_14993__$1;(statearr_15017_15042[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 15))
{var state_14993__$1 = state_14993;var statearr_15018_15043 = state_14993__$1;(statearr_15018_15043[2] = null);
(statearr_15018_15043[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 16))
{var inst_14982 = (state_14993[2]);var state_14993__$1 = state_14993;var statearr_15019_15044 = state_14993__$1;(statearr_15019_15044[2] = inst_14982);
(statearr_15019_15044[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 17))
{var inst_14964 = (state_14993[11]);var inst_14968 = cljs.core.chunk_first.call(null,inst_14964);var inst_14969 = cljs.core.chunk_rest.call(null,inst_14964);var inst_14970 = cljs.core.count.call(null,inst_14968);var inst_14950 = inst_14969;var inst_14951 = inst_14968;var inst_14952 = inst_14970;var inst_14953 = 0;var state_14993__$1 = (function (){var statearr_15020 = state_14993;(statearr_15020[6] = inst_14953);
(statearr_15020[7] = inst_14952);
(statearr_15020[8] = inst_14951);
(statearr_15020[9] = inst_14950);
return statearr_15020;
})();var statearr_15021_15045 = state_14993__$1;(statearr_15021_15045[2] = null);
(statearr_15021_15045[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 18))
{var inst_14964 = (state_14993[11]);var inst_14973 = cljs.core.first.call(null,inst_14964);var state_14993__$1 = state_14993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14993__$1,20,out,inst_14973);
} else
{if((state_val_14994 === 19))
{var inst_14979 = (state_14993[2]);var state_14993__$1 = state_14993;var statearr_15022_15046 = state_14993__$1;(statearr_15022_15046[2] = inst_14979);
(statearr_15022_15046[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 20))
{var inst_14964 = (state_14993[11]);var inst_14975 = (state_14993[2]);var inst_14976 = cljs.core.next.call(null,inst_14964);var inst_14950 = inst_14976;var inst_14951 = null;var inst_14952 = 0;var inst_14953 = 0;var state_14993__$1 = (function (){var statearr_15023 = state_14993;(statearr_15023[13] = inst_14975);
(statearr_15023[6] = inst_14953);
(statearr_15023[7] = inst_14952);
(statearr_15023[8] = inst_14951);
(statearr_15023[9] = inst_14950);
return statearr_15023;
})();var statearr_15024_15047 = state_14993__$1;(statearr_15024_15047[2] = null);
(statearr_15024_15047[1] = 8);
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
var state_machine__5331__auto____0 = (function (){var statearr_15026 = (new Array(14));(statearr_15026[0] = state_machine__5331__auto__);
(statearr_15026[1] = 1);
return statearr_15026;
});
var state_machine__5331__auto____1 = (function (state_14993){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_14993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_14993){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_14993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15027 = f__5381__auto__.call(null);(statearr_15027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15027;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5380__auto___15120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15103){var state_val_15104 = (state_15103[1]);if((state_val_15104 === 1))
{var state_15103__$1 = state_15103;var statearr_15105_15121 = state_15103__$1;(statearr_15105_15121[2] = null);
(statearr_15105_15121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 2))
{var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15103__$1,4,from);
} else
{if((state_val_15104 === 3))
{var inst_15101 = (state_15103[2]);var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15103__$1,inst_15101);
} else
{if((state_val_15104 === 4))
{var inst_15086 = (state_15103[5]);var inst_15086__$1 = (state_15103[2]);var inst_15087 = (inst_15086__$1 == null);var state_15103__$1 = (function (){var statearr_15106 = state_15103;(statearr_15106[5] = inst_15086__$1);
return statearr_15106;
})();if(cljs.core.truth_(inst_15087))
{var statearr_15107_15122 = state_15103__$1;(statearr_15107_15122[1] = 5);
} else
{var statearr_15108_15123 = state_15103__$1;(statearr_15108_15123[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 5))
{var state_15103__$1 = state_15103;if(cljs.core.truth_(close_QMARK_))
{var statearr_15109_15124 = state_15103__$1;(statearr_15109_15124[1] = 8);
} else
{var statearr_15110_15125 = state_15103__$1;(statearr_15110_15125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 6))
{var inst_15086 = (state_15103[5]);var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15103__$1,11,to,inst_15086);
} else
{if((state_val_15104 === 7))
{var inst_15099 = (state_15103[2]);var state_15103__$1 = state_15103;var statearr_15111_15126 = state_15103__$1;(statearr_15111_15126[2] = inst_15099);
(statearr_15111_15126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 8))
{var inst_15090 = cljs.core.async.close_BANG_.call(null,to);var state_15103__$1 = state_15103;var statearr_15112_15127 = state_15103__$1;(statearr_15112_15127[2] = inst_15090);
(statearr_15112_15127[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 9))
{var state_15103__$1 = state_15103;var statearr_15113_15128 = state_15103__$1;(statearr_15113_15128[2] = null);
(statearr_15113_15128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 10))
{var inst_15093 = (state_15103[2]);var state_15103__$1 = state_15103;var statearr_15114_15129 = state_15103__$1;(statearr_15114_15129[2] = inst_15093);
(statearr_15114_15129[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15104 === 11))
{var inst_15096 = (state_15103[2]);var state_15103__$1 = (function (){var statearr_15115 = state_15103;(statearr_15115[6] = inst_15096);
return statearr_15115;
})();var statearr_15116_15130 = state_15103__$1;(statearr_15116_15130[2] = null);
(statearr_15116_15130[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_15118 = (new Array(7));(statearr_15118[0] = state_machine__5331__auto__);
(statearr_15118[1] = 1);
return statearr_15118;
});
var state_machine__5331__auto____1 = (function (state_15103){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15103){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15119 = f__5381__auto__.call(null);(statearr_15119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15120);
return statearr_15119;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5380__auto___15209 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15191){var state_val_15192 = (state_15191[1]);if((state_val_15192 === 1))
{var state_15191__$1 = state_15191;var statearr_15193_15210 = state_15191__$1;(statearr_15193_15210[2] = null);
(statearr_15193_15210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 2))
{var state_15191__$1 = state_15191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15191__$1,4,ch);
} else
{if((state_val_15192 === 3))
{var inst_15189 = (state_15191[2]);var state_15191__$1 = state_15191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15191__$1,inst_15189);
} else
{if((state_val_15192 === 4))
{var inst_15172 = (state_15191[5]);var inst_15172__$1 = (state_15191[2]);var inst_15173 = (inst_15172__$1 == null);var state_15191__$1 = (function (){var statearr_15194 = state_15191;(statearr_15194[5] = inst_15172__$1);
return statearr_15194;
})();if(cljs.core.truth_(inst_15173))
{var statearr_15195_15211 = state_15191__$1;(statearr_15195_15211[1] = 5);
} else
{var statearr_15196_15212 = state_15191__$1;(statearr_15196_15212[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 5))
{var inst_15175 = cljs.core.async.close_BANG_.call(null,tc);var inst_15176 = cljs.core.async.close_BANG_.call(null,fc);var state_15191__$1 = (function (){var statearr_15197 = state_15191;(statearr_15197[6] = inst_15175);
return statearr_15197;
})();var statearr_15198_15213 = state_15191__$1;(statearr_15198_15213[2] = inst_15176);
(statearr_15198_15213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 6))
{var inst_15172 = (state_15191[5]);var inst_15178 = p.call(null,inst_15172);var state_15191__$1 = state_15191;if(cljs.core.truth_(inst_15178))
{var statearr_15199_15214 = state_15191__$1;(statearr_15199_15214[1] = 9);
} else
{var statearr_15200_15215 = state_15191__$1;(statearr_15200_15215[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 7))
{var inst_15187 = (state_15191[2]);var state_15191__$1 = state_15191;var statearr_15201_15216 = state_15191__$1;(statearr_15201_15216[2] = inst_15187);
(statearr_15201_15216[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 8))
{var inst_15184 = (state_15191[2]);var state_15191__$1 = (function (){var statearr_15202 = state_15191;(statearr_15202[7] = inst_15184);
return statearr_15202;
})();var statearr_15203_15217 = state_15191__$1;(statearr_15203_15217[2] = null);
(statearr_15203_15217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 9))
{var state_15191__$1 = state_15191;var statearr_15204_15218 = state_15191__$1;(statearr_15204_15218[2] = tc);
(statearr_15204_15218[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 10))
{var state_15191__$1 = state_15191;var statearr_15205_15219 = state_15191__$1;(statearr_15205_15219[2] = fc);
(statearr_15205_15219[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15192 === 11))
{var inst_15172 = (state_15191[5]);var inst_15182 = (state_15191[2]);var state_15191__$1 = state_15191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15191__$1,8,inst_15182,inst_15172);
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
var state_machine__5331__auto____0 = (function (){var statearr_15207 = (new Array(8));(statearr_15207[0] = state_machine__5331__auto__);
(statearr_15207[1] = 1);
return statearr_15207;
});
var state_machine__5331__auto____1 = (function (state_15191){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15191);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15191){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15208 = f__5381__auto__.call(null);(statearr_15208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15209);
return statearr_15208;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15262){var state_val_15263 = (state_15262[1]);if((state_val_15263 === 7))
{var inst_15258 = (state_15262[2]);var state_15262__$1 = state_15262;var statearr_15264_15276 = state_15262__$1;(statearr_15264_15276[2] = inst_15258);
(statearr_15264_15276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15263 === 6))
{var inst_15251 = (state_15262[5]);var inst_15248 = (state_15262[6]);var inst_15255 = f.call(null,inst_15248,inst_15251);var inst_15248__$1 = inst_15255;var state_15262__$1 = (function (){var statearr_15265 = state_15262;(statearr_15265[6] = inst_15248__$1);
return statearr_15265;
})();var statearr_15266_15277 = state_15262__$1;(statearr_15266_15277[2] = null);
(statearr_15266_15277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15263 === 5))
{var inst_15248 = (state_15262[6]);var state_15262__$1 = state_15262;var statearr_15267_15278 = state_15262__$1;(statearr_15267_15278[2] = inst_15248);
(statearr_15267_15278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15263 === 4))
{var inst_15251 = (state_15262[5]);var inst_15251__$1 = (state_15262[2]);var inst_15252 = (inst_15251__$1 == null);var state_15262__$1 = (function (){var statearr_15268 = state_15262;(statearr_15268[5] = inst_15251__$1);
return statearr_15268;
})();if(cljs.core.truth_(inst_15252))
{var statearr_15269_15279 = state_15262__$1;(statearr_15269_15279[1] = 5);
} else
{var statearr_15270_15280 = state_15262__$1;(statearr_15270_15280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15263 === 3))
{var inst_15260 = (state_15262[2]);var state_15262__$1 = state_15262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15262__$1,inst_15260);
} else
{if((state_val_15263 === 2))
{var state_15262__$1 = state_15262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15262__$1,4,ch);
} else
{if((state_val_15263 === 1))
{var inst_15248 = init;var state_15262__$1 = (function (){var statearr_15271 = state_15262;(statearr_15271[6] = inst_15248);
return statearr_15271;
})();var statearr_15272_15281 = state_15262__$1;(statearr_15272_15281[2] = null);
(statearr_15272_15281[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_15274 = (new Array(7));(statearr_15274[0] = state_machine__5331__auto__);
(statearr_15274[1] = 1);
return statearr_15274;
});
var state_machine__5331__auto____1 = (function (state_15262){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15262);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15262){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15275 = f__5381__auto__.call(null);(statearr_15275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15275;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15339){var state_val_15340 = (state_15339[1]);if((state_val_15340 === 1))
{var inst_15319 = cljs.core.seq.call(null,coll);var inst_15320 = inst_15319;var state_15339__$1 = (function (){var statearr_15341 = state_15339;(statearr_15341[5] = inst_15320);
return statearr_15341;
})();var statearr_15342_15356 = state_15339__$1;(statearr_15342_15356[2] = null);
(statearr_15342_15356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 2))
{var inst_15320 = (state_15339[5]);var state_15339__$1 = state_15339;if(cljs.core.truth_(inst_15320))
{var statearr_15343_15357 = state_15339__$1;(statearr_15343_15357[1] = 4);
} else
{var statearr_15344_15358 = state_15339__$1;(statearr_15344_15358[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 3))
{var inst_15337 = (state_15339[2]);var state_15339__$1 = state_15339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15339__$1,inst_15337);
} else
{if((state_val_15340 === 4))
{var inst_15320 = (state_15339[5]);var inst_15323 = cljs.core.first.call(null,inst_15320);var state_15339__$1 = state_15339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15339__$1,7,ch,inst_15323);
} else
{if((state_val_15340 === 5))
{var state_15339__$1 = state_15339;if(cljs.core.truth_(close_QMARK_))
{var statearr_15345_15359 = state_15339__$1;(statearr_15345_15359[1] = 8);
} else
{var statearr_15346_15360 = state_15339__$1;(statearr_15346_15360[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 6))
{var inst_15335 = (state_15339[2]);var state_15339__$1 = state_15339;var statearr_15347_15361 = state_15339__$1;(statearr_15347_15361[2] = inst_15335);
(statearr_15347_15361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 7))
{var inst_15320 = (state_15339[5]);var inst_15325 = (state_15339[2]);var inst_15326 = cljs.core.next.call(null,inst_15320);var inst_15320__$1 = inst_15326;var state_15339__$1 = (function (){var statearr_15348 = state_15339;(statearr_15348[6] = inst_15325);
(statearr_15348[5] = inst_15320__$1);
return statearr_15348;
})();var statearr_15349_15362 = state_15339__$1;(statearr_15349_15362[2] = null);
(statearr_15349_15362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 8))
{var inst_15330 = cljs.core.async.close_BANG_.call(null,ch);var state_15339__$1 = state_15339;var statearr_15350_15363 = state_15339__$1;(statearr_15350_15363[2] = inst_15330);
(statearr_15350_15363[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 9))
{var state_15339__$1 = state_15339;var statearr_15351_15364 = state_15339__$1;(statearr_15351_15364[2] = null);
(statearr_15351_15364[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15340 === 10))
{var inst_15333 = (state_15339[2]);var state_15339__$1 = state_15339;var statearr_15352_15365 = state_15339__$1;(statearr_15352_15365[2] = inst_15333);
(statearr_15352_15365[1] = 6);
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
var state_machine__5331__auto____0 = (function (){var statearr_15354 = (new Array(7));(statearr_15354[0] = state_machine__5331__auto__);
(statearr_15354[1] = 1);
return statearr_15354;
});
var state_machine__5331__auto____1 = (function (state_15339){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15339);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15355 = f__5381__auto__.call(null);(statearr_15355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15355;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15578 = (function (cs,ch,mult,meta15579){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15579 = meta15579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15578.cljs$lang$type = true;
cljs.core.async.t15578.cljs$lang$ctorStr = "cljs.core.async/t15578";
cljs.core.async.t15578.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15578");
});})(cs))
;
cljs.core.async.t15578.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15578.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15578.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15578.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15578.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15580){var self__ = this;
var _15580__$1 = this;return self__.meta15579;
});})(cs))
;
cljs.core.async.t15578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15580,meta15579__$1){var self__ = this;
var _15580__$1 = this;return (new cljs.core.async.t15578(self__.cs,self__.ch,self__.mult,meta15579__$1));
});})(cs))
;
cljs.core.async.__GT_t15578 = ((function (cs){
return (function __GT_t15578(cs__$1,ch__$1,mult__$1,meta15579){return (new cljs.core.async.t15578(cs__$1,ch__$1,mult__$1,meta15579));
});})(cs))
;
}
return (new cljs.core.async.t15578(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5380__auto___15790 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15708){var state_val_15709 = (state_15708[1]);if((state_val_15709 === 32))
{try{var inst_15659 = (state_15708[5]);var inst_15583 = (state_15708[6]);var inst_15665 = cljs.core.async.put_BANG_.call(null,inst_15659,inst_15583,done);var state_15708__$1 = state_15708;var statearr_15712_15791 = state_15708__$1;(statearr_15712_15791[2] = inst_15665);
(statearr_15712_15791[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15710){if((e15710 instanceof Object))
{var ex__5324__auto__ = e15710;var statearr_15711_15792 = state_15708;(statearr_15711_15792[1] = 31);
(statearr_15711_15792[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15710;
} else
{return null;
}
}
}} else
{if((state_val_15709 === 1))
{var state_15708__$1 = state_15708;var statearr_15713_15793 = state_15708__$1;(statearr_15713_15793[2] = null);
(statearr_15713_15793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 33))
{var inst_15671 = (state_15708[7]);var inst_15673 = cljs.core.chunked_seq_QMARK_.call(null,inst_15671);var state_15708__$1 = state_15708;if(inst_15673)
{var statearr_15714_15794 = state_15708__$1;(statearr_15714_15794[1] = 36);
} else
{var statearr_15715_15795 = state_15708__$1;(statearr_15715_15795[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 2))
{var state_15708__$1 = state_15708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15708__$1,4,ch);
} else
{if((state_val_15709 === 34))
{var state_15708__$1 = state_15708;var statearr_15716_15796 = state_15708__$1;(statearr_15716_15796[2] = null);
(statearr_15716_15796[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 3))
{var inst_15706 = (state_15708[2]);var state_15708__$1 = state_15708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15708__$1,inst_15706);
} else
{if((state_val_15709 === 35))
{var inst_15695 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15717_15797 = state_15708__$1;(statearr_15717_15797[2] = inst_15695);
(statearr_15717_15797[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 4))
{var inst_15583 = (state_15708[6]);var inst_15583__$1 = (state_15708[2]);var inst_15584 = (inst_15583__$1 == null);var state_15708__$1 = (function (){var statearr_15718 = state_15708;(statearr_15718[6] = inst_15583__$1);
return statearr_15718;
})();if(cljs.core.truth_(inst_15584))
{var statearr_15719_15798 = state_15708__$1;(statearr_15719_15798[1] = 5);
} else
{var statearr_15720_15799 = state_15708__$1;(statearr_15720_15799[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 36))
{var inst_15671 = (state_15708[7]);var inst_15675 = cljs.core.chunk_first.call(null,inst_15671);var inst_15676 = cljs.core.chunk_rest.call(null,inst_15671);var inst_15677 = cljs.core.count.call(null,inst_15675);var inst_15651 = inst_15676;var inst_15652 = inst_15675;var inst_15653 = inst_15677;var inst_15654 = 0;var state_15708__$1 = (function (){var statearr_15721 = state_15708;(statearr_15721[8] = inst_15652);
(statearr_15721[9] = inst_15653);
(statearr_15721[10] = inst_15651);
(statearr_15721[11] = inst_15654);
return statearr_15721;
})();var statearr_15722_15800 = state_15708__$1;(statearr_15722_15800[2] = null);
(statearr_15722_15800[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 5))
{var inst_15590 = cljs.core.deref.call(null,cs);var inst_15591 = cljs.core.seq.call(null,inst_15590);var inst_15592 = inst_15591;var inst_15593 = null;var inst_15594 = 0;var inst_15595 = 0;var state_15708__$1 = (function (){var statearr_15723 = state_15708;(statearr_15723[12] = inst_15595);
(statearr_15723[13] = inst_15592);
(statearr_15723[14] = inst_15594);
(statearr_15723[15] = inst_15593);
return statearr_15723;
})();var statearr_15724_15801 = state_15708__$1;(statearr_15724_15801[2] = null);
(statearr_15724_15801[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 37))
{var inst_15671 = (state_15708[7]);var inst_15680 = cljs.core.first.call(null,inst_15671);var state_15708__$1 = (function (){var statearr_15725 = state_15708;(statearr_15725[16] = inst_15680);
return statearr_15725;
})();var statearr_15726_15802 = state_15708__$1;(statearr_15726_15802[2] = null);
(statearr_15726_15802[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 6))
{var inst_15642 = cljs.core.deref.call(null,cs);var inst_15643 = cljs.core.keys.call(null,inst_15642);var inst_15644 = cljs.core.count.call(null,inst_15643);var inst_15645 = cljs.core.reset_BANG_.call(null,dctr,inst_15644);var inst_15650 = cljs.core.seq.call(null,inst_15643);var inst_15651 = inst_15650;var inst_15652 = null;var inst_15653 = 0;var inst_15654 = 0;var state_15708__$1 = (function (){var statearr_15727 = state_15708;(statearr_15727[8] = inst_15652);
(statearr_15727[9] = inst_15653);
(statearr_15727[10] = inst_15651);
(statearr_15727[11] = inst_15654);
(statearr_15727[17] = inst_15645);
return statearr_15727;
})();var statearr_15728_15803 = state_15708__$1;(statearr_15728_15803[2] = null);
(statearr_15728_15803[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 38))
{var inst_15692 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15729_15804 = state_15708__$1;(statearr_15729_15804[2] = inst_15692);
(statearr_15729_15804[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 7))
{var inst_15704 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15730_15805 = state_15708__$1;(statearr_15730_15805[2] = inst_15704);
(statearr_15730_15805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 39))
{var inst_15671 = (state_15708[7]);var inst_15688 = (state_15708[2]);var inst_15689 = cljs.core.next.call(null,inst_15671);var inst_15651 = inst_15689;var inst_15652 = null;var inst_15653 = 0;var inst_15654 = 0;var state_15708__$1 = (function (){var statearr_15731 = state_15708;(statearr_15731[8] = inst_15652);
(statearr_15731[9] = inst_15653);
(statearr_15731[10] = inst_15651);
(statearr_15731[11] = inst_15654);
(statearr_15731[18] = inst_15688);
return statearr_15731;
})();var statearr_15732_15806 = state_15708__$1;(statearr_15732_15806[2] = null);
(statearr_15732_15806[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 8))
{var inst_15595 = (state_15708[12]);var inst_15594 = (state_15708[14]);var inst_15597 = (inst_15595 < inst_15594);var inst_15598 = inst_15597;var state_15708__$1 = state_15708;if(cljs.core.truth_(inst_15598))
{var statearr_15733_15807 = state_15708__$1;(statearr_15733_15807[1] = 10);
} else
{var statearr_15734_15808 = state_15708__$1;(statearr_15734_15808[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 40))
{var inst_15680 = (state_15708[16]);var inst_15681 = (state_15708[2]);var inst_15682 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15683 = cljs.core.async.untap_STAR_.call(null,m,inst_15680);var state_15708__$1 = (function (){var statearr_15735 = state_15708;(statearr_15735[19] = inst_15682);
(statearr_15735[20] = inst_15681);
return statearr_15735;
})();var statearr_15736_15809 = state_15708__$1;(statearr_15736_15809[2] = inst_15683);
(statearr_15736_15809[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 9))
{var inst_15640 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15737_15810 = state_15708__$1;(statearr_15737_15810[2] = inst_15640);
(statearr_15737_15810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 41))
{try{var inst_15583 = (state_15708[6]);var inst_15680 = (state_15708[16]);var inst_15686 = cljs.core.async.put_BANG_.call(null,inst_15680,inst_15583,done);var state_15708__$1 = state_15708;var statearr_15740_15811 = state_15708__$1;(statearr_15740_15811[2] = inst_15686);
(statearr_15740_15811[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15738){if((e15738 instanceof Object))
{var ex__5324__auto__ = e15738;var statearr_15739_15812 = state_15708;(statearr_15739_15812[1] = 40);
(statearr_15739_15812[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15738;
} else
{return null;
}
}
}} else
{if((state_val_15709 === 10))
{var inst_15595 = (state_15708[12]);var inst_15593 = (state_15708[15]);var inst_15601 = cljs.core._nth.call(null,inst_15593,inst_15595);var inst_15602 = cljs.core.nth.call(null,inst_15601,0,null);var inst_15603 = cljs.core.nth.call(null,inst_15601,1,null);var state_15708__$1 = (function (){var statearr_15741 = state_15708;(statearr_15741[21] = inst_15602);
return statearr_15741;
})();if(cljs.core.truth_(inst_15603))
{var statearr_15742_15813 = state_15708__$1;(statearr_15742_15813[1] = 13);
} else
{var statearr_15743_15814 = state_15708__$1;(statearr_15743_15814[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 42))
{var inst_15701 = (state_15708[2]);var state_15708__$1 = (function (){var statearr_15744 = state_15708;(statearr_15744[22] = inst_15701);
return statearr_15744;
})();var statearr_15745_15815 = state_15708__$1;(statearr_15745_15815[2] = null);
(statearr_15745_15815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 11))
{var inst_15612 = (state_15708[23]);var inst_15592 = (state_15708[13]);var inst_15612__$1 = cljs.core.seq.call(null,inst_15592);var state_15708__$1 = (function (){var statearr_15746 = state_15708;(statearr_15746[23] = inst_15612__$1);
return statearr_15746;
})();if(inst_15612__$1)
{var statearr_15747_15816 = state_15708__$1;(statearr_15747_15816[1] = 16);
} else
{var statearr_15748_15817 = state_15708__$1;(statearr_15748_15817[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 12))
{var inst_15638 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15749_15818 = state_15708__$1;(statearr_15749_15818[2] = inst_15638);
(statearr_15749_15818[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 13))
{var inst_15602 = (state_15708[21]);var inst_15605 = cljs.core.async.close_BANG_.call(null,inst_15602);var state_15708__$1 = state_15708;var statearr_15753_15819 = state_15708__$1;(statearr_15753_15819[2] = inst_15605);
(statearr_15753_15819[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 14))
{var state_15708__$1 = state_15708;var statearr_15754_15820 = state_15708__$1;(statearr_15754_15820[2] = null);
(statearr_15754_15820[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 15))
{var inst_15595 = (state_15708[12]);var inst_15592 = (state_15708[13]);var inst_15594 = (state_15708[14]);var inst_15593 = (state_15708[15]);var inst_15608 = (state_15708[2]);var inst_15609 = (inst_15595 + 1);var tmp15750 = inst_15592;var tmp15751 = inst_15594;var tmp15752 = inst_15593;var inst_15592__$1 = tmp15750;var inst_15593__$1 = tmp15752;var inst_15594__$1 = tmp15751;var inst_15595__$1 = inst_15609;var state_15708__$1 = (function (){var statearr_15755 = state_15708;(statearr_15755[24] = inst_15608);
(statearr_15755[12] = inst_15595__$1);
(statearr_15755[13] = inst_15592__$1);
(statearr_15755[14] = inst_15594__$1);
(statearr_15755[15] = inst_15593__$1);
return statearr_15755;
})();var statearr_15756_15821 = state_15708__$1;(statearr_15756_15821[2] = null);
(statearr_15756_15821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 16))
{var inst_15612 = (state_15708[23]);var inst_15614 = cljs.core.chunked_seq_QMARK_.call(null,inst_15612);var state_15708__$1 = state_15708;if(inst_15614)
{var statearr_15757_15822 = state_15708__$1;(statearr_15757_15822[1] = 19);
} else
{var statearr_15758_15823 = state_15708__$1;(statearr_15758_15823[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 17))
{var state_15708__$1 = state_15708;var statearr_15759_15824 = state_15708__$1;(statearr_15759_15824[2] = null);
(statearr_15759_15824[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 18))
{var inst_15636 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15760_15825 = state_15708__$1;(statearr_15760_15825[2] = inst_15636);
(statearr_15760_15825[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 19))
{var inst_15612 = (state_15708[23]);var inst_15616 = cljs.core.chunk_first.call(null,inst_15612);var inst_15617 = cljs.core.chunk_rest.call(null,inst_15612);var inst_15618 = cljs.core.count.call(null,inst_15616);var inst_15592 = inst_15617;var inst_15593 = inst_15616;var inst_15594 = inst_15618;var inst_15595 = 0;var state_15708__$1 = (function (){var statearr_15761 = state_15708;(statearr_15761[12] = inst_15595);
(statearr_15761[13] = inst_15592);
(statearr_15761[14] = inst_15594);
(statearr_15761[15] = inst_15593);
return statearr_15761;
})();var statearr_15762_15826 = state_15708__$1;(statearr_15762_15826[2] = null);
(statearr_15762_15826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 20))
{var inst_15612 = (state_15708[23]);var inst_15622 = cljs.core.first.call(null,inst_15612);var inst_15623 = cljs.core.nth.call(null,inst_15622,0,null);var inst_15624 = cljs.core.nth.call(null,inst_15622,1,null);var state_15708__$1 = (function (){var statearr_15763 = state_15708;(statearr_15763[25] = inst_15623);
return statearr_15763;
})();if(cljs.core.truth_(inst_15624))
{var statearr_15764_15827 = state_15708__$1;(statearr_15764_15827[1] = 22);
} else
{var statearr_15765_15828 = state_15708__$1;(statearr_15765_15828[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 21))
{var inst_15633 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15766_15829 = state_15708__$1;(statearr_15766_15829[2] = inst_15633);
(statearr_15766_15829[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 22))
{var inst_15623 = (state_15708[25]);var inst_15626 = cljs.core.async.close_BANG_.call(null,inst_15623);var state_15708__$1 = state_15708;var statearr_15767_15830 = state_15708__$1;(statearr_15767_15830[2] = inst_15626);
(statearr_15767_15830[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 23))
{var state_15708__$1 = state_15708;var statearr_15768_15831 = state_15708__$1;(statearr_15768_15831[2] = null);
(statearr_15768_15831[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 24))
{var inst_15612 = (state_15708[23]);var inst_15629 = (state_15708[2]);var inst_15630 = cljs.core.next.call(null,inst_15612);var inst_15592 = inst_15630;var inst_15593 = null;var inst_15594 = 0;var inst_15595 = 0;var state_15708__$1 = (function (){var statearr_15769 = state_15708;(statearr_15769[26] = inst_15629);
(statearr_15769[12] = inst_15595);
(statearr_15769[13] = inst_15592);
(statearr_15769[14] = inst_15594);
(statearr_15769[15] = inst_15593);
return statearr_15769;
})();var statearr_15770_15832 = state_15708__$1;(statearr_15770_15832[2] = null);
(statearr_15770_15832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 25))
{var inst_15653 = (state_15708[9]);var inst_15654 = (state_15708[11]);var inst_15656 = (inst_15654 < inst_15653);var inst_15657 = inst_15656;var state_15708__$1 = state_15708;if(cljs.core.truth_(inst_15657))
{var statearr_15771_15833 = state_15708__$1;(statearr_15771_15833[1] = 27);
} else
{var statearr_15772_15834 = state_15708__$1;(statearr_15772_15834[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 26))
{var inst_15699 = (state_15708[2]);var state_15708__$1 = (function (){var statearr_15773 = state_15708;(statearr_15773[27] = inst_15699);
return statearr_15773;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15708__$1,42,dchan);
} else
{if((state_val_15709 === 27))
{var inst_15652 = (state_15708[8]);var inst_15654 = (state_15708[11]);var inst_15659 = cljs.core._nth.call(null,inst_15652,inst_15654);var state_15708__$1 = (function (){var statearr_15774 = state_15708;(statearr_15774[5] = inst_15659);
return statearr_15774;
})();var statearr_15775_15835 = state_15708__$1;(statearr_15775_15835[2] = null);
(statearr_15775_15835[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 28))
{var inst_15651 = (state_15708[10]);var inst_15671 = (state_15708[7]);var inst_15671__$1 = cljs.core.seq.call(null,inst_15651);var state_15708__$1 = (function (){var statearr_15779 = state_15708;(statearr_15779[7] = inst_15671__$1);
return statearr_15779;
})();if(inst_15671__$1)
{var statearr_15780_15836 = state_15708__$1;(statearr_15780_15836[1] = 33);
} else
{var statearr_15781_15837 = state_15708__$1;(statearr_15781_15837[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 29))
{var inst_15697 = (state_15708[2]);var state_15708__$1 = state_15708;var statearr_15782_15838 = state_15708__$1;(statearr_15782_15838[2] = inst_15697);
(statearr_15782_15838[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 30))
{var inst_15652 = (state_15708[8]);var inst_15653 = (state_15708[9]);var inst_15651 = (state_15708[10]);var inst_15654 = (state_15708[11]);var inst_15667 = (state_15708[2]);var inst_15668 = (inst_15654 + 1);var tmp15776 = inst_15652;var tmp15777 = inst_15653;var tmp15778 = inst_15651;var inst_15651__$1 = tmp15778;var inst_15652__$1 = tmp15776;var inst_15653__$1 = tmp15777;var inst_15654__$1 = inst_15668;var state_15708__$1 = (function (){var statearr_15783 = state_15708;(statearr_15783[8] = inst_15652__$1);
(statearr_15783[9] = inst_15653__$1);
(statearr_15783[10] = inst_15651__$1);
(statearr_15783[28] = inst_15667);
(statearr_15783[11] = inst_15654__$1);
return statearr_15783;
})();var statearr_15784_15839 = state_15708__$1;(statearr_15784_15839[2] = null);
(statearr_15784_15839[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15709 === 31))
{var inst_15659 = (state_15708[5]);var inst_15660 = (state_15708[2]);var inst_15661 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15662 = cljs.core.async.untap_STAR_.call(null,m,inst_15659);var state_15708__$1 = (function (){var statearr_15785 = state_15708;(statearr_15785[29] = inst_15661);
(statearr_15785[30] = inst_15660);
return statearr_15785;
})();var statearr_15786_15840 = state_15708__$1;(statearr_15786_15840[2] = inst_15662);
(statearr_15786_15840[1] = 30);
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
var state_machine__5331__auto____0 = (function (){var statearr_15788 = (new Array(31));(statearr_15788[0] = state_machine__5331__auto__);
(statearr_15788[1] = 1);
return statearr_15788;
});
var state_machine__5331__auto____1 = (function (state_15708){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15708);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15708){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15789 = f__5381__auto__.call(null);(statearr_15789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15790);
return statearr_15789;
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
;var m = (function (){if(typeof cljs.core.async.t15946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15946 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15947){
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
this.meta15947 = meta15947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15946.cljs$lang$type = true;
cljs.core.async.t15946.cljs$lang$ctorStr = "cljs.core.async/t15946";
cljs.core.async.t15946.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15946");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15946.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15948){var self__ = this;
var _15948__$1 = this;return self__.meta15947;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15948,meta15947__$1){var self__ = this;
var _15948__$1 = this;return (new cljs.core.async.t15946(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15947__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15946 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15946(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15947){return (new cljs.core.async.t15946(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15947));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15946(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5380__auto___16051 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16013){var state_val_16014 = (state_16013[1]);if((state_val_16014 === 1))
{var inst_15952 = (state_16013[5]);var inst_15952__$1 = calc_state.call(null);var inst_15953 = cljs.core.seq_QMARK_.call(null,inst_15952__$1);var state_16013__$1 = (function (){var statearr_16015 = state_16013;(statearr_16015[5] = inst_15952__$1);
return statearr_16015;
})();if(inst_15953)
{var statearr_16016_16052 = state_16013__$1;(statearr_16016_16052[1] = 2);
} else
{var statearr_16017_16053 = state_16013__$1;(statearr_16017_16053[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 2))
{var inst_15952 = (state_16013[5]);var inst_15955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15952);var state_16013__$1 = state_16013;var statearr_16018_16054 = state_16013__$1;(statearr_16018_16054[2] = inst_15955);
(statearr_16018_16054[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 3))
{var inst_15952 = (state_16013[5]);var state_16013__$1 = state_16013;var statearr_16019_16055 = state_16013__$1;(statearr_16019_16055[2] = inst_15952);
(statearr_16019_16055[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 4))
{var inst_15952 = (state_16013[5]);var inst_15958 = (state_16013[2]);var inst_15959 = cljs.core.get.call(null,inst_15958,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15960 = cljs.core.get.call(null,inst_15958,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15961 = cljs.core.get.call(null,inst_15958,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15962 = inst_15952;var state_16013__$1 = (function (){var statearr_16020 = state_16013;(statearr_16020[6] = inst_15959);
(statearr_16020[7] = inst_15962);
(statearr_16020[8] = inst_15960);
(statearr_16020[9] = inst_15961);
return statearr_16020;
})();var statearr_16021_16056 = state_16013__$1;(statearr_16021_16056[2] = null);
(statearr_16021_16056[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 5))
{var inst_15962 = (state_16013[7]);var inst_15965 = cljs.core.seq_QMARK_.call(null,inst_15962);var state_16013__$1 = state_16013;if(inst_15965)
{var statearr_16022_16057 = state_16013__$1;(statearr_16022_16057[1] = 7);
} else
{var statearr_16023_16058 = state_16013__$1;(statearr_16023_16058[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 6))
{var inst_16011 = (state_16013[2]);var state_16013__$1 = state_16013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16013__$1,inst_16011);
} else
{if((state_val_16014 === 7))
{var inst_15962 = (state_16013[7]);var inst_15967 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15962);var state_16013__$1 = state_16013;var statearr_16024_16059 = state_16013__$1;(statearr_16024_16059[2] = inst_15967);
(statearr_16024_16059[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 8))
{var inst_15962 = (state_16013[7]);var state_16013__$1 = state_16013;var statearr_16025_16060 = state_16013__$1;(statearr_16025_16060[2] = inst_15962);
(statearr_16025_16060[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 9))
{var inst_15970 = (state_16013[10]);var inst_15970__$1 = (state_16013[2]);var inst_15971 = cljs.core.get.call(null,inst_15970__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15972 = cljs.core.get.call(null,inst_15970__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15973 = cljs.core.get.call(null,inst_15970__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16013__$1 = (function (){var statearr_16026 = state_16013;(statearr_16026[11] = inst_15972);
(statearr_16026[10] = inst_15970__$1);
(statearr_16026[12] = inst_15973);
return statearr_16026;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16013__$1,10,inst_15971);
} else
{if((state_val_16014 === 10))
{var inst_15977 = (state_16013[13]);var inst_15978 = (state_16013[14]);var inst_15976 = (state_16013[2]);var inst_15977__$1 = cljs.core.nth.call(null,inst_15976,0,null);var inst_15978__$1 = cljs.core.nth.call(null,inst_15976,1,null);var inst_15979 = (inst_15977__$1 == null);var inst_15980 = cljs.core._EQ_.call(null,inst_15978__$1,change);var inst_15981 = (inst_15979) || (inst_15980);var state_16013__$1 = (function (){var statearr_16027 = state_16013;(statearr_16027[13] = inst_15977__$1);
(statearr_16027[14] = inst_15978__$1);
return statearr_16027;
})();if(cljs.core.truth_(inst_15981))
{var statearr_16028_16061 = state_16013__$1;(statearr_16028_16061[1] = 11);
} else
{var statearr_16029_16062 = state_16013__$1;(statearr_16029_16062[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 11))
{var inst_15977 = (state_16013[13]);var inst_15983 = (inst_15977 == null);var state_16013__$1 = state_16013;if(cljs.core.truth_(inst_15983))
{var statearr_16030_16063 = state_16013__$1;(statearr_16030_16063[1] = 14);
} else
{var statearr_16031_16064 = state_16013__$1;(statearr_16031_16064[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 12))
{var inst_15978 = (state_16013[14]);var inst_15973 = (state_16013[12]);var inst_15992 = (state_16013[15]);var inst_15992__$1 = inst_15973.call(null,inst_15978);var state_16013__$1 = (function (){var statearr_16032 = state_16013;(statearr_16032[15] = inst_15992__$1);
return statearr_16032;
})();if(cljs.core.truth_(inst_15992__$1))
{var statearr_16033_16065 = state_16013__$1;(statearr_16033_16065[1] = 17);
} else
{var statearr_16034_16066 = state_16013__$1;(statearr_16034_16066[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 13))
{var inst_16009 = (state_16013[2]);var state_16013__$1 = state_16013;var statearr_16035_16067 = state_16013__$1;(statearr_16035_16067[2] = inst_16009);
(statearr_16035_16067[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 14))
{var inst_15978 = (state_16013[14]);var inst_15985 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15978);var state_16013__$1 = state_16013;var statearr_16036_16068 = state_16013__$1;(statearr_16036_16068[2] = inst_15985);
(statearr_16036_16068[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 15))
{var state_16013__$1 = state_16013;var statearr_16037_16069 = state_16013__$1;(statearr_16037_16069[2] = null);
(statearr_16037_16069[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 16))
{var inst_15988 = (state_16013[2]);var inst_15989 = calc_state.call(null);var inst_15962 = inst_15989;var state_16013__$1 = (function (){var statearr_16038 = state_16013;(statearr_16038[7] = inst_15962);
(statearr_16038[16] = inst_15988);
return statearr_16038;
})();var statearr_16039_16070 = state_16013__$1;(statearr_16039_16070[2] = null);
(statearr_16039_16070[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 17))
{var inst_15992 = (state_16013[15]);var state_16013__$1 = state_16013;var statearr_16040_16071 = state_16013__$1;(statearr_16040_16071[2] = inst_15992);
(statearr_16040_16071[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 18))
{var inst_15972 = (state_16013[11]);var inst_15978 = (state_16013[14]);var inst_15973 = (state_16013[12]);var inst_15995 = cljs.core.empty_QMARK_.call(null,inst_15973);var inst_15996 = inst_15972.call(null,inst_15978);var inst_15997 = cljs.core.not.call(null,inst_15996);var inst_15998 = (inst_15995) && (inst_15997);var state_16013__$1 = state_16013;var statearr_16041_16072 = state_16013__$1;(statearr_16041_16072[2] = inst_15998);
(statearr_16041_16072[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 19))
{var inst_16000 = (state_16013[2]);var state_16013__$1 = state_16013;if(cljs.core.truth_(inst_16000))
{var statearr_16042_16073 = state_16013__$1;(statearr_16042_16073[1] = 20);
} else
{var statearr_16043_16074 = state_16013__$1;(statearr_16043_16074[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 20))
{var inst_15977 = (state_16013[13]);var state_16013__$1 = state_16013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16013__$1,23,out,inst_15977);
} else
{if((state_val_16014 === 21))
{var state_16013__$1 = state_16013;var statearr_16044_16075 = state_16013__$1;(statearr_16044_16075[2] = null);
(statearr_16044_16075[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 22))
{var inst_15970 = (state_16013[10]);var inst_16006 = (state_16013[2]);var inst_15962 = inst_15970;var state_16013__$1 = (function (){var statearr_16045 = state_16013;(statearr_16045[7] = inst_15962);
(statearr_16045[17] = inst_16006);
return statearr_16045;
})();var statearr_16046_16076 = state_16013__$1;(statearr_16046_16076[2] = null);
(statearr_16046_16076[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16014 === 23))
{var inst_16003 = (state_16013[2]);var state_16013__$1 = state_16013;var statearr_16047_16077 = state_16013__$1;(statearr_16047_16077[2] = inst_16003);
(statearr_16047_16077[1] = 22);
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
var state_machine__5331__auto____0 = (function (){var statearr_16049 = (new Array(18));(statearr_16049[0] = state_machine__5331__auto__);
(statearr_16049[1] = 1);
return statearr_16049;
});
var state_machine__5331__auto____1 = (function (state_16013){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16013);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16013){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16050 = f__5381__auto__.call(null);(statearr_16050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16051);
return statearr_16050;
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
return (function (p1__16078_SHARP_){if(cljs.core.truth_(p1__16078_SHARP_.call(null,topic)))
{return p1__16078_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16078_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16202 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16203){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16203 = meta16203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16202.cljs$lang$type = true;
cljs.core.async.t16202.cljs$lang$ctorStr = "cljs.core.async/t16202";
cljs.core.async.t16202.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t16202");
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16204){var self__ = this;
var _16204__$1 = this;return self__.meta16203;
});})(mults,ensure_mult))
;
cljs.core.async.t16202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16204,meta16203__$1){var self__ = this;
var _16204__$1 = this;return (new cljs.core.async.t16202(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16203__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16202 = ((function (mults,ensure_mult){
return (function __GT_t16202(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16203){return (new cljs.core.async.t16202(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16203));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16202(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5380__auto___16325 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16277){var state_val_16278 = (state_16277[1]);if((state_val_16278 === 1))
{var state_16277__$1 = state_16277;var statearr_16279_16326 = state_16277__$1;(statearr_16279_16326[2] = null);
(statearr_16279_16326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 2))
{var state_16277__$1 = state_16277;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16277__$1,4,ch);
} else
{if((state_val_16278 === 3))
{var inst_16275 = (state_16277[2]);var state_16277__$1 = state_16277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16277__$1,inst_16275);
} else
{if((state_val_16278 === 4))
{var inst_16207 = (state_16277[5]);var inst_16207__$1 = (state_16277[2]);var inst_16208 = (inst_16207__$1 == null);var state_16277__$1 = (function (){var statearr_16280 = state_16277;(statearr_16280[5] = inst_16207__$1);
return statearr_16280;
})();if(cljs.core.truth_(inst_16208))
{var statearr_16281_16327 = state_16277__$1;(statearr_16281_16327[1] = 5);
} else
{var statearr_16282_16328 = state_16277__$1;(statearr_16282_16328[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 5))
{var inst_16214 = cljs.core.deref.call(null,mults);var inst_16215 = cljs.core.vals.call(null,inst_16214);var inst_16216 = cljs.core.seq.call(null,inst_16215);var inst_16217 = inst_16216;var inst_16218 = null;var inst_16219 = 0;var inst_16220 = 0;var state_16277__$1 = (function (){var statearr_16283 = state_16277;(statearr_16283[6] = inst_16220);
(statearr_16283[7] = inst_16219);
(statearr_16283[8] = inst_16218);
(statearr_16283[9] = inst_16217);
return statearr_16283;
})();var statearr_16284_16329 = state_16277__$1;(statearr_16284_16329[2] = null);
(statearr_16284_16329[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 6))
{var inst_16257 = (state_16277[10]);var inst_16255 = (state_16277[11]);var inst_16207 = (state_16277[5]);var inst_16255__$1 = topic_fn.call(null,inst_16207);var inst_16256 = cljs.core.deref.call(null,mults);var inst_16257__$1 = cljs.core.get.call(null,inst_16256,inst_16255__$1);var state_16277__$1 = (function (){var statearr_16285 = state_16277;(statearr_16285[10] = inst_16257__$1);
(statearr_16285[11] = inst_16255__$1);
return statearr_16285;
})();if(cljs.core.truth_(inst_16257__$1))
{var statearr_16286_16330 = state_16277__$1;(statearr_16286_16330[1] = 19);
} else
{var statearr_16287_16331 = state_16277__$1;(statearr_16287_16331[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 7))
{var inst_16273 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16288_16332 = state_16277__$1;(statearr_16288_16332[2] = inst_16273);
(statearr_16288_16332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 8))
{var inst_16220 = (state_16277[6]);var inst_16219 = (state_16277[7]);var inst_16222 = (inst_16220 < inst_16219);var inst_16223 = inst_16222;var state_16277__$1 = state_16277;if(cljs.core.truth_(inst_16223))
{var statearr_16292_16333 = state_16277__$1;(statearr_16292_16333[1] = 10);
} else
{var statearr_16293_16334 = state_16277__$1;(statearr_16293_16334[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 9))
{var inst_16253 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16294_16335 = state_16277__$1;(statearr_16294_16335[2] = inst_16253);
(statearr_16294_16335[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 10))
{var inst_16220 = (state_16277[6]);var inst_16219 = (state_16277[7]);var inst_16218 = (state_16277[8]);var inst_16217 = (state_16277[9]);var inst_16225 = cljs.core._nth.call(null,inst_16218,inst_16220);var inst_16226 = cljs.core.async.muxch_STAR_.call(null,inst_16225);var inst_16227 = cljs.core.async.close_BANG_.call(null,inst_16226);var inst_16228 = (inst_16220 + 1);var tmp16289 = inst_16219;var tmp16290 = inst_16218;var tmp16291 = inst_16217;var inst_16217__$1 = tmp16291;var inst_16218__$1 = tmp16290;var inst_16219__$1 = tmp16289;var inst_16220__$1 = inst_16228;var state_16277__$1 = (function (){var statearr_16295 = state_16277;(statearr_16295[6] = inst_16220__$1);
(statearr_16295[7] = inst_16219__$1);
(statearr_16295[12] = inst_16227);
(statearr_16295[8] = inst_16218__$1);
(statearr_16295[9] = inst_16217__$1);
return statearr_16295;
})();var statearr_16296_16336 = state_16277__$1;(statearr_16296_16336[2] = null);
(statearr_16296_16336[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 11))
{var inst_16231 = (state_16277[13]);var inst_16217 = (state_16277[9]);var inst_16231__$1 = cljs.core.seq.call(null,inst_16217);var state_16277__$1 = (function (){var statearr_16297 = state_16277;(statearr_16297[13] = inst_16231__$1);
return statearr_16297;
})();if(inst_16231__$1)
{var statearr_16298_16337 = state_16277__$1;(statearr_16298_16337[1] = 13);
} else
{var statearr_16299_16338 = state_16277__$1;(statearr_16299_16338[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 12))
{var inst_16251 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16300_16339 = state_16277__$1;(statearr_16300_16339[2] = inst_16251);
(statearr_16300_16339[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 13))
{var inst_16231 = (state_16277[13]);var inst_16233 = cljs.core.chunked_seq_QMARK_.call(null,inst_16231);var state_16277__$1 = state_16277;if(inst_16233)
{var statearr_16301_16340 = state_16277__$1;(statearr_16301_16340[1] = 16);
} else
{var statearr_16302_16341 = state_16277__$1;(statearr_16302_16341[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 14))
{var state_16277__$1 = state_16277;var statearr_16303_16342 = state_16277__$1;(statearr_16303_16342[2] = null);
(statearr_16303_16342[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 15))
{var inst_16249 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16304_16343 = state_16277__$1;(statearr_16304_16343[2] = inst_16249);
(statearr_16304_16343[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 16))
{var inst_16231 = (state_16277[13]);var inst_16235 = cljs.core.chunk_first.call(null,inst_16231);var inst_16236 = cljs.core.chunk_rest.call(null,inst_16231);var inst_16237 = cljs.core.count.call(null,inst_16235);var inst_16217 = inst_16236;var inst_16218 = inst_16235;var inst_16219 = inst_16237;var inst_16220 = 0;var state_16277__$1 = (function (){var statearr_16305 = state_16277;(statearr_16305[6] = inst_16220);
(statearr_16305[7] = inst_16219);
(statearr_16305[8] = inst_16218);
(statearr_16305[9] = inst_16217);
return statearr_16305;
})();var statearr_16306_16344 = state_16277__$1;(statearr_16306_16344[2] = null);
(statearr_16306_16344[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 17))
{var inst_16231 = (state_16277[13]);var inst_16240 = cljs.core.first.call(null,inst_16231);var inst_16241 = cljs.core.async.muxch_STAR_.call(null,inst_16240);var inst_16242 = cljs.core.async.close_BANG_.call(null,inst_16241);var inst_16243 = cljs.core.next.call(null,inst_16231);var inst_16217 = inst_16243;var inst_16218 = null;var inst_16219 = 0;var inst_16220 = 0;var state_16277__$1 = (function (){var statearr_16307 = state_16277;(statearr_16307[6] = inst_16220);
(statearr_16307[7] = inst_16219);
(statearr_16307[8] = inst_16218);
(statearr_16307[9] = inst_16217);
(statearr_16307[14] = inst_16242);
return statearr_16307;
})();var statearr_16308_16345 = state_16277__$1;(statearr_16308_16345[2] = null);
(statearr_16308_16345[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 18))
{var inst_16246 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16309_16346 = state_16277__$1;(statearr_16309_16346[2] = inst_16246);
(statearr_16309_16346[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 19))
{var state_16277__$1 = state_16277;var statearr_16310_16347 = state_16277__$1;(statearr_16310_16347[2] = null);
(statearr_16310_16347[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 20))
{var state_16277__$1 = state_16277;var statearr_16311_16348 = state_16277__$1;(statearr_16311_16348[2] = null);
(statearr_16311_16348[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 21))
{var inst_16270 = (state_16277[2]);var state_16277__$1 = (function (){var statearr_16312 = state_16277;(statearr_16312[15] = inst_16270);
return statearr_16312;
})();var statearr_16313_16349 = state_16277__$1;(statearr_16313_16349[2] = null);
(statearr_16313_16349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 22))
{var inst_16267 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16314_16350 = state_16277__$1;(statearr_16314_16350[2] = inst_16267);
(statearr_16314_16350[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 23))
{var inst_16255 = (state_16277[11]);var inst_16259 = (state_16277[2]);var inst_16260 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16255);var state_16277__$1 = (function (){var statearr_16315 = state_16277;(statearr_16315[16] = inst_16259);
return statearr_16315;
})();var statearr_16316_16351 = state_16277__$1;(statearr_16316_16351[2] = inst_16260);
(statearr_16316_16351[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16278 === 24))
{try{var inst_16257 = (state_16277[10]);var inst_16207 = (state_16277[5]);var inst_16263 = cljs.core.async.muxch_STAR_.call(null,inst_16257);var state_16277__$1 = state_16277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16277__$1,25,inst_16263,inst_16207);
}catch (e16317){if((e16317 instanceof Object))
{var ex__5324__auto__ = e16317;var statearr_16318_16352 = state_16277;(statearr_16318_16352[1] = 23);
(statearr_16318_16352[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16317;
} else
{return null;
}
}
}} else
{if((state_val_16278 === 25))
{try{var inst_16265 = (state_16277[2]);var state_16277__$1 = state_16277;var statearr_16321_16353 = state_16277__$1;(statearr_16321_16353[2] = inst_16265);
(statearr_16321_16353[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16319){if((e16319 instanceof Object))
{var ex__5324__auto__ = e16319;var statearr_16320_16354 = state_16277;(statearr_16320_16354[1] = 23);
(statearr_16320_16354[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16319;
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
var state_machine__5331__auto____0 = (function (){var statearr_16323 = (new Array(17));(statearr_16323[0] = state_machine__5331__auto__);
(statearr_16323[1] = 1);
return statearr_16323;
});
var state_machine__5331__auto____1 = (function (state_16277){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16277);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16277){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16324 = f__5381__auto__.call(null);(statearr_16324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16325);
return statearr_16324;
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
,cljs.core.range.call(null,cnt));var c__5380__auto___16485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16457){var state_val_16458 = (state_16457[1]);if((state_val_16458 === 1))
{var state_16457__$1 = state_16457;var statearr_16459_16486 = state_16457__$1;(statearr_16459_16486[2] = null);
(statearr_16459_16486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 2))
{var inst_16421 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16422 = 0;var state_16457__$1 = (function (){var statearr_16460 = state_16457;(statearr_16460[5] = inst_16422);
(statearr_16460[6] = inst_16421);
return statearr_16460;
})();var statearr_16461_16487 = state_16457__$1;(statearr_16461_16487[2] = null);
(statearr_16461_16487[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 3))
{var inst_16455 = (state_16457[2]);var state_16457__$1 = state_16457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16457__$1,inst_16455);
} else
{if((state_val_16458 === 4))
{var inst_16422 = (state_16457[5]);var inst_16424 = (inst_16422 < cnt);var state_16457__$1 = state_16457;if(cljs.core.truth_(inst_16424))
{var statearr_16462_16488 = state_16457__$1;(statearr_16462_16488[1] = 6);
} else
{var statearr_16463_16489 = state_16457__$1;(statearr_16463_16489[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 5))
{var inst_16441 = (state_16457[2]);var state_16457__$1 = (function (){var statearr_16464 = state_16457;(statearr_16464[7] = inst_16441);
return statearr_16464;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16457__$1,12,dchan);
} else
{if((state_val_16458 === 6))
{var state_16457__$1 = state_16457;var statearr_16465_16490 = state_16457__$1;(statearr_16465_16490[2] = null);
(statearr_16465_16490[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 7))
{var state_16457__$1 = state_16457;var statearr_16466_16491 = state_16457__$1;(statearr_16466_16491[2] = null);
(statearr_16466_16491[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 8))
{var inst_16439 = (state_16457[2]);var state_16457__$1 = state_16457;var statearr_16467_16492 = state_16457__$1;(statearr_16467_16492[2] = inst_16439);
(statearr_16467_16492[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 9))
{var inst_16422 = (state_16457[5]);var inst_16434 = (state_16457[2]);var inst_16435 = (inst_16422 + 1);var inst_16422__$1 = inst_16435;var state_16457__$1 = (function (){var statearr_16468 = state_16457;(statearr_16468[5] = inst_16422__$1);
(statearr_16468[8] = inst_16434);
return statearr_16468;
})();var statearr_16469_16493 = state_16457__$1;(statearr_16469_16493[2] = null);
(statearr_16469_16493[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 10))
{var inst_16426 = (state_16457[2]);var inst_16427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16457__$1 = (function (){var statearr_16470 = state_16457;(statearr_16470[9] = inst_16426);
return statearr_16470;
})();var statearr_16471_16494 = state_16457__$1;(statearr_16471_16494[2] = inst_16427);
(statearr_16471_16494[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 11))
{try{var inst_16422 = (state_16457[5]);var inst_16430 = chs__$1.call(null,inst_16422);var inst_16431 = done.call(null,inst_16422);var inst_16432 = cljs.core.async.take_BANG_.call(null,inst_16430,inst_16431);var state_16457__$1 = state_16457;var statearr_16474_16495 = state_16457__$1;(statearr_16474_16495[2] = inst_16432);
(statearr_16474_16495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16472){if((e16472 instanceof Object))
{var ex__5324__auto__ = e16472;var statearr_16473_16496 = state_16457;(statearr_16473_16496[1] = 10);
(statearr_16473_16496[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16472;
} else
{return null;
}
}
}} else
{if((state_val_16458 === 12))
{var inst_16443 = (state_16457[10]);var inst_16443__$1 = (state_16457[2]);var inst_16444 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16443__$1);var state_16457__$1 = (function (){var statearr_16475 = state_16457;(statearr_16475[10] = inst_16443__$1);
return statearr_16475;
})();if(cljs.core.truth_(inst_16444))
{var statearr_16476_16497 = state_16457__$1;(statearr_16476_16497[1] = 13);
} else
{var statearr_16477_16498 = state_16457__$1;(statearr_16477_16498[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 13))
{var inst_16446 = cljs.core.async.close_BANG_.call(null,out);var state_16457__$1 = state_16457;var statearr_16478_16499 = state_16457__$1;(statearr_16478_16499[2] = inst_16446);
(statearr_16478_16499[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 14))
{var inst_16443 = (state_16457[10]);var inst_16448 = cljs.core.apply.call(null,f,inst_16443);var state_16457__$1 = state_16457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16457__$1,16,out,inst_16448);
} else
{if((state_val_16458 === 15))
{var inst_16453 = (state_16457[2]);var state_16457__$1 = state_16457;var statearr_16479_16500 = state_16457__$1;(statearr_16479_16500[2] = inst_16453);
(statearr_16479_16500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16458 === 16))
{var inst_16450 = (state_16457[2]);var state_16457__$1 = (function (){var statearr_16480 = state_16457;(statearr_16480[11] = inst_16450);
return statearr_16480;
})();var statearr_16481_16501 = state_16457__$1;(statearr_16481_16501[2] = null);
(statearr_16481_16501[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_16483 = (new Array(12));(statearr_16483[0] = state_machine__5331__auto__);
(statearr_16483[1] = 1);
return statearr_16483;
});
var state_machine__5331__auto____1 = (function (state_16457){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16457){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16484 = f__5381__auto__.call(null);(statearr_16484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16485);
return statearr_16484;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___16601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16581){var state_val_16582 = (state_16581[1]);if((state_val_16582 === 1))
{var inst_16552 = cljs.core.vec.call(null,chs);var inst_16553 = inst_16552;var state_16581__$1 = (function (){var statearr_16583 = state_16581;(statearr_16583[5] = inst_16553);
return statearr_16583;
})();var statearr_16584_16602 = state_16581__$1;(statearr_16584_16602[2] = null);
(statearr_16584_16602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 2))
{var inst_16553 = (state_16581[5]);var inst_16555 = cljs.core.count.call(null,inst_16553);var inst_16556 = (inst_16555 > 0);var state_16581__$1 = state_16581;if(cljs.core.truth_(inst_16556))
{var statearr_16585_16603 = state_16581__$1;(statearr_16585_16603[1] = 4);
} else
{var statearr_16586_16604 = state_16581__$1;(statearr_16586_16604[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 3))
{var inst_16579 = (state_16581[2]);var state_16581__$1 = state_16581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16581__$1,inst_16579);
} else
{if((state_val_16582 === 4))
{var inst_16553 = (state_16581[5]);var state_16581__$1 = state_16581;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16581__$1,7,inst_16553);
} else
{if((state_val_16582 === 5))
{var inst_16575 = cljs.core.async.close_BANG_.call(null,out);var state_16581__$1 = state_16581;var statearr_16587_16605 = state_16581__$1;(statearr_16587_16605[2] = inst_16575);
(statearr_16587_16605[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 6))
{var inst_16577 = (state_16581[2]);var state_16581__$1 = state_16581;var statearr_16588_16606 = state_16581__$1;(statearr_16588_16606[2] = inst_16577);
(statearr_16588_16606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 7))
{var inst_16560 = (state_16581[6]);var inst_16561 = (state_16581[7]);var inst_16560__$1 = (state_16581[2]);var inst_16561__$1 = cljs.core.nth.call(null,inst_16560__$1,0,null);var inst_16562 = cljs.core.nth.call(null,inst_16560__$1,1,null);var inst_16563 = (inst_16561__$1 == null);var state_16581__$1 = (function (){var statearr_16589 = state_16581;(statearr_16589[6] = inst_16560__$1);
(statearr_16589[8] = inst_16562);
(statearr_16589[7] = inst_16561__$1);
return statearr_16589;
})();if(cljs.core.truth_(inst_16563))
{var statearr_16590_16607 = state_16581__$1;(statearr_16590_16607[1] = 8);
} else
{var statearr_16591_16608 = state_16581__$1;(statearr_16591_16608[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 8))
{var inst_16553 = (state_16581[5]);var inst_16560 = (state_16581[6]);var inst_16562 = (state_16581[8]);var inst_16561 = (state_16581[7]);var inst_16565 = (function (){var c = inst_16562;var v = inst_16561;var vec__16558 = inst_16560;var cs = inst_16553;return ((function (c,v,vec__16558,cs,inst_16553,inst_16560,inst_16562,inst_16561,state_val_16582){
return (function (p1__16502_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16502_SHARP_);
});
;})(c,v,vec__16558,cs,inst_16553,inst_16560,inst_16562,inst_16561,state_val_16582))
})();var inst_16566 = cljs.core.filterv.call(null,inst_16565,inst_16553);var inst_16553__$1 = inst_16566;var state_16581__$1 = (function (){var statearr_16592 = state_16581;(statearr_16592[5] = inst_16553__$1);
return statearr_16592;
})();var statearr_16593_16609 = state_16581__$1;(statearr_16593_16609[2] = null);
(statearr_16593_16609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 9))
{var inst_16561 = (state_16581[7]);var state_16581__$1 = state_16581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16581__$1,11,out,inst_16561);
} else
{if((state_val_16582 === 10))
{var inst_16573 = (state_16581[2]);var state_16581__$1 = state_16581;var statearr_16595_16610 = state_16581__$1;(statearr_16595_16610[2] = inst_16573);
(statearr_16595_16610[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16582 === 11))
{var inst_16553 = (state_16581[5]);var inst_16570 = (state_16581[2]);var tmp16594 = inst_16553;var inst_16553__$1 = tmp16594;var state_16581__$1 = (function (){var statearr_16596 = state_16581;(statearr_16596[5] = inst_16553__$1);
(statearr_16596[9] = inst_16570);
return statearr_16596;
})();var statearr_16597_16611 = state_16581__$1;(statearr_16597_16611[2] = null);
(statearr_16597_16611[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_16599 = (new Array(10));(statearr_16599[0] = state_machine__5331__auto__);
(statearr_16599[1] = 1);
return statearr_16599;
});
var state_machine__5331__auto____1 = (function (state_16581){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16581){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16600 = f__5381__auto__.call(null);(statearr_16600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16601);
return statearr_16600;
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
