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
{var str_16496 = node_str.substring(base_idx);while(true){
var next_idx_16497 = dommy.template.next_css_index.call(null,str_16496,1);var frag_16498 = (((next_idx_16497 >= 0))?str_16496.substring(0,next_idx_16497):str_16496);var G__16495_16499 = frag_16498.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16495_16499))
{node.setAttribute("id",frag_16498.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16495_16499))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16498.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16498.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16497 >= 0))
{{
var G__16500 = str_16496.substring(next_idx_16497);
str_16496 = G__16500;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16506 = data;if(G__16506)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16506.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16506.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16506);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16507_16511 = cljs.core.seq.call(null,data);var chunk__16508_16512 = null;var count__16509_16513 = 0;var i__16510_16514 = 0;while(true){
if((i__16510_16514 < count__16509_16513))
{var child_16515 = cljs.core._nth.call(null,chunk__16508_16512,i__16510_16514);__GT_document_fragment.call(null,result_frag,child_16515);
{
var G__16516 = seq__16507_16511;
var G__16517 = chunk__16508_16512;
var G__16518 = count__16509_16513;
var G__16519 = (i__16510_16514 + 1);
seq__16507_16511 = G__16516;
chunk__16508_16512 = G__16517;
count__16509_16513 = G__16518;
i__16510_16514 = G__16519;
continue;
}
} else
{var temp__4092__auto___16520 = cljs.core.seq.call(null,seq__16507_16511);if(temp__4092__auto___16520)
{var seq__16507_16521__$1 = temp__4092__auto___16520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16507_16521__$1))
{var c__3844__auto___16522 = cljs.core.chunk_first.call(null,seq__16507_16521__$1);{
var G__16523 = cljs.core.chunk_rest.call(null,seq__16507_16521__$1);
var G__16524 = c__3844__auto___16522;
var G__16525 = cljs.core.count.call(null,c__3844__auto___16522);
var G__16526 = 0;
seq__16507_16511 = G__16523;
chunk__16508_16512 = G__16524;
count__16509_16513 = G__16525;
i__16510_16514 = G__16526;
continue;
}
} else
{var child_16527 = cljs.core.first.call(null,seq__16507_16521__$1);__GT_document_fragment.call(null,result_frag,child_16527);
{
var G__16528 = cljs.core.next.call(null,seq__16507_16521__$1);
var G__16529 = null;
var G__16530 = 0;
var G__16531 = 0;
seq__16507_16511 = G__16528;
chunk__16508_16512 = G__16529;
count__16509_16513 = G__16530;
i__16510_16514 = G__16531;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16533 = data;if(G__16533)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16533.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16533.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16533);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16533);
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
dommy.template.compound_element = (function compound_element(p__16534){var vec__16554 = p__16534;var tag_name = cljs.core.nth.call(null,vec__16554,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16554,1,null);var children = cljs.core.nthnext.call(null,vec__16554,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16556 = maybe_attrs;if(G__16556)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16556.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16556.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16556);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16556);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16557_16573 = cljs.core.seq.call(null,attrs);var chunk__16558_16574 = null;var count__16559_16575 = 0;var i__16560_16576 = 0;while(true){
if((i__16560_16576 < count__16559_16575))
{var vec__16561_16577 = cljs.core._nth.call(null,chunk__16558_16574,i__16560_16576);var k_16578 = cljs.core.nth.call(null,vec__16561_16577,0,null);var v_16579 = cljs.core.nth.call(null,vec__16561_16577,1,null);var G__16562_16580 = k_16578;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16562_16580))
{var seq__16563_16581 = cljs.core.seq.call(null,v_16579);var chunk__16564_16582 = null;var count__16565_16583 = 0;var i__16566_16584 = 0;while(true){
if((i__16566_16584 < count__16565_16583))
{var c_16585 = cljs.core._nth.call(null,chunk__16564_16582,i__16566_16584);dommy.attrs.add_class_BANG_.call(null,n,c_16585);
{
var G__16586 = seq__16563_16581;
var G__16587 = chunk__16564_16582;
var G__16588 = count__16565_16583;
var G__16589 = (i__16566_16584 + 1);
seq__16563_16581 = G__16586;
chunk__16564_16582 = G__16587;
count__16565_16583 = G__16588;
i__16566_16584 = G__16589;
continue;
}
} else
{var temp__4092__auto___16590 = cljs.core.seq.call(null,seq__16563_16581);if(temp__4092__auto___16590)
{var seq__16563_16591__$1 = temp__4092__auto___16590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16563_16591__$1))
{var c__3844__auto___16592 = cljs.core.chunk_first.call(null,seq__16563_16591__$1);{
var G__16593 = cljs.core.chunk_rest.call(null,seq__16563_16591__$1);
var G__16594 = c__3844__auto___16592;
var G__16595 = cljs.core.count.call(null,c__3844__auto___16592);
var G__16596 = 0;
seq__16563_16581 = G__16593;
chunk__16564_16582 = G__16594;
count__16565_16583 = G__16595;
i__16566_16584 = G__16596;
continue;
}
} else
{var c_16597 = cljs.core.first.call(null,seq__16563_16591__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16597);
{
var G__16598 = cljs.core.next.call(null,seq__16563_16591__$1);
var G__16599 = null;
var G__16600 = 0;
var G__16601 = 0;
seq__16563_16581 = G__16598;
chunk__16564_16582 = G__16599;
count__16565_16583 = G__16600;
i__16566_16584 = G__16601;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16562_16580))
{dommy.attrs.add_class_BANG_.call(null,n,v_16579);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16578,v_16579);
} else
{}
}
}
{
var G__16602 = seq__16557_16573;
var G__16603 = chunk__16558_16574;
var G__16604 = count__16559_16575;
var G__16605 = (i__16560_16576 + 1);
seq__16557_16573 = G__16602;
chunk__16558_16574 = G__16603;
count__16559_16575 = G__16604;
i__16560_16576 = G__16605;
continue;
}
} else
{var temp__4092__auto___16606 = cljs.core.seq.call(null,seq__16557_16573);if(temp__4092__auto___16606)
{var seq__16557_16607__$1 = temp__4092__auto___16606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16557_16607__$1))
{var c__3844__auto___16608 = cljs.core.chunk_first.call(null,seq__16557_16607__$1);{
var G__16609 = cljs.core.chunk_rest.call(null,seq__16557_16607__$1);
var G__16610 = c__3844__auto___16608;
var G__16611 = cljs.core.count.call(null,c__3844__auto___16608);
var G__16612 = 0;
seq__16557_16573 = G__16609;
chunk__16558_16574 = G__16610;
count__16559_16575 = G__16611;
i__16560_16576 = G__16612;
continue;
}
} else
{var vec__16567_16613 = cljs.core.first.call(null,seq__16557_16607__$1);var k_16614 = cljs.core.nth.call(null,vec__16567_16613,0,null);var v_16615 = cljs.core.nth.call(null,vec__16567_16613,1,null);var G__16568_16616 = k_16614;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16568_16616))
{var seq__16569_16617 = cljs.core.seq.call(null,v_16615);var chunk__16570_16618 = null;var count__16571_16619 = 0;var i__16572_16620 = 0;while(true){
if((i__16572_16620 < count__16571_16619))
{var c_16621 = cljs.core._nth.call(null,chunk__16570_16618,i__16572_16620);dommy.attrs.add_class_BANG_.call(null,n,c_16621);
{
var G__16622 = seq__16569_16617;
var G__16623 = chunk__16570_16618;
var G__16624 = count__16571_16619;
var G__16625 = (i__16572_16620 + 1);
seq__16569_16617 = G__16622;
chunk__16570_16618 = G__16623;
count__16571_16619 = G__16624;
i__16572_16620 = G__16625;
continue;
}
} else
{var temp__4092__auto___16626__$1 = cljs.core.seq.call(null,seq__16569_16617);if(temp__4092__auto___16626__$1)
{var seq__16569_16627__$1 = temp__4092__auto___16626__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16569_16627__$1))
{var c__3844__auto___16628 = cljs.core.chunk_first.call(null,seq__16569_16627__$1);{
var G__16629 = cljs.core.chunk_rest.call(null,seq__16569_16627__$1);
var G__16630 = c__3844__auto___16628;
var G__16631 = cljs.core.count.call(null,c__3844__auto___16628);
var G__16632 = 0;
seq__16569_16617 = G__16629;
chunk__16570_16618 = G__16630;
count__16571_16619 = G__16631;
i__16572_16620 = G__16632;
continue;
}
} else
{var c_16633 = cljs.core.first.call(null,seq__16569_16627__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16633);
{
var G__16634 = cljs.core.next.call(null,seq__16569_16627__$1);
var G__16635 = null;
var G__16636 = 0;
var G__16637 = 0;
seq__16569_16617 = G__16634;
chunk__16570_16618 = G__16635;
count__16571_16619 = G__16636;
i__16572_16620 = G__16637;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16568_16616))
{dommy.attrs.add_class_BANG_.call(null,n,v_16615);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16614,v_16615);
} else
{}
}
}
{
var G__16638 = cljs.core.next.call(null,seq__16557_16607__$1);
var G__16639 = null;
var G__16640 = 0;
var G__16641 = 0;
seq__16557_16573 = G__16638;
chunk__16558_16574 = G__16639;
count__16559_16575 = G__16640;
i__16560_16576 = G__16641;
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
}catch (e16642){if((e16642 instanceof ReferenceError))
{var __16643 = e16642;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16642;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16645 = data;if(G__16645)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16645.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16645);
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