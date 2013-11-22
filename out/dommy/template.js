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
{var str_16592 = node_str.substring(base_idx);while(true){
var next_idx_16593 = dommy.template.next_css_index.call(null,str_16592,1);var frag_16594 = (((next_idx_16593 >= 0))?str_16592.substring(0,next_idx_16593):str_16592);var G__16591_16595 = frag_16594.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16591_16595))
{node.setAttribute("id",frag_16594.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16591_16595))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16594.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16594.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16593 >= 0))
{{
var G__16596 = str_16592.substring(next_idx_16593);
str_16592 = G__16596;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16602 = data;if(G__16602)
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
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16603_16607 = cljs.core.seq.call(null,data);var chunk__16604_16608 = null;var count__16605_16609 = 0;var i__16606_16610 = 0;while(true){
if((i__16606_16610 < count__16605_16609))
{var child_16611 = cljs.core._nth.call(null,chunk__16604_16608,i__16606_16610);__GT_document_fragment.call(null,result_frag,child_16611);
{
var G__16612 = seq__16603_16607;
var G__16613 = chunk__16604_16608;
var G__16614 = count__16605_16609;
var G__16615 = (i__16606_16610 + 1);
seq__16603_16607 = G__16612;
chunk__16604_16608 = G__16613;
count__16605_16609 = G__16614;
i__16606_16610 = G__16615;
continue;
}
} else
{var temp__4092__auto___16616 = cljs.core.seq.call(null,seq__16603_16607);if(temp__4092__auto___16616)
{var seq__16603_16617__$1 = temp__4092__auto___16616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16603_16617__$1))
{var c__3844__auto___16618 = cljs.core.chunk_first.call(null,seq__16603_16617__$1);{
var G__16619 = cljs.core.chunk_rest.call(null,seq__16603_16617__$1);
var G__16620 = c__3844__auto___16618;
var G__16621 = cljs.core.count.call(null,c__3844__auto___16618);
var G__16622 = 0;
seq__16603_16607 = G__16619;
chunk__16604_16608 = G__16620;
count__16605_16609 = G__16621;
i__16606_16610 = G__16622;
continue;
}
} else
{var child_16623 = cljs.core.first.call(null,seq__16603_16617__$1);__GT_document_fragment.call(null,result_frag,child_16623);
{
var G__16624 = cljs.core.next.call(null,seq__16603_16617__$1);
var G__16625 = null;
var G__16626 = 0;
var G__16627 = 0;
seq__16603_16607 = G__16624;
chunk__16604_16608 = G__16625;
count__16605_16609 = G__16626;
i__16606_16610 = G__16627;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16629 = data;if(G__16629)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16629.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16629.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16629);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16629);
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
dommy.template.compound_element = (function compound_element(p__16630){var vec__16650 = p__16630;var tag_name = cljs.core.nth.call(null,vec__16650,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16650,1,null);var children = cljs.core.nthnext.call(null,vec__16650,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16652 = maybe_attrs;if(G__16652)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16652.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16652.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16652);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16652);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16653_16669 = cljs.core.seq.call(null,attrs);var chunk__16654_16670 = null;var count__16655_16671 = 0;var i__16656_16672 = 0;while(true){
if((i__16656_16672 < count__16655_16671))
{var vec__16657_16673 = cljs.core._nth.call(null,chunk__16654_16670,i__16656_16672);var k_16674 = cljs.core.nth.call(null,vec__16657_16673,0,null);var v_16675 = cljs.core.nth.call(null,vec__16657_16673,1,null);var G__16658_16676 = k_16674;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16658_16676))
{var seq__16659_16677 = cljs.core.seq.call(null,v_16675);var chunk__16660_16678 = null;var count__16661_16679 = 0;var i__16662_16680 = 0;while(true){
if((i__16662_16680 < count__16661_16679))
{var c_16681 = cljs.core._nth.call(null,chunk__16660_16678,i__16662_16680);dommy.attrs.add_class_BANG_.call(null,n,c_16681);
{
var G__16682 = seq__16659_16677;
var G__16683 = chunk__16660_16678;
var G__16684 = count__16661_16679;
var G__16685 = (i__16662_16680 + 1);
seq__16659_16677 = G__16682;
chunk__16660_16678 = G__16683;
count__16661_16679 = G__16684;
i__16662_16680 = G__16685;
continue;
}
} else
{var temp__4092__auto___16686 = cljs.core.seq.call(null,seq__16659_16677);if(temp__4092__auto___16686)
{var seq__16659_16687__$1 = temp__4092__auto___16686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16659_16687__$1))
{var c__3844__auto___16688 = cljs.core.chunk_first.call(null,seq__16659_16687__$1);{
var G__16689 = cljs.core.chunk_rest.call(null,seq__16659_16687__$1);
var G__16690 = c__3844__auto___16688;
var G__16691 = cljs.core.count.call(null,c__3844__auto___16688);
var G__16692 = 0;
seq__16659_16677 = G__16689;
chunk__16660_16678 = G__16690;
count__16661_16679 = G__16691;
i__16662_16680 = G__16692;
continue;
}
} else
{var c_16693 = cljs.core.first.call(null,seq__16659_16687__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16693);
{
var G__16694 = cljs.core.next.call(null,seq__16659_16687__$1);
var G__16695 = null;
var G__16696 = 0;
var G__16697 = 0;
seq__16659_16677 = G__16694;
chunk__16660_16678 = G__16695;
count__16661_16679 = G__16696;
i__16662_16680 = G__16697;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16658_16676))
{dommy.attrs.add_class_BANG_.call(null,n,v_16675);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16674,v_16675);
} else
{}
}
}
{
var G__16698 = seq__16653_16669;
var G__16699 = chunk__16654_16670;
var G__16700 = count__16655_16671;
var G__16701 = (i__16656_16672 + 1);
seq__16653_16669 = G__16698;
chunk__16654_16670 = G__16699;
count__16655_16671 = G__16700;
i__16656_16672 = G__16701;
continue;
}
} else
{var temp__4092__auto___16702 = cljs.core.seq.call(null,seq__16653_16669);if(temp__4092__auto___16702)
{var seq__16653_16703__$1 = temp__4092__auto___16702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16653_16703__$1))
{var c__3844__auto___16704 = cljs.core.chunk_first.call(null,seq__16653_16703__$1);{
var G__16705 = cljs.core.chunk_rest.call(null,seq__16653_16703__$1);
var G__16706 = c__3844__auto___16704;
var G__16707 = cljs.core.count.call(null,c__3844__auto___16704);
var G__16708 = 0;
seq__16653_16669 = G__16705;
chunk__16654_16670 = G__16706;
count__16655_16671 = G__16707;
i__16656_16672 = G__16708;
continue;
}
} else
{var vec__16663_16709 = cljs.core.first.call(null,seq__16653_16703__$1);var k_16710 = cljs.core.nth.call(null,vec__16663_16709,0,null);var v_16711 = cljs.core.nth.call(null,vec__16663_16709,1,null);var G__16664_16712 = k_16710;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16664_16712))
{var seq__16665_16713 = cljs.core.seq.call(null,v_16711);var chunk__16666_16714 = null;var count__16667_16715 = 0;var i__16668_16716 = 0;while(true){
if((i__16668_16716 < count__16667_16715))
{var c_16717 = cljs.core._nth.call(null,chunk__16666_16714,i__16668_16716);dommy.attrs.add_class_BANG_.call(null,n,c_16717);
{
var G__16718 = seq__16665_16713;
var G__16719 = chunk__16666_16714;
var G__16720 = count__16667_16715;
var G__16721 = (i__16668_16716 + 1);
seq__16665_16713 = G__16718;
chunk__16666_16714 = G__16719;
count__16667_16715 = G__16720;
i__16668_16716 = G__16721;
continue;
}
} else
{var temp__4092__auto___16722__$1 = cljs.core.seq.call(null,seq__16665_16713);if(temp__4092__auto___16722__$1)
{var seq__16665_16723__$1 = temp__4092__auto___16722__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16665_16723__$1))
{var c__3844__auto___16724 = cljs.core.chunk_first.call(null,seq__16665_16723__$1);{
var G__16725 = cljs.core.chunk_rest.call(null,seq__16665_16723__$1);
var G__16726 = c__3844__auto___16724;
var G__16727 = cljs.core.count.call(null,c__3844__auto___16724);
var G__16728 = 0;
seq__16665_16713 = G__16725;
chunk__16666_16714 = G__16726;
count__16667_16715 = G__16727;
i__16668_16716 = G__16728;
continue;
}
} else
{var c_16729 = cljs.core.first.call(null,seq__16665_16723__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16729);
{
var G__16730 = cljs.core.next.call(null,seq__16665_16723__$1);
var G__16731 = null;
var G__16732 = 0;
var G__16733 = 0;
seq__16665_16713 = G__16730;
chunk__16666_16714 = G__16731;
count__16667_16715 = G__16732;
i__16668_16716 = G__16733;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16664_16712))
{dommy.attrs.add_class_BANG_.call(null,n,v_16711);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16710,v_16711);
} else
{}
}
}
{
var G__16734 = cljs.core.next.call(null,seq__16653_16703__$1);
var G__16735 = null;
var G__16736 = 0;
var G__16737 = 0;
seq__16653_16669 = G__16734;
chunk__16654_16670 = G__16735;
count__16655_16671 = G__16736;
i__16656_16672 = G__16737;
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
}catch (e16738){if((e16738 instanceof ReferenceError))
{var __16739 = e16738;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16738;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16741 = data;if(G__16741)
{var bit__3746__auto__ = null;if(cljs.core.truth_((function (){var or__3128__auto__ = bit__3746__auto__;if(cljs.core.truth_(or__3128__auto__))
{return or__3128__auto__;
} else
{return G__16741.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16741.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16741);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16741);
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