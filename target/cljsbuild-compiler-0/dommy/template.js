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
{var str_17112 = node_str.substring(base_idx);while(true){
var next_idx_17113 = dommy.template.next_css_index.call(null,str_17112,1);var frag_17114 = (((next_idx_17113 >= 0))?str_17112.substring(0,next_idx_17113):str_17112);var G__17111_17115 = frag_17114.charAt(0);if(cljs.core._EQ_.call(null,"#",G__17111_17115))
{node.setAttribute("id",frag_17114.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__17111_17115))
{dommy.attrs.add_class_BANG_.call(null,node,frag_17114.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_17114.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_17113 >= 0))
{{
var G__17116 = str_17112.substring(next_idx_17113);
str_17112 = G__17116;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__17122 = data;if(G__17122)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17122.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17122.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17122);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17122);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__17123_17127 = cljs.core.seq.call(null,data);var chunk__17124_17128 = null;var count__17125_17129 = 0;var i__17126_17130 = 0;while(true){
if((i__17126_17130 < count__17125_17129))
{var child_17131 = cljs.core._nth.call(null,chunk__17124_17128,i__17126_17130);__GT_document_fragment.call(null,result_frag,child_17131);
{
var G__17132 = seq__17123_17127;
var G__17133 = chunk__17124_17128;
var G__17134 = count__17125_17129;
var G__17135 = (i__17126_17130 + 1);
seq__17123_17127 = G__17132;
chunk__17124_17128 = G__17133;
count__17125_17129 = G__17134;
i__17126_17130 = G__17135;
continue;
}
} else
{var temp__4092__auto___17136 = cljs.core.seq.call(null,seq__17123_17127);if(temp__4092__auto___17136)
{var seq__17123_17137__$1 = temp__4092__auto___17136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17123_17137__$1))
{var c__3844__auto___17138 = cljs.core.chunk_first.call(null,seq__17123_17137__$1);{
var G__17139 = cljs.core.chunk_rest.call(null,seq__17123_17137__$1);
var G__17140 = c__3844__auto___17138;
var G__17141 = cljs.core.count.call(null,c__3844__auto___17138);
var G__17142 = 0;
seq__17123_17127 = G__17139;
chunk__17124_17128 = G__17140;
count__17125_17129 = G__17141;
i__17126_17130 = G__17142;
continue;
}
} else
{var child_17143 = cljs.core.first.call(null,seq__17123_17137__$1);__GT_document_fragment.call(null,result_frag,child_17143);
{
var G__17144 = cljs.core.next.call(null,seq__17123_17137__$1);
var G__17145 = null;
var G__17146 = 0;
var G__17147 = 0;
seq__17123_17127 = G__17144;
chunk__17124_17128 = G__17145;
count__17125_17129 = G__17146;
i__17126_17130 = G__17147;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__17149 = data;if(G__17149)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17149.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17149.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17149);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17149);
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
dommy.template.compound_element = (function compound_element(p__17150){var vec__17170 = p__17150;var tag_name = cljs.core.nth.call(null,vec__17170,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__17170,1,null);var children = cljs.core.nthnext.call(null,vec__17170,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__17172 = maybe_attrs;if(G__17172)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17172.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17172.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17172);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17172);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__17173_17189 = cljs.core.seq.call(null,attrs);var chunk__17174_17190 = null;var count__17175_17191 = 0;var i__17176_17192 = 0;while(true){
if((i__17176_17192 < count__17175_17191))
{var vec__17177_17193 = cljs.core._nth.call(null,chunk__17174_17190,i__17176_17192);var k_17194 = cljs.core.nth.call(null,vec__17177_17193,0,null);var v_17195 = cljs.core.nth.call(null,vec__17177_17193,1,null);var G__17178_17196 = k_17194;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17178_17196))
{var seq__17179_17197 = cljs.core.seq.call(null,v_17195);var chunk__17180_17198 = null;var count__17181_17199 = 0;var i__17182_17200 = 0;while(true){
if((i__17182_17200 < count__17181_17199))
{var c_17201 = cljs.core._nth.call(null,chunk__17180_17198,i__17182_17200);dommy.attrs.add_class_BANG_.call(null,n,c_17201);
{
var G__17202 = seq__17179_17197;
var G__17203 = chunk__17180_17198;
var G__17204 = count__17181_17199;
var G__17205 = (i__17182_17200 + 1);
seq__17179_17197 = G__17202;
chunk__17180_17198 = G__17203;
count__17181_17199 = G__17204;
i__17182_17200 = G__17205;
continue;
}
} else
{var temp__4092__auto___17206 = cljs.core.seq.call(null,seq__17179_17197);if(temp__4092__auto___17206)
{var seq__17179_17207__$1 = temp__4092__auto___17206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17179_17207__$1))
{var c__3844__auto___17208 = cljs.core.chunk_first.call(null,seq__17179_17207__$1);{
var G__17209 = cljs.core.chunk_rest.call(null,seq__17179_17207__$1);
var G__17210 = c__3844__auto___17208;
var G__17211 = cljs.core.count.call(null,c__3844__auto___17208);
var G__17212 = 0;
seq__17179_17197 = G__17209;
chunk__17180_17198 = G__17210;
count__17181_17199 = G__17211;
i__17182_17200 = G__17212;
continue;
}
} else
{var c_17213 = cljs.core.first.call(null,seq__17179_17207__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17213);
{
var G__17214 = cljs.core.next.call(null,seq__17179_17207__$1);
var G__17215 = null;
var G__17216 = 0;
var G__17217 = 0;
seq__17179_17197 = G__17214;
chunk__17180_17198 = G__17215;
count__17181_17199 = G__17216;
i__17182_17200 = G__17217;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17178_17196))
{dommy.attrs.add_class_BANG_.call(null,n,v_17195);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17194,v_17195);
} else
{}
}
}
{
var G__17218 = seq__17173_17189;
var G__17219 = chunk__17174_17190;
var G__17220 = count__17175_17191;
var G__17221 = (i__17176_17192 + 1);
seq__17173_17189 = G__17218;
chunk__17174_17190 = G__17219;
count__17175_17191 = G__17220;
i__17176_17192 = G__17221;
continue;
}
} else
{var temp__4092__auto___17222 = cljs.core.seq.call(null,seq__17173_17189);if(temp__4092__auto___17222)
{var seq__17173_17223__$1 = temp__4092__auto___17222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17173_17223__$1))
{var c__3844__auto___17224 = cljs.core.chunk_first.call(null,seq__17173_17223__$1);{
var G__17225 = cljs.core.chunk_rest.call(null,seq__17173_17223__$1);
var G__17226 = c__3844__auto___17224;
var G__17227 = cljs.core.count.call(null,c__3844__auto___17224);
var G__17228 = 0;
seq__17173_17189 = G__17225;
chunk__17174_17190 = G__17226;
count__17175_17191 = G__17227;
i__17176_17192 = G__17228;
continue;
}
} else
{var vec__17183_17229 = cljs.core.first.call(null,seq__17173_17223__$1);var k_17230 = cljs.core.nth.call(null,vec__17183_17229,0,null);var v_17231 = cljs.core.nth.call(null,vec__17183_17229,1,null);var G__17184_17232 = k_17230;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17184_17232))
{var seq__17185_17233 = cljs.core.seq.call(null,v_17231);var chunk__17186_17234 = null;var count__17187_17235 = 0;var i__17188_17236 = 0;while(true){
if((i__17188_17236 < count__17187_17235))
{var c_17237 = cljs.core._nth.call(null,chunk__17186_17234,i__17188_17236);dommy.attrs.add_class_BANG_.call(null,n,c_17237);
{
var G__17238 = seq__17185_17233;
var G__17239 = chunk__17186_17234;
var G__17240 = count__17187_17235;
var G__17241 = (i__17188_17236 + 1);
seq__17185_17233 = G__17238;
chunk__17186_17234 = G__17239;
count__17187_17235 = G__17240;
i__17188_17236 = G__17241;
continue;
}
} else
{var temp__4092__auto___17242__$1 = cljs.core.seq.call(null,seq__17185_17233);if(temp__4092__auto___17242__$1)
{var seq__17185_17243__$1 = temp__4092__auto___17242__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17185_17243__$1))
{var c__3844__auto___17244 = cljs.core.chunk_first.call(null,seq__17185_17243__$1);{
var G__17245 = cljs.core.chunk_rest.call(null,seq__17185_17243__$1);
var G__17246 = c__3844__auto___17244;
var G__17247 = cljs.core.count.call(null,c__3844__auto___17244);
var G__17248 = 0;
seq__17185_17233 = G__17245;
chunk__17186_17234 = G__17246;
count__17187_17235 = G__17247;
i__17188_17236 = G__17248;
continue;
}
} else
{var c_17249 = cljs.core.first.call(null,seq__17185_17243__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17249);
{
var G__17250 = cljs.core.next.call(null,seq__17185_17243__$1);
var G__17251 = null;
var G__17252 = 0;
var G__17253 = 0;
seq__17185_17233 = G__17250;
chunk__17186_17234 = G__17251;
count__17187_17235 = G__17252;
i__17188_17236 = G__17253;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17184_17232))
{dommy.attrs.add_class_BANG_.call(null,n,v_17231);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17230,v_17231);
} else
{}
}
}
{
var G__17254 = cljs.core.next.call(null,seq__17173_17223__$1);
var G__17255 = null;
var G__17256 = 0;
var G__17257 = 0;
seq__17173_17189 = G__17254;
chunk__17174_17190 = G__17255;
count__17175_17191 = G__17256;
i__17176_17192 = G__17257;
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
}catch (e17258){if((e17258 instanceof ReferenceError))
{var __17259 = e17258;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17258;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__17261 = data;if(G__17261)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__17261.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17261);
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
