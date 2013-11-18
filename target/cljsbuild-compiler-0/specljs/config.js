// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.config');
goog.require('cljs.core');
goog.require('specljs.platform');
goog.require('specljs.platform');
specljs.config.default_reporters = cljs.core.atom.call(null,null);
specljs.config.active_reporters = (function active_reporters(){if(cljs.core.truth_(specljs.config._STAR_reporters_STAR_))
{return specljs.config._STAR_reporters_STAR_;
} else
{var temp__4090__auto__ = cljs.core.deref.call(null,specljs.config.default_reporters);if(cljs.core.truth_(temp__4090__auto__))
{var reporters = temp__4090__auto__;return reporters;
} else
{throw (new Error("*reporters* is unbound and no default value has been provided"));
}
}
});
specljs.config.default_runner = cljs.core.atom.call(null,null);
specljs.config.default_runner_fn = cljs.core.atom.call(null,null);
specljs.config.active_runner = (function active_runner(){if(cljs.core.truth_(specljs.config._STAR_runner_STAR_))
{return specljs.config._STAR_runner_STAR_;
} else
{var temp__4090__auto__ = cljs.core.deref.call(null,specljs.config.default_runner);if(cljs.core.truth_(temp__4090__auto__))
{var runner = temp__4090__auto__;return runner;
} else
{throw (new Error("*runner* is unbound and no default value has been provided"));
}
}
});
specljs.config._STAR_color_QMARK__STAR_ = false;
specljs.config._STAR_full_stack_trace_QMARK__STAR_ = false;
specljs.config._STAR_tag_filter_STAR_ = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"include","include",2956478490),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"exclude","exclude",3987722572),cljs.core.PersistentHashSet.EMPTY], true);
specljs.config.default_config = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"specs","specs",1123545994),cljs.core.PersistentVector.fromArray(["spec"], true),new cljs.core.Keyword(null,"runner","runner",4389065378),"standard",new cljs.core.Keyword(null,"reporters","reporters",660581156),cljs.core.PersistentVector.fromArray(["progress"], true),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentVector.EMPTY], true);
specljs.config.config_bindings = (function config_bindings(){throw "Not Supported";
});
specljs.config.load_runner = (function load_runner(name){try{return specljs.platform.dynamically_invoke.call(null,[cljs.core.str("specljs.run."),cljs.core.str(name)].join(''),[cljs.core.str("new-"),cljs.core.str(name),cljs.core.str("-runner")].join(''));
}catch (e18143){if((e18143 instanceof Error))
{var e = e18143;throw (new Error([cljs.core.str("Failed to load runner: "),cljs.core.str(name)].join(''),e));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18143;
} else
{return null;
}
}
}});
specljs.config.load_reporter = (function load_reporter(name){try{return specljs.platform.dynamically_invoke.call(null,[cljs.core.str("specljs.report."),cljs.core.str(name)].join(''),[cljs.core.str("new-"),cljs.core.str(name),cljs.core.str("-reporter")].join(''));
}catch (e18145){if((e18145 instanceof Error))
{var e = e18145;throw (new Error([cljs.core.str("Failed to load reporter: "),cljs.core.str(name)].join(''),e));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18145;
} else
{return null;
}
}
}});
specljs.config.parse_tags = (function parse_tags(values){var result = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"includes","includes",1104163901),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"excludes","excludes",3007959371),cljs.core.PersistentHashSet.EMPTY], true);var values__$1 = values;while(true){
if(cljs.core.seq.call(null,values__$1))
{var value = cljs.core.name.call(null,cljs.core.first.call(null,values__$1));if(cljs.core._EQ_.call(null,"~",cljs.core.first.call(null,value)))
{{
var G__18146 = cljs.core.update_in.call(null,result,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"excludes","excludes",3007959371)], true),cljs.core.conj,cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,value))));
var G__18147 = cljs.core.rest.call(null,values__$1);
result = G__18146;
values__$1 = G__18147;
continue;
}
} else
{{
var G__18148 = cljs.core.update_in.call(null,result,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"includes","includes",1104163901)], true),cljs.core.conj,cljs.core.keyword.call(null,value));
var G__18149 = cljs.core.rest.call(null,values__$1);
result = G__18148;
values__$1 = G__18149;
continue;
}
}
} else
{return result;
}
break;
}
});
specljs.config.config_mappings = (function config_mappings(_){throw "Not Supported";
});
/**
* Runs the given function with all the cofigurations set.  Useful in cljs because config-mappings can't be used.
*/
specljs.config.with_config = (function with_config(config,action){var _STAR_runner_STAR_18156 = specljs.config._STAR_runner_STAR_;var _STAR_reporters_STAR_18157 = specljs.config._STAR_reporters_STAR_;var _STAR_specs_STAR_18158 = specljs.config._STAR_specs_STAR_;var _STAR_color_QMARK__STAR_18159 = specljs.config._STAR_color_QMARK__STAR_;var _STAR_full_stack_trace_QMARK__STAR_18160 = specljs.config._STAR_full_stack_trace_QMARK__STAR_;var _STAR_tag_filter_STAR_18161 = specljs.config._STAR_tag_filter_STAR_;try{specljs.config._STAR_runner_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"runner","runner",4389065378).cljs$core$IFn$_invoke$arity$1(config))?(function (){cljs.core.println.call(null,"loading runner in config");
return specljs.config.load_runner.call(null,new cljs.core.Keyword(null,"runner","runner",4389065378).cljs$core$IFn$_invoke$arity$1(config));
})():specljs.config.active_runner.call(null));
specljs.config._STAR_reporters_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"reporters","reporters",660581156).cljs$core$IFn$_invoke$arity$1(config))?cljs.core.mapv.call(null,specljs.config.load_reporter,new cljs.core.Keyword(null,"reporters","reporters",660581156).cljs$core$IFn$_invoke$arity$1(config)):specljs.config.active_reporters.call(null));
specljs.config._STAR_specs_STAR_ = new cljs.core.Keyword(null,"specs","specs",1123545994).cljs$core$IFn$_invoke$arity$1(config);
specljs.config._STAR_color_QMARK__STAR_ = new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(config);
specljs.config._STAR_full_stack_trace_QMARK__STAR_ = !((new cljs.core.Keyword(null,"stacktrace","stacktrace",3069736751).cljs$core$IFn$_invoke$arity$1(config) == null));
specljs.config._STAR_tag_filter_STAR_ = specljs.config.parse_tags.call(null,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(config));
return action.call(null);
}finally {specljs.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR_18161;
specljs.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR_18160;
specljs.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR_18159;
specljs.config._STAR_specs_STAR_ = _STAR_specs_STAR_18158;
specljs.config._STAR_reporters_STAR_ = _STAR_reporters_STAR_18157;
specljs.config._STAR_runner_STAR_ = _STAR_runner_STAR_18156;
}});
