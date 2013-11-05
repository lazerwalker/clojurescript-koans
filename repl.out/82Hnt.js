replgoog.provide('repl');
replgoog.require('replcljs.core');
replgoog.require('replcljs.repl');
repl.hello_world = (function hello_world(){
return console.log("HI MOM");
});
replgoog.exportSymbol('repl.hello_world', repl.hello_world);
repl.dom = (function dom(o){
if(replcljs.core.coll_QMARK_.call(null,o))
{var vec__3237 = o;
var tag = replcljs.core.nth.call(null,vec__3237,0,null);
var attrs = replcljs.core.nth.call(null,vec__3237,1,null);
var body = replcljs.core.nthnext.call(null,vec__3237,2);
if(replcljs.core.keyword_QMARK_.call(null,tag))
{var elem = document.createElement(replcljs.core.name.call(null,tag));
if(replcljs.core.map_QMARK_.call(null,attrs))
{var G__3238_3240 = replcljs.core.seq.call(null,attrs);
while(true){
if(G__3238_3240)
{var vec__3239_3241 = replcljs.core.first.call(null,G__3238_3240);
var k_3242 = replcljs.core.nth.call(null,vec__3239_3241,0,null);
var v_3243 = replcljs.core.nth.call(null,vec__3239_3241,1,null);
if(replcljs.core.truth_(v_3243))
{elem.setAttribute(replcljs.core.name.call(null,k_3242),v_3243);
} else
{}
{
var G__3244 = replcljs.core.next.call(null,G__3238_3240);
G__3238_3240 = G__3244;
continue;
}
} else
{}
break;
}
} else
{}
return replcljs.core.PersistentVector.fromArray([repl.append_dom.call(null,elem,((replcljs.core.map_QMARK_.call(null,attrs))?body:replcljs.core.cons.call(null,attrs,body)))], true);
} else
{return replcljs.core.mapcat.call(null,dom,o);
}
} else
{if(replcljs.core.truth_(o))
{return replcljs.core.PersistentVector.fromArray([document.createTextNode([replcljs.core.str(o)].join(''))], true);
} else
{return null;
}
}
});
repl.append_dom = (function append_dom(parent,v){
var G__3246_3247 = replcljs.core.seq.call(null,repl.dom.call(null,v));
while(true){
if(G__3246_3247)
{var i_3248 = replcljs.core.first.call(null,G__3246_3247);
parent.appendChild(i_3248);
{
var G__3249 = replcljs.core.next.call(null,G__3246_3247);
G__3246_3247 = G__3249;
continue;
}
} else
{}
break;
}
return parent;
});
repl.repl_print = (function repl_print(log,text,cls){
var G__3251_3252 = replcljs.core.seq.call(null,[replcljs.core.str(text)].join('').split(/\n/));
while(true){
if(G__3251_3252)
{var line_3253 = replcljs.core.first.call(null,G__3251_3252);
repl.append_dom.call(null,log,replcljs.core.PersistentVector.fromArray(["\uFDD0'div",replcljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[replcljs.core.str("cg "),replcljs.core.str((replcljs.core.truth_(cls)?[replcljs.core.str(" "),replcljs.core.str(cls)].join(''):null))].join('')}),line_3253], true));
{
var G__3254 = replcljs.core.next.call(null,G__3251_3252);
G__3251_3252 = G__3254;
continue;
}
} else
{}
break;
}
return log.scrollTop = log.scrollHeight;
});
repl.postexpr = (function postexpr(log,text){
return repl.append_dom.call(null,log,replcljs.core.PersistentVector.fromArray(["\uFDD0'table",replcljs.core.PersistentVector.fromArray(["\uFDD0'tbody",replcljs.core.PersistentVector.fromArray(["\uFDD0'tr",replcljs.core.PersistentVector.fromArray(["\uFDD0'td",replcljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"cg"}),replcljs.repl.prompt.call(null)], true),replcljs.core.PersistentVector.fromArray(["\uFDD0'td",text.replace(/\n$/,"")], true)], true)], true)], true));
});
repl.pep = (function pep(log,text){
repl.postexpr.call(null,log,text);
return replcljs.repl.eval_print.call(null,text);
});
window.onload = (function (){
replcljs.repl.init.call(null);
var log = document.getElementById("log");
var input = document.getElementById("input");
var status1 = document.getElementById("status1");
var status2 = document.getElementById("status2");
replcljs.core._STAR_out_STAR_ = (function (p1__3255_SHARP_){
return repl.repl_print.call(null,log,p1__3255_SHARP_,null);
});
replcljs.core._STAR_rtn_STAR_ = (function (p1__3256_SHARP_){
return repl.repl_print.call(null,log,p1__3256_SHARP_,"rtn");
});
replcljs.core._STAR_err_STAR_ = (function (p1__3257_SHARP_){
return repl.repl_print.call(null,log,p1__3257_SHARP_,"err");
});
replcljs.core._STAR_print_fn_STAR_ = (function (p1__3258_SHARP_){
return replcljs.core._STAR_out_STAR_.call(null,p1__3258_SHARP_);
});
replcljs.core.println.call(null,";; ClojureScript");
repl.append_dom.call(null,log,replcljs.core.PersistentVector.fromArray(["\uFDD0'div",replcljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"cg"}),";;   - ",replcljs.core.PersistentVector.fromArray(["\uFDD0'a",replcljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":"http://github.com/kanaka/clojurescript"}),"http://github.com/kanaka/clojurescript"], true)], true));
replcljs.core.println.call(null,";;   - A port of the ClojureScript compiler to ClojureScript");
repl.pep.call(null,log,"(+ 1 2)");
repl.pep.call(null,log,"(defn sqr [x] (* x x))");
repl.pep.call(null,log,"(sqr 8)");
repl.pep.call(null,log,"(defmacro unless [pred a b] `(if (not ~pred) ~a ~b))");
repl.pep.call(null,log,"(unless false :yep :nope)");
input.onkeypress = (function (ev){
if(((function (){var or__3943__auto__ = ev;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return repl.event;
}
})().keyCode === 13))
{var line = input.value;
if(replcljs.core.truth_(replcljs.repl.complete_form_QMARK_.call(null,line)))
{repl.pep.call(null,log,line);
setTimeout((function (){
return input.value = "";
}),0);
status1.style.visibility = "visible";
status2.style.visibility = "hidden";
return document.getElementById("ns").innerText = replcljs.repl.prompt.call(null);
} else
{status1.style.visibility = "hidden";
return status2.style.visibility = "visible";
}
} else
{return null;
}
});
return input.focus();
});
