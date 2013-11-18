// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_25387){var state_val_25388 = (state_25387[1]);if((state_val_25388 === 2))
{var inst_25385 = (state_25387[2]);var state_25387__$1 = state_25387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25387__$1,inst_25385);
} else
{if((state_val_25388 === 1))
{var state_25387__$1 = state_25387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25387__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_25390 = (new Array(5));(statearr_25390[0] = state_machine__5331__auto__);
(statearr_25390[1] = 1);
return statearr_25390;
});
var state_machine__5331__auto____1 = (function (state_25387){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_25387);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_25387){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_25387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_25391 = f__5381__auto__.call(null);(statearr_25391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_25391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__25392_SHARP_){return console.log(p1__25392_SHARP_);
}));
var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_25437){var state_val_25438 = (state_25437[1]);if((state_val_25438 === 7))
{var inst_25426 = (state_25437[2]);var inst_25427 = cljs.core.nth.call(null,inst_25426,0,null);var inst_25428 = cljs.core.nth.call(null,inst_25426,1,null);var inst_25429 = handler.call(null,inst_25427);var state_25437__$1 = (function (){var statearr_25439 = state_25437;(statearr_25439[5] = inst_25428);
(statearr_25439[6] = inst_25429);
return statearr_25439;
})();var statearr_25440_25449 = state_25437__$1;(statearr_25440_25449[2] = null);
(statearr_25440_25449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25438 === 6))
{var inst_25433 = (state_25437[2]);var state_25437__$1 = state_25437;var statearr_25441_25450 = state_25437__$1;(statearr_25441_25450[2] = inst_25433);
(statearr_25441_25450[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25438 === 5))
{var state_25437__$1 = state_25437;var statearr_25442_25451 = state_25437__$1;(statearr_25442_25451[2] = null);
(statearr_25442_25451[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25438 === 4))
{var inst_25424 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_25437__$1 = state_25437;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25437__$1,7,inst_25424);
} else
{if((state_val_25438 === 3))
{var inst_25435 = (state_25437[2]);var state_25437__$1 = state_25437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25437__$1,inst_25435);
} else
{if((state_val_25438 === 2))
{var state_25437__$1 = state_25437;if(true)
{var statearr_25443_25452 = state_25437__$1;(statearr_25443_25452[1] = 4);
} else
{var statearr_25444_25453 = state_25437__$1;(statearr_25444_25453[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25438 === 1))
{var state_25437__$1 = state_25437;var statearr_25445_25454 = state_25437__$1;(statearr_25445_25454[2] = null);
(statearr_25445_25454[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_25447 = (new Array(7));(statearr_25447[0] = state_machine__5331__auto__);
(statearr_25447[1] = 1);
return statearr_25447;
});
var state_machine__5331__auto____1 = (function (state_25437){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_25437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_25437){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_25437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_25448 = f__5381__auto__.call(null);(statearr_25448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_25448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);

//# sourceMappingURL=repl.js.map