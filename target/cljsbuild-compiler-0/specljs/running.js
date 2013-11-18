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
specljs.running.eval_components = (function eval_components(components){var seq__17822 = cljs.core.seq.call(null,components);var chunk__17823 = null;var count__17824 = 0;var i__17825 = 0;while(true){
if((i__17825 < count__17824))
{var component = cljs.core._nth.call(null,chunk__17823,i__17825);component.body.call(null);
{
var G__17826 = seq__17822;
var G__17827 = chunk__17823;
var G__17828 = count__17824;
var G__17829 = (i__17825 + 1);
seq__17822 = G__17826;
chunk__17823 = G__17827;
count__17824 = G__17828;
i__17825 = G__17829;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17822);if(temp__4092__auto__)
{var seq__17822__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17822__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17822__$1);{
var G__17830 = cljs.core.chunk_rest.call(null,seq__17822__$1);
var G__17831 = c__3844__auto__;
var G__17832 = cljs.core.count.call(null,c__3844__auto__);
var G__17833 = 0;
seq__17822 = G__17830;
chunk__17823 = G__17831;
count__17824 = G__17832;
i__17825 = G__17833;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17822__$1);component.body.call(null);
{
var G__17834 = cljs.core.next.call(null,seq__17822__$1);
var G__17835 = null;
var G__17836 = 0;
var G__17837 = 0;
seq__17822 = G__17834;
chunk__17823 = G__17835;
count__17824 = G__17836;
i__17825 = G__17837;
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
specljs.running.reset_withs = (function reset_withs(withs){var seq__17842 = cljs.core.seq.call(null,withs);var chunk__17843 = null;var count__17844 = 0;var i__17845 = 0;while(true){
if((i__17845 < count__17844))
{var with$ = cljs.core._nth.call(null,chunk__17843,i__17845);specljs.components.reset_with.call(null,with$);
{
var G__17846 = seq__17842;
var G__17847 = chunk__17843;
var G__17848 = count__17844;
var G__17849 = (i__17845 + 1);
seq__17842 = G__17846;
chunk__17843 = G__17847;
count__17844 = G__17848;
i__17845 = G__17849;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17842);if(temp__4092__auto__)
{var seq__17842__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17842__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17842__$1);{
var G__17850 = cljs.core.chunk_rest.call(null,seq__17842__$1);
var G__17851 = c__3844__auto__;
var G__17852 = cljs.core.count.call(null,c__3844__auto__);
var G__17853 = 0;
seq__17842 = G__17850;
chunk__17843 = G__17851;
count__17844 = G__17852;
i__17845 = G__17853;
continue;
}
} else
{var with$ = cljs.core.first.call(null,seq__17842__$1);specljs.components.reset_with.call(null,with$);
{
var G__17854 = cljs.core.next.call(null,seq__17842__$1);
var G__17855 = null;
var G__17856 = 0;
var G__17857 = 0;
seq__17842 = G__17854;
chunk__17843 = G__17855;
count__17844 = G__17856;
i__17845 = G__17857;
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
var G__17858 = cljs.core.deref.call(null,description__$1.parent);
var G__17859 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__17858;
components = G__17859;
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
return (function (p1__17860_SHARP_){return cljs.core.deref.call(null,p1__17860_SHARP_.befores);
});})(description))
,description);var afters = specljs.running.collect_components.call(null,((function (description,befores){
return (function (p1__17861_SHARP_){return cljs.core.deref.call(null,p1__17861_SHARP_.afters);
});})(description,befores))
,description);var core_body = characteristic.body;var before_and_after_body = ((function (description,befores,afters,core_body){
return (function (){return specljs.running.eval_characteristic.call(null,befores,core_body,afters);
});})(description,befores,afters,core_body))
;var arounds = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body){
return (function (p1__17862_SHARP_){return cljs.core.deref.call(null,p1__17862_SHARP_.arounds);
});})(description,befores,afters,core_body,before_and_after_body))
,description);var full_body = specljs.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds){
return (function (p1__17863_SHARP_){return p1__17863_SHARP_.body;
});})(description,befores,afters,core_body,before_and_after_body,arounds))
,arounds));var withs = specljs.running.collect_components.call(null,((function (description,befores,afters,core_body,before_and_after_body,arounds,full_body){
return (function (p1__17864_SHARP_){return cljs.core.deref.call(null,p1__17864_SHARP_.withs);
});})(description,befores,afters,core_body,before_and_after_body,arounds,full_body))
,description);var start_time = specljs.platform.current_time.call(null);try{full_body.call(null);
return specljs.running.report_result.call(null,specljs.results.pass_result,characteristic,start_time,reporters,null);
}catch (e17866){if((e17866 instanceof Object))
{var e = e17866;if(cljs.core.truth_(specljs.platform.pending_QMARK_.call(null,e)))
{return specljs.running.report_result.call(null,specljs.results.pending_result,characteristic,start_time,reporters,e);
} else
{return specljs.running.report_result.call(null,specljs.results.fail_result,characteristic,start_time,reporters,e);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17866;
} else
{return null;
}
}
}finally {specljs.running.reset_withs.call(null,withs);
}});
specljs.running.do_characteristics = (function do_characteristics(characteristics,reporters){return cljs.core.doall.call(null,(function (){var iter__3813__auto__ = (function iter__17871(s__17872){return (new cljs.core.LazySeq(null,(function (){var s__17872__$1 = s__17872;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17872__$1);if(temp__4092__auto__)
{var s__17872__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17872__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__17872__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__17874 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__17873 = 0;while(true){
if((i__17873 < size__3812__auto__))
{var characteristic = cljs.core._nth.call(null,c__3811__auto__,i__17873);cljs.core.chunk_append.call(null,b__17874,specljs.running.do_characteristic.call(null,characteristic,reporters));
{
var G__17875 = (i__17873 + 1);
i__17873 = G__17875;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17874),iter__17871.call(null,cljs.core.chunk_rest.call(null,s__17872__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17874),null);
}
} else
{var characteristic = cljs.core.first.call(null,s__17872__$2);return cljs.core.cons.call(null,specljs.running.do_characteristic.call(null,characteristic,reporters),iter__17871.call(null,cljs.core.rest.call(null,s__17872__$2)));
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
var G__17876 = cljs.core.concat.call(null,results__$1,specljs.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__17877 = cljs.core.rest.call(null,contexts);
results__$1 = G__17876;
contexts = G__17877;
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
return (function (p1__17878_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__17878_SHARP_.name))].join('');
});})(withs,ns))
,withs);var unique_names = cljs.core.map.call(null,((function (withs,ns,var_names){
return (function (p1__17879_SHARP_){return [cljs.core.str(ns),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,p1__17879_SHARP_.unique_name))].join('');
});})(withs,ns,var_names))
,withs);var seq__17892_17904 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,var_names,unique_names)));var chunk__17893_17905 = null;var count__17894_17906 = 0;var i__17895_17907 = 0;while(true){
if((i__17895_17907 < count__17894_17906))
{var vec__17896_17908 = cljs.core._nth.call(null,chunk__17893_17905,i__17895_17907);var n_17909 = cljs.core.nth.call(null,vec__17896_17908,0,null);var un_17910 = cljs.core.nth.call(null,vec__17896_17908,1,null);var code_17911 = [cljs.core.str(n_17909),cljs.core.str(" = "),cljs.core.str(un_17910),cljs.core.str(";")].join('');eval(code_17911);
{
var G__17912 = seq__17892_17904;
var G__17913 = chunk__17893_17905;
var G__17914 = count__17894_17906;
var G__17915 = (i__17895_17907 + 1);
seq__17892_17904 = G__17912;
chunk__17893_17905 = G__17913;
count__17894_17906 = G__17914;
i__17895_17907 = G__17915;
continue;
}
} else
{var temp__4092__auto___17916 = cljs.core.seq.call(null,seq__17892_17904);if(temp__4092__auto___17916)
{var seq__17892_17917__$1 = temp__4092__auto___17916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17892_17917__$1))
{var c__3844__auto___17918 = cljs.core.chunk_first.call(null,seq__17892_17917__$1);{
var G__17919 = cljs.core.chunk_rest.call(null,seq__17892_17917__$1);
var G__17920 = c__3844__auto___17918;
var G__17921 = cljs.core.count.call(null,c__3844__auto___17918);
var G__17922 = 0;
seq__17892_17904 = G__17919;
chunk__17893_17905 = G__17920;
count__17894_17906 = G__17921;
i__17895_17907 = G__17922;
continue;
}
} else
{var vec__17897_17923 = cljs.core.first.call(null,seq__17892_17917__$1);var n_17924 = cljs.core.nth.call(null,vec__17897_17923,0,null);var un_17925 = cljs.core.nth.call(null,vec__17897_17923,1,null);var code_17926 = [cljs.core.str(n_17924),cljs.core.str(" = "),cljs.core.str(un_17925),cljs.core.str(";")].join('');eval(code_17926);
{
var G__17927 = cljs.core.next.call(null,seq__17892_17917__$1);
var G__17928 = null;
var G__17929 = 0;
var G__17930 = 0;
seq__17892_17904 = G__17927;
chunk__17893_17905 = G__17928;
count__17894_17906 = G__17929;
i__17895_17907 = G__17930;
continue;
}
}
} else
{}
}
break;
}
try{return body.call(null);
}finally {var seq__17898_17931 = cljs.core.seq.call(null,var_names);var chunk__17899_17932 = null;var count__17900_17933 = 0;var i__17901_17934 = 0;while(true){
if((i__17901_17934 < count__17900_17933))
{var vec__17902_17935 = cljs.core._nth.call(null,chunk__17899_17932,i__17901_17934);var n_17936 = cljs.core.nth.call(null,vec__17902_17935,0,null);var code_17937 = [cljs.core.str(n_17936),cljs.core.str(" = null;")].join('');eval(code_17937);
{
var G__17938 = seq__17898_17931;
var G__17939 = chunk__17899_17932;
var G__17940 = count__17900_17933;
var G__17941 = (i__17901_17934 + 1);
seq__17898_17931 = G__17938;
chunk__17899_17932 = G__17939;
count__17900_17933 = G__17940;
i__17901_17934 = G__17941;
continue;
}
} else
{var temp__4092__auto___17942 = cljs.core.seq.call(null,seq__17898_17931);if(temp__4092__auto___17942)
{var seq__17898_17943__$1 = temp__4092__auto___17942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17898_17943__$1))
{var c__3844__auto___17944 = cljs.core.chunk_first.call(null,seq__17898_17943__$1);{
var G__17945 = cljs.core.chunk_rest.call(null,seq__17898_17943__$1);
var G__17946 = c__3844__auto___17944;
var G__17947 = cljs.core.count.call(null,c__3844__auto___17944);
var G__17948 = 0;
seq__17898_17931 = G__17945;
chunk__17899_17932 = G__17946;
count__17900_17933 = G__17947;
i__17901_17934 = G__17948;
continue;
}
} else
{var vec__17903_17949 = cljs.core.first.call(null,seq__17898_17943__$1);var n_17950 = cljs.core.nth.call(null,vec__17903_17949,0,null);var code_17951 = [cljs.core.str(n_17950),cljs.core.str(" = null;")].join('');eval(code_17951);
{
var G__17952 = cljs.core.next.call(null,seq__17898_17943__$1);
var G__17953 = null;
var G__17954 = 0;
var G__17955 = 0;
seq__17898_17931 = G__17952;
chunk__17899_17932 = G__17953;
count__17900_17933 = G__17954;
i__17901_17934 = G__17955;
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
