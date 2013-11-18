// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations_spec');
goog.require('cljs.core');
goog.require('koans.meditations');
goog.require('koans.meditations');
goog.require('specljs.core');
var description__12940__auto___13614 = specljs.components.new_description.call(null,"next-koan-index","koans.meditations-spec");var _STAR_parent_description_STAR_13599_13615 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__12940__auto___13614;
var seq__13600_13616 = cljs.core.seq.call(null,cljs.core.list.call(null,(function (){var description__12940__auto____$1 = specljs.components.new_description.call(null,"when there are remaining items in the category","koans.meditations-spec");var _STAR_parent_description_STAR_13604_13620 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__12940__auto____$1;
var seq__13605_13621 = cljs.core.seq.call(null,cljs.core.list.call(null,specljs.components.new_characteristic.call(null,"should return the next index",((function (_STAR_parent_description_STAR_13604_13620,description__12940__auto____$1){
return (function (){koans.meditations_spec.original_koan_index = (new koans.meditations.KoanIndex("equality",0));
koans.meditations_spec.expected_koan_index = (new koans.meditations.KoanIndex("equality",1));
var expected__13020__auto__ = koans.meditations_spec.expected_koan_index;var actual__13021__auto__ = koans.meditations.next_koan_index.call(null,koans.meditations_spec.original_koan_index);if(!(cljs.core._EQ_.call(null,expected__13020__auto__,actual__13021__auto__)))
{throw (new specljs.platform.SpecFailure([cljs.core.str("Expected: "),cljs.core.str((((expected__13020__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__13020__auto__))),cljs.core.str(specljs.platform.endl),cljs.core.str("     got: "),cljs.core.str((((actual__13021__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__13021__auto__))),cljs.core.str(" (using =)")].join('')));
} else
{return null;
}
});})(_STAR_parent_description_STAR_13604_13620,description__12940__auto____$1))
)));var chunk__13606_13622 = null;var count__13607_13623 = 0;var i__13608_13624 = 0;while(true){
if((i__13608_13624 < count__13607_13623))
{var component__12941__auto___13625 = cljs.core._nth.call(null,chunk__13606_13622,i__13608_13624);specljs.components.install.call(null,component__12941__auto___13625,description__12940__auto____$1);
{
var G__13626 = seq__13605_13621;
var G__13627 = chunk__13606_13622;
var G__13628 = count__13607_13623;
var G__13629 = (i__13608_13624 + 1);
seq__13605_13621 = G__13626;
chunk__13606_13622 = G__13627;
count__13607_13623 = G__13628;
i__13608_13624 = G__13629;
continue;
}
} else
{var temp__4092__auto___13630 = cljs.core.seq.call(null,seq__13605_13621);if(temp__4092__auto___13630)
{var seq__13605_13631__$1 = temp__4092__auto___13630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13605_13631__$1))
{var c__3844__auto___13632 = cljs.core.chunk_first.call(null,seq__13605_13631__$1);{
var G__13633 = cljs.core.chunk_rest.call(null,seq__13605_13631__$1);
var G__13634 = c__3844__auto___13632;
var G__13635 = cljs.core.count.call(null,c__3844__auto___13632);
var G__13636 = 0;
seq__13605_13621 = G__13633;
chunk__13606_13622 = G__13634;
count__13607_13623 = G__13635;
i__13608_13624 = G__13636;
continue;
}
} else
{var component__12941__auto___13637 = cljs.core.first.call(null,seq__13605_13631__$1);specljs.components.install.call(null,component__12941__auto___13637,description__12940__auto____$1);
{
var G__13638 = cljs.core.next.call(null,seq__13605_13631__$1);
var G__13639 = null;
var G__13640 = 0;
var G__13641 = 0;
seq__13605_13621 = G__13638;
chunk__13606_13622 = G__13639;
count__13607_13623 = G__13640;
i__13608_13624 = G__13641;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_13604_13620;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__12940__auto____$1);
} else
{}
return description__12940__auto____$1;
})(),(function (){var description__12940__auto____$1 = specljs.components.new_description.call(null,"when the category is completed","koans.meditations-spec");var _STAR_parent_description_STAR_13609_13642 = specljs.config._STAR_parent_description_STAR_;try{specljs.config._STAR_parent_description_STAR_ = description__12940__auto____$1;
var seq__13610_13643 = cljs.core.seq.call(null,cljs.core.list.call(null));var chunk__13611_13644 = null;var count__13612_13645 = 0;var i__13613_13646 = 0;while(true){
if((i__13613_13646 < count__13612_13645))
{var component__12941__auto___13647 = cljs.core._nth.call(null,chunk__13611_13644,i__13613_13646);specljs.components.install.call(null,component__12941__auto___13647,description__12940__auto____$1);
{
var G__13648 = seq__13610_13643;
var G__13649 = chunk__13611_13644;
var G__13650 = count__13612_13645;
var G__13651 = (i__13613_13646 + 1);
seq__13610_13643 = G__13648;
chunk__13611_13644 = G__13649;
count__13612_13645 = G__13650;
i__13613_13646 = G__13651;
continue;
}
} else
{var temp__4092__auto___13652 = cljs.core.seq.call(null,seq__13610_13643);if(temp__4092__auto___13652)
{var seq__13610_13653__$1 = temp__4092__auto___13652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13610_13653__$1))
{var c__3844__auto___13654 = cljs.core.chunk_first.call(null,seq__13610_13653__$1);{
var G__13655 = cljs.core.chunk_rest.call(null,seq__13610_13653__$1);
var G__13656 = c__3844__auto___13654;
var G__13657 = cljs.core.count.call(null,c__3844__auto___13654);
var G__13658 = 0;
seq__13610_13643 = G__13655;
chunk__13611_13644 = G__13656;
count__13612_13645 = G__13657;
i__13613_13646 = G__13658;
continue;
}
} else
{var component__12941__auto___13659 = cljs.core.first.call(null,seq__13610_13653__$1);specljs.components.install.call(null,component__12941__auto___13659,description__12940__auto____$1);
{
var G__13660 = cljs.core.next.call(null,seq__13610_13653__$1);
var G__13661 = null;
var G__13662 = 0;
var G__13663 = 0;
seq__13610_13643 = G__13660;
chunk__13611_13644 = G__13661;
count__13612_13645 = G__13662;
i__13613_13646 = G__13663;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_13609_13642;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__12940__auto____$1);
} else
{}
return description__12940__auto____$1;
})(),specljs.components.new_characteristic.call(null,"should return the first koan in the next category",(function (){throw (new specljs.platform.SpecPending("Not Yet Implemented"));
}))));var chunk__13601_13617 = null;var count__13602_13618 = 0;var i__13603_13619 = 0;while(true){
if((i__13603_13619 < count__13602_13618))
{var component__12941__auto___13664 = cljs.core._nth.call(null,chunk__13601_13617,i__13603_13619);specljs.components.install.call(null,component__12941__auto___13664,description__12940__auto___13614);
{
var G__13665 = seq__13600_13616;
var G__13666 = chunk__13601_13617;
var G__13667 = count__13602_13618;
var G__13668 = (i__13603_13619 + 1);
seq__13600_13616 = G__13665;
chunk__13601_13617 = G__13666;
count__13602_13618 = G__13667;
i__13603_13619 = G__13668;
continue;
}
} else
{var temp__4092__auto___13669 = cljs.core.seq.call(null,seq__13600_13616);if(temp__4092__auto___13669)
{var seq__13600_13670__$1 = temp__4092__auto___13669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13600_13670__$1))
{var c__3844__auto___13671 = cljs.core.chunk_first.call(null,seq__13600_13670__$1);{
var G__13672 = cljs.core.chunk_rest.call(null,seq__13600_13670__$1);
var G__13673 = c__3844__auto___13671;
var G__13674 = cljs.core.count.call(null,c__3844__auto___13671);
var G__13675 = 0;
seq__13600_13616 = G__13672;
chunk__13601_13617 = G__13673;
count__13602_13618 = G__13674;
i__13603_13619 = G__13675;
continue;
}
} else
{var component__12941__auto___13676 = cljs.core.first.call(null,seq__13600_13670__$1);specljs.components.install.call(null,component__12941__auto___13676,description__12940__auto___13614);
{
var G__13677 = cljs.core.next.call(null,seq__13600_13670__$1);
var G__13678 = null;
var G__13679 = 0;
var G__13680 = 0;
seq__13600_13616 = G__13677;
chunk__13601_13617 = G__13678;
count__13602_13618 = G__13679;
i__13603_13619 = G__13680;
continue;
}
}
} else
{}
}
break;
}
}finally {specljs.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR_13599_13615;
}if(cljs.core.not.call(null,specljs.config._STAR_parent_description_STAR_))
{specljs.running.submit_description.call(null,specljs.config.active_runner.call(null),description__12940__auto___13614);
} else
{}
