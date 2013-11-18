replgoog.provide('cljsrepl.compiler');
replgoog.require('cljsrepl.core');
replgoog.require('cljsrepl.reader');
replgoog.require('cljsrepl.analyzer');
replgoog.require('replclojure.string');
replgoog.require('cljsrepl.io');
cljsrepl.compiler.js_reserved = cljsrepl.core.PersistentHashSet.fromArray(["new","debugger","enum","default","abstract","goto","private","finally","const","in","import","package","with","throw","continue","var","boolean","byte","for","public","transient","do","delete","instanceof","throws","yield","static","protected","int","return","case","implements","typeof","while","double","methods","synchronized","void","switch","export","final","char","native","class","function","extends","else","interface","try","let","catch","super","short","volatile","float","long","if","this","break"]);
cljsrepl.compiler._STAR_position_STAR_ = null;
cljsrepl.compiler._STAR_emitted_provides_STAR_ = cljsrepl.core.atom.call(null,cljsrepl.core.PersistentHashSet.EMPTY);
cljsrepl.compiler._STAR_lexical_renames_STAR_ = cljsrepl.core.ObjMap.EMPTY;
cljsrepl.compiler.cljs_reserved_file_names = cljsrepl.core.PersistentHashSet.fromArray(["deps.cljs"]);
cljsrepl.compiler.ns_first_segments = cljsrepl.core.atom.call(null,cljsrepl.core.set(["clojure","cljs"]));
cljsrepl.compiler.CHAR_MAP = cljsrepl.core.ObjMap.fromObject(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],{"@":"_CIRCA_","!":"_BANG_","\"":"_DOUBLEQUOTE_","#":"_SHARP_","%":"_PERCENT_","&":"_AMPERSAND_","'":"_SINGLEQUOTE_","*":"_STAR_","+":"_PLUS_","-":"_","/":"_SLASH_",":":"_COLON_","[":"_LBRACK_","{":"_LBRACE_","<":"_LT_","\\":"_BSLASH_","|":"_BAR_","=":"_EQ_","]":"_RBRACK_","}":"_RBRACE_",">":"_GT_","^":"_CARET_","~":"_TILDE_","?":"_QMARK_"});
cljsrepl.compiler.munge = (function() {
var munge = null;
var munge__1 = (function (s){
return munge.call(null,s,cljsrepl.compiler.js_reserved);
});
var munge__2 = (function (s,reserved){
if(cljsrepl.core.map_QMARK_.call(null,s))
{var map__4393 = s;
var map__4393__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4393))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4393):map__4393);
var info = map__4393__$1;
var field = cljsrepl.core._lookup.call(null,map__4393__$1,"\uFDD0'field",null);
var name = cljsrepl.core._lookup.call(null,map__4393__$1,"\uFDD0'name",null);
var depth = (function (){var d = 0;
var G__4395 = info;
var map__4396 = G__4395;
var map__4396__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4396))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4396):map__4396);
var shadow = cljsrepl.core._lookup.call(null,map__4396__$1,"\uFDD0'shadow",null);
var d__$1 = d;
var G__4395__$1 = G__4395;
while(true){
var d__$2 = d__$1;
var map__4397 = G__4395__$1;
var map__4397__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4397))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4397):map__4397);
var shadow__$1 = cljsrepl.core._lookup.call(null,map__4397__$1,"\uFDD0'shadow",null);
if(cljsrepl.core.truth_(shadow__$1))
{{
var G__4398 = (d__$2 + 1);
var G__4399 = shadow__$1;
d__$1 = G__4398;
G__4395__$1 = G__4399;
continue;
}
} else
{if(cljsrepl.core.truth_(cljsrepl.core.deref.call(null,cljsrepl.compiler.ns_first_segments).call(null,[cljsrepl.core.str(name)].join(''))))
{return (d__$2 + 1);
} else
{if("\uFDD0'else")
{return d__$2;
} else
{return null;
}
}
}
break;
}
})();
var renamed = cljsrepl.compiler._STAR_lexical_renames_STAR_.call(null,cljsrepl.core.hash.call(null,s));
var munged_name = munge.call(null,(cljsrepl.core.truth_(field)?[cljsrepl.core.str("self__."),cljsrepl.core.str(name)].join(''):(cljsrepl.core.truth_(renamed)?renamed:(("\uFDD0'else")?name:null))),reserved);
if(cljsrepl.core.truth_((function (){var or__3943__auto__ = field;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (depth === 0);
}
})()))
{return munged_name;
} else
{return cljsrepl.core.symbol.call(null,[cljsrepl.core.str(munged_name),cljsrepl.core.str("__$"),cljsrepl.core.str(depth)].join(''));
}
} else
{var ss = replclojure.string.replace.call(null,[cljsrepl.core.str(s)].join(''),/[.][.]/,"_DOTDOT_");
var ss__$1 = replclojure.string.replace.call(null,ss,/\/(.)/,".$1");
var ss__$2 = replclojure.string.join.call(null,".",cljsrepl.core.map.call(null,(function (p1__4386_SHARP_){
if(cljsrepl.core.truth_(reserved.call(null,p1__4386_SHARP_)))
{return [cljsrepl.core.str(p1__4386_SHARP_),cljsrepl.core.str("$")].join('');
} else
{return p1__4386_SHARP_;
}
}),replclojure.string.split.call(null,ss__$1,/[.]/)));
var ms = cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.map.call(null,(function (p1__4387_SHARP_){
return cljsrepl.core._lookup.call(null,cljsrepl.compiler.CHAR_MAP,p1__4387_SHARP_,p1__4387_SHARP_);
}),ss__$2));
if(cljsrepl.core.symbol_QMARK_.call(null,s))
{return cljsrepl.core.symbol.call(null,ms);
} else
{return ms;
}
}
});
munge = function(s,reserved){
switch(arguments.length){
case 1:
return munge__1.call(this,s);
case 2:
return munge__2.call(this,s,reserved);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
munge.cljs$lang$arity$1 = munge__1;
munge.cljs$lang$arity$2 = munge__2;
return munge;
})()
;
cljsrepl.compiler.comma_sep = (function comma_sep(xs){
return cljsrepl.core.interpose.call(null,",",xs);
});
cljsrepl.compiler.escape_char = (function escape_char(c){
var cp = c.charCodeAt(0);
var G__4401 = cp;
if(cljsrepl.core._EQ_.call(null,9,G__4401))
{return "\\t";
} else
{if(cljsrepl.core._EQ_.call(null,13,G__4401))
{return "\\r";
} else
{if(cljsrepl.core._EQ_.call(null,10,G__4401))
{return "\\n";
} else
{if(cljsrepl.core._EQ_.call(null,12,G__4401))
{return "\\f";
} else
{if(cljsrepl.core._EQ_.call(null,8,G__4401))
{return "\\b";
} else
{if(cljsrepl.core._EQ_.call(null,92,G__4401))
{return "\\\\";
} else
{if(cljsrepl.core._EQ_.call(null,34,G__4401))
{return "\\\"";
} else
{if("\uFDD0'else")
{if((function (){var and__3941__auto__ = (31 < cp);
if(and__3941__auto__)
{return (cp < 127);
} else
{return and__3941__auto__;
}
})())
{return c;
} else
{return cljsrepl.core.apply.call(null,cljsrepl.core.str,"\\u",cljsrepl.core.take_last.call(null,4,[cljsrepl.core.str("0000"),cljsrepl.core.str(cp.toString(16))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
}
});
cljsrepl.compiler.escape_pattern = (function escape_pattern(pattern){
return pattern.split("\\/").join("/").split("/").join("\\/");
});
cljsrepl.compiler.escape_string = (function escape_string(s){
return cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.map.call(null,(function (p1__4402_SHARP_){
return cljsrepl.compiler.escape_char.call(null,p1__4402_SHARP_);
}),s));
});
cljsrepl.compiler.wrap_in_double_quotes = (function wrap_in_double_quotes(x){
return [cljsrepl.core.str("\""),cljsrepl.core.str(x),cljsrepl.core.str("\"")].join('');
});
cljsrepl.compiler.emit = (function (){var method_table__2219__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var prefer_table__2220__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var method_cache__2221__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var cached_hierarchy__2222__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var hierarchy__2223__auto__ = cljsrepl.core._lookup.call(null,cljsrepl.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljsrepl.core.global_hierarchy);
return (new cljsrepl.core.MultiFn("emit","\uFDD0'op","\uFDD0'default",hierarchy__2223__auto__,method_table__2219__auto__,prefer_table__2220__auto__,method_cache__2221__auto__,cached_hierarchy__2222__auto__));
})();
/**
* @param {...*} var_args
*/
cljsrepl.compiler.emits = (function() { 
var emits__delegate = function (xs){
var G__4406_4409 = cljsrepl.core.seq.call(null,xs);
while(true){
if(G__4406_4409)
{var x_4410 = cljsrepl.core.first.call(null,G__4406_4409);
if((x_4410 == null))
{} else
{if(cljsrepl.core.map_QMARK_.call(null,x_4410))
{cljsrepl.compiler.emit.call(null,x_4410);
} else
{if(cljsrepl.core.seq_QMARK_.call(null,x_4410))
{cljsrepl.core.apply.call(null,emits,x_4410);
} else
{if(cljsrepl.core.fn_QMARK_.call(null,x_4410))
{x_4410.call(null);
} else
{if("\uFDD0'else")
{var s_4411 = cljsrepl.core.print_str.call(null,x_4410);
if(cljsrepl.core.truth_(cljsrepl.compiler._STAR_position_STAR_))
{cljsrepl.core.swap_BANG_.call(null,cljsrepl.compiler._STAR_position_STAR_,((function (G__4406_4409,s_4411,x_4410){
return (function (p__4407){
var vec__4408 = p__4407;
var line = cljsrepl.core.nth.call(null,vec__4408,0,null);
var column = cljsrepl.core.nth.call(null,vec__4408,1,null);
return cljsrepl.core.PersistentVector.fromArray([line,(column + cljsrepl.core.count.call(null,s_4411))], true);
});})(G__4406_4409,s_4411,x_4410))
);
} else
{}
cljsrepl.core.print.call(null,s_4411);
} else
{}
}
}
}
}
{
var G__4412 = cljsrepl.core.next.call(null,G__4406_4409);
G__4406_4409 = G__4412;
continue;
}
} else
{}
break;
}
return null;
};
var emits = function (var_args){
var xs = null;
if (replgoog.isDef(var_args)) {
  xs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return emits__delegate.call(this, xs);
};
emits.cljs$lang$maxFixedArity = 0;
emits.cljs$lang$applyTo = (function (arglist__4413){
var xs = cljsrepl.core.seq(arglist__4413);;
return emits__delegate(xs);
});
emits.cljs$lang$arity$variadic = emits__delegate;
return emits;
})()
;
cljsrepl.compiler.emit_str = (function emit_str(expr){
var sb__2259__auto__ = (new replgoog.string.StringBuffer());
var _STAR_print_fn_STAR_4416_4418 = cljsrepl.core._STAR_print_fn_STAR_;
try{cljsrepl.core._STAR_print_fn_STAR_ = (function (x__2260__auto__){
return sb__2259__auto__.append(x__2260__auto__);
});
cljsrepl.compiler.emit.call(null,expr);
}finally {cljsrepl.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_4416_4418;
}return [cljsrepl.core.str(sb__2259__auto__)].join('');
});
/**
* @param {...*} var_args
*/
cljsrepl.compiler.emitln = (function() { 
var emitln__delegate = function (xs){
cljsrepl.core.apply.call(null,cljsrepl.compiler.emits,xs);
cljsrepl.core.println.call(null);
if(cljsrepl.core.truth_(cljsrepl.compiler._STAR_position_STAR_))
{cljsrepl.core.swap_BANG_.call(null,cljsrepl.compiler._STAR_position_STAR_,(function (p__4421){
var vec__4422 = p__4421;
var line = cljsrepl.core.nth.call(null,vec__4422,0,null);
var column = cljsrepl.core.nth.call(null,vec__4422,1,null);
return cljsrepl.core.PersistentVector.fromArray([(line + 1),0], true);
}));
} else
{}
return null;
};
var emitln = function (var_args){
var xs = null;
if (replgoog.isDef(var_args)) {
  xs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return emitln__delegate.call(this, xs);
};
emitln.cljs$lang$maxFixedArity = 0;
emitln.cljs$lang$applyTo = (function (arglist__4423){
var xs = cljsrepl.core.seq(arglist__4423);;
return emitln__delegate(xs);
});
emitln.cljs$lang$arity$variadic = emitln__delegate;
return emitln;
})()
;
cljsrepl.compiler.emit_provide = (function emit_provide(sym){
if((function (){var or__3943__auto__ = (cljsrepl.compiler._STAR_emitted_provides_STAR_ == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.contains_QMARK_.call(null,cljsrepl.core.deref.call(null,cljsrepl.compiler._STAR_emitted_provides_STAR_),sym);
}
})())
{return null;
} else
{cljsrepl.core.swap_BANG_.call(null,cljsrepl.compiler._STAR_emitted_provides_STAR_,cljsrepl.core.conj,sym);
return cljsrepl.compiler.emitln.call(null,"replgoog.provide('",cljsrepl.compiler.munge.call(null,sym),"');");
}
});
/**
* @param {...*} var_args
*/
cljsrepl.compiler.emit_meta_constant = (function() { 
var emit_meta_constant__delegate = function (x,body){
if(cljsrepl.core.truth_(cljsrepl.core.meta.call(null,x)))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.with_meta(",body,",");
cljsrepl.compiler.emit_constant.call(null,cljsrepl.core.meta.call(null,x));
return cljsrepl.compiler.emits.call(null,")");
} else
{return cljsrepl.compiler.emits.call(null,body);
}
};
var emit_meta_constant = function (x,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return emit_meta_constant__delegate.call(this, x, body);
};
emit_meta_constant.cljs$lang$maxFixedArity = 1;
emit_meta_constant.cljs$lang$applyTo = (function (arglist__4424){
var x = cljsrepl.core.first(arglist__4424);
var body = cljsrepl.core.rest(arglist__4424);
return emit_meta_constant__delegate(x, body);
});
emit_meta_constant.cljs$lang$arity$variadic = emit_meta_constant__delegate;
return emit_meta_constant;
})()
;
cljsrepl.compiler.emit_constant_keyword = (function emit_constant_keyword(x){
return cljsrepl.compiler.emits.call(null,"\"","\\uFDD0","'",(cljsrepl.core.truth_(cljsrepl.core.namespace.call(null,x))?[cljsrepl.core.str(cljsrepl.core.namespace.call(null,x)),cljsrepl.core.str("/")].join(''):""),cljsrepl.core.name.call(null,x),"\"");
});
cljsrepl.compiler.emit_constant_symbol = (function emit_constant_symbol(x){
return cljsrepl.compiler.emits.call(null,"(new cljsrepl.core.Symbol(",(cljsrepl.core.truth_(cljsrepl.core.meta.call(null,x))?cljsrepl.compiler.emit_constant.call(null,cljsrepl.core.meta.call(null,x)):"null"),",",[cljsrepl.core.str("\""),cljsrepl.core.str(x),cljsrepl.core.str("\"")].join(''),"))");
});
cljsrepl.compiler.emit_constant_map = (function emit_constant_map(x){
return cljsrepl.compiler.emit_meta_constant.call(null,x,cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["cljsrepl.core.hash_map("], true),cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,(function (p1__4425_SHARP_){
return (function (){
return cljsrepl.compiler.emit_constant.call(null,p1__4425_SHARP_);
});
}),cljsrepl.core.apply.call(null,cljsrepl.core.concat,x))),cljsrepl.core.PersistentVector.fromArray([")"], true)));
});
cljsrepl.compiler.emit_constant_set = (function emit_constant_set(x){
return cljsrepl.compiler.emit_meta_constant.call(null,x,cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["cljsrepl.core.set(["], true),cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,(function (p1__4426_SHARP_){
return (function (){
return cljsrepl.compiler.emit_constant.call(null,p1__4426_SHARP_);
});
}),x)),cljsrepl.core.PersistentVector.fromArray(["])"], true)));
});
cljsrepl.compiler.EmitConstant = {};
cljsrepl.compiler.emit_constant = (function emit_constant(x){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$compiler$EmitConstant$emit_constant$arity$1;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$compiler$EmitConstant$emit_constant$arity$1(x);
} else
{var x__2047__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljsrepl.compiler.emit_constant[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.compiler.emit_constant["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"EmitConstant.emit-constant",x);
}
}
})().call(null,x);
}
});
(cljsrepl.compiler.EmitConstant["null"] = true);
(cljsrepl.compiler.emit_constant["null"] = (function (x){
return cljsrepl.compiler.emits.call(null,"null");
}));
cljsrepl.core.PersistentArrayMap.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.PersistentArrayMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_map.call(null,x);
});
(cljsrepl.compiler.EmitConstant["number"] = true);
(cljsrepl.compiler.emit_constant["number"] = (function (x){
return cljsrepl.compiler.emits.call(null,x);
}));
cljsrepl.core.EmptyList.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.EmptyList.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_meta_constant.call(null,x,"cljsrepl.core.List.EMPTY");
});
(cljsrepl.compiler.EmitConstant["boolean"] = true);
(cljsrepl.compiler.emit_constant["boolean"] = (function (x){
return cljsrepl.compiler.emits.call(null,(cljsrepl.core.truth_(x)?"true":"false"));
}));
(cljsrepl.compiler.EmitConstant["string"] = true);
(cljsrepl.compiler.emit_constant["string"] = (function (x){
if(cljsrepl.core.keyword_QMARK_.call(null,x))
{return cljsrepl.compiler.emit_constant_keyword.call(null,x);
} else
{if("\uFDD0'else")
{return cljsrepl.compiler.emits.call(null,cljsrepl.compiler.wrap_in_double_quotes.call(null,cljsrepl.compiler.escape_string.call(null,x)));
} else
{return null;
}
}
}));
RegExp.prototype.cljs$compiler$EmitConstant$ = true;
RegExp.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
var vec__4430 = cljsrepl.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljsrepl.core.str(x)].join(''));
var _ = cljsrepl.core.nth.call(null,vec__4430,0,null);
var flags = cljsrepl.core.nth.call(null,vec__4430,1,null);
var pattern = cljsrepl.core.nth.call(null,vec__4430,2,null);
return cljsrepl.compiler.emits.call(null,[cljsrepl.core.str("/"),cljsrepl.core.str(cljsrepl.compiler.escape_pattern.call(null,pattern)),cljsrepl.core.str("/"),cljsrepl.core.str(flags)].join(''));
});
cljsrepl.core.ObjMap.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.ObjMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_map.call(null,x);
});
cljsrepl.core.PersistentVector.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.PersistentVector.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_meta_constant.call(null,x,cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["cljsrepl.core.vec(["], true),cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,(function (p1__4429_SHARP_){
return (function (){
return cljsrepl.compiler.emit_constant.call(null,p1__4429_SHARP_);
});
}),x)),cljsrepl.core.PersistentVector.fromArray(["])"], true)));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.PersistentTreeSet.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_set.call(null,x);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.PersistentHashMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_map.call(null,x);
});
cljsrepl.core.Cons.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.Cons.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_meta_constant.call(null,x,cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["cljsrepl.core.list("], true),cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,(function (p1__4428_SHARP_){
return (function (){
return cljsrepl.compiler.emit_constant.call(null,p1__4428_SHARP_);
});
}),x)),cljsrepl.core.PersistentVector.fromArray([")"], true)));
});
cljsrepl.core.Symbol.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.Symbol.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_symbol.call(null,x);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.PersistentTreeMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_map.call(null,x);
});
cljsrepl.core.List.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.List.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_meta_constant.call(null,x,cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["cljsrepl.core.list("], true),cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,(function (p1__4427_SHARP_){
return (function (){
return cljsrepl.compiler.emit_constant.call(null,p1__4427_SHARP_);
});
}),x)),cljsrepl.core.PersistentVector.fromArray([")"], true)));
});
cljsrepl.core.PersistentHashSet.prototype.cljs$compiler$EmitConstant$ = true;
cljsrepl.core.PersistentHashSet.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return cljsrepl.compiler.emit_constant_set.call(null,x);
});
cljsrepl.compiler.emit_block = (function emit_block(context,statements,ret){
if(cljsrepl.core.truth_(statements))
{cljsrepl.compiler.emits.call(null,statements);
} else
{}
return cljsrepl.compiler.emit.call(null,ret);
});
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'no-op",(function (m){
return null;
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'var",(function (p__4431){
var map__4432 = p__4431;
var map__4432__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4432))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4432):map__4432);
var arg = map__4432__$1;
var env = cljsrepl.core._lookup.call(null,map__4432__$1,"\uFDD0'env",null);
var info = cljsrepl.core._lookup.call(null,map__4432__$1,"\uFDD0'info",null);
var n = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,info);
var n__$1 = ((cljsrepl.core._EQ_.call(null,cljsrepl.core.namespace.call(null,n),"js"))?cljsrepl.core.name.call(null,n):info);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'statement",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{return null;
} else
{var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emits.call(null,cljsrepl.compiler.munge.call(null,n__$1));
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'meta",(function (p__4433){
var map__4434 = p__4433;
var map__4434__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4434))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4434):map__4434);
var env = cljsrepl.core._lookup.call(null,map__4434__$1,"\uFDD0'env",null);
var meta = cljsrepl.core._lookup.call(null,map__4434__$1,"\uFDD0'meta",null);
var expr = cljsrepl.core._lookup.call(null,map__4434__$1,"\uFDD0'expr",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emits.call(null,"cljsrepl.core.with_meta(",expr,",",meta,")");
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.compiler.array_map_threshold = 16;
cljsrepl.compiler.obj_map_threshold = 32;
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'map",(function (p__4435){
var map__4436 = p__4435;
var map__4436__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4436))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4436):map__4436);
var vals = cljsrepl.core._lookup.call(null,map__4436__$1,"\uFDD0'vals",null);
var keys = cljsrepl.core._lookup.call(null,map__4436__$1,"\uFDD0'keys",null);
var simple_keys_QMARK_ = cljsrepl.core._lookup.call(null,map__4436__$1,"\uFDD0'simple-keys?",null);
var env = cljsrepl.core._lookup.call(null,map__4436__$1,"\uFDD0'env",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
if((cljsrepl.core.count.call(null,keys) === 0))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.ObjMap.EMPTY");
} else
{if(cljsrepl.core.truth_((function (){var and__3941__auto__ = simple_keys_QMARK_;
if(cljsrepl.core.truth_(and__3941__auto__))
{return (cljsrepl.core.count.call(null,keys) <= cljsrepl.compiler.obj_map_threshold);
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.ObjMap.fromObject([",cljsrepl.compiler.comma_sep.call(null,keys),"],{",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,(function (k,v){
var sb__2259__auto__ = (new replgoog.string.StringBuffer());
var _STAR_print_fn_STAR_4437_4439 = cljsrepl.core._STAR_print_fn_STAR_;
try{cljsrepl.core._STAR_print_fn_STAR_ = (function (x__2260__auto__){
return sb__2259__auto__.append(x__2260__auto__);
});
cljsrepl.compiler.emit.call(null,k);
cljsrepl.core.print.call(null,":");
cljsrepl.compiler.emit.call(null,v);
}finally {cljsrepl.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_4437_4439;
}return [cljsrepl.core.str(sb__2259__auto__)].join('');
}),keys,vals)),"})");
} else
{if((cljsrepl.core.count.call(null,keys) <= cljsrepl.compiler.array_map_threshold))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.PersistentArrayMap.fromArrays([",cljsrepl.compiler.comma_sep.call(null,keys),"],[",cljsrepl.compiler.comma_sep.call(null,vals),"])");
} else
{if("\uFDD0'else")
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.PersistentHashMap.fromArrays([",cljsrepl.compiler.comma_sep.call(null,keys),"],[",cljsrepl.compiler.comma_sep.call(null,vals),"])");
} else
{}
}
}
}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'vector",(function (p__4440){
var map__4441 = p__4440;
var map__4441__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4441))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4441):map__4441);
var env = cljsrepl.core._lookup.call(null,map__4441__$1,"\uFDD0'env",null);
var items = cljsrepl.core._lookup.call(null,map__4441__$1,"\uFDD0'items",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
if(cljsrepl.core.empty_QMARK_.call(null,items))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.PersistentVector.EMPTY");
} else
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.PersistentVector.fromArray([",cljsrepl.compiler.comma_sep.call(null,items),"], true)");
}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'set",(function (p__4442){
var map__4443 = p__4442;
var map__4443__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4443))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4443):map__4443);
var env = cljsrepl.core._lookup.call(null,map__4443__$1,"\uFDD0'env",null);
var items = cljsrepl.core._lookup.call(null,map__4443__$1,"\uFDD0'items",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
if(cljsrepl.core.empty_QMARK_.call(null,items))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.PersistentHashSet.EMPTY");
} else
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.PersistentHashSet.fromArray([",cljsrepl.compiler.comma_sep.call(null,items),"])");
}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'constant",(function (p__4444){
var map__4445 = p__4444;
var map__4445__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4445))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4445):map__4445);
var env = cljsrepl.core._lookup.call(null,map__4445__$1,"\uFDD0'env",null);
var form = cljsrepl.core._lookup.call(null,map__4445__$1,"\uFDD0'form",null);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'statement",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{return null;
} else
{var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emit_constant.call(null,form);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}
}));
cljsrepl.compiler.get_tag = (function get_tag(e){
var or__3943__auto__ = (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,e);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,(new cljsrepl.core.Keyword("\uFDD0'info")).call(null,e));
}
});
cljsrepl.compiler.infer_tag = (function infer_tag(e){
var temp__4090__auto__ = cljsrepl.compiler.get_tag.call(null,e);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var tag = temp__4090__auto__;
return tag;
} else
{var G__4448 = (new cljsrepl.core.Keyword("\uFDD0'op")).call(null,e);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'constant",G__4448))
{var G__4449 = (new cljsrepl.core.Keyword("\uFDD0'form")).call(null,e);
if(cljsrepl.core._EQ_.call(null,false,G__4449))
{return (new cljsrepl.core.Symbol(null,"boolean"));
} else
{if(cljsrepl.core._EQ_.call(null,true,G__4449))
{return (new cljsrepl.core.Symbol(null,"boolean"));
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
} else
{if(cljsrepl.core._EQ_.call(null,"\uFDD0'if",G__4448))
{var then_tag = infer_tag.call(null,(new cljsrepl.core.Keyword("\uFDD0'then")).call(null,e));
var else_tag = infer_tag.call(null,(new cljsrepl.core.Keyword("\uFDD0'else")).call(null,e));
if(cljsrepl.core._EQ_.call(null,then_tag,else_tag))
{return then_tag;
} else
{return null;
}
} else
{if(cljsrepl.core._EQ_.call(null,"\uFDD0'let",G__4448))
{return infer_tag.call(null,(new cljsrepl.core.Keyword("\uFDD0'ret")).call(null,e));
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
});
cljsrepl.compiler.safe_test_QMARK_ = (function safe_test_QMARK_(e){
var tag = cljsrepl.compiler.infer_tag.call(null,e);
var or__3943__auto__ = cljsrepl.core.PersistentHashSet.fromArray([(new cljsrepl.core.Symbol(null,"boolean")),(new cljsrepl.core.Symbol(null,"seq"))]).call(null,tag);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,e),"\uFDD0'constant"))
{var form = (new cljsrepl.core.Keyword("\uFDD0'form")).call(null,e);
return cljsrepl.core.not.call(null,(function (){var or__3943__auto____$1 = (function (){var and__3941__auto__ = cljsrepl.core.string_QMARK_.call(null,form);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,form,"");
} else
{return and__3941__auto__;
}
})();
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = cljsrepl.core.number_QMARK_.call(null,form);
if(and__3941__auto__)
{return (form === 0);
} else
{return and__3941__auto__;
}
}
})());
} else
{return null;
}
}
});
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'if",(function (p__4450){
var map__4451 = p__4450;
var map__4451__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4451))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4451):map__4451);
var unchecked = cljsrepl.core._lookup.call(null,map__4451__$1,"\uFDD0'unchecked",null);
var env = cljsrepl.core._lookup.call(null,map__4451__$1,"\uFDD0'env",null);
var else$ = cljsrepl.core._lookup.call(null,map__4451__$1,"\uFDD0'else",null);
var then = cljsrepl.core._lookup.call(null,map__4451__$1,"\uFDD0'then",null);
var test = cljsrepl.core._lookup.call(null,map__4451__$1,"\uFDD0'test",null);
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
var checked = cljsrepl.core.not.call(null,(function (){var or__3943__auto__ = unchecked;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.compiler.safe_test_QMARK_.call(null,test);
}
})());
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{return cljsrepl.compiler.emits.call(null,"(",((checked)?"cljsrepl.core.truth_":null),"(",test,")?",then,":",else$,")");
} else
{if(checked)
{cljsrepl.compiler.emitln.call(null,"if(cljsrepl.core.truth_(",test,"))");
} else
{cljsrepl.compiler.emitln.call(null,"if(",test,")");
}
cljsrepl.compiler.emitln.call(null,"{",then,"} else");
return cljsrepl.compiler.emitln.call(null,"{",else$,"}");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'throw",(function (p__4452){
var map__4453 = p__4452;
var map__4453__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4453))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4453):map__4453);
var env = cljsrepl.core._lookup.call(null,map__4453__$1,"\uFDD0'env",null);
var throw$ = cljsrepl.core._lookup.call(null,map__4453__$1,"\uFDD0'throw",null);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{return cljsrepl.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else
{return cljsrepl.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
/**
* Emit a nicely formatted comment string.
*/
cljsrepl.compiler.emit_comment = (function emit_comment(doc,jsdoc){
var docs = (cljsrepl.core.truth_(doc)?cljsrepl.core.PersistentVector.fromArray([doc], true):null);
var docs__$1 = (cljsrepl.core.truth_(jsdoc)?cljsrepl.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljsrepl.core.remove.call(null,cljsrepl.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function print_comment_lines(e){
var G__4458 = cljsrepl.core.seq.call(null,replclojure.string.split_lines.call(null,e));
while(true){
if(G__4458)
{var next_line = cljsrepl.core.first.call(null,G__4458);
cljsrepl.compiler.emitln.call(null,"* ",replclojure.string.trim.call(null,next_line));
{
var G__4460 = cljsrepl.core.next.call(null,G__4458);
G__4458 = G__4460;
continue;
}
} else
{return null;
}
break;
}
});
if(cljsrepl.core.seq.call(null,docs__$2))
{cljsrepl.compiler.emitln.call(null,"/**");
var G__4459_4461 = cljsrepl.core.seq.call(null,docs__$2);
while(true){
if(G__4459_4461)
{var e_4462 = cljsrepl.core.first.call(null,G__4459_4461);
if(cljsrepl.core.truth_(e_4462))
{print_comment_lines.call(null,e_4462);
} else
{}
{
var G__4463 = cljsrepl.core.next.call(null,G__4459_4461);
G__4459_4461 = G__4463;
continue;
}
} else
{}
break;
}
return cljsrepl.compiler.emitln.call(null,"*/");
} else
{return null;
}
});
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'def",(function (p__4464){
var map__4465 = p__4464;
var map__4465__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4465))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4465):map__4465);
var export$ = cljsrepl.core._lookup.call(null,map__4465__$1,"\uFDD0'export",null);
var doc = cljsrepl.core._lookup.call(null,map__4465__$1,"\uFDD0'doc",null);
var env = cljsrepl.core._lookup.call(null,map__4465__$1,"\uFDD0'env",null);
var init = cljsrepl.core._lookup.call(null,map__4465__$1,"\uFDD0'init",null);
var name = cljsrepl.core._lookup.call(null,map__4465__$1,"\uFDD0'name",null);
if(cljsrepl.core.truth_(init))
{var mname = cljsrepl.compiler.munge.call(null,name);
cljsrepl.compiler.emit_comment.call(null,doc,(new cljsrepl.core.Keyword("\uFDD0'jsdoc")).call(null,init));
cljsrepl.compiler.emits.call(null,mname);
cljsrepl.compiler.emits.call(null," = ",init);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{} else
{cljsrepl.compiler.emitln.call(null,";");
}
if(cljsrepl.core.truth_(export$))
{return cljsrepl.compiler.emitln.call(null,"replgoog.exportSymbol('",cljsrepl.compiler.munge.call(null,export$),"', ",mname,");");
} else
{return null;
}
} else
{return null;
}
}));
cljsrepl.compiler.emit_apply_to = (function emit_apply_to(p__4466){
var map__4470 = p__4466;
var map__4470__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4470))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4470):map__4470);
var env = cljsrepl.core._lookup.call(null,map__4470__$1,"\uFDD0'env",null);
var params = cljsrepl.core._lookup.call(null,map__4470__$1,"\uFDD0'params",null);
var name = cljsrepl.core._lookup.call(null,map__4470__$1,"\uFDD0'name",null);
var arglist = cljsrepl.core.gensym.call(null,"arglist__");
var delegate_name = [cljsrepl.core.str(cljsrepl.compiler.munge.call(null,name)),cljsrepl.core.str("__delegate")].join('');
var params__$1 = cljsrepl.core.map.call(null,cljsrepl.compiler.munge,params);
cljsrepl.compiler.emitln.call(null,"(function (",arglist,"){");
var G__4471_4473 = cljsrepl.core.seq.call(null,cljsrepl.core.map_indexed.call(null,cljsrepl.core.vector,cljsrepl.core.butlast.call(null,params__$1)));
while(true){
if(G__4471_4473)
{var vec__4472_4474 = cljsrepl.core.first.call(null,G__4471_4473);
var i_4475 = cljsrepl.core.nth.call(null,vec__4472_4474,0,null);
var param_4476 = cljsrepl.core.nth.call(null,vec__4472_4474,1,null);
cljsrepl.compiler.emits.call(null,"var ",param_4476," = cljsrepl.core.first(");
var n__2209__auto___4477 = i_4475;
var __4478 = 0;
while(true){
if((__4478 < n__2209__auto___4477))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.next(");
{
var G__4479 = (__4478 + 1);
__4478 = G__4479;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emits.call(null,arglist,")");
var n__2209__auto___4480 = i_4475;
var __4481 = 0;
while(true){
if((__4481 < n__2209__auto___4480))
{cljsrepl.compiler.emits.call(null,")");
{
var G__4482 = (__4481 + 1);
__4481 = G__4482;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,";");
{
var G__4483 = cljsrepl.core.next.call(null,G__4471_4473);
G__4471_4473 = G__4483;
continue;
}
} else
{}
break;
}
if((1 < cljsrepl.core.count.call(null,params__$1)))
{cljsrepl.compiler.emits.call(null,"var ",cljsrepl.core.last.call(null,params__$1)," = cljsrepl.core.rest(");
var n__2209__auto___4484 = (cljsrepl.core.count.call(null,params__$1) - 2);
var __4485 = 0;
while(true){
if((__4485 < n__2209__auto___4484))
{cljsrepl.compiler.emits.call(null,"cljsrepl.core.next(");
{
var G__4486 = (__4485 + 1);
__4485 = G__4486;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emits.call(null,arglist);
var n__2209__auto___4487 = (cljsrepl.core.count.call(null,params__$1) - 2);
var __4488 = 0;
while(true){
if((__4488 < n__2209__auto___4487))
{cljsrepl.compiler.emits.call(null,")");
{
var G__4489 = (__4488 + 1);
__4488 = G__4489;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,");");
cljsrepl.compiler.emitln.call(null,"return ",delegate_name,"(",replclojure.string.join.call(null,", ",params__$1),");");
} else
{cljsrepl.compiler.emits.call(null,"var ",cljsrepl.core.last.call(null,params__$1)," = ");
cljsrepl.compiler.emits.call(null,"cljsrepl.core.seq(",arglist,");");
cljsrepl.compiler.emitln.call(null,";");
cljsrepl.compiler.emitln.call(null,"return ",delegate_name,"(",replclojure.string.join.call(null,", ",params__$1),");");
}
return cljsrepl.compiler.emits.call(null,"})");
});
cljsrepl.compiler.emit_fn_method = (function emit_fn_method(p__4490){
var map__4492 = p__4490;
var map__4492__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4492))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4492):map__4492);
var max_fixed_arity = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'max-fixed-arity",null);
var recurs = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'recurs",null);
var env = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'env",null);
var ret = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'statements",null);
var params = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'params",null);
var variadic = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'variadic",null);
var name = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'name",null);
var type = cljsrepl.core._lookup.call(null,map__4492__$1,"\uFDD0'type",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emitln.call(null,"(function ",cljsrepl.compiler.munge.call(null,name),"(",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,cljsrepl.compiler.munge,params)),"){");
if(cljsrepl.core.truth_(type))
{cljsrepl.compiler.emitln.call(null,"var self__ = this;");
} else
{}
if(cljsrepl.core.truth_(recurs))
{cljsrepl.compiler.emitln.call(null,"while(true){");
} else
{}
cljsrepl.compiler.emit_block.call(null,"\uFDD0'return",statements,ret);
if(cljsrepl.core.truth_(recurs))
{cljsrepl.compiler.emitln.call(null,"break;");
cljsrepl.compiler.emitln.call(null,"}");
} else
{}
cljsrepl.compiler.emits.call(null,"})");
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
});
cljsrepl.compiler.emit_variadic_fn_method = (function emit_variadic_fn_method(p__4496){
var map__4498 = p__4496;
var map__4498__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4498))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4498):map__4498);
var f = map__4498__$1;
var max_fixed_arity = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'max-fixed-arity",null);
var recurs = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'recurs",null);
var env = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'env",null);
var ret = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'statements",null);
var params = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'params",null);
var variadic = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'variadic",null);
var name = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'name",null);
var type = cljsrepl.core._lookup.call(null,map__4498__$1,"\uFDD0'type",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
var name_4499__$1 = (function (){var or__3943__auto__ = name;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.gensym.call(null);
}
})();
var mname_4500 = cljsrepl.compiler.munge.call(null,name_4499__$1);
var params_4501__$1 = cljsrepl.core.map.call(null,cljsrepl.compiler.munge,params);
var delegate_name_4502 = [cljsrepl.core.str(mname_4500),cljsrepl.core.str("__delegate")].join('');
cljsrepl.compiler.emitln.call(null,"(function() { ");
cljsrepl.compiler.emitln.call(null,"var ",delegate_name_4502," = function (",cljsrepl.compiler.comma_sep.call(null,params_4501__$1),"){");
if(cljsrepl.core.truth_(recurs))
{cljsrepl.compiler.emitln.call(null,"while(true){");
} else
{}
cljsrepl.compiler.emit_block.call(null,"\uFDD0'return",statements,ret);
if(cljsrepl.core.truth_(recurs))
{cljsrepl.compiler.emitln.call(null,"break;");
cljsrepl.compiler.emitln.call(null,"}");
} else
{}
cljsrepl.compiler.emitln.call(null,"};");
cljsrepl.compiler.emitln.call(null,"var ",mname_4500," = function (",cljsrepl.compiler.comma_sep.call(null,(cljsrepl.core.truth_(variadic)?cljsrepl.core.concat.call(null,cljsrepl.core.butlast.call(null,params_4501__$1),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"var_args"))], true)):params_4501__$1)),"){");
if(cljsrepl.core.truth_(type))
{cljsrepl.compiler.emitln.call(null,"var self__ = this;");
} else
{}
if(cljsrepl.core.truth_(variadic))
{cljsrepl.compiler.emitln.call(null,"var ",cljsrepl.core.last.call(null,params_4501__$1)," = null;");
cljsrepl.compiler.emitln.call(null,"if (replgoog.isDef(var_args)) {");
cljsrepl.compiler.emitln.call(null,"  ",cljsrepl.core.last.call(null,params_4501__$1)," = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, ",(cljsrepl.core.count.call(null,params_4501__$1) - 1),"),0);");
cljsrepl.compiler.emitln.call(null,"} ");
} else
{}
cljsrepl.compiler.emitln.call(null,"return ",delegate_name_4502,".call(",replclojure.string.join.call(null,", ",cljsrepl.core.cons.call(null,"this",params_4501__$1)),");");
cljsrepl.compiler.emitln.call(null,"};");
cljsrepl.compiler.emitln.call(null,mname_4500,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");
cljsrepl.compiler.emits.call(null,mname_4500,".cljs$lang$applyTo = ");
cljsrepl.compiler.emit_apply_to.call(null,cljsrepl.core.assoc.call(null,f,"\uFDD0'name",name_4499__$1));
cljsrepl.compiler.emitln.call(null,";");
cljsrepl.compiler.emitln.call(null,mname_4500,".cljs$lang$arity$variadic = ",delegate_name_4502,";");
cljsrepl.compiler.emitln.call(null,"return ",mname_4500,";");
cljsrepl.compiler.emitln.call(null,"})()");
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
});
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'fn",(function (p__4503){
var map__4504 = p__4503;
var map__4504__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4504))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4504):map__4504);
var loop_lets = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'loop-lets",null);
var recur_frames = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'recur-frames",null);
var variadic = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'variadic",null);
var max_fixed_arity = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'max-fixed-arity",null);
var methods$ = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'methods",null);
var env = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'env",null);
var name = cljsrepl.core._lookup.call(null,map__4504__$1,"\uFDD0'name",null);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'statement",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{return null;
} else
{var loop_locals = cljsrepl.core.seq.call(null,cljsrepl.core.map.call(null,cljsrepl.compiler.munge,cljsrepl.core.concat.call(null,cljsrepl.core.mapcat.call(null,"\uFDD0'params",cljsrepl.core.filter.call(null,(function (p1__4493_SHARP_){
var and__3941__auto__ = p1__4493_SHARP_;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.deref.call(null,(new cljsrepl.core.Keyword("\uFDD0'flag")).call(null,p1__4493_SHARP_));
} else
{return and__3941__auto__;
}
}),recur_frames)),cljsrepl.core.mapcat.call(null,"\uFDD0'params",loop_lets))));
if(loop_locals)
{if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emitln.call(null,"((function (",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.map.call(null,cljsrepl.compiler.munge,loop_locals)),"){");
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{} else
{cljsrepl.compiler.emits.call(null,"return ");
}
} else
{}
if(cljsrepl.core._EQ_.call(null,1,cljsrepl.core.count.call(null,methods$)))
{if(cljsrepl.core.truth_(variadic))
{cljsrepl.compiler.emit_variadic_fn_method.call(null,cljsrepl.core.assoc.call(null,cljsrepl.core.first.call(null,methods$),"\uFDD0'name",name));
} else
{cljsrepl.compiler.emit_fn_method.call(null,cljsrepl.core.assoc.call(null,cljsrepl.core.first.call(null,methods$),"\uFDD0'name",name));
}
} else
{var has_name_QMARK__4512 = (function (){var and__3941__auto__ = name;
if(cljsrepl.core.truth_(and__3941__auto__))
{return true;
} else
{return and__3941__auto__;
}
})();
var name_4513__$1 = (function (){var or__3943__auto__ = name;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.gensym.call(null);
}
})();
var mname_4514 = cljsrepl.compiler.munge.call(null,name_4513__$1);
var maxparams_4515 = cljsrepl.core.map.call(null,cljsrepl.compiler.munge,cljsrepl.core.apply.call(null,cljsrepl.core.max_key,cljsrepl.core.count,cljsrepl.core.map.call(null,"\uFDD0'params",methods$)));
var mmap_4516 = cljsrepl.core.into.call(null,cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.map.call(null,(function (method){
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.compiler.munge.call(null,cljsrepl.core.symbol.call(null,[cljsrepl.core.str(mname_4514),cljsrepl.core.str("__"),cljsrepl.core.str(cljsrepl.core.count.call(null,(new cljsrepl.core.Keyword("\uFDD0'params")).call(null,method)))].join(''))),method], true);
}),methods$));
var ms_4517 = cljsrepl.core.sort_by.call(null,(function (p1__4494_SHARP_){
return cljsrepl.core.count.call(null,(new cljsrepl.core.Keyword("\uFDD0'params")).call(null,cljsrepl.core.second.call(null,p1__4494_SHARP_)));
}),cljsrepl.core.seq.call(null,mmap_4516));
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emitln.call(null,"(function() {");
cljsrepl.compiler.emitln.call(null,"var ",mname_4514," = null;");
var G__4505_4518 = cljsrepl.core.seq.call(null,ms_4517);
while(true){
if(G__4505_4518)
{var vec__4506_4519 = cljsrepl.core.first.call(null,G__4505_4518);
var n_4520 = cljsrepl.core.nth.call(null,vec__4506_4519,0,null);
var meth_4521 = cljsrepl.core.nth.call(null,vec__4506_4519,1,null);
cljsrepl.compiler.emits.call(null,"var ",n_4520," = ");
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,meth_4521)))
{cljsrepl.compiler.emit_variadic_fn_method.call(null,meth_4521);
} else
{cljsrepl.compiler.emit_fn_method.call(null,meth_4521);
}
cljsrepl.compiler.emitln.call(null,";");
{
var G__4522 = cljsrepl.core.next.call(null,G__4505_4518);
G__4505_4518 = G__4522;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,mname_4514," = function(",cljsrepl.compiler.comma_sep.call(null,(cljsrepl.core.truth_(variadic)?cljsrepl.core.concat.call(null,cljsrepl.core.butlast.call(null,maxparams_4515),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"var_args"))], true)):maxparams_4515)),"){");
if(cljsrepl.core.truth_(variadic))
{cljsrepl.compiler.emitln.call(null,"var ",cljsrepl.core.last.call(null,maxparams_4515)," = var_args;");
} else
{}
cljsrepl.compiler.emitln.call(null,"switch(arguments.length){");
var G__4507_4523 = cljsrepl.core.seq.call(null,ms_4517);
while(true){
if(G__4507_4523)
{var vec__4508_4524 = cljsrepl.core.first.call(null,G__4507_4523);
var n_4525 = cljsrepl.core.nth.call(null,vec__4508_4524,0,null);
var meth_4526 = cljsrepl.core.nth.call(null,vec__4508_4524,1,null);
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,meth_4526)))
{cljsrepl.compiler.emitln.call(null,"default:");
cljsrepl.compiler.emitln.call(null,"return ",n_4525,".cljs$lang$arity$variadic(",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.butlast.call(null,maxparams_4515)),(((cljsrepl.core.count.call(null,maxparams_4515) > 1))?", ":null),"cljsrepl.core.array_seq(arguments, ",max_fixed_arity,"));");
} else
{var pcnt_4527 = cljsrepl.core.count.call(null,(new cljsrepl.core.Keyword("\uFDD0'params")).call(null,meth_4526));
cljsrepl.compiler.emitln.call(null,"case ",pcnt_4527,":");
cljsrepl.compiler.emitln.call(null,"return ",n_4525,".call(this",(((pcnt_4527 === 0))?null:cljsrepl.core.list.call(null,",",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.take.call(null,pcnt_4527,maxparams_4515)))),");");
}
{
var G__4528 = cljsrepl.core.next.call(null,G__4507_4523);
G__4507_4523 = G__4528;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,"}");
cljsrepl.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");
cljsrepl.compiler.emitln.call(null,"};");
if(cljsrepl.core.truth_(variadic))
{cljsrepl.compiler.emitln.call(null,mname_4514,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");
cljsrepl.compiler.emitln.call(null,mname_4514,".cljs$lang$applyTo = ",cljsrepl.core.some.call(null,(function (p1__4495_SHARP_){
var vec__4509 = p1__4495_SHARP_;
var n = cljsrepl.core.nth.call(null,vec__4509,0,null);
var m = cljsrepl.core.nth.call(null,vec__4509,1,null);
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,m)))
{return n;
} else
{return null;
}
}),ms_4517),".cljs$lang$applyTo;");
} else
{}
if(cljsrepl.core.truth_(has_name_QMARK__4512))
{var G__4510_4529 = cljsrepl.core.seq.call(null,ms_4517);
while(true){
if(G__4510_4529)
{var vec__4511_4530 = cljsrepl.core.first.call(null,G__4510_4529);
var n_4531 = cljsrepl.core.nth.call(null,vec__4511_4530,0,null);
var meth_4532 = cljsrepl.core.nth.call(null,vec__4511_4530,1,null);
var c_4533 = cljsrepl.core.count.call(null,(new cljsrepl.core.Keyword("\uFDD0'params")).call(null,meth_4532));
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,meth_4532)))
{cljsrepl.compiler.emitln.call(null,mname_4514,".cljs$lang$arity$variadic = ",n_4531,".cljs$lang$arity$variadic;");
} else
{cljsrepl.compiler.emitln.call(null,mname_4514,".cljs$lang$arity$",c_4533," = ",n_4531,";");
}
{
var G__4534 = cljsrepl.core.next.call(null,G__4510_4529);
G__4510_4529 = G__4534;
continue;
}
} else
{}
break;
}
} else
{}
cljsrepl.compiler.emitln.call(null,"return ",mname_4514,";");
cljsrepl.compiler.emitln.call(null,"})()");
}
if(loop_locals)
{return cljsrepl.compiler.emitln.call(null,";})(",cljsrepl.compiler.comma_sep.call(null,loop_locals),"))");
} else
{return null;
}
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'do",(function (p__4535){
var map__4536 = p__4535;
var map__4536__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4536))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4536):map__4536);
var env = cljsrepl.core._lookup.call(null,map__4536__$1,"\uFDD0'env",null);
var ret = cljsrepl.core._lookup.call(null,map__4536__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4536__$1,"\uFDD0'statements",null);
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = statements;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.compiler.emits.call(null,"(function (){");
} else
{}
cljsrepl.compiler.emit_block.call(null,context,statements,ret);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = statements;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{return cljsrepl.compiler.emits.call(null,"})()");
} else
{return null;
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'try*",(function (p__4538){
var map__4539 = p__4538;
var map__4539__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4539))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4539):map__4539);
var finally$ = cljsrepl.core._lookup.call(null,map__4539__$1,"\uFDD0'finally",null);
var name = cljsrepl.core._lookup.call(null,map__4539__$1,"\uFDD0'name",null);
var catch$ = cljsrepl.core._lookup.call(null,map__4539__$1,"\uFDD0'catch",null);
var try$ = cljsrepl.core._lookup.call(null,map__4539__$1,"\uFDD0'try",null);
var env = cljsrepl.core._lookup.call(null,map__4539__$1,"\uFDD0'env",null);
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
var subcontext = ((cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context);
if(cljsrepl.core.truth_((function (){var or__3943__auto__ = name;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return finally$;
}
})()))
{if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{cljsrepl.compiler.emits.call(null,"(function (){");
} else
{}
cljsrepl.compiler.emits.call(null,"try{");
var map__4540_4544 = try$;
var map__4540_4545__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4540_4544))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4540_4544):map__4540_4544);
var ret_4546 = cljsrepl.core._lookup.call(null,map__4540_4545__$1,"\uFDD0'ret",null);
var statements_4547 = cljsrepl.core._lookup.call(null,map__4540_4545__$1,"\uFDD0'statements",null);
cljsrepl.compiler.emit_block.call(null,subcontext,statements_4547,ret_4546);
cljsrepl.compiler.emits.call(null,"}");
if(cljsrepl.core.truth_(name))
{cljsrepl.compiler.emits.call(null,"catch (",cljsrepl.compiler.munge.call(null,name),"){");
if(cljsrepl.core.truth_(catch$))
{var map__4541_4548 = catch$;
var map__4541_4549__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4541_4548))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4541_4548):map__4541_4548);
var ret_4550 = cljsrepl.core._lookup.call(null,map__4541_4549__$1,"\uFDD0'ret",null);
var statements_4551 = cljsrepl.core._lookup.call(null,map__4541_4549__$1,"\uFDD0'statements",null);
cljsrepl.compiler.emit_block.call(null,subcontext,statements_4551,ret_4550);
} else
{}
cljsrepl.compiler.emits.call(null,"}");
} else
{}
if(cljsrepl.core.truth_(finally$))
{var map__4542_4552 = finally$;
var map__4542_4553__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4542_4552))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4542_4552):map__4542_4552);
var ret_4554 = cljsrepl.core._lookup.call(null,map__4542_4553__$1,"\uFDD0'ret",null);
var statements_4555 = cljsrepl.core._lookup.call(null,map__4542_4553__$1,"\uFDD0'statements",null);
if(cljsrepl.core.not_EQ_.call(null,"\uFDD0'constant",(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,ret_4554)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("finally block cannot contain constant"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not=")),"\uFDD0'constant",cljsrepl.core.with_meta(cljsrepl.core.list("\uFDD0'op",(new cljsrepl.core.Symbol(null,"ret"))),cljsrepl.core.hash_map("\uFDD0'line",588,"\uFDD0'column",37))),cljsrepl.core.hash_map("\uFDD0'line",588,"\uFDD0'column",21))))].join('')));
}
cljsrepl.compiler.emits.call(null,"finally {");
cljsrepl.compiler.emit_block.call(null,subcontext,statements_4555,ret_4554);
cljsrepl.compiler.emits.call(null,"}");
} else
{}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{return cljsrepl.compiler.emits.call(null,"})()");
} else
{return null;
}
} else
{var map__4543 = try$;
var map__4543__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4543))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4543):map__4543);
var ret = cljsrepl.core._lookup.call(null,map__4543__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4543__$1,"\uFDD0'statements",null);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = statements;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.compiler.emits.call(null,"(function (){");
} else
{}
cljsrepl.compiler.emit_block.call(null,subcontext,statements,ret);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = statements;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{return cljsrepl.compiler.emits.call(null,"})()");
} else
{return null;
}
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'let",(function (p__4556){
var map__4557 = p__4556;
var map__4557__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4557))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4557):map__4557);
var loop = cljsrepl.core._lookup.call(null,map__4557__$1,"\uFDD0'loop",null);
var env = cljsrepl.core._lookup.call(null,map__4557__$1,"\uFDD0'env",null);
var ret = cljsrepl.core._lookup.call(null,map__4557__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4557__$1,"\uFDD0'statements",null);
var bindings = cljsrepl.core._lookup.call(null,map__4557__$1,"\uFDD0'bindings",null);
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{cljsrepl.compiler.emits.call(null,"(function (){");
} else
{}
var _STAR_lexical_renames_STAR_4558_4562 = cljsrepl.compiler._STAR_lexical_renames_STAR_;
try{cljsrepl.compiler._STAR_lexical_renames_STAR_ = cljsrepl.core.into.call(null,cljsrepl.compiler._STAR_lexical_renames_STAR_,((cljsrepl.core._EQ_.call(null,"\uFDD0'statement",context))?cljsrepl.core.map.call(null,(function (p1__4537_SHARP_){
return cljsrepl.core.vector.call(null,cljsrepl.core.hash.call(null,p1__4537_SHARP_),cljsrepl.core.gensym.call(null,[cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'name")).call(null,p1__4537_SHARP_)),cljsrepl.core.str("-")].join('')));
}),bindings):null));
var G__4560_4563 = cljsrepl.core.seq.call(null,bindings);
while(true){
if(G__4560_4563)
{var map__4561_4564 = cljsrepl.core.first.call(null,G__4560_4563);
var map__4561_4565__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4561_4564))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4561_4564):map__4561_4564);
var binding_4566 = map__4561_4565__$1;
var init_4567 = cljsrepl.core._lookup.call(null,map__4561_4565__$1,"\uFDD0'init",null);
cljsrepl.compiler.emitln.call(null,"var ",cljsrepl.compiler.munge.call(null,binding_4566)," = ",init_4567,";");
{
var G__4568 = cljsrepl.core.next.call(null,G__4560_4563);
G__4560_4563 = G__4568;
continue;
}
} else
{}
break;
}
if(cljsrepl.core.truth_(loop))
{cljsrepl.compiler.emitln.call(null,"while(true){");
} else
{}
cljsrepl.compiler.emit_block.call(null,((cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context),statements,ret);
if(cljsrepl.core.truth_(loop))
{cljsrepl.compiler.emitln.call(null,"break;");
cljsrepl.compiler.emitln.call(null,"}");
} else
{}
}finally {cljsrepl.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_4558_4562;
}if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{return cljsrepl.compiler.emits.call(null,"})()");
} else
{return null;
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'recur",(function (p__4569){
var map__4570 = p__4569;
var map__4570__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4570))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4570):map__4570);
var env = cljsrepl.core._lookup.call(null,map__4570__$1,"\uFDD0'env",null);
var exprs = cljsrepl.core._lookup.call(null,map__4570__$1,"\uFDD0'exprs",null);
var frame = cljsrepl.core._lookup.call(null,map__4570__$1,"\uFDD0'frame",null);
var temps = cljsrepl.core.vec.call(null,cljsrepl.core.take.call(null,cljsrepl.core.count.call(null,exprs),cljsrepl.core.repeatedly.call(null,cljsrepl.core.gensym)));
var params = (new cljsrepl.core.Keyword("\uFDD0'params")).call(null,frame);
cljsrepl.compiler.emitln.call(null,"{");
var n__2209__auto___4571 = cljsrepl.core.count.call(null,exprs);
var i_4572 = 0;
while(true){
if((i_4572 < n__2209__auto___4571))
{cljsrepl.compiler.emitln.call(null,"var ",temps.call(null,i_4572)," = ",exprs.call(null,i_4572),";");
{
var G__4573 = (i_4572 + 1);
i_4572 = G__4573;
continue;
}
} else
{}
break;
}
var n__2209__auto___4574 = cljsrepl.core.count.call(null,exprs);
var i_4575 = 0;
while(true){
if((i_4575 < n__2209__auto___4574))
{cljsrepl.compiler.emitln.call(null,cljsrepl.compiler.munge.call(null,params.call(null,i_4575))," = ",temps.call(null,i_4575),";");
{
var G__4576 = (i_4575 + 1);
i_4575 = G__4576;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,"continue;");
return cljsrepl.compiler.emitln.call(null,"}");
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'letfn",(function (p__4577){
var map__4578 = p__4577;
var map__4578__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4578))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4578):map__4578);
var env = cljsrepl.core._lookup.call(null,map__4578__$1,"\uFDD0'env",null);
var ret = cljsrepl.core._lookup.call(null,map__4578__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4578__$1,"\uFDD0'statements",null);
var bindings = cljsrepl.core._lookup.call(null,map__4578__$1,"\uFDD0'bindings",null);
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{cljsrepl.compiler.emits.call(null,"(function (){");
} else
{}
var G__4579_4581 = cljsrepl.core.seq.call(null,bindings);
while(true){
if(G__4579_4581)
{var map__4580_4582 = cljsrepl.core.first.call(null,G__4579_4581);
var map__4580_4583__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4580_4582))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4580_4582):map__4580_4582);
var binding_4584 = map__4580_4583__$1;
var init_4585 = cljsrepl.core._lookup.call(null,map__4580_4583__$1,"\uFDD0'init",null);
cljsrepl.compiler.emitln.call(null,"var ",cljsrepl.compiler.munge.call(null,binding_4584)," = ",init_4585,";");
{
var G__4586 = cljsrepl.core.next.call(null,G__4579_4581);
G__4579_4581 = G__4586;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emit_block.call(null,((cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context),statements,ret);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))
{return cljsrepl.compiler.emits.call(null,"})()");
} else
{return null;
}
}));
cljsrepl.compiler.protocol_prefix = (function protocol_prefix(psym){
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str([cljsrepl.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace((new RegExp("\\/","g")),"$")),cljsrepl.core.str("$")].join(''));
});
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'invoke",(function (p__4587){
var map__4588 = p__4587;
var map__4588__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4588))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4588):map__4588);
var expr = map__4588__$1;
var env = cljsrepl.core._lookup.call(null,map__4588__$1,"\uFDD0'env",null);
var args = cljsrepl.core._lookup.call(null,map__4588__$1,"\uFDD0'args",null);
var f = cljsrepl.core._lookup.call(null,map__4588__$1,"\uFDD0'f",null);
var info = (new cljsrepl.core.Keyword("\uFDD0'info")).call(null,f);
var fn_QMARK_ = (function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_static_fns_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljsrepl.core.not.call(null,(new cljsrepl.core.Keyword("\uFDD0'dynamic")).call(null,info));
if(and__3941__auto____$1)
{return (new cljsrepl.core.Keyword("\uFDD0'fn-var")).call(null,info);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
var protocol = (new cljsrepl.core.Keyword("\uFDD0'protocol")).call(null,info);
var proto_QMARK_ = (function (){var tag = cljsrepl.compiler.infer_tag.call(null,cljsrepl.core.first.call(null,(new cljsrepl.core.Keyword("\uFDD0'args")).call(null,expr)));
var and__3941__auto__ = protocol;
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = tag;
if(cljsrepl.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (function (){var or__3943__auto__ = cljsrepl.analyzer._STAR_cljs_static_fns_STAR_;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new cljsrepl.core.Keyword("\uFDD0'protocol-inline")).call(null,env);
}
})();
if(cljsrepl.core.truth_(and__3941__auto____$2))
{var or__3943__auto__ = cljsrepl.core._EQ_.call(null,protocol,tag);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var temp__4092__auto__ = (new cljsrepl.core.Keyword("\uFDD0'protocols")).call(null,cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.core.dissoc.call(null,env,"\uFDD0'locals"),tag));
if(cljsrepl.core.truth_(temp__4092__auto__))
{var ps = temp__4092__auto__;
return ps.call(null,protocol);
} else
{return null;
}
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
var opt_not_QMARK_ = (function (){var and__3941__auto__ = cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,info),(new cljsrepl.core.Symbol(null,"cljsrepl.core/not")));
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,cljsrepl.compiler.infer_tag.call(null,cljsrepl.core.first.call(null,(new cljsrepl.core.Keyword("\uFDD0'args")).call(null,expr))),(new cljsrepl.core.Symbol(null,"boolean")));
} else
{return and__3941__auto__;
}
})();
var ns = (new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,info);
var js_QMARK_ = cljsrepl.core._EQ_.call(null,ns,(new cljsrepl.core.Symbol(null,"js")));
var goog_QMARK_ = (cljsrepl.core.truth_(ns)?(function (){var or__3943__auto__ = cljsrepl.core._EQ_.call(null,ns,(new cljsrepl.core.Symbol(null,"goog")));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var temp__4092__auto__ = [cljsrepl.core.str(ns)].join('');
if(cljsrepl.core.truth_(temp__4092__auto__))
{var ns_str = temp__4092__auto__;
return cljsrepl.core._EQ_.call(null,cljsrepl.core._lookup.call(null,replclojure.string.split.call(null,ns_str,/\./),0,null),"goog");
} else
{return null;
}
}
})():null);
var keyword_QMARK_ = (function (){var and__3941__auto__ = cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,f),"\uFDD0'constant");
if(and__3941__auto__)
{return cljsrepl.core.keyword_QMARK_.call(null,(new cljsrepl.core.Keyword("\uFDD0'form")).call(null,f));
} else
{return and__3941__auto__;
}
})();
var vec__4589 = (cljsrepl.core.truth_(fn_QMARK_)?(function (){var arity = cljsrepl.core.count.call(null,args);
var variadic_QMARK_ = (new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,info);
var mps = (new cljsrepl.core.Keyword("\uFDD0'method-params")).call(null,info);
var mfa = (new cljsrepl.core.Keyword("\uFDD0'max-fixed-arity")).call(null,info);
if((function (){var and__3941__auto__ = cljsrepl.core.not.call(null,variadic_QMARK_);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,cljsrepl.core.count.call(null,mps),1);
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.PersistentVector.fromArray([f,null], true);
} else
{if(cljsrepl.core.truth_((function (){var and__3941__auto__ = variadic_QMARK_;
if(cljsrepl.core.truth_(and__3941__auto__))
{return (arity > mfa);
} else
{return and__3941__auto__;
}
})()))
{return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.update_in.call(null,f,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'info","\uFDD0'name"], true),(function (name){
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str(cljsrepl.compiler.munge.call(null,name)),cljsrepl.core.str(".cljs$lang$arity$variadic")].join(''));
})),cljsrepl.core.ObjMap.fromObject(["\uFDD0'max-fixed-arity"],{"\uFDD0'max-fixed-arity":mfa})], true);
} else
{if("\uFDD0'else")
{var arities = cljsrepl.core.map.call(null,cljsrepl.core.count,mps);
if(cljsrepl.core.truth_(cljsrepl.core.some.call(null,cljsrepl.core.PersistentHashSet.fromArray([arity]),arities)))
{return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.update_in.call(null,f,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'info","\uFDD0'name"], true),(function (name){
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str(cljsrepl.compiler.munge.call(null,name)),cljsrepl.core.str(".cljs$lang$arity$"),cljsrepl.core.str(arity)].join(''));
})),null], true);
} else
{return cljsrepl.core.PersistentVector.fromArray([f,null], true);
}
} else
{return null;
}
}
}
})():cljsrepl.core.PersistentVector.fromArray([f,null], true));
var f__$1 = cljsrepl.core.nth.call(null,vec__4589,0,null);
var variadic_invoke = cljsrepl.core.nth.call(null,vec__4589,1,null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
if(cljsrepl.core.truth_(opt_not_QMARK_))
{cljsrepl.compiler.emits.call(null,"!(",cljsrepl.core.first.call(null,args),")");
} else
{if(cljsrepl.core.truth_(proto_QMARK_))
{var pimpl_4590 = [cljsrepl.core.str(cljsrepl.compiler.munge.call(null,cljsrepl.compiler.protocol_prefix.call(null,protocol))),cljsrepl.core.str(cljsrepl.compiler.munge.call(null,cljsrepl.core.name.call(null,(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,info)))),cljsrepl.core.str("$arity$"),cljsrepl.core.str(cljsrepl.core.count.call(null,args))].join('');
cljsrepl.compiler.emits.call(null,cljsrepl.core.first.call(null,args),".",pimpl_4590,"(",cljsrepl.compiler.comma_sep.call(null,args),")");
} else
{if(cljsrepl.core.truth_(keyword_QMARK_))
{cljsrepl.compiler.emits.call(null,"(new cljsrepl.core.Keyword(",f__$1,")).call(",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.cons.call(null,"null",args)),")");
} else
{if(cljsrepl.core.truth_(variadic_invoke))
{var mfa_4591 = (new cljsrepl.core.Keyword("\uFDD0'max-fixed-arity")).call(null,variadic_invoke);
cljsrepl.compiler.emits.call(null,f__$1,"(",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.take.call(null,mfa_4591,args)),(((mfa_4591 === 0))?null:","),"cljsrepl.core.array_seq([",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.drop.call(null,mfa_4591,args)),"], 0))");
} else
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = fn_QMARK_;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = js_QMARK_;
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return goog_QMARK_;
}
}
})()))
{cljsrepl.compiler.emits.call(null,f__$1,"(",cljsrepl.compiler.comma_sep.call(null,args),")");
} else
{if("\uFDD0'else")
{if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_static_fns_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,f__$1),"\uFDD0'var");
} else
{return and__3941__auto__;
}
})()))
{var fprop_4592 = [cljsrepl.core.str(".cljs$lang$arity$"),cljsrepl.core.str(cljsrepl.core.count.call(null,args))].join('');
cljsrepl.compiler.emits.call(null,"(",f__$1,fprop_4592," ? ",f__$1,fprop_4592,"(",cljsrepl.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.cons.call(null,"null",args)),"))");
} else
{cljsrepl.compiler.emits.call(null,f__$1,".call(",cljsrepl.compiler.comma_sep.call(null,cljsrepl.core.cons.call(null,"null",args)),")");
}
} else
{}
}
}
}
}
}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'new",(function (p__4593){
var map__4594 = p__4593;
var map__4594__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4594))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4594):map__4594);
var env = cljsrepl.core._lookup.call(null,map__4594__$1,"\uFDD0'env",null);
var args = cljsrepl.core._lookup.call(null,map__4594__$1,"\uFDD0'args",null);
var ctor = cljsrepl.core._lookup.call(null,map__4594__$1,"\uFDD0'ctor",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emits.call(null,"(new ",ctor,"(",cljsrepl.compiler.comma_sep.call(null,args),"))");
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'set!",(function (p__4595){
var map__4596 = p__4595;
var map__4596__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4596))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4596):map__4596);
var env = cljsrepl.core._lookup.call(null,map__4596__$1,"\uFDD0'env",null);
var val = cljsrepl.core._lookup.call(null,map__4596__$1,"\uFDD0'val",null);
var target = cljsrepl.core._lookup.call(null,map__4596__$1,"\uFDD0'target",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
cljsrepl.compiler.emits.call(null,target," = ",val);
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'ns",(function (p__4597){
var map__4598 = p__4597;
var map__4598__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4598))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4598):map__4598);
var env = cljsrepl.core._lookup.call(null,map__4598__$1,"\uFDD0'env",null);
var requires_macros = cljsrepl.core._lookup.call(null,map__4598__$1,"\uFDD0'requires-macros",null);
var uses = cljsrepl.core._lookup.call(null,map__4598__$1,"\uFDD0'uses",null);
var requires = cljsrepl.core._lookup.call(null,map__4598__$1,"\uFDD0'requires",null);
var name = cljsrepl.core._lookup.call(null,map__4598__$1,"\uFDD0'name",null);
cljsrepl.core.swap_BANG_.call(null,cljsrepl.compiler.ns_first_segments,cljsrepl.core.conj,cljsrepl.core.first.call(null,replclojure.string.split.call(null,[cljsrepl.core.str(name)].join(''),/\./)));
cljsrepl.compiler.emit_provide.call(null,cljsrepl.compiler.munge.call(null,name));
if(cljsrepl.core._EQ_.call(null,name,(new cljsrepl.core.Symbol(null,"cljsrepl.core"))))
{} else
{cljsrepl.compiler.emitln.call(null,"replgoog.require('cljsrepl.core');");
}
var G__4599 = cljsrepl.core.seq.call(null,cljsrepl.core.into.call(null,cljsrepl.core.vals.call(null,requires),cljsrepl.core.distinct.call(null,cljsrepl.core.vals.call(null,uses))));
while(true){
if(G__4599)
{var lib = cljsrepl.core.first.call(null,G__4599);
cljsrepl.compiler.emitln.call(null,"replgoog.require('",cljsrepl.compiler.munge.call(null,lib),"');");
{
var G__4600 = cljsrepl.core.next.call(null,G__4599);
G__4599 = G__4600;
continue;
}
} else
{return null;
}
break;
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'deftype*",(function (p__4601){
var map__4602 = p__4601;
var map__4602__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4602))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4602):map__4602);
var pmasks = cljsrepl.core._lookup.call(null,map__4602__$1,"\uFDD0'pmasks",null);
var fields = cljsrepl.core._lookup.call(null,map__4602__$1,"\uFDD0'fields",null);
var t = cljsrepl.core._lookup.call(null,map__4602__$1,"\uFDD0't",null);
var fields__$1 = cljsrepl.core.map.call(null,cljsrepl.compiler.munge,fields);
cljsrepl.compiler.emit_provide.call(null,t);
cljsrepl.compiler.emitln.call(null,"");
cljsrepl.compiler.emitln.call(null,"/**");
cljsrepl.compiler.emitln.call(null,"* @constructor");
cljsrepl.compiler.emitln.call(null,"*/");
cljsrepl.compiler.emitln.call(null,cljsrepl.compiler.munge.call(null,t)," = (function (",cljsrepl.compiler.comma_sep.call(null,fields__$1),"){");
var G__4603_4606 = cljsrepl.core.seq.call(null,fields__$1);
while(true){
if(G__4603_4606)
{var fld_4607 = cljsrepl.core.first.call(null,G__4603_4606);
cljsrepl.compiler.emitln.call(null,"this.",fld_4607," = ",fld_4607,";");
{
var G__4608 = cljsrepl.core.next.call(null,G__4603_4606);
G__4603_4606 = G__4608;
continue;
}
} else
{}
break;
}
var G__4604_4609 = cljsrepl.core.seq.call(null,pmasks);
while(true){
if(G__4604_4609)
{var vec__4605_4610 = cljsrepl.core.first.call(null,G__4604_4609);
var pno_4611 = cljsrepl.core.nth.call(null,vec__4605_4610,0,null);
var pmask_4612 = cljsrepl.core.nth.call(null,vec__4605_4610,1,null);
cljsrepl.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4611,"$ = ",pmask_4612,";");
{
var G__4613 = cljsrepl.core.next.call(null,G__4604_4609);
G__4604_4609 = G__4613;
continue;
}
} else
{}
break;
}
return cljsrepl.compiler.emitln.call(null,"})");
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'defrecord*",(function (p__4614){
var map__4615 = p__4614;
var map__4615__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4615))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4615):map__4615);
var pmasks = cljsrepl.core._lookup.call(null,map__4615__$1,"\uFDD0'pmasks",null);
var fields = cljsrepl.core._lookup.call(null,map__4615__$1,"\uFDD0'fields",null);
var t = cljsrepl.core._lookup.call(null,map__4615__$1,"\uFDD0't",null);
var fields__$1 = cljsrepl.core.concat.call(null,cljsrepl.core.map.call(null,cljsrepl.compiler.munge,fields),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"__meta")),(new cljsrepl.core.Symbol(null,"__extmap"))]));
cljsrepl.compiler.emit_provide.call(null,t);
cljsrepl.compiler.emitln.call(null,"");
cljsrepl.compiler.emitln.call(null,"/**");
cljsrepl.compiler.emitln.call(null,"* @constructor");
var G__4616_4620 = cljsrepl.core.seq.call(null,fields__$1);
while(true){
if(G__4616_4620)
{var fld_4621 = cljsrepl.core.first.call(null,G__4616_4620);
cljsrepl.compiler.emitln.call(null,"* @param {*} ",fld_4621);
{
var G__4622 = cljsrepl.core.next.call(null,G__4616_4620);
G__4616_4620 = G__4622;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,"* @param {*=} __meta ");
cljsrepl.compiler.emitln.call(null,"* @param {*=} __extmap");
cljsrepl.compiler.emitln.call(null,"*/");
cljsrepl.compiler.emitln.call(null,cljsrepl.compiler.munge.call(null,t)," = (function (",cljsrepl.compiler.comma_sep.call(null,fields__$1),"){");
var G__4617_4623 = cljsrepl.core.seq.call(null,fields__$1);
while(true){
if(G__4617_4623)
{var fld_4624 = cljsrepl.core.first.call(null,G__4617_4623);
cljsrepl.compiler.emitln.call(null,"this.",fld_4624," = ",fld_4624,";");
{
var G__4625 = cljsrepl.core.next.call(null,G__4617_4623);
G__4617_4623 = G__4625;
continue;
}
} else
{}
break;
}
var G__4618_4626 = cljsrepl.core.seq.call(null,pmasks);
while(true){
if(G__4618_4626)
{var vec__4619_4627 = cljsrepl.core.first.call(null,G__4618_4626);
var pno_4628 = cljsrepl.core.nth.call(null,vec__4619_4627,0,null);
var pmask_4629 = cljsrepl.core.nth.call(null,vec__4619_4627,1,null);
cljsrepl.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4628,"$ = ",pmask_4629,";");
{
var G__4630 = cljsrepl.core.next.call(null,G__4618_4626);
G__4618_4626 = G__4630;
continue;
}
} else
{}
break;
}
cljsrepl.compiler.emitln.call(null,"if(arguments.length>",(cljsrepl.core.count.call(null,fields__$1) - 2),"){");
cljsrepl.compiler.emitln.call(null,"this.__meta = __meta;");
cljsrepl.compiler.emitln.call(null,"this.__extmap = __extmap;");
cljsrepl.compiler.emitln.call(null,"} else {");
cljsrepl.compiler.emits.call(null,"this.__meta=");
cljsrepl.compiler.emit_constant.call(null,null);
cljsrepl.compiler.emitln.call(null,";");
cljsrepl.compiler.emits.call(null,"this.__extmap=");
cljsrepl.compiler.emit_constant.call(null,null);
cljsrepl.compiler.emitln.call(null,";");
cljsrepl.compiler.emitln.call(null,"}");
return cljsrepl.compiler.emitln.call(null,"})");
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'dot",(function (p__4631){
var map__4632 = p__4631;
var map__4632__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4632))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4632):map__4632);
var env = cljsrepl.core._lookup.call(null,map__4632__$1,"\uFDD0'env",null);
var args = cljsrepl.core._lookup.call(null,map__4632__$1,"\uFDD0'args",null);
var method = cljsrepl.core._lookup.call(null,map__4632__$1,"\uFDD0'method",null);
var field = cljsrepl.core._lookup.call(null,map__4632__$1,"\uFDD0'field",null);
var target = cljsrepl.core._lookup.call(null,map__4632__$1,"\uFDD0'target",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
if(cljsrepl.core.truth_(field))
{cljsrepl.compiler.emits.call(null,target,".",cljsrepl.compiler.munge.call(null,field,cljsrepl.core.PersistentHashSet.EMPTY));
} else
{cljsrepl.compiler.emits.call(null,target,".",cljsrepl.compiler.munge.call(null,method,cljsrepl.core.PersistentHashSet.EMPTY),"(",cljsrepl.compiler.comma_sep.call(null,args),")");
}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
cljsrepl.core._add_method.call(null,cljsrepl.compiler.emit,"\uFDD0'js",(function (p__4633){
var map__4634 = p__4633;
var map__4634__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4634))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4634):map__4634);
var args = cljsrepl.core._lookup.call(null,map__4634__$1,"\uFDD0'args",null);
var segs = cljsrepl.core._lookup.call(null,map__4634__$1,"\uFDD0'segs",null);
var code = cljsrepl.core._lookup.call(null,map__4634__$1,"\uFDD0'code",null);
var env = cljsrepl.core._lookup.call(null,map__4634__$1,"\uFDD0'env",null);
var env__3045__auto__ = env;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'return",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{cljsrepl.compiler.emits.call(null,"return ");
} else
{}
if(cljsrepl.core.truth_(code))
{cljsrepl.compiler.emits.call(null,code);
} else
{cljsrepl.compiler.emits.call(null,cljsrepl.core.interleave.call(null,cljsrepl.core.concat.call(null,segs,cljsrepl.core.repeat.call(null,null)),cljsrepl.core.concat.call(null,args,cljsrepl.core.PersistentVector.fromArray([null], true))));
}
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return cljsrepl.compiler.emitln.call(null,";");
}
}));
/**
* Seq of forms in a Clojure or ClojureScript file.
*/
cljsrepl.compiler.forms_seq = (function() {
var forms_seq = null;
var forms_seq__1 = (function (f){
return forms_seq.call(null,f,cljsrepl.reader.indexing_push_back_reader.call(null,cljsrepl.io.file_read.call(null,f)));
});
var forms_seq__2 = (function (f,rdr){
var temp__4090__auto__ = (function (){var _STAR_ns_sym_STAR_4637 = cljsrepl.core._STAR_ns_sym_STAR_;
try{cljsrepl.core._STAR_ns_sym_STAR_ = cljsrepl.analyzer._STAR_reader_ns_name_STAR_;
return cljsrepl.reader.read.call(null,rdr,null,null);
}finally {cljsrepl.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_4637;
}})();
if(cljsrepl.core.truth_(temp__4090__auto__))
{var form = temp__4090__auto__;
return (new cljsrepl.core.LazySeq(null,false,(function (){
return cljsrepl.core.cons.call(null,form,forms_seq.call(null,f,rdr));
}),null));
} else
{return null;
}
});
forms_seq = function(f,rdr){
switch(arguments.length){
case 1:
return forms_seq__1.call(this,f);
case 2:
return forms_seq__2.call(this,f,rdr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
forms_seq.cljs$lang$arity$1 = forms_seq__1;
forms_seq.cljs$lang$arity$2 = forms_seq__2;
return forms_seq;
})()
;
/**
* Change the file extension from .cljs to .js. Takes a File or a
* String. Always returns a String.
*/
cljsrepl.compiler.rename_to_js = (function rename_to_js(file_str){
return replclojure.string.replace.call(null,file_str,/\.cljs$/,".js");
});
/**
* Create all parent directories for the passed file.
*/
cljsrepl.compiler.mkdirs = (function mkdirs(f){
return f.getCanonicalFile().getParentFile().mkdirs();
});
cljsrepl.compiler.compile_forms_STAR_ = (function compile_forms_STAR_(forms,ns_name,deps,eval_QMARK_,code,output){
while(true){
if(cljsrepl.core.seq.call(null,forms))
{var env = cljsrepl.analyzer.empty_env.call(null);
var form = cljsrepl.core.first.call(null,forms);
var ast = cljsrepl.analyzer.analyze.call(null,env,form);
var js_str = cljsrepl.compiler.emit_str.call(null,ast);
var code__$1 = [cljsrepl.core.str(code),cljsrepl.core.str(js_str)].join('');
var output__$1 = [cljsrepl.core.str(output),cljsrepl.core.str((cljsrepl.core.truth_(eval_QMARK_)?(function (){try{var sb__2259__auto__ = (new replgoog.string.StringBuffer());
var _STAR_print_fn_STAR_4643_4645 = cljsrepl.core._STAR_print_fn_STAR_;
try{cljsrepl.core._STAR_print_fn_STAR_ = ((function (forms,ns_name,deps,eval_QMARK_,code,output){
return (function (x__2260__auto__){
return sb__2259__auto__.append(x__2260__auto__);
});})(forms,ns_name,deps,eval_QMARK_,code,output))
;
eval(js_str);
}finally {cljsrepl.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_4643_4645;
}return [cljsrepl.core.str(sb__2259__auto__)].join('');
}catch (e4642){if(cljsrepl.core.instance_QMARK_.call(null,Error,e4642))
{var e = e4642;
throw (new Error([cljsrepl.core.str(e),cljsrepl.core.str((cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'line")).call(null,cljsrepl.core.meta.call(null,form)))?[cljsrepl.core.str(", line "),cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'line")).call(null,cljsrepl.core.meta.call(null,form))),cljsrepl.core.str(", column "),cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'column")).call(null,cljsrepl.core.meta.call(null,form)))].join(''):null)),cljsrepl.core.str("\n  while compiling form: "),cljsrepl.core.str(form),cljsrepl.core.str("\n  which emitted JavaScript: "),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,js_str))].join('')));
} else
{if("\uFDD0'else")
{throw e4642;
} else
{return null;
}
}
}})():null))].join('');
if(cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,ast),"\uFDD0'ns"))
{{
var G__4646 = cljsrepl.core.rest.call(null,forms);
var G__4647 = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,ast);
var G__4648 = cljsrepl.core.merge.call(null,(new cljsrepl.core.Keyword("\uFDD0'uses")).call(null,ast),(new cljsrepl.core.Keyword("\uFDD0'requires")).call(null,ast));
var G__4649 = eval_QMARK_;
var G__4650 = code__$1;
var G__4651 = output__$1;
forms = G__4646;
ns_name = G__4647;
deps = G__4648;
eval_QMARK_ = G__4649;
code = G__4650;
output = G__4651;
continue;
}
} else
{{
var G__4652 = cljsrepl.core.rest.call(null,forms);
var G__4653 = ns_name;
var G__4654 = deps;
var G__4655 = eval_QMARK_;
var G__4656 = code__$1;
var G__4657 = output__$1;
forms = G__4652;
ns_name = G__4653;
deps = G__4654;
eval_QMARK_ = G__4655;
code = G__4656;
output = G__4657;
continue;
}
}
} else
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'ns","\uFDD0'emit-str","\uFDD0'output","\uFDD0'provides","\uFDD0'requires"],{"\uFDD0'ns":(function (){var or__3943__auto__ = ns_name;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.analyzer._STAR_cljs_ns_STAR_;
}
})(),"\uFDD0'emit-str":code,"\uFDD0'output":output,"\uFDD0'provides":cljsrepl.core.PersistentVector.fromArray([ns_name], true),"\uFDD0'requires":((cljsrepl.core._EQ_.call(null,ns_name,(new cljsrepl.core.Symbol(null,"cljsrepl.core"))))?cljsrepl.core.set.call(null,cljsrepl.core.vals.call(null,deps)):cljsrepl.core.conj.call(null,cljsrepl.core.set.call(null,cljsrepl.core.vals.call(null,deps)),(new cljsrepl.core.Symbol(null,"cljsrepl.core"))))});
}
break;
}
});
cljsrepl.compiler.compile_forms = (function compile_forms(forms){
return cljsrepl.compiler.compile_forms_STAR_.call(null,forms,null,null,false,"","");
});
cljsrepl.compiler.compile_and_eval_forms = (function compile_and_eval_forms(forms){
return cljsrepl.compiler.compile_forms_STAR_.call(null,forms,null,null,true,"","");
});
/**
* Snapshot the given namespace. Returns the JavaScript to update
* cljsrepl.core/namespace based on the snapshot.
*/
cljsrepl.compiler.ns_snap = (function ns_snap(ns){
var nss1 = cljsrepl.core.update_in.call(null,cljsrepl.core.dissoc.call(null,cljsrepl.core._lookup.call(null,cljsrepl.core.deref.call(null,cljsrepl.analyzer.namespaces),ns,null),"\uFDD0'requires-macros"),cljsrepl.core.PersistentVector.fromArray(["\uFDD0'defs",(new cljsrepl.core.Symbol(null,"/"))], true),cljsrepl.core.assoc,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core/_SLASH_")));
var nss2 = cljsrepl.core.update_in.call(null,cljsrepl.reader.read_string.call(null,cljsrepl.core.pr_str.call(null,nss1)),cljsrepl.core.PersistentVector.fromArray(["\uFDD0'defs",(new cljsrepl.core.Symbol(null,"/"))], true),cljsrepl.core.assoc,"\uFDD0'name",cljsrepl.core.symbol.call(null,"cljsrepl.core//"));
return cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.compiler.emit_str.call(null,cljsrepl.analyzer.analyze.call(null,cljsrepl.analyzer.empty_env.call(null),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"swap!")),(new cljsrepl.core.Symbol(null,"cljsrepl.core/namespaces")),(new cljsrepl.core.Symbol(null,"assoc")),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),ns),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),nss2)))));
});
cljsrepl.compiler.compile_file_STAR_ = (function compile_file_STAR_(src,dest){
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'defs")).call(null,cljsrepl.core._lookup.call(null,cljsrepl.core.deref.call(null,cljsrepl.analyzer.namespaces),(new cljsrepl.core.Symbol(null,"cljsrepl.core")),null))))
{} else
{cljsrepl.core.println.call(null,"// analyzing cljs/core.cljs");
cljsrepl.analyzer.analyze_file.call(null,"cljs/core.cljs");
}
var _STAR_cljs_ns_STAR_4663 = cljsrepl.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_4664 = cljsrepl.analyzer._STAR_cljs_file_STAR_;
var _STAR_position_STAR_4665 = cljsrepl.compiler._STAR_position_STAR_;
var _STAR_emitted_provides_STAR_4666 = cljsrepl.compiler._STAR_emitted_provides_STAR_;
try{cljsrepl.analyzer._STAR_cljs_ns_STAR_ = (new cljsrepl.core.Symbol(null,"cljsrepl.user"));
cljsrepl.analyzer._STAR_cljs_file_STAR_ = src.getPath();
cljsrepl.compiler._STAR_position_STAR_ = cljsrepl.core.atom.call(null,cljsrepl.core.PersistentVector.fromArray([0,0], true));
cljsrepl.compiler._STAR_emitted_provides_STAR_ = cljsrepl.core.atom.call(null,cljsrepl.core.PersistentHashSet.EMPTY);
var cf = cljsrepl.core.merge.call(null,cljsrepl.compiler.compile_forms.call(null,cljsrepl.compiler.forms_seq.call(null,src)),cljsrepl.core.ObjMap.fromObject(["\uFDD0'file"],{"\uFDD0'file":cljsrepl.io.file.call(null,dest.getPath())}));
var ns_str = cljsrepl.compiler.ns_snap.call(null,cljsrepl.core.first.call(null,(new cljsrepl.core.Keyword("\uFDD0'provides")).call(null,cf)));
var write_str = [cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'emit-str")).call(null,cf)),cljsrepl.core.str("\n// Analyzer namespace snapshot:\n"),cljsrepl.core.str(ns_str)].join('');
cljsrepl.io.file_write.call(null,dest,write_str);
return cljsrepl.core.dissoc.call(null,cf,"\uFDD0'emit-str","\uFDD0'output");
}finally {cljsrepl.compiler._STAR_emitted_provides_STAR_ = _STAR_emitted_provides_STAR_4666;
cljsrepl.compiler._STAR_position_STAR_ = _STAR_position_STAR_4665;
cljsrepl.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_4664;
cljsrepl.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_4663;
}});
/**
* Return true if the src file requires compilation.
*/
cljsrepl.compiler.requires_compilation_QMARK_ = (function requires_compilation_QMARK_(src,dest){
var or__3943__auto__ = cljsrepl.core.not.call(null,dest.exists());
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (src.lastModified() > dest.lastModified());
}
});
/**
* Compiles src to a file of the same name, but with a .js extension,
* in the src file's directory.
* 
* With dest argument, write file to provided location. If the dest
* argument is a file outside the source tree, missing parent
* directories will be created. The src file will only be compiled if
* the dest file has an older modification time.
* 
* Both src and dest may be either a String or a File.
* 
* Returns a map containing {:ns .. :provides .. :requires .. :file ..}.
* If the file was not compiled returns only {:file ...}
*/
cljsrepl.compiler.compile_file = (function() {
var compile_file = null;
var compile_file__1 = (function (src){
var dest = cljsrepl.compiler.rename_to_js.call(null,src);
return compile_file.call(null,src,dest);
});
var compile_file__2 = (function (src,dest){
var src_file = cljsrepl.io.file.call(null,src);
var dest_file = cljsrepl.io.file.call(null,dest);
if(cljsrepl.core.truth_(src_file.exists()))
{if(cljsrepl.core.truth_(cljsrepl.compiler.requires_compilation_QMARK_.call(null,src_file,dest_file)))
{cljsrepl.compiler.mkdirs.call(null,dest_file);
return cljsrepl.compiler.compile_file_STAR_.call(null,src_file,dest_file);
} else
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'file"],{"\uFDD0'file":dest_file});
}
} else
{throw (new Error([cljsrepl.core.str("The file "),cljsrepl.core.str(src),cljsrepl.core.str(" does not exist.")].join('')));
}
});
compile_file = function(src,dest){
switch(arguments.length){
case 1:
return compile_file__1.call(this,src);
case 2:
return compile_file__2.call(this,src,dest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compile_file.cljs$lang$arity$1 = compile_file__1;
compile_file.cljs$lang$arity$2 = compile_file__2;
return compile_file;
})()
;
cljsrepl.compiler.path_seq = (function path_seq(file_str){
return replclojure.string.split.call(null,file_str,cljsrepl.io.path_separator);
});
cljsrepl.compiler.to_path = (function() {
var to_path = null;
var to_path__1 = (function (parts){
return to_path.call(null,parts,cljsrepl.io.path_separator);
});
var to_path__2 = (function (parts,sep){
return cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.interpose.call(null,sep,parts));
});
to_path = function(parts,sep){
switch(arguments.length){
case 1:
return to_path__1.call(this,parts);
case 2:
return to_path__2.call(this,parts,sep);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_path.cljs$lang$arity$1 = to_path__1;
to_path.cljs$lang$arity$2 = to_path__2;
return to_path;
})()
;
/**
* Given the source root directory, the output target directory and
* file under the source root, produce the target file.
*/
cljsrepl.compiler.to_target_file = (function to_target_file(dir,target,file){
var dir_path = cljsrepl.compiler.path_seq.call(null,dir.getAbsolutePath());
var file_path = cljsrepl.compiler.path_seq.call(null,file.getAbsolutePath());
var relative_path = cljsrepl.core.drop.call(null,cljsrepl.core.count.call(null,dir_path),file_path);
var parents = cljsrepl.core.butlast.call(null,relative_path);
var parent_file = cljsrepl.io.file.call(null,cljsrepl.compiler.to_path.call(null,cljsrepl.core.cons.call(null,target,parents)));
return cljsrepl.io.file.call(null,parent_file,cljsrepl.compiler.rename_to_js.call(null,cljsrepl.core.last.call(null,relative_path)));
});
/**
* Return a sequence of all .cljs files in the given directory.
*/
cljsrepl.compiler.cljs_files_in = (function cljs_files_in(dir){
return cljsrepl.core.filter.call(null,(function (p1__4668_SHARP_){
var name = p1__4668_SHARP_.getName();
var and__3941__auto__ = cljsrepl.core.re_find.call(null,/\.cljs$/,name);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljsrepl.core.not_EQ_.call(null,".",cljsrepl.core.first.call(null,name));
if(and__3941__auto____$1)
{return !(cljsrepl.core.contains_QMARK_.call(null,cljsrepl.compiler.cljs_reserved_file_names,name));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljsrepl.io.file_seq.call(null,dir));
});
/**
* Looks recursively in src-dir for .cljs files and compiles them to
* .js files. If target-dir is provided, output will go into this
* directory mirroring the source directory structure. Returns a list
* of maps containing information about each file which was compiled
* in dependency order.
*/
cljsrepl.compiler.compile_root = (function() {
var compile_root = null;
var compile_root__1 = (function (src_dir){
return compile_root.call(null,src_dir,"out");
});
var compile_root__2 = (function (src_dir,target_dir){
var src_dir_file = cljsrepl.io.file.call(null,src_dir);
var cljs_files = cljsrepl.compiler.cljs_files_in.call(null,src_dir_file);
var output_files = cljsrepl.core.PersistentVector.EMPTY;
while(true){
if(cljsrepl.core.seq.call(null,cljs_files))
{var cljs_file = cljsrepl.core.first.call(null,cljs_files);
var output_file = cljsrepl.compiler.to_target_file.call(null,src_dir_file,target_dir,cljs_file);
var ns_info = cljsrepl.compiler.compile_file.call(null,cljs_file,output_file);
{
var G__4669 = cljsrepl.core.rest.call(null,cljs_files);
var G__4670 = cljsrepl.core.conj.call(null,output_files,cljsrepl.core.assoc.call(null,ns_info,"\uFDD0'file-name",output_file.getPath()));
cljs_files = G__4669;
output_files = G__4670;
continue;
}
} else
{return output_files;
}
break;
}
});
compile_root = function(src_dir,target_dir){
switch(arguments.length){
case 1:
return compile_root__1.call(this,src_dir);
case 2:
return compile_root__2.call(this,src_dir,target_dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compile_root.cljs$lang$arity$1 = compile_root__1;
compile_root.cljs$lang$arity$2 = compile_root__2;
return compile_root;
})()
;

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"cljsrepl.compiler"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4671__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4671 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4671__delegate.call(this, m);
};
G__4671.cljs$lang$maxFixedArity = 0;
G__4671.cljs$lang$applyTo = (function (arglist__4672){
var m = cljsrepl.core.seq(arglist__4672);;
return G__4671__delegate(m);
});
G__4671.cljs$lang$arity$variadic = G__4671__delegate;
return G__4671;
})()
,cljsrepl.core.hash_map("\uFDD0'defs",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"cljs-reserved-file-names")),cljsrepl.core.hash_map("\uFDD0'line",41,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/cljs-reserved-file-names"))),(new cljsrepl.core.Symbol(null,"get-tag")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/get-tag")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",338,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-apply-to")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'keys",cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"name")),(new cljsrepl.core.Symbol(null,"params")),(new cljsrepl.core.Symbol(null,"env"))]))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4466")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-apply-to")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",410,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"compile-and-eval-forms")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"forms"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"forms")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/compile-and-eval-forms")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",857,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"escape-char")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"c"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"c")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"Character")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/escape-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",105,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"*lexical-renames*")),cljsrepl.core.hash_map("\uFDD0'line",40,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/*lexical-renames*"))),(new cljsrepl.core.Symbol(null,"infer-tag")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/infer-tag")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",342,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"requires-compilation?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"src")),(new cljsrepl.core.Symbol(null,"dest"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"src")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"dest")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/requires-compilation?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Return true if the src file requires compilation.","\uFDD0'line",897,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-provide")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-provide")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",167,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"mkdirs")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/mkdirs")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Create all parent directories for the passed file.","\uFDD0'line",819,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-constant-set")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-constant-set")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",204,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"munge")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"reserved"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reserved")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/munge")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",73,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-meta-constant")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x")),(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"body"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"body")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-meta-constant")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",173,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"ns-first-segments")),cljsrepl.core.hash_map("\uFDD0'line",44,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/ns-first-segments"))),(new cljsrepl.core.Symbol(null,"forms-seq")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f")),(new cljsrepl.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/forms-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Seq of forms in a Clojure or ClojureScript file.","\uFDD0'line",803,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"js-reserved")),cljsrepl.core.hash_map("\uFDD0'line",24,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/js-reserved"))),(new cljsrepl.core.Symbol(null,"safe-test?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"e"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/safe-test?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",357,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"compile-file*")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"src")),(new cljsrepl.core.Symbol(null,"dest"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"src")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"dest")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/compile-file*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",882,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emitln")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"xs"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"xs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emitln")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",155,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"compile-forms")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"forms"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"forms")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/compile-forms")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",855,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"/")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core//"))),(new cljsrepl.core.Symbol(null,"array-map-threshold")),cljsrepl.core.hash_map("\uFDD0'line",284,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'private",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/array-map-threshold"))),(new cljsrepl.core.Symbol(null,"escape-string")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"CharSequence")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/escape-string")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",129,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-constant-keyword")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-constant-keyword")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",181,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"escape-pattern")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"pattern"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"pattern")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"String")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/escape-pattern")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",122,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-constant")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/EmitConstant")),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-constant")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",210,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-block")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"context")),(new cljsrepl.core.Symbol(null,"statements")),(new cljsrepl.core.Symbol(null,"ret"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"context")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"statements")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ret")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-block")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",256,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-variadic-fn-method")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'keys",cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"type")),(new cljsrepl.core.Symbol(null,"name")),(new cljsrepl.core.Symbol(null,"variadic")),(new cljsrepl.core.Symbol(null,"params")),(new cljsrepl.core.Symbol(null,"statements")),(new cljsrepl.core.Symbol(null,"ret")),(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"recurs")),(new cljsrepl.core.Symbol(null,"max-fixed-arity"))]),"\uFDD0'as",(new cljsrepl.core.Symbol(null,"f")))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4496")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-variadic-fn-method")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",450,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"cljs-files-in")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"dir"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/cljs-files-in")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Return a sequence of all .cljs files in the given directory.","\uFDD0'line",959,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"*emitted-provides*")),cljsrepl.core.hash_map("\uFDD0'line",39,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/*emitted-provides*"))),(new cljsrepl.core.Symbol(null,"rename-to-js")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"file-str"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"file-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/rename-to-js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Change the file extension from .cljs to .js. Takes a File or a\n  String. Always returns a String.","\uFDD0'line",813,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-fn-method")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'keys",cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"type")),(new cljsrepl.core.Symbol(null,"name")),(new cljsrepl.core.Symbol(null,"variadic")),(new cljsrepl.core.Symbol(null,"params")),(new cljsrepl.core.Symbol(null,"statements")),(new cljsrepl.core.Symbol(null,"ret")),(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"recurs")),(new cljsrepl.core.Symbol(null,"max-fixed-arity"))]))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4490")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-fn-method")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",437,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"path-seq")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"file-str"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"file-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/path-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",938,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"EmitConstant")),cljsrepl.core.hash_map("\uFDD0'line",210,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/EmitConstant"))),(new cljsrepl.core.Symbol(null,"*position*")),cljsrepl.core.hash_map("\uFDD0'line",38,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/*position*"))),(new cljsrepl.core.Symbol(null,"to-path")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"parts"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"parts")),(new cljsrepl.core.Symbol(null,"sep"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"parts")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"parts")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sep")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/to-path")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",942,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-str")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"expr"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"expr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-str")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",152,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"String"))),(new cljsrepl.core.Symbol(null,"compile-forms*")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"forms")),(new cljsrepl.core.Symbol(null,"ns-name")),(new cljsrepl.core.Symbol(null,"deps")),(new cljsrepl.core.Symbol(null,"eval?")),(new cljsrepl.core.Symbol(null,"code")),(new cljsrepl.core.Symbol(null,"output"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"forms")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ns-name")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"deps")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"eval?")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"code")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"output")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/compile-forms*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",6,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",824,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"compile-root")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"src-dir"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"src-dir")),(new cljsrepl.core.Symbol(null,"target-dir"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"src-dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"src-dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"target-dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/compile-root")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Looks recursively in src-dir for .cljs files and compiles them to\n   .js files. If target-dir is provided, output will go into this\n   directory mirroring the source directory structure. Returns a list\n   of maps containing information about each file which was compiled\n   in dependency order.","\uFDD0'line",968,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"to-target-file")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"dir")),(new cljsrepl.core.Symbol(null,"target")),(new cljsrepl.core.Symbol(null,"file"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"dir")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"target")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"String")),"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"file")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/to-target-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Given the source root directory, the output target directory and\n  file under the source root, produce the target file.","\uFDD0'line",948,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"comma-sep")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"xs"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"xs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/comma-sep")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",102,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-constant-symbol")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-constant-symbol")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",188,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"protocol-prefix")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"psym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"psym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/protocol-prefix")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",638,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"obj-map-threshold")),cljsrepl.core.hash_map("\uFDD0'line",285,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'private",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/obj-map-threshold"))),(new cljsrepl.core.Symbol(null,"emit-comment")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"doc")),(new cljsrepl.core.Symbol(null,"jsdoc"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"doc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"jsdoc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-comment")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Emit a nicely formatted comment string.","\uFDD0'line",384,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"compile-file")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"src"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"src")),(new cljsrepl.core.Symbol(null,"dest"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"dest")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/compile-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Compiles src to a file of the same name, but with a .js extension,\n   in the src file's directory.\n\n   With dest argument, write file to provided location. If the dest\n   argument is a file outside the source tree, missing parent\n   directories will be created. The src file will only be compiled if\n   the dest file has an older modification time.\n\n   Both src and dest may be either a String or a File.\n\n   Returns a map containing {:ns .. :provides .. :requires .. :file ..}.\n   If the file was not compiled returns only {:file ...}","\uFDD0'line",903,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emits")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"xs"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"xs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emits")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",137,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"emit-constant-map")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit-constant-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",197,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"wrap-in-double-quotes")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/wrap-in-double-quotes")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",132,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new cljsrepl.core.Symbol(null,"CHAR_MAP")),cljsrepl.core.hash_map("\uFDD0'line",47,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/CHAR_MAP"))),(new cljsrepl.core.Symbol(null,"emit")),cljsrepl.core.hash_map("\uFDD0'line",135,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/emit"))),(new cljsrepl.core.Symbol(null,"ns-snap")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ns"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ns")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler/ns-snap")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Snapshot the given namespace. Returns the JavaScript to update\n  cljsrepl.core/namespace based on the snapshot.","\uFDD0'line",867,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"with-core-cljs")),(new cljsrepl.core.Symbol(null,"cljsrepl.compiler-macros")),(new cljsrepl.core.Symbol(null,"emit-wrap")),(new cljsrepl.core.Symbol(null,"cljsrepl.compiler-macros"))),"\uFDD0'requires",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"cljsrepl.reader")),(new cljsrepl.core.Symbol(null,"ana")),(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer")),(new cljsrepl.core.Symbol(null,"string")),(new cljsrepl.core.Symbol(null,"replclojure.string")),(new cljsrepl.core.Symbol(null,"io")),(new cljsrepl.core.Symbol(null,"cljsrepl.io"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"munge")),(new cljsrepl.core.Symbol(null,"macroexpand-1"))]),"\uFDD0'doc",null,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.compiler"))),old);
}));
