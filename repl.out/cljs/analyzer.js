replgoog.provide('cljsrepl.analyzer');
replgoog.require('cljsrepl.core');
replgoog.require('replclojure.string');
cljsrepl.analyzer._STAR_cljs_warn_on_undeclared_STAR_ = false;
cljsrepl.analyzer._STAR_reader_ns_name_STAR_ = cljsrepl.core.gensym.call(null);
cljsrepl.analyzer.namespaces = cljsrepl.core.namespaces;
cljsrepl.analyzer._STAR_cljs_ns_STAR_ = (new cljsrepl.core.Symbol(null,"cljsrepl.user"));
cljsrepl.analyzer._STAR_cljs_file_STAR_ = null;
cljsrepl.analyzer._STAR_cljs_warn_on_redef_STAR_ = true;
cljsrepl.analyzer._STAR_cljs_warn_on_dynamic_STAR_ = true;
cljsrepl.analyzer._STAR_cljs_warn_on_fn_var_STAR_ = true;
cljsrepl.analyzer._STAR_cljs_warn_fn_arity_STAR_ = true;
cljsrepl.analyzer._STAR_cljs_warn_fn_deprecated_STAR_ = true;
cljsrepl.analyzer._STAR_cljs_warn_protocol_deprecated_STAR_ = true;
cljsrepl.analyzer._STAR_unchecked_if_STAR_ = cljsrepl.core.atom.call(null,false);
cljsrepl.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljsrepl.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljsrepl.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljsrepl.analyzer._cljs_macros_loaded = cljsrepl.core.atom.call(null,false);
cljsrepl.analyzer.load_core = (function load_core(){
if(cljsrepl.core.not.call(null,cljsrepl.core.deref.call(null,cljsrepl.analyzer._cljs_macros_loaded)))
{cljsrepl.core.reset_BANG_.call(null,cljsrepl.analyzer._cljs_macros_loaded,true);
if(cljsrepl.core.truth_(cljsrepl.analyzer._STAR_cljs_macros_is_classpath_STAR_))
{return cljsrepl.analyzer.load.call(null,cljsrepl.analyzer._STAR_cljs_macros_path_STAR_);
} else
{return cljsrepl.core.load_file.call(null,cljsrepl.analyzer._STAR_cljs_macros_path_STAR_);
}
} else
{return null;
}
});
cljsrepl.analyzer.empty_env = (function empty_env(){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'ns","\uFDD0'context","\uFDD0'locals"],{"\uFDD0'ns":cljsrepl.core.deref.call(null,cljsrepl.core.namespaces).call(null,cljsrepl.analyzer._STAR_cljs_ns_STAR_),"\uFDD0'context":"\uFDD0'statement","\uFDD0'locals":cljsrepl.core.ObjMap.EMPTY});
});
cljsrepl.analyzer.warning = (function warning(env,s){
var _STAR_out_STAR_4695 = cljsrepl.core._STAR_out_STAR_;
try{cljsrepl.core._STAR_out_STAR_ = cljsrepl.core._STAR_err_STAR_;
return cljsrepl.core.println.call(null,[cljsrepl.core.str(s),cljsrepl.core.str((cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'line")).call(null,env))?[cljsrepl.core.str(" at line "),cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'line")).call(null,env)),cljsrepl.core.str(" "),cljsrepl.core.str(cljsrepl.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join(''));
}finally {cljsrepl.core._STAR_out_STAR_ = _STAR_out_STAR_4695;
}});
cljsrepl.analyzer.confirm_var_exists = (function confirm_var_exists(env,prefix,suffix){
if(cljsrepl.core.truth_(cljsrepl.analyzer._STAR_cljs_warn_on_undeclared_STAR_))
{var crnt_ns = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env));
if(cljsrepl.core._EQ_.call(null,prefix,crnt_ns))
{if(cljsrepl.core.truth_(suffix.call(null,(new cljsrepl.core.Keyword("\uFDD0'defs")).call(null,crnt_ns.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces))))))
{return null;
} else
{return cljsrepl.analyzer.warning.call(null,env,[cljsrepl.core.str("WARNING: Use of undeclared Var "),cljsrepl.core.str(prefix),cljsrepl.core.str("/"),cljsrepl.core.str(suffix)].join(''));
}
} else
{return null;
}
} else
{return null;
}
});
cljsrepl.analyzer.resolve_ns_alias = (function resolve_ns_alias(env,name){
var sym = cljsrepl.core.symbol.call(null,name);
return cljsrepl.core._lookup.call(null,(new cljsrepl.core.Keyword("\uFDD0'requires")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),sym,sym);
});
/**
* Is sym visible from core in the current compilation namespace?
*/
cljsrepl.analyzer.core_name_QMARK_ = (function core_name_QMARK_(env,sym){
var and__3941__auto__ = cljsrepl.core._lookup.call(null,(new cljsrepl.core.Keyword("\uFDD0'defs")).call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces).call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core")))),sym,null);
if(cljsrepl.core.truth_(and__3941__auto__))
{return !(cljsrepl.core.contains_QMARK_.call(null,(new cljsrepl.core.Keyword("\uFDD0'excludes")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),sym));
} else
{return and__3941__auto__;
}
});
cljsrepl.analyzer.resolve_existing_var = (function resolve_existing_var(env,sym){
while(true){
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.namespace.call(null,sym),"js"))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":sym,"\uFDD0'ns":(new cljsrepl.core.Symbol(null,"js"))});
} else
{var s = [cljsrepl.core.str(sym)].join('');
var lb = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_(lb))
{return lb;
} else
{if(cljsrepl.core.truth_(cljsrepl.core.namespace.call(null,sym)))
{var ns = cljsrepl.core.namespace.call(null,sym);
var ns__$1 = ((cljsrepl.core._EQ_.call(null,"replclojure.core",ns))?"cljsrepl.core":ns);
var full_ns = cljsrepl.analyzer.resolve_ns_alias.call(null,env,ns__$1);
cljsrepl.analyzer.confirm_var_exists.call(null,env,full_ns,cljsrepl.core.symbol.call(null,cljsrepl.core.name.call(null,sym)));
return cljsrepl.core.merge.call(null,cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",cljsrepl.core.symbol.call(null,cljsrepl.core.name.call(null,sym))], true)),cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str(full_ns)].join(''),[cljsrepl.core.str(cljsrepl.core.name.call(null,sym))].join('')),"\uFDD0'ns":full_ns}));
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.not_EQ_.call(null,"..",s);
if(and__3941__auto__)
{return (s.indexOf(".") >= 0);
} else
{return and__3941__auto__;
}
})())
{var idx = s.indexOf(".");
var prefix = cljsrepl.core.symbol.call(null,cljsrepl.core.subs.call(null,s,0,idx));
var suffix = cljsrepl.core.subs.call(null,s,(idx + 1));
var lb__$1 = prefix.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_(lb__$1))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'name")).call(null,lb__$1)),cljsrepl.core.str(suffix)].join(''))});
} else
{cljsrepl.analyzer.confirm_var_exists.call(null,env,prefix,cljsrepl.core.symbol.call(null,suffix));
return cljsrepl.core.merge.call(null,cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([prefix,"\uFDD0'defs",cljsrepl.core.symbol.call(null,suffix)], true)),cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":((cljsrepl.core._EQ_.call(null,"",prefix))?cljsrepl.core.symbol.call(null,suffix):cljsrepl.core.symbol.call(null,[cljsrepl.core.str(prefix)].join(''),suffix)),"\uFDD0'ns":prefix}));
}
} else
{if(cljsrepl.core.truth_(cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true))))
{var full_ns = cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true));
return cljsrepl.core.merge.call(null,cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",sym], true)),cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str(full_ns)].join(''),[cljsrepl.core.str(sym)].join('')),"\uFDD0'ns":(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env))}));
} else
{if(cljsrepl.core.truth_(cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true))))
{{
var G__4697 = env;
var G__4698 = cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true));
env = G__4697;
sym = G__4698;
continue;
}
} else
{if("\uFDD0'else")
{var full_ns = (cljsrepl.core.truth_(cljsrepl.analyzer.core_name_QMARK_.call(null,env,sym))?(new cljsrepl.core.Symbol(null,"cljsrepl.core")):(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)));
cljsrepl.analyzer.confirm_var_exists.call(null,env,full_ns,sym);
return cljsrepl.core.merge.call(null,cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",sym], true)),cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str(full_ns)].join(''),[cljsrepl.core.str(sym)].join('')),"\uFDD0'ns":full_ns}));
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
cljsrepl.analyzer.resolve_var = (function resolve_var(env,sym){
while(true){
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.namespace.call(null,sym),"js"))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":sym});
} else
{var s = [cljsrepl.core.str(sym)].join('');
var lb = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_(lb))
{return lb;
} else
{if(cljsrepl.core.truth_(cljsrepl.core.namespace.call(null,sym)))
{var ns = cljsrepl.core.namespace.call(null,sym);
var ns__$1 = ((cljsrepl.core._EQ_.call(null,"replclojure.core",ns))?"cljsrepl.core":ns);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str(cljsrepl.analyzer.resolve_ns_alias.call(null,env,ns__$1))].join(''),cljsrepl.core.name.call(null,sym))});
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.not_EQ_.call(null,"..",s);
if(and__3941__auto__)
{return (s.indexOf(".") >= 0);
} else
{return and__3941__auto__;
}
})())
{var idx = s.indexOf(".");
var prefix = cljsrepl.core.symbol.call(null,cljsrepl.core.subs.call(null,s,0,idx));
var suffix = cljsrepl.core.subs.call(null,s,idx);
var lb__$1 = prefix.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_(lb__$1))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'name")).call(null,lb__$1)),cljsrepl.core.str(suffix)].join(''))});
} else
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":sym});
}
} else
{if(cljsrepl.core.truth_(cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true))))
{var full_ns = cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true));
return cljsrepl.core.merge.call(null,cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",sym], true)),cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str(full_ns)].join(''),cljsrepl.core.name.call(null,sym))}));
} else
{if(cljsrepl.core.truth_(cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true))))
{{
var G__4699 = env;
var G__4700 = cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true));
env = G__4699;
sym = G__4700;
continue;
}
} else
{if("\uFDD0'else")
{var ns = (cljsrepl.core.truth_(cljsrepl.analyzer.core_name_QMARK_.call(null,env,sym))?(new cljsrepl.core.Symbol(null,"cljsrepl.core")):(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":cljsrepl.core.symbol.call(null,[cljsrepl.core.str(ns)].join(''),cljsrepl.core.name.call(null,sym))});
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
cljsrepl.analyzer.confirm_bindings = (function confirm_bindings(env,names){
var G__4702 = cljsrepl.core.seq.call(null,names);
while(true){
if(G__4702)
{var name = cljsrepl.core.first.call(null,G__4702);
var env_4703__$1 = cljsrepl.core.merge.call(null,env,cljsrepl.core.ObjMap.fromObject(["\uFDD0'ns"],{"\uFDD0'ns":cljsrepl.core.deref.call(null,cljsrepl.core.namespaces).call(null,cljsrepl.analyzer._STAR_cljs_ns_STAR_)}));
var ev_4704 = cljsrepl.analyzer.resolve_existing_var.call(null,env_4703__$1,name);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_warn_on_dynamic_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = ev_4704;
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return cljsrepl.core.not.call(null,(new cljsrepl.core.Keyword("\uFDD0'dynamic")).call(null,ev_4704));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.analyzer.warning.call(null,env_4703__$1,[cljsrepl.core.str("WARNING: "),cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'name")).call(null,ev_4704)),cljsrepl.core.str(" not declared ^:dynamic")].join(''));
} else
{}
{
var G__4705 = cljsrepl.core.next.call(null,G__4702);
G__4702 = G__4705;
continue;
}
} else
{return null;
}
break;
}
});
cljsrepl.analyzer.specials = cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"deftype*")),(new cljsrepl.core.Symbol(null,"new")),(new cljsrepl.core.Symbol(null,"try*")),(new cljsrepl.core.Symbol(null,"quote")),(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"set!")),(new cljsrepl.core.Symbol(null,"recur")),(new cljsrepl.core.Symbol(null,".")),(new cljsrepl.core.Symbol(null,"ns")),(new cljsrepl.core.Symbol(null,"do")),(new cljsrepl.core.Symbol(null,"fn*")),(new cljsrepl.core.Symbol(null,"throw")),(new cljsrepl.core.Symbol(null,"letfn*")),(new cljsrepl.core.Symbol(null,"js*")),(new cljsrepl.core.Symbol(null,"defrecord*")),(new cljsrepl.core.Symbol(null,"let*")),(new cljsrepl.core.Symbol(null,"loop*")),(new cljsrepl.core.Symbol(null,"if")),(new cljsrepl.core.Symbol(null,"def"))]);
cljsrepl.analyzer._STAR_recur_frames_STAR_ = null;
cljsrepl.analyzer._STAR_loop_lets_STAR_ = null;
cljsrepl.analyzer.analyze_keyword = (function analyze_keyword(env,sym){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form"],{"\uFDD0'op":"\uFDD0'constant","\uFDD0'env":env,"\uFDD0'form":((cljsrepl.core._EQ_.call(null,cljsrepl.core.namespace.call(null,sym),cljsrepl.core.name.call(null,cljsrepl.analyzer._STAR_reader_ns_name_STAR_)))?cljsrepl.core.keyword.call(null,cljsrepl.core.name.call(null,(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env))),cljsrepl.core.name.call(null,sym)):sym)});
});
/**
* returns {:statements .. :ret ..}
*/
cljsrepl.analyzer.analyze_block = (function analyze_block(env,exprs){
var statements = (function (){var _STAR_recur_frames_STAR_4709 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.core.seq.call(null,cljsrepl.core.map.call(null,(function (p1__4706_SHARP_){
return cljsrepl.analyzer.analyze.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'statement"),p1__4706_SHARP_);
}),cljsrepl.core.butlast.call(null,exprs)));
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4709;
}})();
var ret = (((cljsrepl.core.count.call(null,exprs) <= 1))?cljsrepl.analyzer.analyze.call(null,env,cljsrepl.core.first.call(null,exprs)):cljsrepl.analyzer.analyze.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context",((cljsrepl.core._EQ_.call(null,"\uFDD0'statement",(new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env)))?"\uFDD0'statement":"\uFDD0'return")),cljsrepl.core.last.call(null,exprs)));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'statements","\uFDD0'ret"],{"\uFDD0'statements":statements,"\uFDD0'ret":ret});
});
cljsrepl.analyzer.parse = (function (){var method_table__2219__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var prefer_table__2220__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var method_cache__2221__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var cached_hierarchy__2222__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var hierarchy__2223__auto__ = cljsrepl.core._lookup.call(null,cljsrepl.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljsrepl.core.global_hierarchy);
return (new cljsrepl.core.MultiFn("parse",(function() { 
var G__4711__delegate = function (op,rest){
return op;
};
var G__4711 = function (op,var_args){
var rest = null;
if (replgoog.isDef(var_args)) {
  rest = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4711__delegate.call(this, op, rest);
};
G__4711.cljs$lang$maxFixedArity = 1;
G__4711.cljs$lang$applyTo = (function (arglist__4712){
var op = cljsrepl.core.first(arglist__4712);
var rest = cljsrepl.core.rest(arglist__4712);
return G__4711__delegate(op, rest);
});
G__4711.cljs$lang$arity$variadic = G__4711__delegate;
return G__4711;
})()
,"\uFDD0'default",hierarchy__2223__auto__,method_table__2219__auto__,prefer_table__2220__auto__,method_cache__2221__auto__,cached_hierarchy__2222__auto__));
})();
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"if")),(function (op,env,p__4713,name){
var vec__4714 = p__4713;
var _ = cljsrepl.core.nth.call(null,vec__4714,0,null);
var test = cljsrepl.core.nth.call(null,vec__4714,1,null);
var then = cljsrepl.core.nth.call(null,vec__4714,2,null);
var else$ = cljsrepl.core.nth.call(null,vec__4714,3,null);
var form = vec__4714;
var test_expr = (function (){var _STAR_recur_frames_STAR_4715 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.analyzer.analyze.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"),test);
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4715;
}})();
var then_expr = cljsrepl.analyzer.analyze.call(null,env,then);
var else_expr = cljsrepl.analyzer.analyze.call(null,env,else$);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'test","\uFDD0'then","\uFDD0'else","\uFDD0'unchecked","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'if","\uFDD0'form":form,"\uFDD0'test":test_expr,"\uFDD0'then":then_expr,"\uFDD0'else":else_expr,"\uFDD0'unchecked":cljsrepl.core.deref.call(null,cljsrepl.analyzer._STAR_unchecked_if_STAR_),"\uFDD0'children":cljsrepl.core.PersistentVector.fromArray([test_expr,then_expr,else_expr], true)});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"throw")),(function (op,env,p__4717,name){
var vec__4718 = p__4717;
var _ = cljsrepl.core.nth.call(null,vec__4718,0,null);
var throw$ = cljsrepl.core.nth.call(null,vec__4718,1,null);
var form = vec__4718;
var throw_expr = (function (){var _STAR_recur_frames_STAR_4719 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.analyzer.analyze.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"),throw$);
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4719;
}})();
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'throw","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'throw","\uFDD0'form":form,"\uFDD0'throw":throw_expr,"\uFDD0'children":cljsrepl.core.PersistentVector.fromArray([throw_expr], true)});
}));
cljsrepl.analyzer.block_children = (function block_children(p__4722){
var map__4724 = p__4722;
var map__4724__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4724))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4724):map__4724);
var block = map__4724__$1;
var ret = cljsrepl.core._lookup.call(null,map__4724__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4724__$1,"\uFDD0'statements",null);
if(cljsrepl.core.truth_(block))
{return cljsrepl.core.conj.call(null,cljsrepl.core.vec.call(null,statements),ret);
} else
{return null;
}
});
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"try*")),(function (op,env,p__4725,name){
var vec__4726 = p__4725;
var _ = cljsrepl.core.nth.call(null,vec__4726,0,null);
var body = cljsrepl.core.nthnext.call(null,vec__4726,1);
var form = vec__4726;
var body__$1 = cljsrepl.core.vec.call(null,body);
var catchenv = cljsrepl.core.update_in.call(null,env,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'context"], true),(function (p1__4721_SHARP_){
if(cljsrepl.core._EQ_.call(null,"\uFDD0'expr",p1__4721_SHARP_))
{return "\uFDD0'return";
} else
{return p1__4721_SHARP_;
}
}));
var tail = cljsrepl.core.peek.call(null,body__$1);
var fblock = (((function (){var and__3941__auto__ = cljsrepl.core.seq_QMARK_.call(null,tail);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Symbol(null,"finally")),cljsrepl.core.first.call(null,tail));
} else
{return and__3941__auto__;
}
})())?cljsrepl.core.rest.call(null,tail):null);
var finally$ = (cljsrepl.core.truth_(fblock)?cljsrepl.analyzer.analyze_block.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'statement"),fblock):null);
var body__$2 = (cljsrepl.core.truth_(finally$)?cljsrepl.core.pop.call(null,body__$1):body__$1);
var tail__$1 = cljsrepl.core.peek.call(null,body__$2);
var cblock = (((function (){var and__3941__auto__ = cljsrepl.core.seq_QMARK_.call(null,tail__$1);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Symbol(null,"catch")),cljsrepl.core.first.call(null,tail__$1));
} else
{return and__3941__auto__;
}
})())?cljsrepl.core.rest.call(null,tail__$1):null);
var name__$1 = cljsrepl.core.first.call(null,cblock);
var locals = (new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,catchenv);
var locals__$1 = (cljsrepl.core.truth_(name__$1)?cljsrepl.core.assoc.call(null,locals,name__$1,cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":name__$1})):locals);
var catch$ = (cljsrepl.core.truth_(cblock)?cljsrepl.analyzer.analyze_block.call(null,cljsrepl.core.assoc.call(null,catchenv,"\uFDD0'locals",locals__$1),cljsrepl.core.rest.call(null,cblock)):null);
var body__$3 = (cljsrepl.core.truth_(name__$1)?cljsrepl.core.pop.call(null,body__$2):body__$2);
var try$ = (cljsrepl.core.truth_(body__$3)?cljsrepl.analyzer.analyze_block.call(null,(cljsrepl.core.truth_((function (){var or__3943__auto__ = name__$1;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return finally$;
}
})())?catchenv:env),body__$3):null);
if(cljsrepl.core.truth_(name__$1))
{if(cljsrepl.core.not.call(null,cljsrepl.core.namespace.call(null,name__$1)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Can't qualify symbol in catch"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"namespace")),(new cljsrepl.core.Symbol(null,"name"))),cljsrepl.core.hash_map("\uFDD0'line",277,"\uFDD0'column",29))),cljsrepl.core.hash_map("\uFDD0'line",277,"\uFDD0'column",24))))].join('')));
}
} else
{}
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'try","\uFDD0'finally","\uFDD0'name","\uFDD0'catch","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'try*","\uFDD0'form":form,"\uFDD0'try":try$,"\uFDD0'finally":finally$,"\uFDD0'name":name__$1,"\uFDD0'catch":catch$,"\uFDD0'children":cljsrepl.core.vec.call(null,cljsrepl.core.mapcat.call(null,cljsrepl.analyzer.block_children,cljsrepl.core.PersistentVector.fromArray([try$,catch$,finally$], true)))});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"def")),(function (op,env,form,name){
var pfn = (function() {
var G__4729 = null;
var G__4729__2 = (function (_,sym){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'sym"],{"\uFDD0'sym":sym});
});
var G__4729__3 = (function (_,sym,init){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'sym","\uFDD0'init"],{"\uFDD0'sym":sym,"\uFDD0'init":init});
});
var G__4729__4 = (function (_,sym,doc,init){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'sym","\uFDD0'doc","\uFDD0'init"],{"\uFDD0'sym":sym,"\uFDD0'doc":doc,"\uFDD0'init":init});
});
G__4729 = function(_,sym,doc,init){
switch(arguments.length){
case 2:
return G__4729__2.call(this,_,sym);
case 3:
return G__4729__3.call(this,_,sym,doc);
case 4:
return G__4729__4.call(this,_,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__4729;
})()
;
var args = cljsrepl.core.apply.call(null,pfn,form);
var sym = (new cljsrepl.core.Keyword("\uFDD0'sym")).call(null,args);
var sym_meta = cljsrepl.core.meta.call(null,sym);
var tag = (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,sym));
var protocol = (new cljsrepl.core.Keyword("\uFDD0'protocol")).call(null,cljsrepl.core.meta.call(null,sym));
var dynamic = (new cljsrepl.core.Keyword("\uFDD0'dynamic")).call(null,cljsrepl.core.meta.call(null,sym));
var ns_name = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env));
if(cljsrepl.core.not.call(null,cljsrepl.core.namespace.call(null,sym)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Can't def ns-qualified name"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"namespace")),(new cljsrepl.core.Symbol(null,"sym"))),cljsrepl.core.hash_map("\uFDD0'line",299,"\uFDD0'column",18))),cljsrepl.core.hash_map("\uFDD0'line",299,"\uFDD0'column",13))))].join('')));
}
var env__$1 = (cljsrepl.core.truth_((function (){var or__3943__auto__ = (function (){var and__3941__auto__ = cljsrepl.core.not_EQ_.call(null,ns_name,(new cljsrepl.core.Symbol(null,"cljsrepl.core")));
if(and__3941__auto__)
{return cljsrepl.analyzer.core_name_QMARK_.call(null,env,sym);
} else
{return and__3941__auto__;
}
})();
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([ns_name,"\uFDD0'uses",sym], true));
}
})())?(function (){var ev = cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.core.dissoc.call(null,env,"\uFDD0'locals"),sym);
if(cljsrepl.core.truth_(cljsrepl.analyzer._STAR_cljs_warn_on_redef_STAR_))
{cljsrepl.analyzer.warning.call(null,env,[cljsrepl.core.str("WARNING: "),cljsrepl.core.str(sym),cljsrepl.core.str(" already refers to: "),cljsrepl.core.str(cljsrepl.core.symbol.call(null,[cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,ev))].join(''),[cljsrepl.core.str(sym)].join(''))),cljsrepl.core.str(" being replaced by: "),cljsrepl.core.str(cljsrepl.core.symbol.call(null,[cljsrepl.core.str(ns_name)].join(''),[cljsrepl.core.str(sym)].join('')))].join(''));
} else
{}
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([ns_name,"\uFDD0'excludes"], true),cljsrepl.core.conj,sym);
return cljsrepl.core.update_in.call(null,env,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'ns","\uFDD0'excludes"], true),cljsrepl.core.conj,sym);
})():env);
var name__$1 = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,env__$1,"\uFDD0'locals"),sym));
var init_expr = ((cljsrepl.core.contains_QMARK_.call(null,args,"\uFDD0'init"))?(function (){var _STAR_recur_frames_STAR_4727 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.analyzer.analyze.call(null,cljsrepl.core.assoc.call(null,env__$1,"\uFDD0'context","\uFDD0'expr"),(new cljsrepl.core.Keyword("\uFDD0'init")).call(null,args),sym);
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4727;
}})():null);
var fn_var_QMARK_ = (function (){var and__3941__auto__ = init_expr;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,init_expr),"\uFDD0'fn");
} else
{return and__3941__auto__;
}
})();
var export_as = (function (){var temp__4092__auto__ = (new cljsrepl.core.Keyword("\uFDD0'export")).call(null,cljsrepl.core.meta.call(null,sym));
if(cljsrepl.core.truth_(temp__4092__auto__))
{var export_val = temp__4092__auto__;
if(cljsrepl.core._EQ_.call(null,true,export_val))
{return name__$1;
} else
{return export_val;
}
} else
{return null;
}
})();
var doc = (function (){var or__3943__auto__ = (new cljsrepl.core.Keyword("\uFDD0'doc")).call(null,args);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new cljsrepl.core.Keyword("\uFDD0'doc")).call(null,cljsrepl.core.meta.call(null,sym));
}
})();
var temp__4092__auto___4730 = cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([ns_name,"\uFDD0'defs",sym], true));
if(cljsrepl.core.truth_(temp__4092__auto___4730))
{var v_4731 = temp__4092__auto___4730;
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_warn_on_fn_var_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljsrepl.core.not.call(null,(new cljsrepl.core.Keyword("\uFDD0'declared")).call(null,cljsrepl.core.meta.call(null,sym)));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (new cljsrepl.core.Keyword("\uFDD0'fn-var")).call(null,v_4731);
if(cljsrepl.core.truth_(and__3941__auto____$2))
{return cljsrepl.core.not.call(null,fn_var_QMARK_);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.analyzer.warning.call(null,env__$1,[cljsrepl.core.str("WARNING: "),cljsrepl.core.str(cljsrepl.core.symbol.call(null,[cljsrepl.core.str(ns_name)].join(''),[cljsrepl.core.str(sym)].join(''))),cljsrepl.core.str(" no longer fn, references are stale")].join(''));
} else
{}
} else
{}
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.assoc_in,cljsrepl.core.PersistentVector.fromArray([ns_name,"\uFDD0'defs",sym], true),cljsrepl.core.merge.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":name__$1}),sym_meta,(cljsrepl.core.truth_(doc)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'doc"],{"\uFDD0'doc":doc}):null),(cljsrepl.core.truth_(dynamic)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'dynamic"],{"\uFDD0'dynamic":true}):null),(function (){var temp__4092__auto__ = (new cljsrepl.core.Keyword("\uFDD0'line")).call(null,env__$1);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'file","\uFDD0'line"],{"\uFDD0'file":cljsrepl.analyzer._STAR_cljs_file_STAR_,"\uFDD0'line":line});
} else
{return null;
}
})(),(cljsrepl.core.truth_(protocol)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'protocol"],{"\uFDD0'protocol":protocol}):null),(function (){var temp__4092__auto__ = (new cljsrepl.core.Keyword("\uFDD0'protocol-symbol")).call(null,cljsrepl.core.meta.call(null,sym));
if(cljsrepl.core.truth_(temp__4092__auto__))
{var protocol_symbol = temp__4092__auto__;
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'protocol-symbol"],{"\uFDD0'protocol-symbol":protocol_symbol});
} else
{return null;
}
})(),(cljsrepl.core.truth_(fn_var_QMARK_)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'fn-var","\uFDD0'protocol-impl","\uFDD0'protocol-inline","\uFDD0'variadic","\uFDD0'max-fixed-arity","\uFDD0'method-params"],{"\uFDD0'fn-var":true,"\uFDD0'protocol-impl":(new cljsrepl.core.Keyword("\uFDD0'protocol-impl")).call(null,init_expr),"\uFDD0'protocol-inline":(new cljsrepl.core.Keyword("\uFDD0'protocol-inline")).call(null,init_expr),"\uFDD0'variadic":(new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,init_expr),"\uFDD0'max-fixed-arity":(new cljsrepl.core.Keyword("\uFDD0'max-fixed-arity")).call(null,init_expr),"\uFDD0'method-params":cljsrepl.core.map.call(null,"\uFDD0'params",(new cljsrepl.core.Keyword("\uFDD0'methods")).call(null,init_expr))}):null)));
return cljsrepl.core.merge.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'name","\uFDD0'doc","\uFDD0'init"],{"\uFDD0'env":env__$1,"\uFDD0'op":"\uFDD0'def","\uFDD0'form":form,"\uFDD0'name":name__$1,"\uFDD0'doc":doc,"\uFDD0'init":init_expr}),(cljsrepl.core.truth_(tag)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":tag}):null),(cljsrepl.core.truth_(dynamic)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'dynamic"],{"\uFDD0'dynamic":true}):null),(cljsrepl.core.truth_(export_as)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'export"],{"\uFDD0'export":export_as}):null),(cljsrepl.core.truth_(init_expr)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":cljsrepl.core.PersistentVector.fromArray([init_expr], true)}):null));
}));
cljsrepl.analyzer.analyze_fn_method = (function analyze_fn_method(env,locals,form,type){
var param_names = cljsrepl.core.first.call(null,form);
var variadic = cljsrepl.core.boolean$.call(null,cljsrepl.core.some.call(null,cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"&"))]),param_names));
var param_names__$1 = cljsrepl.core.vec.call(null,cljsrepl.core.remove.call(null,cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"&"))]),param_names));
var body = cljsrepl.core.next.call(null,form);
var vec__4739 = cljsrepl.core.reduce.call(null,(function (p__4740,name){
var vec__4741 = p__4740;
var locals__$1 = cljsrepl.core.nth.call(null,vec__4741,0,null);
var params = cljsrepl.core.nth.call(null,vec__4741,1,null);
var param = cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'tag","\uFDD0'shadow"],{"\uFDD0'name":name,"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,name)),"\uFDD0'shadow":locals__$1.call(null,name)});
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.assoc.call(null,locals__$1,name,param),cljsrepl.core.conj.call(null,params,param)], true);
}),cljsrepl.core.PersistentVector.fromArray([locals,cljsrepl.core.PersistentVector.EMPTY], true),param_names__$1);
var locals__$1 = cljsrepl.core.nth.call(null,vec__4739,0,null);
var params = cljsrepl.core.nth.call(null,vec__4739,1,null);
var fixed_arity = cljsrepl.core.count.call(null,((variadic)?cljsrepl.core.butlast.call(null,params):params));
var recur_frame = cljsrepl.core.ObjMap.fromObject(["\uFDD0'params","\uFDD0'flag"],{"\uFDD0'params":params,"\uFDD0'flag":cljsrepl.core.atom.call(null,null)});
var block = (function (){var _STAR_recur_frames_STAR_4742 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,recur_frame,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.analyzer.analyze_block.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'return","\uFDD0'locals",locals__$1),body);
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4742;
}})();
return cljsrepl.core.merge.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'variadic","\uFDD0'params","\uFDD0'max-fixed-arity","\uFDD0'type","\uFDD0'form","\uFDD0'recurs"],{"\uFDD0'env":env,"\uFDD0'variadic":variadic,"\uFDD0'params":params,"\uFDD0'max-fixed-arity":fixed_arity,"\uFDD0'type":type,"\uFDD0'form":form,"\uFDD0'recurs":cljsrepl.core.deref.call(null,(new cljsrepl.core.Keyword("\uFDD0'flag")).call(null,recur_frame))}),block);
});
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"fn*")),(function (op,env,p__4744,name){
var vec__4745 = p__4744;
var _ = cljsrepl.core.nth.call(null,vec__4745,0,null);
var args = cljsrepl.core.nthnext.call(null,vec__4745,1);
var form = vec__4745;
var vec__4746 = ((cljsrepl.core.symbol_QMARK_.call(null,cljsrepl.core.first.call(null,args)))?cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.first.call(null,args),cljsrepl.core.next.call(null,args)], true):cljsrepl.core.PersistentVector.fromArray([name,cljsrepl.core.seq.call(null,args)], true));
var name__$1 = cljsrepl.core.nth.call(null,vec__4746,0,null);
var meths = cljsrepl.core.nth.call(null,vec__4746,1,null);
var meths__$1 = ((cljsrepl.core.vector_QMARK_.call(null,cljsrepl.core.first.call(null,meths)))?cljsrepl.core.list.call(null,meths):meths);
var locals = (new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env);
var locals__$1 = (cljsrepl.core.truth_(name__$1)?cljsrepl.core.assoc.call(null,locals,name__$1,cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'shadow"],{"\uFDD0'name":name__$1,"\uFDD0'shadow":locals.call(null,name__$1)})):locals);
var type = (new cljsrepl.core.Keyword("\uFDD0'cljsrepl.analyzer/type")).call(null,cljsrepl.core.meta.call(null,form));
var fields = (new cljsrepl.core.Keyword("\uFDD0'cljsrepl.analyzer/fields")).call(null,cljsrepl.core.meta.call(null,form));
var protocol_impl = (new cljsrepl.core.Keyword("\uFDD0'protocol-impl")).call(null,cljsrepl.core.meta.call(null,form));
var protocol_inline = (new cljsrepl.core.Keyword("\uFDD0'protocol-inline")).call(null,cljsrepl.core.meta.call(null,form));
var locals__$2 = cljsrepl.core.reduce.call(null,(function (m,fld){
return cljsrepl.core.assoc.call(null,m,fld,cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'field","\uFDD0'mutable","\uFDD0'tag","\uFDD0'shadow"],{"\uFDD0'name":fld,"\uFDD0'field":true,"\uFDD0'mutable":(new cljsrepl.core.Keyword("\uFDD0'mutable")).call(null,cljsrepl.core.meta.call(null,fld)),"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,fld)),"\uFDD0'shadow":m.call(null,fld)}));
}),locals__$1,fields);
var menv = (((cljsrepl.core.count.call(null,meths__$1) > 1))?cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"):env);
var menv__$1 = cljsrepl.core.merge.call(null,menv,cljsrepl.core.ObjMap.fromObject(["\uFDD0'protocol-impl","\uFDD0'protocol-inline"],{"\uFDD0'protocol-impl":protocol_impl,"\uFDD0'protocol-inline":protocol_inline}));
var methods$ = cljsrepl.core.map.call(null,(function (p1__4732_SHARP_){
return cljsrepl.analyzer.analyze_fn_method.call(null,menv__$1,locals__$2,p1__4732_SHARP_,type);
}),meths__$1);
var max_fixed_arity = cljsrepl.core.apply.call(null,cljsrepl.core.max,cljsrepl.core.map.call(null,"\uFDD0'max-fixed-arity",methods$));
var variadic = cljsrepl.core.boolean$.call(null,cljsrepl.core.some.call(null,"\uFDD0'variadic",methods$));
var locals__$3 = (cljsrepl.core.truth_(name__$1)?cljsrepl.core.update_in.call(null,locals__$2,cljsrepl.core.PersistentVector.fromArray([name__$1], true),cljsrepl.core.assoc,"\uFDD0'fn-var",true,"\uFDD0'variadic",variadic,"\uFDD0'max-fixed-arity",max_fixed_arity,"\uFDD0'method-params",cljsrepl.core.map.call(null,"\uFDD0'params",methods$)):locals__$2);
var methods$__$1 = (cljsrepl.core.truth_(name__$1)?cljsrepl.core.map.call(null,(function (p1__4733_SHARP_){
return cljsrepl.analyzer.analyze_fn_method.call(null,menv__$1,locals__$3,p1__4733_SHARP_,type);
}),meths__$1):methods$);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'children","\uFDD0'loop-lets","\uFDD0'recur-frames","\uFDD0'form","\uFDD0'op","\uFDD0'name","\uFDD0'protocol-impl","\uFDD0'max-fixed-arity","\uFDD0'methods","\uFDD0'env","\uFDD0'protocol-inline","\uFDD0'variadic","\uFDD0'jsdoc"],{"\uFDD0'children":cljsrepl.core.vec.call(null,cljsrepl.core.mapcat.call(null,cljsrepl.analyzer.block_children,methods$__$1)),"\uFDD0'loop-lets":cljsrepl.analyzer._STAR_loop_lets_STAR_,"\uFDD0'recur-frames":cljsrepl.analyzer._STAR_recur_frames_STAR_,"\uFDD0'form":form,"\uFDD0'op":"\uFDD0'fn","\uFDD0'name":name__$1,"\uFDD0'protocol-impl":protocol_impl,"\uFDD0'max-fixed-arity":max_fixed_arity,"\uFDD0'methods":methods$__$1,"\uFDD0'env":env,"\uFDD0'protocol-inline":protocol_inline,"\uFDD0'variadic":variadic,"\uFDD0'jsdoc":cljsrepl.core.PersistentVector.fromArray([((variadic)?"@param {...*} var_args":null)], true)});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"letfn*")),(function (op,env,p__4747,name){
var vec__4748 = p__4747;
var _ = cljsrepl.core.nth.call(null,vec__4748,0,null);
var bindings = cljsrepl.core.nth.call(null,vec__4748,1,null);
var exprs = cljsrepl.core.nthnext.call(null,vec__4748,2);
var form = vec__4748;
if((function (){var and__3941__auto__ = cljsrepl.core.vector_QMARK_.call(null,bindings);
if(and__3941__auto__)
{return cljsrepl.core.even_QMARK_.call(null,cljsrepl.core.count.call(null,bindings));
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("bindings must be vector of even number of elements"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"vector?")),(new cljsrepl.core.Symbol(null,"bindings"))),cljsrepl.core.hash_map("\uFDD0'line",428,"\uFDD0'column",16)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"even?")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"count")),(new cljsrepl.core.Symbol(null,"bindings"))),cljsrepl.core.hash_map("\uFDD0'line",428,"\uFDD0'column",42))),cljsrepl.core.hash_map("\uFDD0'line",428,"\uFDD0'column",35))),cljsrepl.core.hash_map("\uFDD0'line",428,"\uFDD0'column",11))))].join('')));
}
var n__GT_fexpr = cljsrepl.core.into.call(null,cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.map.call(null,cljsrepl.core.juxt.call(null,cljsrepl.core.first,cljsrepl.core.second),cljsrepl.core.partition.call(null,2,bindings)));
var names = cljsrepl.core.keys.call(null,n__GT_fexpr);
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
var vec__4749 = cljsrepl.core.reduce.call(null,(function (p__4751,n){
var vec__4752 = p__4751;
var map__4753 = cljsrepl.core.nth.call(null,vec__4752,0,null);
var map__4753__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4753))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4753):map__4753);
var env__$1 = map__4753__$1;
var locals = cljsrepl.core._lookup.call(null,map__4753__$1,"\uFDD0'locals",null);
var bes = cljsrepl.core.nth.call(null,vec__4752,1,null);
var be = cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'tag","\uFDD0'local","\uFDD0'shadow"],{"\uFDD0'name":n,"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,n)),"\uFDD0'local":true,"\uFDD0'shadow":locals.call(null,n)});
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.assoc_in.call(null,env__$1,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'locals",n], true),be),cljsrepl.core.conj.call(null,bes,be)], true);
}),cljsrepl.core.PersistentVector.fromArray([env,cljsrepl.core.PersistentVector.EMPTY], true),names);
var meth_env = cljsrepl.core.nth.call(null,vec__4749,0,null);
var bes = cljsrepl.core.nth.call(null,vec__4749,1,null);
var meth_env__$1 = cljsrepl.core.assoc.call(null,meth_env,"\uFDD0'context","\uFDD0'expr");
var bes__$1 = cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p__4754){
var map__4755 = p__4754;
var map__4755__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4755))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4755):map__4755);
var be = map__4755__$1;
var shadow = cljsrepl.core._lookup.call(null,map__4755__$1,"\uFDD0'shadow",null);
var name__$1 = cljsrepl.core._lookup.call(null,map__4755__$1,"\uFDD0'name",null);
var env__$1 = cljsrepl.core.assoc_in.call(null,meth_env__$1,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'locals",name__$1], true),shadow);
return cljsrepl.core.assoc.call(null,be,"\uFDD0'init",cljsrepl.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1)));
}),bes));
var map__4750 = cljsrepl.analyzer.analyze_block.call(null,cljsrepl.core.assoc.call(null,meth_env__$1,"\uFDD0'context",((cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context)),exprs);
var map__4750__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4750))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4750):map__4750);
var ret = cljsrepl.core._lookup.call(null,map__4750__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4750__$1,"\uFDD0'statements",null);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'bindings","\uFDD0'statements","\uFDD0'ret","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'letfn","\uFDD0'bindings":bes__$1,"\uFDD0'statements":statements,"\uFDD0'ret":ret,"\uFDD0'form":form,"\uFDD0'children":cljsrepl.core.into.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,"\uFDD0'init",bes__$1)),cljsrepl.core.conj.call(null,cljsrepl.core.vec.call(null,statements),ret))});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"do")),(function (op,env,p__4756,_){
var vec__4757 = p__4756;
var ___$1 = cljsrepl.core.nth.call(null,vec__4757,0,null);
var exprs = cljsrepl.core.nthnext.call(null,vec__4757,1);
var form = vec__4757;
var block = cljsrepl.analyzer.analyze_block.call(null,env,exprs);
return cljsrepl.core.merge.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'do","\uFDD0'form":form,"\uFDD0'children":cljsrepl.analyzer.block_children.call(null,block)}),block);
}));
cljsrepl.analyzer.analyze_let = (function analyze_let(encl_env,p__4758,is_loop){
var vec__4768 = p__4758;
var _ = cljsrepl.core.nth.call(null,vec__4768,0,null);
var bindings = cljsrepl.core.nth.call(null,vec__4768,1,null);
var exprs = cljsrepl.core.nthnext.call(null,vec__4768,2);
var form = vec__4768;
if((function (){var and__3941__auto__ = cljsrepl.core.vector_QMARK_.call(null,bindings);
if(and__3941__auto__)
{return cljsrepl.core.even_QMARK_.call(null,cljsrepl.core.count.call(null,bindings));
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("bindings must be vector of even number of elements"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"vector?")),(new cljsrepl.core.Symbol(null,"bindings"))),cljsrepl.core.hash_map("\uFDD0'line",459,"\uFDD0'column",16)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"even?")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"count")),(new cljsrepl.core.Symbol(null,"bindings"))),cljsrepl.core.hash_map("\uFDD0'line",459,"\uFDD0'column",42))),cljsrepl.core.hash_map("\uFDD0'line",459,"\uFDD0'column",35))),cljsrepl.core.hash_map("\uFDD0'line",459,"\uFDD0'column",11))))].join('')));
}
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,encl_env);
var vec__4769 = (function (){var _STAR_recur_frames_STAR_4771 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var bes = cljsrepl.core.PersistentVector.EMPTY;
var env = cljsrepl.core.assoc.call(null,encl_env,"\uFDD0'context","\uFDD0'expr");
var bindings__$1 = cljsrepl.core.seq.call(null,cljsrepl.core.partition.call(null,2,bindings));
while(true){
var temp__4090__auto__ = cljsrepl.core.first.call(null,bindings__$1);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var vec__4773 = temp__4090__auto__;
var name = cljsrepl.core.nth.call(null,vec__4773,0,null);
var init = cljsrepl.core.nth.call(null,vec__4773,1,null);
if(cljsrepl.core.not.call(null,(function (){var or__3943__auto__ = cljsrepl.core.namespace.call(null,name);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return ([cljsrepl.core.str(name)].join('').indexOf(".") >= 0);
}
})()))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str([cljsrepl.core.str("Invalid local name: "),cljsrepl.core.str(name)].join('')),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"or")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"namespace")),(new cljsrepl.core.Symbol(null,"name"))),cljsrepl.core.hash_map("\uFDD0'line",468,"\uFDD0'column",33)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,">=")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,".indexOf")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"str")),(new cljsrepl.core.Symbol(null,"name"))),cljsrepl.core.hash_map("\uFDD0'line",468,"\uFDD0'column",64)),"."),cljsrepl.core.hash_map("\uFDD0'line",468,"\uFDD0'column",54)),0),cljsrepl.core.hash_map("\uFDD0'line",468,"\uFDD0'column",50))),cljsrepl.core.hash_map("\uFDD0'line",468,"\uFDD0'column",29))),cljsrepl.core.hash_map("\uFDD0'line",468,"\uFDD0'column",24))))].join('')));
}
var init_expr = cljsrepl.analyzer.analyze.call(null,env,init);
var be = cljsrepl.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'init","\uFDD0'tag","\uFDD0'local","\uFDD0'shadow"],{"\uFDD0'name":name,"\uFDD0'init":init_expr,"\uFDD0'tag":(function (){var or__3943__auto__ = (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,name));
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,init_expr);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,(new cljsrepl.core.Keyword("\uFDD0'info")).call(null,init_expr));
}
}
})(),"\uFDD0'local":true,"\uFDD0'shadow":name.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env))});
var be__$1 = ((cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Keyword("\uFDD0'op")).call(null,init_expr),"\uFDD0'fn"))?cljsrepl.core.merge.call(null,be,cljsrepl.core.ObjMap.fromObject(["\uFDD0'fn-var","\uFDD0'variadic","\uFDD0'max-fixed-arity","\uFDD0'method-params"],{"\uFDD0'fn-var":true,"\uFDD0'variadic":(new cljsrepl.core.Keyword("\uFDD0'variadic")).call(null,init_expr),"\uFDD0'max-fixed-arity":(new cljsrepl.core.Keyword("\uFDD0'max-fixed-arity")).call(null,init_expr),"\uFDD0'method-params":cljsrepl.core.map.call(null,"\uFDD0'params",(new cljsrepl.core.Keyword("\uFDD0'methods")).call(null,init_expr))})):be);
{
var G__4777 = cljsrepl.core.conj.call(null,bes,be__$1);
var G__4778 = cljsrepl.core.assoc_in.call(null,env,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'locals",name], true),be__$1);
var G__4779 = cljsrepl.core.next.call(null,bindings__$1);
bes = G__4777;
env = G__4778;
bindings__$1 = G__4779;
continue;
}
} else
{return cljsrepl.core.PersistentVector.fromArray([bes,env], true);
}
break;
}
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4771;
}})();
var bes = cljsrepl.core.nth.call(null,vec__4769,0,null);
var env = cljsrepl.core.nth.call(null,vec__4769,1,null);
var recur_frame = (cljsrepl.core.truth_(is_loop)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'params","\uFDD0'flag"],{"\uFDD0'params":bes,"\uFDD0'flag":cljsrepl.core.atom.call(null,null)}):null);
var map__4770 = (function (){var _STAR_recur_frames_STAR_4774 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_4775 = cljsrepl.analyzer._STAR_loop_lets_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = (cljsrepl.core.truth_(recur_frame)?cljsrepl.core.cons.call(null,recur_frame,cljsrepl.analyzer._STAR_recur_frames_STAR_):cljsrepl.analyzer._STAR_recur_frames_STAR_);
cljsrepl.analyzer._STAR_loop_lets_STAR_ = (cljsrepl.core.truth_(is_loop)?(function (){var or__3943__auto__ = cljsrepl.analyzer._STAR_loop_lets_STAR_;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.List.EMPTY;
}
})():(cljsrepl.core.truth_(cljsrepl.analyzer._STAR_loop_lets_STAR_)?cljsrepl.core.cons.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'params"],{"\uFDD0'params":bes}),cljsrepl.analyzer._STAR_loop_lets_STAR_):null));
return cljsrepl.analyzer.analyze_block.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context",((cljsrepl.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context)),exprs);
}finally {cljsrepl.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_4775;
cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4774;
}})();
var map__4770__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4770))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4770):map__4770);
var ret = cljsrepl.core._lookup.call(null,map__4770__$1,"\uFDD0'ret",null);
var statements = cljsrepl.core._lookup.call(null,map__4770__$1,"\uFDD0'statements",null);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'loop","\uFDD0'bindings","\uFDD0'statements","\uFDD0'ret","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":encl_env,"\uFDD0'op":"\uFDD0'let","\uFDD0'loop":is_loop,"\uFDD0'bindings":bes,"\uFDD0'statements":statements,"\uFDD0'ret":ret,"\uFDD0'form":form,"\uFDD0'children":cljsrepl.core.into.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,"\uFDD0'init",bes)),cljsrepl.core.conj.call(null,cljsrepl.core.vec.call(null,statements),ret))});
});
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"let*")),(function (op,encl_env,form,_){
return cljsrepl.analyzer.analyze_let.call(null,encl_env,form,false);
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"loop*")),(function (op,encl_env,form,_){
return cljsrepl.analyzer.analyze_let.call(null,encl_env,form,true);
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"recur")),(function (op,env,p__4781,_){
var vec__4782 = p__4781;
var ___$1 = cljsrepl.core.nth.call(null,vec__4782,0,null);
var exprs = cljsrepl.core.nthnext.call(null,vec__4782,1);
var form = vec__4782;
var context = (new cljsrepl.core.Keyword("\uFDD0'context")).call(null,env);
var frame = cljsrepl.core.first.call(null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_4783 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4780_SHARP_){
return cljsrepl.analyzer.analyze.call(null,cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"),p1__4780_SHARP_);
}),exprs));
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4783;
}})();
if(cljsrepl.core.truth_(frame))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Can't recur here"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,(new cljsrepl.core.Symbol(null,"frame"))))].join('')));
}
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.count.call(null,exprs__$1),cljsrepl.core.count.call(null,(new cljsrepl.core.Keyword("\uFDD0'params")).call(null,frame))))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("recur argument count mismatch"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"=")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"count")),(new cljsrepl.core.Symbol(null,"exprs"))),cljsrepl.core.hash_map("\uFDD0'line",514,"\uFDD0'column",16)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"count")),cljsrepl.core.with_meta(cljsrepl.core.list("\uFDD0'params",(new cljsrepl.core.Symbol(null,"frame"))),cljsrepl.core.hash_map("\uFDD0'line",514,"\uFDD0'column",37))),cljsrepl.core.hash_map("\uFDD0'line",514,"\uFDD0'column",30))),cljsrepl.core.hash_map("\uFDD0'line",514,"\uFDD0'column",13))))].join('')));
}
cljsrepl.core.reset_BANG_.call(null,(new cljsrepl.core.Keyword("\uFDD0'flag")).call(null,frame),true);
return cljsrepl.core.assoc.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'recur","\uFDD0'form":form}),"\uFDD0'frame",frame,"\uFDD0'exprs",exprs__$1,"\uFDD0'children",exprs__$1);
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"quote")),(function (_,env,p__4786,___$1){
var vec__4787 = p__4786;
var ___$2 = cljsrepl.core.nth.call(null,vec__4787,0,null);
var x = cljsrepl.core.nth.call(null,vec__4787,1,null);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form"],{"\uFDD0'op":"\uFDD0'constant","\uFDD0'env":env,"\uFDD0'form":x});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"new")),(function (_,env,p__4788,___$1){
var vec__4789 = p__4788;
var ___$2 = cljsrepl.core.nth.call(null,vec__4789,0,null);
var ctor = cljsrepl.core.nth.call(null,vec__4789,1,null);
var args = cljsrepl.core.nthnext.call(null,vec__4789,2);
var form = vec__4789;
if(cljsrepl.core.symbol_QMARK_.call(null,ctor))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("First arg to new must be a symbol"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"ctor"))),cljsrepl.core.hash_map("\uFDD0'line",527,"\uFDD0'column",11))))].join('')));
}
var _STAR_recur_frames_STAR_4790 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var enve = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var ctorexpr = cljsrepl.analyzer.analyze.call(null,enve,ctor);
var argexprs = cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4785_SHARP_){
return cljsrepl.analyzer.analyze.call(null,enve,p1__4785_SHARP_);
}),args));
var known_num_fields = (new cljsrepl.core.Keyword("\uFDD0'num-fields")).call(null,cljsrepl.analyzer.resolve_existing_var.call(null,env,ctor));
var argc = cljsrepl.core.count.call(null,args);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = known_num_fields;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.not_EQ_.call(null,known_num_fields,argc);
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.analyzer.warning.call(null,env,[cljsrepl.core.str("WARNING: Wrong number of args ("),cljsrepl.core.str(argc),cljsrepl.core.str(") passed to "),cljsrepl.core.str(ctor)].join(''));
} else
{}
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'ctor","\uFDD0'args","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'new","\uFDD0'form":form,"\uFDD0'ctor":ctorexpr,"\uFDD0'args":argexprs,"\uFDD0'children":cljsrepl.core.into.call(null,cljsrepl.core.PersistentVector.fromArray([ctorexpr], true),argexprs)});
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4790;
}}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"set!")),(function (_,env,p__4792,___$1){
var vec__4793 = p__4792;
var ___$2 = cljsrepl.core.nth.call(null,vec__4793,0,null);
var target = cljsrepl.core.nth.call(null,vec__4793,1,null);
var val = cljsrepl.core.nth.call(null,vec__4793,2,null);
var alt = cljsrepl.core.nth.call(null,vec__4793,3,null);
var form = vec__4793;
var vec__4794 = (cljsrepl.core.truth_(alt)?cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,target),cljsrepl.core.list.call(null,val))),alt], true):cljsrepl.core.PersistentVector.fromArray([target,val], true));
var target__$1 = cljsrepl.core.nth.call(null,vec__4794,0,null);
var val__$1 = cljsrepl.core.nth.call(null,vec__4794,1,null);
var _STAR_recur_frames_STAR_4795 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var enve = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var targetexpr = ((cljsrepl.core._EQ_.call(null,target__$1,(new cljsrepl.core.Symbol(null,"*unchecked-if*"))))?(function (){cljsrepl.core.reset_BANG_.call(null,cljsrepl.analyzer._STAR_unchecked_if_STAR_,val__$1);
return "\uFDD0'cljsrepl.analyzer/set-unchecked-if";
})():((cljsrepl.core.symbol_QMARK_.call(null,target__$1))?(function (){var local_4797 = target__$1.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_((function (){var or__3943__auto__ = (local_4797 == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto__ = (new cljsrepl.core.Keyword("\uFDD0'field")).call(null,local_4797);
if(cljsrepl.core.truth_(and__3941__auto__))
{return (new cljsrepl.core.Keyword("\uFDD0'mutable")).call(null,local_4797);
} else
{return and__3941__auto__;
}
}
})()))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Can't set! local var or non-mutable field"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"or")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"nil?")),(new cljsrepl.core.Symbol(null,"local"))),cljsrepl.core.hash_map("\uFDD0'line",559,"\uFDD0'column",40)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list("\uFDD0'field",(new cljsrepl.core.Symbol(null,"local"))),cljsrepl.core.hash_map("\uFDD0'line",560,"\uFDD0'column",45)),cljsrepl.core.with_meta(cljsrepl.core.list("\uFDD0'mutable",(new cljsrepl.core.Symbol(null,"local"))),cljsrepl.core.hash_map("\uFDD0'line",561,"\uFDD0'column",45))),cljsrepl.core.hash_map("\uFDD0'line",560,"\uFDD0'column",40))),cljsrepl.core.hash_map("\uFDD0'line",559,"\uFDD0'column",36))))].join('')));
}
return cljsrepl.analyzer.analyze_symbol.call(null,enve,target__$1);
})():(("\uFDD0'else")?((cljsrepl.core.seq_QMARK_.call(null,target__$1))?(function (){var targetexpr = cljsrepl.analyzer.analyze_seq.call(null,enve,target__$1,null);
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'field")).call(null,targetexpr)))
{return targetexpr;
} else
{return null;
}
})():null):null)));
var valexpr = cljsrepl.analyzer.analyze.call(null,enve,val__$1);
if(cljsrepl.core.truth_(targetexpr))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("set! target must be a field or a symbol naming a var"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,(new cljsrepl.core.Symbol(null,"targetexpr"))))].join('')));
}
if(cljsrepl.core._EQ_.call(null,targetexpr,"\uFDD0'cljsrepl.analyzer/set-unchecked-if"))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'no-op"});
} else
{if("\uFDD0'else")
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'target","\uFDD0'val","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'set!","\uFDD0'form":form,"\uFDD0'target":targetexpr,"\uFDD0'val":valexpr,"\uFDD0'children":cljsrepl.core.PersistentVector.fromArray([targetexpr,valexpr], true)});
} else
{return null;
}
}
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4795;
}}));
cljsrepl.analyzer.munge_path = (function munge_path(ss){
return replclojure.lang.Compiler.munge.call(null,[cljsrepl.core.str(ss)].join(''));
});
cljsrepl.analyzer.ns__GT_relpath = (function ns__GT_relpath(s){
return [cljsrepl.core.str(replclojure.string.replace.call(null,cljsrepl.analyzer.munge_path.call(null,s),".","/")),cljsrepl.core.str(".cljs")].join('');
});
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"ns")),(function (_,env,p__4799,___$1){
var vec__4800 = p__4799;
var ___$2 = cljsrepl.core.nth.call(null,vec__4800,0,null);
var name = cljsrepl.core.nth.call(null,vec__4800,1,null);
var args = cljsrepl.core.nthnext.call(null,vec__4800,2);
var form = vec__4800;
var docstring = ((cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,args)))?cljsrepl.core.first.call(null,args):null);
var args__$1 = (cljsrepl.core.truth_(docstring)?cljsrepl.core.next.call(null,args):args);
var excludes = cljsrepl.core.reduce.call(null,(function (s,p__4802){
var vec__4803 = p__4802;
var k = cljsrepl.core.nth.call(null,vec__4803,0,null);
var exclude = cljsrepl.core.nth.call(null,vec__4803,1,null);
var xs = cljsrepl.core.nth.call(null,vec__4803,2,null);
if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'refer-clojure"))
{if(cljsrepl.core._EQ_.call(null,exclude,"\uFDD0'exclude"))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Only [:refer-clojure :exclude (names)] form supported"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"=")),(new cljsrepl.core.Symbol(null,"exclude")),"\uFDD0'exclude"),cljsrepl.core.hash_map("\uFDD0'line",600,"\uFDD0'column",31))))].join('')));
}
if(cljsrepl.core.not.call(null,cljsrepl.core.seq.call(null,s)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Only one :refer-clojure form is allowed per namespace definition"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"seq")),(new cljsrepl.core.Symbol(null,"s"))),cljsrepl.core.hash_map("\uFDD0'line",601,"\uFDD0'column",36))),cljsrepl.core.hash_map("\uFDD0'line",601,"\uFDD0'column",31))))].join('')));
}
return cljsrepl.core.into.call(null,s,xs);
} else
{return s;
}
}),cljsrepl.core.PersistentHashSet.EMPTY,args__$1);
var deps = cljsrepl.core.atom.call(null,cljsrepl.core.PersistentHashSet.EMPTY);
var valid_forms = cljsrepl.core.atom.call(null,cljsrepl.core.PersistentHashSet.fromArray(["\uFDD0'import","\uFDD0'use-macros","\uFDD0'require-macros","\uFDD0'require","\uFDD0'use"]));
var error_msg = (function (spec,msg){
return [cljsrepl.core.str(msg),cljsrepl.core.str("; offending spec: "),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,spec))].join('');
});
var parse_require_spec = (function parse_require_spec(macros_QMARK_,spec){
while(true){
if((function (){var or__3943__auto__ = cljsrepl.core.symbol_QMARK_.call(null,spec);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.vector_QMARK_.call(null,spec);
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"or")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",609,"\uFDD0'column",42)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"vector?")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",609,"\uFDD0'column",57))),cljsrepl.core.hash_map("\uFDD0'line",609,"\uFDD0'column",38))))].join('')));
}
if(cljsrepl.core.vector_QMARK_.call(null,spec))
{if(cljsrepl.core.symbol_QMARK_.call(null,cljsrepl.core.first.call(null,spec)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"first")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",612,"\uFDD0'column",49))),cljsrepl.core.hash_map("\uFDD0'line",612,"\uFDD0'column",40))))].join('')));
}
if(cljsrepl.core.odd_QMARK_.call(null,cljsrepl.core.count.call(null,spec)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Only :as alias and :refer (names) options supported in :require")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"odd?")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"count")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",614,"\uFDD0'column",46))),cljsrepl.core.hash_map("\uFDD0'line",614,"\uFDD0'column",40))))].join('')));
}
if(cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.PersistentHashSet.fromArray(["\uFDD0'as","\uFDD0'refer"]),cljsrepl.core.map.call(null,cljsrepl.core.first,cljsrepl.core.partition.call(null,2,cljsrepl.core.next.call(null,spec)))))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Only :as and :refer options supported in :require / :require-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"every?")),cljsrepl.core.set(["\uFDD0'as","\uFDD0'refer"]),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"map")),(new cljsrepl.core.Symbol(null,"first")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"partition")),2,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"next")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",616,"\uFDD0'column",86))),cljsrepl.core.hash_map("\uFDD0'line",616,"\uFDD0'column",73))),cljsrepl.core.hash_map("\uFDD0'line",616,"\uFDD0'column",62))),cljsrepl.core.hash_map("\uFDD0'line",616,"\uFDD0'column",40))))].join('')));
}
if((function (){var fs = cljsrepl.core.frequencies.call(null,cljsrepl.core.next.call(null,spec));
var and__3941__auto__ = (fs.call(null,"\uFDD0'as",0) <= 1);
if(and__3941__auto__)
{return (fs.call(null,"\uFDD0'refer",0) <= 1);
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"let")),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"fs")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"frequencies")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"next")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",618,"\uFDD0'column",62))),cljsrepl.core.hash_map("\uFDD0'line",618,"\uFDD0'column",49))]),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"<=")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"fs")),"\uFDD0'as",0),cljsrepl.core.hash_map("\uFDD0'line",619,"\uFDD0'column",51)),1),cljsrepl.core.hash_map("\uFDD0'line",619,"\uFDD0'column",47)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"<=")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"fs")),"\uFDD0'refer",0),cljsrepl.core.hash_map("\uFDD0'line",620,"\uFDD0'column",51)),1),cljsrepl.core.hash_map("\uFDD0'line",620,"\uFDD0'column",47))),cljsrepl.core.hash_map("\uFDD0'line",619,"\uFDD0'column",42))),cljsrepl.core.hash_map("\uFDD0'line",618,"\uFDD0'column",40))))].join('')));
}
} else
{}
if(cljsrepl.core.symbol_QMARK_.call(null,spec))
{{
var G__4820 = macros_QMARK_;
var G__4821 = cljsrepl.core.PersistentVector.fromArray([spec], true);
macros_QMARK_ = G__4820;
spec = G__4821;
continue;
}
} else
{var vec__4807 = spec;
var lib = cljsrepl.core.nth.call(null,vec__4807,0,null);
var opts = cljsrepl.core.nthnext.call(null,vec__4807,1);
var map__4808 = cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,opts);
var map__4808__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4808))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4808):map__4808);
var alias = cljsrepl.core._lookup.call(null,map__4808__$1,"\uFDD0'as",lib);
var referred = cljsrepl.core._lookup.call(null,map__4808__$1,"\uFDD0'refer",null);
var vec__4809 = (cljsrepl.core.truth_(macros_QMARK_)?cljsrepl.core.PersistentVector.fromArray(["\uFDD0'require-macros","\uFDD0'use-macros"], true):cljsrepl.core.PersistentVector.fromArray(["\uFDD0'require","\uFDD0'use"], true));
var rk = cljsrepl.core.nth.call(null,vec__4809,0,null);
var uk = cljsrepl.core.nth.call(null,vec__4809,1,null);
if((function (){var or__3943__auto__ = cljsrepl.core.symbol_QMARK_.call(null,alias);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (alias == null);
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"or")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"alias"))),cljsrepl.core.hash_map("\uFDD0'line",627,"\uFDD0'column",46)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"nil?")),(new cljsrepl.core.Symbol(null,"alias"))),cljsrepl.core.hash_map("\uFDD0'line",627,"\uFDD0'column",62))),cljsrepl.core.hash_map("\uFDD0'line",627,"\uFDD0'column",42))))].join('')));
}
if(cljsrepl.core.truth_((function (){var or__3943__auto__ = (function (){var and__3941__auto__ = cljsrepl.core.sequential_QMARK_.call(null,referred);
if(and__3941__auto__)
{return cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.symbol_QMARK_,referred);
} else
{return and__3941__auto__;
}
})();
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (referred == null);
}
})()))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"or")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"sequential?")),(new cljsrepl.core.Symbol(null,"referred"))),cljsrepl.core.hash_map("\uFDD0'line",629,"\uFDD0'column",51)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"every?")),(new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"referred"))),cljsrepl.core.hash_map("\uFDD0'line",629,"\uFDD0'column",74))),cljsrepl.core.hash_map("\uFDD0'line",629,"\uFDD0'column",46)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"nil?")),(new cljsrepl.core.Symbol(null,"referred"))),cljsrepl.core.hash_map("\uFDD0'line",630,"\uFDD0'column",46))),cljsrepl.core.hash_map("\uFDD0'line",629,"\uFDD0'column",42))))].join('')));
}
if(cljsrepl.core.truth_(macros_QMARK_))
{} else
{cljsrepl.core.swap_BANG_.call(null,deps,cljsrepl.core.conj,lib);
}
return cljsrepl.core.merge.call(null,(cljsrepl.core.truth_(alias)?cljsrepl.core.PersistentArrayMap.fromArrays([rk],[cljsrepl.core.PersistentArrayMap.fromArrays([alias],[lib])]):null),(cljsrepl.core.truth_(referred)?cljsrepl.core.PersistentArrayMap.fromArrays([uk],[cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.interleave.call(null,referred,cljsrepl.core.repeat.call(null,lib)))]):null));
}
break;
}
});
var use__GT_require = (function use__GT_require(p__4810){
var vec__4812 = p__4810;
var lib = cljsrepl.core.nth.call(null,vec__4812,0,null);
var kw = cljsrepl.core.nth.call(null,vec__4812,1,null);
var referred = cljsrepl.core.nth.call(null,vec__4812,2,null);
var spec = vec__4812;
if((function (){var and__3941__auto__ = cljsrepl.core.symbol_QMARK_.call(null,lib);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljsrepl.core._EQ_.call(null,"\uFDD0'only",kw);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = cljsrepl.core.sequential_QMARK_.call(null,referred);
if(and__3941__auto____$2)
{return cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.symbol_QMARK_,referred);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Only [lib.ns :only (names)] specs supported in :use / :use-macros")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"lib"))),cljsrepl.core.hash_map("\uFDD0'line",637,"\uFDD0'column",37)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"=")),"\uFDD0'only",(new cljsrepl.core.Symbol(null,"kw"))),cljsrepl.core.hash_map("\uFDD0'line",637,"\uFDD0'column",51)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"sequential?")),(new cljsrepl.core.Symbol(null,"referred"))),cljsrepl.core.hash_map("\uFDD0'line",637,"\uFDD0'column",64)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"every?")),(new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"referred"))),cljsrepl.core.hash_map("\uFDD0'line",637,"\uFDD0'column",87))),cljsrepl.core.hash_map("\uFDD0'line",637,"\uFDD0'column",32))))].join('')));
}
return cljsrepl.core.PersistentVector.fromArray([lib,"\uFDD0'refer",referred], true);
});
var parse_import_spec = (function parse_import_spec(spec){
if((function (){var and__3941__auto__ = cljsrepl.core.symbol_QMARK_.call(null,spec);
if(and__3941__auto__)
{return (cljsrepl.core.namespace.call(null,spec) == null);
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(error_msg.call(null,spec,"Only lib.Ctor specs supported in :import")),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"and")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",641,"\uFDD0'column",42)),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"nil?")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"namespace")),(new cljsrepl.core.Symbol(null,"spec"))),cljsrepl.core.hash_map("\uFDD0'line",641,"\uFDD0'column",63))),cljsrepl.core.hash_map("\uFDD0'line",641,"\uFDD0'column",57))),cljsrepl.core.hash_map("\uFDD0'line",641,"\uFDD0'column",37))))].join('')));
}
cljsrepl.core.swap_BANG_.call(null,deps,cljsrepl.core.conj,spec);
var ctor_sym = cljsrepl.core.symbol.call(null,cljsrepl.core.last.call(null,replclojure.string.split.call(null,[cljsrepl.core.str(spec)].join(''),/\./)));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'import","\uFDD0'require"],{"\uFDD0'import":cljsrepl.core.PersistentArrayMap.fromArrays([ctor_sym],[spec]),"\uFDD0'require":cljsrepl.core.PersistentArrayMap.fromArrays([ctor_sym],[spec])});
});
var spec_parsers = cljsrepl.core.ObjMap.fromObject(["\uFDD0'require","\uFDD0'require-macros","\uFDD0'use","\uFDD0'use-macros","\uFDD0'import"],{"\uFDD0'require":cljsrepl.core.partial.call(null,parse_require_spec,false),"\uFDD0'require-macros":cljsrepl.core.partial.call(null,parse_require_spec,true),"\uFDD0'use":cljsrepl.core.comp.call(null,cljsrepl.core.partial.call(null,parse_require_spec,false),use__GT_require),"\uFDD0'use-macros":cljsrepl.core.comp.call(null,cljsrepl.core.partial.call(null,parse_require_spec,true),use__GT_require),"\uFDD0'import":parse_import_spec});
var map__4801 = cljsrepl.core.reduce.call(null,(function (m,p__4813){
var vec__4814 = p__4813;
var k = cljsrepl.core.nth.call(null,vec__4814,0,null);
var libs = cljsrepl.core.nthnext.call(null,vec__4814,1);
if(cljsrepl.core.truth_(cljsrepl.core.PersistentHashSet.fromArray(["\uFDD0'import","\uFDD0'use-macros","\uFDD0'require-macros","\uFDD0'require","\uFDD0'use"]).call(null,k)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Only :refer-clojure, :require, :require-macros, :use and :use-macros libspecs supported"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list(cljsrepl.core.set(["\uFDD0'import","\uFDD0'use-macros","\uFDD0'require-macros","\uFDD0'require","\uFDD0'use"]),(new cljsrepl.core.Symbol(null,"k"))),cljsrepl.core.hash_map("\uFDD0'line",654,"\uFDD0'column",27))))].join('')));
}
if(cljsrepl.core.truth_(cljsrepl.core.deref.call(null,valid_forms).call(null,k)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str([cljsrepl.core.str("Only one "),cljsrepl.core.str(k),cljsrepl.core.str(" form is allowed per namespace definition")].join('')),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"replclojure.core/deref")),(new cljsrepl.core.Symbol(null,"valid-forms"))),(new cljsrepl.core.Symbol(null,"k"))),cljsrepl.core.hash_map("\uFDD0'line",656,"\uFDD0'column",27))))].join('')));
}
cljsrepl.core.swap_BANG_.call(null,valid_forms,cljsrepl.core.disj,k);
return cljsrepl.core.apply.call(null,cljsrepl.core.merge_with,cljsrepl.core.merge,m,cljsrepl.core.map.call(null,spec_parsers.call(null,k),libs));
}),cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.remove.call(null,(function (p__4815){
var vec__4816 = p__4815;
var r = cljsrepl.core.nth.call(null,vec__4816,0,null);
return cljsrepl.core._EQ_.call(null,r,"\uFDD0'refer-clojure");
}),args__$1));
var map__4801__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4801))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4801):map__4801);
var params = map__4801__$1;
var uses = cljsrepl.core._lookup.call(null,map__4801__$1,"\uFDD0'use",null);
var requires = cljsrepl.core._lookup.call(null,map__4801__$1,"\uFDD0'require",null);
var uses_macros = cljsrepl.core._lookup.call(null,map__4801__$1,"\uFDD0'use-macros",null);
var requires_macros = cljsrepl.core._lookup.call(null,map__4801__$1,"\uFDD0'require-macros",null);
var imports = cljsrepl.core._lookup.call(null,map__4801__$1,"\uFDD0'import",null);
if(cljsrepl.core.seq.call(null,cljsrepl.core.deref.call(null,deps)))
{cljsrepl.core.println.call(null,"// **** Skipping analyze-deps ****");
} else
{}
cljsrepl.analyzer._STAR_cljs_ns_STAR_ = name;
cljsrepl.core._STAR_ns_sym_STAR_ = name;
var G__4817_4822 = cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.vals.call(null,requires_macros),cljsrepl.core.vals.call(null,uses_macros)));
while(true){
if(G__4817_4822)
{var nsym_4823 = cljsrepl.core.first.call(null,G__4817_4822);
cljsrepl.core.require.call(null,nsym_4823);
{
var G__4824 = cljsrepl.core.next.call(null,G__4817_4822);
G__4817_4822 = G__4824;
continue;
}
} else
{}
break;
}
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,(function (p1__4798_SHARP_){
return cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,cljsrepl.core.assoc_in.call(null,p1__4798_SHARP_,cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'name"], true),name),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'doc"], true),docstring),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'excludes"], true),excludes),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'uses"], true),uses),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'requires"], true),requires),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'uses-macros"], true),uses_macros),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'requires-macros"], true),cljsrepl.core.into.call(null,cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.map.call(null,(function (p__4818){
var vec__4819 = p__4818;
var alias = cljsrepl.core.nth.call(null,vec__4819,0,null);
var nsym = cljsrepl.core.nth.call(null,vec__4819,1,null);
return cljsrepl.core.PersistentVector.fromArray([alias,cljsrepl.core.find_ns.call(null,nsym)], true);
}),requires_macros))),cljsrepl.core.PersistentVector.fromArray([name,"\uFDD0'imports"], true),imports);
}));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'requires","\uFDD0'form","\uFDD0'op","\uFDD0'name","\uFDD0'excludes","\uFDD0'env","\uFDD0'imports","\uFDD0'doc","\uFDD0'uses","\uFDD0'uses-macros","\uFDD0'requires-macros"],{"\uFDD0'requires":requires,"\uFDD0'form":form,"\uFDD0'op":"\uFDD0'ns","\uFDD0'name":name,"\uFDD0'excludes":excludes,"\uFDD0'env":env,"\uFDD0'imports":imports,"\uFDD0'doc":docstring,"\uFDD0'uses":uses,"\uFDD0'uses-macros":uses_macros,"\uFDD0'requires-macros":requires_macros});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"deftype*")),(function (_,env,p__4825,___$1){
var vec__4826 = p__4825;
var ___$2 = cljsrepl.core.nth.call(null,vec__4826,0,null);
var tsym = cljsrepl.core.nth.call(null,vec__4826,1,null);
var fields = cljsrepl.core.nth.call(null,vec__4826,2,null);
var pmasks = cljsrepl.core.nth.call(null,vec__4826,3,null);
var form = vec__4826;
var t = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,env,"\uFDD0'locals"),tsym));
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'defs",tsym], true),(function (m){
var m__$1 = cljsrepl.core.assoc.call(null,(function (){var or__3943__auto__ = m;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.ObjMap.EMPTY;
}
})(),"\uFDD0'name",t,"\uFDD0'type",true,"\uFDD0'num-fields",cljsrepl.core.count.call(null,fields));
return cljsrepl.core.merge.call(null,m__$1,cljsrepl.core.ObjMap.fromObject(["\uFDD0'protocols"],{"\uFDD0'protocols":(new cljsrepl.core.Keyword("\uFDD0'protocols")).call(null,cljsrepl.core.meta.call(null,tsym))}),(function (){var temp__4092__auto__ = (new cljsrepl.core.Keyword("\uFDD0'line")).call(null,env);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'file","\uFDD0'line"],{"\uFDD0'file":cljsrepl.analyzer._STAR_cljs_file_STAR_,"\uFDD0'line":line});
} else
{return null;
}
})());
}));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0't","\uFDD0'fields","\uFDD0'pmasks"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'deftype*","\uFDD0'form":form,"\uFDD0't":t,"\uFDD0'fields":fields,"\uFDD0'pmasks":pmasks});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"defrecord*")),(function (_,env,p__4828,___$1){
var vec__4829 = p__4828;
var ___$2 = cljsrepl.core.nth.call(null,vec__4829,0,null);
var tsym = cljsrepl.core.nth.call(null,vec__4829,1,null);
var fields = cljsrepl.core.nth.call(null,vec__4829,2,null);
var pmasks = cljsrepl.core.nth.call(null,vec__4829,3,null);
var form = vec__4829;
var t = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,env,"\uFDD0'locals"),tsym));
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'defs",tsym], true),(function (m){
var m__$1 = cljsrepl.core.assoc.call(null,(function (){var or__3943__auto__ = m;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.ObjMap.EMPTY;
}
})(),"\uFDD0'name",t,"\uFDD0'type",true);
return cljsrepl.core.merge.call(null,m__$1,cljsrepl.core.ObjMap.fromObject(["\uFDD0'protocols"],{"\uFDD0'protocols":(new cljsrepl.core.Keyword("\uFDD0'protocols")).call(null,cljsrepl.core.meta.call(null,tsym))}),(function (){var temp__4092__auto__ = (new cljsrepl.core.Keyword("\uFDD0'line")).call(null,env);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'file","\uFDD0'line"],{"\uFDD0'file":cljsrepl.analyzer._STAR_cljs_file_STAR_,"\uFDD0'line":line});
} else
{return null;
}
})());
}));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0't","\uFDD0'fields","\uFDD0'pmasks"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'defrecord*","\uFDD0'form":form,"\uFDD0't":t,"\uFDD0'fields":fields,"\uFDD0'pmasks":pmasks});
}));
cljsrepl.analyzer.property_symbol_QMARK_ = (function property_symbol_QMARK_(p1__4827_SHARP_){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = cljsrepl.core.symbol_QMARK_.call(null,p1__4827_SHARP_);
if(and__3941__auto__)
{return cljsrepl.core.re_matches.call(null,/^-.*/,cljsrepl.core.name.call(null,p1__4827_SHARP_));
} else
{return and__3941__auto__;
}
})());
});
cljsrepl.analyzer.classify_dot_form = (function classify_dot_form(p__4831){
var vec__4833 = p__4831;
var target = cljsrepl.core.nth.call(null,vec__4833,0,null);
var member = cljsrepl.core.nth.call(null,vec__4833,1,null);
var args = cljsrepl.core.nth.call(null,vec__4833,2,null);
return cljsrepl.core.PersistentVector.fromArray([(((target == null))?"\uFDD0'cljsrepl.analyzer/error":(("\uFDD0'default")?"\uFDD0'cljsrepl.analyzer/expr":null)),(cljsrepl.core.truth_(cljsrepl.analyzer.property_symbol_QMARK_.call(null,member))?"\uFDD0'cljsrepl.analyzer/property":((cljsrepl.core.symbol_QMARK_.call(null,member))?"\uFDD0'cljsrepl.analyzer/symbol":((cljsrepl.core.seq_QMARK_.call(null,member))?"\uFDD0'cljsrepl.analyzer/list":(("\uFDD0'default")?"\uFDD0'cljsrepl.analyzer/error":null)))),(((args == null))?cljsrepl.core.List.EMPTY:(("\uFDD0'default")?"\uFDD0'cljsrepl.analyzer/expr":null))], true);
});
cljsrepl.analyzer.build_dot_form = (function (){var method_table__2219__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var prefer_table__2220__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var method_cache__2221__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var cached_hierarchy__2222__auto__ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var hierarchy__2223__auto__ = cljsrepl.core._lookup.call(null,cljsrepl.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljsrepl.core.global_hierarchy);
return (new cljsrepl.core.MultiFn("build-dot-form",(function (p1__4830_SHARP_){
return cljsrepl.analyzer.classify_dot_form.call(null,p1__4830_SHARP_);
}),"\uFDD0'default",hierarchy__2223__auto__,method_table__2219__auto__,prefer_table__2220__auto__,method_cache__2221__auto__,cached_hierarchy__2222__auto__));
})();
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.build_dot_form,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'cljsrepl.analyzer/expr","\uFDD0'cljsrepl.analyzer/property",cljsrepl.core.List.EMPTY], true),(function (p__4834){
var vec__4835 = p__4834;
var target = cljsrepl.core.nth.call(null,vec__4835,0,null);
var prop = cljsrepl.core.nth.call(null,vec__4835,1,null);
var _ = cljsrepl.core.nth.call(null,vec__4835,2,null);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'dot-action","\uFDD0'target","\uFDD0'field"],{"\uFDD0'dot-action":"\uFDD0'cljsrepl.analyzer/access","\uFDD0'target":target,"\uFDD0'field":cljsrepl.core.symbol.call(null,cljsrepl.core.name.call(null,prop).substring(1))});
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.build_dot_form,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'cljsrepl.analyzer/expr","\uFDD0'cljsrepl.analyzer/property","\uFDD0'cljsrepl.analyzer/list"], true),(function (p__4836){
var vec__4837 = p__4836;
var target = cljsrepl.core.nth.call(null,vec__4837,0,null);
var prop = cljsrepl.core.nth.call(null,vec__4837,1,null);
var args = cljsrepl.core.nth.call(null,vec__4837,2,null);
throw (new Error([cljsrepl.core.str("Cannot provide arguments "),cljsrepl.core.str(args),cljsrepl.core.str(" on property access "),cljsrepl.core.str(prop)].join('')));
}));
/**
* Builds the intermediate method call map used to reason about the parsed form during
* compilation.
*/
cljsrepl.analyzer.build_method_call = (function build_method_call(target,meth,args){
if(cljsrepl.core.symbol_QMARK_.call(null,meth))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'dot-action","\uFDD0'target","\uFDD0'method","\uFDD0'args"],{"\uFDD0'dot-action":"\uFDD0'cljsrepl.analyzer/call","\uFDD0'target":target,"\uFDD0'method":meth,"\uFDD0'args":args});
} else
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'dot-action","\uFDD0'target","\uFDD0'method","\uFDD0'args"],{"\uFDD0'dot-action":"\uFDD0'cljsrepl.analyzer/call","\uFDD0'target":target,"\uFDD0'method":cljsrepl.core.first.call(null,meth),"\uFDD0'args":args});
}
});
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.build_dot_form,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'cljsrepl.analyzer/expr","\uFDD0'cljsrepl.analyzer/symbol","\uFDD0'cljsrepl.analyzer/expr"], true),(function (p__4838){
var vec__4839 = p__4838;
var target = cljsrepl.core.nth.call(null,vec__4839,0,null);
var meth = cljsrepl.core.nth.call(null,vec__4839,1,null);
var args = cljsrepl.core.nth.call(null,vec__4839,2,null);
return cljsrepl.analyzer.build_method_call.call(null,target,meth,args);
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.build_dot_form,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'cljsrepl.analyzer/expr","\uFDD0'cljsrepl.analyzer/symbol",cljsrepl.core.List.EMPTY], true),(function (p__4840){
var vec__4841 = p__4840;
var target = cljsrepl.core.nth.call(null,vec__4841,0,null);
var meth = cljsrepl.core.nth.call(null,vec__4841,1,null);
var args = cljsrepl.core.nth.call(null,vec__4841,2,null);
return cljsrepl.analyzer.build_method_call.call(null,target,meth,args);
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.build_dot_form,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'cljsrepl.analyzer/expr","\uFDD0'cljsrepl.analyzer/list",cljsrepl.core.List.EMPTY], true),(function (p__4842){
var vec__4843 = p__4842;
var target = cljsrepl.core.nth.call(null,vec__4843,0,null);
var meth_expr = cljsrepl.core.nth.call(null,vec__4843,1,null);
var _ = cljsrepl.core.nth.call(null,vec__4843,2,null);
return cljsrepl.analyzer.build_method_call.call(null,target,cljsrepl.core.first.call(null,meth_expr),cljsrepl.core.rest.call(null,meth_expr));
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.build_dot_form,"\uFDD0'default",(function (dot_form){
throw (new Error([cljsrepl.core.str("Unknown dot form of "),cljsrepl.core.str(cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,".")),dot_form)),cljsrepl.core.str(" with classification "),cljsrepl.core.str(cljsrepl.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,".")),(function (_,env,p__4846,___$1){
var vec__4847 = p__4846;
var ___$2 = cljsrepl.core.nth.call(null,vec__4847,0,null);
var target = cljsrepl.core.nth.call(null,vec__4847,1,null);
var vec__4848 = cljsrepl.core.nthnext.call(null,vec__4847,2);
var field = cljsrepl.core.nth.call(null,vec__4848,0,null);
var member_PLUS_ = cljsrepl.core.nthnext.call(null,vec__4848,1);
var form = vec__4847;
var _STAR_recur_frames_STAR_4849 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var map__4851 = cljsrepl.analyzer.build_dot_form.call(null,cljsrepl.core.PersistentVector.fromArray([target,field,member_PLUS_], true));
var map__4851__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4851))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4851):map__4851);
var args = cljsrepl.core._lookup.call(null,map__4851__$1,"\uFDD0'args",null);
var field__$1 = cljsrepl.core._lookup.call(null,map__4851__$1,"\uFDD0'field",null);
var method = cljsrepl.core._lookup.call(null,map__4851__$1,"\uFDD0'method",null);
var target__$1 = cljsrepl.core._lookup.call(null,map__4851__$1,"\uFDD0'target",null);
var dot_action = cljsrepl.core._lookup.call(null,map__4851__$1,"\uFDD0'dot-action",null);
var enve = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var targetexpr = cljsrepl.analyzer.analyze.call(null,enve,target__$1);
var G__4852 = dot_action;
if(cljsrepl.core._EQ_.call(null,"\uFDD0'cljsrepl.analyzer/call",G__4852))
{var argexprs = cljsrepl.core.map.call(null,(function (p1__4844_SHARP_){
return cljsrepl.analyzer.analyze.call(null,enve,p1__4844_SHARP_);
}),args);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'target","\uFDD0'method","\uFDD0'args","\uFDD0'children","\uFDD0'tag"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'dot","\uFDD0'form":form,"\uFDD0'target":targetexpr,"\uFDD0'method":method,"\uFDD0'args":argexprs,"\uFDD0'children":cljsrepl.core.into.call(null,cljsrepl.core.PersistentVector.fromArray([targetexpr], true),argexprs),"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,form))});
} else
{if(cljsrepl.core._EQ_.call(null,"\uFDD0'cljsrepl.analyzer/access",G__4852))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'target","\uFDD0'field","\uFDD0'children","\uFDD0'tag"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'dot","\uFDD0'form":form,"\uFDD0'target":targetexpr,"\uFDD0'field":field__$1,"\uFDD0'children":cljsrepl.core.PersistentVector.fromArray([targetexpr], true),"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,form))});
} else
{if("\uFDD0'else")
{throw (new Error([cljsrepl.core.str("No matching clause: "),cljsrepl.core.str(dot_action)].join('')));
} else
{return null;
}
}
}
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4849;
}}));
cljsrepl.core._add_method.call(null,cljsrepl.analyzer.parse,(new cljsrepl.core.Symbol(null,"js*")),(function (op,env,p__4854,_){
var vec__4855 = p__4854;
var ___$1 = cljsrepl.core.nth.call(null,vec__4855,0,null);
var jsform = cljsrepl.core.nth.call(null,vec__4855,1,null);
var args = cljsrepl.core.nthnext.call(null,vec__4855,2);
var form = vec__4855;
if(cljsrepl.core.string_QMARK_.call(null,jsform))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"string?")),(new cljsrepl.core.Symbol(null,"jsform"))),cljsrepl.core.hash_map("\uFDD0'line",792,"\uFDD0'column",11))))].join('')));
}
if(cljsrepl.core.truth_(args))
{var _STAR_recur_frames_STAR_4856 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var seg = (function seg(s){
var idx = s.indexOf("~{");
if(cljsrepl.core._EQ_.call(null,-1,idx))
{return cljsrepl.core.list.call(null,s);
} else
{var end = s.indexOf("}",idx);
return cljsrepl.core.cons.call(null,cljsrepl.core.subs.call(null,s,0,idx),seg.call(null,cljsrepl.core.subs.call(null,s,(end + 1))));
}
});
var enve = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var argexprs = cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4845_SHARP_){
return cljsrepl.analyzer.analyze.call(null,enve,p1__4845_SHARP_);
}),args));
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'segs","\uFDD0'args","\uFDD0'tag","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'js","\uFDD0'segs":seg.call(null,jsform),"\uFDD0'args":argexprs,"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,form)),"\uFDD0'form":form,"\uFDD0'children":argexprs});
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4856;
}} else
{var interp = (function interp(s){
var idx = s.indexOf("~{");
if(cljsrepl.core._EQ_.call(null,-1,idx))
{return cljsrepl.core.list.call(null,s);
} else
{var end = s.indexOf("}",idx);
var inner = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_existing_var.call(null,env,cljsrepl.core.symbol.call(null,cljsrepl.core.subs.call(null,s,(2 + idx),end))));
return cljsrepl.core.cons.call(null,cljsrepl.core.subs.call(null,s,0,idx),cljsrepl.core.cons.call(null,inner,interp.call(null,cljsrepl.core.subs.call(null,s,(end + 1)))));
}
});
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'code","\uFDD0'tag"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'js","\uFDD0'form":form,"\uFDD0'code":cljsrepl.core.apply.call(null,cljsrepl.core.str,interp.call(null,jsform)),"\uFDD0'tag":(new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,form))});
}
}));
cljsrepl.analyzer.parse_invoke = (function parse_invoke(env,p__4858){
var vec__4863 = p__4858;
var f = cljsrepl.core.nth.call(null,vec__4863,0,null);
var args = cljsrepl.core.nthnext.call(null,vec__4863,1);
var form = vec__4863;
var _STAR_recur_frames_STAR_4864 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
var enve = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var fexpr = cljsrepl.analyzer.analyze.call(null,enve,f);
var argexprs = cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4853_SHARP_){
return cljsrepl.analyzer.analyze.call(null,enve,p1__4853_SHARP_);
}),args));
var argc = cljsrepl.core.count.call(null,args);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_warn_fn_arity_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{return (new cljsrepl.core.Keyword("\uFDD0'fn-var")).call(null,(new cljsrepl.core.Keyword("\uFDD0'info")).call(null,fexpr));
} else
{return and__3941__auto__;
}
})()))
{var map__4866_4867 = (new cljsrepl.core.Keyword("\uFDD0'info")).call(null,fexpr);
var map__4866_4868__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4866_4867))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4866_4867):map__4866_4867);
var name_4869 = cljsrepl.core._lookup.call(null,map__4866_4868__$1,"\uFDD0'name",null);
var method_params_4870 = cljsrepl.core._lookup.call(null,map__4866_4868__$1,"\uFDD0'method-params",null);
var max_fixed_arity_4871 = cljsrepl.core._lookup.call(null,map__4866_4868__$1,"\uFDD0'max-fixed-arity",null);
var variadic_4872 = cljsrepl.core._lookup.call(null,map__4866_4868__$1,"\uFDD0'variadic",null);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core.not.call(null,cljsrepl.core.some.call(null,cljsrepl.core.PersistentHashSet.fromArray([argc]),cljsrepl.core.map.call(null,cljsrepl.core.count,method_params_4870)));
if(and__3941__auto__)
{var or__3943__auto__ = cljsrepl.core.not.call(null,variadic_4872);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto____$1 = variadic_4872;
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return (argc < max_fixed_arity_4871);
} else
{return and__3941__auto____$1;
}
}
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.analyzer.warning.call(null,env,[cljsrepl.core.str("WARNING: Wrong number of args ("),cljsrepl.core.str(argc),cljsrepl.core.str(") passed to "),cljsrepl.core.str(name_4869)].join(''));
} else
{}
} else
{}
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_warn_fn_deprecated_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (new cljsrepl.core.Keyword("\uFDD0'deprecated")).call(null,(new cljsrepl.core.Keyword("\uFDD0'info")).call(null,fexpr));
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return cljsrepl.core.not.call(null,(new cljsrepl.core.Keyword("\uFDD0'deprecation-nowarn")).call(null,cljsrepl.core.meta.call(null,form)));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.analyzer.warning.call(null,env,[cljsrepl.core.str("WARNING: "),cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'info")).call(null,fexpr))),cljsrepl.core.str(" is deprecated.")].join(''));
} else
{}
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'f","\uFDD0'args","\uFDD0'tag","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'invoke","\uFDD0'form":form,"\uFDD0'f":fexpr,"\uFDD0'args":argexprs,"\uFDD0'tag":(function (){var or__3943__auto__ = (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,(new cljsrepl.core.Keyword("\uFDD0'info")).call(null,fexpr));
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new cljsrepl.core.Keyword("\uFDD0'tag")).call(null,cljsrepl.core.meta.call(null,form));
}
})(),"\uFDD0'children":cljsrepl.core.into.call(null,cljsrepl.core.PersistentVector.fromArray([fexpr], true),argexprs)});
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4864;
}});
/**
* Finds the var associated with sym
*/
cljsrepl.analyzer.analyze_symbol = (function analyze_symbol(env,sym){
var ret = cljsrepl.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'form"],{"\uFDD0'env":env,"\uFDD0'form":sym});
var lb = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_(lb))
{return cljsrepl.core.assoc.call(null,ret,"\uFDD0'op","\uFDD0'var","\uFDD0'info",lb);
} else
{return cljsrepl.core.assoc.call(null,ret,"\uFDD0'op","\uFDD0'var","\uFDD0'info",cljsrepl.analyzer.resolve_existing_var.call(null,env,sym));
}
});
cljsrepl.analyzer.get_expander = (function get_expander(sym,env){
var mvar = (cljsrepl.core.truth_((function (){var or__3943__auto__ = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,env));
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = (function (){var or__3943__auto____$1 = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'excludes")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)));
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'excludes",sym], true));
}
})();
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.not.call(null,(function (){var or__3943__auto____$1 = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'uses-macros")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)));
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses-macros",sym], true));
}
})());
} else
{return and__3941__auto__;
}
}
})())?null:(function (){var temp__4090__auto__ = cljsrepl.core.namespace.call(null,sym);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var nstr = temp__4090__auto__;
var temp__4090__auto____$1 = cljsrepl.core._lookup.call(null,(new cljsrepl.core.Keyword("\uFDD0'requires-macros")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)),cljsrepl.core.symbol.call(null,nstr),null);
if(cljsrepl.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;
return cljsrepl.core.get_in.call(null,ns,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'defs",cljsrepl.core.symbol.call(null,cljsrepl.core.name.call(null,sym))], true));
} else
{return cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.analyzer.empty_env.call(null),sym);
}
} else
{var temp__4090__auto____$1 = sym.call(null,(new cljsrepl.core.Keyword("\uFDD0'uses-macros")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,env)));
if(cljsrepl.core.truth_(temp__4090__auto____$1))
{var nsym = temp__4090__auto____$1;
return cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([nsym,"\uFDD0'defs",sym], true));
} else
{return cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.analyzer.empty_env.call(null),sym);
}
}
})());
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = mvar;
if(cljsrepl.core.truth_(and__3941__auto__))
{return (new cljsrepl.core.Keyword("\uFDD0'macro?")).call(null,mvar);
} else
{return and__3941__auto__;
}
})()))
{return eval([cljsrepl.core.str(cljsrepl.compiler.munge.call(null,(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,mvar)))].join(''));
} else
{return null;
}
});
cljsrepl.analyzer.macroexpand_1 = (function macroexpand_1(env,form){
var op = cljsrepl.core.first.call(null,form);
if(cljsrepl.core.truth_(cljsrepl.analyzer.specials.call(null,op)))
{return form;
} else
{var temp__4090__auto__ = (function (){var and__3941__auto__ = cljsrepl.core.symbol_QMARK_.call(null,op);
if(and__3941__auto__)
{return cljsrepl.analyzer.get_expander.call(null,op,env);
} else
{return and__3941__auto__;
}
})();
if(cljsrepl.core.truth_(temp__4090__auto__))
{var mac = temp__4090__auto__;
var _STAR_ns_sym_STAR_4876 = cljsrepl.core._STAR_ns_sym_STAR_;
try{cljsrepl.core._STAR_ns_sym_STAR_ = cljsrepl.analyzer._STAR_cljs_ns_STAR_;
return cljsrepl.core.apply.call(null,mac,form,env,cljsrepl.core.rest.call(null,form));
}finally {cljsrepl.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_4876;
}} else
{if(cljsrepl.core.symbol_QMARK_.call(null,op))
{var opname = [cljsrepl.core.str(op)].join('');
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.first.call(null,opname),"."))
{var vec__4878 = cljsrepl.core.next.call(null,form);
var target = cljsrepl.core.nth.call(null,vec__4878,0,null);
var args = cljsrepl.core.nthnext.call(null,vec__4878,1);
return cljsrepl.core.with_meta.call(null,cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,".")),target,cljsrepl.core.symbol.call(null,cljsrepl.core.subs.call(null,opname,1)),args),cljsrepl.core.meta.call(null,form));
} else
{if(cljsrepl.core._EQ_.call(null,cljsrepl.core.last.call(null,opname),"."))
{return cljsrepl.core.with_meta.call(null,cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,"new")),cljsrepl.core.symbol.call(null,cljsrepl.core.subs.call(null,opname,0,(cljsrepl.core.count.call(null,opname) - 1))),cljsrepl.core.next.call(null,form)),cljsrepl.core.meta.call(null,form));
} else
{if("\uFDD0'else")
{return form;
} else
{return null;
}
}
}
} else
{return form;
}
}
}
});
cljsrepl.analyzer.analyze_seq = (function analyze_seq(env,form,name){
var env__$1 = cljsrepl.core.assoc.call(null,env,"\uFDD0'line",(function (){var or__3943__auto__ = (new cljsrepl.core.Keyword("\uFDD0'line")).call(null,cljsrepl.core.meta.call(null,form));
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new cljsrepl.core.Keyword("\uFDD0'line")).call(null,env);
}
})());
var op = cljsrepl.core.first.call(null,form);
if(!((op == null)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Can't call nil"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"nil?")),(new cljsrepl.core.Symbol(null,"op"))),cljsrepl.core.hash_map("\uFDD0'line",891,"\uFDD0'column",20))),cljsrepl.core.hash_map("\uFDD0'line",891,"\uFDD0'column",15))))].join('')));
}
var mform = cljsrepl.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform))
{if(cljsrepl.core.truth_(cljsrepl.analyzer.specials.call(null,op)))
{return cljsrepl.analyzer.parse.call(null,op,env__$1,form,name);
} else
{return cljsrepl.analyzer.parse_invoke.call(null,env__$1,form);
}
} else
{return cljsrepl.analyzer.analyze.call(null,env__$1,mform,name);
}
});
cljsrepl.analyzer.analyze_map = (function analyze_map(env,form,name){
var expr_env = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var simple_keys_QMARK_ = cljsrepl.core.every_QMARK_.call(null,(function (p1__4879_SHARP_){
var or__3943__auto__ = cljsrepl.core.string_QMARK_.call(null,p1__4879_SHARP_);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.keyword_QMARK_.call(null,p1__4879_SHARP_);
}
}),cljsrepl.core.keys.call(null,form));
var ks = (function (){var _STAR_recur_frames_STAR_4887 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4880_SHARP_){
return cljsrepl.analyzer.analyze.call(null,expr_env,p1__4880_SHARP_,name);
}),cljsrepl.core.keys.call(null,form)));
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4887;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_4889 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4881_SHARP_){
return cljsrepl.analyzer.analyze.call(null,expr_env,p1__4881_SHARP_,name);
}),cljsrepl.core.vals.call(null,form)));
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4889;
}})();
return cljsrepl.analyzer.analyze_wrap_meta.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'keys","\uFDD0'vals","\uFDD0'simple-keys?","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'map","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'keys":ks,"\uFDD0'vals":vs,"\uFDD0'simple-keys?":simple_keys_QMARK_,"\uFDD0'children":cljsrepl.core.vec.call(null,cljsrepl.core.interleave.call(null,ks,vs))}),name);
});
cljsrepl.analyzer.analyze_vector = (function analyze_vector(env,form,name){
var expr_env = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var items = (function (){var _STAR_recur_frames_STAR_4894 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4882_SHARP_){
return cljsrepl.analyzer.analyze.call(null,expr_env,p1__4882_SHARP_,name);
}),form));
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4894;
}})();
return cljsrepl.analyzer.analyze_wrap_meta.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'items","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'vector","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'items":items,"\uFDD0'children":items}),name);
});
cljsrepl.analyzer.analyze_set = (function analyze_set(env,form,name){
var expr_env = cljsrepl.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var items = (function (){var _STAR_recur_frames_STAR_4898 = cljsrepl.analyzer._STAR_recur_frames_STAR_;
try{cljsrepl.analyzer._STAR_recur_frames_STAR_ = cljsrepl.core.cons.call(null,null,cljsrepl.analyzer._STAR_recur_frames_STAR_);
return cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4891_SHARP_){
return cljsrepl.analyzer.analyze.call(null,expr_env,p1__4891_SHARP_,name);
}),form));
}finally {cljsrepl.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4898;
}})();
return cljsrepl.analyzer.analyze_wrap_meta.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'items","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'set","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'items":items,"\uFDD0'children":items}),name);
});
cljsrepl.analyzer.analyze_wrap_meta = (function analyze_wrap_meta(expr,name){
var form = (new cljsrepl.core.Keyword("\uFDD0'form")).call(null,expr);
if(cljsrepl.core.truth_(cljsrepl.core.meta.call(null,form)))
{var env = (new cljsrepl.core.Keyword("\uFDD0'env")).call(null,expr);
var expr__$1 = cljsrepl.core.assoc_in.call(null,expr,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'env","\uFDD0'context"], true),"\uFDD0'expr");
var meta_expr = cljsrepl.analyzer.analyze_map.call(null,(new cljsrepl.core.Keyword("\uFDD0'env")).call(null,expr__$1),cljsrepl.core.meta.call(null,form),name);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'meta","\uFDD0'expr","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'meta","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'meta":meta_expr,"\uFDD0'expr":expr__$1,"\uFDD0'children":cljsrepl.core.PersistentVector.fromArray([meta_expr,expr__$1], true)});
} else
{return expr;
}
});
/**
* Given an environment, a map containing {:locals (mapping of names to bindings), :context
* (one of :statement, :expr, :return), :ns (a symbol naming the
* compilation ns)}, and form, returns an expression object (a map
* containing at least :form, :op and :env keys). If expr has any (immediately)
* nested exprs, must have :children [exprs...] entry. This will
* facilitate code walking without knowing the details of the op set.
*/
cljsrepl.analyzer.analyze = (function() {
var analyze = null;
var analyze__2 = (function (env,form){
return analyze.call(null,env,form,null);
});
var analyze__3 = (function (env,form,name){
var form__$1 = ((cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.LazySeq,form))?(function (){var or__3943__auto__ = cljsrepl.core.seq.call(null,form);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.List.EMPTY;
}
})():form);
if(cljsrepl.core.symbol_QMARK_.call(null,form__$1))
{return cljsrepl.analyzer.analyze_symbol.call(null,env,form__$1);
} else
{if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core.seq_QMARK_.call(null,form__$1);
if(and__3941__auto__)
{return cljsrepl.core.seq.call(null,form__$1);
} else
{return and__3941__auto__;
}
})()))
{return cljsrepl.analyzer.analyze_seq.call(null,env,form__$1,name);
} else
{if(cljsrepl.core.map_QMARK_.call(null,form__$1))
{return cljsrepl.analyzer.analyze_map.call(null,env,form__$1,name);
} else
{if(cljsrepl.core.vector_QMARK_.call(null,form__$1))
{return cljsrepl.analyzer.analyze_vector.call(null,env,form__$1,name);
} else
{if(cljsrepl.core.set_QMARK_.call(null,form__$1))
{return cljsrepl.analyzer.analyze_set.call(null,env,form__$1,name);
} else
{if(cljsrepl.core.keyword_QMARK_.call(null,form__$1))
{return cljsrepl.analyzer.analyze_keyword.call(null,env,form__$1);
} else
{if("\uFDD0'else")
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form"],{"\uFDD0'op":"\uFDD0'constant","\uFDD0'env":env,"\uFDD0'form":form__$1});
} else
{return null;
}
}
}
}
}
}
}
});
analyze = function(env,form,name){
switch(arguments.length){
case 2:
return analyze__2.call(this,env,form);
case 3:
return analyze__3.call(this,env,form,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
analyze.cljs$lang$arity$2 = analyze__2;
analyze.cljs$lang$arity$3 = analyze__3;
return analyze;
})()
;
cljsrepl.analyzer.analyze_file = (function analyze_file(f){
var raw_string = cljsrepl.core.file_read.call(null,f);
var _STAR_cljs_ns_STAR_4904 = cljsrepl.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_4905 = cljsrepl.analyzer._STAR_cljs_file_STAR_;
var _STAR_ns_sym_STAR_4906 = cljsrepl.core._STAR_ns_sym_STAR_;
try{cljsrepl.analyzer._STAR_cljs_ns_STAR_ = (new cljsrepl.core.Symbol(null,"cljsrepl.user"));
cljsrepl.analyzer._STAR_cljs_file_STAR_ = f;
cljsrepl.core._STAR_ns_sym_STAR_ = cljsrepl.analyzer._STAR_reader_ns_name_STAR_;
var env = cljsrepl.analyzer.empty_env.call(null);
var pbr = reader.string_push_back_reader.call(null,raw_string);
var eof = (new Object());
var r = cljsrepl.reader.read.call(null,pbr,false,eof,false);
while(true){
var env__$1 = cljsrepl.core.assoc.call(null,env,"\uFDD0'ns",cljsrepl.core.find_ns.call(null,cljsrepl.analyzer._STAR_cljs_ns_STAR_));
if((eof === r))
{return null;
} else
{cljsrepl.analyzer.analyze.call(null,env__$1,r);
{
var G__4908 = cljsrepl.reader.read.call(null,pbr,false,eof,false);
r = G__4908;
continue;
}
}
break;
}
}finally {cljsrepl.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_4906;
cljsrepl.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_4905;
cljsrepl.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_4904;
}});

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4909__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4909 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4909__delegate.call(this, m);
};
G__4909.cljs$lang$maxFixedArity = 0;
G__4909.cljs$lang$applyTo = (function (arglist__4910){
var m = cljsrepl.core.seq(arglist__4910);;
return G__4909__delegate(m);
});
G__4909.cljs$lang$arity$variadic = G__4909__delegate;
return G__4909;
})()
,cljsrepl.core.hash_map("\uFDD0'defs",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"analyze")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Given an environment, a map containing {:locals (mapping of names to bindings), :context\n  (one of :statement, :expr, :return), :ns (a symbol naming the\n  compilation ns)}, and form, returns an expression object (a map\n  containing at least :form, :op and :env keys). If expr has any (immediately)\n  nested exprs, must have :children [exprs...] entry. This will\n  facilitate code walking without knowing the details of the op set.","\uFDD0'line",935,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"analyze-block")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"exprs"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"exprs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-block")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","returns {:statements .. :ret ..}","\uFDD0'line",219,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-warn-fn-deprecated*")),cljsrepl.core.hash_map("\uFDD0'line",42,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-fn-deprecated*"))),(new cljsrepl.core.Symbol(null,"ns->relpath")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/ns->relpath")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",580,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-macros-is-classpath*")),cljsrepl.core.hash_map("\uFDD0'line",47,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-macros-is-classpath*"))),(new cljsrepl.core.Symbol(null,"load-core")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/load-core")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"resolve-existing-var")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/resolve-existing-var")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",105,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"classify-dot-form")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"target")),(new cljsrepl.core.Symbol(null,"member")),(new cljsrepl.core.Symbol(null,"args"))])]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4831")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/classify-dot-form")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",718,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"analyze-let")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"encl-env")),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"_")),(new cljsrepl.core.Symbol(null,"bindings")),(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"exprs")),"\uFDD0'as",(new cljsrepl.core.Symbol(null,"form"))]),(new cljsrepl.core.Symbol(null,"is-loop"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"encl-env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4758")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"is-loop")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-let")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",457,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-warn-on-redef*")),cljsrepl.core.hash_map("\uFDD0'line",38,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-on-redef*"))),(new cljsrepl.core.Symbol(null,"*cljs-warn-protocol-deprecated*")),cljsrepl.core.hash_map("\uFDD0'line",43,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-protocol-deprecated*"))),(new cljsrepl.core.Symbol(null,"*cljs-static-fns*")),cljsrepl.core.hash_map("\uFDD0'line",45,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-static-fns*"))),(new cljsrepl.core.Symbol(null,"munge-path")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ss"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ss")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/munge-path")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",577,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-warn-on-dynamic*")),cljsrepl.core.hash_map("\uFDD0'line",39,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-on-dynamic*"))),(new cljsrepl.core.Symbol(null,"/")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core//"))),(new cljsrepl.core.Symbol(null,"property-symbol?")),cljsrepl.core.hash_map("\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p1__4827#")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/property-symbol?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",716,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"confirm-bindings")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"names"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"names")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/confirm-bindings")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",191,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-warn-fn-arity*")),cljsrepl.core.hash_map("\uFDD0'line",41,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-fn-arity*"))),(new cljsrepl.core.Symbol(null,"resolve-var")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/resolve-var")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",154,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-macros-path*")),cljsrepl.core.hash_map("\uFDD0'line",46,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-macros-path*"))),(new cljsrepl.core.Symbol(null,"analyze-file")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"String")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",958,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"build-dot-form")),cljsrepl.core.hash_map("\uFDD0'line",729,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/build-dot-form"))),(new cljsrepl.core.Symbol(null,"get-expander")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"sym")),(new cljsrepl.core.Symbol(null,"env"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/get-expander")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",847,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"analyze-seq")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",885,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"analyze-fn-method")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"locals")),(new cljsrepl.core.Symbol(null,"form")),(new cljsrepl.core.Symbol(null,"type"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"locals")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-fn-method")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",356,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"analyze-set")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-set")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",919,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"macroexpand-1")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/macroexpand-1")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",865,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"resolve-ns-alias")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/resolve-ns-alias")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",95,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"analyze-map")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",901,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"core-name?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/core-name?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Is sym visible from core in the current compilation namespace?","\uFDD0'line",99,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"-cljs-macros-loaded")),cljsrepl.core.hash_map("\uFDD0'line",48,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/-cljs-macros-loaded"))),(new cljsrepl.core.Symbol(null,"*cljs-file*")),cljsrepl.core.hash_map("\uFDD0'line",37,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-file*"))),(new cljsrepl.core.Symbol(null,"specials")),cljsrepl.core.hash_map("\uFDD0'line",202,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/specials"))),(new cljsrepl.core.Symbol(null,"analyze-wrap-meta")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"expr")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"expr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-wrap-meta")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",925,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*loop-lets*")),cljsrepl.core.hash_map("\uFDD0'line",205,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*loop-lets*"))),(new cljsrepl.core.Symbol(null,"analyze-vector")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"form")),(new cljsrepl.core.Symbol(null,"name"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-vector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",913,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*unchecked-if*")),cljsrepl.core.hash_map("\uFDD0'line",44,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*unchecked-if*"))),(new cljsrepl.core.Symbol(null,"parse")),cljsrepl.core.hash_map("\uFDD0'line",229,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/parse"))),(new cljsrepl.core.Symbol(null,"block-children")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'keys",cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"statements")),(new cljsrepl.core.Symbol(null,"ret"))]),"\uFDD0'as",(new cljsrepl.core.Symbol(null,"block")))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4722")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/block-children")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",248,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-warn-on-undeclared*")),cljsrepl.core.hash_map("\uFDD0'line",24,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-on-undeclared*"))),(new cljsrepl.core.Symbol(null,"build-method-call")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"target")),(new cljsrepl.core.Symbol(null,"meth")),(new cljsrepl.core.Symbol(null,"args"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"target")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"meth")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"args")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/build-method-call")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Builds the intermediate method call map used to reason about the parsed form during\n  compilation.","\uFDD0'line",742,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"empty-env")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/empty-env")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",74,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*reader-ns-name*")),cljsrepl.core.hash_map("\uFDD0'line",31,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*reader-ns-name*"))),(new cljsrepl.core.Symbol(null,"*cljs-ns*")),cljsrepl.core.hash_map("\uFDD0'line",36,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-ns*"))),(new cljsrepl.core.Symbol(null,"analyze-keyword")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-keyword")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",210,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"confirm-var-exists")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"prefix")),(new cljsrepl.core.Symbol(null,"suffix"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"prefix")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"suffix")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/confirm-var-exists")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",87,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"warning")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/warning")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",81,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"*cljs-warn-on-fn-var*")),cljsrepl.core.hash_map("\uFDD0'line",40,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*cljs-warn-on-fn-var*"))),(new cljsrepl.core.Symbol(null,"*recur-frames*")),cljsrepl.core.hash_map("\uFDD0'line",204,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/*recur-frames*"))),(new cljsrepl.core.Symbol(null,"analyze-symbol")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/analyze-symbol")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Finds the var associated with sym","\uFDD0'line",836,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new cljsrepl.core.Symbol(null,"parse-invoke")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"env")),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f")),(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"args")),"\uFDD0'as",(new cljsrepl.core.Symbol(null,"form"))])]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4858")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer/parse-invoke")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",815,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"disallowing-recur")),(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer-macros"))),"\uFDD0'requires",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"string")),(new cljsrepl.core.Symbol(null,"replclojure.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"macroexpand-1")),(new cljsrepl.core.Symbol(null,"*unchecked-if*"))]),"\uFDD0'doc",null,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer"))),old);
}));
