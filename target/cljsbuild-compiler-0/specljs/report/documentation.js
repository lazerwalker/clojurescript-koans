// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.report.documentation');
goog.require('cljs.core');
goog.require('specljs.report.progress');
goog.require('specljs.config');
goog.require('specljs.platform');
goog.require('specljs.reporting');
goog.require('specljs.results');
goog.require('specljs.results');
goog.require('specljs.reporting');
goog.require('specljs.report.progress');
goog.require('specljs.platform');
goog.require('specljs.config');
specljs.report.documentation.level_of = (function level_of(component){var component__$1 = cljs.core.deref.call(null,component.parent);var level = 0;while(true){
if(cljs.core.truth_(component__$1))
{{
var G__17606 = cljs.core.deref.call(null,component__$1.parent);
var G__17607 = (level + 1);
component__$1 = G__17606;
level = G__17607;
continue;
}
} else
{return level;
}
break;
}
});

/**
* @constructor
*/
specljs.report.documentation.DocumentationReporter = (function (){
})
specljs.report.documentation.DocumentationReporter.cljs$lang$type = true;
specljs.report.documentation.DocumentationReporter.cljs$lang$ctorStr = "specljs.report.documentation/DocumentationReporter";
specljs.report.documentation.DocumentationReporter.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.report.documentation/DocumentationReporter");
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$ = true;
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_message$arity$2 = (function (this$,message){var self__ = this;
var this$__$1 = this;cljs.core.println.call(null,message);
return cljs.core.flush.call(null);
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_description$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;var level = specljs.report.documentation.level_of.call(null,description);if((level === 0))
{cljs.core.println.call(null);
} else
{}
cljs.core.println.call(null,[cljs.core.str(specljs.reporting.indent.call(null,level,description.name))].join(''));
return cljs.core.flush.call(null);
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_pass$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;var characteristic = result.characteristic;var level = specljs.report.documentation.level_of.call(null,characteristic);cljs.core.println.call(null,specljs.reporting.green.call(null,specljs.reporting.indent.call(null,(level - 1),"- ",characteristic.name)));
return cljs.core.flush.call(null);
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_pending$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;var characteristic = result.characteristic;var level = specljs.report.documentation.level_of.call(null,characteristic);cljs.core.println.call(null,specljs.reporting.yellow.call(null,specljs.reporting.indent.call(null,(level - 1),"- ",characteristic.name," (PENDING: ",specljs.platform.error_message.call(null,result.exception),")")));
return cljs.core.flush.call(null);
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_fail$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;var characteristic = result.characteristic;var level = specljs.report.documentation.level_of.call(null,characteristic);cljs.core.println.call(null,specljs.reporting.red.call(null,specljs.reporting.indent.call(null,(level - 1),"- ",characteristic.name," (FAILED)")));
return cljs.core.flush.call(null);
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_error$arity$2 = (function (this$,result){var self__ = this;
var this$__$1 = this;return cljs.core.println.call(null,specljs.reporting.red.call(null,result.exception.toString()));
});
specljs.report.documentation.DocumentationReporter.prototype.specljs$reporting$Reporter$report_runs$arity$2 = (function (this$,results){var self__ = this;
var this$__$1 = this;return specljs.report.progress.print_summary.call(null,results);
});
specljs.report.documentation.__GT_DocumentationReporter = (function __GT_DocumentationReporter(){return (new specljs.report.documentation.DocumentationReporter());
});
specljs.report.documentation.new_documentation_reporter = (function new_documentation_reporter(){return (new specljs.report.documentation.DocumentationReporter());
});
