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
{var str_28998 = node_str.substring(base_idx);while(true){
var next_idx_28999 = dommy.template.next_css_index.call(null,str_28998,1);var frag_29000 = (((next_idx_28999 >= 0))?str_28998.substring(0,next_idx_28999):str_28998);var G__28997_29001 = frag_29000.charAt(0);if(cljs.core._EQ_.call(null,"#",G__28997_29001))
{node.setAttribute("id",frag_29000.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__28997_29001))
{dommy.attrs.add_class_BANG_.call(null,node,frag_29000.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_29000.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_28999 >= 0))
{{
var G__29002 = str_28998.substring(next_idx_28999);
str_28998 = G__29002;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__29008 = data;if(G__29008)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29008.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29008.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29008);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29008);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__29009_29013 = cljs.core.seq.call(null,data);var chunk__29010_29014 = null;var count__29011_29015 = 0;var i__29012_29016 = 0;while(true){
if((i__29012_29016 < count__29011_29015))
{var child_29017 = cljs.core._nth.call(null,chunk__29010_29014,i__29012_29016);__GT_document_fragment.call(null,result_frag,child_29017);
{
var G__29018 = seq__29009_29013;
var G__29019 = chunk__29010_29014;
var G__29020 = count__29011_29015;
var G__29021 = (i__29012_29016 + 1);
seq__29009_29013 = G__29018;
chunk__29010_29014 = G__29019;
count__29011_29015 = G__29020;
i__29012_29016 = G__29021;
continue;
}
} else
{var temp__4092__auto___29022 = cljs.core.seq.call(null,seq__29009_29013);if(temp__4092__auto___29022)
{var seq__29009_29023__$1 = temp__4092__auto___29022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29009_29023__$1))
{var c__3844__auto___29024 = cljs.core.chunk_first.call(null,seq__29009_29023__$1);{
var G__29025 = cljs.core.chunk_rest.call(null,seq__29009_29023__$1);
var G__29026 = c__3844__auto___29024;
var G__29027 = cljs.core.count.call(null,c__3844__auto___29024);
var G__29028 = 0;
seq__29009_29013 = G__29025;
chunk__29010_29014 = G__29026;
count__29011_29015 = G__29027;
i__29012_29016 = G__29028;
continue;
}
} else
{var child_29029 = cljs.core.first.call(null,seq__29009_29023__$1);__GT_document_fragment.call(null,result_frag,child_29029);
{
var G__29030 = cljs.core.next.call(null,seq__29009_29023__$1);
var G__29031 = null;
var G__29032 = 0;
var G__29033 = 0;
seq__29009_29013 = G__29030;
chunk__29010_29014 = G__29031;
count__29011_29015 = G__29032;
i__29012_29016 = G__29033;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__29035 = data;if(G__29035)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29035.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29035.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29035);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29035);
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
dommy.template.compound_element = (function compound_element(p__29036){var vec__29056 = p__29036;var tag_name = cljs.core.nth.call(null,vec__29056,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__29056,1,null);var children = cljs.core.nthnext.call(null,vec__29056,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__29058 = maybe_attrs;if(G__29058)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29058.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29058.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29058);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29058);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__29059_29075 = cljs.core.seq.call(null,attrs);var chunk__29060_29076 = null;var count__29061_29077 = 0;var i__29062_29078 = 0;while(true){
if((i__29062_29078 < count__29061_29077))
{var vec__29063_29079 = cljs.core._nth.call(null,chunk__29060_29076,i__29062_29078);var k_29080 = cljs.core.nth.call(null,vec__29063_29079,0,null);var v_29081 = cljs.core.nth.call(null,vec__29063_29079,1,null);var G__29064_29082 = k_29080;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__29064_29082))
{var seq__29065_29083 = cljs.core.seq.call(null,v_29081);var chunk__29066_29084 = null;var count__29067_29085 = 0;var i__29068_29086 = 0;while(true){
if((i__29068_29086 < count__29067_29085))
{var c_29087 = cljs.core._nth.call(null,chunk__29066_29084,i__29068_29086);dommy.attrs.add_class_BANG_.call(null,n,c_29087);
{
var G__29088 = seq__29065_29083;
var G__29089 = chunk__29066_29084;
var G__29090 = count__29067_29085;
var G__29091 = (i__29068_29086 + 1);
seq__29065_29083 = G__29088;
chunk__29066_29084 = G__29089;
count__29067_29085 = G__29090;
i__29068_29086 = G__29091;
continue;
}
} else
{var temp__4092__auto___29092 = cljs.core.seq.call(null,seq__29065_29083);if(temp__4092__auto___29092)
{var seq__29065_29093__$1 = temp__4092__auto___29092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29065_29093__$1))
{var c__3844__auto___29094 = cljs.core.chunk_first.call(null,seq__29065_29093__$1);{
var G__29095 = cljs.core.chunk_rest.call(null,seq__29065_29093__$1);
var G__29096 = c__3844__auto___29094;
var G__29097 = cljs.core.count.call(null,c__3844__auto___29094);
var G__29098 = 0;
seq__29065_29083 = G__29095;
chunk__29066_29084 = G__29096;
count__29067_29085 = G__29097;
i__29068_29086 = G__29098;
continue;
}
} else
{var c_29099 = cljs.core.first.call(null,seq__29065_29093__$1);dommy.attrs.add_class_BANG_.call(null,n,c_29099);
{
var G__29100 = cljs.core.next.call(null,seq__29065_29093__$1);
var G__29101 = null;
var G__29102 = 0;
var G__29103 = 0;
seq__29065_29083 = G__29100;
chunk__29066_29084 = G__29101;
count__29067_29085 = G__29102;
i__29068_29086 = G__29103;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__29064_29082))
{dommy.attrs.add_class_BANG_.call(null,n,v_29081);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_29080,v_29081);
} else
{}
}
}
{
var G__29104 = seq__29059_29075;
var G__29105 = chunk__29060_29076;
var G__29106 = count__29061_29077;
var G__29107 = (i__29062_29078 + 1);
seq__29059_29075 = G__29104;
chunk__29060_29076 = G__29105;
count__29061_29077 = G__29106;
i__29062_29078 = G__29107;
continue;
}
} else
{var temp__4092__auto___29108 = cljs.core.seq.call(null,seq__29059_29075);if(temp__4092__auto___29108)
{var seq__29059_29109__$1 = temp__4092__auto___29108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29059_29109__$1))
{var c__3844__auto___29110 = cljs.core.chunk_first.call(null,seq__29059_29109__$1);{
var G__29111 = cljs.core.chunk_rest.call(null,seq__29059_29109__$1);
var G__29112 = c__3844__auto___29110;
var G__29113 = cljs.core.count.call(null,c__3844__auto___29110);
var G__29114 = 0;
seq__29059_29075 = G__29111;
chunk__29060_29076 = G__29112;
count__29061_29077 = G__29113;
i__29062_29078 = G__29114;
continue;
}
} else
{var vec__29069_29115 = cljs.core.first.call(null,seq__29059_29109__$1);var k_29116 = cljs.core.nth.call(null,vec__29069_29115,0,null);var v_29117 = cljs.core.nth.call(null,vec__29069_29115,1,null);var G__29070_29118 = k_29116;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__29070_29118))
{var seq__29071_29119 = cljs.core.seq.call(null,v_29117);var chunk__29072_29120 = null;var count__29073_29121 = 0;var i__29074_29122 = 0;while(true){
if((i__29074_29122 < count__29073_29121))
{var c_29123 = cljs.core._nth.call(null,chunk__29072_29120,i__29074_29122);dommy.attrs.add_class_BANG_.call(null,n,c_29123);
{
var G__29124 = seq__29071_29119;
var G__29125 = chunk__29072_29120;
var G__29126 = count__29073_29121;
var G__29127 = (i__29074_29122 + 1);
seq__29071_29119 = G__29124;
chunk__29072_29120 = G__29125;
count__29073_29121 = G__29126;
i__29074_29122 = G__29127;
continue;
}
} else
{var temp__4092__auto___29128__$1 = cljs.core.seq.call(null,seq__29071_29119);if(temp__4092__auto___29128__$1)
{var seq__29071_29129__$1 = temp__4092__auto___29128__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29071_29129__$1))
{var c__3844__auto___29130 = cljs.core.chunk_first.call(null,seq__29071_29129__$1);{
var G__29131 = cljs.core.chunk_rest.call(null,seq__29071_29129__$1);
var G__29132 = c__3844__auto___29130;
var G__29133 = cljs.core.count.call(null,c__3844__auto___29130);
var G__29134 = 0;
seq__29071_29119 = G__29131;
chunk__29072_29120 = G__29132;
count__29073_29121 = G__29133;
i__29074_29122 = G__29134;
continue;
}
} else
{var c_29135 = cljs.core.first.call(null,seq__29071_29129__$1);dommy.attrs.add_class_BANG_.call(null,n,c_29135);
{
var G__29136 = cljs.core.next.call(null,seq__29071_29129__$1);
var G__29137 = null;
var G__29138 = 0;
var G__29139 = 0;
seq__29071_29119 = G__29136;
chunk__29072_29120 = G__29137;
count__29073_29121 = G__29138;
i__29074_29122 = G__29139;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__29070_29118))
{dommy.attrs.add_class_BANG_.call(null,n,v_29117);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_29116,v_29117);
} else
{}
}
}
{
var G__29140 = cljs.core.next.call(null,seq__29059_29109__$1);
var G__29141 = null;
var G__29142 = 0;
var G__29143 = 0;
seq__29059_29075 = G__29140;
chunk__29060_29076 = G__29141;
count__29061_29077 = G__29142;
i__29062_29078 = G__29143;
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
}catch (e29144){if((e29144 instanceof ReferenceError))
{var __29145 = e29144;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29144;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__29147 = data;if(G__29147)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__29147.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29147.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29147);
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