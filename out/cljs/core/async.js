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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26752 = (function (f,fn_handler,meta26753){
this.f = f;
this.fn_handler = fn_handler;
this.meta26753 = meta26753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26752.cljs$lang$type = true;
cljs.core.async.t26752.cljs$lang$ctorStr = "cljs.core.async/t26752";
cljs.core.async.t26752.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26752");
});
cljs.core.async.t26752.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26754){var self__ = this;
var _26754__$1 = this;return self__.meta26753;
});
cljs.core.async.t26752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26754,meta26753__$1){var self__ = this;
var _26754__$1 = this;return (new cljs.core.async.t26752(self__.f,self__.fn_handler,meta26753__$1));
});
cljs.core.async.__GT_t26752 = (function __GT_t26752(f__$1,fn_handler__$1,meta26753){return (new cljs.core.async.t26752(f__$1,fn_handler__$1,meta26753));
});
}
return (new cljs.core.async.t26752(f,fn_handler,null));
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
{var val_26755 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26755);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_26755);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___26756 = n;var x_26757 = 0;while(true){
if((x_26757 < n__3891__auto___26756))
{(a[x_26757] = 0);
{
var G__26758 = (x_26757 + 1);
x_26757 = G__26758;
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
var G__26759 = (i + 1);
i = G__26759;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26763 = (function (flag,alt_flag,meta26764){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26764 = meta26764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26763.cljs$lang$type = true;
cljs.core.async.t26763.cljs$lang$ctorStr = "cljs.core.async/t26763";
cljs.core.async.t26763.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26763");
});
cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t26763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t26763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26765){var self__ = this;
var _26765__$1 = this;return self__.meta26764;
});
cljs.core.async.t26763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26765,meta26764__$1){var self__ = this;
var _26765__$1 = this;return (new cljs.core.async.t26763(self__.flag,self__.alt_flag,meta26764__$1));
});
cljs.core.async.__GT_t26763 = (function __GT_t26763(flag__$1,alt_flag__$1,meta26764){return (new cljs.core.async.t26763(flag__$1,alt_flag__$1,meta26764));
});
}
return (new cljs.core.async.t26763(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26769 = (function (cb,flag,alt_handler,meta26770){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26770 = meta26770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26769.cljs$lang$type = true;
cljs.core.async.t26769.cljs$lang$ctorStr = "cljs.core.async/t26769";
cljs.core.async.t26769.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26769");
});
cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26771){var self__ = this;
var _26771__$1 = this;return self__.meta26770;
});
cljs.core.async.t26769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26771,meta26770__$1){var self__ = this;
var _26771__$1 = this;return (new cljs.core.async.t26769(self__.cb,self__.flag,self__.alt_handler,meta26770__$1));
});
cljs.core.async.__GT_t26769 = (function __GT_t26769(cb__$1,flag__$1,alt_handler__$1,meta26770){return (new cljs.core.async.t26769(cb__$1,flag__$1,alt_handler__$1,meta26770));
});
}
return (new cljs.core.async.t26769(cb,flag,alt_handler,null));
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
return (function (p1__26772_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__26772_SHARP_,port], true));
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
var G__26773 = (i + 1);
i = G__26773;
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
var alts_BANG___delegate = function (ports,p__26774){var map__26776 = p__26774;var map__26776__$1 = ((cljs.core.seq_QMARK_.call(null,map__26776))?cljs.core.apply.call(null,cljs.core.hash_map,map__26776):map__26776);var opts = map__26776__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26774 = null;if (arguments.length > 1) {
  p__26774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26774);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26777){
var ports = cljs.core.first(arglist__26777);
var p__26774 = cljs.core.rest(arglist__26777);
return alts_BANG___delegate(ports,p__26774);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26785 = (function (ch,f,map_LT_,meta26786){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26786 = meta26786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26785.cljs$lang$type = true;
cljs.core.async.t26785.cljs$lang$ctorStr = "cljs.core.async/t26785";
cljs.core.async.t26785.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26785");
});
cljs.core.async.t26785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t26785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26788 = (function (fn1,_,meta26786,ch,f,map_LT_,meta26789){
this.fn1 = fn1;
this._ = _;
this.meta26786 = meta26786;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26789 = meta26789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26788.cljs$lang$type = true;
cljs.core.async.t26788.cljs$lang$ctorStr = "cljs.core.async/t26788";
cljs.core.async.t26788.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26788");
});
cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__26778_SHARP_){return f1.call(null,(((p1__26778_SHARP_ == null))?null:self__.f.call(null,p1__26778_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t26788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26790){var self__ = this;
var _26790__$1 = this;return self__.meta26789;
});
cljs.core.async.t26788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26790,meta26789__$1){var self__ = this;
var _26790__$1 = this;return (new cljs.core.async.t26788(self__.fn1,self__._,self__.meta26786,self__.ch,self__.f,self__.map_LT_,meta26789__$1));
});
cljs.core.async.__GT_t26788 = (function __GT_t26788(fn1__$1,___$2,meta26786__$1,ch__$2,f__$2,map_LT___$2,meta26789){return (new cljs.core.async.t26788(fn1__$1,___$2,meta26786__$1,ch__$2,f__$2,map_LT___$2,meta26789));
});
}
return (new cljs.core.async.t26788(fn1,___$1,self__.meta26786,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26785.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26787){var self__ = this;
var _26787__$1 = this;return self__.meta26786;
});
cljs.core.async.t26785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26787,meta26786__$1){var self__ = this;
var _26787__$1 = this;return (new cljs.core.async.t26785(self__.ch,self__.f,self__.map_LT_,meta26786__$1));
});
cljs.core.async.__GT_t26785 = (function __GT_t26785(ch__$1,f__$1,map_LT___$1,meta26786){return (new cljs.core.async.t26785(ch__$1,f__$1,map_LT___$1,meta26786));
});
}
return (new cljs.core.async.t26785(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26794 = (function (ch,f,map_GT_,meta26795){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26795 = meta26795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26794.cljs$lang$type = true;
cljs.core.async.t26794.cljs$lang$ctorStr = "cljs.core.async/t26794";
cljs.core.async.t26794.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26794");
});
cljs.core.async.t26794.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t26794.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26794.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26796){var self__ = this;
var _26796__$1 = this;return self__.meta26795;
});
cljs.core.async.t26794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26796,meta26795__$1){var self__ = this;
var _26796__$1 = this;return (new cljs.core.async.t26794(self__.ch,self__.f,self__.map_GT_,meta26795__$1));
});
cljs.core.async.__GT_t26794 = (function __GT_t26794(ch__$1,f__$1,map_GT___$1,meta26795){return (new cljs.core.async.t26794(ch__$1,f__$1,map_GT___$1,meta26795));
});
}
return (new cljs.core.async.t26794(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26800 = (function (ch,p,filter_GT_,meta26801){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26801 = meta26801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26800.cljs$lang$type = true;
cljs.core.async.t26800.cljs$lang$ctorStr = "cljs.core.async/t26800";
cljs.core.async.t26800.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t26800");
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26802){var self__ = this;
var _26802__$1 = this;return self__.meta26801;
});
cljs.core.async.t26800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26802,meta26801__$1){var self__ = this;
var _26802__$1 = this;return (new cljs.core.async.t26800(self__.ch,self__.p,self__.filter_GT_,meta26801__$1));
});
cljs.core.async.__GT_t26800 = (function __GT_t26800(ch__$1,p__$1,filter_GT___$1,meta26801){return (new cljs.core.async.t26800(ch__$1,p__$1,filter_GT___$1,meta26801));
});
}
return (new cljs.core.async.t26800(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___26877 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_26860){var state_val_26861 = (state_26860[1]);if((state_val_26861 === 1))
{var state_26860__$1 = state_26860;var statearr_26862_26878 = state_26860__$1;(statearr_26862_26878[2] = null);
(statearr_26862_26878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 2))
{var state_26860__$1 = state_26860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26860__$1,4,ch);
} else
{if((state_val_26861 === 3))
{var inst_26858 = (state_26860[2]);var state_26860__$1 = state_26860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26860__$1,inst_26858);
} else
{if((state_val_26861 === 4))
{var inst_26842 = (state_26860[5]);var inst_26842__$1 = (state_26860[2]);var inst_26843 = (inst_26842__$1 == null);var state_26860__$1 = (function (){var statearr_26863 = state_26860;(statearr_26863[5] = inst_26842__$1);
return statearr_26863;
})();if(cljs.core.truth_(inst_26843))
{var statearr_26864_26879 = state_26860__$1;(statearr_26864_26879[1] = 5);
} else
{var statearr_26865_26880 = state_26860__$1;(statearr_26865_26880[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 5))
{var inst_26845 = cljs.core.async.close_BANG_.call(null,out);var state_26860__$1 = state_26860;var statearr_26866_26881 = state_26860__$1;(statearr_26866_26881[2] = inst_26845);
(statearr_26866_26881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 6))
{var inst_26842 = (state_26860[5]);var inst_26847 = p.call(null,inst_26842);var state_26860__$1 = state_26860;if(cljs.core.truth_(inst_26847))
{var statearr_26867_26882 = state_26860__$1;(statearr_26867_26882[1] = 8);
} else
{var statearr_26868_26883 = state_26860__$1;(statearr_26868_26883[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 7))
{var inst_26856 = (state_26860[2]);var state_26860__$1 = state_26860;var statearr_26869_26884 = state_26860__$1;(statearr_26869_26884[2] = inst_26856);
(statearr_26869_26884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 8))
{var inst_26842 = (state_26860[5]);var state_26860__$1 = state_26860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26860__$1,11,out,inst_26842);
} else
{if((state_val_26861 === 9))
{var state_26860__$1 = state_26860;var statearr_26870_26885 = state_26860__$1;(statearr_26870_26885[2] = null);
(statearr_26870_26885[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 10))
{var inst_26853 = (state_26860[2]);var state_26860__$1 = (function (){var statearr_26871 = state_26860;(statearr_26871[6] = inst_26853);
return statearr_26871;
})();var statearr_26872_26886 = state_26860__$1;(statearr_26872_26886[2] = null);
(statearr_26872_26886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26861 === 11))
{var inst_26850 = (state_26860[2]);var state_26860__$1 = state_26860;var statearr_26873_26887 = state_26860__$1;(statearr_26873_26887[2] = inst_26850);
(statearr_26873_26887[1] = 10);
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
var state_machine__5331__auto____0 = (function (){var statearr_26875 = (new Array(7));(statearr_26875[0] = state_machine__5331__auto__);
(statearr_26875[1] = 1);
return statearr_26875;
});
var state_machine__5331__auto____1 = (function (state_26860){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_26860);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_26860){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_26860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_26876 = f__5381__auto__.call(null);(statearr_26876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___26877);
return statearr_26876;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27035){var state_val_27036 = (state_27035[1]);if((state_val_27036 === 1))
{var state_27035__$1 = state_27035;var statearr_27037_27070 = state_27035__$1;(statearr_27037_27070[2] = null);
(statearr_27037_27070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 2))
{var state_27035__$1 = state_27035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27035__$1,4,in$);
} else
{if((state_val_27036 === 3))
{var inst_27033 = (state_27035[2]);var state_27035__$1 = state_27035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27035__$1,inst_27033);
} else
{if((state_val_27036 === 4))
{var inst_26981 = (state_27035[5]);var inst_26981__$1 = (state_27035[2]);var inst_26982 = (inst_26981__$1 == null);var state_27035__$1 = (function (){var statearr_27038 = state_27035;(statearr_27038[5] = inst_26981__$1);
return statearr_27038;
})();if(cljs.core.truth_(inst_26982))
{var statearr_27039_27071 = state_27035__$1;(statearr_27039_27071[1] = 5);
} else
{var statearr_27040_27072 = state_27035__$1;(statearr_27040_27072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 5))
{var inst_26984 = cljs.core.async.close_BANG_.call(null,out);var state_27035__$1 = state_27035;var statearr_27041_27073 = state_27035__$1;(statearr_27041_27073[2] = inst_26984);
(statearr_27041_27073[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 6))
{var inst_26981 = (state_27035[5]);var inst_26986 = f.call(null,inst_26981);var inst_26991 = cljs.core.seq.call(null,inst_26986);var inst_26992 = inst_26991;var inst_26993 = null;var inst_26994 = 0;var inst_26995 = 0;var state_27035__$1 = (function (){var statearr_27042 = state_27035;(statearr_27042[6] = inst_26995);
(statearr_27042[7] = inst_26993);
(statearr_27042[8] = inst_26994);
(statearr_27042[9] = inst_26992);
return statearr_27042;
})();var statearr_27043_27074 = state_27035__$1;(statearr_27043_27074[2] = null);
(statearr_27043_27074[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 7))
{var inst_27031 = (state_27035[2]);var state_27035__$1 = state_27035;var statearr_27044_27075 = state_27035__$1;(statearr_27044_27075[2] = inst_27031);
(statearr_27044_27075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 8))
{var inst_26995 = (state_27035[6]);var inst_26994 = (state_27035[8]);var inst_26997 = (inst_26995 < inst_26994);var inst_26998 = inst_26997;var state_27035__$1 = state_27035;if(cljs.core.truth_(inst_26998))
{var statearr_27045_27076 = state_27035__$1;(statearr_27045_27076[1] = 10);
} else
{var statearr_27046_27077 = state_27035__$1;(statearr_27046_27077[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 9))
{var inst_27028 = (state_27035[2]);var state_27035__$1 = (function (){var statearr_27047 = state_27035;(statearr_27047[10] = inst_27028);
return statearr_27047;
})();var statearr_27048_27078 = state_27035__$1;(statearr_27048_27078[2] = null);
(statearr_27048_27078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 10))
{var inst_26995 = (state_27035[6]);var inst_26993 = (state_27035[7]);var inst_27000 = cljs.core._nth.call(null,inst_26993,inst_26995);var state_27035__$1 = state_27035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27035__$1,13,out,inst_27000);
} else
{if((state_val_27036 === 11))
{var inst_27006 = (state_27035[11]);var inst_26992 = (state_27035[9]);var inst_27006__$1 = cljs.core.seq.call(null,inst_26992);var state_27035__$1 = (function (){var statearr_27052 = state_27035;(statearr_27052[11] = inst_27006__$1);
return statearr_27052;
})();if(inst_27006__$1)
{var statearr_27053_27079 = state_27035__$1;(statearr_27053_27079[1] = 14);
} else
{var statearr_27054_27080 = state_27035__$1;(statearr_27054_27080[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 12))
{var inst_27026 = (state_27035[2]);var state_27035__$1 = state_27035;var statearr_27055_27081 = state_27035__$1;(statearr_27055_27081[2] = inst_27026);
(statearr_27055_27081[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 13))
{var inst_26995 = (state_27035[6]);var inst_26993 = (state_27035[7]);var inst_26994 = (state_27035[8]);var inst_26992 = (state_27035[9]);var inst_27002 = (state_27035[2]);var inst_27003 = (inst_26995 + 1);var tmp27049 = inst_26993;var tmp27050 = inst_26994;var tmp27051 = inst_26992;var inst_26992__$1 = tmp27051;var inst_26993__$1 = tmp27049;var inst_26994__$1 = tmp27050;var inst_26995__$1 = inst_27003;var state_27035__$1 = (function (){var statearr_27056 = state_27035;(statearr_27056[6] = inst_26995__$1);
(statearr_27056[7] = inst_26993__$1);
(statearr_27056[8] = inst_26994__$1);
(statearr_27056[12] = inst_27002);
(statearr_27056[9] = inst_26992__$1);
return statearr_27056;
})();var statearr_27057_27082 = state_27035__$1;(statearr_27057_27082[2] = null);
(statearr_27057_27082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 14))
{var inst_27006 = (state_27035[11]);var inst_27008 = cljs.core.chunked_seq_QMARK_.call(null,inst_27006);var state_27035__$1 = state_27035;if(inst_27008)
{var statearr_27058_27083 = state_27035__$1;(statearr_27058_27083[1] = 17);
} else
{var statearr_27059_27084 = state_27035__$1;(statearr_27059_27084[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 15))
{var state_27035__$1 = state_27035;var statearr_27060_27085 = state_27035__$1;(statearr_27060_27085[2] = null);
(statearr_27060_27085[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 16))
{var inst_27024 = (state_27035[2]);var state_27035__$1 = state_27035;var statearr_27061_27086 = state_27035__$1;(statearr_27061_27086[2] = inst_27024);
(statearr_27061_27086[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 17))
{var inst_27006 = (state_27035[11]);var inst_27010 = cljs.core.chunk_first.call(null,inst_27006);var inst_27011 = cljs.core.chunk_rest.call(null,inst_27006);var inst_27012 = cljs.core.count.call(null,inst_27010);var inst_26992 = inst_27011;var inst_26993 = inst_27010;var inst_26994 = inst_27012;var inst_26995 = 0;var state_27035__$1 = (function (){var statearr_27062 = state_27035;(statearr_27062[6] = inst_26995);
(statearr_27062[7] = inst_26993);
(statearr_27062[8] = inst_26994);
(statearr_27062[9] = inst_26992);
return statearr_27062;
})();var statearr_27063_27087 = state_27035__$1;(statearr_27063_27087[2] = null);
(statearr_27063_27087[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 18))
{var inst_27006 = (state_27035[11]);var inst_27015 = cljs.core.first.call(null,inst_27006);var state_27035__$1 = state_27035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27035__$1,20,out,inst_27015);
} else
{if((state_val_27036 === 19))
{var inst_27021 = (state_27035[2]);var state_27035__$1 = state_27035;var statearr_27064_27088 = state_27035__$1;(statearr_27064_27088[2] = inst_27021);
(statearr_27064_27088[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27036 === 20))
{var inst_27006 = (state_27035[11]);var inst_27017 = (state_27035[2]);var inst_27018 = cljs.core.next.call(null,inst_27006);var inst_26992 = inst_27018;var inst_26993 = null;var inst_26994 = 0;var inst_26995 = 0;var state_27035__$1 = (function (){var statearr_27065 = state_27035;(statearr_27065[6] = inst_26995);
(statearr_27065[7] = inst_26993);
(statearr_27065[8] = inst_26994);
(statearr_27065[9] = inst_26992);
(statearr_27065[13] = inst_27017);
return statearr_27065;
})();var statearr_27066_27089 = state_27035__$1;(statearr_27066_27089[2] = null);
(statearr_27066_27089[1] = 8);
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
var state_machine__5331__auto____0 = (function (){var statearr_27068 = (new Array(14));(statearr_27068[0] = state_machine__5331__auto__);
(statearr_27068[1] = 1);
return statearr_27068;
});
var state_machine__5331__auto____1 = (function (state_27035){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27035);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27035){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27069 = f__5381__auto__.call(null);(statearr_27069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_27069;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5380__auto___27162 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27145){var state_val_27146 = (state_27145[1]);if((state_val_27146 === 1))
{var state_27145__$1 = state_27145;var statearr_27147_27163 = state_27145__$1;(statearr_27147_27163[2] = null);
(statearr_27147_27163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 2))
{var state_27145__$1 = state_27145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27145__$1,4,from);
} else
{if((state_val_27146 === 3))
{var inst_27143 = (state_27145[2]);var state_27145__$1 = state_27145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27145__$1,inst_27143);
} else
{if((state_val_27146 === 4))
{var inst_27128 = (state_27145[5]);var inst_27128__$1 = (state_27145[2]);var inst_27129 = (inst_27128__$1 == null);var state_27145__$1 = (function (){var statearr_27148 = state_27145;(statearr_27148[5] = inst_27128__$1);
return statearr_27148;
})();if(cljs.core.truth_(inst_27129))
{var statearr_27149_27164 = state_27145__$1;(statearr_27149_27164[1] = 5);
} else
{var statearr_27150_27165 = state_27145__$1;(statearr_27150_27165[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 5))
{var state_27145__$1 = state_27145;if(cljs.core.truth_(close_QMARK_))
{var statearr_27151_27166 = state_27145__$1;(statearr_27151_27166[1] = 8);
} else
{var statearr_27152_27167 = state_27145__$1;(statearr_27152_27167[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 6))
{var inst_27128 = (state_27145[5]);var state_27145__$1 = state_27145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27145__$1,11,to,inst_27128);
} else
{if((state_val_27146 === 7))
{var inst_27141 = (state_27145[2]);var state_27145__$1 = state_27145;var statearr_27153_27168 = state_27145__$1;(statearr_27153_27168[2] = inst_27141);
(statearr_27153_27168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 8))
{var inst_27132 = cljs.core.async.close_BANG_.call(null,to);var state_27145__$1 = state_27145;var statearr_27154_27169 = state_27145__$1;(statearr_27154_27169[2] = inst_27132);
(statearr_27154_27169[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 9))
{var state_27145__$1 = state_27145;var statearr_27155_27170 = state_27145__$1;(statearr_27155_27170[2] = null);
(statearr_27155_27170[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 10))
{var inst_27135 = (state_27145[2]);var state_27145__$1 = state_27145;var statearr_27156_27171 = state_27145__$1;(statearr_27156_27171[2] = inst_27135);
(statearr_27156_27171[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27146 === 11))
{var inst_27138 = (state_27145[2]);var state_27145__$1 = (function (){var statearr_27157 = state_27145;(statearr_27157[6] = inst_27138);
return statearr_27157;
})();var statearr_27158_27172 = state_27145__$1;(statearr_27158_27172[2] = null);
(statearr_27158_27172[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_27160 = (new Array(7));(statearr_27160[0] = state_machine__5331__auto__);
(statearr_27160[1] = 1);
return statearr_27160;
});
var state_machine__5331__auto____1 = (function (state_27145){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27145){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27161 = f__5381__auto__.call(null);(statearr_27161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27162);
return statearr_27161;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5380__auto___27251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27233){var state_val_27234 = (state_27233[1]);if((state_val_27234 === 1))
{var state_27233__$1 = state_27233;var statearr_27235_27252 = state_27233__$1;(statearr_27235_27252[2] = null);
(statearr_27235_27252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 2))
{var state_27233__$1 = state_27233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27233__$1,4,ch);
} else
{if((state_val_27234 === 3))
{var inst_27231 = (state_27233[2]);var state_27233__$1 = state_27233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27233__$1,inst_27231);
} else
{if((state_val_27234 === 4))
{var inst_27214 = (state_27233[5]);var inst_27214__$1 = (state_27233[2]);var inst_27215 = (inst_27214__$1 == null);var state_27233__$1 = (function (){var statearr_27236 = state_27233;(statearr_27236[5] = inst_27214__$1);
return statearr_27236;
})();if(cljs.core.truth_(inst_27215))
{var statearr_27237_27253 = state_27233__$1;(statearr_27237_27253[1] = 5);
} else
{var statearr_27238_27254 = state_27233__$1;(statearr_27238_27254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 5))
{var inst_27217 = cljs.core.async.close_BANG_.call(null,tc);var inst_27218 = cljs.core.async.close_BANG_.call(null,fc);var state_27233__$1 = (function (){var statearr_27239 = state_27233;(statearr_27239[6] = inst_27217);
return statearr_27239;
})();var statearr_27240_27255 = state_27233__$1;(statearr_27240_27255[2] = inst_27218);
(statearr_27240_27255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 6))
{var inst_27214 = (state_27233[5]);var inst_27220 = p.call(null,inst_27214);var state_27233__$1 = state_27233;if(cljs.core.truth_(inst_27220))
{var statearr_27241_27256 = state_27233__$1;(statearr_27241_27256[1] = 9);
} else
{var statearr_27242_27257 = state_27233__$1;(statearr_27242_27257[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 7))
{var inst_27229 = (state_27233[2]);var state_27233__$1 = state_27233;var statearr_27243_27258 = state_27233__$1;(statearr_27243_27258[2] = inst_27229);
(statearr_27243_27258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 8))
{var inst_27226 = (state_27233[2]);var state_27233__$1 = (function (){var statearr_27244 = state_27233;(statearr_27244[7] = inst_27226);
return statearr_27244;
})();var statearr_27245_27259 = state_27233__$1;(statearr_27245_27259[2] = null);
(statearr_27245_27259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 9))
{var state_27233__$1 = state_27233;var statearr_27246_27260 = state_27233__$1;(statearr_27246_27260[2] = tc);
(statearr_27246_27260[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 10))
{var state_27233__$1 = state_27233;var statearr_27247_27261 = state_27233__$1;(statearr_27247_27261[2] = fc);
(statearr_27247_27261[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27234 === 11))
{var inst_27214 = (state_27233[5]);var inst_27224 = (state_27233[2]);var state_27233__$1 = state_27233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27233__$1,8,inst_27224,inst_27214);
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
var state_machine__5331__auto____0 = (function (){var statearr_27249 = (new Array(8));(statearr_27249[0] = state_machine__5331__auto__);
(statearr_27249[1] = 1);
return statearr_27249;
});
var state_machine__5331__auto____1 = (function (state_27233){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27233);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27233){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27250 = f__5381__auto__.call(null);(statearr_27250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27251);
return statearr_27250;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27304){var state_val_27305 = (state_27304[1]);if((state_val_27305 === 7))
{var inst_27300 = (state_27304[2]);var state_27304__$1 = state_27304;var statearr_27306_27318 = state_27304__$1;(statearr_27306_27318[2] = inst_27300);
(statearr_27306_27318[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27305 === 6))
{var inst_27290 = (state_27304[5]);var inst_27293 = (state_27304[6]);var inst_27297 = f.call(null,inst_27290,inst_27293);var inst_27290__$1 = inst_27297;var state_27304__$1 = (function (){var statearr_27307 = state_27304;(statearr_27307[5] = inst_27290__$1);
return statearr_27307;
})();var statearr_27308_27319 = state_27304__$1;(statearr_27308_27319[2] = null);
(statearr_27308_27319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27305 === 5))
{var inst_27290 = (state_27304[5]);var state_27304__$1 = state_27304;var statearr_27309_27320 = state_27304__$1;(statearr_27309_27320[2] = inst_27290);
(statearr_27309_27320[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27305 === 4))
{var inst_27293 = (state_27304[6]);var inst_27293__$1 = (state_27304[2]);var inst_27294 = (inst_27293__$1 == null);var state_27304__$1 = (function (){var statearr_27310 = state_27304;(statearr_27310[6] = inst_27293__$1);
return statearr_27310;
})();if(cljs.core.truth_(inst_27294))
{var statearr_27311_27321 = state_27304__$1;(statearr_27311_27321[1] = 5);
} else
{var statearr_27312_27322 = state_27304__$1;(statearr_27312_27322[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27305 === 3))
{var inst_27302 = (state_27304[2]);var state_27304__$1 = state_27304;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27304__$1,inst_27302);
} else
{if((state_val_27305 === 2))
{var state_27304__$1 = state_27304;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27304__$1,4,ch);
} else
{if((state_val_27305 === 1))
{var inst_27290 = init;var state_27304__$1 = (function (){var statearr_27313 = state_27304;(statearr_27313[5] = inst_27290);
return statearr_27313;
})();var statearr_27314_27323 = state_27304__$1;(statearr_27314_27323[2] = null);
(statearr_27314_27323[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_27316 = (new Array(7));(statearr_27316[0] = state_machine__5331__auto__);
(statearr_27316[1] = 1);
return statearr_27316;
});
var state_machine__5331__auto____1 = (function (state_27304){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27304);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27304){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27317 = f__5381__auto__.call(null);(statearr_27317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_27317;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27381){var state_val_27382 = (state_27381[1]);if((state_val_27382 === 1))
{var inst_27361 = cljs.core.seq.call(null,coll);var inst_27362 = inst_27361;var state_27381__$1 = (function (){var statearr_27383 = state_27381;(statearr_27383[5] = inst_27362);
return statearr_27383;
})();var statearr_27384_27398 = state_27381__$1;(statearr_27384_27398[2] = null);
(statearr_27384_27398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 2))
{var inst_27362 = (state_27381[5]);var state_27381__$1 = state_27381;if(cljs.core.truth_(inst_27362))
{var statearr_27385_27399 = state_27381__$1;(statearr_27385_27399[1] = 4);
} else
{var statearr_27386_27400 = state_27381__$1;(statearr_27386_27400[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 3))
{var inst_27379 = (state_27381[2]);var state_27381__$1 = state_27381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27381__$1,inst_27379);
} else
{if((state_val_27382 === 4))
{var inst_27362 = (state_27381[5]);var inst_27365 = cljs.core.first.call(null,inst_27362);var state_27381__$1 = state_27381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27381__$1,7,ch,inst_27365);
} else
{if((state_val_27382 === 5))
{var state_27381__$1 = state_27381;if(cljs.core.truth_(close_QMARK_))
{var statearr_27387_27401 = state_27381__$1;(statearr_27387_27401[1] = 8);
} else
{var statearr_27388_27402 = state_27381__$1;(statearr_27388_27402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 6))
{var inst_27377 = (state_27381[2]);var state_27381__$1 = state_27381;var statearr_27389_27403 = state_27381__$1;(statearr_27389_27403[2] = inst_27377);
(statearr_27389_27403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 7))
{var inst_27362 = (state_27381[5]);var inst_27367 = (state_27381[2]);var inst_27368 = cljs.core.next.call(null,inst_27362);var inst_27362__$1 = inst_27368;var state_27381__$1 = (function (){var statearr_27390 = state_27381;(statearr_27390[6] = inst_27367);
(statearr_27390[5] = inst_27362__$1);
return statearr_27390;
})();var statearr_27391_27404 = state_27381__$1;(statearr_27391_27404[2] = null);
(statearr_27391_27404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 8))
{var inst_27372 = cljs.core.async.close_BANG_.call(null,ch);var state_27381__$1 = state_27381;var statearr_27392_27405 = state_27381__$1;(statearr_27392_27405[2] = inst_27372);
(statearr_27392_27405[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 9))
{var state_27381__$1 = state_27381;var statearr_27393_27406 = state_27381__$1;(statearr_27393_27406[2] = null);
(statearr_27393_27406[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27382 === 10))
{var inst_27375 = (state_27381[2]);var state_27381__$1 = state_27381;var statearr_27394_27407 = state_27381__$1;(statearr_27394_27407[2] = inst_27375);
(statearr_27394_27407[1] = 6);
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
var state_machine__5331__auto____0 = (function (){var statearr_27396 = (new Array(7));(statearr_27396[0] = state_machine__5331__auto__);
(statearr_27396[1] = 1);
return statearr_27396;
});
var state_machine__5331__auto____1 = (function (state_27381){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27381);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27381){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27397 = f__5381__auto__.call(null);(statearr_27397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_27397;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27620 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27620 = (function (cs,ch,mult,meta27621){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27621 = meta27621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27620.cljs$lang$type = true;
cljs.core.async.t27620.cljs$lang$ctorStr = "cljs.core.async/t27620";
cljs.core.async.t27620.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t27620");
});})(cs))
;
cljs.core.async.t27620.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27620.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27620.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27620.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27620.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27622){var self__ = this;
var _27622__$1 = this;return self__.meta27621;
});})(cs))
;
cljs.core.async.t27620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27622,meta27621__$1){var self__ = this;
var _27622__$1 = this;return (new cljs.core.async.t27620(self__.cs,self__.ch,self__.mult,meta27621__$1));
});})(cs))
;
cljs.core.async.__GT_t27620 = ((function (cs){
return (function __GT_t27620(cs__$1,ch__$1,mult__$1,meta27621){return (new cljs.core.async.t27620(cs__$1,ch__$1,mult__$1,meta27621));
});})(cs))
;
}
return (new cljs.core.async.t27620(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5380__auto___27832 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_27750){var state_val_27751 = (state_27750[1]);if((state_val_27751 === 32))
{try{var inst_27625 = (state_27750[5]);var inst_27701 = (state_27750[6]);var inst_27707 = cljs.core.async.put_BANG_.call(null,inst_27701,inst_27625,done);var state_27750__$1 = state_27750;var statearr_27754_27833 = state_27750__$1;(statearr_27754_27833[2] = inst_27707);
(statearr_27754_27833[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e27752){if((e27752 instanceof Object))
{var ex__5324__auto__ = e27752;var statearr_27753_27834 = state_27750;(statearr_27753_27834[1] = 31);
(statearr_27753_27834[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27752;
} else
{return null;
}
}
}} else
{if((state_val_27751 === 1))
{var state_27750__$1 = state_27750;var statearr_27755_27835 = state_27750__$1;(statearr_27755_27835[2] = null);
(statearr_27755_27835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 33))
{var inst_27713 = (state_27750[7]);var inst_27715 = cljs.core.chunked_seq_QMARK_.call(null,inst_27713);var state_27750__$1 = state_27750;if(inst_27715)
{var statearr_27756_27836 = state_27750__$1;(statearr_27756_27836[1] = 36);
} else
{var statearr_27757_27837 = state_27750__$1;(statearr_27757_27837[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 2))
{var state_27750__$1 = state_27750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,4,ch);
} else
{if((state_val_27751 === 34))
{var state_27750__$1 = state_27750;var statearr_27758_27838 = state_27750__$1;(statearr_27758_27838[2] = null);
(statearr_27758_27838[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 3))
{var inst_27748 = (state_27750[2]);var state_27750__$1 = state_27750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27750__$1,inst_27748);
} else
{if((state_val_27751 === 35))
{var inst_27737 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27759_27839 = state_27750__$1;(statearr_27759_27839[2] = inst_27737);
(statearr_27759_27839[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 4))
{var inst_27625 = (state_27750[5]);var inst_27625__$1 = (state_27750[2]);var inst_27626 = (inst_27625__$1 == null);var state_27750__$1 = (function (){var statearr_27760 = state_27750;(statearr_27760[5] = inst_27625__$1);
return statearr_27760;
})();if(cljs.core.truth_(inst_27626))
{var statearr_27761_27840 = state_27750__$1;(statearr_27761_27840[1] = 5);
} else
{var statearr_27762_27841 = state_27750__$1;(statearr_27762_27841[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 36))
{var inst_27713 = (state_27750[7]);var inst_27717 = cljs.core.chunk_first.call(null,inst_27713);var inst_27718 = cljs.core.chunk_rest.call(null,inst_27713);var inst_27719 = cljs.core.count.call(null,inst_27717);var inst_27693 = inst_27718;var inst_27694 = inst_27717;var inst_27695 = inst_27719;var inst_27696 = 0;var state_27750__$1 = (function (){var statearr_27763 = state_27750;(statearr_27763[8] = inst_27695);
(statearr_27763[9] = inst_27696);
(statearr_27763[10] = inst_27694);
(statearr_27763[11] = inst_27693);
return statearr_27763;
})();var statearr_27764_27842 = state_27750__$1;(statearr_27764_27842[2] = null);
(statearr_27764_27842[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 5))
{var inst_27632 = cljs.core.deref.call(null,cs);var inst_27633 = cljs.core.seq.call(null,inst_27632);var inst_27634 = inst_27633;var inst_27635 = null;var inst_27636 = 0;var inst_27637 = 0;var state_27750__$1 = (function (){var statearr_27765 = state_27750;(statearr_27765[12] = inst_27637);
(statearr_27765[13] = inst_27636);
(statearr_27765[14] = inst_27635);
(statearr_27765[15] = inst_27634);
return statearr_27765;
})();var statearr_27766_27843 = state_27750__$1;(statearr_27766_27843[2] = null);
(statearr_27766_27843[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 37))
{var inst_27713 = (state_27750[7]);var inst_27722 = cljs.core.first.call(null,inst_27713);var state_27750__$1 = (function (){var statearr_27767 = state_27750;(statearr_27767[16] = inst_27722);
return statearr_27767;
})();var statearr_27768_27844 = state_27750__$1;(statearr_27768_27844[2] = null);
(statearr_27768_27844[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 6))
{var inst_27684 = cljs.core.deref.call(null,cs);var inst_27685 = cljs.core.keys.call(null,inst_27684);var inst_27686 = cljs.core.count.call(null,inst_27685);var inst_27687 = cljs.core.reset_BANG_.call(null,dctr,inst_27686);var inst_27692 = cljs.core.seq.call(null,inst_27685);var inst_27693 = inst_27692;var inst_27694 = null;var inst_27695 = 0;var inst_27696 = 0;var state_27750__$1 = (function (){var statearr_27769 = state_27750;(statearr_27769[17] = inst_27687);
(statearr_27769[8] = inst_27695);
(statearr_27769[9] = inst_27696);
(statearr_27769[10] = inst_27694);
(statearr_27769[11] = inst_27693);
return statearr_27769;
})();var statearr_27770_27845 = state_27750__$1;(statearr_27770_27845[2] = null);
(statearr_27770_27845[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 38))
{var inst_27734 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27771_27846 = state_27750__$1;(statearr_27771_27846[2] = inst_27734);
(statearr_27771_27846[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 7))
{var inst_27746 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27772_27847 = state_27750__$1;(statearr_27772_27847[2] = inst_27746);
(statearr_27772_27847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 39))
{var inst_27713 = (state_27750[7]);var inst_27730 = (state_27750[2]);var inst_27731 = cljs.core.next.call(null,inst_27713);var inst_27693 = inst_27731;var inst_27694 = null;var inst_27695 = 0;var inst_27696 = 0;var state_27750__$1 = (function (){var statearr_27773 = state_27750;(statearr_27773[18] = inst_27730);
(statearr_27773[8] = inst_27695);
(statearr_27773[9] = inst_27696);
(statearr_27773[10] = inst_27694);
(statearr_27773[11] = inst_27693);
return statearr_27773;
})();var statearr_27774_27848 = state_27750__$1;(statearr_27774_27848[2] = null);
(statearr_27774_27848[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 8))
{var inst_27637 = (state_27750[12]);var inst_27636 = (state_27750[13]);var inst_27639 = (inst_27637 < inst_27636);var inst_27640 = inst_27639;var state_27750__$1 = state_27750;if(cljs.core.truth_(inst_27640))
{var statearr_27775_27849 = state_27750__$1;(statearr_27775_27849[1] = 10);
} else
{var statearr_27776_27850 = state_27750__$1;(statearr_27776_27850[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 40))
{var inst_27722 = (state_27750[16]);var inst_27723 = (state_27750[2]);var inst_27724 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27725 = cljs.core.async.untap_STAR_.call(null,m,inst_27722);var state_27750__$1 = (function (){var statearr_27777 = state_27750;(statearr_27777[19] = inst_27724);
(statearr_27777[20] = inst_27723);
return statearr_27777;
})();var statearr_27778_27851 = state_27750__$1;(statearr_27778_27851[2] = inst_27725);
(statearr_27778_27851[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 9))
{var inst_27682 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27779_27852 = state_27750__$1;(statearr_27779_27852[2] = inst_27682);
(statearr_27779_27852[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 41))
{try{var inst_27722 = (state_27750[16]);var inst_27625 = (state_27750[5]);var inst_27728 = cljs.core.async.put_BANG_.call(null,inst_27722,inst_27625,done);var state_27750__$1 = state_27750;var statearr_27782_27853 = state_27750__$1;(statearr_27782_27853[2] = inst_27728);
(statearr_27782_27853[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e27780){if((e27780 instanceof Object))
{var ex__5324__auto__ = e27780;var statearr_27781_27854 = state_27750;(statearr_27781_27854[1] = 40);
(statearr_27781_27854[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27780;
} else
{return null;
}
}
}} else
{if((state_val_27751 === 10))
{var inst_27637 = (state_27750[12]);var inst_27635 = (state_27750[14]);var inst_27643 = cljs.core._nth.call(null,inst_27635,inst_27637);var inst_27644 = cljs.core.nth.call(null,inst_27643,0,null);var inst_27645 = cljs.core.nth.call(null,inst_27643,1,null);var state_27750__$1 = (function (){var statearr_27783 = state_27750;(statearr_27783[21] = inst_27644);
return statearr_27783;
})();if(cljs.core.truth_(inst_27645))
{var statearr_27784_27855 = state_27750__$1;(statearr_27784_27855[1] = 13);
} else
{var statearr_27785_27856 = state_27750__$1;(statearr_27785_27856[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 42))
{var inst_27743 = (state_27750[2]);var state_27750__$1 = (function (){var statearr_27786 = state_27750;(statearr_27786[22] = inst_27743);
return statearr_27786;
})();var statearr_27787_27857 = state_27750__$1;(statearr_27787_27857[2] = null);
(statearr_27787_27857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 11))
{var inst_27634 = (state_27750[15]);var inst_27654 = (state_27750[23]);var inst_27654__$1 = cljs.core.seq.call(null,inst_27634);var state_27750__$1 = (function (){var statearr_27788 = state_27750;(statearr_27788[23] = inst_27654__$1);
return statearr_27788;
})();if(inst_27654__$1)
{var statearr_27789_27858 = state_27750__$1;(statearr_27789_27858[1] = 16);
} else
{var statearr_27790_27859 = state_27750__$1;(statearr_27790_27859[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 12))
{var inst_27680 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27791_27860 = state_27750__$1;(statearr_27791_27860[2] = inst_27680);
(statearr_27791_27860[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 13))
{var inst_27644 = (state_27750[21]);var inst_27647 = cljs.core.async.close_BANG_.call(null,inst_27644);var state_27750__$1 = state_27750;var statearr_27795_27861 = state_27750__$1;(statearr_27795_27861[2] = inst_27647);
(statearr_27795_27861[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 14))
{var state_27750__$1 = state_27750;var statearr_27796_27862 = state_27750__$1;(statearr_27796_27862[2] = null);
(statearr_27796_27862[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 15))
{var inst_27637 = (state_27750[12]);var inst_27636 = (state_27750[13]);var inst_27635 = (state_27750[14]);var inst_27634 = (state_27750[15]);var inst_27650 = (state_27750[2]);var inst_27651 = (inst_27637 + 1);var tmp27792 = inst_27636;var tmp27793 = inst_27635;var tmp27794 = inst_27634;var inst_27634__$1 = tmp27794;var inst_27635__$1 = tmp27793;var inst_27636__$1 = tmp27792;var inst_27637__$1 = inst_27651;var state_27750__$1 = (function (){var statearr_27797 = state_27750;(statearr_27797[12] = inst_27637__$1);
(statearr_27797[13] = inst_27636__$1);
(statearr_27797[14] = inst_27635__$1);
(statearr_27797[15] = inst_27634__$1);
(statearr_27797[24] = inst_27650);
return statearr_27797;
})();var statearr_27798_27863 = state_27750__$1;(statearr_27798_27863[2] = null);
(statearr_27798_27863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 16))
{var inst_27654 = (state_27750[23]);var inst_27656 = cljs.core.chunked_seq_QMARK_.call(null,inst_27654);var state_27750__$1 = state_27750;if(inst_27656)
{var statearr_27799_27864 = state_27750__$1;(statearr_27799_27864[1] = 19);
} else
{var statearr_27800_27865 = state_27750__$1;(statearr_27800_27865[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 17))
{var state_27750__$1 = state_27750;var statearr_27801_27866 = state_27750__$1;(statearr_27801_27866[2] = null);
(statearr_27801_27866[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 18))
{var inst_27678 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27802_27867 = state_27750__$1;(statearr_27802_27867[2] = inst_27678);
(statearr_27802_27867[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 19))
{var inst_27654 = (state_27750[23]);var inst_27658 = cljs.core.chunk_first.call(null,inst_27654);var inst_27659 = cljs.core.chunk_rest.call(null,inst_27654);var inst_27660 = cljs.core.count.call(null,inst_27658);var inst_27634 = inst_27659;var inst_27635 = inst_27658;var inst_27636 = inst_27660;var inst_27637 = 0;var state_27750__$1 = (function (){var statearr_27803 = state_27750;(statearr_27803[12] = inst_27637);
(statearr_27803[13] = inst_27636);
(statearr_27803[14] = inst_27635);
(statearr_27803[15] = inst_27634);
return statearr_27803;
})();var statearr_27804_27868 = state_27750__$1;(statearr_27804_27868[2] = null);
(statearr_27804_27868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 20))
{var inst_27654 = (state_27750[23]);var inst_27664 = cljs.core.first.call(null,inst_27654);var inst_27665 = cljs.core.nth.call(null,inst_27664,0,null);var inst_27666 = cljs.core.nth.call(null,inst_27664,1,null);var state_27750__$1 = (function (){var statearr_27805 = state_27750;(statearr_27805[25] = inst_27665);
return statearr_27805;
})();if(cljs.core.truth_(inst_27666))
{var statearr_27806_27869 = state_27750__$1;(statearr_27806_27869[1] = 22);
} else
{var statearr_27807_27870 = state_27750__$1;(statearr_27807_27870[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 21))
{var inst_27675 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27808_27871 = state_27750__$1;(statearr_27808_27871[2] = inst_27675);
(statearr_27808_27871[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 22))
{var inst_27665 = (state_27750[25]);var inst_27668 = cljs.core.async.close_BANG_.call(null,inst_27665);var state_27750__$1 = state_27750;var statearr_27809_27872 = state_27750__$1;(statearr_27809_27872[2] = inst_27668);
(statearr_27809_27872[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 23))
{var state_27750__$1 = state_27750;var statearr_27810_27873 = state_27750__$1;(statearr_27810_27873[2] = null);
(statearr_27810_27873[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 24))
{var inst_27654 = (state_27750[23]);var inst_27671 = (state_27750[2]);var inst_27672 = cljs.core.next.call(null,inst_27654);var inst_27634 = inst_27672;var inst_27635 = null;var inst_27636 = 0;var inst_27637 = 0;var state_27750__$1 = (function (){var statearr_27811 = state_27750;(statearr_27811[12] = inst_27637);
(statearr_27811[26] = inst_27671);
(statearr_27811[13] = inst_27636);
(statearr_27811[14] = inst_27635);
(statearr_27811[15] = inst_27634);
return statearr_27811;
})();var statearr_27812_27874 = state_27750__$1;(statearr_27812_27874[2] = null);
(statearr_27812_27874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 25))
{var inst_27695 = (state_27750[8]);var inst_27696 = (state_27750[9]);var inst_27698 = (inst_27696 < inst_27695);var inst_27699 = inst_27698;var state_27750__$1 = state_27750;if(cljs.core.truth_(inst_27699))
{var statearr_27813_27875 = state_27750__$1;(statearr_27813_27875[1] = 27);
} else
{var statearr_27814_27876 = state_27750__$1;(statearr_27814_27876[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 26))
{var inst_27741 = (state_27750[2]);var state_27750__$1 = (function (){var statearr_27815 = state_27750;(statearr_27815[27] = inst_27741);
return statearr_27815;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,42,dchan);
} else
{if((state_val_27751 === 27))
{var inst_27696 = (state_27750[9]);var inst_27694 = (state_27750[10]);var inst_27701 = cljs.core._nth.call(null,inst_27694,inst_27696);var state_27750__$1 = (function (){var statearr_27816 = state_27750;(statearr_27816[6] = inst_27701);
return statearr_27816;
})();var statearr_27817_27877 = state_27750__$1;(statearr_27817_27877[2] = null);
(statearr_27817_27877[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 28))
{var inst_27713 = (state_27750[7]);var inst_27693 = (state_27750[11]);var inst_27713__$1 = cljs.core.seq.call(null,inst_27693);var state_27750__$1 = (function (){var statearr_27821 = state_27750;(statearr_27821[7] = inst_27713__$1);
return statearr_27821;
})();if(inst_27713__$1)
{var statearr_27822_27878 = state_27750__$1;(statearr_27822_27878[1] = 33);
} else
{var statearr_27823_27879 = state_27750__$1;(statearr_27823_27879[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 29))
{var inst_27739 = (state_27750[2]);var state_27750__$1 = state_27750;var statearr_27824_27880 = state_27750__$1;(statearr_27824_27880[2] = inst_27739);
(statearr_27824_27880[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 30))
{var inst_27695 = (state_27750[8]);var inst_27696 = (state_27750[9]);var inst_27694 = (state_27750[10]);var inst_27693 = (state_27750[11]);var inst_27709 = (state_27750[2]);var inst_27710 = (inst_27696 + 1);var tmp27818 = inst_27695;var tmp27819 = inst_27694;var tmp27820 = inst_27693;var inst_27693__$1 = tmp27820;var inst_27694__$1 = tmp27819;var inst_27695__$1 = tmp27818;var inst_27696__$1 = inst_27710;var state_27750__$1 = (function (){var statearr_27825 = state_27750;(statearr_27825[8] = inst_27695__$1);
(statearr_27825[28] = inst_27709);
(statearr_27825[9] = inst_27696__$1);
(statearr_27825[10] = inst_27694__$1);
(statearr_27825[11] = inst_27693__$1);
return statearr_27825;
})();var statearr_27826_27881 = state_27750__$1;(statearr_27826_27881[2] = null);
(statearr_27826_27881[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27751 === 31))
{var inst_27701 = (state_27750[6]);var inst_27702 = (state_27750[2]);var inst_27703 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27704 = cljs.core.async.untap_STAR_.call(null,m,inst_27701);var state_27750__$1 = (function (){var statearr_27827 = state_27750;(statearr_27827[29] = inst_27703);
(statearr_27827[30] = inst_27702);
return statearr_27827;
})();var statearr_27828_27882 = state_27750__$1;(statearr_27828_27882[2] = inst_27704);
(statearr_27828_27882[1] = 30);
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
var state_machine__5331__auto____0 = (function (){var statearr_27830 = (new Array(31));(statearr_27830[0] = state_machine__5331__auto__);
(statearr_27830[1] = 1);
return statearr_27830;
});
var state_machine__5331__auto____1 = (function (state_27750){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_27750);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_27750){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_27750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_27831 = f__5381__auto__.call(null);(statearr_27831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___27832);
return statearr_27831;
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
;var m = (function (){if(typeof cljs.core.async.t27988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27988 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27989){
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
this.meta27989 = meta27989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27988.cljs$lang$type = true;
cljs.core.async.t27988.cljs$lang$ctorStr = "cljs.core.async/t27988";
cljs.core.async.t27988.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t27988");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27988.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27990){var self__ = this;
var _27990__$1 = this;return self__.meta27989;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27990,meta27989__$1){var self__ = this;
var _27990__$1 = this;return (new cljs.core.async.t27988(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27989__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27988 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27988(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27989){return (new cljs.core.async.t27988(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27989));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27988(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5380__auto___28093 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28055){var state_val_28056 = (state_28055[1]);if((state_val_28056 === 1))
{var inst_27994 = (state_28055[5]);var inst_27994__$1 = calc_state.call(null);var inst_27995 = cljs.core.seq_QMARK_.call(null,inst_27994__$1);var state_28055__$1 = (function (){var statearr_28057 = state_28055;(statearr_28057[5] = inst_27994__$1);
return statearr_28057;
})();if(inst_27995)
{var statearr_28058_28094 = state_28055__$1;(statearr_28058_28094[1] = 2);
} else
{var statearr_28059_28095 = state_28055__$1;(statearr_28059_28095[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 2))
{var inst_27994 = (state_28055[5]);var inst_27997 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27994);var state_28055__$1 = state_28055;var statearr_28060_28096 = state_28055__$1;(statearr_28060_28096[2] = inst_27997);
(statearr_28060_28096[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 3))
{var inst_27994 = (state_28055[5]);var state_28055__$1 = state_28055;var statearr_28061_28097 = state_28055__$1;(statearr_28061_28097[2] = inst_27994);
(statearr_28061_28097[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 4))
{var inst_27994 = (state_28055[5]);var inst_28000 = (state_28055[2]);var inst_28001 = cljs.core.get.call(null,inst_28000,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_28002 = cljs.core.get.call(null,inst_28000,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_28003 = cljs.core.get.call(null,inst_28000,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_28004 = inst_27994;var state_28055__$1 = (function (){var statearr_28062 = state_28055;(statearr_28062[6] = inst_28003);
(statearr_28062[7] = inst_28004);
(statearr_28062[8] = inst_28002);
(statearr_28062[9] = inst_28001);
return statearr_28062;
})();var statearr_28063_28098 = state_28055__$1;(statearr_28063_28098[2] = null);
(statearr_28063_28098[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 5))
{var inst_28004 = (state_28055[7]);var inst_28007 = cljs.core.seq_QMARK_.call(null,inst_28004);var state_28055__$1 = state_28055;if(inst_28007)
{var statearr_28064_28099 = state_28055__$1;(statearr_28064_28099[1] = 7);
} else
{var statearr_28065_28100 = state_28055__$1;(statearr_28065_28100[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 6))
{var inst_28053 = (state_28055[2]);var state_28055__$1 = state_28055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28055__$1,inst_28053);
} else
{if((state_val_28056 === 7))
{var inst_28004 = (state_28055[7]);var inst_28009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28004);var state_28055__$1 = state_28055;var statearr_28066_28101 = state_28055__$1;(statearr_28066_28101[2] = inst_28009);
(statearr_28066_28101[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 8))
{var inst_28004 = (state_28055[7]);var state_28055__$1 = state_28055;var statearr_28067_28102 = state_28055__$1;(statearr_28067_28102[2] = inst_28004);
(statearr_28067_28102[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 9))
{var inst_28012 = (state_28055[10]);var inst_28012__$1 = (state_28055[2]);var inst_28013 = cljs.core.get.call(null,inst_28012__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_28014 = cljs.core.get.call(null,inst_28012__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_28015 = cljs.core.get.call(null,inst_28012__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_28055__$1 = (function (){var statearr_28068 = state_28055;(statearr_28068[11] = inst_28014);
(statearr_28068[12] = inst_28015);
(statearr_28068[10] = inst_28012__$1);
return statearr_28068;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28055__$1,10,inst_28013);
} else
{if((state_val_28056 === 10))
{var inst_28019 = (state_28055[13]);var inst_28020 = (state_28055[14]);var inst_28018 = (state_28055[2]);var inst_28019__$1 = cljs.core.nth.call(null,inst_28018,0,null);var inst_28020__$1 = cljs.core.nth.call(null,inst_28018,1,null);var inst_28021 = (inst_28019__$1 == null);var inst_28022 = cljs.core._EQ_.call(null,inst_28020__$1,change);var inst_28023 = (inst_28021) || (inst_28022);var state_28055__$1 = (function (){var statearr_28069 = state_28055;(statearr_28069[13] = inst_28019__$1);
(statearr_28069[14] = inst_28020__$1);
return statearr_28069;
})();if(cljs.core.truth_(inst_28023))
{var statearr_28070_28103 = state_28055__$1;(statearr_28070_28103[1] = 11);
} else
{var statearr_28071_28104 = state_28055__$1;(statearr_28071_28104[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 11))
{var inst_28019 = (state_28055[13]);var inst_28025 = (inst_28019 == null);var state_28055__$1 = state_28055;if(cljs.core.truth_(inst_28025))
{var statearr_28072_28105 = state_28055__$1;(statearr_28072_28105[1] = 14);
} else
{var statearr_28073_28106 = state_28055__$1;(statearr_28073_28106[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 12))
{var inst_28015 = (state_28055[12]);var inst_28020 = (state_28055[14]);var inst_28034 = (state_28055[15]);var inst_28034__$1 = inst_28015.call(null,inst_28020);var state_28055__$1 = (function (){var statearr_28074 = state_28055;(statearr_28074[15] = inst_28034__$1);
return statearr_28074;
})();if(cljs.core.truth_(inst_28034__$1))
{var statearr_28075_28107 = state_28055__$1;(statearr_28075_28107[1] = 17);
} else
{var statearr_28076_28108 = state_28055__$1;(statearr_28076_28108[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 13))
{var inst_28051 = (state_28055[2]);var state_28055__$1 = state_28055;var statearr_28077_28109 = state_28055__$1;(statearr_28077_28109[2] = inst_28051);
(statearr_28077_28109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 14))
{var inst_28020 = (state_28055[14]);var inst_28027 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28020);var state_28055__$1 = state_28055;var statearr_28078_28110 = state_28055__$1;(statearr_28078_28110[2] = inst_28027);
(statearr_28078_28110[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 15))
{var state_28055__$1 = state_28055;var statearr_28079_28111 = state_28055__$1;(statearr_28079_28111[2] = null);
(statearr_28079_28111[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 16))
{var inst_28030 = (state_28055[2]);var inst_28031 = calc_state.call(null);var inst_28004 = inst_28031;var state_28055__$1 = (function (){var statearr_28080 = state_28055;(statearr_28080[16] = inst_28030);
(statearr_28080[7] = inst_28004);
return statearr_28080;
})();var statearr_28081_28112 = state_28055__$1;(statearr_28081_28112[2] = null);
(statearr_28081_28112[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 17))
{var inst_28034 = (state_28055[15]);var state_28055__$1 = state_28055;var statearr_28082_28113 = state_28055__$1;(statearr_28082_28113[2] = inst_28034);
(statearr_28082_28113[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 18))
{var inst_28014 = (state_28055[11]);var inst_28015 = (state_28055[12]);var inst_28020 = (state_28055[14]);var inst_28037 = cljs.core.empty_QMARK_.call(null,inst_28015);var inst_28038 = inst_28014.call(null,inst_28020);var inst_28039 = cljs.core.not.call(null,inst_28038);var inst_28040 = (inst_28037) && (inst_28039);var state_28055__$1 = state_28055;var statearr_28083_28114 = state_28055__$1;(statearr_28083_28114[2] = inst_28040);
(statearr_28083_28114[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 19))
{var inst_28042 = (state_28055[2]);var state_28055__$1 = state_28055;if(cljs.core.truth_(inst_28042))
{var statearr_28084_28115 = state_28055__$1;(statearr_28084_28115[1] = 20);
} else
{var statearr_28085_28116 = state_28055__$1;(statearr_28085_28116[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 20))
{var inst_28019 = (state_28055[13]);var state_28055__$1 = state_28055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28055__$1,23,out,inst_28019);
} else
{if((state_val_28056 === 21))
{var state_28055__$1 = state_28055;var statearr_28086_28117 = state_28055__$1;(statearr_28086_28117[2] = null);
(statearr_28086_28117[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 22))
{var inst_28012 = (state_28055[10]);var inst_28048 = (state_28055[2]);var inst_28004 = inst_28012;var state_28055__$1 = (function (){var statearr_28087 = state_28055;(statearr_28087[17] = inst_28048);
(statearr_28087[7] = inst_28004);
return statearr_28087;
})();var statearr_28088_28118 = state_28055__$1;(statearr_28088_28118[2] = null);
(statearr_28088_28118[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28056 === 23))
{var inst_28045 = (state_28055[2]);var state_28055__$1 = state_28055;var statearr_28089_28119 = state_28055__$1;(statearr_28089_28119[2] = inst_28045);
(statearr_28089_28119[1] = 22);
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
var state_machine__5331__auto____0 = (function (){var statearr_28091 = (new Array(18));(statearr_28091[0] = state_machine__5331__auto__);
(statearr_28091[1] = 1);
return statearr_28091;
});
var state_machine__5331__auto____1 = (function (state_28055){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28055);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28055){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28092 = f__5381__auto__.call(null);(statearr_28092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28093);
return statearr_28092;
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
return (function (p1__28120_SHARP_){if(cljs.core.truth_(p1__28120_SHARP_.call(null,topic)))
{return p1__28120_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28120_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28244 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28245){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28245 = meta28245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28244.cljs$lang$type = true;
cljs.core.async.t28244.cljs$lang$ctorStr = "cljs.core.async/t28244";
cljs.core.async.t28244.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t28244");
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28244.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28246){var self__ = this;
var _28246__$1 = this;return self__.meta28245;
});})(mults,ensure_mult))
;
cljs.core.async.t28244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28246,meta28245__$1){var self__ = this;
var _28246__$1 = this;return (new cljs.core.async.t28244(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28245__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28244 = ((function (mults,ensure_mult){
return (function __GT_t28244(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28245){return (new cljs.core.async.t28244(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28245));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28244(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5380__auto___28367 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28319){var state_val_28320 = (state_28319[1]);if((state_val_28320 === 1))
{var state_28319__$1 = state_28319;var statearr_28321_28368 = state_28319__$1;(statearr_28321_28368[2] = null);
(statearr_28321_28368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 2))
{var state_28319__$1 = state_28319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28319__$1,4,ch);
} else
{if((state_val_28320 === 3))
{var inst_28317 = (state_28319[2]);var state_28319__$1 = state_28319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28319__$1,inst_28317);
} else
{if((state_val_28320 === 4))
{var inst_28249 = (state_28319[5]);var inst_28249__$1 = (state_28319[2]);var inst_28250 = (inst_28249__$1 == null);var state_28319__$1 = (function (){var statearr_28322 = state_28319;(statearr_28322[5] = inst_28249__$1);
return statearr_28322;
})();if(cljs.core.truth_(inst_28250))
{var statearr_28323_28369 = state_28319__$1;(statearr_28323_28369[1] = 5);
} else
{var statearr_28324_28370 = state_28319__$1;(statearr_28324_28370[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 5))
{var inst_28256 = cljs.core.deref.call(null,mults);var inst_28257 = cljs.core.vals.call(null,inst_28256);var inst_28258 = cljs.core.seq.call(null,inst_28257);var inst_28259 = inst_28258;var inst_28260 = null;var inst_28261 = 0;var inst_28262 = 0;var state_28319__$1 = (function (){var statearr_28325 = state_28319;(statearr_28325[6] = inst_28260);
(statearr_28325[7] = inst_28259);
(statearr_28325[8] = inst_28261);
(statearr_28325[9] = inst_28262);
return statearr_28325;
})();var statearr_28326_28371 = state_28319__$1;(statearr_28326_28371[2] = null);
(statearr_28326_28371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 6))
{var inst_28297 = (state_28319[10]);var inst_28299 = (state_28319[11]);var inst_28249 = (state_28319[5]);var inst_28297__$1 = topic_fn.call(null,inst_28249);var inst_28298 = cljs.core.deref.call(null,mults);var inst_28299__$1 = cljs.core.get.call(null,inst_28298,inst_28297__$1);var state_28319__$1 = (function (){var statearr_28327 = state_28319;(statearr_28327[10] = inst_28297__$1);
(statearr_28327[11] = inst_28299__$1);
return statearr_28327;
})();if(cljs.core.truth_(inst_28299__$1))
{var statearr_28328_28372 = state_28319__$1;(statearr_28328_28372[1] = 19);
} else
{var statearr_28329_28373 = state_28319__$1;(statearr_28329_28373[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 7))
{var inst_28315 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28330_28374 = state_28319__$1;(statearr_28330_28374[2] = inst_28315);
(statearr_28330_28374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 8))
{var inst_28261 = (state_28319[8]);var inst_28262 = (state_28319[9]);var inst_28264 = (inst_28262 < inst_28261);var inst_28265 = inst_28264;var state_28319__$1 = state_28319;if(cljs.core.truth_(inst_28265))
{var statearr_28334_28375 = state_28319__$1;(statearr_28334_28375[1] = 10);
} else
{var statearr_28335_28376 = state_28319__$1;(statearr_28335_28376[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 9))
{var inst_28295 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28336_28377 = state_28319__$1;(statearr_28336_28377[2] = inst_28295);
(statearr_28336_28377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 10))
{var inst_28260 = (state_28319[6]);var inst_28259 = (state_28319[7]);var inst_28261 = (state_28319[8]);var inst_28262 = (state_28319[9]);var inst_28267 = cljs.core._nth.call(null,inst_28260,inst_28262);var inst_28268 = cljs.core.async.muxch_STAR_.call(null,inst_28267);var inst_28269 = cljs.core.async.close_BANG_.call(null,inst_28268);var inst_28270 = (inst_28262 + 1);var tmp28331 = inst_28260;var tmp28332 = inst_28259;var tmp28333 = inst_28261;var inst_28259__$1 = tmp28332;var inst_28260__$1 = tmp28331;var inst_28261__$1 = tmp28333;var inst_28262__$1 = inst_28270;var state_28319__$1 = (function (){var statearr_28337 = state_28319;(statearr_28337[6] = inst_28260__$1);
(statearr_28337[7] = inst_28259__$1);
(statearr_28337[8] = inst_28261__$1);
(statearr_28337[9] = inst_28262__$1);
(statearr_28337[12] = inst_28269);
return statearr_28337;
})();var statearr_28338_28378 = state_28319__$1;(statearr_28338_28378[2] = null);
(statearr_28338_28378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 11))
{var inst_28273 = (state_28319[13]);var inst_28259 = (state_28319[7]);var inst_28273__$1 = cljs.core.seq.call(null,inst_28259);var state_28319__$1 = (function (){var statearr_28339 = state_28319;(statearr_28339[13] = inst_28273__$1);
return statearr_28339;
})();if(inst_28273__$1)
{var statearr_28340_28379 = state_28319__$1;(statearr_28340_28379[1] = 13);
} else
{var statearr_28341_28380 = state_28319__$1;(statearr_28341_28380[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 12))
{var inst_28293 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28342_28381 = state_28319__$1;(statearr_28342_28381[2] = inst_28293);
(statearr_28342_28381[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 13))
{var inst_28273 = (state_28319[13]);var inst_28275 = cljs.core.chunked_seq_QMARK_.call(null,inst_28273);var state_28319__$1 = state_28319;if(inst_28275)
{var statearr_28343_28382 = state_28319__$1;(statearr_28343_28382[1] = 16);
} else
{var statearr_28344_28383 = state_28319__$1;(statearr_28344_28383[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 14))
{var state_28319__$1 = state_28319;var statearr_28345_28384 = state_28319__$1;(statearr_28345_28384[2] = null);
(statearr_28345_28384[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 15))
{var inst_28291 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28346_28385 = state_28319__$1;(statearr_28346_28385[2] = inst_28291);
(statearr_28346_28385[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 16))
{var inst_28273 = (state_28319[13]);var inst_28277 = cljs.core.chunk_first.call(null,inst_28273);var inst_28278 = cljs.core.chunk_rest.call(null,inst_28273);var inst_28279 = cljs.core.count.call(null,inst_28277);var inst_28259 = inst_28278;var inst_28260 = inst_28277;var inst_28261 = inst_28279;var inst_28262 = 0;var state_28319__$1 = (function (){var statearr_28347 = state_28319;(statearr_28347[6] = inst_28260);
(statearr_28347[7] = inst_28259);
(statearr_28347[8] = inst_28261);
(statearr_28347[9] = inst_28262);
return statearr_28347;
})();var statearr_28348_28386 = state_28319__$1;(statearr_28348_28386[2] = null);
(statearr_28348_28386[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 17))
{var inst_28273 = (state_28319[13]);var inst_28282 = cljs.core.first.call(null,inst_28273);var inst_28283 = cljs.core.async.muxch_STAR_.call(null,inst_28282);var inst_28284 = cljs.core.async.close_BANG_.call(null,inst_28283);var inst_28285 = cljs.core.next.call(null,inst_28273);var inst_28259 = inst_28285;var inst_28260 = null;var inst_28261 = 0;var inst_28262 = 0;var state_28319__$1 = (function (){var statearr_28349 = state_28319;(statearr_28349[6] = inst_28260);
(statearr_28349[7] = inst_28259);
(statearr_28349[8] = inst_28261);
(statearr_28349[9] = inst_28262);
(statearr_28349[14] = inst_28284);
return statearr_28349;
})();var statearr_28350_28387 = state_28319__$1;(statearr_28350_28387[2] = null);
(statearr_28350_28387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 18))
{var inst_28288 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28351_28388 = state_28319__$1;(statearr_28351_28388[2] = inst_28288);
(statearr_28351_28388[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 19))
{var state_28319__$1 = state_28319;var statearr_28352_28389 = state_28319__$1;(statearr_28352_28389[2] = null);
(statearr_28352_28389[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 20))
{var state_28319__$1 = state_28319;var statearr_28353_28390 = state_28319__$1;(statearr_28353_28390[2] = null);
(statearr_28353_28390[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 21))
{var inst_28312 = (state_28319[2]);var state_28319__$1 = (function (){var statearr_28354 = state_28319;(statearr_28354[15] = inst_28312);
return statearr_28354;
})();var statearr_28355_28391 = state_28319__$1;(statearr_28355_28391[2] = null);
(statearr_28355_28391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 22))
{var inst_28309 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28356_28392 = state_28319__$1;(statearr_28356_28392[2] = inst_28309);
(statearr_28356_28392[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 23))
{var inst_28297 = (state_28319[10]);var inst_28301 = (state_28319[2]);var inst_28302 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28297);var state_28319__$1 = (function (){var statearr_28357 = state_28319;(statearr_28357[16] = inst_28301);
return statearr_28357;
})();var statearr_28358_28393 = state_28319__$1;(statearr_28358_28393[2] = inst_28302);
(statearr_28358_28393[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28320 === 24))
{try{var inst_28299 = (state_28319[11]);var inst_28249 = (state_28319[5]);var inst_28305 = cljs.core.async.muxch_STAR_.call(null,inst_28299);var state_28319__$1 = state_28319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28319__$1,25,inst_28305,inst_28249);
}catch (e28359){if((e28359 instanceof Object))
{var ex__5324__auto__ = e28359;var statearr_28360_28394 = state_28319;(statearr_28360_28394[1] = 23);
(statearr_28360_28394[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28359;
} else
{return null;
}
}
}} else
{if((state_val_28320 === 25))
{try{var inst_28307 = (state_28319[2]);var state_28319__$1 = state_28319;var statearr_28363_28395 = state_28319__$1;(statearr_28363_28395[2] = inst_28307);
(statearr_28363_28395[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e28361){if((e28361 instanceof Object))
{var ex__5324__auto__ = e28361;var statearr_28362_28396 = state_28319;(statearr_28362_28396[1] = 23);
(statearr_28362_28396[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28361;
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
var state_machine__5331__auto____0 = (function (){var statearr_28365 = (new Array(17));(statearr_28365[0] = state_machine__5331__auto__);
(statearr_28365[1] = 1);
return statearr_28365;
});
var state_machine__5331__auto____1 = (function (state_28319){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28319){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28366 = f__5381__auto__.call(null);(statearr_28366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28367);
return statearr_28366;
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
,cljs.core.range.call(null,cnt));var c__5380__auto___28527 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28499){var state_val_28500 = (state_28499[1]);if((state_val_28500 === 1))
{var state_28499__$1 = state_28499;var statearr_28501_28528 = state_28499__$1;(statearr_28501_28528[2] = null);
(statearr_28501_28528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 2))
{var inst_28463 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28464 = 0;var state_28499__$1 = (function (){var statearr_28502 = state_28499;(statearr_28502[5] = inst_28464);
(statearr_28502[6] = inst_28463);
return statearr_28502;
})();var statearr_28503_28529 = state_28499__$1;(statearr_28503_28529[2] = null);
(statearr_28503_28529[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 3))
{var inst_28497 = (state_28499[2]);var state_28499__$1 = state_28499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28499__$1,inst_28497);
} else
{if((state_val_28500 === 4))
{var inst_28464 = (state_28499[5]);var inst_28466 = (inst_28464 < cnt);var state_28499__$1 = state_28499;if(cljs.core.truth_(inst_28466))
{var statearr_28504_28530 = state_28499__$1;(statearr_28504_28530[1] = 6);
} else
{var statearr_28505_28531 = state_28499__$1;(statearr_28505_28531[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 5))
{var inst_28483 = (state_28499[2]);var state_28499__$1 = (function (){var statearr_28506 = state_28499;(statearr_28506[7] = inst_28483);
return statearr_28506;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28499__$1,12,dchan);
} else
{if((state_val_28500 === 6))
{var state_28499__$1 = state_28499;var statearr_28507_28532 = state_28499__$1;(statearr_28507_28532[2] = null);
(statearr_28507_28532[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 7))
{var state_28499__$1 = state_28499;var statearr_28508_28533 = state_28499__$1;(statearr_28508_28533[2] = null);
(statearr_28508_28533[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 8))
{var inst_28481 = (state_28499[2]);var state_28499__$1 = state_28499;var statearr_28509_28534 = state_28499__$1;(statearr_28509_28534[2] = inst_28481);
(statearr_28509_28534[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 9))
{var inst_28464 = (state_28499[5]);var inst_28476 = (state_28499[2]);var inst_28477 = (inst_28464 + 1);var inst_28464__$1 = inst_28477;var state_28499__$1 = (function (){var statearr_28510 = state_28499;(statearr_28510[5] = inst_28464__$1);
(statearr_28510[8] = inst_28476);
return statearr_28510;
})();var statearr_28511_28535 = state_28499__$1;(statearr_28511_28535[2] = null);
(statearr_28511_28535[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 10))
{var inst_28468 = (state_28499[2]);var inst_28469 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28499__$1 = (function (){var statearr_28512 = state_28499;(statearr_28512[9] = inst_28468);
return statearr_28512;
})();var statearr_28513_28536 = state_28499__$1;(statearr_28513_28536[2] = inst_28469);
(statearr_28513_28536[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 11))
{try{var inst_28464 = (state_28499[5]);var inst_28472 = chs__$1.call(null,inst_28464);var inst_28473 = done.call(null,inst_28464);var inst_28474 = cljs.core.async.take_BANG_.call(null,inst_28472,inst_28473);var state_28499__$1 = state_28499;var statearr_28516_28537 = state_28499__$1;(statearr_28516_28537[2] = inst_28474);
(statearr_28516_28537[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e28514){if((e28514 instanceof Object))
{var ex__5324__auto__ = e28514;var statearr_28515_28538 = state_28499;(statearr_28515_28538[1] = 10);
(statearr_28515_28538[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28514;
} else
{return null;
}
}
}} else
{if((state_val_28500 === 12))
{var inst_28485 = (state_28499[10]);var inst_28485__$1 = (state_28499[2]);var inst_28486 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28485__$1);var state_28499__$1 = (function (){var statearr_28517 = state_28499;(statearr_28517[10] = inst_28485__$1);
return statearr_28517;
})();if(cljs.core.truth_(inst_28486))
{var statearr_28518_28539 = state_28499__$1;(statearr_28518_28539[1] = 13);
} else
{var statearr_28519_28540 = state_28499__$1;(statearr_28519_28540[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 13))
{var inst_28488 = cljs.core.async.close_BANG_.call(null,out);var state_28499__$1 = state_28499;var statearr_28520_28541 = state_28499__$1;(statearr_28520_28541[2] = inst_28488);
(statearr_28520_28541[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 14))
{var inst_28485 = (state_28499[10]);var inst_28490 = cljs.core.apply.call(null,f,inst_28485);var state_28499__$1 = state_28499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28499__$1,16,out,inst_28490);
} else
{if((state_val_28500 === 15))
{var inst_28495 = (state_28499[2]);var state_28499__$1 = state_28499;var statearr_28521_28542 = state_28499__$1;(statearr_28521_28542[2] = inst_28495);
(statearr_28521_28542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28500 === 16))
{var inst_28492 = (state_28499[2]);var state_28499__$1 = (function (){var statearr_28522 = state_28499;(statearr_28522[11] = inst_28492);
return statearr_28522;
})();var statearr_28523_28543 = state_28499__$1;(statearr_28523_28543[2] = null);
(statearr_28523_28543[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_28525 = (new Array(12));(statearr_28525[0] = state_machine__5331__auto__);
(statearr_28525[1] = 1);
return statearr_28525;
});
var state_machine__5331__auto____1 = (function (state_28499){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28499);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28499){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28526 = f__5381__auto__.call(null);(statearr_28526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28527);
return statearr_28526;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___28643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_28623){var state_val_28624 = (state_28623[1]);if((state_val_28624 === 1))
{var inst_28594 = cljs.core.vec.call(null,chs);var inst_28595 = inst_28594;var state_28623__$1 = (function (){var statearr_28625 = state_28623;(statearr_28625[5] = inst_28595);
return statearr_28625;
})();var statearr_28626_28644 = state_28623__$1;(statearr_28626_28644[2] = null);
(statearr_28626_28644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 2))
{var inst_28595 = (state_28623[5]);var inst_28597 = cljs.core.count.call(null,inst_28595);var inst_28598 = (inst_28597 > 0);var state_28623__$1 = state_28623;if(cljs.core.truth_(inst_28598))
{var statearr_28627_28645 = state_28623__$1;(statearr_28627_28645[1] = 4);
} else
{var statearr_28628_28646 = state_28623__$1;(statearr_28628_28646[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 3))
{var inst_28621 = (state_28623[2]);var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28623__$1,inst_28621);
} else
{if((state_val_28624 === 4))
{var inst_28595 = (state_28623[5]);var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28623__$1,7,inst_28595);
} else
{if((state_val_28624 === 5))
{var inst_28617 = cljs.core.async.close_BANG_.call(null,out);var state_28623__$1 = state_28623;var statearr_28629_28647 = state_28623__$1;(statearr_28629_28647[2] = inst_28617);
(statearr_28629_28647[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 6))
{var inst_28619 = (state_28623[2]);var state_28623__$1 = state_28623;var statearr_28630_28648 = state_28623__$1;(statearr_28630_28648[2] = inst_28619);
(statearr_28630_28648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 7))
{var inst_28603 = (state_28623[6]);var inst_28602 = (state_28623[7]);var inst_28602__$1 = (state_28623[2]);var inst_28603__$1 = cljs.core.nth.call(null,inst_28602__$1,0,null);var inst_28604 = cljs.core.nth.call(null,inst_28602__$1,1,null);var inst_28605 = (inst_28603__$1 == null);var state_28623__$1 = (function (){var statearr_28631 = state_28623;(statearr_28631[8] = inst_28604);
(statearr_28631[6] = inst_28603__$1);
(statearr_28631[7] = inst_28602__$1);
return statearr_28631;
})();if(cljs.core.truth_(inst_28605))
{var statearr_28632_28649 = state_28623__$1;(statearr_28632_28649[1] = 8);
} else
{var statearr_28633_28650 = state_28623__$1;(statearr_28633_28650[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 8))
{var inst_28604 = (state_28623[8]);var inst_28603 = (state_28623[6]);var inst_28602 = (state_28623[7]);var inst_28595 = (state_28623[5]);var inst_28607 = (function (){var c = inst_28604;var v = inst_28603;var vec__28600 = inst_28602;var cs = inst_28595;return ((function (c,v,vec__28600,cs,inst_28604,inst_28603,inst_28602,inst_28595,state_val_28624){
return (function (p1__28544_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28544_SHARP_);
});
;})(c,v,vec__28600,cs,inst_28604,inst_28603,inst_28602,inst_28595,state_val_28624))
})();var inst_28608 = cljs.core.filterv.call(null,inst_28607,inst_28595);var inst_28595__$1 = inst_28608;var state_28623__$1 = (function (){var statearr_28634 = state_28623;(statearr_28634[5] = inst_28595__$1);
return statearr_28634;
})();var statearr_28635_28651 = state_28623__$1;(statearr_28635_28651[2] = null);
(statearr_28635_28651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 9))
{var inst_28603 = (state_28623[6]);var state_28623__$1 = state_28623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28623__$1,11,out,inst_28603);
} else
{if((state_val_28624 === 10))
{var inst_28615 = (state_28623[2]);var state_28623__$1 = state_28623;var statearr_28637_28652 = state_28623__$1;(statearr_28637_28652[2] = inst_28615);
(statearr_28637_28652[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28624 === 11))
{var inst_28595 = (state_28623[5]);var inst_28612 = (state_28623[2]);var tmp28636 = inst_28595;var inst_28595__$1 = tmp28636;var state_28623__$1 = (function (){var statearr_28638 = state_28623;(statearr_28638[9] = inst_28612);
(statearr_28638[5] = inst_28595__$1);
return statearr_28638;
})();var statearr_28639_28653 = state_28623__$1;(statearr_28639_28653[2] = null);
(statearr_28639_28653[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_28641 = (new Array(10));(statearr_28641[0] = state_machine__5331__auto__);
(statearr_28641[1] = 1);
return statearr_28641;
});
var state_machine__5331__auto____1 = (function (state_28623){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_28623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_28642 = f__5381__auto__.call(null);(statearr_28642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___28643);
return statearr_28642;
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