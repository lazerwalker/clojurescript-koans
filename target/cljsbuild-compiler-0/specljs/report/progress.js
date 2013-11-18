// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.report.progress');
goog.require('cljs.core');
goog.require('specljs.platform');
goog.require('specljs.config');
goog.require('specljs.reporting');
goog.require('specljs.results');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.platform');
goog.require('specljs.config');
specljs.report.progress.full_name = (function full_name(characteristic){var context = cljs.core.deref.call(null,characteristic.parent);var name = characteristic.name;while(true){
if(cljs.core.truth_(context))
{{
var G__17546 = cljs.core.deref.call(null,context.parent);
var G__17547 = [cljs.core.str(context.name),cljs.core.str(" "),cljs.core.str(name)].join('');
context = G__17546;
name = G__17547;
continue;
}
} else
{return name;
}
break;
}
});
specljs.report.progress.print_failure = (function print_failure(id,result){var characteristic = result.characteristic;var failure = result.failure;cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,id,") ",specljs.report.progress.full_name.call(null,characteristic)));
cljs.core.println.call(null,specljs.reporting.red.call(null,specljs.reporting.indent.call(null,2.5,specljs.platform.error_message.call(null,failure))));
if(cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,failure),specljs.platform.failure))
{return cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.platform.failure_source.call(null,failure))));
} else
{return cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,failure))));
}
});
specljs.report.progress.print_failures = (function print_failures(failures){if(cljs.core.seq.call(null,failures))
{cljs.core.println.call(null);
cljs.core.println.call(null,"Failures:");
} else
{}
var n__3891__auto__ = cljs.core.count.call(null,failures);var i = 0;while(true){
if((i < n__3891__auto__))
{specljs.report.progress.print_failure.call(null,(i + 1),cljs.core.nth.call(null,failures,i));
{
var G__17548 = (i + 1);
i = G__17548;
continue;
}
} else
{return null;
}
break;
}
});
specljs.report.progress.print_pendings = (function print_pendings(pending_results){if(cljs.core.seq.call(null,pending_results))
{cljs.core.println.call(null);
cljs.core.println.call(null,"Pending:");
} else
{}
var seq__17553 = cljs.core.seq.call(null,pending_results);var chunk__17554 = null;var count__17555 = 0;var i__17556 = 0;while(true){
if((i__17556 < count__17555))
{var result = cljs.core._nth.call(null,chunk__17554,i__17556);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.yellow.call(null,[cljs.core.str("  "),cljs.core.str(specljs.report.progress.full_name.call(null,result.characteristic))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.error_message.call(null,result.exception))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.failure_source.call(null,result.exception))].join('')));
{
var G__17557 = seq__17553;
var G__17558 = chunk__17554;
var G__17559 = count__17555;
var G__17560 = (i__17556 + 1);
seq__17553 = G__17557;
chunk__17554 = G__17558;
count__17555 = G__17559;
i__17556 = G__17560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17553);if(temp__4092__auto__)
{var seq__17553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17553__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17553__$1);{
var G__17561 = cljs.core.chunk_rest.call(null,seq__17553__$1);
var G__17562 = c__3844__auto__;
var G__17563 = cljs.core.count.call(null,c__3844__auto__);
var G__17564 = 0;
seq__17553 = G__17561;
chunk__17554 = G__17562;
count__17555 = G__17563;
i__17556 = G__17564;
continue;
}
} else
{var result = cljs.core.first.call(null,seq__17553__$1);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.yellow.call(null,[cljs.core.str("  "),cljs.core.str(specljs.report.progress.full_name.call(null,result.characteristic))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.error_message.call(null,result.exception))].join('')));
cljs.core.println.call(null,specljs.reporting.grey.call(null,[cljs.core.str("    ; "),cljs.core.str(specljs.platform.failure_source.call(null,result.exception))].join('')));
{
var G__17565 = cljs.core.next.call(null,seq__17553__$1);
var G__17566 = null;
var G__17567 = 0;
var G__17568 = 0;
seq__17553 = G__17565;
chunk__17554 = G__17566;
count__17555 = G__17567;
i__17556 = G__17568;
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
specljs.report.progress.print_errors = (function print_errors(error_results){if(cljs.core.seq.call(null,error_results))
{cljs.core.println.call(null);
cljs.core.println.call(null,"Errors:");
} else
{}
var seq__17575_17581 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,1),error_results)));var chunk__17576_17582 = null;var count__17577_17583 = 0;var i__17578_17584 = 0;while(true){
if((i__17578_17584 < count__17577_17583))
{var vec__17579_17585 = cljs.core._nth.call(null,chunk__17576_17582,i__17578_17584);var number_17586 = cljs.core.nth.call(null,vec__17579_17585,0,null);var result_17587 = cljs.core.nth.call(null,vec__17579_17585,1,null);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,number_17586,") ",specljs.reporting.red.call(null,[cljs.core.str(result_17587.exception)].join(''))));
cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,result_17587.exception))));
{
var G__17588 = seq__17575_17581;
var G__17589 = chunk__17576_17582;
var G__17590 = count__17577_17583;
var G__17591 = (i__17578_17584 + 1);
seq__17575_17581 = G__17588;
chunk__17576_17582 = G__17589;
count__17577_17583 = G__17590;
i__17578_17584 = G__17591;
continue;
}
} else
{var temp__4092__auto___17592 = cljs.core.seq.call(null,seq__17575_17581);if(temp__4092__auto___17592)
{var seq__17575_17593__$1 = temp__4092__auto___17592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17575_17593__$1))
{var c__3844__auto___17594 = cljs.core.chunk_first.call(null,seq__17575_17593__$1);{
var G__17595 = cljs.core.chunk_rest.call(null,seq__17575_17593__$1);
var G__17596 = c__3844__auto___17594;
var G__17597 = cljs.core.count.call(null,c__3844__auto___17594);
var G__17598 = 0;
seq__17575_17581 = G__17595;
chunk__17576_17582 = G__17596;
count__17577_17583 = G__17597;
i__17578_17584 = G__17598;
continue;
}
} else
{var vec__17580_17599 = cljs.core.first.call(null,seq__17575_17593__$1);var number_17600 = cljs.core.nth.call(null,vec__17580_17599,0,null);var result_17601 = cljs.core.nth.call(null,vec__17580_17599,1,null);cljs.core.println.call(null);
cljs.core.println.call(null,specljs.reporting.indent.call(null,1,number_17600,") ",specljs.reporting.red.call(null,[cljs.core.str(result_17601.exception)].join(''))));
cljs.core.println.call(null,specljs.reporting.grey.call(null,specljs.reporting.indent.call(null,2.5,specljs.reporting.stack_trace_str.call(null,result_17601.exception))));
{
var G__17602 = cljs.core.next.call(null,seq__17575_17593__$1);
var G__17603 = null;
var G__17604 = 0;
var G__17605 = 0;
seq__17575_17581 = G__17602;
chunk__17576_17582 = G__17603;
count__17577_17583 = G__17604;
i__17578_17584 = G__17605;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.flush.call(null);
});
specljs.report.progress.print_duration = (function print_duration(results){cljs.core.println.call(null);
return cljs.core.println.call(null,"Finished in",specljs.platform.format_seconds.call(null,specljs.reporting.tally_time.call(null,results)),"seconds");
});
specljs.report.progress.color_fn_for = (function color_fn_for(result_map){if(cljs.core.not_EQ_.call(null,0,cljs.core.count.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$1(result_map),new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result_map)))))
{return specljs.reporting.red;
} else
{if(cljs.core.not_EQ_.call(null,0,cljs.core.count.call(null,new cljs.core.Keyword(null,"pending","pending",4626283785).cljs$core$IFn$_invoke$arity$1(result_map))))
{return specljs.reporting.yellow;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return specljs.reporting.green;
} else
{return null;
}
}
}
});
specljs.report.progress.apply_pending_tally = (function apply_pending_tally(report,tally){if((new cljs.core.Keyword(null,"pending","pending",4626283785).cljs$core$IFn$_invoke$arity$1(tally) > 0))
{return cljs.core.conj.call(null,report,[cljs.core.str(new cljs.core.Keyword(null,"pending","pending",4626283785).cljs$core$IFn$_invoke$arity$1(tally)),cljs.core.str(" pending")].join(''));
} else
{return report;
}
});
specljs.report.progress.apply_error_tally = (function apply_error_tally(report,tally){if((new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(tally) > 0))
{return cljs.core.conj.call(null,report,[cljs.core.str(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(tally)),cljs.core.str(" errors")].join(''));
} else
{return report;
}
});
specljs.report.progress.describe_counts_for = (function describe_counts_for(result_map){var tally = cljs.core.zipmap.call(null,cljs.core.keys.call(null,result_map),cljs.core.map.call(null,cljs.core.count,cljs.core.vals.call(null,result_map)));var always_on_counts = cljs.core.PersistentVector.fromArray([[cljs.core.str(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,tally))),cljs.core.str(" examples")].join(''),[cljs.core.str(new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$1(tally)),cljs.core.str(" failures")].join('')], true);return clojure.string.join.call(null,", ",specljs.report.progress.apply_error_tally.call(null,specljs.report.progress.apply_pending_tally.call(null,always_on_counts,tally),tally));
});
specljs.report.progress.print_tally = (function print_tally(result_map){var color_fn = specljs.report.progress.color_fn_for.call(null,result_map);return cljs.core.println.call(null,color_fn.call(null,specljs.report.progress.describe_counts_for.call(null,result_map)));
});
specljs.report.progress.print_summary = (function print_summary(results){var result_map = specljs.results.categorize.call(null,results);specljs.report.progress.print_failures.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$1(result_map));
specljs.report.progress.print_pendings.call(null,new cljs.core.Keyword(null,"pending","pending",4626283785).cljs$core$IFn$_invoke$arity$1(result_map));
specljs.report.progress.print_errors.call(null,new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(result_map));
specljs.report.progress.print_duration.call(null,results);
return specljs.report.progress.print_tally.call(null,result_map);
});

/**
* @constructor
*/
specljs.report.progress.ProgressReporter = (function (){
})
specljs.report.progress.ProgressReporter.cljs$lang$type = true;
specljs.report.progress.ProgressReporter.cljs$lang$ctorStr = "specljs.report.progress/ProgressReporter";
specljs.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.report.progress/ProgressReporter");
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$ = true;
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_message$arity$2 = (function (this$,message){var self__ = this;
var this$__$1 = this;cljs.core.println.call(null,message);
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_description$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_pass$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;cljs.core.print.call(null,specljs.reporting.green.call(null,"."));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_pending$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;cljs.core.print.call(null,specljs.reporting.yellow.call(null,"*"));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_fail$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;cljs.core.print.call(null,specljs.reporting.red.call(null,"F"));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_error$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;cljs.core.print.call(null,specljs.reporting.red.call(null,"E"));
return cljs.core.flush.call(null);
});
specljs.report.progress.ProgressReporter.prototype.specljs$reporting$Reporter$report_runs$arity$2 = (function (this$,results){var self__ = this;
var this$__$1 = this;cljs.core.println.call(null);
return specljs.report.progress.print_summary.call(null,results);
});
specljs.report.progress.__GT_ProgressReporter = (function __GT_ProgressReporter(){return (new specljs.report.progress.ProgressReporter());
});
specljs.report.progress.new_progress_reporter = (function new_progress_reporter(){return (new specljs.report.progress.ProgressReporter());
});
cljs.core.reset_BANG_.call(null,specljs.config.default_reporters,cljs.core.PersistentVector.fromArray([specljs.report.progress.new_progress_reporter.call(null)], true));
