replgoog.provide('replcljs.compiler');
replgoog.require('replcljs.core');
replgoog.require('replcljs.reader');
replgoog.require('replcljs.analyzer');
replgoog.require('clojure.string');
replgoog.require('replcljs.io');
replcljs.compiler.js_reserved = replcljs.core.PersistentHashSet.fromArray(["new","debugger","enum","default","abstract","goto","private","finally","const","in","import","package","with","throw","continue","var","boolean","byte","for","public","transient","do","delete","instanceof","throws","yield","static","protected","int","return","case","implements","typeof","while","double","methods","synchronized","void","switch","export","final","char","native","class","function","extends","else","interface","try","let","catch","super","short","volatile","float","long","if","this","break"]);
replcljs.compiler._STAR_position_STAR_ = null;
replcljs.compiler._STAR_emitted_provides_STAR_ = replcljs.core.atom.call(null,replcljs.core.PersistentHashSet.EMPTY);
replcljs.compiler._STAR_lexical_renames_STAR_ = replcljs.core.ObjMap.EMPTY;
replcljs.compiler.cljs_reserved_file_names = replcljs.core.PersistentHashSet.fromArray(["deps.cljs"]);
replcljs.compiler.ns_first_segments = replcljs.core.atom.call(null,replcljs.core.set(["clojure","cljs"]));
replcljs.compiler.CHAR_MAP = replcljs.core.ObjMap.fromObject(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],{"@":"_CIRCA_","!":"_BANG_","\"":"_DOUBLEQUOTE_","#":"_SHARP_","%":"_PERCENT_","&":"_AMPERSAND_","'":"_SINGLEQUOTE_","*":"_STAR_","+":"_PLUS_","-":"_","/":"_SLASH_",":":"_COLON_","[":"_LBRACK_","{":"_LBRACE_","<":"_LT_","\\":"_BSLASH_","|":"_BAR_","=":"_EQ_","]":"_RBRACK_","}":"_RBRACE_",">":"_GT_","^":"_CARET_","~":"_TILDE_","?":"_QMARK_"});
replcljs.compiler.munge = (function() {
var munge = null;
var munge__1 = (function (s){
return munge.call(null,s,replcljs.compiler.js_reserved);
});
var munge__2 = (function (s,reserved){
if(replcljs.core.map_QMARK_.call(null,s))
{var map__4414 = s;
var map__4414__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4414))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4414):map__4414);
var info = map__4414__$1;
var field = replcljs.core._lookup.call(null,map__4414__$1,"\uFDD0'field",null);
var name = replcljs.core._lookup.call(null,map__4414__$1,"\uFDD0'name",null);
var depth = (function (){var d = 0;
var G__4416 = info;
var map__4417 = G__4416;
var map__4417__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4417))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4417):map__4417);
var shadow = replcljs.core._lookup.call(null,map__4417__$1,"\uFDD0'shadow",null);
var d__$1 = d;
var G__4416__$1 = G__4416;
while(true){
var d__$2 = d__$1;
var map__4418 = G__4416__$1;
var map__4418__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4418))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4418):map__4418);
var shadow__$1 = replcljs.core._lookup.call(null,map__4418__$1,"\uFDD0'shadow",null);
if(replcljs.core.truth_(shadow__$1))
{{
var G__4419 = (d__$2 + 1);
var G__4420 = shadow__$1;
d__$1 = G__4419;
G__4416__$1 = G__4420;
continue;
}
} else
{if(replcljs.core.truth_(replcljs.core.deref.call(null,replcljs.compiler.ns_first_segments).call(null,[replcljs.core.str(name)].join(''))))
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
var renamed = replcljs.compiler._STAR_lexical_renames_STAR_.call(null,replcljs.core.hash.call(null,s));
var munged_name = munge.call(null,(replcljs.core.truth_(field)?[replcljs.core.str("self__."),replcljs.core.str(name)].join(''):(replcljs.core.truth_(renamed)?renamed:(("\uFDD0'else")?name:null))),reserved);
if(replcljs.core.truth_((function (){var or__3943__auto__ = field;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (depth === 0);
}
})()))
{return munged_name;
} else
{return replcljs.core.symbol.call(null,[replcljs.core.str(munged_name),replcljs.core.str("__$"),replcljs.core.str(depth)].join(''));
}
} else
{var ss = clojure.string.replace.call(null,[replcljs.core.str(s)].join(''),/[.][.]/,"_DOTDOT_");
var ss__$1 = clojure.string.replace.call(null,ss,/\/(.)/,".$1");
var ss__$2 = clojure.string.join.call(null,".",replcljs.core.map.call(null,(function (p1__4407_SHARP_){
if(replcljs.core.truth_(reserved.call(null,p1__4407_SHARP_)))
{return [replcljs.core.str(p1__4407_SHARP_),replcljs.core.str("$")].join('');
} else
{return p1__4407_SHARP_;
}
}),clojure.string.split.call(null,ss__$1,/[.]/)));
var ms = replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.map.call(null,(function (p1__4408_SHARP_){
return replcljs.core._lookup.call(null,replcljs.compiler.CHAR_MAP,p1__4408_SHARP_,p1__4408_SHARP_);
}),ss__$2));
if(replcljs.core.symbol_QMARK_.call(null,s))
{return replcljs.core.symbol.call(null,ms);
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
replcljs.compiler.comma_sep = (function comma_sep(xs){
return replcljs.core.interpose.call(null,",",xs);
});
replcljs.compiler.escape_char = (function escape_char(c){
var cp = c.charCodeAt(0);
var G__4422 = cp;
if(replcljs.core._EQ_.call(null,9,G__4422))
{return "\\t";
} else
{if(replcljs.core._EQ_.call(null,13,G__4422))
{return "\\r";
} else
{if(replcljs.core._EQ_.call(null,10,G__4422))
{return "\\n";
} else
{if(replcljs.core._EQ_.call(null,12,G__4422))
{return "\\f";
} else
{if(replcljs.core._EQ_.call(null,8,G__4422))
{return "\\b";
} else
{if(replcljs.core._EQ_.call(null,92,G__4422))
{return "\\\\";
} else
{if(replcljs.core._EQ_.call(null,34,G__4422))
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
{return replcljs.core.apply.call(null,replcljs.core.str,"\\u",replcljs.core.take_last.call(null,4,[replcljs.core.str("0000"),replcljs.core.str(cp.toString(16))].join('')));
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
replcljs.compiler.escape_pattern = (function escape_pattern(pattern){
return pattern.split("\\/").join("/").split("/").join("\\/");
});
replcljs.compiler.escape_string = (function escape_string(s){
return replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.map.call(null,(function (p1__4423_SHARP_){
return replcljs.compiler.escape_char.call(null,p1__4423_SHARP_);
}),s));
});
replcljs.compiler.wrap_in_double_quotes = (function wrap_in_double_quotes(x){
return [replcljs.core.str("\""),replcljs.core.str(x),replcljs.core.str("\"")].join('');
});
replcljs.compiler.emit = (function (){var method_table__2219__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var prefer_table__2220__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var method_cache__2221__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var cached_hierarchy__2222__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var hierarchy__2223__auto__ = replcljs.core._lookup.call(null,replcljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",replcljs.core.global_hierarchy);
return (new replcljs.core.MultiFn("emit","\uFDD0'op","\uFDD0'default",hierarchy__2223__auto__,method_table__2219__auto__,prefer_table__2220__auto__,method_cache__2221__auto__,cached_hierarchy__2222__auto__));
})();
/**
* @param {...*} var_args
*/
replcljs.compiler.emits = (function() {
var emits__delegate = function (xs){
var G__4427_4430 = replcljs.core.seq.call(null,xs);
while(true){
if(G__4427_4430)
{var x_4431 = replcljs.core.first.call(null,G__4427_4430);
if((x_4431 == null))
{} else
{if(replcljs.core.map_QMARK_.call(null,x_4431))
{replcljs.compiler.emit.call(null,x_4431);
} else
{if(replcljs.core.seq_QMARK_.call(null,x_4431))
{replcljs.core.apply.call(null,emits,x_4431);
} else
{if(replcljs.core.fn_QMARK_.call(null,x_4431))
{x_4431.call(null);
} else
{if("\uFDD0'else")
{var s_4432 = replcljs.core.print_str.call(null,x_4431);
if(replcljs.core.truth_(replcljs.compiler._STAR_position_STAR_))
{replcljs.core.swap_BANG_.call(null,replcljs.compiler._STAR_position_STAR_,((function (G__4427_4430,s_4432,x_4431){
return (function (p__4428){
var vec__4429 = p__4428;
var line = replcljs.core.nth.call(null,vec__4429,0,null);
var column = replcljs.core.nth.call(null,vec__4429,1,null);
return replcljs.core.PersistentVector.fromArray([line,(column + replcljs.core.count.call(null,s_4432))], true);
});})(G__4427_4430,s_4432,x_4431))
);
} else
{}
replcljs.core.print.call(null,s_4432);
} else
{}
}
}
}
}
{
var G__4433 = replcljs.core.next.call(null,G__4427_4430);
G__4427_4430 = G__4433;
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
  xs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return emits__delegate.call(this, xs);
};
emits.cljs$lang$maxFixedArity = 0;
emits.cljs$lang$applyTo = (function (arglist__4434){
var xs = replcljs.core.seq(arglist__4434);;
return emits__delegate(xs);
});
emits.cljs$lang$arity$variadic = emits__delegate;
return emits;
})()
;
replcljs.compiler.emit_str = (function emit_str(expr){
var sb__2259__auto__ = (new replgoog.string.StringBuffer());
var _STAR_print_fn_STAR_4437_4439 = replcljs.core._STAR_print_fn_STAR_;
try{replcljs.core._STAR_print_fn_STAR_ = (function (x__2260__auto__){
return sb__2259__auto__.append(x__2260__auto__);
});
replcljs.compiler.emit.call(null,expr);
}finally {replcljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_4437_4439;
}return [replcljs.core.str(sb__2259__auto__)].join('');
});
/**
* @param {...*} var_args
*/
replcljs.compiler.emitln = (function() {
var emitln__delegate = function (xs){
replcljs.core.apply.call(null,replcljs.compiler.emits,xs);
replcljs.core.println.call(null);
if(replcljs.core.truth_(replcljs.compiler._STAR_position_STAR_))
{replcljs.core.swap_BANG_.call(null,replcljs.compiler._STAR_position_STAR_,(function (p__4442){
var vec__4443 = p__4442;
var line = replcljs.core.nth.call(null,vec__4443,0,null);
var column = replcljs.core.nth.call(null,vec__4443,1,null);
return replcljs.core.PersistentVector.fromArray([(line + 1),0], true);
}));
} else
{}
return null;
};
var emitln = function (var_args){
var xs = null;
if (replgoog.isDef(var_args)) {
  xs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return emitln__delegate.call(this, xs);
};
emitln.cljs$lang$maxFixedArity = 0;
emitln.cljs$lang$applyTo = (function (arglist__4444){
var xs = replcljs.core.seq(arglist__4444);;
return emitln__delegate(xs);
});
emitln.cljs$lang$arity$variadic = emitln__delegate;
return emitln;
})()
;
replcljs.compiler.emit_provide = (function emit_provide(sym){
if((function (){var or__3943__auto__ = (replcljs.compiler._STAR_emitted_provides_STAR_ == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.contains_QMARK_.call(null,replcljs.core.deref.call(null,replcljs.compiler._STAR_emitted_provides_STAR_),sym);
}
})())
{return null;
} else
{replcljs.core.swap_BANG_.call(null,replcljs.compiler._STAR_emitted_provides_STAR_,replcljs.core.conj,sym);
return replcljs.compiler.emitln.call(null,"replgoog.provide('",replcljs.compiler.munge.call(null,sym),"');");
}
});
/**
* @param {...*} var_args
*/
replcljs.compiler.emit_meta_constant = (function() {
var emit_meta_constant__delegate = function (x,body){
if(replcljs.core.truth_(replcljs.core.meta.call(null,x)))
{replcljs.compiler.emits.call(null,"replcljs.core.with_meta(",body,",");
replcljs.compiler.emit_constant.call(null,replcljs.core.meta.call(null,x));
return replcljs.compiler.emits.call(null,")");
} else
{return replcljs.compiler.emits.call(null,body);
}
};
var emit_meta_constant = function (x,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return emit_meta_constant__delegate.call(this, x, body);
};
emit_meta_constant.cljs$lang$maxFixedArity = 1;
emit_meta_constant.cljs$lang$applyTo = (function (arglist__4445){
var x = replcljs.core.first(arglist__4445);
var body = replcljs.core.rest(arglist__4445);
return emit_meta_constant__delegate(x, body);
});
emit_meta_constant.cljs$lang$arity$variadic = emit_meta_constant__delegate;
return emit_meta_constant;
})()
;
replcljs.compiler.emit_constant_keyword = (function emit_constant_keyword(x){
return replcljs.compiler.emits.call(null,"\"","\\uFDD0","'",(replcljs.core.truth_(replcljs.core.namespace.call(null,x))?[replcljs.core.str(replcljs.core.namespace.call(null,x)),replcljs.core.str("/")].join(''):""),replcljs.core.name.call(null,x),"\"");
});
replcljs.compiler.emit_constant_symbol = (function emit_constant_symbol(x){
return replcljs.compiler.emits.call(null,"(new replcljs.core.Symbol(",(replcljs.core.truth_(replcljs.core.meta.call(null,x))?replcljs.compiler.emit_constant.call(null,replcljs.core.meta.call(null,x)):"null"),",",[replcljs.core.str("\""),replcljs.core.str(x),replcljs.core.str("\"")].join(''),"))");
});
replcljs.compiler.emit_constant_map = (function emit_constant_map(x){
return replcljs.compiler.emit_meta_constant.call(null,x,replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["replcljs.core.hash_map("], true),replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,(function (p1__4446_SHARP_){
return (function (){
return replcljs.compiler.emit_constant.call(null,p1__4446_SHARP_);
});
}),replcljs.core.apply.call(null,replcljs.core.concat,x))),replcljs.core.PersistentVector.fromArray([")"], true)));
});
replcljs.compiler.emit_constant_set = (function emit_constant_set(x){
return replcljs.compiler.emit_meta_constant.call(null,x,replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["replcljs.core.set(["], true),replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,(function (p1__4447_SHARP_){
return (function (){
return replcljs.compiler.emit_constant.call(null,p1__4447_SHARP_);
});
}),x)),replcljs.core.PersistentVector.fromArray(["])"], true)));
});
replcljs.compiler.EmitConstant = {};
replcljs.compiler.emit_constant = (function emit_constant(x){
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
return (function (){var or__3943__auto__ = (replcljs.compiler.emit_constant[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.compiler.emit_constant["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"EmitConstant.emit-constant",x);
}
}
})().call(null,x);
}
});
(replcljs.compiler.EmitConstant["null"] = true);
(replcljs.compiler.emit_constant["null"] = (function (x){
return replcljs.compiler.emits.call(null,"null");
}));
replcljs.core.PersistentArrayMap.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.PersistentArrayMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_map.call(null,x);
});
(replcljs.compiler.EmitConstant["number"] = true);
(replcljs.compiler.emit_constant["number"] = (function (x){
return replcljs.compiler.emits.call(null,x);
}));
replcljs.core.EmptyList.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.EmptyList.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_meta_constant.call(null,x,"replcljs.core.List.EMPTY");
});
(replcljs.compiler.EmitConstant["boolean"] = true);
(replcljs.compiler.emit_constant["boolean"] = (function (x){
return replcljs.compiler.emits.call(null,(replcljs.core.truth_(x)?"true":"false"));
}));
(replcljs.compiler.EmitConstant["string"] = true);
(replcljs.compiler.emit_constant["string"] = (function (x){
if(replcljs.core.keyword_QMARK_.call(null,x))
{return replcljs.compiler.emit_constant_keyword.call(null,x);
} else
{if("\uFDD0'else")
{return replcljs.compiler.emits.call(null,replcljs.compiler.wrap_in_double_quotes.call(null,replcljs.compiler.escape_string.call(null,x)));
} else
{return null;
}
}
}));
RegExp.prototype.cljs$compiler$EmitConstant$ = true;
RegExp.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
var vec__4451 = replcljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[replcljs.core.str(x)].join(''));
var _ = replcljs.core.nth.call(null,vec__4451,0,null);
var flags = replcljs.core.nth.call(null,vec__4451,1,null);
var pattern = replcljs.core.nth.call(null,vec__4451,2,null);
return replcljs.compiler.emits.call(null,[replcljs.core.str("/"),replcljs.core.str(replcljs.compiler.escape_pattern.call(null,pattern)),replcljs.core.str("/"),replcljs.core.str(flags)].join(''));
});
replcljs.core.ObjMap.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.ObjMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_map.call(null,x);
});
replcljs.core.PersistentVector.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.PersistentVector.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_meta_constant.call(null,x,replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["replcljs.core.vec(["], true),replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,(function (p1__4450_SHARP_){
return (function (){
return replcljs.compiler.emit_constant.call(null,p1__4450_SHARP_);
});
}),x)),replcljs.core.PersistentVector.fromArray(["])"], true)));
});
replcljs.core.PersistentTreeSet.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.PersistentTreeSet.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_set.call(null,x);
});
replcljs.core.PersistentHashMap.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.PersistentHashMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_map.call(null,x);
});
replcljs.core.Cons.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.Cons.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_meta_constant.call(null,x,replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["replcljs.core.list("], true),replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,(function (p1__4449_SHARP_){
return (function (){
return replcljs.compiler.emit_constant.call(null,p1__4449_SHARP_);
});
}),x)),replcljs.core.PersistentVector.fromArray([")"], true)));
});
replcljs.core.Symbol.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.Symbol.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_symbol.call(null,x);
});
replcljs.core.PersistentTreeMap.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.PersistentTreeMap.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_map.call(null,x);
});
replcljs.core.List.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.List.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_meta_constant.call(null,x,replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["replcljs.core.list("], true),replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,(function (p1__4448_SHARP_){
return (function (){
return replcljs.compiler.emit_constant.call(null,p1__4448_SHARP_);
});
}),x)),replcljs.core.PersistentVector.fromArray([")"], true)));
});
replcljs.core.PersistentHashSet.prototype.cljs$compiler$EmitConstant$ = true;
replcljs.core.PersistentHashSet.prototype.cljs$compiler$EmitConstant$emit_constant$arity$1 = (function (x){
return replcljs.compiler.emit_constant_set.call(null,x);
});
replcljs.compiler.emit_block = (function emit_block(context,statements,ret){
if(replcljs.core.truth_(statements))
{replcljs.compiler.emits.call(null,statements);
} else
{}
return replcljs.compiler.emit.call(null,ret);
});
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'no-op",(function (m){
return null;
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'var",(function (p__4452){
var map__4453 = p__4452;
var map__4453__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4453))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4453):map__4453);
var arg = map__4453__$1;
var env = replcljs.core._lookup.call(null,map__4453__$1,"\uFDD0'env",null);
var info = replcljs.core._lookup.call(null,map__4453__$1,"\uFDD0'info",null);
var n = (new replcljs.core.Keyword("\uFDD0'name")).call(null,info);
var n__$1 = ((replcljs.core._EQ_.call(null,replcljs.core.namespace.call(null,n),"js"))?replcljs.core.name.call(null,n):info);
if(replcljs.core._EQ_.call(null,"\uFDD0'statement",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{return null;
} else
{var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emits.call(null,replcljs.compiler.munge.call(null,n__$1));
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'meta",(function (p__4454){
var map__4455 = p__4454;
var map__4455__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4455))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4455):map__4455);
var env = replcljs.core._lookup.call(null,map__4455__$1,"\uFDD0'env",null);
var meta = replcljs.core._lookup.call(null,map__4455__$1,"\uFDD0'meta",null);
var expr = replcljs.core._lookup.call(null,map__4455__$1,"\uFDD0'expr",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emits.call(null,"replcljs.core.with_meta(",expr,",",meta,")");
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.compiler.array_map_threshold = 16;
replcljs.compiler.obj_map_threshold = 32;
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'map",(function (p__4456){
var map__4457 = p__4456;
var map__4457__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4457))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4457):map__4457);
var vals = replcljs.core._lookup.call(null,map__4457__$1,"\uFDD0'vals",null);
var keys = replcljs.core._lookup.call(null,map__4457__$1,"\uFDD0'keys",null);
var simple_keys_QMARK_ = replcljs.core._lookup.call(null,map__4457__$1,"\uFDD0'simple-keys?",null);
var env = replcljs.core._lookup.call(null,map__4457__$1,"\uFDD0'env",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
if((replcljs.core.count.call(null,keys) === 0))
{replcljs.compiler.emits.call(null,"replcljs.core.ObjMap.EMPTY");
} else
{if(replcljs.core.truth_((function (){var and__3941__auto__ = simple_keys_QMARK_;
if(replcljs.core.truth_(and__3941__auto__))
{return (replcljs.core.count.call(null,keys) <= replcljs.compiler.obj_map_threshold);
} else
{return and__3941__auto__;
}
})()))
{replcljs.compiler.emits.call(null,"replcljs.core.ObjMap.fromObject([",replcljs.compiler.comma_sep.call(null,keys),"],{",replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,(function (k,v){
var sb__2259__auto__ = (new replgoog.string.StringBuffer());
var _STAR_print_fn_STAR_4458_4460 = replcljs.core._STAR_print_fn_STAR_;
try{replcljs.core._STAR_print_fn_STAR_ = (function (x__2260__auto__){
return sb__2259__auto__.append(x__2260__auto__);
});
replcljs.compiler.emit.call(null,k);
replcljs.core.print.call(null,":");
replcljs.compiler.emit.call(null,v);
}finally {replcljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_4458_4460;
}return [replcljs.core.str(sb__2259__auto__)].join('');
}),keys,vals)),"})");
} else
{if((replcljs.core.count.call(null,keys) <= replcljs.compiler.array_map_threshold))
{replcljs.compiler.emits.call(null,"replcljs.core.PersistentArrayMap.fromArrays([",replcljs.compiler.comma_sep.call(null,keys),"],[",replcljs.compiler.comma_sep.call(null,vals),"])");
} else
{if("\uFDD0'else")
{replcljs.compiler.emits.call(null,"replcljs.core.PersistentHashMap.fromArrays([",replcljs.compiler.comma_sep.call(null,keys),"],[",replcljs.compiler.comma_sep.call(null,vals),"])");
} else
{}
}
}
}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'vector",(function (p__4461){
var map__4462 = p__4461;
var map__4462__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4462))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4462):map__4462);
var env = replcljs.core._lookup.call(null,map__4462__$1,"\uFDD0'env",null);
var items = replcljs.core._lookup.call(null,map__4462__$1,"\uFDD0'items",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
if(replcljs.core.empty_QMARK_.call(null,items))
{replcljs.compiler.emits.call(null,"replcljs.core.PersistentVector.EMPTY");
} else
{replcljs.compiler.emits.call(null,"replcljs.core.PersistentVector.fromArray([",replcljs.compiler.comma_sep.call(null,items),"], true)");
}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'set",(function (p__4463){
var map__4464 = p__4463;
var map__4464__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4464))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4464):map__4464);
var env = replcljs.core._lookup.call(null,map__4464__$1,"\uFDD0'env",null);
var items = replcljs.core._lookup.call(null,map__4464__$1,"\uFDD0'items",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
if(replcljs.core.empty_QMARK_.call(null,items))
{replcljs.compiler.emits.call(null,"replcljs.core.PersistentHashSet.EMPTY");
} else
{replcljs.compiler.emits.call(null,"replcljs.core.PersistentHashSet.fromArray([",replcljs.compiler.comma_sep.call(null,items),"])");
}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'constant",(function (p__4465){
var map__4466 = p__4465;
var map__4466__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4466))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4466):map__4466);
var env = replcljs.core._lookup.call(null,map__4466__$1,"\uFDD0'env",null);
var form = replcljs.core._lookup.call(null,map__4466__$1,"\uFDD0'form",null);
if(replcljs.core._EQ_.call(null,"\uFDD0'statement",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{return null;
} else
{var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emit_constant.call(null,form);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}
}));
replcljs.compiler.get_tag = (function get_tag(e){
var or__3943__auto__ = (new replcljs.core.Keyword("\uFDD0'tag")).call(null,e);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new replcljs.core.Keyword("\uFDD0'tag")).call(null,(new replcljs.core.Keyword("\uFDD0'info")).call(null,e));
}
});
replcljs.compiler.infer_tag = (function infer_tag(e){
var temp__4090__auto__ = replcljs.compiler.get_tag.call(null,e);
if(replcljs.core.truth_(temp__4090__auto__))
{var tag = temp__4090__auto__;
return tag;
} else
{var G__4469 = (new replcljs.core.Keyword("\uFDD0'op")).call(null,e);
if(replcljs.core._EQ_.call(null,"\uFDD0'constant",G__4469))
{var G__4470 = (new replcljs.core.Keyword("\uFDD0'form")).call(null,e);
if(replcljs.core._EQ_.call(null,false,G__4470))
{return (new replcljs.core.Symbol(null,"boolean"));
} else
{if(replcljs.core._EQ_.call(null,true,G__4470))
{return (new replcljs.core.Symbol(null,"boolean"));
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
} else
{if(replcljs.core._EQ_.call(null,"\uFDD0'if",G__4469))
{var then_tag = infer_tag.call(null,(new replcljs.core.Keyword("\uFDD0'then")).call(null,e));
var else_tag = infer_tag.call(null,(new replcljs.core.Keyword("\uFDD0'else")).call(null,e));
if(replcljs.core._EQ_.call(null,then_tag,else_tag))
{return then_tag;
} else
{return null;
}
} else
{if(replcljs.core._EQ_.call(null,"\uFDD0'let",G__4469))
{return infer_tag.call(null,(new replcljs.core.Keyword("\uFDD0'ret")).call(null,e));
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
replcljs.compiler.safe_test_QMARK_ = (function safe_test_QMARK_(e){
var tag = replcljs.compiler.infer_tag.call(null,e);
var or__3943__auto__ = replcljs.core.PersistentHashSet.fromArray([(new replcljs.core.Symbol(null,"boolean")),(new replcljs.core.Symbol(null,"seq"))]).call(null,tag);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'op")).call(null,e),"\uFDD0'constant"))
{var form = (new replcljs.core.Keyword("\uFDD0'form")).call(null,e);
return replcljs.core.not.call(null,(function (){var or__3943__auto____$1 = (function (){var and__3941__auto__ = replcljs.core.string_QMARK_.call(null,form);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,form,"");
} else
{return and__3941__auto__;
}
})();
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = replcljs.core.number_QMARK_.call(null,form);
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
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'if",(function (p__4471){
var map__4472 = p__4471;
var map__4472__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4472))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4472):map__4472);
var unchecked = replcljs.core._lookup.call(null,map__4472__$1,"\uFDD0'unchecked",null);
var env = replcljs.core._lookup.call(null,map__4472__$1,"\uFDD0'env",null);
var else$ = replcljs.core._lookup.call(null,map__4472__$1,"\uFDD0'else",null);
var then = replcljs.core._lookup.call(null,map__4472__$1,"\uFDD0'then",null);
var test = replcljs.core._lookup.call(null,map__4472__$1,"\uFDD0'test",null);
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
var checked = replcljs.core.not.call(null,(function (){var or__3943__auto__ = unchecked;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.compiler.safe_test_QMARK_.call(null,test);
}
})());
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{return replcljs.compiler.emits.call(null,"(",((checked)?"replcljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else
{if(checked)
{replcljs.compiler.emitln.call(null,"if(replcljs.core.truth_(",test,"))");
} else
{replcljs.compiler.emitln.call(null,"if(",test,")");
}
replcljs.compiler.emitln.call(null,"{",then,"} else");
return replcljs.compiler.emitln.call(null,"{",else$,"}");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'throw",(function (p__4473){
var map__4474 = p__4473;
var map__4474__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4474))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4474):map__4474);
var env = replcljs.core._lookup.call(null,map__4474__$1,"\uFDD0'env",null);
var throw$ = replcljs.core._lookup.call(null,map__4474__$1,"\uFDD0'throw",null);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{return replcljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else
{return replcljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
/**
* Emit a nicely formatted comment string.
*/
replcljs.compiler.emit_comment = (function emit_comment(doc,jsdoc){
var docs = (replcljs.core.truth_(doc)?replcljs.core.PersistentVector.fromArray([doc], true):null);
var docs__$1 = (replcljs.core.truth_(jsdoc)?replcljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = replcljs.core.remove.call(null,replcljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function print_comment_lines(e){
var G__4479 = replcljs.core.seq.call(null,clojure.string.split_lines.call(null,e));
while(true){
if(G__4479)
{var next_line = replcljs.core.first.call(null,G__4479);
replcljs.compiler.emitln.call(null,"* ",clojure.string.trim.call(null,next_line));
{
var G__4481 = replcljs.core.next.call(null,G__4479);
G__4479 = G__4481;
continue;
}
} else
{return null;
}
break;
}
});
if(replcljs.core.seq.call(null,docs__$2))
{replcljs.compiler.emitln.call(null,"/**");
var G__4480_4482 = replcljs.core.seq.call(null,docs__$2);
while(true){
if(G__4480_4482)
{var e_4483 = replcljs.core.first.call(null,G__4480_4482);
if(replcljs.core.truth_(e_4483))
{print_comment_lines.call(null,e_4483);
} else
{}
{
var G__4484 = replcljs.core.next.call(null,G__4480_4482);
G__4480_4482 = G__4484;
continue;
}
} else
{}
break;
}
return replcljs.compiler.emitln.call(null,"*/");
} else
{return null;
}
});
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'def",(function (p__4485){
var map__4486 = p__4485;
var map__4486__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4486))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4486):map__4486);
var export$ = replcljs.core._lookup.call(null,map__4486__$1,"\uFDD0'export",null);
var doc = replcljs.core._lookup.call(null,map__4486__$1,"\uFDD0'doc",null);
var env = replcljs.core._lookup.call(null,map__4486__$1,"\uFDD0'env",null);
var init = replcljs.core._lookup.call(null,map__4486__$1,"\uFDD0'init",null);
var name = replcljs.core._lookup.call(null,map__4486__$1,"\uFDD0'name",null);
if(replcljs.core.truth_(init))
{var mname = replcljs.compiler.munge.call(null,name);
replcljs.compiler.emit_comment.call(null,doc,(new replcljs.core.Keyword("\uFDD0'jsdoc")).call(null,init));
replcljs.compiler.emits.call(null,mname);
replcljs.compiler.emits.call(null," = ",init);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{} else
{replcljs.compiler.emitln.call(null,";");
}
if(replcljs.core.truth_(export$))
{return replcljs.compiler.emitln.call(null,"replgoog.exportSymbol('",replcljs.compiler.munge.call(null,export$),"', ",mname,");");
} else
{return null;
}
} else
{return null;
}
}));
replcljs.compiler.emit_apply_to = (function emit_apply_to(p__4487){
var map__4491 = p__4487;
var map__4491__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4491))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4491):map__4491);
var env = replcljs.core._lookup.call(null,map__4491__$1,"\uFDD0'env",null);
var params = replcljs.core._lookup.call(null,map__4491__$1,"\uFDD0'params",null);
var name = replcljs.core._lookup.call(null,map__4491__$1,"\uFDD0'name",null);
var arglist = replcljs.core.gensym.call(null,"arglist__");
var delegate_name = [replcljs.core.str(replcljs.compiler.munge.call(null,name)),replcljs.core.str("__delegate")].join('');
var params__$1 = replcljs.core.map.call(null,replcljs.compiler.munge,params);
replcljs.compiler.emitln.call(null,"(function (",arglist,"){");
var G__4492_4494 = replcljs.core.seq.call(null,replcljs.core.map_indexed.call(null,replcljs.core.vector,replcljs.core.butlast.call(null,params__$1)));
while(true){
if(G__4492_4494)
{var vec__4493_4495 = replcljs.core.first.call(null,G__4492_4494);
var i_4496 = replcljs.core.nth.call(null,vec__4493_4495,0,null);
var param_4497 = replcljs.core.nth.call(null,vec__4493_4495,1,null);
replcljs.compiler.emits.call(null,"var ",param_4497," = replcljs.core.first(");
var n__2209__auto___4498 = i_4496;
var __4499 = 0;
while(true){
if((__4499 < n__2209__auto___4498))
{replcljs.compiler.emits.call(null,"replcljs.core.next(");
{
var G__4500 = (__4499 + 1);
__4499 = G__4500;
continue;
}
} else
{}
break;
}
replcljs.compiler.emits.call(null,arglist,")");
var n__2209__auto___4501 = i_4496;
var __4502 = 0;
while(true){
if((__4502 < n__2209__auto___4501))
{replcljs.compiler.emits.call(null,")");
{
var G__4503 = (__4502 + 1);
__4502 = G__4503;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,";");
{
var G__4504 = replcljs.core.next.call(null,G__4492_4494);
G__4492_4494 = G__4504;
continue;
}
} else
{}
break;
}
if((1 < replcljs.core.count.call(null,params__$1)))
{replcljs.compiler.emits.call(null,"var ",replcljs.core.last.call(null,params__$1)," = replcljs.core.rest(");
var n__2209__auto___4505 = (replcljs.core.count.call(null,params__$1) - 2);
var __4506 = 0;
while(true){
if((__4506 < n__2209__auto___4505))
{replcljs.compiler.emits.call(null,"replcljs.core.next(");
{
var G__4507 = (__4506 + 1);
__4506 = G__4507;
continue;
}
} else
{}
break;
}
replcljs.compiler.emits.call(null,arglist);
var n__2209__auto___4508 = (replcljs.core.count.call(null,params__$1) - 2);
var __4509 = 0;
while(true){
if((__4509 < n__2209__auto___4508))
{replcljs.compiler.emits.call(null,")");
{
var G__4510 = (__4509 + 1);
__4509 = G__4510;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,");");
replcljs.compiler.emitln.call(null,"return ",delegate_name,"(",clojure.string.join.call(null,", ",params__$1),");");
} else
{replcljs.compiler.emits.call(null,"var ",replcljs.core.last.call(null,params__$1)," = ");
replcljs.compiler.emits.call(null,"replcljs.core.seq(",arglist,");");
replcljs.compiler.emitln.call(null,";");
replcljs.compiler.emitln.call(null,"return ",delegate_name,"(",clojure.string.join.call(null,", ",params__$1),");");
}
return replcljs.compiler.emits.call(null,"})");
});
replcljs.compiler.emit_fn_method = (function emit_fn_method(p__4511){
var map__4513 = p__4511;
var map__4513__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4513))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4513):map__4513);
var max_fixed_arity = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'max-fixed-arity",null);
var recurs = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'recurs",null);
var env = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'env",null);
var ret = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'statements",null);
var params = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'params",null);
var variadic = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'variadic",null);
var name = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'name",null);
var type = replcljs.core._lookup.call(null,map__4513__$1,"\uFDD0'type",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emitln.call(null,"(function ",replcljs.compiler.munge.call(null,name),"(",replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,replcljs.compiler.munge,params)),"){");
if(replcljs.core.truth_(type))
{replcljs.compiler.emitln.call(null,"var self__ = this;");
} else
{}
if(replcljs.core.truth_(recurs))
{replcljs.compiler.emitln.call(null,"while(true){");
} else
{}
replcljs.compiler.emit_block.call(null,"\uFDD0'return",statements,ret);
if(replcljs.core.truth_(recurs))
{replcljs.compiler.emitln.call(null,"break;");
replcljs.compiler.emitln.call(null,"}");
} else
{}
replcljs.compiler.emits.call(null,"})");
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
});
replcljs.compiler.emit_variadic_fn_method = (function emit_variadic_fn_method(p__4517){
var map__4519 = p__4517;
var map__4519__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4519))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4519):map__4519);
var f = map__4519__$1;
var max_fixed_arity = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'max-fixed-arity",null);
var recurs = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'recurs",null);
var env = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'env",null);
var ret = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'statements",null);
var params = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'params",null);
var variadic = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'variadic",null);
var name = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'name",null);
var type = replcljs.core._lookup.call(null,map__4519__$1,"\uFDD0'type",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
var name_4520__$1 = (function (){var or__3943__auto__ = name;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.gensym.call(null);
}
})();
var mname_4521 = replcljs.compiler.munge.call(null,name_4520__$1);
var params_4522__$1 = replcljs.core.map.call(null,replcljs.compiler.munge,params);
var delegate_name_4523 = [replcljs.core.str(mname_4521),replcljs.core.str("__delegate")].join('');
replcljs.compiler.emitln.call(null,"(function() { ");
replcljs.compiler.emitln.call(null,"var ",delegate_name_4523," = function (",replcljs.compiler.comma_sep.call(null,params_4522__$1),"){");
if(replcljs.core.truth_(recurs))
{replcljs.compiler.emitln.call(null,"while(true){");
} else
{}
replcljs.compiler.emit_block.call(null,"\uFDD0'return",statements,ret);
if(replcljs.core.truth_(recurs))
{replcljs.compiler.emitln.call(null,"break;");
replcljs.compiler.emitln.call(null,"}");
} else
{}
replcljs.compiler.emitln.call(null,"};");
replcljs.compiler.emitln.call(null,"var ",mname_4521," = function (",replcljs.compiler.comma_sep.call(null,(replcljs.core.truth_(variadic)?replcljs.core.concat.call(null,replcljs.core.butlast.call(null,params_4522__$1),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"var_args"))], true)):params_4522__$1)),"){");
if(replcljs.core.truth_(type))
{replcljs.compiler.emitln.call(null,"var self__ = this;");
} else
{}
if(replcljs.core.truth_(variadic))
{replcljs.compiler.emitln.call(null,"var ",replcljs.core.last.call(null,params_4522__$1)," = null;");
replcljs.compiler.emitln.call(null,"if (replgoog.isDef(var_args)) {");
replcljs.compiler.emitln.call(null,"  ",replcljs.core.last.call(null,params_4522__$1)," = replcljs.core.array_seq(Array.prototype.slice.call(arguments, ",(replcljs.core.count.call(null,params_4522__$1) - 1),"),0);");
replcljs.compiler.emitln.call(null,"} ");
} else
{}
replcljs.compiler.emitln.call(null,"return ",delegate_name_4523,".call(",clojure.string.join.call(null,", ",replcljs.core.cons.call(null,"this",params_4522__$1)),");");
replcljs.compiler.emitln.call(null,"};");
replcljs.compiler.emitln.call(null,mname_4521,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");
replcljs.compiler.emits.call(null,mname_4521,".cljs$lang$applyTo = ");
replcljs.compiler.emit_apply_to.call(null,replcljs.core.assoc.call(null,f,"\uFDD0'name",name_4520__$1));
replcljs.compiler.emitln.call(null,";");
replcljs.compiler.emitln.call(null,mname_4521,".cljs$lang$arity$variadic = ",delegate_name_4523,";");
replcljs.compiler.emitln.call(null,"return ",mname_4521,";");
replcljs.compiler.emitln.call(null,"})()");
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
});
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'fn",(function (p__4524){
var map__4525 = p__4524;
var map__4525__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4525))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4525):map__4525);
var loop_lets = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'loop-lets",null);
var recur_frames = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'recur-frames",null);
var variadic = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'variadic",null);
var max_fixed_arity = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'max-fixed-arity",null);
var methods$ = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'methods",null);
var env = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'env",null);
var name = replcljs.core._lookup.call(null,map__4525__$1,"\uFDD0'name",null);
if(replcljs.core._EQ_.call(null,"\uFDD0'statement",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{return null;
} else
{var loop_locals = replcljs.core.seq.call(null,replcljs.core.map.call(null,replcljs.compiler.munge,replcljs.core.concat.call(null,replcljs.core.mapcat.call(null,"\uFDD0'params",replcljs.core.filter.call(null,(function (p1__4514_SHARP_){
var and__3941__auto__ = p1__4514_SHARP_;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.deref.call(null,(new replcljs.core.Keyword("\uFDD0'flag")).call(null,p1__4514_SHARP_));
} else
{return and__3941__auto__;
}
}),recur_frames)),replcljs.core.mapcat.call(null,"\uFDD0'params",loop_lets))));
if(loop_locals)
{if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emitln.call(null,"((function (",replcljs.compiler.comma_sep.call(null,replcljs.core.map.call(null,replcljs.compiler.munge,loop_locals)),"){");
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{} else
{replcljs.compiler.emits.call(null,"return ");
}
} else
{}
if(replcljs.core._EQ_.call(null,1,replcljs.core.count.call(null,methods$)))
{if(replcljs.core.truth_(variadic))
{replcljs.compiler.emit_variadic_fn_method.call(null,replcljs.core.assoc.call(null,replcljs.core.first.call(null,methods$),"\uFDD0'name",name));
} else
{replcljs.compiler.emit_fn_method.call(null,replcljs.core.assoc.call(null,replcljs.core.first.call(null,methods$),"\uFDD0'name",name));
}
} else
{var has_name_QMARK__4533 = (function (){var and__3941__auto__ = name;
if(replcljs.core.truth_(and__3941__auto__))
{return true;
} else
{return and__3941__auto__;
}
})();
var name_4534__$1 = (function (){var or__3943__auto__ = name;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.gensym.call(null);
}
})();
var mname_4535 = replcljs.compiler.munge.call(null,name_4534__$1);
var maxparams_4536 = replcljs.core.map.call(null,replcljs.compiler.munge,replcljs.core.apply.call(null,replcljs.core.max_key,replcljs.core.count,replcljs.core.map.call(null,"\uFDD0'params",methods$)));
var mmap_4537 = replcljs.core.into.call(null,replcljs.core.ObjMap.EMPTY,replcljs.core.map.call(null,(function (method){
return replcljs.core.PersistentVector.fromArray([replcljs.compiler.munge.call(null,replcljs.core.symbol.call(null,[replcljs.core.str(mname_4535),replcljs.core.str("__"),replcljs.core.str(replcljs.core.count.call(null,(new replcljs.core.Keyword("\uFDD0'params")).call(null,method)))].join(''))),method], true);
}),methods$));
var ms_4538 = replcljs.core.sort_by.call(null,(function (p1__4515_SHARP_){
return replcljs.core.count.call(null,(new replcljs.core.Keyword("\uFDD0'params")).call(null,replcljs.core.second.call(null,p1__4515_SHARP_)));
}),replcljs.core.seq.call(null,mmap_4537));
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emitln.call(null,"(function() {");
replcljs.compiler.emitln.call(null,"var ",mname_4535," = null;");
var G__4526_4539 = replcljs.core.seq.call(null,ms_4538);
while(true){
if(G__4526_4539)
{var vec__4527_4540 = replcljs.core.first.call(null,G__4526_4539);
var n_4541 = replcljs.core.nth.call(null,vec__4527_4540,0,null);
var meth_4542 = replcljs.core.nth.call(null,vec__4527_4540,1,null);
replcljs.compiler.emits.call(null,"var ",n_4541," = ");
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'variadic")).call(null,meth_4542)))
{replcljs.compiler.emit_variadic_fn_method.call(null,meth_4542);
} else
{replcljs.compiler.emit_fn_method.call(null,meth_4542);
}
replcljs.compiler.emitln.call(null,";");
{
var G__4543 = replcljs.core.next.call(null,G__4526_4539);
G__4526_4539 = G__4543;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,mname_4535," = function(",replcljs.compiler.comma_sep.call(null,(replcljs.core.truth_(variadic)?replcljs.core.concat.call(null,replcljs.core.butlast.call(null,maxparams_4536),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"var_args"))], true)):maxparams_4536)),"){");
if(replcljs.core.truth_(variadic))
{replcljs.compiler.emitln.call(null,"var ",replcljs.core.last.call(null,maxparams_4536)," = var_args;");
} else
{}
replcljs.compiler.emitln.call(null,"switch(arguments.length){");
var G__4528_4544 = replcljs.core.seq.call(null,ms_4538);
while(true){
if(G__4528_4544)
{var vec__4529_4545 = replcljs.core.first.call(null,G__4528_4544);
var n_4546 = replcljs.core.nth.call(null,vec__4529_4545,0,null);
var meth_4547 = replcljs.core.nth.call(null,vec__4529_4545,1,null);
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'variadic")).call(null,meth_4547)))
{replcljs.compiler.emitln.call(null,"default:");
replcljs.compiler.emitln.call(null,"return ",n_4546,".cljs$lang$arity$variadic(",replcljs.compiler.comma_sep.call(null,replcljs.core.butlast.call(null,maxparams_4536)),(((replcljs.core.count.call(null,maxparams_4536) > 1))?", ":null),"replcljs.core.array_seq(arguments, ",max_fixed_arity,"));");
} else
{var pcnt_4548 = replcljs.core.count.call(null,(new replcljs.core.Keyword("\uFDD0'params")).call(null,meth_4547));
replcljs.compiler.emitln.call(null,"case ",pcnt_4548,":");
replcljs.compiler.emitln.call(null,"return ",n_4546,".call(this",(((pcnt_4548 === 0))?null:replcljs.core.list.call(null,",",replcljs.compiler.comma_sep.call(null,replcljs.core.take.call(null,pcnt_4548,maxparams_4536)))),");");
}
{
var G__4549 = replcljs.core.next.call(null,G__4528_4544);
G__4528_4544 = G__4549;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,"}");
replcljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");
replcljs.compiler.emitln.call(null,"};");
if(replcljs.core.truth_(variadic))
{replcljs.compiler.emitln.call(null,mname_4535,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");
replcljs.compiler.emitln.call(null,mname_4535,".cljs$lang$applyTo = ",replcljs.core.some.call(null,(function (p1__4516_SHARP_){
var vec__4530 = p1__4516_SHARP_;
var n = replcljs.core.nth.call(null,vec__4530,0,null);
var m = replcljs.core.nth.call(null,vec__4530,1,null);
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'variadic")).call(null,m)))
{return n;
} else
{return null;
}
}),ms_4538),".cljs$lang$applyTo;");
} else
{}
if(replcljs.core.truth_(has_name_QMARK__4533))
{var G__4531_4550 = replcljs.core.seq.call(null,ms_4538);
while(true){
if(G__4531_4550)
{var vec__4532_4551 = replcljs.core.first.call(null,G__4531_4550);
var n_4552 = replcljs.core.nth.call(null,vec__4532_4551,0,null);
var meth_4553 = replcljs.core.nth.call(null,vec__4532_4551,1,null);
var c_4554 = replcljs.core.count.call(null,(new replcljs.core.Keyword("\uFDD0'params")).call(null,meth_4553));
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'variadic")).call(null,meth_4553)))
{replcljs.compiler.emitln.call(null,mname_4535,".cljs$lang$arity$variadic = ",n_4552,".cljs$lang$arity$variadic;");
} else
{replcljs.compiler.emitln.call(null,mname_4535,".cljs$lang$arity$",c_4554," = ",n_4552,";");
}
{
var G__4555 = replcljs.core.next.call(null,G__4531_4550);
G__4531_4550 = G__4555;
continue;
}
} else
{}
break;
}
} else
{}
replcljs.compiler.emitln.call(null,"return ",mname_4535,";");
replcljs.compiler.emitln.call(null,"})()");
}
if(loop_locals)
{return replcljs.compiler.emitln.call(null,";})(",replcljs.compiler.comma_sep.call(null,loop_locals),"))");
} else
{return null;
}
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'do",(function (p__4556){
var map__4557 = p__4556;
var map__4557__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4557))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4557):map__4557);
var env = replcljs.core._lookup.call(null,map__4557__$1,"\uFDD0'env",null);
var ret = replcljs.core._lookup.call(null,map__4557__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4557__$1,"\uFDD0'statements",null);
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
if(replcljs.core.truth_((function (){var and__3941__auto__ = statements;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{replcljs.compiler.emits.call(null,"(function (){");
} else
{}
replcljs.compiler.emit_block.call(null,context,statements,ret);
if(replcljs.core.truth_((function (){var and__3941__auto__ = statements;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{return replcljs.compiler.emits.call(null,"})()");
} else
{return null;
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'try*",(function (p__4559){
var map__4560 = p__4559;
var map__4560__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4560))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4560):map__4560);
var finally$ = replcljs.core._lookup.call(null,map__4560__$1,"\uFDD0'finally",null);
var name = replcljs.core._lookup.call(null,map__4560__$1,"\uFDD0'name",null);
var catch$ = replcljs.core._lookup.call(null,map__4560__$1,"\uFDD0'catch",null);
var try$ = replcljs.core._lookup.call(null,map__4560__$1,"\uFDD0'try",null);
var env = replcljs.core._lookup.call(null,map__4560__$1,"\uFDD0'env",null);
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
var subcontext = ((replcljs.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context);
if(replcljs.core.truth_((function (){var or__3943__auto__ = name;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return finally$;
}
})()))
{if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{replcljs.compiler.emits.call(null,"(function (){");
} else
{}
replcljs.compiler.emits.call(null,"try{");
var map__4561_4565 = try$;
var map__4561_4566__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4561_4565))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4561_4565):map__4561_4565);
var ret_4567 = replcljs.core._lookup.call(null,map__4561_4566__$1,"\uFDD0'ret",null);
var statements_4568 = replcljs.core._lookup.call(null,map__4561_4566__$1,"\uFDD0'statements",null);
replcljs.compiler.emit_block.call(null,subcontext,statements_4568,ret_4567);
replcljs.compiler.emits.call(null,"}");
if(replcljs.core.truth_(name))
{replcljs.compiler.emits.call(null,"catch (",replcljs.compiler.munge.call(null,name),"){");
if(replcljs.core.truth_(catch$))
{var map__4562_4569 = catch$;
var map__4562_4570__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4562_4569))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4562_4569):map__4562_4569);
var ret_4571 = replcljs.core._lookup.call(null,map__4562_4570__$1,"\uFDD0'ret",null);
var statements_4572 = replcljs.core._lookup.call(null,map__4562_4570__$1,"\uFDD0'statements",null);
replcljs.compiler.emit_block.call(null,subcontext,statements_4572,ret_4571);
} else
{}
replcljs.compiler.emits.call(null,"}");
} else
{}
if(replcljs.core.truth_(finally$))
{var map__4563_4573 = finally$;
var map__4563_4574__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4563_4573))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4563_4573):map__4563_4573);
var ret_4575 = replcljs.core._lookup.call(null,map__4563_4574__$1,"\uFDD0'ret",null);
var statements_4576 = replcljs.core._lookup.call(null,map__4563_4574__$1,"\uFDD0'statements",null);
if(replcljs.core.not_EQ_.call(null,"\uFDD0'constant",(new replcljs.core.Keyword("\uFDD0'op")).call(null,ret_4575)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("finally block cannot contain constant"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not=")),"\uFDD0'constant",replcljs.core.with_meta(replcljs.core.list("\uFDD0'op",(new replcljs.core.Symbol(null,"ret"))),replcljs.core.hash_map("\uFDD0'line",588,"\uFDD0'column",37))),replcljs.core.hash_map("\uFDD0'line",588,"\uFDD0'column",21))))].join('')));
}
replcljs.compiler.emits.call(null,"finally {");
replcljs.compiler.emit_block.call(null,subcontext,statements_4576,ret_4575);
replcljs.compiler.emits.call(null,"}");
} else
{}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{return replcljs.compiler.emits.call(null,"})()");
} else
{return null;
}
} else
{var map__4564 = try$;
var map__4564__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4564))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4564):map__4564);
var ret = replcljs.core._lookup.call(null,map__4564__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4564__$1,"\uFDD0'statements",null);
if(replcljs.core.truth_((function (){var and__3941__auto__ = statements;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{replcljs.compiler.emits.call(null,"(function (){");
} else
{}
replcljs.compiler.emit_block.call(null,subcontext,statements,ret);
if(replcljs.core.truth_((function (){var and__3941__auto__ = statements;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,"\uFDD0'expr",context);
} else
{return and__3941__auto__;
}
})()))
{return replcljs.compiler.emits.call(null,"})()");
} else
{return null;
}
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'let",(function (p__4577){
var map__4578 = p__4577;
var map__4578__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4578))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4578):map__4578);
var loop = replcljs.core._lookup.call(null,map__4578__$1,"\uFDD0'loop",null);
var env = replcljs.core._lookup.call(null,map__4578__$1,"\uFDD0'env",null);
var ret = replcljs.core._lookup.call(null,map__4578__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4578__$1,"\uFDD0'statements",null);
var bindings = replcljs.core._lookup.call(null,map__4578__$1,"\uFDD0'bindings",null);
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{replcljs.compiler.emits.call(null,"(function (){");
} else
{}
var _STAR_lexical_renames_STAR_4579_4583 = replcljs.compiler._STAR_lexical_renames_STAR_;
try{replcljs.compiler._STAR_lexical_renames_STAR_ = replcljs.core.into.call(null,replcljs.compiler._STAR_lexical_renames_STAR_,((replcljs.core._EQ_.call(null,"\uFDD0'statement",context))?replcljs.core.map.call(null,(function (p1__4558_SHARP_){
return replcljs.core.vector.call(null,replcljs.core.hash.call(null,p1__4558_SHARP_),replcljs.core.gensym.call(null,[replcljs.core.str((new replcljs.core.Keyword("\uFDD0'name")).call(null,p1__4558_SHARP_)),replcljs.core.str("-")].join('')));
}),bindings):null));
var G__4581_4584 = replcljs.core.seq.call(null,bindings);
while(true){
if(G__4581_4584)
{var map__4582_4585 = replcljs.core.first.call(null,G__4581_4584);
var map__4582_4586__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4582_4585))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4582_4585):map__4582_4585);
var binding_4587 = map__4582_4586__$1;
var init_4588 = replcljs.core._lookup.call(null,map__4582_4586__$1,"\uFDD0'init",null);
replcljs.compiler.emitln.call(null,"var ",replcljs.compiler.munge.call(null,binding_4587)," = ",init_4588,";");
{
var G__4589 = replcljs.core.next.call(null,G__4581_4584);
G__4581_4584 = G__4589;
continue;
}
} else
{}
break;
}
if(replcljs.core.truth_(loop))
{replcljs.compiler.emitln.call(null,"while(true){");
} else
{}
replcljs.compiler.emit_block.call(null,((replcljs.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context),statements,ret);
if(replcljs.core.truth_(loop))
{replcljs.compiler.emitln.call(null,"break;");
replcljs.compiler.emitln.call(null,"}");
} else
{}
}finally {replcljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_4579_4583;
}if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{return replcljs.compiler.emits.call(null,"})()");
} else
{return null;
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'recur",(function (p__4590){
var map__4591 = p__4590;
var map__4591__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4591))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4591):map__4591);
var env = replcljs.core._lookup.call(null,map__4591__$1,"\uFDD0'env",null);
var exprs = replcljs.core._lookup.call(null,map__4591__$1,"\uFDD0'exprs",null);
var frame = replcljs.core._lookup.call(null,map__4591__$1,"\uFDD0'frame",null);
var temps = replcljs.core.vec.call(null,replcljs.core.take.call(null,replcljs.core.count.call(null,exprs),replcljs.core.repeatedly.call(null,replcljs.core.gensym)));
var params = (new replcljs.core.Keyword("\uFDD0'params")).call(null,frame);
replcljs.compiler.emitln.call(null,"{");
var n__2209__auto___4592 = replcljs.core.count.call(null,exprs);
var i_4593 = 0;
while(true){
if((i_4593 < n__2209__auto___4592))
{replcljs.compiler.emitln.call(null,"var ",temps.call(null,i_4593)," = ",exprs.call(null,i_4593),";");
{
var G__4594 = (i_4593 + 1);
i_4593 = G__4594;
continue;
}
} else
{}
break;
}
var n__2209__auto___4595 = replcljs.core.count.call(null,exprs);
var i_4596 = 0;
while(true){
if((i_4596 < n__2209__auto___4595))
{replcljs.compiler.emitln.call(null,replcljs.compiler.munge.call(null,params.call(null,i_4596))," = ",temps.call(null,i_4596),";");
{
var G__4597 = (i_4596 + 1);
i_4596 = G__4597;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,"continue;");
return replcljs.compiler.emitln.call(null,"}");
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'letfn",(function (p__4598){
var map__4599 = p__4598;
var map__4599__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4599))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4599):map__4599);
var env = replcljs.core._lookup.call(null,map__4599__$1,"\uFDD0'env",null);
var ret = replcljs.core._lookup.call(null,map__4599__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4599__$1,"\uFDD0'statements",null);
var bindings = replcljs.core._lookup.call(null,map__4599__$1,"\uFDD0'bindings",null);
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{replcljs.compiler.emits.call(null,"(function (){");
} else
{}
var G__4600_4602 = replcljs.core.seq.call(null,bindings);
while(true){
if(G__4600_4602)
{var map__4601_4603 = replcljs.core.first.call(null,G__4600_4602);
var map__4601_4604__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4601_4603))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4601_4603):map__4601_4603);
var binding_4605 = map__4601_4604__$1;
var init_4606 = replcljs.core._lookup.call(null,map__4601_4604__$1,"\uFDD0'init",null);
replcljs.compiler.emitln.call(null,"var ",replcljs.compiler.munge.call(null,binding_4605)," = ",init_4606,";");
{
var G__4607 = replcljs.core.next.call(null,G__4600_4602);
G__4600_4602 = G__4607;
continue;
}
} else
{}
break;
}
replcljs.compiler.emit_block.call(null,((replcljs.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context),statements,ret);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",context))
{return replcljs.compiler.emits.call(null,"})()");
} else
{return null;
}
}));
replcljs.compiler.protocol_prefix = (function protocol_prefix(psym){
return replcljs.core.symbol.call(null,[replcljs.core.str([replcljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace((new RegExp("\\/","g")),"$")),replcljs.core.str("$")].join(''));
});
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'invoke",(function (p__4608){
var map__4609 = p__4608;
var map__4609__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4609))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4609):map__4609);
var expr = map__4609__$1;
var env = replcljs.core._lookup.call(null,map__4609__$1,"\uFDD0'env",null);
var args = replcljs.core._lookup.call(null,map__4609__$1,"\uFDD0'args",null);
var f = replcljs.core._lookup.call(null,map__4609__$1,"\uFDD0'f",null);
var info = (new replcljs.core.Keyword("\uFDD0'info")).call(null,f);
var fn_QMARK_ = (function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_static_fns_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = replcljs.core.not.call(null,(new replcljs.core.Keyword("\uFDD0'dynamic")).call(null,info));
if(and__3941__auto____$1)
{return (new replcljs.core.Keyword("\uFDD0'fn-var")).call(null,info);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})();
var protocol = (new replcljs.core.Keyword("\uFDD0'protocol")).call(null,info);
var proto_QMARK_ = (function (){var tag = replcljs.compiler.infer_tag.call(null,replcljs.core.first.call(null,(new replcljs.core.Keyword("\uFDD0'args")).call(null,expr)));
var and__3941__auto__ = protocol;
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = tag;
if(replcljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (function (){var or__3943__auto__ = replcljs.analyzer._STAR_cljs_static_fns_STAR_;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new replcljs.core.Keyword("\uFDD0'protocol-inline")).call(null,env);
}
})();
if(replcljs.core.truth_(and__3941__auto____$2))
{var or__3943__auto__ = replcljs.core._EQ_.call(null,protocol,tag);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var temp__4092__auto__ = (new replcljs.core.Keyword("\uFDD0'protocols")).call(null,replcljs.analyzer.resolve_existing_var.call(null,replcljs.core.dissoc.call(null,env,"\uFDD0'locals"),tag));
if(replcljs.core.truth_(temp__4092__auto__))
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
var opt_not_QMARK_ = (function (){var and__3941__auto__ = replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'name")).call(null,info),(new replcljs.core.Symbol(null,"replcljs.core/not")));
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,replcljs.compiler.infer_tag.call(null,replcljs.core.first.call(null,(new replcljs.core.Keyword("\uFDD0'args")).call(null,expr))),(new replcljs.core.Symbol(null,"boolean")));
} else
{return and__3941__auto__;
}
})();
var ns = (new replcljs.core.Keyword("\uFDD0'ns")).call(null,info);
var js_QMARK_ = replcljs.core._EQ_.call(null,ns,(new replcljs.core.Symbol(null,"js")));
var replgoog_QMARK_ = (replcljs.core.truth_(ns)?(function (){var or__3943__auto__ = replcljs.core._EQ_.call(null,ns,(new replcljs.core.Symbol(null,"replgoog")));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var temp__4092__auto__ = [replcljs.core.str(ns)].join('');
if(replcljs.core.truth_(temp__4092__auto__))
{var ns_str = temp__4092__auto__;
return replcljs.core._EQ_.call(null,replcljs.core._lookup.call(null,clojure.string.split.call(null,ns_str,/\./),0,null),"replgoog");
} else
{return null;
}
}
})():null);
var keyword_QMARK_ = (function (){var and__3941__auto__ = replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'op")).call(null,f),"\uFDD0'constant");
if(and__3941__auto__)
{return replcljs.core.keyword_QMARK_.call(null,(new replcljs.core.Keyword("\uFDD0'form")).call(null,f));
} else
{return and__3941__auto__;
}
})();
var vec__4610 = (replcljs.core.truth_(fn_QMARK_)?(function (){var arity = replcljs.core.count.call(null,args);
var variadic_QMARK_ = (new replcljs.core.Keyword("\uFDD0'variadic")).call(null,info);
var mps = (new replcljs.core.Keyword("\uFDD0'method-params")).call(null,info);
var mfa = (new replcljs.core.Keyword("\uFDD0'max-fixed-arity")).call(null,info);
if((function (){var and__3941__auto__ = replcljs.core.not.call(null,variadic_QMARK_);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,replcljs.core.count.call(null,mps),1);
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.PersistentVector.fromArray([f,null], true);
} else
{if(replcljs.core.truth_((function (){var and__3941__auto__ = variadic_QMARK_;
if(replcljs.core.truth_(and__3941__auto__))
{return (arity > mfa);
} else
{return and__3941__auto__;
}
})()))
{return replcljs.core.PersistentVector.fromArray([replcljs.core.update_in.call(null,f,replcljs.core.PersistentVector.fromArray(["\uFDD0'info","\uFDD0'name"], true),(function (name){
return replcljs.core.symbol.call(null,[replcljs.core.str(replcljs.compiler.munge.call(null,name)),replcljs.core.str(".cljs$lang$arity$variadic")].join(''));
})),replcljs.core.ObjMap.fromObject(["\uFDD0'max-fixed-arity"],{"\uFDD0'max-fixed-arity":mfa})], true);
} else
{if("\uFDD0'else")
{var arities = replcljs.core.map.call(null,replcljs.core.count,mps);
if(replcljs.core.truth_(replcljs.core.some.call(null,replcljs.core.PersistentHashSet.fromArray([arity]),arities)))
{return replcljs.core.PersistentVector.fromArray([replcljs.core.update_in.call(null,f,replcljs.core.PersistentVector.fromArray(["\uFDD0'info","\uFDD0'name"], true),(function (name){
return replcljs.core.symbol.call(null,[replcljs.core.str(replcljs.compiler.munge.call(null,name)),replcljs.core.str(".cljs$lang$arity$"),replcljs.core.str(arity)].join(''));
})),null], true);
} else
{return replcljs.core.PersistentVector.fromArray([f,null], true);
}
} else
{return null;
}
}
}
})():replcljs.core.PersistentVector.fromArray([f,null], true));
var f__$1 = replcljs.core.nth.call(null,vec__4610,0,null);
var variadic_invoke = replcljs.core.nth.call(null,vec__4610,1,null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
if(replcljs.core.truth_(opt_not_QMARK_))
{replcljs.compiler.emits.call(null,"!(",replcljs.core.first.call(null,args),")");
} else
{if(replcljs.core.truth_(proto_QMARK_))
{var pimpl_4611 = [replcljs.core.str(replcljs.compiler.munge.call(null,replcljs.compiler.protocol_prefix.call(null,protocol))),replcljs.core.str(replcljs.compiler.munge.call(null,replcljs.core.name.call(null,(new replcljs.core.Keyword("\uFDD0'name")).call(null,info)))),replcljs.core.str("$arity$"),replcljs.core.str(replcljs.core.count.call(null,args))].join('');
replcljs.compiler.emits.call(null,replcljs.core.first.call(null,args),".",pimpl_4611,"(",replcljs.compiler.comma_sep.call(null,args),")");
} else
{if(replcljs.core.truth_(keyword_QMARK_))
{replcljs.compiler.emits.call(null,"(new replcljs.core.Keyword(",f__$1,")).call(",replcljs.compiler.comma_sep.call(null,replcljs.core.cons.call(null,"null",args)),")");
} else
{if(replcljs.core.truth_(variadic_invoke))
{var mfa_4612 = (new replcljs.core.Keyword("\uFDD0'max-fixed-arity")).call(null,variadic_invoke);
replcljs.compiler.emits.call(null,f__$1,"(",replcljs.compiler.comma_sep.call(null,replcljs.core.take.call(null,mfa_4612,args)),(((mfa_4612 === 0))?null:","),"replcljs.core.array_seq([",replcljs.compiler.comma_sep.call(null,replcljs.core.drop.call(null,mfa_4612,args)),"], 0))");
} else
{if(replcljs.core.truth_((function (){var or__3943__auto__ = fn_QMARK_;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = js_QMARK_;
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return replgoog_QMARK_;
}
}
})()))
{replcljs.compiler.emits.call(null,f__$1,"(",replcljs.compiler.comma_sep.call(null,args),")");
} else
{if("\uFDD0'else")
{if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_static_fns_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'op")).call(null,f__$1),"\uFDD0'var");
} else
{return and__3941__auto__;
}
})()))
{var fprop_4613 = [replcljs.core.str(".cljs$lang$arity$"),replcljs.core.str(replcljs.core.count.call(null,args))].join('');
replcljs.compiler.emits.call(null,"(",f__$1,fprop_4613," ? ",f__$1,fprop_4613,"(",replcljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",replcljs.compiler.comma_sep.call(null,replcljs.core.cons.call(null,"null",args)),"))");
} else
{replcljs.compiler.emits.call(null,f__$1,".call(",replcljs.compiler.comma_sep.call(null,replcljs.core.cons.call(null,"null",args)),")");
}
} else
{}
}
}
}
}
}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'new",(function (p__4614){
var map__4615 = p__4614;
var map__4615__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4615))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4615):map__4615);
var env = replcljs.core._lookup.call(null,map__4615__$1,"\uFDD0'env",null);
var args = replcljs.core._lookup.call(null,map__4615__$1,"\uFDD0'args",null);
var ctor = replcljs.core._lookup.call(null,map__4615__$1,"\uFDD0'ctor",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emits.call(null,"(new ",ctor,"(",replcljs.compiler.comma_sep.call(null,args),"))");
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'set!",(function (p__4616){
var map__4617 = p__4616;
var map__4617__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4617))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4617):map__4617);
var env = replcljs.core._lookup.call(null,map__4617__$1,"\uFDD0'env",null);
var val = replcljs.core._lookup.call(null,map__4617__$1,"\uFDD0'val",null);
var target = replcljs.core._lookup.call(null,map__4617__$1,"\uFDD0'target",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
replcljs.compiler.emits.call(null,target," = ",val);
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'ns",(function (p__4618){
var map__4619 = p__4618;
var map__4619__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4619))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4619):map__4619);
var env = replcljs.core._lookup.call(null,map__4619__$1,"\uFDD0'env",null);
var requires_macros = replcljs.core._lookup.call(null,map__4619__$1,"\uFDD0'requires-macros",null);
var uses = replcljs.core._lookup.call(null,map__4619__$1,"\uFDD0'uses",null);
var requires = replcljs.core._lookup.call(null,map__4619__$1,"\uFDD0'requires",null);
var name = replcljs.core._lookup.call(null,map__4619__$1,"\uFDD0'name",null);
replcljs.core.swap_BANG_.call(null,replcljs.compiler.ns_first_segments,replcljs.core.conj,replcljs.core.first.call(null,clojure.string.split.call(null,[replcljs.core.str(name)].join(''),/\./)));
replcljs.compiler.emit_provide.call(null,replcljs.compiler.munge.call(null,name));
if(replcljs.core._EQ_.call(null,name,(new replcljs.core.Symbol(null,"replcljs.core"))))
{} else
{replcljs.compiler.emitln.call(null,"replgoog.require('replcljs.core');");
}
var G__4620 = replcljs.core.seq.call(null,replcljs.core.into.call(null,replcljs.core.vals.call(null,requires),replcljs.core.distinct.call(null,replcljs.core.vals.call(null,uses))));
while(true){
if(G__4620)
{var lib = replcljs.core.first.call(null,G__4620);
replcljs.compiler.emitln.call(null,"replgoog.require('",replcljs.compiler.munge.call(null,lib),"');");
{
var G__4621 = replcljs.core.next.call(null,G__4620);
G__4620 = G__4621;
continue;
}
} else
{return null;
}
break;
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'deftype*",(function (p__4622){
var map__4623 = p__4622;
var map__4623__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4623))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4623):map__4623);
var pmasks = replcljs.core._lookup.call(null,map__4623__$1,"\uFDD0'pmasks",null);
var fields = replcljs.core._lookup.call(null,map__4623__$1,"\uFDD0'fields",null);
var t = replcljs.core._lookup.call(null,map__4623__$1,"\uFDD0't",null);
var fields__$1 = replcljs.core.map.call(null,replcljs.compiler.munge,fields);
replcljs.compiler.emit_provide.call(null,t);
replcljs.compiler.emitln.call(null,"");
replcljs.compiler.emitln.call(null,"/**");
replcljs.compiler.emitln.call(null,"* @constructor");
replcljs.compiler.emitln.call(null,"*/");
replcljs.compiler.emitln.call(null,replcljs.compiler.munge.call(null,t)," = (function (",replcljs.compiler.comma_sep.call(null,fields__$1),"){");
var G__4624_4627 = replcljs.core.seq.call(null,fields__$1);
while(true){
if(G__4624_4627)
{var fld_4628 = replcljs.core.first.call(null,G__4624_4627);
replcljs.compiler.emitln.call(null,"this.",fld_4628," = ",fld_4628,";");
{
var G__4629 = replcljs.core.next.call(null,G__4624_4627);
G__4624_4627 = G__4629;
continue;
}
} else
{}
break;
}
var G__4625_4630 = replcljs.core.seq.call(null,pmasks);
while(true){
if(G__4625_4630)
{var vec__4626_4631 = replcljs.core.first.call(null,G__4625_4630);
var pno_4632 = replcljs.core.nth.call(null,vec__4626_4631,0,null);
var pmask_4633 = replcljs.core.nth.call(null,vec__4626_4631,1,null);
replcljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4632,"$ = ",pmask_4633,";");
{
var G__4634 = replcljs.core.next.call(null,G__4625_4630);
G__4625_4630 = G__4634;
continue;
}
} else
{}
break;
}
return replcljs.compiler.emitln.call(null,"})");
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'defrecord*",(function (p__4635){
var map__4636 = p__4635;
var map__4636__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4636))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4636):map__4636);
var pmasks = replcljs.core._lookup.call(null,map__4636__$1,"\uFDD0'pmasks",null);
var fields = replcljs.core._lookup.call(null,map__4636__$1,"\uFDD0'fields",null);
var t = replcljs.core._lookup.call(null,map__4636__$1,"\uFDD0't",null);
var fields__$1 = replcljs.core.concat.call(null,replcljs.core.map.call(null,replcljs.compiler.munge,fields),replcljs.core.vec([(new replcljs.core.Symbol(null,"__meta")),(new replcljs.core.Symbol(null,"__extmap"))]));
replcljs.compiler.emit_provide.call(null,t);
replcljs.compiler.emitln.call(null,"");
replcljs.compiler.emitln.call(null,"/**");
replcljs.compiler.emitln.call(null,"* @constructor");
var G__4637_4641 = replcljs.core.seq.call(null,fields__$1);
while(true){
if(G__4637_4641)
{var fld_4642 = replcljs.core.first.call(null,G__4637_4641);
replcljs.compiler.emitln.call(null,"* @param {*} ",fld_4642);
{
var G__4643 = replcljs.core.next.call(null,G__4637_4641);
G__4637_4641 = G__4643;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,"* @param {*=} __meta ");
replcljs.compiler.emitln.call(null,"* @param {*=} __extmap");
replcljs.compiler.emitln.call(null,"*/");
replcljs.compiler.emitln.call(null,replcljs.compiler.munge.call(null,t)," = (function (",replcljs.compiler.comma_sep.call(null,fields__$1),"){");
var G__4638_4644 = replcljs.core.seq.call(null,fields__$1);
while(true){
if(G__4638_4644)
{var fld_4645 = replcljs.core.first.call(null,G__4638_4644);
replcljs.compiler.emitln.call(null,"this.",fld_4645," = ",fld_4645,";");
{
var G__4646 = replcljs.core.next.call(null,G__4638_4644);
G__4638_4644 = G__4646;
continue;
}
} else
{}
break;
}
var G__4639_4647 = replcljs.core.seq.call(null,pmasks);
while(true){
if(G__4639_4647)
{var vec__4640_4648 = replcljs.core.first.call(null,G__4639_4647);
var pno_4649 = replcljs.core.nth.call(null,vec__4640_4648,0,null);
var pmask_4650 = replcljs.core.nth.call(null,vec__4640_4648,1,null);
replcljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4649,"$ = ",pmask_4650,";");
{
var G__4651 = replcljs.core.next.call(null,G__4639_4647);
G__4639_4647 = G__4651;
continue;
}
} else
{}
break;
}
replcljs.compiler.emitln.call(null,"if(arguments.length>",(replcljs.core.count.call(null,fields__$1) - 2),"){");
replcljs.compiler.emitln.call(null,"this.__meta = __meta;");
replcljs.compiler.emitln.call(null,"this.__extmap = __extmap;");
replcljs.compiler.emitln.call(null,"} else {");
replcljs.compiler.emits.call(null,"this.__meta=");
replcljs.compiler.emit_constant.call(null,null);
replcljs.compiler.emitln.call(null,";");
replcljs.compiler.emits.call(null,"this.__extmap=");
replcljs.compiler.emit_constant.call(null,null);
replcljs.compiler.emitln.call(null,";");
replcljs.compiler.emitln.call(null,"}");
return replcljs.compiler.emitln.call(null,"})");
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'dot",(function (p__4652){
var map__4653 = p__4652;
var map__4653__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4653))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4653):map__4653);
var env = replcljs.core._lookup.call(null,map__4653__$1,"\uFDD0'env",null);
var args = replcljs.core._lookup.call(null,map__4653__$1,"\uFDD0'args",null);
var method = replcljs.core._lookup.call(null,map__4653__$1,"\uFDD0'method",null);
var field = replcljs.core._lookup.call(null,map__4653__$1,"\uFDD0'field",null);
var target = replcljs.core._lookup.call(null,map__4653__$1,"\uFDD0'target",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
if(replcljs.core.truth_(field))
{replcljs.compiler.emits.call(null,target,".",replcljs.compiler.munge.call(null,field,replcljs.core.PersistentHashSet.EMPTY));
} else
{replcljs.compiler.emits.call(null,target,".",replcljs.compiler.munge.call(null,method,replcljs.core.PersistentHashSet.EMPTY),"(",replcljs.compiler.comma_sep.call(null,args),")");
}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
replcljs.core._add_method.call(null,replcljs.compiler.emit,"\uFDD0'js",(function (p__4654){
var map__4655 = p__4654;
var map__4655__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4655))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4655):map__4655);
var args = replcljs.core._lookup.call(null,map__4655__$1,"\uFDD0'args",null);
var segs = replcljs.core._lookup.call(null,map__4655__$1,"\uFDD0'segs",null);
var code = replcljs.core._lookup.call(null,map__4655__$1,"\uFDD0'code",null);
var env = replcljs.core._lookup.call(null,map__4655__$1,"\uFDD0'env",null);
var env__3045__auto__ = env;
if(replcljs.core._EQ_.call(null,"\uFDD0'return",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{replcljs.compiler.emits.call(null,"return ");
} else
{}
if(replcljs.core.truth_(code))
{replcljs.compiler.emits.call(null,code);
} else
{replcljs.compiler.emits.call(null,replcljs.core.interleave.call(null,replcljs.core.concat.call(null,segs,replcljs.core.repeat.call(null,null)),replcljs.core.concat.call(null,args,replcljs.core.PersistentVector.fromArray([null], true))));
}
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env__3045__auto__)))
{return null;
} else
{return replcljs.compiler.emitln.call(null,";");
}
}));
/**
* Seq of forms in a Clojure or ClojureScript file.
*/
replcljs.compiler.forms_seq = (function() {
var forms_seq = null;
var forms_seq__1 = (function (f){
return forms_seq.call(null,f,replcljs.reader.indexing_push_back_reader.call(null,replcljs.io.file_read.call(null,f)));
});
var forms_seq__2 = (function (f,rdr){
var temp__4090__auto__ = (function (){var _STAR_ns_sym_STAR_4658 = replcljs.core._STAR_ns_sym_STAR_;
try{replcljs.core._STAR_ns_sym_STAR_ = replcljs.analyzer._STAR_reader_ns_name_STAR_;
return replcljs.reader.read.call(null,rdr,null,null);
}finally {replcljs.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_4658;
}})();
if(replcljs.core.truth_(temp__4090__auto__))
{var form = temp__4090__auto__;
return (new replcljs.core.LazySeq(null,false,(function (){
return replcljs.core.cons.call(null,form,forms_seq.call(null,f,rdr));
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
replcljs.compiler.rename_to_js = (function rename_to_js(file_str){
return clojure.string.replace.call(null,file_str,/\.cljs$/,".js");
});
/**
* Create all parent directories for the passed file.
*/
replcljs.compiler.mkdirs = (function mkdirs(f){
return f.getCanonicalFile().getParentFile().mkdirs();
});
replcljs.compiler.compile_forms_STAR_ = (function compile_forms_STAR_(forms,ns_name,deps,eval_QMARK_,code,output){
while(true){
if(replcljs.core.seq.call(null,forms))
{var env = replcljs.analyzer.empty_env.call(null);
var form = replcljs.core.first.call(null,forms);
var ast = replcljs.analyzer.analyze.call(null,env,form);
var js_str = replcljs.compiler.emit_str.call(null,ast);
var code__$1 = [replcljs.core.str(code),replcljs.core.str(js_str)].join('');
var output__$1 = [replcljs.core.str(output),replcljs.core.str((replcljs.core.truth_(eval_QMARK_)?(function (){try{var sb__2259__auto__ = (new replgoog.string.StringBuffer());
var _STAR_print_fn_STAR_4664_4666 = replcljs.core._STAR_print_fn_STAR_;
try{replcljs.core._STAR_print_fn_STAR_ = ((function (forms,ns_name,deps,eval_QMARK_,code,output){
return (function (x__2260__auto__){
return sb__2259__auto__.append(x__2260__auto__);
});})(forms,ns_name,deps,eval_QMARK_,code,output))
;
eval(js_str);
}finally {replcljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_4664_4666;
}return [replcljs.core.str(sb__2259__auto__)].join('');
}catch (e4663){if(replcljs.core.instance_QMARK_.call(null,Error,e4663))
{var e = e4663;
throw (new Error([replcljs.core.str(e),replcljs.core.str((replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'line")).call(null,replcljs.core.meta.call(null,form)))?[replcljs.core.str(", line "),replcljs.core.str((new replcljs.core.Keyword("\uFDD0'line")).call(null,replcljs.core.meta.call(null,form))),replcljs.core.str(", column "),replcljs.core.str((new replcljs.core.Keyword("\uFDD0'column")).call(null,replcljs.core.meta.call(null,form)))].join(''):null)),replcljs.core.str("\n  while compiling form: "),replcljs.core.str(form),replcljs.core.str("\n  which emitted JavaScript: "),replcljs.core.str(replcljs.core.pr_str.call(null,js_str))].join('')));
} else
{if("\uFDD0'else")
{throw e4663;
} else
{return null;
}
}
}})():null))].join('');
if(replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'op")).call(null,ast),"\uFDD0'ns"))
{{
var G__4667 = replcljs.core.rest.call(null,forms);
var G__4668 = (new replcljs.core.Keyword("\uFDD0'name")).call(null,ast);
var G__4669 = replcljs.core.merge.call(null,(new replcljs.core.Keyword("\uFDD0'uses")).call(null,ast),(new replcljs.core.Keyword("\uFDD0'requires")).call(null,ast));
var G__4670 = eval_QMARK_;
var G__4671 = code__$1;
var G__4672 = output__$1;
forms = G__4667;
ns_name = G__4668;
deps = G__4669;
eval_QMARK_ = G__4670;
code = G__4671;
output = G__4672;
continue;
}
} else
{{
var G__4673 = replcljs.core.rest.call(null,forms);
var G__4674 = ns_name;
var G__4675 = deps;
var G__4676 = eval_QMARK_;
var G__4677 = code__$1;
var G__4678 = output__$1;
forms = G__4673;
ns_name = G__4674;
deps = G__4675;
eval_QMARK_ = G__4676;
code = G__4677;
output = G__4678;
continue;
}
}
} else
{return replcljs.core.ObjMap.fromObject(["\uFDD0'ns","\uFDD0'emit-str","\uFDD0'output","\uFDD0'provides","\uFDD0'requires"],{"\uFDD0'ns":(function (){var or__3943__auto__ = ns_name;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.analyzer._STAR_cljs_ns_STAR_;
}
})(),"\uFDD0'emit-str":code,"\uFDD0'output":output,"\uFDD0'provides":replcljs.core.PersistentVector.fromArray([ns_name], true),"\uFDD0'requires":((replcljs.core._EQ_.call(null,ns_name,(new replcljs.core.Symbol(null,"replcljs.core"))))?replcljs.core.set.call(null,replcljs.core.vals.call(null,deps)):replcljs.core.conj.call(null,replcljs.core.set.call(null,replcljs.core.vals.call(null,deps)),(new replcljs.core.Symbol(null,"replcljs.core"))))});
}
break;
}
});
replcljs.compiler.compile_forms = (function compile_forms(forms){
return replcljs.compiler.compile_forms_STAR_.call(null,forms,null,null,false,"","");
});
replcljs.compiler.compile_and_eval_forms = (function compile_and_eval_forms(forms){
return replcljs.compiler.compile_forms_STAR_.call(null,forms,null,null,true,"","");
});
/**
* Snapshot the given namespace. Returns the JavaScript to update
* replcljs.core/namespace based on the snapshot.
*/
replcljs.compiler.ns_snap = (function ns_snap(ns){
var nss1 = replcljs.core.update_in.call(null,replcljs.core.dissoc.call(null,replcljs.core._lookup.call(null,replcljs.core.deref.call(null,replcljs.analyzer.namespaces),ns,null),"\uFDD0'requires-macros"),replcljs.core.PersistentVector.fromArray(["\uFDD0'defs",(new replcljs.core.Symbol(null,"/"))], true),replcljs.core.assoc,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core/_SLASH_")));
var nss2 = replcljs.core.update_in.call(null,replcljs.reader.read_string.call(null,replcljs.core.pr_str.call(null,nss1)),replcljs.core.PersistentVector.fromArray(["\uFDD0'defs",(new replcljs.core.Symbol(null,"/"))], true),replcljs.core.assoc,"\uFDD0'name",replcljs.core.symbol.call(null,"replcljs.core//"));
return replcljs.core.apply.call(null,replcljs.core.str,replcljs.compiler.emit_str.call(null,replcljs.analyzer.analyze.call(null,replcljs.analyzer.empty_env.call(null),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"swap!")),(new replcljs.core.Symbol(null,"replcljs.core/namespaces")),(new replcljs.core.Symbol(null,"assoc")),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),ns),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),nss2)))));
});
replcljs.compiler.compile_file_STAR_ = (function compile_file_STAR_(src,dest){
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'defs")).call(null,replcljs.core._lookup.call(null,replcljs.core.deref.call(null,replcljs.analyzer.namespaces),(new replcljs.core.Symbol(null,"replcljs.core")),null))))
{} else
{replcljs.core.println.call(null,"// analyzing cljs/core.cljs");
replcljs.analyzer.analyze_file.call(null,"cljs/core.cljs");
}
var _STAR_cljs_ns_STAR_4684 = replcljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_4685 = replcljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_position_STAR_4686 = replcljs.compiler._STAR_position_STAR_;
var _STAR_emitted_provides_STAR_4687 = replcljs.compiler._STAR_emitted_provides_STAR_;
try{replcljs.analyzer._STAR_cljs_ns_STAR_ = (new replcljs.core.Symbol(null,"replcljs.user"));
replcljs.analyzer._STAR_cljs_file_STAR_ = src.getPath();
replcljs.compiler._STAR_position_STAR_ = replcljs.core.atom.call(null,replcljs.core.PersistentVector.fromArray([0,0], true));
replcljs.compiler._STAR_emitted_provides_STAR_ = replcljs.core.atom.call(null,replcljs.core.PersistentHashSet.EMPTY);
var cf = replcljs.core.merge.call(null,replcljs.compiler.compile_forms.call(null,replcljs.compiler.forms_seq.call(null,src)),replcljs.core.ObjMap.fromObject(["\uFDD0'file"],{"\uFDD0'file":replcljs.io.file.call(null,dest.getPath())}));
var ns_str = replcljs.compiler.ns_snap.call(null,replcljs.core.first.call(null,(new replcljs.core.Keyword("\uFDD0'provides")).call(null,cf)));
var write_str = [replcljs.core.str((new replcljs.core.Keyword("\uFDD0'emit-str")).call(null,cf)),replcljs.core.str("\n// Analyzer namespace snapshot:\n"),replcljs.core.str(ns_str)].join('');
replcljs.io.file_write.call(null,dest,write_str);
return replcljs.core.dissoc.call(null,cf,"\uFDD0'emit-str","\uFDD0'output");
}finally {replcljs.compiler._STAR_emitted_provides_STAR_ = _STAR_emitted_provides_STAR_4687;
replcljs.compiler._STAR_position_STAR_ = _STAR_position_STAR_4686;
replcljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_4685;
replcljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_4684;
}});
/**
* Return true if the src file requires compilation.
*/
replcljs.compiler.requires_compilation_QMARK_ = (function requires_compilation_QMARK_(src,dest){
var or__3943__auto__ = replcljs.core.not.call(null,dest.exists());
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
replcljs.compiler.compile_file = (function() {
var compile_file = null;
var compile_file__1 = (function (src){
var dest = replcljs.compiler.rename_to_js.call(null,src);
return compile_file.call(null,src,dest);
});
var compile_file__2 = (function (src,dest){
var src_file = replcljs.io.file.call(null,src);
var dest_file = replcljs.io.file.call(null,dest);
if(replcljs.core.truth_(src_file.exists()))
{if(replcljs.core.truth_(replcljs.compiler.requires_compilation_QMARK_.call(null,src_file,dest_file)))
{replcljs.compiler.mkdirs.call(null,dest_file);
return replcljs.compiler.compile_file_STAR_.call(null,src_file,dest_file);
} else
{return replcljs.core.ObjMap.fromObject(["\uFDD0'file"],{"\uFDD0'file":dest_file});
}
} else
{throw (new Error([replcljs.core.str("The file "),replcljs.core.str(src),replcljs.core.str(" does not exist.")].join('')));
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
replcljs.compiler.path_seq = (function path_seq(file_str){
return clojure.string.split.call(null,file_str,replcljs.io.path_separator);
});
replcljs.compiler.to_path = (function() {
var to_path = null;
var to_path__1 = (function (parts){
return to_path.call(null,parts,replcljs.io.path_separator);
});
var to_path__2 = (function (parts,sep){
return replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.interpose.call(null,sep,parts));
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
replcljs.compiler.to_target_file = (function to_target_file(dir,target,file){
var dir_path = replcljs.compiler.path_seq.call(null,dir.getAbsolutePath());
var file_path = replcljs.compiler.path_seq.call(null,file.getAbsolutePath());
var relative_path = replcljs.core.drop.call(null,replcljs.core.count.call(null,dir_path),file_path);
var parents = replcljs.core.butlast.call(null,relative_path);
var parent_file = replcljs.io.file.call(null,replcljs.compiler.to_path.call(null,replcljs.core.cons.call(null,target,parents)));
return replcljs.io.file.call(null,parent_file,replcljs.compiler.rename_to_js.call(null,replcljs.core.last.call(null,relative_path)));
});
/**
* Return a sequence of all .cljs files in the given directory.
*/
replcljs.compiler.cljs_files_in = (function cljs_files_in(dir){
return replcljs.core.filter.call(null,(function (p1__4689_SHARP_){
var name = p1__4689_SHARP_.getName();
var and__3941__auto__ = replcljs.core.re_find.call(null,/\.cljs$/,name);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = replcljs.core.not_EQ_.call(null,".",replcljs.core.first.call(null,name));
if(and__3941__auto____$1)
{return !(replcljs.core.contains_QMARK_.call(null,replcljs.compiler.cljs_reserved_file_names,name));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),replcljs.io.file_seq.call(null,dir));
});
/**
* Looks recursively in src-dir for .cljs files and compiles them to
* .js files. If target-dir is provided, output will go into this
* directory mirroring the source directory structure. Returns a list
* of maps containing information about each file which was compiled
* in dependency order.
*/
replcljs.compiler.compile_root = (function() {
var compile_root = null;
var compile_root__1 = (function (src_dir){
return compile_root.call(null,src_dir,"out");
});
var compile_root__2 = (function (src_dir,target_dir){
var src_dir_file = replcljs.io.file.call(null,src_dir);
var cljs_files = replcljs.compiler.cljs_files_in.call(null,src_dir_file);
var output_files = replcljs.core.PersistentVector.EMPTY;
while(true){
if(replcljs.core.seq.call(null,cljs_files))
{var cljs_file = replcljs.core.first.call(null,cljs_files);
var output_file = replcljs.compiler.to_target_file.call(null,src_dir_file,target_dir,cljs_file);
var ns_info = replcljs.compiler.compile_file.call(null,cljs_file,output_file);
{
var G__4690 = replcljs.core.rest.call(null,cljs_files);
var G__4691 = replcljs.core.conj.call(null,output_files,replcljs.core.assoc.call(null,ns_info,"\uFDD0'file-name",output_file.getPath()));
cljs_files = G__4690;
output_files = G__4691;
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
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replcljs.compiler"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4692__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4692 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4692__delegate.call(this, m);
};
G__4692.cljs$lang$maxFixedArity = 0;
G__4692.cljs$lang$applyTo = (function (arglist__4693){
var m = replcljs.core.seq(arglist__4693);;
return G__4692__delegate(m);
});
G__4692.cljs$lang$arity$variadic = G__4692__delegate;
return G__4692;
})()
,replcljs.core.hash_map("\uFDD0'defs",replcljs.core.hash_map((new replcljs.core.Symbol(null,"cljs-reserved-file-names")),replcljs.core.hash_map("\uFDD0'line",41,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/cljs-reserved-file-names"))),(new replcljs.core.Symbol(null,"get-tag")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/get-tag")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",338,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-apply-to")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'keys",replcljs.core.vec([(new replcljs.core.Symbol(null,"name")),(new replcljs.core.Symbol(null,"params")),(new replcljs.core.Symbol(null,"env"))]))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4487")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-apply-to")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",410,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"compile-and-eval-forms")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"forms"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"forms")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/compile-and-eval-forms")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",857,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"escape-char")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"c"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"c")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"Character")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/escape-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",105,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"*lexical-renames*")),replcljs.core.hash_map("\uFDD0'line",40,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/*lexical-renames*"))),(new replcljs.core.Symbol(null,"infer-tag")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/infer-tag")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",342,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"requires-compilation?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"src")),(new replcljs.core.Symbol(null,"dest"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"src")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"dest")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/requires-compilation?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Return true if the src file requires compilation.","\uFDD0'line",897,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-provide")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-provide")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",167,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"mkdirs")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/mkdirs")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Create all parent directories for the passed file.","\uFDD0'line",819,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-constant-set")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-constant-set")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",204,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"munge")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"reserved"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reserved")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/munge")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",73,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-meta-constant")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x")),(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"body"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"body")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-meta-constant")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",173,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"ns-first-segments")),replcljs.core.hash_map("\uFDD0'line",44,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/ns-first-segments"))),(new replcljs.core.Symbol(null,"forms-seq")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"f"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"f")),(new replcljs.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/forms-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Seq of forms in a Clojure or ClojureScript file.","\uFDD0'line",803,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"js-reserved")),replcljs.core.hash_map("\uFDD0'line",24,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/js-reserved"))),(new replcljs.core.Symbol(null,"safe-test?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"e"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"e")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/safe-test?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",357,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"compile-file*")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"src")),(new replcljs.core.Symbol(null,"dest"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"src")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"dest")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/compile-file*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",882,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emitln")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"xs"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"xs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emitln")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",155,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"compile-forms")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"forms"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"forms")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/compile-forms")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",855,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"/")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core//"))),(new replcljs.core.Symbol(null,"array-map-threshold")),replcljs.core.hash_map("\uFDD0'line",284,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'private",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/array-map-threshold"))),(new replcljs.core.Symbol(null,"escape-string")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"CharSequence")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/escape-string")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",129,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-constant-keyword")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-constant-keyword")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",181,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"escape-pattern")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"pattern"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"pattern")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"String")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/escape-pattern")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",122,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-constant")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new replcljs.core.Symbol(null,"replcljs.compiler/EmitConstant")),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-constant")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",210,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-block")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"context")),(new replcljs.core.Symbol(null,"statements")),(new replcljs.core.Symbol(null,"ret"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"context")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"statements")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ret")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-block")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",256,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-variadic-fn-method")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'keys",replcljs.core.vec([(new replcljs.core.Symbol(null,"type")),(new replcljs.core.Symbol(null,"name")),(new replcljs.core.Symbol(null,"variadic")),(new replcljs.core.Symbol(null,"params")),(new replcljs.core.Symbol(null,"statements")),(new replcljs.core.Symbol(null,"ret")),(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"recurs")),(new replcljs.core.Symbol(null,"max-fixed-arity"))]),"\uFDD0'as",(new replcljs.core.Symbol(null,"f")))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4517")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-variadic-fn-method")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",450,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"cljs-files-in")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"dir"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/cljs-files-in")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Return a sequence of all .cljs files in the given directory.","\uFDD0'line",959,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"*emitted-provides*")),replcljs.core.hash_map("\uFDD0'line",39,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/*emitted-provides*"))),(new replcljs.core.Symbol(null,"rename-to-js")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"file-str"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"file-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/rename-to-js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Change the file extension from .cljs to .js. Takes a File or a\n  String. Always returns a String.","\uFDD0'line",813,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-fn-method")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'keys",replcljs.core.vec([(new replcljs.core.Symbol(null,"type")),(new replcljs.core.Symbol(null,"name")),(new replcljs.core.Symbol(null,"variadic")),(new replcljs.core.Symbol(null,"params")),(new replcljs.core.Symbol(null,"statements")),(new replcljs.core.Symbol(null,"ret")),(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"recurs")),(new replcljs.core.Symbol(null,"max-fixed-arity"))]))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4511")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-fn-method")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",437,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"path-seq")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"file-str"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"file-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/path-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",938,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"EmitConstant")),replcljs.core.hash_map("\uFDD0'line",210,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/EmitConstant"))),(new replcljs.core.Symbol(null,"*position*")),replcljs.core.hash_map("\uFDD0'line",38,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/*position*"))),(new replcljs.core.Symbol(null,"to-path")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"parts"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"parts")),(new replcljs.core.Symbol(null,"sep"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"parts")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"parts")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sep")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/to-path")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",942,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-str")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"expr"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"expr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-str")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",152,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"String"))),(new replcljs.core.Symbol(null,"compile-forms*")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"forms")),(new replcljs.core.Symbol(null,"ns-name")),(new replcljs.core.Symbol(null,"deps")),(new replcljs.core.Symbol(null,"eval?")),(new replcljs.core.Symbol(null,"code")),(new replcljs.core.Symbol(null,"output"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"forms")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ns-name")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"deps")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"eval?")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"code")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"output")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/compile-forms*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",6,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",824,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"compile-root")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"src-dir"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"src-dir")),(new replcljs.core.Symbol(null,"target-dir"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"src-dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"src-dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"target-dir")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/compile-root")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Looks recursively in src-dir for .cljs files and compiles them to\n   .js files. If target-dir is provided, output will go into this\n   directory mirroring the source directory structure. Returns a list\n   of maps containing information about each file which was compiled\n   in dependency order.","\uFDD0'line",968,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"to-target-file")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"dir")),(new replcljs.core.Symbol(null,"target")),(new replcljs.core.Symbol(null,"file"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"dir")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"target")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"String")),"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"file")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/to-target-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Given the source root directory, the output target directory and\n  file under the source root, produce the target file.","\uFDD0'line",948,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"comma-sep")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"xs"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"xs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/comma-sep")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",102,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-constant-symbol")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-constant-symbol")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",188,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"protocol-prefix")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"psym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"psym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/protocol-prefix")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",638,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"obj-map-threshold")),replcljs.core.hash_map("\uFDD0'line",285,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'private",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/obj-map-threshold"))),(new replcljs.core.Symbol(null,"emit-comment")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"doc")),(new replcljs.core.Symbol(null,"jsdoc"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"doc")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"jsdoc")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-comment")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Emit a nicely formatted comment string.","\uFDD0'line",384,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"compile-file")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"src"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"src")),(new replcljs.core.Symbol(null,"dest"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"src")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"dest")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/compile-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Compiles src to a file of the same name, but with a .js extension,\n   in the src file's directory.\n\n   With dest argument, write file to provided location. If the dest\n   argument is a file outside the source tree, missing parent\n   directories will be created. The src file will only be compiled if\n   the dest file has an older modification time.\n\n   Both src and dest may be either a String or a File.\n\n   Returns a map containing {:ns .. :provides .. :requires .. :file ..}.\n   If the file was not compiled returns only {:file ...}","\uFDD0'line",903,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emits")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"xs"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"xs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emits")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",137,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"emit-constant-map")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit-constant-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",197,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"wrap-in-double-quotes")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/wrap-in-double-quotes")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",132,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs"),(new replcljs.core.Symbol(null,"CHAR_MAP")),replcljs.core.hash_map("\uFDD0'line",47,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/CHAR_MAP"))),(new replcljs.core.Symbol(null,"emit")),replcljs.core.hash_map("\uFDD0'line",135,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/emit"))),(new replcljs.core.Symbol(null,"ns-snap")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ns"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ns")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler/ns-snap")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Snapshot the given namespace. Returns the JavaScript to update\n  replcljs.core/namespace based on the snapshot.","\uFDD0'line",867,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/compiler.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",replcljs.core.hash_map((new replcljs.core.Symbol(null,"with-core-cljs")),(new replcljs.core.Symbol(null,"replcljs.compiler-macros")),(new replcljs.core.Symbol(null,"emit-wrap")),(new replcljs.core.Symbol(null,"replcljs.compiler-macros"))),"\uFDD0'requires",replcljs.core.hash_map((new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"replcljs.reader")),(new replcljs.core.Symbol(null,"ana")),(new replcljs.core.Symbol(null,"replcljs.analyzer")),(new replcljs.core.Symbol(null,"string")),(new replcljs.core.Symbol(null,"clojure.string")),(new replcljs.core.Symbol(null,"io")),(new replcljs.core.Symbol(null,"replcljs.io"))),"\uFDD0'uses",null,"\uFDD0'excludes",replcljs.core.set([(new replcljs.core.Symbol(null,"munge")),(new replcljs.core.Symbol(null,"macroexpand-1"))]),"\uFDD0'doc",null,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.compiler"))),old);
}));
