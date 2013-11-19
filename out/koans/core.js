// Compiled by ClojureScript 0.0-2014
goog.provide('koans.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('koans.repl');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('koans.meditations');
goog.require('koans.meditations');
goog.require('koans.repl');
goog.require('dommy.core');
koans.core.hash_objects = (function hash_objects(){return clojure.string.split.call(null,location.hash,"/");
});
koans.core.current_koan_index = (function current_koan_index(){return (new koans.meditations.KoanIndex(cljs.core.subs.call(null,cljs.core.first.call(null,koans.core.hash_objects.call(null)),1),(cljs.core.last.call(null,koans.core.hash_objects.call(null)) - 1)));
});
koans.core.update_location_hash = (function update_location_hash(){var koan = koans.meditations.next_koan_index.call(null,koans.core.current_koan_index.call(null));return location.hash = [cljs.core.str(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan)),cljs.core.str("/"),cljs.core.str((new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan) + 1))].join('');
});
koans.core.fadeout_time = 600;
koans.core.char_width = 14;
koans.core.enter_key = 13;
koans.core.fade_in_BANG_ = (function fade_in_BANG_(elem){return setTimeout((function (){return dommy.core.add_class_BANG_.call(null,elem,"unfaded");
}),0);
});
koans.core.input_with_code = (function input_with_code(koan){var dom25432 = document.createElement("div");if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join('')))
{dom25432.className = [cljs.core.str(dom25432.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))].join('').trim();
} else
{}
dom25432.appendChild((function (){var dom25433 = document.createElement("div");if("description")
{dom25433.className = [cljs.core.str(dom25433.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();
} else
{}
dom25433.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koan)));
return dom25433;
})());
dom25432.appendChild((function (){var dom25434 = document.createElement("div");if("code")
{dom25434.className = [cljs.core.str(dom25434.className),cljs.core.str(" "),cljs.core.str("code")].join('').trim();
} else
{}
dom25434.appendChild((function (){var dom25435 = document.createElement("span");if("shadow")
{dom25435.className = [cljs.core.str(dom25435.className),cljs.core.str(" "),cljs.core.str("shadow")].join('').trim();
} else
{}
return dom25435;
})());
dom25434.appendChild((function (){var dom25436 = document.createElement("span");if("before")
{dom25436.className = [cljs.core.str(dom25436.className),cljs.core.str(" "),cljs.core.str("before")].join('').trim();
} else
{}
dom25436.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"before","before",3915985649).cljs$core$IFn$_invoke$arity$1(koan)));
return dom25436;
})());
dom25434.appendChild((function (){var dom25437 = document.createElement("input");if("user-input")
{dom25437.className = [cljs.core.str(dom25437.className),cljs.core.str(" "),cljs.core.str("user-input")].join('').trim();
} else
{}
if("code")
{dom25437.setAttribute("name","code");
} else
{}
return dom25437;
})());
dom25434.appendChild((function (){var dom25438 = document.createElement("span");if("after")
{dom25438.className = [cljs.core.str(dom25438.className),cljs.core.str(" "),cljs.core.str("after")].join('').trim();
} else
{}
dom25438.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"after","after",1106639182).cljs$core$IFn$_invoke$arity$1(koan)));
return dom25438;
})());
return dom25434;
})());
return dom25432;
});
koans.core.error_message = (function error_message(){var dom25440 = document.createElement("div");if("error")
{dom25440.className = [cljs.core.str(dom25440.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();
} else
{}
dom25440.appendChild(document.createTextNode("You have not yet attained enlightenment."));
return dom25440;
});
koans.core.input_string = (function input_string(){var before = dommy.core.text.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("before"))[0]));var input = dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[0]));var after = dommy.core.text.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("after"))[0]));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,input)))
{return "";
} else
{return clojure.string.join.call(null," ",cljs.core.PersistentVector.fromArray([before,input,after], true));
}
});
koans.core.evaluate_koan = (function evaluate_koan(){return koans.repl.eval.call(null,koans.core.input_string.call(null));
});
koans.core.resize_chan = cljs.core.async.chan.call(null);
koans.core.load_next_koan = (function load_next_koan(){return koans.core.update_location_hash.call(null);
});
koans.core.remove_active_koan = (function remove_active_koan(){var koan = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("koan"))[0]);if(!((koan == null)))
{dommy.core.remove_class_BANG_.call(null,koan,"unfaded");
return setTimeout((function (){return dommy.core.remove_BANG_.call(null,koan);
}),koans.core.fadeout_time);
} else
{return null;
}
});
koans.core.render_koan = (function render_koan(koan){koans.core.remove_active_koan.call(null);
var elem = koans.core.input_with_code.call(null,koan);return setTimeout((function (){return dommy.core.append_BANG_.call(null,document.body,elem).call(null,koans.core.fade_in_BANG_.call(null,elem),(function (){var input = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("user-input"))[0]);input.focus();
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("code"))[0]),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return input.focus();
}));
dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"keypress","keypress",1530666166),(function (e){if(cljs.core._EQ_.call(null,e.charCode,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
return dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"input","input",1114262332),(function (e){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_25452){var state_val_25453 = (state_25452[1]);if((state_val_25453 === 2))
{var inst_25450 = (state_25452[2]);var state_25452__$1 = state_25452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25452__$1,inst_25450);
} else
{if((state_val_25453 === 1))
{var state_25452__$1 = state_25452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25452__$1,2,koans.core.resize_chan,e);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_25455 = (new Array(5));(statearr_25455[0] = state_machine__5331__auto__);
(statearr_25455[1] = 1);
return statearr_25455;
});
var state_machine__5331__auto____1 = (function (state_25452){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_25452);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_25452){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_25452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_25456 = f__5381__auto__.call(null);(statearr_25456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_25456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
}));
})());
}),koans.core.fadeout_time);
});
koans.core.render_current_koan = (function render_current_koan(){if(cljs.core.truth_(koans.meditations.koan_exists_QMARK_.call(null,koans.core.current_koan_index.call(null))))
{var current_koan = koans.meditations.koan_for_index.call(null,koans.core.current_koan_index.call(null));return koans.core.render_koan.call(null,current_koan);
} else
{return koans.core.update_location_hash.call(null);
}
});
koans.core.resize_input = (function resize_input(){koans.core.remove_spaces = (function remove_spaces(text){return clojure.string.replace.call(null,text," ","_");
});
var input = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("user-input"))[0]);var shadow = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("shadow"))[0]);dommy.core.set_text_BANG_.call(null,shadow,koans.core.remove_spaces.call(null,dommy.core.value.call(null,input)));
var shadow_width = shadow.getBoundingClientRect().width;var input_width = input.getBoundingClientRect().width;if((shadow_width >= input_width))
{return dommy.core.set_px_BANG_.call(null,input,new cljs.core.Keyword(null,"width","width",1127031096),(shadow_width + (4 * koans.core.char_width)));
} else
{if(((input_width - (4 * koans.core.char_width)) >= shadow_width))
{return dommy.core.set_px_BANG_.call(null,input,new cljs.core.Keyword(null,"width","width",1127031096),(shadow_width + (4 * koans.core.char_width)));
} else
{return null;
}
}
});
var c__5380__auto___25481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_25469){var state_val_25470 = (state_25469[1]);if((state_val_25470 === 7))
{var inst_25460 = (state_25469[2]);var inst_25461 = koans.core.resize_input.call(null);var state_25469__$1 = (function (){var statearr_25471 = state_25469;(statearr_25471[5] = inst_25461);
(statearr_25471[6] = inst_25460);
return statearr_25471;
})();var statearr_25472_25482 = state_25469__$1;(statearr_25472_25482[2] = null);
(statearr_25472_25482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25470 === 6))
{var inst_25465 = (state_25469[2]);var state_25469__$1 = state_25469;var statearr_25473_25483 = state_25469__$1;(statearr_25473_25483[2] = inst_25465);
(statearr_25473_25483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25470 === 5))
{var state_25469__$1 = state_25469;var statearr_25474_25484 = state_25469__$1;(statearr_25474_25484[2] = null);
(statearr_25474_25484[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25470 === 4))
{var state_25469__$1 = state_25469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25469__$1,7,koans.core.resize_chan);
} else
{if((state_val_25470 === 3))
{var inst_25467 = (state_25469[2]);var state_25469__$1 = state_25469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25469__$1,inst_25467);
} else
{if((state_val_25470 === 2))
{var state_25469__$1 = state_25469;if(true)
{var statearr_25475_25485 = state_25469__$1;(statearr_25475_25485[1] = 4);
} else
{var statearr_25476_25486 = state_25469__$1;(statearr_25476_25486[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25470 === 1))
{var state_25469__$1 = state_25469;var statearr_25477_25487 = state_25469__$1;(statearr_25477_25487[2] = null);
(statearr_25477_25487[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_25479 = (new Array(7));(statearr_25479[0] = state_machine__5331__auto__);
(statearr_25479[1] = 1);
return statearr_25479;
});
var state_machine__5331__auto____1 = (function (state_25469){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_25469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_25469){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_25469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_25480 = f__5381__auto__.call(null);(statearr_25480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___25481);
return statearr_25480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
window.onload = (function (){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,location.hash)))
{return location.hash = "equality/1";
} else
{return koans.core.render_current_koan.call(null);
}
});
window.onhashchange = (function (){return koans.core.render_current_koan.call(null);
});
koans.core.show_error_message = (function show_error_message(){if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("code"))[0]),"incorrect")))
{var code_box = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("code"))[0]);var error = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("error"))[0]);dommy.core.remove_class_BANG_.call(null,code_box,"incorrect");
dommy.core.remove_class_BANG_.call(null,error,"unfaded");
return setTimeout((function (){return dommy.core.add_class_BANG_.call(null,code_box,"incorrect").call(null,dommy.core.add_class_BANG_.call(null,error,"unfaded"));
}),300);
} else
{var error = koans.core.error_message.call(null);dommy.core.append_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("koan"))[0]),error);
koans.core.fade_in_BANG_.call(null,error);
return dommy.core.add_class_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("code"))[0]),"incorrect");
}
});
koans.core.evaluate_response = (function evaluate_response(text){console.log(text);
if(cljs.core._EQ_.call(null,text,"true"))
{return koans.core.load_next_koan.call(null);
} else
{if((cljs.core._EQ_.call(null,text,"false")) || (!((cljs.core.re_find.call(null,/\#\<[A-Za-z]*?Error:/,text) == null))))
{return koans.core.show_error_message.call(null);
} else
{return null;
}
}
});
koans.repl.listen_for_output.call(null,koans.core.evaluate_response);

//# sourceMappingURL=core.js.map