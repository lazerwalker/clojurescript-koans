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
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12792){var state_val_12793 = (state_12792[1]);if((state_val_12793 === 2))
{var inst_12790 = (state_12792[2]);var state_12792__$1 = state_12792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12792__$1,inst_12790);
} else
{if((state_val_12793 === 1))
{var state_12792__$1 = state_12792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12792__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12795 = (new Array(5));(statearr_12795[0] = state_machine__5328__auto__);
(statearr_12795[1] = 1);
return statearr_12795;
});
var state_machine__5328__auto____1 = (function (state_12792){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12792){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12796 = f__5378__auto__.call(null);(statearr_12796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__12797_SHARP_){return jayq.util.log.call(null,p1__12797_SHARP_);
}));
var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12842){var state_val_12843 = (state_12842[1]);if((state_val_12843 === 7))
{var inst_12831 = (state_12842[2]);var inst_12832 = cljs.core.nth.call(null,inst_12831,0,null);var inst_12833 = cljs.core.nth.call(null,inst_12831,1,null);var inst_12834 = handler.call(null,inst_12832);var state_12842__$1 = (function (){var statearr_12844 = state_12842;(statearr_12844[5] = inst_12833);
(statearr_12844[6] = inst_12834);
return statearr_12844;
})();var statearr_12845_12854 = state_12842__$1;(statearr_12845_12854[2] = null);
(statearr_12845_12854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 6))
{var inst_12838 = (state_12842[2]);var state_12842__$1 = state_12842;var statearr_12846_12855 = state_12842__$1;(statearr_12846_12855[2] = inst_12838);
(statearr_12846_12855[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 5))
{var state_12842__$1 = state_12842;var statearr_12847_12856 = state_12842__$1;(statearr_12847_12856[2] = null);
(statearr_12847_12856[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 4))
{var inst_12829 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12842__$1,7,inst_12829);
} else
{if((state_val_12843 === 3))
{var inst_12840 = (state_12842[2]);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12842__$1,inst_12840);
} else
{if((state_val_12843 === 2))
{var state_12842__$1 = state_12842;if(true)
{var statearr_12848_12857 = state_12842__$1;(statearr_12848_12857[1] = 4);
} else
{var statearr_12849_12858 = state_12842__$1;(statearr_12849_12858[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 1))
{var state_12842__$1 = state_12842;var statearr_12850_12859 = state_12842__$1;(statearr_12850_12859[2] = null);
(statearr_12850_12859[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_12852 = (new Array(7));(statearr_12852[0] = state_machine__5328__auto__);
(statearr_12852[1] = 1);
return statearr_12852;
});
var state_machine__5328__auto____1 = (function (state_12842){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12842);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12842){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12853 = f__5378__auto__.call(null);(statearr_12853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);

//# sourceMappingURL=repl.js.map