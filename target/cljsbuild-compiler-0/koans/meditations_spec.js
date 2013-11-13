// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations_spec');
goog.require('cljs.core');
goog.require('koans.meditations');
goog.require('koans.meditations');
goog.require('specljs.core');
var description__20096__auto___22661 = specljs.components.new_description.call(null,"nth-koan","koans.meditations-spec");var _STAR_parent_description_STAR_22656_22662 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__20096__auto___22661;
var seq__22657_22663 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"should return a valid Koan object",(function (){koans.meditations_spec.koan = koans.meditations.nth_koan.call(null,0);
var value__20164__auto___22667 = typeof new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koans.meditations_spec.koan) === 'string';if(!(value__20164__auto___22667))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected truthy but was: "),cljs.core.str((((value__20164__auto___22667 == null))?"nil":cljs.core.pr_str.call(null,value__20164__auto___22667))),cljs.core.str("")].join('')));
} else
{}
var value__20164__auto___22668 = typeof new cljs.core.Keyword(null,"before","before",3915985649).cljs$core$IFn$_invoke$arity$1(koans.meditations_spec.koan) === 'string';if(!(value__20164__auto___22668))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected truthy but was: "),cljs.core.str((((value__20164__auto___22668 == null))?"nil":cljs.core.pr_str.call(null,value__20164__auto___22668))),cljs.core.str("")].join('')));
} else
{}
var value__20164__auto__ = typeof new cljs.core.Keyword(null,"after","after",1106639182).cljs$core$IFn$_invoke$arity$1(koans.meditations_spec.koan) === 'string';if(!(value__20164__auto__))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected truthy but was: "),cljs.core.str((((value__20164__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__20164__auto__))),cljs.core.str("")].join('')));
} else
{return null;
}
})),specljs.components.new_characteristic.call(null,"should return different koans for different indices",(function (){koans.meditations_spec.koan_0 = koans.meditations.nth_koan.call(null,0);
koans.meditations_spec.koan_1 = koans.meditations.nth_koan.call(null,1);
var expected__20214__auto__ = koans.meditations_spec.koan_0;var actual__20215__auto__ = koans.meditations_spec.koan_1;if((expected__20214__auto__ === actual__20215__auto__))
{throw (new specljs.platform.SpecFailure([cljs.core.str("             Expected: "),cljs.core.str((((expected__20214__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__20214__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("not to be the same as: "),cljs.core.str((((actual__20215__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__20215__auto__))),cljs.core.str(" (using identical?)")].join('')));
} else
{return null;
}
}))));var chunk__22658_22664 = null;var count__22659_22665 = 0;var i__22660_22666 = 0;while(true){
if((i__22660_22666 < count__22659_22665))
{var component__20097__auto___22669 = cljs.core._nth.call(null,chunk__22658_22664,i__22660_22666);specljs.components.install.call(null,component__20097__auto___22669,description__20096__auto___22661);
{
var G__22670 = seq__22657_22663;
var G__22671 = chunk__22658_22664;
var G__22672 = count__22659_22665;
var G__22673 = (i__22660_22666 + 1);
seq__22657_22663 = G__22670;
chunk__22658_22664 = G__22671;
count__22659_22665 = G__22672;
i__22660_22666 = G__22673;
continue;
}
} else
{var temp__4092__auto___22674 = cljs.core.seq.call(null,seq__22657_22663);if(temp__4092__auto___22674)
{var seq__22657_22675__$1 = temp__4092__auto___22674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22657_22675__$1))
{var c__3844__auto___22676 = cljs.core.chunk_first.call(null,seq__22657_22675__$1);{
var G__22677 = cljs.core.chunk_rest.call(null,seq__22657_22675__$1);
var G__22678 = c__3844__auto___22676;
var G__22679 = cljs.core.count.call(null,c__3844__auto___22676);
var G__22680 = 0;
seq__22657_22663 = G__22677;
chunk__22658_22664 = G__22678;
count__22659_22665 = G__22679;
i__22660_22666 = G__22680;
continue;
}
} else
{var component__20097__auto___22681 = cljs.core.first.call(null,seq__22657_22675__$1);specljs.components.install.call(null,component__20097__auto___22681,description__20096__auto___22661);
{
var G__22682 = cljs.core.next.call(null,seq__22657_22675__$1);
var G__22683 = null;
var G__22684 = 0;
var G__22685 = 0;
seq__22657_22663 = G__22682;
chunk__22658_22664 = G__22683;
count__22659_22665 = G__22684;
i__22660_22666 = G__22685;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_22656_22662;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__20096__auto___22661);
} else
{}
