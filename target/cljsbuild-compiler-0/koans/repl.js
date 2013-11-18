// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_12610){var state_val_12611 = (state_12610[1]);if((state_val_12611 === 2))
{var inst_12608 = (state_12610[2]);var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12610__$1,inst_12608);
} else
{if((state_val_12611 === 1))
{var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12610__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_12613 = (new Array(5));(statearr_12613[0] = state_machine__5331__auto__);
(statearr_12613[1] = 1);
return statearr_12613;
});
var state_machine__5331__auto____1 = (function (state_12610){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_12610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_12610){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_12610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_12614 = f__5381__auto__.call(null);(statearr_12614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_12614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__12615_SHARP_){return console.log(p1__12615_SHARP_);
}));
var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_12660){var state_val_12661 = (state_12660[1]);if((state_val_12661 === 7))
{var inst_12649 = (state_12660[2]);var inst_12650 = cljs.core.nth.call(null,inst_12649,0,null);var inst_12651 = cljs.core.nth.call(null,inst_12649,1,null);var inst_12652 = handler.call(null,inst_12650);var state_12660__$1 = (function (){var statearr_12662 = state_12660;(statearr_12662[5] = inst_12652);
(statearr_12662[6] = inst_12651);
return statearr_12662;
})();var statearr_12663_12672 = state_12660__$1;(statearr_12663_12672[2] = null);
(statearr_12663_12672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 6))
{var inst_12656 = (state_12660[2]);var state_12660__$1 = state_12660;var statearr_12664_12673 = state_12660__$1;(statearr_12664_12673[2] = inst_12656);
(statearr_12664_12673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 5))
{var state_12660__$1 = state_12660;var statearr_12665_12674 = state_12660__$1;(statearr_12665_12674[2] = null);
(statearr_12665_12674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 4))
{var inst_12647 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12660__$1,7,inst_12647);
} else
{if((state_val_12661 === 3))
{var inst_12658 = (state_12660[2]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === 2))
{var state_12660__$1 = state_12660;if(true)
{var statearr_12666_12675 = state_12660__$1;(statearr_12666_12675[1] = 4);
} else
{var statearr_12667_12676 = state_12660__$1;(statearr_12667_12676[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12661 === 1))
{var state_12660__$1 = state_12660;var statearr_12668_12677 = state_12660__$1;(statearr_12668_12677[2] = null);
(statearr_12668_12677[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_12670 = (new Array(7));(statearr_12670[0] = state_machine__5331__auto__);
(statearr_12670[1] = 1);
return statearr_12670;
});
var state_machine__5331__auto____1 = (function (state_12660){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_12671 = f__5381__auto__.call(null);(statearr_12671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_12671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);
