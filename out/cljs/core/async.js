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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13974 = (function (f,fn_handler,meta13975){
this.f = f;
this.fn_handler = fn_handler;
this.meta13975 = meta13975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13974.cljs$lang$type = true;
cljs.core.async.t13974.cljs$lang$ctorStr = "cljs.core.async/t13974";
cljs.core.async.t13974.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t13974");
});
cljs.core.async.t13974.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13976){var self__ = this;
var _13976__$1 = this;return self__.meta13975;
});
cljs.core.async.t13974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13976,meta13975__$1){var self__ = this;
var _13976__$1 = this;return (new cljs.core.async.t13974(self__.f,self__.fn_handler,meta13975__$1));
});
cljs.core.async.__GT_t13974 = (function __GT_t13974(f__$1,fn_handler__$1,meta13975){return (new cljs.core.async.t13974(f__$1,fn_handler__$1,meta13975));
});
}
return (new cljs.core.async.t13974(f,fn_handler,null));
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
{var val_13977 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13977);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13977);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___13978 = n;var x_13979 = 0;while(true){
if((x_13979 < n__3891__auto___13978))
{(a[x_13979] = 0);
{
var G__13980 = (x_13979 + 1);
x_13979 = G__13980;
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
var G__13981 = (i + 1);
i = G__13981;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13985 = (function (flag,alt_flag,meta13986){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13986 = meta13986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13985.cljs$lang$type = true;
cljs.core.async.t13985.cljs$lang$ctorStr = "cljs.core.async/t13985";
cljs.core.async.t13985.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t13985");
});
cljs.core.async.t13985.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13987){var self__ = this;
var _13987__$1 = this;return self__.meta13986;
});
cljs.core.async.t13985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13987,meta13986__$1){var self__ = this;
var _13987__$1 = this;return (new cljs.core.async.t13985(self__.flag,self__.alt_flag,meta13986__$1));
});
cljs.core.async.__GT_t13985 = (function __GT_t13985(flag__$1,alt_flag__$1,meta13986){return (new cljs.core.async.t13985(flag__$1,alt_flag__$1,meta13986));
});
}
return (new cljs.core.async.t13985(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13991 = (function (cb,flag,alt_handler,meta13992){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13992 = meta13992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13991.cljs$lang$type = true;
cljs.core.async.t13991.cljs$lang$ctorStr = "cljs.core.async/t13991";
cljs.core.async.t13991.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t13991");
});
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13993){var self__ = this;
var _13993__$1 = this;return self__.meta13992;
});
cljs.core.async.t13991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13993,meta13992__$1){var self__ = this;
var _13993__$1 = this;return (new cljs.core.async.t13991(self__.cb,self__.flag,self__.alt_handler,meta13992__$1));
});
cljs.core.async.__GT_t13991 = (function __GT_t13991(cb__$1,flag__$1,alt_handler__$1,meta13992){return (new cljs.core.async.t13991(cb__$1,flag__$1,alt_handler__$1,meta13992));
});
}
return (new cljs.core.async.t13991(cb,flag,alt_handler,null));
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
return (function (p1__13994_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__13994_SHARP_,port], true));
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
var G__13995 = (i + 1);
i = G__13995;
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
var alts_BANG___delegate = function (ports,p__13996){var map__13998 = p__13996;var map__13998__$1 = ((cljs.core.seq_QMARK_.call(null,map__13998))?cljs.core.apply.call(null,cljs.core.hash_map,map__13998):map__13998);var opts = map__13998__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13996 = null;if (arguments.length > 1) {
  p__13996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13996);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13999){
var ports = cljs.core.first(arglist__13999);
var p__13996 = cljs.core.rest(arglist__13999);
return alts_BANG___delegate(ports,p__13996);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14007 = (function (ch,f,map_LT_,meta14008){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14008 = meta14008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14007.cljs$lang$type = true;
cljs.core.async.t14007.cljs$lang$ctorStr = "cljs.core.async/t14007";
cljs.core.async.t14007.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14007");
});
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14010 = (function (fn1,_,meta14008,ch,f,map_LT_,meta14011){
this.fn1 = fn1;
this._ = _;
this.meta14008 = meta14008;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14011 = meta14011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14010.cljs$lang$type = true;
cljs.core.async.t14010.cljs$lang$ctorStr = "cljs.core.async/t14010";
cljs.core.async.t14010.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14010");
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14000_SHARP_){return f1.call(null,(((p1__14000_SHARP_ == null))?null:self__.f.call(null,p1__14000_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14012){var self__ = this;
var _14012__$1 = this;return self__.meta14011;
});
cljs.core.async.t14010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14012,meta14011__$1){var self__ = this;
var _14012__$1 = this;return (new cljs.core.async.t14010(self__.fn1,self__._,self__.meta14008,self__.ch,self__.f,self__.map_LT_,meta14011__$1));
});
cljs.core.async.__GT_t14010 = (function __GT_t14010(fn1__$1,___$2,meta14008__$1,ch__$2,f__$2,map_LT___$2,meta14011){return (new cljs.core.async.t14010(fn1__$1,___$2,meta14008__$1,ch__$2,f__$2,map_LT___$2,meta14011));
});
}
return (new cljs.core.async.t14010(fn1,___$1,self__.meta14008,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14009){var self__ = this;
var _14009__$1 = this;return self__.meta14008;
});
cljs.core.async.t14007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14009,meta14008__$1){var self__ = this;
var _14009__$1 = this;return (new cljs.core.async.t14007(self__.ch,self__.f,self__.map_LT_,meta14008__$1));
});
cljs.core.async.__GT_t14007 = (function __GT_t14007(ch__$1,f__$1,map_LT___$1,meta14008){return (new cljs.core.async.t14007(ch__$1,f__$1,map_LT___$1,meta14008));
});
}
return (new cljs.core.async.t14007(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14016 = (function (ch,f,map_GT_,meta14017){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14017 = meta14017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14016.cljs$lang$type = true;
cljs.core.async.t14016.cljs$lang$ctorStr = "cljs.core.async/t14016";
cljs.core.async.t14016.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14016");
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14018){var self__ = this;
var _14018__$1 = this;return self__.meta14017;
});
cljs.core.async.t14016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14018,meta14017__$1){var self__ = this;
var _14018__$1 = this;return (new cljs.core.async.t14016(self__.ch,self__.f,self__.map_GT_,meta14017__$1));
});
cljs.core.async.__GT_t14016 = (function __GT_t14016(ch__$1,f__$1,map_GT___$1,meta14017){return (new cljs.core.async.t14016(ch__$1,f__$1,map_GT___$1,meta14017));
});
}
return (new cljs.core.async.t14016(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14022 = (function (ch,p,filter_GT_,meta14023){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14023 = meta14023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14022.cljs$lang$type = true;
cljs.core.async.t14022.cljs$lang$ctorStr = "cljs.core.async/t14022";
cljs.core.async.t14022.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14022");
});
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14024){var self__ = this;
var _14024__$1 = this;return self__.meta14023;
});
cljs.core.async.t14022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14024,meta14023__$1){var self__ = this;
var _14024__$1 = this;return (new cljs.core.async.t14022(self__.ch,self__.p,self__.filter_GT_,meta14023__$1));
});
cljs.core.async.__GT_t14022 = (function __GT_t14022(ch__$1,p__$1,filter_GT___$1,meta14023){return (new cljs.core.async.t14022(ch__$1,p__$1,filter_GT___$1,meta14023));
});
}
return (new cljs.core.async.t14022(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5377__auto___14099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14082){var state_val_14083 = (state_14082[1]);if((state_val_14083 === 1))
{var state_14082__$1 = state_14082;var statearr_14084_14100 = state_14082__$1;(statearr_14084_14100[2] = null);
(statearr_14084_14100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 2))
{var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14082__$1,4,ch);
} else
{if((state_val_14083 === 3))
{var inst_14080 = (state_14082[2]);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14082__$1,inst_14080);
} else
{if((state_val_14083 === 4))
{var inst_14064 = (state_14082[5]);var inst_14064__$1 = (state_14082[2]);var inst_14065 = (inst_14064__$1 == null);var state_14082__$1 = (function (){var statearr_14085 = state_14082;(statearr_14085[5] = inst_14064__$1);
return statearr_14085;
})();if(cljs.core.truth_(inst_14065))
{var statearr_14086_14101 = state_14082__$1;(statearr_14086_14101[1] = 5);
} else
{var statearr_14087_14102 = state_14082__$1;(statearr_14087_14102[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 5))
{var inst_14067 = cljs.core.async.close_BANG_.call(null,out);var state_14082__$1 = state_14082;var statearr_14088_14103 = state_14082__$1;(statearr_14088_14103[2] = inst_14067);
(statearr_14088_14103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 6))
{var inst_14064 = (state_14082[5]);var inst_14069 = p.call(null,inst_14064);var state_14082__$1 = state_14082;if(cljs.core.truth_(inst_14069))
{var statearr_14089_14104 = state_14082__$1;(statearr_14089_14104[1] = 8);
} else
{var statearr_14090_14105 = state_14082__$1;(statearr_14090_14105[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 7))
{var inst_14078 = (state_14082[2]);var state_14082__$1 = state_14082;var statearr_14091_14106 = state_14082__$1;(statearr_14091_14106[2] = inst_14078);
(statearr_14091_14106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 8))
{var inst_14064 = (state_14082[5]);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14082__$1,11,out,inst_14064);
} else
{if((state_val_14083 === 9))
{var state_14082__$1 = state_14082;var statearr_14092_14107 = state_14082__$1;(statearr_14092_14107[2] = null);
(statearr_14092_14107[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 10))
{var inst_14075 = (state_14082[2]);var state_14082__$1 = (function (){var statearr_14093 = state_14082;(statearr_14093[6] = inst_14075);
return statearr_14093;
})();var statearr_14094_14108 = state_14082__$1;(statearr_14094_14108[2] = null);
(statearr_14094_14108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 11))
{var inst_14072 = (state_14082[2]);var state_14082__$1 = state_14082;var statearr_14095_14109 = state_14082__$1;(statearr_14095_14109[2] = inst_14072);
(statearr_14095_14109[1] = 10);
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
var state_machine__5328__auto____0 = (function (){var statearr_14097 = (new Array(7));(statearr_14097[0] = state_machine__5328__auto__);
(statearr_14097[1] = 1);
return statearr_14097;
});
var state_machine__5328__auto____1 = (function (state_14082){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14082);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14082){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14098 = f__5378__auto__.call(null);(statearr_14098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14099);
return statearr_14098;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14257){var state_val_14258 = (state_14257[1]);if((state_val_14258 === 1))
{var state_14257__$1 = state_14257;var statearr_14259_14292 = state_14257__$1;(statearr_14259_14292[2] = null);
(statearr_14259_14292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 2))
{var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14257__$1,4,in$);
} else
{if((state_val_14258 === 3))
{var inst_14255 = (state_14257[2]);var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14257__$1,inst_14255);
} else
{if((state_val_14258 === 4))
{var inst_14203 = (state_14257[5]);var inst_14203__$1 = (state_14257[2]);var inst_14204 = (inst_14203__$1 == null);var state_14257__$1 = (function (){var statearr_14260 = state_14257;(statearr_14260[5] = inst_14203__$1);
return statearr_14260;
})();if(cljs.core.truth_(inst_14204))
{var statearr_14261_14293 = state_14257__$1;(statearr_14261_14293[1] = 5);
} else
{var statearr_14262_14294 = state_14257__$1;(statearr_14262_14294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 5))
{var inst_14206 = cljs.core.async.close_BANG_.call(null,out);var state_14257__$1 = state_14257;var statearr_14263_14295 = state_14257__$1;(statearr_14263_14295[2] = inst_14206);
(statearr_14263_14295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 6))
{var inst_14203 = (state_14257[5]);var inst_14208 = f.call(null,inst_14203);var inst_14213 = cljs.core.seq.call(null,inst_14208);var inst_14214 = inst_14213;var inst_14215 = null;var inst_14216 = 0;var inst_14217 = 0;var state_14257__$1 = (function (){var statearr_14264 = state_14257;(statearr_14264[6] = inst_14216);
(statearr_14264[7] = inst_14215);
(statearr_14264[8] = inst_14214);
(statearr_14264[9] = inst_14217);
return statearr_14264;
})();var statearr_14265_14296 = state_14257__$1;(statearr_14265_14296[2] = null);
(statearr_14265_14296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 7))
{var inst_14253 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14266_14297 = state_14257__$1;(statearr_14266_14297[2] = inst_14253);
(statearr_14266_14297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 8))
{var inst_14216 = (state_14257[6]);var inst_14217 = (state_14257[9]);var inst_14219 = (inst_14217 < inst_14216);var inst_14220 = inst_14219;var state_14257__$1 = state_14257;if(cljs.core.truth_(inst_14220))
{var statearr_14267_14298 = state_14257__$1;(statearr_14267_14298[1] = 10);
} else
{var statearr_14268_14299 = state_14257__$1;(statearr_14268_14299[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 9))
{var inst_14250 = (state_14257[2]);var state_14257__$1 = (function (){var statearr_14269 = state_14257;(statearr_14269[10] = inst_14250);
return statearr_14269;
})();var statearr_14270_14300 = state_14257__$1;(statearr_14270_14300[2] = null);
(statearr_14270_14300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 10))
{var inst_14215 = (state_14257[7]);var inst_14217 = (state_14257[9]);var inst_14222 = cljs.core._nth.call(null,inst_14215,inst_14217);var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14257__$1,13,out,inst_14222);
} else
{if((state_val_14258 === 11))
{var inst_14214 = (state_14257[8]);var inst_14228 = (state_14257[11]);var inst_14228__$1 = cljs.core.seq.call(null,inst_14214);var state_14257__$1 = (function (){var statearr_14274 = state_14257;(statearr_14274[11] = inst_14228__$1);
return statearr_14274;
})();if(inst_14228__$1)
{var statearr_14275_14301 = state_14257__$1;(statearr_14275_14301[1] = 14);
} else
{var statearr_14276_14302 = state_14257__$1;(statearr_14276_14302[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 12))
{var inst_14248 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14277_14303 = state_14257__$1;(statearr_14277_14303[2] = inst_14248);
(statearr_14277_14303[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 13))
{var inst_14216 = (state_14257[6]);var inst_14215 = (state_14257[7]);var inst_14214 = (state_14257[8]);var inst_14217 = (state_14257[9]);var inst_14224 = (state_14257[2]);var inst_14225 = (inst_14217 + 1);var tmp14271 = inst_14216;var tmp14272 = inst_14215;var tmp14273 = inst_14214;var inst_14214__$1 = tmp14273;var inst_14215__$1 = tmp14272;var inst_14216__$1 = tmp14271;var inst_14217__$1 = inst_14225;var state_14257__$1 = (function (){var statearr_14278 = state_14257;(statearr_14278[6] = inst_14216__$1);
(statearr_14278[7] = inst_14215__$1);
(statearr_14278[8] = inst_14214__$1);
(statearr_14278[9] = inst_14217__$1);
(statearr_14278[12] = inst_14224);
return statearr_14278;
})();var statearr_14279_14304 = state_14257__$1;(statearr_14279_14304[2] = null);
(statearr_14279_14304[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 14))
{var inst_14228 = (state_14257[11]);var inst_14230 = cljs.core.chunked_seq_QMARK_.call(null,inst_14228);var state_14257__$1 = state_14257;if(inst_14230)
{var statearr_14280_14305 = state_14257__$1;(statearr_14280_14305[1] = 17);
} else
{var statearr_14281_14306 = state_14257__$1;(statearr_14281_14306[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 15))
{var state_14257__$1 = state_14257;var statearr_14282_14307 = state_14257__$1;(statearr_14282_14307[2] = null);
(statearr_14282_14307[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 16))
{var inst_14246 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14283_14308 = state_14257__$1;(statearr_14283_14308[2] = inst_14246);
(statearr_14283_14308[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 17))
{var inst_14228 = (state_14257[11]);var inst_14232 = cljs.core.chunk_first.call(null,inst_14228);var inst_14233 = cljs.core.chunk_rest.call(null,inst_14228);var inst_14234 = cljs.core.count.call(null,inst_14232);var inst_14214 = inst_14233;var inst_14215 = inst_14232;var inst_14216 = inst_14234;var inst_14217 = 0;var state_14257__$1 = (function (){var statearr_14284 = state_14257;(statearr_14284[6] = inst_14216);
(statearr_14284[7] = inst_14215);
(statearr_14284[8] = inst_14214);
(statearr_14284[9] = inst_14217);
return statearr_14284;
})();var statearr_14285_14309 = state_14257__$1;(statearr_14285_14309[2] = null);
(statearr_14285_14309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 18))
{var inst_14228 = (state_14257[11]);var inst_14237 = cljs.core.first.call(null,inst_14228);var state_14257__$1 = state_14257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14257__$1,20,out,inst_14237);
} else
{if((state_val_14258 === 19))
{var inst_14243 = (state_14257[2]);var state_14257__$1 = state_14257;var statearr_14286_14310 = state_14257__$1;(statearr_14286_14310[2] = inst_14243);
(statearr_14286_14310[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14258 === 20))
{var inst_14228 = (state_14257[11]);var inst_14239 = (state_14257[2]);var inst_14240 = cljs.core.next.call(null,inst_14228);var inst_14214 = inst_14240;var inst_14215 = null;var inst_14216 = 0;var inst_14217 = 0;var state_14257__$1 = (function (){var statearr_14287 = state_14257;(statearr_14287[6] = inst_14216);
(statearr_14287[7] = inst_14215);
(statearr_14287[8] = inst_14214);
(statearr_14287[13] = inst_14239);
(statearr_14287[9] = inst_14217);
return statearr_14287;
})();var statearr_14288_14311 = state_14257__$1;(statearr_14288_14311[2] = null);
(statearr_14288_14311[1] = 8);
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
var state_machine__5328__auto____0 = (function (){var statearr_14290 = (new Array(14));(statearr_14290[0] = state_machine__5328__auto__);
(statearr_14290[1] = 1);
return statearr_14290;
});
var state_machine__5328__auto____1 = (function (state_14257){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14257);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14257){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14291 = f__5378__auto__.call(null);(statearr_14291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14291;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5377__auto___14384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14367){var state_val_14368 = (state_14367[1]);if((state_val_14368 === 1))
{var state_14367__$1 = state_14367;var statearr_14369_14385 = state_14367__$1;(statearr_14369_14385[2] = null);
(statearr_14369_14385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 2))
{var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14367__$1,4,from);
} else
{if((state_val_14368 === 3))
{var inst_14365 = (state_14367[2]);var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14367__$1,inst_14365);
} else
{if((state_val_14368 === 4))
{var inst_14350 = (state_14367[5]);var inst_14350__$1 = (state_14367[2]);var inst_14351 = (inst_14350__$1 == null);var state_14367__$1 = (function (){var statearr_14370 = state_14367;(statearr_14370[5] = inst_14350__$1);
return statearr_14370;
})();if(cljs.core.truth_(inst_14351))
{var statearr_14371_14386 = state_14367__$1;(statearr_14371_14386[1] = 5);
} else
{var statearr_14372_14387 = state_14367__$1;(statearr_14372_14387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 5))
{var state_14367__$1 = state_14367;if(cljs.core.truth_(close_QMARK_))
{var statearr_14373_14388 = state_14367__$1;(statearr_14373_14388[1] = 8);
} else
{var statearr_14374_14389 = state_14367__$1;(statearr_14374_14389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 6))
{var inst_14350 = (state_14367[5]);var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14367__$1,11,to,inst_14350);
} else
{if((state_val_14368 === 7))
{var inst_14363 = (state_14367[2]);var state_14367__$1 = state_14367;var statearr_14375_14390 = state_14367__$1;(statearr_14375_14390[2] = inst_14363);
(statearr_14375_14390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 8))
{var inst_14354 = cljs.core.async.close_BANG_.call(null,to);var state_14367__$1 = state_14367;var statearr_14376_14391 = state_14367__$1;(statearr_14376_14391[2] = inst_14354);
(statearr_14376_14391[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 9))
{var state_14367__$1 = state_14367;var statearr_14377_14392 = state_14367__$1;(statearr_14377_14392[2] = null);
(statearr_14377_14392[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 10))
{var inst_14357 = (state_14367[2]);var state_14367__$1 = state_14367;var statearr_14378_14393 = state_14367__$1;(statearr_14378_14393[2] = inst_14357);
(statearr_14378_14393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14368 === 11))
{var inst_14360 = (state_14367[2]);var state_14367__$1 = (function (){var statearr_14379 = state_14367;(statearr_14379[6] = inst_14360);
return statearr_14379;
})();var statearr_14380_14394 = state_14367__$1;(statearr_14380_14394[2] = null);
(statearr_14380_14394[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_14382 = (new Array(7));(statearr_14382[0] = state_machine__5328__auto__);
(statearr_14382[1] = 1);
return statearr_14382;
});
var state_machine__5328__auto____1 = (function (state_14367){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14367){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14383 = f__5378__auto__.call(null);(statearr_14383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14384);
return statearr_14383;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5377__auto___14473 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14455){var state_val_14456 = (state_14455[1]);if((state_val_14456 === 1))
{var state_14455__$1 = state_14455;var statearr_14457_14474 = state_14455__$1;(statearr_14457_14474[2] = null);
(statearr_14457_14474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 2))
{var state_14455__$1 = state_14455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14455__$1,4,ch);
} else
{if((state_val_14456 === 3))
{var inst_14453 = (state_14455[2]);var state_14455__$1 = state_14455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14455__$1,inst_14453);
} else
{if((state_val_14456 === 4))
{var inst_14436 = (state_14455[5]);var inst_14436__$1 = (state_14455[2]);var inst_14437 = (inst_14436__$1 == null);var state_14455__$1 = (function (){var statearr_14458 = state_14455;(statearr_14458[5] = inst_14436__$1);
return statearr_14458;
})();if(cljs.core.truth_(inst_14437))
{var statearr_14459_14475 = state_14455__$1;(statearr_14459_14475[1] = 5);
} else
{var statearr_14460_14476 = state_14455__$1;(statearr_14460_14476[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 5))
{var inst_14439 = cljs.core.async.close_BANG_.call(null,tc);var inst_14440 = cljs.core.async.close_BANG_.call(null,fc);var state_14455__$1 = (function (){var statearr_14461 = state_14455;(statearr_14461[6] = inst_14439);
return statearr_14461;
})();var statearr_14462_14477 = state_14455__$1;(statearr_14462_14477[2] = inst_14440);
(statearr_14462_14477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 6))
{var inst_14436 = (state_14455[5]);var inst_14442 = p.call(null,inst_14436);var state_14455__$1 = state_14455;if(cljs.core.truth_(inst_14442))
{var statearr_14463_14478 = state_14455__$1;(statearr_14463_14478[1] = 9);
} else
{var statearr_14464_14479 = state_14455__$1;(statearr_14464_14479[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 7))
{var inst_14451 = (state_14455[2]);var state_14455__$1 = state_14455;var statearr_14465_14480 = state_14455__$1;(statearr_14465_14480[2] = inst_14451);
(statearr_14465_14480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 8))
{var inst_14448 = (state_14455[2]);var state_14455__$1 = (function (){var statearr_14466 = state_14455;(statearr_14466[7] = inst_14448);
return statearr_14466;
})();var statearr_14467_14481 = state_14455__$1;(statearr_14467_14481[2] = null);
(statearr_14467_14481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 9))
{var state_14455__$1 = state_14455;var statearr_14468_14482 = state_14455__$1;(statearr_14468_14482[2] = tc);
(statearr_14468_14482[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 10))
{var state_14455__$1 = state_14455;var statearr_14469_14483 = state_14455__$1;(statearr_14469_14483[2] = fc);
(statearr_14469_14483[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14456 === 11))
{var inst_14436 = (state_14455[5]);var inst_14446 = (state_14455[2]);var state_14455__$1 = state_14455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14455__$1,8,inst_14446,inst_14436);
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
var state_machine__5328__auto____0 = (function (){var statearr_14471 = (new Array(8));(statearr_14471[0] = state_machine__5328__auto__);
(statearr_14471[1] = 1);
return statearr_14471;
});
var state_machine__5328__auto____1 = (function (state_14455){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14455);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14455){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14472 = f__5378__auto__.call(null);(statearr_14472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___14473);
return statearr_14472;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14526){var state_val_14527 = (state_14526[1]);if((state_val_14527 === 7))
{var inst_14522 = (state_14526[2]);var state_14526__$1 = state_14526;var statearr_14528_14540 = state_14526__$1;(statearr_14528_14540[2] = inst_14522);
(statearr_14528_14540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14527 === 6))
{var inst_14515 = (state_14526[5]);var inst_14512 = (state_14526[6]);var inst_14519 = f.call(null,inst_14512,inst_14515);var inst_14512__$1 = inst_14519;var state_14526__$1 = (function (){var statearr_14529 = state_14526;(statearr_14529[6] = inst_14512__$1);
return statearr_14529;
})();var statearr_14530_14541 = state_14526__$1;(statearr_14530_14541[2] = null);
(statearr_14530_14541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14527 === 5))
{var inst_14512 = (state_14526[6]);var state_14526__$1 = state_14526;var statearr_14531_14542 = state_14526__$1;(statearr_14531_14542[2] = inst_14512);
(statearr_14531_14542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14527 === 4))
{var inst_14515 = (state_14526[5]);var inst_14515__$1 = (state_14526[2]);var inst_14516 = (inst_14515__$1 == null);var state_14526__$1 = (function (){var statearr_14532 = state_14526;(statearr_14532[5] = inst_14515__$1);
return statearr_14532;
})();if(cljs.core.truth_(inst_14516))
{var statearr_14533_14543 = state_14526__$1;(statearr_14533_14543[1] = 5);
} else
{var statearr_14534_14544 = state_14526__$1;(statearr_14534_14544[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14527 === 3))
{var inst_14524 = (state_14526[2]);var state_14526__$1 = state_14526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14526__$1,inst_14524);
} else
{if((state_val_14527 === 2))
{var state_14526__$1 = state_14526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14526__$1,4,ch);
} else
{if((state_val_14527 === 1))
{var inst_14512 = init;var state_14526__$1 = (function (){var statearr_14535 = state_14526;(statearr_14535[6] = inst_14512);
return statearr_14535;
})();var statearr_14536_14545 = state_14526__$1;(statearr_14536_14545[2] = null);
(statearr_14536_14545[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_14538 = (new Array(7));(statearr_14538[0] = state_machine__5328__auto__);
(statearr_14538[1] = 1);
return statearr_14538;
});
var state_machine__5328__auto____1 = (function (state_14526){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14526);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14526){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14539 = f__5378__auto__.call(null);(statearr_14539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14539;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14603){var state_val_14604 = (state_14603[1]);if((state_val_14604 === 1))
{var inst_14583 = cljs.core.seq.call(null,coll);var inst_14584 = inst_14583;var state_14603__$1 = (function (){var statearr_14605 = state_14603;(statearr_14605[5] = inst_14584);
return statearr_14605;
})();var statearr_14606_14620 = state_14603__$1;(statearr_14606_14620[2] = null);
(statearr_14606_14620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 2))
{var inst_14584 = (state_14603[5]);var state_14603__$1 = state_14603;if(cljs.core.truth_(inst_14584))
{var statearr_14607_14621 = state_14603__$1;(statearr_14607_14621[1] = 4);
} else
{var statearr_14608_14622 = state_14603__$1;(statearr_14608_14622[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 3))
{var inst_14601 = (state_14603[2]);var state_14603__$1 = state_14603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14603__$1,inst_14601);
} else
{if((state_val_14604 === 4))
{var inst_14584 = (state_14603[5]);var inst_14587 = cljs.core.first.call(null,inst_14584);var state_14603__$1 = state_14603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14603__$1,7,ch,inst_14587);
} else
{if((state_val_14604 === 5))
{var state_14603__$1 = state_14603;if(cljs.core.truth_(close_QMARK_))
{var statearr_14609_14623 = state_14603__$1;(statearr_14609_14623[1] = 8);
} else
{var statearr_14610_14624 = state_14603__$1;(statearr_14610_14624[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 6))
{var inst_14599 = (state_14603[2]);var state_14603__$1 = state_14603;var statearr_14611_14625 = state_14603__$1;(statearr_14611_14625[2] = inst_14599);
(statearr_14611_14625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 7))
{var inst_14584 = (state_14603[5]);var inst_14589 = (state_14603[2]);var inst_14590 = cljs.core.next.call(null,inst_14584);var inst_14584__$1 = inst_14590;var state_14603__$1 = (function (){var statearr_14612 = state_14603;(statearr_14612[5] = inst_14584__$1);
(statearr_14612[6] = inst_14589);
return statearr_14612;
})();var statearr_14613_14626 = state_14603__$1;(statearr_14613_14626[2] = null);
(statearr_14613_14626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 8))
{var inst_14594 = cljs.core.async.close_BANG_.call(null,ch);var state_14603__$1 = state_14603;var statearr_14614_14627 = state_14603__$1;(statearr_14614_14627[2] = inst_14594);
(statearr_14614_14627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 9))
{var state_14603__$1 = state_14603;var statearr_14615_14628 = state_14603__$1;(statearr_14615_14628[2] = null);
(statearr_14615_14628[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14604 === 10))
{var inst_14597 = (state_14603[2]);var state_14603__$1 = state_14603;var statearr_14616_14629 = state_14603__$1;(statearr_14616_14629[2] = inst_14597);
(statearr_14616_14629[1] = 6);
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
var state_machine__5328__auto____0 = (function (){var statearr_14618 = (new Array(7));(statearr_14618[0] = state_machine__5328__auto__);
(statearr_14618[1] = 1);
return statearr_14618;
});
var state_machine__5328__auto____1 = (function (state_14603){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14603){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_14619 = f__5378__auto__.call(null);(statearr_14619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_14619;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14842 = (function (cs,ch,mult,meta14843){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14843 = meta14843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14842.cljs$lang$type = true;
cljs.core.async.t14842.cljs$lang$ctorStr = "cljs.core.async/t14842";
cljs.core.async.t14842.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14842");
});})(cs))
;
cljs.core.async.t14842.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14842.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14842.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14842.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14842.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14844){var self__ = this;
var _14844__$1 = this;return self__.meta14843;
});})(cs))
;
cljs.core.async.t14842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14844,meta14843__$1){var self__ = this;
var _14844__$1 = this;return (new cljs.core.async.t14842(self__.cs,self__.ch,self__.mult,meta14843__$1));
});})(cs))
;
cljs.core.async.__GT_t14842 = ((function (cs){
return (function __GT_t14842(cs__$1,ch__$1,mult__$1,meta14843){return (new cljs.core.async.t14842(cs__$1,ch__$1,mult__$1,meta14843));
});})(cs))
;
}
return (new cljs.core.async.t14842(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5377__auto___15054 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_14972){var state_val_14973 = (state_14972[1]);if((state_val_14973 === 32))
{try{var inst_14923 = (state_14972[5]);var inst_14847 = (state_14972[6]);var inst_14929 = cljs.core.async.put_BANG_.call(null,inst_14923,inst_14847,done);var state_14972__$1 = state_14972;var statearr_14976_15055 = state_14972__$1;(statearr_14976_15055[2] = inst_14929);
(statearr_14976_15055[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e14974){if((e14974 instanceof Object))
{var ex__5321__auto__ = e14974;var statearr_14975_15056 = state_14972;(statearr_14975_15056[1] = 31);
(statearr_14975_15056[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14974;
} else
{return null;
}
}
}} else
{if((state_val_14973 === 1))
{var state_14972__$1 = state_14972;var statearr_14977_15057 = state_14972__$1;(statearr_14977_15057[2] = null);
(statearr_14977_15057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 33))
{var inst_14935 = (state_14972[7]);var inst_14937 = cljs.core.chunked_seq_QMARK_.call(null,inst_14935);var state_14972__$1 = state_14972;if(inst_14937)
{var statearr_14978_15058 = state_14972__$1;(statearr_14978_15058[1] = 36);
} else
{var statearr_14979_15059 = state_14972__$1;(statearr_14979_15059[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 2))
{var state_14972__$1 = state_14972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14972__$1,4,ch);
} else
{if((state_val_14973 === 34))
{var state_14972__$1 = state_14972;var statearr_14980_15060 = state_14972__$1;(statearr_14980_15060[2] = null);
(statearr_14980_15060[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 3))
{var inst_14970 = (state_14972[2]);var state_14972__$1 = state_14972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14972__$1,inst_14970);
} else
{if((state_val_14973 === 35))
{var inst_14959 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_14981_15061 = state_14972__$1;(statearr_14981_15061[2] = inst_14959);
(statearr_14981_15061[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 4))
{var inst_14847 = (state_14972[6]);var inst_14847__$1 = (state_14972[2]);var inst_14848 = (inst_14847__$1 == null);var state_14972__$1 = (function (){var statearr_14982 = state_14972;(statearr_14982[6] = inst_14847__$1);
return statearr_14982;
})();if(cljs.core.truth_(inst_14848))
{var statearr_14983_15062 = state_14972__$1;(statearr_14983_15062[1] = 5);
} else
{var statearr_14984_15063 = state_14972__$1;(statearr_14984_15063[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 36))
{var inst_14935 = (state_14972[7]);var inst_14939 = cljs.core.chunk_first.call(null,inst_14935);var inst_14940 = cljs.core.chunk_rest.call(null,inst_14935);var inst_14941 = cljs.core.count.call(null,inst_14939);var inst_14915 = inst_14940;var inst_14916 = inst_14939;var inst_14917 = inst_14941;var inst_14918 = 0;var state_14972__$1 = (function (){var statearr_14985 = state_14972;(statearr_14985[8] = inst_14915);
(statearr_14985[9] = inst_14917);
(statearr_14985[10] = inst_14916);
(statearr_14985[11] = inst_14918);
return statearr_14985;
})();var statearr_14986_15064 = state_14972__$1;(statearr_14986_15064[2] = null);
(statearr_14986_15064[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 5))
{var inst_14854 = cljs.core.deref.call(null,cs);var inst_14855 = cljs.core.seq.call(null,inst_14854);var inst_14856 = inst_14855;var inst_14857 = null;var inst_14858 = 0;var inst_14859 = 0;var state_14972__$1 = (function (){var statearr_14987 = state_14972;(statearr_14987[12] = inst_14859);
(statearr_14987[13] = inst_14856);
(statearr_14987[14] = inst_14857);
(statearr_14987[15] = inst_14858);
return statearr_14987;
})();var statearr_14988_15065 = state_14972__$1;(statearr_14988_15065[2] = null);
(statearr_14988_15065[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 37))
{var inst_14935 = (state_14972[7]);var inst_14944 = cljs.core.first.call(null,inst_14935);var state_14972__$1 = (function (){var statearr_14989 = state_14972;(statearr_14989[16] = inst_14944);
return statearr_14989;
})();var statearr_14990_15066 = state_14972__$1;(statearr_14990_15066[2] = null);
(statearr_14990_15066[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 6))
{var inst_14906 = cljs.core.deref.call(null,cs);var inst_14907 = cljs.core.keys.call(null,inst_14906);var inst_14908 = cljs.core.count.call(null,inst_14907);var inst_14909 = cljs.core.reset_BANG_.call(null,dctr,inst_14908);var inst_14914 = cljs.core.seq.call(null,inst_14907);var inst_14915 = inst_14914;var inst_14916 = null;var inst_14917 = 0;var inst_14918 = 0;var state_14972__$1 = (function (){var statearr_14991 = state_14972;(statearr_14991[17] = inst_14909);
(statearr_14991[8] = inst_14915);
(statearr_14991[9] = inst_14917);
(statearr_14991[10] = inst_14916);
(statearr_14991[11] = inst_14918);
return statearr_14991;
})();var statearr_14992_15067 = state_14972__$1;(statearr_14992_15067[2] = null);
(statearr_14992_15067[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 38))
{var inst_14956 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_14993_15068 = state_14972__$1;(statearr_14993_15068[2] = inst_14956);
(statearr_14993_15068[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 7))
{var inst_14968 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_14994_15069 = state_14972__$1;(statearr_14994_15069[2] = inst_14968);
(statearr_14994_15069[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 39))
{var inst_14935 = (state_14972[7]);var inst_14952 = (state_14972[2]);var inst_14953 = cljs.core.next.call(null,inst_14935);var inst_14915 = inst_14953;var inst_14916 = null;var inst_14917 = 0;var inst_14918 = 0;var state_14972__$1 = (function (){var statearr_14995 = state_14972;(statearr_14995[8] = inst_14915);
(statearr_14995[9] = inst_14917);
(statearr_14995[10] = inst_14916);
(statearr_14995[18] = inst_14952);
(statearr_14995[11] = inst_14918);
return statearr_14995;
})();var statearr_14996_15070 = state_14972__$1;(statearr_14996_15070[2] = null);
(statearr_14996_15070[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 8))
{var inst_14859 = (state_14972[12]);var inst_14858 = (state_14972[15]);var inst_14861 = (inst_14859 < inst_14858);var inst_14862 = inst_14861;var state_14972__$1 = state_14972;if(cljs.core.truth_(inst_14862))
{var statearr_14997_15071 = state_14972__$1;(statearr_14997_15071[1] = 10);
} else
{var statearr_14998_15072 = state_14972__$1;(statearr_14998_15072[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 40))
{var inst_14944 = (state_14972[16]);var inst_14945 = (state_14972[2]);var inst_14946 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14947 = cljs.core.async.untap_STAR_.call(null,m,inst_14944);var state_14972__$1 = (function (){var statearr_14999 = state_14972;(statearr_14999[19] = inst_14945);
(statearr_14999[20] = inst_14946);
return statearr_14999;
})();var statearr_15000_15073 = state_14972__$1;(statearr_15000_15073[2] = inst_14947);
(statearr_15000_15073[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 9))
{var inst_14904 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_15001_15074 = state_14972__$1;(statearr_15001_15074[2] = inst_14904);
(statearr_15001_15074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 41))
{try{var inst_14847 = (state_14972[6]);var inst_14944 = (state_14972[16]);var inst_14950 = cljs.core.async.put_BANG_.call(null,inst_14944,inst_14847,done);var state_14972__$1 = state_14972;var statearr_15004_15075 = state_14972__$1;(statearr_15004_15075[2] = inst_14950);
(statearr_15004_15075[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15002){if((e15002 instanceof Object))
{var ex__5321__auto__ = e15002;var statearr_15003_15076 = state_14972;(statearr_15003_15076[1] = 40);
(statearr_15003_15076[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15002;
} else
{return null;
}
}
}} else
{if((state_val_14973 === 10))
{var inst_14859 = (state_14972[12]);var inst_14857 = (state_14972[14]);var inst_14865 = cljs.core._nth.call(null,inst_14857,inst_14859);var inst_14866 = cljs.core.nth.call(null,inst_14865,0,null);var inst_14867 = cljs.core.nth.call(null,inst_14865,1,null);var state_14972__$1 = (function (){var statearr_15005 = state_14972;(statearr_15005[21] = inst_14866);
return statearr_15005;
})();if(cljs.core.truth_(inst_14867))
{var statearr_15006_15077 = state_14972__$1;(statearr_15006_15077[1] = 13);
} else
{var statearr_15007_15078 = state_14972__$1;(statearr_15007_15078[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 42))
{var inst_14965 = (state_14972[2]);var state_14972__$1 = (function (){var statearr_15008 = state_14972;(statearr_15008[22] = inst_14965);
return statearr_15008;
})();var statearr_15009_15079 = state_14972__$1;(statearr_15009_15079[2] = null);
(statearr_15009_15079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 11))
{var inst_14876 = (state_14972[23]);var inst_14856 = (state_14972[13]);var inst_14876__$1 = cljs.core.seq.call(null,inst_14856);var state_14972__$1 = (function (){var statearr_15010 = state_14972;(statearr_15010[23] = inst_14876__$1);
return statearr_15010;
})();if(inst_14876__$1)
{var statearr_15011_15080 = state_14972__$1;(statearr_15011_15080[1] = 16);
} else
{var statearr_15012_15081 = state_14972__$1;(statearr_15012_15081[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 12))
{var inst_14902 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_15013_15082 = state_14972__$1;(statearr_15013_15082[2] = inst_14902);
(statearr_15013_15082[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 13))
{var inst_14866 = (state_14972[21]);var inst_14869 = cljs.core.async.close_BANG_.call(null,inst_14866);var state_14972__$1 = state_14972;var statearr_15017_15083 = state_14972__$1;(statearr_15017_15083[2] = inst_14869);
(statearr_15017_15083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 14))
{var state_14972__$1 = state_14972;var statearr_15018_15084 = state_14972__$1;(statearr_15018_15084[2] = null);
(statearr_15018_15084[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 15))
{var inst_14859 = (state_14972[12]);var inst_14856 = (state_14972[13]);var inst_14857 = (state_14972[14]);var inst_14858 = (state_14972[15]);var inst_14872 = (state_14972[2]);var inst_14873 = (inst_14859 + 1);var tmp15014 = inst_14856;var tmp15015 = inst_14857;var tmp15016 = inst_14858;var inst_14856__$1 = tmp15014;var inst_14857__$1 = tmp15015;var inst_14858__$1 = tmp15016;var inst_14859__$1 = inst_14873;var state_14972__$1 = (function (){var statearr_15019 = state_14972;(statearr_15019[12] = inst_14859__$1);
(statearr_15019[24] = inst_14872);
(statearr_15019[13] = inst_14856__$1);
(statearr_15019[14] = inst_14857__$1);
(statearr_15019[15] = inst_14858__$1);
return statearr_15019;
})();var statearr_15020_15085 = state_14972__$1;(statearr_15020_15085[2] = null);
(statearr_15020_15085[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 16))
{var inst_14876 = (state_14972[23]);var inst_14878 = cljs.core.chunked_seq_QMARK_.call(null,inst_14876);var state_14972__$1 = state_14972;if(inst_14878)
{var statearr_15021_15086 = state_14972__$1;(statearr_15021_15086[1] = 19);
} else
{var statearr_15022_15087 = state_14972__$1;(statearr_15022_15087[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 17))
{var state_14972__$1 = state_14972;var statearr_15023_15088 = state_14972__$1;(statearr_15023_15088[2] = null);
(statearr_15023_15088[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 18))
{var inst_14900 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_15024_15089 = state_14972__$1;(statearr_15024_15089[2] = inst_14900);
(statearr_15024_15089[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 19))
{var inst_14876 = (state_14972[23]);var inst_14880 = cljs.core.chunk_first.call(null,inst_14876);var inst_14881 = cljs.core.chunk_rest.call(null,inst_14876);var inst_14882 = cljs.core.count.call(null,inst_14880);var inst_14856 = inst_14881;var inst_14857 = inst_14880;var inst_14858 = inst_14882;var inst_14859 = 0;var state_14972__$1 = (function (){var statearr_15025 = state_14972;(statearr_15025[12] = inst_14859);
(statearr_15025[13] = inst_14856);
(statearr_15025[14] = inst_14857);
(statearr_15025[15] = inst_14858);
return statearr_15025;
})();var statearr_15026_15090 = state_14972__$1;(statearr_15026_15090[2] = null);
(statearr_15026_15090[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 20))
{var inst_14876 = (state_14972[23]);var inst_14886 = cljs.core.first.call(null,inst_14876);var inst_14887 = cljs.core.nth.call(null,inst_14886,0,null);var inst_14888 = cljs.core.nth.call(null,inst_14886,1,null);var state_14972__$1 = (function (){var statearr_15027 = state_14972;(statearr_15027[25] = inst_14887);
return statearr_15027;
})();if(cljs.core.truth_(inst_14888))
{var statearr_15028_15091 = state_14972__$1;(statearr_15028_15091[1] = 22);
} else
{var statearr_15029_15092 = state_14972__$1;(statearr_15029_15092[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 21))
{var inst_14897 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_15030_15093 = state_14972__$1;(statearr_15030_15093[2] = inst_14897);
(statearr_15030_15093[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 22))
{var inst_14887 = (state_14972[25]);var inst_14890 = cljs.core.async.close_BANG_.call(null,inst_14887);var state_14972__$1 = state_14972;var statearr_15031_15094 = state_14972__$1;(statearr_15031_15094[2] = inst_14890);
(statearr_15031_15094[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 23))
{var state_14972__$1 = state_14972;var statearr_15032_15095 = state_14972__$1;(statearr_15032_15095[2] = null);
(statearr_15032_15095[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 24))
{var inst_14876 = (state_14972[23]);var inst_14893 = (state_14972[2]);var inst_14894 = cljs.core.next.call(null,inst_14876);var inst_14856 = inst_14894;var inst_14857 = null;var inst_14858 = 0;var inst_14859 = 0;var state_14972__$1 = (function (){var statearr_15033 = state_14972;(statearr_15033[12] = inst_14859);
(statearr_15033[26] = inst_14893);
(statearr_15033[13] = inst_14856);
(statearr_15033[14] = inst_14857);
(statearr_15033[15] = inst_14858);
return statearr_15033;
})();var statearr_15034_15096 = state_14972__$1;(statearr_15034_15096[2] = null);
(statearr_15034_15096[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 25))
{var inst_14917 = (state_14972[9]);var inst_14918 = (state_14972[11]);var inst_14920 = (inst_14918 < inst_14917);var inst_14921 = inst_14920;var state_14972__$1 = state_14972;if(cljs.core.truth_(inst_14921))
{var statearr_15035_15097 = state_14972__$1;(statearr_15035_15097[1] = 27);
} else
{var statearr_15036_15098 = state_14972__$1;(statearr_15036_15098[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 26))
{var inst_14963 = (state_14972[2]);var state_14972__$1 = (function (){var statearr_15037 = state_14972;(statearr_15037[27] = inst_14963);
return statearr_15037;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14972__$1,42,dchan);
} else
{if((state_val_14973 === 27))
{var inst_14916 = (state_14972[10]);var inst_14918 = (state_14972[11]);var inst_14923 = cljs.core._nth.call(null,inst_14916,inst_14918);var state_14972__$1 = (function (){var statearr_15038 = state_14972;(statearr_15038[5] = inst_14923);
return statearr_15038;
})();var statearr_15039_15099 = state_14972__$1;(statearr_15039_15099[2] = null);
(statearr_15039_15099[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 28))
{var inst_14915 = (state_14972[8]);var inst_14935 = (state_14972[7]);var inst_14935__$1 = cljs.core.seq.call(null,inst_14915);var state_14972__$1 = (function (){var statearr_15043 = state_14972;(statearr_15043[7] = inst_14935__$1);
return statearr_15043;
})();if(inst_14935__$1)
{var statearr_15044_15100 = state_14972__$1;(statearr_15044_15100[1] = 33);
} else
{var statearr_15045_15101 = state_14972__$1;(statearr_15045_15101[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 29))
{var inst_14961 = (state_14972[2]);var state_14972__$1 = state_14972;var statearr_15046_15102 = state_14972__$1;(statearr_15046_15102[2] = inst_14961);
(statearr_15046_15102[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 30))
{var inst_14915 = (state_14972[8]);var inst_14917 = (state_14972[9]);var inst_14916 = (state_14972[10]);var inst_14918 = (state_14972[11]);var inst_14931 = (state_14972[2]);var inst_14932 = (inst_14918 + 1);var tmp15040 = inst_14915;var tmp15041 = inst_14917;var tmp15042 = inst_14916;var inst_14915__$1 = tmp15040;var inst_14916__$1 = tmp15042;var inst_14917__$1 = tmp15041;var inst_14918__$1 = inst_14932;var state_14972__$1 = (function (){var statearr_15047 = state_14972;(statearr_15047[28] = inst_14931);
(statearr_15047[8] = inst_14915__$1);
(statearr_15047[9] = inst_14917__$1);
(statearr_15047[10] = inst_14916__$1);
(statearr_15047[11] = inst_14918__$1);
return statearr_15047;
})();var statearr_15048_15103 = state_14972__$1;(statearr_15048_15103[2] = null);
(statearr_15048_15103[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14973 === 31))
{var inst_14923 = (state_14972[5]);var inst_14924 = (state_14972[2]);var inst_14925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14926 = cljs.core.async.untap_STAR_.call(null,m,inst_14923);var state_14972__$1 = (function (){var statearr_15049 = state_14972;(statearr_15049[29] = inst_14924);
(statearr_15049[30] = inst_14925);
return statearr_15049;
})();var statearr_15050_15104 = state_14972__$1;(statearr_15050_15104[2] = inst_14926);
(statearr_15050_15104[1] = 30);
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
var state_machine__5328__auto____0 = (function (){var statearr_15052 = (new Array(31));(statearr_15052[0] = state_machine__5328__auto__);
(statearr_15052[1] = 1);
return statearr_15052;
});
var state_machine__5328__auto____1 = (function (state_14972){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_14972);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_14972){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_14972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15053 = f__5378__auto__.call(null);(statearr_15053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15054);
return statearr_15053;
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
;var m = (function (){if(typeof cljs.core.async.t15210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15210 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15211){
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
this.meta15211 = meta15211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15210.cljs$lang$type = true;
cljs.core.async.t15210.cljs$lang$ctorStr = "cljs.core.async/t15210";
cljs.core.async.t15210.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15210");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15210.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15212){var self__ = this;
var _15212__$1 = this;return self__.meta15211;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15212,meta15211__$1){var self__ = this;
var _15212__$1 = this;return (new cljs.core.async.t15210(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15211__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15210 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15210(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15211){return (new cljs.core.async.t15210(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15211));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15210(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5377__auto___15315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15277){var state_val_15278 = (state_15277[1]);if((state_val_15278 === 1))
{var inst_15216 = (state_15277[5]);var inst_15216__$1 = calc_state.call(null);var inst_15217 = cljs.core.seq_QMARK_.call(null,inst_15216__$1);var state_15277__$1 = (function (){var statearr_15279 = state_15277;(statearr_15279[5] = inst_15216__$1);
return statearr_15279;
})();if(inst_15217)
{var statearr_15280_15316 = state_15277__$1;(statearr_15280_15316[1] = 2);
} else
{var statearr_15281_15317 = state_15277__$1;(statearr_15281_15317[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 2))
{var inst_15216 = (state_15277[5]);var inst_15219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15216);var state_15277__$1 = state_15277;var statearr_15282_15318 = state_15277__$1;(statearr_15282_15318[2] = inst_15219);
(statearr_15282_15318[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 3))
{var inst_15216 = (state_15277[5]);var state_15277__$1 = state_15277;var statearr_15283_15319 = state_15277__$1;(statearr_15283_15319[2] = inst_15216);
(statearr_15283_15319[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 4))
{var inst_15216 = (state_15277[5]);var inst_15222 = (state_15277[2]);var inst_15223 = cljs.core.get.call(null,inst_15222,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15224 = cljs.core.get.call(null,inst_15222,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15225 = cljs.core.get.call(null,inst_15222,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15226 = inst_15216;var state_15277__$1 = (function (){var statearr_15284 = state_15277;(statearr_15284[6] = inst_15226);
(statearr_15284[7] = inst_15225);
(statearr_15284[8] = inst_15223);
(statearr_15284[9] = inst_15224);
return statearr_15284;
})();var statearr_15285_15320 = state_15277__$1;(statearr_15285_15320[2] = null);
(statearr_15285_15320[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 5))
{var inst_15226 = (state_15277[6]);var inst_15229 = cljs.core.seq_QMARK_.call(null,inst_15226);var state_15277__$1 = state_15277;if(inst_15229)
{var statearr_15286_15321 = state_15277__$1;(statearr_15286_15321[1] = 7);
} else
{var statearr_15287_15322 = state_15277__$1;(statearr_15287_15322[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 6))
{var inst_15275 = (state_15277[2]);var state_15277__$1 = state_15277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15277__$1,inst_15275);
} else
{if((state_val_15278 === 7))
{var inst_15226 = (state_15277[6]);var inst_15231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15226);var state_15277__$1 = state_15277;var statearr_15288_15323 = state_15277__$1;(statearr_15288_15323[2] = inst_15231);
(statearr_15288_15323[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 8))
{var inst_15226 = (state_15277[6]);var state_15277__$1 = state_15277;var statearr_15289_15324 = state_15277__$1;(statearr_15289_15324[2] = inst_15226);
(statearr_15289_15324[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 9))
{var inst_15234 = (state_15277[10]);var inst_15234__$1 = (state_15277[2]);var inst_15235 = cljs.core.get.call(null,inst_15234__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15236 = cljs.core.get.call(null,inst_15234__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15237 = cljs.core.get.call(null,inst_15234__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15277__$1 = (function (){var statearr_15290 = state_15277;(statearr_15290[10] = inst_15234__$1);
(statearr_15290[11] = inst_15237);
(statearr_15290[12] = inst_15236);
return statearr_15290;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15277__$1,10,inst_15235);
} else
{if((state_val_15278 === 10))
{var inst_15242 = (state_15277[13]);var inst_15241 = (state_15277[14]);var inst_15240 = (state_15277[2]);var inst_15241__$1 = cljs.core.nth.call(null,inst_15240,0,null);var inst_15242__$1 = cljs.core.nth.call(null,inst_15240,1,null);var inst_15243 = (inst_15241__$1 == null);var inst_15244 = cljs.core._EQ_.call(null,inst_15242__$1,change);var inst_15245 = (inst_15243) || (inst_15244);var state_15277__$1 = (function (){var statearr_15291 = state_15277;(statearr_15291[13] = inst_15242__$1);
(statearr_15291[14] = inst_15241__$1);
return statearr_15291;
})();if(cljs.core.truth_(inst_15245))
{var statearr_15292_15325 = state_15277__$1;(statearr_15292_15325[1] = 11);
} else
{var statearr_15293_15326 = state_15277__$1;(statearr_15293_15326[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 11))
{var inst_15241 = (state_15277[14]);var inst_15247 = (inst_15241 == null);var state_15277__$1 = state_15277;if(cljs.core.truth_(inst_15247))
{var statearr_15294_15327 = state_15277__$1;(statearr_15294_15327[1] = 14);
} else
{var statearr_15295_15328 = state_15277__$1;(statearr_15295_15328[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 12))
{var inst_15256 = (state_15277[15]);var inst_15242 = (state_15277[13]);var inst_15237 = (state_15277[11]);var inst_15256__$1 = inst_15237.call(null,inst_15242);var state_15277__$1 = (function (){var statearr_15296 = state_15277;(statearr_15296[15] = inst_15256__$1);
return statearr_15296;
})();if(cljs.core.truth_(inst_15256__$1))
{var statearr_15297_15329 = state_15277__$1;(statearr_15297_15329[1] = 17);
} else
{var statearr_15298_15330 = state_15277__$1;(statearr_15298_15330[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 13))
{var inst_15273 = (state_15277[2]);var state_15277__$1 = state_15277;var statearr_15299_15331 = state_15277__$1;(statearr_15299_15331[2] = inst_15273);
(statearr_15299_15331[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 14))
{var inst_15242 = (state_15277[13]);var inst_15249 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15242);var state_15277__$1 = state_15277;var statearr_15300_15332 = state_15277__$1;(statearr_15300_15332[2] = inst_15249);
(statearr_15300_15332[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 15))
{var state_15277__$1 = state_15277;var statearr_15301_15333 = state_15277__$1;(statearr_15301_15333[2] = null);
(statearr_15301_15333[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 16))
{var inst_15252 = (state_15277[2]);var inst_15253 = calc_state.call(null);var inst_15226 = inst_15253;var state_15277__$1 = (function (){var statearr_15302 = state_15277;(statearr_15302[6] = inst_15226);
(statearr_15302[16] = inst_15252);
return statearr_15302;
})();var statearr_15303_15334 = state_15277__$1;(statearr_15303_15334[2] = null);
(statearr_15303_15334[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 17))
{var inst_15256 = (state_15277[15]);var state_15277__$1 = state_15277;var statearr_15304_15335 = state_15277__$1;(statearr_15304_15335[2] = inst_15256);
(statearr_15304_15335[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 18))
{var inst_15242 = (state_15277[13]);var inst_15237 = (state_15277[11]);var inst_15236 = (state_15277[12]);var inst_15259 = cljs.core.empty_QMARK_.call(null,inst_15237);var inst_15260 = inst_15236.call(null,inst_15242);var inst_15261 = cljs.core.not.call(null,inst_15260);var inst_15262 = (inst_15259) && (inst_15261);var state_15277__$1 = state_15277;var statearr_15305_15336 = state_15277__$1;(statearr_15305_15336[2] = inst_15262);
(statearr_15305_15336[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 19))
{var inst_15264 = (state_15277[2]);var state_15277__$1 = state_15277;if(cljs.core.truth_(inst_15264))
{var statearr_15306_15337 = state_15277__$1;(statearr_15306_15337[1] = 20);
} else
{var statearr_15307_15338 = state_15277__$1;(statearr_15307_15338[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 20))
{var inst_15241 = (state_15277[14]);var state_15277__$1 = state_15277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15277__$1,23,out,inst_15241);
} else
{if((state_val_15278 === 21))
{var state_15277__$1 = state_15277;var statearr_15308_15339 = state_15277__$1;(statearr_15308_15339[2] = null);
(statearr_15308_15339[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 22))
{var inst_15234 = (state_15277[10]);var inst_15270 = (state_15277[2]);var inst_15226 = inst_15234;var state_15277__$1 = (function (){var statearr_15309 = state_15277;(statearr_15309[6] = inst_15226);
(statearr_15309[17] = inst_15270);
return statearr_15309;
})();var statearr_15310_15340 = state_15277__$1;(statearr_15310_15340[2] = null);
(statearr_15310_15340[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15278 === 23))
{var inst_15267 = (state_15277[2]);var state_15277__$1 = state_15277;var statearr_15311_15341 = state_15277__$1;(statearr_15311_15341[2] = inst_15267);
(statearr_15311_15341[1] = 22);
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
var state_machine__5328__auto____0 = (function (){var statearr_15313 = (new Array(18));(statearr_15313[0] = state_machine__5328__auto__);
(statearr_15313[1] = 1);
return statearr_15313;
});
var state_machine__5328__auto____1 = (function (state_15277){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15277);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15277){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15314 = f__5378__auto__.call(null);(statearr_15314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15315);
return statearr_15314;
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
return (function (p1__15342_SHARP_){if(cljs.core.truth_(p1__15342_SHARP_.call(null,topic)))
{return p1__15342_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15342_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15466 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15467){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15467 = meta15467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15466.cljs$lang$type = true;
cljs.core.async.t15466.cljs$lang$ctorStr = "cljs.core.async/t15466";
cljs.core.async.t15466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15466");
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15468){var self__ = this;
var _15468__$1 = this;return self__.meta15467;
});})(mults,ensure_mult))
;
cljs.core.async.t15466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15468,meta15467__$1){var self__ = this;
var _15468__$1 = this;return (new cljs.core.async.t15466(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15467__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15466 = ((function (mults,ensure_mult){
return (function __GT_t15466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15467){return (new cljs.core.async.t15466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15467));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15466(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5377__auto___15589 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15541){var state_val_15542 = (state_15541[1]);if((state_val_15542 === 1))
{var state_15541__$1 = state_15541;var statearr_15543_15590 = state_15541__$1;(statearr_15543_15590[2] = null);
(statearr_15543_15590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 2))
{var state_15541__$1 = state_15541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15541__$1,4,ch);
} else
{if((state_val_15542 === 3))
{var inst_15539 = (state_15541[2]);var state_15541__$1 = state_15541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15541__$1,inst_15539);
} else
{if((state_val_15542 === 4))
{var inst_15471 = (state_15541[5]);var inst_15471__$1 = (state_15541[2]);var inst_15472 = (inst_15471__$1 == null);var state_15541__$1 = (function (){var statearr_15544 = state_15541;(statearr_15544[5] = inst_15471__$1);
return statearr_15544;
})();if(cljs.core.truth_(inst_15472))
{var statearr_15545_15591 = state_15541__$1;(statearr_15545_15591[1] = 5);
} else
{var statearr_15546_15592 = state_15541__$1;(statearr_15546_15592[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 5))
{var inst_15478 = cljs.core.deref.call(null,mults);var inst_15479 = cljs.core.vals.call(null,inst_15478);var inst_15480 = cljs.core.seq.call(null,inst_15479);var inst_15481 = inst_15480;var inst_15482 = null;var inst_15483 = 0;var inst_15484 = 0;var state_15541__$1 = (function (){var statearr_15547 = state_15541;(statearr_15547[6] = inst_15482);
(statearr_15547[7] = inst_15481);
(statearr_15547[8] = inst_15484);
(statearr_15547[9] = inst_15483);
return statearr_15547;
})();var statearr_15548_15593 = state_15541__$1;(statearr_15548_15593[2] = null);
(statearr_15548_15593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 6))
{var inst_15519 = (state_15541[10]);var inst_15471 = (state_15541[5]);var inst_15521 = (state_15541[11]);var inst_15519__$1 = topic_fn.call(null,inst_15471);var inst_15520 = cljs.core.deref.call(null,mults);var inst_15521__$1 = cljs.core.get.call(null,inst_15520,inst_15519__$1);var state_15541__$1 = (function (){var statearr_15549 = state_15541;(statearr_15549[10] = inst_15519__$1);
(statearr_15549[11] = inst_15521__$1);
return statearr_15549;
})();if(cljs.core.truth_(inst_15521__$1))
{var statearr_15550_15594 = state_15541__$1;(statearr_15550_15594[1] = 19);
} else
{var statearr_15551_15595 = state_15541__$1;(statearr_15551_15595[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 7))
{var inst_15537 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15552_15596 = state_15541__$1;(statearr_15552_15596[2] = inst_15537);
(statearr_15552_15596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 8))
{var inst_15484 = (state_15541[8]);var inst_15483 = (state_15541[9]);var inst_15486 = (inst_15484 < inst_15483);var inst_15487 = inst_15486;var state_15541__$1 = state_15541;if(cljs.core.truth_(inst_15487))
{var statearr_15556_15597 = state_15541__$1;(statearr_15556_15597[1] = 10);
} else
{var statearr_15557_15598 = state_15541__$1;(statearr_15557_15598[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 9))
{var inst_15517 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15558_15599 = state_15541__$1;(statearr_15558_15599[2] = inst_15517);
(statearr_15558_15599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 10))
{var inst_15482 = (state_15541[6]);var inst_15481 = (state_15541[7]);var inst_15484 = (state_15541[8]);var inst_15483 = (state_15541[9]);var inst_15489 = cljs.core._nth.call(null,inst_15482,inst_15484);var inst_15490 = cljs.core.async.muxch_STAR_.call(null,inst_15489);var inst_15491 = cljs.core.async.close_BANG_.call(null,inst_15490);var inst_15492 = (inst_15484 + 1);var tmp15553 = inst_15482;var tmp15554 = inst_15481;var tmp15555 = inst_15483;var inst_15481__$1 = tmp15554;var inst_15482__$1 = tmp15553;var inst_15483__$1 = tmp15555;var inst_15484__$1 = inst_15492;var state_15541__$1 = (function (){var statearr_15559 = state_15541;(statearr_15559[12] = inst_15491);
(statearr_15559[6] = inst_15482__$1);
(statearr_15559[7] = inst_15481__$1);
(statearr_15559[8] = inst_15484__$1);
(statearr_15559[9] = inst_15483__$1);
return statearr_15559;
})();var statearr_15560_15600 = state_15541__$1;(statearr_15560_15600[2] = null);
(statearr_15560_15600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 11))
{var inst_15495 = (state_15541[13]);var inst_15481 = (state_15541[7]);var inst_15495__$1 = cljs.core.seq.call(null,inst_15481);var state_15541__$1 = (function (){var statearr_15561 = state_15541;(statearr_15561[13] = inst_15495__$1);
return statearr_15561;
})();if(inst_15495__$1)
{var statearr_15562_15601 = state_15541__$1;(statearr_15562_15601[1] = 13);
} else
{var statearr_15563_15602 = state_15541__$1;(statearr_15563_15602[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 12))
{var inst_15515 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15564_15603 = state_15541__$1;(statearr_15564_15603[2] = inst_15515);
(statearr_15564_15603[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 13))
{var inst_15495 = (state_15541[13]);var inst_15497 = cljs.core.chunked_seq_QMARK_.call(null,inst_15495);var state_15541__$1 = state_15541;if(inst_15497)
{var statearr_15565_15604 = state_15541__$1;(statearr_15565_15604[1] = 16);
} else
{var statearr_15566_15605 = state_15541__$1;(statearr_15566_15605[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 14))
{var state_15541__$1 = state_15541;var statearr_15567_15606 = state_15541__$1;(statearr_15567_15606[2] = null);
(statearr_15567_15606[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 15))
{var inst_15513 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15568_15607 = state_15541__$1;(statearr_15568_15607[2] = inst_15513);
(statearr_15568_15607[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 16))
{var inst_15495 = (state_15541[13]);var inst_15499 = cljs.core.chunk_first.call(null,inst_15495);var inst_15500 = cljs.core.chunk_rest.call(null,inst_15495);var inst_15501 = cljs.core.count.call(null,inst_15499);var inst_15481 = inst_15500;var inst_15482 = inst_15499;var inst_15483 = inst_15501;var inst_15484 = 0;var state_15541__$1 = (function (){var statearr_15569 = state_15541;(statearr_15569[6] = inst_15482);
(statearr_15569[7] = inst_15481);
(statearr_15569[8] = inst_15484);
(statearr_15569[9] = inst_15483);
return statearr_15569;
})();var statearr_15570_15608 = state_15541__$1;(statearr_15570_15608[2] = null);
(statearr_15570_15608[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 17))
{var inst_15495 = (state_15541[13]);var inst_15504 = cljs.core.first.call(null,inst_15495);var inst_15505 = cljs.core.async.muxch_STAR_.call(null,inst_15504);var inst_15506 = cljs.core.async.close_BANG_.call(null,inst_15505);var inst_15507 = cljs.core.next.call(null,inst_15495);var inst_15481 = inst_15507;var inst_15482 = null;var inst_15483 = 0;var inst_15484 = 0;var state_15541__$1 = (function (){var statearr_15571 = state_15541;(statearr_15571[6] = inst_15482);
(statearr_15571[7] = inst_15481);
(statearr_15571[8] = inst_15484);
(statearr_15571[14] = inst_15506);
(statearr_15571[9] = inst_15483);
return statearr_15571;
})();var statearr_15572_15609 = state_15541__$1;(statearr_15572_15609[2] = null);
(statearr_15572_15609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 18))
{var inst_15510 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15573_15610 = state_15541__$1;(statearr_15573_15610[2] = inst_15510);
(statearr_15573_15610[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 19))
{var state_15541__$1 = state_15541;var statearr_15574_15611 = state_15541__$1;(statearr_15574_15611[2] = null);
(statearr_15574_15611[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 20))
{var state_15541__$1 = state_15541;var statearr_15575_15612 = state_15541__$1;(statearr_15575_15612[2] = null);
(statearr_15575_15612[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 21))
{var inst_15534 = (state_15541[2]);var state_15541__$1 = (function (){var statearr_15576 = state_15541;(statearr_15576[15] = inst_15534);
return statearr_15576;
})();var statearr_15577_15613 = state_15541__$1;(statearr_15577_15613[2] = null);
(statearr_15577_15613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 22))
{var inst_15531 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15578_15614 = state_15541__$1;(statearr_15578_15614[2] = inst_15531);
(statearr_15578_15614[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 23))
{var inst_15519 = (state_15541[10]);var inst_15523 = (state_15541[2]);var inst_15524 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15519);var state_15541__$1 = (function (){var statearr_15579 = state_15541;(statearr_15579[16] = inst_15523);
return statearr_15579;
})();var statearr_15580_15615 = state_15541__$1;(statearr_15580_15615[2] = inst_15524);
(statearr_15580_15615[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15542 === 24))
{try{var inst_15471 = (state_15541[5]);var inst_15521 = (state_15541[11]);var inst_15527 = cljs.core.async.muxch_STAR_.call(null,inst_15521);var state_15541__$1 = state_15541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15541__$1,25,inst_15527,inst_15471);
}catch (e15581){if((e15581 instanceof Object))
{var ex__5321__auto__ = e15581;var statearr_15582_15616 = state_15541;(statearr_15582_15616[1] = 23);
(statearr_15582_15616[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15581;
} else
{return null;
}
}
}} else
{if((state_val_15542 === 25))
{try{var inst_15529 = (state_15541[2]);var state_15541__$1 = state_15541;var statearr_15585_15617 = state_15541__$1;(statearr_15585_15617[2] = inst_15529);
(statearr_15585_15617[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15583){if((e15583 instanceof Object))
{var ex__5321__auto__ = e15583;var statearr_15584_15618 = state_15541;(statearr_15584_15618[1] = 23);
(statearr_15584_15618[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15583;
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
var state_machine__5328__auto____0 = (function (){var statearr_15587 = (new Array(17));(statearr_15587[0] = state_machine__5328__auto__);
(statearr_15587[1] = 1);
return statearr_15587;
});
var state_machine__5328__auto____1 = (function (state_15541){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15541);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15541){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15588 = f__5378__auto__.call(null);(statearr_15588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15589);
return statearr_15588;
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
,cljs.core.range.call(null,cnt));var c__5377__auto___15749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15721){var state_val_15722 = (state_15721[1]);if((state_val_15722 === 1))
{var state_15721__$1 = state_15721;var statearr_15723_15750 = state_15721__$1;(statearr_15723_15750[2] = null);
(statearr_15723_15750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 2))
{var inst_15685 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15686 = 0;var state_15721__$1 = (function (){var statearr_15724 = state_15721;(statearr_15724[5] = inst_15685);
(statearr_15724[6] = inst_15686);
return statearr_15724;
})();var statearr_15725_15751 = state_15721__$1;(statearr_15725_15751[2] = null);
(statearr_15725_15751[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 3))
{var inst_15719 = (state_15721[2]);var state_15721__$1 = state_15721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15721__$1,inst_15719);
} else
{if((state_val_15722 === 4))
{var inst_15686 = (state_15721[6]);var inst_15688 = (inst_15686 < cnt);var state_15721__$1 = state_15721;if(cljs.core.truth_(inst_15688))
{var statearr_15726_15752 = state_15721__$1;(statearr_15726_15752[1] = 6);
} else
{var statearr_15727_15753 = state_15721__$1;(statearr_15727_15753[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 5))
{var inst_15705 = (state_15721[2]);var state_15721__$1 = (function (){var statearr_15728 = state_15721;(statearr_15728[7] = inst_15705);
return statearr_15728;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15721__$1,12,dchan);
} else
{if((state_val_15722 === 6))
{var state_15721__$1 = state_15721;var statearr_15729_15754 = state_15721__$1;(statearr_15729_15754[2] = null);
(statearr_15729_15754[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 7))
{var state_15721__$1 = state_15721;var statearr_15730_15755 = state_15721__$1;(statearr_15730_15755[2] = null);
(statearr_15730_15755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 8))
{var inst_15703 = (state_15721[2]);var state_15721__$1 = state_15721;var statearr_15731_15756 = state_15721__$1;(statearr_15731_15756[2] = inst_15703);
(statearr_15731_15756[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 9))
{var inst_15686 = (state_15721[6]);var inst_15698 = (state_15721[2]);var inst_15699 = (inst_15686 + 1);var inst_15686__$1 = inst_15699;var state_15721__$1 = (function (){var statearr_15732 = state_15721;(statearr_15732[8] = inst_15698);
(statearr_15732[6] = inst_15686__$1);
return statearr_15732;
})();var statearr_15733_15757 = state_15721__$1;(statearr_15733_15757[2] = null);
(statearr_15733_15757[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 10))
{var inst_15690 = (state_15721[2]);var inst_15691 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15721__$1 = (function (){var statearr_15734 = state_15721;(statearr_15734[9] = inst_15690);
return statearr_15734;
})();var statearr_15735_15758 = state_15721__$1;(statearr_15735_15758[2] = inst_15691);
(statearr_15735_15758[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 11))
{try{var inst_15686 = (state_15721[6]);var inst_15694 = chs__$1.call(null,inst_15686);var inst_15695 = done.call(null,inst_15686);var inst_15696 = cljs.core.async.take_BANG_.call(null,inst_15694,inst_15695);var state_15721__$1 = state_15721;var statearr_15738_15759 = state_15721__$1;(statearr_15738_15759[2] = inst_15696);
(statearr_15738_15759[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15736){if((e15736 instanceof Object))
{var ex__5321__auto__ = e15736;var statearr_15737_15760 = state_15721;(statearr_15737_15760[1] = 10);
(statearr_15737_15760[2] = ex__5321__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15736;
} else
{return null;
}
}
}} else
{if((state_val_15722 === 12))
{var inst_15707 = (state_15721[10]);var inst_15707__$1 = (state_15721[2]);var inst_15708 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15707__$1);var state_15721__$1 = (function (){var statearr_15739 = state_15721;(statearr_15739[10] = inst_15707__$1);
return statearr_15739;
})();if(cljs.core.truth_(inst_15708))
{var statearr_15740_15761 = state_15721__$1;(statearr_15740_15761[1] = 13);
} else
{var statearr_15741_15762 = state_15721__$1;(statearr_15741_15762[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 13))
{var inst_15710 = cljs.core.async.close_BANG_.call(null,out);var state_15721__$1 = state_15721;var statearr_15742_15763 = state_15721__$1;(statearr_15742_15763[2] = inst_15710);
(statearr_15742_15763[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 14))
{var inst_15707 = (state_15721[10]);var inst_15712 = cljs.core.apply.call(null,f,inst_15707);var state_15721__$1 = state_15721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15721__$1,16,out,inst_15712);
} else
{if((state_val_15722 === 15))
{var inst_15717 = (state_15721[2]);var state_15721__$1 = state_15721;var statearr_15743_15764 = state_15721__$1;(statearr_15743_15764[2] = inst_15717);
(statearr_15743_15764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15722 === 16))
{var inst_15714 = (state_15721[2]);var state_15721__$1 = (function (){var statearr_15744 = state_15721;(statearr_15744[11] = inst_15714);
return statearr_15744;
})();var statearr_15745_15765 = state_15721__$1;(statearr_15745_15765[2] = null);
(statearr_15745_15765[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_15747 = (new Array(12));(statearr_15747[0] = state_machine__5328__auto__);
(statearr_15747[1] = 1);
return statearr_15747;
});
var state_machine__5328__auto____1 = (function (state_15721){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15721);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15721){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15748 = f__5378__auto__.call(null);(statearr_15748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15749);
return statearr_15748;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5377__auto___15865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_15845){var state_val_15846 = (state_15845[1]);if((state_val_15846 === 1))
{var inst_15816 = cljs.core.vec.call(null,chs);var inst_15817 = inst_15816;var state_15845__$1 = (function (){var statearr_15847 = state_15845;(statearr_15847[5] = inst_15817);
return statearr_15847;
})();var statearr_15848_15866 = state_15845__$1;(statearr_15848_15866[2] = null);
(statearr_15848_15866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 2))
{var inst_15817 = (state_15845[5]);var inst_15819 = cljs.core.count.call(null,inst_15817);var inst_15820 = (inst_15819 > 0);var state_15845__$1 = state_15845;if(cljs.core.truth_(inst_15820))
{var statearr_15849_15867 = state_15845__$1;(statearr_15849_15867[1] = 4);
} else
{var statearr_15850_15868 = state_15845__$1;(statearr_15850_15868[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 3))
{var inst_15843 = (state_15845[2]);var state_15845__$1 = state_15845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15845__$1,inst_15843);
} else
{if((state_val_15846 === 4))
{var inst_15817 = (state_15845[5]);var state_15845__$1 = state_15845;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15845__$1,7,inst_15817);
} else
{if((state_val_15846 === 5))
{var inst_15839 = cljs.core.async.close_BANG_.call(null,out);var state_15845__$1 = state_15845;var statearr_15851_15869 = state_15845__$1;(statearr_15851_15869[2] = inst_15839);
(statearr_15851_15869[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 6))
{var inst_15841 = (state_15845[2]);var state_15845__$1 = state_15845;var statearr_15852_15870 = state_15845__$1;(statearr_15852_15870[2] = inst_15841);
(statearr_15852_15870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 7))
{var inst_15824 = (state_15845[6]);var inst_15825 = (state_15845[7]);var inst_15824__$1 = (state_15845[2]);var inst_15825__$1 = cljs.core.nth.call(null,inst_15824__$1,0,null);var inst_15826 = cljs.core.nth.call(null,inst_15824__$1,1,null);var inst_15827 = (inst_15825__$1 == null);var state_15845__$1 = (function (){var statearr_15853 = state_15845;(statearr_15853[6] = inst_15824__$1);
(statearr_15853[7] = inst_15825__$1);
(statearr_15853[8] = inst_15826);
return statearr_15853;
})();if(cljs.core.truth_(inst_15827))
{var statearr_15854_15871 = state_15845__$1;(statearr_15854_15871[1] = 8);
} else
{var statearr_15855_15872 = state_15845__$1;(statearr_15855_15872[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 8))
{var inst_15817 = (state_15845[5]);var inst_15824 = (state_15845[6]);var inst_15825 = (state_15845[7]);var inst_15826 = (state_15845[8]);var inst_15829 = (function (){var c = inst_15826;var v = inst_15825;var vec__15822 = inst_15824;var cs = inst_15817;return ((function (c,v,vec__15822,cs,inst_15817,inst_15824,inst_15825,inst_15826,state_val_15846){
return (function (p1__15766_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15766_SHARP_);
});
;})(c,v,vec__15822,cs,inst_15817,inst_15824,inst_15825,inst_15826,state_val_15846))
})();var inst_15830 = cljs.core.filterv.call(null,inst_15829,inst_15817);var inst_15817__$1 = inst_15830;var state_15845__$1 = (function (){var statearr_15856 = state_15845;(statearr_15856[5] = inst_15817__$1);
return statearr_15856;
})();var statearr_15857_15873 = state_15845__$1;(statearr_15857_15873[2] = null);
(statearr_15857_15873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 9))
{var inst_15825 = (state_15845[7]);var state_15845__$1 = state_15845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15845__$1,11,out,inst_15825);
} else
{if((state_val_15846 === 10))
{var inst_15837 = (state_15845[2]);var state_15845__$1 = state_15845;var statearr_15859_15874 = state_15845__$1;(statearr_15859_15874[2] = inst_15837);
(statearr_15859_15874[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15846 === 11))
{var inst_15817 = (state_15845[5]);var inst_15834 = (state_15845[2]);var tmp15858 = inst_15817;var inst_15817__$1 = tmp15858;var state_15845__$1 = (function (){var statearr_15860 = state_15845;(statearr_15860[9] = inst_15834);
(statearr_15860[5] = inst_15817__$1);
return statearr_15860;
})();var statearr_15861_15875 = state_15845__$1;(statearr_15861_15875[2] = null);
(statearr_15861_15875[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_15863 = (new Array(10));(statearr_15863[0] = state_machine__5328__auto__);
(statearr_15863[1] = 1);
return statearr_15863;
});
var state_machine__5328__auto____1 = (function (state_15845){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_15845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_15845){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_15845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_15864 = f__5378__auto__.call(null);(statearr_15864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___15865);
return statearr_15864;
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