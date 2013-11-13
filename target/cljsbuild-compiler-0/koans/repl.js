// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_22587){var state_val_22588 = (state_22587[1]);if((state_val_22588 === 2))
{var inst_22585 = (state_22587[2]);var state_22587__$1 = state_22587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22587__$1,inst_22585);
} else
{if((state_val_22588 === 1))
{var state_22587__$1 = state_22587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22587__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_22590 = (new Array(5));(statearr_22590[0] = state_machine__5331__auto__);
(statearr_22590[1] = 1);
return statearr_22590;
});
var state_machine__5331__auto____1 = (function (state_22587){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_22587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_22587){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_22587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_22591 = f__5381__auto__.call(null);(statearr_22591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_22591;
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
koans.repl.listen_for_output = (function listen_for_output(handler){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_22638){var state_val_22639 = (state_22638[1]);if((state_val_22639 === 7))
{var inst_22626 = (state_22638[2]);var inst_22627 = cljs.core.nth.call(null,inst_22626,0,null);var inst_22628 = cljs.core.nth.call(null,inst_22626,1,null);var inst_22629 = console.log(inst_22627);var inst_22630 = handler.call(null,inst_22627);var state_22638__$1 = (function (){var statearr_22640 = state_22638;(statearr_22640[5] = inst_22630);
(statearr_22640[6] = inst_22628);
(statearr_22640[7] = inst_22629);
return statearr_22640;
})();var statearr_22641_22650 = state_22638__$1;(statearr_22641_22650[2] = null);
(statearr_22641_22650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22639 === 6))
{var inst_22634 = (state_22638[2]);var state_22638__$1 = state_22638;var statearr_22642_22651 = state_22638__$1;(statearr_22642_22651[2] = inst_22634);
(statearr_22642_22651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22639 === 5))
{var state_22638__$1 = state_22638;var statearr_22643_22652 = state_22638__$1;(statearr_22643_22652[2] = null);
(statearr_22643_22652[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22639 === 4))
{var inst_22624 = cljs.core.vector.call(null,koans.repl.output_chan);var state_22638__$1 = state_22638;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22638__$1,7,inst_22624);
} else
{if((state_val_22639 === 3))
{var inst_22636 = (state_22638[2]);var state_22638__$1 = state_22638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22638__$1,inst_22636);
} else
{if((state_val_22639 === 2))
{var state_22638__$1 = state_22638;if(true)
{var statearr_22644_22653 = state_22638__$1;(statearr_22644_22653[1] = 4);
} else
{var statearr_22645_22654 = state_22638__$1;(statearr_22645_22654[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22639 === 1))
{var state_22638__$1 = state_22638;var statearr_22646_22655 = state_22638__$1;(statearr_22646_22655[2] = null);
(statearr_22646_22655[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_22648 = (new Array(8));(statearr_22648[0] = state_machine__5331__auto__);
(statearr_22648[1] = 1);
return statearr_22648;
});
var state_machine__5331__auto____1 = (function (state_22638){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_22638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_22638){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_22638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_22649 = f__5381__auto__.call(null);(statearr_22649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_22649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);
