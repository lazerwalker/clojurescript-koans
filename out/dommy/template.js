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
{var str_16453 = node_str.substring(base_idx);while(true){
var next_idx_16454 = dommy.template.next_css_index.call(null,str_16453,1);var frag_16455 = (((next_idx_16454 >= 0))?str_16453.substring(0,next_idx_16454):str_16453);var G__16452_16456 = frag_16455.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16452_16456))
{node.setAttribute("id",frag_16455.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16452_16456))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16455.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16455.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16454 >= 0))
{{
var G__16457 = str_16453.substring(next_idx_16454);
str_16453 = G__16457;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16463 = data;if(G__16463)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16463.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16463.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16463);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16463);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16464_16468 = cljs.core.seq.call(null,data);var chunk__16465_16469 = null;var count__16466_16470 = 0;var i__16467_16471 = 0;while(true){
if((i__16467_16471 < count__16466_16470))
{var child_16472 = cljs.core._nth.call(null,chunk__16465_16469,i__16467_16471);__GT_document_fragment.call(null,result_frag,child_16472);
{
var G__16473 = seq__16464_16468;
var G__16474 = chunk__16465_16469;
var G__16475 = count__16466_16470;
var G__16476 = (i__16467_16471 + 1);
seq__16464_16468 = G__16473;
chunk__16465_16469 = G__16474;
count__16466_16470 = G__16475;
i__16467_16471 = G__16476;
continue;
}
} else
{var temp__4092__auto___16477 = cljs.core.seq.call(null,seq__16464_16468);if(temp__4092__auto___16477)
{var seq__16464_16478__$1 = temp__4092__auto___16477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16464_16478__$1))
{var c__3844__auto___16479 = cljs.core.chunk_first.call(null,seq__16464_16478__$1);{
var G__16480 = cljs.core.chunk_rest.call(null,seq__16464_16478__$1);
var G__16481 = c__3844__auto___16479;
var G__16482 = cljs.core.count.call(null,c__3844__auto___16479);
var G__16483 = 0;
seq__16464_16468 = G__16480;
chunk__16465_16469 = G__16481;
count__16466_16470 = G__16482;
i__16467_16471 = G__16483;
continue;
}
} else
{var child_16484 = cljs.core.first.call(null,seq__16464_16478__$1);__GT_document_fragment.call(null,result_frag,child_16484);
{
var G__16485 = cljs.core.next.call(null,seq__16464_16478__$1);
var G__16486 = null;
var G__16487 = 0;
var G__16488 = 0;
seq__16464_16468 = G__16485;
chunk__16465_16469 = G__16486;
count__16466_16470 = G__16487;
i__16467_16471 = G__16488;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16490 = data;if(G__16490)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16490.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16490.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16490);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16490);
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
dommy.template.compound_element = (function compound_element(p__16491){var vec__16511 = p__16491;var tag_name = cljs.core.nth.call(null,vec__16511,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16511,1,null);var children = cljs.core.nthnext.call(null,vec__16511,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16513 = maybe_attrs;if(G__16513)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16513.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16513.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16513);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16513);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16514_16530 = cljs.core.seq.call(null,attrs);var chunk__16515_16531 = null;var count__16516_16532 = 0;var i__16517_16533 = 0;while(true){
if((i__16517_16533 < count__16516_16532))
{var vec__16518_16534 = cljs.core._nth.call(null,chunk__16515_16531,i__16517_16533);var k_16535 = cljs.core.nth.call(null,vec__16518_16534,0,null);var v_16536 = cljs.core.nth.call(null,vec__16518_16534,1,null);var G__16519_16537 = k_16535;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16519_16537))
{var seq__16520_16538 = cljs.core.seq.call(null,v_16536);var chunk__16521_16539 = null;var count__16522_16540 = 0;var i__16523_16541 = 0;while(true){
if((i__16523_16541 < count__16522_16540))
{var c_16542 = cljs.core._nth.call(null,chunk__16521_16539,i__16523_16541);dommy.attrs.add_class_BANG_.call(null,n,c_16542);
{
var G__16543 = seq__16520_16538;
var G__16544 = chunk__16521_16539;
var G__16545 = count__16522_16540;
var G__16546 = (i__16523_16541 + 1);
seq__16520_16538 = G__16543;
chunk__16521_16539 = G__16544;
count__16522_16540 = G__16545;
i__16523_16541 = G__16546;
continue;
}
} else
{var temp__4092__auto___16547 = cljs.core.seq.call(null,seq__16520_16538);if(temp__4092__auto___16547)
{var seq__16520_16548__$1 = temp__4092__auto___16547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16520_16548__$1))
{var c__3844__auto___16549 = cljs.core.chunk_first.call(null,seq__16520_16548__$1);{
var G__16550 = cljs.core.chunk_rest.call(null,seq__16520_16548__$1);
var G__16551 = c__3844__auto___16549;
var G__16552 = cljs.core.count.call(null,c__3844__auto___16549);
var G__16553 = 0;
seq__16520_16538 = G__16550;
chunk__16521_16539 = G__16551;
count__16522_16540 = G__16552;
i__16523_16541 = G__16553;
continue;
}
} else
{var c_16554 = cljs.core.first.call(null,seq__16520_16548__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16554);
{
var G__16555 = cljs.core.next.call(null,seq__16520_16548__$1);
var G__16556 = null;
var G__16557 = 0;
var G__16558 = 0;
seq__16520_16538 = G__16555;
chunk__16521_16539 = G__16556;
count__16522_16540 = G__16557;
i__16523_16541 = G__16558;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16519_16537))
{dommy.attrs.add_class_BANG_.call(null,n,v_16536);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16535,v_16536);
} else
{}
}
}
{
var G__16559 = seq__16514_16530;
var G__16560 = chunk__16515_16531;
var G__16561 = count__16516_16532;
var G__16562 = (i__16517_16533 + 1);
seq__16514_16530 = G__16559;
chunk__16515_16531 = G__16560;
count__16516_16532 = G__16561;
i__16517_16533 = G__16562;
continue;
}
} else
{var temp__4092__auto___16563 = cljs.core.seq.call(null,seq__16514_16530);if(temp__4092__auto___16563)
{var seq__16514_16564__$1 = temp__4092__auto___16563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16514_16564__$1))
{var c__3844__auto___16565 = cljs.core.chunk_first.call(null,seq__16514_16564__$1);{
var G__16566 = cljs.core.chunk_rest.call(null,seq__16514_16564__$1);
var G__16567 = c__3844__auto___16565;
var G__16568 = cljs.core.count.call(null,c__3844__auto___16565);
var G__16569 = 0;
seq__16514_16530 = G__16566;
chunk__16515_16531 = G__16567;
count__16516_16532 = G__16568;
i__16517_16533 = G__16569;
continue;
}
} else
{var vec__16524_16570 = cljs.core.first.call(null,seq__16514_16564__$1);var k_16571 = cljs.core.nth.call(null,vec__16524_16570,0,null);var v_16572 = cljs.core.nth.call(null,vec__16524_16570,1,null);var G__16525_16573 = k_16571;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16525_16573))
{var seq__16526_16574 = cljs.core.seq.call(null,v_16572);var chunk__16527_16575 = null;var count__16528_16576 = 0;var i__16529_16577 = 0;while(true){
if((i__16529_16577 < count__16528_16576))
{var c_16578 = cljs.core._nth.call(null,chunk__16527_16575,i__16529_16577);dommy.attrs.add_class_BANG_.call(null,n,c_16578);
{
var G__16579 = seq__16526_16574;
var G__16580 = chunk__16527_16575;
var G__16581 = count__16528_16576;
var G__16582 = (i__16529_16577 + 1);
seq__16526_16574 = G__16579;
chunk__16527_16575 = G__16580;
count__16528_16576 = G__16581;
i__16529_16577 = G__16582;
continue;
}
} else
{var temp__4092__auto___16583__$1 = cljs.core.seq.call(null,seq__16526_16574);if(temp__4092__auto___16583__$1)
{var seq__16526_16584__$1 = temp__4092__auto___16583__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16526_16584__$1))
{var c__3844__auto___16585 = cljs.core.chunk_first.call(null,seq__16526_16584__$1);{
var G__16586 = cljs.core.chunk_rest.call(null,seq__16526_16584__$1);
var G__16587 = c__3844__auto___16585;
var G__16588 = cljs.core.count.call(null,c__3844__auto___16585);
var G__16589 = 0;
seq__16526_16574 = G__16586;
chunk__16527_16575 = G__16587;
count__16528_16576 = G__16588;
i__16529_16577 = G__16589;
continue;
}
} else
{var c_16590 = cljs.core.first.call(null,seq__16526_16584__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16590);
{
var G__16591 = cljs.core.next.call(null,seq__16526_16584__$1);
var G__16592 = null;
var G__16593 = 0;
var G__16594 = 0;
seq__16526_16574 = G__16591;
chunk__16527_16575 = G__16592;
count__16528_16576 = G__16593;
i__16529_16577 = G__16594;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16525_16573))
{dommy.attrs.add_class_BANG_.call(null,n,v_16572);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16571,v_16572);
} else
{}
}
}
{
var G__16595 = cljs.core.next.call(null,seq__16514_16564__$1);
var G__16596 = null;
var G__16597 = 0;
var G__16598 = 0;
seq__16514_16530 = G__16595;
chunk__16515_16531 = G__16596;
count__16516_16532 = G__16597;
i__16517_16533 = G__16598;
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
}catch (e16599){if((e16599 instanceof ReferenceError))
{var __16600 = e16599;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16599;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16602 = data;if(G__16602)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16602.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16602.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16602);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16602);
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