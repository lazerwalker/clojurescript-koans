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
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12749){var state_val_12750 = (state_12749[1]);if((state_val_12750 === 2))
{var inst_12747 = (state_12749[2]);var state_12749__$1 = state_12749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12749__$1,inst_12747);
} else
{if((state_val_12750 === 1))
{var state_12749__$1 = state_12749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12749__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12752 = (new Array(5));(statearr_12752[0] = state_machine__5328__auto__);
(statearr_12752[1] = 1);
return statearr_12752;
});
var state_machine__5328__auto____1 = (function (state_12749){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12749){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12753 = f__5378__auto__.call(null);(statearr_12753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__12754_SHARP_){return jayq.util.log.call(null,p1__12754_SHARP_);
}));
var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12799){var state_val_12800 = (state_12799[1]);if((state_val_12800 === 7))
{var inst_12788 = (state_12799[2]);var inst_12789 = cljs.core.nth.call(null,inst_12788,0,null);var inst_12790 = cljs.core.nth.call(null,inst_12788,1,null);var inst_12791 = handler.call(null,inst_12789);var state_12799__$1 = (function (){var statearr_12801 = state_12799;(statearr_12801[5] = inst_12790);
(statearr_12801[6] = inst_12791);
return statearr_12801;
})();var statearr_12802_12811 = state_12799__$1;(statearr_12802_12811[2] = null);
(statearr_12802_12811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 6))
{var inst_12795 = (state_12799[2]);var state_12799__$1 = state_12799;var statearr_12803_12812 = state_12799__$1;(statearr_12803_12812[2] = inst_12795);
(statearr_12803_12812[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 5))
{var state_12799__$1 = state_12799;var statearr_12804_12813 = state_12799__$1;(statearr_12804_12813[2] = null);
(statearr_12804_12813[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 4))
{var inst_12786 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12799__$1,7,inst_12786);
} else
{if((state_val_12800 === 3))
{var inst_12797 = (state_12799[2]);var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12799__$1,inst_12797);
} else
{if((state_val_12800 === 2))
{var state_12799__$1 = state_12799;if(true)
{var statearr_12805_12814 = state_12799__$1;(statearr_12805_12814[1] = 4);
} else
{var statearr_12806_12815 = state_12799__$1;(statearr_12806_12815[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 1))
{var state_12799__$1 = state_12799;var statearr_12807_12816 = state_12799__$1;(statearr_12807_12816[2] = null);
(statearr_12807_12816[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_12809 = (new Array(7));(statearr_12809[0] = state_machine__5328__auto__);
(statearr_12809[1] = 1);
return statearr_12809;
});
var state_machine__5328__auto____1 = (function (state_12799){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12799);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12799){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12810 = f__5378__auto__.call(null);(statearr_12810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);

//# sourceMappingURL=repl.js.map