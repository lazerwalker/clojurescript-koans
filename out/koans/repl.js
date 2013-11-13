// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_22823){var state_val_22824 = (state_22823[1]);if((state_val_22824 === 2))
{var inst_22821 = (state_22823[2]);var state_22823__$1 = state_22823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22823__$1,inst_22821);
} else
{if((state_val_22824 === 1))
{var state_22823__$1 = state_22823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22823__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_22826 = (new Array(5));(statearr_22826[0] = state_machine__5331__auto__);
(statearr_22826[1] = 1);
return statearr_22826;
});
var state_machine__5331__auto____1 = (function (state_22823){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_22823);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_22823){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_22823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_22827 = f__5381__auto__.call(null);(statearr_22827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_22827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
});
repl.output = koans.repl.channel_piping_fn.call(null,koans.repl.output_chan);
repl.error = koans.repl.channel_piping_fn.call(null,koans.repl.error_chan);
repl.print_fn = (function (){return cljs.core.List.EMPTY;
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_22874){var state_val_22875 = (state_22874[1]);if((state_val_22875 === 7))
{var inst_22862 = (state_22874[2]);var inst_22863 = cljs.core.nth.call(null,inst_22862,0,null);var inst_22864 = cljs.core.nth.call(null,inst_22862,1,null);var inst_22865 = console.log(inst_22863);var inst_22866 = handler.call(null,inst_22863);var state_22874__$1 = (function (){var statearr_22876 = state_22874;(statearr_22876[5] = inst_22864);
(statearr_22876[6] = inst_22865);
(statearr_22876[7] = inst_22866);
return statearr_22876;
})();var statearr_22877_22886 = state_22874__$1;(statearr_22877_22886[2] = null);
(statearr_22877_22886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22875 === 6))
{var inst_22870 = (state_22874[2]);var state_22874__$1 = state_22874;var statearr_22878_22887 = state_22874__$1;(statearr_22878_22887[2] = inst_22870);
(statearr_22878_22887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22875 === 5))
{var state_22874__$1 = state_22874;var statearr_22879_22888 = state_22874__$1;(statearr_22879_22888[2] = null);
(statearr_22879_22888[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22875 === 4))
{var inst_22860 = cljs.core.vector.call(null,koans.repl.output_chan);var state_22874__$1 = state_22874;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22874__$1,7,inst_22860);
} else
{if((state_val_22875 === 3))
{var inst_22872 = (state_22874[2]);var state_22874__$1 = state_22874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22874__$1,inst_22872);
} else
{if((state_val_22875 === 2))
{var state_22874__$1 = state_22874;if(true)
{var statearr_22880_22889 = state_22874__$1;(statearr_22880_22889[1] = 4);
} else
{var statearr_22881_22890 = state_22874__$1;(statearr_22881_22890[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22875 === 1))
{var state_22874__$1 = state_22874;var statearr_22882_22891 = state_22874__$1;(statearr_22882_22891[2] = null);
(statearr_22882_22891[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_22884 = (new Array(8));(statearr_22884[0] = state_machine__5331__auto__);
(statearr_22884[1] = 1);
return statearr_22884;
});
var state_machine__5331__auto____1 = (function (state_22874){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_22874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_22874){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_22874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_22885 = f__5381__auto__.call(null);(statearr_22885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_22885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);

//# sourceMappingURL=repl.js.map