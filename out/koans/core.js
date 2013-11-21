// Compiled by ClojureScript 0.0-2014
goog.provide('koans.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('koans.repl');
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
koans.core.fade_in_BANG_ = (function fade_in_BANG_(elem){return jayq.util.wait.call(null,0,(function (){return jayq.core.add_class.call(null,jayq.core.$.call(null,elem),"unfaded");
}));
});
koans.core.input_with_code = (function input_with_code(koan){var dom12684 = document.createElement("div");if(cljs.core.truth_([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join('')))
{dom12684.className = [cljs.core.str(dom12684.className),cljs.core.str(" "),cljs.core.str([cljs.core.str("koan koan-"),cljs.core.str(new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)))].join(''))].join('').trim();
} else
{}
dom12684.appendChild((function (){var dom12685 = document.createElement("div");if("description")
{dom12685.className = [cljs.core.str(dom12685.className),cljs.core.str(" "),cljs.core.str("description")].join('').trim();
} else
{}
dom12685.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(koan)));
return dom12685;
})());
dom12684.appendChild((function (){var dom12686 = document.createElement("div");if("code-box")
{dom12686.className = [cljs.core.str(dom12686.className),cljs.core.str(" "),cljs.core.str("code-box")].join('').trim();
} else
{}
dom12686.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__3813__auto__ = (function iter__12687(s__12688){return (new cljs.core.LazySeq(null,(function (){var s__12688__$1 = s__12688;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12688__$1);if(temp__4092__auto__)
{var s__12688__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12688__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12688__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12690 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12689 = 0;while(true){
if((i__12689 < size__3812__auto__))
{var text = cljs.core._nth.call(null,c__3811__auto__,i__12689);cljs.core.chunk_append.call(null,b__12690,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12711 = (i__12689 + 1);
i__12689 = G__12711;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12690),iter__12687.call(null,cljs.core.chunk_rest.call(null,s__12688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12690),null);
}
} else
{var text = cljs.core.first.call(null,s__12688__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12687.call(null,cljs.core.rest.call(null,s__12688__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,new cljs.core.Keyword(null,"code-strings","code-strings",2204559892).cljs$core$IFn$_invoke$arity$1(koan));
})()));
return dom12686;
})());
dom12684.appendChild(dommy.template.__GT_node_like.call(null,((!((new cljs.core.Keyword(null,"fn-strings","fn-strings",4723129839).cljs$core$IFn$_invoke$arity$1(koan) == null)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"functions"], true),(function (){var iter__3813__auto__ = (function iter__12691(s__12692){return (new cljs.core.LazySeq(null,(function (){var s__12692__$1 = s__12692;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12692__$1);if(temp__4092__auto__)
{var s__12692__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12692__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12692__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12694 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12693 = 0;while(true){
if((i__12693 < size__3812__auto__))
{var function$ = cljs.core._nth.call(null,c__3811__auto__,i__12693);cljs.core.chunk_append.call(null,b__12694,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"function"], true),(function (){var iter__3813__auto__ = ((function (i__12693,function$,c__3811__auto__,size__3812__auto__,b__12694,s__12692__$2,temp__4092__auto__){
return (function iter__12703(s__12704){return (new cljs.core.LazySeq(null,((function (i__12693,function$,c__3811__auto__,size__3812__auto__,b__12694,s__12692__$2,temp__4092__auto__){
return (function (){var s__12704__$1 = s__12704;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12704__$1);if(temp__4092__auto____$1)
{var s__12704__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12704__$2))
{var c__3811__auto____$1 = cljs.core.chunk_first.call(null,s__12704__$2);var size__3812__auto____$1 = cljs.core.count.call(null,c__3811__auto____$1);var b__12706 = cljs.core.chunk_buffer.call(null,size__3812__auto____$1);if((function (){var i__12705 = 0;while(true){
if((i__12705 < size__3812__auto____$1))
{var text = cljs.core._nth.call(null,c__3811__auto____$1,i__12705);cljs.core.chunk_append.call(null,b__12706,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12712 = (i__12705 + 1);
i__12705 = G__12712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12706),iter__12703.call(null,cljs.core.chunk_rest.call(null,s__12704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12706),null);
}
} else
{var text = cljs.core.first.call(null,s__12704__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12703.call(null,cljs.core.rest.call(null,s__12704__$2)));
}
} else
{return null;
}
break;
}
});})(i__12693,function$,c__3811__auto__,size__3812__auto__,b__12694,s__12692__$2,temp__4092__auto__))
,null,null));
});})(i__12693,function$,c__3811__auto__,size__3812__auto__,b__12694,s__12692__$2,temp__4092__auto__))
;return iter__3813__auto__.call(null,function$);
})()], true));
{
var G__12713 = (i__12693 + 1);
i__12693 = G__12713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12694),iter__12691.call(null,cljs.core.chunk_rest.call(null,s__12692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12694),null);
}
} else
{var function$ = cljs.core.first.call(null,s__12692__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"function"], true),(function (){var iter__3813__auto__ = ((function (function$,s__12692__$2,temp__4092__auto__){
return (function iter__12707(s__12708){return (new cljs.core.LazySeq(null,((function (function$,s__12692__$2,temp__4092__auto__){
return (function (){var s__12708__$1 = s__12708;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12708__$1);if(temp__4092__auto____$1)
{var s__12708__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12708__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__12708__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__12710 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__12709 = 0;while(true){
if((i__12709 < size__3812__auto__))
{var text = cljs.core._nth.call(null,c__3811__auto__,i__12709);cljs.core.chunk_append.call(null,b__12710,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)));
{
var G__12714 = (i__12709 + 1);
i__12709 = G__12714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12710),iter__12707.call(null,cljs.core.chunk_rest.call(null,s__12708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12710),null);
}
} else
{var text = cljs.core.first.call(null,s__12708__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,text,new cljs.core.Keyword(null,"input","input",1114262332)))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"code"], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"shadow"], true)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"name","name",1017277949),"code"], true)], true)], true):cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),"text"], true),text], true)),iter__12707.call(null,cljs.core.rest.call(null,s__12708__$2)));
}
} else
{return null;
}
break;
}
});})(function$,s__12692__$2,temp__4092__auto__))
,null,null));
});})(function$,s__12692__$2,temp__4092__auto__))
;return iter__3813__auto__.call(null,function$);
})()], true),iter__12691.call(null,cljs.core.rest.call(null,s__12692__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",4723129839).cljs$core$IFn$_invoke$arity$1(koan));
})()], true):null)));
return dom12684;
});
koans.core.error_message = (function error_message(){var dom12716 = document.createElement("div");if("error")
{dom12716.className = [cljs.core.str(dom12716.className),cljs.core.str(" "),cljs.core.str("error")].join('').trim();
} else
{}
dom12716.appendChild(document.createTextNode("You have not yet attained enlightenment."));
return dom12716;
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
koans.core.remove_active_koan = (function remove_active_koan(){jayq.core.add_class.call(null,jayq.core.$.call(null,".static"),"hidden");
var koan = jayq.core.$.call(null,new cljs.core.Keyword(null,".koan",".koan",1059683633));if(!(cljs.core._EQ_.call(null,0,koan.length)))
{jayq.core.remove_class.call(null,koan,"unfaded");
return jayq.util.wait.call(null,koans.core.fadeout_time,(function (){return jayq.core.remove.call(null,koan);
}));
} else
{return null;
}
});
koans.core.category_name = (function category_name(koan_index){var category = new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koan_index);return clojure.string.replace.call(null,category,"-"," ");
});
koans.core.render_koan = (function render_koan(koan){koans.core.remove_active_koan.call(null);
var $elem = jayq.core.$.call(null,koans.core.input_with_code.call(null,koan));var $category = jayq.core.$.call(null,new cljs.core.Keyword(null,".category",".category",3820855966));var current_category = koans.core.category_name.call(null,koans.core.current_koan_index.call(null));if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"fn-strings","fn-strings",4723129839).cljs$core$IFn$_invoke$arity$1(koan)))
{} else
{jayq.core.add_class.call(null,$elem,"has-functions");
}
if(!(cljs.core._EQ_.call(null,jayq.core.text.call(null,$category),current_category)))
{jayq.core.remove_class.call(null,$category,"unfaded");
} else
{}
return jayq.util.wait.call(null,koans.core.fadeout_time,(function (){jayq.core.text.call(null,$category,current_category);
jayq.core.prepend.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),$elem);
koans.core.fade_in_BANG_.call(null,$elem);
koans.core.fade_in_BANG_.call(null,$category);
cljs.core.mapv.call(null,(function (el){return hljs.highlightBlock(cljs.core.first.call(null,el));
}),jayq.core.$.call(null,new cljs.core.Keyword(null,"pre","pre",1014015509)));
return cljs.core.first.call(null,jayq.core.find.call(null,$elem,new cljs.core.Keyword(null,"input","input",1114262332))).focus();
}));
});
koans.core.render_static_page = (function render_static_page(selector){koans.core.remove_active_koan.call(null);
jayq.core.remove_class.call(null,jayq.core.$.call(null,".category"),"unfaded");
return jayq.core.remove_class.call(null,jayq.core.$.call(null,selector),"hidden");
});
koans.core.render_current_koan = (function render_current_koan(){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,location.hash)))
{koans.core.remove_active_koan.call(null);
jayq.core.remove_class.call(null,jayq.core.$.call(null,"#welcome"),"hidden");
return jayq.core.text.call(null,jayq.core.$.call(null,".category"),"");
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(koans.core.current_koan_index.call(null)),"complete"))
{koans.core.remove_active_koan.call(null);
jayq.core.remove_class.call(null,jayq.core.$.call(null,"#the-end"),"hidden");
return jayq.core.text.call(null,jayq.core.$.call(null,".category"),"");
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
var c__5377__auto___12742 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12730){var state_val_12731 = (state_12730[1]);if((state_val_12731 === 7))
{var inst_12720 = (state_12730[2]);var inst_12721 = inst_12720.target;var inst_12722 = koans.core.resize_input.call(null,inst_12721);var state_12730__$1 = (function (){var statearr_12732 = state_12730;(statearr_12732[5] = inst_12722);
return statearr_12732;
})();var statearr_12733_12743 = state_12730__$1;(statearr_12733_12743[2] = null);
(statearr_12733_12743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12731 === 6))
{var inst_12726 = (state_12730[2]);var state_12730__$1 = state_12730;var statearr_12734_12744 = state_12730__$1;(statearr_12734_12744[2] = inst_12726);
(statearr_12734_12744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12731 === 5))
{var state_12730__$1 = state_12730;var statearr_12735_12745 = state_12730__$1;(statearr_12735_12745[2] = null);
(statearr_12735_12745[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12731 === 4))
{var state_12730__$1 = state_12730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12730__$1,7,koans.core.resize_chan);
} else
{if((state_val_12731 === 3))
{var inst_12728 = (state_12730[2]);var state_12730__$1 = state_12730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12730__$1,inst_12728);
} else
{if((state_val_12731 === 2))
{var state_12730__$1 = state_12730;if(true)
{var statearr_12736_12746 = state_12730__$1;(statearr_12736_12746[1] = 4);
} else
{var statearr_12737_12747 = state_12730__$1;(statearr_12737_12747[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12731 === 1))
{var state_12730__$1 = state_12730;var statearr_12738_12748 = state_12730__$1;(statearr_12738_12748[2] = null);
(statearr_12738_12748[1] = 2);
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
var state_machine__5328__auto____0 = (function (){var statearr_12740 = (new Array(6));(statearr_12740[0] = state_machine__5328__auto__);
(statearr_12740[1] = 1);
return statearr_12740;
});
var state_machine__5328__auto____1 = (function (state_12730){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12730){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12741 = f__5378__auto__.call(null);(statearr_12741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto___12742);
return statearr_12741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
jayq.core.document_ready.call(null,(function (){jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.Keyword(null,".text",".text",1059942861),(function (e){return cljs.core.first.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332))).focus();
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"keypress","keypress",1530666166),new cljs.core.Keyword(null,"input","input",1114262332),(function (e){if(cljs.core._EQ_.call(null,e.charCode,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
jayq.core.on.call(null,jayq.core.$.call(null,document),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),(function (e){var c__5377__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5378__auto__ = (function (){var switch__5327__auto__ = (function (state_12752){var state_val_12753 = (state_12752[1]);if((state_val_12753 === 2))
{var inst_12750 = (state_12752[2]);var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12752__$1,inst_12750);
} else
{if((state_val_12753 === 1))
{var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12752__$1,2,koans.core.resize_chan,e);
} else
{return null;
}
}
});return ((function (switch__5327__auto__){
return (function() {
var state_machine__5328__auto__ = null;
var state_machine__5328__auto____0 = (function (){var statearr_12755 = (new Array(5));(statearr_12755[0] = state_machine__5328__auto__);
(statearr_12755[1] = 1);
return statearr_12755;
});
var state_machine__5328__auto____1 = (function (state_12752){while(true){
var result__5329__auto__ = switch__5327__auto__.call(null,state_12752);if(cljs.core.keyword_identical_QMARK_.call(null,result__5329__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5329__auto__;
}
break;
}
});
state_machine__5328__auto__ = function(state_12752){
switch(arguments.length){
case 0:
return state_machine__5328__auto____0.call(this);
case 1:
return state_machine__5328__auto____1.call(this,state_12752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5328__auto____0;
state_machine__5328__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5328__auto____1;
return state_machine__5328__auto__;
})()
;})(switch__5327__auto__))
})();var state__5379__auto__ = (function (){var statearr_12756 = f__5378__auto__.call(null);(statearr_12756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5377__auto__);
return statearr_12756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5379__auto__);
}));
return c__5377__auto__;
}));
koans.core.render_current_koan.call(null);
return jayq.util.wait.call(null,0,(function (){return jayq.core.add_class.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)),"loaded");
}));
}));
window.onhashchange = (function (){return koans.core.render_current_koan.call(null);
});
koans.core.show_error_message = (function show_error_message(){koans.core.$code_box = jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",2901198731));
if(cljs.core.truth_(jayq.core.has_class.call(null,koans.core.$code_box,"incorrect")))
{var $error = jayq.core.$.call(null,new cljs.core.Keyword(null,".error",".error",2427630092));jayq.core.remove_class.call(null,koans.core.$code_box,"incorrect");
jayq.core.remove_class.call(null,$error,"unfaded");
return jayq.util.wait.call(null,300,(function (){return jayq.core.add_class.call(null,koans.core.$code_box,"incorrect").call(null,jayq.core.add_class.call(null,$error,"unfaded"));
}));
} else
{var $error = jayq.core.$.call(null,koans.core.error_message.call(null));jayq.core.add_class.call(null,koans.core.$code_box,"incorrect");
jayq.core.after.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,".code-box",".code-box",2901198731)),$error);
return koans.core.fade_in_BANG_.call(null,$error);
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