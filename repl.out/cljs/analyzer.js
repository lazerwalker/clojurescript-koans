replgoog.provide('replcljs.analyzer');
replgoog.require('replcljs.core');
replgoog.require('replclojure.string');
replcljs.analyzer._STAR_cljs_warn_on_undeclared_STAR_ = false;
replcljs.analyzer._STAR_reader_ns_name_STAR_ = replcljs.core.gensym.call(null);
replcljs.analyzer.namespaces = replcljs.core.namespaces;
replcljs.analyzer._STAR_cljs_ns_STAR_ = (new replcljs.core.Symbol(null,"replcljs.user"));
replcljs.analyzer._STAR_cljs_file_STAR_ = null;
replcljs.analyzer._STAR_cljs_warn_on_redef_STAR_ = true;
replcljs.analyzer._STAR_cljs_warn_on_dynamic_STAR_ = true;
replcljs.analyzer._STAR_cljs_warn_on_fn_var_STAR_ = true;
replcljs.analyzer._STAR_cljs_warn_fn_arity_STAR_ = true;
replcljs.analyzer._STAR_cljs_warn_fn_deprecated_STAR_ = true;
replcljs.analyzer._STAR_cljs_warn_protocol_deprecated_STAR_ = true;
replcljs.analyzer._STAR_unchecked_if_STAR_ = replcljs.core.atom.call(null,false);
replcljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
replcljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
replcljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
replcljs.analyzer._cljs_macros_loaded = replcljs.core.atom.call(null,false);
replcljs.analyzer.load_core = (function load_core(){
if(replcljs.core.not.call(null,replcljs.core.deref.call(null,replcljs.analyzer._cljs_macros_loaded)))
{replcljs.core.reset_BANG_.call(null,replcljs.analyzer._cljs_macros_loaded,true);
if(replcljs.core.truth_(replcljs.analyzer._STAR_cljs_macros_is_classpath_STAR_))
{return replcljs.analyzer.load.call(null,replcljs.analyzer._STAR_cljs_macros_path_STAR_);
} else
{return replcljs.core.load_file.call(null,replcljs.analyzer._STAR_cljs_macros_path_STAR_);
}
} else
{return null;
}
});
replcljs.analyzer.empty_env = (function empty_env(){
return replcljs.core.ObjMap.fromObject(["\uFDD0'ns","\uFDD0'context","\uFDD0'locals"],{"\uFDD0'ns":replcljs.core.deref.call(null,replcljs.core.namespaces).call(null,replcljs.analyzer._STAR_cljs_ns_STAR_),"\uFDD0'context":"\uFDD0'statement","\uFDD0'locals":replcljs.core.ObjMap.EMPTY});
});
replcljs.analyzer.warning = (function warning(env,s){
var _STAR_out_STAR_4716 = replcljs.core._STAR_out_STAR_;
try{replcljs.core._STAR_out_STAR_ = replcljs.core._STAR_err_STAR_;
return replcljs.core.println.call(null,[replcljs.core.str(s),replcljs.core.str((replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'line")).call(null,env))?[replcljs.core.str(" at line "),replcljs.core.str((new replcljs.core.Keyword("\uFDD0'line")).call(null,env)),replcljs.core.str(" "),replcljs.core.str(replcljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join(''));
}finally {replcljs.core._STAR_out_STAR_ = _STAR_out_STAR_4716;
}});
replcljs.analyzer.confirm_var_exists = (function confirm_var_exists(env,prefix,suffix){
if(replcljs.core.truth_(replcljs.analyzer._STAR_cljs_warn_on_undeclared_STAR_))
{var crnt_ns = (new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env));
if(replcljs.core._EQ_.call(null,prefix,crnt_ns))
{if(replcljs.core.truth_(suffix.call(null,(new replcljs.core.Keyword("\uFDD0'defs")).call(null,crnt_ns.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces))))))
{return null;
} else
{return replcljs.analyzer.warning.call(null,env,[replcljs.core.str("WARNING: Use of undeclared Var "),replcljs.core.str(prefix),replcljs.core.str("/"),replcljs.core.str(suffix)].join(''));
}
} else
{return null;
}
} else
{return null;
}
});
replcljs.analyzer.resolve_ns_alias = (function resolve_ns_alias(env,name){
var sym = replcljs.core.symbol.call(null,name);
return replcljs.core._lookup.call(null,(new replcljs.core.Keyword("\uFDD0'requires")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),sym,sym);
});
/**
* Is sym visible from core in the current compilation namespace?
*/
replcljs.analyzer.core_name_QMARK_ = (function core_name_QMARK_(env,sym){
var and__3941__auto__ = replcljs.core._lookup.call(null,(new replcljs.core.Keyword("\uFDD0'defs")).call(null,replcljs.core.deref.call(null,replcljs.core.namespaces).call(null,(new replcljs.core.Symbol(null,"replcljs.core")))),sym,null);
if(replcljs.core.truth_(and__3941__auto__))
{return !(replcljs.core.contains_QMARK_.call(null,(new replcljs.core.Keyword("\uFDD0'excludes")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),sym));
} else
{return and__3941__auto__;
}
});
replcljs.analyzer.resolve_existing_var = (function resolve_existing_var(env,sym){
while(true){
if(replcljs.core._EQ_.call(null,replcljs.core.namespace.call(null,sym),"js"))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":sym,"\uFDD0'ns":(new replcljs.core.Symbol(null,"js"))});
} else
{var s = [replcljs.core.str(sym)].join('');
var lb = sym.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_(lb))
{return lb;
} else
{if(replcljs.core.truth_(replcljs.core.namespace.call(null,sym)))
{var ns = replcljs.core.namespace.call(null,sym);
var ns__$1 = ((replcljs.core._EQ_.call(null,"clojure.core",ns))?"replcljs.core":ns);
var full_ns = replcljs.analyzer.resolve_ns_alias.call(null,env,ns__$1);
replcljs.analyzer.confirm_var_exists.call(null,env,full_ns,replcljs.core.symbol.call(null,replcljs.core.name.call(null,sym)));
return replcljs.core.merge.call(null,replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",replcljs.core.symbol.call(null,replcljs.core.name.call(null,sym))], true)),replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str(full_ns)].join(''),[replcljs.core.str(replcljs.core.name.call(null,sym))].join('')),"\uFDD0'ns":full_ns}));
} else
{if((function (){var and__3941__auto__ = replcljs.core.not_EQ_.call(null,"..",s);
if(and__3941__auto__)
{return (s.indexOf(".") >= 0);
} else
{return and__3941__auto__;
}
})())
{var idx = s.indexOf(".");
var prefix = replcljs.core.symbol.call(null,replcljs.core.subs.call(null,s,0,idx));
var suffix = replcljs.core.subs.call(null,s,(idx + 1));
var lb__$1 = prefix.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_(lb__$1))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str((new replcljs.core.Keyword("\uFDD0'name")).call(null,lb__$1)),replcljs.core.str(suffix)].join(''))});
} else
{replcljs.analyzer.confirm_var_exists.call(null,env,prefix,replcljs.core.symbol.call(null,suffix));
return replcljs.core.merge.call(null,replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([prefix,"\uFDD0'defs",replcljs.core.symbol.call(null,suffix)], true)),replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":((replcljs.core._EQ_.call(null,"",prefix))?replcljs.core.symbol.call(null,suffix):replcljs.core.symbol.call(null,[replcljs.core.str(prefix)].join(''),suffix)),"\uFDD0'ns":prefix}));
}
} else
{if(replcljs.core.truth_(replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true))))
{var full_ns = replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true));
return replcljs.core.merge.call(null,replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",sym], true)),replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str(full_ns)].join(''),[replcljs.core.str(sym)].join('')),"\uFDD0'ns":(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env))}));
} else
{if(replcljs.core.truth_(replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true))))
{{
var G__4718 = env;
var G__4719 = replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true));
env = G__4718;
sym = G__4719;
continue;
}
} else
{if("\uFDD0'else")
{var full_ns = (replcljs.core.truth_(replcljs.analyzer.core_name_QMARK_.call(null,env,sym))?(new replcljs.core.Symbol(null,"replcljs.core")):(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)));
replcljs.analyzer.confirm_var_exists.call(null,env,full_ns,sym);
return replcljs.core.merge.call(null,replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",sym], true)),replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'ns"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str(full_ns)].join(''),[replcljs.core.str(sym)].join('')),"\uFDD0'ns":full_ns}));
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
replcljs.analyzer.resolve_var = (function resolve_var(env,sym){
while(true){
if(replcljs.core._EQ_.call(null,replcljs.core.namespace.call(null,sym),"js"))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":sym});
} else
{var s = [replcljs.core.str(sym)].join('');
var lb = sym.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_(lb))
{return lb;
} else
{if(replcljs.core.truth_(replcljs.core.namespace.call(null,sym)))
{var ns = replcljs.core.namespace.call(null,sym);
var ns__$1 = ((replcljs.core._EQ_.call(null,"clojure.core",ns))?"replcljs.core":ns);
return replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str(replcljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))].join(''),replcljs.core.name.call(null,sym))});
} else
{if((function (){var and__3941__auto__ = replcljs.core.not_EQ_.call(null,"..",s);
if(and__3941__auto__)
{return (s.indexOf(".") >= 0);
} else
{return and__3941__auto__;
}
})())
{var idx = s.indexOf(".");
var prefix = replcljs.core.symbol.call(null,replcljs.core.subs.call(null,s,0,idx));
var suffix = replcljs.core.subs.call(null,s,idx);
var lb__$1 = prefix.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_(lb__$1))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str((new replcljs.core.Keyword("\uFDD0'name")).call(null,lb__$1)),replcljs.core.str(suffix)].join(''))});
} else
{return replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":sym});
}
} else
{if(replcljs.core.truth_(replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true))))
{var full_ns = replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses",sym], true));
return replcljs.core.merge.call(null,replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([full_ns,"\uFDD0'defs",sym], true)),replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str(full_ns)].join(''),replcljs.core.name.call(null,sym))}));
} else
{if(replcljs.core.truth_(replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true))))
{{
var G__4720 = env;
var G__4721 = replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'imports",sym], true));
env = G__4720;
sym = G__4721;
continue;
}
} else
{if("\uFDD0'else")
{var ns = (replcljs.core.truth_(replcljs.analyzer.core_name_QMARK_.call(null,env,sym))?(new replcljs.core.Symbol(null,"replcljs.core")):(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)));
return replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":replcljs.core.symbol.call(null,[replcljs.core.str(ns)].join(''),replcljs.core.name.call(null,sym))});
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
replcljs.analyzer.confirm_bindings = (function confirm_bindings(env,names){
var G__4723 = replcljs.core.seq.call(null,names);
while(true){
if(G__4723)
{var name = replcljs.core.first.call(null,G__4723);
var env_4724__$1 = replcljs.core.merge.call(null,env,replcljs.core.ObjMap.fromObject(["\uFDD0'ns"],{"\uFDD0'ns":replcljs.core.deref.call(null,replcljs.core.namespaces).call(null,replcljs.analyzer._STAR_cljs_ns_STAR_)}));
var ev_4725 = replcljs.analyzer.resolve_existing_var.call(null,env_4724__$1,name);
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_warn_on_dynamic_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = ev_4725;
if(replcljs.core.truth_(and__3941__auto____$1))
{return replcljs.core.not.call(null,(new replcljs.core.Keyword("\uFDD0'dynamic")).call(null,ev_4725));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{replcljs.analyzer.warning.call(null,env_4724__$1,[replcljs.core.str("WARNING: "),replcljs.core.str((new replcljs.core.Keyword("\uFDD0'name")).call(null,ev_4725)),replcljs.core.str(" not declared ^:dynamic")].join(''));
} else
{}
{
var G__4726 = replcljs.core.next.call(null,G__4723);
G__4723 = G__4726;
continue;
}
} else
{return null;
}
break;
}
});
replcljs.analyzer.specials = replcljs.core.set([(new replcljs.core.Symbol(null,"deftype*")),(new replcljs.core.Symbol(null,"new")),(new replcljs.core.Symbol(null,"try*")),(new replcljs.core.Symbol(null,"quote")),(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"set!")),(new replcljs.core.Symbol(null,"recur")),(new replcljs.core.Symbol(null,".")),(new replcljs.core.Symbol(null,"ns")),(new replcljs.core.Symbol(null,"do")),(new replcljs.core.Symbol(null,"fn*")),(new replcljs.core.Symbol(null,"throw")),(new replcljs.core.Symbol(null,"letfn*")),(new replcljs.core.Symbol(null,"js*")),(new replcljs.core.Symbol(null,"defrecord*")),(new replcljs.core.Symbol(null,"let*")),(new replcljs.core.Symbol(null,"loop*")),(new replcljs.core.Symbol(null,"if")),(new replcljs.core.Symbol(null,"def"))]);
replcljs.analyzer._STAR_recur_frames_STAR_ = null;
replcljs.analyzer._STAR_loop_lets_STAR_ = null;
replcljs.analyzer.analyze_keyword = (function analyze_keyword(env,sym){
return replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form"],{"\uFDD0'op":"\uFDD0'constant","\uFDD0'env":env,"\uFDD0'form":((replcljs.core._EQ_.call(null,replcljs.core.namespace.call(null,sym),replcljs.core.name.call(null,replcljs.analyzer._STAR_reader_ns_name_STAR_)))?replcljs.core.keyword.call(null,replcljs.core.name.call(null,(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env))),replcljs.core.name.call(null,sym)):sym)});
});
/**
* returns {:statements .. :ret ..}
*/
replcljs.analyzer.analyze_block = (function analyze_block(env,exprs){
var statements = (function (){var _STAR_recur_frames_STAR_4730 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.core.seq.call(null,replcljs.core.map.call(null,(function (p1__4727_SHARP_){
return replcljs.analyzer.analyze.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'statement"),p1__4727_SHARP_);
}),replcljs.core.butlast.call(null,exprs)));
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4730;
}})();
var ret = (((replcljs.core.count.call(null,exprs) <= 1))?replcljs.analyzer.analyze.call(null,env,replcljs.core.first.call(null,exprs)):replcljs.analyzer.analyze.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context",((replcljs.core._EQ_.call(null,"\uFDD0'statement",(new replcljs.core.Keyword("\uFDD0'context")).call(null,env)))?"\uFDD0'statement":"\uFDD0'return")),replcljs.core.last.call(null,exprs)));
return replcljs.core.ObjMap.fromObject(["\uFDD0'statements","\uFDD0'ret"],{"\uFDD0'statements":statements,"\uFDD0'ret":ret});
});
replcljs.analyzer.parse = (function (){var method_table__2219__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var prefer_table__2220__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var method_cache__2221__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var cached_hierarchy__2222__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var hierarchy__2223__auto__ = replcljs.core._lookup.call(null,replcljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",replcljs.core.global_hierarchy);
return (new replcljs.core.MultiFn("parse",(function() {
var G__4732__delegate = function (op,rest){
return op;
};
var G__4732 = function (op,var_args){
var rest = null;
if (replgoog.isDef(var_args)) {
  rest = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return G__4732__delegate.call(this, op, rest);
};
G__4732.cljs$lang$maxFixedArity = 1;
G__4732.cljs$lang$applyTo = (function (arglist__4733){
var op = replcljs.core.first(arglist__4733);
var rest = replcljs.core.rest(arglist__4733);
return G__4732__delegate(op, rest);
});
G__4732.cljs$lang$arity$variadic = G__4732__delegate;
return G__4732;
})()
,"\uFDD0'default",hierarchy__2223__auto__,method_table__2219__auto__,prefer_table__2220__auto__,method_cache__2221__auto__,cached_hierarchy__2222__auto__));
})();
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"if")),(function (op,env,p__4734,name){
var vec__4735 = p__4734;
var _ = replcljs.core.nth.call(null,vec__4735,0,null);
var test = replcljs.core.nth.call(null,vec__4735,1,null);
var then = replcljs.core.nth.call(null,vec__4735,2,null);
var else$ = replcljs.core.nth.call(null,vec__4735,3,null);
var form = vec__4735;
var test_expr = (function (){var _STAR_recur_frames_STAR_4736 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.analyzer.analyze.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"),test);
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4736;
}})();
var then_expr = replcljs.analyzer.analyze.call(null,env,then);
var else_expr = replcljs.analyzer.analyze.call(null,env,else$);
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'test","\uFDD0'then","\uFDD0'else","\uFDD0'unchecked","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'if","\uFDD0'form":form,"\uFDD0'test":test_expr,"\uFDD0'then":then_expr,"\uFDD0'else":else_expr,"\uFDD0'unchecked":replcljs.core.deref.call(null,replcljs.analyzer._STAR_unchecked_if_STAR_),"\uFDD0'children":replcljs.core.PersistentVector.fromArray([test_expr,then_expr,else_expr], true)});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"throw")),(function (op,env,p__4738,name){
var vec__4739 = p__4738;
var _ = replcljs.core.nth.call(null,vec__4739,0,null);
var throw$ = replcljs.core.nth.call(null,vec__4739,1,null);
var form = vec__4739;
var throw_expr = (function (){var _STAR_recur_frames_STAR_4740 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.analyzer.analyze.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"),throw$);
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4740;
}})();
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'throw","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'throw","\uFDD0'form":form,"\uFDD0'throw":throw_expr,"\uFDD0'children":replcljs.core.PersistentVector.fromArray([throw_expr], true)});
}));
replcljs.analyzer.block_children = (function block_children(p__4743){
var map__4745 = p__4743;
var map__4745__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4745))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4745):map__4745);
var block = map__4745__$1;
var ret = replcljs.core._lookup.call(null,map__4745__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4745__$1,"\uFDD0'statements",null);
if(replcljs.core.truth_(block))
{return replcljs.core.conj.call(null,replcljs.core.vec.call(null,statements),ret);
} else
{return null;
}
});
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"try*")),(function (op,env,p__4746,name){
var vec__4747 = p__4746;
var _ = replcljs.core.nth.call(null,vec__4747,0,null);
var body = replcljs.core.nthnext.call(null,vec__4747,1);
var form = vec__4747;
var body__$1 = replcljs.core.vec.call(null,body);
var catchenv = replcljs.core.update_in.call(null,env,replcljs.core.PersistentVector.fromArray(["\uFDD0'context"], true),(function (p1__4742_SHARP_){
if(replcljs.core._EQ_.call(null,"\uFDD0'expr",p1__4742_SHARP_))
{return "\uFDD0'return";
} else
{return p1__4742_SHARP_;
}
}));
var tail = replcljs.core.peek.call(null,body__$1);
var fblock = (((function (){var and__3941__auto__ = replcljs.core.seq_QMARK_.call(null,tail);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,(new replcljs.core.Symbol(null,"finally")),replcljs.core.first.call(null,tail));
} else
{return and__3941__auto__;
}
})())?replcljs.core.rest.call(null,tail):null);
var finally$ = (replcljs.core.truth_(fblock)?replcljs.analyzer.analyze_block.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'statement"),fblock):null);
var body__$2 = (replcljs.core.truth_(finally$)?replcljs.core.pop.call(null,body__$1):body__$1);
var tail__$1 = replcljs.core.peek.call(null,body__$2);
var cblock = (((function (){var and__3941__auto__ = replcljs.core.seq_QMARK_.call(null,tail__$1);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,(new replcljs.core.Symbol(null,"catch")),replcljs.core.first.call(null,tail__$1));
} else
{return and__3941__auto__;
}
})())?replcljs.core.rest.call(null,tail__$1):null);
var name__$1 = replcljs.core.first.call(null,cblock);
var locals = (new replcljs.core.Keyword("\uFDD0'locals")).call(null,catchenv);
var locals__$1 = (replcljs.core.truth_(name__$1)?replcljs.core.assoc.call(null,locals,name__$1,replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":name__$1})):locals);
var catch$ = (replcljs.core.truth_(cblock)?replcljs.analyzer.analyze_block.call(null,replcljs.core.assoc.call(null,catchenv,"\uFDD0'locals",locals__$1),replcljs.core.rest.call(null,cblock)):null);
var body__$3 = (replcljs.core.truth_(name__$1)?replcljs.core.pop.call(null,body__$2):body__$2);
var try$ = (replcljs.core.truth_(body__$3)?replcljs.analyzer.analyze_block.call(null,(replcljs.core.truth_((function (){var or__3943__auto__ = name__$1;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return finally$;
}
})())?catchenv:env),body__$3):null);
if(replcljs.core.truth_(name__$1))
{if(replcljs.core.not.call(null,replcljs.core.namespace.call(null,name__$1)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Can't qualify symbol in catch"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"namespace")),(new replcljs.core.Symbol(null,"name"))),replcljs.core.hash_map("\uFDD0'line",277,"\uFDD0'column",29))),replcljs.core.hash_map("\uFDD0'line",277,"\uFDD0'column",24))))].join('')));
}
} else
{}
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'try","\uFDD0'finally","\uFDD0'name","\uFDD0'catch","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'try*","\uFDD0'form":form,"\uFDD0'try":try$,"\uFDD0'finally":finally$,"\uFDD0'name":name__$1,"\uFDD0'catch":catch$,"\uFDD0'children":replcljs.core.vec.call(null,replcljs.core.mapcat.call(null,replcljs.analyzer.block_children,replcljs.core.PersistentVector.fromArray([try$,catch$,finally$], true)))});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"def")),(function (op,env,form,name){
var pfn = (function() {
var G__4750 = null;
var G__4750__2 = (function (_,sym){
return replcljs.core.ObjMap.fromObject(["\uFDD0'sym"],{"\uFDD0'sym":sym});
});
var G__4750__3 = (function (_,sym,init){
return replcljs.core.ObjMap.fromObject(["\uFDD0'sym","\uFDD0'init"],{"\uFDD0'sym":sym,"\uFDD0'init":init});
});
var G__4750__4 = (function (_,sym,doc,init){
return replcljs.core.ObjMap.fromObject(["\uFDD0'sym","\uFDD0'doc","\uFDD0'init"],{"\uFDD0'sym":sym,"\uFDD0'doc":doc,"\uFDD0'init":init});
});
G__4750 = function(_,sym,doc,init){
switch(arguments.length){
case 2:
return G__4750__2.call(this,_,sym);
case 3:
return G__4750__3.call(this,_,sym,doc);
case 4:
return G__4750__4.call(this,_,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__4750;
})()
;
var args = replcljs.core.apply.call(null,pfn,form);
var sym = (new replcljs.core.Keyword("\uFDD0'sym")).call(null,args);
var sym_meta = replcljs.core.meta.call(null,sym);
var tag = (new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,sym));
var protocol = (new replcljs.core.Keyword("\uFDD0'protocol")).call(null,replcljs.core.meta.call(null,sym));
var dynamic = (new replcljs.core.Keyword("\uFDD0'dynamic")).call(null,replcljs.core.meta.call(null,sym));
var ns_name = (new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env));
if(replcljs.core.not.call(null,replcljs.core.namespace.call(null,sym)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Can't def ns-qualified name"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"namespace")),(new replcljs.core.Symbol(null,"sym"))),replcljs.core.hash_map("\uFDD0'line",299,"\uFDD0'column",18))),replcljs.core.hash_map("\uFDD0'line",299,"\uFDD0'column",13))))].join('')));
}
var env__$1 = (replcljs.core.truth_((function (){var or__3943__auto__ = (function (){var and__3941__auto__ = replcljs.core.not_EQ_.call(null,ns_name,(new replcljs.core.Symbol(null,"replcljs.core")));
if(and__3941__auto__)
{return replcljs.analyzer.core_name_QMARK_.call(null,env,sym);
} else
{return and__3941__auto__;
}
})();
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([ns_name,"\uFDD0'uses",sym], true));
}
})())?(function (){var ev = replcljs.analyzer.resolve_existing_var.call(null,replcljs.core.dissoc.call(null,env,"\uFDD0'locals"),sym);
if(replcljs.core.truth_(replcljs.analyzer._STAR_cljs_warn_on_redef_STAR_))
{replcljs.analyzer.warning.call(null,env,[replcljs.core.str("WARNING: "),replcljs.core.str(sym),replcljs.core.str(" already refers to: "),replcljs.core.str(replcljs.core.symbol.call(null,[replcljs.core.str((new replcljs.core.Keyword("\uFDD0'ns")).call(null,ev))].join(''),[replcljs.core.str(sym)].join(''))),replcljs.core.str(" being replaced by: "),replcljs.core.str(replcljs.core.symbol.call(null,[replcljs.core.str(ns_name)].join(''),[replcljs.core.str(sym)].join('')))].join(''));
} else
{}
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([ns_name,"\uFDD0'excludes"], true),replcljs.core.conj,sym);
return replcljs.core.update_in.call(null,env,replcljs.core.PersistentVector.fromArray(["\uFDD0'ns","\uFDD0'excludes"], true),replcljs.core.conj,sym);
})():env);
var name__$1 = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,env__$1,"\uFDD0'locals"),sym));
var init_expr = ((replcljs.core.contains_QMARK_.call(null,args,"\uFDD0'init"))?(function (){var _STAR_recur_frames_STAR_4748 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.analyzer.analyze.call(null,replcljs.core.assoc.call(null,env__$1,"\uFDD0'context","\uFDD0'expr"),(new replcljs.core.Keyword("\uFDD0'init")).call(null,args),sym);
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4748;
}})():null);
var fn_var_QMARK_ = (function (){var and__3941__auto__ = init_expr;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'op")).call(null,init_expr),"\uFDD0'fn");
} else
{return and__3941__auto__;
}
})();
var export_as = (function (){var temp__4092__auto__ = (new replcljs.core.Keyword("\uFDD0'export")).call(null,replcljs.core.meta.call(null,sym));
if(replcljs.core.truth_(temp__4092__auto__))
{var export_val = temp__4092__auto__;
if(replcljs.core._EQ_.call(null,true,export_val))
{return name__$1;
} else
{return export_val;
}
} else
{return null;
}
})();
var doc = (function (){var or__3943__auto__ = (new replcljs.core.Keyword("\uFDD0'doc")).call(null,args);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new replcljs.core.Keyword("\uFDD0'doc")).call(null,replcljs.core.meta.call(null,sym));
}
})();
var temp__4092__auto___4751 = replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([ns_name,"\uFDD0'defs",sym], true));
if(replcljs.core.truth_(temp__4092__auto___4751))
{var v_4752 = temp__4092__auto___4751;
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_warn_on_fn_var_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = replcljs.core.not.call(null,(new replcljs.core.Keyword("\uFDD0'declared")).call(null,replcljs.core.meta.call(null,sym)));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (new replcljs.core.Keyword("\uFDD0'fn-var")).call(null,v_4752);
if(replcljs.core.truth_(and__3941__auto____$2))
{return replcljs.core.not.call(null,fn_var_QMARK_);
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
{replcljs.analyzer.warning.call(null,env__$1,[replcljs.core.str("WARNING: "),replcljs.core.str(replcljs.core.symbol.call(null,[replcljs.core.str(ns_name)].join(''),[replcljs.core.str(sym)].join(''))),replcljs.core.str(" no longer fn, references are stale")].join(''));
} else
{}
} else
{}
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.assoc_in,replcljs.core.PersistentVector.fromArray([ns_name,"\uFDD0'defs",sym], true),replcljs.core.merge.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'name"],{"\uFDD0'name":name__$1}),sym_meta,(replcljs.core.truth_(doc)?replcljs.core.ObjMap.fromObject(["\uFDD0'doc"],{"\uFDD0'doc":doc}):null),(replcljs.core.truth_(dynamic)?replcljs.core.ObjMap.fromObject(["\uFDD0'dynamic"],{"\uFDD0'dynamic":true}):null),(function (){var temp__4092__auto__ = (new replcljs.core.Keyword("\uFDD0'line")).call(null,env__$1);
if(replcljs.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return replcljs.core.ObjMap.fromObject(["\uFDD0'file","\uFDD0'line"],{"\uFDD0'file":replcljs.analyzer._STAR_cljs_file_STAR_,"\uFDD0'line":line});
} else
{return null;
}
})(),(replcljs.core.truth_(protocol)?replcljs.core.ObjMap.fromObject(["\uFDD0'protocol"],{"\uFDD0'protocol":protocol}):null),(function (){var temp__4092__auto__ = (new replcljs.core.Keyword("\uFDD0'protocol-symbol")).call(null,replcljs.core.meta.call(null,sym));
if(replcljs.core.truth_(temp__4092__auto__))
{var protocol_symbol = temp__4092__auto__;
return replcljs.core.ObjMap.fromObject(["\uFDD0'protocol-symbol"],{"\uFDD0'protocol-symbol":protocol_symbol});
} else
{return null;
}
})(),(replcljs.core.truth_(fn_var_QMARK_)?replcljs.core.ObjMap.fromObject(["\uFDD0'fn-var","\uFDD0'protocol-impl","\uFDD0'protocol-inline","\uFDD0'variadic","\uFDD0'max-fixed-arity","\uFDD0'method-params"],{"\uFDD0'fn-var":true,"\uFDD0'protocol-impl":(new replcljs.core.Keyword("\uFDD0'protocol-impl")).call(null,init_expr),"\uFDD0'protocol-inline":(new replcljs.core.Keyword("\uFDD0'protocol-inline")).call(null,init_expr),"\uFDD0'variadic":(new replcljs.core.Keyword("\uFDD0'variadic")).call(null,init_expr),"\uFDD0'max-fixed-arity":(new replcljs.core.Keyword("\uFDD0'max-fixed-arity")).call(null,init_expr),"\uFDD0'method-params":replcljs.core.map.call(null,"\uFDD0'params",(new replcljs.core.Keyword("\uFDD0'methods")).call(null,init_expr))}):null)));
return replcljs.core.merge.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'name","\uFDD0'doc","\uFDD0'init"],{"\uFDD0'env":env__$1,"\uFDD0'op":"\uFDD0'def","\uFDD0'form":form,"\uFDD0'name":name__$1,"\uFDD0'doc":doc,"\uFDD0'init":init_expr}),(replcljs.core.truth_(tag)?replcljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":tag}):null),(replcljs.core.truth_(dynamic)?replcljs.core.ObjMap.fromObject(["\uFDD0'dynamic"],{"\uFDD0'dynamic":true}):null),(replcljs.core.truth_(export_as)?replcljs.core.ObjMap.fromObject(["\uFDD0'export"],{"\uFDD0'export":export_as}):null),(replcljs.core.truth_(init_expr)?replcljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":replcljs.core.PersistentVector.fromArray([init_expr], true)}):null));
}));
replcljs.analyzer.analyze_fn_method = (function analyze_fn_method(env,locals,form,type){
var param_names = replcljs.core.first.call(null,form);
var variadic = replcljs.core.boolean$.call(null,replcljs.core.some.call(null,replcljs.core.set([(new replcljs.core.Symbol(null,"&"))]),param_names));
var param_names__$1 = replcljs.core.vec.call(null,replcljs.core.remove.call(null,replcljs.core.set([(new replcljs.core.Symbol(null,"&"))]),param_names));
var body = replcljs.core.next.call(null,form);
var vec__4760 = replcljs.core.reduce.call(null,(function (p__4761,name){
var vec__4762 = p__4761;
var locals__$1 = replcljs.core.nth.call(null,vec__4762,0,null);
var params = replcljs.core.nth.call(null,vec__4762,1,null);
var param = replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'tag","\uFDD0'shadow"],{"\uFDD0'name":name,"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,name)),"\uFDD0'shadow":locals__$1.call(null,name)});
return replcljs.core.PersistentVector.fromArray([replcljs.core.assoc.call(null,locals__$1,name,param),replcljs.core.conj.call(null,params,param)], true);
}),replcljs.core.PersistentVector.fromArray([locals,replcljs.core.PersistentVector.EMPTY], true),param_names__$1);
var locals__$1 = replcljs.core.nth.call(null,vec__4760,0,null);
var params = replcljs.core.nth.call(null,vec__4760,1,null);
var fixed_arity = replcljs.core.count.call(null,((variadic)?replcljs.core.butlast.call(null,params):params));
var recur_frame = replcljs.core.ObjMap.fromObject(["\uFDD0'params","\uFDD0'flag"],{"\uFDD0'params":params,"\uFDD0'flag":replcljs.core.atom.call(null,null)});
var block = (function (){var _STAR_recur_frames_STAR_4763 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,recur_frame,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.analyzer.analyze_block.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'return","\uFDD0'locals",locals__$1),body);
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4763;
}})();
return replcljs.core.merge.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'variadic","\uFDD0'params","\uFDD0'max-fixed-arity","\uFDD0'type","\uFDD0'form","\uFDD0'recurs"],{"\uFDD0'env":env,"\uFDD0'variadic":variadic,"\uFDD0'params":params,"\uFDD0'max-fixed-arity":fixed_arity,"\uFDD0'type":type,"\uFDD0'form":form,"\uFDD0'recurs":replcljs.core.deref.call(null,(new replcljs.core.Keyword("\uFDD0'flag")).call(null,recur_frame))}),block);
});
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"fn*")),(function (op,env,p__4765,name){
var vec__4766 = p__4765;
var _ = replcljs.core.nth.call(null,vec__4766,0,null);
var args = replcljs.core.nthnext.call(null,vec__4766,1);
var form = vec__4766;
var vec__4767 = ((replcljs.core.symbol_QMARK_.call(null,replcljs.core.first.call(null,args)))?replcljs.core.PersistentVector.fromArray([replcljs.core.first.call(null,args),replcljs.core.next.call(null,args)], true):replcljs.core.PersistentVector.fromArray([name,replcljs.core.seq.call(null,args)], true));
var name__$1 = replcljs.core.nth.call(null,vec__4767,0,null);
var meths = replcljs.core.nth.call(null,vec__4767,1,null);
var meths__$1 = ((replcljs.core.vector_QMARK_.call(null,replcljs.core.first.call(null,meths)))?replcljs.core.list.call(null,meths):meths);
var locals = (new replcljs.core.Keyword("\uFDD0'locals")).call(null,env);
var locals__$1 = (replcljs.core.truth_(name__$1)?replcljs.core.assoc.call(null,locals,name__$1,replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'shadow"],{"\uFDD0'name":name__$1,"\uFDD0'shadow":locals.call(null,name__$1)})):locals);
var type = (new replcljs.core.Keyword("\uFDD0'replcljs.analyzer/type")).call(null,replcljs.core.meta.call(null,form));
var fields = (new replcljs.core.Keyword("\uFDD0'replcljs.analyzer/fields")).call(null,replcljs.core.meta.call(null,form));
var protocol_impl = (new replcljs.core.Keyword("\uFDD0'protocol-impl")).call(null,replcljs.core.meta.call(null,form));
var protocol_inline = (new replcljs.core.Keyword("\uFDD0'protocol-inline")).call(null,replcljs.core.meta.call(null,form));
var locals__$2 = replcljs.core.reduce.call(null,(function (m,fld){
return replcljs.core.assoc.call(null,m,fld,replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'field","\uFDD0'mutable","\uFDD0'tag","\uFDD0'shadow"],{"\uFDD0'name":fld,"\uFDD0'field":true,"\uFDD0'mutable":(new replcljs.core.Keyword("\uFDD0'mutable")).call(null,replcljs.core.meta.call(null,fld)),"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,fld)),"\uFDD0'shadow":m.call(null,fld)}));
}),locals__$1,fields);
var menv = (((replcljs.core.count.call(null,meths__$1) > 1))?replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"):env);
var menv__$1 = replcljs.core.merge.call(null,menv,replcljs.core.ObjMap.fromObject(["\uFDD0'protocol-impl","\uFDD0'protocol-inline"],{"\uFDD0'protocol-impl":protocol_impl,"\uFDD0'protocol-inline":protocol_inline}));
var methods$ = replcljs.core.map.call(null,(function (p1__4753_SHARP_){
return replcljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$2,p1__4753_SHARP_,type);
}),meths__$1);
var max_fixed_arity = replcljs.core.apply.call(null,replcljs.core.max,replcljs.core.map.call(null,"\uFDD0'max-fixed-arity",methods$));
var variadic = replcljs.core.boolean$.call(null,replcljs.core.some.call(null,"\uFDD0'variadic",methods$));
var locals__$3 = (replcljs.core.truth_(name__$1)?replcljs.core.update_in.call(null,locals__$2,replcljs.core.PersistentVector.fromArray([name__$1], true),replcljs.core.assoc,"\uFDD0'fn-var",true,"\uFDD0'variadic",variadic,"\uFDD0'max-fixed-arity",max_fixed_arity,"\uFDD0'method-params",replcljs.core.map.call(null,"\uFDD0'params",methods$)):locals__$2);
var methods$__$1 = (replcljs.core.truth_(name__$1)?replcljs.core.map.call(null,(function (p1__4754_SHARP_){
return replcljs.analyzer.analyze_fn_method.call(null,menv__$1,locals__$3,p1__4754_SHARP_,type);
}),meths__$1):methods$);
return replcljs.core.ObjMap.fromObject(["\uFDD0'children","\uFDD0'loop-lets","\uFDD0'recur-frames","\uFDD0'form","\uFDD0'op","\uFDD0'name","\uFDD0'protocol-impl","\uFDD0'max-fixed-arity","\uFDD0'methods","\uFDD0'env","\uFDD0'protocol-inline","\uFDD0'variadic","\uFDD0'jsdoc"],{"\uFDD0'children":replcljs.core.vec.call(null,replcljs.core.mapcat.call(null,replcljs.analyzer.block_children,methods$__$1)),"\uFDD0'loop-lets":replcljs.analyzer._STAR_loop_lets_STAR_,"\uFDD0'recur-frames":replcljs.analyzer._STAR_recur_frames_STAR_,"\uFDD0'form":form,"\uFDD0'op":"\uFDD0'fn","\uFDD0'name":name__$1,"\uFDD0'protocol-impl":protocol_impl,"\uFDD0'max-fixed-arity":max_fixed_arity,"\uFDD0'methods":methods$__$1,"\uFDD0'env":env,"\uFDD0'protocol-inline":protocol_inline,"\uFDD0'variadic":variadic,"\uFDD0'jsdoc":replcljs.core.PersistentVector.fromArray([((variadic)?"@param {...*} var_args":null)], true)});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"letfn*")),(function (op,env,p__4768,name){
var vec__4769 = p__4768;
var _ = replcljs.core.nth.call(null,vec__4769,0,null);
var bindings = replcljs.core.nth.call(null,vec__4769,1,null);
var exprs = replcljs.core.nthnext.call(null,vec__4769,2);
var form = vec__4769;
if((function (){var and__3941__auto__ = replcljs.core.vector_QMARK_.call(null,bindings);
if(and__3941__auto__)
{return replcljs.core.even_QMARK_.call(null,replcljs.core.count.call(null,bindings));
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("bindings must be vector of even number of elements"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"vector?")),(new replcljs.core.Symbol(null,"bindings"))),replcljs.core.hash_map("\uFDD0'line",428,"\uFDD0'column",16)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"even?")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"count")),(new replcljs.core.Symbol(null,"bindings"))),replcljs.core.hash_map("\uFDD0'line",428,"\uFDD0'column",42))),replcljs.core.hash_map("\uFDD0'line",428,"\uFDD0'column",35))),replcljs.core.hash_map("\uFDD0'line",428,"\uFDD0'column",11))))].join('')));
}
var n__GT_fexpr = replcljs.core.into.call(null,replcljs.core.ObjMap.EMPTY,replcljs.core.map.call(null,replcljs.core.juxt.call(null,replcljs.core.first,replcljs.core.second),replcljs.core.partition.call(null,2,bindings)));
var names = replcljs.core.keys.call(null,n__GT_fexpr);
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
var vec__4770 = replcljs.core.reduce.call(null,(function (p__4772,n){
var vec__4773 = p__4772;
var map__4774 = replcljs.core.nth.call(null,vec__4773,0,null);
var map__4774__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4774))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4774):map__4774);
var env__$1 = map__4774__$1;
var locals = replcljs.core._lookup.call(null,map__4774__$1,"\uFDD0'locals",null);
var bes = replcljs.core.nth.call(null,vec__4773,1,null);
var be = replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'tag","\uFDD0'local","\uFDD0'shadow"],{"\uFDD0'name":n,"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,n)),"\uFDD0'local":true,"\uFDD0'shadow":locals.call(null,n)});
return replcljs.core.PersistentVector.fromArray([replcljs.core.assoc_in.call(null,env__$1,replcljs.core.PersistentVector.fromArray(["\uFDD0'locals",n], true),be),replcljs.core.conj.call(null,bes,be)], true);
}),replcljs.core.PersistentVector.fromArray([env,replcljs.core.PersistentVector.EMPTY], true),names);
var meth_env = replcljs.core.nth.call(null,vec__4770,0,null);
var bes = replcljs.core.nth.call(null,vec__4770,1,null);
var meth_env__$1 = replcljs.core.assoc.call(null,meth_env,"\uFDD0'context","\uFDD0'expr");
var bes__$1 = replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p__4775){
var map__4776 = p__4775;
var map__4776__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4776))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4776):map__4776);
var be = map__4776__$1;
var shadow = replcljs.core._lookup.call(null,map__4776__$1,"\uFDD0'shadow",null);
var name__$1 = replcljs.core._lookup.call(null,map__4776__$1,"\uFDD0'name",null);
var env__$1 = replcljs.core.assoc_in.call(null,meth_env__$1,replcljs.core.PersistentVector.fromArray(["\uFDD0'locals",name__$1], true),shadow);
return replcljs.core.assoc.call(null,be,"\uFDD0'init",replcljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1)));
}),bes));
var map__4771 = replcljs.analyzer.analyze_block.call(null,replcljs.core.assoc.call(null,meth_env__$1,"\uFDD0'context",((replcljs.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context)),exprs);
var map__4771__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4771))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4771):map__4771);
var ret = replcljs.core._lookup.call(null,map__4771__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4771__$1,"\uFDD0'statements",null);
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'bindings","\uFDD0'statements","\uFDD0'ret","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'letfn","\uFDD0'bindings":bes__$1,"\uFDD0'statements":statements,"\uFDD0'ret":ret,"\uFDD0'form":form,"\uFDD0'children":replcljs.core.into.call(null,replcljs.core.vec.call(null,replcljs.core.map.call(null,"\uFDD0'init",bes__$1)),replcljs.core.conj.call(null,replcljs.core.vec.call(null,statements),ret))});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"do")),(function (op,env,p__4777,_){
var vec__4778 = p__4777;
var ___$1 = replcljs.core.nth.call(null,vec__4778,0,null);
var exprs = replcljs.core.nthnext.call(null,vec__4778,1);
var form = vec__4778;
var block = replcljs.analyzer.analyze_block.call(null,env,exprs);
return replcljs.core.merge.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'do","\uFDD0'form":form,"\uFDD0'children":replcljs.analyzer.block_children.call(null,block)}),block);
}));
replcljs.analyzer.analyze_let = (function analyze_let(encl_env,p__4779,is_loop){
var vec__4789 = p__4779;
var _ = replcljs.core.nth.call(null,vec__4789,0,null);
var bindings = replcljs.core.nth.call(null,vec__4789,1,null);
var exprs = replcljs.core.nthnext.call(null,vec__4789,2);
var form = vec__4789;
if((function (){var and__3941__auto__ = replcljs.core.vector_QMARK_.call(null,bindings);
if(and__3941__auto__)
{return replcljs.core.even_QMARK_.call(null,replcljs.core.count.call(null,bindings));
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("bindings must be vector of even number of elements"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"vector?")),(new replcljs.core.Symbol(null,"bindings"))),replcljs.core.hash_map("\uFDD0'line",459,"\uFDD0'column",16)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"even?")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"count")),(new replcljs.core.Symbol(null,"bindings"))),replcljs.core.hash_map("\uFDD0'line",459,"\uFDD0'column",42))),replcljs.core.hash_map("\uFDD0'line",459,"\uFDD0'column",35))),replcljs.core.hash_map("\uFDD0'line",459,"\uFDD0'column",11))))].join('')));
}
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,encl_env);
var vec__4790 = (function (){var _STAR_recur_frames_STAR_4792 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
var bes = replcljs.core.PersistentVector.EMPTY;
var env = replcljs.core.assoc.call(null,encl_env,"\uFDD0'context","\uFDD0'expr");
var bindings__$1 = replcljs.core.seq.call(null,replcljs.core.partition.call(null,2,bindings));
while(true){
var temp__4090__auto__ = replcljs.core.first.call(null,bindings__$1);
if(replcljs.core.truth_(temp__4090__auto__))
{var vec__4794 = temp__4090__auto__;
var name = replcljs.core.nth.call(null,vec__4794,0,null);
var init = replcljs.core.nth.call(null,vec__4794,1,null);
if(replcljs.core.not.call(null,(function (){var or__3943__auto__ = replcljs.core.namespace.call(null,name);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return ([replcljs.core.str(name)].join('').indexOf(".") >= 0);
}
})()))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str([replcljs.core.str("Invalid local name: "),replcljs.core.str(name)].join('')),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"or")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"namespace")),(new replcljs.core.Symbol(null,"name"))),replcljs.core.hash_map("\uFDD0'line",468,"\uFDD0'column",33)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,">=")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,".indexOf")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"str")),(new replcljs.core.Symbol(null,"name"))),replcljs.core.hash_map("\uFDD0'line",468,"\uFDD0'column",64)),"."),replcljs.core.hash_map("\uFDD0'line",468,"\uFDD0'column",54)),0),replcljs.core.hash_map("\uFDD0'line",468,"\uFDD0'column",50))),replcljs.core.hash_map("\uFDD0'line",468,"\uFDD0'column",29))),replcljs.core.hash_map("\uFDD0'line",468,"\uFDD0'column",24))))].join('')));
}
var init_expr = replcljs.analyzer.analyze.call(null,env,init);
var be = replcljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'init","\uFDD0'tag","\uFDD0'local","\uFDD0'shadow"],{"\uFDD0'name":name,"\uFDD0'init":init_expr,"\uFDD0'tag":(function (){var or__3943__auto__ = (new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,name));
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (new replcljs.core.Keyword("\uFDD0'tag")).call(null,init_expr);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return (new replcljs.core.Keyword("\uFDD0'tag")).call(null,(new replcljs.core.Keyword("\uFDD0'info")).call(null,init_expr));
}
}
})(),"\uFDD0'local":true,"\uFDD0'shadow":name.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env))});
var be__$1 = ((replcljs.core._EQ_.call(null,(new replcljs.core.Keyword("\uFDD0'op")).call(null,init_expr),"\uFDD0'fn"))?replcljs.core.merge.call(null,be,replcljs.core.ObjMap.fromObject(["\uFDD0'fn-var","\uFDD0'variadic","\uFDD0'max-fixed-arity","\uFDD0'method-params"],{"\uFDD0'fn-var":true,"\uFDD0'variadic":(new replcljs.core.Keyword("\uFDD0'variadic")).call(null,init_expr),"\uFDD0'max-fixed-arity":(new replcljs.core.Keyword("\uFDD0'max-fixed-arity")).call(null,init_expr),"\uFDD0'method-params":replcljs.core.map.call(null,"\uFDD0'params",(new replcljs.core.Keyword("\uFDD0'methods")).call(null,init_expr))})):be);
{
var G__4798 = replcljs.core.conj.call(null,bes,be__$1);
var G__4799 = replcljs.core.assoc_in.call(null,env,replcljs.core.PersistentVector.fromArray(["\uFDD0'locals",name], true),be__$1);
var G__4800 = replcljs.core.next.call(null,bindings__$1);
bes = G__4798;
env = G__4799;
bindings__$1 = G__4800;
continue;
}
} else
{return replcljs.core.PersistentVector.fromArray([bes,env], true);
}
break;
}
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4792;
}})();
var bes = replcljs.core.nth.call(null,vec__4790,0,null);
var env = replcljs.core.nth.call(null,vec__4790,1,null);
var recur_frame = (replcljs.core.truth_(is_loop)?replcljs.core.ObjMap.fromObject(["\uFDD0'params","\uFDD0'flag"],{"\uFDD0'params":bes,"\uFDD0'flag":replcljs.core.atom.call(null,null)}):null);
var map__4791 = (function (){var _STAR_recur_frames_STAR_4795 = replcljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_4796 = replcljs.analyzer._STAR_loop_lets_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = (replcljs.core.truth_(recur_frame)?replcljs.core.cons.call(null,recur_frame,replcljs.analyzer._STAR_recur_frames_STAR_):replcljs.analyzer._STAR_recur_frames_STAR_);
replcljs.analyzer._STAR_loop_lets_STAR_ = (replcljs.core.truth_(is_loop)?(function (){var or__3943__auto__ = replcljs.analyzer._STAR_loop_lets_STAR_;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.List.EMPTY;
}
})():(replcljs.core.truth_(replcljs.analyzer._STAR_loop_lets_STAR_)?replcljs.core.cons.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'params"],{"\uFDD0'params":bes}),replcljs.analyzer._STAR_loop_lets_STAR_):null));
return replcljs.analyzer.analyze_block.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context",((replcljs.core._EQ_.call(null,"\uFDD0'expr",context))?"\uFDD0'return":context)),exprs);
}finally {replcljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_4796;
replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4795;
}})();
var map__4791__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4791))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4791):map__4791);
var ret = replcljs.core._lookup.call(null,map__4791__$1,"\uFDD0'ret",null);
var statements = replcljs.core._lookup.call(null,map__4791__$1,"\uFDD0'statements",null);
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'loop","\uFDD0'bindings","\uFDD0'statements","\uFDD0'ret","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":encl_env,"\uFDD0'op":"\uFDD0'let","\uFDD0'loop":is_loop,"\uFDD0'bindings":bes,"\uFDD0'statements":statements,"\uFDD0'ret":ret,"\uFDD0'form":form,"\uFDD0'children":replcljs.core.into.call(null,replcljs.core.vec.call(null,replcljs.core.map.call(null,"\uFDD0'init",bes)),replcljs.core.conj.call(null,replcljs.core.vec.call(null,statements),ret))});
});
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"let*")),(function (op,encl_env,form,_){
return replcljs.analyzer.analyze_let.call(null,encl_env,form,false);
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"loop*")),(function (op,encl_env,form,_){
return replcljs.analyzer.analyze_let.call(null,encl_env,form,true);
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"recur")),(function (op,env,p__4802,_){
var vec__4803 = p__4802;
var ___$1 = replcljs.core.nth.call(null,vec__4803,0,null);
var exprs = replcljs.core.nthnext.call(null,vec__4803,1);
var form = vec__4803;
var context = (new replcljs.core.Keyword("\uFDD0'context")).call(null,env);
var frame = replcljs.core.first.call(null,replcljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_4804 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4801_SHARP_){
return replcljs.analyzer.analyze.call(null,replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr"),p1__4801_SHARP_);
}),exprs));
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4804;
}})();
if(replcljs.core.truth_(frame))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Can't recur here"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,(new replcljs.core.Symbol(null,"frame"))))].join('')));
}
if(replcljs.core._EQ_.call(null,replcljs.core.count.call(null,exprs__$1),replcljs.core.count.call(null,(new replcljs.core.Keyword("\uFDD0'params")).call(null,frame))))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("recur argument count mismatch"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"=")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"count")),(new replcljs.core.Symbol(null,"exprs"))),replcljs.core.hash_map("\uFDD0'line",514,"\uFDD0'column",16)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"count")),replcljs.core.with_meta(replcljs.core.list("\uFDD0'params",(new replcljs.core.Symbol(null,"frame"))),replcljs.core.hash_map("\uFDD0'line",514,"\uFDD0'column",37))),replcljs.core.hash_map("\uFDD0'line",514,"\uFDD0'column",30))),replcljs.core.hash_map("\uFDD0'line",514,"\uFDD0'column",13))))].join('')));
}
replcljs.core.reset_BANG_.call(null,(new replcljs.core.Keyword("\uFDD0'flag")).call(null,frame),true);
return replcljs.core.assoc.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'recur","\uFDD0'form":form}),"\uFDD0'frame",frame,"\uFDD0'exprs",exprs__$1,"\uFDD0'children",exprs__$1);
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"quote")),(function (_,env,p__4807,___$1){
var vec__4808 = p__4807;
var ___$2 = replcljs.core.nth.call(null,vec__4808,0,null);
var x = replcljs.core.nth.call(null,vec__4808,1,null);
return replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form"],{"\uFDD0'op":"\uFDD0'constant","\uFDD0'env":env,"\uFDD0'form":x});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"new")),(function (_,env,p__4809,___$1){
var vec__4810 = p__4809;
var ___$2 = replcljs.core.nth.call(null,vec__4810,0,null);
var ctor = replcljs.core.nth.call(null,vec__4810,1,null);
var args = replcljs.core.nthnext.call(null,vec__4810,2);
var form = vec__4810;
if(replcljs.core.symbol_QMARK_.call(null,ctor))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("First arg to new must be a symbol"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"ctor"))),replcljs.core.hash_map("\uFDD0'line",527,"\uFDD0'column",11))))].join('')));
}
var _STAR_recur_frames_STAR_4811 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
var enve = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var ctorexpr = replcljs.analyzer.analyze.call(null,enve,ctor);
var argexprs = replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4806_SHARP_){
return replcljs.analyzer.analyze.call(null,enve,p1__4806_SHARP_);
}),args));
var known_num_fields = (new replcljs.core.Keyword("\uFDD0'num-fields")).call(null,replcljs.analyzer.resolve_existing_var.call(null,env,ctor));
var argc = replcljs.core.count.call(null,args);
if(replcljs.core.truth_((function (){var and__3941__auto__ = known_num_fields;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.not_EQ_.call(null,known_num_fields,argc);
} else
{return and__3941__auto__;
}
})()))
{replcljs.analyzer.warning.call(null,env,[replcljs.core.str("WARNING: Wrong number of args ("),replcljs.core.str(argc),replcljs.core.str(") passed to "),replcljs.core.str(ctor)].join(''));
} else
{}
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'ctor","\uFDD0'args","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'new","\uFDD0'form":form,"\uFDD0'ctor":ctorexpr,"\uFDD0'args":argexprs,"\uFDD0'children":replcljs.core.into.call(null,replcljs.core.PersistentVector.fromArray([ctorexpr], true),argexprs)});
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4811;
}}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"set!")),(function (_,env,p__4813,___$1){
var vec__4814 = p__4813;
var ___$2 = replcljs.core.nth.call(null,vec__4814,0,null);
var target = replcljs.core.nth.call(null,vec__4814,1,null);
var val = replcljs.core.nth.call(null,vec__4814,2,null);
var alt = replcljs.core.nth.call(null,vec__4814,3,null);
var form = vec__4814;
var vec__4815 = (replcljs.core.truth_(alt)?replcljs.core.PersistentVector.fromArray([replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,target),replcljs.core.list.call(null,val))),alt], true):replcljs.core.PersistentVector.fromArray([target,val], true));
var target__$1 = replcljs.core.nth.call(null,vec__4815,0,null);
var val__$1 = replcljs.core.nth.call(null,vec__4815,1,null);
var _STAR_recur_frames_STAR_4816 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
var enve = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var targetexpr = ((replcljs.core._EQ_.call(null,target__$1,(new replcljs.core.Symbol(null,"*unchecked-if*"))))?(function (){replcljs.core.reset_BANG_.call(null,replcljs.analyzer._STAR_unchecked_if_STAR_,val__$1);
return "\uFDD0'replcljs.analyzer/set-unchecked-if";
})():((replcljs.core.symbol_QMARK_.call(null,target__$1))?(function (){var local_4818 = target__$1.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_((function (){var or__3943__auto__ = (local_4818 == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto__ = (new replcljs.core.Keyword("\uFDD0'field")).call(null,local_4818);
if(replcljs.core.truth_(and__3941__auto__))
{return (new replcljs.core.Keyword("\uFDD0'mutable")).call(null,local_4818);
} else
{return and__3941__auto__;
}
}
})()))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Can't set! local var or non-mutable field"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"or")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"nil?")),(new replcljs.core.Symbol(null,"local"))),replcljs.core.hash_map("\uFDD0'line",559,"\uFDD0'column",40)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list("\uFDD0'field",(new replcljs.core.Symbol(null,"local"))),replcljs.core.hash_map("\uFDD0'line",560,"\uFDD0'column",45)),replcljs.core.with_meta(replcljs.core.list("\uFDD0'mutable",(new replcljs.core.Symbol(null,"local"))),replcljs.core.hash_map("\uFDD0'line",561,"\uFDD0'column",45))),replcljs.core.hash_map("\uFDD0'line",560,"\uFDD0'column",40))),replcljs.core.hash_map("\uFDD0'line",559,"\uFDD0'column",36))))].join('')));
}
return replcljs.analyzer.analyze_symbol.call(null,enve,target__$1);
})():(("\uFDD0'else")?((replcljs.core.seq_QMARK_.call(null,target__$1))?(function (){var targetexpr = replcljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'field")).call(null,targetexpr)))
{return targetexpr;
} else
{return null;
}
})():null):null)));
var valexpr = replcljs.analyzer.analyze.call(null,enve,val__$1);
if(replcljs.core.truth_(targetexpr))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("set! target must be a field or a symbol naming a var"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,(new replcljs.core.Symbol(null,"targetexpr"))))].join('')));
}
if(replcljs.core._EQ_.call(null,targetexpr,"\uFDD0'replcljs.analyzer/set-unchecked-if"))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'no-op"});
} else
{if("\uFDD0'else")
{return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'target","\uFDD0'val","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'set!","\uFDD0'form":form,"\uFDD0'target":targetexpr,"\uFDD0'val":valexpr,"\uFDD0'children":replcljs.core.PersistentVector.fromArray([targetexpr,valexpr], true)});
} else
{return null;
}
}
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4816;
}}));
replcljs.analyzer.munge_path = (function munge_path(ss){
return clojure.lang.Compiler.munge.call(null,[replcljs.core.str(ss)].join(''));
});
replcljs.analyzer.ns__GT_relpath = (function ns__GT_relpath(s){
return [replcljs.core.str(replclojure.string.replace.call(null,replcljs.analyzer.munge_path.call(null,s),".","/")),replcljs.core.str(".cljs")].join('');
});
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"ns")),(function (_,env,p__4820,___$1){
var vec__4821 = p__4820;
var ___$2 = replcljs.core.nth.call(null,vec__4821,0,null);
var name = replcljs.core.nth.call(null,vec__4821,1,null);
var args = replcljs.core.nthnext.call(null,vec__4821,2);
var form = vec__4821;
var docstring = ((replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,args)))?replcljs.core.first.call(null,args):null);
var args__$1 = (replcljs.core.truth_(docstring)?replcljs.core.next.call(null,args):args);
var excludes = replcljs.core.reduce.call(null,(function (s,p__4823){
var vec__4824 = p__4823;
var k = replcljs.core.nth.call(null,vec__4824,0,null);
var exclude = replcljs.core.nth.call(null,vec__4824,1,null);
var xs = replcljs.core.nth.call(null,vec__4824,2,null);
if(replcljs.core._EQ_.call(null,k,"\uFDD0'refer-clojure"))
{if(replcljs.core._EQ_.call(null,exclude,"\uFDD0'exclude"))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Only [:refer-clojure :exclude (names)] form supported"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"=")),(new replcljs.core.Symbol(null,"exclude")),"\uFDD0'exclude"),replcljs.core.hash_map("\uFDD0'line",600,"\uFDD0'column",31))))].join('')));
}
if(replcljs.core.not.call(null,replcljs.core.seq.call(null,s)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Only one :refer-clojure form is allowed per namespace definition"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"seq")),(new replcljs.core.Symbol(null,"s"))),replcljs.core.hash_map("\uFDD0'line",601,"\uFDD0'column",36))),replcljs.core.hash_map("\uFDD0'line",601,"\uFDD0'column",31))))].join('')));
}
return replcljs.core.into.call(null,s,xs);
} else
{return s;
}
}),replcljs.core.PersistentHashSet.EMPTY,args__$1);
var deps = replcljs.core.atom.call(null,replcljs.core.PersistentHashSet.EMPTY);
var valid_forms = replcljs.core.atom.call(null,replcljs.core.PersistentHashSet.fromArray(["\uFDD0'import","\uFDD0'use-macros","\uFDD0'require-macros","\uFDD0'require","\uFDD0'use"]));
var error_msg = (function (spec,msg){
return [replcljs.core.str(msg),replcljs.core.str("; offending spec: "),replcljs.core.str(replcljs.core.pr_str.call(null,spec))].join('');
});
var parse_require_spec = (function parse_require_spec(macros_QMARK_,spec){
while(true){
if((function (){var or__3943__auto__ = replcljs.core.symbol_QMARK_.call(null,spec);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.vector_QMARK_.call(null,spec);
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"or")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",609,"\uFDD0'column",42)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"vector?")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",609,"\uFDD0'column",57))),replcljs.core.hash_map("\uFDD0'line",609,"\uFDD0'column",38))))].join('')));
}
if(replcljs.core.vector_QMARK_.call(null,spec))
{if(replcljs.core.symbol_QMARK_.call(null,replcljs.core.first.call(null,spec)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"first")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",612,"\uFDD0'column",49))),replcljs.core.hash_map("\uFDD0'line",612,"\uFDD0'column",40))))].join('')));
}
if(replcljs.core.odd_QMARK_.call(null,replcljs.core.count.call(null,spec)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Only :as alias and :refer (names) options supported in :require")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"odd?")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"count")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",614,"\uFDD0'column",46))),replcljs.core.hash_map("\uFDD0'line",614,"\uFDD0'column",40))))].join('')));
}
if(replcljs.core.every_QMARK_.call(null,replcljs.core.PersistentHashSet.fromArray(["\uFDD0'as","\uFDD0'refer"]),replcljs.core.map.call(null,replcljs.core.first,replcljs.core.partition.call(null,2,replcljs.core.next.call(null,spec)))))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Only :as and :refer options supported in :require / :require-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"every?")),replcljs.core.set(["\uFDD0'as","\uFDD0'refer"]),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"map")),(new replcljs.core.Symbol(null,"first")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"partition")),2,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"next")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",616,"\uFDD0'column",86))),replcljs.core.hash_map("\uFDD0'line",616,"\uFDD0'column",73))),replcljs.core.hash_map("\uFDD0'line",616,"\uFDD0'column",62))),replcljs.core.hash_map("\uFDD0'line",616,"\uFDD0'column",40))))].join('')));
}
if((function (){var fs = replcljs.core.frequencies.call(null,replcljs.core.next.call(null,spec));
var and__3941__auto__ = (fs.call(null,"\uFDD0'as",0) <= 1);
if(and__3941__auto__)
{return (fs.call(null,"\uFDD0'refer",0) <= 1);
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"let")),replcljs.core.vec([(new replcljs.core.Symbol(null,"fs")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"frequencies")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"next")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",618,"\uFDD0'column",62))),replcljs.core.hash_map("\uFDD0'line",618,"\uFDD0'column",49))]),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"<=")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"fs")),"\uFDD0'as",0),replcljs.core.hash_map("\uFDD0'line",619,"\uFDD0'column",51)),1),replcljs.core.hash_map("\uFDD0'line",619,"\uFDD0'column",47)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"<=")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"fs")),"\uFDD0'refer",0),replcljs.core.hash_map("\uFDD0'line",620,"\uFDD0'column",51)),1),replcljs.core.hash_map("\uFDD0'line",620,"\uFDD0'column",47))),replcljs.core.hash_map("\uFDD0'line",619,"\uFDD0'column",42))),replcljs.core.hash_map("\uFDD0'line",618,"\uFDD0'column",40))))].join('')));
}
} else
{}
if(replcljs.core.symbol_QMARK_.call(null,spec))
{{
var G__4841 = macros_QMARK_;
var G__4842 = replcljs.core.PersistentVector.fromArray([spec], true);
macros_QMARK_ = G__4841;
spec = G__4842;
continue;
}
} else
{var vec__4828 = spec;
var lib = replcljs.core.nth.call(null,vec__4828,0,null);
var opts = replcljs.core.nthnext.call(null,vec__4828,1);
var map__4829 = replcljs.core.apply.call(null,replcljs.core.hash_map,opts);
var map__4829__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4829))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4829):map__4829);
var alias = replcljs.core._lookup.call(null,map__4829__$1,"\uFDD0'as",lib);
var referred = replcljs.core._lookup.call(null,map__4829__$1,"\uFDD0'refer",null);
var vec__4830 = (replcljs.core.truth_(macros_QMARK_)?replcljs.core.PersistentVector.fromArray(["\uFDD0'require-macros","\uFDD0'use-macros"], true):replcljs.core.PersistentVector.fromArray(["\uFDD0'require","\uFDD0'use"], true));
var rk = replcljs.core.nth.call(null,vec__4830,0,null);
var uk = replcljs.core.nth.call(null,vec__4830,1,null);
if((function (){var or__3943__auto__ = replcljs.core.symbol_QMARK_.call(null,alias);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (alias == null);
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"or")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"alias"))),replcljs.core.hash_map("\uFDD0'line",627,"\uFDD0'column",46)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"nil?")),(new replcljs.core.Symbol(null,"alias"))),replcljs.core.hash_map("\uFDD0'line",627,"\uFDD0'column",62))),replcljs.core.hash_map("\uFDD0'line",627,"\uFDD0'column",42))))].join('')));
}
if(replcljs.core.truth_((function (){var or__3943__auto__ = (function (){var and__3941__auto__ = replcljs.core.sequential_QMARK_.call(null,referred);
if(and__3941__auto__)
{return replcljs.core.every_QMARK_.call(null,replcljs.core.symbol_QMARK_,referred);
} else
{return and__3941__auto__;
}
})();
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (referred == null);
}
})()))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"or")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"sequential?")),(new replcljs.core.Symbol(null,"referred"))),replcljs.core.hash_map("\uFDD0'line",629,"\uFDD0'column",51)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"every?")),(new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"referred"))),replcljs.core.hash_map("\uFDD0'line",629,"\uFDD0'column",74))),replcljs.core.hash_map("\uFDD0'line",629,"\uFDD0'column",46)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"nil?")),(new replcljs.core.Symbol(null,"referred"))),replcljs.core.hash_map("\uFDD0'line",630,"\uFDD0'column",46))),replcljs.core.hash_map("\uFDD0'line",629,"\uFDD0'column",42))))].join('')));
}
if(replcljs.core.truth_(macros_QMARK_))
{} else
{replcljs.core.swap_BANG_.call(null,deps,replcljs.core.conj,lib);
}
return replcljs.core.merge.call(null,(replcljs.core.truth_(alias)?replcljs.core.PersistentArrayMap.fromArrays([rk],[replcljs.core.PersistentArrayMap.fromArrays([alias],[lib])]):null),(replcljs.core.truth_(referred)?replcljs.core.PersistentArrayMap.fromArrays([uk],[replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.interleave.call(null,referred,replcljs.core.repeat.call(null,lib)))]):null));
}
break;
}
});
var use__GT_require = (function use__GT_require(p__4831){
var vec__4833 = p__4831;
var lib = replcljs.core.nth.call(null,vec__4833,0,null);
var kw = replcljs.core.nth.call(null,vec__4833,1,null);
var referred = replcljs.core.nth.call(null,vec__4833,2,null);
var spec = vec__4833;
if((function (){var and__3941__auto__ = replcljs.core.symbol_QMARK_.call(null,lib);
if(and__3941__auto__)
{var and__3941__auto____$1 = replcljs.core._EQ_.call(null,"\uFDD0'only",kw);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = replcljs.core.sequential_QMARK_.call(null,referred);
if(and__3941__auto____$2)
{return replcljs.core.every_QMARK_.call(null,replcljs.core.symbol_QMARK_,referred);
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
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Only [lib.ns :only (names)] specs supported in :use / :use-macros")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"lib"))),replcljs.core.hash_map("\uFDD0'line",637,"\uFDD0'column",37)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"=")),"\uFDD0'only",(new replcljs.core.Symbol(null,"kw"))),replcljs.core.hash_map("\uFDD0'line",637,"\uFDD0'column",51)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"sequential?")),(new replcljs.core.Symbol(null,"referred"))),replcljs.core.hash_map("\uFDD0'line",637,"\uFDD0'column",64)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"every?")),(new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"referred"))),replcljs.core.hash_map("\uFDD0'line",637,"\uFDD0'column",87))),replcljs.core.hash_map("\uFDD0'line",637,"\uFDD0'column",32))))].join('')));
}
return replcljs.core.PersistentVector.fromArray([lib,"\uFDD0'refer",referred], true);
});
var parse_import_spec = (function parse_import_spec(spec){
if((function (){var and__3941__auto__ = replcljs.core.symbol_QMARK_.call(null,spec);
if(and__3941__auto__)
{return (replcljs.core.namespace.call(null,spec) == null);
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(error_msg.call(null,spec,"Only lib.Ctor specs supported in :import")),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"and")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",641,"\uFDD0'column",42)),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"nil?")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"namespace")),(new replcljs.core.Symbol(null,"spec"))),replcljs.core.hash_map("\uFDD0'line",641,"\uFDD0'column",63))),replcljs.core.hash_map("\uFDD0'line",641,"\uFDD0'column",57))),replcljs.core.hash_map("\uFDD0'line",641,"\uFDD0'column",37))))].join('')));
}
replcljs.core.swap_BANG_.call(null,deps,replcljs.core.conj,spec);
var ctor_sym = replcljs.core.symbol.call(null,replcljs.core.last.call(null,replclojure.string.split.call(null,[replcljs.core.str(spec)].join(''),/\./)));
return replcljs.core.ObjMap.fromObject(["\uFDD0'import","\uFDD0'require"],{"\uFDD0'import":replcljs.core.PersistentArrayMap.fromArrays([ctor_sym],[spec]),"\uFDD0'require":replcljs.core.PersistentArrayMap.fromArrays([ctor_sym],[spec])});
});
var spec_parsers = replcljs.core.ObjMap.fromObject(["\uFDD0'require","\uFDD0'require-macros","\uFDD0'use","\uFDD0'use-macros","\uFDD0'import"],{"\uFDD0'require":replcljs.core.partial.call(null,parse_require_spec,false),"\uFDD0'require-macros":replcljs.core.partial.call(null,parse_require_spec,true),"\uFDD0'use":replcljs.core.comp.call(null,replcljs.core.partial.call(null,parse_require_spec,false),use__GT_require),"\uFDD0'use-macros":replcljs.core.comp.call(null,replcljs.core.partial.call(null,parse_require_spec,true),use__GT_require),"\uFDD0'import":parse_import_spec});
var map__4822 = replcljs.core.reduce.call(null,(function (m,p__4834){
var vec__4835 = p__4834;
var k = replcljs.core.nth.call(null,vec__4835,0,null);
var libs = replcljs.core.nthnext.call(null,vec__4835,1);
if(replcljs.core.truth_(replcljs.core.PersistentHashSet.fromArray(["\uFDD0'import","\uFDD0'use-macros","\uFDD0'require-macros","\uFDD0'require","\uFDD0'use"]).call(null,k)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Only :refer-clojure, :require, :require-macros, :use and :use-macros libspecs supported"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list(replcljs.core.set(["\uFDD0'import","\uFDD0'use-macros","\uFDD0'require-macros","\uFDD0'require","\uFDD0'use"]),(new replcljs.core.Symbol(null,"k"))),replcljs.core.hash_map("\uFDD0'line",654,"\uFDD0'column",27))))].join('')));
}
if(replcljs.core.truth_(replcljs.core.deref.call(null,valid_forms).call(null,k)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str([replcljs.core.str("Only one "),replcljs.core.str(k),replcljs.core.str(" form is allowed per namespace definition")].join('')),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list(replcljs.core.list((new replcljs.core.Symbol(null,"clojure.core/deref")),(new replcljs.core.Symbol(null,"valid-forms"))),(new replcljs.core.Symbol(null,"k"))),replcljs.core.hash_map("\uFDD0'line",656,"\uFDD0'column",27))))].join('')));
}
replcljs.core.swap_BANG_.call(null,valid_forms,replcljs.core.disj,k);
return replcljs.core.apply.call(null,replcljs.core.merge_with,replcljs.core.merge,m,replcljs.core.map.call(null,spec_parsers.call(null,k),libs));
}),replcljs.core.ObjMap.EMPTY,replcljs.core.remove.call(null,(function (p__4836){
var vec__4837 = p__4836;
var r = replcljs.core.nth.call(null,vec__4837,0,null);
return replcljs.core._EQ_.call(null,r,"\uFDD0'refer-clojure");
}),args__$1));
var map__4822__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4822))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4822):map__4822);
var params = map__4822__$1;
var uses = replcljs.core._lookup.call(null,map__4822__$1,"\uFDD0'use",null);
var requires = replcljs.core._lookup.call(null,map__4822__$1,"\uFDD0'require",null);
var uses_macros = replcljs.core._lookup.call(null,map__4822__$1,"\uFDD0'use-macros",null);
var requires_macros = replcljs.core._lookup.call(null,map__4822__$1,"\uFDD0'require-macros",null);
var imports = replcljs.core._lookup.call(null,map__4822__$1,"\uFDD0'import",null);
if(replcljs.core.seq.call(null,replcljs.core.deref.call(null,deps)))
{replcljs.core.println.call(null,"// **** Skipping analyze-deps ****");
} else
{}
replcljs.analyzer._STAR_cljs_ns_STAR_ = name;
replcljs.core._STAR_ns_sym_STAR_ = name;
var G__4838_4843 = replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.vals.call(null,requires_macros),replcljs.core.vals.call(null,uses_macros)));
while(true){
if(G__4838_4843)
{var nsym_4844 = replcljs.core.first.call(null,G__4838_4843);
replcljs.core.require.call(null,nsym_4844);
{
var G__4845 = replcljs.core.next.call(null,G__4838_4843);
G__4838_4843 = G__4845;
continue;
}
} else
{}
break;
}
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,(function (p1__4819_SHARP_){
return replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,replcljs.core.assoc_in.call(null,p1__4819_SHARP_,replcljs.core.PersistentVector.fromArray([name,"\uFDD0'name"], true),name),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'doc"], true),docstring),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'excludes"], true),excludes),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'uses"], true),uses),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'requires"], true),requires),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'uses-macros"], true),uses_macros),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'requires-macros"], true),replcljs.core.into.call(null,replcljs.core.ObjMap.EMPTY,replcljs.core.map.call(null,(function (p__4839){
var vec__4840 = p__4839;
var alias = replcljs.core.nth.call(null,vec__4840,0,null);
var nsym = replcljs.core.nth.call(null,vec__4840,1,null);
return replcljs.core.PersistentVector.fromArray([alias,replcljs.core.find_ns.call(null,nsym)], true);
}),requires_macros))),replcljs.core.PersistentVector.fromArray([name,"\uFDD0'imports"], true),imports);
}));
return replcljs.core.ObjMap.fromObject(["\uFDD0'requires","\uFDD0'form","\uFDD0'op","\uFDD0'name","\uFDD0'excludes","\uFDD0'env","\uFDD0'imports","\uFDD0'doc","\uFDD0'uses","\uFDD0'uses-macros","\uFDD0'requires-macros"],{"\uFDD0'requires":requires,"\uFDD0'form":form,"\uFDD0'op":"\uFDD0'ns","\uFDD0'name":name,"\uFDD0'excludes":excludes,"\uFDD0'env":env,"\uFDD0'imports":imports,"\uFDD0'doc":docstring,"\uFDD0'uses":uses,"\uFDD0'uses-macros":uses_macros,"\uFDD0'requires-macros":requires_macros});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"deftype*")),(function (_,env,p__4846,___$1){
var vec__4847 = p__4846;
var ___$2 = replcljs.core.nth.call(null,vec__4847,0,null);
var tsym = replcljs.core.nth.call(null,vec__4847,1,null);
var fields = replcljs.core.nth.call(null,vec__4847,2,null);
var pmasks = replcljs.core.nth.call(null,vec__4847,3,null);
var form = vec__4847;
var t = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,env,"\uFDD0'locals"),tsym));
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'defs",tsym], true),(function (m){
var m__$1 = replcljs.core.assoc.call(null,(function (){var or__3943__auto__ = m;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.ObjMap.EMPTY;
}
})(),"\uFDD0'name",t,"\uFDD0'type",true,"\uFDD0'num-fields",replcljs.core.count.call(null,fields));
return replcljs.core.merge.call(null,m__$1,replcljs.core.ObjMap.fromObject(["\uFDD0'protocols"],{"\uFDD0'protocols":(new replcljs.core.Keyword("\uFDD0'protocols")).call(null,replcljs.core.meta.call(null,tsym))}),(function (){var temp__4092__auto__ = (new replcljs.core.Keyword("\uFDD0'line")).call(null,env);
if(replcljs.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return replcljs.core.ObjMap.fromObject(["\uFDD0'file","\uFDD0'line"],{"\uFDD0'file":replcljs.analyzer._STAR_cljs_file_STAR_,"\uFDD0'line":line});
} else
{return null;
}
})());
}));
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0't","\uFDD0'fields","\uFDD0'pmasks"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'deftype*","\uFDD0'form":form,"\uFDD0't":t,"\uFDD0'fields":fields,"\uFDD0'pmasks":pmasks});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"defrecord*")),(function (_,env,p__4849,___$1){
var vec__4850 = p__4849;
var ___$2 = replcljs.core.nth.call(null,vec__4850,0,null);
var tsym = replcljs.core.nth.call(null,vec__4850,1,null);
var fields = replcljs.core.nth.call(null,vec__4850,2,null);
var pmasks = replcljs.core.nth.call(null,vec__4850,3,null);
var form = vec__4850;
var t = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,env,"\uFDD0'locals"),tsym));
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'defs",tsym], true),(function (m){
var m__$1 = replcljs.core.assoc.call(null,(function (){var or__3943__auto__ = m;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.ObjMap.EMPTY;
}
})(),"\uFDD0'name",t,"\uFDD0'type",true);
return replcljs.core.merge.call(null,m__$1,replcljs.core.ObjMap.fromObject(["\uFDD0'protocols"],{"\uFDD0'protocols":(new replcljs.core.Keyword("\uFDD0'protocols")).call(null,replcljs.core.meta.call(null,tsym))}),(function (){var temp__4092__auto__ = (new replcljs.core.Keyword("\uFDD0'line")).call(null,env);
if(replcljs.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return replcljs.core.ObjMap.fromObject(["\uFDD0'file","\uFDD0'line"],{"\uFDD0'file":replcljs.analyzer._STAR_cljs_file_STAR_,"\uFDD0'line":line});
} else
{return null;
}
})());
}));
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0't","\uFDD0'fields","\uFDD0'pmasks"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'defrecord*","\uFDD0'form":form,"\uFDD0't":t,"\uFDD0'fields":fields,"\uFDD0'pmasks":pmasks});
}));
replcljs.analyzer.property_symbol_QMARK_ = (function property_symbol_QMARK_(p1__4848_SHARP_){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = replcljs.core.symbol_QMARK_.call(null,p1__4848_SHARP_);
if(and__3941__auto__)
{return replcljs.core.re_matches.call(null,/^-.*/,replcljs.core.name.call(null,p1__4848_SHARP_));
} else
{return and__3941__auto__;
}
})());
});
replcljs.analyzer.classify_dot_form = (function classify_dot_form(p__4852){
var vec__4854 = p__4852;
var target = replcljs.core.nth.call(null,vec__4854,0,null);
var member = replcljs.core.nth.call(null,vec__4854,1,null);
var args = replcljs.core.nth.call(null,vec__4854,2,null);
return replcljs.core.PersistentVector.fromArray([(((target == null))?"\uFDD0'replcljs.analyzer/error":(("\uFDD0'default")?"\uFDD0'replcljs.analyzer/expr":null)),(replcljs.core.truth_(replcljs.analyzer.property_symbol_QMARK_.call(null,member))?"\uFDD0'replcljs.analyzer/property":((replcljs.core.symbol_QMARK_.call(null,member))?"\uFDD0'replcljs.analyzer/symbol":((replcljs.core.seq_QMARK_.call(null,member))?"\uFDD0'replcljs.analyzer/list":(("\uFDD0'default")?"\uFDD0'replcljs.analyzer/error":null)))),(((args == null))?replcljs.core.List.EMPTY:(("\uFDD0'default")?"\uFDD0'replcljs.analyzer/expr":null))], true);
});
replcljs.analyzer.build_dot_form = (function (){var method_table__2219__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var prefer_table__2220__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var method_cache__2221__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var cached_hierarchy__2222__auto__ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var hierarchy__2223__auto__ = replcljs.core._lookup.call(null,replcljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",replcljs.core.global_hierarchy);
return (new replcljs.core.MultiFn("build-dot-form",(function (p1__4851_SHARP_){
return replcljs.analyzer.classify_dot_form.call(null,p1__4851_SHARP_);
}),"\uFDD0'default",hierarchy__2223__auto__,method_table__2219__auto__,prefer_table__2220__auto__,method_cache__2221__auto__,cached_hierarchy__2222__auto__));
})();
replcljs.core._add_method.call(null,replcljs.analyzer.build_dot_form,replcljs.core.PersistentVector.fromArray(["\uFDD0'replcljs.analyzer/expr","\uFDD0'replcljs.analyzer/property",replcljs.core.List.EMPTY], true),(function (p__4855){
var vec__4856 = p__4855;
var target = replcljs.core.nth.call(null,vec__4856,0,null);
var prop = replcljs.core.nth.call(null,vec__4856,1,null);
var _ = replcljs.core.nth.call(null,vec__4856,2,null);
return replcljs.core.ObjMap.fromObject(["\uFDD0'dot-action","\uFDD0'target","\uFDD0'field"],{"\uFDD0'dot-action":"\uFDD0'replcljs.analyzer/access","\uFDD0'target":target,"\uFDD0'field":replcljs.core.symbol.call(null,replcljs.core.name.call(null,prop).substring(1))});
}));
replcljs.core._add_method.call(null,replcljs.analyzer.build_dot_form,replcljs.core.PersistentVector.fromArray(["\uFDD0'replcljs.analyzer/expr","\uFDD0'replcljs.analyzer/property","\uFDD0'replcljs.analyzer/list"], true),(function (p__4857){
var vec__4858 = p__4857;
var target = replcljs.core.nth.call(null,vec__4858,0,null);
var prop = replcljs.core.nth.call(null,vec__4858,1,null);
var args = replcljs.core.nth.call(null,vec__4858,2,null);
throw (new Error([replcljs.core.str("Cannot provide arguments "),replcljs.core.str(args),replcljs.core.str(" on property access "),replcljs.core.str(prop)].join('')));
}));
/**
* Builds the intermediate method call map used to reason about the parsed form during
* compilation.
*/
replcljs.analyzer.build_method_call = (function build_method_call(target,meth,args){
if(replcljs.core.symbol_QMARK_.call(null,meth))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'dot-action","\uFDD0'target","\uFDD0'method","\uFDD0'args"],{"\uFDD0'dot-action":"\uFDD0'replcljs.analyzer/call","\uFDD0'target":target,"\uFDD0'method":meth,"\uFDD0'args":args});
} else
{return replcljs.core.ObjMap.fromObject(["\uFDD0'dot-action","\uFDD0'target","\uFDD0'method","\uFDD0'args"],{"\uFDD0'dot-action":"\uFDD0'replcljs.analyzer/call","\uFDD0'target":target,"\uFDD0'method":replcljs.core.first.call(null,meth),"\uFDD0'args":args});
}
});
replcljs.core._add_method.call(null,replcljs.analyzer.build_dot_form,replcljs.core.PersistentVector.fromArray(["\uFDD0'replcljs.analyzer/expr","\uFDD0'replcljs.analyzer/symbol","\uFDD0'replcljs.analyzer/expr"], true),(function (p__4859){
var vec__4860 = p__4859;
var target = replcljs.core.nth.call(null,vec__4860,0,null);
var meth = replcljs.core.nth.call(null,vec__4860,1,null);
var args = replcljs.core.nth.call(null,vec__4860,2,null);
return replcljs.analyzer.build_method_call.call(null,target,meth,args);
}));
replcljs.core._add_method.call(null,replcljs.analyzer.build_dot_form,replcljs.core.PersistentVector.fromArray(["\uFDD0'replcljs.analyzer/expr","\uFDD0'replcljs.analyzer/symbol",replcljs.core.List.EMPTY], true),(function (p__4861){
var vec__4862 = p__4861;
var target = replcljs.core.nth.call(null,vec__4862,0,null);
var meth = replcljs.core.nth.call(null,vec__4862,1,null);
var args = replcljs.core.nth.call(null,vec__4862,2,null);
return replcljs.analyzer.build_method_call.call(null,target,meth,args);
}));
replcljs.core._add_method.call(null,replcljs.analyzer.build_dot_form,replcljs.core.PersistentVector.fromArray(["\uFDD0'replcljs.analyzer/expr","\uFDD0'replcljs.analyzer/list",replcljs.core.List.EMPTY], true),(function (p__4863){
var vec__4864 = p__4863;
var target = replcljs.core.nth.call(null,vec__4864,0,null);
var meth_expr = replcljs.core.nth.call(null,vec__4864,1,null);
var _ = replcljs.core.nth.call(null,vec__4864,2,null);
return replcljs.analyzer.build_method_call.call(null,target,replcljs.core.first.call(null,meth_expr),replcljs.core.rest.call(null,meth_expr));
}));
replcljs.core._add_method.call(null,replcljs.analyzer.build_dot_form,"\uFDD0'default",(function (dot_form){
throw (new Error([replcljs.core.str("Unknown dot form of "),replcljs.core.str(replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,".")),dot_form)),replcljs.core.str(" with classification "),replcljs.core.str(replcljs.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,".")),(function (_,env,p__4867,___$1){
var vec__4868 = p__4867;
var ___$2 = replcljs.core.nth.call(null,vec__4868,0,null);
var target = replcljs.core.nth.call(null,vec__4868,1,null);
var vec__4869 = replcljs.core.nthnext.call(null,vec__4868,2);
var field = replcljs.core.nth.call(null,vec__4869,0,null);
var member_PLUS_ = replcljs.core.nthnext.call(null,vec__4869,1);
var form = vec__4868;
var _STAR_recur_frames_STAR_4870 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
var map__4872 = replcljs.analyzer.build_dot_form.call(null,replcljs.core.PersistentVector.fromArray([target,field,member_PLUS_], true));
var map__4872__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4872))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4872):map__4872);
var args = replcljs.core._lookup.call(null,map__4872__$1,"\uFDD0'args",null);
var field__$1 = replcljs.core._lookup.call(null,map__4872__$1,"\uFDD0'field",null);
var method = replcljs.core._lookup.call(null,map__4872__$1,"\uFDD0'method",null);
var target__$1 = replcljs.core._lookup.call(null,map__4872__$1,"\uFDD0'target",null);
var dot_action = replcljs.core._lookup.call(null,map__4872__$1,"\uFDD0'dot-action",null);
var enve = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var targetexpr = replcljs.analyzer.analyze.call(null,enve,target__$1);
var G__4873 = dot_action;
if(replcljs.core._EQ_.call(null,"\uFDD0'replcljs.analyzer/call",G__4873))
{var argexprs = replcljs.core.map.call(null,(function (p1__4865_SHARP_){
return replcljs.analyzer.analyze.call(null,enve,p1__4865_SHARP_);
}),args);
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'target","\uFDD0'method","\uFDD0'args","\uFDD0'children","\uFDD0'tag"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'dot","\uFDD0'form":form,"\uFDD0'target":targetexpr,"\uFDD0'method":method,"\uFDD0'args":argexprs,"\uFDD0'children":replcljs.core.into.call(null,replcljs.core.PersistentVector.fromArray([targetexpr], true),argexprs),"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,form))});
} else
{if(replcljs.core._EQ_.call(null,"\uFDD0'replcljs.analyzer/access",G__4873))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'target","\uFDD0'field","\uFDD0'children","\uFDD0'tag"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'dot","\uFDD0'form":form,"\uFDD0'target":targetexpr,"\uFDD0'field":field__$1,"\uFDD0'children":replcljs.core.PersistentVector.fromArray([targetexpr], true),"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,form))});
} else
{if("\uFDD0'else")
{throw (new Error([replcljs.core.str("No matching clause: "),replcljs.core.str(dot_action)].join('')));
} else
{return null;
}
}
}
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4870;
}}));
replcljs.core._add_method.call(null,replcljs.analyzer.parse,(new replcljs.core.Symbol(null,"js*")),(function (op,env,p__4875,_){
var vec__4876 = p__4875;
var ___$1 = replcljs.core.nth.call(null,vec__4876,0,null);
var jsform = replcljs.core.nth.call(null,vec__4876,1,null);
var args = replcljs.core.nthnext.call(null,vec__4876,2);
var form = vec__4876;
if(replcljs.core.string_QMARK_.call(null,jsform))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"string?")),(new replcljs.core.Symbol(null,"jsform"))),replcljs.core.hash_map("\uFDD0'line",792,"\uFDD0'column",11))))].join('')));
}
if(replcljs.core.truth_(args))
{var _STAR_recur_frames_STAR_4877 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
var seg = (function seg(s){
var idx = s.indexOf("~{");
if(replcljs.core._EQ_.call(null,-1,idx))
{return replcljs.core.list.call(null,s);
} else
{var end = s.indexOf("}",idx);
return replcljs.core.cons.call(null,replcljs.core.subs.call(null,s,0,idx),seg.call(null,replcljs.core.subs.call(null,s,(end + 1))));
}
});
var enve = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var argexprs = replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4866_SHARP_){
return replcljs.analyzer.analyze.call(null,enve,p1__4866_SHARP_);
}),args));
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'segs","\uFDD0'args","\uFDD0'tag","\uFDD0'form","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'js","\uFDD0'segs":seg.call(null,jsform),"\uFDD0'args":argexprs,"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,form)),"\uFDD0'form":form,"\uFDD0'children":argexprs});
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4877;
}} else
{var interp = (function interp(s){
var idx = s.indexOf("~{");
if(replcljs.core._EQ_.call(null,-1,idx))
{return replcljs.core.list.call(null,s);
} else
{var end = s.indexOf("}",idx);
var inner = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_existing_var.call(null,env,replcljs.core.symbol.call(null,replcljs.core.subs.call(null,s,(2 + idx),end))));
return replcljs.core.cons.call(null,replcljs.core.subs.call(null,s,0,idx),replcljs.core.cons.call(null,inner,interp.call(null,replcljs.core.subs.call(null,s,(end + 1)))));
}
});
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'code","\uFDD0'tag"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'js","\uFDD0'form":form,"\uFDD0'code":replcljs.core.apply.call(null,replcljs.core.str,interp.call(null,jsform)),"\uFDD0'tag":(new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,form))});
}
}));
replcljs.analyzer.parse_invoke = (function parse_invoke(env,p__4879){
var vec__4884 = p__4879;
var f = replcljs.core.nth.call(null,vec__4884,0,null);
var args = replcljs.core.nthnext.call(null,vec__4884,1);
var form = vec__4884;
var _STAR_recur_frames_STAR_4885 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
var enve = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var fexpr = replcljs.analyzer.analyze.call(null,enve,f);
var argexprs = replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4874_SHARP_){
return replcljs.analyzer.analyze.call(null,enve,p1__4874_SHARP_);
}),args));
var argc = replcljs.core.count.call(null,args);
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_warn_fn_arity_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{return (new replcljs.core.Keyword("\uFDD0'fn-var")).call(null,(new replcljs.core.Keyword("\uFDD0'info")).call(null,fexpr));
} else
{return and__3941__auto__;
}
})()))
{var map__4887_4888 = (new replcljs.core.Keyword("\uFDD0'info")).call(null,fexpr);
var map__4887_4889__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4887_4888))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4887_4888):map__4887_4888);
var name_4890 = replcljs.core._lookup.call(null,map__4887_4889__$1,"\uFDD0'name",null);
var method_params_4891 = replcljs.core._lookup.call(null,map__4887_4889__$1,"\uFDD0'method-params",null);
var max_fixed_arity_4892 = replcljs.core._lookup.call(null,map__4887_4889__$1,"\uFDD0'max-fixed-arity",null);
var variadic_4893 = replcljs.core._lookup.call(null,map__4887_4889__$1,"\uFDD0'variadic",null);
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core.not.call(null,replcljs.core.some.call(null,replcljs.core.PersistentHashSet.fromArray([argc]),replcljs.core.map.call(null,replcljs.core.count,method_params_4891)));
if(and__3941__auto__)
{var or__3943__auto__ = replcljs.core.not.call(null,variadic_4893);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto____$1 = variadic_4893;
if(replcljs.core.truth_(and__3941__auto____$1))
{return (argc < max_fixed_arity_4892);
} else
{return and__3941__auto____$1;
}
}
} else
{return and__3941__auto__;
}
})()))
{replcljs.analyzer.warning.call(null,env,[replcljs.core.str("WARNING: Wrong number of args ("),replcljs.core.str(argc),replcljs.core.str(") passed to "),replcljs.core.str(name_4890)].join(''));
} else
{}
} else
{}
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_warn_fn_deprecated_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (new replcljs.core.Keyword("\uFDD0'deprecated")).call(null,(new replcljs.core.Keyword("\uFDD0'info")).call(null,fexpr));
if(replcljs.core.truth_(and__3941__auto____$1))
{return replcljs.core.not.call(null,(new replcljs.core.Keyword("\uFDD0'deprecation-nowarn")).call(null,replcljs.core.meta.call(null,form)));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{replcljs.analyzer.warning.call(null,env,[replcljs.core.str("WARNING: "),replcljs.core.str((new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'info")).call(null,fexpr))),replcljs.core.str(" is deprecated.")].join(''));
} else
{}
return replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'op","\uFDD0'form","\uFDD0'f","\uFDD0'args","\uFDD0'tag","\uFDD0'children"],{"\uFDD0'env":env,"\uFDD0'op":"\uFDD0'invoke","\uFDD0'form":form,"\uFDD0'f":fexpr,"\uFDD0'args":argexprs,"\uFDD0'tag":(function (){var or__3943__auto__ = (new replcljs.core.Keyword("\uFDD0'tag")).call(null,(new replcljs.core.Keyword("\uFDD0'info")).call(null,fexpr));
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new replcljs.core.Keyword("\uFDD0'tag")).call(null,replcljs.core.meta.call(null,form));
}
})(),"\uFDD0'children":replcljs.core.into.call(null,replcljs.core.PersistentVector.fromArray([fexpr], true),argexprs)});
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4885;
}});
/**
* Finds the var associated with sym
*/
replcljs.analyzer.analyze_symbol = (function analyze_symbol(env,sym){
var ret = replcljs.core.ObjMap.fromObject(["\uFDD0'env","\uFDD0'form"],{"\uFDD0'env":env,"\uFDD0'form":sym});
var lb = sym.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_(lb))
{return replcljs.core.assoc.call(null,ret,"\uFDD0'op","\uFDD0'var","\uFDD0'info",lb);
} else
{return replcljs.core.assoc.call(null,ret,"\uFDD0'op","\uFDD0'var","\uFDD0'info",replcljs.analyzer.resolve_existing_var.call(null,env,sym));
}
});
replcljs.analyzer.get_expander = (function get_expander(sym,env){
var mvar = (replcljs.core.truth_((function (){var or__3943__auto__ = sym.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,env));
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var and__3941__auto__ = (function (){var or__3943__auto____$1 = sym.call(null,(new replcljs.core.Keyword("\uFDD0'excludes")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)));
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'excludes",sym], true));
}
})();
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.not.call(null,(function (){var or__3943__auto____$1 = sym.call(null,(new replcljs.core.Keyword("\uFDD0'uses-macros")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)));
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([(new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),"\uFDD0'uses-macros",sym], true));
}
})());
} else
{return and__3941__auto__;
}
}
})())?null:(function (){var temp__4090__auto__ = replcljs.core.namespace.call(null,sym);
if(replcljs.core.truth_(temp__4090__auto__))
{var nstr = temp__4090__auto__;
var temp__4090__auto____$1 = replcljs.core._lookup.call(null,(new replcljs.core.Keyword("\uFDD0'requires-macros")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)),replcljs.core.symbol.call(null,nstr),null);
if(replcljs.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;
return replcljs.core.get_in.call(null,ns,replcljs.core.PersistentVector.fromArray(["\uFDD0'defs",replcljs.core.symbol.call(null,replcljs.core.name.call(null,sym))], true));
} else
{return replcljs.analyzer.resolve_existing_var.call(null,replcljs.analyzer.empty_env.call(null),sym);
}
} else
{var temp__4090__auto____$1 = sym.call(null,(new replcljs.core.Keyword("\uFDD0'uses-macros")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,env)));
if(replcljs.core.truth_(temp__4090__auto____$1))
{var nsym = temp__4090__auto____$1;
return replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([nsym,"\uFDD0'defs",sym], true));
} else
{return replcljs.analyzer.resolve_existing_var.call(null,replcljs.analyzer.empty_env.call(null),sym);
}
}
})());
if(replcljs.core.truth_((function (){var and__3941__auto__ = mvar;
if(replcljs.core.truth_(and__3941__auto__))
{return (new replcljs.core.Keyword("\uFDD0'macro?")).call(null,mvar);
} else
{return and__3941__auto__;
}
})()))
{return eval([replcljs.core.str(replcljs.compiler.munge.call(null,(new replcljs.core.Keyword("\uFDD0'name")).call(null,mvar)))].join(''));
} else
{return null;
}
});
replcljs.analyzer.macroexpand_1 = (function macroexpand_1(env,form){
var op = replcljs.core.first.call(null,form);
if(replcljs.core.truth_(replcljs.analyzer.specials.call(null,op)))
{return form;
} else
{var temp__4090__auto__ = (function (){var and__3941__auto__ = replcljs.core.symbol_QMARK_.call(null,op);
if(and__3941__auto__)
{return replcljs.analyzer.get_expander.call(null,op,env);
} else
{return and__3941__auto__;
}
})();
if(replcljs.core.truth_(temp__4090__auto__))
{var mac = temp__4090__auto__;
var _STAR_ns_sym_STAR_4897 = replcljs.core._STAR_ns_sym_STAR_;
try{replcljs.core._STAR_ns_sym_STAR_ = replcljs.analyzer._STAR_cljs_ns_STAR_;
return replcljs.core.apply.call(null,mac,form,env,replcljs.core.rest.call(null,form));
}finally {replcljs.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_4897;
}} else
{if(replcljs.core.symbol_QMARK_.call(null,op))
{var opname = [replcljs.core.str(op)].join('');
if(replcljs.core._EQ_.call(null,replcljs.core.first.call(null,opname),"."))
{var vec__4899 = replcljs.core.next.call(null,form);
var target = replcljs.core.nth.call(null,vec__4899,0,null);
var args = replcljs.core.nthnext.call(null,vec__4899,1);
return replcljs.core.with_meta.call(null,replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,".")),target,replcljs.core.symbol.call(null,replcljs.core.subs.call(null,opname,1)),args),replcljs.core.meta.call(null,form));
} else
{if(replcljs.core._EQ_.call(null,replcljs.core.last.call(null,opname),"."))
{return replcljs.core.with_meta.call(null,replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,"new")),replcljs.core.symbol.call(null,replcljs.core.subs.call(null,opname,0,(replcljs.core.count.call(null,opname) - 1))),replcljs.core.next.call(null,form)),replcljs.core.meta.call(null,form));
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
replcljs.analyzer.analyze_seq = (function analyze_seq(env,form,name){
var env__$1 = replcljs.core.assoc.call(null,env,"\uFDD0'line",(function (){var or__3943__auto__ = (new replcljs.core.Keyword("\uFDD0'line")).call(null,replcljs.core.meta.call(null,form));
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (new replcljs.core.Keyword("\uFDD0'line")).call(null,env);
}
})());
var op = replcljs.core.first.call(null,form);
if(!((op == null)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Can't call nil"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"nil?")),(new replcljs.core.Symbol(null,"op"))),replcljs.core.hash_map("\uFDD0'line",891,"\uFDD0'column",20))),replcljs.core.hash_map("\uFDD0'line",891,"\uFDD0'column",15))))].join('')));
}
var mform = replcljs.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform))
{if(replcljs.core.truth_(replcljs.analyzer.specials.call(null,op)))
{return replcljs.analyzer.parse.call(null,op,env__$1,form,name);
} else
{return replcljs.analyzer.parse_invoke.call(null,env__$1,form);
}
} else
{return replcljs.analyzer.analyze.call(null,env__$1,mform,name);
}
});
replcljs.analyzer.analyze_map = (function analyze_map(env,form,name){
var expr_env = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var simple_keys_QMARK_ = replcljs.core.every_QMARK_.call(null,(function (p1__4900_SHARP_){
var or__3943__auto__ = replcljs.core.string_QMARK_.call(null,p1__4900_SHARP_);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.keyword_QMARK_.call(null,p1__4900_SHARP_);
}
}),replcljs.core.keys.call(null,form));
var ks = (function (){var _STAR_recur_frames_STAR_4908 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4901_SHARP_){
return replcljs.analyzer.analyze.call(null,expr_env,p1__4901_SHARP_,name);
}),replcljs.core.keys.call(null,form)));
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4908;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_4910 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4902_SHARP_){
return replcljs.analyzer.analyze.call(null,expr_env,p1__4902_SHARP_,name);
}),replcljs.core.vals.call(null,form)));
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4910;
}})();
return replcljs.analyzer.analyze_wrap_meta.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'keys","\uFDD0'vals","\uFDD0'simple-keys?","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'map","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'keys":ks,"\uFDD0'vals":vs,"\uFDD0'simple-keys?":simple_keys_QMARK_,"\uFDD0'children":replcljs.core.vec.call(null,replcljs.core.interleave.call(null,ks,vs))}),name);
});
replcljs.analyzer.analyze_vector = (function analyze_vector(env,form,name){
var expr_env = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var items = (function (){var _STAR_recur_frames_STAR_4915 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4903_SHARP_){
return replcljs.analyzer.analyze.call(null,expr_env,p1__4903_SHARP_,name);
}),form));
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4915;
}})();
return replcljs.analyzer.analyze_wrap_meta.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'items","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'vector","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'items":items,"\uFDD0'children":items}),name);
});
replcljs.analyzer.analyze_set = (function analyze_set(env,form,name){
var expr_env = replcljs.core.assoc.call(null,env,"\uFDD0'context","\uFDD0'expr");
var items = (function (){var _STAR_recur_frames_STAR_4919 = replcljs.analyzer._STAR_recur_frames_STAR_;
try{replcljs.analyzer._STAR_recur_frames_STAR_ = replcljs.core.cons.call(null,null,replcljs.analyzer._STAR_recur_frames_STAR_);
return replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4912_SHARP_){
return replcljs.analyzer.analyze.call(null,expr_env,p1__4912_SHARP_,name);
}),form));
}finally {replcljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_4919;
}})();
return replcljs.analyzer.analyze_wrap_meta.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'items","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'set","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'items":items,"\uFDD0'children":items}),name);
});
replcljs.analyzer.analyze_wrap_meta = (function analyze_wrap_meta(expr,name){
var form = (new replcljs.core.Keyword("\uFDD0'form")).call(null,expr);
if(replcljs.core.truth_(replcljs.core.meta.call(null,form)))
{var env = (new replcljs.core.Keyword("\uFDD0'env")).call(null,expr);
var expr__$1 = replcljs.core.assoc_in.call(null,expr,replcljs.core.PersistentVector.fromArray(["\uFDD0'env","\uFDD0'context"], true),"\uFDD0'expr");
var meta_expr = replcljs.analyzer.analyze_map.call(null,(new replcljs.core.Keyword("\uFDD0'env")).call(null,expr__$1),replcljs.core.meta.call(null,form),name);
return replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form","\uFDD0'meta","\uFDD0'expr","\uFDD0'children"],{"\uFDD0'op":"\uFDD0'meta","\uFDD0'env":env,"\uFDD0'form":form,"\uFDD0'meta":meta_expr,"\uFDD0'expr":expr__$1,"\uFDD0'children":replcljs.core.PersistentVector.fromArray([meta_expr,expr__$1], true)});
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
replcljs.analyzer.analyze = (function() {
var analyze = null;
var analyze__2 = (function (env,form){
return analyze.call(null,env,form,null);
});
var analyze__3 = (function (env,form,name){
var form__$1 = ((replcljs.core.instance_QMARK_.call(null,replcljs.core.LazySeq,form))?(function (){var or__3943__auto__ = replcljs.core.seq.call(null,form);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.List.EMPTY;
}
})():form);
if(replcljs.core.symbol_QMARK_.call(null,form__$1))
{return replcljs.analyzer.analyze_symbol.call(null,env,form__$1);
} else
{if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core.seq_QMARK_.call(null,form__$1);
if(and__3941__auto__)
{return replcljs.core.seq.call(null,form__$1);
} else
{return and__3941__auto__;
}
})()))
{return replcljs.analyzer.analyze_seq.call(null,env,form__$1,name);
} else
{if(replcljs.core.map_QMARK_.call(null,form__$1))
{return replcljs.analyzer.analyze_map.call(null,env,form__$1,name);
} else
{if(replcljs.core.vector_QMARK_.call(null,form__$1))
{return replcljs.analyzer.analyze_vector.call(null,env,form__$1,name);
} else
{if(replcljs.core.set_QMARK_.call(null,form__$1))
{return replcljs.analyzer.analyze_set.call(null,env,form__$1,name);
} else
{if(replcljs.core.keyword_QMARK_.call(null,form__$1))
{return replcljs.analyzer.analyze_keyword.call(null,env,form__$1);
} else
{if("\uFDD0'else")
{return replcljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'env","\uFDD0'form"],{"\uFDD0'op":"\uFDD0'constant","\uFDD0'env":env,"\uFDD0'form":form__$1});
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
replcljs.analyzer.analyze_file = (function analyze_file(f){
var raw_string = replcljs.core.file_read.call(null,f);
var _STAR_cljs_ns_STAR_4925 = replcljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_4926 = replcljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_ns_sym_STAR_4927 = replcljs.core._STAR_ns_sym_STAR_;
try{replcljs.analyzer._STAR_cljs_ns_STAR_ = (new replcljs.core.Symbol(null,"replcljs.user"));
replcljs.analyzer._STAR_cljs_file_STAR_ = f;
replcljs.core._STAR_ns_sym_STAR_ = replcljs.analyzer._STAR_reader_ns_name_STAR_;
var env = replcljs.analyzer.empty_env.call(null);
var pbr = reader.string_push_back_reader.call(null,raw_string);
var eof = (new Object());
var r = replcljs.reader.read.call(null,pbr,false,eof,false);
while(true){
var env__$1 = replcljs.core.assoc.call(null,env,"\uFDD0'ns",replcljs.core.find_ns.call(null,replcljs.analyzer._STAR_cljs_ns_STAR_));
if((eof === r))
{return null;
} else
{replcljs.analyzer.analyze.call(null,env__$1,r);
{
var G__4929 = replcljs.reader.read.call(null,pbr,false,eof,false);
r = G__4929;
continue;
}
}
break;
}
}finally {replcljs.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_4927;
replcljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_4926;
replcljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_4925;
}});

// Analyzer namespace snapshot:
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replcljs.analyzer"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4930__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4930 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4930__delegate.call(this, m);
};
G__4930.cljs$lang$maxFixedArity = 0;
G__4930.cljs$lang$applyTo = (function (arglist__4931){
var m = replcljs.core.seq(arglist__4931);;
return G__4930__delegate(m);
});
G__4930.cljs$lang$arity$variadic = G__4930__delegate;
return G__4930;
})()
,replcljs.core.hash_map("\uFDD0'defs",replcljs.core.hash_map((new replcljs.core.Symbol(null,"analyze")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Given an environment, a map containing {:locals (mapping of names to bindings), :context\n  (one of :statement, :expr, :return), :ns (a symbol naming the\n  compilation ns)}, and form, returns an expression object (a map\n  containing at least :form, :op and :env keys). If expr has any (immediately)\n  nested exprs, must have :children [exprs...] entry. This will\n  facilitate code walking without knowing the details of the op set.","\uFDD0'line",935,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"analyze-block")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"exprs"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"exprs")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-block")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","returns {:statements .. :ret ..}","\uFDD0'line",219,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-warn-fn-deprecated*")),replcljs.core.hash_map("\uFDD0'line",42,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-fn-deprecated*"))),(new replcljs.core.Symbol(null,"ns->relpath")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/ns->relpath")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",580,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-macros-is-classpath*")),replcljs.core.hash_map("\uFDD0'line",47,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-macros-is-classpath*"))),(new replcljs.core.Symbol(null,"load-core")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/load-core")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"resolve-existing-var")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/resolve-existing-var")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",105,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"classify-dot-form")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([replcljs.core.vec([(new replcljs.core.Symbol(null,"target")),(new replcljs.core.Symbol(null,"member")),(new replcljs.core.Symbol(null,"args"))])]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4852")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/classify-dot-form")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",718,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"analyze-let")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"encl-env")),replcljs.core.vec([(new replcljs.core.Symbol(null,"_")),(new replcljs.core.Symbol(null,"bindings")),(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"exprs")),"\uFDD0'as",(new replcljs.core.Symbol(null,"form"))]),(new replcljs.core.Symbol(null,"is-loop"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"encl-env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4779")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"is-loop")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-let")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",457,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-warn-on-redef*")),replcljs.core.hash_map("\uFDD0'line",38,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-on-redef*"))),(new replcljs.core.Symbol(null,"*cljs-warn-protocol-deprecated*")),replcljs.core.hash_map("\uFDD0'line",43,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-protocol-deprecated*"))),(new replcljs.core.Symbol(null,"*cljs-static-fns*")),replcljs.core.hash_map("\uFDD0'line",45,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-static-fns*"))),(new replcljs.core.Symbol(null,"munge-path")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ss"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ss")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/munge-path")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",577,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-warn-on-dynamic*")),replcljs.core.hash_map("\uFDD0'line",39,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-on-dynamic*"))),(new replcljs.core.Symbol(null,"/")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core//"))),(new replcljs.core.Symbol(null,"property-symbol?")),replcljs.core.hash_map("\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p1__4848#")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/property-symbol?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",716,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"confirm-bindings")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"names"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"names")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/confirm-bindings")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",191,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-warn-fn-arity*")),replcljs.core.hash_map("\uFDD0'line",41,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-fn-arity*"))),(new replcljs.core.Symbol(null,"resolve-var")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/resolve-var")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",154,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-macros-path*")),replcljs.core.hash_map("\uFDD0'line",46,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-macros-path*"))),(new replcljs.core.Symbol(null,"analyze-file")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"String")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",958,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"build-dot-form")),replcljs.core.hash_map("\uFDD0'line",729,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/build-dot-form"))),(new replcljs.core.Symbol(null,"get-expander")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"sym")),(new replcljs.core.Symbol(null,"env"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/get-expander")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",847,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"analyze-seq")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",885,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"analyze-fn-method")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"locals")),(new replcljs.core.Symbol(null,"form")),(new replcljs.core.Symbol(null,"type"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"locals")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"type")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-fn-method")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",356,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"analyze-set")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-set")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",919,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"macroexpand-1")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/macroexpand-1")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",865,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"resolve-ns-alias")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/resolve-ns-alias")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",95,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"analyze-map")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",901,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"core-name?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/core-name?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Is sym visible from core in the current compilation namespace?","\uFDD0'line",99,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"-cljs-macros-loaded")),replcljs.core.hash_map("\uFDD0'line",48,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/-cljs-macros-loaded"))),(new replcljs.core.Symbol(null,"*cljs-file*")),replcljs.core.hash_map("\uFDD0'line",37,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-file*"))),(new replcljs.core.Symbol(null,"specials")),replcljs.core.hash_map("\uFDD0'line",202,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/specials"))),(new replcljs.core.Symbol(null,"analyze-wrap-meta")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"expr")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"expr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-wrap-meta")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",925,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*loop-lets*")),replcljs.core.hash_map("\uFDD0'line",205,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*loop-lets*"))),(new replcljs.core.Symbol(null,"analyze-vector")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"form")),(new replcljs.core.Symbol(null,"name"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"name")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-vector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",913,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*unchecked-if*")),replcljs.core.hash_map("\uFDD0'line",44,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*unchecked-if*"))),(new replcljs.core.Symbol(null,"parse")),replcljs.core.hash_map("\uFDD0'line",229,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/parse"))),(new replcljs.core.Symbol(null,"block-children")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'keys",replcljs.core.vec([(new replcljs.core.Symbol(null,"statements")),(new replcljs.core.Symbol(null,"ret"))]),"\uFDD0'as",(new replcljs.core.Symbol(null,"block")))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4743")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/block-children")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",248,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-warn-on-undeclared*")),replcljs.core.hash_map("\uFDD0'line",24,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-on-undeclared*"))),(new replcljs.core.Symbol(null,"build-method-call")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"target")),(new replcljs.core.Symbol(null,"meth")),(new replcljs.core.Symbol(null,"args"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"target")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"meth")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"args")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/build-method-call")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Builds the intermediate method call map used to reason about the parsed form during\n  compilation.","\uFDD0'line",742,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"empty-env")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/empty-env")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",74,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*reader-ns-name*")),replcljs.core.hash_map("\uFDD0'line",31,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*reader-ns-name*"))),(new replcljs.core.Symbol(null,"*cljs-ns*")),replcljs.core.hash_map("\uFDD0'line",36,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-ns*"))),(new replcljs.core.Symbol(null,"analyze-keyword")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-keyword")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",210,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"confirm-var-exists")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"prefix")),(new replcljs.core.Symbol(null,"suffix"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"prefix")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"suffix")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/confirm-var-exists")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",87,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"warning")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/warning")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",81,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"*cljs-warn-on-fn-var*")),replcljs.core.hash_map("\uFDD0'line",40,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*cljs-warn-on-fn-var*"))),(new replcljs.core.Symbol(null,"*recur-frames*")),replcljs.core.hash_map("\uFDD0'line",204,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/*recur-frames*"))),(new replcljs.core.Symbol(null,"analyze-symbol")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/analyze-symbol")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Finds the var associated with sym","\uFDD0'line",836,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs"),(new replcljs.core.Symbol(null,"parse-invoke")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"env")),replcljs.core.vec([(new replcljs.core.Symbol(null,"f")),(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"args")),"\uFDD0'as",(new replcljs.core.Symbol(null,"form"))])]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"env")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4879")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer/parse-invoke")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",815,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/analyzer.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",replcljs.core.hash_map((new replcljs.core.Symbol(null,"disallowing-recur")),(new replcljs.core.Symbol(null,"replcljs.analyzer-macros"))),"\uFDD0'requires",replcljs.core.hash_map((new replcljs.core.Symbol(null,"string")),(new replcljs.core.Symbol(null,"replclojure.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",replcljs.core.set([(new replcljs.core.Symbol(null,"macroexpand-1")),(new replcljs.core.Symbol(null,"*unchecked-if*"))]),"\uFDD0'doc",null,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.analyzer"))),old);
}));
