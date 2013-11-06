goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = cljs.core.PersistentHashSet.fromArray(["svg",null,"line",null], true);
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__2952__auto__ = this$;if(and__2952__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__2952__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__3556__auto__ = (((this$ == null))?null:this$);return (function (){var or__2961__auto__ = (dommy.template._elem[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (dommy.template._elem["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
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
{var str_6131 = node_str.substring(base_idx);while(true){
var next_idx_6132 = dommy.template.next_css_index.call(null,str_6131,1);var frag_6133 = (((next_idx_6132 >= 0))?str_6131.substring(0,next_idx_6132):str_6131);var G__6130_6134 = frag_6133.charAt(0);if(cljs.core._EQ_.call(null,"#",G__6130_6134))
{node.setAttribute("id",frag_6133.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__6130_6134))
{dommy.attrs.add_class_BANG_.call(null,node,frag_6133.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_6133.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_6132 >= 0))
{{
var G__6135 = str_6131.substring(next_idx_6132);
str_6131 = G__6135;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6141 = data;if(G__6141)
{var bit__3572__auto__ = null;if(cljs.core.truth_((function (){var or__2961__auto__ = bit__3572__auto__;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return G__6141.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6141.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6141);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6142_6146 = cljs.core.seq.call(null,data);var chunk__6143_6147 = null;var count__6144_6148 = 0;var i__6145_6149 = 0;while(true){
if((i__6145_6149 < count__6144_6148))
{var child_6150 = cljs.core._nth.call(null,chunk__6143_6147,i__6145_6149);__GT_document_fragment.call(null,result_frag,child_6150);
{
var G__6151 = seq__6142_6146;
var G__6152 = chunk__6143_6147;
var G__6153 = count__6144_6148;
var G__6154 = (i__6145_6149 + 1);
seq__6142_6146 = G__6151;
chunk__6143_6147 = G__6152;
count__6144_6148 = G__6153;
i__6145_6149 = G__6154;
continue;
}
} else
{var temp__4092__auto___6155 = cljs.core.seq.call(null,seq__6142_6146);if(temp__4092__auto___6155)
{var seq__6142_6156__$1 = temp__4092__auto___6155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6142_6156__$1))
{var c__3670__auto___6157 = cljs.core.chunk_first.call(null,seq__6142_6156__$1);{
var G__6158 = cljs.core.chunk_rest.call(null,seq__6142_6156__$1);
var G__6159 = c__3670__auto___6157;
var G__6160 = cljs.core.count.call(null,c__3670__auto___6157);
var G__6161 = 0;
seq__6142_6146 = G__6158;
chunk__6143_6147 = G__6159;
count__6144_6148 = G__6160;
i__6145_6149 = G__6161;
continue;
}
} else
{var child_6162 = cljs.core.first.call(null,seq__6142_6156__$1);__GT_document_fragment.call(null,result_frag,child_6162);
{
var G__6163 = cljs.core.next.call(null,seq__6142_6156__$1);
var G__6164 = null;
var G__6165 = 0;
var G__6166 = 0;
seq__6142_6146 = G__6163;
chunk__6143_6147 = G__6164;
count__6144_6148 = G__6165;
i__6145_6149 = G__6166;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6168 = data;if(G__6168)
{var bit__3572__auto__ = null;if(cljs.core.truth_((function (){var or__2961__auto__ = bit__3572__auto__;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return G__6168.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6168.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6168);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6168);
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
dommy.template.compound_element = (function compound_element(p__6169){var vec__6189 = p__6169;var tag_name = cljs.core.nth.call(null,vec__6189,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__6189,1,null);var children = cljs.core.nthnext.call(null,vec__6189,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6191 = maybe_attrs;if(G__6191)
{var bit__3572__auto__ = null;if(cljs.core.truth_((function (){var or__2961__auto__ = bit__3572__auto__;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return G__6191.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6191.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6191);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6191);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6192_6208 = cljs.core.seq.call(null,attrs);var chunk__6193_6209 = null;var count__6194_6210 = 0;var i__6195_6211 = 0;while(true){
if((i__6195_6211 < count__6194_6210))
{var vec__6196_6212 = cljs.core._nth.call(null,chunk__6193_6209,i__6195_6211);var k_6213 = cljs.core.nth.call(null,vec__6196_6212,0,null);var v_6214 = cljs.core.nth.call(null,vec__6196_6212,1,null);var G__6197_6215 = k_6213;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6197_6215))
{var seq__6198_6216 = cljs.core.seq.call(null,v_6214);var chunk__6199_6217 = null;var count__6200_6218 = 0;var i__6201_6219 = 0;while(true){
if((i__6201_6219 < count__6200_6218))
{var c_6220 = cljs.core._nth.call(null,chunk__6199_6217,i__6201_6219);dommy.attrs.add_class_BANG_.call(null,n,c_6220);
{
var G__6221 = seq__6198_6216;
var G__6222 = chunk__6199_6217;
var G__6223 = count__6200_6218;
var G__6224 = (i__6201_6219 + 1);
seq__6198_6216 = G__6221;
chunk__6199_6217 = G__6222;
count__6200_6218 = G__6223;
i__6201_6219 = G__6224;
continue;
}
} else
{var temp__4092__auto___6225 = cljs.core.seq.call(null,seq__6198_6216);if(temp__4092__auto___6225)
{var seq__6198_6226__$1 = temp__4092__auto___6225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6198_6226__$1))
{var c__3670__auto___6227 = cljs.core.chunk_first.call(null,seq__6198_6226__$1);{
var G__6228 = cljs.core.chunk_rest.call(null,seq__6198_6226__$1);
var G__6229 = c__3670__auto___6227;
var G__6230 = cljs.core.count.call(null,c__3670__auto___6227);
var G__6231 = 0;
seq__6198_6216 = G__6228;
chunk__6199_6217 = G__6229;
count__6200_6218 = G__6230;
i__6201_6219 = G__6231;
continue;
}
} else
{var c_6232 = cljs.core.first.call(null,seq__6198_6226__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6232);
{
var G__6233 = cljs.core.next.call(null,seq__6198_6226__$1);
var G__6234 = null;
var G__6235 = 0;
var G__6236 = 0;
seq__6198_6216 = G__6233;
chunk__6199_6217 = G__6234;
count__6200_6218 = G__6235;
i__6201_6219 = G__6236;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6197_6215))
{dommy.attrs.add_class_BANG_.call(null,n,v_6214);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6213,v_6214);
} else
{}
}
}
{
var G__6237 = seq__6192_6208;
var G__6238 = chunk__6193_6209;
var G__6239 = count__6194_6210;
var G__6240 = (i__6195_6211 + 1);
seq__6192_6208 = G__6237;
chunk__6193_6209 = G__6238;
count__6194_6210 = G__6239;
i__6195_6211 = G__6240;
continue;
}
} else
{var temp__4092__auto___6241 = cljs.core.seq.call(null,seq__6192_6208);if(temp__4092__auto___6241)
{var seq__6192_6242__$1 = temp__4092__auto___6241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6192_6242__$1))
{var c__3670__auto___6243 = cljs.core.chunk_first.call(null,seq__6192_6242__$1);{
var G__6244 = cljs.core.chunk_rest.call(null,seq__6192_6242__$1);
var G__6245 = c__3670__auto___6243;
var G__6246 = cljs.core.count.call(null,c__3670__auto___6243);
var G__6247 = 0;
seq__6192_6208 = G__6244;
chunk__6193_6209 = G__6245;
count__6194_6210 = G__6246;
i__6195_6211 = G__6247;
continue;
}
} else
{var vec__6202_6248 = cljs.core.first.call(null,seq__6192_6242__$1);var k_6249 = cljs.core.nth.call(null,vec__6202_6248,0,null);var v_6250 = cljs.core.nth.call(null,vec__6202_6248,1,null);var G__6203_6251 = k_6249;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6203_6251))
{var seq__6204_6252 = cljs.core.seq.call(null,v_6250);var chunk__6205_6253 = null;var count__6206_6254 = 0;var i__6207_6255 = 0;while(true){
if((i__6207_6255 < count__6206_6254))
{var c_6256 = cljs.core._nth.call(null,chunk__6205_6253,i__6207_6255);dommy.attrs.add_class_BANG_.call(null,n,c_6256);
{
var G__6257 = seq__6204_6252;
var G__6258 = chunk__6205_6253;
var G__6259 = count__6206_6254;
var G__6260 = (i__6207_6255 + 1);
seq__6204_6252 = G__6257;
chunk__6205_6253 = G__6258;
count__6206_6254 = G__6259;
i__6207_6255 = G__6260;
continue;
}
} else
{var temp__4092__auto___6261__$1 = cljs.core.seq.call(null,seq__6204_6252);if(temp__4092__auto___6261__$1)
{var seq__6204_6262__$1 = temp__4092__auto___6261__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6204_6262__$1))
{var c__3670__auto___6263 = cljs.core.chunk_first.call(null,seq__6204_6262__$1);{
var G__6264 = cljs.core.chunk_rest.call(null,seq__6204_6262__$1);
var G__6265 = c__3670__auto___6263;
var G__6266 = cljs.core.count.call(null,c__3670__auto___6263);
var G__6267 = 0;
seq__6204_6252 = G__6264;
chunk__6205_6253 = G__6265;
count__6206_6254 = G__6266;
i__6207_6255 = G__6267;
continue;
}
} else
{var c_6268 = cljs.core.first.call(null,seq__6204_6262__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6268);
{
var G__6269 = cljs.core.next.call(null,seq__6204_6262__$1);
var G__6270 = null;
var G__6271 = 0;
var G__6272 = 0;
seq__6204_6252 = G__6269;
chunk__6205_6253 = G__6270;
count__6206_6254 = G__6271;
i__6207_6255 = G__6272;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6203_6251))
{dommy.attrs.add_class_BANG_.call(null,n,v_6250);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6249,v_6250);
} else
{}
}
}
{
var G__6273 = cljs.core.next.call(null,seq__6192_6242__$1);
var G__6274 = null;
var G__6275 = 0;
var G__6276 = 0;
seq__6192_6208 = G__6273;
chunk__6193_6209 = G__6274;
count__6194_6210 = G__6275;
i__6195_6211 = G__6276;
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
}catch (e6277){if((e6277 instanceof ReferenceError))
{var __6278 = e6277;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6277;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__6280 = data;if(G__6280)
{var bit__3572__auto__ = null;if(cljs.core.truth_((function (){var or__2961__auto__ = bit__3572__auto__;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return G__6280.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6280.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6280);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__6280);
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

//@ sourceMappingURL=template.js.map