replgoog.provide('cljsrepl.repl');
replgoog.require('cljsrepl.core');
replgoog.require('cljsrepl.reader');
replgoog.require('cljsrepl.compiler');
replgoog.require('cljsrepl.analyzer');
cljsrepl.repl._STAR_debug_STAR_ = false;
cljsrepl.repl.prompt = (function prompt(){
return [cljsrepl.core.str(cljsrepl.core._STAR_ns_sym_STAR_),cljsrepl.core.str("=> ")].join('');
});
/**
* Evaluates next clojure form in reader. Returns a map, containing
* either resulting value and emitted javascript, or an error
* object, or {:finished true}.
*/
cljsrepl.repl.evaluate_next_form = (function evaluate_next_form(rdr){
try{var form = cljsrepl.reader.read.call(null,rdr,false,"\uFDD0'cljsrepl.repl/finished-reading");
var _ = (cljsrepl.core.truth_(cljsrepl.repl._STAR_debug_STAR_)?cljsrepl.core.println.call(null,"READ:",cljsrepl.core.pr_str.call(null,form)):null);
if(cljsrepl.core._EQ_.call(null,form,"\uFDD0'cljsrepl.repl/finished-reading"))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'finished"],{"\uFDD0'finished":true});
} else
{var env = cljsrepl.core.assoc.call(null,cljsrepl.analyzer.empty_env.call(null),"\uFDD0'context","\uFDD0'expr");
var body = cljsrepl.analyzer.analyze.call(null,env,form);
var ___$1 = (cljsrepl.core.truth_(cljsrepl.repl._STAR_debug_STAR_)?cljsrepl.core.println.call(null,"ANALYZED:",cljsrepl.core.pr_str.call(null,(new cljsrepl.core.Keyword("\uFDD0'form")).call(null,body))):null);
var res = cljsrepl.compiler.emit_str.call(null,body);
var ___$2 = (cljsrepl.core.truth_(cljsrepl.repl._STAR_debug_STAR_)?cljsrepl.core.println.call(null,"EMITTED:",cljsrepl.core.pr_str.call(null,res)):null);
var value = eval(res);
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'value","\uFDD0'js"],{"\uFDD0'value":value,"\uFDD0'js":res});
}
}catch (e4259){if(cljsrepl.core.instance_QMARK_.call(null,Error,e4259))
{var e = e4259;
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'error","\uFDD0'line-number"],{"\uFDD0'error":e,"\uFDD0'line-number":cljsrepl.reader.get_line_number.call(null,rdr)});
} else
{if("\uFDD0'else")
{throw e4259;
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
cljsrepl.repl.evaluate_code = (function evaluate_code(text){
var rdr = cljsrepl.reader.indexing_push_back_reader.call(null,text);
var last_output = null;
while(true){
var output = cljsrepl.repl.evaluate_next_form.call(null,rdr);
if(cljsrepl.core.not.call(null,(new cljsrepl.core.Keyword("\uFDD0'finished")).call(null,output)))
{var temp__4090__auto__ = (new cljsrepl.core.Keyword("\uFDD0'error")).call(null,output);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;
cljsrepl.core._STAR_e = err;
return output;
} else
{{
var G__4260 = output;
last_output = G__4260;
continue;
}
}
} else
{cljsrepl.core._STAR_3 = cljsrepl.core._STAR_2;
cljsrepl.core._STAR_2 = cljsrepl.core._STAR_1;
cljsrepl.core._STAR_1 = (new cljsrepl.core.Keyword("\uFDD0'value")).call(null,last_output);
return last_output;
}
break;
}
});
cljsrepl.repl.print_error = (function print_error(p__4261){
var map__4263 = p__4261;
var map__4263__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__4263))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__4263):map__4263);
var line_number = cljsrepl.core._lookup.call(null,map__4263__$1,"\uFDD0'line-number",null);
var error = cljsrepl.core._lookup.call(null,map__4263__$1,"\uFDD0'error",null);
return cljsrepl.core.print.call(null,error,"at line",line_number);
});
cljsrepl.repl.eval_print = (function eval_print(input){
var evaluated = cljsrepl.repl.evaluate_code.call(null,input);
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'error")).call(null,evaluated)))
{var _STAR_out_STAR_4271 = cljsrepl.core._STAR_out_STAR_;
try{cljsrepl.core._STAR_out_STAR_ = cljsrepl.core._STAR_err_STAR_;
return cljsrepl.repl.print_error.call(null,evaluated);
}finally {cljsrepl.core._STAR_out_STAR_ = _STAR_out_STAR_4271;
}} else
{try{var _STAR_out_STAR_4276 = cljsrepl.core._STAR_out_STAR_;
try{cljsrepl.core._STAR_out_STAR_ = cljsrepl.core._STAR_rtn_STAR_;
return cljsrepl.core.pr.call(null,(new cljsrepl.core.Keyword("\uFDD0'value")).call(null,evaluated));
}finally {cljsrepl.core._STAR_out_STAR_ = _STAR_out_STAR_4276;
}}catch (e4273){if(cljsrepl.core.instance_QMARK_.call(null,Error,e4273))
{var e = e4273;
var _STAR_out_STAR_4274 = cljsrepl.core._STAR_out_STAR_;
try{cljsrepl.core._STAR_out_STAR_ = cljsrepl.core._STAR_err_STAR_;
return cljsrepl.core.println.call(null,cljsrepl.repl.err);
}finally {cljsrepl.core._STAR_out_STAR_ = _STAR_out_STAR_4274;
}} else
{if("\uFDD0'else")
{throw e4273;
} else
{return null;
}
}
}}
});
cljsrepl.repl.complete_form_QMARK_ = (function complete_form_QMARK_(text){
try{cljsrepl.reader.read_string.call(null,text);
return true;
}catch (e4279){if(cljsrepl.core.instance_QMARK_.call(null,Error,e4279))
{var e = e4279;
return cljsrepl.core.not.call(null,cljsrepl.core.re_find.call(null,/EOF while reading/,e.message));
} else
{if("\uFDD0'else")
{throw e4279;
} else
{return null;
}
}
}});
cljsrepl.repl.init = (function init(){
cljsrepl.core.swap_BANG_.call(null,cljsrepl.compiler._STAR_emitted_provides_STAR_,cljsrepl.core.conj,cljsrepl.core.symbol.call(null,"cljsrepl.user"));
replgoog.provide("cljsrepl.user");
return cljsrepl.core._STAR_ns_sym_STAR_ = cljsrepl.core.symbol.call(null,"cljsrepl.user");
});

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"cljsrepl.repl"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4280__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4280 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4280__delegate.call(this, m);
};
G__4280.cljs$lang$maxFixedArity = 0;
G__4280.cljs$lang$applyTo = (function (arglist__4281){
var m = cljsrepl.core.seq(arglist__4281);;
return G__4280__delegate(m);
});
G__4280.cljs$lang$arity$variadic = G__4280__delegate;
return G__4280;
})()
,cljsrepl.core.hash_map("\uFDD0'defs",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"evaluate-code")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"text"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/evaluate-code")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Evaluates some text from REPL input. If multiple forms are\n   present, evaluates in sequence until one throws an error\n   or the last form is reached. The result from the last\n   evaluated form is returned. *1, *2, *3, and *e are updated\n   appropriately.","\uFDD0'line",30,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new cljsrepl.core.Symbol(null,"evaluate-next-form")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/evaluate-next-form")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Evaluates next clojure form in reader. Returns a map, containing\n   either resulting value and emitted javascript, or an error\n   object, or {:finished true}.","\uFDD0'line",10,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new cljsrepl.core.Symbol(null,"/")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core//"))),(new cljsrepl.core.Symbol(null,"init")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/init")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",69,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new cljsrepl.core.Symbol(null,"*debug*")),cljsrepl.core.hash_map("\uFDD0'line",6,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/*debug*"))),(new cljsrepl.core.Symbol(null,"eval-print")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"input"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"input")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/eval-print")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",53,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new cljsrepl.core.Symbol(null,"complete-form?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"text"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/complete-form?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",62,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new cljsrepl.core.Symbol(null,"prompt")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/prompt")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",8,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs"),(new cljsrepl.core.Symbol(null,"print-error")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'keys",cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"error")),(new cljsrepl.core.Symbol(null,"line-number"))]))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4261")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl/print-error")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/repl.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"cljsrepl.reader")),(new cljsrepl.core.Symbol(null,"comp")),(new cljsrepl.core.Symbol(null,"cljsrepl.compiler")),(new cljsrepl.core.Symbol(null,"ana")),(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljsrepl.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.repl"))),old);
}));
