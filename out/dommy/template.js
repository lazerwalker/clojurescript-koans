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
{var str_29136 = node_str.substring(base_idx);while(true){
var next_idx_29137 = dommy.template.next_css_index.call(null,str_29136,1);var frag_29138 = (((next_idx_29137 >= 0))?str_29136.substring(0,next_idx_29137):str_29136);var G__29135_29139 = frag_29138.charAt(0);if(cljs.core._EQ_.call(null,"#",G__29135_29139))
{node.setAttribute("id",frag_29138.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__29135_29139))
{dommy.attrs.add_class_BANG_.call(null,node,frag_29138.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_29138.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_29137 >= 0))
{{
var G__29140 = str_29136.substring(next_idx_29137);
str_29136 = G__29140;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__29146 = data;if(G__29146)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29146.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29146.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29146);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__29147_29151 = cljs.core.seq.call(null,data);var chunk__29148_29152 = null;var count__29149_29153 = 0;var i__29150_29154 = 0;while(true){
if((i__29150_29154 < count__29149_29153))
{var child_29155 = cljs.core._nth.call(null,chunk__29148_29152,i__29150_29154);__GT_document_fragment.call(null,result_frag,child_29155);
{
var G__29156 = seq__29147_29151;
var G__29157 = chunk__29148_29152;
var G__29158 = count__29149_29153;
var G__29159 = (i__29150_29154 + 1);
seq__29147_29151 = G__29156;
chunk__29148_29152 = G__29157;
count__29149_29153 = G__29158;
i__29150_29154 = G__29159;
continue;
}
} else
{var temp__4092__auto___29160 = cljs.core.seq.call(null,seq__29147_29151);if(temp__4092__auto___29160)
{var seq__29147_29161__$1 = temp__4092__auto___29160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29147_29161__$1))
{var c__3844__auto___29162 = cljs.core.chunk_first.call(null,seq__29147_29161__$1);{
var G__29163 = cljs.core.chunk_rest.call(null,seq__29147_29161__$1);
var G__29164 = c__3844__auto___29162;
var G__29165 = cljs.core.count.call(null,c__3844__auto___29162);
var G__29166 = 0;
seq__29147_29151 = G__29163;
chunk__29148_29152 = G__29164;
count__29149_29153 = G__29165;
i__29150_29154 = G__29166;
continue;
}
} else
{var child_29167 = cljs.core.first.call(null,seq__29147_29161__$1);__GT_document_fragment.call(null,result_frag,child_29167);
{
var G__29168 = cljs.core.next.call(null,seq__29147_29161__$1);
var G__29169 = null;
var G__29170 = 0;
var G__29171 = 0;
seq__29147_29151 = G__29168;
chunk__29148_29152 = G__29169;
count__29149_29153 = G__29170;
i__29150_29154 = G__29171;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__29173 = data;if(G__29173)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29173.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29173.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29173);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29173);
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
dommy.template.compound_element = (function compound_element(p__29174){var vec__29194 = p__29174;var tag_name = cljs.core.nth.call(null,vec__29194,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__29194,1,null);var children = cljs.core.nthnext.call(null,vec__29194,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__29196 = maybe_attrs;if(G__29196)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29196.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29196.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29196);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29196);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__29197_29213 = cljs.core.seq.call(null,attrs);var chunk__29198_29214 = null;var count__29199_29215 = 0;var i__29200_29216 = 0;while(true){
if((i__29200_29216 < count__29199_29215))
{var vec__29201_29217 = cljs.core._nth.call(null,chunk__29198_29214,i__29200_29216);var k_29218 = cljs.core.nth.call(null,vec__29201_29217,0,null);var v_29219 = cljs.core.nth.call(null,vec__29201_29217,1,null);var G__29202_29220 = k_29218;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__29202_29220))
{var seq__29203_29221 = cljs.core.seq.call(null,v_29219);var chunk__29204_29222 = null;var count__29205_29223 = 0;var i__29206_29224 = 0;while(true){
if((i__29206_29224 < count__29205_29223))
{var c_29225 = cljs.core._nth.call(null,chunk__29204_29222,i__29206_29224);dommy.attrs.add_class_BANG_.call(null,n,c_29225);
{
var G__29226 = seq__29203_29221;
var G__29227 = chunk__29204_29222;
var G__29228 = count__29205_29223;
var G__29229 = (i__29206_29224 + 1);
seq__29203_29221 = G__29226;
chunk__29204_29222 = G__29227;
count__29205_29223 = G__29228;
i__29206_29224 = G__29229;
continue;
}
} else
{var temp__4092__auto___29230 = cljs.core.seq.call(null,seq__29203_29221);if(temp__4092__auto___29230)
{var seq__29203_29231__$1 = temp__4092__auto___29230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29203_29231__$1))
{var c__3844__auto___29232 = cljs.core.chunk_first.call(null,seq__29203_29231__$1);{
var G__29233 = cljs.core.chunk_rest.call(null,seq__29203_29231__$1);
var G__29234 = c__3844__auto___29232;
var G__29235 = cljs.core.count.call(null,c__3844__auto___29232);
var G__29236 = 0;
seq__29203_29221 = G__29233;
chunk__29204_29222 = G__29234;
count__29205_29223 = G__29235;
i__29206_29224 = G__29236;
continue;
}
} else
{var c_29237 = cljs.core.first.call(null,seq__29203_29231__$1);dommy.attrs.add_class_BANG_.call(null,n,c_29237);
{
var G__29238 = cljs.core.next.call(null,seq__29203_29231__$1);
var G__29239 = null;
var G__29240 = 0;
var G__29241 = 0;
seq__29203_29221 = G__29238;
chunk__29204_29222 = G__29239;
count__29205_29223 = G__29240;
i__29206_29224 = G__29241;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__29202_29220))
{dommy.attrs.add_class_BANG_.call(null,n,v_29219);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_29218,v_29219);
} else
{}
}
}
{
var G__29242 = seq__29197_29213;
var G__29243 = chunk__29198_29214;
var G__29244 = count__29199_29215;
var G__29245 = (i__29200_29216 + 1);
seq__29197_29213 = G__29242;
chunk__29198_29214 = G__29243;
count__29199_29215 = G__29244;
i__29200_29216 = G__29245;
continue;
}
} else
{var temp__4092__auto___29246 = cljs.core.seq.call(null,seq__29197_29213);if(temp__4092__auto___29246)
{var seq__29197_29247__$1 = temp__4092__auto___29246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29197_29247__$1))
{var c__3844__auto___29248 = cljs.core.chunk_first.call(null,seq__29197_29247__$1);{
var G__29249 = cljs.core.chunk_rest.call(null,seq__29197_29247__$1);
var G__29250 = c__3844__auto___29248;
var G__29251 = cljs.core.count.call(null,c__3844__auto___29248);
var G__29252 = 0;
seq__29197_29213 = G__29249;
chunk__29198_29214 = G__29250;
count__29199_29215 = G__29251;
i__29200_29216 = G__29252;
continue;
}
} else
{var vec__29207_29253 = cljs.core.first.call(null,seq__29197_29247__$1);var k_29254 = cljs.core.nth.call(null,vec__29207_29253,0,null);var v_29255 = cljs.core.nth.call(null,vec__29207_29253,1,null);var G__29208_29256 = k_29254;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__29208_29256))
{var seq__29209_29257 = cljs.core.seq.call(null,v_29255);var chunk__29210_29258 = null;var count__29211_29259 = 0;var i__29212_29260 = 0;while(true){
if((i__29212_29260 < count__29211_29259))
{var c_29261 = cljs.core._nth.call(null,chunk__29210_29258,i__29212_29260);dommy.attrs.add_class_BANG_.call(null,n,c_29261);
{
var G__29262 = seq__29209_29257;
var G__29263 = chunk__29210_29258;
var G__29264 = count__29211_29259;
var G__29265 = (i__29212_29260 + 1);
seq__29209_29257 = G__29262;
chunk__29210_29258 = G__29263;
count__29211_29259 = G__29264;
i__29212_29260 = G__29265;
continue;
}
} else
{var temp__4092__auto___29266__$1 = cljs.core.seq.call(null,seq__29209_29257);if(temp__4092__auto___29266__$1)
{var seq__29209_29267__$1 = temp__4092__auto___29266__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29209_29267__$1))
{var c__3844__auto___29268 = cljs.core.chunk_first.call(null,seq__29209_29267__$1);{
var G__29269 = cljs.core.chunk_rest.call(null,seq__29209_29267__$1);
var G__29270 = c__3844__auto___29268;
var G__29271 = cljs.core.count.call(null,c__3844__auto___29268);
var G__29272 = 0;
seq__29209_29257 = G__29269;
chunk__29210_29258 = G__29270;
count__29211_29259 = G__29271;
i__29212_29260 = G__29272;
continue;
}
} else
{var c_29273 = cljs.core.first.call(null,seq__29209_29267__$1);dommy.attrs.add_class_BANG_.call(null,n,c_29273);
{
var G__29274 = cljs.core.next.call(null,seq__29209_29267__$1);
var G__29275 = null;
var G__29276 = 0;
var G__29277 = 0;
seq__29209_29257 = G__29274;
chunk__29210_29258 = G__29275;
count__29211_29259 = G__29276;
i__29212_29260 = G__29277;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__29208_29256))
{dommy.attrs.add_class_BANG_.call(null,n,v_29255);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_29254,v_29255);
} else
{}
}
}
{
var G__29278 = cljs.core.next.call(null,seq__29197_29247__$1);
var G__29279 = null;
var G__29280 = 0;
var G__29281 = 0;
seq__29197_29213 = G__29278;
chunk__29198_29214 = G__29279;
count__29199_29215 = G__29280;
i__29200_29216 = G__29281;
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
}catch (e29282){if((e29282 instanceof ReferenceError))
{var __29283 = e29282;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29282;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__29285 = data;if(G__29285)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29285.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29285.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29285);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29285);
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

//# sourceMappingURL=template.js.map