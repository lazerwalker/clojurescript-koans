replgoog.provide('replcljs.repl');
replgoog.require('replcljs.core');
replgoog.require('replcljs.reader');
replgoog.require('replcljs.compiler');
replgoog.require('replcljs.analyzer');
replcljs.repl._STAR_debug_STAR_ = false;
replcljs.repl.prompt = (function prompt(){
return [replcljs.core.str(replcljs.core._STAR_ns_sym_STAR_),replcljs.core.str("=> ")].join('');
});
/**
* Evaluates next clojure form in reader. Returns a map, containing
* either resulting value and emitted javascript, or an error
* object, or {:finished true}.
*/
replcljs.repl.evaluate_next_form = (function evaluate_next_form(rdr){
try{var form = replcljs.reader.read.call(null,rdr,false,"\uFDD0'replcljs.repl/finished-reading");
var _ = (replcljs.core.truth_(replcljs.repl._STAR_debug_STAR_)?replcljs.core.println.call(null,"READ:",replcljs.core.pr_str.call(null,form)):null);
if(replcljs.core._EQ_.call(null,form,"\uFDD0'replcljs.repl/finished-reading"))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'finished"],{"\uFDD0'finished":true});
} else
{var env = replcljs.core.assoc.call(null,replcljs.analyzer.empty_env.call(null),"\uFDD0'context","\uFDD0'expr");
var body = replcljs.analyzer.analyze.call(null,env,form);
var ___$1 = (replcljs.core.truth_(replcljs.repl._STAR_debug_STAR_)?replcljs.core.println.call(null,"ANALYZED:",replcljs.core.pr_str.call(null,(new replcljs.core.Keyword("\uFDD0'form")).call(null,body))):null);
var res = replcljs.compiler.emit_str.call(null,body);
var ___$2 = (replcljs.core.truth_(replcljs.repl._STAR_debug_STAR_)?replcljs.core.println.call(null,"EMITTED:",replcljs.core.pr_str.call(null,res)):null);
var value = eval(res);
return replcljs.core.ObjMap.fromObject(["\uFDD0'value","\uFDD0'js"],{"\uFDD0'value":value,"\uFDD0'js":res});
}
}catch (e4280){if(replcljs.core.instance_QMARK_.call(null,Error,e4280))
{var e = e4280;
return replcljs.core.ObjMap.fromObject(["\uFDD0'error","\uFDD0'line-number"],{"\uFDD0'error":e,"\uFDD0'line-number":replcljs.reader.get_line_number.call(null,rdr)});
} else
{if("\uFDD0'else")
{throw e4280;
} else
{return null;
}
}
}});
/**
* Evaluates some text from REPL input. If multiple forms are
* present, evaluates in sequence until one throws an error
* or the last form is reached. The result from the last
* evaluated form is returned. *1, *2, *3, and *e are updated
* appropriately.
*/
replcljs.repl.evaluate_code = (function evaluate_code(text){
var rdr = replcljs.reader.indexing_push_back_reader.call(null,text);
var last_output = null;
while(true){
var output = replcljs.repl.evaluate_next_form.call(null,rdr);
if(replcljs.core.not.call(null,(new replcljs.core.Keyword("\uFDD0'finished")).call(null,output)))
{var temp__4090__auto__ = (new replcljs.core.Keyword("\uFDD0'error")).call(null,output);
if(replcljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;
replcljs.core._STAR_e = err;
return output;
} else
{{
var G__4281 = output;
last_output = G__4281;
continue;
}
}
} else
{replcljs.core._STAR_3 = replcljs.core._STAR_2;
replcljs.core._STAR_2 = replcljs.core._STAR_1;
replcljs.core._STAR_1 = (new replcljs.core.Keyword("\uFDD0'value")).call(null,last_output);
return last_output;
}
break;
}
});
replcljs.repl.print_error = (function print_error(p__4282){
var map__4284 = p__4282;
var map__4284__$1 = ((replcljs.core.seq_QMARK_.call(null,map__4284))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__4284):map__4284);
var line_number = replcljs.core._lookup.call(null,map__4284__$1,"\uFDD0'line-number",null);
var error = replcljs.core._lookup.call(null,map__4284__$1,"\uFDD0'error",null);
return replcljs.core.print.call(null,error,"at line",line_number);
});
replcljs.repl.eval_print = (function eval_print(input){
var evaluated = replcljs.repl.evaluate_code.call(null,input);
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'error")).call(null,evaluated)))
{var _STAR_out_STAR_4292 = replcljs.core._STAR_out_STAR_;
try{replcljs.core._STAR_out_STAR_ = replcljs.core._STAR_err_STAR_;
return replcljs.repl.print_error.call(null,evaluated);
}finally {replcljs.core._STAR_out_STAR_ = _STAR_out_STAR_4292;
}} else
{try{var _STAR_out_STAR_4297 = replcljs.core._STAR_out_STAR_;
try{replcljs.core._STAR_out_STAR_ = replcljs.core._STAR_rtn_STAR_;
return replcljs.core.pr.call(null,(new replcljs.core.Keyword("\uFDD0'value")).call(null,evaluated));
}finally {replcljs.core._STAR_out_STAR_ = _STAR_out_STAR_4297;
}}catch (e4294){if(replcljs.core.instance_QMARK_.call(null,Error,e4294))
{var e = e4294;
var _STAR_out_STAR_4295 = replcljs.core._STAR_out_STAR_;
try{replcljs.core._STAR_out_STAR_ = replcljs.core._STAR_err_STAR_;
return replcljs.core.println.call(null,replcljs.repl.err);
}finally {replcljs.core._STAR_out_STAR_ = _STAR_out_STAR_4295;
}} else
{if("\uFDD0'else")
{throw e4294;
} else
{return null;
}
}
}}
});
replcljs.repl.complete_form_QMARK_ = (function complete_form_QMARK_(text){
try{replcljs.reader.read_string.call(null,text);
return true;
}catch (e4300){if(replcljs.core.instance_QMARK_.call(null,Error,e4300))
{var e = e4300;
return replcljs.core.not.call(null,replcljs.core.re_find.call(null,/EOF while reading/,e.message));
} else
{if("\uFDD0'else")
{throw e4300;
} else
{return null;
}
}
}});
replcljs.repl.init = (function init(){
replcljs.core.swap_BANG_.call(null,replcljs.compiler._STAR_emitted_provides_STAR_,replcljs.core.conj,replcljs.core.symbol.call(null,"replcljs.user"));
replgoog.provide("replcljs.user");
return replcljs.core._STAR_ns_sym_STAR_ = replcljs.core.symbol.call(null,"replcljs.user");
});

// Analyzer namespace snapshot:
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replcljs.repl"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4301__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4301 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4301__delegate.call(this, m);
};
G__4301.cljs$lang$maxFixedArity = 0;
G__4301.cljs$lang$applyTo = (function (arglist__4302){
var m = replcljs.core.seq(arglist__4302);;
return G__4301__delegate(m);
});
G__4301.cljs$lang$arity$variadic = G__4301__delegate;
return G__4301;
})()
,replcljs.core.hash_map("\uFDD0'defs",replcljs.core.hash_map((new replcljs.core.Symbol(null,"evaluate-code")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"text"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/evaluate-code")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Evaluates some text from REPL input. If multiple forms are\n   present, evaluates in sequence until one throws an error\n   or the last form is reached. The result from the last\n   evaluated form is returned. *1, *2, *3, and *e are updated\n   appropriately.","\uFDD0'line",30,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new replcljs.core.Symbol(null,"evaluate-next-form")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/evaluate-next-form")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Evaluates next clojure form in reader. Returns a map, containing\n   either resulting value and emitted javascript, or an error\n   object, or {:finished true}.","\uFDD0'line",10,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new replcljs.core.Symbol(null,"/")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core//"))),(new replcljs.core.Symbol(null,"init")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/init")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",69,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new replcljs.core.Symbol(null,"*debug*")),replcljs.core.hash_map("\uFDD0'line",6,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/*debug*"))),(new replcljs.core.Symbol(null,"eval-print")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"input"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"input")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/eval-print")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",53,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new replcljs.core.Symbol(null,"complete-form?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"text"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/complete-form?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",62,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new replcljs.core.Symbol(null,"prompt")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/prompt")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",8,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new replcljs.core.Symbol(null,"print-error")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'keys",replcljs.core.vec([(new replcljs.core.Symbol(null,"error")),(new replcljs.core.Symbol(null,"line-number"))]))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4282")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl/print-error")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",replcljs.core.hash_map((new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"replcljs.reader")),(new replcljs.core.Symbol(null,"comp")),(new replcljs.core.Symbol(null,"replcljs.compiler")),(new replcljs.core.Symbol(null,"ana")),(new replcljs.core.Symbol(null,"replcljs.analyzer"))),"\uFDD0'uses",null,"\uFDD0'excludes",replcljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.repl"))),old);
}));
