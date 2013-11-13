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
{var str_17094 = node_str.substring(base_idx);while(true){
var next_idx_17095 = dommy.template.next_css_index.call(null,str_17094,1);var frag_17096 = (((next_idx_17095 >= 0))?str_17094.substring(0,next_idx_17095):str_17094);var G__17093_17097 = frag_17096.charAt(0);if(cljs.core._EQ_.call(null,"#",G__17093_17097))
{node.setAttribute("id",frag_17096.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__17093_17097))
{dommy.attrs.add_class_BANG_.call(null,node,frag_17096.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_17096.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_17095 >= 0))
{{
var G__17098 = str_17094.substring(next_idx_17095);
str_17094 = G__17098;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__17104 = data;if(G__17104)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17104.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17104.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17104);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__17105_17109 = cljs.core.seq.call(null,data);var chunk__17106_17110 = null;var count__17107_17111 = 0;var i__17108_17112 = 0;while(true){
if((i__17108_17112 < count__17107_17111))
{var child_17113 = cljs.core._nth.call(null,chunk__17106_17110,i__17108_17112);__GT_document_fragment.call(null,result_frag,child_17113);
{
var G__17114 = seq__17105_17109;
var G__17115 = chunk__17106_17110;
var G__17116 = count__17107_17111;
var G__17117 = (i__17108_17112 + 1);
seq__17105_17109 = G__17114;
chunk__17106_17110 = G__17115;
count__17107_17111 = G__17116;
i__17108_17112 = G__17117;
continue;
}
} else
{var temp__4092__auto___17118 = cljs.core.seq.call(null,seq__17105_17109);if(temp__4092__auto___17118)
{var seq__17105_17119__$1 = temp__4092__auto___17118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17105_17119__$1))
{var c__3844__auto___17120 = cljs.core.chunk_first.call(null,seq__17105_17119__$1);{
var G__17121 = cljs.core.chunk_rest.call(null,seq__17105_17119__$1);
var G__17122 = c__3844__auto___17120;
var G__17123 = cljs.core.count.call(null,c__3844__auto___17120);
var G__17124 = 0;
seq__17105_17109 = G__17121;
chunk__17106_17110 = G__17122;
count__17107_17111 = G__17123;
i__17108_17112 = G__17124;
continue;
}
} else
{var child_17125 = cljs.core.first.call(null,seq__17105_17119__$1);__GT_document_fragment.call(null,result_frag,child_17125);
{
var G__17126 = cljs.core.next.call(null,seq__17105_17119__$1);
var G__17127 = null;
var G__17128 = 0;
var G__17129 = 0;
seq__17105_17109 = G__17126;
chunk__17106_17110 = G__17127;
count__17107_17111 = G__17128;
i__17108_17112 = G__17129;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__17131 = data;if(G__17131)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17131.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17131.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17131);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17131);
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
dommy.template.compound_element = (function compound_element(p__17132){var vec__17152 = p__17132;var tag_name = cljs.core.nth.call(null,vec__17152,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__17152,1,null);var children = cljs.core.nthnext.call(null,vec__17152,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__17154 = maybe_attrs;if(G__17154)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17154.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17154.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17154);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17154);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__17155_17171 = cljs.core.seq.call(null,attrs);var chunk__17156_17172 = null;var count__17157_17173 = 0;var i__17158_17174 = 0;while(true){
if((i__17158_17174 < count__17157_17173))
{var vec__17159_17175 = cljs.core._nth.call(null,chunk__17156_17172,i__17158_17174);var k_17176 = cljs.core.nth.call(null,vec__17159_17175,0,null);var v_17177 = cljs.core.nth.call(null,vec__17159_17175,1,null);var G__17160_17178 = k_17176;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17160_17178))
{var seq__17161_17179 = cljs.core.seq.call(null,v_17177);var chunk__17162_17180 = null;var count__17163_17181 = 0;var i__17164_17182 = 0;while(true){
if((i__17164_17182 < count__17163_17181))
{var c_17183 = cljs.core._nth.call(null,chunk__17162_17180,i__17164_17182);dommy.attrs.add_class_BANG_.call(null,n,c_17183);
{
var G__17184 = seq__17161_17179;
var G__17185 = chunk__17162_17180;
var G__17186 = count__17163_17181;
var G__17187 = (i__17164_17182 + 1);
seq__17161_17179 = G__17184;
chunk__17162_17180 = G__17185;
count__17163_17181 = G__17186;
i__17164_17182 = G__17187;
continue;
}
} else
{var temp__4092__auto___17188 = cljs.core.seq.call(null,seq__17161_17179);if(temp__4092__auto___17188)
{var seq__17161_17189__$1 = temp__4092__auto___17188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17161_17189__$1))
{var c__3844__auto___17190 = cljs.core.chunk_first.call(null,seq__17161_17189__$1);{
var G__17191 = cljs.core.chunk_rest.call(null,seq__17161_17189__$1);
var G__17192 = c__3844__auto___17190;
var G__17193 = cljs.core.count.call(null,c__3844__auto___17190);
var G__17194 = 0;
seq__17161_17179 = G__17191;
chunk__17162_17180 = G__17192;
count__17163_17181 = G__17193;
i__17164_17182 = G__17194;
continue;
}
} else
{var c_17195 = cljs.core.first.call(null,seq__17161_17189__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17195);
{
var G__17196 = cljs.core.next.call(null,seq__17161_17189__$1);
var G__17197 = null;
var G__17198 = 0;
var G__17199 = 0;
seq__17161_17179 = G__17196;
chunk__17162_17180 = G__17197;
count__17163_17181 = G__17198;
i__17164_17182 = G__17199;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17160_17178))
{dommy.attrs.add_class_BANG_.call(null,n,v_17177);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17176,v_17177);
} else
{}
}
}
{
var G__17200 = seq__17155_17171;
var G__17201 = chunk__17156_17172;
var G__17202 = count__17157_17173;
var G__17203 = (i__17158_17174 + 1);
seq__17155_17171 = G__17200;
chunk__17156_17172 = G__17201;
count__17157_17173 = G__17202;
i__17158_17174 = G__17203;
continue;
}
} else
{var temp__4092__auto___17204 = cljs.core.seq.call(null,seq__17155_17171);if(temp__4092__auto___17204)
{var seq__17155_17205__$1 = temp__4092__auto___17204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17155_17205__$1))
{var c__3844__auto___17206 = cljs.core.chunk_first.call(null,seq__17155_17205__$1);{
var G__17207 = cljs.core.chunk_rest.call(null,seq__17155_17205__$1);
var G__17208 = c__3844__auto___17206;
var G__17209 = cljs.core.count.call(null,c__3844__auto___17206);
var G__17210 = 0;
seq__17155_17171 = G__17207;
chunk__17156_17172 = G__17208;
count__17157_17173 = G__17209;
i__17158_17174 = G__17210;
continue;
}
} else
{var vec__17165_17211 = cljs.core.first.call(null,seq__17155_17205__$1);var k_17212 = cljs.core.nth.call(null,vec__17165_17211,0,null);var v_17213 = cljs.core.nth.call(null,vec__17165_17211,1,null);var G__17166_17214 = k_17212;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17166_17214))
{var seq__17167_17215 = cljs.core.seq.call(null,v_17213);var chunk__17168_17216 = null;var count__17169_17217 = 0;var i__17170_17218 = 0;while(true){
if((i__17170_17218 < count__17169_17217))
{var c_17219 = cljs.core._nth.call(null,chunk__17168_17216,i__17170_17218);dommy.attrs.add_class_BANG_.call(null,n,c_17219);
{
var G__17220 = seq__17167_17215;
var G__17221 = chunk__17168_17216;
var G__17222 = count__17169_17217;
var G__17223 = (i__17170_17218 + 1);
seq__17167_17215 = G__17220;
chunk__17168_17216 = G__17221;
count__17169_17217 = G__17222;
i__17170_17218 = G__17223;
continue;
}
} else
{var temp__4092__auto___17224__$1 = cljs.core.seq.call(null,seq__17167_17215);if(temp__4092__auto___17224__$1)
{var seq__17167_17225__$1 = temp__4092__auto___17224__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17167_17225__$1))
{var c__3844__auto___17226 = cljs.core.chunk_first.call(null,seq__17167_17225__$1);{
var G__17227 = cljs.core.chunk_rest.call(null,seq__17167_17225__$1);
var G__17228 = c__3844__auto___17226;
var G__17229 = cljs.core.count.call(null,c__3844__auto___17226);
var G__17230 = 0;
seq__17167_17215 = G__17227;
chunk__17168_17216 = G__17228;
count__17169_17217 = G__17229;
i__17170_17218 = G__17230;
continue;
}
} else
{var c_17231 = cljs.core.first.call(null,seq__17167_17225__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17231);
{
var G__17232 = cljs.core.next.call(null,seq__17167_17225__$1);
var G__17233 = null;
var G__17234 = 0;
var G__17235 = 0;
seq__17167_17215 = G__17232;
chunk__17168_17216 = G__17233;
count__17169_17217 = G__17234;
i__17170_17218 = G__17235;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17166_17214))
{dommy.attrs.add_class_BANG_.call(null,n,v_17213);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17212,v_17213);
} else
{}
}
}
{
var G__17236 = cljs.core.next.call(null,seq__17155_17205__$1);
var G__17237 = null;
var G__17238 = 0;
var G__17239 = 0;
seq__17155_17171 = G__17236;
chunk__17156_17172 = G__17237;
count__17157_17173 = G__17238;
i__17158_17174 = G__17239;
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
}catch (e17240){if((e17240 instanceof ReferenceError))
{var __17241 = e17240;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17240;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__17243 = data;if(G__17243)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17243.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17243.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17243);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17243);
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
