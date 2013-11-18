// Compiled by ClojureScript 0.0-2014
goog.provide('koans.repl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
koans.repl.output_chan = cljs.core.async.chan.call(null);
koans.repl.error_chan = cljs.core.async.chan.call(null);
koans.repl.channel_piping_fn = (function channel_piping_fn(chan){return (function (text){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_25525){var state_val_25526 = (state_25525[1]);if((state_val_25526 === 2))
{var inst_25523 = (state_25525[2]);var state_25525__$1 = state_25525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25525__$1,inst_25523);
} else
{if((state_val_25526 === 1))
{var state_25525__$1 = state_25525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25525__$1,2,chan,text);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_25528 = (new Array(5));(statearr_25528[0] = state_machine__5331__auto__);
(statearr_25528[1] = 1);
return statearr_25528;
});
var state_machine__5331__auto____1 = (function (state_25525){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_25525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_25525){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_25525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_25529 = f__5381__auto__.call(null);(statearr_25529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_25529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
});
koans.repl.eval = (function eval(input_string){return repl.evaluate(input_string);
});
goog.exportSymbol('koans.repl.eval', koans.repl.eval);
koans.repl.listen_for_output = (function listen_for_output(handler){repl.init_with_pipes(koans.repl.channel_piping_fn.call(null,koans.repl.output_chan),koans.repl.channel_piping_fn.call(null,koans.repl.error_chan),(function (p1__25530_SHARP_){return console.log(p1__25530_SHARP_);
}));
var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_25575){var state_val_25576 = (state_25575[1]);if((state_val_25576 === 7))
{var inst_25564 = (state_25575[2]);var inst_25565 = cljs.core.nth.call(null,inst_25564,0,null);var inst_25566 = cljs.core.nth.call(null,inst_25564,1,null);var inst_25567 = handler.call(null,inst_25565);var state_25575__$1 = (function (){var statearr_25577 = state_25575;(statearr_25577[5] = inst_25567);
(statearr_25577[6] = inst_25566);
return statearr_25577;
})();var statearr_25578_25587 = state_25575__$1;(statearr_25578_25587[2] = null);
(statearr_25578_25587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25576 === 6))
{var inst_25571 = (state_25575[2]);var state_25575__$1 = state_25575;var statearr_25579_25588 = state_25575__$1;(statearr_25579_25588[2] = inst_25571);
(statearr_25579_25588[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25576 === 5))
{var state_25575__$1 = state_25575;var statearr_25580_25589 = state_25575__$1;(statearr_25580_25589[2] = null);
(statearr_25580_25589[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25576 === 4))
{var inst_25562 = cljs.core.vector.call(null,koans.repl.error_chan,koans.repl.output_chan);var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25575__$1,7,inst_25562);
} else
{if((state_val_25576 === 3))
{var inst_25573 = (state_25575[2]);var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25575__$1,inst_25573);
} else
{if((state_val_25576 === 2))
{var state_25575__$1 = state_25575;if(true)
{var statearr_25581_25590 = state_25575__$1;(statearr_25581_25590[1] = 4);
} else
{var statearr_25582_25591 = state_25575__$1;(statearr_25582_25591[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25576 === 1))
{var state_25575__$1 = state_25575;var statearr_25583_25592 = state_25575__$1;(statearr_25583_25592[2] = null);
(statearr_25583_25592[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_25585 = (new Array(7));(statearr_25585[0] = state_machine__5331__auto__);
(statearr_25585[1] = 1);
return statearr_25585;
});
var state_machine__5331__auto____1 = (function (state_25575){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_25575);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_25586 = f__5381__auto__.call(null);(statearr_25586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_25586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
});
goog.exportSymbol('koans.repl.listen_for_output', koans.repl.listen_for_output);

//# sourceMappingURL=repl.js.map