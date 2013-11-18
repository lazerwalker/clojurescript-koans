// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.running');
goog.require('cljs.core');
goog.require('specljs.components');
goog.require('specljs.config');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.tags');
goog.require('specljs.platform');
goog.require('specljs.tags');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.platform');
goog.require('specljs.config');
goog.require('specljs.components');
goog.require('clojure.string');
goog.require('clojure.string');
specljs.running.eval_components = (function eval_components(components){var seq__17712 = cljs.core.seq.call(null,components);var chunk__17713 = null;var count__17714 = 0;var i__17715 = 0;while(true){
if((i__17715 < count__17714))
{var component = cljs.core._nth.call(null,chunk__17713,i__17715);component.body.call(null);
{
var G__17716 = seq__17712;
var G__17717 = chunk__17713;
var G__17718 = count__17714;
var G__17719 = (i__17715 + 1);
seq__17712 = G__17716;
chunk__17713 = G__17717;
count__17714 = G__17718;
i__17715 = G__17719;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17712);if(temp__4092__auto__)
{var seq__17712__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17712__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17712__$1);{
var G__17720 = cljs.core.chunk_rest.call(null,seq__17712__$1);
var G__17721 = c__3844__auto__;
var G__17722 = cljs.core.count.call(null,c__3844__auto__);
var G__17723 = 0;
seq__17712 = G__17720;
chunk__17713 = G__17721;
count__17714 = G__17722;
i__17715 = G__17723;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17712__$1);component.body.call(null);
{
var G__17724 = cljs.core.next.call(null,seq__17712__$1);
var G__17725 = null;
var G__17726 = 0;
var G__17727 = 0;
seq__17712 = G__17724;
chunk__17713 = G__17725;
count__17714 = G__17726;
i__17715 = G__17727;
continue;
}
}
} else
{return null;
}
}
break;
}
});
specljs.running.nested_fns = (function nested_fns(base,fns){if(cljs.core.seq.call(null,fns))
{return cljs.core.partial.call(null,cljs.core.first.call(null,fns),nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else
{return base;
}
});
specljs.running.eval_characteristic = (function eval_characteristic(befores,body,afters){specljs.running.eval_components.call(null,befores);
try{return body.call(null);
}finally {specljs.running.eval_components.call(null,afters);
}});
specljs.running.reset_withs = (function reset_withs(withs){var seq__17732 = cljs.core.seq.call(null,withs);var chunk__17733 = null;var count__17734 = 0;var i__17735 = 0;while(true){
if((i__17735 < count__17734))
{var with$ = cljs.core._nth.call(null,chunk__17733,i__17735);specljs.components.reset_with.call(null,with$);
{
var G__17736 = seq__17732;
var G__17737 = chunk__17733;
var G__17738 = count__17734;
var G__17739 = (i__17735 + 1);
seq__17732 = G__17736;
chunk__17733 = G__17737;
count__17734 = G__17738;
i__17735 = G__17739;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17732);if(temp__4092__auto__)
{var seq__17732__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17732__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17732__$1);{
var G__17740 = cljs.core.chunk_rest.call(null,seq__17732__$1);
var G__17741 = c__3844__auto__;
var G__17742 = cljs.core.count.call(null,c__3844__auto__);
var G__17743 = 0;
seq__17732 = G__17740;
chunk__17733 = G__17741;
count__17734 = G__17742;
i__17735 = G__17743;
continue;
}
} else
{var with$ = cljs.core.first.call(null,seq__17732__$1);specljs.components.reset_with.call(null,with$);
{
var G__17744 = cljs.core.next.call(null,seq__17732__$1);
var G__17745 = null;
var G__17746 = 0;
var G__17747 = 0;
seq__17732 = G__17744;
chunk__17733 = G__17745;
count__17734 = G__17746;
i__17735 = G__17747;
continue;
}
}
} else
{return null;
}
}
break;
}
});
specljs.running.collect_components = (function collect_components(getter,description){var description__$1 = description;var components = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.truth_(description__$1))
{{
var G__17748 = cljs.core.deref.call(null,description__$1.parent);
var G__17749 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__17748;
components = G__17749;
continue;
}
} else
{return components;
}
break;
}
});
specljs.running.report_result = (function report_result(result_constructor,characteristic,start_time,reporters,failure){var present_args = cljs.core.filter.call(null,cljs.core.identity,cljs.core.PersistentVector.fromArray([characteristic,specljs.platform.secs_since.call(null,start_time),failure], true));var result = cljs.core.apply.call(null,result_constructor,present_args);specljs.reporting.report_run.call(null,result,reporters);
return result;
});
specljs.running.do_characteristic = (function do_characteristic(characteristic,reporters){var description = cljs.core.deref.call(null,characteristic.parent);var befores = specljs.running.collect_components.call(null,((function (description){
return (function (p1__17750_SHARP_){return cljs.core.deref.call(null,p1__17750_SHARP_.befores);
});})(description))
,description);var afters = specljs.running.collect_components.call(null,((function (description,befores){
return (function (p1__17751_SHARP_){return cljs.core.deref.call(null,p1__17751_SHARP_.afters);
});})(description,befores))
,description);var core_body = characteristic.body;var before_and_after_body = ((function (description,befores,afters,core_body){
return (function (){return specljs.running.eval_characteristic.call(null,befores,core_body,afters);
});})(description,befores,afters,core_body))
;var arounds = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body){
return (function (p1__17752_SHARP_){return cljs.core.deref.call(null,p1__17752_SHARP_.arounds);
});})(description,befores,afters,core_body,before_and_after_body))
,description);var full_body = specljs.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds){
return (function (p1__17753_SHARP_){return p1__17753_SHARP_.body;
});})(description,befores,afters,core_body,before_and_after_body,arounds))
,arounds));var withs = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds,full_body){
return (function (p1__17754_SHARP_){return cljs.core.deref.call(null,p1__17754_SHARP_.withs);
});})(description,befores,afters,core_body,before_and_after_body,arounds,full_body))
,description);var start_time = specljs.platform.current_time.call(null);try{full_body.call(null);
return specljs.running.report_result.call(null,specljs.results.pass_result,characteristic,start_time,reporters,null);
}catch (e17756){if((e17756 instanceof Object))
{var e = e17756;if(cljs.core.truth_(specljs.platform.pending_QMARK_.call(null,e)))
{return specljs.running.report_result.call(null,specljs.results.pending_result,characteristic,start_time,reporters,e);
} else
{return specljs.running.report_result.call(null,specljs.results.fail_result,characteristic,start_time,reporters,e);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17756;
} else
{return null;
}
}
}finally {specljs.running.reset_withs.call(null,withs);
}});
specljs.running.do_characteristics = (function do_characteristics(characteristics,reporters){return cljs.core.doall.call(null,(function (){var iter__3813__auto__ = (function iter__17761(s__17762){return (new cljs.core.LazySeq(null,(function (){var s__17762__$1 = s__17762;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17762__$1);if(temp__4092__auto__)
{var s__17762__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17762__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__17762__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__17764 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__17763 = 0;while(true){
if((i__17763 < size__3812__auto__))
{var characteristic = cljs.core._nth.call(null,c__3811__auto__,i__17763);cljs.core.chunk_append.call(null,b__17764,specljs.running.do_characteristic.call(null,characteristic,reporters));
{
var G__17765 = (i__17763 + 1);
i__17763 = G__17765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17764),iter__17761.call(null,cljs.core.chunk_rest.call(null,s__17762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17764),null);
}
} else
{var characteristic = cljs.core.first.call(null,s__17762__$2);return cljs.core.cons.call(null,specljs.running.do_characteristic.call(null,characteristic,reporters),iter__17761.call(null,cljs.core.rest.call(null,s__17762__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,characteristics);
})());
});
specljs.running.do_child_contexts = (function do_child_contexts(context,results,reporters){var results__$1 = results;var contexts = cljs.core.deref.call(null,context.children);while(true){
if(cljs.core.seq.call(null,contexts))
{{
var G__17766 = cljs.core.concat.call(null,results__$1,specljs.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__17767 = cljs.core.rest.call(null,contexts);
results__$1 = G__17766;
contexts = G__17767;
continue;
}
} else
{specljs.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));
return results__$1;
}
break;
}
});
specljs.running.results_for_context = (function results_for_context(context,reporters){if(cljs.core.truth_(specljs.tags.pass_tag_filter_QMARK_.call(null,specljs.tags.tags_for.call(null,context))))
{return specljs.running.do_characteristics.call(null,cljs.core.deref.call(null,context.charcteristics),reporters);
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
specljs.running.with_withs_bound = (function with_withs_bound(description,body){var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));var ns = clojure.string.replace.call(null,description.ns,"-","_");var var_names = cljs.core.map.call(null,((function (withs,ns){
return (function (p1__17768_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__17768_SHARP_.name))].join('');
});})(withs,ns))
,withs);var unique_names = cljs.core.map.call(null,((function (withs,ns,var_names){
return (function (p1__17769_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__17769_SHARP_.unique_name))].join('');
});})(withs,ns,var_names))
,withs);var seq__17782_17794 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,var_names,unique_names)));var chunk__17783_17795 = null;var count__17784_17796 = 0;var i__17785_17797 = 0;while(true){
if((i__17785_17797 < count__17784_17796))
{var vec__17786_17798 = cljs.core._nth.call(null,chunk__17783_17795,i__17785_17797);var n_17799 = cljs.core.nth.call(null,vec__17786_17798,0,null);var un_17800 = cljs.core.nth.call(null,vec__17786_17798,1,null);var code_17801 = [cljs.core.str(n_17799),cljs.core.str(" = "),cljs.core.str(un_17800),cljs.core.str(";")].join('');eval(code_17801);
{
var G__17802 = seq__17782_17794;
var G__17803 = chunk__17783_17795;
var G__17804 = count__17784_17796;
var G__17805 = (i__17785_17797 + 1);
seq__17782_17794 = G__17802;
chunk__17783_17795 = G__17803;
count__17784_17796 = G__17804;
i__17785_17797 = G__17805;
continue;
}
} else
{var temp__4092__auto___17806 = cljs.core.seq.call(null,seq__17782_17794);if(temp__4092__auto___17806)
{var seq__17782_17807__$1 = temp__4092__auto___17806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17782_17807__$1))
{var c__3844__auto___17808 = cljs.core.chunk_first.call(null,seq__17782_17807__$1);{
var G__17809 = cljs.core.chunk_rest.call(null,seq__17782_17807__$1);
var G__17810 = c__3844__auto___17808;
var G__17811 = cljs.core.count.call(null,c__3844__auto___17808);
var G__17812 = 0;
seq__17782_17794 = G__17809;
chunk__17783_17795 = G__17810;
count__17784_17796 = G__17811;
i__17785_17797 = G__17812;
continue;
}
} else
{var vec__17787_17813 = cljs.core.first.call(null,seq__17782_17807__$1);var n_17814 = cljs.core.nth.call(null,vec__17787_17813,0,null);var un_17815 = cljs.core.nth.call(null,vec__17787_17813,1,null);var code_17816 = [cljs.core.str(n_17814),cljs.core.str(" = "),cljs.core.str(un_17815),cljs.core.str(";")].join('');eval(code_17816);
{
var G__17817 = cljs.core.next.call(null,seq__17782_17807__$1);
var G__17818 = null;
var G__17819 = 0;
var G__17820 = 0;
seq__17782_17794 = G__17817;
chunk__17783_17795 = G__17818;
count__17784_17796 = G__17819;
i__17785_17797 = G__17820;
continue;
}
}
} else
{}
}
break;
}
try{return body.call(null);
}finally {var seq__17788_17821 = cljs.core.seq.call(null,var_names);var chunk__17789_17822 = null;var count__17790_17823 = 0;var i__17791_17824 = 0;while(true){
if((i__17791_17824 < count__17790_17823))
{var vec__17792_17825 = cljs.core._nth.call(null,chunk__17789_17822,i__17791_17824);var n_17826 = cljs.core.nth.call(null,vec__17792_17825,0,null);var code_17827 = [cljs.core.str(n_17826),cljs.core.str(" = null;")].join('');eval(code_17827);
{
var G__17828 = seq__17788_17821;
var G__17829 = chunk__17789_17822;
var G__17830 = count__17790_17823;
var G__17831 = (i__17791_17824 + 1);
seq__17788_17821 = G__17828;
chunk__17789_17822 = G__17829;
count__17790_17823 = G__17830;
i__17791_17824 = G__17831;
continue;
}
} else
{var temp__4092__auto___17832 = cljs.core.seq.call(null,seq__17788_17821);if(temp__4092__auto___17832)
{var seq__17788_17833__$1 = temp__4092__auto___17832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17788_17833__$1))
{var c__3844__auto___17834 = cljs.core.chunk_first.call(null,seq__17788_17833__$1);{
var G__17835 = cljs.core.chunk_rest.call(null,seq__17788_17833__$1);
var G__17836 = c__3844__auto___17834;
var G__17837 = cljs.core.count.call(null,c__3844__auto___17834);
var G__17838 = 0;
seq__17788_17821 = G__17835;
chunk__17789_17822 = G__17836;
count__17790_17823 = G__17837;
i__17791_17824 = G__17838;
continue;
}
} else
{var vec__17793_17839 = cljs.core.first.call(null,seq__17788_17833__$1);var n_17840 = cljs.core.nth.call(null,vec__17793_17839,0,null);var code_17841 = [cljs.core.str(n_17840),cljs.core.str(" = null;")].join('');eval(code_17841);
{
var G__17842 = cljs.core.next.call(null,seq__17788_17833__$1);
var G__17843 = null;
var G__17844 = 0;
var G__17845 = 0;
seq__17788_17821 = G__17842;
chunk__17789_17822 = G__17843;
count__17790_17823 = G__17844;
i__17791_17824 = G__17845;
continue;
}
}
} else
{}
}
break;
}
}});
specljs.running.do_description = (function do_description(description,reporters){var tag_sets = specljs.tags.tag_sets_for.call(null,description);if(cljs.core.truth_(cljs.core.some.call(null,specljs.tags.pass_tag_filter_QMARK_,tag_sets)))
{specljs.reporting.report_description_STAR_.call(null,reporters,description);
return specljs.running.with_withs_bound.call(null,description,(function (){specljs.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));
try{var results = specljs.running.results_for_context.call(null,description,reporters);return specljs.running.do_child_contexts.call(null,description,results,reporters);
}finally {specljs.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else
{return null;
}
});
specljs.running.process_compile_error = (function process_compile_error(runner,e){var error_result = specljs.results.error_result.call(null,e);cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);
return specljs.reporting.report_run.call(null,error_result,specljs.config.active_reporters.call(null));
});
specljs.running.Runner = {};
specljs.running.run_directories = (function run_directories(this$,directories,reporters){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$running$Runner$run_directories$arity$3;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.running.run_directories[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.running.run_directories["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
})().call(null,this$,directories,reporters);
}
});
specljs.running.submit_description = (function submit_description(this$,description){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$running$Runner$submit_description$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$running$Runner$submit_description$arity$2(this$,description);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.running.submit_description[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.running.submit_description["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
})().call(null,this$,description);
}
});
specljs.running.run_description = (function run_description(this$,description,reporters){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$running$Runner$run_description$arity$3;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$running$Runner$run_description$arity$3(this$,description,reporters);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.running.run_description[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.running.run_description["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
})().call(null,this$,description,reporters);
}
});
specljs.running.run_and_report = (function run_and_report(this$,reporters){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$running$Runner$run_and_report$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$running$Runner$run_and_report$arity$2(this$,reporters);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.running.run_and_report[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.running.run_and_report["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
})().call(null,this$,reporters);
}
});
