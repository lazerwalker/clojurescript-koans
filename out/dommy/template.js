// Compiled by ClojureScript 1.7.228 {}
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.attrs');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);

/**
 * @interface
 */
dommy.template.PElement = function(){};

/**
 * return the element representation of this
 */
dommy.template._elem = (function dommy$template$_elem(this$){
if((!((this$ == null))) && (!((this$.dommy$template$PElement$_elem$arity$1 == null)))){
return this$.dommy$template$PElement$_elem$arity$1(this$);
} else {
var x__6797__auto__ = (((this$ == null))?null:this$);
var m__6798__auto__ = (dommy.template._elem[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return m__6798__auto__.call(null,this$);
} else {
var m__6798__auto____$1 = (dommy.template._elem["_"]);
if(!((m__6798__auto____$1 == null))){
return m__6798__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
}
});

/**
 * index of css character (#,.) in base-element. bottleneck
 */
dommy.template.next_css_index = (function dommy$template$next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < (0))){
return Math.max(id_idx,class_idx);
} else {
return idx;
}
});
/**
 * dom element from css-style keyword like :a.class1 or :span#my-span.class
 */
dommy.template.base_element = (function dommy$template$base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,(0));
var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));
var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));
if((base_idx >= (0))){
var str_7769 = node_str.substring(base_idx);
while(true){
var next_idx_7770 = dommy.template.next_css_index.call(null,str_7769,(1));
var frag_7771 = (((next_idx_7770 >= (0)))?str_7769.substring((0),next_idx_7770):str_7769);
var G__7768_7772 = frag_7771.charAt((0));
switch (G__7768_7772) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_7771.substring((1)));

break;
case "#":
node.setAttribute("id",frag_7771.substring((1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_7771.charAt((0)))].join('')));

}

if((next_idx_7770 >= (0))){
var G__7774 = str_7769.substring(next_idx_7770);
str_7769 = G__7774;
continue;
} else {
}
break;
}
} else {
}

return node;
});
dommy.template.throw_unable_to_make_node = (function dommy$template$throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
 * take data and return a document fragment
 */
dommy.template.__GT_document_fragment = (function dommy$template$__GT_document_fragment(var_args){
var args7775 = [];
var len__7200__auto___7783 = arguments.length;
var i__7201__auto___7784 = (0);
while(true){
if((i__7201__auto___7784 < len__7200__auto___7783)){
args7775.push((arguments[i__7201__auto___7784]));

var G__7785 = (i__7201__auto___7784 + (1));
i__7201__auto___7784 = G__7785;
continue;
} else {
}
break;
}

var G__7777 = args7775.length;
switch (G__7777) {
case 1:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7775.length)].join('')));

}
});

dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = (function (data){
return dommy.template.__GT_document_fragment.call(null,document.createDocumentFragment(),data);
});

dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = (function (result_frag,data){
if(((!((data == null)))?(((false) || (data.dommy$template$PElement$))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data))){
result_frag.appendChild(dommy.template._elem.call(null,data));

return result_frag;
} else {
if(cljs.core.seq_QMARK_.call(null,data)){
var seq__7779_7787 = cljs.core.seq.call(null,data);
var chunk__7780_7788 = null;
var count__7781_7789 = (0);
var i__7782_7790 = (0);
while(true){
if((i__7782_7790 < count__7781_7789)){
var child_7791 = cljs.core._nth.call(null,chunk__7780_7788,i__7782_7790);
dommy.template.__GT_document_fragment.call(null,result_frag,child_7791);

var G__7792 = seq__7779_7787;
var G__7793 = chunk__7780_7788;
var G__7794 = count__7781_7789;
var G__7795 = (i__7782_7790 + (1));
seq__7779_7787 = G__7792;
chunk__7780_7788 = G__7793;
count__7781_7789 = G__7794;
i__7782_7790 = G__7795;
continue;
} else {
var temp__4425__auto___7796 = cljs.core.seq.call(null,seq__7779_7787);
if(temp__4425__auto___7796){
var seq__7779_7797__$1 = temp__4425__auto___7796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7779_7797__$1)){
var c__6945__auto___7798 = cljs.core.chunk_first.call(null,seq__7779_7797__$1);
var G__7799 = cljs.core.chunk_rest.call(null,seq__7779_7797__$1);
var G__7800 = c__6945__auto___7798;
var G__7801 = cljs.core.count.call(null,c__6945__auto___7798);
var G__7802 = (0);
seq__7779_7787 = G__7799;
chunk__7780_7788 = G__7800;
count__7781_7789 = G__7801;
i__7782_7790 = G__7802;
continue;
} else {
var child_7803 = cljs.core.first.call(null,seq__7779_7797__$1);
dommy.template.__GT_document_fragment.call(null,result_frag,child_7803);

var G__7804 = cljs.core.next.call(null,seq__7779_7797__$1);
var G__7805 = null;
var G__7806 = (0);
var G__7807 = (0);
seq__7779_7787 = G__7804;
chunk__7780_7788 = G__7805;
count__7781_7789 = G__7806;
i__7782_7790 = G__7807;
continue;
}
} else {
}
}
break;
}

return result_frag;
} else {
if((data == null)){
return result_frag;
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);

}
}
}
});

dommy.template.__GT_document_fragment.cljs$lang$maxFixedArity = 2;
/**
 * take data and return DOM node if it satisfies PElement and tries to
 * make a document fragment otherwise
 */
dommy.template.__GT_node_like = (function dommy$template$__GT_node_like(data){
if(((!((data == null)))?(((false) || (data.dommy$template$PElement$))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data))){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
 * element with either attrs or nested children [:div [:span "Hello"]]
 */
dommy.template.compound_element = (function dommy$template$compound_element(p__7810){
var vec__7830 = p__7810;
var tag_name = cljs.core.nth.call(null,vec__7830,(0),null);
var maybe_attrs = cljs.core.nth.call(null,vec__7830,(1),null);
var children = cljs.core.nthnext.call(null,vec__7830,(2));
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!(((!((maybe_attrs == null)))?(((false) || (maybe_attrs.dommy$template$PElement$))?true:(((!maybe_attrs.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,maybe_attrs):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,maybe_attrs)))))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__7833_7849 = cljs.core.seq.call(null,attrs);
var chunk__7834_7850 = null;
var count__7835_7851 = (0);
var i__7836_7852 = (0);
while(true){
if((i__7836_7852 < count__7835_7851)){
var vec__7837_7853 = cljs.core._nth.call(null,chunk__7834_7850,i__7836_7852);
var k_7854 = cljs.core.nth.call(null,vec__7837_7853,(0),null);
var v_7855 = cljs.core.nth.call(null,vec__7837_7853,(1),null);
var G__7838_7856 = (((k_7854 instanceof cljs.core.Keyword))?k_7854.fqn:null);
switch (G__7838_7856) {
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_7855);

break;
case "classes":
var seq__7839_7858 = cljs.core.seq.call(null,v_7855);
var chunk__7840_7859 = null;
var count__7841_7860 = (0);
var i__7842_7861 = (0);
while(true){
if((i__7842_7861 < count__7841_7860)){
var c_7862 = cljs.core._nth.call(null,chunk__7840_7859,i__7842_7861);
dommy.attrs.add_class_BANG_.call(null,n,c_7862);

var G__7863 = seq__7839_7858;
var G__7864 = chunk__7840_7859;
var G__7865 = count__7841_7860;
var G__7866 = (i__7842_7861 + (1));
seq__7839_7858 = G__7863;
chunk__7840_7859 = G__7864;
count__7841_7860 = G__7865;
i__7842_7861 = G__7866;
continue;
} else {
var temp__4425__auto___7867 = cljs.core.seq.call(null,seq__7839_7858);
if(temp__4425__auto___7867){
var seq__7839_7868__$1 = temp__4425__auto___7867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7839_7868__$1)){
var c__6945__auto___7869 = cljs.core.chunk_first.call(null,seq__7839_7868__$1);
var G__7870 = cljs.core.chunk_rest.call(null,seq__7839_7868__$1);
var G__7871 = c__6945__auto___7869;
var G__7872 = cljs.core.count.call(null,c__6945__auto___7869);
var G__7873 = (0);
seq__7839_7858 = G__7870;
chunk__7840_7859 = G__7871;
count__7841_7860 = G__7872;
i__7842_7861 = G__7873;
continue;
} else {
var c_7874 = cljs.core.first.call(null,seq__7839_7868__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_7874);

var G__7875 = cljs.core.next.call(null,seq__7839_7868__$1);
var G__7876 = null;
var G__7877 = (0);
var G__7878 = (0);
seq__7839_7858 = G__7875;
chunk__7840_7859 = G__7876;
count__7841_7860 = G__7877;
i__7842_7861 = G__7878;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7854,v_7855);

}

var G__7879 = seq__7833_7849;
var G__7880 = chunk__7834_7850;
var G__7881 = count__7835_7851;
var G__7882 = (i__7836_7852 + (1));
seq__7833_7849 = G__7879;
chunk__7834_7850 = G__7880;
count__7835_7851 = G__7881;
i__7836_7852 = G__7882;
continue;
} else {
var temp__4425__auto___7883 = cljs.core.seq.call(null,seq__7833_7849);
if(temp__4425__auto___7883){
var seq__7833_7884__$1 = temp__4425__auto___7883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7833_7884__$1)){
var c__6945__auto___7885 = cljs.core.chunk_first.call(null,seq__7833_7884__$1);
var G__7886 = cljs.core.chunk_rest.call(null,seq__7833_7884__$1);
var G__7887 = c__6945__auto___7885;
var G__7888 = cljs.core.count.call(null,c__6945__auto___7885);
var G__7889 = (0);
seq__7833_7849 = G__7886;
chunk__7834_7850 = G__7887;
count__7835_7851 = G__7888;
i__7836_7852 = G__7889;
continue;
} else {
var vec__7843_7890 = cljs.core.first.call(null,seq__7833_7884__$1);
var k_7891 = cljs.core.nth.call(null,vec__7843_7890,(0),null);
var v_7892 = cljs.core.nth.call(null,vec__7843_7890,(1),null);
var G__7844_7893 = (((k_7891 instanceof cljs.core.Keyword))?k_7891.fqn:null);
switch (G__7844_7893) {
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_7892);

break;
case "classes":
var seq__7845_7895 = cljs.core.seq.call(null,v_7892);
var chunk__7846_7896 = null;
var count__7847_7897 = (0);
var i__7848_7898 = (0);
while(true){
if((i__7848_7898 < count__7847_7897)){
var c_7899 = cljs.core._nth.call(null,chunk__7846_7896,i__7848_7898);
dommy.attrs.add_class_BANG_.call(null,n,c_7899);

var G__7900 = seq__7845_7895;
var G__7901 = chunk__7846_7896;
var G__7902 = count__7847_7897;
var G__7903 = (i__7848_7898 + (1));
seq__7845_7895 = G__7900;
chunk__7846_7896 = G__7901;
count__7847_7897 = G__7902;
i__7848_7898 = G__7903;
continue;
} else {
var temp__4425__auto___7904__$1 = cljs.core.seq.call(null,seq__7845_7895);
if(temp__4425__auto___7904__$1){
var seq__7845_7905__$1 = temp__4425__auto___7904__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845_7905__$1)){
var c__6945__auto___7906 = cljs.core.chunk_first.call(null,seq__7845_7905__$1);
var G__7907 = cljs.core.chunk_rest.call(null,seq__7845_7905__$1);
var G__7908 = c__6945__auto___7906;
var G__7909 = cljs.core.count.call(null,c__6945__auto___7906);
var G__7910 = (0);
seq__7845_7895 = G__7907;
chunk__7846_7896 = G__7908;
count__7847_7897 = G__7909;
i__7848_7898 = G__7910;
continue;
} else {
var c_7911 = cljs.core.first.call(null,seq__7845_7905__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_7911);

var G__7912 = cljs.core.next.call(null,seq__7845_7905__$1);
var G__7913 = null;
var G__7914 = (0);
var G__7915 = (0);
seq__7845_7895 = G__7912;
chunk__7846_7896 = G__7913;
count__7847_7897 = G__7914;
i__7848_7898 = G__7915;
continue;
}
} else {
}
}
break;
}

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7891,v_7892);

}

var G__7916 = cljs.core.next.call(null,seq__7833_7884__$1);
var G__7917 = null;
var G__7918 = (0);
var G__7919 = (0);
seq__7833_7849 = G__7916;
chunk__7834_7850 = G__7917;
count__7835_7851 = G__7918;
i__7836_7852 = G__7919;
continue;
}
} else {
}
}
break;
}

n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));

return n;
});
HTMLElement.prototype.dommy$template$PElement$ = true;

HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

DocumentFragment.prototype.dommy$template$PElement$ = true;

DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Text.prototype.dommy$template$PElement$ = true;

Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Document.prototype.dommy$template$PElement$ = true;

Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

SVGElement.prototype.dommy$template$PElement$ = true;

SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;

cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return dommy.template.compound_element.call(null,this$__$1);
});

(dommy.template.PElement["number"] = true);

(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));

(dommy.template.PElement["string"] = true);

(dommy.template._elem["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return dommy.template.base_element.call(null,this$);
} else {
return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
try{Window.prototype.dommy$template$PElement$ = true;

Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
}catch (e7920){if((e7920 instanceof ReferenceError)){
var __7921 = e7920;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else {
throw e7920;

}
}dommy.template.node = (function dommy$template$node(data){
if(((!((data == null)))?(((false) || (data.dommy$template$PElement$))?true:(((!data.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data):false)):cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,data))){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function dommy$template$html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);

return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map