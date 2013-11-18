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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14838 = (function (f,fn_handler,meta14839){
this.f = f;
this.fn_handler = fn_handler;
this.meta14839 = meta14839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14838.cljs$lang$type = true;
cljs.core.async.t14838.cljs$lang$ctorStr = "cljs.core.async/t14838";
cljs.core.async.t14838.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14838");
});
cljs.core.async.t14838.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14840){var self__ = this;
var _14840__$1 = this;return self__.meta14839;
});
cljs.core.async.t14838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14840,meta14839__$1){var self__ = this;
var _14840__$1 = this;return (new cljs.core.async.t14838(self__.f,self__.fn_handler,meta14839__$1));
});
cljs.core.async.__GT_t14838 = (function __GT_t14838(f__$1,fn_handler__$1,meta14839){return (new cljs.core.async.t14838(f__$1,fn_handler__$1,meta14839));
});
}
return (new cljs.core.async.t14838(f,fn_handler,null));
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
{var val_14841 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14841);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14841);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3891__auto___14842 = n;var x_14843 = 0;while(true){
if((x_14843 < n__3891__auto___14842))
{(a[x_14843] = 0);
{
var G__14844 = (x_14843 + 1);
x_14843 = G__14844;
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
var G__14845 = (i + 1);
i = G__14845;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14849 = (function (flag,alt_flag,meta14850){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14850 = meta14850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14849.cljs$lang$type = true;
cljs.core.async.t14849.cljs$lang$ctorStr = "cljs.core.async/t14849";
cljs.core.async.t14849.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14849");
});
cljs.core.async.t14849.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14851){var self__ = this;
var _14851__$1 = this;return self__.meta14850;
});
cljs.core.async.t14849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14851,meta14850__$1){var self__ = this;
var _14851__$1 = this;return (new cljs.core.async.t14849(self__.flag,self__.alt_flag,meta14850__$1));
});
cljs.core.async.__GT_t14849 = (function __GT_t14849(flag__$1,alt_flag__$1,meta14850){return (new cljs.core.async.t14849(flag__$1,alt_flag__$1,meta14850));
});
}
return (new cljs.core.async.t14849(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14855 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14855 = (function (cb,flag,alt_handler,meta14856){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14856 = meta14856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14855.cljs$lang$type = true;
cljs.core.async.t14855.cljs$lang$ctorStr = "cljs.core.async/t14855";
cljs.core.async.t14855.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14855");
});
cljs.core.async.t14855.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14857){var self__ = this;
var _14857__$1 = this;return self__.meta14856;
});
cljs.core.async.t14855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14857,meta14856__$1){var self__ = this;
var _14857__$1 = this;return (new cljs.core.async.t14855(self__.cb,self__.flag,self__.alt_handler,meta14856__$1));
});
cljs.core.async.__GT_t14855 = (function __GT_t14855(cb__$1,flag__$1,alt_handler__$1,meta14856){return (new cljs.core.async.t14855(cb__$1,flag__$1,alt_handler__$1,meta14856));
});
}
return (new cljs.core.async.t14855(cb,flag,alt_handler,null));
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
return (function (p1__14858_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__14858_SHARP_,port], true));
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
var G__14859 = (i + 1);
i = G__14859;
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
var alts_BANG___delegate = function (ports,p__14860){var map__14862 = p__14860;var map__14862__$1 = ((cljs.core.seq_QMARK_.call(null,map__14862))?cljs.core.apply.call(null,cljs.core.hash_map,map__14862):map__14862);var opts = map__14862__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14860 = null;if (arguments.length > 1) {
  p__14860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14860);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14863){
var ports = cljs.core.first(arglist__14863);
var p__14860 = cljs.core.rest(arglist__14863);
return alts_BANG___delegate(ports,p__14860);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14871 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14871 = (function (ch,f,map_LT_,meta14872){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14872 = meta14872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14871.cljs$lang$type = true;
cljs.core.async.t14871.cljs$lang$ctorStr = "cljs.core.async/t14871";
cljs.core.async.t14871.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14871");
});
cljs.core.async.t14871.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14871.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14874 = (function (fn1,_,meta14872,ch,f,map_LT_,meta14875){
this.fn1 = fn1;
this._ = _;
this.meta14872 = meta14872;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14875 = meta14875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14874.cljs$lang$type = true;
cljs.core.async.t14874.cljs$lang$ctorStr = "cljs.core.async/t14874";
cljs.core.async.t14874.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14874");
});
cljs.core.async.t14874.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14874.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14864_SHARP_){return f1.call(null,(((p1__14864_SHARP_ == null))?null:self__.f.call(null,p1__14864_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14876){var self__ = this;
var _14876__$1 = this;return self__.meta14875;
});
cljs.core.async.t14874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14876,meta14875__$1){var self__ = this;
var _14876__$1 = this;return (new cljs.core.async.t14874(self__.fn1,self__._,self__.meta14872,self__.ch,self__.f,self__.map_LT_,meta14875__$1));
});
cljs.core.async.__GT_t14874 = (function __GT_t14874(fn1__$1,___$2,meta14872__$1,ch__$2,f__$2,map_LT___$2,meta14875){return (new cljs.core.async.t14874(fn1__$1,___$2,meta14872__$1,ch__$2,f__$2,map_LT___$2,meta14875));
});
}
return (new cljs.core.async.t14874(fn1,___$1,self__.meta14872,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14871.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14873){var self__ = this;
var _14873__$1 = this;return self__.meta14872;
});
cljs.core.async.t14871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14873,meta14872__$1){var self__ = this;
var _14873__$1 = this;return (new cljs.core.async.t14871(self__.ch,self__.f,self__.map_LT_,meta14872__$1));
});
cljs.core.async.__GT_t14871 = (function __GT_t14871(ch__$1,f__$1,map_LT___$1,meta14872){return (new cljs.core.async.t14871(ch__$1,f__$1,map_LT___$1,meta14872));
});
}
return (new cljs.core.async.t14871(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14880 = (function (ch,f,map_GT_,meta14881){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14881 = meta14881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14880.cljs$lang$type = true;
cljs.core.async.t14880.cljs$lang$ctorStr = "cljs.core.async/t14880";
cljs.core.async.t14880.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14880");
});
cljs.core.async.t14880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14880.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14882){var self__ = this;
var _14882__$1 = this;return self__.meta14881;
});
cljs.core.async.t14880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14882,meta14881__$1){var self__ = this;
var _14882__$1 = this;return (new cljs.core.async.t14880(self__.ch,self__.f,self__.map_GT_,meta14881__$1));
});
cljs.core.async.__GT_t14880 = (function __GT_t14880(ch__$1,f__$1,map_GT___$1,meta14881){return (new cljs.core.async.t14880(ch__$1,f__$1,map_GT___$1,meta14881));
});
}
return (new cljs.core.async.t14880(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14886 = (function (ch,p,filter_GT_,meta14887){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14887 = meta14887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14886.cljs$lang$type = true;
cljs.core.async.t14886.cljs$lang$ctorStr = "cljs.core.async/t14886";
cljs.core.async.t14886.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t14886");
});
cljs.core.async.t14886.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14886.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14886.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14888){var self__ = this;
var _14888__$1 = this;return self__.meta14887;
});
cljs.core.async.t14886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14888,meta14887__$1){var self__ = this;
var _14888__$1 = this;return (new cljs.core.async.t14886(self__.ch,self__.p,self__.filter_GT_,meta14887__$1));
});
cljs.core.async.__GT_t14886 = (function __GT_t14886(ch__$1,p__$1,filter_GT___$1,meta14887){return (new cljs.core.async.t14886(ch__$1,p__$1,filter_GT___$1,meta14887));
});
}
return (new cljs.core.async.t14886(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___14963 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_14946){var state_val_14947 = (state_14946[1]);if((state_val_14947 === 1))
{var state_14946__$1 = state_14946;var statearr_14948_14964 = state_14946__$1;(statearr_14948_14964[2] = null);
(statearr_14948_14964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 2))
{var state_14946__$1 = state_14946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14946__$1,4,ch);
} else
{if((state_val_14947 === 3))
{var inst_14944 = (state_14946[2]);var state_14946__$1 = state_14946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14946__$1,inst_14944);
} else
{if((state_val_14947 === 4))
{var inst_14928 = (state_14946[5]);var inst_14928__$1 = (state_14946[2]);var inst_14929 = (inst_14928__$1 == null);var state_14946__$1 = (function (){var statearr_14949 = state_14946;(statearr_14949[5] = inst_14928__$1);
return statearr_14949;
})();if(cljs.core.truth_(inst_14929))
{var statearr_14950_14965 = state_14946__$1;(statearr_14950_14965[1] = 5);
} else
{var statearr_14951_14966 = state_14946__$1;(statearr_14951_14966[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 5))
{var inst_14931 = cljs.core.async.close_BANG_.call(null,out);var state_14946__$1 = state_14946;var statearr_14952_14967 = state_14946__$1;(statearr_14952_14967[2] = inst_14931);
(statearr_14952_14967[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 6))
{var inst_14928 = (state_14946[5]);var inst_14933 = p.call(null,inst_14928);var state_14946__$1 = state_14946;if(cljs.core.truth_(inst_14933))
{var statearr_14953_14968 = state_14946__$1;(statearr_14953_14968[1] = 8);
} else
{var statearr_14954_14969 = state_14946__$1;(statearr_14954_14969[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 7))
{var inst_14942 = (state_14946[2]);var state_14946__$1 = state_14946;var statearr_14955_14970 = state_14946__$1;(statearr_14955_14970[2] = inst_14942);
(statearr_14955_14970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 8))
{var inst_14928 = (state_14946[5]);var state_14946__$1 = state_14946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14946__$1,11,out,inst_14928);
} else
{if((state_val_14947 === 9))
{var state_14946__$1 = state_14946;var statearr_14956_14971 = state_14946__$1;(statearr_14956_14971[2] = null);
(statearr_14956_14971[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 10))
{var inst_14939 = (state_14946[2]);var state_14946__$1 = (function (){var statearr_14957 = state_14946;(statearr_14957[6] = inst_14939);
return statearr_14957;
})();var statearr_14958_14972 = state_14946__$1;(statearr_14958_14972[2] = null);
(statearr_14958_14972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14947 === 11))
{var inst_14936 = (state_14946[2]);var state_14946__$1 = state_14946;var statearr_14959_14973 = state_14946__$1;(statearr_14959_14973[2] = inst_14936);
(statearr_14959_14973[1] = 10);
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
var state_machine__5331__auto____0 = (function (){var statearr_14961 = (new Array(7));(statearr_14961[0] = state_machine__5331__auto__);
(statearr_14961[1] = 1);
return statearr_14961;
});
var state_machine__5331__auto____1 = (function (state_14946){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_14946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_14946){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_14946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_14962 = f__5381__auto__.call(null);(statearr_14962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___14963);
return statearr_14962;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15121){var state_val_15122 = (state_15121[1]);if((state_val_15122 === 1))
{var state_15121__$1 = state_15121;var statearr_15123_15156 = state_15121__$1;(statearr_15123_15156[2] = null);
(statearr_15123_15156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 2))
{var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15121__$1,4,in$);
} else
{if((state_val_15122 === 3))
{var inst_15119 = (state_15121[2]);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15121__$1,inst_15119);
} else
{if((state_val_15122 === 4))
{var inst_15067 = (state_15121[5]);var inst_15067__$1 = (state_15121[2]);var inst_15068 = (inst_15067__$1 == null);var state_15121__$1 = (function (){var statearr_15124 = state_15121;(statearr_15124[5] = inst_15067__$1);
return statearr_15124;
})();if(cljs.core.truth_(inst_15068))
{var statearr_15125_15157 = state_15121__$1;(statearr_15125_15157[1] = 5);
} else
{var statearr_15126_15158 = state_15121__$1;(statearr_15126_15158[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 5))
{var inst_15070 = cljs.core.async.close_BANG_.call(null,out);var state_15121__$1 = state_15121;var statearr_15127_15159 = state_15121__$1;(statearr_15127_15159[2] = inst_15070);
(statearr_15127_15159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 6))
{var inst_15067 = (state_15121[5]);var inst_15072 = f.call(null,inst_15067);var inst_15077 = cljs.core.seq.call(null,inst_15072);var inst_15078 = inst_15077;var inst_15079 = null;var inst_15080 = 0;var inst_15081 = 0;var state_15121__$1 = (function (){var statearr_15128 = state_15121;(statearr_15128[6] = inst_15080);
(statearr_15128[7] = inst_15081);
(statearr_15128[8] = inst_15078);
(statearr_15128[9] = inst_15079);
return statearr_15128;
})();var statearr_15129_15160 = state_15121__$1;(statearr_15129_15160[2] = null);
(statearr_15129_15160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 7))
{var inst_15117 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15130_15161 = state_15121__$1;(statearr_15130_15161[2] = inst_15117);
(statearr_15130_15161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 8))
{var inst_15080 = (state_15121[6]);var inst_15081 = (state_15121[7]);var inst_15083 = (inst_15081 < inst_15080);var inst_15084 = inst_15083;var state_15121__$1 = state_15121;if(cljs.core.truth_(inst_15084))
{var statearr_15131_15162 = state_15121__$1;(statearr_15131_15162[1] = 10);
} else
{var statearr_15132_15163 = state_15121__$1;(statearr_15132_15163[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 9))
{var inst_15114 = (state_15121[2]);var state_15121__$1 = (function (){var statearr_15133 = state_15121;(statearr_15133[10] = inst_15114);
return statearr_15133;
})();var statearr_15134_15164 = state_15121__$1;(statearr_15134_15164[2] = null);
(statearr_15134_15164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 10))
{var inst_15081 = (state_15121[7]);var inst_15079 = (state_15121[9]);var inst_15086 = cljs.core._nth.call(null,inst_15079,inst_15081);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15121__$1,13,out,inst_15086);
} else
{if((state_val_15122 === 11))
{var inst_15078 = (state_15121[8]);var inst_15092 = (state_15121[11]);var inst_15092__$1 = cljs.core.seq.call(null,inst_15078);var state_15121__$1 = (function (){var statearr_15138 = state_15121;(statearr_15138[11] = inst_15092__$1);
return statearr_15138;
})();if(inst_15092__$1)
{var statearr_15139_15165 = state_15121__$1;(statearr_15139_15165[1] = 14);
} else
{var statearr_15140_15166 = state_15121__$1;(statearr_15140_15166[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 12))
{var inst_15112 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15141_15167 = state_15121__$1;(statearr_15141_15167[2] = inst_15112);
(statearr_15141_15167[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 13))
{var inst_15080 = (state_15121[6]);var inst_15081 = (state_15121[7]);var inst_15078 = (state_15121[8]);var inst_15079 = (state_15121[9]);var inst_15088 = (state_15121[2]);var inst_15089 = (inst_15081 + 1);var tmp15135 = inst_15080;var tmp15136 = inst_15078;var tmp15137 = inst_15079;var inst_15078__$1 = tmp15136;var inst_15079__$1 = tmp15137;var inst_15080__$1 = tmp15135;var inst_15081__$1 = inst_15089;var state_15121__$1 = (function (){var statearr_15142 = state_15121;(statearr_15142[6] = inst_15080__$1);
(statearr_15142[7] = inst_15081__$1);
(statearr_15142[8] = inst_15078__$1);
(statearr_15142[9] = inst_15079__$1);
(statearr_15142[12] = inst_15088);
return statearr_15142;
})();var statearr_15143_15168 = state_15121__$1;(statearr_15143_15168[2] = null);
(statearr_15143_15168[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 14))
{var inst_15092 = (state_15121[11]);var inst_15094 = cljs.core.chunked_seq_QMARK_.call(null,inst_15092);var state_15121__$1 = state_15121;if(inst_15094)
{var statearr_15144_15169 = state_15121__$1;(statearr_15144_15169[1] = 17);
} else
{var statearr_15145_15170 = state_15121__$1;(statearr_15145_15170[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 15))
{var state_15121__$1 = state_15121;var statearr_15146_15171 = state_15121__$1;(statearr_15146_15171[2] = null);
(statearr_15146_15171[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 16))
{var inst_15110 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15147_15172 = state_15121__$1;(statearr_15147_15172[2] = inst_15110);
(statearr_15147_15172[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 17))
{var inst_15092 = (state_15121[11]);var inst_15096 = cljs.core.chunk_first.call(null,inst_15092);var inst_15097 = cljs.core.chunk_rest.call(null,inst_15092);var inst_15098 = cljs.core.count.call(null,inst_15096);var inst_15078 = inst_15097;var inst_15079 = inst_15096;var inst_15080 = inst_15098;var inst_15081 = 0;var state_15121__$1 = (function (){var statearr_15148 = state_15121;(statearr_15148[6] = inst_15080);
(statearr_15148[7] = inst_15081);
(statearr_15148[8] = inst_15078);
(statearr_15148[9] = inst_15079);
return statearr_15148;
})();var statearr_15149_15173 = state_15121__$1;(statearr_15149_15173[2] = null);
(statearr_15149_15173[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 18))
{var inst_15092 = (state_15121[11]);var inst_15101 = cljs.core.first.call(null,inst_15092);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15121__$1,20,out,inst_15101);
} else
{if((state_val_15122 === 19))
{var inst_15107 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15150_15174 = state_15121__$1;(statearr_15150_15174[2] = inst_15107);
(statearr_15150_15174[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 20))
{var inst_15092 = (state_15121[11]);var inst_15103 = (state_15121[2]);var inst_15104 = cljs.core.next.call(null,inst_15092);var inst_15078 = inst_15104;var inst_15079 = null;var inst_15080 = 0;var inst_15081 = 0;var state_15121__$1 = (function (){var statearr_15151 = state_15121;(statearr_15151[6] = inst_15080);
(statearr_15151[7] = inst_15081);
(statearr_15151[13] = inst_15103);
(statearr_15151[8] = inst_15078);
(statearr_15151[9] = inst_15079);
return statearr_15151;
})();var statearr_15152_15175 = state_15121__$1;(statearr_15152_15175[2] = null);
(statearr_15152_15175[1] = 8);
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
var state_machine__5331__auto____0 = (function (){var statearr_15154 = (new Array(14));(statearr_15154[0] = state_machine__5331__auto__);
(statearr_15154[1] = 1);
return statearr_15154;
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
})();var state__5382__auto__ = (function (){var statearr_15155 = f__5381__auto__.call(null);(statearr_15155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15155;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5380__auto___15248 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15231){var state_val_15232 = (state_15231[1]);if((state_val_15232 === 1))
{var state_15231__$1 = state_15231;var statearr_15233_15249 = state_15231__$1;(statearr_15233_15249[2] = null);
(statearr_15233_15249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 2))
{var state_15231__$1 = state_15231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15231__$1,4,from);
} else
{if((state_val_15232 === 3))
{var inst_15229 = (state_15231[2]);var state_15231__$1 = state_15231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15231__$1,inst_15229);
} else
{if((state_val_15232 === 4))
{var inst_15214 = (state_15231[5]);var inst_15214__$1 = (state_15231[2]);var inst_15215 = (inst_15214__$1 == null);var state_15231__$1 = (function (){var statearr_15234 = state_15231;(statearr_15234[5] = inst_15214__$1);
return statearr_15234;
})();if(cljs.core.truth_(inst_15215))
{var statearr_15235_15250 = state_15231__$1;(statearr_15235_15250[1] = 5);
} else
{var statearr_15236_15251 = state_15231__$1;(statearr_15236_15251[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 5))
{var state_15231__$1 = state_15231;if(cljs.core.truth_(close_QMARK_))
{var statearr_15237_15252 = state_15231__$1;(statearr_15237_15252[1] = 8);
} else
{var statearr_15238_15253 = state_15231__$1;(statearr_15238_15253[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 6))
{var inst_15214 = (state_15231[5]);var state_15231__$1 = state_15231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15231__$1,11,to,inst_15214);
} else
{if((state_val_15232 === 7))
{var inst_15227 = (state_15231[2]);var state_15231__$1 = state_15231;var statearr_15239_15254 = state_15231__$1;(statearr_15239_15254[2] = inst_15227);
(statearr_15239_15254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 8))
{var inst_15218 = cljs.core.async.close_BANG_.call(null,to);var state_15231__$1 = state_15231;var statearr_15240_15255 = state_15231__$1;(statearr_15240_15255[2] = inst_15218);
(statearr_15240_15255[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 9))
{var state_15231__$1 = state_15231;var statearr_15241_15256 = state_15231__$1;(statearr_15241_15256[2] = null);
(statearr_15241_15256[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 10))
{var inst_15221 = (state_15231[2]);var state_15231__$1 = state_15231;var statearr_15242_15257 = state_15231__$1;(statearr_15242_15257[2] = inst_15221);
(statearr_15242_15257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15232 === 11))
{var inst_15224 = (state_15231[2]);var state_15231__$1 = (function (){var statearr_15243 = state_15231;(statearr_15243[6] = inst_15224);
return statearr_15243;
})();var statearr_15244_15258 = state_15231__$1;(statearr_15244_15258[2] = null);
(statearr_15244_15258[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_15246 = (new Array(7));(statearr_15246[0] = state_machine__5331__auto__);
(statearr_15246[1] = 1);
return statearr_15246;
});
var state_machine__5331__auto____1 = (function (state_15231){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15231);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15231){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15247 = f__5381__auto__.call(null);(statearr_15247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15248);
return statearr_15247;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5380__auto___15337 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15319){var state_val_15320 = (state_15319[1]);if((state_val_15320 === 1))
{var state_15319__$1 = state_15319;var statearr_15321_15338 = state_15319__$1;(statearr_15321_15338[2] = null);
(statearr_15321_15338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 2))
{var state_15319__$1 = state_15319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15319__$1,4,ch);
} else
{if((state_val_15320 === 3))
{var inst_15317 = (state_15319[2]);var state_15319__$1 = state_15319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15319__$1,inst_15317);
} else
{if((state_val_15320 === 4))
{var inst_15300 = (state_15319[5]);var inst_15300__$1 = (state_15319[2]);var inst_15301 = (inst_15300__$1 == null);var state_15319__$1 = (function (){var statearr_15322 = state_15319;(statearr_15322[5] = inst_15300__$1);
return statearr_15322;
})();if(cljs.core.truth_(inst_15301))
{var statearr_15323_15339 = state_15319__$1;(statearr_15323_15339[1] = 5);
} else
{var statearr_15324_15340 = state_15319__$1;(statearr_15324_15340[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 5))
{var inst_15303 = cljs.core.async.close_BANG_.call(null,tc);var inst_15304 = cljs.core.async.close_BANG_.call(null,fc);var state_15319__$1 = (function (){var statearr_15325 = state_15319;(statearr_15325[6] = inst_15303);
return statearr_15325;
})();var statearr_15326_15341 = state_15319__$1;(statearr_15326_15341[2] = inst_15304);
(statearr_15326_15341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 6))
{var inst_15300 = (state_15319[5]);var inst_15306 = p.call(null,inst_15300);var state_15319__$1 = state_15319;if(cljs.core.truth_(inst_15306))
{var statearr_15327_15342 = state_15319__$1;(statearr_15327_15342[1] = 9);
} else
{var statearr_15328_15343 = state_15319__$1;(statearr_15328_15343[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 7))
{var inst_15315 = (state_15319[2]);var state_15319__$1 = state_15319;var statearr_15329_15344 = state_15319__$1;(statearr_15329_15344[2] = inst_15315);
(statearr_15329_15344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 8))
{var inst_15312 = (state_15319[2]);var state_15319__$1 = (function (){var statearr_15330 = state_15319;(statearr_15330[7] = inst_15312);
return statearr_15330;
})();var statearr_15331_15345 = state_15319__$1;(statearr_15331_15345[2] = null);
(statearr_15331_15345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 9))
{var state_15319__$1 = state_15319;var statearr_15332_15346 = state_15319__$1;(statearr_15332_15346[2] = tc);
(statearr_15332_15346[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 10))
{var state_15319__$1 = state_15319;var statearr_15333_15347 = state_15319__$1;(statearr_15333_15347[2] = fc);
(statearr_15333_15347[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 11))
{var inst_15300 = (state_15319[5]);var inst_15310 = (state_15319[2]);var state_15319__$1 = state_15319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15319__$1,8,inst_15310,inst_15300);
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
var state_machine__5331__auto____0 = (function (){var statearr_15335 = (new Array(8));(statearr_15335[0] = state_machine__5331__auto__);
(statearr_15335[1] = 1);
return statearr_15335;
});
var state_machine__5331__auto____1 = (function (state_15319){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15319){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15336 = f__5381__auto__.call(null);(statearr_15336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15337);
return statearr_15336;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15390){var state_val_15391 = (state_15390[1]);if((state_val_15391 === 7))
{var inst_15386 = (state_15390[2]);var state_15390__$1 = state_15390;var statearr_15392_15404 = state_15390__$1;(statearr_15392_15404[2] = inst_15386);
(statearr_15392_15404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15391 === 6))
{var inst_15376 = (state_15390[5]);var inst_15379 = (state_15390[6]);var inst_15383 = f.call(null,inst_15376,inst_15379);var inst_15376__$1 = inst_15383;var state_15390__$1 = (function (){var statearr_15393 = state_15390;(statearr_15393[5] = inst_15376__$1);
return statearr_15393;
})();var statearr_15394_15405 = state_15390__$1;(statearr_15394_15405[2] = null);
(statearr_15394_15405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15391 === 5))
{var inst_15376 = (state_15390[5]);var state_15390__$1 = state_15390;var statearr_15395_15406 = state_15390__$1;(statearr_15395_15406[2] = inst_15376);
(statearr_15395_15406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15391 === 4))
{var inst_15379 = (state_15390[6]);var inst_15379__$1 = (state_15390[2]);var inst_15380 = (inst_15379__$1 == null);var state_15390__$1 = (function (){var statearr_15396 = state_15390;(statearr_15396[6] = inst_15379__$1);
return statearr_15396;
})();if(cljs.core.truth_(inst_15380))
{var statearr_15397_15407 = state_15390__$1;(statearr_15397_15407[1] = 5);
} else
{var statearr_15398_15408 = state_15390__$1;(statearr_15398_15408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15391 === 3))
{var inst_15388 = (state_15390[2]);var state_15390__$1 = state_15390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15390__$1,inst_15388);
} else
{if((state_val_15391 === 2))
{var state_15390__$1 = state_15390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15390__$1,4,ch);
} else
{if((state_val_15391 === 1))
{var inst_15376 = init;var state_15390__$1 = (function (){var statearr_15399 = state_15390;(statearr_15399[5] = inst_15376);
return statearr_15399;
})();var statearr_15400_15409 = state_15390__$1;(statearr_15400_15409[2] = null);
(statearr_15400_15409[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_15402 = (new Array(7));(statearr_15402[0] = state_machine__5331__auto__);
(statearr_15402[1] = 1);
return statearr_15402;
});
var state_machine__5331__auto____1 = (function (state_15390){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15390){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15403 = f__5381__auto__.call(null);(statearr_15403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15403;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15467){var state_val_15468 = (state_15467[1]);if((state_val_15468 === 1))
{var inst_15447 = cljs.core.seq.call(null,coll);var inst_15448 = inst_15447;var state_15467__$1 = (function (){var statearr_15469 = state_15467;(statearr_15469[5] = inst_15448);
return statearr_15469;
})();var statearr_15470_15484 = state_15467__$1;(statearr_15470_15484[2] = null);
(statearr_15470_15484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 2))
{var inst_15448 = (state_15467[5]);var state_15467__$1 = state_15467;if(cljs.core.truth_(inst_15448))
{var statearr_15471_15485 = state_15467__$1;(statearr_15471_15485[1] = 4);
} else
{var statearr_15472_15486 = state_15467__$1;(statearr_15472_15486[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 3))
{var inst_15465 = (state_15467[2]);var state_15467__$1 = state_15467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15467__$1,inst_15465);
} else
{if((state_val_15468 === 4))
{var inst_15448 = (state_15467[5]);var inst_15451 = cljs.core.first.call(null,inst_15448);var state_15467__$1 = state_15467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15467__$1,7,ch,inst_15451);
} else
{if((state_val_15468 === 5))
{var state_15467__$1 = state_15467;if(cljs.core.truth_(close_QMARK_))
{var statearr_15473_15487 = state_15467__$1;(statearr_15473_15487[1] = 8);
} else
{var statearr_15474_15488 = state_15467__$1;(statearr_15474_15488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 6))
{var inst_15463 = (state_15467[2]);var state_15467__$1 = state_15467;var statearr_15475_15489 = state_15467__$1;(statearr_15475_15489[2] = inst_15463);
(statearr_15475_15489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 7))
{var inst_15448 = (state_15467[5]);var inst_15453 = (state_15467[2]);var inst_15454 = cljs.core.next.call(null,inst_15448);var inst_15448__$1 = inst_15454;var state_15467__$1 = (function (){var statearr_15476 = state_15467;(statearr_15476[6] = inst_15453);
(statearr_15476[5] = inst_15448__$1);
return statearr_15476;
})();var statearr_15477_15490 = state_15467__$1;(statearr_15477_15490[2] = null);
(statearr_15477_15490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 8))
{var inst_15458 = cljs.core.async.close_BANG_.call(null,ch);var state_15467__$1 = state_15467;var statearr_15478_15491 = state_15467__$1;(statearr_15478_15491[2] = inst_15458);
(statearr_15478_15491[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 9))
{var state_15467__$1 = state_15467;var statearr_15479_15492 = state_15467__$1;(statearr_15479_15492[2] = null);
(statearr_15479_15492[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15468 === 10))
{var inst_15461 = (state_15467[2]);var state_15467__$1 = state_15467;var statearr_15480_15493 = state_15467__$1;(statearr_15480_15493[2] = inst_15461);
(statearr_15480_15493[1] = 6);
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
var state_machine__5331__auto____0 = (function (){var statearr_15482 = (new Array(7));(statearr_15482[0] = state_machine__5331__auto__);
(statearr_15482[1] = 1);
return statearr_15482;
});
var state_machine__5331__auto____1 = (function (state_15467){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15467);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15467){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15483 = f__5381__auto__.call(null);(statearr_15483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_15483;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15706 = (function (cs,ch,mult,meta15707){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15707 = meta15707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15706.cljs$lang$type = true;
cljs.core.async.t15706.cljs$lang$ctorStr = "cljs.core.async/t15706";
cljs.core.async.t15706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t15706");
});})(cs))
;
cljs.core.async.t15706.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15706.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15708){var self__ = this;
var _15708__$1 = this;return self__.meta15707;
});})(cs))
;
cljs.core.async.t15706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15708,meta15707__$1){var self__ = this;
var _15708__$1 = this;return (new cljs.core.async.t15706(self__.cs,self__.ch,self__.mult,meta15707__$1));
});})(cs))
;
cljs.core.async.__GT_t15706 = ((function (cs){
return (function __GT_t15706(cs__$1,ch__$1,mult__$1,meta15707){return (new cljs.core.async.t15706(cs__$1,ch__$1,mult__$1,meta15707));
});})(cs))
;
}
return (new cljs.core.async.t15706(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5380__auto___15918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_15836){var state_val_15837 = (state_15836[1]);if((state_val_15837 === 32))
{try{var inst_15787 = (state_15836[5]);var inst_15711 = (state_15836[6]);var inst_15793 = cljs.core.async.put_BANG_.call(null,inst_15787,inst_15711,done);var state_15836__$1 = state_15836;var statearr_15840_15919 = state_15836__$1;(statearr_15840_15919[2] = inst_15793);
(statearr_15840_15919[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15838){if((e15838 instanceof Object))
{var ex__5324__auto__ = e15838;var statearr_15839_15920 = state_15836;(statearr_15839_15920[1] = 31);
(statearr_15839_15920[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15838;
} else
{return null;
}
}
}} else
{if((state_val_15837 === 1))
{var state_15836__$1 = state_15836;var statearr_15841_15921 = state_15836__$1;(statearr_15841_15921[2] = null);
(statearr_15841_15921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 33))
{var inst_15799 = (state_15836[7]);var inst_15801 = cljs.core.chunked_seq_QMARK_.call(null,inst_15799);var state_15836__$1 = state_15836;if(inst_15801)
{var statearr_15842_15922 = state_15836__$1;(statearr_15842_15922[1] = 36);
} else
{var statearr_15843_15923 = state_15836__$1;(statearr_15843_15923[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 2))
{var state_15836__$1 = state_15836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15836__$1,4,ch);
} else
{if((state_val_15837 === 34))
{var state_15836__$1 = state_15836;var statearr_15844_15924 = state_15836__$1;(statearr_15844_15924[2] = null);
(statearr_15844_15924[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 3))
{var inst_15834 = (state_15836[2]);var state_15836__$1 = state_15836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15836__$1,inst_15834);
} else
{if((state_val_15837 === 35))
{var inst_15823 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15845_15925 = state_15836__$1;(statearr_15845_15925[2] = inst_15823);
(statearr_15845_15925[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 4))
{var inst_15711 = (state_15836[6]);var inst_15711__$1 = (state_15836[2]);var inst_15712 = (inst_15711__$1 == null);var state_15836__$1 = (function (){var statearr_15846 = state_15836;(statearr_15846[6] = inst_15711__$1);
return statearr_15846;
})();if(cljs.core.truth_(inst_15712))
{var statearr_15847_15926 = state_15836__$1;(statearr_15847_15926[1] = 5);
} else
{var statearr_15848_15927 = state_15836__$1;(statearr_15848_15927[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 36))
{var inst_15799 = (state_15836[7]);var inst_15803 = cljs.core.chunk_first.call(null,inst_15799);var inst_15804 = cljs.core.chunk_rest.call(null,inst_15799);var inst_15805 = cljs.core.count.call(null,inst_15803);var inst_15779 = inst_15804;var inst_15780 = inst_15803;var inst_15781 = inst_15805;var inst_15782 = 0;var state_15836__$1 = (function (){var statearr_15849 = state_15836;(statearr_15849[8] = inst_15779);
(statearr_15849[9] = inst_15782);
(statearr_15849[10] = inst_15781);
(statearr_15849[11] = inst_15780);
return statearr_15849;
})();var statearr_15850_15928 = state_15836__$1;(statearr_15850_15928[2] = null);
(statearr_15850_15928[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 5))
{var inst_15718 = cljs.core.deref.call(null,cs);var inst_15719 = cljs.core.seq.call(null,inst_15718);var inst_15720 = inst_15719;var inst_15721 = null;var inst_15722 = 0;var inst_15723 = 0;var state_15836__$1 = (function (){var statearr_15851 = state_15836;(statearr_15851[12] = inst_15723);
(statearr_15851[13] = inst_15722);
(statearr_15851[14] = inst_15721);
(statearr_15851[15] = inst_15720);
return statearr_15851;
})();var statearr_15852_15929 = state_15836__$1;(statearr_15852_15929[2] = null);
(statearr_15852_15929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 37))
{var inst_15799 = (state_15836[7]);var inst_15808 = cljs.core.first.call(null,inst_15799);var state_15836__$1 = (function (){var statearr_15853 = state_15836;(statearr_15853[16] = inst_15808);
return statearr_15853;
})();var statearr_15854_15930 = state_15836__$1;(statearr_15854_15930[2] = null);
(statearr_15854_15930[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 6))
{var inst_15770 = cljs.core.deref.call(null,cs);var inst_15771 = cljs.core.keys.call(null,inst_15770);var inst_15772 = cljs.core.count.call(null,inst_15771);var inst_15773 = cljs.core.reset_BANG_.call(null,dctr,inst_15772);var inst_15778 = cljs.core.seq.call(null,inst_15771);var inst_15779 = inst_15778;var inst_15780 = null;var inst_15781 = 0;var inst_15782 = 0;var state_15836__$1 = (function (){var statearr_15855 = state_15836;(statearr_15855[17] = inst_15773);
(statearr_15855[8] = inst_15779);
(statearr_15855[9] = inst_15782);
(statearr_15855[10] = inst_15781);
(statearr_15855[11] = inst_15780);
return statearr_15855;
})();var statearr_15856_15931 = state_15836__$1;(statearr_15856_15931[2] = null);
(statearr_15856_15931[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 38))
{var inst_15820 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15857_15932 = state_15836__$1;(statearr_15857_15932[2] = inst_15820);
(statearr_15857_15932[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 7))
{var inst_15832 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15858_15933 = state_15836__$1;(statearr_15858_15933[2] = inst_15832);
(statearr_15858_15933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 39))
{var inst_15799 = (state_15836[7]);var inst_15816 = (state_15836[2]);var inst_15817 = cljs.core.next.call(null,inst_15799);var inst_15779 = inst_15817;var inst_15780 = null;var inst_15781 = 0;var inst_15782 = 0;var state_15836__$1 = (function (){var statearr_15859 = state_15836;(statearr_15859[8] = inst_15779);
(statearr_15859[9] = inst_15782);
(statearr_15859[10] = inst_15781);
(statearr_15859[11] = inst_15780);
(statearr_15859[18] = inst_15816);
return statearr_15859;
})();var statearr_15860_15934 = state_15836__$1;(statearr_15860_15934[2] = null);
(statearr_15860_15934[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 8))
{var inst_15723 = (state_15836[12]);var inst_15722 = (state_15836[13]);var inst_15725 = (inst_15723 < inst_15722);var inst_15726 = inst_15725;var state_15836__$1 = state_15836;if(cljs.core.truth_(inst_15726))
{var statearr_15861_15935 = state_15836__$1;(statearr_15861_15935[1] = 10);
} else
{var statearr_15862_15936 = state_15836__$1;(statearr_15862_15936[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 40))
{var inst_15808 = (state_15836[16]);var inst_15809 = (state_15836[2]);var inst_15810 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15811 = cljs.core.async.untap_STAR_.call(null,m,inst_15808);var state_15836__$1 = (function (){var statearr_15863 = state_15836;(statearr_15863[19] = inst_15810);
(statearr_15863[20] = inst_15809);
return statearr_15863;
})();var statearr_15864_15937 = state_15836__$1;(statearr_15864_15937[2] = inst_15811);
(statearr_15864_15937[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 9))
{var inst_15768 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15865_15938 = state_15836__$1;(statearr_15865_15938[2] = inst_15768);
(statearr_15865_15938[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 41))
{try{var inst_15808 = (state_15836[16]);var inst_15711 = (state_15836[6]);var inst_15814 = cljs.core.async.put_BANG_.call(null,inst_15808,inst_15711,done);var state_15836__$1 = state_15836;var statearr_15868_15939 = state_15836__$1;(statearr_15868_15939[2] = inst_15814);
(statearr_15868_15939[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15866){if((e15866 instanceof Object))
{var ex__5324__auto__ = e15866;var statearr_15867_15940 = state_15836;(statearr_15867_15940[1] = 40);
(statearr_15867_15940[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15866;
} else
{return null;
}
}
}} else
{if((state_val_15837 === 10))
{var inst_15723 = (state_15836[12]);var inst_15721 = (state_15836[14]);var inst_15729 = cljs.core._nth.call(null,inst_15721,inst_15723);var inst_15730 = cljs.core.nth.call(null,inst_15729,0,null);var inst_15731 = cljs.core.nth.call(null,inst_15729,1,null);var state_15836__$1 = (function (){var statearr_15869 = state_15836;(statearr_15869[21] = inst_15730);
return statearr_15869;
})();if(cljs.core.truth_(inst_15731))
{var statearr_15870_15941 = state_15836__$1;(statearr_15870_15941[1] = 13);
} else
{var statearr_15871_15942 = state_15836__$1;(statearr_15871_15942[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 42))
{var inst_15829 = (state_15836[2]);var state_15836__$1 = (function (){var statearr_15872 = state_15836;(statearr_15872[22] = inst_15829);
return statearr_15872;
})();var statearr_15873_15943 = state_15836__$1;(statearr_15873_15943[2] = null);
(statearr_15873_15943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 11))
{var inst_15740 = (state_15836[23]);var inst_15720 = (state_15836[15]);var inst_15740__$1 = cljs.core.seq.call(null,inst_15720);var state_15836__$1 = (function (){var statearr_15874 = state_15836;(statearr_15874[23] = inst_15740__$1);
return statearr_15874;
})();if(inst_15740__$1)
{var statearr_15875_15944 = state_15836__$1;(statearr_15875_15944[1] = 16);
} else
{var statearr_15876_15945 = state_15836__$1;(statearr_15876_15945[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 12))
{var inst_15766 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15877_15946 = state_15836__$1;(statearr_15877_15946[2] = inst_15766);
(statearr_15877_15946[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 13))
{var inst_15730 = (state_15836[21]);var inst_15733 = cljs.core.async.close_BANG_.call(null,inst_15730);var state_15836__$1 = state_15836;var statearr_15881_15947 = state_15836__$1;(statearr_15881_15947[2] = inst_15733);
(statearr_15881_15947[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 14))
{var state_15836__$1 = state_15836;var statearr_15882_15948 = state_15836__$1;(statearr_15882_15948[2] = null);
(statearr_15882_15948[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 15))
{var inst_15723 = (state_15836[12]);var inst_15722 = (state_15836[13]);var inst_15721 = (state_15836[14]);var inst_15720 = (state_15836[15]);var inst_15736 = (state_15836[2]);var inst_15737 = (inst_15723 + 1);var tmp15878 = inst_15722;var tmp15879 = inst_15721;var tmp15880 = inst_15720;var inst_15720__$1 = tmp15880;var inst_15721__$1 = tmp15879;var inst_15722__$1 = tmp15878;var inst_15723__$1 = inst_15737;var state_15836__$1 = (function (){var statearr_15883 = state_15836;(statearr_15883[24] = inst_15736);
(statearr_15883[12] = inst_15723__$1);
(statearr_15883[13] = inst_15722__$1);
(statearr_15883[14] = inst_15721__$1);
(statearr_15883[15] = inst_15720__$1);
return statearr_15883;
})();var statearr_15884_15949 = state_15836__$1;(statearr_15884_15949[2] = null);
(statearr_15884_15949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 16))
{var inst_15740 = (state_15836[23]);var inst_15742 = cljs.core.chunked_seq_QMARK_.call(null,inst_15740);var state_15836__$1 = state_15836;if(inst_15742)
{var statearr_15885_15950 = state_15836__$1;(statearr_15885_15950[1] = 19);
} else
{var statearr_15886_15951 = state_15836__$1;(statearr_15886_15951[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 17))
{var state_15836__$1 = state_15836;var statearr_15887_15952 = state_15836__$1;(statearr_15887_15952[2] = null);
(statearr_15887_15952[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 18))
{var inst_15764 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15888_15953 = state_15836__$1;(statearr_15888_15953[2] = inst_15764);
(statearr_15888_15953[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 19))
{var inst_15740 = (state_15836[23]);var inst_15744 = cljs.core.chunk_first.call(null,inst_15740);var inst_15745 = cljs.core.chunk_rest.call(null,inst_15740);var inst_15746 = cljs.core.count.call(null,inst_15744);var inst_15720 = inst_15745;var inst_15721 = inst_15744;var inst_15722 = inst_15746;var inst_15723 = 0;var state_15836__$1 = (function (){var statearr_15889 = state_15836;(statearr_15889[12] = inst_15723);
(statearr_15889[13] = inst_15722);
(statearr_15889[14] = inst_15721);
(statearr_15889[15] = inst_15720);
return statearr_15889;
})();var statearr_15890_15954 = state_15836__$1;(statearr_15890_15954[2] = null);
(statearr_15890_15954[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 20))
{var inst_15740 = (state_15836[23]);var inst_15750 = cljs.core.first.call(null,inst_15740);var inst_15751 = cljs.core.nth.call(null,inst_15750,0,null);var inst_15752 = cljs.core.nth.call(null,inst_15750,1,null);var state_15836__$1 = (function (){var statearr_15891 = state_15836;(statearr_15891[25] = inst_15751);
return statearr_15891;
})();if(cljs.core.truth_(inst_15752))
{var statearr_15892_15955 = state_15836__$1;(statearr_15892_15955[1] = 22);
} else
{var statearr_15893_15956 = state_15836__$1;(statearr_15893_15956[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 21))
{var inst_15761 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15894_15957 = state_15836__$1;(statearr_15894_15957[2] = inst_15761);
(statearr_15894_15957[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 22))
{var inst_15751 = (state_15836[25]);var inst_15754 = cljs.core.async.close_BANG_.call(null,inst_15751);var state_15836__$1 = state_15836;var statearr_15895_15958 = state_15836__$1;(statearr_15895_15958[2] = inst_15754);
(statearr_15895_15958[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 23))
{var state_15836__$1 = state_15836;var statearr_15896_15959 = state_15836__$1;(statearr_15896_15959[2] = null);
(statearr_15896_15959[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 24))
{var inst_15740 = (state_15836[23]);var inst_15757 = (state_15836[2]);var inst_15758 = cljs.core.next.call(null,inst_15740);var inst_15720 = inst_15758;var inst_15721 = null;var inst_15722 = 0;var inst_15723 = 0;var state_15836__$1 = (function (){var statearr_15897 = state_15836;(statearr_15897[26] = inst_15757);
(statearr_15897[12] = inst_15723);
(statearr_15897[13] = inst_15722);
(statearr_15897[14] = inst_15721);
(statearr_15897[15] = inst_15720);
return statearr_15897;
})();var statearr_15898_15960 = state_15836__$1;(statearr_15898_15960[2] = null);
(statearr_15898_15960[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 25))
{var inst_15782 = (state_15836[9]);var inst_15781 = (state_15836[10]);var inst_15784 = (inst_15782 < inst_15781);var inst_15785 = inst_15784;var state_15836__$1 = state_15836;if(cljs.core.truth_(inst_15785))
{var statearr_15899_15961 = state_15836__$1;(statearr_15899_15961[1] = 27);
} else
{var statearr_15900_15962 = state_15836__$1;(statearr_15900_15962[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 26))
{var inst_15827 = (state_15836[2]);var state_15836__$1 = (function (){var statearr_15901 = state_15836;(statearr_15901[27] = inst_15827);
return statearr_15901;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15836__$1,42,dchan);
} else
{if((state_val_15837 === 27))
{var inst_15782 = (state_15836[9]);var inst_15780 = (state_15836[11]);var inst_15787 = cljs.core._nth.call(null,inst_15780,inst_15782);var state_15836__$1 = (function (){var statearr_15902 = state_15836;(statearr_15902[5] = inst_15787);
return statearr_15902;
})();var statearr_15903_15963 = state_15836__$1;(statearr_15903_15963[2] = null);
(statearr_15903_15963[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 28))
{var inst_15779 = (state_15836[8]);var inst_15799 = (state_15836[7]);var inst_15799__$1 = cljs.core.seq.call(null,inst_15779);var state_15836__$1 = (function (){var statearr_15907 = state_15836;(statearr_15907[7] = inst_15799__$1);
return statearr_15907;
})();if(inst_15799__$1)
{var statearr_15908_15964 = state_15836__$1;(statearr_15908_15964[1] = 33);
} else
{var statearr_15909_15965 = state_15836__$1;(statearr_15909_15965[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 29))
{var inst_15825 = (state_15836[2]);var state_15836__$1 = state_15836;var statearr_15910_15966 = state_15836__$1;(statearr_15910_15966[2] = inst_15825);
(statearr_15910_15966[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 30))
{var inst_15779 = (state_15836[8]);var inst_15782 = (state_15836[9]);var inst_15781 = (state_15836[10]);var inst_15780 = (state_15836[11]);var inst_15795 = (state_15836[2]);var inst_15796 = (inst_15782 + 1);var tmp15904 = inst_15779;var tmp15905 = inst_15781;var tmp15906 = inst_15780;var inst_15779__$1 = tmp15904;var inst_15780__$1 = tmp15906;var inst_15781__$1 = tmp15905;var inst_15782__$1 = inst_15796;var state_15836__$1 = (function (){var statearr_15911 = state_15836;(statearr_15911[8] = inst_15779__$1);
(statearr_15911[9] = inst_15782__$1);
(statearr_15911[10] = inst_15781__$1);
(statearr_15911[11] = inst_15780__$1);
(statearr_15911[28] = inst_15795);
return statearr_15911;
})();var statearr_15912_15967 = state_15836__$1;(statearr_15912_15967[2] = null);
(statearr_15912_15967[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15837 === 31))
{var inst_15787 = (state_15836[5]);var inst_15788 = (state_15836[2]);var inst_15789 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15790 = cljs.core.async.untap_STAR_.call(null,m,inst_15787);var state_15836__$1 = (function (){var statearr_15913 = state_15836;(statearr_15913[29] = inst_15789);
(statearr_15913[30] = inst_15788);
return statearr_15913;
})();var statearr_15914_15968 = state_15836__$1;(statearr_15914_15968[2] = inst_15790);
(statearr_15914_15968[1] = 30);
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
var state_machine__5331__auto____0 = (function (){var statearr_15916 = (new Array(31));(statearr_15916[0] = state_machine__5331__auto__);
(statearr_15916[1] = 1);
return statearr_15916;
});
var state_machine__5331__auto____1 = (function (state_15836){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_15836);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_15836){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_15836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_15917 = f__5381__auto__.call(null);(statearr_15917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___15918);
return statearr_15917;
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
;var m = (function (){if(typeof cljs.core.async.t16074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16074 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16075){
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
this.meta16075 = meta16075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16074.cljs$lang$type = true;
cljs.core.async.t16074.cljs$lang$ctorStr = "cljs.core.async/t16074";
cljs.core.async.t16074.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t16074");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16074.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16076){var self__ = this;
var _16076__$1 = this;return self__.meta16075;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16076,meta16075__$1){var self__ = this;
var _16076__$1 = this;return (new cljs.core.async.t16074(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16075__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16074 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16074(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16075){return (new cljs.core.async.t16074(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16075));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16074(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5380__auto___16179 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16141){var state_val_16142 = (state_16141[1]);if((state_val_16142 === 1))
{var inst_16080 = (state_16141[5]);var inst_16080__$1 = calc_state.call(null);var inst_16081 = cljs.core.seq_QMARK_.call(null,inst_16080__$1);var state_16141__$1 = (function (){var statearr_16143 = state_16141;(statearr_16143[5] = inst_16080__$1);
return statearr_16143;
})();if(inst_16081)
{var statearr_16144_16180 = state_16141__$1;(statearr_16144_16180[1] = 2);
} else
{var statearr_16145_16181 = state_16141__$1;(statearr_16145_16181[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 2))
{var inst_16080 = (state_16141[5]);var inst_16083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16080);var state_16141__$1 = state_16141;var statearr_16146_16182 = state_16141__$1;(statearr_16146_16182[2] = inst_16083);
(statearr_16146_16182[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 3))
{var inst_16080 = (state_16141[5]);var state_16141__$1 = state_16141;var statearr_16147_16183 = state_16141__$1;(statearr_16147_16183[2] = inst_16080);
(statearr_16147_16183[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 4))
{var inst_16080 = (state_16141[5]);var inst_16086 = (state_16141[2]);var inst_16087 = cljs.core.get.call(null,inst_16086,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16088 = cljs.core.get.call(null,inst_16086,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16089 = cljs.core.get.call(null,inst_16086,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16090 = inst_16080;var state_16141__$1 = (function (){var statearr_16148 = state_16141;(statearr_16148[6] = inst_16090);
(statearr_16148[7] = inst_16087);
(statearr_16148[8] = inst_16089);
(statearr_16148[9] = inst_16088);
return statearr_16148;
})();var statearr_16149_16184 = state_16141__$1;(statearr_16149_16184[2] = null);
(statearr_16149_16184[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 5))
{var inst_16090 = (state_16141[6]);var inst_16093 = cljs.core.seq_QMARK_.call(null,inst_16090);var state_16141__$1 = state_16141;if(inst_16093)
{var statearr_16150_16185 = state_16141__$1;(statearr_16150_16185[1] = 7);
} else
{var statearr_16151_16186 = state_16141__$1;(statearr_16151_16186[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 6))
{var inst_16139 = (state_16141[2]);var state_16141__$1 = state_16141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16141__$1,inst_16139);
} else
{if((state_val_16142 === 7))
{var inst_16090 = (state_16141[6]);var inst_16095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16090);var state_16141__$1 = state_16141;var statearr_16152_16187 = state_16141__$1;(statearr_16152_16187[2] = inst_16095);
(statearr_16152_16187[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 8))
{var inst_16090 = (state_16141[6]);var state_16141__$1 = state_16141;var statearr_16153_16188 = state_16141__$1;(statearr_16153_16188[2] = inst_16090);
(statearr_16153_16188[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 9))
{var inst_16098 = (state_16141[10]);var inst_16098__$1 = (state_16141[2]);var inst_16099 = cljs.core.get.call(null,inst_16098__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16100 = cljs.core.get.call(null,inst_16098__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16101 = cljs.core.get.call(null,inst_16098__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16141__$1 = (function (){var statearr_16154 = state_16141;(statearr_16154[11] = inst_16101);
(statearr_16154[12] = inst_16100);
(statearr_16154[10] = inst_16098__$1);
return statearr_16154;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16141__$1,10,inst_16099);
} else
{if((state_val_16142 === 10))
{var inst_16106 = (state_16141[13]);var inst_16105 = (state_16141[14]);var inst_16104 = (state_16141[2]);var inst_16105__$1 = cljs.core.nth.call(null,inst_16104,0,null);var inst_16106__$1 = cljs.core.nth.call(null,inst_16104,1,null);var inst_16107 = (inst_16105__$1 == null);var inst_16108 = cljs.core._EQ_.call(null,inst_16106__$1,change);var inst_16109 = (inst_16107) || (inst_16108);var state_16141__$1 = (function (){var statearr_16155 = state_16141;(statearr_16155[13] = inst_16106__$1);
(statearr_16155[14] = inst_16105__$1);
return statearr_16155;
})();if(cljs.core.truth_(inst_16109))
{var statearr_16156_16189 = state_16141__$1;(statearr_16156_16189[1] = 11);
} else
{var statearr_16157_16190 = state_16141__$1;(statearr_16157_16190[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 11))
{var inst_16105 = (state_16141[14]);var inst_16111 = (inst_16105 == null);var state_16141__$1 = state_16141;if(cljs.core.truth_(inst_16111))
{var statearr_16158_16191 = state_16141__$1;(statearr_16158_16191[1] = 14);
} else
{var statearr_16159_16192 = state_16141__$1;(statearr_16159_16192[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 12))
{var inst_16101 = (state_16141[11]);var inst_16106 = (state_16141[13]);var inst_16120 = (state_16141[15]);var inst_16120__$1 = inst_16101.call(null,inst_16106);var state_16141__$1 = (function (){var statearr_16160 = state_16141;(statearr_16160[15] = inst_16120__$1);
return statearr_16160;
})();if(cljs.core.truth_(inst_16120__$1))
{var statearr_16161_16193 = state_16141__$1;(statearr_16161_16193[1] = 17);
} else
{var statearr_16162_16194 = state_16141__$1;(statearr_16162_16194[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 13))
{var inst_16137 = (state_16141[2]);var state_16141__$1 = state_16141;var statearr_16163_16195 = state_16141__$1;(statearr_16163_16195[2] = inst_16137);
(statearr_16163_16195[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 14))
{var inst_16106 = (state_16141[13]);var inst_16113 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16106);var state_16141__$1 = state_16141;var statearr_16164_16196 = state_16141__$1;(statearr_16164_16196[2] = inst_16113);
(statearr_16164_16196[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 15))
{var state_16141__$1 = state_16141;var statearr_16165_16197 = state_16141__$1;(statearr_16165_16197[2] = null);
(statearr_16165_16197[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 16))
{var inst_16116 = (state_16141[2]);var inst_16117 = calc_state.call(null);var inst_16090 = inst_16117;var state_16141__$1 = (function (){var statearr_16166 = state_16141;(statearr_16166[6] = inst_16090);
(statearr_16166[16] = inst_16116);
return statearr_16166;
})();var statearr_16167_16198 = state_16141__$1;(statearr_16167_16198[2] = null);
(statearr_16167_16198[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 17))
{var inst_16120 = (state_16141[15]);var state_16141__$1 = state_16141;var statearr_16168_16199 = state_16141__$1;(statearr_16168_16199[2] = inst_16120);
(statearr_16168_16199[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 18))
{var inst_16101 = (state_16141[11]);var inst_16100 = (state_16141[12]);var inst_16106 = (state_16141[13]);var inst_16123 = cljs.core.empty_QMARK_.call(null,inst_16101);var inst_16124 = inst_16100.call(null,inst_16106);var inst_16125 = cljs.core.not.call(null,inst_16124);var inst_16126 = (inst_16123) && (inst_16125);var state_16141__$1 = state_16141;var statearr_16169_16200 = state_16141__$1;(statearr_16169_16200[2] = inst_16126);
(statearr_16169_16200[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 19))
{var inst_16128 = (state_16141[2]);var state_16141__$1 = state_16141;if(cljs.core.truth_(inst_16128))
{var statearr_16170_16201 = state_16141__$1;(statearr_16170_16201[1] = 20);
} else
{var statearr_16171_16202 = state_16141__$1;(statearr_16171_16202[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 20))
{var inst_16105 = (state_16141[14]);var state_16141__$1 = state_16141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16141__$1,23,out,inst_16105);
} else
{if((state_val_16142 === 21))
{var state_16141__$1 = state_16141;var statearr_16172_16203 = state_16141__$1;(statearr_16172_16203[2] = null);
(statearr_16172_16203[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 22))
{var inst_16098 = (state_16141[10]);var inst_16134 = (state_16141[2]);var inst_16090 = inst_16098;var state_16141__$1 = (function (){var statearr_16173 = state_16141;(statearr_16173[6] = inst_16090);
(statearr_16173[17] = inst_16134);
return statearr_16173;
})();var statearr_16174_16204 = state_16141__$1;(statearr_16174_16204[2] = null);
(statearr_16174_16204[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16142 === 23))
{var inst_16131 = (state_16141[2]);var state_16141__$1 = state_16141;var statearr_16175_16205 = state_16141__$1;(statearr_16175_16205[2] = inst_16131);
(statearr_16175_16205[1] = 22);
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
var state_machine__5331__auto____0 = (function (){var statearr_16177 = (new Array(18));(statearr_16177[0] = state_machine__5331__auto__);
(statearr_16177[1] = 1);
return statearr_16177;
});
var state_machine__5331__auto____1 = (function (state_16141){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16141);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16141){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16178 = f__5381__auto__.call(null);(statearr_16178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16179);
return statearr_16178;
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
return (function (p1__16206_SHARP_){if(cljs.core.truth_(p1__16206_SHARP_.call(null,topic)))
{return p1__16206_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16206_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3128__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16330 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16331){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16331 = meta16331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16330.cljs$lang$type = true;
cljs.core.async.t16330.cljs$lang$ctorStr = "cljs.core.async/t16330";
cljs.core.async.t16330.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async/t16330");
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16332){var self__ = this;
var _16332__$1 = this;return self__.meta16331;
});})(mults,ensure_mult))
;
cljs.core.async.t16330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16332,meta16331__$1){var self__ = this;
var _16332__$1 = this;return (new cljs.core.async.t16330(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16331__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16330 = ((function (mults,ensure_mult){
return (function __GT_t16330(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16331){return (new cljs.core.async.t16330(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16331));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16330(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5380__auto___16453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16405){var state_val_16406 = (state_16405[1]);if((state_val_16406 === 1))
{var state_16405__$1 = state_16405;var statearr_16407_16454 = state_16405__$1;(statearr_16407_16454[2] = null);
(statearr_16407_16454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 2))
{var state_16405__$1 = state_16405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16405__$1,4,ch);
} else
{if((state_val_16406 === 3))
{var inst_16403 = (state_16405[2]);var state_16405__$1 = state_16405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16405__$1,inst_16403);
} else
{if((state_val_16406 === 4))
{var inst_16335 = (state_16405[5]);var inst_16335__$1 = (state_16405[2]);var inst_16336 = (inst_16335__$1 == null);var state_16405__$1 = (function (){var statearr_16408 = state_16405;(statearr_16408[5] = inst_16335__$1);
return statearr_16408;
})();if(cljs.core.truth_(inst_16336))
{var statearr_16409_16455 = state_16405__$1;(statearr_16409_16455[1] = 5);
} else
{var statearr_16410_16456 = state_16405__$1;(statearr_16410_16456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 5))
{var inst_16342 = cljs.core.deref.call(null,mults);var inst_16343 = cljs.core.vals.call(null,inst_16342);var inst_16344 = cljs.core.seq.call(null,inst_16343);var inst_16345 = inst_16344;var inst_16346 = null;var inst_16347 = 0;var inst_16348 = 0;var state_16405__$1 = (function (){var statearr_16411 = state_16405;(statearr_16411[6] = inst_16345);
(statearr_16411[7] = inst_16346);
(statearr_16411[8] = inst_16348);
(statearr_16411[9] = inst_16347);
return statearr_16411;
})();var statearr_16412_16457 = state_16405__$1;(statearr_16412_16457[2] = null);
(statearr_16412_16457[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 6))
{var inst_16383 = (state_16405[10]);var inst_16385 = (state_16405[11]);var inst_16335 = (state_16405[5]);var inst_16383__$1 = topic_fn.call(null,inst_16335);var inst_16384 = cljs.core.deref.call(null,mults);var inst_16385__$1 = cljs.core.get.call(null,inst_16384,inst_16383__$1);var state_16405__$1 = (function (){var statearr_16413 = state_16405;(statearr_16413[10] = inst_16383__$1);
(statearr_16413[11] = inst_16385__$1);
return statearr_16413;
})();if(cljs.core.truth_(inst_16385__$1))
{var statearr_16414_16458 = state_16405__$1;(statearr_16414_16458[1] = 19);
} else
{var statearr_16415_16459 = state_16405__$1;(statearr_16415_16459[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 7))
{var inst_16401 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16416_16460 = state_16405__$1;(statearr_16416_16460[2] = inst_16401);
(statearr_16416_16460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 8))
{var inst_16348 = (state_16405[8]);var inst_16347 = (state_16405[9]);var inst_16350 = (inst_16348 < inst_16347);var inst_16351 = inst_16350;var state_16405__$1 = state_16405;if(cljs.core.truth_(inst_16351))
{var statearr_16420_16461 = state_16405__$1;(statearr_16420_16461[1] = 10);
} else
{var statearr_16421_16462 = state_16405__$1;(statearr_16421_16462[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 9))
{var inst_16381 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16422_16463 = state_16405__$1;(statearr_16422_16463[2] = inst_16381);
(statearr_16422_16463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 10))
{var inst_16345 = (state_16405[6]);var inst_16346 = (state_16405[7]);var inst_16348 = (state_16405[8]);var inst_16347 = (state_16405[9]);var inst_16353 = cljs.core._nth.call(null,inst_16346,inst_16348);var inst_16354 = cljs.core.async.muxch_STAR_.call(null,inst_16353);var inst_16355 = cljs.core.async.close_BANG_.call(null,inst_16354);var inst_16356 = (inst_16348 + 1);var tmp16417 = inst_16345;var tmp16418 = inst_16346;var tmp16419 = inst_16347;var inst_16345__$1 = tmp16417;var inst_16346__$1 = tmp16418;var inst_16347__$1 = tmp16419;var inst_16348__$1 = inst_16356;var state_16405__$1 = (function (){var statearr_16423 = state_16405;(statearr_16423[6] = inst_16345__$1);
(statearr_16423[7] = inst_16346__$1);
(statearr_16423[12] = inst_16355);
(statearr_16423[8] = inst_16348__$1);
(statearr_16423[9] = inst_16347__$1);
return statearr_16423;
})();var statearr_16424_16464 = state_16405__$1;(statearr_16424_16464[2] = null);
(statearr_16424_16464[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 11))
{var inst_16345 = (state_16405[6]);var inst_16359 = (state_16405[13]);var inst_16359__$1 = cljs.core.seq.call(null,inst_16345);var state_16405__$1 = (function (){var statearr_16425 = state_16405;(statearr_16425[13] = inst_16359__$1);
return statearr_16425;
})();if(inst_16359__$1)
{var statearr_16426_16465 = state_16405__$1;(statearr_16426_16465[1] = 13);
} else
{var statearr_16427_16466 = state_16405__$1;(statearr_16427_16466[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 12))
{var inst_16379 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16428_16467 = state_16405__$1;(statearr_16428_16467[2] = inst_16379);
(statearr_16428_16467[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 13))
{var inst_16359 = (state_16405[13]);var inst_16361 = cljs.core.chunked_seq_QMARK_.call(null,inst_16359);var state_16405__$1 = state_16405;if(inst_16361)
{var statearr_16429_16468 = state_16405__$1;(statearr_16429_16468[1] = 16);
} else
{var statearr_16430_16469 = state_16405__$1;(statearr_16430_16469[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 14))
{var state_16405__$1 = state_16405;var statearr_16431_16470 = state_16405__$1;(statearr_16431_16470[2] = null);
(statearr_16431_16470[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 15))
{var inst_16377 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16432_16471 = state_16405__$1;(statearr_16432_16471[2] = inst_16377);
(statearr_16432_16471[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 16))
{var inst_16359 = (state_16405[13]);var inst_16363 = cljs.core.chunk_first.call(null,inst_16359);var inst_16364 = cljs.core.chunk_rest.call(null,inst_16359);var inst_16365 = cljs.core.count.call(null,inst_16363);var inst_16345 = inst_16364;var inst_16346 = inst_16363;var inst_16347 = inst_16365;var inst_16348 = 0;var state_16405__$1 = (function (){var statearr_16433 = state_16405;(statearr_16433[6] = inst_16345);
(statearr_16433[7] = inst_16346);
(statearr_16433[8] = inst_16348);
(statearr_16433[9] = inst_16347);
return statearr_16433;
})();var statearr_16434_16472 = state_16405__$1;(statearr_16434_16472[2] = null);
(statearr_16434_16472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 17))
{var inst_16359 = (state_16405[13]);var inst_16368 = cljs.core.first.call(null,inst_16359);var inst_16369 = cljs.core.async.muxch_STAR_.call(null,inst_16368);var inst_16370 = cljs.core.async.close_BANG_.call(null,inst_16369);var inst_16371 = cljs.core.next.call(null,inst_16359);var inst_16345 = inst_16371;var inst_16346 = null;var inst_16347 = 0;var inst_16348 = 0;var state_16405__$1 = (function (){var statearr_16435 = state_16405;(statearr_16435[6] = inst_16345);
(statearr_16435[7] = inst_16346);
(statearr_16435[14] = inst_16370);
(statearr_16435[8] = inst_16348);
(statearr_16435[9] = inst_16347);
return statearr_16435;
})();var statearr_16436_16473 = state_16405__$1;(statearr_16436_16473[2] = null);
(statearr_16436_16473[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 18))
{var inst_16374 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16437_16474 = state_16405__$1;(statearr_16437_16474[2] = inst_16374);
(statearr_16437_16474[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 19))
{var state_16405__$1 = state_16405;var statearr_16438_16475 = state_16405__$1;(statearr_16438_16475[2] = null);
(statearr_16438_16475[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 20))
{var state_16405__$1 = state_16405;var statearr_16439_16476 = state_16405__$1;(statearr_16439_16476[2] = null);
(statearr_16439_16476[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 21))
{var inst_16398 = (state_16405[2]);var state_16405__$1 = (function (){var statearr_16440 = state_16405;(statearr_16440[15] = inst_16398);
return statearr_16440;
})();var statearr_16441_16477 = state_16405__$1;(statearr_16441_16477[2] = null);
(statearr_16441_16477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 22))
{var inst_16395 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16442_16478 = state_16405__$1;(statearr_16442_16478[2] = inst_16395);
(statearr_16442_16478[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 23))
{var inst_16383 = (state_16405[10]);var inst_16387 = (state_16405[2]);var inst_16388 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16383);var state_16405__$1 = (function (){var statearr_16443 = state_16405;(statearr_16443[16] = inst_16387);
return statearr_16443;
})();var statearr_16444_16479 = state_16405__$1;(statearr_16444_16479[2] = inst_16388);
(statearr_16444_16479[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16406 === 24))
{try{var inst_16385 = (state_16405[11]);var inst_16335 = (state_16405[5]);var inst_16391 = cljs.core.async.muxch_STAR_.call(null,inst_16385);var state_16405__$1 = state_16405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16405__$1,25,inst_16391,inst_16335);
}catch (e16445){if((e16445 instanceof Object))
{var ex__5324__auto__ = e16445;var statearr_16446_16480 = state_16405;(statearr_16446_16480[1] = 23);
(statearr_16446_16480[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16445;
} else
{return null;
}
}
}} else
{if((state_val_16406 === 25))
{try{var inst_16393 = (state_16405[2]);var state_16405__$1 = state_16405;var statearr_16449_16481 = state_16405__$1;(statearr_16449_16481[2] = inst_16393);
(statearr_16449_16481[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16447){if((e16447 instanceof Object))
{var ex__5324__auto__ = e16447;var statearr_16448_16482 = state_16405;(statearr_16448_16482[1] = 23);
(statearr_16448_16482[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16447;
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
var state_machine__5331__auto____0 = (function (){var statearr_16451 = (new Array(17));(statearr_16451[0] = state_machine__5331__auto__);
(statearr_16451[1] = 1);
return statearr_16451;
});
var state_machine__5331__auto____1 = (function (state_16405){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16405);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16405){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16452 = f__5381__auto__.call(null);(statearr_16452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16453);
return statearr_16452;
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
,cljs.core.range.call(null,cnt));var c__5380__auto___16613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16585){var state_val_16586 = (state_16585[1]);if((state_val_16586 === 1))
{var state_16585__$1 = state_16585;var statearr_16587_16614 = state_16585__$1;(statearr_16587_16614[2] = null);
(statearr_16587_16614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 2))
{var inst_16549 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16550 = 0;var state_16585__$1 = (function (){var statearr_16588 = state_16585;(statearr_16588[5] = inst_16549);
(statearr_16588[6] = inst_16550);
return statearr_16588;
})();var statearr_16589_16615 = state_16585__$1;(statearr_16589_16615[2] = null);
(statearr_16589_16615[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 3))
{var inst_16583 = (state_16585[2]);var state_16585__$1 = state_16585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16585__$1,inst_16583);
} else
{if((state_val_16586 === 4))
{var inst_16550 = (state_16585[6]);var inst_16552 = (inst_16550 < cnt);var state_16585__$1 = state_16585;if(cljs.core.truth_(inst_16552))
{var statearr_16590_16616 = state_16585__$1;(statearr_16590_16616[1] = 6);
} else
{var statearr_16591_16617 = state_16585__$1;(statearr_16591_16617[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 5))
{var inst_16569 = (state_16585[2]);var state_16585__$1 = (function (){var statearr_16592 = state_16585;(statearr_16592[7] = inst_16569);
return statearr_16592;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16585__$1,12,dchan);
} else
{if((state_val_16586 === 6))
{var state_16585__$1 = state_16585;var statearr_16593_16618 = state_16585__$1;(statearr_16593_16618[2] = null);
(statearr_16593_16618[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 7))
{var state_16585__$1 = state_16585;var statearr_16594_16619 = state_16585__$1;(statearr_16594_16619[2] = null);
(statearr_16594_16619[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 8))
{var inst_16567 = (state_16585[2]);var state_16585__$1 = state_16585;var statearr_16595_16620 = state_16585__$1;(statearr_16595_16620[2] = inst_16567);
(statearr_16595_16620[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 9))
{var inst_16550 = (state_16585[6]);var inst_16562 = (state_16585[2]);var inst_16563 = (inst_16550 + 1);var inst_16550__$1 = inst_16563;var state_16585__$1 = (function (){var statearr_16596 = state_16585;(statearr_16596[6] = inst_16550__$1);
(statearr_16596[8] = inst_16562);
return statearr_16596;
})();var statearr_16597_16621 = state_16585__$1;(statearr_16597_16621[2] = null);
(statearr_16597_16621[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 10))
{var inst_16554 = (state_16585[2]);var inst_16555 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16585__$1 = (function (){var statearr_16598 = state_16585;(statearr_16598[9] = inst_16554);
return statearr_16598;
})();var statearr_16599_16622 = state_16585__$1;(statearr_16599_16622[2] = inst_16555);
(statearr_16599_16622[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 11))
{try{var inst_16550 = (state_16585[6]);var inst_16558 = chs__$1.call(null,inst_16550);var inst_16559 = done.call(null,inst_16550);var inst_16560 = cljs.core.async.take_BANG_.call(null,inst_16558,inst_16559);var state_16585__$1 = state_16585;var statearr_16602_16623 = state_16585__$1;(statearr_16602_16623[2] = inst_16560);
(statearr_16602_16623[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e16600){if((e16600 instanceof Object))
{var ex__5324__auto__ = e16600;var statearr_16601_16624 = state_16585;(statearr_16601_16624[1] = 10);
(statearr_16601_16624[2] = ex__5324__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16600;
} else
{return null;
}
}
}} else
{if((state_val_16586 === 12))
{var inst_16571 = (state_16585[10]);var inst_16571__$1 = (state_16585[2]);var inst_16572 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16571__$1);var state_16585__$1 = (function (){var statearr_16603 = state_16585;(statearr_16603[10] = inst_16571__$1);
return statearr_16603;
})();if(cljs.core.truth_(inst_16572))
{var statearr_16604_16625 = state_16585__$1;(statearr_16604_16625[1] = 13);
} else
{var statearr_16605_16626 = state_16585__$1;(statearr_16605_16626[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 13))
{var inst_16574 = cljs.core.async.close_BANG_.call(null,out);var state_16585__$1 = state_16585;var statearr_16606_16627 = state_16585__$1;(statearr_16606_16627[2] = inst_16574);
(statearr_16606_16627[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 14))
{var inst_16571 = (state_16585[10]);var inst_16576 = cljs.core.apply.call(null,f,inst_16571);var state_16585__$1 = state_16585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16585__$1,16,out,inst_16576);
} else
{if((state_val_16586 === 15))
{var inst_16581 = (state_16585[2]);var state_16585__$1 = state_16585;var statearr_16607_16628 = state_16585__$1;(statearr_16607_16628[2] = inst_16581);
(statearr_16607_16628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16586 === 16))
{var inst_16578 = (state_16585[2]);var state_16585__$1 = (function (){var statearr_16608 = state_16585;(statearr_16608[11] = inst_16578);
return statearr_16608;
})();var statearr_16609_16629 = state_16585__$1;(statearr_16609_16629[2] = null);
(statearr_16609_16629[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_16611 = (new Array(12));(statearr_16611[0] = state_machine__5331__auto__);
(statearr_16611[1] = 1);
return statearr_16611;
});
var state_machine__5331__auto____1 = (function (state_16585){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16585){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16612 = f__5381__auto__.call(null);(statearr_16612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16613);
return statearr_16612;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5380__auto___16729 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_16709){var state_val_16710 = (state_16709[1]);if((state_val_16710 === 1))
{var inst_16680 = cljs.core.vec.call(null,chs);var inst_16681 = inst_16680;var state_16709__$1 = (function (){var statearr_16711 = state_16709;(statearr_16711[5] = inst_16681);
return statearr_16711;
})();var statearr_16712_16730 = state_16709__$1;(statearr_16712_16730[2] = null);
(statearr_16712_16730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 2))
{var inst_16681 = (state_16709[5]);var inst_16683 = cljs.core.count.call(null,inst_16681);var inst_16684 = (inst_16683 > 0);var state_16709__$1 = state_16709;if(cljs.core.truth_(inst_16684))
{var statearr_16713_16731 = state_16709__$1;(statearr_16713_16731[1] = 4);
} else
{var statearr_16714_16732 = state_16709__$1;(statearr_16714_16732[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 3))
{var inst_16707 = (state_16709[2]);var state_16709__$1 = state_16709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16709__$1,inst_16707);
} else
{if((state_val_16710 === 4))
{var inst_16681 = (state_16709[5]);var state_16709__$1 = state_16709;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16709__$1,7,inst_16681);
} else
{if((state_val_16710 === 5))
{var inst_16703 = cljs.core.async.close_BANG_.call(null,out);var state_16709__$1 = state_16709;var statearr_16715_16733 = state_16709__$1;(statearr_16715_16733[2] = inst_16703);
(statearr_16715_16733[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 6))
{var inst_16705 = (state_16709[2]);var state_16709__$1 = state_16709;var statearr_16716_16734 = state_16709__$1;(statearr_16716_16734[2] = inst_16705);
(statearr_16716_16734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 7))
{var inst_16689 = (state_16709[6]);var inst_16688 = (state_16709[7]);var inst_16688__$1 = (state_16709[2]);var inst_16689__$1 = cljs.core.nth.call(null,inst_16688__$1,0,null);var inst_16690 = cljs.core.nth.call(null,inst_16688__$1,1,null);var inst_16691 = (inst_16689__$1 == null);var state_16709__$1 = (function (){var statearr_16717 = state_16709;(statearr_16717[8] = inst_16690);
(statearr_16717[6] = inst_16689__$1);
(statearr_16717[7] = inst_16688__$1);
return statearr_16717;
})();if(cljs.core.truth_(inst_16691))
{var statearr_16718_16735 = state_16709__$1;(statearr_16718_16735[1] = 8);
} else
{var statearr_16719_16736 = state_16709__$1;(statearr_16719_16736[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 8))
{var inst_16690 = (state_16709[8]);var inst_16681 = (state_16709[5]);var inst_16689 = (state_16709[6]);var inst_16688 = (state_16709[7]);var inst_16693 = (function (){var c = inst_16690;var v = inst_16689;var vec__16686 = inst_16688;var cs = inst_16681;return ((function (c,v,vec__16686,cs,inst_16690,inst_16681,inst_16689,inst_16688,state_val_16710){
return (function (p1__16630_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16630_SHARP_);
});
;})(c,v,vec__16686,cs,inst_16690,inst_16681,inst_16689,inst_16688,state_val_16710))
})();var inst_16694 = cljs.core.filterv.call(null,inst_16693,inst_16681);var inst_16681__$1 = inst_16694;var state_16709__$1 = (function (){var statearr_16720 = state_16709;(statearr_16720[5] = inst_16681__$1);
return statearr_16720;
})();var statearr_16721_16737 = state_16709__$1;(statearr_16721_16737[2] = null);
(statearr_16721_16737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 9))
{var inst_16689 = (state_16709[6]);var state_16709__$1 = state_16709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16709__$1,11,out,inst_16689);
} else
{if((state_val_16710 === 10))
{var inst_16701 = (state_16709[2]);var state_16709__$1 = state_16709;var statearr_16723_16738 = state_16709__$1;(statearr_16723_16738[2] = inst_16701);
(statearr_16723_16738[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16710 === 11))
{var inst_16681 = (state_16709[5]);var inst_16698 = (state_16709[2]);var tmp16722 = inst_16681;var inst_16681__$1 = tmp16722;var state_16709__$1 = (function (){var statearr_16724 = state_16709;(statearr_16724[5] = inst_16681__$1);
(statearr_16724[9] = inst_16698);
return statearr_16724;
})();var statearr_16725_16739 = state_16709__$1;(statearr_16725_16739[2] = null);
(statearr_16725_16739[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_16727 = (new Array(10));(statearr_16727[0] = state_machine__5331__auto__);
(statearr_16727[1] = 1);
return statearr_16727;
});
var state_machine__5331__auto____1 = (function (state_16709){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_16709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_16709){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_16709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_16728 = f__5381__auto__.call(null);(statearr_16728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___16729);
return statearr_16728;
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
