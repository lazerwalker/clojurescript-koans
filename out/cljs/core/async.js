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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26614 = (function (f,fn_handler,meta26615){
this.f = f;
this.fn_handler = fn_handler;
this.meta26615 = meta26615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26614.cljs$lang$type = true;
cljs.core.async.t26614.cljs$lang$ctorStr = "cljs.core.async/t26614";
cljs.core.async.t26614.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26614");
});
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26616){var self__ = this;
var _26616__$1 = this;return self__.meta26615;
});
cljs.core.async.t26614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26616,meta26615__$1){var self__ = this;
var _26616__$1 = this;return (new cljs.core.async.t26614(self__.f,self__.fn_handler,meta26615__$1));
});
cljs.core.async.__GT_t26614 = (function __GT_t26614(f__$1,fn_handler__$1,meta26615){return (new cljs.core.async.t26614(f__$1,fn_handler__$1,meta26615));
});
}
return (new cljs.core.async.t26614(f,fn_handler,null));
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
{var val_26617 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26617);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_26617);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___26618 = n;var x_26619 = 0;while(true){
if((x_26619 < n__3891__auto___26618))
{(a[x_26619] = 0);
{
var G__26620 = (x_26619 + 1);
x_26619 = G__26620;
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
var G__26621 = (i + 1);
i = G__26621;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26625 = (function (flag,alt_flag,meta26626){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26626 = meta26626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26625.cljs$lang$type = true;
cljs.core.async.t26625.cljs$lang$ctorStr = "cljs.core.async/t26625";
cljs.core.async.t26625.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26625");
});
cljs.core.async.t26625.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t26625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t26625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26627){var self__ = this;
var _26627__$1 = this;return self__.meta26626;
});
cljs.core.async.t26625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26627,meta26626__$1){var self__ = this;
var _26627__$1 = this;return (new cljs.core.async.t26625(self__.flag,self__.alt_flag,meta26626__$1));
});
cljs.core.async.__GT_t26625 = (function __GT_t26625(flag__$1,alt_flag__$1,meta26626){return (new cljs.core.async.t26625(flag__$1,alt_flag__$1,meta26626));
});
}
return (new cljs.core.async.t26625(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26631 = (function (cb,flag,alt_handler,meta26632){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26632 = meta26632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26631.cljs$lang$type = true;
cljs.core.async.t26631.cljs$lang$ctorStr = "cljs.core.async/t26631";
cljs.core.async.t26631.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26631");
});
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26633){var self__ = this;
var _26633__$1 = this;return self__.meta26632;
});
cljs.core.async.t26631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26633,meta26632__$1){var self__ = this;
var _26633__$1 = this;return (new cljs.core.async.t26631(self__.cb,self__.flag,self__.alt_handler,meta26632__$1));
});
cljs.core.async.__GT_t26631 = (function __GT_t26631(cb__$1,flag__$1,alt_handler__$1,meta26632){return (new cljs.core.async.t26631(cb__$1,flag__$1,alt_handler__$1,meta26632));
});
}
return (new cljs.core.async.t26631(cb,flag,alt_handler,null));
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
return (function (p1__26634_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__26634_SHARP_,port], true));
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
var G__26635 = (i + 1);
i = G__26635;
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
var alts_BANG___delegate = function (ports,p__26636){var map__26638 = p__26636;var map__26638__$1 = ((cljs.core.seq_QMARK_.call(null,map__26638))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);var opts = map__26638__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26636 = null;if (arguments.length > 1) {
  p__26636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26636);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26639){
var ports = cljs.core.first(arglist__26639);
var p__26636 = cljs.core.rest(arglist__26639);
return alts_BANG___delegate(ports,p__26636);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26647 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26647 = (function (ch,f,map_LT_,meta26648){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26648 = meta26648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26647.cljs$lang$type = true;
cljs.core.async.t26647.cljs$lang$ctorStr = "cljs.core.async/t26647";
cljs.core.async.t26647.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26647");
});
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26650 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26650 = (function (fn1,_,meta26648,ch,f,map_LT_,meta26651){
this.fn1 = fn1;
this._ = _;
this.meta26648 = meta26648;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26651 = meta26651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26650.cljs$lang$type = true;
cljs.core.async.t26650.cljs$lang$ctorStr = "cljs.core.async/t26650";
cljs.core.async.t26650.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26650");
});
cljs.core.async.t26650.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t26650.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t26650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__26640_SHARP_){return f1.call(null,(((p1__26640_SHARP_ == null))?null:self__.f.call(null,p1__26640_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t26650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26652){var self__ = this;
var _26652__$1 = this;return self__.meta26651;
});
cljs.core.async.t26650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26652,meta26651__$1){var self__ = this;
var _26652__$1 = this;return (new cljs.core.async.t26650(self__.fn1,self__._,self__.meta26648,self__.ch,self__.f,self__.map_LT_,meta26651__$1));
});
cljs.core.async.__GT_t26650 = (function __GT_t26650(fn1__$1,___$2,meta26648__$1,ch__$2,f__$2,map_LT___$2,meta26651){return (new cljs.core.async.t26650(fn1__$1,___$2,meta26648__$1,ch__$2,f__$2,map_LT___$2,meta26651));
});
}
return (new cljs.core.async.t26650(fn1,___$1,self__.meta26648,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26649){var self__ = this;
var _26649__$1 = this;return self__.meta26648;
});
cljs.core.async.t26647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26649,meta26648__$1){var self__ = this;
var _26649__$1 = this;return (new cljs.core.async.t26647(self__.ch,self__.f,self__.map_LT_,meta26648__$1));
});
cljs.core.async.__GT_t26647 = (function __GT_t26647(ch__$1,f__$1,map_LT___$1,meta26648){return (new cljs.core.async.t26647(ch__$1,f__$1,map_LT___$1,meta26648));
});
}
return (new cljs.core.async.t26647(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26656 = (function (ch,f,map_GT_,meta26657){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26657 = meta26657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26656.cljs$lang$type = true;
cljs.core.async.t26656.cljs$lang$ctorStr = "cljs.core.async/t26656";
cljs.core.async.t26656.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26656");
});
cljs.core.async.t26656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t26656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26656.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26658){var self__ = this;
var _26658__$1 = this;return self__.meta26657;
});
cljs.core.async.t26656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26658,meta26657__$1){var self__ = this;
var _26658__$1 = this;return (new cljs.core.async.t26656(self__.ch,self__.f,self__.map_GT_,meta26657__$1));
});
cljs.core.async.__GT_t26656 = (function __GT_t26656(ch__$1,f__$1,map_GT___$1,meta26657){return (new cljs.core.async.t26656(ch__$1,f__$1,map_GT___$1,meta26657));
});
}
return (new cljs.core.async.t26656(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26662 = (function (ch,p,filter_GT_,meta26663){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26663 = meta26663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26662.cljs$lang$type = true;
cljs.core.async.t26662.cljs$lang$ctorStr = "cljs.core.async/t26662";
cljs.core.async.t26662.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26662");
});
cljs.core.async.t26662.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t26662.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26662.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26664){var self__ = this;
var _26664__$1 = this;return self__.meta26663;
});
cljs.core.async.t26662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26664,meta26663__$1){var self__ = this;
var _26664__$1 = this;return (new cljs.core.async.t26662(self__.ch,self__.p,self__.filter_GT_,meta26663__$1));
});
cljs.core.async.__GT_t26662 = (function __GT_t26662(ch__$1,p__$1,filter_GT___$1,meta26663){return (new cljs.core.async.t26662(ch__$1,p__$1,filter_GT___$1,meta26663));
});
}
return (new cljs.core.async.t26662(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___26739 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_26722){var state_val_26723 = (state_26722[1]);if((state_val_26723 === 1))
{var state_26722__$1 = state_26722;var statearr_26724_26740 = state_26722__$1;(statearr_26724_26740[2] = null);
(statearr_26724_26740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 2))
{var state_26722__$1 = state_26722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26722__$1,4,ch);
} else
{if((state_val_26723 === 3))
{var inst_26720 = (state_26722[2]);var state_26722__$1 = state_26722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26722__$1,inst_26720);
} else
{if((state_val_26723 === 4))
{var inst_26704 = (state_26722[5]);var inst_26704__$1 = (state_26722[2]);var inst_26705 = (inst_26704__$1 == null);var state_26722__$1 = (function (){var statearr_26725 = state_26722;(statearr_26725[5] = inst_26704__$1);
return statearr_26725;
})();if(cljs.core.truth_(inst_26705))
{var statearr_26726_26741 = state_26722__$1;(statearr_26726_26741[1] = 5);
} else
{var statearr_26727_26742 = state_26722__$1;(statearr_26727_26742[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 5))
{var inst_26707 = cljs.core.async.close_BANG_.call(null,out);var state_26722__$1 = state_26722;var statearr_26728_26743 = state_26722__$1;(statearr_26728_26743[2] = inst_26707);
(statearr_26728_26743[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 6))
{var inst_26704 = (state_26722[5]);var inst_26709 = p.call(null,inst_26704);var state_26722__$1 = state_26722;if(cljs.core.truth_(inst_26709))
{var statearr_26729_26744 = state_26722__$1;(statearr_26729_26744[1] = 8);
} else
{var statearr_26730_26745 = state_26722__$1;(statearr_26730_26745[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 7))
{var inst_26718 = (state_26722[2]);var state_26722__$1 = state_26722;var statearr_26731_26746 = state_26722__$1;(statearr_26731_26746[2] = inst_26718);
(statearr_26731_26746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 8))
{var inst_26704 = (state_26722[5]);var state_26722__$1 = state_26722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26722__$1,11,out,inst_26704);
} else
{if((state_val_26723 === 9))
{var state_26722__$1 = state_26722;var statearr_26732_26747 = state_26722__$1;(statearr_26732_26747[2] = null);
(statearr_26732_26747[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 10))
{var inst_26715 = (state_26722[2]);var state_26722__$1 = (function (){var statearr_26733 = state_26722;(statearr_26733[6] = inst_26715);
return statearr_26733;
})();var statearr_26734_26748 = state_26722__$1;(statearr_26734_26748[2] = null);
(statearr_26734_26748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26723 === 11))
{var inst_26712 = (state_26722[2]);var state_26722__$1 = state_26722;var statearr_26735_26749 = state_26722__$1;(statearr_26735_26749[2] = inst_26712);
(statearr_26735_26749[1] = 10);
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
var state_machine__5331__auto____0 = (function (){var statearr_26737 = (new Array(7));(statearr_26737[0] = state_machine__5331__auto__);
(statearr_26737[1] = 1);
return statearr_26737;
});
var state_machine__5331__auto____1 = (function (state_26722){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_26722);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_26722){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_26722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_26738 = f__5381__auto__.call(null);(statearr_26738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___26739);
return statearr_26738;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_26897){var state_val_26898 = (state_26897[1]);if((state_val_26898 === 1))
{var state_26897__$1 = state_26897;var statearr_26899_26932 = state_26897__$1;(statearr_26899_26932[2] = null);
(statearr_26899_26932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 2))
{var state_26897__$1 = state_26897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26897__$1,4,in$);
} else
{if((state_val_26898 === 3))
{var inst_26895 = (state_26897[2]);var state_26897__$1 = state_26897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26897__$1,inst_26895);
} else
{if((state_val_26898 === 4))
{var inst_26843 = (state_26897[5]);var inst_26843__$1 = (state_26897[2]);var inst_26844 = (inst_26843__$1 == null);var state_26897__$1 = (function (){var statearr_26900 = state_26897;(statearr_26900[5] = inst_26843__$1);
return statearr_26900;
})();if(cljs.core.truth_(inst_26844))
{var statearr_26901_26933 = state_26897__$1;(statearr_26901_26933[1] = 5);
} else
{var statearr_26902_26934 = state_26897__$1;(statearr_26902_26934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 5))
{var inst_26846 = cljs.core.async.close_BANG_.call(null,out);var state_26897__$1 = state_26897;var statearr_26903_26935 = state_26897__$1;(statearr_26903_26935[2] = inst_26846);
(statearr_26903_26935[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 6))
{var inst_26843 = (state_26897[5]);var inst_26848 = f.call(null,inst_26843);var inst_26853 = cljs.core.seq.call(null,inst_26848);var inst_26854 = inst_26853;var inst_26855 = null;var inst_26856 = 0;var inst_26857 = 0;var state_26897__$1 = (function (){var statearr_26904 = state_26897;(statearr_26904[6] = inst_26856);
(statearr_26904[7] = inst_26857);
(statearr_26904[8] = inst_26855);
(statearr_26904[9] = inst_26854);
return statearr_26904;
})();var statearr_26905_26936 = state_26897__$1;(statearr_26905_26936[2] = null);
(statearr_26905_26936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 7))
{var inst_26893 = (state_26897[2]);var state_26897__$1 = state_26897;var statearr_26906_26937 = state_26897__$1;(statearr_26906_26937[2] = inst_26893);
(statearr_26906_26937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 8))
{var inst_26856 = (state_26897[6]);var inst_26857 = (state_26897[7]);var inst_26859 = (inst_26857 < inst_26856);var inst_26860 = inst_26859;var state_26897__$1 = state_26897;if(cljs.core.truth_(inst_26860))
{var statearr_26907_26938 = state_26897__$1;(statearr_26907_26938[1] = 10);
} else
{var statearr_26908_26939 = state_26897__$1;(statearr_26908_26939[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 9))
{var inst_26890 = (state_26897[2]);var state_26897__$1 = (function (){var statearr_26909 = state_26897;(statearr_26909[10] = inst_26890);
return statearr_26909;
})();var statearr_26910_26940 = state_26897__$1;(statearr_26910_26940[2] = null);
(statearr_26910_26940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 10))
{var inst_26857 = (state_26897[7]);var inst_26855 = (state_26897[8]);var inst_26862 = cljs.core._nth.call(null,inst_26855,inst_26857);var state_26897__$1 = state_26897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26897__$1,13,out,inst_26862);
} else
{if((state_val_26898 === 11))
{var inst_26868 = (state_26897[11]);var inst_26854 = (state_26897[9]);var inst_26868__$1 = cljs.core.seq.call(null,inst_26854);var state_26897__$1 = (function (){var statearr_26914 = state_26897;(statearr_26914[11] = inst_26868__$1);
return statearr_26914;
})();if(inst_26868__$1)
{var statearr_26915_26941 = state_26897__$1;(statearr_26915_26941[1] = 14);
} else
{var statearr_26916_26942 = state_26897__$1;(statearr_26916_26942[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 12))
{var inst_26888 = (state_26897[2]);var state_26897__$1 = state_26897;var statearr_26917_26943 = state_26897__$1;(statearr_26917_26943[2] = inst_26888);
(statearr_26917_26943[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 13))
{var inst_26856 = (state_26897[6]);var inst_26857 = (state_26897[7]);var inst_26855 = (state_26897[8]);var inst_26854 = (state_26897[9]);var inst_26864 = (state_26897[2]);var inst_26865 = (inst_26857 + 1);var tmp26911 = inst_26856;var tmp26912 = inst_26855;var tmp26913 = inst_26854;var inst_26854__$1 = tmp26913;var inst_26855__$1 = tmp26912;var inst_26856__$1 = tmp26911;var inst_26857__$1 = inst_26865;var state_26897__$1 = (function (){var statearr_26918 = state_26897;(statearr_26918[6] = inst_26856__$1);
(statearr_26918[7] = inst_26857__$1);
(statearr_26918[12] = inst_26864);
(statearr_26918[8] = inst_26855__$1);
(statearr_26918[9] = inst_26854__$1);
return statearr_26918;
})();var statearr_26919_26944 = state_26897__$1;(statearr_26919_26944[2] = null);
(statearr_26919_26944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 14))
{var inst_26868 = (state_26897[11]);var inst_26870 = cljs.core.chunked_seq_QMARK_.call(null,inst_26868);var state_26897__$1 = state_26897;if(inst_26870)
{var statearr_26920_26945 = state_26897__$1;(statearr_26920_26945[1] = 17);
} else
{var statearr_26921_26946 = state_26897__$1;(statearr_26921_26946[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 15))
{var state_26897__$1 = state_26897;var statearr_26922_26947 = state_26897__$1;(statearr_26922_26947[2] = null);
(statearr_26922_26947[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 16))
{var inst_26886 = (state_26897[2]);var state_26897__$1 = state_26897;var statearr_26923_26948 = state_26897__$1;(statearr_26923_26948[2] = inst_26886);
(statearr_26923_26948[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 17))
{var inst_26868 = (state_26897[11]);var inst_26872 = cljs.core.chunk_first.call(null,inst_26868);var inst_26873 = cljs.core.chunk_rest.call(null,inst_26868);var inst_26874 = cljs.core.count.call(null,inst_26872);var inst_26854 = inst_26873;var inst_26855 = inst_26872;var inst_26856 = inst_26874;var inst_26857 = 0;var state_26897__$1 = (function (){var statearr_26924 = state_26897;(statearr_26924[6] = inst_26856);
(statearr_26924[7] = inst_26857);
(statearr_26924[8] = inst_26855);
(statearr_26924[9] = inst_26854);
return statearr_26924;
})();var statearr_26925_26949 = state_26897__$1;(statearr_26925_26949[2] = null);
(statearr_26925_26949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 18))
{var inst_26868 = (state_26897[11]);var inst_26877 = cljs.core.first.call(null,inst_26868);var state_26897__$1 = state_26897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26897__$1,20,out,inst_26877);
} else
{if((state_val_26898 === 19))
{var inst_26883 = (state_26897[2]);var state_26897__$1 = state_26897;var statearr_26926_26950 = state_26897__$1;(statearr_26926_26950[2] = inst_26883);
(statearr_26926_26950[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26898 === 20))
{var inst_26868 = (state_26897[11]);var inst_26879 = (state_26897[2]);var inst_26880 = cljs.core.next.call(null,inst_26868);var inst_26854 = inst_26880;var inst_26855 = null;var inst_26856 = 0;var inst_26857 = 0;var state_26897__$1 = (function (){var statearr_26927 = state_26897;(statearr_26927[6] = inst_26856);
(statearr_26927[7] = inst_26857);
(statearr_26927[8] = inst_26855);
(statearr_26927[9] = inst_26854);
(statearr_26927[13] = inst_26879);
return statearr_26927;
})();var statearr_26928_26951 = state_26897__$1;(statearr_26928_26951[2] = null);
(statearr_26928_26951[1] = 8);
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
var state_machine__5331__auto____0 = (function (){var statearr_26930 = (new Array(14));(statearr_26930[0] = state_machine__5331__auto__);
(statearr_26930[1] = 1);
return statearr_26930;
});
var state_machine__5331__auto____1 = (function (state_26897){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_26897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_26931 = f__5381__auto__.call(null);(statearr_26931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_26931;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5380__auto___27024 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27007){var state_val_27008 = (state_27007[1]);if((state_val_27008 === 1))
{var state_27007__$1 = state_27007;var statearr_27009_27025 = state_27007__$1;(statearr_27009_27025[2] = null);
(statearr_27009_27025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 2))
{var state_27007__$1 = state_27007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27007__$1,4,from);
} else
{if((state_val_27008 === 3))
{var inst_27005 = (state_27007[2]);var state_27007__$1 = state_27007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27007__$1,inst_27005);
} else
{if((state_val_27008 === 4))
{var inst_26990 = (state_27007[5]);var inst_26990__$1 = (state_27007[2]);var inst_26991 = (inst_26990__$1 == null);var state_27007__$1 = (function (){var statearr_27010 = state_27007;(statearr_27010[5] = inst_26990__$1);
return statearr_27010;
})();if(cljs.core.truth_(inst_26991))
{var statearr_27011_27026 = state_27007__$1;(statearr_27011_27026[1] = 5);
} else
{var statearr_27012_27027 = state_27007__$1;(statearr_27012_27027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 5))
{var state_27007__$1 = state_27007;if(cljs.core.truth_(close_QMARK_))
{var statearr_27013_27028 = state_27007__$1;(statearr_27013_27028[1] = 8);
} else
{var statearr_27014_27029 = state_27007__$1;(statearr_27014_27029[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 6))
{var inst_26990 = (state_27007[5]);var state_27007__$1 = state_27007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27007__$1,11,to,inst_26990);
} else
{if((state_val_27008 === 7))
{var inst_27003 = (state_27007[2]);var state_27007__$1 = state_27007;var statearr_27015_27030 = state_27007__$1;(statearr_27015_27030[2] = inst_27003);
(statearr_27015_27030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 8))
{var inst_26994 = cljs.core.async.close_BANG_.call(null,to);var state_27007__$1 = state_27007;var statearr_27016_27031 = state_27007__$1;(statearr_27016_27031[2] = inst_26994);
(statearr_27016_27031[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 9))
{var state_27007__$1 = state_27007;var statearr_27017_27032 = state_27007__$1;(statearr_27017_27032[2] = null);
(statearr_27017_27032[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 10))
{var inst_26997 = (state_27007[2]);var state_27007__$1 = state_27007;var statearr_27018_27033 = state_27007__$1;(statearr_27018_27033[2] = inst_26997);
(statearr_27018_27033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27008 === 11))
{var inst_27000 = (state_27007[2]);var state_27007__$1 = (function (){var statearr_27019 = state_27007;(statearr_27019[6] = inst_27000);
return statearr_27019;
})();var statearr_27020_27034 = state_27007__$1;(statearr_27020_27034[2] = null);
(statearr_27020_27034[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_27022 = (new Array(7));(statearr_27022[0] = state_machine__5331__auto__);
(statearr_27022[1] = 1);
return statearr_27022;
});
var state_machine__5331__auto____1 = (function (state_27007){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27007);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27007){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27023 = f__5381__auto__.call(null);(statearr_27023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27024);
return statearr_27023;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5380__auto___27113 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27095){var state_val_27096 = (state_27095[1]);if((state_val_27096 === 1))
{var state_27095__$1 = state_27095;var statearr_27097_27114 = state_27095__$1;(statearr_27097_27114[2] = null);
(statearr_27097_27114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 2))
{var state_27095__$1 = state_27095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,4,ch);
} else
{if((state_val_27096 === 3))
{var inst_27093 = (state_27095[2]);var state_27095__$1 = state_27095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else
{if((state_val_27096 === 4))
{var inst_27076 = (state_27095[5]);var inst_27076__$1 = (state_27095[2]);var inst_27077 = (inst_27076__$1 == null);var state_27095__$1 = (function (){var statearr_27098 = state_27095;(statearr_27098[5] = inst_27076__$1);
return statearr_27098;
})();if(cljs.core.truth_(inst_27077))
{var statearr_27099_27115 = state_27095__$1;(statearr_27099_27115[1] = 5);
} else
{var statearr_27100_27116 = state_27095__$1;(statearr_27100_27116[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 5))
{var inst_27079 = cljs.core.async.close_BANG_.call(null,tc);var inst_27080 = cljs.core.async.close_BANG_.call(null,fc);var state_27095__$1 = (function (){var statearr_27101 = state_27095;(statearr_27101[6] = inst_27079);
return statearr_27101;
})();var statearr_27102_27117 = state_27095__$1;(statearr_27102_27117[2] = inst_27080);
(statearr_27102_27117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 6))
{var inst_27076 = (state_27095[5]);var inst_27082 = p.call(null,inst_27076);var state_27095__$1 = state_27095;if(cljs.core.truth_(inst_27082))
{var statearr_27103_27118 = state_27095__$1;(statearr_27103_27118[1] = 9);
} else
{var statearr_27104_27119 = state_27095__$1;(statearr_27104_27119[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 7))
{var inst_27091 = (state_27095[2]);var state_27095__$1 = state_27095;var statearr_27105_27120 = state_27095__$1;(statearr_27105_27120[2] = inst_27091);
(statearr_27105_27120[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 8))
{var inst_27088 = (state_27095[2]);var state_27095__$1 = (function (){var statearr_27106 = state_27095;(statearr_27106[7] = inst_27088);
return statearr_27106;
})();var statearr_27107_27121 = state_27095__$1;(statearr_27107_27121[2] = null);
(statearr_27107_27121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 9))
{var state_27095__$1 = state_27095;var statearr_27108_27122 = state_27095__$1;(statearr_27108_27122[2] = tc);
(statearr_27108_27122[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 10))
{var state_27095__$1 = state_27095;var statearr_27109_27123 = state_27095__$1;(statearr_27109_27123[2] = fc);
(statearr_27109_27123[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27096 === 11))
{var inst_27076 = (state_27095[5]);var inst_27086 = (state_27095[2]);var state_27095__$1 = state_27095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,8,inst_27086,inst_27076);
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
var state_machine__5331__auto____0 = (function (){var statearr_27111 = (new Array(8));(statearr_27111[0] = state_machine__5331__auto__);
(statearr_27111[1] = 1);
return statearr_27111;
});
var state_machine__5331__auto____1 = (function (state_27095){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27112 = f__5381__auto__.call(null);(statearr_27112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27113);
return statearr_27112;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27166){var state_val_27167 = (state_27166[1]);if((state_val_27167 === 7))
{var inst_27162 = (state_27166[2]);var state_27166__$1 = state_27166;var statearr_27168_27180 = state_27166__$1;(statearr_27168_27180[2] = inst_27162);
(statearr_27168_27180[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 6))
{var inst_27152 = (state_27166[5]);var inst_27155 = (state_27166[6]);var inst_27159 = f.call(null,inst_27152,inst_27155);var inst_27152__$1 = inst_27159;var state_27166__$1 = (function (){var statearr_27169 = state_27166;(statearr_27169[5] = inst_27152__$1);
return statearr_27169;
})();var statearr_27170_27181 = state_27166__$1;(statearr_27170_27181[2] = null);
(statearr_27170_27181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 5))
{var inst_27152 = (state_27166[5]);var state_27166__$1 = state_27166;var statearr_27171_27182 = state_27166__$1;(statearr_27171_27182[2] = inst_27152);
(statearr_27171_27182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 4))
{var inst_27155 = (state_27166[6]);var inst_27155__$1 = (state_27166[2]);var inst_27156 = (inst_27155__$1 == null);var state_27166__$1 = (function (){var statearr_27172 = state_27166;(statearr_27172[6] = inst_27155__$1);
return statearr_27172;
})();if(cljs.core.truth_(inst_27156))
{var statearr_27173_27183 = state_27166__$1;(statearr_27173_27183[1] = 5);
} else
{var statearr_27174_27184 = state_27166__$1;(statearr_27174_27184[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27167 === 3))
{var inst_27164 = (state_27166[2]);var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27166__$1,inst_27164);
} else
{if((state_val_27167 === 2))
{var state_27166__$1 = state_27166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27166__$1,4,ch);
} else
{if((state_val_27167 === 1))
{var inst_27152 = init;var state_27166__$1 = (function (){var statearr_27175 = state_27166;(statearr_27175[5] = inst_27152);
return statearr_27175;
})();var statearr_27176_27185 = state_27166__$1;(statearr_27176_27185[2] = null);
(statearr_27176_27185[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_27178 = (new Array(7));(statearr_27178[0] = state_machine__5331__auto__);
(statearr_27178[1] = 1);
return statearr_27178;
});
var state_machine__5331__auto____1 = (function (state_27166){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27166);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27166){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27179 = f__5381__auto__.call(null);(statearr_27179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_27179;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27243){var state_val_27244 = (state_27243[1]);if((state_val_27244 === 1))
{var inst_27223 = cljs.core.seq.call(null,coll);var inst_27224 = inst_27223;var state_27243__$1 = (function (){var statearr_27245 = state_27243;(statearr_27245[5] = inst_27224);
return statearr_27245;
})();var statearr_27246_27260 = state_27243__$1;(statearr_27246_27260[2] = null);
(statearr_27246_27260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 2))
{var inst_27224 = (state_27243[5]);var state_27243__$1 = state_27243;if(cljs.core.truth_(inst_27224))
{var statearr_27247_27261 = state_27243__$1;(statearr_27247_27261[1] = 4);
} else
{var statearr_27248_27262 = state_27243__$1;(statearr_27248_27262[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 3))
{var inst_27241 = (state_27243[2]);var state_27243__$1 = state_27243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27243__$1,inst_27241);
} else
{if((state_val_27244 === 4))
{var inst_27224 = (state_27243[5]);var inst_27227 = cljs.core.first.call(null,inst_27224);var state_27243__$1 = state_27243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27243__$1,7,ch,inst_27227);
} else
{if((state_val_27244 === 5))
{var state_27243__$1 = state_27243;if(cljs.core.truth_(close_QMARK_))
{var statearr_27249_27263 = state_27243__$1;(statearr_27249_27263[1] = 8);
} else
{var statearr_27250_27264 = state_27243__$1;(statearr_27250_27264[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 6))
{var inst_27239 = (state_27243[2]);var state_27243__$1 = state_27243;var statearr_27251_27265 = state_27243__$1;(statearr_27251_27265[2] = inst_27239);
(statearr_27251_27265[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 7))
{var inst_27224 = (state_27243[5]);var inst_27229 = (state_27243[2]);var inst_27230 = cljs.core.next.call(null,inst_27224);var inst_27224__$1 = inst_27230;var state_27243__$1 = (function (){var statearr_27252 = state_27243;(statearr_27252[6] = inst_27229);
(statearr_27252[5] = inst_27224__$1);
return statearr_27252;
})();var statearr_27253_27266 = state_27243__$1;(statearr_27253_27266[2] = null);
(statearr_27253_27266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 8))
{var inst_27234 = cljs.core.async.close_BANG_.call(null,ch);var state_27243__$1 = state_27243;var statearr_27254_27267 = state_27243__$1;(statearr_27254_27267[2] = inst_27234);
(statearr_27254_27267[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 9))
{var state_27243__$1 = state_27243;var statearr_27255_27268 = state_27243__$1;(statearr_27255_27268[2] = null);
(statearr_27255_27268[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 10))
{var inst_27237 = (state_27243[2]);var state_27243__$1 = state_27243;var statearr_27256_27269 = state_27243__$1;(statearr_27256_27269[2] = inst_27237);
(statearr_27256_27269[1] = 6);
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
var state_machine__5331__auto____0 = (function (){var statearr_27258 = (new Array(7));(statearr_27258[0] = state_machine__5331__auto__);
(statearr_27258[1] = 1);
return statearr_27258;
});
var state_machine__5331__auto____1 = (function (state_27243){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27243);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27243){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27259 = f__5381__auto__.call(null);(statearr_27259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_27259;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27482 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27482 = (function (cs,ch,mult,meta27483){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27483 = meta27483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27482.cljs$lang$type = true;
cljs.core.async.t27482.cljs$lang$ctorStr = "cljs.core.async/t27482";
cljs.core.async.t27482.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t27482");
});})(cs))
;
cljs.core.async.t27482.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27482.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27482.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27482.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27482.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27484){var self__ = this;
var _27484__$1 = this;return self__.meta27483;
});})(cs))
;
cljs.core.async.t27482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27484,meta27483__$1){var self__ = this;
var _27484__$1 = this;return (new cljs.core.async.t27482(self__.cs,self__.ch,self__.mult,meta27483__$1));
});})(cs))
;
cljs.core.async.__GT_t27482 = ((function (cs){
return (function __GT_t27482(cs__$1,ch__$1,mult__$1,meta27483){return (new cljs.core.async.t27482(cs__$1,ch__$1,mult__$1,meta27483));
});})(cs))
;
}
return (new cljs.core.async.t27482(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5380__auto___27694 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27612){var state_val_27613 = (state_27612[1]);if((state_val_27613 === 32))
{try{var inst_27563 = (state_27612[5]);var inst_27487 = (state_27612[6]);var inst_27569 = cljs.core.async.put_BANG_.call(null,inst_27563,inst_27487,done);var state_27612__$1 = state_27612;var statearr_27616_27695 = state_27612__$1;(statearr_27616_27695[2] = inst_27569);
(statearr_27616_27695[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e27614){if((e27614 instanceof Object))
{var ex__5324__auto__ = e27614;var statearr_27615_27696 = state_27612;(statearr_27615_27696[1] = 31);
(statearr_27615_27696[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27614;
} else
{return null;
}
}
}} else
{if((state_val_27613 === 1))
{var state_27612__$1 = state_27612;var statearr_27617_27697 = state_27612__$1;(statearr_27617_27697[2] = null);
(statearr_27617_27697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 33))
{var inst_27575 = (state_27612[7]);var inst_27577 = cljs.core.chunked_seq_QMARK_.call(null,inst_27575);var state_27612__$1 = state_27612;if(inst_27577)
{var statearr_27618_27698 = state_27612__$1;(statearr_27618_27698[1] = 36);
} else
{var statearr_27619_27699 = state_27612__$1;(statearr_27619_27699[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 2))
{var state_27612__$1 = state_27612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,4,ch);
} else
{if((state_val_27613 === 34))
{var state_27612__$1 = state_27612;var statearr_27620_27700 = state_27612__$1;(statearr_27620_27700[2] = null);
(statearr_27620_27700[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 3))
{var inst_27610 = (state_27612[2]);var state_27612__$1 = state_27612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27612__$1,inst_27610);
} else
{if((state_val_27613 === 35))
{var inst_27599 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27621_27701 = state_27612__$1;(statearr_27621_27701[2] = inst_27599);
(statearr_27621_27701[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 4))
{var inst_27487 = (state_27612[6]);var inst_27487__$1 = (state_27612[2]);var inst_27488 = (inst_27487__$1 == null);var state_27612__$1 = (function (){var statearr_27622 = state_27612;(statearr_27622[6] = inst_27487__$1);
return statearr_27622;
})();if(cljs.core.truth_(inst_27488))
{var statearr_27623_27702 = state_27612__$1;(statearr_27623_27702[1] = 5);
} else
{var statearr_27624_27703 = state_27612__$1;(statearr_27624_27703[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 36))
{var inst_27575 = (state_27612[7]);var inst_27579 = cljs.core.chunk_first.call(null,inst_27575);var inst_27580 = cljs.core.chunk_rest.call(null,inst_27575);var inst_27581 = cljs.core.count.call(null,inst_27579);var inst_27555 = inst_27580;var inst_27556 = inst_27579;var inst_27557 = inst_27581;var inst_27558 = 0;var state_27612__$1 = (function (){var statearr_27625 = state_27612;(statearr_27625[8] = inst_27555);
(statearr_27625[9] = inst_27558);
(statearr_27625[10] = inst_27557);
(statearr_27625[11] = inst_27556);
return statearr_27625;
})();var statearr_27626_27704 = state_27612__$1;(statearr_27626_27704[2] = null);
(statearr_27626_27704[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 5))
{var inst_27494 = cljs.core.deref.call(null,cs);var inst_27495 = cljs.core.seq.call(null,inst_27494);var inst_27496 = inst_27495;var inst_27497 = null;var inst_27498 = 0;var inst_27499 = 0;var state_27612__$1 = (function (){var statearr_27627 = state_27612;(statearr_27627[12] = inst_27499);
(statearr_27627[13] = inst_27497);
(statearr_27627[14] = inst_27498);
(statearr_27627[15] = inst_27496);
return statearr_27627;
})();var statearr_27628_27705 = state_27612__$1;(statearr_27628_27705[2] = null);
(statearr_27628_27705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 37))
{var inst_27575 = (state_27612[7]);var inst_27584 = cljs.core.first.call(null,inst_27575);var state_27612__$1 = (function (){var statearr_27629 = state_27612;(statearr_27629[16] = inst_27584);
return statearr_27629;
})();var statearr_27630_27706 = state_27612__$1;(statearr_27630_27706[2] = null);
(statearr_27630_27706[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 6))
{var inst_27546 = cljs.core.deref.call(null,cs);var inst_27547 = cljs.core.keys.call(null,inst_27546);var inst_27548 = cljs.core.count.call(null,inst_27547);var inst_27549 = cljs.core.reset_BANG_.call(null,dctr,inst_27548);var inst_27554 = cljs.core.seq.call(null,inst_27547);var inst_27555 = inst_27554;var inst_27556 = null;var inst_27557 = 0;var inst_27558 = 0;var state_27612__$1 = (function (){var statearr_27631 = state_27612;(statearr_27631[8] = inst_27555);
(statearr_27631[17] = inst_27549);
(statearr_27631[9] = inst_27558);
(statearr_27631[10] = inst_27557);
(statearr_27631[11] = inst_27556);
return statearr_27631;
})();var statearr_27632_27707 = state_27612__$1;(statearr_27632_27707[2] = null);
(statearr_27632_27707[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 38))
{var inst_27596 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27633_27708 = state_27612__$1;(statearr_27633_27708[2] = inst_27596);
(statearr_27633_27708[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 7))
{var inst_27608 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27634_27709 = state_27612__$1;(statearr_27634_27709[2] = inst_27608);
(statearr_27634_27709[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 39))
{var inst_27575 = (state_27612[7]);var inst_27592 = (state_27612[2]);var inst_27593 = cljs.core.next.call(null,inst_27575);var inst_27555 = inst_27593;var inst_27556 = null;var inst_27557 = 0;var inst_27558 = 0;var state_27612__$1 = (function (){var statearr_27635 = state_27612;(statearr_27635[8] = inst_27555);
(statearr_27635[18] = inst_27592);
(statearr_27635[9] = inst_27558);
(statearr_27635[10] = inst_27557);
(statearr_27635[11] = inst_27556);
return statearr_27635;
})();var statearr_27636_27710 = state_27612__$1;(statearr_27636_27710[2] = null);
(statearr_27636_27710[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 8))
{var inst_27499 = (state_27612[12]);var inst_27498 = (state_27612[14]);var inst_27501 = (inst_27499 < inst_27498);var inst_27502 = inst_27501;var state_27612__$1 = state_27612;if(cljs.core.truth_(inst_27502))
{var statearr_27637_27711 = state_27612__$1;(statearr_27637_27711[1] = 10);
} else
{var statearr_27638_27712 = state_27612__$1;(statearr_27638_27712[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 40))
{var inst_27584 = (state_27612[16]);var inst_27585 = (state_27612[2]);var inst_27586 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27587 = cljs.core.async.untap_STAR_.call(null,m,inst_27584);var state_27612__$1 = (function (){var statearr_27639 = state_27612;(statearr_27639[19] = inst_27585);
(statearr_27639[20] = inst_27586);
return statearr_27639;
})();var statearr_27640_27713 = state_27612__$1;(statearr_27640_27713[2] = inst_27587);
(statearr_27640_27713[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 9))
{var inst_27544 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27641_27714 = state_27612__$1;(statearr_27641_27714[2] = inst_27544);
(statearr_27641_27714[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 41))
{try{var inst_27487 = (state_27612[6]);var inst_27584 = (state_27612[16]);var inst_27590 = cljs.core.async.put_BANG_.call(null,inst_27584,inst_27487,done);var state_27612__$1 = state_27612;var statearr_27644_27715 = state_27612__$1;(statearr_27644_27715[2] = inst_27590);
(statearr_27644_27715[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e27642){if((e27642 instanceof Object))
{var ex__5324__auto__ = e27642;var statearr_27643_27716 = state_27612;(statearr_27643_27716[1] = 40);
(statearr_27643_27716[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27642;
} else
{return null;
}
}
}} else
{if((state_val_27613 === 10))
{var inst_27499 = (state_27612[12]);var inst_27497 = (state_27612[13]);var inst_27505 = cljs.core._nth.call(null,inst_27497,inst_27499);var inst_27506 = cljs.core.nth.call(null,inst_27505,0,null);var inst_27507 = cljs.core.nth.call(null,inst_27505,1,null);var state_27612__$1 = (function (){var statearr_27645 = state_27612;(statearr_27645[21] = inst_27506);
return statearr_27645;
})();if(cljs.core.truth_(inst_27507))
{var statearr_27646_27717 = state_27612__$1;(statearr_27646_27717[1] = 13);
} else
{var statearr_27647_27718 = state_27612__$1;(statearr_27647_27718[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 42))
{var inst_27605 = (state_27612[2]);var state_27612__$1 = (function (){var statearr_27648 = state_27612;(statearr_27648[22] = inst_27605);
return statearr_27648;
})();var statearr_27649_27719 = state_27612__$1;(statearr_27649_27719[2] = null);
(statearr_27649_27719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 11))
{var inst_27516 = (state_27612[23]);var inst_27496 = (state_27612[15]);var inst_27516__$1 = cljs.core.seq.call(null,inst_27496);var state_27612__$1 = (function (){var statearr_27650 = state_27612;(statearr_27650[23] = inst_27516__$1);
return statearr_27650;
})();if(inst_27516__$1)
{var statearr_27651_27720 = state_27612__$1;(statearr_27651_27720[1] = 16);
} else
{var statearr_27652_27721 = state_27612__$1;(statearr_27652_27721[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 12))
{var inst_27542 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27653_27722 = state_27612__$1;(statearr_27653_27722[2] = inst_27542);
(statearr_27653_27722[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 13))
{var inst_27506 = (state_27612[21]);var inst_27509 = cljs.core.async.close_BANG_.call(null,inst_27506);var state_27612__$1 = state_27612;var statearr_27657_27723 = state_27612__$1;(statearr_27657_27723[2] = inst_27509);
(statearr_27657_27723[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 14))
{var state_27612__$1 = state_27612;var statearr_27658_27724 = state_27612__$1;(statearr_27658_27724[2] = null);
(statearr_27658_27724[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 15))
{var inst_27499 = (state_27612[12]);var inst_27497 = (state_27612[13]);var inst_27498 = (state_27612[14]);var inst_27496 = (state_27612[15]);var inst_27512 = (state_27612[2]);var inst_27513 = (inst_27499 + 1);var tmp27654 = inst_27497;var tmp27655 = inst_27498;var tmp27656 = inst_27496;var inst_27496__$1 = tmp27656;var inst_27497__$1 = tmp27654;var inst_27498__$1 = tmp27655;var inst_27499__$1 = inst_27513;var state_27612__$1 = (function (){var statearr_27659 = state_27612;(statearr_27659[24] = inst_27512);
(statearr_27659[12] = inst_27499__$1);
(statearr_27659[13] = inst_27497__$1);
(statearr_27659[14] = inst_27498__$1);
(statearr_27659[15] = inst_27496__$1);
return statearr_27659;
})();var statearr_27660_27725 = state_27612__$1;(statearr_27660_27725[2] = null);
(statearr_27660_27725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 16))
{var inst_27516 = (state_27612[23]);var inst_27518 = cljs.core.chunked_seq_QMARK_.call(null,inst_27516);var state_27612__$1 = state_27612;if(inst_27518)
{var statearr_27661_27726 = state_27612__$1;(statearr_27661_27726[1] = 19);
} else
{var statearr_27662_27727 = state_27612__$1;(statearr_27662_27727[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 17))
{var state_27612__$1 = state_27612;var statearr_27663_27728 = state_27612__$1;(statearr_27663_27728[2] = null);
(statearr_27663_27728[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 18))
{var inst_27540 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27664_27729 = state_27612__$1;(statearr_27664_27729[2] = inst_27540);
(statearr_27664_27729[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 19))
{var inst_27516 = (state_27612[23]);var inst_27520 = cljs.core.chunk_first.call(null,inst_27516);var inst_27521 = cljs.core.chunk_rest.call(null,inst_27516);var inst_27522 = cljs.core.count.call(null,inst_27520);var inst_27496 = inst_27521;var inst_27497 = inst_27520;var inst_27498 = inst_27522;var inst_27499 = 0;var state_27612__$1 = (function (){var statearr_27665 = state_27612;(statearr_27665[12] = inst_27499);
(statearr_27665[13] = inst_27497);
(statearr_27665[14] = inst_27498);
(statearr_27665[15] = inst_27496);
return statearr_27665;
})();var statearr_27666_27730 = state_27612__$1;(statearr_27666_27730[2] = null);
(statearr_27666_27730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 20))
{var inst_27516 = (state_27612[23]);var inst_27526 = cljs.core.first.call(null,inst_27516);var inst_27527 = cljs.core.nth.call(null,inst_27526,0,null);var inst_27528 = cljs.core.nth.call(null,inst_27526,1,null);var state_27612__$1 = (function (){var statearr_27667 = state_27612;(statearr_27667[25] = inst_27527);
return statearr_27667;
})();if(cljs.core.truth_(inst_27528))
{var statearr_27668_27731 = state_27612__$1;(statearr_27668_27731[1] = 22);
} else
{var statearr_27669_27732 = state_27612__$1;(statearr_27669_27732[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 21))
{var inst_27537 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27670_27733 = state_27612__$1;(statearr_27670_27733[2] = inst_27537);
(statearr_27670_27733[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 22))
{var inst_27527 = (state_27612[25]);var inst_27530 = cljs.core.async.close_BANG_.call(null,inst_27527);var state_27612__$1 = state_27612;var statearr_27671_27734 = state_27612__$1;(statearr_27671_27734[2] = inst_27530);
(statearr_27671_27734[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 23))
{var state_27612__$1 = state_27612;var statearr_27672_27735 = state_27612__$1;(statearr_27672_27735[2] = null);
(statearr_27672_27735[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 24))
{var inst_27516 = (state_27612[23]);var inst_27533 = (state_27612[2]);var inst_27534 = cljs.core.next.call(null,inst_27516);var inst_27496 = inst_27534;var inst_27497 = null;var inst_27498 = 0;var inst_27499 = 0;var state_27612__$1 = (function (){var statearr_27673 = state_27612;(statearr_27673[12] = inst_27499);
(statearr_27673[26] = inst_27533);
(statearr_27673[13] = inst_27497);
(statearr_27673[14] = inst_27498);
(statearr_27673[15] = inst_27496);
return statearr_27673;
})();var statearr_27674_27736 = state_27612__$1;(statearr_27674_27736[2] = null);
(statearr_27674_27736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 25))
{var inst_27558 = (state_27612[9]);var inst_27557 = (state_27612[10]);var inst_27560 = (inst_27558 < inst_27557);var inst_27561 = inst_27560;var state_27612__$1 = state_27612;if(cljs.core.truth_(inst_27561))
{var statearr_27675_27737 = state_27612__$1;(statearr_27675_27737[1] = 27);
} else
{var statearr_27676_27738 = state_27612__$1;(statearr_27676_27738[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 26))
{var inst_27603 = (state_27612[2]);var state_27612__$1 = (function (){var statearr_27677 = state_27612;(statearr_27677[27] = inst_27603);
return statearr_27677;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,42,dchan);
} else
{if((state_val_27613 === 27))
{var inst_27558 = (state_27612[9]);var inst_27556 = (state_27612[11]);var inst_27563 = cljs.core._nth.call(null,inst_27556,inst_27558);var state_27612__$1 = (function (){var statearr_27678 = state_27612;(statearr_27678[5] = inst_27563);
return statearr_27678;
})();var statearr_27679_27739 = state_27612__$1;(statearr_27679_27739[2] = null);
(statearr_27679_27739[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 28))
{var inst_27555 = (state_27612[8]);var inst_27575 = (state_27612[7]);var inst_27575__$1 = cljs.core.seq.call(null,inst_27555);var state_27612__$1 = (function (){var statearr_27683 = state_27612;(statearr_27683[7] = inst_27575__$1);
return statearr_27683;
})();if(inst_27575__$1)
{var statearr_27684_27740 = state_27612__$1;(statearr_27684_27740[1] = 33);
} else
{var statearr_27685_27741 = state_27612__$1;(statearr_27685_27741[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 29))
{var inst_27601 = (state_27612[2]);var state_27612__$1 = state_27612;var statearr_27686_27742 = state_27612__$1;(statearr_27686_27742[2] = inst_27601);
(statearr_27686_27742[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 30))
{var inst_27555 = (state_27612[8]);var inst_27558 = (state_27612[9]);var inst_27557 = (state_27612[10]);var inst_27556 = (state_27612[11]);var inst_27571 = (state_27612[2]);var inst_27572 = (inst_27558 + 1);var tmp27680 = inst_27555;var tmp27681 = inst_27557;var tmp27682 = inst_27556;var inst_27555__$1 = tmp27680;var inst_27556__$1 = tmp27682;var inst_27557__$1 = tmp27681;var inst_27558__$1 = inst_27572;var state_27612__$1 = (function (){var statearr_27687 = state_27612;(statearr_27687[8] = inst_27555__$1);
(statearr_27687[9] = inst_27558__$1);
(statearr_27687[10] = inst_27557__$1);
(statearr_27687[11] = inst_27556__$1);
(statearr_27687[28] = inst_27571);
return statearr_27687;
})();var statearr_27688_27743 = state_27612__$1;(statearr_27688_27743[2] = null);
(statearr_27688_27743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27613 === 31))
{var inst_27563 = (state_27612[5]);var inst_27564 = (state_27612[2]);var inst_27565 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27566 = cljs.core.async.untap_STAR_.call(null,m,inst_27563);var state_27612__$1 = (function (){var statearr_27689 = state_27612;(statearr_27689[29] = inst_27565);
(statearr_27689[30] = inst_27564);
return statearr_27689;
})();var statearr_27690_27744 = state_27612__$1;(statearr_27690_27744[2] = inst_27566);
(statearr_27690_27744[1] = 30);
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
var state_machine__5331__auto____0 = (function (){var statearr_27692 = (new Array(31));(statearr_27692[0] = state_machine__5331__auto__);
(statearr_27692[1] = 1);
return statearr_27692;
});
var state_machine__5331__auto____1 = (function (state_27612){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27612);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27612){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27693 = f__5381__auto__.call(null);(statearr_27693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27694);
return statearr_27693;
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
;var m = (function (){if(typeof cljs.core.async.t27850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27850 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27851){
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
this.meta27851 = meta27851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27850.cljs$lang$type = true;
cljs.core.async.t27850.cljs$lang$ctorStr = "cljs.core.async/t27850";
cljs.core.async.t27850.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t27850");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27850.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27852){var self__ = this;
var _27852__$1 = this;return self__.meta27851;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27852,meta27851__$1){var self__ = this;
var _27852__$1 = this;return (new cljs.core.async.t27850(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27851__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27850 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27850(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27851){return (new cljs.core.async.t27850(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27851));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27850(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5380__auto___27955 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27917){var state_val_27918 = (state_27917[1]);if((state_val_27918 === 1))
{var inst_27856 = (state_27917[5]);var inst_27856__$1 = calc_state.call(null);var inst_27857 = cljs.core.seq_QMARK_.call(null,inst_27856__$1);var state_27917__$1 = (function (){var statearr_27919 = state_27917;(statearr_27919[5] = inst_27856__$1);
return statearr_27919;
})();if(inst_27857)
{var statearr_27920_27956 = state_27917__$1;(statearr_27920_27956[1] = 2);
} else
{var statearr_27921_27957 = state_27917__$1;(statearr_27921_27957[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 2))
{var inst_27856 = (state_27917[5]);var inst_27859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27856);var state_27917__$1 = state_27917;var statearr_27922_27958 = state_27917__$1;(statearr_27922_27958[2] = inst_27859);
(statearr_27922_27958[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 3))
{var inst_27856 = (state_27917[5]);var state_27917__$1 = state_27917;var statearr_27923_27959 = state_27917__$1;(statearr_27923_27959[2] = inst_27856);
(statearr_27923_27959[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 4))
{var inst_27856 = (state_27917[5]);var inst_27862 = (state_27917[2]);var inst_27863 = cljs.core.get.call(null,inst_27862,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27864 = cljs.core.get.call(null,inst_27862,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27865 = cljs.core.get.call(null,inst_27862,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27866 = inst_27856;var state_27917__$1 = (function (){var statearr_27924 = state_27917;(statearr_27924[6] = inst_27866);
(statearr_27924[7] = inst_27865);
(statearr_27924[8] = inst_27864);
(statearr_27924[9] = inst_27863);
return statearr_27924;
})();var statearr_27925_27960 = state_27917__$1;(statearr_27925_27960[2] = null);
(statearr_27925_27960[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 5))
{var inst_27866 = (state_27917[6]);var inst_27869 = cljs.core.seq_QMARK_.call(null,inst_27866);var state_27917__$1 = state_27917;if(inst_27869)
{var statearr_27926_27961 = state_27917__$1;(statearr_27926_27961[1] = 7);
} else
{var statearr_27927_27962 = state_27917__$1;(statearr_27927_27962[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 6))
{var inst_27915 = (state_27917[2]);var state_27917__$1 = state_27917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27917__$1,inst_27915);
} else
{if((state_val_27918 === 7))
{var inst_27866 = (state_27917[6]);var inst_27871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27866);var state_27917__$1 = state_27917;var statearr_27928_27963 = state_27917__$1;(statearr_27928_27963[2] = inst_27871);
(statearr_27928_27963[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 8))
{var inst_27866 = (state_27917[6]);var state_27917__$1 = state_27917;var statearr_27929_27964 = state_27917__$1;(statearr_27929_27964[2] = inst_27866);
(statearr_27929_27964[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 9))
{var inst_27874 = (state_27917[10]);var inst_27874__$1 = (state_27917[2]);var inst_27875 = cljs.core.get.call(null,inst_27874__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27876 = cljs.core.get.call(null,inst_27874__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27877 = cljs.core.get.call(null,inst_27874__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27917__$1 = (function (){var statearr_27930 = state_27917;(statearr_27930[10] = inst_27874__$1);
(statearr_27930[11] = inst_27877);
(statearr_27930[12] = inst_27876);
return statearr_27930;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27917__$1,10,inst_27875);
} else
{if((state_val_27918 === 10))
{var inst_27882 = (state_27917[13]);var inst_27881 = (state_27917[14]);var inst_27880 = (state_27917[2]);var inst_27881__$1 = cljs.core.nth.call(null,inst_27880,0,null);var inst_27882__$1 = cljs.core.nth.call(null,inst_27880,1,null);var inst_27883 = (inst_27881__$1 == null);var inst_27884 = cljs.core._EQ_.call(null,inst_27882__$1,change);var inst_27885 = (inst_27883) || (inst_27884);var state_27917__$1 = (function (){var statearr_27931 = state_27917;(statearr_27931[13] = inst_27882__$1);
(statearr_27931[14] = inst_27881__$1);
return statearr_27931;
})();if(cljs.core.truth_(inst_27885))
{var statearr_27932_27965 = state_27917__$1;(statearr_27932_27965[1] = 11);
} else
{var statearr_27933_27966 = state_27917__$1;(statearr_27933_27966[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 11))
{var inst_27881 = (state_27917[14]);var inst_27887 = (inst_27881 == null);var state_27917__$1 = state_27917;if(cljs.core.truth_(inst_27887))
{var statearr_27934_27967 = state_27917__$1;(statearr_27934_27967[1] = 14);
} else
{var statearr_27935_27968 = state_27917__$1;(statearr_27935_27968[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 12))
{var inst_27882 = (state_27917[13]);var inst_27877 = (state_27917[11]);var inst_27896 = (state_27917[15]);var inst_27896__$1 = inst_27877.call(null,inst_27882);var state_27917__$1 = (function (){var statearr_27936 = state_27917;(statearr_27936[15] = inst_27896__$1);
return statearr_27936;
})();if(cljs.core.truth_(inst_27896__$1))
{var statearr_27937_27969 = state_27917__$1;(statearr_27937_27969[1] = 17);
} else
{var statearr_27938_27970 = state_27917__$1;(statearr_27938_27970[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 13))
{var inst_27913 = (state_27917[2]);var state_27917__$1 = state_27917;var statearr_27939_27971 = state_27917__$1;(statearr_27939_27971[2] = inst_27913);
(statearr_27939_27971[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 14))
{var inst_27882 = (state_27917[13]);var inst_27889 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27882);var state_27917__$1 = state_27917;var statearr_27940_27972 = state_27917__$1;(statearr_27940_27972[2] = inst_27889);
(statearr_27940_27972[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 15))
{var state_27917__$1 = state_27917;var statearr_27941_27973 = state_27917__$1;(statearr_27941_27973[2] = null);
(statearr_27941_27973[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 16))
{var inst_27892 = (state_27917[2]);var inst_27893 = calc_state.call(null);var inst_27866 = inst_27893;var state_27917__$1 = (function (){var statearr_27942 = state_27917;(statearr_27942[6] = inst_27866);
(statearr_27942[16] = inst_27892);
return statearr_27942;
})();var statearr_27943_27974 = state_27917__$1;(statearr_27943_27974[2] = null);
(statearr_27943_27974[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 17))
{var inst_27896 = (state_27917[15]);var state_27917__$1 = state_27917;var statearr_27944_27975 = state_27917__$1;(statearr_27944_27975[2] = inst_27896);
(statearr_27944_27975[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 18))
{var inst_27882 = (state_27917[13]);var inst_27877 = (state_27917[11]);var inst_27876 = (state_27917[12]);var inst_27899 = cljs.core.empty_QMARK_.call(null,inst_27877);var inst_27900 = inst_27876.call(null,inst_27882);var inst_27901 = cljs.core.not.call(null,inst_27900);var inst_27902 = (inst_27899) && (inst_27901);var state_27917__$1 = state_27917;var statearr_27945_27976 = state_27917__$1;(statearr_27945_27976[2] = inst_27902);
(statearr_27945_27976[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 19))
{var inst_27904 = (state_27917[2]);var state_27917__$1 = state_27917;if(cljs.core.truth_(inst_27904))
{var statearr_27946_27977 = state_27917__$1;(statearr_27946_27977[1] = 20);
} else
{var statearr_27947_27978 = state_27917__$1;(statearr_27947_27978[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 20))
{var inst_27881 = (state_27917[14]);var state_27917__$1 = state_27917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27917__$1,23,out,inst_27881);
} else
{if((state_val_27918 === 21))
{var state_27917__$1 = state_27917;var statearr_27948_27979 = state_27917__$1;(statearr_27948_27979[2] = null);
(statearr_27948_27979[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 22))
{var inst_27874 = (state_27917[10]);var inst_27910 = (state_27917[2]);var inst_27866 = inst_27874;var state_27917__$1 = (function (){var statearr_27949 = state_27917;(statearr_27949[17] = inst_27910);
(statearr_27949[6] = inst_27866);
return statearr_27949;
})();var statearr_27950_27980 = state_27917__$1;(statearr_27950_27980[2] = null);
(statearr_27950_27980[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27918 === 23))
{var inst_27907 = (state_27917[2]);var state_27917__$1 = state_27917;var statearr_27951_27981 = state_27917__$1;(statearr_27951_27981[2] = inst_27907);
(statearr_27951_27981[1] = 22);
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
var state_machine__5331__auto____0 = (function (){var statearr_27953 = (new Array(18));(statearr_27953[0] = state_machine__5331__auto__);
(statearr_27953[1] = 1);
return statearr_27953;
});
var state_machine__5331__auto____1 = (function (state_27917){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27917){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27954 = f__5381__auto__.call(null);(statearr_27954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27955);
return statearr_27954;
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
return (function (p1__27982_SHARP_){if(cljs.core.truth_(p1__27982_SHARP_.call(null,topic)))
{return p1__27982_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28106 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28107){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28107 = meta28107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28106.cljs$lang$type = true;
cljs.core.async.t28106.cljs$lang$ctorStr = "cljs.core.async/t28106";
cljs.core.async.t28106.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t28106");
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28106.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28108){var self__ = this;
var _28108__$1 = this;return self__.meta28107;
});})(mults,ensure_mult))
;
cljs.core.async.t28106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28108,meta28107__$1){var self__ = this;
var _28108__$1 = this;return (new cljs.core.async.t28106(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28107__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28106 = ((function (mults,ensure_mult){
return (function __GT_t28106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28107){return (new cljs.core.async.t28106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28107));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28106(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5380__auto___28229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28181){var state_val_28182 = (state_28181[1]);if((state_val_28182 === 1))
{var state_28181__$1 = state_28181;var statearr_28183_28230 = state_28181__$1;(statearr_28183_28230[2] = null);
(statearr_28183_28230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 2))
{var state_28181__$1 = state_28181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28181__$1,4,ch);
} else
{if((state_val_28182 === 3))
{var inst_28179 = (state_28181[2]);var state_28181__$1 = state_28181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28181__$1,inst_28179);
} else
{if((state_val_28182 === 4))
{var inst_28111 = (state_28181[5]);var inst_28111__$1 = (state_28181[2]);var inst_28112 = (inst_28111__$1 == null);var state_28181__$1 = (function (){var statearr_28184 = state_28181;(statearr_28184[5] = inst_28111__$1);
return statearr_28184;
})();if(cljs.core.truth_(inst_28112))
{var statearr_28185_28231 = state_28181__$1;(statearr_28185_28231[1] = 5);
} else
{var statearr_28186_28232 = state_28181__$1;(statearr_28186_28232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 5))
{var inst_28118 = cljs.core.deref.call(null,mults);var inst_28119 = cljs.core.vals.call(null,inst_28118);var inst_28120 = cljs.core.seq.call(null,inst_28119);var inst_28121 = inst_28120;var inst_28122 = null;var inst_28123 = 0;var inst_28124 = 0;var state_28181__$1 = (function (){var statearr_28187 = state_28181;(statearr_28187[6] = inst_28124);
(statearr_28187[7] = inst_28121);
(statearr_28187[8] = inst_28123);
(statearr_28187[9] = inst_28122);
return statearr_28187;
})();var statearr_28188_28233 = state_28181__$1;(statearr_28188_28233[2] = null);
(statearr_28188_28233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 6))
{var inst_28159 = (state_28181[10]);var inst_28161 = (state_28181[11]);var inst_28111 = (state_28181[5]);var inst_28159__$1 = topic_fn.call(null,inst_28111);var inst_28160 = cljs.core.deref.call(null,mults);var inst_28161__$1 = cljs.core.get.call(null,inst_28160,inst_28159__$1);var state_28181__$1 = (function (){var statearr_28189 = state_28181;(statearr_28189[10] = inst_28159__$1);
(statearr_28189[11] = inst_28161__$1);
return statearr_28189;
})();if(cljs.core.truth_(inst_28161__$1))
{var statearr_28190_28234 = state_28181__$1;(statearr_28190_28234[1] = 19);
} else
{var statearr_28191_28235 = state_28181__$1;(statearr_28191_28235[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 7))
{var inst_28177 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28192_28236 = state_28181__$1;(statearr_28192_28236[2] = inst_28177);
(statearr_28192_28236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 8))
{var inst_28124 = (state_28181[6]);var inst_28123 = (state_28181[8]);var inst_28126 = (inst_28124 < inst_28123);var inst_28127 = inst_28126;var state_28181__$1 = state_28181;if(cljs.core.truth_(inst_28127))
{var statearr_28196_28237 = state_28181__$1;(statearr_28196_28237[1] = 10);
} else
{var statearr_28197_28238 = state_28181__$1;(statearr_28197_28238[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 9))
{var inst_28157 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28198_28239 = state_28181__$1;(statearr_28198_28239[2] = inst_28157);
(statearr_28198_28239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 10))
{var inst_28124 = (state_28181[6]);var inst_28121 = (state_28181[7]);var inst_28123 = (state_28181[8]);var inst_28122 = (state_28181[9]);var inst_28129 = cljs.core._nth.call(null,inst_28122,inst_28124);var inst_28130 = cljs.core.async.muxch_STAR_.call(null,inst_28129);var inst_28131 = cljs.core.async.close_BANG_.call(null,inst_28130);var inst_28132 = (inst_28124 + 1);var tmp28193 = inst_28121;var tmp28194 = inst_28123;var tmp28195 = inst_28122;var inst_28121__$1 = tmp28193;var inst_28122__$1 = tmp28195;var inst_28123__$1 = tmp28194;var inst_28124__$1 = inst_28132;var state_28181__$1 = (function (){var statearr_28199 = state_28181;(statearr_28199[6] = inst_28124__$1);
(statearr_28199[7] = inst_28121__$1);
(statearr_28199[8] = inst_28123__$1);
(statearr_28199[9] = inst_28122__$1);
(statearr_28199[12] = inst_28131);
return statearr_28199;
})();var statearr_28200_28240 = state_28181__$1;(statearr_28200_28240[2] = null);
(statearr_28200_28240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 11))
{var inst_28121 = (state_28181[7]);var inst_28135 = (state_28181[13]);var inst_28135__$1 = cljs.core.seq.call(null,inst_28121);var state_28181__$1 = (function (){var statearr_28201 = state_28181;(statearr_28201[13] = inst_28135__$1);
return statearr_28201;
})();if(inst_28135__$1)
{var statearr_28202_28241 = state_28181__$1;(statearr_28202_28241[1] = 13);
} else
{var statearr_28203_28242 = state_28181__$1;(statearr_28203_28242[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 12))
{var inst_28155 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28204_28243 = state_28181__$1;(statearr_28204_28243[2] = inst_28155);
(statearr_28204_28243[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 13))
{var inst_28135 = (state_28181[13]);var inst_28137 = cljs.core.chunked_seq_QMARK_.call(null,inst_28135);var state_28181__$1 = state_28181;if(inst_28137)
{var statearr_28205_28244 = state_28181__$1;(statearr_28205_28244[1] = 16);
} else
{var statearr_28206_28245 = state_28181__$1;(statearr_28206_28245[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 14))
{var state_28181__$1 = state_28181;var statearr_28207_28246 = state_28181__$1;(statearr_28207_28246[2] = null);
(statearr_28207_28246[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 15))
{var inst_28153 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28208_28247 = state_28181__$1;(statearr_28208_28247[2] = inst_28153);
(statearr_28208_28247[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 16))
{var inst_28135 = (state_28181[13]);var inst_28139 = cljs.core.chunk_first.call(null,inst_28135);var inst_28140 = cljs.core.chunk_rest.call(null,inst_28135);var inst_28141 = cljs.core.count.call(null,inst_28139);var inst_28121 = inst_28140;var inst_28122 = inst_28139;var inst_28123 = inst_28141;var inst_28124 = 0;var state_28181__$1 = (function (){var statearr_28209 = state_28181;(statearr_28209[6] = inst_28124);
(statearr_28209[7] = inst_28121);
(statearr_28209[8] = inst_28123);
(statearr_28209[9] = inst_28122);
return statearr_28209;
})();var statearr_28210_28248 = state_28181__$1;(statearr_28210_28248[2] = null);
(statearr_28210_28248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 17))
{var inst_28135 = (state_28181[13]);var inst_28144 = cljs.core.first.call(null,inst_28135);var inst_28145 = cljs.core.async.muxch_STAR_.call(null,inst_28144);var inst_28146 = cljs.core.async.close_BANG_.call(null,inst_28145);var inst_28147 = cljs.core.next.call(null,inst_28135);var inst_28121 = inst_28147;var inst_28122 = null;var inst_28123 = 0;var inst_28124 = 0;var state_28181__$1 = (function (){var statearr_28211 = state_28181;(statearr_28211[6] = inst_28124);
(statearr_28211[7] = inst_28121);
(statearr_28211[8] = inst_28123);
(statearr_28211[9] = inst_28122);
(statearr_28211[14] = inst_28146);
return statearr_28211;
})();var statearr_28212_28249 = state_28181__$1;(statearr_28212_28249[2] = null);
(statearr_28212_28249[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 18))
{var inst_28150 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28213_28250 = state_28181__$1;(statearr_28213_28250[2] = inst_28150);
(statearr_28213_28250[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 19))
{var state_28181__$1 = state_28181;var statearr_28214_28251 = state_28181__$1;(statearr_28214_28251[2] = null);
(statearr_28214_28251[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 20))
{var state_28181__$1 = state_28181;var statearr_28215_28252 = state_28181__$1;(statearr_28215_28252[2] = null);
(statearr_28215_28252[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 21))
{var inst_28174 = (state_28181[2]);var state_28181__$1 = (function (){var statearr_28216 = state_28181;(statearr_28216[15] = inst_28174);
return statearr_28216;
})();var statearr_28217_28253 = state_28181__$1;(statearr_28217_28253[2] = null);
(statearr_28217_28253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 22))
{var inst_28171 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28218_28254 = state_28181__$1;(statearr_28218_28254[2] = inst_28171);
(statearr_28218_28254[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 23))
{var inst_28159 = (state_28181[10]);var inst_28163 = (state_28181[2]);var inst_28164 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28159);var state_28181__$1 = (function (){var statearr_28219 = state_28181;(statearr_28219[16] = inst_28163);
return statearr_28219;
})();var statearr_28220_28255 = state_28181__$1;(statearr_28220_28255[2] = inst_28164);
(statearr_28220_28255[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28182 === 24))
{try{var inst_28161 = (state_28181[11]);var inst_28111 = (state_28181[5]);var inst_28167 = cljs.core.async.muxch_STAR_.call(null,inst_28161);var state_28181__$1 = state_28181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28181__$1,25,inst_28167,inst_28111);
}catch (e28221){if((e28221 instanceof Object))
{var ex__5324__auto__ = e28221;var statearr_28222_28256 = state_28181;(statearr_28222_28256[1] = 23);
(statearr_28222_28256[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28221;
} else
{return null;
}
}
}} else
{if((state_val_28182 === 25))
{try{var inst_28169 = (state_28181[2]);var state_28181__$1 = state_28181;var statearr_28225_28257 = state_28181__$1;(statearr_28225_28257[2] = inst_28169);
(statearr_28225_28257[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e28223){if((e28223 instanceof Object))
{var ex__5324__auto__ = e28223;var statearr_28224_28258 = state_28181;(statearr_28224_28258[1] = 23);
(statearr_28224_28258[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28223;
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
var state_machine__5331__auto____0 = (function (){var statearr_28227 = (new Array(17));(statearr_28227[0] = state_machine__5331__auto__);
(statearr_28227[1] = 1);
return statearr_28227;
});
var state_machine__5331__auto____1 = (function (state_28181){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28181){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28228 = f__5381__auto__.call(null);(statearr_28228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28229);
return statearr_28228;
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
,cljs.core.range.call(null,cnt));var c__5380__auto___28389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28361){var state_val_28362 = (state_28361[1]);if((state_val_28362 === 1))
{var state_28361__$1 = state_28361;var statearr_28363_28390 = state_28361__$1;(statearr_28363_28390[2] = null);
(statearr_28363_28390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 2))
{var inst_28325 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28326 = 0;var state_28361__$1 = (function (){var statearr_28364 = state_28361;(statearr_28364[5] = inst_28325);
(statearr_28364[6] = inst_28326);
return statearr_28364;
})();var statearr_28365_28391 = state_28361__$1;(statearr_28365_28391[2] = null);
(statearr_28365_28391[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 3))
{var inst_28359 = (state_28361[2]);var state_28361__$1 = state_28361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28361__$1,inst_28359);
} else
{if((state_val_28362 === 4))
{var inst_28326 = (state_28361[6]);var inst_28328 = (inst_28326 < cnt);var state_28361__$1 = state_28361;if(cljs.core.truth_(inst_28328))
{var statearr_28366_28392 = state_28361__$1;(statearr_28366_28392[1] = 6);
} else
{var statearr_28367_28393 = state_28361__$1;(statearr_28367_28393[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 5))
{var inst_28345 = (state_28361[2]);var state_28361__$1 = (function (){var statearr_28368 = state_28361;(statearr_28368[7] = inst_28345);
return statearr_28368;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28361__$1,12,dchan);
} else
{if((state_val_28362 === 6))
{var state_28361__$1 = state_28361;var statearr_28369_28394 = state_28361__$1;(statearr_28369_28394[2] = null);
(statearr_28369_28394[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 7))
{var state_28361__$1 = state_28361;var statearr_28370_28395 = state_28361__$1;(statearr_28370_28395[2] = null);
(statearr_28370_28395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 8))
{var inst_28343 = (state_28361[2]);var state_28361__$1 = state_28361;var statearr_28371_28396 = state_28361__$1;(statearr_28371_28396[2] = inst_28343);
(statearr_28371_28396[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 9))
{var inst_28326 = (state_28361[6]);var inst_28338 = (state_28361[2]);var inst_28339 = (inst_28326 + 1);var inst_28326__$1 = inst_28339;var state_28361__$1 = (function (){var statearr_28372 = state_28361;(statearr_28372[8] = inst_28338);
(statearr_28372[6] = inst_28326__$1);
return statearr_28372;
})();var statearr_28373_28397 = state_28361__$1;(statearr_28373_28397[2] = null);
(statearr_28373_28397[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 10))
{var inst_28330 = (state_28361[2]);var inst_28331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28361__$1 = (function (){var statearr_28374 = state_28361;(statearr_28374[9] = inst_28330);
return statearr_28374;
})();var statearr_28375_28398 = state_28361__$1;(statearr_28375_28398[2] = inst_28331);
(statearr_28375_28398[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 11))
{try{var inst_28326 = (state_28361[6]);var inst_28334 = chs__$1.call(null,inst_28326);var inst_28335 = done.call(null,inst_28326);var inst_28336 = cljs.core.async.take_BANG_.call(null,inst_28334,inst_28335);var state_28361__$1 = state_28361;var statearr_28378_28399 = state_28361__$1;(statearr_28378_28399[2] = inst_28336);
(statearr_28378_28399[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e28376){if((e28376 instanceof Object))
{var ex__5324__auto__ = e28376;var statearr_28377_28400 = state_28361;(statearr_28377_28400[1] = 10);
(statearr_28377_28400[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28376;
} else
{return null;
}
}
}} else
{if((state_val_28362 === 12))
{var inst_28347 = (state_28361[10]);var inst_28347__$1 = (state_28361[2]);var inst_28348 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28347__$1);var state_28361__$1 = (function (){var statearr_28379 = state_28361;(statearr_28379[10] = inst_28347__$1);
return statearr_28379;
})();if(cljs.core.truth_(inst_28348))
{var statearr_28380_28401 = state_28361__$1;(statearr_28380_28401[1] = 13);
} else
{var statearr_28381_28402 = state_28361__$1;(statearr_28381_28402[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 13))
{var inst_28350 = cljs.core.async.close_BANG_.call(null,out);var state_28361__$1 = state_28361;var statearr_28382_28403 = state_28361__$1;(statearr_28382_28403[2] = inst_28350);
(statearr_28382_28403[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 14))
{var inst_28347 = (state_28361[10]);var inst_28352 = cljs.core.apply.call(null,f,inst_28347);var state_28361__$1 = state_28361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28361__$1,16,out,inst_28352);
} else
{if((state_val_28362 === 15))
{var inst_28357 = (state_28361[2]);var state_28361__$1 = state_28361;var statearr_28383_28404 = state_28361__$1;(statearr_28383_28404[2] = inst_28357);
(statearr_28383_28404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28362 === 16))
{var inst_28354 = (state_28361[2]);var state_28361__$1 = (function (){var statearr_28384 = state_28361;(statearr_28384[11] = inst_28354);
return statearr_28384;
})();var statearr_28385_28405 = state_28361__$1;(statearr_28385_28405[2] = null);
(statearr_28385_28405[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_28387 = (new Array(12));(statearr_28387[0] = state_machine__5331__auto__);
(statearr_28387[1] = 1);
return statearr_28387;
});
var state_machine__5331__auto____1 = (function (state_28361){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28361){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28388 = f__5381__auto__.call(null);(statearr_28388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28389);
return statearr_28388;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___28505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28485){var state_val_28486 = (state_28485[1]);if((state_val_28486 === 1))
{var inst_28456 = cljs.core.vec.call(null,chs);var inst_28457 = inst_28456;var state_28485__$1 = (function (){var statearr_28487 = state_28485;(statearr_28487[5] = inst_28457);
return statearr_28487;
})();var statearr_28488_28506 = state_28485__$1;(statearr_28488_28506[2] = null);
(statearr_28488_28506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 2))
{var inst_28457 = (state_28485[5]);var inst_28459 = cljs.core.count.call(null,inst_28457);var inst_28460 = (inst_28459 > 0);var state_28485__$1 = state_28485;if(cljs.core.truth_(inst_28460))
{var statearr_28489_28507 = state_28485__$1;(statearr_28489_28507[1] = 4);
} else
{var statearr_28490_28508 = state_28485__$1;(statearr_28490_28508[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 3))
{var inst_28483 = (state_28485[2]);var state_28485__$1 = state_28485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28485__$1,inst_28483);
} else
{if((state_val_28486 === 4))
{var inst_28457 = (state_28485[5]);var state_28485__$1 = state_28485;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28485__$1,7,inst_28457);
} else
{if((state_val_28486 === 5))
{var inst_28479 = cljs.core.async.close_BANG_.call(null,out);var state_28485__$1 = state_28485;var statearr_28491_28509 = state_28485__$1;(statearr_28491_28509[2] = inst_28479);
(statearr_28491_28509[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 6))
{var inst_28481 = (state_28485[2]);var state_28485__$1 = state_28485;var statearr_28492_28510 = state_28485__$1;(statearr_28492_28510[2] = inst_28481);
(statearr_28492_28510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 7))
{var inst_28465 = (state_28485[6]);var inst_28464 = (state_28485[7]);var inst_28464__$1 = (state_28485[2]);var inst_28465__$1 = cljs.core.nth.call(null,inst_28464__$1,0,null);var inst_28466 = cljs.core.nth.call(null,inst_28464__$1,1,null);var inst_28467 = (inst_28465__$1 == null);var state_28485__$1 = (function (){var statearr_28493 = state_28485;(statearr_28493[6] = inst_28465__$1);
(statearr_28493[8] = inst_28466);
(statearr_28493[7] = inst_28464__$1);
return statearr_28493;
})();if(cljs.core.truth_(inst_28467))
{var statearr_28494_28511 = state_28485__$1;(statearr_28494_28511[1] = 8);
} else
{var statearr_28495_28512 = state_28485__$1;(statearr_28495_28512[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 8))
{var inst_28457 = (state_28485[5]);var inst_28465 = (state_28485[6]);var inst_28466 = (state_28485[8]);var inst_28464 = (state_28485[7]);var inst_28469 = (function (){var c = inst_28466;var v = inst_28465;var vec__28462 = inst_28464;var cs = inst_28457;return ((function (c,v,vec__28462,cs,inst_28457,inst_28465,inst_28466,inst_28464,state_val_28486){
return (function (p1__28406_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28406_SHARP_);
});
;})(c,v,vec__28462,cs,inst_28457,inst_28465,inst_28466,inst_28464,state_val_28486))
})();var inst_28470 = cljs.core.filterv.call(null,inst_28469,inst_28457);var inst_28457__$1 = inst_28470;var state_28485__$1 = (function (){var statearr_28496 = state_28485;(statearr_28496[5] = inst_28457__$1);
return statearr_28496;
})();var statearr_28497_28513 = state_28485__$1;(statearr_28497_28513[2] = null);
(statearr_28497_28513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 9))
{var inst_28465 = (state_28485[6]);var state_28485__$1 = state_28485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28485__$1,11,out,inst_28465);
} else
{if((state_val_28486 === 10))
{var inst_28477 = (state_28485[2]);var state_28485__$1 = state_28485;var statearr_28499_28514 = state_28485__$1;(statearr_28499_28514[2] = inst_28477);
(statearr_28499_28514[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 11))
{var inst_28457 = (state_28485[5]);var inst_28474 = (state_28485[2]);var tmp28498 = inst_28457;var inst_28457__$1 = tmp28498;var state_28485__$1 = (function (){var statearr_28500 = state_28485;(statearr_28500[5] = inst_28457__$1);
(statearr_28500[9] = inst_28474);
return statearr_28500;
})();var statearr_28501_28515 = state_28485__$1;(statearr_28501_28515[2] = null);
(statearr_28501_28515[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_28503 = (new Array(10));(statearr_28503[0] = state_machine__5331__auto__);
(statearr_28503[1] = 1);
return statearr_28503;
});
var state_machine__5331__auto____1 = (function (state_28485){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28485);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28485){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28504 = f__5381__auto__.call(null);(statearr_28504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28505);
return statearr_28504;
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

//# sourceMappingURL=async.js.map