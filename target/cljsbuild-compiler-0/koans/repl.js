// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_12582){var state_val_12583 = (state_12582[1]);if((state_val_12583 === 2))
{var inst_12580 = (state_12582[2]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12582__$1,inst_12580);
} else
{if((state_val_12583 === 1))
{var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12582__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_12585 = (new Array(5));(statearr_12585[0] = state_machine__5331__auto__);
(statearr_12585[1] = 1);
return statearr_12585;
});
var state_machine__5331__auto____1 = (function (state_12582){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_12582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_12582){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_12582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_12586 = f__5381__auto__.call(null);(statearr_12586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_12586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__12587_SHARP_){return console.log(p1__12587_SHARP_);
}));
var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_12632){var state_val_12633 = (state_12632[1]);if((state_val_12633 === 7))
{var inst_12621 = (state_12632[2]);var inst_12622 = cljs.core.nth.call(null,inst_12621,0,null);var inst_12623 = cljs.core.nth.call(null,inst_12621,1,null);var inst_12624 = handler.call(null,inst_12622);var state_12632__$1 = (function (){var statearr_12634 = state_12632;(statearr_12634[5] = inst_12623);
(statearr_12634[6] = inst_12624);
return statearr_12634;
})();var statearr_12635_12644 = state_12632__$1;(statearr_12635_12644[2] = null);
(statearr_12635_12644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12633 === 6))
{var inst_12628 = (state_12632[2]);var state_12632__$1 = state_12632;var statearr_12636_12645 = state_12632__$1;(statearr_12636_12645[2] = inst_12628);
(statearr_12636_12645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12633 === 5))
{var state_12632__$1 = state_12632;var statearr_12637_12646 = state_12632__$1;(statearr_12637_12646[2] = null);
(statearr_12637_12646[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12633 === 4))
{var inst_12619 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_12632__$1 = state_12632;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12632__$1,7,inst_12619);
} else
{if((state_val_12633 === 3))
{var inst_12630 = (state_12632[2]);var state_12632__$1 = state_12632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12632__$1,inst_12630);
} else
{if((state_val_12633 === 2))
{var state_12632__$1 = state_12632;if(true)
{var statearr_12638_12647 = state_12632__$1;(statearr_12638_12647[1] = 4);
} else
{var statearr_12639_12648 = state_12632__$1;(statearr_12639_12648[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12633 === 1))
{var state_12632__$1 = state_12632;var statearr_12640_12649 = state_12632__$1;(statearr_12640_12649[2] = null);
(statearr_12640_12649[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_12642 = (new Array(7));(statearr_12642[0] = state_machine__5331__auto__);
(statearr_12642[1] = 1);
return statearr_12642;
});
var state_machine__5331__auto____1 = (function (state_12632){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_12632);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_12632){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_12632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_12643 = f__5381__auto__.call(null);(statearr_12643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_12643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);
