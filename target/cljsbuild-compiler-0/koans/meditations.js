// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations');
goog.require('cljs.core');
goog.require('koans.meditations.sequence_comprehensions');
goog.require('koans.meditations.datatypes');
goog.require('koans.meditations.destructuring');
goog.require('koans.meditations.maps');
goog.require('koans.meditations.functions');
goog.require('koans.meditations.atoms');
goog.require('koans.meditations.partition');
goog.require('koans.meditations.creating_functions');
goog.require('koans.meditations.conditionals');
goog.require('koans.meditations.maps');
goog.require('koans.meditations.lists');
goog.require('koans.meditations.atoms');
goog.require('koans.meditations.sequence_comprehensions');
goog.require('koans.meditations.vectors');
goog.require('koans.meditations.equality');
goog.require('koans.meditations.higher_order_functions');
goog.require('koans.meditations.lazy_sequences');
goog.require('koans.utils');
goog.require('koans.meditations.conditionals');
goog.require('koans.meditations.equality');
goog.require('koans.meditations.sets');
goog.require('koans.meditations.vectors');
goog.require('koans.meditations.destructuring');
goog.require('koans.meditations.datatypes');
goog.require('koans.utils');
goog.require('koans.repl');
goog.require('koans.meditations.runtime_polymorphism');
goog.require('koans.meditations.functions');
goog.require('koans.meditations.partition');
goog.require('koans.meditations.higher_order_functions');
goog.require('koans.repl');
goog.require('koans.meditations.runtime_polymorphism');
goog.require('koans.meditations.sets');
goog.require('koans.meditations.lists');
goog.require('koans.meditations.creating_functions');
goog.require('koans.meditations.lazy_sequences');
koans.meditations.meditations = cljs.core.PersistentHashMap.fromArrays(["creating-functions","partition","conditionals","destructuring","vectors","sets","lists","maps","lazy-sequences","equality","sequence-comprehensions","functions","runtime-polymorphism","higher-order-functions"],[koans.meditations.creating_functions.koans,koans.meditations.partition.koans,koans.meditations.conditionals.koans,koans.meditations.destructuring.koans,koans.meditations.vectors.koans,koans.meditations.sets.koans,koans.meditations.lists.koans,koans.meditations.maps.koans,koans.meditations.lazy_sequences.koans,koans.meditations.equality.koans,koans.meditations.sequence_comprehensions.koans,koans.meditations.functions.koans,koans.meditations.runtime_polymorphism.koans,koans.meditations.higher_order_functions.koans]);
koans.meditations.functions = cljs.core.PersistentArrayMap.fromArray(["functions",koans.meditations.functions.fns,"conditionals",koans.meditations.conditionals.fns,"runtime-polymorphism",koans.meditations.runtime_polymorphism.fns,"creating-functions",koans.meditations.creating_functions.fns,"destructuring",koans.meditations.destructuring.fns], true);

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
koans.meditations.Koan.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3684__auto__,k12553,else__3685__auto__){var self__ = this;
var this__3684__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12553,new cljs.core.Keyword(null,"description","description",3584325486)))
{return self__.description;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12553,new cljs.core.Keyword(null,"before","before",3915985649)))
{return self__.before;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12553,new cljs.core.Keyword(null,"after","after",1106639182)))
{return self__.after;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12553,else__3685__auto__);
} else
{return null;
}
}
}
}
});
koans.meditations.Koan.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3689__auto__,k__3690__auto__,G__12552){var self__ = this;
var this__3689__auto____$1 = this;var pred__12555 = cljs.core.keyword_identical_QMARK_;var expr__12556 = k__3690__auto__;if(pred__12555.call(null,new cljs.core.Keyword(null,"description","description",3584325486),expr__12556))
{return (new koans.meditations.Koan(G__12552,self__.before,self__.after,self__.__meta,self__.__extmap,null));
} else
{if(pred__12555.call(null,new cljs.core.Keyword(null,"before","before",3915985649),expr__12556))
{return (new koans.meditations.Koan(self__.description,G__12552,self__.after,self__.__meta,self__.__extmap,null));
} else
{if(pred__12555.call(null,new cljs.core.Keyword(null,"after","after",1106639182),expr__12556))
{return (new koans.meditations.Koan(self__.description,self__.before,G__12552,self__.__meta,self__.__extmap,null));
} else
{return (new koans.meditations.Koan(self__.description,self__.before,self__.after,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3690__auto__,G__12552),null));
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
koans.meditations.Koan.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3681__auto__,G__12552){var self__ = this;
var this__3681__auto____$1 = this;return (new koans.meditations.Koan(self__.description,self__.before,self__.after,G__12552,self__.__extmap,self__.__hash));
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
koans.meditations.map__GT_Koan = (function map__GT_Koan(G__12554){return (new koans.meditations.Koan(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(G__12554),new cljs.core.Keyword(null,"before","before",3915985649).cljs$core$IFn$_invoke$arity$1(G__12554),new cljs.core.Keyword(null,"after","after",1106639182).cljs$core$IFn$_invoke$arity$1(G__12554),null,cljs.core.dissoc.call(null,G__12554,new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"before","before",3915985649),new cljs.core.Keyword(null,"after","after",1106639182))));
});

/**
* @constructor
* @param {*} category
* @param {*} index
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
koans.meditations.KoanIndex = (function (category,index,__meta,__extmap){
this.category = category;
this.index = index;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
koans.meditations.KoanIndex.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3677__auto__){var self__ = this;
var this__3677__auto____$1 = this;var h__3532__auto__ = self__.__hash;if(!((h__3532__auto__ == null)))
{return h__3532__auto__;
} else
{var h__3532__auto____$1 = cljs.core.hash_imap.call(null,this__3677__auto____$1);self__.__hash = h__3532__auto____$1;
return h__3532__auto____$1;
}
});
koans.meditations.KoanIndex.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3682__auto__,k__3683__auto__){var self__ = this;
var this__3682__auto____$1 = this;return cljs.core._lookup.call(null,this__3682__auto____$1,k__3683__auto__,null);
});
koans.meditations.KoanIndex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3684__auto__,k12559,else__3685__auto__){var self__ = this;
var this__3684__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12559,new cljs.core.Keyword(null,"category","category",1064415344)))
{return self__.category;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12559,new cljs.core.Keyword(null,"index","index",1114250308)))
{return self__.index;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12559,else__3685__auto__);
} else
{return null;
}
}
}
});
koans.meditations.KoanIndex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3689__auto__,k__3690__auto__,G__12558){var self__ = this;
var this__3689__auto____$1 = this;var pred__12561 = cljs.core.keyword_identical_QMARK_;var expr__12562 = k__3690__auto__;if(pred__12561.call(null,new cljs.core.Keyword(null,"category","category",1064415344),expr__12562))
{return (new koans.meditations.KoanIndex(G__12558,self__.index,self__.__meta,self__.__extmap,null));
} else
{if(pred__12561.call(null,new cljs.core.Keyword(null,"index","index",1114250308),expr__12562))
{return (new koans.meditations.KoanIndex(self__.category,G__12558,self__.__meta,self__.__extmap,null));
} else
{return (new koans.meditations.KoanIndex(self__.category,self__.index,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3690__auto__,G__12558),null));
}
}
});
koans.meditations.KoanIndex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3696__auto__,writer__3697__auto__,opts__3698__auto__){var self__ = this;
var this__3696__auto____$1 = this;var pr_pair__3699__auto__ = (function (keyval__3700__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,cljs.core.pr_writer,""," ","",opts__3698__auto__,keyval__3700__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,pr_pair__3699__auto__,"#koans.meditations.KoanIndex{",", ","}",opts__3698__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"category","category",1064415344),self__.category),cljs.core.vector.call(null,new cljs.core.Keyword(null,"index","index",1114250308),self__.index)], true),self__.__extmap));
});
koans.meditations.KoanIndex.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3687__auto__,entry__3688__auto__){var self__ = this;
var this__3687__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3688__auto__))
{return cljs.core._assoc.call(null,this__3687__auto____$1,cljs.core._nth.call(null,entry__3688__auto__,0),cljs.core._nth.call(null,entry__3688__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3687__auto____$1,entry__3688__auto__);
}
});
koans.meditations.KoanIndex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3694__auto__){var self__ = this;
var this__3694__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"category","category",1064415344),self__.category),cljs.core.vector.call(null,new cljs.core.Keyword(null,"index","index",1114250308),self__.index)], true),self__.__extmap));
});
koans.meditations.KoanIndex.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3686__auto__){var self__ = this;
var this__3686__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
koans.meditations.KoanIndex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3678__auto__,other__3679__auto__){var self__ = this;
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
koans.meditations.KoanIndex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3681__auto__,G__12558){var self__ = this;
var this__3681__auto____$1 = this;return (new koans.meditations.KoanIndex(self__.category,self__.index,G__12558,self__.__extmap,self__.__hash));
});
koans.meditations.KoanIndex.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3680__auto__){var self__ = this;
var this__3680__auto____$1 = this;return self__.__meta;
});
koans.meditations.KoanIndex.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3691__auto__,k__3692__auto__){var self__ = this;
var this__3691__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"index","index",1114250308),null,new cljs.core.Keyword(null,"category","category",1064415344),null], true),k__3692__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3691__auto____$1),self__.__meta),k__3692__auto__);
} else
{return (new koans.meditations.KoanIndex(self__.category,self__.index,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3692__auto__)),null));
}
});
koans.meditations.KoanIndex.cljs$lang$type = true;
koans.meditations.KoanIndex.cljs$lang$ctorPrSeq = (function (this__3716__auto__){return cljs.core.list.call(null,"koans.meditations/KoanIndex");
});
koans.meditations.KoanIndex.cljs$lang$ctorPrWriter = (function (this__3716__auto__,writer__3717__auto__){return cljs.core._write.call(null,writer__3717__auto__,"koans.meditations/KoanIndex");
});
koans.meditations.__GT_KoanIndex = (function __GT_KoanIndex(category,index){return (new koans.meditations.KoanIndex(category,index));
});
koans.meditations.map__GT_KoanIndex = (function map__GT_KoanIndex(G__12560){return (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(G__12560),new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(G__12560),null,cljs.core.dissoc.call(null,G__12560,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"index","index",1114250308))));
});
koans.meditations.category_with_name = (function category_with_name(category){return cljs.core.partition.call(null,2,category.call(null,koans.meditations.meditations));
});
koans.meditations.has_koan_QMARK_ = (function has_koan_QMARK_(koan){return (new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan) < cljs.core.count.call(null,koans.meditations.category_with_name.call(null,new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan))));
});
koans.meditations.next_category = (function next_category(koan){var index = (koans.utils.index_of.call(null,new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan),cljs.core.keys.call(null,koans.meditations.meditations)) + 1);return cljs.core.nth.call(null,cljs.core.keys.call(null,koans.meditations.meditations),index);
});
koans.meditations.expr_to_string = (function expr_to_string(expr){if(typeof expr === 'string')
{return expr;
} else
{return clojure.string.replace.call(null,cljs.core.pr_str.call(null,expr),/\(quote (.*?)\)/,(function (p1__12565_SHARP_,p2__12564_SHARP_){return [cljs.core.str("'"),cljs.core.str(p2__12564_SHARP_)].join('');
}));
}
});
koans.meditations.next_koan_index = (function next_koan_index(koan){var next_in_category = (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan),(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan) + 1)));if(cljs.core.truth_(koans.meditations.has_koan_QMARK_.call(null,next_in_category)))
{return next_in_category;
} else
{return (new koans.meditations.KoanIndex(koans.meditations.next_category.call(null,koan),0));
}
});
koans.meditations.koan_for_index = (function koan_for_index(koan_index){var category = new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan_index);var category_list = koans.meditations.category_with_name.call(null,category);var item = (function (){try{return cljs.core.nth.call(null,category_list,new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan_index));
}catch (e12570){if((e12570 instanceof Object))
{var _ = e12570;return cljs.core.first.call(null,category_list);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12570;
} else
{return null;
}
}
}})();var description = cljs.core.first.call(null,item);var full_text = koans.meditations.expr_to_string.call(null,cljs.core.last.call(null,item));var vec__12569 = clojure.string.split.call(null,full_text,/:__/);var before = cljs.core.nth.call(null,vec__12569,0,null);var after = cljs.core.nth.call(null,vec__12569,1,null);cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12566_SHARP_){return koans.repl.eval.call(null,cljs.core.pr_str.call(null,p1__12566_SHARP_));
}),category.call(null,koans.meditations.functions)));
return (new koans.meditations.Koan(description,before,after));
});
