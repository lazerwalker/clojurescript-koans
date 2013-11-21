// Compiled by ClojureScript 0.0-2014
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 4;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t15960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t15960 = (function (f,fn_handler,meta15961){
this.f = f;
this.fn_handler = fn_handler;
this.meta15961 = meta15961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t15960.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t15960.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t15960";
cljs.core.async.impl.ioc_helpers.t15960.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"cljs.core.async.impl.ioc-helpers/t15960");
});
cljs.core.async.impl.ioc_helpers.t15960.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t15960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t15960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t15960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15962){var self__ = this;
var _15962__$1 = this;return self__.meta15961;
});
cljs.core.async.impl.ioc_helpers.t15960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15962,meta15961__$1){var self__ = this;
var _15962__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t15960(self__.f,self__.fn_handler,meta15961__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t15960 = (function __GT_t15960(f__$1,fn_handler__$1,meta15961){return (new cljs.core.async.impl.ioc_helpers.t15960(f__$1,fn_handler__$1,meta15961));
});
}
return (new cljs.core.async.impl.ioc_helpers.t15960(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e15964){if((e15964 instanceof Object))
{var ex = e15964;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15964;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_15967_15969 = state;(statearr_15967_15969[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_15967_15969[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_15968_15970 = state;(statearr_15968_15970[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_15968_15970[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_15973_15975 = state;(statearr_15973_15975[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_15973_15975[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_15974_15976 = state;(statearr_15974_15976[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_15974_15976[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__15977){var map__15982 = p__15977;var map__15982__$1 = ((cljs.core.seq_QMARK_.call(null,map__15982))?cljs.core.apply.call(null,cljs.core.hash_map,map__15982):map__15982);var opts = map__15982__$1;var statearr_15983_15986 = state;(statearr_15983_15986[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_15984_15987 = state;(statearr_15984_15987[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_15985_15988 = state;(statearr_15985_15988[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__15977 = null;if (arguments.length > 3) {
  p__15977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__15977);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__15989){
var state = cljs.core.first(arglist__15989);
arglist__15989 = cljs.core.next(arglist__15989);
var cont_block = cljs.core.first(arglist__15989);
arglist__15989 = cljs.core.next(arglist__15989);
var ports = cljs.core.first(arglist__15989);
var p__15977 = cljs.core.rest(arglist__15989);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__15977);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

//# sourceMappingURL=ioc_helpers.js.map