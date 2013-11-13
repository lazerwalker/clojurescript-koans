// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.report.silent');
goog.require('cljs.core');
goog.require('specljs.reporting');

/**
* @constructor
*/
specljs.report.silent.SilentReporter = (function (passes,fails,results){
this.passes = passes;
this.fails = fails;
this.results = results;
})
specljs.report.silent.SilentReporter.cljs$lang$type = true;
specljs.report.silent.SilentReporter.cljs$lang$ctorStr = "specljs.report.silent/SilentReporter";
specljs.report.silent.SilentReporter.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.report.silent/SilentReporter");
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$ = true;
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_message$arity$2 = (function (this$,message){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_description$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_pass$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_pending$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_fail$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_runs$arity$2 = (function (this$,results__$1){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.SilentReporter.prototype.specljs$reporting$Reporter$report_error$arity$2 = (function (this$,exception){var self__ = this;
var this$__$1 = this;return null;
});
specljs.report.silent.__GT_SilentReporter = (function __GT_SilentReporter(passes,fails,results){return (new specljs.report.silent.SilentReporter(passes,fails,results));
});
specljs.report.silent.new_silent_reporter = (function new_silent_reporter(){return (new specljs.report.silent.SilentReporter(cljs.core.atom.call(null,0),cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
