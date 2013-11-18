// Compiled by ClojureScript 0.0-2014
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = cljs.core.PersistentHashSet.fromArray(["svg",null,"line",null], true);
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__3119__auto__ = this$;if(and__3119__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3119__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3723__auto__ = (((this$ == null))?null:this$);return (function (){var or__3128__auto__ = (dommy.template._elem[goog.typeOf(x__3723__auto__)]);if(or__3128__auto__)
{return or__3128__auto__;
} else
{var or__3128__auto____$1 = (dommy.template._elem["_"]);if(or__3128__auto____$1)
{return or__3128__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_17222 = node_str.substring(base_idx);while(true){
var next_idx_17223 = dommy.template.next_css_index.call(null,str_17222,1);var frag_17224 = (((next_idx_17223 >= 0))?str_17222.substring(0,next_idx_17223):str_17222);var G__17221_17225 = frag_17224.charAt(0);if(cljs.core._EQ_.call(null,"#",G__17221_17225))
{node.setAttribute("id",frag_17224.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__17221_17225))
{dommy.attrs.add_class_BANG_.call(null,node,frag_17224.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_17224.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_17223 >= 0))
{{
var G__17226 = str_17222.substring(next_idx_17223);
str_17222 = G__17226;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__17232 = data;if(G__17232)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17232.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17232.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17232);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__17233_17237 = cljs.core.seq.call(null,data);var chunk__17234_17238 = null;var count__17235_17239 = 0;var i__17236_17240 = 0;while(true){
if((i__17236_17240 < count__17235_17239))
{var child_17241 = cljs.core._nth.call(null,chunk__17234_17238,i__17236_17240);__GT_document_fragment.call(null,result_frag,child_17241);
{
var G__17242 = seq__17233_17237;
var G__17243 = chunk__17234_17238;
var G__17244 = count__17235_17239;
var G__17245 = (i__17236_17240 + 1);
seq__17233_17237 = G__17242;
chunk__17234_17238 = G__17243;
count__17235_17239 = G__17244;
i__17236_17240 = G__17245;
continue;
}
} else
{var temp__4092__auto___17246 = cljs.core.seq.call(null,seq__17233_17237);if(temp__4092__auto___17246)
{var seq__17233_17247__$1 = temp__4092__auto___17246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17233_17247__$1))
{var c__3844__auto___17248 = cljs.core.chunk_first.call(null,seq__17233_17247__$1);{
var G__17249 = cljs.core.chunk_rest.call(null,seq__17233_17247__$1);
var G__17250 = c__3844__auto___17248;
var G__17251 = cljs.core.count.call(null,c__3844__auto___17248);
var G__17252 = 0;
seq__17233_17237 = G__17249;
chunk__17234_17238 = G__17250;
count__17235_17239 = G__17251;
i__17236_17240 = G__17252;
continue;
}
} else
{var child_17253 = cljs.core.first.call(null,seq__17233_17247__$1);__GT_document_fragment.call(null,result_frag,child_17253);
{
var G__17254 = cljs.core.next.call(null,seq__17233_17247__$1);
var G__17255 = null;
var G__17256 = 0;
var G__17257 = 0;
seq__17233_17237 = G__17254;
chunk__17234_17238 = G__17255;
count__17235_17239 = G__17256;
i__17236_17240 = G__17257;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__17259 = data;if(G__17259)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17259.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17259.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17259);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__17260){var vec__17280 = p__17260;var tag_name = cljs.core.nth.call(null,vec__17280,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__17280,1,null);var children = cljs.core.nthnext.call(null,vec__17280,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__17282 = maybe_attrs;if(G__17282)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17282.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17282.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17282);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17282);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__17283_17299 = cljs.core.seq.call(null,attrs);var chunk__17284_17300 = null;var count__17285_17301 = 0;var i__17286_17302 = 0;while(true){
if((i__17286_17302 < count__17285_17301))
{var vec__17287_17303 = cljs.core._nth.call(null,chunk__17284_17300,i__17286_17302);var k_17304 = cljs.core.nth.call(null,vec__17287_17303,0,null);var v_17305 = cljs.core.nth.call(null,vec__17287_17303,1,null);var G__17288_17306 = k_17304;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17288_17306))
{var seq__17289_17307 = cljs.core.seq.call(null,v_17305);var chunk__17290_17308 = null;var count__17291_17309 = 0;var i__17292_17310 = 0;while(true){
if((i__17292_17310 < count__17291_17309))
{var c_17311 = cljs.core._nth.call(null,chunk__17290_17308,i__17292_17310);dommy.attrs.add_class_BANG_.call(null,n,c_17311);
{
var G__17312 = seq__17289_17307;
var G__17313 = chunk__17290_17308;
var G__17314 = count__17291_17309;
var G__17315 = (i__17292_17310 + 1);
seq__17289_17307 = G__17312;
chunk__17290_17308 = G__17313;
count__17291_17309 = G__17314;
i__17292_17310 = G__17315;
continue;
}
} else
{var temp__4092__auto___17316 = cljs.core.seq.call(null,seq__17289_17307);if(temp__4092__auto___17316)
{var seq__17289_17317__$1 = temp__4092__auto___17316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17289_17317__$1))
{var c__3844__auto___17318 = cljs.core.chunk_first.call(null,seq__17289_17317__$1);{
var G__17319 = cljs.core.chunk_rest.call(null,seq__17289_17317__$1);
var G__17320 = c__3844__auto___17318;
var G__17321 = cljs.core.count.call(null,c__3844__auto___17318);
var G__17322 = 0;
seq__17289_17307 = G__17319;
chunk__17290_17308 = G__17320;
count__17291_17309 = G__17321;
i__17292_17310 = G__17322;
continue;
}
} else
{var c_17323 = cljs.core.first.call(null,seq__17289_17317__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17323);
{
var G__17324 = cljs.core.next.call(null,seq__17289_17317__$1);
var G__17325 = null;
var G__17326 = 0;
var G__17327 = 0;
seq__17289_17307 = G__17324;
chunk__17290_17308 = G__17325;
count__17291_17309 = G__17326;
i__17292_17310 = G__17327;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17288_17306))
{dommy.attrs.add_class_BANG_.call(null,n,v_17305);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17304,v_17305);
} else
{}
}
}
{
var G__17328 = seq__17283_17299;
var G__17329 = chunk__17284_17300;
var G__17330 = count__17285_17301;
var G__17331 = (i__17286_17302 + 1);
seq__17283_17299 = G__17328;
chunk__17284_17300 = G__17329;
count__17285_17301 = G__17330;
i__17286_17302 = G__17331;
continue;
}
} else
{var temp__4092__auto___17332 = cljs.core.seq.call(null,seq__17283_17299);if(temp__4092__auto___17332)
{var seq__17283_17333__$1 = temp__4092__auto___17332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17283_17333__$1))
{var c__3844__auto___17334 = cljs.core.chunk_first.call(null,seq__17283_17333__$1);{
var G__17335 = cljs.core.chunk_rest.call(null,seq__17283_17333__$1);
var G__17336 = c__3844__auto___17334;
var G__17337 = cljs.core.count.call(null,c__3844__auto___17334);
var G__17338 = 0;
seq__17283_17299 = G__17335;
chunk__17284_17300 = G__17336;
count__17285_17301 = G__17337;
i__17286_17302 = G__17338;
continue;
}
} else
{var vec__17293_17339 = cljs.core.first.call(null,seq__17283_17333__$1);var k_17340 = cljs.core.nth.call(null,vec__17293_17339,0,null);var v_17341 = cljs.core.nth.call(null,vec__17293_17339,1,null);var G__17294_17342 = k_17340;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17294_17342))
{var seq__17295_17343 = cljs.core.seq.call(null,v_17341);var chunk__17296_17344 = null;var count__17297_17345 = 0;var i__17298_17346 = 0;while(true){
if((i__17298_17346 < count__17297_17345))
{var c_17347 = cljs.core._nth.call(null,chunk__17296_17344,i__17298_17346);dommy.attrs.add_class_BANG_.call(null,n,c_17347);
{
var G__17348 = seq__17295_17343;
var G__17349 = chunk__17296_17344;
var G__17350 = count__17297_17345;
var G__17351 = (i__17298_17346 + 1);
seq__17295_17343 = G__17348;
chunk__17296_17344 = G__17349;
count__17297_17345 = G__17350;
i__17298_17346 = G__17351;
continue;
}
} else
{var temp__4092__auto___17352__$1 = cljs.core.seq.call(null,seq__17295_17343);if(temp__4092__auto___17352__$1)
{var seq__17295_17353__$1 = temp__4092__auto___17352__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17295_17353__$1))
{var c__3844__auto___17354 = cljs.core.chunk_first.call(null,seq__17295_17353__$1);{
var G__17355 = cljs.core.chunk_rest.call(null,seq__17295_17353__$1);
var G__17356 = c__3844__auto___17354;
var G__17357 = cljs.core.count.call(null,c__3844__auto___17354);
var G__17358 = 0;
seq__17295_17343 = G__17355;
chunk__17296_17344 = G__17356;
count__17297_17345 = G__17357;
i__17298_17346 = G__17358;
continue;
}
} else
{var c_17359 = cljs.core.first.call(null,seq__17295_17353__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17359);
{
var G__17360 = cljs.core.next.call(null,seq__17295_17353__$1);
var G__17361 = null;
var G__17362 = 0;
var G__17363 = 0;
seq__17295_17343 = G__17360;
chunk__17296_17344 = G__17361;
count__17297_17345 = G__17362;
i__17298_17346 = G__17363;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17294_17342))
{dommy.attrs.add_class_BANG_.call(null,n,v_17341);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17340,v_17341);
} else
{}
}
}
{
var G__17364 = cljs.core.next.call(null,seq__17283_17333__$1);
var G__17365 = null;
var G__17366 = 0;
var G__17367 = 0;
seq__17283_17299 = G__17364;
chunk__17284_17300 = G__17365;
count__17285_17301 = G__17366;
i__17286_17302 = G__17367;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e17368){if((e17368 instanceof ReferenceError))
{var __17369 = e17368;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17368;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__17371 = data;if(G__17371)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17371.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17371.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17371);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17371);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
