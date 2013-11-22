// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('jayq.util');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12858){var state_val_12859 = (state_12858[1]);if((state_val_12859 === 2))
{var inst_12856 = (state_12858[2]);var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12858__$1,inst_12856);
} else
{if((state_val_12859 === 1))
{var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12858__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12861 = (new Array(5));(statearr_12861[0] = state_machine__5328__auto__);
(statearr_12861[1] = 1);
return statearr_12861;
});
var state_machine__5328__auto____1 = (function (state_12858){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12858){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12862 = f__5378__auto__.call(null);(statearr_12862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__12863_SHARP_){return jayq.util.log.call(null,p1__12863_SHARP_);
}));
var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12908){var state_val_12909 = (state_12908[1]);if((state_val_12909 === 7))
{var inst_12897 = (state_12908[2]);var inst_12898 = cljs.core.nth.call(null,inst_12897,0,null);var inst_12899 = cljs.core.nth.call(null,inst_12897,1,null);var inst_12900 = handler.call(null,inst_12898);var state_12908__$1 = (function (){var statearr_12910 = state_12908;(statearr_12910[5] = inst_12900);
(statearr_12910[6] = inst_12899);
return statearr_12910;
})();var statearr_12911_12920 = state_12908__$1;(statearr_12911_12920[2] = null);
(statearr_12911_12920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12909 === 6))
{var inst_12904 = (state_12908[2]);var state_12908__$1 = state_12908;var statearr_12912_12921 = state_12908__$1;(statearr_12912_12921[2] = inst_12904);
(statearr_12912_12921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12909 === 5))
{var state_12908__$1 = state_12908;var statearr_12913_12922 = state_12908__$1;(statearr_12913_12922[2] = null);
(statearr_12913_12922[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12909 === 4))
{var inst_12895 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_12908__$1 = state_12908;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12908__$1,7,inst_12895);
} else
{if((state_val_12909 === 3))
{var inst_12906 = (state_12908[2]);var state_12908__$1 = state_12908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12908__$1,inst_12906);
} else
{if((state_val_12909 === 2))
{var state_12908__$1 = state_12908;if(true)
{var statearr_12914_12923 = state_12908__$1;(statearr_12914_12923[1] = 4);
} else
{var statearr_12915_12924 = state_12908__$1;(statearr_12915_12924[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12909 === 1))
{var state_12908__$1 = state_12908;var statearr_12916_12925 = state_12908__$1;(statearr_12916_12925[2] = null);
(statearr_12916_12925[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_12918 = (new Array(7));(statearr_12918[0] = state_machine__5328__auto__);
(statearr_12918[1] = 1);
return statearr_12918;
});
var state_machine__5328__auto____1 = (function (state_12908){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12908);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12908){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12919 = f__5378__auto__.call(null);(statearr_12919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);

//# sourceMappingURL=repl.js.map