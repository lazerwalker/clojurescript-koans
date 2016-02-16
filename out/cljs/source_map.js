// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__9487){
var vec__9488 = p__9487;
var i = cljs.core.nth.call(null,vec__9488,(0),null);
var v = cljs.core.nth.call(null,vec__9488,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__9490 = seg;
var gcol = cljs.core.nth.call(null,vec__9490,(0),null);
var source = cljs.core.nth.call(null,vec__9490,(1),null);
var line = cljs.core.nth.call(null,vec__9490,(2),null);
var col = cljs.core.nth.call(null,vec__9490,(3),null);
var name = cljs.core.nth.call(null,vec__9490,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__9493 = seg;
var gcol = cljs.core.nth.call(null,vec__9493,(0),null);
var source = cljs.core.nth.call(null,vec__9493,(1),null);
var line = cljs.core.nth.call(null,vec__9493,(2),null);
var col = cljs.core.nth.call(null,vec__9493,(3),null);
var name = cljs.core.nth.call(null,vec__9493,(4),null);
var vec__9494 = relseg;
var rgcol = cljs.core.nth.call(null,vec__9494,(0),null);
var rsource = cljs.core.nth.call(null,vec__9494,(1),null);
var rline = cljs.core.nth.call(null,vec__9494,(2),null);
var rcol = cljs.core.nth.call(null,vec__9494,(3),null);
var rname = cljs.core.nth.call(null,vec__9494,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6142__auto__ = source;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6142__auto__ = line;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6142__auto__ = col;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6142__auto__ = name;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__9497 = segmap;
var map__9497__$1 = ((((!((map__9497 == null)))?((((map__9497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9497):map__9497);
var gcol = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__9497,map__9497__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__9497,map__9497__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__9497,map__9497__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__9497,map__9497__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9497,map__9497__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__9497,map__9497__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args9499 = [];
var len__7200__auto___9503 = arguments.length;
var i__7201__auto___9504 = (0);
while(true){
if((i__7201__auto___9504 < len__7200__auto___9503)){
args9499.push((arguments[i__7201__auto___9504]));

var G__9505 = (i__7201__auto___9504 + (1));
i__7201__auto___9504 = G__9505;
continue;
} else {
}
break;
}

var G__9501 = args9499.length;
switch (G__9501) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9499.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__9502 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9507 = cljs.core.next.call(null,segs__$1);
var G__9508 = nrelseg;
var G__9509 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9507;
relseg__$1 = G__9508;
result__$1 = G__9509;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9502,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9502,(1),null);
var G__9510 = (gline + (1));
var G__9511 = cljs.core.next.call(null,lines__$1);
var G__9512 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9513 = result__$1;
gline = G__9510;
lines__$1 = G__9511;
relseg = G__9512;
result = G__9513;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__9517 = segmap;
var map__9517__$1 = ((((!((map__9517 == null)))?((((map__9517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9517):map__9517);
var gcol = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__9517,map__9517__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__9517,map__9517__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__9514_SHARP_){
return cljs.core.conj.call(null,p1__9514_SHARP_,d__$1);
});})(map__9517,map__9517__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9517,map__9517__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args9519 = [];
var len__7200__auto___9523 = arguments.length;
var i__7201__auto___9524 = (0);
while(true){
if((i__7201__auto___9524 < len__7200__auto___9523)){
args9519.push((arguments[i__7201__auto___9524]));

var G__9525 = (i__7201__auto___9524 + (1));
i__7201__auto___9524 = G__9525;
continue;
} else {
}
break;
}

var G__9521 = args9519.length;
switch (G__9521) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9519.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__9522 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9527 = cljs.core.next.call(null,segs__$1);
var G__9528 = nrelseg;
var G__9529 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9527;
relseg__$1 = G__9528;
result__$1 = G__9529;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9522,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9522,(1),null);
var G__9530 = (gline + (1));
var G__9531 = cljs.core.next.call(null,lines__$1);
var G__9532 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9533 = result__$1;
gline = G__9530;
lines__$1 = G__9531;
relseg = G__9532;
result = G__9533;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__9540){
var vec__9541 = p__9540;
var _ = cljs.core.nth.call(null,vec__9541,(0),null);
var source = cljs.core.nth.call(null,vec__9541,(1),null);
var line = cljs.core.nth.call(null,vec__9541,(2),null);
var col = cljs.core.nth.call(null,vec__9541,(3),null);
var name = cljs.core.nth.call(null,vec__9541,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__9542){
var vec__9543 = p__9542;
var gcol = cljs.core.nth.call(null,vec__9543,(0),null);
var sidx = cljs.core.nth.call(null,vec__9543,(1),null);
var line = cljs.core.nth.call(null,vec__9543,(2),null);
var col = cljs.core.nth.call(null,vec__9543,(3),null);
var name = cljs.core.nth.call(null,vec__9543,(4),null);
var seg = vec__9543;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__9543,gcol,sidx,line,col,name,seg,relseg){
return (function (p__9544){
var vec__9545 = p__9544;
var _ = cljs.core.nth.call(null,vec__9545,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9545,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__9545,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__9545,(3),null);
var lname = cljs.core.nth.call(null,vec__9545,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6142__auto__ = name;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__9543,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__6142__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__9599 = cljs.core.seq.call(null,infos);
var chunk__9600 = null;
var count__9601 = (0);
var i__9602 = (0);
while(true){
if((i__9602 < count__9601)){
var info = cljs.core._nth.call(null,chunk__9600,i__9602);
var segv_9649 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9650 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9651 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9650 > (lc_9651 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9599,chunk__9600,count__9601,i__9602,segv_9649,gline_9650,lc_9651,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9650 - (lc_9651 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9649], null));
});})(seq__9599,chunk__9600,count__9601,i__9602,segv_9649,gline_9650,lc_9651,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9599,chunk__9600,count__9601,i__9602,segv_9649,gline_9650,lc_9651,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9650], null),cljs.core.conj,segv_9649);
});})(seq__9599,chunk__9600,count__9601,i__9602,segv_9649,gline_9650,lc_9651,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9652 = seq__9599;
var G__9653 = chunk__9600;
var G__9654 = count__9601;
var G__9655 = (i__9602 + (1));
seq__9599 = G__9652;
chunk__9600 = G__9653;
count__9601 = G__9654;
i__9602 = G__9655;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9599);
if(temp__4425__auto__){
var seq__9599__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9599__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__9599__$1);
var G__9656 = cljs.core.chunk_rest.call(null,seq__9599__$1);
var G__9657 = c__6945__auto__;
var G__9658 = cljs.core.count.call(null,c__6945__auto__);
var G__9659 = (0);
seq__9599 = G__9656;
chunk__9600 = G__9657;
count__9601 = G__9658;
i__9602 = G__9659;
continue;
} else {
var info = cljs.core.first.call(null,seq__9599__$1);
var segv_9660 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9661 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9662 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9661 > (lc_9662 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9599,chunk__9600,count__9601,i__9602,segv_9660,gline_9661,lc_9662,info,seq__9599__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9661 - (lc_9662 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9660], null));
});})(seq__9599,chunk__9600,count__9601,i__9602,segv_9660,gline_9661,lc_9662,info,seq__9599__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9599,chunk__9600,count__9601,i__9602,segv_9660,gline_9661,lc_9662,info,seq__9599__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9661], null),cljs.core.conj,segv_9660);
});})(seq__9599,chunk__9600,count__9601,i__9602,segv_9660,gline_9661,lc_9662,info,seq__9599__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__9663 = cljs.core.next.call(null,seq__9599__$1);
var G__9664 = null;
var G__9665 = (0);
var G__9666 = (0);
seq__9599 = G__9663;
chunk__9600 = G__9664;
count__9601 = G__9665;
i__9602 = G__9666;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__9603_9667 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__9604_9668 = null;
var count__9605_9669 = (0);
var i__9606_9670 = (0);
while(true){
if((i__9606_9670 < count__9605_9669)){
var vec__9607_9671 = cljs.core._nth.call(null,chunk__9604_9668,i__9606_9670);
var source_idx_9672 = cljs.core.nth.call(null,vec__9607_9671,(0),null);
var vec__9608_9673 = cljs.core.nth.call(null,vec__9607_9671,(1),null);
var __9674 = cljs.core.nth.call(null,vec__9608_9673,(0),null);
var lines_9675__$1 = cljs.core.nth.call(null,vec__9608_9673,(1),null);
var seq__9609_9676 = cljs.core.seq.call(null,lines_9675__$1);
var chunk__9610_9677 = null;
var count__9611_9678 = (0);
var i__9612_9679 = (0);
while(true){
if((i__9612_9679 < count__9611_9678)){
var vec__9613_9680 = cljs.core._nth.call(null,chunk__9610_9677,i__9612_9679);
var line_9681 = cljs.core.nth.call(null,vec__9613_9680,(0),null);
var cols_9682 = cljs.core.nth.call(null,vec__9613_9680,(1),null);
var seq__9614_9683 = cljs.core.seq.call(null,cols_9682);
var chunk__9615_9684 = null;
var count__9616_9685 = (0);
var i__9617_9686 = (0);
while(true){
if((i__9617_9686 < count__9616_9685)){
var vec__9618_9687 = cljs.core._nth.call(null,chunk__9615_9684,i__9617_9686);
var col_9688 = cljs.core.nth.call(null,vec__9618_9687,(0),null);
var infos_9689 = cljs.core.nth.call(null,vec__9618_9687,(1),null);
encode_cols.call(null,infos_9689,source_idx_9672,line_9681,col_9688);

var G__9690 = seq__9614_9683;
var G__9691 = chunk__9615_9684;
var G__9692 = count__9616_9685;
var G__9693 = (i__9617_9686 + (1));
seq__9614_9683 = G__9690;
chunk__9615_9684 = G__9691;
count__9616_9685 = G__9692;
i__9617_9686 = G__9693;
continue;
} else {
var temp__4425__auto___9694 = cljs.core.seq.call(null,seq__9614_9683);
if(temp__4425__auto___9694){
var seq__9614_9695__$1 = temp__4425__auto___9694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9614_9695__$1)){
var c__6945__auto___9696 = cljs.core.chunk_first.call(null,seq__9614_9695__$1);
var G__9697 = cljs.core.chunk_rest.call(null,seq__9614_9695__$1);
var G__9698 = c__6945__auto___9696;
var G__9699 = cljs.core.count.call(null,c__6945__auto___9696);
var G__9700 = (0);
seq__9614_9683 = G__9697;
chunk__9615_9684 = G__9698;
count__9616_9685 = G__9699;
i__9617_9686 = G__9700;
continue;
} else {
var vec__9619_9701 = cljs.core.first.call(null,seq__9614_9695__$1);
var col_9702 = cljs.core.nth.call(null,vec__9619_9701,(0),null);
var infos_9703 = cljs.core.nth.call(null,vec__9619_9701,(1),null);
encode_cols.call(null,infos_9703,source_idx_9672,line_9681,col_9702);

var G__9704 = cljs.core.next.call(null,seq__9614_9695__$1);
var G__9705 = null;
var G__9706 = (0);
var G__9707 = (0);
seq__9614_9683 = G__9704;
chunk__9615_9684 = G__9705;
count__9616_9685 = G__9706;
i__9617_9686 = G__9707;
continue;
}
} else {
}
}
break;
}

var G__9708 = seq__9609_9676;
var G__9709 = chunk__9610_9677;
var G__9710 = count__9611_9678;
var G__9711 = (i__9612_9679 + (1));
seq__9609_9676 = G__9708;
chunk__9610_9677 = G__9709;
count__9611_9678 = G__9710;
i__9612_9679 = G__9711;
continue;
} else {
var temp__4425__auto___9712 = cljs.core.seq.call(null,seq__9609_9676);
if(temp__4425__auto___9712){
var seq__9609_9713__$1 = temp__4425__auto___9712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9609_9713__$1)){
var c__6945__auto___9714 = cljs.core.chunk_first.call(null,seq__9609_9713__$1);
var G__9715 = cljs.core.chunk_rest.call(null,seq__9609_9713__$1);
var G__9716 = c__6945__auto___9714;
var G__9717 = cljs.core.count.call(null,c__6945__auto___9714);
var G__9718 = (0);
seq__9609_9676 = G__9715;
chunk__9610_9677 = G__9716;
count__9611_9678 = G__9717;
i__9612_9679 = G__9718;
continue;
} else {
var vec__9620_9719 = cljs.core.first.call(null,seq__9609_9713__$1);
var line_9720 = cljs.core.nth.call(null,vec__9620_9719,(0),null);
var cols_9721 = cljs.core.nth.call(null,vec__9620_9719,(1),null);
var seq__9621_9722 = cljs.core.seq.call(null,cols_9721);
var chunk__9622_9723 = null;
var count__9623_9724 = (0);
var i__9624_9725 = (0);
while(true){
if((i__9624_9725 < count__9623_9724)){
var vec__9625_9726 = cljs.core._nth.call(null,chunk__9622_9723,i__9624_9725);
var col_9727 = cljs.core.nth.call(null,vec__9625_9726,(0),null);
var infos_9728 = cljs.core.nth.call(null,vec__9625_9726,(1),null);
encode_cols.call(null,infos_9728,source_idx_9672,line_9720,col_9727);

var G__9729 = seq__9621_9722;
var G__9730 = chunk__9622_9723;
var G__9731 = count__9623_9724;
var G__9732 = (i__9624_9725 + (1));
seq__9621_9722 = G__9729;
chunk__9622_9723 = G__9730;
count__9623_9724 = G__9731;
i__9624_9725 = G__9732;
continue;
} else {
var temp__4425__auto___9733__$1 = cljs.core.seq.call(null,seq__9621_9722);
if(temp__4425__auto___9733__$1){
var seq__9621_9734__$1 = temp__4425__auto___9733__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9621_9734__$1)){
var c__6945__auto___9735 = cljs.core.chunk_first.call(null,seq__9621_9734__$1);
var G__9736 = cljs.core.chunk_rest.call(null,seq__9621_9734__$1);
var G__9737 = c__6945__auto___9735;
var G__9738 = cljs.core.count.call(null,c__6945__auto___9735);
var G__9739 = (0);
seq__9621_9722 = G__9736;
chunk__9622_9723 = G__9737;
count__9623_9724 = G__9738;
i__9624_9725 = G__9739;
continue;
} else {
var vec__9626_9740 = cljs.core.first.call(null,seq__9621_9734__$1);
var col_9741 = cljs.core.nth.call(null,vec__9626_9740,(0),null);
var infos_9742 = cljs.core.nth.call(null,vec__9626_9740,(1),null);
encode_cols.call(null,infos_9742,source_idx_9672,line_9720,col_9741);

var G__9743 = cljs.core.next.call(null,seq__9621_9734__$1);
var G__9744 = null;
var G__9745 = (0);
var G__9746 = (0);
seq__9621_9722 = G__9743;
chunk__9622_9723 = G__9744;
count__9623_9724 = G__9745;
i__9624_9725 = G__9746;
continue;
}
} else {
}
}
break;
}

var G__9747 = cljs.core.next.call(null,seq__9609_9713__$1);
var G__9748 = null;
var G__9749 = (0);
var G__9750 = (0);
seq__9609_9676 = G__9747;
chunk__9610_9677 = G__9748;
count__9611_9678 = G__9749;
i__9612_9679 = G__9750;
continue;
}
} else {
}
}
break;
}

var G__9751 = seq__9603_9667;
var G__9752 = chunk__9604_9668;
var G__9753 = count__9605_9669;
var G__9754 = (i__9606_9670 + (1));
seq__9603_9667 = G__9751;
chunk__9604_9668 = G__9752;
count__9605_9669 = G__9753;
i__9606_9670 = G__9754;
continue;
} else {
var temp__4425__auto___9755 = cljs.core.seq.call(null,seq__9603_9667);
if(temp__4425__auto___9755){
var seq__9603_9756__$1 = temp__4425__auto___9755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9603_9756__$1)){
var c__6945__auto___9757 = cljs.core.chunk_first.call(null,seq__9603_9756__$1);
var G__9758 = cljs.core.chunk_rest.call(null,seq__9603_9756__$1);
var G__9759 = c__6945__auto___9757;
var G__9760 = cljs.core.count.call(null,c__6945__auto___9757);
var G__9761 = (0);
seq__9603_9667 = G__9758;
chunk__9604_9668 = G__9759;
count__9605_9669 = G__9760;
i__9606_9670 = G__9761;
continue;
} else {
var vec__9627_9762 = cljs.core.first.call(null,seq__9603_9756__$1);
var source_idx_9763 = cljs.core.nth.call(null,vec__9627_9762,(0),null);
var vec__9628_9764 = cljs.core.nth.call(null,vec__9627_9762,(1),null);
var __9765 = cljs.core.nth.call(null,vec__9628_9764,(0),null);
var lines_9766__$1 = cljs.core.nth.call(null,vec__9628_9764,(1),null);
var seq__9629_9767 = cljs.core.seq.call(null,lines_9766__$1);
var chunk__9630_9768 = null;
var count__9631_9769 = (0);
var i__9632_9770 = (0);
while(true){
if((i__9632_9770 < count__9631_9769)){
var vec__9633_9771 = cljs.core._nth.call(null,chunk__9630_9768,i__9632_9770);
var line_9772 = cljs.core.nth.call(null,vec__9633_9771,(0),null);
var cols_9773 = cljs.core.nth.call(null,vec__9633_9771,(1),null);
var seq__9634_9774 = cljs.core.seq.call(null,cols_9773);
var chunk__9635_9775 = null;
var count__9636_9776 = (0);
var i__9637_9777 = (0);
while(true){
if((i__9637_9777 < count__9636_9776)){
var vec__9638_9778 = cljs.core._nth.call(null,chunk__9635_9775,i__9637_9777);
var col_9779 = cljs.core.nth.call(null,vec__9638_9778,(0),null);
var infos_9780 = cljs.core.nth.call(null,vec__9638_9778,(1),null);
encode_cols.call(null,infos_9780,source_idx_9763,line_9772,col_9779);

var G__9781 = seq__9634_9774;
var G__9782 = chunk__9635_9775;
var G__9783 = count__9636_9776;
var G__9784 = (i__9637_9777 + (1));
seq__9634_9774 = G__9781;
chunk__9635_9775 = G__9782;
count__9636_9776 = G__9783;
i__9637_9777 = G__9784;
continue;
} else {
var temp__4425__auto___9785__$1 = cljs.core.seq.call(null,seq__9634_9774);
if(temp__4425__auto___9785__$1){
var seq__9634_9786__$1 = temp__4425__auto___9785__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9634_9786__$1)){
var c__6945__auto___9787 = cljs.core.chunk_first.call(null,seq__9634_9786__$1);
var G__9788 = cljs.core.chunk_rest.call(null,seq__9634_9786__$1);
var G__9789 = c__6945__auto___9787;
var G__9790 = cljs.core.count.call(null,c__6945__auto___9787);
var G__9791 = (0);
seq__9634_9774 = G__9788;
chunk__9635_9775 = G__9789;
count__9636_9776 = G__9790;
i__9637_9777 = G__9791;
continue;
} else {
var vec__9639_9792 = cljs.core.first.call(null,seq__9634_9786__$1);
var col_9793 = cljs.core.nth.call(null,vec__9639_9792,(0),null);
var infos_9794 = cljs.core.nth.call(null,vec__9639_9792,(1),null);
encode_cols.call(null,infos_9794,source_idx_9763,line_9772,col_9793);

var G__9795 = cljs.core.next.call(null,seq__9634_9786__$1);
var G__9796 = null;
var G__9797 = (0);
var G__9798 = (0);
seq__9634_9774 = G__9795;
chunk__9635_9775 = G__9796;
count__9636_9776 = G__9797;
i__9637_9777 = G__9798;
continue;
}
} else {
}
}
break;
}

var G__9799 = seq__9629_9767;
var G__9800 = chunk__9630_9768;
var G__9801 = count__9631_9769;
var G__9802 = (i__9632_9770 + (1));
seq__9629_9767 = G__9799;
chunk__9630_9768 = G__9800;
count__9631_9769 = G__9801;
i__9632_9770 = G__9802;
continue;
} else {
var temp__4425__auto___9803__$1 = cljs.core.seq.call(null,seq__9629_9767);
if(temp__4425__auto___9803__$1){
var seq__9629_9804__$1 = temp__4425__auto___9803__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9629_9804__$1)){
var c__6945__auto___9805 = cljs.core.chunk_first.call(null,seq__9629_9804__$1);
var G__9806 = cljs.core.chunk_rest.call(null,seq__9629_9804__$1);
var G__9807 = c__6945__auto___9805;
var G__9808 = cljs.core.count.call(null,c__6945__auto___9805);
var G__9809 = (0);
seq__9629_9767 = G__9806;
chunk__9630_9768 = G__9807;
count__9631_9769 = G__9808;
i__9632_9770 = G__9809;
continue;
} else {
var vec__9640_9810 = cljs.core.first.call(null,seq__9629_9804__$1);
var line_9811 = cljs.core.nth.call(null,vec__9640_9810,(0),null);
var cols_9812 = cljs.core.nth.call(null,vec__9640_9810,(1),null);
var seq__9641_9813 = cljs.core.seq.call(null,cols_9812);
var chunk__9642_9814 = null;
var count__9643_9815 = (0);
var i__9644_9816 = (0);
while(true){
if((i__9644_9816 < count__9643_9815)){
var vec__9645_9817 = cljs.core._nth.call(null,chunk__9642_9814,i__9644_9816);
var col_9818 = cljs.core.nth.call(null,vec__9645_9817,(0),null);
var infos_9819 = cljs.core.nth.call(null,vec__9645_9817,(1),null);
encode_cols.call(null,infos_9819,source_idx_9763,line_9811,col_9818);

var G__9820 = seq__9641_9813;
var G__9821 = chunk__9642_9814;
var G__9822 = count__9643_9815;
var G__9823 = (i__9644_9816 + (1));
seq__9641_9813 = G__9820;
chunk__9642_9814 = G__9821;
count__9643_9815 = G__9822;
i__9644_9816 = G__9823;
continue;
} else {
var temp__4425__auto___9824__$2 = cljs.core.seq.call(null,seq__9641_9813);
if(temp__4425__auto___9824__$2){
var seq__9641_9825__$1 = temp__4425__auto___9824__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9641_9825__$1)){
var c__6945__auto___9826 = cljs.core.chunk_first.call(null,seq__9641_9825__$1);
var G__9827 = cljs.core.chunk_rest.call(null,seq__9641_9825__$1);
var G__9828 = c__6945__auto___9826;
var G__9829 = cljs.core.count.call(null,c__6945__auto___9826);
var G__9830 = (0);
seq__9641_9813 = G__9827;
chunk__9642_9814 = G__9828;
count__9643_9815 = G__9829;
i__9644_9816 = G__9830;
continue;
} else {
var vec__9646_9831 = cljs.core.first.call(null,seq__9641_9825__$1);
var col_9832 = cljs.core.nth.call(null,vec__9646_9831,(0),null);
var infos_9833 = cljs.core.nth.call(null,vec__9646_9831,(1),null);
encode_cols.call(null,infos_9833,source_idx_9763,line_9811,col_9832);

var G__9834 = cljs.core.next.call(null,seq__9641_9825__$1);
var G__9835 = null;
var G__9836 = (0);
var G__9837 = (0);
seq__9641_9813 = G__9834;
chunk__9642_9814 = G__9835;
count__9643_9815 = G__9836;
i__9644_9816 = G__9837;
continue;
}
} else {
}
}
break;
}

var G__9838 = cljs.core.next.call(null,seq__9629_9804__$1);
var G__9839 = null;
var G__9840 = (0);
var G__9841 = (0);
seq__9629_9767 = G__9838;
chunk__9630_9768 = G__9839;
count__9631_9769 = G__9840;
i__9632_9770 = G__9841;
continue;
}
} else {
}
}
break;
}

var G__9842 = cljs.core.next.call(null,seq__9603_9756__$1);
var G__9843 = null;
var G__9844 = (0);
var G__9845 = (0);
seq__9603_9667 = G__9842;
chunk__9604_9668 = G__9843;
count__9605_9669 = G__9844;
i__9606_9670 = G__9845;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__9647 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9546_SHARP_){
return [cljs.core.str(p1__9546_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9547_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__9547_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9548_SHARP_){
return clojure.string.join.call(null,",",p1__9548_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__9647__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__9648 = G__9647;
goog.object.set(G__9648,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__9648;
})():G__9647);
return G__9647__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__9851 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__9851,(0),null);
var col_map = cljs.core.nth.call(null,vec__9851,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__9852 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__9852,(0),null);
var infos = cljs.core.nth.call(null,vec__9852,(1),null);
var G__9856 = cljs.core.next.call(null,col_map_seq);
var G__9857 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9852,col,infos,vec__9851,line,col_map){
return (function (v,p__9853){
var map__9854 = p__9853;
var map__9854__$1 = ((((!((map__9854 == null)))?((((map__9854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9854):map__9854);
var gline = cljs.core.get.call(null,map__9854__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__9854__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9852,col,infos,vec__9851,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9856;
new_cols = G__9857;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9858 = cljs.core.next.call(null,line_map_seq);
var G__9859 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__9858;
new_lines = G__9859;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__9910_9960 = cljs.core.seq.call(null,reverse_map);
var chunk__9911_9961 = null;
var count__9912_9962 = (0);
var i__9913_9963 = (0);
while(true){
if((i__9913_9963 < count__9912_9962)){
var vec__9914_9964 = cljs.core._nth.call(null,chunk__9911_9961,i__9913_9963);
var line_9965 = cljs.core.nth.call(null,vec__9914_9964,(0),null);
var columns_9966 = cljs.core.nth.call(null,vec__9914_9964,(1),null);
var seq__9915_9967 = cljs.core.seq.call(null,columns_9966);
var chunk__9916_9968 = null;
var count__9917_9969 = (0);
var i__9918_9970 = (0);
while(true){
if((i__9918_9970 < count__9917_9969)){
var vec__9919_9971 = cljs.core._nth.call(null,chunk__9916_9968,i__9918_9970);
var column_9972 = cljs.core.nth.call(null,vec__9919_9971,(0),null);
var column_info_9973 = cljs.core.nth.call(null,vec__9919_9971,(1),null);
var seq__9920_9974 = cljs.core.seq.call(null,column_info_9973);
var chunk__9921_9975 = null;
var count__9922_9976 = (0);
var i__9923_9977 = (0);
while(true){
if((i__9923_9977 < count__9922_9976)){
var map__9924_9978 = cljs.core._nth.call(null,chunk__9921_9975,i__9923_9977);
var map__9924_9979__$1 = ((((!((map__9924_9978 == null)))?((((map__9924_9978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9924_9978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9924_9978):map__9924_9978);
var gline_9980 = cljs.core.get.call(null,map__9924_9979__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9981 = cljs.core.get.call(null,map__9924_9979__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9982 = cljs.core.get.call(null,map__9924_9979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9980], null),cljs.core.fnil.call(null,((function (seq__9920_9974,chunk__9921_9975,count__9922_9976,i__9923_9977,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9924_9978,map__9924_9979__$1,gline_9980,gcol_9981,name_9982,vec__9919_9971,column_9972,column_info_9973,vec__9914_9964,line_9965,columns_9966,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9972], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9965,new cljs.core.Keyword(null,"col","col",-1959363084),column_9972,new cljs.core.Keyword(null,"name","name",1843675177),name_9982], null));
});})(seq__9920_9974,chunk__9921_9975,count__9922_9976,i__9923_9977,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9924_9978,map__9924_9979__$1,gline_9980,gcol_9981,name_9982,vec__9919_9971,column_9972,column_info_9973,vec__9914_9964,line_9965,columns_9966,inverted))
,cljs.core.sorted_map.call(null)));

var G__9983 = seq__9920_9974;
var G__9984 = chunk__9921_9975;
var G__9985 = count__9922_9976;
var G__9986 = (i__9923_9977 + (1));
seq__9920_9974 = G__9983;
chunk__9921_9975 = G__9984;
count__9922_9976 = G__9985;
i__9923_9977 = G__9986;
continue;
} else {
var temp__4425__auto___9987 = cljs.core.seq.call(null,seq__9920_9974);
if(temp__4425__auto___9987){
var seq__9920_9988__$1 = temp__4425__auto___9987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9920_9988__$1)){
var c__6945__auto___9989 = cljs.core.chunk_first.call(null,seq__9920_9988__$1);
var G__9990 = cljs.core.chunk_rest.call(null,seq__9920_9988__$1);
var G__9991 = c__6945__auto___9989;
var G__9992 = cljs.core.count.call(null,c__6945__auto___9989);
var G__9993 = (0);
seq__9920_9974 = G__9990;
chunk__9921_9975 = G__9991;
count__9922_9976 = G__9992;
i__9923_9977 = G__9993;
continue;
} else {
var map__9926_9994 = cljs.core.first.call(null,seq__9920_9988__$1);
var map__9926_9995__$1 = ((((!((map__9926_9994 == null)))?((((map__9926_9994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9926_9994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9926_9994):map__9926_9994);
var gline_9996 = cljs.core.get.call(null,map__9926_9995__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9997 = cljs.core.get.call(null,map__9926_9995__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9998 = cljs.core.get.call(null,map__9926_9995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9996], null),cljs.core.fnil.call(null,((function (seq__9920_9974,chunk__9921_9975,count__9922_9976,i__9923_9977,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9926_9994,map__9926_9995__$1,gline_9996,gcol_9997,name_9998,seq__9920_9988__$1,temp__4425__auto___9987,vec__9919_9971,column_9972,column_info_9973,vec__9914_9964,line_9965,columns_9966,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_9972], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9965,new cljs.core.Keyword(null,"col","col",-1959363084),column_9972,new cljs.core.Keyword(null,"name","name",1843675177),name_9998], null));
});})(seq__9920_9974,chunk__9921_9975,count__9922_9976,i__9923_9977,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9926_9994,map__9926_9995__$1,gline_9996,gcol_9997,name_9998,seq__9920_9988__$1,temp__4425__auto___9987,vec__9919_9971,column_9972,column_info_9973,vec__9914_9964,line_9965,columns_9966,inverted))
,cljs.core.sorted_map.call(null)));

var G__9999 = cljs.core.next.call(null,seq__9920_9988__$1);
var G__10000 = null;
var G__10001 = (0);
var G__10002 = (0);
seq__9920_9974 = G__9999;
chunk__9921_9975 = G__10000;
count__9922_9976 = G__10001;
i__9923_9977 = G__10002;
continue;
}
} else {
}
}
break;
}

var G__10003 = seq__9915_9967;
var G__10004 = chunk__9916_9968;
var G__10005 = count__9917_9969;
var G__10006 = (i__9918_9970 + (1));
seq__9915_9967 = G__10003;
chunk__9916_9968 = G__10004;
count__9917_9969 = G__10005;
i__9918_9970 = G__10006;
continue;
} else {
var temp__4425__auto___10007 = cljs.core.seq.call(null,seq__9915_9967);
if(temp__4425__auto___10007){
var seq__9915_10008__$1 = temp__4425__auto___10007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9915_10008__$1)){
var c__6945__auto___10009 = cljs.core.chunk_first.call(null,seq__9915_10008__$1);
var G__10010 = cljs.core.chunk_rest.call(null,seq__9915_10008__$1);
var G__10011 = c__6945__auto___10009;
var G__10012 = cljs.core.count.call(null,c__6945__auto___10009);
var G__10013 = (0);
seq__9915_9967 = G__10010;
chunk__9916_9968 = G__10011;
count__9917_9969 = G__10012;
i__9918_9970 = G__10013;
continue;
} else {
var vec__9928_10014 = cljs.core.first.call(null,seq__9915_10008__$1);
var column_10015 = cljs.core.nth.call(null,vec__9928_10014,(0),null);
var column_info_10016 = cljs.core.nth.call(null,vec__9928_10014,(1),null);
var seq__9929_10017 = cljs.core.seq.call(null,column_info_10016);
var chunk__9930_10018 = null;
var count__9931_10019 = (0);
var i__9932_10020 = (0);
while(true){
if((i__9932_10020 < count__9931_10019)){
var map__9933_10021 = cljs.core._nth.call(null,chunk__9930_10018,i__9932_10020);
var map__9933_10022__$1 = ((((!((map__9933_10021 == null)))?((((map__9933_10021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9933_10021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9933_10021):map__9933_10021);
var gline_10023 = cljs.core.get.call(null,map__9933_10022__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10024 = cljs.core.get.call(null,map__9933_10022__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10025 = cljs.core.get.call(null,map__9933_10022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10023], null),cljs.core.fnil.call(null,((function (seq__9929_10017,chunk__9930_10018,count__9931_10019,i__9932_10020,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9933_10021,map__9933_10022__$1,gline_10023,gcol_10024,name_10025,vec__9928_10014,column_10015,column_info_10016,seq__9915_10008__$1,temp__4425__auto___10007,vec__9914_9964,line_9965,columns_9966,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_10015], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9965,new cljs.core.Keyword(null,"col","col",-1959363084),column_10015,new cljs.core.Keyword(null,"name","name",1843675177),name_10025], null));
});})(seq__9929_10017,chunk__9930_10018,count__9931_10019,i__9932_10020,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9933_10021,map__9933_10022__$1,gline_10023,gcol_10024,name_10025,vec__9928_10014,column_10015,column_info_10016,seq__9915_10008__$1,temp__4425__auto___10007,vec__9914_9964,line_9965,columns_9966,inverted))
,cljs.core.sorted_map.call(null)));

var G__10026 = seq__9929_10017;
var G__10027 = chunk__9930_10018;
var G__10028 = count__9931_10019;
var G__10029 = (i__9932_10020 + (1));
seq__9929_10017 = G__10026;
chunk__9930_10018 = G__10027;
count__9931_10019 = G__10028;
i__9932_10020 = G__10029;
continue;
} else {
var temp__4425__auto___10030__$1 = cljs.core.seq.call(null,seq__9929_10017);
if(temp__4425__auto___10030__$1){
var seq__9929_10031__$1 = temp__4425__auto___10030__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9929_10031__$1)){
var c__6945__auto___10032 = cljs.core.chunk_first.call(null,seq__9929_10031__$1);
var G__10033 = cljs.core.chunk_rest.call(null,seq__9929_10031__$1);
var G__10034 = c__6945__auto___10032;
var G__10035 = cljs.core.count.call(null,c__6945__auto___10032);
var G__10036 = (0);
seq__9929_10017 = G__10033;
chunk__9930_10018 = G__10034;
count__9931_10019 = G__10035;
i__9932_10020 = G__10036;
continue;
} else {
var map__9935_10037 = cljs.core.first.call(null,seq__9929_10031__$1);
var map__9935_10038__$1 = ((((!((map__9935_10037 == null)))?((((map__9935_10037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9935_10037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9935_10037):map__9935_10037);
var gline_10039 = cljs.core.get.call(null,map__9935_10038__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10040 = cljs.core.get.call(null,map__9935_10038__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10041 = cljs.core.get.call(null,map__9935_10038__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10039], null),cljs.core.fnil.call(null,((function (seq__9929_10017,chunk__9930_10018,count__9931_10019,i__9932_10020,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9935_10037,map__9935_10038__$1,gline_10039,gcol_10040,name_10041,seq__9929_10031__$1,temp__4425__auto___10030__$1,vec__9928_10014,column_10015,column_info_10016,seq__9915_10008__$1,temp__4425__auto___10007,vec__9914_9964,line_9965,columns_9966,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_10015], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9965,new cljs.core.Keyword(null,"col","col",-1959363084),column_10015,new cljs.core.Keyword(null,"name","name",1843675177),name_10041], null));
});})(seq__9929_10017,chunk__9930_10018,count__9931_10019,i__9932_10020,seq__9915_9967,chunk__9916_9968,count__9917_9969,i__9918_9970,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9935_10037,map__9935_10038__$1,gline_10039,gcol_10040,name_10041,seq__9929_10031__$1,temp__4425__auto___10030__$1,vec__9928_10014,column_10015,column_info_10016,seq__9915_10008__$1,temp__4425__auto___10007,vec__9914_9964,line_9965,columns_9966,inverted))
,cljs.core.sorted_map.call(null)));

var G__10042 = cljs.core.next.call(null,seq__9929_10031__$1);
var G__10043 = null;
var G__10044 = (0);
var G__10045 = (0);
seq__9929_10017 = G__10042;
chunk__9930_10018 = G__10043;
count__9931_10019 = G__10044;
i__9932_10020 = G__10045;
continue;
}
} else {
}
}
break;
}

var G__10046 = cljs.core.next.call(null,seq__9915_10008__$1);
var G__10047 = null;
var G__10048 = (0);
var G__10049 = (0);
seq__9915_9967 = G__10046;
chunk__9916_9968 = G__10047;
count__9917_9969 = G__10048;
i__9918_9970 = G__10049;
continue;
}
} else {
}
}
break;
}

var G__10050 = seq__9910_9960;
var G__10051 = chunk__9911_9961;
var G__10052 = count__9912_9962;
var G__10053 = (i__9913_9963 + (1));
seq__9910_9960 = G__10050;
chunk__9911_9961 = G__10051;
count__9912_9962 = G__10052;
i__9913_9963 = G__10053;
continue;
} else {
var temp__4425__auto___10054 = cljs.core.seq.call(null,seq__9910_9960);
if(temp__4425__auto___10054){
var seq__9910_10055__$1 = temp__4425__auto___10054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9910_10055__$1)){
var c__6945__auto___10056 = cljs.core.chunk_first.call(null,seq__9910_10055__$1);
var G__10057 = cljs.core.chunk_rest.call(null,seq__9910_10055__$1);
var G__10058 = c__6945__auto___10056;
var G__10059 = cljs.core.count.call(null,c__6945__auto___10056);
var G__10060 = (0);
seq__9910_9960 = G__10057;
chunk__9911_9961 = G__10058;
count__9912_9962 = G__10059;
i__9913_9963 = G__10060;
continue;
} else {
var vec__9937_10061 = cljs.core.first.call(null,seq__9910_10055__$1);
var line_10062 = cljs.core.nth.call(null,vec__9937_10061,(0),null);
var columns_10063 = cljs.core.nth.call(null,vec__9937_10061,(1),null);
var seq__9938_10064 = cljs.core.seq.call(null,columns_10063);
var chunk__9939_10065 = null;
var count__9940_10066 = (0);
var i__9941_10067 = (0);
while(true){
if((i__9941_10067 < count__9940_10066)){
var vec__9942_10068 = cljs.core._nth.call(null,chunk__9939_10065,i__9941_10067);
var column_10069 = cljs.core.nth.call(null,vec__9942_10068,(0),null);
var column_info_10070 = cljs.core.nth.call(null,vec__9942_10068,(1),null);
var seq__9943_10071 = cljs.core.seq.call(null,column_info_10070);
var chunk__9944_10072 = null;
var count__9945_10073 = (0);
var i__9946_10074 = (0);
while(true){
if((i__9946_10074 < count__9945_10073)){
var map__9947_10075 = cljs.core._nth.call(null,chunk__9944_10072,i__9946_10074);
var map__9947_10076__$1 = ((((!((map__9947_10075 == null)))?((((map__9947_10075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9947_10075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9947_10075):map__9947_10075);
var gline_10077 = cljs.core.get.call(null,map__9947_10076__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10078 = cljs.core.get.call(null,map__9947_10076__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10079 = cljs.core.get.call(null,map__9947_10076__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10077], null),cljs.core.fnil.call(null,((function (seq__9943_10071,chunk__9944_10072,count__9945_10073,i__9946_10074,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9947_10075,map__9947_10076__$1,gline_10077,gcol_10078,name_10079,vec__9942_10068,column_10069,column_info_10070,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_10069], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10062,new cljs.core.Keyword(null,"col","col",-1959363084),column_10069,new cljs.core.Keyword(null,"name","name",1843675177),name_10079], null));
});})(seq__9943_10071,chunk__9944_10072,count__9945_10073,i__9946_10074,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9947_10075,map__9947_10076__$1,gline_10077,gcol_10078,name_10079,vec__9942_10068,column_10069,column_info_10070,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted))
,cljs.core.sorted_map.call(null)));

var G__10080 = seq__9943_10071;
var G__10081 = chunk__9944_10072;
var G__10082 = count__9945_10073;
var G__10083 = (i__9946_10074 + (1));
seq__9943_10071 = G__10080;
chunk__9944_10072 = G__10081;
count__9945_10073 = G__10082;
i__9946_10074 = G__10083;
continue;
} else {
var temp__4425__auto___10084__$1 = cljs.core.seq.call(null,seq__9943_10071);
if(temp__4425__auto___10084__$1){
var seq__9943_10085__$1 = temp__4425__auto___10084__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9943_10085__$1)){
var c__6945__auto___10086 = cljs.core.chunk_first.call(null,seq__9943_10085__$1);
var G__10087 = cljs.core.chunk_rest.call(null,seq__9943_10085__$1);
var G__10088 = c__6945__auto___10086;
var G__10089 = cljs.core.count.call(null,c__6945__auto___10086);
var G__10090 = (0);
seq__9943_10071 = G__10087;
chunk__9944_10072 = G__10088;
count__9945_10073 = G__10089;
i__9946_10074 = G__10090;
continue;
} else {
var map__9949_10091 = cljs.core.first.call(null,seq__9943_10085__$1);
var map__9949_10092__$1 = ((((!((map__9949_10091 == null)))?((((map__9949_10091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9949_10091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9949_10091):map__9949_10091);
var gline_10093 = cljs.core.get.call(null,map__9949_10092__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10094 = cljs.core.get.call(null,map__9949_10092__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10095 = cljs.core.get.call(null,map__9949_10092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10093], null),cljs.core.fnil.call(null,((function (seq__9943_10071,chunk__9944_10072,count__9945_10073,i__9946_10074,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9949_10091,map__9949_10092__$1,gline_10093,gcol_10094,name_10095,seq__9943_10085__$1,temp__4425__auto___10084__$1,vec__9942_10068,column_10069,column_info_10070,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_10069], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10062,new cljs.core.Keyword(null,"col","col",-1959363084),column_10069,new cljs.core.Keyword(null,"name","name",1843675177),name_10095], null));
});})(seq__9943_10071,chunk__9944_10072,count__9945_10073,i__9946_10074,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9949_10091,map__9949_10092__$1,gline_10093,gcol_10094,name_10095,seq__9943_10085__$1,temp__4425__auto___10084__$1,vec__9942_10068,column_10069,column_info_10070,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted))
,cljs.core.sorted_map.call(null)));

var G__10096 = cljs.core.next.call(null,seq__9943_10085__$1);
var G__10097 = null;
var G__10098 = (0);
var G__10099 = (0);
seq__9943_10071 = G__10096;
chunk__9944_10072 = G__10097;
count__9945_10073 = G__10098;
i__9946_10074 = G__10099;
continue;
}
} else {
}
}
break;
}

var G__10100 = seq__9938_10064;
var G__10101 = chunk__9939_10065;
var G__10102 = count__9940_10066;
var G__10103 = (i__9941_10067 + (1));
seq__9938_10064 = G__10100;
chunk__9939_10065 = G__10101;
count__9940_10066 = G__10102;
i__9941_10067 = G__10103;
continue;
} else {
var temp__4425__auto___10104__$1 = cljs.core.seq.call(null,seq__9938_10064);
if(temp__4425__auto___10104__$1){
var seq__9938_10105__$1 = temp__4425__auto___10104__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9938_10105__$1)){
var c__6945__auto___10106 = cljs.core.chunk_first.call(null,seq__9938_10105__$1);
var G__10107 = cljs.core.chunk_rest.call(null,seq__9938_10105__$1);
var G__10108 = c__6945__auto___10106;
var G__10109 = cljs.core.count.call(null,c__6945__auto___10106);
var G__10110 = (0);
seq__9938_10064 = G__10107;
chunk__9939_10065 = G__10108;
count__9940_10066 = G__10109;
i__9941_10067 = G__10110;
continue;
} else {
var vec__9951_10111 = cljs.core.first.call(null,seq__9938_10105__$1);
var column_10112 = cljs.core.nth.call(null,vec__9951_10111,(0),null);
var column_info_10113 = cljs.core.nth.call(null,vec__9951_10111,(1),null);
var seq__9952_10114 = cljs.core.seq.call(null,column_info_10113);
var chunk__9953_10115 = null;
var count__9954_10116 = (0);
var i__9955_10117 = (0);
while(true){
if((i__9955_10117 < count__9954_10116)){
var map__9956_10118 = cljs.core._nth.call(null,chunk__9953_10115,i__9955_10117);
var map__9956_10119__$1 = ((((!((map__9956_10118 == null)))?((((map__9956_10118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9956_10118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9956_10118):map__9956_10118);
var gline_10120 = cljs.core.get.call(null,map__9956_10119__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10121 = cljs.core.get.call(null,map__9956_10119__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10122 = cljs.core.get.call(null,map__9956_10119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10120], null),cljs.core.fnil.call(null,((function (seq__9952_10114,chunk__9953_10115,count__9954_10116,i__9955_10117,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9956_10118,map__9956_10119__$1,gline_10120,gcol_10121,name_10122,vec__9951_10111,column_10112,column_info_10113,seq__9938_10105__$1,temp__4425__auto___10104__$1,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_10112], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10062,new cljs.core.Keyword(null,"col","col",-1959363084),column_10112,new cljs.core.Keyword(null,"name","name",1843675177),name_10122], null));
});})(seq__9952_10114,chunk__9953_10115,count__9954_10116,i__9955_10117,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9956_10118,map__9956_10119__$1,gline_10120,gcol_10121,name_10122,vec__9951_10111,column_10112,column_info_10113,seq__9938_10105__$1,temp__4425__auto___10104__$1,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted))
,cljs.core.sorted_map.call(null)));

var G__10123 = seq__9952_10114;
var G__10124 = chunk__9953_10115;
var G__10125 = count__9954_10116;
var G__10126 = (i__9955_10117 + (1));
seq__9952_10114 = G__10123;
chunk__9953_10115 = G__10124;
count__9954_10116 = G__10125;
i__9955_10117 = G__10126;
continue;
} else {
var temp__4425__auto___10127__$2 = cljs.core.seq.call(null,seq__9952_10114);
if(temp__4425__auto___10127__$2){
var seq__9952_10128__$1 = temp__4425__auto___10127__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9952_10128__$1)){
var c__6945__auto___10129 = cljs.core.chunk_first.call(null,seq__9952_10128__$1);
var G__10130 = cljs.core.chunk_rest.call(null,seq__9952_10128__$1);
var G__10131 = c__6945__auto___10129;
var G__10132 = cljs.core.count.call(null,c__6945__auto___10129);
var G__10133 = (0);
seq__9952_10114 = G__10130;
chunk__9953_10115 = G__10131;
count__9954_10116 = G__10132;
i__9955_10117 = G__10133;
continue;
} else {
var map__9958_10134 = cljs.core.first.call(null,seq__9952_10128__$1);
var map__9958_10135__$1 = ((((!((map__9958_10134 == null)))?((((map__9958_10134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9958_10134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9958_10134):map__9958_10134);
var gline_10136 = cljs.core.get.call(null,map__9958_10135__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10137 = cljs.core.get.call(null,map__9958_10135__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10138 = cljs.core.get.call(null,map__9958_10135__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10136], null),cljs.core.fnil.call(null,((function (seq__9952_10114,chunk__9953_10115,count__9954_10116,i__9955_10117,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9958_10134,map__9958_10135__$1,gline_10136,gcol_10137,name_10138,seq__9952_10128__$1,temp__4425__auto___10127__$2,vec__9951_10111,column_10112,column_info_10113,seq__9938_10105__$1,temp__4425__auto___10104__$1,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_10112], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10062,new cljs.core.Keyword(null,"col","col",-1959363084),column_10112,new cljs.core.Keyword(null,"name","name",1843675177),name_10138], null));
});})(seq__9952_10114,chunk__9953_10115,count__9954_10116,i__9955_10117,seq__9938_10064,chunk__9939_10065,count__9940_10066,i__9941_10067,seq__9910_9960,chunk__9911_9961,count__9912_9962,i__9913_9963,map__9958_10134,map__9958_10135__$1,gline_10136,gcol_10137,name_10138,seq__9952_10128__$1,temp__4425__auto___10127__$2,vec__9951_10111,column_10112,column_info_10113,seq__9938_10105__$1,temp__4425__auto___10104__$1,vec__9937_10061,line_10062,columns_10063,seq__9910_10055__$1,temp__4425__auto___10054,inverted))
,cljs.core.sorted_map.call(null)));

var G__10139 = cljs.core.next.call(null,seq__9952_10128__$1);
var G__10140 = null;
var G__10141 = (0);
var G__10142 = (0);
seq__9952_10114 = G__10139;
chunk__9953_10115 = G__10140;
count__9954_10116 = G__10141;
i__9955_10117 = G__10142;
continue;
}
} else {
}
}
break;
}

var G__10143 = cljs.core.next.call(null,seq__9938_10105__$1);
var G__10144 = null;
var G__10145 = (0);
var G__10146 = (0);
seq__9938_10064 = G__10143;
chunk__9939_10065 = G__10144;
count__9940_10066 = G__10145;
i__9941_10067 = G__10146;
continue;
}
} else {
}
}
break;
}

var G__10147 = cljs.core.next.call(null,seq__9910_10055__$1);
var G__10148 = null;
var G__10149 = (0);
var G__10150 = (0);
seq__9910_9960 = G__10147;
chunk__9911_9961 = G__10148;
count__9912_9962 = G__10149;
i__9913_9963 = G__10150;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map