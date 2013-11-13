// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations');
goog.require('cljs.core');
koans.meditations.meditations = cljs.core.list("We shall contemplate truth by testing reality, via equality",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),true),"To understand reality, we must compare our expectations against reality",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),1,1)),"You can test equality of many things",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),3,4),7,cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),2,new cljs.core.Keyword(null,"__","__",1013907282))),"But you may not string yourself along",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),2,"2")),"Something is not equal to nothing",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),1,null))),"Strings, and keywords, and symbols: oh my!",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"foo",new cljs.core.Keyword(null,"foo","foo",1014005816),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,"foo","foo",-1640429953,null)))),"Make a keyword with your keyboard",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"foo","foo",1014005816),cljs.core.list(new cljs.core.Symbol(null,"keyword","keyword",1840027554,null),new cljs.core.Keyword(null,"__","__",1013907282))),"Symbolism is all around us",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),new cljs.core.Symbol(null,"foo","foo",-1640429953,null)),cljs.core.list(new cljs.core.Symbol(null,"symbol","symbol",1766911825,null),new cljs.core.Keyword(null,"__","__",1013907282))),"When things cannot be equal, they must be different",cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Keyword(null,"fill-in-the-blank","fill-in-the-blank",2866381260),new cljs.core.Keyword(null,"__","__",1013907282)));

/**
* @constructor
* @param {*} description
* @param {*} before
* @param {*} after
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
koans.meditations.Koan = (function (description,before,after,__meta,__extmap){
this.description = description;
this.before = before;
this.after = after;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
koans.meditations.Koan.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3677__auto__){var self__ = this;
var this__3677__auto____$1 = this;var h__3532__auto__ = self__.__hash;if(!((h__3532__auto__ == null)))
{return h__3532__auto__;
} else
{var h__3532__auto____$1 = cljs.core.hash_imap.call(null,this__3677__auto____$1);self__.__hash = h__3532__auto____$1;
return h__3532__auto____$1;
}
});
koans.meditations.Koan.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3682__auto__,k__3683__auto__){var self__ = this;
var this__3682__auto____$1 = this;return cljs.core._lookup.call(null,this__3682__auto____$1,k__3683__auto__,null);
});
koans.meditations.Koan.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3684__auto__,k12517,else__3685__auto__){var self__ = this;
var this__3684__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12517,new cljs.core.Keyword(null,"description","description",3584325486)))
{return self__.description;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12517,new cljs.core.Keyword(null,"before","before",3915985649)))
{return self__.before;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12517,new cljs.core.Keyword(null,"after","after",1106639182)))
{return self__.after;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12517,else__3685__auto__);
} else
{return null;
}
}
}
}
});
koans.meditations.Koan.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3689__auto__,k__3690__auto__,G__12516){var self__ = this;
var this__3689__auto____$1 = this;var pred__12519 = cljs.core.keyword_identical_QMARK_;var expr__12520 = k__3690__auto__;if(pred__12519.call(null,new cljs.core.Keyword(null,"description","description",3584325486),expr__12520))
{return (new koans.meditations.Koan(G__12516,self__.before,self__.after,self__.__meta,self__.__extmap,null));
} else
{if(pred__12519.call(null,new cljs.core.Keyword(null,"before","before",3915985649),expr__12520))
{return (new koans.meditations.Koan(self__.description,G__12516,self__.after,self__.__meta,self__.__extmap,null));
} else
{if(pred__12519.call(null,new cljs.core.Keyword(null,"after","after",1106639182),expr__12520))
{return (new koans.meditations.Koan(self__.description,self__.before,G__12516,self__.__meta,self__.__extmap,null));
} else
{return (new koans.meditations.Koan(self__.description,self__.before,self__.after,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3690__auto__,G__12516),null));
}
}
}
});
koans.meditations.Koan.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3696__auto__,writer__3697__auto__,opts__3698__auto__){var self__ = this;
var this__3696__auto____$1 = this;var pr_pair__3699__auto__ = (function (keyval__3700__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,cljs.core.pr_writer,""," ","",opts__3698__auto__,keyval__3700__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,pr_pair__3699__auto__,"#koans.meditations.Koan{",", ","}",opts__3698__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"description","description",3584325486),self__.description),cljs.core.vector.call(null,new cljs.core.Keyword(null,"before","before",3915985649),self__.before),cljs.core.vector.call(null,new cljs.core.Keyword(null,"after","after",1106639182),self__.after)], true),self__.__extmap));
});
koans.meditations.Koan.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3687__auto__,entry__3688__auto__){var self__ = this;
var this__3687__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3688__auto__))
{return cljs.core._assoc.call(null,this__3687__auto____$1,cljs.core._nth.call(null,entry__3688__auto__,0),cljs.core._nth.call(null,entry__3688__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3687__auto____$1,entry__3688__auto__);
}
});
koans.meditations.Koan.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3694__auto__){var self__ = this;
var this__3694__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"description","description",3584325486),self__.description),cljs.core.vector.call(null,new cljs.core.Keyword(null,"before","before",3915985649),self__.before),cljs.core.vector.call(null,new cljs.core.Keyword(null,"after","after",1106639182),self__.after)], true),self__.__extmap));
});
koans.meditations.Koan.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3686__auto__){var self__ = this;
var this__3686__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
koans.meditations.Koan.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3678__auto__,other__3679__auto__){var self__ = this;
var this__3678__auto____$1 = this;if(cljs.core.truth_((function (){var and__3119__auto__ = other__3679__auto__;if(cljs.core.truth_(and__3119__auto__))
{var and__3119__auto____$1 = (this__3678__auto____$1.constructor === other__3679__auto__.constructor);if(and__3119__auto____$1)
{return cljs.core.equiv_map.call(null,this__3678__auto____$1,other__3679__auto__);
} else
{return and__3119__auto____$1;
}
} else
{return and__3119__auto__;
}
})()))
{return true;
} else
{return false;
}
});
koans.meditations.Koan.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3681__auto__,G__12516){var self__ = this;
var this__3681__auto____$1 = this;return (new koans.meditations.Koan(self__.description,self__.before,self__.after,G__12516,self__.__extmap,self__.__hash));
});
koans.meditations.Koan.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3680__auto__){var self__ = this;
var this__3680__auto____$1 = this;return self__.__meta;
});
koans.meditations.Koan.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3691__auto__,k__3692__auto__){var self__ = this;
var this__3691__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"before","before",3915985649),null,new cljs.core.Keyword(null,"after","after",1106639182),null,new cljs.core.Keyword(null,"description","description",3584325486),null], true),k__3692__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3691__auto____$1),self__.__meta),k__3692__auto__);
} else
{return (new koans.meditations.Koan(self__.description,self__.before,self__.after,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3692__auto__)),null));
}
});
koans.meditations.Koan.cljs$lang$type = true;
koans.meditations.Koan.cljs$lang$ctorPrSeq = (function (this__3716__auto__){return cljs.core.list.call(null,"koans.meditations/Koan");
});
koans.meditations.Koan.cljs$lang$ctorPrWriter = (function (this__3716__auto__,writer__3717__auto__){return cljs.core._write.call(null,writer__3717__auto__,"koans.meditations/Koan");
});
koans.meditations.__GT_Koan = (function __GT_Koan(description,before,after){return (new koans.meditations.Koan(description,before,after));
});
koans.meditations.map__GT_Koan = (function map__GT_Koan(G__12518){return (new koans.meditations.Koan(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(G__12518),new cljs.core.Keyword(null,"before","before",3915985649).cljs$core$IFn$_invoke$arity$1(G__12518),new cljs.core.Keyword(null,"after","after",1106639182).cljs$core$IFn$_invoke$arity$1(G__12518),null,cljs.core.dissoc.call(null,G__12518,new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"before","before",3915985649),new cljs.core.Keyword(null,"after","after",1106639182))));
});
koans.meditations.nth_koan = (function nth_koan(n){var item = cljs.core.nth.call(null,cljs.core.partition.call(null,2,koans.meditations.meditations),n);var description = cljs.core.first.call(null,item);var vec__12523 = clojure.string.split.call(null,cljs.core.pr_str.call(null,cljs.core.last.call(null,item)),/:__/);var before = cljs.core.nth.call(null,vec__12523,0,null);var after = cljs.core.nth.call(null,vec__12523,1,null);return (new koans.meditations.Koan(description,before,after));
});
