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
specljs.running.eval_components = (function eval_components(components){var seq__17694 = cljs.core.seq.call(null,components);var chunk__17695 = null;var count__17696 = 0;var i__17697 = 0;while(true){
if((i__17697 < count__17696))
{var component = cljs.core._nth.call(null,chunk__17695,i__17697);component.body.call(null);
{
var G__17698 = seq__17694;
var G__17699 = chunk__17695;
var G__17700 = count__17696;
var G__17701 = (i__17697 + 1);
seq__17694 = G__17698;
chunk__17695 = G__17699;
count__17696 = G__17700;
i__17697 = G__17701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17694);if(temp__4092__auto__)
{var seq__17694__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17694__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17694__$1);{
var G__17702 = cljs.core.chunk_rest.call(null,seq__17694__$1);
var G__17703 = c__3844__auto__;
var G__17704 = cljs.core.count.call(null,c__3844__auto__);
var G__17705 = 0;
seq__17694 = G__17702;
chunk__17695 = G__17703;
count__17696 = G__17704;
i__17697 = G__17705;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17694__$1);component.body.call(null);
{
var G__17706 = cljs.core.next.call(null,seq__17694__$1);
var G__17707 = null;
var G__17708 = 0;
var G__17709 = 0;
seq__17694 = G__17706;
chunk__17695 = G__17707;
count__17696 = G__17708;
i__17697 = G__17709;
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
specljs.running.reset_withs = (function reset_withs(withs){var seq__17714 = cljs.core.seq.call(null,withs);var chunk__17715 = null;var count__17716 = 0;var i__17717 = 0;while(true){
if((i__17717 < count__17716))
{var with$ = cljs.core._nth.call(null,chunk__17715,i__17717);specljs.components.reset_with.call(null,with$);
{
var G__17718 = seq__17714;
var G__17719 = chunk__17715;
var G__17720 = count__17716;
var G__17721 = (i__17717 + 1);
seq__17714 = G__17718;
chunk__17715 = G__17719;
count__17716 = G__17720;
i__17717 = G__17721;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17714);if(temp__4092__auto__)
{var seq__17714__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17714__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17714__$1);{
var G__17722 = cljs.core.chunk_rest.call(null,seq__17714__$1);
var G__17723 = c__3844__auto__;
var G__17724 = cljs.core.count.call(null,c__3844__auto__);
var G__17725 = 0;
seq__17714 = G__17722;
chunk__17715 = G__17723;
count__17716 = G__17724;
i__17717 = G__17725;
continue;
}
} else
{var with$ = cljs.core.first.call(null,seq__17714__$1);specljs.components.reset_with.call(null,with$);
{
var G__17726 = cljs.core.next.call(null,seq__17714__$1);
var G__17727 = null;
var G__17728 = 0;
var G__17729 = 0;
seq__17714 = G__17726;
chunk__17715 = G__17727;
count__17716 = G__17728;
i__17717 = G__17729;
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
var G__17730 = cljs.core.deref.call(null,description__$1.parent);
var G__17731 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__17730;
components = G__17731;
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
return (function (p1__17732_SHARP_){return cljs.core.deref.call(null,p1__17732_SHARP_.befores);
});})(description))
,description);var afters = specljs.running.collect_components.call(null,((function (description,befores){
return (function (p1__17733_SHARP_){return cljs.core.deref.call(null,p1__17733_SHARP_.afters);
});})(description,befores))
,description);var core_body = characteristic.body;var before_and_after_body = ((function (description,befores,afters,core_body){
return (function (){return specljs.running.eval_characteristic.call(null,befores,core_body,afters);
});})(description,befores,afters,core_body))
;var arounds = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body){
return (function (p1__17734_SHARP_){return cljs.core.deref.call(null,p1__17734_SHARP_.arounds);
});})(description,befores,afters,core_body,before_and_after_body))
,description);var full_body = specljs.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds){
return (function (p1__17735_SHARP_){return p1__17735_SHARP_.body;
});})(description,befores,afters,core_body,before_and_after_body,arounds))
,arounds));var withs = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds,full_body){
return (function (p1__17736_SHARP_){return cljs.core.deref.call(null,p1__17736_SHARP_.withs);
});})(description,befores,afters,core_body,before_and_after_body,arounds,full_body))
,description);var start_time = specljs.platform.current_time.call(null);try{full_body.call(null);
return specljs.running.report_result.call(null,specljs.results.pass_result,characteristic,start_time,reporters,null);
}catch (e17738){if((e17738 instanceof Object))
{var e = e17738;if(cljs.core.truth_(specljs.platform.pending_QMARK_.call(null,e)))
{return specljs.running.report_result.call(null,specljs.results.pending_result,characteristic,start_time,reporters,e);
} else
{return specljs.running.report_result.call(null,specljs.results.fail_result,characteristic,start_time,reporters,e);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17738;
} else
{return null;
}
}
}finally {specljs.running.reset_withs.call(null,withs);
}});
specljs.running.do_characteristics = (function do_characteristics(characteristics,reporters){return cljs.core.doall.call(null,(function (){var iter__3813__auto__ = (function iter__17743(s__17744){return (new cljs.core.LazySeq(null,(function (){var s__17744__$1 = s__17744;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17744__$1);if(temp__4092__auto__)
{var s__17744__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17744__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__17744__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__17746 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__17745 = 0;while(true){
if((i__17745 < size__3812__auto__))
{var characteristic = cljs.core._nth.call(null,c__3811__auto__,i__17745);cljs.core.chunk_append.call(null,b__17746,specljs.running.do_characteristic.call(null,characteristic,reporters));
{
var G__17747 = (i__17745 + 1);
i__17745 = G__17747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17746),iter__17743.call(null,cljs.core.chunk_rest.call(null,s__17744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17746),null);
}
} else
{var characteristic = cljs.core.first.call(null,s__17744__$2);return cljs.core.cons.call(null,specljs.running.do_characteristic.call(null,characteristic,reporters),iter__17743.call(null,cljs.core.rest.call(null,s__17744__$2)));
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
var G__17748 = cljs.core.concat.call(null,results__$1,specljs.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__17749 = cljs.core.rest.call(null,contexts);
results__$1 = G__17748;
contexts = G__17749;
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
return (function (p1__17750_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__17750_SHARP_.name))].join('');
});})(withs,ns))
,withs);var unique_names = cljs.core.map.call(null,((function (withs,ns,var_names){
return (function (p1__17751_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__17751_SHARP_.unique_name))].join('');
});})(withs,ns,var_names))
,withs);var seq__17764_17776 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,var_names,unique_names)));var chunk__17765_17777 = null;var count__17766_17778 = 0;var i__17767_17779 = 0;while(true){
if((i__17767_17779 < count__17766_17778))
{var vec__17768_17780 = cljs.core._nth.call(null,chunk__17765_17777,i__17767_17779);var n_17781 = cljs.core.nth.call(null,vec__17768_17780,0,null);var un_17782 = cljs.core.nth.call(null,vec__17768_17780,1,null);var code_17783 = [cljs.core.str(n_17781),cljs.core.str(" = "),cljs.core.str(un_17782),cljs.core.str(";")].join('');eval(code_17783);
{
var G__17784 = seq__17764_17776;
var G__17785 = chunk__17765_17777;
var G__17786 = count__17766_17778;
var G__17787 = (i__17767_17779 + 1);
seq__17764_17776 = G__17784;
chunk__17765_17777 = G__17785;
count__17766_17778 = G__17786;
i__17767_17779 = G__17787;
continue;
}
} else
{var temp__4092__auto___17788 = cljs.core.seq.call(null,seq__17764_17776);if(temp__4092__auto___17788)
{var seq__17764_17789__$1 = temp__4092__auto___17788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17764_17789__$1))
{var c__3844__auto___17790 = cljs.core.chunk_first.call(null,seq__17764_17789__$1);{
var G__17791 = cljs.core.chunk_rest.call(null,seq__17764_17789__$1);
var G__17792 = c__3844__auto___17790;
var G__17793 = cljs.core.count.call(null,c__3844__auto___17790);
var G__17794 = 0;
seq__17764_17776 = G__17791;
chunk__17765_17777 = G__17792;
count__17766_17778 = G__17793;
i__17767_17779 = G__17794;
continue;
}
} else
{var vec__17769_17795 = cljs.core.first.call(null,seq__17764_17789__$1);var n_17796 = cljs.core.nth.call(null,vec__17769_17795,0,null);var un_17797 = cljs.core.nth.call(null,vec__17769_17795,1,null);var code_17798 = [cljs.core.str(n_17796),cljs.core.str(" = "),cljs.core.str(un_17797),cljs.core.str(";")].join('');eval(code_17798);
{
var G__17799 = cljs.core.next.call(null,seq__17764_17789__$1);
var G__17800 = null;
var G__17801 = 0;
var G__17802 = 0;
seq__17764_17776 = G__17799;
chunk__17765_17777 = G__17800;
count__17766_17778 = G__17801;
i__17767_17779 = G__17802;
continue;
}
}
} else
{}
}
break;
}
try{return body.call(null);
}finally {var seq__17770_17803 = cljs.core.seq.call(null,var_names);var chunk__17771_17804 = null;var count__17772_17805 = 0;var i__17773_17806 = 0;while(true){
if((i__17773_17806 < count__17772_17805))
{var vec__17774_17807 = cljs.core._nth.call(null,chunk__17771_17804,i__17773_17806);var n_17808 = cljs.core.nth.call(null,vec__17774_17807,0,null);var code_17809 = [cljs.core.str(n_17808),cljs.core.str(" = null;")].join('');eval(code_17809);
{
var G__17810 = seq__17770_17803;
var G__17811 = chunk__17771_17804;
var G__17812 = count__17772_17805;
var G__17813 = (i__17773_17806 + 1);
seq__17770_17803 = G__17810;
chunk__17771_17804 = G__17811;
count__17772_17805 = G__17812;
i__17773_17806 = G__17813;
continue;
}
} else
{var temp__4092__auto___17814 = cljs.core.seq.call(null,seq__17770_17803);if(temp__4092__auto___17814)
{var seq__17770_17815__$1 = temp__4092__auto___17814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17770_17815__$1))
{var c__3844__auto___17816 = cljs.core.chunk_first.call(null,seq__17770_17815__$1);{
var G__17817 = cljs.core.chunk_rest.call(null,seq__17770_17815__$1);
var G__17818 = c__3844__auto___17816;
var G__17819 = cljs.core.count.call(null,c__3844__auto___17816);
var G__17820 = 0;
seq__17770_17803 = G__17817;
chunk__17771_17804 = G__17818;
count__17772_17805 = G__17819;
i__17773_17806 = G__17820;
continue;
}
} else
{var vec__17775_17821 = cljs.core.first.call(null,seq__17770_17815__$1);var n_17822 = cljs.core.nth.call(null,vec__17775_17821,0,null);var code_17823 = [cljs.core.str(n_17822),cljs.core.str(" = null;")].join('');eval(code_17823);
{
var G__17824 = cljs.core.next.call(null,seq__17770_17815__$1);
var G__17825 = null;
var G__17826 = 0;
var G__17827 = 0;
seq__17770_17803 = G__17824;
chunk__17771_17804 = G__17825;
count__17772_17805 = G__17826;
i__17773_17806 = G__17827;
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
