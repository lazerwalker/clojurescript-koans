// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.run.standard');
goog.require('cljs.core');
goog.require('specljs.tags');
goog.require('specljs.running');
goog.require('specljs.reporting');
goog.require('specljs.config');
goog.require('specljs.results');
goog.require('specljs.tags');
goog.require('specljs.running');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.report.progress');
goog.require('specljs.config');
goog.require('specljs.components');
specljs.run.standard.counter = cljs.core.atom.call(null,0);

/**
* @constructor
*/
specljs.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
})
specljs.run.standard.StandardRunner.cljs$lang$type = true;
specljs.run.standard.StandardRunner.cljs$lang$ctorStr = "specljs.run.standard/StandardRunner";
specljs.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.run.standard/StandardRunner");
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$ = true;
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){var self__ = this;
var this$__$1 = this;return alert("StandardRunner.run-directories:  I don't know how to do this.");
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$submit_description$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$run_description$arity$3 = (function (this$,description,reporters){var self__ = this;
var this$__$1 = this;var run_results = specljs.running.do_description.call(null,description,reporters);return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
});
specljs.run.standard.StandardRunner.prototype.specljs$running$Runner$run_and_report$arity$2 = (function (this$,reporters){var self__ = this;
var this$__$1 = this;var seq__17986_17990 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.descriptions));var chunk__17987_17991 = null;var count__17988_17992 = 0;var i__17989_17993 = 0;while(true){
if((i__17989_17993 < count__17988_17992))
{var description_17994 = cljs.core._nth.call(null,chunk__17987_17991,i__17989_17993);specljs.running.run_description.call(null,this$__$1,description_17994,reporters);
{
var G__17995 = seq__17986_17990;
var G__17996 = chunk__17987_17991;
var G__17997 = count__17988_17992;
var G__17998 = (i__17989_17993 + 1);
seq__17986_17990 = G__17995;
chunk__17987_17991 = G__17996;
count__17988_17992 = G__17997;
i__17989_17993 = G__17998;
continue;
}
} else
{var temp__4092__auto___17999 = cljs.core.seq.call(null,seq__17986_17990);if(temp__4092__auto___17999)
{var seq__17986_18000__$1 = temp__4092__auto___17999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17986_18000__$1))
{var c__3844__auto___18001 = cljs.core.chunk_first.call(null,seq__17986_18000__$1);{
var G__18002 = cljs.core.chunk_rest.call(null,seq__17986_18000__$1);
var G__18003 = c__3844__auto___18001;
var G__18004 = cljs.core.count.call(null,c__3844__auto___18001);
var G__18005 = 0;
seq__17986_17990 = G__18002;
chunk__17987_17991 = G__18003;
count__17988_17992 = G__18004;
i__17989_17993 = G__18005;
continue;
}
} else
{var description_18006 = cljs.core.first.call(null,seq__17986_18000__$1);specljs.running.run_description.call(null,this$__$1,description_18006,reporters);
{
var G__18007 = cljs.core.next.call(null,seq__17986_18000__$1);
var G__18008 = null;
var G__18009 = 0;
var G__18010 = 0;
seq__17986_17990 = G__18007;
chunk__17987_17991 = G__18008;
count__17988_17992 = G__18009;
i__17989_17993 = G__18010;
continue;
}
}
} else
{}
}
break;
}
return specljs.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
});
specljs.run.standard.__GT_StandardRunner = (function __GT_StandardRunner(num,descriptions,results){return (new specljs.run.standard.StandardRunner(num,descriptions,results));
});
specljs.components.Description.prototype.cljs$core$IPrintWithWriter$ = true;
specljs.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<specljs.component.Description(name: "),cljs.core.str(x__$1.name),cljs.core.str(")>")].join(''));
});
specljs.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = true;
specljs.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var x__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<specljs.run.standard.StandardRunner(num: "),cljs.core.str(x__$1.num),cljs.core.str(", descriptions: ")].join(''));
cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);
return cljs.core._write.call(null,writer,")>");
});
specljs.run.standard.new_standard_runner = (function new_standard_runner(){return (new specljs.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,specljs.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_.call(null,specljs.config.default_runner_fn,specljs.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,specljs.config.default_runner,specljs.run.standard.new_standard_runner.call(null));
specljs.run.standard.armed = false;
/**
* @param {...*} var_args
*/
specljs.run.standard.run_specs = (function() { 
var run_specs__delegate = function (configurations){if(cljs.core.truth_(specljs.run.standard.armed))
{var config = cljs.core.apply.call(null,cljs.core.hash_map,configurations);var config__$1 = cljs.core.merge.call(null,cljs.core.dissoc.call(null,specljs.config.default_config,new cljs.core.Keyword(null,"runner","runner",4389065378)),config);return specljs.config.with_config.call(null,config__$1,(function (){var temp__4090__auto___18011 = specljs.tags.describe_filter.call(null);if(cljs.core.truth_(temp__4090__auto___18011))
{var filter_msg_18012 = temp__4090__auto___18011;specljs.reporting.report_message_STAR_.call(null,specljs.config.active_reporters.call(null),filter_msg_18012);
} else
{}
specljs.running.run_and_report.call(null,specljs.config.active_runner.call(null),specljs.config.active_reporters.call(null));
return specljs.results.fail_count.call(null,cljs.core.deref.call(null,specljs.config.active_runner.call(null).results));
}));
} else
{return null;
}
};
var run_specs = function (var_args){
var configurations = null;if (arguments.length > 0) {
  configurations = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_specs__delegate.call(this,configurations);};
run_specs.cljs$lang$maxFixedArity = 0;
run_specs.cljs$lang$applyTo = (function (arglist__18013){
var configurations = cljs.core.seq(arglist__18013);
return run_specs__delegate(configurations);
});
run_specs.cljs$core$IFn$_invoke$arity$variadic = run_specs__delegate;
return run_specs;
})()
;
