// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.meditations');
goog.require('cljs.core');
goog.require('koans.meditations.destructuring');
goog.require('koans.meditations.creating_functions');
goog.require('koans.meditations.partition');
goog.require('koans.meditations.conditionals');
goog.require('koans.meditations.sequence_comprehensions');
goog.require('koans.meditations.sets');
goog.require('koans.meditations.higher_order_functions');
goog.require('koans.meditations.vectors');
goog.require('koans.meditations.equality');
goog.require('koans.meditations.atoms');
goog.require('koans.meditations.datatypes');
goog.require('koans.meditations.lists');
goog.require('koans.meditations.functions');
goog.require('koans.meditations.lazy_sequences');
goog.require('koans.utils');
goog.require('koans.meditations.runtime_polymorphism');
goog.require('koans.meditations.maps');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
koans.meditations.Koan = (function (description,code_parts,fn_strings,__meta,__extmap,__hash){
this.description = description;
this.code_parts = code_parts;
this.fn_strings = fn_strings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
koans.meditations.Koan.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.call(null,this__6756__auto____$1,k__6757__auto__,null);
});

koans.meditations.Koan.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k13151,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__13153 = (((k13151 instanceof cljs.core.Keyword))?k13151.fqn:null);
switch (G__13153) {
case "description":
return self__.description;

break;
case "code-parts":
return self__.code_parts;

break;
case "fn-strings":
return self__.fn_strings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13151,else__6759__auto__);

}
});

koans.meditations.Koan.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6771__auto__,pr_pair__6773__auto__,"#koans.meditations.Koan{",", ","}",opts__6772__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127),self__.code_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829),self__.fn_strings],null))], null),self__.__extmap));
});

koans.meditations.Koan.prototype.cljs$core$IIterable$ = true;

koans.meditations.Koan.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13150){
var self__ = this;
var G__13150__$1 = this;
return (new cljs.core.RecordIter((0),G__13150__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127),new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

koans.meditations.Koan.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

koans.meditations.Koan.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new koans.meditations.Koan(self__.description,self__.code_parts,self__.fn_strings,self__.__meta,self__.__extmap,self__.__hash));
});

koans.meditations.Koan.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

koans.meditations.Koan.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap.call(null,this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

koans.meditations.Koan.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map.call(null,this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

koans.meditations.Koan.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127),null,new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829),null], null), null),k__6766__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new koans.meditations.Koan(self__.description,self__.code_parts,self__.fn_strings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6766__auto__)),null));
}
});

koans.meditations.Koan.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__13150){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__13154 = cljs.core.keyword_identical_QMARK_;
var expr__13155 = k__6764__auto__;
if(cljs.core.truth_(pred__13154.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__13155))){
return (new koans.meditations.Koan(G__13150,self__.code_parts,self__.fn_strings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13154.call(null,new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127),expr__13155))){
return (new koans.meditations.Koan(self__.description,G__13150,self__.fn_strings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13154.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829),expr__13155))){
return (new koans.meditations.Koan(self__.description,self__.code_parts,G__13150,self__.__meta,self__.__extmap,null));
} else {
return (new koans.meditations.Koan(self__.description,self__.code_parts,self__.fn_strings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6764__auto__,G__13150),null));
}
}
}
});

koans.meditations.Koan.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127),self__.code_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829),self__.fn_strings],null))], null),self__.__extmap));
});

koans.meditations.Koan.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__13150){
var self__ = this;
var this__6755__auto____$1 = this;
return (new koans.meditations.Koan(self__.description,self__.code_parts,self__.fn_strings,G__13150,self__.__extmap,self__.__hash));
});

koans.meditations.Koan.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6762__auto__)){
return cljs.core._assoc.call(null,this__6761__auto____$1,cljs.core._nth.call(null,entry__6762__auto__,(0)),cljs.core._nth.call(null,entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

koans.meditations.Koan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"code-parts","code-parts",234577400,null),new cljs.core.Symbol(null,"fn-strings","fn-strings",2098823356,null)], null);
});

koans.meditations.Koan.cljs$lang$type = true;

koans.meditations.Koan.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"koans.meditations/Koan");
});

koans.meditations.Koan.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write.call(null,writer__6791__auto__,"koans.meditations/Koan");
});

koans.meditations.__GT_Koan = (function koans$meditations$__GT_Koan(description,code_parts,fn_strings){
return (new koans.meditations.Koan(description,code_parts,fn_strings,null,null,null));
});

koans.meditations.map__GT_Koan = (function koans$meditations$map__GT_Koan(G__13152){
return (new koans.meditations.Koan(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__13152),new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127).cljs$core$IFn$_invoke$arity$1(G__13152),new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829).cljs$core$IFn$_invoke$arity$1(G__13152),null,cljs.core.dissoc.call(null,G__13152,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"code-parts","code-parts",-1405954127),new cljs.core.Keyword(null,"fn-strings","fn-strings",458291829)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
koans.meditations.KoanIndex = (function (category,index,__meta,__extmap,__hash){
this.category = category;
this.index = index;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
koans.meditations.KoanIndex.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.call(null,this__6756__auto____$1,k__6757__auto__,null);
});

koans.meditations.KoanIndex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k13159,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__13161 = (((k13159 instanceof cljs.core.Keyword))?k13159.fqn:null);
switch (G__13161) {
case "category":
return self__.category;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13159,else__6759__auto__);

}
});

koans.meditations.KoanIndex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6771__auto__,pr_pair__6773__auto__,"#koans.meditations.KoanIndex{",", ","}",opts__6772__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",-593092832),self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null))], null),self__.__extmap));
});

koans.meditations.KoanIndex.prototype.cljs$core$IIterable$ = true;

koans.meditations.KoanIndex.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13158){
var self__ = this;
var G__13158__$1 = this;
return (new cljs.core.RecordIter((0),G__13158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

koans.meditations.KoanIndex.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

koans.meditations.KoanIndex.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new koans.meditations.KoanIndex(self__.category,self__.index,self__.__meta,self__.__extmap,self__.__hash));
});

koans.meditations.KoanIndex.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

koans.meditations.KoanIndex.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap.call(null,this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

koans.meditations.KoanIndex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map.call(null,this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

koans.meditations.KoanIndex.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"index","index",-1531685915),null], null), null),k__6766__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new koans.meditations.KoanIndex(self__.category,self__.index,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6766__auto__)),null));
}
});

koans.meditations.KoanIndex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__13158){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__13162 = cljs.core.keyword_identical_QMARK_;
var expr__13163 = k__6764__auto__;
if(cljs.core.truth_(pred__13162.call(null,new cljs.core.Keyword(null,"category","category",-593092832),expr__13163))){
return (new koans.meditations.KoanIndex(G__13158,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13162.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__13163))){
return (new koans.meditations.KoanIndex(self__.category,G__13158,self__.__meta,self__.__extmap,null));
} else {
return (new koans.meditations.KoanIndex(self__.category,self__.index,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6764__auto__,G__13158),null));
}
}
});

koans.meditations.KoanIndex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",-593092832),self__.category],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null))], null),self__.__extmap));
});

koans.meditations.KoanIndex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__13158){
var self__ = this;
var this__6755__auto____$1 = this;
return (new koans.meditations.KoanIndex(self__.category,self__.index,G__13158,self__.__extmap,self__.__hash));
});

koans.meditations.KoanIndex.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6762__auto__)){
return cljs.core._assoc.call(null,this__6761__auto____$1,cljs.core._nth.call(null,entry__6762__auto__,(0)),cljs.core._nth.call(null,entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

koans.meditations.KoanIndex.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"category","category",1047438695,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null);
});

koans.meditations.KoanIndex.cljs$lang$type = true;

koans.meditations.KoanIndex.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"koans.meditations/KoanIndex");
});

koans.meditations.KoanIndex.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write.call(null,writer__6791__auto__,"koans.meditations/KoanIndex");
});

koans.meditations.__GT_KoanIndex = (function koans$meditations$__GT_KoanIndex(category,index){
return (new koans.meditations.KoanIndex(category,index,null,null,null));
});

koans.meditations.map__GT_KoanIndex = (function koans$meditations$map__GT_KoanIndex(G__13160){
return (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(G__13160),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__13160),null,cljs.core.dissoc.call(null,G__13160,new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"index","index",-1531685915)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
koans.meditations.Category = (function (name,koans,fns,__meta,__extmap,__hash){
this.name = name;
this.koans = koans;
this.fns = fns;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
koans.meditations.Category.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6756__auto__,k__6757__auto__){
var self__ = this;
var this__6756__auto____$1 = this;
return cljs.core._lookup.call(null,this__6756__auto____$1,k__6757__auto__,null);
});

koans.meditations.Category.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6758__auto__,k13167,else__6759__auto__){
var self__ = this;
var this__6758__auto____$1 = this;
var G__13169 = (((k13167 instanceof cljs.core.Keyword))?k13167.fqn:null);
switch (G__13169) {
case "name":
return self__.name;

break;
case "koans":
return self__.koans;

break;
case "fns":
return self__.fns;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13167,else__6759__auto__);

}
});

koans.meditations.Category.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6770__auto__,writer__6771__auto__,opts__6772__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
var pr_pair__6773__auto__ = ((function (this__6770__auto____$1){
return (function (keyval__6774__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6771__auto__,cljs.core.pr_writer,""," ","",opts__6772__auto__,keyval__6774__auto__);
});})(this__6770__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6771__auto__,pr_pair__6773__auto__,"#koans.meditations.Category{",", ","}",opts__6772__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"koans","koans",-1278507730),self__.koans],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fns","fns",1185138786),self__.fns],null))], null),self__.__extmap));
});

koans.meditations.Category.prototype.cljs$core$IIterable$ = true;

koans.meditations.Category.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13166){
var self__ = this;
var G__13166__$1 = this;
return (new cljs.core.RecordIter((0),G__13166__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"koans","koans",-1278507730),new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

koans.meditations.Category.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6754__auto__){
var self__ = this;
var this__6754__auto____$1 = this;
return self__.__meta;
});

koans.meditations.Category.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,self__.__meta,self__.__extmap,self__.__hash));
});

koans.meditations.Category.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6760__auto__){
var self__ = this;
var this__6760__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

koans.meditations.Category.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6751__auto__){
var self__ = this;
var this__6751__auto____$1 = this;
var h__6577__auto__ = self__.__hash;
if(!((h__6577__auto__ == null))){
return h__6577__auto__;
} else {
var h__6577__auto____$1 = cljs.core.hash_imap.call(null,this__6751__auto____$1);
self__.__hash = h__6577__auto____$1;

return h__6577__auto____$1;
}
});

koans.meditations.Category.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6752__auto__,other__6753__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6130__auto__ = other__6753__auto__;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = (this__6752__auto____$1.constructor === other__6753__auto__.constructor);
if(and__6130__auto____$1){
return cljs.core.equiv_map.call(null,this__6752__auto____$1,other__6753__auto__);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return true;
} else {
return false;
}
});

koans.meditations.Category.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6765__auto__,k__6766__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fns","fns",1185138786),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"koans","koans",-1278507730),null], null), null),k__6766__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6765__auto____$1),self__.__meta),k__6766__auto__);
} else {
return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6766__auto__)),null));
}
});

koans.meditations.Category.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6763__auto__,k__6764__auto__,G__13166){
var self__ = this;
var this__6763__auto____$1 = this;
var pred__13170 = cljs.core.keyword_identical_QMARK_;
var expr__13171 = k__6764__auto__;
if(cljs.core.truth_(pred__13170.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__13171))){
return (new koans.meditations.Category(G__13166,self__.koans,self__.fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13170.call(null,new cljs.core.Keyword(null,"koans","koans",-1278507730),expr__13171))){
return (new koans.meditations.Category(self__.name,G__13166,self__.fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13170.call(null,new cljs.core.Keyword(null,"fns","fns",1185138786),expr__13171))){
return (new koans.meditations.Category(self__.name,self__.koans,G__13166,self__.__meta,self__.__extmap,null));
} else {
return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6764__auto__,G__13166),null));
}
}
}
});

koans.meditations.Category.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"koans","koans",-1278507730),self__.koans],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fns","fns",1185138786),self__.fns],null))], null),self__.__extmap));
});

koans.meditations.Category.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6755__auto__,G__13166){
var self__ = this;
var this__6755__auto____$1 = this;
return (new koans.meditations.Category(self__.name,self__.koans,self__.fns,G__13166,self__.__extmap,self__.__hash));
});

koans.meditations.Category.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6761__auto__,entry__6762__auto__){
var self__ = this;
var this__6761__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6762__auto__)){
return cljs.core._assoc.call(null,this__6761__auto____$1,cljs.core._nth.call(null,entry__6762__auto__,(0)),cljs.core._nth.call(null,entry__6762__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6761__auto____$1,entry__6762__auto__);
}
});

koans.meditations.Category.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"koans","koans",362023797,null),new cljs.core.Symbol(null,"fns","fns",-1469296983,null)], null);
});

koans.meditations.Category.cljs$lang$type = true;

koans.meditations.Category.cljs$lang$ctorPrSeq = (function (this__6790__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"koans.meditations/Category");
});

koans.meditations.Category.cljs$lang$ctorPrWriter = (function (this__6790__auto__,writer__6791__auto__){
return cljs.core._write.call(null,writer__6791__auto__,"koans.meditations/Category");
});

koans.meditations.__GT_Category = (function koans$meditations$__GT_Category(name,koans__$1,fns){
return (new koans.meditations.Category(name,koans__$1,fns,null,null,null));
});

koans.meditations.map__GT_Category = (function koans$meditations$map__GT_Category(G__13168){
return (new koans.meditations.Category(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__13168),new cljs.core.Keyword(null,"koans","koans",-1278507730).cljs$core$IFn$_invoke$arity$1(G__13168),new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(G__13168),null,cljs.core.dissoc.call(null,G__13168,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"koans","koans",-1278507730),new cljs.core.Keyword(null,"fns","fns",1185138786)),null));
});

koans.meditations.categories = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new koans.meditations.Category("equality",koans.meditations.equality.koans,null,null,null)),(new koans.meditations.Category("lists",koans.meditations.lists.koans,null,null,null)),(new koans.meditations.Category("vectors",koans.meditations.vectors.koans,null,null,null)),(new koans.meditations.Category("sets",koans.meditations.sets.koans,null,null,null)),(new koans.meditations.Category("maps",koans.meditations.maps.koans,null,null,null)),(new koans.meditations.Category("functions",koans.meditations.functions.koans,koans.meditations.functions.fns,null,null,null)),(new koans.meditations.Category("conditionals",koans.meditations.conditionals.koans,koans.meditations.conditionals.fns,null,null,null)),(new koans.meditations.Category("higher-order-functions",koans.meditations.higher_order_functions.koans,null,null,null)),(new koans.meditations.Category("runtime-polymorphism",koans.meditations.runtime_polymorphism.koans,koans.meditations.runtime_polymorphism.fns,null,null,null)),(new koans.meditations.Category("lazy-sequences",koans.meditations.lazy_sequences.koans,null,null,null)),(new koans.meditations.Category("sequence-comprehensions",koans.meditations.sequence_comprehensions.koans,null,null,null)),(new koans.meditations.Category("creating-functions",koans.meditations.creating_functions.koans,koans.meditations.creating_functions.fns,null,null,null)),(new koans.meditations.Category("destructuring",koans.meditations.destructuring.koans,koans.meditations.destructuring.fns,null,null,null)),(new koans.meditations.Category("atoms",koans.meditations.atoms.koans,koans.meditations.atoms.fns,null,null,null)),(new koans.meditations.Category("partition",koans.meditations.partition.koans,null,null,null)),(new koans.meditations.Category("complete",cljs.core.list(new cljs.core.Keyword(null,"the","the",1825912652),new cljs.core.Keyword(null,"end","end",-268185958)),null,null,null))], null);
koans.meditations.category_from_koan_index = (function koans$meditations$category_from_koan_index(koan_index){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__13174_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__13174_SHARP_),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(koan_index));
}),koans.meditations.categories));
});
koans.meditations.koan_exists_QMARK_ = (function koans$meditations$koan_exists_QMARK_(koan_index){
return (new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(koan_index) < cljs.core.count.call(null,cljs.core.partition.call(null,(2),new cljs.core.Keyword(null,"koans","koans",-1278507730).cljs$core$IFn$_invoke$arity$1(koans.meditations.category_from_koan_index.call(null,koan_index)))));
});
koans.meditations.next_category = (function koans$meditations$next_category(koan_index){
var index = (koans.utils.index_of.call(null,koans.meditations.category_from_koan_index.call(null,koan_index),koans.meditations.categories) + (1));
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,koans.meditations.categories,index));
});
koans.meditations.expr_to_string = (function koans$meditations$expr_to_string(expr){
if(typeof expr === 'string'){
return expr;
} else {
return clojure.string.replace.call(null,cljs.core.pr_str.call(null,expr),/\(quote (.*?)\)/,(function (p1__13175_SHARP_){
return [cljs.core.str("'"),cljs.core.str(p1__13175_SHARP_.call(null,(1)))].join('');
}));
}
});
koans.meditations.next_koan_index = (function koans$meditations$next_koan_index(koan){
var next_in_category = (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(koan),(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(koan) + (1)),null,null,null));
if(cljs.core.truth_(koans.meditations.koan_exists_QMARK_.call(null,next_in_category))){
return next_in_category;
} else {
if((koans.meditations.category_from_koan_index.call(null,koan) == null)){
return (new koans.meditations.KoanIndex("equality",(0),null,null,null));
} else {
if(cljs.core.truth_(isNaN(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_in_category)))){
return (new koans.meditations.KoanIndex(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(koan),(0),null,null,null));
} else {
return (new koans.meditations.KoanIndex(koans.meditations.next_category.call(null,koan),(0),null,null,null));

}
}
}
});
koans.meditations.expr_to_array = (function koans$meditations$expr_to_array(expr){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__13183,c){
var map__13184 = p__13183;
var map__13184__$1 = ((((!((map__13184 == null)))?((((map__13184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13184):map__13184);
var index = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var result = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var change = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var pred__13186 = cljs.core._EQ_;
var expr__13187 = c;
if(cljs.core.truth_(pred__13186.call(null,"(",expr__13187))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)),new cljs.core.Keyword(null,"change","change",-1163046502),true,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.conj.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,index], null))], null);
} else {
if(cljs.core.truth_(pred__13186.call(null,")",expr__13187))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(index - (1)),new cljs.core.Keyword(null,"change","change",-1163046502),true,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.conj.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(index - (1))], null))], null);
} else {
if(cljs.core.truth_(pred__13186.call(null,"$",expr__13187))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"change","change",-1163046502),true,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.conj.call(null,result,new cljs.core.Keyword(null,"input","input",556931961))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.truth_(change)?cljs.core.conj.call(null,result,c):cljs.core.update.call(null,result,(cljs.core.count.call(null,result) - (1)),((function (pred__13186,expr__13187,map__13184,map__13184__$1,index,result,change){
return (function (p1__13176_SHARP_){
return [cljs.core.str(p1__13176_SHARP_),cljs.core.str(c)].join('');
});})(pred__13186,expr__13187,map__13184,map__13184__$1,index,result,change))
)),new cljs.core.Keyword(null,"change","change",-1163046502),false], null);
}
}
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"change","change",-1163046502),false,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.PersistentVector.EMPTY], null),clojure.string.replace.call(null,koans.meditations.expr_to_string.call(null,expr),/:__/,"$")));
});
koans.meditations.koan_for_index = (function koans$meditations$koan_for_index(koan_index){
var category = koans.meditations.category_from_koan_index.call(null,koan_index);
var category_list = cljs.core.partition.call(null,(2),new cljs.core.Keyword(null,"koans","koans",-1278507730).cljs$core$IFn$_invoke$arity$1(category));
var item = (function (){try{return cljs.core.nth.call(null,category_list,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(koan_index));
}catch (e13190){if((e13190 instanceof Object)){
var _ = e13190;
return cljs.core.first.call(null,category_list);
} else {
throw e13190;

}
}})();
var description = cljs.core.first.call(null,item);
var code_parts = koans.meditations.expr_to_array.call(null,cljs.core.last.call(null,item));
var fn_strings = cljs.core.map.call(null,koans.meditations.expr_to_array,new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(category));
return (new koans.meditations.Koan(description,code_parts,fn_strings,null,null,null));
});

//# sourceMappingURL=meditations.js.map