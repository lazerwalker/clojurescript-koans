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
var this$__$1 = this;var seq__18004_18008 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.descriptions));var chunk__18005_18009 = null;var count__18006_18010 = 0;var i__18007_18011 = 0;while(true){
if((i__18007_18011 < count__18006_18010))
{var description_18012 = cljs.core._nth.call(null,chunk__18005_18009,i__18007_18011);specljs.running.run_description.call(null,this$__$1,description_18012,reporters);
{
var G__18013 = seq__18004_18008;
var G__18014 = chunk__18005_18009;
var G__18015 = count__18006_18010;
var G__18016 = (i__18007_18011 + 1);
seq__18004_18008 = G__18013;
chunk__18005_18009 = G__18014;
count__18006_18010 = G__18015;
i__18007_18011 = G__18016;
continue;
}
} else
{var temp__4092__auto___18017 = cljs.core.seq.call(null,seq__18004_18008);if(temp__4092__auto___18017)
{var seq__18004_18018__$1 = temp__4092__auto___18017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18004_18018__$1))
{var c__3844__auto___18019 = cljs.core.chunk_first.call(null,seq__18004_18018__$1);{
var G__18020 = cljs.core.chunk_rest.call(null,seq__18004_18018__$1);
var G__18021 = c__3844__auto___18019;
var G__18022 = cljs.core.count.call(null,c__3844__auto___18019);
var G__18023 = 0;
seq__18004_18008 = G__18020;
chunk__18005_18009 = G__18021;
count__18006_18010 = G__18022;
i__18007_18011 = G__18023;
continue;
}
} else
{var description_18024 = cljs.core.first.call(null,seq__18004_18018__$1);specljs.running.run_description.call(null,this$__$1,description_18024,reporters);
{
var G__18025 = cljs.core.next.call(null,seq__18004_18018__$1);
var G__18026 = null;
var G__18027 = 0;
var G__18028 = 0;
seq__18004_18008 = G__18025;
chunk__18005_18009 = G__18026;
count__18006_18010 = G__18027;
i__18007_18011 = G__18028;
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
{var config = cljs.core.apply.call(null,cljs.core.hash_map,configurations);var config__$1 = cljs.core.merge.call(null,cljs.core.dissoc.call(null,specljs.config.default_config,new cljs.core.Keyword(null,"runner","runner",4389065378)),config);return specljs.config.with_config.call(null,config__$1,(function (){var temp__4090__auto___18029 = specljs.tags.describe_filter.call(null);if(cljs.core.truth_(temp__4090__auto___18029))
{var filter_msg_18030 = temp__4090__auto___18029;specljs.reporting.report_message_STAR_.call(null,specljs.config.active_reporters.call(null),filter_msg_18030);
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
run_specs.cljs$lang$applyTo = (function (arglist__18031){
var configurations = cljs.core.seq(arglist__18031);
return run_specs__delegate(configurations);
});
run_specs.cljs$core$IFn$_invoke$arity$variadic = run_specs__delegate;
return run_specs;
})()
;
