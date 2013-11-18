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
koans.core.current_koan = (function current_koan(){return koans.meditations.koan_for_index.call(null,koans.core.current_koan_index.call(null));
});
koans.core.update_location_hash = (function update_location_hash(){var koan = koans.meditations.next_koan_index.call(null,koans.core.current_koan_index.call(null));return location.hash = [cljs.core.str(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan)),cljs.core.str("/"),cljs.core.str((new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan) + 1))].join('');
});
koans.core.fadeout_time = 600;
koans.core.char_width = 14;
koans.core.enter_key = 13;
koans.core.fade_in_BANG_ = (function fade_in_BANG_(elem){return setTimeout((function (){return dommy.core.add_class_BANG_.call(null,elem,"unfaded");
}),0);
});
koans.core.input_with_code = (function input_with_code(koan){var dom12496 = document.createElement("div");if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join('')))
{dom12496.className = [cljs.core.str(dom12496.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))].join('').trim();
} else
{}
dom12496.appendChild((function (){var dom12497 = document.createElement("div");if("description")
{dom12497.className = [cljs.core.str(dom12497.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();
} else
{}
dom12497.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koan)));
return dom12497;
})());
dom12496.appendChild((function (){var dom12498 = document.createElement("div");if("code")
{dom12498.className = [cljs.core.str(dom12498.className),cljs.core.str(" "),cljs.core.str("code")].join('').trim();
} else
{}
dom12498.appendChild((function (){var dom12499 = document.createElement("span");if("shadow")
{dom12499.className = [cljs.core.str(dom12499.className),cljs.core.str(" "),cljs.core.str("shadow")].join('').trim();
} else
{}
return dom12499;
})());
dom12498.appendChild((function (){var dom12500 = document.createElement("span");if("before")
{dom12500.className = [cljs.core.str(dom12500.className),cljs.core.str(" "),cljs.core.str("before")].join('').trim();
} else
{}
dom12500.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"before","before",3915985649).cljs$core$IFn$_invoke$arity$1(koan)));
return dom12500;
})());
dom12498.appendChild((function (){var dom12501 = document.createElement("input");if("user-input")
{dom12501.className = [cljs.core.str(dom12501.className),cljs.core.str(" "),cljs.core.str("user-input")].join('').trim();
} else
{}
if("code")
{dom12501.setAttribute("name","code");
} else
{}
return dom12501;
})());
dom12498.appendChild((function (){var dom12502 = document.createElement("span");if("after")
{dom12502.className = [cljs.core.str(dom12502.className),cljs.core.str(" "),cljs.core.str("after")].join('').trim();
} else
{}
dom12502.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"after","after",1106639182).cljs$core$IFn$_invoke$arity$1(koan)));
return dom12502;
})());
return dom12498;
})());
return dom12496;
});
koans.core.error_message = (function error_message(){var dom12504 = document.createElement("div");if("error")
{dom12504.className = [cljs.core.str(dom12504.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();
} else
{}
dom12504.appendChild(document.createTextNode("You have not yet attained enlightenment."));
return dom12504;
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
dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"keypress","keypress",1530666166),(function (e){if(cljs.core._EQ_.call(null,e.charCode,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
return dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"input","input",1114262332),(function (e){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_12516){var state_val_12517 = (state_12516[1]);if((state_val_12517 === 2))
{var inst_12514 = (state_12516[2]);var state_12516__$1 = state_12516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12516__$1,inst_12514);
} else
{if((state_val_12517 === 1))
{var state_12516__$1 = state_12516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12516__$1,2,koans.core.resize_chan,e);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_12519 = (new Array(5));(statearr_12519[0] = state_machine__5331__auto__);
(statearr_12519[1] = 1);
return statearr_12519;
});
var state_machine__5331__auto____1 = (function (state_12516){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_12516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_12516){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_12516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_12520 = f__5381__auto__.call(null);(statearr_12520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_12520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
return c__5380__auto__;
}));
})());
}),koans.core.fadeout_time);
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
var c__5380__auto___12545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_12533){var state_val_12534 = (state_12533[1]);if((state_val_12534 === 7))
{var inst_12524 = (state_12533[2]);var inst_12525 = koans.core.resize_input.call(null);var state_12533__$1 = (function (){var statearr_12535 = state_12533;(statearr_12535[5] = inst_12524);
(statearr_12535[6] = inst_12525);
return statearr_12535;
})();var statearr_12536_12546 = state_12533__$1;(statearr_12536_12546[2] = null);
(statearr_12536_12546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 6))
{var inst_12529 = (state_12533[2]);var state_12533__$1 = state_12533;var statearr_12537_12547 = state_12533__$1;(statearr_12537_12547[2] = inst_12529);
(statearr_12537_12547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 5))
{var state_12533__$1 = state_12533;var statearr_12538_12548 = state_12533__$1;(statearr_12538_12548[2] = null);
(statearr_12538_12548[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 4))
{var state_12533__$1 = state_12533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12533__$1,7,koans.core.resize_chan);
} else
{if((state_val_12534 === 3))
{var inst_12531 = (state_12533[2]);var state_12533__$1 = state_12533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12533__$1,inst_12531);
} else
{if((state_val_12534 === 2))
{var state_12533__$1 = state_12533;if(true)
{var statearr_12539_12549 = state_12533__$1;(statearr_12539_12549[1] = 4);
} else
{var statearr_12540_12550 = state_12533__$1;(statearr_12540_12550[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12534 === 1))
{var state_12533__$1 = state_12533;var statearr_12541_12551 = state_12533__$1;(statearr_12541_12551[2] = null);
(statearr_12541_12551[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_12543 = (new Array(7));(statearr_12543[0] = state_machine__5331__auto__);
(statearr_12543[1] = 1);
return statearr_12543;
});
var state_machine__5331__auto____1 = (function (state_12533){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_12533);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_12533){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_12533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_12544 = f__5381__auto__.call(null);(statearr_12544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___12545);
return statearr_12544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
window.onload = (function (){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,location.hash)))
{return location.hash = "equality/1";
} else
{return koans.core.render_koan.call(null,koans.core.current_koan.call(null));
}
});
window.onhashchange = (function (){return koans.core.render_koan.call(null,koans.core.current_koan.call(null));
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
{if(cljs.core._EQ_.call(null,text,"false"))
{return koans.core.show_error_message.call(null);
} else
{return null;
}
}
});
koans.repl.listen_for_output.call(null,koans.core.evaluate_response);
