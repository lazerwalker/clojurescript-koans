// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('specljs.results');
goog.require('specljs.config');
goog.require('specljs.platform');
goog.require('specljs.results');
goog.require('specljs.platform');
goog.require('specljs.config');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
specljs.reporting.tally_time = (function tally_time(results){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__17846_SHARP_){return p1__17846_SHARP_.seconds;
}),results));
});
specljs.reporting.Reporter = {};
specljs.reporting.report_message = (function report_message(reporter,message){if((function (){var and__3119__auto__ = reporter;if(and__3119__auto__)
{return reporter.specljs$reporting$Reporter$report_message$arity$2;
} else
{return and__3119__auto__;
}
})())
{return reporter.specljs$reporting$Reporter$report_message$arity$2(reporter,message);
} else
{var x__3723__auto__ = (((reporter == null))?null:reporter);return (function (){var or__3128__auto__ = (specljs.reporting.report_message[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_message["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
})().call(null,reporter,message);
}
});
specljs.reporting.report_description = (function report_description(this$,description){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$reporting$Reporter$report_description$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_description$arity$2(this$,description);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.reporting.report_description[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_description["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
})().call(null,this$,description);
}
});
specljs.reporting.report_pass = (function report_pass(this$,result){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$reporting$Reporter$report_pass$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_pass$arity$2(this$,result);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.reporting.report_pass[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_pass["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
})().call(null,this$,result);
}
});
specljs.reporting.report_pending = (function report_pending(this$,result){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$reporting$Reporter$report_pending$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_pending$arity$2(this$,result);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.reporting.report_pending[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_pending["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
})().call(null,this$,result);
}
});
specljs.reporting.report_fail = (function report_fail(this$,result){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$reporting$Reporter$report_fail$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_fail$arity$2(this$,result);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.reporting.report_fail[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_fail["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
})().call(null,this$,result);
}
});
specljs.reporting.report_runs = (function report_runs(this$,results){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$reporting$Reporter$report_runs$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_runs$arity$2(this$,results);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.reporting.report_runs[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_runs["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
})().call(null,this$,results);
}
});
specljs.reporting.report_error = (function report_error(this$,exception){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$reporting$Reporter$report_error$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$reporting$Reporter$report_error$arity$2(this$,exception);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.reporting.report_error[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.reporting.report_error["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
})().call(null,this$,exception);
}
});
specljs.reporting.report_run = (function (){var method_table__3901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3905__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report-run",(function (result,reporters){return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3905__auto__,method_table__3901__auto__,prefer_table__3902__auto__,method_cache__3903__auto__,cached_hierarchy__3904__auto__));
})();
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PassResult,(function (result,reporters){var seq__17847 = cljs.core.seq.call(null,reporters);var chunk__17848 = null;var count__17849 = 0;var i__17850 = 0;while(true){
if((i__17850 < count__17849))
{var reporter = cljs.core._nth.call(null,chunk__17848,i__17850);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__17851 = seq__17847;
var G__17852 = chunk__17848;
var G__17853 = count__17849;
var G__17854 = (i__17850 + 1);
seq__17847 = G__17851;
chunk__17848 = G__17852;
count__17849 = G__17853;
i__17850 = G__17854;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17847);if(temp__4092__auto__)
{var seq__17847__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17847__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17847__$1);{
var G__17855 = cljs.core.chunk_rest.call(null,seq__17847__$1);
var G__17856 = c__3844__auto__;
var G__17857 = cljs.core.count.call(null,c__3844__auto__);
var G__17858 = 0;
seq__17847 = G__17855;
chunk__17848 = G__17856;
count__17849 = G__17857;
i__17850 = G__17858;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17847__$1);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__17859 = cljs.core.next.call(null,seq__17847__$1);
var G__17860 = null;
var G__17861 = 0;
var G__17862 = 0;
seq__17847 = G__17859;
chunk__17848 = G__17860;
count__17849 = G__17861;
i__17850 = G__17862;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.FailResult,(function (result,reporters){var seq__17863 = cljs.core.seq.call(null,reporters);var chunk__17864 = null;var count__17865 = 0;var i__17866 = 0;while(true){
if((i__17866 < count__17865))
{var reporter = cljs.core._nth.call(null,chunk__17864,i__17866);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__17867 = seq__17863;
var G__17868 = chunk__17864;
var G__17869 = count__17865;
var G__17870 = (i__17866 + 1);
seq__17863 = G__17867;
chunk__17864 = G__17868;
count__17865 = G__17869;
i__17866 = G__17870;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17863);if(temp__4092__auto__)
{var seq__17863__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17863__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17863__$1);{
var G__17871 = cljs.core.chunk_rest.call(null,seq__17863__$1);
var G__17872 = c__3844__auto__;
var G__17873 = cljs.core.count.call(null,c__3844__auto__);
var G__17874 = 0;
seq__17863 = G__17871;
chunk__17864 = G__17872;
count__17865 = G__17873;
i__17866 = G__17874;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17863__$1);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__17875 = cljs.core.next.call(null,seq__17863__$1);
var G__17876 = null;
var G__17877 = 0;
var G__17878 = 0;
seq__17863 = G__17875;
chunk__17864 = G__17876;
count__17865 = G__17877;
i__17866 = G__17878;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PendingResult,(function (result,reporters){var seq__17879 = cljs.core.seq.call(null,reporters);var chunk__17880 = null;var count__17881 = 0;var i__17882 = 0;while(true){
if((i__17882 < count__17881))
{var reporter = cljs.core._nth.call(null,chunk__17880,i__17882);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__17883 = seq__17879;
var G__17884 = chunk__17880;
var G__17885 = count__17881;
var G__17886 = (i__17882 + 1);
seq__17879 = G__17883;
chunk__17880 = G__17884;
count__17881 = G__17885;
i__17882 = G__17886;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17879);if(temp__4092__auto__)
{var seq__17879__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17879__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17879__$1);{
var G__17887 = cljs.core.chunk_rest.call(null,seq__17879__$1);
var G__17888 = c__3844__auto__;
var G__17889 = cljs.core.count.call(null,c__3844__auto__);
var G__17890 = 0;
seq__17879 = G__17887;
chunk__17880 = G__17888;
count__17881 = G__17889;
i__17882 = G__17890;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17879__$1);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__17891 = cljs.core.next.call(null,seq__17879__$1);
var G__17892 = null;
var G__17893 = 0;
var G__17894 = 0;
seq__17879 = G__17891;
chunk__17880 = G__17892;
count__17881 = G__17893;
i__17882 = G__17894;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.ErrorResult,(function (result,reporters){var seq__17895 = cljs.core.seq.call(null,reporters);var chunk__17896 = null;var count__17897 = 0;var i__17898 = 0;while(true){
if((i__17898 < count__17897))
{var reporter = cljs.core._nth.call(null,chunk__17896,i__17898);specljs.reporting.report_error.call(null,reporter,result);
{
var G__17899 = seq__17895;
var G__17900 = chunk__17896;
var G__17901 = count__17897;
var G__17902 = (i__17898 + 1);
seq__17895 = G__17899;
chunk__17896 = G__17900;
count__17897 = G__17901;
i__17898 = G__17902;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17895);if(temp__4092__auto__)
{var seq__17895__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17895__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17895__$1);{
var G__17903 = cljs.core.chunk_rest.call(null,seq__17895__$1);
var G__17904 = c__3844__auto__;
var G__17905 = cljs.core.count.call(null,c__3844__auto__);
var G__17906 = 0;
seq__17895 = G__17903;
chunk__17896 = G__17904;
count__17897 = G__17905;
i__17898 = G__17906;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17895__$1);specljs.reporting.report_error.call(null,reporter,result);
{
var G__17907 = cljs.core.next.call(null,seq__17895__$1);
var G__17908 = null;
var G__17909 = 0;
var G__17910 = 0;
seq__17895 = G__17907;
chunk__17896 = G__17908;
count__17897 = G__17909;
i__17898 = G__17910;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
specljs.reporting.stylizer = (function stylizer(code){return (function (text){if(cljs.core.truth_(specljs.config._STAR_color_QMARK__STAR_))
{return [cljs.core.str("\u001B["),cljs.core.str(code),cljs.core.str("m"),cljs.core.str(text),cljs.core.str("\u001B[0m")].join('');
} else
{return text;
}
});
});
specljs.reporting.red = specljs.reporting.stylizer.call(null,"31");
specljs.reporting.green = specljs.reporting.stylizer.call(null,"32");
specljs.reporting.yellow = specljs.reporting.stylizer.call(null,"33");
specljs.reporting.grey = specljs.reporting.stylizer.call(null,"90");
specljs.reporting.print_elides = (function print_elides(n){if((n > 0))
{return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else
{return null;
}
});
specljs.reporting.print_stack_levels = (function print_stack_levels(exception){var levels_17911 = specljs.platform.stack_trace.call(null,exception);var elides_17912 = 0;while(true){
if(cljs.core.seq.call(null,levels_17911))
{var level_17913 = cljs.core.first.call(null,levels_17911);if(cljs.core.truth_(specljs.platform.elide_level_QMARK_.call(null,level_17913)))
{{
var G__17914 = cljs.core.rest.call(null,levels_17911);
var G__17915 = (elides_17912 + 1);
levels_17911 = G__17914;
elides_17912 = G__17915;
continue;
}
} else
{specljs.reporting.print_elides.call(null,elides_17912);
cljs.core.println.call(null,[cljs.core.str(level_17913)].join(''));
{
var G__17916 = cljs.core.rest.call(null,levels_17911);
var G__17917 = 0;
levels_17911 = G__17916;
elides_17912 = G__17917;
continue;
}
}
} else
{specljs.reporting.print_elides.call(null,elides_17912);
}
break;
}
var temp__4090__auto__ = specljs.platform.cause.call(null,exception);if(cljs.core.truth_(temp__4090__auto__))
{var cause = temp__4090__auto__;return specljs.reporting.print_exception.call(null,"Caused by:",cause);
} else
{return null;
}
});
specljs.reporting.print_exception = (function print_exception(prefix,exception){if(cljs.core.truth_(prefix))
{cljs.core.println.call(null,prefix,[cljs.core.str(exception)].join(''));
} else
{cljs.core.println.call(null,[cljs.core.str(exception)].join(''));
}
return specljs.reporting.print_stack_levels.call(null,exception);
});
specljs.reporting.stack_trace_str = (function stack_trace_str(exception){var sb__3941__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17919_17920 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__3942__auto__){return sb__3941__auto__.append(x__3942__auto__);
});
if(cljs.core.truth_(specljs.config._STAR_full_stack_trace_QMARK__STAR_))
{specljs.platform.print_stack_trace.call(null,exception);
} else
{specljs.reporting.print_exception.call(null,null,exception);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17919_17920;
}return [cljs.core.str(sb__3941__auto__)].join('');
});
/**
* @param {...*} var_args
*/
specljs.reporting.prefix = (function() { 
var prefix__delegate = function (pre,args){var value = cljs.core.apply.call(null,cljs.core.str,args);var lines = clojure.string.split.call(null,value,/[\r\n]+/);var prefixed_lines = cljs.core.map.call(null,((function (value,lines){
return (function (p1__17921_SHARP_){return [cljs.core.str(pre),cljs.core.str(p1__17921_SHARP_)].join('');
});})(value,lines))
,lines);return clojure.string.join.call(null,specljs.platform.endl,prefixed_lines);
};
var prefix = function (pre,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return prefix__delegate.call(this,pre,args);};
prefix.cljs$lang$maxFixedArity = 1;
prefix.cljs$lang$applyTo = (function (arglist__17922){
var pre = cljs.core.first(arglist__17922);
var args = cljs.core.rest(arglist__17922);
return prefix__delegate(pre,args);
});
prefix.cljs$core$IFn$_invoke$arity$variadic = prefix__delegate;
return prefix;
})()
;
/**
* @param {...*} var_args
*/
specljs.reporting.indent = (function() { 
var indent__delegate = function (n,args){var spaces = ((n * 2.0) | 0);var indention = cljs.core.reduce.call(null,((function (spaces){
return (function (p,_){return [cljs.core.str(" "),cljs.core.str(p)].join('');
});})(spaces))
,"",cljs.core.range.call(null,spaces));return cljs.core.apply.call(null,specljs.reporting.prefix,indention,args);
};
var indent = function (n,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return indent__delegate.call(this,n,args);};
indent.cljs$lang$maxFixedArity = 1;
indent.cljs$lang$applyTo = (function (arglist__17923){
var n = cljs.core.first(arglist__17923);
var args = cljs.core.rest(arglist__17923);
return indent__delegate(n,args);
});
indent.cljs$core$IFn$_invoke$arity$variadic = indent__delegate;
return indent;
})()
;
specljs.reporting.report_description_STAR_ = (function report_description_STAR_(reporters,description){var seq__17928 = cljs.core.seq.call(null,reporters);var chunk__17929 = null;var count__17930 = 0;var i__17931 = 0;while(true){
if((i__17931 < count__17930))
{var reporter = cljs.core._nth.call(null,chunk__17929,i__17931);specljs.reporting.report_description.call(null,reporter,description);
{
var G__17932 = seq__17928;
var G__17933 = chunk__17929;
var G__17934 = count__17930;
var G__17935 = (i__17931 + 1);
seq__17928 = G__17932;
chunk__17929 = G__17933;
count__17930 = G__17934;
i__17931 = G__17935;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17928);if(temp__4092__auto__)
{var seq__17928__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17928__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17928__$1);{
var G__17936 = cljs.core.chunk_rest.call(null,seq__17928__$1);
var G__17937 = c__3844__auto__;
var G__17938 = cljs.core.count.call(null,c__3844__auto__);
var G__17939 = 0;
seq__17928 = G__17936;
chunk__17929 = G__17937;
count__17930 = G__17938;
i__17931 = G__17939;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17928__$1);specljs.reporting.report_description.call(null,reporter,description);
{
var G__17940 = cljs.core.next.call(null,seq__17928__$1);
var G__17941 = null;
var G__17942 = 0;
var G__17943 = 0;
seq__17928 = G__17940;
chunk__17929 = G__17941;
count__17930 = G__17942;
i__17931 = G__17943;
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
specljs.reporting.report_runs_STAR_ = (function report_runs_STAR_(reporters,results){var seq__17948 = cljs.core.seq.call(null,reporters);var chunk__17949 = null;var count__17950 = 0;var i__17951 = 0;while(true){
if((i__17951 < count__17950))
{var reporter = cljs.core._nth.call(null,chunk__17949,i__17951);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__17952 = seq__17948;
var G__17953 = chunk__17949;
var G__17954 = count__17950;
var G__17955 = (i__17951 + 1);
seq__17948 = G__17952;
chunk__17949 = G__17953;
count__17950 = G__17954;
i__17951 = G__17955;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17948);if(temp__4092__auto__)
{var seq__17948__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17948__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17948__$1);{
var G__17956 = cljs.core.chunk_rest.call(null,seq__17948__$1);
var G__17957 = c__3844__auto__;
var G__17958 = cljs.core.count.call(null,c__3844__auto__);
var G__17959 = 0;
seq__17948 = G__17956;
chunk__17949 = G__17957;
count__17950 = G__17958;
i__17951 = G__17959;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17948__$1);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__17960 = cljs.core.next.call(null,seq__17948__$1);
var G__17961 = null;
var G__17962 = 0;
var G__17963 = 0;
seq__17948 = G__17960;
chunk__17949 = G__17961;
count__17950 = G__17962;
i__17951 = G__17963;
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
specljs.reporting.report_message_STAR_ = (function report_message_STAR_(reporters,message){var seq__17968 = cljs.core.seq.call(null,reporters);var chunk__17969 = null;var count__17970 = 0;var i__17971 = 0;while(true){
if((i__17971 < count__17970))
{var reporter = cljs.core._nth.call(null,chunk__17969,i__17971);specljs.reporting.report_message.call(null,reporter,message);
{
var G__17972 = seq__17968;
var G__17973 = chunk__17969;
var G__17974 = count__17970;
var G__17975 = (i__17971 + 1);
seq__17968 = G__17972;
chunk__17969 = G__17973;
count__17970 = G__17974;
i__17971 = G__17975;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17968);if(temp__4092__auto__)
{var seq__17968__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17968__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17968__$1);{
var G__17976 = cljs.core.chunk_rest.call(null,seq__17968__$1);
var G__17977 = c__3844__auto__;
var G__17978 = cljs.core.count.call(null,c__3844__auto__);
var G__17979 = 0;
seq__17968 = G__17976;
chunk__17969 = G__17977;
count__17970 = G__17978;
i__17971 = G__17979;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17968__$1);specljs.reporting.report_message.call(null,reporter,message);
{
var G__17980 = cljs.core.next.call(null,seq__17968__$1);
var G__17981 = null;
var G__17982 = 0;
var G__17983 = 0;
seq__17968 = G__17980;
chunk__17969 = G__17981;
count__17970 = G__17982;
i__17971 = G__17983;
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
specljs.reporting.report_error_STAR_ = (function report_error_STAR_(reporters,exception){var seq__17988 = cljs.core.seq.call(null,reporters);var chunk__17989 = null;var count__17990 = 0;var i__17991 = 0;while(true){
if((i__17991 < count__17990))
{var reporter = cljs.core._nth.call(null,chunk__17989,i__17991);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__17992 = seq__17988;
var G__17993 = chunk__17989;
var G__17994 = count__17990;
var G__17995 = (i__17991 + 1);
seq__17988 = G__17992;
chunk__17989 = G__17993;
count__17990 = G__17994;
i__17991 = G__17995;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17988);if(temp__4092__auto__)
{var seq__17988__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17988__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17988__$1);{
var G__17996 = cljs.core.chunk_rest.call(null,seq__17988__$1);
var G__17997 = c__3844__auto__;
var G__17998 = cljs.core.count.call(null,c__3844__auto__);
var G__17999 = 0;
seq__17988 = G__17996;
chunk__17989 = G__17997;
count__17990 = G__17998;
i__17991 = G__17999;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17988__$1);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__18000 = cljs.core.next.call(null,seq__17988__$1);
var G__18001 = null;
var G__18002 = 0;
var G__18003 = 0;
seq__17988 = G__18000;
chunk__17989 = G__18001;
count__17990 = G__18002;
i__17991 = G__18003;
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
