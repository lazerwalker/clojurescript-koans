// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.platform');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
specljs.platform.endl = "\n";
specljs.platform.file_separator = "/";
specljs.platform.re_type = cljs.core.type.call(null,/./);
specljs.platform.re_QMARK_ = (function re_QMARK_(obj){return cljs.core._EQ_.call(null,specljs.platform.re_type,cljs.core.type.call(null,obj));
});

/**
* @constructor
*/
specljs.platform.SpecFailure = (function (message){
this.message = message;
})
specljs.platform.SpecFailure.cljs$lang$type = true;
specljs.platform.SpecFailure.cljs$lang$ctorStr = "specljs.platform/SpecFailure";
specljs.platform.SpecFailure.cljs$lang$ctorPrWriter = (function (this__3667__auto__,writer__3668__auto__,opts__3669__auto__){return cljs.core._write.call(null,writer__3668__auto__,"specljs.platform/SpecFailure");
});
specljs.platform.__GT_SpecFailure = (function __GT_SpecFailure(message){return (new specljs.platform.SpecFailure(message));
});

/**
* @constructor
*/
specljs.platform.SpecPending = (function (message){
this.message = message;
})
specljs.platform.SpecPending.cljs$lang$type = true;
specljs.platform.SpecPending.cljs$lang$ctorStr = "specljs.platform/SpecPending";
specljs.platform.SpecPending.cljs$lang$ctorPrWriter = (function (this__3667__auto__,writer__3668__auto__,opts__3669__auto__){return cljs.core._write.call(null,writer__3668__auto__,"specljs.platform/SpecPending");
});
specljs.platform.__GT_SpecPending = (function __GT_SpecPending(message){return (new specljs.platform.SpecPending(message));
});
specljs.platform.throwable = Object;
specljs.platform.exception = Error;
specljs.platform.failure = specljs.platform.SpecFailure;
specljs.platform.pending = specljs.platform.SpecPending;
specljs.platform.pending_QMARK_ = (function pending_QMARK_(e){return cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,e),specljs.platform.SpecPending);
});
specljs.platform.failure_QMARK_ = (function failure_QMARK_(e){return cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,e),specljs.platform.SpecFailure);
});
specljs.platform.error_message = (function error_message(e){return e.message;
});
specljs.platform.failure_source = (function failure_source(e){if(cljs.core.truth_(e.fileName))
{return [cljs.core.str(e.fileName),cljs.core.str(":"),cljs.core.str((function (){var or__3128__auto__ = e.lineNumber;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return "?";
}
})())].join('');
} else
{if(cljs.core.truth_(e.stack))
{return clojure.string.trim.call(null,cljs.core.nth.call(null,clojure.string.split_lines.call(null,e.stack),cljs.core.count.call(null,clojure.string.split_lines.call(null,e.message))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "unkown-file:?";
} else
{return null;
}
}
}
});
specljs.platform.stack_trace = (function stack_trace(e){return cljs.core.rest.call(null,clojure.string.split_lines.call(null,(function (){var or__3128__auto__ = e.stack;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return e.toString();
}
})()));
});
specljs.platform.cause = (function cause(e){return null;
});
specljs.platform.print_stack_trace = (function print_stack_trace(e){return cljs.core.println.call(null,(function (){var or__3128__auto__ = e.stack;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return "missing stack trace";
}
})());
});
specljs.platform.elide_level_QMARK_ = (function elide_level_QMARK_(stack_element){return false;
});
specljs.platform.type_name = (function type_name(t){if(cljs.core.truth_(t))
{return t.name;
} else
{return "nil";
}
});
specljs.platform.format_seconds = (function format_seconds(secs){return secs.toFixed(5);
});
specljs.platform.current_time = (function current_time(){return (new Date()).getTime();
});
specljs.platform.secs_since = (function secs_since(start){return (((new Date()).getTime() - start) / 1000.0);
});
cljs.core._STAR_print_fn_STAR_ = (function (thing){return console.log(thing);
});
specljs.platform.dynamically_invoke = (function dynamically_invoke(ns_name,fn_name){var code = [cljs.core.str(clojure.string.replace.call(null,ns_name,"-","_")),cljs.core.str("."),cljs.core.str(clojure.string.replace.call(null,fn_name,"-","_")),cljs.core.str("();")].join('');return eval(code);
});
