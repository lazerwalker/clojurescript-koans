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
koans.core.current_koan_index = cljs.core.atom.call(null,0);
koans.core.fadeout_time = 600;
koans.core.char_width = 14;
koans.core.enter_key = 13;
koans.core.fade_in_BANG_ = (function fade_in_BANG_(elem){return setTimeout((function (){return dommy.core.add_class_BANG_.call(null,elem,"unfaded");
}),0);
});
koans.core.input_with_code = (function input_with_code(koan){var dom22693 = document.createElement("div");if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(cljs.core.deref.call(null,koans.core.current_koan_index))].join('')))
{dom22693.className = [cljs.core.str(dom22693.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(cljs.core.deref.call(null,koans.core.current_koan_index))].join(''))].join('').trim();
} else
{}
dom22693.appendChild((function (){var dom22694 = document.createElement("div");if("description")
{dom22694.className = [cljs.core.str(dom22694.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();
} else
{}
dom22694.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koan)));
return dom22694;
})());
dom22693.appendChild((function (){var dom22695 = document.createElement("div");if("code")
{dom22695.className = [cljs.core.str(dom22695.className),cljs.core.str(" "),cljs.core.str("code")].join('').trim();
} else
{}
dom22695.appendChild((function (){var dom22696 = document.createElement("span");if("shadow")
{dom22696.className = [cljs.core.str(dom22696.className),cljs.core.str(" "),cljs.core.str("shadow")].join('').trim();
} else
{}
return dom22696;
})());
dom22695.appendChild((function (){var dom22697 = document.createElement("span");if("before")
{dom22697.className = [cljs.core.str(dom22697.className),cljs.core.str(" "),cljs.core.str("before")].join('').trim();
} else
{}
dom22697.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"before","before",3915985649).cljs$core$IFn$_invoke$arity$1(koan)));
return dom22697;
})());
dom22695.appendChild((function (){var dom22698 = document.createElement("input");if("user-input")
{dom22698.className = [cljs.core.str(dom22698.className),cljs.core.str(" "),cljs.core.str("user-input")].join('').trim();
} else
{}
if("code")
{dom22698.setAttribute("name","code");
} else
{}
return dom22698;
})());
dom22695.appendChild((function (){var dom22699 = document.createElement("span");if("after")
{dom22699.className = [cljs.core.str(dom22699.className),cljs.core.str(" "),cljs.core.str("after")].join('').trim();
} else
{}
dom22699.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"after","after",1106639182).cljs$core$IFn$_invoke$arity$1(koan)));
return dom22699;
})());
return dom22695;
})());
return dom22693;
});
koans.core.error_message = (function error_message(){var dom22701 = document.createElement("div");if("error")
{dom22701.className = [cljs.core.str(dom22701.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();
} else
{}
dom22701.appendChild(document.createTextNode("You have not yet attained enlightenment."));
return dom22701;
});
koans.core.input_string = (function input_string(){return clojure.string.join.call(null," ",cljs.core.PersistentVector.fromArray([dommy.core.text.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("before"))[0])),dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[0])),dommy.core.text.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("after"))[0]))], true));
});
koans.core.evaluate_koan = (function evaluate_koan(){return koans.repl.eval.call(null,koans.core.input_string.call(null));
});
koans.core.resize_chan = cljs.core.async.chan.call(null);
koans.core.render_koan = (function render_koan(koan){var elem = koans.core.input_with_code.call(null,koan);return setTimeout((function (){return dommy.core.append_BANG_.call(null,document.body,elem).call(null,koans.core.fade_in_BANG_.call(null,elem),(function (){var input = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("user-input"))[0]);input.focus();
dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"keypress","keypress",1530666166),(function (e){if(cljs.core._EQ_.call(null,e.charCode,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
return dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"input","input",1114262332),(function (e){var c__5380__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_22713){var state_val_22714 = (state_22713[1]);if((state_val_22714 === 2))
{var inst_22711 = (state_22713[2]);var state_22713__$1 = state_22713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22713__$1,inst_22711);
} else
{if((state_val_22714 === 1))
{var state_22713__$1 = state_22713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22713__$1,2,koans.core.resize_chan,e);
} else
{return null;
}
}
});return ((function (switch__5330__auto__){
return (function() {
var state_machine__5331__auto__ = null;
var state_machine__5331__auto____0 = (function (){var statearr_22716 = (new Array(5));(statearr_22716[0] = state_machine__5331__auto__);
(statearr_22716[1] = 1);
return statearr_22716;
});
var state_machine__5331__auto____1 = (function (state_22713){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_22713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_22713){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_22713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_22717 = f__5381__auto__.call(null);(statearr_22717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto__);
return statearr_22717;
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
var c__5380__auto___22742 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5381__auto__ = (function (){var switch__5330__auto__ = (function (state_22730){var state_val_22731 = (state_22730[1]);if((state_val_22731 === 7))
{var inst_22721 = (state_22730[2]);var inst_22722 = koans.core.resize_input.call(null);var state_22730__$1 = (function (){var statearr_22732 = state_22730;(statearr_22732[5] = inst_22721);
(statearr_22732[6] = inst_22722);
return statearr_22732;
})();var statearr_22733_22743 = state_22730__$1;(statearr_22733_22743[2] = null);
(statearr_22733_22743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22731 === 6))
{var inst_22726 = (state_22730[2]);var state_22730__$1 = state_22730;var statearr_22734_22744 = state_22730__$1;(statearr_22734_22744[2] = inst_22726);
(statearr_22734_22744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22731 === 5))
{var state_22730__$1 = state_22730;var statearr_22735_22745 = state_22730__$1;(statearr_22735_22745[2] = null);
(statearr_22735_22745[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22731 === 4))
{var state_22730__$1 = state_22730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22730__$1,7,koans.core.resize_chan);
} else
{if((state_val_22731 === 3))
{var inst_22728 = (state_22730[2]);var state_22730__$1 = state_22730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22730__$1,inst_22728);
} else
{if((state_val_22731 === 2))
{var state_22730__$1 = state_22730;if(true)
{var statearr_22736_22746 = state_22730__$1;(statearr_22736_22746[1] = 4);
} else
{var statearr_22737_22747 = state_22730__$1;(statearr_22737_22747[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22731 === 1))
{var state_22730__$1 = state_22730;var statearr_22738_22748 = state_22730__$1;(statearr_22738_22748[2] = null);
(statearr_22738_22748[1] = 2);
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
var state_machine__5331__auto____0 = (function (){var statearr_22740 = (new Array(7));(statearr_22740[0] = state_machine__5331__auto__);
(statearr_22740[1] = 1);
return statearr_22740;
});
var state_machine__5331__auto____1 = (function (state_22730){while(true){
var result__5332__auto__ = switch__5330__auto__.call(null,state_22730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5332__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5332__auto__;
}
break;
}
});
state_machine__5331__auto__ = function(state_22730){
switch(arguments.length){
case 0:
return state_machine__5331__auto____0.call(this);
case 1:
return state_machine__5331__auto____1.call(this,state_22730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5331__auto____0;
state_machine__5331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5331__auto____1;
return state_machine__5331__auto__;
})()
;})(switch__5330__auto__))
})();var state__5382__auto__ = (function (){var statearr_22741 = f__5381__auto__.call(null);(statearr_22741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5380__auto___22742);
return statearr_22741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5382__auto__);
}));
koans.core.remove_active_koan = (function remove_active_koan(){var koan = (dommy.utils.__GT_Array.call(null,document.getElementsByClassName("koan"))[0]);dommy.core.remove_class_BANG_.call(null,koan,"unfaded");
return setTimeout((function (){return dommy.core.remove_BANG_.call(null,koan);
}),koans.core.fadeout_time);
});
koans.core.load_koan = (function load_koan(n){var koan = koans.meditations.nth_koan.call(null,n);return koans.core.render_koan.call(null,koan);
});
koans.core.load_next_koan = (function load_next_koan(){koans.core.remove_active_koan.call(null);
cljs.core.reset_BANG_.call(null,koans.core.current_koan_index,(cljs.core.deref.call(null,koans.core.current_koan_index) + 1));
return koans.core.load_koan.call(null,cljs.core.deref.call(null,koans.core.current_koan_index));
});
document.onready = (function (){return koans.core.load_koan.call(null,cljs.core.deref.call(null,koans.core.current_koan_index));
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
koans.core.evaluate_response = (function evaluate_response(text){if(cljs.core._EQ_.call(null,text,"true"))
{return koans.core.load_next_koan.call(null);
} else
{return koans.core.show_error_message.call(null);
}
});
koans.repl.listen_for_output.call(null,koans.core.evaluate_response);
