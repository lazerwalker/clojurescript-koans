// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.tags');
goog.require('cljs.core');
goog.require('specljs.config');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('specljs.config');
goog.require('clojure.string');
goog.require('clojure.set');
specljs.tags.pass_includes_QMARK_ = (function pass_includes_QMARK_(includes,tags){if(cljs.core.empty_QMARK_.call(null,includes))
{return true;
} else
{return cljs.core._EQ_.call(null,includes,clojure.set.intersection.call(null,includes,cljs.core.set.call(null,tags)));
}
});
specljs.tags.pass_excludes_QMARK_ = (function pass_excludes_QMARK_(excludes,tags){if(cljs.core.empty_QMARK_.call(null,excludes))
{return true;
} else
{return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__17608_SHARP_){return cljs.core.contains_QMARK_.call(null,excludes,p1__17608_SHARP_);
}),tags));
}
});
specljs.tags.pass_tag_filter_QMARK_ = (function() {
var pass_tag_filter_QMARK_ = null;
var pass_tag_filter_QMARK___1 = (function (tags){return pass_tag_filter_QMARK_.call(null,specljs.config._STAR_tag_filter_STAR_,tags);
});
var pass_tag_filter_QMARK___2 = (function (filter,tags){var and__3119__auto__ = specljs.tags.pass_includes_QMARK_.call(null,new cljs.core.Keyword(null,"includes","includes",1104163901).cljs$core$IFn$_invoke$arity$1(filter),tags);if(cljs.core.truth_(and__3119__auto__))
{return specljs.tags.pass_excludes_QMARK_.call(null,new cljs.core.Keyword(null,"excludes","excludes",3007959371).cljs$core$IFn$_invoke$arity$1(filter),tags);
} else
{return and__3119__auto__;
}
});
pass_tag_filter_QMARK_ = function(filter,tags){
switch(arguments.length){
case 1:
return pass_tag_filter_QMARK___1.call(this,filter);
case 2:
return pass_tag_filter_QMARK___2.call(this,filter,tags);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1 = pass_tag_filter_QMARK___1;
pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2 = pass_tag_filter_QMARK___2;
return pass_tag_filter_QMARK_;
})()
;
specljs.tags.tags_for = (function tags_for(context){if(cljs.core.truth_(context))
{return clojure.set.union.call(null,tags_for.call(null,cljs.core.deref.call(null,context.parent)),cljs.core.deref.call(null,context.tags));
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
});
specljs.tags.tag_sets_for = (function tag_sets_for(context){var context_seq = cljs.core.tree_seq.call(null,(function (p1__17609_SHARP_){return !((p1__17609_SHARP_ == null));
}),(function (p1__17610_SHARP_){return cljs.core.deref.call(null,p1__17610_SHARP_.children);
}),context);return cljs.core.map.call(null,specljs.tags.tags_for,context_seq);
});
specljs.tags.context_with_tags_seq = (function context_with_tags_seq(context){var context_seq = cljs.core.tree_seq.call(null,(function (p1__17611_SHARP_){return !((p1__17611_SHARP_ == null));
}),(function (p1__17612_SHARP_){return cljs.core.deref.call(null,p1__17612_SHARP_.children);
}),context);return cljs.core.map.call(null,(function (p1__17613_SHARP_){return cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"context","context",1965435169),p1__17613_SHARP_,new cljs.core.Keyword(null,"tag-set","tag-set",3758720801),specljs.tags.tags_for.call(null,p1__17613_SHARP_));
}),context_seq);
});
specljs.tags.describe_filter = (function() {
var describe_filter = null;
var describe_filter__0 = (function (){return describe_filter.call(null,specljs.config._STAR_tag_filter_STAR_);
});
var describe_filter__1 = (function (filter){var includes = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"includes","includes",1104163901).cljs$core$IFn$_invoke$arity$1(filter)));var excludes = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"excludes","excludes",3007959371).cljs$core$IFn$_invoke$arity$1(filter)));if((includes) || (excludes))
{return [cljs.core.str("Filtering tags."),cljs.core.str(((includes)?[cljs.core.str(" Including: "),cljs.core.str(clojure.string.join.call(null,", ",includes)),cljs.core.str(".")].join(''):null)),cljs.core.str(((excludes)?[cljs.core.str(" Excluding: "),cljs.core.str(clojure.string.join.call(null,", ",excludes)),cljs.core.str(".")].join(''):null))].join('');
} else
{return null;
}
});
describe_filter = function(filter){
switch(arguments.length){
case 0:
return describe_filter__0.call(this);
case 1:
return describe_filter__1.call(this,filter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
describe_filter.cljs$core$IFn$_invoke$arity$0 = describe_filter__0;
describe_filter.cljs$core$IFn$_invoke$arity$1 = describe_filter__1;
return describe_filter;
})()
;
