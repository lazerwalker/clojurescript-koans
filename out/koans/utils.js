// Compiled by ClojureScript 0.0-2014
goog.provide('koans.utils');
goog.require('cljs.core');
koans.utils.index_of = (function index_of(item,coll){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__12818_SHARP_,p2__12817_SHARP_){if(cljs.core._EQ_.call(null,item,p2__12817_SHARP_))
{return p1__12818_SHARP_;
} else
{return null;
}
}),coll));
});

//# sourceMappingURL=utils.js.map