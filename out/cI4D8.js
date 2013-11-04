goog.provide('repl');
goog.require('cljs.core');
goog.require('cljs.repl');
repl.helo_world = (function helo_world(){
return console.log("HI MOM");
});
goog.exportSymbol('repl.helo_world', repl.helo_world);
repl.dom = (function dom(o){
if(cljs.core.coll_QMARK_.call(null,o))
{var vec__3237 = o;
var tag = cljs.core.nth.call(null,vec__3237,0,null);
var attrs = cljs.core.nth.call(null,vec__3237,1,null);
var body = cljs.core.nthnext.call(null,vec__3237,2);
if(cljs.core.keyword_QMARK_.call(null,tag))
{var elem = document.createElement(cljs.core.name.call(null,tag));
if(cljs.core.map_QMARK_.call(null,attrs))
{var G__3238_3240 = cljs.core.seq.call(null,attrs);
while(true){
if(G__3238_3240)
{var vec__3239_3241 = cljs.core.first.call(null,G__3238_3240);
var k_3242 = cljs.core.nth.call(null,vec__3239_3241,0,null);
var v_3243 = cljs.core.nth.call(null,vec__3239_3241,1,null);
if(cljs.core.truth_(v_3243))
{elem.setAttribute(cljs.core.name.call(null,k_3242),v_3243);
} else
{}
{
var G__3244 = cljs.core.next.call(null,G__3238_3240);
G__3238_3240 = G__3244;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.PersistentVector.fromArray([repl.append_dom.call(null,elem,((cljs.core.map_QMARK_.call(null,attrs))?body:cljs.core.cons.call(null,attrs,body)))], true);
} else
{return cljs.core.mapcat.call(null,dom,o);
}
} else
{if(cljs.core.truth_(o))
{return cljs.core.PersistentVector.fromArray([document.createTextNode([cljs.core.str(o)].join(''))], true);
} else
{return null;
}
}
});
repl.append_dom = (function append_dom(parent,v){
var G__3246_3247 = cljs.core.seq.call(null,repl.dom.call(null,v));
while(true){
if(G__3246_3247)
{var i_3248 = cljs.core.first.call(null,G__3246_3247);
parent.appendChild(i_3248);
{
var G__3249 = cljs.core.next.call(null,G__3246_3247);
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
var G__3251_3252 = cljs.core.seq.call(null,[cljs.core.str(text)].join('').split(/\n/));
while(true){
if(G__3251_3252)
{var line_3253 = cljs.core.first.call(null,G__3251_3252);
repl.append_dom.call(null,log,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("cg "),cljs.core.str((cljs.core.truth_(cls)?[cljs.core.str(" "),cljs.core.str(cls)].join(''):null))].join('')}),line_3253], true));
{
var G__3254 = cljs.core.next.call(null,G__3251_3252);
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
return repl.append_dom.call(null,log,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.PersistentVector.fromArray(["\uFDD0'tbody",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"cg"}),cljs.repl.prompt.call(null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",text.replace(/\n$/,"")], true)], true)], true)], true));
});
repl.pep = (function pep(log,text){
repl.postexpr.call(null,log,text);
return cljs.repl.eval_print.call(null,text);
});
window.onload = (function (){
cljs.repl.init.call(null);
var log = document.getElementById("log");
var input = document.getElementById("input");
var status1 = document.getElementById("status1");
var status2 = document.getElementById("status2");
cljs.core._STAR_out_STAR_ = (function (p1__3255_SHARP_){
return repl.repl_print.call(null,log,p1__3255_SHARP_,null);
});
cljs.core._STAR_rtn_STAR_ = (function (p1__3256_SHARP_){
return repl.repl_print.call(null,log,p1__3256_SHARP_,"rtn");
});
cljs.core._STAR_err_STAR_ = (function (p1__3257_SHARP_){
return repl.repl_print.call(null,log,p1__3257_SHARP_,"err");
});
cljs.core._STAR_print_fn_STAR_ = (function (p1__3258_SHARP_){
return cljs.core._STAR_out_STAR_.call(null,p1__3258_SHARP_);
});
cljs.core.println.call(null,";; ClojureScript");
repl.append_dom.call(null,log,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"cg"}),";;   - ",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":"http://github.com/kanaka/clojurescript"}),"http://github.com/kanaka/clojurescript"], true)], true));
cljs.core.println.call(null,";;   - A port of the ClojureScript compiler to ClojureScript");
repl.pep.call(null,log,"(+ 1 2)");
repl.pep.call(null,log,"(defn sqr [x] (* x x))");
repl.pep.call(null,log,"(sqr 8)");
repl.pep.call(null,log,"(defmacro unless [pred a b] `(if (not ~pred) ~a ~b))");
repl.pep.call(null,log,"(unless false :yep :nope)");
input.onkeypress = (function (ev){
if(((function (){var or__3943__auto__ = ev;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return repl.event;
}
})().keyCode === 13))
{var line = input.value;
if(cljs.core.truth_(cljs.repl.complete_form_QMARK_.call(null,line)))
{repl.pep.call(null,log,line);
setTimeout((function (){
return input.value = "";
}),0);
status1.style.visibility = "visible";
status2.style.visibility = "hidden";
return document.getElementById("ns").innerText = cljs.repl.prompt.call(null);
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
