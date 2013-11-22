// Compiled by ClojureScript 0.0-2014
goog.provide('koans.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('koans.repl');
goog.require('clojure.set');
goog.require('jayq.util');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('koans.meditations');
goog.require('koans.meditations');
goog.require('koans.repl');
goog.require('jayq.core');
goog.require('dommy.core');
koans.core.hash_objects = (function hash_objects(){return clojure.string.split.call(null,location.hash,"/");
});
koans.core.current_koan_index = (function current_koan_index(){return (new koans.meditations.KoanIndex(cljs.core.subs.call(null,cljs.core.first.call(null,koans.core.hash_objects.call(null)),1),(cljs.core.last.call(null,koans.core.hash_objects.call(null)) - 1)));
});
koans.core.update_location_hash = (function update_location_hash(){var koan = koans.meditations.next_koan_index.call(null,koans.core.current_koan_index.call(null));return location.hash = [cljs.core.str(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan)),cljs.core.str("/"),cljs.core.str((new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koan) + 1))].join('');
});
koans.core.fadeout_time = 600;
koans.core.char_width = 14;
koans.core.enter_key = 13;
koans.core.defer = (function defer(func){return jayq.util.wait.call(null,0,func);
});
koans.core.input_with_code = (function input_with_code(koan){var dom12750 = document.createElement("div");if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join('')))
{dom12750.className = [cljs.core.str(dom12750.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))].join('').trim();
} else
{}
dom12750.appendChild((function (){var dom12751 = document.createElement("div");if("description")
{dom12751.className = [cljs.core.str(dom12751.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();
} else
{}
dom12751.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koan)));
return dom12751;
})());
dom12750.appendChild((function (){var dom12752 = document.createElement("div");if("code-box")
{dom12752.className = [cljs.core.str(dom12752.className),cljs.core.str(" "),cljs.core.str("code-box")].join('').trim();
} else
{}
dom12752.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3813__auto__ = (function iter__12753(s__12754){return (new cljs.core.LazySeq(null,(function (){var s__12754__$1 = s__12754;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12754__$1);if(temp__4092__auto__)
{var s__12754__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12754__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12754__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12756 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12755 = 0;while(true){
if((i__12755 < size__3812__auto__))
{var text = cljs.core._nth.call(null,c__3811__auto__,i__12755);cljs.core.chunk_append.call(null,b__12756,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12777 = (i__12755 + 1);
i__12755 = G__12777;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12756),iter__12753.call(null,cljs.core.chunk_rest.call(null,s__12754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12756),null);
}
} else
{var text = cljs.core.first.call(null,s__12754__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12753.call(null,cljs.core.rest.call(null,s__12754__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892).cljs$core$IFn$_invoke$arity$1(koan));
})()));
return dom12752;
})());
dom12750.appendChild(dommy.template.__GT_node_like.call(null,((!((new cljs.core.Keyword(null,"fn-strings","fn-strings",4723129839).cljs$core$IFn$_invoke$arity$1(koan) == null)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"functions"], true),(function (){var iter__3813__auto__ = (function iter__12757(s__12758){return (new cljs.core.LazySeq(null,(function (){var s__12758__$1 = s__12758;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12758__$1);if(temp__4092__auto__)
{var s__12758__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12758__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12758__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12760 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12759 = 0;while(true){
if((i__12759 < size__3812__auto__))
{var function$ = cljs.core._nth.call(null,c__3811__auto__,i__12759);cljs.core.chunk_append.call(null,b__12760,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"function"], true),(function (){var iter__3813__auto__ = ((function (i__12759,function$,c__3811__auto__,size__3812__auto__,b__12760,s__12758__$2,temp__4092__auto__){
return (function iter__12769(s__12770){return (new cljs.core.LazySeq(null,((function (i__12759,function$,c__3811__auto__,size__3812__auto__,b__12760,s__12758__$2,temp__4092__auto__){
return (function (){var s__12770__$1 = s__12770;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12770__$1);if(temp__4092__auto____$1)
{var s__12770__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12770__$2))
{var c__3811__auto____$1 = cljs.core.chunk_first.call(null,s__12770__$2);var size__3812__auto____$1 = cljs.core.count.call(null,c__3811__auto____$1);var b__12772 = cljs.core.chunk_buffer.call(null,size__3812__auto____$1);if((function (){var i__12771 = 0;while(true){
if((i__12771 < size__3812__auto____$1))
{var text = cljs.core._nth.call(null,c__3811__auto____$1,i__12771);cljs.core.chunk_append.call(null,b__12772,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12778 = (i__12771 + 1);
i__12771 = G__12778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12772),iter__12769.call(null,cljs.core.chunk_rest.call(null,s__12770__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12772),null);
}
} else
{var text = cljs.core.first.call(null,s__12770__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12769.call(null,cljs.core.rest.call(null,s__12770__$2)));
}
} else
{return null;
}
break;
}
});})(i__12759,function$,c__3811__auto__,size__3812__auto__,b__12760,s__12758__$2,temp__4092__auto__))
,null,null));
});})(i__12759,function$,c__3811__auto__,size__3812__auto__,b__12760,s__12758__$2,temp__4092__auto__))
;return iter__3813__auto__.call(null,function$);
})()], true));
{
var G__12779 = (i__12759 + 1);
i__12759 = G__12779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12760),iter__12757.call(null,cljs.core.chunk_rest.call(null,s__12758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12760),null);
}
} else
{var function$ = cljs.core.first.call(null,s__12758__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"function"], true),(function (){var iter__3813__auto__ = ((function (function$,s__12758__$2,temp__4092__auto__){
return (function iter__12773(s__12774){return (new cljs.core.LazySeq(null,((function (function$,s__12758__$2,temp__4092__auto__){
return (function (){var s__12774__$1 = s__12774;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12774__$1);if(temp__4092__auto____$1)
{var s__12774__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12774__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12774__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12776 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12775 = 0;while(true){
if((i__12775 < size__3812__auto__))
{var text = cljs.core._nth.call(null,c__3811__auto__,i__12775);cljs.core.chunk_append.call(null,b__12776,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12780 = (i__12775 + 1);
i__12775 = G__12780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12776),iter__12773.call(null,cljs.core.chunk_rest.call(null,s__12774__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12776),null);
}
} else
{var text = cljs.core.first.call(null,s__12774__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12773.call(null,cljs.core.rest.call(null,s__12774__$2)));
}
} else
{return null;
}
break;
}
});})(function$,s__12758__$2,temp__4092__auto__))
,null,null));
});})(function$,s__12758__$2,temp__4092__auto__))
;return iter__3813__auto__.call(null,function$);
})()], true),iter__12757.call(null,cljs.core.rest.call(null,s__12758__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",4723129839).cljs$core$IFn$_invoke$arity$1(koan));
})()], true):null)));
return dom12750;
});
koans.core.error_message = (function error_message(){var dom12782 = document.createElement("div");if("error")
{dom12782.className = [cljs.core.str(dom12782.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();
} else
{}
dom12782.appendChild(document.createTextNode("You have not yet attained enlightenment."));
return dom12782;
});
koans.core.input_string = (function input_string(){var $inputs = jayq.core.$.call(null,".code-box input");var inputs_are_empty_QMARK_ = cljs.core.map.call(null,((function ($inputs){
return (function (el){return clojure.string.blank_QMARK_.call(null,el.value);
});})($inputs))
,$inputs);var is_empty_QMARK_ = cljs.core.reduce.call(null,((function ($inputs,inputs_are_empty_QMARK_){
return (function (val,result){var or__3128__auto__ = val;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return result;
}
});})($inputs,inputs_are_empty_QMARK_))
,inputs_are_empty_QMARK_);if(cljs.core.truth_(is_empty_QMARK_))
{return "";
} else
{var code = clojure.string.join.call(null," ",cljs.core.mapv.call(null,(function (el){if(cljs.core._EQ_.call(null,"text",cljs.core.first.call(null,el).className))
{return jayq.core.text.call(null,el);
} else
{if(cljs.core._EQ_.call(null,"INPUT",cljs.core.first.call(null,el).tagName))
{return jayq.core.val.call(null,el);
} else
{return null;
}
}
}),jayq.core.$.call(null,".code-box .text, .code-box input")));var fns = clojure.string.join.call(null," ",cljs.core.mapv.call(null,((function (code){
return (function (el){if(cljs.core._EQ_.call(null,"text",cljs.core.first.call(null,el).className))
{return jayq.core.text.call(null,el);
} else
{if(cljs.core._EQ_.call(null,"INPUT",cljs.core.first.call(null,el).tagName))
{return jayq.core.val.call(null,el);
} else
{return null;
}
}
});})(code))
,jayq.core.$.call(null,".functions .text, .functions input")));return [cljs.core.str(fns),cljs.core.str(" "),cljs.core.str(code)].join('');
}
});
koans.core.evaluate_koan = (function evaluate_koan(){jayq.util.log.call(null,"Evaluating ",koans.core.input_string.call(null));
return koans.repl.eval.call(null,koans.core.input_string.call(null));
});
koans.core.resize_chan = cljs.core.async.chan.call(null);
koans.core.load_next_koan = (function load_next_koan(){return koans.core.update_location_hash.call(null);
});
koans.core.remove_active_koan = (function remove_active_koan(){var $el = jayq.core.$.call(null,new cljs.core.Keyword(null,".koan",".koan",1059683633));return jayq.core.fade_out.call(null,$el,(function (){return jayq.core.remove.call(null,$el);
}));
});
koans.core.remove_static_pages = (function remove_static_pages(){return jayq.core.fade_out.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".static",".static",2291885966)));
});
koans.core.category_name = (function category_name(koan_index){var category = new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan_index);return clojure.string.replace.call(null,category,"-"," ");
});
koans.core.render_koan = (function render_koan(koan){koans.core.remove_active_koan.call(null);
koans.core.remove_static_pages.call(null);
var $elem = jayq.core.$.call(null,koans.core.input_with_code.call(null,koan));var $category = jayq.core.$.call(null,new cljs.core.Keyword(null,".category",".category",3820855966));var current_category = koans.core.category_name.call(null,koans.core.current_koan_index.call(null));if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",4723129839).cljs$core$IFn$_invoke$arity$1(koan)))
{} else
{jayq.core.add_class.call(null,$elem,"has-functions");
}
if(!(cljs.core._EQ_.call(null,jayq.core.text.call(null,$category),current_category)))
{jayq.core.fade_out.call(null,$category);
} else
{}
return jayq.util.wait.call(null,koans.core.fadeout_time,(function (){jayq.core.text.call(null,$category,current_category);
jayq.core.prepend.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),$elem);
jayq.core.fade_in.call(null,$elem);
jayq.core.fade_in.call(null,$category);
cljs.core.mapv.call(null,(function (el){return hljs.highlightBlock(cljs.core.first.call(null,el));
}),jayq.core.$.call(null,new cljs.core.Keyword(null,"pre","pre",1014015509)));
return cljs.core.first.call(null,jayq.core.find.call(null,$elem,new cljs.core.Keyword(null,"input","input",1114262332))).focus();
}));
});
koans.core.render_static_page = (function render_static_page(selector){koans.core.remove_active_koan.call(null);
var $el = jayq.core.$.call(null,selector);var $other = jayq.core.$.call(null,cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.PersistentHashSet.fromArray(["#the-end",null,"#welcome",null], true),cljs.core.PersistentHashSet.fromArray([selector,null], true))));jayq.core.fade_out.call(null,$other);
return jayq.util.wait.call(null,koans.core.fadeout_time,(function (){jayq.core.fade_out.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".category",".category",3820855966)));
return jayq.core.fade_in.call(null,$el);
}));
});
koans.core.render_current_koan = (function render_current_koan(){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,location.hash)))
{return koans.core.render_static_page.call(null,"#welcome");
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)),"complete"))
{return koans.core.render_static_page.call(null,"#the-end");
} else
{if(cljs.core.truth_(koans.meditations.koan_exists_QMARK_.call(null,koans.core.current_koan_index.call(null))))
{var current_koan = koans.meditations.koan_for_index.call(null,koans.core.current_koan_index.call(null));return koans.core.render_koan.call(null,current_koan);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return koans.core.update_location_hash.call(null);
} else
{return null;
}
}
}
}
});
koans.core.resize_input = (function resize_input(input){koans.core.$input = jayq.core.$.call(null,input);
koans.core.remove_spaces = (function remove_spaces(text){return clojure.string.replace.call(null,text," ","_");
});
var $parent = jayq.core.parent.call(null,koans.core.$input);var $shadow = jayq.core.find.call(null,$parent,new cljs.core.Keyword(null,".shadow",".shadow",2280788544));jayq.core.text.call(null,$shadow,koans.core.remove_spaces.call(null,jayq.core.val.call(null,koans.core.$input)));
var shadow_width = jayq.core.width.call(null,$shadow);var input_width = jayq.core.width.call(null,koans.core.$input);if((shadow_width >= input_width))
{return jayq.core.width.call(null,koans.core.$input,(shadow_width + (4 * koans.core.char_width)));
} else
{if(((input_width - (4 * koans.core.char_width)) >= shadow_width))
{return jayq.core.width.call(null,koans.core.$input,(shadow_width + (4 * koans.core.char_width)));
} else
{return null;
}
}
});
var c__5377__auto___12808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12796){var state_val_12797 = (state_12796[1]);if((state_val_12797 === 7))
{var inst_12786 = (state_12796[2]);var inst_12787 = inst_12786.target;var inst_12788 = koans.core.resize_input.call(null,inst_12787);var state_12796__$1 = (function (){var statearr_12798 = state_12796;(statearr_12798[5] = inst_12788);
return statearr_12798;
})();var statearr_12799_12809 = state_12796__$1;(statearr_12799_12809[2] = null);
(statearr_12799_12809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 6))
{var inst_12792 = (state_12796[2]);var state_12796__$1 = state_12796;var statearr_12800_12810 = state_12796__$1;(statearr_12800_12810[2] = inst_12792);
(statearr_12800_12810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 5))
{var state_12796__$1 = state_12796;var statearr_12801_12811 = state_12796__$1;(statearr_12801_12811[2] = null);
(statearr_12801_12811[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 4))
{var state_12796__$1 = state_12796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12796__$1,7,koans.core.resize_chan);
} else
{if((state_val_12797 === 3))
{var inst_12794 = (state_12796[2]);var state_12796__$1 = state_12796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12796__$1,inst_12794);
} else
{if((state_val_12797 === 2))
{var state_12796__$1 = state_12796;if(true)
{var statearr_12802_12812 = state_12796__$1;(statearr_12802_12812[1] = 4);
} else
{var statearr_12803_12813 = state_12796__$1;(statearr_12803_12813[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12797 === 1))
{var state_12796__$1 = state_12796;var statearr_12804_12814 = state_12796__$1;(statearr_12804_12814[2] = null);
(statearr_12804_12814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12806 = (new Array(6));(statearr_12806[0] = state_machine__5328__auto__);
(statearr_12806[1] = 1);
return statearr_12806;
});
var state_machine__5328__auto____1 = (function (state_12796){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12796);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12796){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12807 = f__5378__auto__.call(null);(statearr_12807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___12808);
return statearr_12807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
jayq.core.document_ready.call(null,(function (){jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,".text",".text",1059942861),(function (e){return cljs.core.first.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332))).focus();
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"input","input",1114262332),(function (e){if(cljs.core._EQ_.call(null,e.which,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),(function (e){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12818){var state_val_12819 = (state_12818[1]);if((state_val_12819 === 2))
{var inst_12816 = (state_12818[2]);var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12818__$1,inst_12816);
} else
{if((state_val_12819 === 1))
{var state_12818__$1 = state_12818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12818__$1,2,koans.core.resize_chan,e);
} else
{return null;
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12821 = (new Array(5));(statearr_12821[0] = state_machine__5328__auto__);
(statearr_12821[1] = 1);
return statearr_12821;
});
var state_machine__5328__auto____1 = (function (state_12818){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12818);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12818){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12822 = f__5378__auto__.call(null);(statearr_12822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
}));
return koans.core.render_current_koan.call(null);
}));
window.onhashchange = (function (){koans.core.render_current_koan.call(null);
return ga("pageview",cljs.core.subs.call(null,location.hash,1));
});
koans.core.show_error_message = (function show_error_message(){koans.core.$code_box = jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",2901198731));
if(cljs.core.truth_(jayq.core.has_class.call(null,koans.core.$code_box,"incorrect")))
{var $error = jayq.core.$.call(null,new cljs.core.Keyword(null,".error",".error",2427630092));jayq.core.remove_class.call(null,koans.core.$code_box,"incorrect");
jayq.core.fade_out.call(null,$error);
return jayq.util.wait.call(null,300,(function (){return jayq.core.add_class.call(null,koans.core.$code_box,"incorrect").call(null,jayq.core.fade_in.call(null,$error));
}));
} else
{var $error = jayq.core.$.call(null,koans.core.error_message.call(null));jayq.core.add_class.call(null,koans.core.$code_box,"incorrect");
jayq.core.after.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",2901198731)),$error);
return jayq.core.fade_in.call(null,$error);
}
});
koans.core.evaluate_response = (function evaluate_response(text){jayq.util.log.call(null,text);
if(cljs.core._EQ_.call(null,text,"true"))
{return koans.core.load_next_koan.call(null);
} else
{if((cljs.core._EQ_.call(null,text,"false")) || (!((cljs.core.re_find.call(null,/\#\<[A-Za-z]*?Error:/,text) == null))))
{return koans.core.show_error_message.call(null);
} else
{return null;
}
}
});
koans.repl.listen_for_output.call(null,koans.core.evaluate_response);

//# sourceMappingURL=core.js.map