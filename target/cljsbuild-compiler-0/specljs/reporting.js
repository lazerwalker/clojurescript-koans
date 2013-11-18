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
specljs.reporting.tally_time = (function tally_time(results){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__17956_SHARP_){return p1__17956_SHARP_.seconds;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PassResult,(function (result,reporters){var seq__17957 = cljs.core.seq.call(null,reporters);var chunk__17958 = null;var count__17959 = 0;var i__17960 = 0;while(true){
if((i__17960 < count__17959))
{var reporter = cljs.core._nth.call(null,chunk__17958,i__17960);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__17961 = seq__17957;
var G__17962 = chunk__17958;
var G__17963 = count__17959;
var G__17964 = (i__17960 + 1);
seq__17957 = G__17961;
chunk__17958 = G__17962;
count__17959 = G__17963;
i__17960 = G__17964;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17957);if(temp__4092__auto__)
{var seq__17957__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17957__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17957__$1);{
var G__17965 = cljs.core.chunk_rest.call(null,seq__17957__$1);
var G__17966 = c__3844__auto__;
var G__17967 = cljs.core.count.call(null,c__3844__auto__);
var G__17968 = 0;
seq__17957 = G__17965;
chunk__17958 = G__17966;
count__17959 = G__17967;
i__17960 = G__17968;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17957__$1);specljs.reporting.report_pass.call(null,reporter,result);
{
var G__17969 = cljs.core.next.call(null,seq__17957__$1);
var G__17970 = null;
var G__17971 = 0;
var G__17972 = 0;
seq__17957 = G__17969;
chunk__17958 = G__17970;
count__17959 = G__17971;
i__17960 = G__17972;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.FailResult,(function (result,reporters){var seq__17973 = cljs.core.seq.call(null,reporters);var chunk__17974 = null;var count__17975 = 0;var i__17976 = 0;while(true){
if((i__17976 < count__17975))
{var reporter = cljs.core._nth.call(null,chunk__17974,i__17976);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__17977 = seq__17973;
var G__17978 = chunk__17974;
var G__17979 = count__17975;
var G__17980 = (i__17976 + 1);
seq__17973 = G__17977;
chunk__17974 = G__17978;
count__17975 = G__17979;
i__17976 = G__17980;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17973);if(temp__4092__auto__)
{var seq__17973__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17973__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17973__$1);{
var G__17981 = cljs.core.chunk_rest.call(null,seq__17973__$1);
var G__17982 = c__3844__auto__;
var G__17983 = cljs.core.count.call(null,c__3844__auto__);
var G__17984 = 0;
seq__17973 = G__17981;
chunk__17974 = G__17982;
count__17975 = G__17983;
i__17976 = G__17984;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17973__$1);specljs.reporting.report_fail.call(null,reporter,result);
{
var G__17985 = cljs.core.next.call(null,seq__17973__$1);
var G__17986 = null;
var G__17987 = 0;
var G__17988 = 0;
seq__17973 = G__17985;
chunk__17974 = G__17986;
count__17975 = G__17987;
i__17976 = G__17988;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.PendingResult,(function (result,reporters){var seq__17989 = cljs.core.seq.call(null,reporters);var chunk__17990 = null;var count__17991 = 0;var i__17992 = 0;while(true){
if((i__17992 < count__17991))
{var reporter = cljs.core._nth.call(null,chunk__17990,i__17992);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__17993 = seq__17989;
var G__17994 = chunk__17990;
var G__17995 = count__17991;
var G__17996 = (i__17992 + 1);
seq__17989 = G__17993;
chunk__17990 = G__17994;
count__17991 = G__17995;
i__17992 = G__17996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17989);if(temp__4092__auto__)
{var seq__17989__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17989__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17989__$1);{
var G__17997 = cljs.core.chunk_rest.call(null,seq__17989__$1);
var G__17998 = c__3844__auto__;
var G__17999 = cljs.core.count.call(null,c__3844__auto__);
var G__18000 = 0;
seq__17989 = G__17997;
chunk__17990 = G__17998;
count__17991 = G__17999;
i__17992 = G__18000;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__17989__$1);specljs.reporting.report_pending.call(null,reporter,result);
{
var G__18001 = cljs.core.next.call(null,seq__17989__$1);
var G__18002 = null;
var G__18003 = 0;
var G__18004 = 0;
seq__17989 = G__18001;
chunk__17990 = G__18002;
count__17991 = G__18003;
i__17992 = G__18004;
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
cljs.core._add_method.call(null,specljs.reporting.report_run,specljs.results.ErrorResult,(function (result,reporters){var seq__18005 = cljs.core.seq.call(null,reporters);var chunk__18006 = null;var count__18007 = 0;var i__18008 = 0;while(true){
if((i__18008 < count__18007))
{var reporter = cljs.core._nth.call(null,chunk__18006,i__18008);specljs.reporting.report_error.call(null,reporter,result);
{
var G__18009 = seq__18005;
var G__18010 = chunk__18006;
var G__18011 = count__18007;
var G__18012 = (i__18008 + 1);
seq__18005 = G__18009;
chunk__18006 = G__18010;
count__18007 = G__18011;
i__18008 = G__18012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18005);if(temp__4092__auto__)
{var seq__18005__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18005__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__18005__$1);{
var G__18013 = cljs.core.chunk_rest.call(null,seq__18005__$1);
var G__18014 = c__3844__auto__;
var G__18015 = cljs.core.count.call(null,c__3844__auto__);
var G__18016 = 0;
seq__18005 = G__18013;
chunk__18006 = G__18014;
count__18007 = G__18015;
i__18008 = G__18016;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18005__$1);specljs.reporting.report_error.call(null,reporter,result);
{
var G__18017 = cljs.core.next.call(null,seq__18005__$1);
var G__18018 = null;
var G__18019 = 0;
var G__18020 = 0;
seq__18005 = G__18017;
chunk__18006 = G__18018;
count__18007 = G__18019;
i__18008 = G__18020;
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
specljs.reporting.print_stack_levels = (function print_stack_levels(exception){var levels_18021 = specljs.platform.stack_trace.call(null,exception);var elides_18022 = 0;while(true){
if(cljs.core.seq.call(null,levels_18021))
{var level_18023 = cljs.core.first.call(null,levels_18021);if(cljs.core.truth_(specljs.platform.elide_level_QMARK_.call(null,level_18023)))
{{
var G__18024 = cljs.core.rest.call(null,levels_18021);
var G__18025 = (elides_18022 + 1);
levels_18021 = G__18024;
elides_18022 = G__18025;
continue;
}
} else
{specljs.reporting.print_elides.call(null,elides_18022);
cljs.core.println.call(null,[cljs.core.str(level_18023)].join(''));
{
var G__18026 = cljs.core.rest.call(null,levels_18021);
var G__18027 = 0;
levels_18021 = G__18026;
elides_18022 = G__18027;
continue;
}
}
} else
{specljs.reporting.print_elides.call(null,elides_18022);
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
specljs.reporting.stack_trace_str = (function stack_trace_str(exception){var sb__3941__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_18029_18030 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__3942__auto__){return sb__3941__auto__.append(x__3942__auto__);
});
if(cljs.core.truth_(specljs.config._STAR_full_stack_trace_QMARK__STAR_))
{specljs.platform.print_stack_trace.call(null,exception);
} else
{specljs.reporting.print_exception.call(null,null,exception);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18029_18030;
}return [cljs.core.str(sb__3941__auto__)].join('');
});
/**
* @param {...*} var_args
*/
specljs.reporting.prefix = (function() { 
var prefix__delegate = function (pre,args){var value = cljs.core.apply.call(null,cljs.core.str,args);var lines = clojure.string.split.call(null,value,/[\r\n]+/);var prefixed_lines = cljs.core.map.call(null,((function (value,lines){
return (function (p1__18031_SHARP_){return [cljs.core.str(pre),cljs.core.str(p1__18031_SHARP_)].join('');
});})(value,lines))
,lines);return clojure.string.join.call(null,specljs.platform.endl,prefixed_lines);
};
var prefix = function (pre,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return prefix__delegate.call(this,pre,args);};
prefix.cljs$lang$maxFixedArity = 1;
prefix.cljs$lang$applyTo = (function (arglist__18032){
var pre = cljs.core.first(arglist__18032);
var args = cljs.core.rest(arglist__18032);
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
indent.cljs$lang$applyTo = (function (arglist__18033){
var n = cljs.core.first(arglist__18033);
var args = cljs.core.rest(arglist__18033);
return indent__delegate(n,args);
});
indent.cljs$core$IFn$_invoke$arity$variadic = indent__delegate;
return indent;
})()
;
specljs.reporting.report_description_STAR_ = (function report_description_STAR_(reporters,description){var seq__18038 = cljs.core.seq.call(null,reporters);var chunk__18039 = null;var count__18040 = 0;var i__18041 = 0;while(true){
if((i__18041 < count__18040))
{var reporter = cljs.core._nth.call(null,chunk__18039,i__18041);specljs.reporting.report_description.call(null,reporter,description);
{
var G__18042 = seq__18038;
var G__18043 = chunk__18039;
var G__18044 = count__18040;
var G__18045 = (i__18041 + 1);
seq__18038 = G__18042;
chunk__18039 = G__18043;
count__18040 = G__18044;
i__18041 = G__18045;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18038);if(temp__4092__auto__)
{var seq__18038__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18038__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__18038__$1);{
var G__18046 = cljs.core.chunk_rest.call(null,seq__18038__$1);
var G__18047 = c__3844__auto__;
var G__18048 = cljs.core.count.call(null,c__3844__auto__);
var G__18049 = 0;
seq__18038 = G__18046;
chunk__18039 = G__18047;
count__18040 = G__18048;
i__18041 = G__18049;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18038__$1);specljs.reporting.report_description.call(null,reporter,description);
{
var G__18050 = cljs.core.next.call(null,seq__18038__$1);
var G__18051 = null;
var G__18052 = 0;
var G__18053 = 0;
seq__18038 = G__18050;
chunk__18039 = G__18051;
count__18040 = G__18052;
i__18041 = G__18053;
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
specljs.reporting.report_runs_STAR_ = (function report_runs_STAR_(reporters,results){var seq__18058 = cljs.core.seq.call(null,reporters);var chunk__18059 = null;var count__18060 = 0;var i__18061 = 0;while(true){
if((i__18061 < count__18060))
{var reporter = cljs.core._nth.call(null,chunk__18059,i__18061);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__18062 = seq__18058;
var G__18063 = chunk__18059;
var G__18064 = count__18060;
var G__18065 = (i__18061 + 1);
seq__18058 = G__18062;
chunk__18059 = G__18063;
count__18060 = G__18064;
i__18061 = G__18065;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18058);if(temp__4092__auto__)
{var seq__18058__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18058__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__18058__$1);{
var G__18066 = cljs.core.chunk_rest.call(null,seq__18058__$1);
var G__18067 = c__3844__auto__;
var G__18068 = cljs.core.count.call(null,c__3844__auto__);
var G__18069 = 0;
seq__18058 = G__18066;
chunk__18059 = G__18067;
count__18060 = G__18068;
i__18061 = G__18069;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18058__$1);specljs.reporting.report_runs.call(null,reporter,results);
{
var G__18070 = cljs.core.next.call(null,seq__18058__$1);
var G__18071 = null;
var G__18072 = 0;
var G__18073 = 0;
seq__18058 = G__18070;
chunk__18059 = G__18071;
count__18060 = G__18072;
i__18061 = G__18073;
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
specljs.reporting.report_message_STAR_ = (function report_message_STAR_(reporters,message){var seq__18078 = cljs.core.seq.call(null,reporters);var chunk__18079 = null;var count__18080 = 0;var i__18081 = 0;while(true){
if((i__18081 < count__18080))
{var reporter = cljs.core._nth.call(null,chunk__18079,i__18081);specljs.reporting.report_message.call(null,reporter,message);
{
var G__18082 = seq__18078;
var G__18083 = chunk__18079;
var G__18084 = count__18080;
var G__18085 = (i__18081 + 1);
seq__18078 = G__18082;
chunk__18079 = G__18083;
count__18080 = G__18084;
i__18081 = G__18085;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18078);if(temp__4092__auto__)
{var seq__18078__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18078__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__18078__$1);{
var G__18086 = cljs.core.chunk_rest.call(null,seq__18078__$1);
var G__18087 = c__3844__auto__;
var G__18088 = cljs.core.count.call(null,c__3844__auto__);
var G__18089 = 0;
seq__18078 = G__18086;
chunk__18079 = G__18087;
count__18080 = G__18088;
i__18081 = G__18089;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18078__$1);specljs.reporting.report_message.call(null,reporter,message);
{
var G__18090 = cljs.core.next.call(null,seq__18078__$1);
var G__18091 = null;
var G__18092 = 0;
var G__18093 = 0;
seq__18078 = G__18090;
chunk__18079 = G__18091;
count__18080 = G__18092;
i__18081 = G__18093;
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
specljs.reporting.report_error_STAR_ = (function report_error_STAR_(reporters,exception){var seq__18098 = cljs.core.seq.call(null,reporters);var chunk__18099 = null;var count__18100 = 0;var i__18101 = 0;while(true){
if((i__18101 < count__18100))
{var reporter = cljs.core._nth.call(null,chunk__18099,i__18101);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__18102 = seq__18098;
var G__18103 = chunk__18099;
var G__18104 = count__18100;
var G__18105 = (i__18101 + 1);
seq__18098 = G__18102;
chunk__18099 = G__18103;
count__18100 = G__18104;
i__18101 = G__18105;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18098);if(temp__4092__auto__)
{var seq__18098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18098__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__18098__$1);{
var G__18106 = cljs.core.chunk_rest.call(null,seq__18098__$1);
var G__18107 = c__3844__auto__;
var G__18108 = cljs.core.count.call(null,c__3844__auto__);
var G__18109 = 0;
seq__18098 = G__18106;
chunk__18099 = G__18107;
count__18100 = G__18108;
i__18101 = G__18109;
continue;
}
} else
{var reporter = cljs.core.first.call(null,seq__18098__$1);specljs.reporting.report_error.call(null,reporter,exception);
{
var G__18110 = cljs.core.next.call(null,seq__18098__$1);
var G__18111 = null;
var G__18112 = 0;
var G__18113 = 0;
seq__18098 = G__18110;
chunk__18099 = G__18111;
count__18100 = G__18112;
i__18101 = G__18113;
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
