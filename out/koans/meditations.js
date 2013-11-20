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

/**
* @constructor
* @param {*} description
* @param {*} code_strings
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
koans.meditations.Koan = (function (description,code_strings,__meta,__extmap){
this.description = description;
this.code_strings = code_strings;
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
koans.meditations.Koan.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3684__auto__,k12715,else__3685__auto__){var self__ = this;
var this__3684__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12715,new cljs.core.Keyword(null,"description","description",3584325486)))
{return self__.description;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12715,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892)))
{return self__.code_strings;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12715,else__3685__auto__);
} else
{return null;
}
}
}
});
koans.meditations.Koan.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3689__auto__,k__3690__auto__,G__12714){var self__ = this;
var this__3689__auto____$1 = this;var pred__12717 = cljs.core.keyword_identical_QMARK_;var expr__12718 = k__3690__auto__;if(pred__12717.call(null,new cljs.core.Keyword(null,"description","description",3584325486),expr__12718))
{return (new koans.meditations.Koan(G__12714,self__.code_strings,self__.__meta,self__.__extmap,null));
} else
{if(pred__12717.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892),expr__12718))
{return (new koans.meditations.Koan(self__.description,G__12714,self__.__meta,self__.__extmap,null));
} else
{return (new koans.meditations.Koan(self__.description,self__.code_strings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3690__auto__,G__12714),null));
}
}
});
koans.meditations.Koan.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3696__auto__,writer__3697__auto__,opts__3698__auto__){var self__ = this;
var this__3696__auto____$1 = this;var pr_pair__3699__auto__ = (function (keyval__3700__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,cljs.core.pr_writer,""," ","",opts__3698__auto__,keyval__3700__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,pr_pair__3699__auto__,"#koans.meditations.Koan{",", ","}",opts__3698__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"description","description",3584325486),self__.description),cljs.core.vector.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892),self__.code_strings)], true),self__.__extmap));
});
koans.meditations.Koan.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3687__auto__,entry__3688__auto__){var self__ = this;
var this__3687__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3688__auto__))
{return cljs.core._assoc.call(null,this__3687__auto____$1,cljs.core._nth.call(null,entry__3688__auto__,0),cljs.core._nth.call(null,entry__3688__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3687__auto____$1,entry__3688__auto__);
}
});
koans.meditations.Koan.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3694__auto__){var self__ = this;
var this__3694__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"description","description",3584325486),self__.description),cljs.core.vector.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892),self__.code_strings)], true),self__.__extmap));
});
koans.meditations.Koan.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3686__auto__){var self__ = this;
var this__3686__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
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
koans.meditations.Koan.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3681__auto__,G__12714){var self__ = this;
var this__3681__auto____$1 = this;return (new koans.meditations.Koan(self__.description,self__.code_strings,G__12714,self__.__extmap,self__.__hash));
});
koans.meditations.Koan.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3680__auto__){var self__ = this;
var this__3680__auto____$1 = this;return self__.__meta;
});
koans.meditations.Koan.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3691__auto__,k__3692__auto__){var self__ = this;
var this__3691__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"code-strings","code-strings",2204559892),null,new cljs.core.Keyword(null,"description","description",3584325486),null], true),k__3692__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3691__auto____$1),self__.__meta),k__3692__auto__);
} else
{return (new koans.meditations.Koan(self__.description,self__.code_strings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3692__auto__)),null));
}
});
koans.meditations.Koan.cljs$lang$type = true;
koans.meditations.Koan.cljs$lang$ctorPrSeq = (function (this__3716__auto__){return cljs.core.list.call(null,"koans.meditations/Koan");
});
koans.meditations.Koan.cljs$lang$ctorPrWriter = (function (this__3716__auto__,writer__3717__auto__){return cljs.core._write.call(null,writer__3717__auto__,"koans.meditations/Koan");
});
koans.meditations.__GT_Koan = (function __GT_Koan(description,code_strings){return (new koans.meditations.Koan(description,code_strings));
});
koans.meditations.map__GT_Koan = (function map__GT_Koan(G__12716){return (new koans.meditations.Koan(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(G__12716),new cljs.core.Keyword(null,"code-strings","code-strings",2204559892).cljs$core$IFn$_invoke$arity$1(G__12716),null,cljs.core.dissoc.call(null,G__12716,new cljs.core.Keyword(null,"description","description",3584325486),new cljs.core.Keyword(null,"code-strings","code-strings",2204559892))));
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
koans.meditations.KoanIndex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3684__auto__,k12721,else__3685__auto__){var self__ = this;
var this__3684__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12721,new cljs.core.Keyword(null,"category","category",1064415344)))
{return self__.category;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12721,new cljs.core.Keyword(null,"index","index",1114250308)))
{return self__.index;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12721,else__3685__auto__);
} else
{return null;
}
}
}
});
koans.meditations.KoanIndex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3689__auto__,k__3690__auto__,G__12720){var self__ = this;
var this__3689__auto____$1 = this;var pred__12723 = cljs.core.keyword_identical_QMARK_;var expr__12724 = k__3690__auto__;if(pred__12723.call(null,new cljs.core.Keyword(null,"category","category",1064415344),expr__12724))
{return (new koans.meditations.KoanIndex(G__12720,self__.index,self__.__meta,self__.__extmap,null));
} else
{if(pred__12723.call(null,new cljs.core.Keyword(null,"index","index",1114250308),expr__12724))
{return (new koans.meditations.KoanIndex(self__.category,G__12720,self__.__meta,self__.__extmap,null));
} else
{return (new koans.meditations.KoanIndex(self__.category,self__.index,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3690__auto__,G__12720),null));
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
koans.meditations.KoanIndex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3681__auto__,G__12720){var self__ = this;
var this__3681__auto____$1 = this;return (new koans.meditations.KoanIndex(self__.category,self__.index,G__12720,self__.__extmap,self__.__hash));
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
koans.meditations.map__GT_KoanIndex = (function map__GT_KoanIndex(G__12722){return (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(G__12722),new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(G__12722),null,cljs.core.dissoc.call(null,G__12722,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"index","index",1114250308))));
});

/**
* @constructor
* @param {*} name
* @param {*} koans
* @param {*} fns
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
koans.meditations.Category = (function (name,koans,fns,__meta,__extmap){
this.name = name;
this.koans = koans;
this.fns = fns;
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
koans.meditations.Category.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3677__auto__){var self__ = this;
var this__3677__auto____$1 = this;var h__3532__auto__ = self__.__hash;if(!((h__3532__auto__ == null)))
{return h__3532__auto__;
} else
{var h__3532__auto____$1 = cljs.core.hash_imap.call(null,this__3677__auto____$1);self__.__hash = h__3532__auto____$1;
return h__3532__auto____$1;
}
});
koans.meditations.Category.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3682__auto__,k__3683__auto__){var self__ = this;
var this__3682__auto____$1 = this;return cljs.core._lookup.call(null,this__3682__auto____$1,k__3683__auto__,null);
});
koans.meditations.Category.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3684__auto__,k12727,else__3685__auto__){var self__ = this;
var this__3684__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12727,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12727,new cljs.core.Keyword(null,"koans","koans",1116124532)))
{return self__.koans;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12727,new cljs.core.Keyword(null,"fns","fns",1014005789)))
{return self__.fns;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12727,else__3685__auto__);
} else
{return null;
}
}
}
}
});
koans.meditations.Category.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3689__auto__,k__3690__auto__,G__12726){var self__ = this;
var this__3689__auto____$1 = this;var pred__12729 = cljs.core.keyword_identical_QMARK_;var expr__12730 = k__3690__auto__;if(pred__12729.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__12730))
{return (new koans.meditations.Category(G__12726,self__.koans,self__.fns,self__.__meta,self__.__extmap,null));
} else
{if(pred__12729.call(null,new cljs.core.Keyword(null,"koans","koans",1116124532),expr__12730))
{return (new koans.meditations.Category(self__.name,G__12726,self__.fns,self__.__meta,self__.__extmap,null));
} else
{if(pred__12729.call(null,new cljs.core.Keyword(null,"fns","fns",1014005789),expr__12730))
{return (new koans.meditations.Category(self__.name,self__.koans,G__12726,self__.__meta,self__.__extmap,null));
} else
{return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3690__auto__,G__12726),null));
}
}
}
});
koans.meditations.Category.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3696__auto__,writer__3697__auto__,opts__3698__auto__){var self__ = this;
var this__3696__auto____$1 = this;var pr_pair__3699__auto__ = (function (keyval__3700__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,cljs.core.pr_writer,""," ","",opts__3698__auto__,keyval__3700__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3697__auto__,pr_pair__3699__auto__,"#koans.meditations.Category{",", ","}",opts__3698__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"name","name",1017277949),self__.name),cljs.core.vector.call(null,new cljs.core.Keyword(null,"koans","koans",1116124532),self__.koans),cljs.core.vector.call(null,new cljs.core.Keyword(null,"fns","fns",1014005789),self__.fns)], true),self__.__extmap));
});
koans.meditations.Category.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3687__auto__,entry__3688__auto__){var self__ = this;
var this__3687__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3688__auto__))
{return cljs.core._assoc.call(null,this__3687__auto____$1,cljs.core._nth.call(null,entry__3688__auto__,0),cljs.core._nth.call(null,entry__3688__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3687__auto____$1,entry__3688__auto__);
}
});
koans.meditations.Category.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3694__auto__){var self__ = this;
var this__3694__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"name","name",1017277949),self__.name),cljs.core.vector.call(null,new cljs.core.Keyword(null,"koans","koans",1116124532),self__.koans),cljs.core.vector.call(null,new cljs.core.Keyword(null,"fns","fns",1014005789),self__.fns)], true),self__.__extmap));
});
koans.meditations.Category.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3686__auto__){var self__ = this;
var this__3686__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
koans.meditations.Category.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3678__auto__,other__3679__auto__){var self__ = this;
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
koans.meditations.Category.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3681__auto__,G__12726){var self__ = this;
var this__3681__auto____$1 = this;return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,G__12726,self__.__extmap,self__.__hash));
});
koans.meditations.Category.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3680__auto__){var self__ = this;
var this__3680__auto____$1 = this;return self__.__meta;
});
koans.meditations.Category.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3691__auto__,k__3692__auto__){var self__ = this;
var this__3691__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"fns","fns",1014005789),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"koans","koans",1116124532),null], true),k__3692__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3691__auto____$1),self__.__meta),k__3692__auto__);
} else
{return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3692__auto__)),null));
}
});
koans.meditations.Category.cljs$lang$type = true;
koans.meditations.Category.cljs$lang$ctorPrSeq = (function (this__3716__auto__){return cljs.core.list.call(null,"koans.meditations/Category");
});
koans.meditations.Category.cljs$lang$ctorPrWriter = (function (this__3716__auto__,writer__3717__auto__){return cljs.core._write.call(null,writer__3717__auto__,"koans.meditations/Category");
});
koans.meditations.__GT_Category = (function __GT_Category(name,koans__$1,fns){return (new koans.meditations.Category(name,koans__$1,fns));
});
koans.meditations.map__GT_Category = (function map__GT_Category(G__12728){return (new koans.meditations.Category(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__12728),new cljs.core.Keyword(null,"koans","koans",1116124532).cljs$core$IFn$_invoke$arity$1(G__12728),new cljs.core.Keyword(null,"fns","fns",1014005789).cljs$core$IFn$_invoke$arity$1(G__12728),null,cljs.core.dissoc.call(null,G__12728,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"koans","koans",1116124532),new cljs.core.Keyword(null,"fns","fns",1014005789))));
});
koans.meditations.categories = cljs.core.PersistentVector.fromArray([(new koans.meditations.Category("equality",koans.meditations.equality.koans)),(new koans.meditations.Category("lists",koans.meditations.lists.koans)),(new koans.meditations.Category("vectors",koans.meditations.vectors.koans)),(new koans.meditations.Category("sets",koans.meditations.sets.koans)),(new koans.meditations.Category("maps",koans.meditations.maps.koans)),(new koans.meditations.Category("functions",koans.meditations.functions.koans,koans.meditations.functions.fns)),(new koans.meditations.Category("conditionals",koans.meditations.conditionals.koans,koans.meditations.conditionals.fns)),(new koans.meditations.Category("higher-order-functions",koans.meditations.higher_order_functions.koans)),(new koans.meditations.Category("runtime-polymorphism",koans.meditations.runtime_polymorphism.koans,koans.meditations.runtime_polymorphism.fns)),(new koans.meditations.Category("lazy-sequences",koans.meditations.lazy_sequences.koans)),(new koans.meditations.Category("sequence-comprehensions",koans.meditations.sequence_comprehensions.koans)),(new koans.meditations.Category("creating-functions",koans.meditations.creating_functions.koans,koans.meditations.creating_functions.fns)),(new koans.meditations.Category("destructuring",koans.meditations.destructuring.koans,koans.meditations.destructuring.fns)),(new koans.meditations.Category("atoms",koans.meditations.atoms.koans,koans.meditations.atoms.fns)),(new koans.meditations.Category("partition",koans.meditations.partition.koans))], true);
koans.meditations.category_from_koan_index = (function category_from_koan_index(koan_index){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12732_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__12732_SHARP_),new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan_index));
}),koans.meditations.categories));
});
koans.meditations.koan_exists_QMARK_ = (function koan_exists_QMARK_(koan_index){return (new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan_index) < cljs.core.count.call(null,cljs.core.partition.call(null,2,new cljs.core.Keyword(null,"koans","koans",1116124532).cljs$core$IFn$_invoke$arity$1(koans.meditations.category_from_koan_index.call(null,koan_index)))));
});
koans.meditations.next_category = (function next_category(koan_index){var index = (koans.utils.index_of.call(null,koans.meditations.category_from_koan_index.call(null,koan_index),koans.meditations.categories) + 1);return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,koans.meditations.categories,index));
});
koans.meditations.expr_to_string = (function expr_to_string(expr){if(typeof expr === 'string')
{return expr;
} else
{return clojure.string.replace.call(null,cljs.core.pr_str.call(null,expr),/\(quote (.*?)\)/,(function (p1__12734_SHARP_,p2__12733_SHARP_){return [cljs.core.str("'"),cljs.core.str(p2__12733_SHARP_)].join('');
}));
}
});
koans.meditations.next_koan_index = (function next_koan_index(koan){var next_in_category = (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan),(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan) + 1)));if(cljs.core.truth_(koans.meditations.koan_exists_QMARK_.call(null,next_in_category)))
{return next_in_category;
} else
{if((koans.meditations.category_from_koan_index.call(null,koan) == null))
{return (new koans.meditations.KoanIndex("equality",0));
} else
{if(cljs.core.truth_(isNaN(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(next_in_category))))
{return (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan),0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new koans.meditations.KoanIndex(koans.meditations.next_category.call(null,koan),0));
} else
{return null;
}
}
}
}
});
koans.meditations.expr_to_array = (function expr_to_array(expr){koans.meditations.full_text = koans.meditations.expr_to_string.call(null,expr);
koans.meditations.splitted = clojure.string.split.call(null,koans.meditations.full_text,/:__/);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (text){if(cljs.core._EQ_.call(null,text,cljs.core.last.call(null,koans.meditations.splitted)))
{return cljs.core.PersistentVector.fromArray([text], true);
} else
{return cljs.core.PersistentVector.fromArray([text,"INPUT"], true);
}
}),koans.meditations.splitted));
});
koans.meditations.koan_for_index = (function koan_for_index(koan_index){var category = koans.meditations.category_from_koan_index.call(null,koan_index);var category_list = cljs.core.partition.call(null,2,new cljs.core.Keyword(null,"koans","koans",1116124532).cljs$core$IFn$_invoke$arity$1(category));var item = (function (){try{return cljs.core.nth.call(null,category_list,new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan_index));
}catch (e12737){if((e12737 instanceof Object))
{var _ = e12737;return cljs.core.first.call(null,category_list);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12737;
} else
{return null;
}
}
}})();var description = cljs.core.first.call(null,item);var code_strings = koans.meditations.expr_to_array.call(null,cljs.core.last.call(null,item));cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__12735_SHARP_){return koans.repl.eval.call(null,cljs.core.pr_str.call(null,p1__12735_SHARP_));
}),new cljs.core.Keyword(null,"fns","fns",1014005789).cljs$core$IFn$_invoke$arity$1(category)));
return (new koans.meditations.Koan(description,code_strings));
});

//# sourceMappingURL=meditations.js.map