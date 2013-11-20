// Compiled by ClojureScript 0.0-2014
goog.provide('koans.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('koans.repl');
goog.require('jayq.util');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('koans.meditations');
goog.require('koans.meditations');
goog.require('koans.repl');
goog.require('jayq.core');
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
koans.core.fade_in_BANG_ = (function fade_in_BANG_(elem){return jayq.util.wait.call(null,0,(function (){return jayq.core.add_class.call(null,jayq.core.$.call(null,elem),"unfaded");
}));
});
koans.core.input_with_code = (function input_with_code(koan){var dom12664 = document.createElement("div");if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join('')))
{dom12664.className = [cljs.core.str(dom12664.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))].join('').trim();
} else
{}
dom12664.appendChild((function (){var dom12665 = document.createElement("div");if("description")
{dom12665.className = [cljs.core.str(dom12665.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();
} else
{}
dom12665.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koan)));
return dom12665;
})());
dom12664.appendChild((function (){var dom12666 = document.createElement("div");if("code-box")
{dom12666.className = [cljs.core.str(dom12666.className),cljs.core.str(" "),cljs.core.str("code-box")].join('').trim();
} else
{}
dom12666.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3813__auto__ = (function iter__12667(s__12668){return (new cljs.core.LazySeq(null,(function (){var s__12668__$1 = s__12668;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12668__$1);if(temp__4092__auto__)
{var s__12668__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12668__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12668__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12670 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12669 = 0;while(true){
if((i__12669 < size__3812__auto__))
{var text = cljs.core._nth.call(null,c__3811__auto__,i__12669);cljs.core.chunk_append.call(null,b__12670,((cljs.core._EQ_.call(null,text,"INPUT"))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12671 = (i__12669 + 1);
i__12669 = G__12671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12670),iter__12667.call(null,cljs.core.chunk_rest.call(null,s__12668__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12670),null);
}
} else
{var text = cljs.core.first.call(null,s__12668__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,"INPUT"))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12667.call(null,cljs.core.rest.call(null,s__12668__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892).cljs$core$IFn$_invoke$arity$1(koan));
})()));
return dom12666;
})());
return dom12664;
});
koans.core.error_message = (function error_message(){var dom12673 = document.createElement("div");if("error")
{dom12673.className = [cljs.core.str(dom12673.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();
} else
{}
dom12673.appendChild(document.createTextNode("You have not yet attained enlightenment."));
return dom12673;
});
koans.core.input_string = (function input_string(){var inputs = jayq.core.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332));var inputs_are_empty_QMARK_ = cljs.core.map.call(null,((function (inputs){
return (function (el){return clojure.string.blank_QMARK_.call(null,el.value);
});})(inputs))
,jayq.core.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332)));var is_empty_QMARK_ = cljs.core.reduce.call(null,((function (inputs,inputs_are_empty_QMARK_){
return (function (val,result){var or__3128__auto__ = val;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return result;
}
});})(inputs,inputs_are_empty_QMARK_))
,inputs_are_empty_QMARK_);if(cljs.core.truth_(is_empty_QMARK_))
{return "";
} else
{return clojure.string.join.call(null," ",cljs.core.mapv.call(null,(function (el){if(cljs.core._EQ_.call(null,"text",cljs.core.first.call(null,el).className))
{return jayq.core.text.call(null,el);
} else
{if(cljs.core._EQ_.call(null,"INPUT",cljs.core.first.call(null,el).tagName))
{return jayq.core.val.call(null,el);
} else
{return null;
}
}
}),jayq.core.$.call(null,".text, input")));
}
});
koans.core.evaluate_koan = (function evaluate_koan(){jayq.util.log.call(null,"Evaluating ",koans.core.input_string.call(null));
return koans.repl.eval.call(null,koans.core.input_string.call(null));
});
koans.core.resize_chan = cljs.core.async.chan.call(null);
koans.core.load_next_koan = (function load_next_koan(){return koans.core.update_location_hash.call(null);
});
koans.core.remove_active_koan = (function remove_active_koan(){var koan = jayq.core.$.call(null,new cljs.core.Keyword(null,".koan",".koan",1059683633));if(!(cljs.core._EQ_.call(null,0,koan.length)))
{jayq.core.remove_class.call(null,koan,"unfaded");
return jayq.util.wait.call(null,koans.core.fadeout_time,(function (){return jayq.core.remove.call(null,koan);
}));
} else
{return null;
}
});
koans.core.render_koan = (function render_koan(koan){koans.core.remove_active_koan.call(null);
var $elem = jayq.core.$.call(null,koans.core.input_with_code.call(null,koan));return jayq.util.wait.call(null,koans.core.fadeout_time,(function (){return jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),$elem).call(null,koans.core.fade_in_BANG_.call(null,$elem),cljs.core.first.call(null,jayq.core.find.call(null,$elem,new cljs.core.Keyword(null,"input","input",1114262332))).focus());
}));
});
koans.core.render_current_koan = (function render_current_koan(){if(cljs.core.truth_(koans.meditations.koan_exists_QMARK_.call(null,koans.core.current_koan_index.call(null))))
{var current_koan = koans.meditations.koan_for_index.call(null,koans.core.current_koan_index.call(null));return koans.core.render_koan.call(null,current_koan);
} else
{return koans.core.update_location_hash.call(null);
}
});
koans.core.resize_input = (function resize_input(input){koans.core.$input = jayq.core.$.call(null,input);
koans.core.remove_spaces = (function remove_spaces(text){return clojure.string.replace.call(null,text," ","_");
});
var $parent = jayq.core.parent.call(null,koans.core.$input);var $shadow = jayq.core.find.call(null,$parent,new cljs.core.Keyword(null,".shadow",".shadow",2280788544));jayq.core.text.call(null,$shadow,koans.core.remove_spaces.call(null,jayq.core.val.call(null,koans.core.$input)));
var shadow_width = jayq.core.width.call(null,$shadow);var input_width = jayq.core.width.call(null,koans.core.$input);if((shadow_width >= input_width))
{return jayq.core.width.call(null,koans.core.$input,(shadow_width + (4 * koans.core.char_width)));
} else
{if(((input_width - (4 * koans.core.char_width)) >= shadow_width))
{return jayq.core.width.call(null,koans.core.$input,(shadow_width + (4 * koans.core.char_width)));
} else
{return null;
}
}
});
var c__5377__auto___12699 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12687){var state_val_12688 = (state_12687[1]);if((state_val_12688 === 7))
{var inst_12677 = (state_12687[2]);var inst_12678 = inst_12677.target;var inst_12679 = koans.core.resize_input.call(null,inst_12678);var state_12687__$1 = (function (){var statearr_12689 = state_12687;(statearr_12689[5] = inst_12679);
return statearr_12689;
})();var statearr_12690_12700 = state_12687__$1;(statearr_12690_12700[2] = null);
(statearr_12690_12700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12688 === 6))
{var inst_12683 = (state_12687[2]);var state_12687__$1 = state_12687;var statearr_12691_12701 = state_12687__$1;(statearr_12691_12701[2] = inst_12683);
(statearr_12691_12701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12688 === 5))
{var state_12687__$1 = state_12687;var statearr_12692_12702 = state_12687__$1;(statearr_12692_12702[2] = null);
(statearr_12692_12702[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12688 === 4))
{var state_12687__$1 = state_12687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12687__$1,7,koans.core.resize_chan);
} else
{if((state_val_12688 === 3))
{var inst_12685 = (state_12687[2]);var state_12687__$1 = state_12687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else
{if((state_val_12688 === 2))
{var state_12687__$1 = state_12687;if(true)
{var statearr_12693_12703 = state_12687__$1;(statearr_12693_12703[1] = 4);
} else
{var statearr_12694_12704 = state_12687__$1;(statearr_12694_12704[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12688 === 1))
{var state_12687__$1 = state_12687;var statearr_12695_12705 = state_12687__$1;(statearr_12695_12705[2] = null);
(statearr_12695_12705[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_12697 = (new Array(6));(statearr_12697[0] = state_machine__5328__auto__);
(statearr_12697[1] = 1);
return statearr_12697;
});
var state_machine__5328__auto____1 = (function (state_12687){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12698 = f__5378__auto__.call(null);(statearr_12698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___12699);
return statearr_12698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
jayq.core.document_ready.call(null,(function (){jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,".text",".text",1059942861),(function (e){return cljs.core.first.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332))).focus();
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"input","input",1114262332),(function (e){if(cljs.core._EQ_.call(null,e.charCode,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),(function (e){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12709){var state_val_12710 = (state_12709[1]);if((state_val_12710 === 2))
{var inst_12707 = (state_12709[2]);var state_12709__$1 = state_12709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12709__$1,inst_12707);
} else
{if((state_val_12710 === 1))
{var state_12709__$1 = state_12709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12709__$1,2,koans.core.resize_chan,e);
} else
{return null;
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12712 = (new Array(5));(statearr_12712[0] = state_machine__5328__auto__);
(statearr_12712[1] = 1);
return statearr_12712;
});
var state_machine__5328__auto____1 = (function (state_12709){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12709){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12713 = f__5378__auto__.call(null);(statearr_12713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
}));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,location.hash)))
{return location.hash = "equality/1";
} else
{return koans.core.render_current_koan.call(null);
}
}));
window.onhashchange = (function (){return koans.core.render_current_koan.call(null);
});
koans.core.show_error_message = (function show_error_message(){koans.core.$code_box = jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",2901198731));
if(cljs.core.truth_(jayq.core.has_class.call(null,koans.core.$code_box,"incorrect")))
{var $error = jayq.core.$.call(null,new cljs.core.Keyword(null,".error",".error",2427630092));jayq.core.remove_class.call(null,koans.core.$code_box,"incorrect");
jayq.core.remove_class.call(null,$error,"unfaded");
return jayq.util.wait.call(null,300,(function (){return jayq.core.add_class.call(null,koans.core.$code_box,"incorrect").call(null,jayq.core.add_class.call(null,$error,"unfaded"));
}));
} else
{var $error = jayq.core.$.call(null,koans.core.error_message.call(null));jayq.core.add_class.call(null,koans.core.$code_box,"incorrect");
jayq.core.append.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".koan",".koan",1059683633)),$error);
return koans.core.fade_in_BANG_.call(null,$error);
}
});
koans.core.evaluate_response = (function evaluate_response(text){jayq.util.log.call(null,text);
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