// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__10177 = s;
var map__10177__$1 = ((((!((map__10177 == null)))?((((map__10177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10177):map__10177);
var name = cljs.core.get.call(null,map__10177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__10177__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__10180 = info;
var map__10181 = G__10180;
var map__10181__$1 = ((((!((map__10181 == null)))?((((map__10181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10181):map__10181);
var shadow = cljs.core.get.call(null,map__10181__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__10180__$1 = G__10180;
while(true){
var d__$2 = d__$1;
var map__10183 = G__10180__$1;
var map__10183__$1 = ((((!((map__10183 == null)))?((((map__10183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10183):map__10183);
var shadow__$1 = cljs.core.get.call(null,map__10183__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__10185 = (d__$2 + (1));
var G__10186 = shadow__$1;
d__$1 = G__10185;
G__10180__$1 = G__10186;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__10187){
var map__10192 = p__10187;
var map__10192__$1 = ((((!((map__10192 == null)))?((((map__10192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10192):map__10192);
var name_var = map__10192__$1;
var name = cljs.core.get.call(null,map__10192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__10192__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__10194 = info;
var map__10194__$1 = ((((!((map__10194 == null)))?((((map__10194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10194):map__10194);
var ns = cljs.core.get.call(null,map__10194__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__10194__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args10196 = [];
var len__7200__auto___10199 = arguments.length;
var i__7201__auto___10200 = (0);
while(true){
if((i__7201__auto___10200 < len__7200__auto___10199)){
args10196.push((arguments[i__7201__auto___10200]));

var G__10201 = (i__7201__auto___10200 + (1));
i__7201__auto___10200 = G__10201;
continue;
} else {
}
break;
}

var G__10198 = args10196.length;
switch (G__10198) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10196.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__10204 = cp;
switch (G__10204) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__10210_10214 = cljs.core.seq.call(null,s);
var chunk__10211_10215 = null;
var count__10212_10216 = (0);
var i__10213_10217 = (0);
while(true){
if((i__10213_10217 < count__10212_10216)){
var c_10218 = cljs.core._nth.call(null,chunk__10211_10215,i__10213_10217);
sb.append(cljs.compiler.escape_char.call(null,c_10218));

var G__10219 = seq__10210_10214;
var G__10220 = chunk__10211_10215;
var G__10221 = count__10212_10216;
var G__10222 = (i__10213_10217 + (1));
seq__10210_10214 = G__10219;
chunk__10211_10215 = G__10220;
count__10212_10216 = G__10221;
i__10213_10217 = G__10222;
continue;
} else {
var temp__4425__auto___10223 = cljs.core.seq.call(null,seq__10210_10214);
if(temp__4425__auto___10223){
var seq__10210_10224__$1 = temp__4425__auto___10223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10210_10224__$1)){
var c__6945__auto___10225 = cljs.core.chunk_first.call(null,seq__10210_10224__$1);
var G__10226 = cljs.core.chunk_rest.call(null,seq__10210_10224__$1);
var G__10227 = c__6945__auto___10225;
var G__10228 = cljs.core.count.call(null,c__6945__auto___10225);
var G__10229 = (0);
seq__10210_10214 = G__10226;
chunk__10211_10215 = G__10227;
count__10212_10216 = G__10228;
i__10213_10217 = G__10229;
continue;
} else {
var c_10230 = cljs.core.first.call(null,seq__10210_10224__$1);
sb.append(cljs.compiler.escape_char.call(null,c_10230));

var G__10231 = cljs.core.next.call(null,seq__10210_10224__$1);
var G__10232 = null;
var G__10233 = (0);
var G__10234 = (0);
seq__10210_10214 = G__10231;
chunk__10211_10215 = G__10232;
count__10212_10216 = G__10233;
i__10213_10217 = G__10234;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__8744__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__8744__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__10240_10245 = ast;
var map__10240_10246__$1 = ((((!((map__10240_10245 == null)))?((((map__10240_10245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10240_10245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10240_10245):map__10240_10245);
var env_10247 = cljs.core.get.call(null,map__10240_10246__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_10247))){
var map__10242_10248 = env_10247;
var map__10242_10249__$1 = ((((!((map__10242_10248 == null)))?((((map__10242_10248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10242_10248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10242_10248):map__10242_10248);
var line_10250 = cljs.core.get.call(null,map__10242_10249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_10251 = cljs.core.get.call(null,map__10242_10249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__10242_10248,map__10242_10249__$1,line_10250,column_10251,map__10240_10245,map__10240_10246__$1,env_10247,val__8744__auto__){
return (function (m){
var minfo = (function (){var G__10244 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__10244__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__10244,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__10244);
return G__10244__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_10250 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__10242_10248,map__10242_10249__$1,line_10250,column_10251,map__10240_10245,map__10240_10246__$1,env_10247,val__8744__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_10251)?(column_10251 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__10242_10248,map__10242_10249__$1,line_10250,column_10251,map__10240_10245,map__10240_10246__$1,env_10247,val__8744__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__10242_10248,map__10242_10249__$1,line_10250,column_10251,map__10240_10245,map__10240_10246__$1,env_10247,val__8744__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__10242_10248,map__10242_10249__$1,line_10250,column_10251,map__10240_10245,map__10240_10246__$1,env_10247,val__8744__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__10242_10248,map__10242_10249__$1,line_10250,column_10251,map__10240_10245,map__10240_10246__$1,env_10247,val__8744__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__8744__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7207__auto__ = [];
var len__7200__auto___10258 = arguments.length;
var i__7201__auto___10259 = (0);
while(true){
if((i__7201__auto___10259 < len__7200__auto___10258)){
args__7207__auto__.push((arguments[i__7201__auto___10259]));

var G__10260 = (i__7201__auto___10259 + (1));
i__7201__auto___10259 = G__10260;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((0) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7208__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__10254_10261 = cljs.core.seq.call(null,xs);
var chunk__10255_10262 = null;
var count__10256_10263 = (0);
var i__10257_10264 = (0);
while(true){
if((i__10257_10264 < count__10256_10263)){
var x_10265 = cljs.core._nth.call(null,chunk__10255_10262,i__10257_10264);
if((x_10265 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_10265)){
cljs.compiler.emit.call(null,x_10265);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_10265)){
cljs.core.apply.call(null,cljs.compiler.emits,x_10265);
} else {
if(goog.isFunction(x_10265)){
x_10265.call(null);
} else {
var s_10266 = cljs.core.print_str.call(null,x_10265);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__10254_10261,chunk__10255_10262,count__10256_10263,i__10257_10264,s_10266,x_10265){
return (function (p1__10252_SHARP_){
return (p1__10252_SHARP_ + cljs.core.count.call(null,s_10266));
});})(seq__10254_10261,chunk__10255_10262,count__10256_10263,i__10257_10264,s_10266,x_10265))
);
}

cljs.core.print.call(null,s_10266);

}
}
}
}

var G__10267 = seq__10254_10261;
var G__10268 = chunk__10255_10262;
var G__10269 = count__10256_10263;
var G__10270 = (i__10257_10264 + (1));
seq__10254_10261 = G__10267;
chunk__10255_10262 = G__10268;
count__10256_10263 = G__10269;
i__10257_10264 = G__10270;
continue;
} else {
var temp__4425__auto___10271 = cljs.core.seq.call(null,seq__10254_10261);
if(temp__4425__auto___10271){
var seq__10254_10272__$1 = temp__4425__auto___10271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10254_10272__$1)){
var c__6945__auto___10273 = cljs.core.chunk_first.call(null,seq__10254_10272__$1);
var G__10274 = cljs.core.chunk_rest.call(null,seq__10254_10272__$1);
var G__10275 = c__6945__auto___10273;
var G__10276 = cljs.core.count.call(null,c__6945__auto___10273);
var G__10277 = (0);
seq__10254_10261 = G__10274;
chunk__10255_10262 = G__10275;
count__10256_10263 = G__10276;
i__10257_10264 = G__10277;
continue;
} else {
var x_10278 = cljs.core.first.call(null,seq__10254_10272__$1);
if((x_10278 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_10278)){
cljs.compiler.emit.call(null,x_10278);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_10278)){
cljs.core.apply.call(null,cljs.compiler.emits,x_10278);
} else {
if(goog.isFunction(x_10278)){
x_10278.call(null);
} else {
var s_10279 = cljs.core.print_str.call(null,x_10278);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__10254_10261,chunk__10255_10262,count__10256_10263,i__10257_10264,s_10279,x_10278,seq__10254_10272__$1,temp__4425__auto___10271){
return (function (p1__10252_SHARP_){
return (p1__10252_SHARP_ + cljs.core.count.call(null,s_10279));
});})(seq__10254_10261,chunk__10255_10262,count__10256_10263,i__10257_10264,s_10279,x_10278,seq__10254_10272__$1,temp__4425__auto___10271))
);
}

cljs.core.print.call(null,s_10279);

}
}
}
}

var G__10280 = cljs.core.next.call(null,seq__10254_10272__$1);
var G__10281 = null;
var G__10282 = (0);
var G__10283 = (0);
seq__10254_10261 = G__10280;
chunk__10255_10262 = G__10281;
count__10256_10263 = G__10282;
i__10257_10264 = G__10283;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq10253){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10253));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7207__auto__ = [];
var len__7200__auto___10288 = arguments.length;
var i__7201__auto___10289 = (0);
while(true){
if((i__7201__auto___10289 < len__7200__auto___10288)){
args__7207__auto__.push((arguments[i__7201__auto___10289]));

var G__10290 = (i__7201__auto___10289 + (1));
i__7201__auto___10289 = G__10290;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((0) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7208__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__10285){
var map__10286 = p__10285;
var map__10286__$1 = ((((!((map__10286 == null)))?((((map__10286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10286):map__10286);
var m = map__10286__$1;
var gen_line = cljs.core.get.call(null,map__10286__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq10284){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10284));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7116__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10293_10295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10294_10296 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10293_10295,_STAR_print_fn_STAR_10294_10296,sb__7116__auto__){
return (function (x__7117__auto__){
return sb__7116__auto__.append(x__7117__auto__);
});})(_STAR_print_newline_STAR_10293_10295,_STAR_print_fn_STAR_10294_10296,sb__7116__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10294_10296;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10293_10295;
}
return [cljs.core.str(sb__7116__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7055__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7059__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7059__auto__,method_table__7055__auto__,prefer_table__7056__auto__,method_cache__7057__auto__,cached_hierarchy__7058__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__10297 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__10297,(0),null);
var flags = cljs.core.nth.call(null,vec__10297,(1),null);
var pattern = cljs.core.nth.call(null,vec__10297,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__10299){
var map__10300 = p__10299;
var map__10300__$1 = ((((!((map__10300 == null)))?((((map__10300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10300):map__10300);
var arg = map__10300__$1;
var info = cljs.core.get.call(null,map__10300__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__10300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__10300__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__6142__auto__ = js_module_name;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__10302 = info__$1;
var G__10302__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__10302):G__10302);
return G__10302__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__10303){
var map__10304 = p__10303;
var map__10304__$1 = ((((!((map__10304 == null)))?((((map__10304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10304):map__10304);
var arg = map__10304__$1;
var env = cljs.core.get.call(null,map__10304__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__10304__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__10304__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__10304__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__10306 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__10306__$1 = ((((!((map__10306 == null)))?((((map__10306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10306):map__10306);
var name = cljs.core.get.call(null,map__10306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__10308){
var map__10309 = p__10308;
var map__10309__$1 = ((((!((map__10309 == null)))?((((map__10309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10309):map__10309);
var expr = cljs.core.get.call(null,map__10309__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__10309__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__10309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__10311_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__10311_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__10312){
var map__10313 = p__10312;
var map__10313__$1 = ((((!((map__10313 == null)))?((((map__10313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10313):map__10313);
var env = cljs.core.get.call(null,map__10313__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__10313__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__10313__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__10315){
var map__10316 = p__10315;
var map__10316__$1 = ((((!((map__10316 == null)))?((((map__10316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10316):map__10316);
var items = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__10318){
var map__10319 = p__10318;
var map__10319__$1 = ((((!((map__10319 == null)))?((((map__10319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10319):map__10319);
var items = cljs.core.get.call(null,map__10319__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__10319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_10321 = cljs.core.count.call(null,items);
if((cnt_10321 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_10321,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__10322_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__10322_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__10323){
var map__10324 = p__10323;
var map__10324__$1 = ((((!((map__10324 == null)))?((((map__10324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10324):map__10324);
var items = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__10326){
var map__10327 = p__10326;
var map__10327__$1 = ((((!((map__10327 == null)))?((((map__10327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10327):map__10327);
var items = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___10337 = cljs.core.seq.call(null,items);
if(temp__4425__auto___10337){
var items_10338__$1 = temp__4425__auto___10337;
var vec__10329_10339 = items_10338__$1;
var vec__10330_10340 = cljs.core.nth.call(null,vec__10329_10339,(0),null);
var k_10341 = cljs.core.nth.call(null,vec__10330_10340,(0),null);
var v_10342 = cljs.core.nth.call(null,vec__10330_10340,(1),null);
var r_10343 = cljs.core.nthnext.call(null,vec__10329_10339,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_10341),"\": ",v_10342);

var seq__10331_10344 = cljs.core.seq.call(null,r_10343);
var chunk__10332_10345 = null;
var count__10333_10346 = (0);
var i__10334_10347 = (0);
while(true){
if((i__10334_10347 < count__10333_10346)){
var vec__10335_10348 = cljs.core._nth.call(null,chunk__10332_10345,i__10334_10347);
var k_10349__$1 = cljs.core.nth.call(null,vec__10335_10348,(0),null);
var v_10350__$1 = cljs.core.nth.call(null,vec__10335_10348,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10349__$1),"\": ",v_10350__$1);

var G__10351 = seq__10331_10344;
var G__10352 = chunk__10332_10345;
var G__10353 = count__10333_10346;
var G__10354 = (i__10334_10347 + (1));
seq__10331_10344 = G__10351;
chunk__10332_10345 = G__10352;
count__10333_10346 = G__10353;
i__10334_10347 = G__10354;
continue;
} else {
var temp__4425__auto___10355__$1 = cljs.core.seq.call(null,seq__10331_10344);
if(temp__4425__auto___10355__$1){
var seq__10331_10356__$1 = temp__4425__auto___10355__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10331_10356__$1)){
var c__6945__auto___10357 = cljs.core.chunk_first.call(null,seq__10331_10356__$1);
var G__10358 = cljs.core.chunk_rest.call(null,seq__10331_10356__$1);
var G__10359 = c__6945__auto___10357;
var G__10360 = cljs.core.count.call(null,c__6945__auto___10357);
var G__10361 = (0);
seq__10331_10344 = G__10358;
chunk__10332_10345 = G__10359;
count__10333_10346 = G__10360;
i__10334_10347 = G__10361;
continue;
} else {
var vec__10336_10362 = cljs.core.first.call(null,seq__10331_10356__$1);
var k_10363__$1 = cljs.core.nth.call(null,vec__10336_10362,(0),null);
var v_10364__$1 = cljs.core.nth.call(null,vec__10336_10362,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_10363__$1),"\": ",v_10364__$1);

var G__10365 = cljs.core.next.call(null,seq__10331_10356__$1);
var G__10366 = null;
var G__10367 = (0);
var G__10368 = (0);
seq__10331_10344 = G__10365;
chunk__10332_10345 = G__10366;
count__10333_10346 = G__10367;
i__10334_10347 = G__10368;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__10369){
var map__10370 = p__10369;
var map__10370__$1 = ((((!((map__10370 == null)))?((((map__10370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10370):map__10370);
var form = cljs.core.get.call(null,map__10370__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__10370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__10372){
var map__10375 = p__10372;
var map__10375__$1 = ((((!((map__10375 == null)))?((((map__10375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10375):map__10375);
var op = cljs.core.get.call(null,map__10375__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__10375__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6130__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6130__auto__){
var and__6130__auto____$1 = form;
if(cljs.core.truth_(and__6130__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__10377){
var map__10380 = p__10377;
var map__10380__$1 = ((((!((map__10380 == null)))?((((map__10380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10380):map__10380);
var op = cljs.core.get.call(null,map__10380__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__10380__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__6142__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__10382){
var map__10383 = p__10382;
var map__10383__$1 = ((((!((map__10383 == null)))?((((map__10383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10383):map__10383);
var test = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__6142__auto__ = unchecked;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__10385){
var map__10386 = p__10385;
var map__10386__$1 = ((((!((map__10386 == null)))?((((map__10386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10386):map__10386);
var v = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__10388_10402 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__10389_10403 = null;
var count__10390_10404 = (0);
var i__10391_10405 = (0);
while(true){
if((i__10391_10405 < count__10390_10404)){
var vec__10392_10406 = cljs.core._nth.call(null,chunk__10389_10403,i__10391_10405);
var ts_10407 = cljs.core.nth.call(null,vec__10392_10406,(0),null);
var then_10408 = cljs.core.nth.call(null,vec__10392_10406,(1),null);
var seq__10393_10409 = cljs.core.seq.call(null,ts_10407);
var chunk__10394_10410 = null;
var count__10395_10411 = (0);
var i__10396_10412 = (0);
while(true){
if((i__10396_10412 < count__10395_10411)){
var test_10413 = cljs.core._nth.call(null,chunk__10394_10410,i__10396_10412);
cljs.compiler.emitln.call(null,"case ",test_10413,":");

var G__10414 = seq__10393_10409;
var G__10415 = chunk__10394_10410;
var G__10416 = count__10395_10411;
var G__10417 = (i__10396_10412 + (1));
seq__10393_10409 = G__10414;
chunk__10394_10410 = G__10415;
count__10395_10411 = G__10416;
i__10396_10412 = G__10417;
continue;
} else {
var temp__4425__auto___10418 = cljs.core.seq.call(null,seq__10393_10409);
if(temp__4425__auto___10418){
var seq__10393_10419__$1 = temp__4425__auto___10418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10393_10419__$1)){
var c__6945__auto___10420 = cljs.core.chunk_first.call(null,seq__10393_10419__$1);
var G__10421 = cljs.core.chunk_rest.call(null,seq__10393_10419__$1);
var G__10422 = c__6945__auto___10420;
var G__10423 = cljs.core.count.call(null,c__6945__auto___10420);
var G__10424 = (0);
seq__10393_10409 = G__10421;
chunk__10394_10410 = G__10422;
count__10395_10411 = G__10423;
i__10396_10412 = G__10424;
continue;
} else {
var test_10425 = cljs.core.first.call(null,seq__10393_10419__$1);
cljs.compiler.emitln.call(null,"case ",test_10425,":");

var G__10426 = cljs.core.next.call(null,seq__10393_10419__$1);
var G__10427 = null;
var G__10428 = (0);
var G__10429 = (0);
seq__10393_10409 = G__10426;
chunk__10394_10410 = G__10427;
count__10395_10411 = G__10428;
i__10396_10412 = G__10429;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10408);
} else {
cljs.compiler.emitln.call(null,then_10408);
}

cljs.compiler.emitln.call(null,"break;");

var G__10430 = seq__10388_10402;
var G__10431 = chunk__10389_10403;
var G__10432 = count__10390_10404;
var G__10433 = (i__10391_10405 + (1));
seq__10388_10402 = G__10430;
chunk__10389_10403 = G__10431;
count__10390_10404 = G__10432;
i__10391_10405 = G__10433;
continue;
} else {
var temp__4425__auto___10434 = cljs.core.seq.call(null,seq__10388_10402);
if(temp__4425__auto___10434){
var seq__10388_10435__$1 = temp__4425__auto___10434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10388_10435__$1)){
var c__6945__auto___10436 = cljs.core.chunk_first.call(null,seq__10388_10435__$1);
var G__10437 = cljs.core.chunk_rest.call(null,seq__10388_10435__$1);
var G__10438 = c__6945__auto___10436;
var G__10439 = cljs.core.count.call(null,c__6945__auto___10436);
var G__10440 = (0);
seq__10388_10402 = G__10437;
chunk__10389_10403 = G__10438;
count__10390_10404 = G__10439;
i__10391_10405 = G__10440;
continue;
} else {
var vec__10397_10441 = cljs.core.first.call(null,seq__10388_10435__$1);
var ts_10442 = cljs.core.nth.call(null,vec__10397_10441,(0),null);
var then_10443 = cljs.core.nth.call(null,vec__10397_10441,(1),null);
var seq__10398_10444 = cljs.core.seq.call(null,ts_10442);
var chunk__10399_10445 = null;
var count__10400_10446 = (0);
var i__10401_10447 = (0);
while(true){
if((i__10401_10447 < count__10400_10446)){
var test_10448 = cljs.core._nth.call(null,chunk__10399_10445,i__10401_10447);
cljs.compiler.emitln.call(null,"case ",test_10448,":");

var G__10449 = seq__10398_10444;
var G__10450 = chunk__10399_10445;
var G__10451 = count__10400_10446;
var G__10452 = (i__10401_10447 + (1));
seq__10398_10444 = G__10449;
chunk__10399_10445 = G__10450;
count__10400_10446 = G__10451;
i__10401_10447 = G__10452;
continue;
} else {
var temp__4425__auto___10453__$1 = cljs.core.seq.call(null,seq__10398_10444);
if(temp__4425__auto___10453__$1){
var seq__10398_10454__$1 = temp__4425__auto___10453__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10398_10454__$1)){
var c__6945__auto___10455 = cljs.core.chunk_first.call(null,seq__10398_10454__$1);
var G__10456 = cljs.core.chunk_rest.call(null,seq__10398_10454__$1);
var G__10457 = c__6945__auto___10455;
var G__10458 = cljs.core.count.call(null,c__6945__auto___10455);
var G__10459 = (0);
seq__10398_10444 = G__10456;
chunk__10399_10445 = G__10457;
count__10400_10446 = G__10458;
i__10401_10447 = G__10459;
continue;
} else {
var test_10460 = cljs.core.first.call(null,seq__10398_10454__$1);
cljs.compiler.emitln.call(null,"case ",test_10460,":");

var G__10461 = cljs.core.next.call(null,seq__10398_10454__$1);
var G__10462 = null;
var G__10463 = (0);
var G__10464 = (0);
seq__10398_10444 = G__10461;
chunk__10399_10445 = G__10462;
count__10400_10446 = G__10463;
i__10401_10447 = G__10464;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_10443);
} else {
cljs.compiler.emitln.call(null,then_10443);
}

cljs.compiler.emitln.call(null,"break;");

var G__10465 = cljs.core.next.call(null,seq__10388_10435__$1);
var G__10466 = null;
var G__10467 = (0);
var G__10468 = (0);
seq__10388_10402 = G__10465;
chunk__10389_10403 = G__10466;
count__10390_10404 = G__10467;
i__10391_10405 = G__10468;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__10469){
var map__10470 = p__10469;
var map__10470__$1 = ((((!((map__10470 == null)))?((((map__10470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10470):map__10470);
var throw$ = cljs.core.get.call(null,map__10470__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__10470__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__10475 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__10475,(0),null);
var rstr = cljs.core.nth.call(null,vec__10475,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__10475,fstr,rstr,ret_t,axstr){
return (function (p1__10472_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__10472_SHARP_);
});})(idx,vec__10475,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__10476 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__10476__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__10476),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__10476);
return G__10476__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__10477_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__10477_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__10480 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__10480,(0),null);
var ts = cljs.core.nth.call(null,vec__10480,(1),null);
var n = cljs.core.nth.call(null,vec__10480,(2),null);
var xs = cljs.core.nthnext.call(null,vec__10480,(3));
if(cljs.core.truth_((function (){var and__6130__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__6130__auto__){
var and__6130__auto____$1 = ts;
if(cljs.core.truth_(and__6130__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__10481 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__10481,(0),null);
var ts = cljs.core.nth.call(null,vec__10481,(1),null);
var xs = cljs.core.nthnext.call(null,vec__10481,(2));
if(cljs.core.truth_((function (){var and__6130__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__6130__auto__){
var and__6130__auto____$1 = ts;
if(cljs.core.truth_(and__6130__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args10483 = [];
var len__7200__auto___10510 = arguments.length;
var i__7201__auto___10511 = (0);
while(true){
if((i__7201__auto___10511 < len__7200__auto___10510)){
args10483.push((arguments[i__7201__auto___10511]));

var G__10512 = (i__7201__auto___10511 + (1));
i__7201__auto___10511 = G__10512;
continue;
} else {
}
break;
}

var G__10485 = args10483.length;
switch (G__10485) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10483.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__10501 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__10482_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__10482_SHARP_);
} else {
return p1__10482_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__10501,(0),null);
var ys = cljs.core.nthnext.call(null,vec__10501,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__10502 = cljs.core.seq.call(null,ys);
var chunk__10503 = null;
var count__10504 = (0);
var i__10505 = (0);
while(true){
if((i__10505 < count__10504)){
var next_line = cljs.core._nth.call(null,chunk__10503,i__10505);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__10514 = seq__10502;
var G__10515 = chunk__10503;
var G__10516 = count__10504;
var G__10517 = (i__10505 + (1));
seq__10502 = G__10514;
chunk__10503 = G__10515;
count__10504 = G__10516;
i__10505 = G__10517;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10502);
if(temp__4425__auto__){
var seq__10502__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10502__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__10502__$1);
var G__10518 = cljs.core.chunk_rest.call(null,seq__10502__$1);
var G__10519 = c__6945__auto__;
var G__10520 = cljs.core.count.call(null,c__6945__auto__);
var G__10521 = (0);
seq__10502 = G__10518;
chunk__10503 = G__10519;
count__10504 = G__10520;
i__10505 = G__10521;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__10502__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__10522 = cljs.core.next.call(null,seq__10502__$1);
var G__10523 = null;
var G__10524 = (0);
var G__10525 = (0);
seq__10502 = G__10522;
chunk__10503 = G__10523;
count__10504 = G__10524;
i__10505 = G__10525;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__10506_10526 = cljs.core.seq.call(null,docs__$2);
var chunk__10507_10527 = null;
var count__10508_10528 = (0);
var i__10509_10529 = (0);
while(true){
if((i__10509_10529 < count__10508_10528)){
var e_10530 = cljs.core._nth.call(null,chunk__10507_10527,i__10509_10529);
if(cljs.core.truth_(e_10530)){
print_comment_lines.call(null,e_10530);
} else {
}

var G__10531 = seq__10506_10526;
var G__10532 = chunk__10507_10527;
var G__10533 = count__10508_10528;
var G__10534 = (i__10509_10529 + (1));
seq__10506_10526 = G__10531;
chunk__10507_10527 = G__10532;
count__10508_10528 = G__10533;
i__10509_10529 = G__10534;
continue;
} else {
var temp__4425__auto___10535 = cljs.core.seq.call(null,seq__10506_10526);
if(temp__4425__auto___10535){
var seq__10506_10536__$1 = temp__4425__auto___10535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10506_10536__$1)){
var c__6945__auto___10537 = cljs.core.chunk_first.call(null,seq__10506_10536__$1);
var G__10538 = cljs.core.chunk_rest.call(null,seq__10506_10536__$1);
var G__10539 = c__6945__auto___10537;
var G__10540 = cljs.core.count.call(null,c__6945__auto___10537);
var G__10541 = (0);
seq__10506_10526 = G__10538;
chunk__10507_10527 = G__10539;
count__10508_10528 = G__10540;
i__10509_10529 = G__10541;
continue;
} else {
var e_10542 = cljs.core.first.call(null,seq__10506_10536__$1);
if(cljs.core.truth_(e_10542)){
print_comment_lines.call(null,e_10542);
} else {
}

var G__10543 = cljs.core.next.call(null,seq__10506_10536__$1);
var G__10544 = null;
var G__10545 = (0);
var G__10546 = (0);
seq__10506_10526 = G__10543;
chunk__10507_10527 = G__10544;
count__10508_10528 = G__10545;
i__10509_10529 = G__10546;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__6130__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__10548_SHARP_){
return goog.string.startsWith(p1__10548_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = opts;
if(cljs.core.truth_(and__6130__auto____$1)){
var and__6130__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6130__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__6130__auto____$2;
}
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__10549){
var map__10550 = p__10549;
var map__10550__$1 = ((((!((map__10550 == null)))?((((map__10550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10550):map__10550);
var name = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6142__auto__ = init;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__6130__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6130__auto__)){
return test;
} else {
return and__6130__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__10552){
var map__10569 = p__10552;
var map__10569__$1 = ((((!((map__10569 == null)))?((((map__10569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10569):map__10569);
var name = cljs.core.get.call(null,map__10569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__10569__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__10569__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__10571_10585 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__10572_10586 = null;
var count__10573_10587 = (0);
var i__10574_10588 = (0);
while(true){
if((i__10574_10588 < count__10573_10587)){
var vec__10575_10589 = cljs.core._nth.call(null,chunk__10572_10586,i__10574_10588);
var i_10590 = cljs.core.nth.call(null,vec__10575_10589,(0),null);
var param_10591 = cljs.core.nth.call(null,vec__10575_10589,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10591);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__10592 = seq__10571_10585;
var G__10593 = chunk__10572_10586;
var G__10594 = count__10573_10587;
var G__10595 = (i__10574_10588 + (1));
seq__10571_10585 = G__10592;
chunk__10572_10586 = G__10593;
count__10573_10587 = G__10594;
i__10574_10588 = G__10595;
continue;
} else {
var temp__4425__auto___10596 = cljs.core.seq.call(null,seq__10571_10585);
if(temp__4425__auto___10596){
var seq__10571_10597__$1 = temp__4425__auto___10596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10571_10597__$1)){
var c__6945__auto___10598 = cljs.core.chunk_first.call(null,seq__10571_10597__$1);
var G__10599 = cljs.core.chunk_rest.call(null,seq__10571_10597__$1);
var G__10600 = c__6945__auto___10598;
var G__10601 = cljs.core.count.call(null,c__6945__auto___10598);
var G__10602 = (0);
seq__10571_10585 = G__10599;
chunk__10572_10586 = G__10600;
count__10573_10587 = G__10601;
i__10574_10588 = G__10602;
continue;
} else {
var vec__10576_10603 = cljs.core.first.call(null,seq__10571_10597__$1);
var i_10604 = cljs.core.nth.call(null,vec__10576_10603,(0),null);
var param_10605 = cljs.core.nth.call(null,vec__10576_10603,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_10605);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__10606 = cljs.core.next.call(null,seq__10571_10597__$1);
var G__10607 = null;
var G__10608 = (0);
var G__10609 = (0);
seq__10571_10585 = G__10606;
chunk__10572_10586 = G__10607;
count__10573_10587 = G__10608;
i__10574_10588 = G__10609;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__10577_10610 = cljs.core.seq.call(null,params);
var chunk__10578_10611 = null;
var count__10579_10612 = (0);
var i__10580_10613 = (0);
while(true){
if((i__10580_10613 < count__10579_10612)){
var param_10614 = cljs.core._nth.call(null,chunk__10578_10611,i__10580_10613);
cljs.compiler.emit.call(null,param_10614);

if(cljs.core._EQ_.call(null,param_10614,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10615 = seq__10577_10610;
var G__10616 = chunk__10578_10611;
var G__10617 = count__10579_10612;
var G__10618 = (i__10580_10613 + (1));
seq__10577_10610 = G__10615;
chunk__10578_10611 = G__10616;
count__10579_10612 = G__10617;
i__10580_10613 = G__10618;
continue;
} else {
var temp__4425__auto___10619 = cljs.core.seq.call(null,seq__10577_10610);
if(temp__4425__auto___10619){
var seq__10577_10620__$1 = temp__4425__auto___10619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10577_10620__$1)){
var c__6945__auto___10621 = cljs.core.chunk_first.call(null,seq__10577_10620__$1);
var G__10622 = cljs.core.chunk_rest.call(null,seq__10577_10620__$1);
var G__10623 = c__6945__auto___10621;
var G__10624 = cljs.core.count.call(null,c__6945__auto___10621);
var G__10625 = (0);
seq__10577_10610 = G__10622;
chunk__10578_10611 = G__10623;
count__10579_10612 = G__10624;
i__10580_10613 = G__10625;
continue;
} else {
var param_10626 = cljs.core.first.call(null,seq__10577_10620__$1);
cljs.compiler.emit.call(null,param_10626);

if(cljs.core._EQ_.call(null,param_10626,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10627 = cljs.core.next.call(null,seq__10577_10620__$1);
var G__10628 = null;
var G__10629 = (0);
var G__10630 = (0);
seq__10577_10610 = G__10627;
chunk__10578_10611 = G__10628;
count__10579_10612 = G__10629;
i__10580_10613 = G__10630;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__10581_10631 = cljs.core.seq.call(null,params);
var chunk__10582_10632 = null;
var count__10583_10633 = (0);
var i__10584_10634 = (0);
while(true){
if((i__10584_10634 < count__10583_10633)){
var param_10635 = cljs.core._nth.call(null,chunk__10582_10632,i__10584_10634);
cljs.compiler.emit.call(null,param_10635);

if(cljs.core._EQ_.call(null,param_10635,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10636 = seq__10581_10631;
var G__10637 = chunk__10582_10632;
var G__10638 = count__10583_10633;
var G__10639 = (i__10584_10634 + (1));
seq__10581_10631 = G__10636;
chunk__10582_10632 = G__10637;
count__10583_10633 = G__10638;
i__10584_10634 = G__10639;
continue;
} else {
var temp__4425__auto___10640 = cljs.core.seq.call(null,seq__10581_10631);
if(temp__4425__auto___10640){
var seq__10581_10641__$1 = temp__4425__auto___10640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10581_10641__$1)){
var c__6945__auto___10642 = cljs.core.chunk_first.call(null,seq__10581_10641__$1);
var G__10643 = cljs.core.chunk_rest.call(null,seq__10581_10641__$1);
var G__10644 = c__6945__auto___10642;
var G__10645 = cljs.core.count.call(null,c__6945__auto___10642);
var G__10646 = (0);
seq__10581_10631 = G__10643;
chunk__10582_10632 = G__10644;
count__10583_10633 = G__10645;
i__10584_10634 = G__10646;
continue;
} else {
var param_10647 = cljs.core.first.call(null,seq__10581_10641__$1);
cljs.compiler.emit.call(null,param_10647);

if(cljs.core._EQ_.call(null,param_10647,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10648 = cljs.core.next.call(null,seq__10581_10641__$1);
var G__10649 = null;
var G__10650 = (0);
var G__10651 = (0);
seq__10581_10631 = G__10648;
chunk__10582_10632 = G__10649;
count__10583_10633 = G__10650;
i__10584_10634 = G__10651;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__10656 = cljs.core.seq.call(null,params);
var chunk__10657 = null;
var count__10658 = (0);
var i__10659 = (0);
while(true){
if((i__10659 < count__10658)){
var param = cljs.core._nth.call(null,chunk__10657,i__10659);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10660 = seq__10656;
var G__10661 = chunk__10657;
var G__10662 = count__10658;
var G__10663 = (i__10659 + (1));
seq__10656 = G__10660;
chunk__10657 = G__10661;
count__10658 = G__10662;
i__10659 = G__10663;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10656);
if(temp__4425__auto__){
var seq__10656__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10656__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__10656__$1);
var G__10664 = cljs.core.chunk_rest.call(null,seq__10656__$1);
var G__10665 = c__6945__auto__;
var G__10666 = cljs.core.count.call(null,c__6945__auto__);
var G__10667 = (0);
seq__10656 = G__10664;
chunk__10657 = G__10665;
count__10658 = G__10666;
i__10659 = G__10667;
continue;
} else {
var param = cljs.core.first.call(null,seq__10656__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10668 = cljs.core.next.call(null,seq__10656__$1);
var G__10669 = null;
var G__10670 = (0);
var G__10671 = (0);
seq__10656 = G__10668;
chunk__10657 = G__10669;
count__10658 = G__10670;
i__10659 = G__10671;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__10672){
var map__10675 = p__10672;
var map__10675__$1 = ((((!((map__10675 == null)))?((((map__10675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10675):map__10675);
var type = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__10677){
var map__10688 = p__10677;
var map__10688__$1 = ((((!((map__10688 == null)))?((((map__10688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10688):map__10688);
var f = map__10688__$1;
var type = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_10698__$1 = (function (){var or__6142__auto__ = name;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10699 = cljs.compiler.munge.call(null,name_10698__$1);
var delegate_name_10700 = [cljs.core.str(mname_10699),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_10700," = function (");

var seq__10690_10701 = cljs.core.seq.call(null,params);
var chunk__10691_10702 = null;
var count__10692_10703 = (0);
var i__10693_10704 = (0);
while(true){
if((i__10693_10704 < count__10692_10703)){
var param_10705 = cljs.core._nth.call(null,chunk__10691_10702,i__10693_10704);
cljs.compiler.emit.call(null,param_10705);

if(cljs.core._EQ_.call(null,param_10705,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10706 = seq__10690_10701;
var G__10707 = chunk__10691_10702;
var G__10708 = count__10692_10703;
var G__10709 = (i__10693_10704 + (1));
seq__10690_10701 = G__10706;
chunk__10691_10702 = G__10707;
count__10692_10703 = G__10708;
i__10693_10704 = G__10709;
continue;
} else {
var temp__4425__auto___10710 = cljs.core.seq.call(null,seq__10690_10701);
if(temp__4425__auto___10710){
var seq__10690_10711__$1 = temp__4425__auto___10710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10690_10711__$1)){
var c__6945__auto___10712 = cljs.core.chunk_first.call(null,seq__10690_10711__$1);
var G__10713 = cljs.core.chunk_rest.call(null,seq__10690_10711__$1);
var G__10714 = c__6945__auto___10712;
var G__10715 = cljs.core.count.call(null,c__6945__auto___10712);
var G__10716 = (0);
seq__10690_10701 = G__10713;
chunk__10691_10702 = G__10714;
count__10692_10703 = G__10715;
i__10693_10704 = G__10716;
continue;
} else {
var param_10717 = cljs.core.first.call(null,seq__10690_10711__$1);
cljs.compiler.emit.call(null,param_10717);

if(cljs.core._EQ_.call(null,param_10717,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10718 = cljs.core.next.call(null,seq__10690_10711__$1);
var G__10719 = null;
var G__10720 = (0);
var G__10721 = (0);
seq__10690_10701 = G__10718;
chunk__10691_10702 = G__10719;
count__10692_10703 = G__10720;
i__10693_10704 = G__10721;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_10699," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_10722 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_10722,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_10700,".call(this,");

var seq__10694_10723 = cljs.core.seq.call(null,params);
var chunk__10695_10724 = null;
var count__10696_10725 = (0);
var i__10697_10726 = (0);
while(true){
if((i__10697_10726 < count__10696_10725)){
var param_10727 = cljs.core._nth.call(null,chunk__10695_10724,i__10697_10726);
cljs.compiler.emit.call(null,param_10727);

if(cljs.core._EQ_.call(null,param_10727,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10728 = seq__10694_10723;
var G__10729 = chunk__10695_10724;
var G__10730 = count__10696_10725;
var G__10731 = (i__10697_10726 + (1));
seq__10694_10723 = G__10728;
chunk__10695_10724 = G__10729;
count__10696_10725 = G__10730;
i__10697_10726 = G__10731;
continue;
} else {
var temp__4425__auto___10732 = cljs.core.seq.call(null,seq__10694_10723);
if(temp__4425__auto___10732){
var seq__10694_10733__$1 = temp__4425__auto___10732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10694_10733__$1)){
var c__6945__auto___10734 = cljs.core.chunk_first.call(null,seq__10694_10733__$1);
var G__10735 = cljs.core.chunk_rest.call(null,seq__10694_10733__$1);
var G__10736 = c__6945__auto___10734;
var G__10737 = cljs.core.count.call(null,c__6945__auto___10734);
var G__10738 = (0);
seq__10694_10723 = G__10735;
chunk__10695_10724 = G__10736;
count__10696_10725 = G__10737;
i__10697_10726 = G__10738;
continue;
} else {
var param_10739 = cljs.core.first.call(null,seq__10694_10733__$1);
cljs.compiler.emit.call(null,param_10739);

if(cljs.core._EQ_.call(null,param_10739,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__10740 = cljs.core.next.call(null,seq__10694_10733__$1);
var G__10741 = null;
var G__10742 = (0);
var G__10743 = (0);
seq__10694_10723 = G__10740;
chunk__10695_10724 = G__10741;
count__10696_10725 = G__10742;
i__10697_10726 = G__10743;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_10699,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_10699,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_10698__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_10699,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10700,";");

cljs.compiler.emitln.call(null,"return ",mname_10699,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__10747){
var map__10748 = p__10747;
var map__10748__$1 = ((((!((map__10748 == null)))?((((map__10748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10748):map__10748);
var name = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__10748__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10744_SHARP_){
var and__6130__auto__ = p1__10744_SHARP_;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__10744_SHARP_));
} else {
return and__6130__auto__;
}
});})(map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_10769__$1 = (function (){var or__6142__auto__ = name;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_10770 = cljs.compiler.munge.call(null,name_10769__$1);
var maxparams_10771 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_10772 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_10769__$1,mname_10770,maxparams_10771,loop_locals,map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_10770),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_10769__$1,mname_10770,maxparams_10771,loop_locals,map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_10773 = cljs.core.sort_by.call(null,((function (name_10769__$1,mname_10770,maxparams_10771,mmap_10772,loop_locals,map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10745_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__10745_SHARP_)));
});})(name_10769__$1,mname_10770,maxparams_10771,mmap_10772,loop_locals,map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_10772));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_10770," = null;");

var seq__10750_10774 = cljs.core.seq.call(null,ms_10773);
var chunk__10751_10775 = null;
var count__10752_10776 = (0);
var i__10753_10777 = (0);
while(true){
if((i__10753_10777 < count__10752_10776)){
var vec__10754_10778 = cljs.core._nth.call(null,chunk__10751_10775,i__10753_10777);
var n_10779 = cljs.core.nth.call(null,vec__10754_10778,(0),null);
var meth_10780 = cljs.core.nth.call(null,vec__10754_10778,(1),null);
cljs.compiler.emits.call(null,"var ",n_10779," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10780))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10780);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10780);
}

cljs.compiler.emitln.call(null,";");

var G__10781 = seq__10750_10774;
var G__10782 = chunk__10751_10775;
var G__10783 = count__10752_10776;
var G__10784 = (i__10753_10777 + (1));
seq__10750_10774 = G__10781;
chunk__10751_10775 = G__10782;
count__10752_10776 = G__10783;
i__10753_10777 = G__10784;
continue;
} else {
var temp__4425__auto___10785 = cljs.core.seq.call(null,seq__10750_10774);
if(temp__4425__auto___10785){
var seq__10750_10786__$1 = temp__4425__auto___10785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10750_10786__$1)){
var c__6945__auto___10787 = cljs.core.chunk_first.call(null,seq__10750_10786__$1);
var G__10788 = cljs.core.chunk_rest.call(null,seq__10750_10786__$1);
var G__10789 = c__6945__auto___10787;
var G__10790 = cljs.core.count.call(null,c__6945__auto___10787);
var G__10791 = (0);
seq__10750_10774 = G__10788;
chunk__10751_10775 = G__10789;
count__10752_10776 = G__10790;
i__10753_10777 = G__10791;
continue;
} else {
var vec__10755_10792 = cljs.core.first.call(null,seq__10750_10786__$1);
var n_10793 = cljs.core.nth.call(null,vec__10755_10792,(0),null);
var meth_10794 = cljs.core.nth.call(null,vec__10755_10792,(1),null);
cljs.compiler.emits.call(null,"var ",n_10793," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10794))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_10794);
} else {
cljs.compiler.emit_fn_method.call(null,meth_10794);
}

cljs.compiler.emitln.call(null,";");

var G__10795 = cljs.core.next.call(null,seq__10750_10786__$1);
var G__10796 = null;
var G__10797 = (0);
var G__10798 = (0);
seq__10750_10774 = G__10795;
chunk__10751_10775 = G__10796;
count__10752_10776 = G__10797;
i__10753_10777 = G__10798;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_10770," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_10771),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_10771)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_10771));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__10756_10799 = cljs.core.seq.call(null,ms_10773);
var chunk__10757_10800 = null;
var count__10758_10801 = (0);
var i__10759_10802 = (0);
while(true){
if((i__10759_10802 < count__10758_10801)){
var vec__10760_10803 = cljs.core._nth.call(null,chunk__10757_10800,i__10759_10802);
var n_10804 = cljs.core.nth.call(null,vec__10760_10803,(0),null);
var meth_10805 = cljs.core.nth.call(null,vec__10760_10803,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10805))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10806 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10806," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10807 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10806," = new cljs.core.IndexedSeq(",a_10807,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10804,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10771)),(((cljs.core.count.call(null,maxparams_10771) > (1)))?", ":null),restarg_10806,");");
} else {
var pcnt_10808 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10805));
cljs.compiler.emitln.call(null,"case ",pcnt_10808,":");

cljs.compiler.emitln.call(null,"return ",n_10804,".call(this",(((pcnt_10808 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10808,maxparams_10771))),",")),");");
}

var G__10809 = seq__10756_10799;
var G__10810 = chunk__10757_10800;
var G__10811 = count__10758_10801;
var G__10812 = (i__10759_10802 + (1));
seq__10756_10799 = G__10809;
chunk__10757_10800 = G__10810;
count__10758_10801 = G__10811;
i__10759_10802 = G__10812;
continue;
} else {
var temp__4425__auto___10813 = cljs.core.seq.call(null,seq__10756_10799);
if(temp__4425__auto___10813){
var seq__10756_10814__$1 = temp__4425__auto___10813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10756_10814__$1)){
var c__6945__auto___10815 = cljs.core.chunk_first.call(null,seq__10756_10814__$1);
var G__10816 = cljs.core.chunk_rest.call(null,seq__10756_10814__$1);
var G__10817 = c__6945__auto___10815;
var G__10818 = cljs.core.count.call(null,c__6945__auto___10815);
var G__10819 = (0);
seq__10756_10799 = G__10816;
chunk__10757_10800 = G__10817;
count__10758_10801 = G__10818;
i__10759_10802 = G__10819;
continue;
} else {
var vec__10761_10820 = cljs.core.first.call(null,seq__10756_10814__$1);
var n_10821 = cljs.core.nth.call(null,vec__10761_10820,(0),null);
var meth_10822 = cljs.core.nth.call(null,vec__10761_10820,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10822))){
cljs.compiler.emitln.call(null,"default:");

var restarg_10823 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_10823," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_10824 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_10823," = new cljs.core.IndexedSeq(",a_10824,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_10821,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_10771)),(((cljs.core.count.call(null,maxparams_10771) > (1)))?", ":null),restarg_10823,");");
} else {
var pcnt_10825 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10822));
cljs.compiler.emitln.call(null,"case ",pcnt_10825,":");

cljs.compiler.emitln.call(null,"return ",n_10821,".call(this",(((pcnt_10825 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_10825,maxparams_10771))),",")),");");
}

var G__10826 = cljs.core.next.call(null,seq__10756_10814__$1);
var G__10827 = null;
var G__10828 = (0);
var G__10829 = (0);
seq__10756_10799 = G__10826;
chunk__10757_10800 = G__10827;
count__10758_10801 = G__10828;
i__10759_10802 = G__10829;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_10770,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_10770,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_10769__$1,mname_10770,maxparams_10771,mmap_10772,ms_10773,loop_locals,map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__10746_SHARP_){
var vec__10762 = p1__10746_SHARP_;
var n = cljs.core.nth.call(null,vec__10762,(0),null);
var m = cljs.core.nth.call(null,vec__10762,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_10769__$1,mname_10770,maxparams_10771,mmap_10772,ms_10773,loop_locals,map__10748,map__10748__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_10773),".cljs$lang$applyTo;");
} else {
}

var seq__10763_10830 = cljs.core.seq.call(null,ms_10773);
var chunk__10764_10831 = null;
var count__10765_10832 = (0);
var i__10766_10833 = (0);
while(true){
if((i__10766_10833 < count__10765_10832)){
var vec__10767_10834 = cljs.core._nth.call(null,chunk__10764_10831,i__10766_10833);
var n_10835 = cljs.core.nth.call(null,vec__10767_10834,(0),null);
var meth_10836 = cljs.core.nth.call(null,vec__10767_10834,(1),null);
var c_10837 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10836));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10836))){
cljs.compiler.emitln.call(null,mname_10770,".cljs$core$IFn$_invoke$arity$variadic = ",n_10835,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10770,".cljs$core$IFn$_invoke$arity$",c_10837," = ",n_10835,";");
}

var G__10838 = seq__10763_10830;
var G__10839 = chunk__10764_10831;
var G__10840 = count__10765_10832;
var G__10841 = (i__10766_10833 + (1));
seq__10763_10830 = G__10838;
chunk__10764_10831 = G__10839;
count__10765_10832 = G__10840;
i__10766_10833 = G__10841;
continue;
} else {
var temp__4425__auto___10842 = cljs.core.seq.call(null,seq__10763_10830);
if(temp__4425__auto___10842){
var seq__10763_10843__$1 = temp__4425__auto___10842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10763_10843__$1)){
var c__6945__auto___10844 = cljs.core.chunk_first.call(null,seq__10763_10843__$1);
var G__10845 = cljs.core.chunk_rest.call(null,seq__10763_10843__$1);
var G__10846 = c__6945__auto___10844;
var G__10847 = cljs.core.count.call(null,c__6945__auto___10844);
var G__10848 = (0);
seq__10763_10830 = G__10845;
chunk__10764_10831 = G__10846;
count__10765_10832 = G__10847;
i__10766_10833 = G__10848;
continue;
} else {
var vec__10768_10849 = cljs.core.first.call(null,seq__10763_10843__$1);
var n_10850 = cljs.core.nth.call(null,vec__10768_10849,(0),null);
var meth_10851 = cljs.core.nth.call(null,vec__10768_10849,(1),null);
var c_10852 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10851));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_10851))){
cljs.compiler.emitln.call(null,mname_10770,".cljs$core$IFn$_invoke$arity$variadic = ",n_10850,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_10770,".cljs$core$IFn$_invoke$arity$",c_10852," = ",n_10850,";");
}

var G__10853 = cljs.core.next.call(null,seq__10763_10843__$1);
var G__10854 = null;
var G__10855 = (0);
var G__10856 = (0);
seq__10763_10830 = G__10853;
chunk__10764_10831 = G__10854;
count__10765_10832 = G__10855;
i__10766_10833 = G__10856;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_10770,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__10857){
var map__10858 = p__10857;
var map__10858__$1 = ((((!((map__10858 == null)))?((((map__10858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10858):map__10858);
var statements = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6130__auto__ = statements;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6130__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__10860_10864 = cljs.core.seq.call(null,statements);
var chunk__10861_10865 = null;
var count__10862_10866 = (0);
var i__10863_10867 = (0);
while(true){
if((i__10863_10867 < count__10862_10866)){
var s_10868 = cljs.core._nth.call(null,chunk__10861_10865,i__10863_10867);
cljs.compiler.emitln.call(null,s_10868);

var G__10869 = seq__10860_10864;
var G__10870 = chunk__10861_10865;
var G__10871 = count__10862_10866;
var G__10872 = (i__10863_10867 + (1));
seq__10860_10864 = G__10869;
chunk__10861_10865 = G__10870;
count__10862_10866 = G__10871;
i__10863_10867 = G__10872;
continue;
} else {
var temp__4425__auto___10873 = cljs.core.seq.call(null,seq__10860_10864);
if(temp__4425__auto___10873){
var seq__10860_10874__$1 = temp__4425__auto___10873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10860_10874__$1)){
var c__6945__auto___10875 = cljs.core.chunk_first.call(null,seq__10860_10874__$1);
var G__10876 = cljs.core.chunk_rest.call(null,seq__10860_10874__$1);
var G__10877 = c__6945__auto___10875;
var G__10878 = cljs.core.count.call(null,c__6945__auto___10875);
var G__10879 = (0);
seq__10860_10864 = G__10876;
chunk__10861_10865 = G__10877;
count__10862_10866 = G__10878;
i__10863_10867 = G__10879;
continue;
} else {
var s_10880 = cljs.core.first.call(null,seq__10860_10874__$1);
cljs.compiler.emitln.call(null,s_10880);

var G__10881 = cljs.core.next.call(null,seq__10860_10874__$1);
var G__10882 = null;
var G__10883 = (0);
var G__10884 = (0);
seq__10860_10864 = G__10881;
chunk__10861_10865 = G__10882;
count__10862_10866 = G__10883;
i__10863_10867 = G__10884;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__6130__auto__ = statements;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6130__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__10885){
var map__10886 = p__10885;
var map__10886__$1 = ((((!((map__10886 == null)))?((((map__10886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10886):map__10886);
var env = cljs.core.get.call(null,map__10886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__10886__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__10886__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__10886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__10886__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6142__auto__ = name;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__10888,is_loop){
var map__10900 = p__10888;
var map__10900__$1 = ((((!((map__10900 == null)))?((((map__10900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10900):map__10900);
var bindings = cljs.core.get.call(null,map__10900__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__10900__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__10900__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_10902_10911 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_10902_10911,context,map__10900,map__10900__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_10902_10911,context,map__10900,map__10900__$1,bindings,expr,env))
,bindings):null));

try{var seq__10903_10912 = cljs.core.seq.call(null,bindings);
var chunk__10904_10913 = null;
var count__10905_10914 = (0);
var i__10906_10915 = (0);
while(true){
if((i__10906_10915 < count__10905_10914)){
var map__10907_10916 = cljs.core._nth.call(null,chunk__10904_10913,i__10906_10915);
var map__10907_10917__$1 = ((((!((map__10907_10916 == null)))?((((map__10907_10916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10907_10916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10907_10916):map__10907_10916);
var binding_10918 = map__10907_10917__$1;
var init_10919 = cljs.core.get.call(null,map__10907_10917__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10918);

cljs.compiler.emitln.call(null," = ",init_10919,";");

var G__10920 = seq__10903_10912;
var G__10921 = chunk__10904_10913;
var G__10922 = count__10905_10914;
var G__10923 = (i__10906_10915 + (1));
seq__10903_10912 = G__10920;
chunk__10904_10913 = G__10921;
count__10905_10914 = G__10922;
i__10906_10915 = G__10923;
continue;
} else {
var temp__4425__auto___10924 = cljs.core.seq.call(null,seq__10903_10912);
if(temp__4425__auto___10924){
var seq__10903_10925__$1 = temp__4425__auto___10924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10903_10925__$1)){
var c__6945__auto___10926 = cljs.core.chunk_first.call(null,seq__10903_10925__$1);
var G__10927 = cljs.core.chunk_rest.call(null,seq__10903_10925__$1);
var G__10928 = c__6945__auto___10926;
var G__10929 = cljs.core.count.call(null,c__6945__auto___10926);
var G__10930 = (0);
seq__10903_10912 = G__10927;
chunk__10904_10913 = G__10928;
count__10905_10914 = G__10929;
i__10906_10915 = G__10930;
continue;
} else {
var map__10909_10931 = cljs.core.first.call(null,seq__10903_10925__$1);
var map__10909_10932__$1 = ((((!((map__10909_10931 == null)))?((((map__10909_10931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10909_10931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10909_10931):map__10909_10931);
var binding_10933 = map__10909_10932__$1;
var init_10934 = cljs.core.get.call(null,map__10909_10932__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_10933);

cljs.compiler.emitln.call(null," = ",init_10934,";");

var G__10935 = cljs.core.next.call(null,seq__10903_10925__$1);
var G__10936 = null;
var G__10937 = (0);
var G__10938 = (0);
seq__10903_10912 = G__10935;
chunk__10904_10913 = G__10936;
count__10905_10914 = G__10937;
i__10906_10915 = G__10938;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_10902_10911;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__10939){
var map__10940 = p__10939;
var map__10940__$1 = ((((!((map__10940 == null)))?((((map__10940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10940):map__10940);
var frame = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__10940__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7045__auto___10942 = cljs.core.count.call(null,exprs);
var i_10943 = (0);
while(true){
if((i_10943 < n__7045__auto___10942)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_10943)," = ",exprs.call(null,i_10943),";");

var G__10944 = (i_10943 + (1));
i_10943 = G__10944;
continue;
} else {
}
break;
}

var n__7045__auto___10945 = cljs.core.count.call(null,exprs);
var i_10946 = (0);
while(true){
if((i_10946 < n__7045__auto___10945)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_10946))," = ",temps.call(null,i_10946),";");

var G__10947 = (i_10946 + (1));
i_10946 = G__10947;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__10948){
var map__10949 = p__10948;
var map__10949__$1 = ((((!((map__10949 == null)))?((((map__10949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10949):map__10949);
var bindings = cljs.core.get.call(null,map__10949__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__10949__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__10949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__10951_10959 = cljs.core.seq.call(null,bindings);
var chunk__10952_10960 = null;
var count__10953_10961 = (0);
var i__10954_10962 = (0);
while(true){
if((i__10954_10962 < count__10953_10961)){
var map__10955_10963 = cljs.core._nth.call(null,chunk__10952_10960,i__10954_10962);
var map__10955_10964__$1 = ((((!((map__10955_10963 == null)))?((((map__10955_10963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10955_10963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10955_10963):map__10955_10963);
var binding_10965 = map__10955_10964__$1;
var init_10966 = cljs.core.get.call(null,map__10955_10964__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10965)," = ",init_10966,";");

var G__10967 = seq__10951_10959;
var G__10968 = chunk__10952_10960;
var G__10969 = count__10953_10961;
var G__10970 = (i__10954_10962 + (1));
seq__10951_10959 = G__10967;
chunk__10952_10960 = G__10968;
count__10953_10961 = G__10969;
i__10954_10962 = G__10970;
continue;
} else {
var temp__4425__auto___10971 = cljs.core.seq.call(null,seq__10951_10959);
if(temp__4425__auto___10971){
var seq__10951_10972__$1 = temp__4425__auto___10971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10951_10972__$1)){
var c__6945__auto___10973 = cljs.core.chunk_first.call(null,seq__10951_10972__$1);
var G__10974 = cljs.core.chunk_rest.call(null,seq__10951_10972__$1);
var G__10975 = c__6945__auto___10973;
var G__10976 = cljs.core.count.call(null,c__6945__auto___10973);
var G__10977 = (0);
seq__10951_10959 = G__10974;
chunk__10952_10960 = G__10975;
count__10953_10961 = G__10976;
i__10954_10962 = G__10977;
continue;
} else {
var map__10957_10978 = cljs.core.first.call(null,seq__10951_10972__$1);
var map__10957_10979__$1 = ((((!((map__10957_10978 == null)))?((((map__10957_10978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10957_10978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10957_10978):map__10957_10978);
var binding_10980 = map__10957_10979__$1;
var init_10981 = cljs.core.get.call(null,map__10957_10979__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_10980)," = ",init_10981,";");

var G__10982 = cljs.core.next.call(null,seq__10951_10972__$1);
var G__10983 = null;
var G__10984 = (0);
var G__10985 = (0);
seq__10951_10959 = G__10982;
chunk__10952_10960 = G__10983;
count__10953_10961 = G__10984;
i__10954_10962 = G__10985;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__10988){
var map__10989 = p__10988;
var map__10989__$1 = ((((!((map__10989 == null)))?((((map__10989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10989):map__10989);
var expr = map__10989__$1;
var f = cljs.core.get.call(null,map__10989__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__10989__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6130__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6130__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6130__auto__ = protocol;
if(cljs.core.truth_(and__6130__auto__)){
var and__6130__auto____$1 = tag;
if(cljs.core.truth_(and__6130__auto____$1)){
var or__6142__auto__ = (function (){var and__6130__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6130__auto____$2)){
var and__6130__auto____$3 = protocol;
if(cljs.core.truth_(and__6130__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__6130__auto____$3;
}
} else {
return and__6130__auto____$2;
}
})();
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
var and__6130__auto____$2 = (function (){var or__6142__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6142__auto____$1)){
return or__6142__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6130__auto____$2)){
var or__6142__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__6142__auto____$1){
return or__6142__auto____$1;
} else {
var and__6130__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__6130__auto____$3){
var and__6130__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6130__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__6130__auto____$4;
}
} else {
return and__6130__auto____$3;
}
}
} else {
return and__6130__auto____$2;
}
}
} else {
return and__6130__auto____$1;
}
} else {
return and__6130__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6142__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6142__auto__){
return or__6142__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__10991 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6130__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6130__auto__)){
return (arity > mfa);
} else {
return and__6130__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env){
return (function (p1__10986_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10986_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env){
return (function (p1__10987_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__10987_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__10989,map__10989__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__10991,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__10991,(1),null);
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_10992 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_10992,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_10993 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_10993,args)),(((mfa_10993 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_10993,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__6142__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
var or__6142__auto____$1 = js_QMARK_;
if(or__6142__auto____$1){
return or__6142__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__6130__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6130__auto__;
}
})())){
var fprop_10994 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_10994," ? ",f__$1,fprop_10994,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__10995){
var map__10996 = p__10995;
var map__10996__$1 = ((((!((map__10996 == null)))?((((map__10996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10996):map__10996);
var ctor = cljs.core.get.call(null,map__10996__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__10996__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__10998){
var map__10999 = p__10998;
var map__10999__$1 = ((((!((map__10999 == null)))?((((map__10999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10999):map__10999);
var target = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__11005_11009 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__11006_11010 = null;
var count__11007_11011 = (0);
var i__11008_11012 = (0);
while(true){
if((i__11008_11012 < count__11007_11011)){
var lib_11013 = cljs.core._nth.call(null,chunk__11006_11010,i__11008_11012);
if(cljs.core.truth_((function (){var or__6142__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11013),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11013),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6142__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11013),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11013),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11013),"');");

}
}

var G__11014 = seq__11005_11009;
var G__11015 = chunk__11006_11010;
var G__11016 = count__11007_11011;
var G__11017 = (i__11008_11012 + (1));
seq__11005_11009 = G__11014;
chunk__11006_11010 = G__11015;
count__11007_11011 = G__11016;
i__11008_11012 = G__11017;
continue;
} else {
var temp__4425__auto___11018 = cljs.core.seq.call(null,seq__11005_11009);
if(temp__4425__auto___11018){
var seq__11005_11019__$1 = temp__4425__auto___11018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11005_11019__$1)){
var c__6945__auto___11020 = cljs.core.chunk_first.call(null,seq__11005_11019__$1);
var G__11021 = cljs.core.chunk_rest.call(null,seq__11005_11019__$1);
var G__11022 = c__6945__auto___11020;
var G__11023 = cljs.core.count.call(null,c__6945__auto___11020);
var G__11024 = (0);
seq__11005_11009 = G__11021;
chunk__11006_11010 = G__11022;
count__11007_11011 = G__11023;
i__11008_11012 = G__11024;
continue;
} else {
var lib_11025 = cljs.core.first.call(null,seq__11005_11019__$1);
if(cljs.core.truth_((function (){var or__6142__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11025),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11025),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__6142__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_11025),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11025),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_11025),"');");

}
}

var G__11026 = cljs.core.next.call(null,seq__11005_11019__$1);
var G__11027 = null;
var G__11028 = (0);
var G__11029 = (0);
seq__11005_11009 = G__11026;
chunk__11006_11010 = G__11027;
count__11007_11011 = G__11028;
i__11008_11012 = G__11029;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__11030){
var map__11031 = p__11030;
var map__11031__$1 = ((((!((map__11031 == null)))?((((map__11031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11031):map__11031);
var name = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__11033){
var map__11034 = p__11033;
var map__11034__$1 = ((((!((map__11034 == null)))?((((map__11034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11034):map__11034);
var t = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__11036_11050 = cljs.core.seq.call(null,protocols);
var chunk__11037_11051 = null;
var count__11038_11052 = (0);
var i__11039_11053 = (0);
while(true){
if((i__11039_11053 < count__11038_11052)){
var protocol_11054 = cljs.core._nth.call(null,chunk__11037_11051,i__11039_11053);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11054)].join('')),"}");

var G__11055 = seq__11036_11050;
var G__11056 = chunk__11037_11051;
var G__11057 = count__11038_11052;
var G__11058 = (i__11039_11053 + (1));
seq__11036_11050 = G__11055;
chunk__11037_11051 = G__11056;
count__11038_11052 = G__11057;
i__11039_11053 = G__11058;
continue;
} else {
var temp__4425__auto___11059 = cljs.core.seq.call(null,seq__11036_11050);
if(temp__4425__auto___11059){
var seq__11036_11060__$1 = temp__4425__auto___11059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11036_11060__$1)){
var c__6945__auto___11061 = cljs.core.chunk_first.call(null,seq__11036_11060__$1);
var G__11062 = cljs.core.chunk_rest.call(null,seq__11036_11060__$1);
var G__11063 = c__6945__auto___11061;
var G__11064 = cljs.core.count.call(null,c__6945__auto___11061);
var G__11065 = (0);
seq__11036_11050 = G__11062;
chunk__11037_11051 = G__11063;
count__11038_11052 = G__11064;
i__11039_11053 = G__11065;
continue;
} else {
var protocol_11066 = cljs.core.first.call(null,seq__11036_11060__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11066)].join('')),"}");

var G__11067 = cljs.core.next.call(null,seq__11036_11060__$1);
var G__11068 = null;
var G__11069 = (0);
var G__11070 = (0);
seq__11036_11050 = G__11067;
chunk__11037_11051 = G__11068;
count__11038_11052 = G__11069;
i__11039_11053 = G__11070;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__11040_11071 = cljs.core.seq.call(null,fields__$1);
var chunk__11041_11072 = null;
var count__11042_11073 = (0);
var i__11043_11074 = (0);
while(true){
if((i__11043_11074 < count__11042_11073)){
var fld_11075 = cljs.core._nth.call(null,chunk__11041_11072,i__11043_11074);
cljs.compiler.emitln.call(null,"this.",fld_11075," = ",fld_11075,";");

var G__11076 = seq__11040_11071;
var G__11077 = chunk__11041_11072;
var G__11078 = count__11042_11073;
var G__11079 = (i__11043_11074 + (1));
seq__11040_11071 = G__11076;
chunk__11041_11072 = G__11077;
count__11042_11073 = G__11078;
i__11043_11074 = G__11079;
continue;
} else {
var temp__4425__auto___11080 = cljs.core.seq.call(null,seq__11040_11071);
if(temp__4425__auto___11080){
var seq__11040_11081__$1 = temp__4425__auto___11080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11040_11081__$1)){
var c__6945__auto___11082 = cljs.core.chunk_first.call(null,seq__11040_11081__$1);
var G__11083 = cljs.core.chunk_rest.call(null,seq__11040_11081__$1);
var G__11084 = c__6945__auto___11082;
var G__11085 = cljs.core.count.call(null,c__6945__auto___11082);
var G__11086 = (0);
seq__11040_11071 = G__11083;
chunk__11041_11072 = G__11084;
count__11042_11073 = G__11085;
i__11043_11074 = G__11086;
continue;
} else {
var fld_11087 = cljs.core.first.call(null,seq__11040_11081__$1);
cljs.compiler.emitln.call(null,"this.",fld_11087," = ",fld_11087,";");

var G__11088 = cljs.core.next.call(null,seq__11040_11081__$1);
var G__11089 = null;
var G__11090 = (0);
var G__11091 = (0);
seq__11040_11071 = G__11088;
chunk__11041_11072 = G__11089;
count__11042_11073 = G__11090;
i__11043_11074 = G__11091;
continue;
}
} else {
}
}
break;
}

var seq__11044_11092 = cljs.core.seq.call(null,pmasks);
var chunk__11045_11093 = null;
var count__11046_11094 = (0);
var i__11047_11095 = (0);
while(true){
if((i__11047_11095 < count__11046_11094)){
var vec__11048_11096 = cljs.core._nth.call(null,chunk__11045_11093,i__11047_11095);
var pno_11097 = cljs.core.nth.call(null,vec__11048_11096,(0),null);
var pmask_11098 = cljs.core.nth.call(null,vec__11048_11096,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11097,"$ = ",pmask_11098,";");

var G__11099 = seq__11044_11092;
var G__11100 = chunk__11045_11093;
var G__11101 = count__11046_11094;
var G__11102 = (i__11047_11095 + (1));
seq__11044_11092 = G__11099;
chunk__11045_11093 = G__11100;
count__11046_11094 = G__11101;
i__11047_11095 = G__11102;
continue;
} else {
var temp__4425__auto___11103 = cljs.core.seq.call(null,seq__11044_11092);
if(temp__4425__auto___11103){
var seq__11044_11104__$1 = temp__4425__auto___11103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11044_11104__$1)){
var c__6945__auto___11105 = cljs.core.chunk_first.call(null,seq__11044_11104__$1);
var G__11106 = cljs.core.chunk_rest.call(null,seq__11044_11104__$1);
var G__11107 = c__6945__auto___11105;
var G__11108 = cljs.core.count.call(null,c__6945__auto___11105);
var G__11109 = (0);
seq__11044_11092 = G__11106;
chunk__11045_11093 = G__11107;
count__11046_11094 = G__11108;
i__11047_11095 = G__11109;
continue;
} else {
var vec__11049_11110 = cljs.core.first.call(null,seq__11044_11104__$1);
var pno_11111 = cljs.core.nth.call(null,vec__11049_11110,(0),null);
var pmask_11112 = cljs.core.nth.call(null,vec__11049_11110,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11111,"$ = ",pmask_11112,";");

var G__11113 = cljs.core.next.call(null,seq__11044_11104__$1);
var G__11114 = null;
var G__11115 = (0);
var G__11116 = (0);
seq__11044_11092 = G__11113;
chunk__11045_11093 = G__11114;
count__11046_11094 = G__11115;
i__11047_11095 = G__11116;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__11117){
var map__11118 = p__11117;
var map__11118__$1 = ((((!((map__11118 == null)))?((((map__11118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11118):map__11118);
var t = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__11120_11134 = cljs.core.seq.call(null,protocols);
var chunk__11121_11135 = null;
var count__11122_11136 = (0);
var i__11123_11137 = (0);
while(true){
if((i__11123_11137 < count__11122_11136)){
var protocol_11138 = cljs.core._nth.call(null,chunk__11121_11135,i__11123_11137);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11138)].join('')),"}");

var G__11139 = seq__11120_11134;
var G__11140 = chunk__11121_11135;
var G__11141 = count__11122_11136;
var G__11142 = (i__11123_11137 + (1));
seq__11120_11134 = G__11139;
chunk__11121_11135 = G__11140;
count__11122_11136 = G__11141;
i__11123_11137 = G__11142;
continue;
} else {
var temp__4425__auto___11143 = cljs.core.seq.call(null,seq__11120_11134);
if(temp__4425__auto___11143){
var seq__11120_11144__$1 = temp__4425__auto___11143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11120_11144__$1)){
var c__6945__auto___11145 = cljs.core.chunk_first.call(null,seq__11120_11144__$1);
var G__11146 = cljs.core.chunk_rest.call(null,seq__11120_11144__$1);
var G__11147 = c__6945__auto___11145;
var G__11148 = cljs.core.count.call(null,c__6945__auto___11145);
var G__11149 = (0);
seq__11120_11134 = G__11146;
chunk__11121_11135 = G__11147;
count__11122_11136 = G__11148;
i__11123_11137 = G__11149;
continue;
} else {
var protocol_11150 = cljs.core.first.call(null,seq__11120_11144__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_11150)].join('')),"}");

var G__11151 = cljs.core.next.call(null,seq__11120_11144__$1);
var G__11152 = null;
var G__11153 = (0);
var G__11154 = (0);
seq__11120_11134 = G__11151;
chunk__11121_11135 = G__11152;
count__11122_11136 = G__11153;
i__11123_11137 = G__11154;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__11124_11155 = cljs.core.seq.call(null,fields__$1);
var chunk__11125_11156 = null;
var count__11126_11157 = (0);
var i__11127_11158 = (0);
while(true){
if((i__11127_11158 < count__11126_11157)){
var fld_11159 = cljs.core._nth.call(null,chunk__11125_11156,i__11127_11158);
cljs.compiler.emitln.call(null,"this.",fld_11159," = ",fld_11159,";");

var G__11160 = seq__11124_11155;
var G__11161 = chunk__11125_11156;
var G__11162 = count__11126_11157;
var G__11163 = (i__11127_11158 + (1));
seq__11124_11155 = G__11160;
chunk__11125_11156 = G__11161;
count__11126_11157 = G__11162;
i__11127_11158 = G__11163;
continue;
} else {
var temp__4425__auto___11164 = cljs.core.seq.call(null,seq__11124_11155);
if(temp__4425__auto___11164){
var seq__11124_11165__$1 = temp__4425__auto___11164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11124_11165__$1)){
var c__6945__auto___11166 = cljs.core.chunk_first.call(null,seq__11124_11165__$1);
var G__11167 = cljs.core.chunk_rest.call(null,seq__11124_11165__$1);
var G__11168 = c__6945__auto___11166;
var G__11169 = cljs.core.count.call(null,c__6945__auto___11166);
var G__11170 = (0);
seq__11124_11155 = G__11167;
chunk__11125_11156 = G__11168;
count__11126_11157 = G__11169;
i__11127_11158 = G__11170;
continue;
} else {
var fld_11171 = cljs.core.first.call(null,seq__11124_11165__$1);
cljs.compiler.emitln.call(null,"this.",fld_11171," = ",fld_11171,";");

var G__11172 = cljs.core.next.call(null,seq__11124_11165__$1);
var G__11173 = null;
var G__11174 = (0);
var G__11175 = (0);
seq__11124_11155 = G__11172;
chunk__11125_11156 = G__11173;
count__11126_11157 = G__11174;
i__11127_11158 = G__11175;
continue;
}
} else {
}
}
break;
}

var seq__11128_11176 = cljs.core.seq.call(null,pmasks);
var chunk__11129_11177 = null;
var count__11130_11178 = (0);
var i__11131_11179 = (0);
while(true){
if((i__11131_11179 < count__11130_11178)){
var vec__11132_11180 = cljs.core._nth.call(null,chunk__11129_11177,i__11131_11179);
var pno_11181 = cljs.core.nth.call(null,vec__11132_11180,(0),null);
var pmask_11182 = cljs.core.nth.call(null,vec__11132_11180,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11181,"$ = ",pmask_11182,";");

var G__11183 = seq__11128_11176;
var G__11184 = chunk__11129_11177;
var G__11185 = count__11130_11178;
var G__11186 = (i__11131_11179 + (1));
seq__11128_11176 = G__11183;
chunk__11129_11177 = G__11184;
count__11130_11178 = G__11185;
i__11131_11179 = G__11186;
continue;
} else {
var temp__4425__auto___11187 = cljs.core.seq.call(null,seq__11128_11176);
if(temp__4425__auto___11187){
var seq__11128_11188__$1 = temp__4425__auto___11187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11128_11188__$1)){
var c__6945__auto___11189 = cljs.core.chunk_first.call(null,seq__11128_11188__$1);
var G__11190 = cljs.core.chunk_rest.call(null,seq__11128_11188__$1);
var G__11191 = c__6945__auto___11189;
var G__11192 = cljs.core.count.call(null,c__6945__auto___11189);
var G__11193 = (0);
seq__11128_11176 = G__11190;
chunk__11129_11177 = G__11191;
count__11130_11178 = G__11192;
i__11131_11179 = G__11193;
continue;
} else {
var vec__11133_11194 = cljs.core.first.call(null,seq__11128_11188__$1);
var pno_11195 = cljs.core.nth.call(null,vec__11133_11194,(0),null);
var pmask_11196 = cljs.core.nth.call(null,vec__11133_11194,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_11195,"$ = ",pmask_11196,";");

var G__11197 = cljs.core.next.call(null,seq__11128_11188__$1);
var G__11198 = null;
var G__11199 = (0);
var G__11200 = (0);
seq__11128_11176 = G__11197;
chunk__11129_11177 = G__11198;
count__11130_11178 = G__11199;
i__11131_11179 = G__11200;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__11201){
var map__11202 = p__11201;
var map__11202__$1 = ((((!((map__11202 == null)))?((((map__11202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11202):map__11202);
var target = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__11202__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__11204){
var map__11205 = p__11204;
var map__11205__$1 = ((((!((map__11205 == null)))?((((map__11205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11205):map__11205);
var op = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__11205__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6130__auto__ = code;
if(cljs.core.truth_(and__6130__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__6130__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__10161__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__10161__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__11215 = cljs.core.seq.call(null,table);
var chunk__11216 = null;
var count__11217 = (0);
var i__11218 = (0);
while(true){
if((i__11218 < count__11217)){
var vec__11219 = cljs.core._nth.call(null,chunk__11216,i__11218);
var sym = cljs.core.nth.call(null,vec__11219,(0),null);
var value = cljs.core.nth.call(null,vec__11219,(1),null);
var ns_11221 = cljs.core.namespace.call(null,sym);
var name_11222 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__11223 = seq__11215;
var G__11224 = chunk__11216;
var G__11225 = count__11217;
var G__11226 = (i__11218 + (1));
seq__11215 = G__11223;
chunk__11216 = G__11224;
count__11217 = G__11225;
i__11218 = G__11226;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11215);
if(temp__4425__auto__){
var seq__11215__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11215__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__11215__$1);
var G__11227 = cljs.core.chunk_rest.call(null,seq__11215__$1);
var G__11228 = c__6945__auto__;
var G__11229 = cljs.core.count.call(null,c__6945__auto__);
var G__11230 = (0);
seq__11215 = G__11227;
chunk__11216 = G__11228;
count__11217 = G__11229;
i__11218 = G__11230;
continue;
} else {
var vec__11220 = cljs.core.first.call(null,seq__11215__$1);
var sym = cljs.core.nth.call(null,vec__11220,(0),null);
var value = cljs.core.nth.call(null,vec__11220,(1),null);
var ns_11231 = cljs.core.namespace.call(null,sym);
var name_11232 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__11233 = cljs.core.next.call(null,seq__11215__$1);
var G__11234 = null;
var G__11235 = (0);
var G__11236 = (0);
seq__11215 = G__11233;
chunk__11216 = G__11234;
count__11217 = G__11235;
i__11218 = G__11236;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map