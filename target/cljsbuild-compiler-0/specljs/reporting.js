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
specljs.reporting.tally_time = (function tally_time(results){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__17828_SHARP_){return p1__17828_SHARP_.seconds;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PassResult,(function (result,reporters){var seq__17829 = cljs.core.seq.call(null,reporters);var chunk__17830 = null;var count__17831 = 0;var i__17832 = 0;while(true){
if((i__17832 < count__17831))
{var reporter = cljs.core._nth.call(null,chunk__17830,i__17832);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__17833 = seq__17829;
var G__17834 = chunk__17830;
var G__17835 = count__17831;
var G__17836 = (i__17832 + 1);
seq__17829 = G__17833;
chunk__17830 = G__17834;
count__17831 = G__17835;
i__17832 = G__17836;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17829);if(temp__4092__auto__)
{var seq__17829__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17829__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17829__$1);{
var G__17837 = cljs.core.chunk_rest.call(null,seq__17829__$1);
var G__17838 = c__3844__auto__;
var G__17839 = cljs.core.count.call(null,c__3844__auto__);
var G__17840 = 0;
seq__17829 = G__17837;
chunk__17830 = G__17838;
count__17831 = G__17839;
i__17832 = G__17840;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17829__$1);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__17841 = cljs.core.next.call(null,seq__17829__$1);
var G__17842 = null;
var G__17843 = 0;
var G__17844 = 0;
seq__17829 = G__17841;
chunk__17830 = G__17842;
count__17831 = G__17843;
i__17832 = G__17844;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.FailResult,(function (result,reporters){var seq__17845 = cljs.core.seq.call(null,reporters);var chunk__17846 = null;var count__17847 = 0;var i__17848 = 0;while(true){
if((i__17848 < count__17847))
{var reporter = cljs.core._nth.call(null,chunk__17846,i__17848);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__17849 = seq__17845;
var G__17850 = chunk__17846;
var G__17851 = count__17847;
var G__17852 = (i__17848 + 1);
seq__17845 = G__17849;
chunk__17846 = G__17850;
count__17847 = G__17851;
i__17848 = G__17852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17845);if(temp__4092__auto__)
{var seq__17845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17845__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17845__$1);{
var G__17853 = cljs.core.chunk_rest.call(null,seq__17845__$1);
var G__17854 = c__3844__auto__;
var G__17855 = cljs.core.count.call(null,c__3844__auto__);
var G__17856 = 0;
seq__17845 = G__17853;
chunk__17846 = G__17854;
count__17847 = G__17855;
i__17848 = G__17856;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17845__$1);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__17857 = cljs.core.next.call(null,seq__17845__$1);
var G__17858 = null;
var G__17859 = 0;
var G__17860 = 0;
seq__17845 = G__17857;
chunk__17846 = G__17858;
count__17847 = G__17859;
i__17848 = G__17860;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PendingResult,(function (result,reporters){var seq__17861 = cljs.core.seq.call(null,reporters);var chunk__17862 = null;var count__17863 = 0;var i__17864 = 0;while(true){
if((i__17864 < count__17863))
{var reporter = cljs.core._nth.call(null,chunk__17862,i__17864);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__17865 = seq__17861;
var G__17866 = chunk__17862;
var G__17867 = count__17863;
var G__17868 = (i__17864 + 1);
seq__17861 = G__17865;
chunk__17862 = G__17866;
count__17863 = G__17867;
i__17864 = G__17868;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17861);if(temp__4092__auto__)
{var seq__17861__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17861__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17861__$1);{
var G__17869 = cljs.core.chunk_rest.call(null,seq__17861__$1);
var G__17870 = c__3844__auto__;
var G__17871 = cljs.core.count.call(null,c__3844__auto__);
var G__17872 = 0;
seq__17861 = G__17869;
chunk__17862 = G__17870;
count__17863 = G__17871;
i__17864 = G__17872;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17861__$1);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__17873 = cljs.core.next.call(null,seq__17861__$1);
var G__17874 = null;
var G__17875 = 0;
var G__17876 = 0;
seq__17861 = G__17873;
chunk__17862 = G__17874;
count__17863 = G__17875;
i__17864 = G__17876;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.ErrorResult,(function (result,reporters){var seq__17877 = cljs.core.seq.call(null,reporters);var chunk__17878 = null;var count__17879 = 0;var i__17880 = 0;while(true){
if((i__17880 < count__17879))
{var reporter = cljs.core._nth.call(null,chunk__17878,i__17880);specljs.reporting.report_error.call(null,reporter,result);
{
var G__17881 = seq__17877;
var G__17882 = chunk__17878;
var G__17883 = count__17879;
var G__17884 = (i__17880 + 1);
seq__17877 = G__17881;
chunk__17878 = G__17882;
count__17879 = G__17883;
i__17880 = G__17884;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17877);if(temp__4092__auto__)
{var seq__17877__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17877__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17877__$1);{
var G__17885 = cljs.core.chunk_rest.call(null,seq__17877__$1);
var G__17886 = c__3844__auto__;
var G__17887 = cljs.core.count.call(null,c__3844__auto__);
var G__17888 = 0;
seq__17877 = G__17885;
chunk__17878 = G__17886;
count__17879 = G__17887;
i__17880 = G__17888;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17877__$1);specljs.reporting.report_error.call(null,reporter,result);
{
var G__17889 = cljs.core.next.call(null,seq__17877__$1);
var G__17890 = null;
var G__17891 = 0;
var G__17892 = 0;
seq__17877 = G__17889;
chunk__17878 = G__17890;
count__17879 = G__17891;
i__17880 = G__17892;
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
specljs.reporting.print_stack_levels = (function print_stack_levels(exception){var levels_17893 = specljs.platform.stack_trace.call(null,exception);var elides_17894 = 0;while(true){
if(cljs.core.seq.call(null,levels_17893))
{var level_17895 = cljs.core.first.call(null,levels_17893);if(cljs.core.truth_(specljs.platform.elide_level_QMARK_.call(null,level_17895)))
{{
var G__17896 = cljs.core.rest.call(null,levels_17893);
var G__17897 = (elides_17894 + 1);
levels_17893 = G__17896;
elides_17894 = G__17897;
continue;
}
} else
{specljs.reporting.print_elides.call(null,elides_17894);
cljs.core.println.call(null,[cljs.core.str(level_17895)].join(''));
{
var G__17898 = cljs.core.rest.call(null,levels_17893);
var G__17899 = 0;
levels_17893 = G__17898;
elides_17894 = G__17899;
continue;
}
}
} else
{specljs.reporting.print_elides.call(null,elides_17894);
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
specljs.reporting.stack_trace_str = (function stack_trace_str(exception){var sb__3941__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17901_17902 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__3942__auto__){return sb__3941__auto__.append(x__3942__auto__);
});
if(cljs.core.truth_(specljs.config._STAR_full_stack_trace_QMARK__STAR_))
{specljs.platform.print_stack_trace.call(null,exception);
} else
{specljs.reporting.print_exception.call(null,null,exception);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17901_17902;
}return [cljs.core.str(sb__3941__auto__)].join('');
});
/**
* @param {...*} var_args
*/
specljs.reporting.prefix = (function() { 
var prefix__delegate = function (pre,args){var value = cljs.core.apply.call(null,cljs.core.str,args);var lines = clojure.string.split.call(null,value,/[\r\n]+/);var prefixed_lines = cljs.core.map.call(null,((function (value,lines){
return (function (p1__17903_SHARP_){return [cljs.core.str(pre),cljs.core.str(p1__17903_SHARP_)].join('');
});})(value,lines))
,lines);return clojure.string.join.call(null,specljs.platform.endl,prefixed_lines);
};
var prefix = function (pre,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return prefix__delegate.call(this,pre,args);};
prefix.cljs$lang$maxFixedArity = 1;
prefix.cljs$lang$applyTo = (function (arglist__17904){
var pre = cljs.core.first(arglist__17904);
var args = cljs.core.rest(arglist__17904);
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
indent.cljs$lang$applyTo = (function (arglist__17905){
var n = cljs.core.first(arglist__17905);
var args = cljs.core.rest(arglist__17905);
return indent__delegate(n,args);
});
indent.cljs$core$IFn$_invoke$arity$variadic = indent__delegate;
return indent;
})()
;
specljs.reporting.report_description_STAR_ = (function report_description_STAR_(reporters,description){var seq__17910 = cljs.core.seq.call(null,reporters);var chunk__17911 = null;var count__17912 = 0;var i__17913 = 0;while(true){
if((i__17913 < count__17912))
{var reporter = cljs.core._nth.call(null,chunk__17911,i__17913);specljs.reporting.report_description.call(null,reporter,description);
{
var G__17914 = seq__17910;
var G__17915 = chunk__17911;
var G__17916 = count__17912;
var G__17917 = (i__17913 + 1);
seq__17910 = G__17914;
chunk__17911 = G__17915;
count__17912 = G__17916;
i__17913 = G__17917;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17910);if(temp__4092__auto__)
{var seq__17910__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17910__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17910__$1);{
var G__17918 = cljs.core.chunk_rest.call(null,seq__17910__$1);
var G__17919 = c__3844__auto__;
var G__17920 = cljs.core.count.call(null,c__3844__auto__);
var G__17921 = 0;
seq__17910 = G__17918;
chunk__17911 = G__17919;
count__17912 = G__17920;
i__17913 = G__17921;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17910__$1);specljs.reporting.report_description.call(null,reporter,description);
{
var G__17922 = cljs.core.next.call(null,seq__17910__$1);
var G__17923 = null;
var G__17924 = 0;
var G__17925 = 0;
seq__17910 = G__17922;
chunk__17911 = G__17923;
count__17912 = G__17924;
i__17913 = G__17925;
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
specljs.reporting.report_runs_STAR_ = (function report_runs_STAR_(reporters,results){var seq__17930 = cljs.core.seq.call(null,reporters);var chunk__17931 = null;var count__17932 = 0;var i__17933 = 0;while(true){
if((i__17933 < count__17932))
{var reporter = cljs.core._nth.call(null,chunk__17931,i__17933);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__17934 = seq__17930;
var G__17935 = chunk__17931;
var G__17936 = count__17932;
var G__17937 = (i__17933 + 1);
seq__17930 = G__17934;
chunk__17931 = G__17935;
count__17932 = G__17936;
i__17933 = G__17937;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17930);if(temp__4092__auto__)
{var seq__17930__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17930__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17930__$1);{
var G__17938 = cljs.core.chunk_rest.call(null,seq__17930__$1);
var G__17939 = c__3844__auto__;
var G__17940 = cljs.core.count.call(null,c__3844__auto__);
var G__17941 = 0;
seq__17930 = G__17938;
chunk__17931 = G__17939;
count__17932 = G__17940;
i__17933 = G__17941;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17930__$1);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__17942 = cljs.core.next.call(null,seq__17930__$1);
var G__17943 = null;
var G__17944 = 0;
var G__17945 = 0;
seq__17930 = G__17942;
chunk__17931 = G__17943;
count__17932 = G__17944;
i__17933 = G__17945;
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
specljs.reporting.report_message_STAR_ = (function report_message_STAR_(reporters,message){var seq__17950 = cljs.core.seq.call(null,reporters);var chunk__17951 = null;var count__17952 = 0;var i__17953 = 0;while(true){
if((i__17953 < count__17952))
{var reporter = cljs.core._nth.call(null,chunk__17951,i__17953);specljs.reporting.report_message.call(null,reporter,message);
{
var G__17954 = seq__17950;
var G__17955 = chunk__17951;
var G__17956 = count__17952;
var G__17957 = (i__17953 + 1);
seq__17950 = G__17954;
chunk__17951 = G__17955;
count__17952 = G__17956;
i__17953 = G__17957;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17950);if(temp__4092__auto__)
{var seq__17950__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17950__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17950__$1);{
var G__17958 = cljs.core.chunk_rest.call(null,seq__17950__$1);
var G__17959 = c__3844__auto__;
var G__17960 = cljs.core.count.call(null,c__3844__auto__);
var G__17961 = 0;
seq__17950 = G__17958;
chunk__17951 = G__17959;
count__17952 = G__17960;
i__17953 = G__17961;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17950__$1);specljs.reporting.report_message.call(null,reporter,message);
{
var G__17962 = cljs.core.next.call(null,seq__17950__$1);
var G__17963 = null;
var G__17964 = 0;
var G__17965 = 0;
seq__17950 = G__17962;
chunk__17951 = G__17963;
count__17952 = G__17964;
i__17953 = G__17965;
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
specljs.reporting.report_error_STAR_ = (function report_error_STAR_(reporters,exception){var seq__17970 = cljs.core.seq.call(null,reporters);var chunk__17971 = null;var count__17972 = 0;var i__17973 = 0;while(true){
if((i__17973 < count__17972))
{var reporter = cljs.core._nth.call(null,chunk__17971,i__17973);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__17974 = seq__17970;
var G__17975 = chunk__17971;
var G__17976 = count__17972;
var G__17977 = (i__17973 + 1);
seq__17970 = G__17974;
chunk__17971 = G__17975;
count__17972 = G__17976;
i__17973 = G__17977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17970);if(temp__4092__auto__)
{var seq__17970__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17970__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17970__$1);{
var G__17978 = cljs.core.chunk_rest.call(null,seq__17970__$1);
var G__17979 = c__3844__auto__;
var G__17980 = cljs.core.count.call(null,c__3844__auto__);
var G__17981 = 0;
seq__17970 = G__17978;
chunk__17971 = G__17979;
count__17972 = G__17980;
i__17973 = G__17981;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17970__$1);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__17982 = cljs.core.next.call(null,seq__17970__$1);
var G__17983 = null;
var G__17984 = 0;
var G__17985 = 0;
seq__17970 = G__17982;
chunk__17971 = G__17983;
count__17972 = G__17984;
i__17973 = G__17985;
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
