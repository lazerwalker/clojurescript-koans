// Compiled by ClojureScript 0.0-2014
goog.provide('specljs.components');
goog.require('cljs.core');
specljs.components.SpecComponent = {};
specljs.components.install = (function install(this$,description){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.specljs$components$SpecComponent$install$arity$2;
} else
{return and__3119__auto__;
}
})())
{return this$.specljs$components$SpecComponent$install$arity$2(this$,description);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (specljs.components.install[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (specljs.components.install["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SpecComponent.install",this$);
}
}
})().call(null,this$,description);
}
});
(specljs.components.SpecComponent["object"] = true);
(specljs.components.install["object"] = (function (this$,description){return null;
}));
cljs.core.PersistentVector.prototype.specljs$components$SpecComponent$ = true;
cljs.core.PersistentVector.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var this$__$1 = this;var seq__17626 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));var chunk__17627 = null;var count__17628 = 0;var i__17629 = 0;while(true){
if((i__17629 < count__17628))
{var component = cljs.core._nth.call(null,chunk__17627,i__17629);specljs.components.install.call(null,component,description);
{
var G__17642 = seq__17626;
var G__17643 = chunk__17627;
var G__17644 = count__17628;
var G__17645 = (i__17629 + 1);
seq__17626 = G__17642;
chunk__17627 = G__17643;
count__17628 = G__17644;
i__17629 = G__17645;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17626);if(temp__4092__auto__)
{var seq__17626__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17626__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17626__$1);{
var G__17646 = cljs.core.chunk_rest.call(null,seq__17626__$1);
var G__17647 = c__3844__auto__;
var G__17648 = cljs.core.count.call(null,c__3844__auto__);
var G__17649 = 0;
seq__17626 = G__17646;
chunk__17627 = G__17647;
count__17628 = G__17648;
i__17629 = G__17649;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17626__$1);specljs.components.install.call(null,component,description);
{
var G__17650 = cljs.core.next.call(null,seq__17626__$1);
var G__17651 = null;
var G__17652 = 0;
var G__17653 = 0;
seq__17626 = G__17650;
chunk__17627 = G__17651;
count__17628 = G__17652;
i__17629 = G__17653;
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
cljs.core.EmptyList.prototype.specljs$components$SpecComponent$ = true;
cljs.core.EmptyList.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var this$__$1 = this;var seq__17630 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));var chunk__17631 = null;var count__17632 = 0;var i__17633 = 0;while(true){
if((i__17633 < count__17632))
{var component = cljs.core._nth.call(null,chunk__17631,i__17633);specljs.components.install.call(null,component,description);
{
var G__17654 = seq__17630;
var G__17655 = chunk__17631;
var G__17656 = count__17632;
var G__17657 = (i__17633 + 1);
seq__17630 = G__17654;
chunk__17631 = G__17655;
count__17632 = G__17656;
i__17633 = G__17657;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17630);if(temp__4092__auto__)
{var seq__17630__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17630__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17630__$1);{
var G__17658 = cljs.core.chunk_rest.call(null,seq__17630__$1);
var G__17659 = c__3844__auto__;
var G__17660 = cljs.core.count.call(null,c__3844__auto__);
var G__17661 = 0;
seq__17630 = G__17658;
chunk__17631 = G__17659;
count__17632 = G__17660;
i__17633 = G__17661;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17630__$1);specljs.components.install.call(null,component,description);
{
var G__17662 = cljs.core.next.call(null,seq__17630__$1);
var G__17663 = null;
var G__17664 = 0;
var G__17665 = 0;
seq__17630 = G__17662;
chunk__17631 = G__17663;
count__17632 = G__17664;
i__17633 = G__17665;
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
cljs.core.List.prototype.specljs$components$SpecComponent$ = true;
cljs.core.List.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var this$__$1 = this;var seq__17634 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));var chunk__17635 = null;var count__17636 = 0;var i__17637 = 0;while(true){
if((i__17637 < count__17636))
{var component = cljs.core._nth.call(null,chunk__17635,i__17637);specljs.components.install.call(null,component,description);
{
var G__17666 = seq__17634;
var G__17667 = chunk__17635;
var G__17668 = count__17636;
var G__17669 = (i__17637 + 1);
seq__17634 = G__17666;
chunk__17635 = G__17667;
count__17636 = G__17668;
i__17637 = G__17669;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17634);if(temp__4092__auto__)
{var seq__17634__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17634__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17634__$1);{
var G__17670 = cljs.core.chunk_rest.call(null,seq__17634__$1);
var G__17671 = c__3844__auto__;
var G__17672 = cljs.core.count.call(null,c__3844__auto__);
var G__17673 = 0;
seq__17634 = G__17670;
chunk__17635 = G__17671;
count__17636 = G__17672;
i__17637 = G__17673;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17634__$1);specljs.components.install.call(null,component,description);
{
var G__17674 = cljs.core.next.call(null,seq__17634__$1);
var G__17675 = null;
var G__17676 = 0;
var G__17677 = 0;
seq__17634 = G__17674;
chunk__17635 = G__17675;
count__17636 = G__17676;
i__17637 = G__17677;
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
cljs.core.LazySeq.prototype.specljs$components$SpecComponent$ = true;
cljs.core.LazySeq.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var this$__$1 = this;var seq__17638 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));var chunk__17639 = null;var count__17640 = 0;var i__17641 = 0;while(true){
if((i__17641 < count__17640))
{var component = cljs.core._nth.call(null,chunk__17639,i__17641);specljs.components.install.call(null,component,description);
{
var G__17678 = seq__17638;
var G__17679 = chunk__17639;
var G__17680 = count__17640;
var G__17681 = (i__17641 + 1);
seq__17638 = G__17678;
chunk__17639 = G__17679;
count__17640 = G__17680;
i__17641 = G__17681;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17638);if(temp__4092__auto__)
{var seq__17638__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17638__$1))
{var c__3844__auto__ = cljs.core.chunk_first.call(null,seq__17638__$1);{
var G__17682 = cljs.core.chunk_rest.call(null,seq__17638__$1);
var G__17683 = c__3844__auto__;
var G__17684 = cljs.core.count.call(null,c__3844__auto__);
var G__17685 = 0;
seq__17638 = G__17682;
chunk__17639 = G__17683;
count__17640 = G__17684;
i__17641 = G__17685;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17638__$1);specljs.components.install.call(null,component,description);
{
var G__17686 = cljs.core.next.call(null,seq__17638__$1);
var G__17687 = null;
var G__17688 = 0;
var G__17689 = 0;
seq__17638 = G__17686;
chunk__17639 = G__17687;
count__17640 = G__17688;
i__17641 = G__17689;
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

/**
* @constructor
*/
specljs.components.Description = (function (name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds){
this.name = name;
this.ns = ns;
this.parent = parent;
this.children = children;
this.charcteristics = charcteristics;
this.tags = tags;
this.befores = befores;
this.before_alls = before_alls;
this.afters = afters;
this.after_alls = after_alls;
this.withs = withs;
this.with_alls = with_alls;
this.arounds = arounds;
})
specljs.components.Description.cljs$lang$type = true;
specljs.components.Description.cljs$lang$ctorStr = "specljs.components/Description";
specljs.components.Description.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/Description");
});
specljs.components.Description.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("Description: "),cljs.core.str("\""),cljs.core.str(self__.name),cljs.core.str("\"")].join('');
});
specljs.components.Description.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Description.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;cljs.core.reset_BANG_.call(null,this$__$1.parent,description);
return cljs.core.swap_BANG_.call(null,description.children,cljs.core.conj,this$__$1);
});
specljs.components.__GT_Description = (function __GT_Description(name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds){return (new specljs.components.Description(name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds));
});
specljs.components.new_description = (function new_description(name,ns){return (new specljs.components.Description(name,ns,cljs.core.atom.call(null,null),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});

/**
* @constructor
*/
specljs.components.Characteristic = (function (name,parent,body){
this.name = name;
this.parent = parent;
this.body = body;
})
specljs.components.Characteristic.cljs$lang$type = true;
specljs.components.Characteristic.cljs$lang$ctorStr = "specljs.components/Characteristic";
specljs.components.Characteristic.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/Characteristic");
});
specljs.components.Characteristic.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("\""),cljs.core.str(self__.name),cljs.core.str("\"")].join('');
});
specljs.components.Characteristic.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Characteristic.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;cljs.core.reset_BANG_.call(null,this$__$1.parent,description);
return cljs.core.swap_BANG_.call(null,description.charcteristics,cljs.core.conj,this$__$1);
});
specljs.components.__GT_Characteristic = (function __GT_Characteristic(name,parent,body){return (new specljs.components.Characteristic(name,parent,body));
});
specljs.components.new_characteristic = (function() {
var new_characteristic = null;
var new_characteristic__2 = (function (name,body){return (new specljs.components.Characteristic(name,cljs.core.atom.call(null,null),body));
});
var new_characteristic__3 = (function (name,description,body){return (new specljs.components.Characteristic(name,cljs.core.atom.call(null,description),body));
});
new_characteristic = function(name,description,body){
switch(arguments.length){
case 2:
return new_characteristic__2.call(this,name,description);
case 3:
return new_characteristic__3.call(this,name,description,body);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_characteristic.cljs$core$IFn$_invoke$arity$2 = new_characteristic__2;
new_characteristic.cljs$core$IFn$_invoke$arity$3 = new_characteristic__3;
return new_characteristic;
})()
;

/**
* @constructor
*/
specljs.components.Before = (function (body){
this.body = body;
})
specljs.components.Before.cljs$lang$type = true;
specljs.components.Before.cljs$lang$ctorStr = "specljs.components/Before";
specljs.components.Before.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/Before");
});
specljs.components.Before.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Before.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.befores,cljs.core.conj,this$__$1);
});
specljs.components.__GT_Before = (function __GT_Before(body){return (new specljs.components.Before(body));
});
specljs.components.new_before = (function new_before(body){return (new specljs.components.Before(body));
});

/**
* @constructor
*/
specljs.components.After = (function (body){
this.body = body;
})
specljs.components.After.cljs$lang$type = true;
specljs.components.After.cljs$lang$ctorStr = "specljs.components/After";
specljs.components.After.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/After");
});
specljs.components.After.prototype.specljs$components$SpecComponent$ = true;
specljs.components.After.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.afters,cljs.core.conj,this$__$1);
});
specljs.components.__GT_After = (function __GT_After(body){return (new specljs.components.After(body));
});
specljs.components.new_after = (function new_after(body){return (new specljs.components.After(body));
});

/**
* @constructor
*/
specljs.components.Around = (function (body){
this.body = body;
})
specljs.components.Around.cljs$lang$type = true;
specljs.components.Around.cljs$lang$ctorStr = "specljs.components/Around";
specljs.components.Around.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/Around");
});
specljs.components.Around.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Around.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.arounds,cljs.core.conj,this$__$1);
});
specljs.components.__GT_Around = (function __GT_Around(body){return (new specljs.components.Around(body));
});
specljs.components.new_around = (function new_around(body){return (new specljs.components.Around(body));
});

/**
* @constructor
*/
specljs.components.BeforeAll = (function (body){
this.body = body;
})
specljs.components.BeforeAll.cljs$lang$type = true;
specljs.components.BeforeAll.cljs$lang$ctorStr = "specljs.components/BeforeAll";
specljs.components.BeforeAll.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/BeforeAll");
});
specljs.components.BeforeAll.prototype.specljs$components$SpecComponent$ = true;
specljs.components.BeforeAll.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.before_alls,cljs.core.conj,this$__$1);
});
specljs.components.__GT_BeforeAll = (function __GT_BeforeAll(body){return (new specljs.components.BeforeAll(body));
});
specljs.components.new_before_all = (function new_before_all(body){return (new specljs.components.BeforeAll(body));
});

/**
* @constructor
*/
specljs.components.AfterAll = (function (body){
this.body = body;
})
specljs.components.AfterAll.cljs$lang$type = true;
specljs.components.AfterAll.cljs$lang$ctorStr = "specljs.components/AfterAll";
specljs.components.AfterAll.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/AfterAll");
});
specljs.components.AfterAll.prototype.specljs$components$SpecComponent$ = true;
specljs.components.AfterAll.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.after_alls,cljs.core.conj,this$__$1);
});
specljs.components.__GT_AfterAll = (function __GT_AfterAll(body){return (new specljs.components.AfterAll(body));
});
specljs.components.new_after_all = (function new_after_all(body){return (new specljs.components.AfterAll(body));
});

/**
* @constructor
*/
specljs.components.With = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
specljs.components.With.cljs$lang$type = true;
specljs.components.With.cljs$lang$ctorStr = "specljs.components/With";
specljs.components.With.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/With");
});
specljs.components.With.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402),cljs.core.deref.call(null,self__.value)))
{cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else
{}
return cljs.core.deref.call(null,self__.value);
});
specljs.components.With.prototype.specljs$components$SpecComponent$ = true;
specljs.components.With.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.withs,cljs.core.conj,this$__$1);
});
specljs.components.__GT_With = (function __GT_With(name,unique_name,body,value,bang){return (new specljs.components.With(name,unique_name,body,value,bang));
});
specljs.components.reset_with = (function reset_with(with$){cljs.core.reset_BANG_.call(null,with$.value,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402));
if(cljs.core.truth_(with$.bang))
{return cljs.core.deref.call(null,with$);
} else
{return null;
}
});
specljs.components.new_with = (function new_with(name,unique_name,body,bang){var with$ = (new specljs.components.With(name,unique_name,body,cljs.core.atom.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402)),bang));if(cljs.core.truth_(bang))
{cljs.core.deref.call(null,with$);
} else
{}
return with$;
});

/**
* @constructor
*/
specljs.components.WithAll = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
specljs.components.WithAll.cljs$lang$type = true;
specljs.components.WithAll.cljs$lang$ctorStr = "specljs.components/WithAll";
specljs.components.WithAll.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/WithAll");
});
specljs.components.WithAll.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402),cljs.core.deref.call(null,self__.value)))
{cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else
{}
return cljs.core.deref.call(null,self__.value);
});
specljs.components.WithAll.prototype.specljs$components$SpecComponent$ = true;
specljs.components.WithAll.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.with_alls,cljs.core.conj,this$__$1);
});
specljs.components.__GT_WithAll = (function __GT_WithAll(name,unique_name,body,value,bang){return (new specljs.components.WithAll(name,unique_name,body,value,bang));
});
specljs.components.new_with_all = (function new_with_all(name,unique_name,body,bang){var with_all = (new specljs.components.WithAll(name,unique_name,body,cljs.core.atom.call(null,new cljs.core.Keyword("specljs.components","none","specljs.components/none",4499029402)),bang));if(cljs.core.truth_(bang))
{cljs.core.deref.call(null,with_all);
} else
{}
return with_all;
});

/**
* @constructor
*/
specljs.components.Tag = (function (name){
this.name = name;
})
specljs.components.Tag.cljs$lang$type = true;
specljs.components.Tag.cljs$lang$ctorStr = "specljs.components/Tag";
specljs.components.Tag.cljs$lang$ctorPrWriter = (function (this__3664__auto__,writer__3665__auto__,opt__3666__auto__){return cljs.core._write.call(null,writer__3665__auto__,"specljs.components/Tag");
});
specljs.components.Tag.prototype.specljs$components$SpecComponent$ = true;
specljs.components.Tag.prototype.specljs$components$SpecComponent$install$arity$2 = (function (this$,description){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,description.tags,cljs.core.conj,self__.name);
});
specljs.components.__GT_Tag = (function __GT_Tag(name){return (new specljs.components.Tag(name));
});
specljs.components.new_tag = (function new_tag(name){return (new specljs.components.Tag(name));
});
