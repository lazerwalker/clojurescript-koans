// Compiled by ClojureScript 1.7.228 {}
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * does class-name string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.attrs.class_match_QMARK_ = (function dommy$attrs$class_match_QMARK_(class_name,class$,idx){
var and__6130__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));
if(and__6130__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else {
return null;
}
} else {
return and__6130__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.attrs.class_index = (function dommy$attrs$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__7460 = (i + class$.length);
start_from = G__7460;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Does an HTML element have a class. Uses Element::classList if
 * available and otherwise does fast parse of className string
 */
dommy.attrs.has_class_QMARK_ = (function dommy$attrs$has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4423__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(class$__$1);
} else {
var temp__4425__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * add class to element
 */
dommy.attrs.add_class_BANG_ = (function dommy$attrs$add_class_BANG_(var_args){
var args7461 = [];
var len__7200__auto___7479 = arguments.length;
var i__7201__auto___7480 = (0);
while(true){
if((i__7201__auto___7480 < len__7200__auto___7479)){
args7461.push((arguments[i__7201__auto___7480]));

var G__7481 = (i__7201__auto___7480 + (1));
i__7201__auto___7480 = G__7481;
continue;
} else {
}
break;
}

var G__7466 = args7461.length;
switch (G__7466) {
case 2:
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7219__auto__ = (new cljs.core.IndexedSeq(args7461.slice((2)),(0)));
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7219__auto__);

}
});

dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___7483 = elem__$1.classList;
if(cljs.core.truth_(temp__4423__auto___7483)){
var class_list_7484 = temp__4423__auto___7483;
var seq__7467_7485 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__7468_7486 = null;
var count__7469_7487 = (0);
var i__7470_7488 = (0);
while(true){
if((i__7470_7488 < count__7469_7487)){
var class_7489 = cljs.core._nth.call(null,chunk__7468_7486,i__7470_7488);
class_list_7484.add(class_7489);

var G__7490 = seq__7467_7485;
var G__7491 = chunk__7468_7486;
var G__7492 = count__7469_7487;
var G__7493 = (i__7470_7488 + (1));
seq__7467_7485 = G__7490;
chunk__7468_7486 = G__7491;
count__7469_7487 = G__7492;
i__7470_7488 = G__7493;
continue;
} else {
var temp__4425__auto___7494 = cljs.core.seq.call(null,seq__7467_7485);
if(temp__4425__auto___7494){
var seq__7467_7495__$1 = temp__4425__auto___7494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7467_7495__$1)){
var c__6945__auto___7496 = cljs.core.chunk_first.call(null,seq__7467_7495__$1);
var G__7497 = cljs.core.chunk_rest.call(null,seq__7467_7495__$1);
var G__7498 = c__6945__auto___7496;
var G__7499 = cljs.core.count.call(null,c__6945__auto___7496);
var G__7500 = (0);
seq__7467_7485 = G__7497;
chunk__7468_7486 = G__7498;
count__7469_7487 = G__7499;
i__7470_7488 = G__7500;
continue;
} else {
var class_7501 = cljs.core.first.call(null,seq__7467_7495__$1);
class_list_7484.add(class_7501);

var G__7502 = cljs.core.next.call(null,seq__7467_7495__$1);
var G__7503 = null;
var G__7504 = (0);
var G__7505 = (0);
seq__7467_7485 = G__7502;
chunk__7468_7486 = G__7503;
count__7469_7487 = G__7504;
i__7470_7488 = G__7505;
continue;
}
} else {
}
}
break;
}
} else {
var class_name_7506 = elem__$1.className;
var seq__7471_7507 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__7472_7508 = null;
var count__7473_7509 = (0);
var i__7474_7510 = (0);
while(true){
if((i__7474_7510 < count__7473_7509)){
var class_7511 = cljs.core._nth.call(null,chunk__7472_7508,i__7474_7510);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7506,class_7511))){
} else {
elem__$1.className = (((class_name_7506 === ""))?class_7511:[cljs.core.str(class_name_7506),cljs.core.str(" "),cljs.core.str(class_7511)].join(''));
}

var G__7512 = seq__7471_7507;
var G__7513 = chunk__7472_7508;
var G__7514 = count__7473_7509;
var G__7515 = (i__7474_7510 + (1));
seq__7471_7507 = G__7512;
chunk__7472_7508 = G__7513;
count__7473_7509 = G__7514;
i__7474_7510 = G__7515;
continue;
} else {
var temp__4425__auto___7516 = cljs.core.seq.call(null,seq__7471_7507);
if(temp__4425__auto___7516){
var seq__7471_7517__$1 = temp__4425__auto___7516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7471_7517__$1)){
var c__6945__auto___7518 = cljs.core.chunk_first.call(null,seq__7471_7517__$1);
var G__7519 = cljs.core.chunk_rest.call(null,seq__7471_7517__$1);
var G__7520 = c__6945__auto___7518;
var G__7521 = cljs.core.count.call(null,c__6945__auto___7518);
var G__7522 = (0);
seq__7471_7507 = G__7519;
chunk__7472_7508 = G__7520;
count__7473_7509 = G__7521;
i__7474_7510 = G__7522;
continue;
} else {
var class_7523 = cljs.core.first.call(null,seq__7471_7517__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7506,class_7523))){
} else {
elem__$1.className = (((class_name_7506 === ""))?class_7523:[cljs.core.str(class_name_7506),cljs.core.str(" "),cljs.core.str(class_7523)].join(''));
}

var G__7524 = cljs.core.next.call(null,seq__7471_7517__$1);
var G__7525 = null;
var G__7526 = (0);
var G__7527 = (0);
seq__7471_7507 = G__7524;
chunk__7472_7508 = G__7525;
count__7473_7509 = G__7526;
i__7474_7510 = G__7527;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem__$1;
});

dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__7475_7528 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__7476_7529 = null;
var count__7477_7530 = (0);
var i__7478_7531 = (0);
while(true){
if((i__7478_7531 < count__7477_7530)){
var c_7532 = cljs.core._nth.call(null,chunk__7476_7529,i__7478_7531);
dommy.attrs.add_class_BANG_.call(null,elem__$1,c_7532);

var G__7533 = seq__7475_7528;
var G__7534 = chunk__7476_7529;
var G__7535 = count__7477_7530;
var G__7536 = (i__7478_7531 + (1));
seq__7475_7528 = G__7533;
chunk__7476_7529 = G__7534;
count__7477_7530 = G__7535;
i__7478_7531 = G__7536;
continue;
} else {
var temp__4425__auto___7537 = cljs.core.seq.call(null,seq__7475_7528);
if(temp__4425__auto___7537){
var seq__7475_7538__$1 = temp__4425__auto___7537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7475_7538__$1)){
var c__6945__auto___7539 = cljs.core.chunk_first.call(null,seq__7475_7538__$1);
var G__7540 = cljs.core.chunk_rest.call(null,seq__7475_7538__$1);
var G__7541 = c__6945__auto___7539;
var G__7542 = cljs.core.count.call(null,c__6945__auto___7539);
var G__7543 = (0);
seq__7475_7528 = G__7540;
chunk__7476_7529 = G__7541;
count__7477_7530 = G__7542;
i__7478_7531 = G__7543;
continue;
} else {
var c_7544 = cljs.core.first.call(null,seq__7475_7538__$1);
dommy.attrs.add_class_BANG_.call(null,elem__$1,c_7544);

var G__7545 = cljs.core.next.call(null,seq__7475_7538__$1);
var G__7546 = null;
var G__7547 = (0);
var G__7548 = (0);
seq__7475_7528 = G__7545;
chunk__7476_7529 = G__7546;
count__7477_7530 = G__7547;
i__7478_7531 = G__7548;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.add_class_BANG_.cljs$lang$applyTo = (function (seq7462){
var G__7463 = cljs.core.first.call(null,seq7462);
var seq7462__$1 = cljs.core.next.call(null,seq7462);
var G__7464 = cljs.core.first.call(null,seq7462__$1);
var seq7462__$2 = cljs.core.next.call(null,seq7462__$1);
return dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7463,G__7464,seq7462__$2);
});

dommy.attrs.add_class_BANG_.cljs$lang$maxFixedArity = (2);
dommy.attrs.remove_class_str = (function dommy$attrs$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4423__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
var G__7549 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__7549;
continue;
} else {
return class_name;
}
break;
}
});
/**
 * remove class from and returns `elem`
 */
dommy.attrs.remove_class_BANG_ = (function dommy$attrs$remove_class_BANG_(var_args){
var args7550 = [];
var len__7200__auto___7560 = arguments.length;
var i__7201__auto___7561 = (0);
while(true){
if((i__7201__auto___7561 < len__7200__auto___7560)){
args7550.push((arguments[i__7201__auto___7561]));

var G__7562 = (i__7201__auto___7561 + (1));
i__7201__auto___7561 = G__7562;
continue;
} else {
}
break;
}

var G__7555 = args7550.length;
switch (G__7555) {
case 2:
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7219__auto__ = (new cljs.core.IndexedSeq(args7550.slice((2)),(0)));
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7219__auto__);

}
});

dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4423__auto___7564 = elem__$1.classList;
if(cljs.core.truth_(temp__4423__auto___7564)){
var class_list_7565 = temp__4423__auto___7564;
class_list_7565.remove(class$__$1);
} else {
var class_name_7566 = elem__$1.className;
var new_class_name_7567 = dommy.attrs.remove_class_str.call(null,class_name_7566,class$__$1);
if((class_name_7566 === new_class_name_7567)){
} else {
elem__$1.className = new_class_name_7567;
}
}

return elem__$1;
});

dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__7556 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__7557 = null;
var count__7558 = (0);
var i__7559 = (0);
while(true){
if((i__7559 < count__7558)){
var c = cljs.core._nth.call(null,chunk__7557,i__7559);
dommy.attrs.remove_class_BANG_.call(null,elem__$1,c);

var G__7568 = seq__7556;
var G__7569 = chunk__7557;
var G__7570 = count__7558;
var G__7571 = (i__7559 + (1));
seq__7556 = G__7568;
chunk__7557 = G__7569;
count__7558 = G__7570;
i__7559 = G__7571;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7556);
if(temp__4425__auto__){
var seq__7556__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7556__$1)){
var c__6945__auto__ = cljs.core.chunk_first.call(null,seq__7556__$1);
var G__7572 = cljs.core.chunk_rest.call(null,seq__7556__$1);
var G__7573 = c__6945__auto__;
var G__7574 = cljs.core.count.call(null,c__6945__auto__);
var G__7575 = (0);
seq__7556 = G__7572;
chunk__7557 = G__7573;
count__7558 = G__7574;
i__7559 = G__7575;
continue;
} else {
var c = cljs.core.first.call(null,seq__7556__$1);
dommy.attrs.remove_class_BANG_.call(null,elem__$1,c);

var G__7576 = cljs.core.next.call(null,seq__7556__$1);
var G__7577 = null;
var G__7578 = (0);
var G__7579 = (0);
seq__7556 = G__7576;
chunk__7557 = G__7577;
count__7558 = G__7578;
i__7559 = G__7579;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.attrs.remove_class_BANG_.cljs$lang$applyTo = (function (seq7551){
var G__7552 = cljs.core.first.call(null,seq7551);
var seq7551__$1 = cljs.core.next.call(null,seq7551);
var G__7553 = cljs.core.first.call(null,seq7551__$1);
var seq7551__$2 = cljs.core.next.call(null,seq7551__$1);
return dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7552,G__7553,seq7551__$2);
});

dommy.attrs.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.attrs.toggle_class_BANG_ = (function dommy$attrs$toggle_class_BANG_(var_args){
var args7580 = [];
var len__7200__auto___7583 = arguments.length;
var i__7201__auto___7584 = (0);
while(true){
if((i__7201__auto___7584 < len__7200__auto___7583)){
args7580.push((arguments[i__7201__auto___7584]));

var G__7585 = (i__7201__auto___7584 + (1));
i__7201__auto___7584 = G__7585;
continue;
} else {
}
break;
}

var G__7582 = args7580.length;
switch (G__7582) {
case 2:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7580.length)].join('')));

}
});

dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4423__auto___7587 = elem__$1.classList;
if(cljs.core.truth_(temp__4423__auto___7587)){
var class_list_7588 = temp__4423__auto___7587;
class_list_7588.toggle(class$__$1);
} else {
dommy.attrs.toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}

return elem__$1;
});

dommy.attrs.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else {
dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}

return elem__$1;
});

dommy.attrs.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
dommy.attrs.style_str = (function dommy$attrs$style_str(x){
if(typeof x === 'string'){
return x;
} else {
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7591){
var vec__7592 = p__7591;
var k = cljs.core.nth.call(null,vec__7592,(0),null);
var v = cljs.core.nth.call(null,vec__7592,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
dommy.attrs.set_style_BANG_ = (function dommy$attrs$set_style_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___7601 = arguments.length;
var i__7201__auto___7602 = (0);
while(true){
if((i__7201__auto___7602 < len__7200__auto___7601)){
args__7207__auto__.push((arguments[i__7201__auto___7602]));

var G__7603 = (i__7201__auto___7602 + (1));
i__7201__auto___7602 = G__7603;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__7595_7604 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7596_7605 = null;
var count__7597_7606 = (0);
var i__7598_7607 = (0);
while(true){
if((i__7598_7607 < count__7597_7606)){
var vec__7599_7608 = cljs.core._nth.call(null,chunk__7596_7605,i__7598_7607);
var k_7609 = cljs.core.nth.call(null,vec__7599_7608,(0),null);
var v_7610 = cljs.core.nth.call(null,vec__7599_7608,(1),null);
(style[cljs.core.name.call(null,k_7609)] = v_7610);

var G__7611 = seq__7595_7604;
var G__7612 = chunk__7596_7605;
var G__7613 = count__7597_7606;
var G__7614 = (i__7598_7607 + (1));
seq__7595_7604 = G__7611;
chunk__7596_7605 = G__7612;
count__7597_7606 = G__7613;
i__7598_7607 = G__7614;
continue;
} else {
var temp__4425__auto___7615 = cljs.core.seq.call(null,seq__7595_7604);
if(temp__4425__auto___7615){
var seq__7595_7616__$1 = temp__4425__auto___7615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7595_7616__$1)){
var c__6945__auto___7617 = cljs.core.chunk_first.call(null,seq__7595_7616__$1);
var G__7618 = cljs.core.chunk_rest.call(null,seq__7595_7616__$1);
var G__7619 = c__6945__auto___7617;
var G__7620 = cljs.core.count.call(null,c__6945__auto___7617);
var G__7621 = (0);
seq__7595_7604 = G__7618;
chunk__7596_7605 = G__7619;
count__7597_7606 = G__7620;
i__7598_7607 = G__7621;
continue;
} else {
var vec__7600_7622 = cljs.core.first.call(null,seq__7595_7616__$1);
var k_7623 = cljs.core.nth.call(null,vec__7600_7622,(0),null);
var v_7624 = cljs.core.nth.call(null,vec__7600_7622,(1),null);
(style[cljs.core.name.call(null,k_7623)] = v_7624);

var G__7625 = cljs.core.next.call(null,seq__7595_7616__$1);
var G__7626 = null;
var G__7627 = (0);
var G__7628 = (0);
seq__7595_7604 = G__7625;
chunk__7596_7605 = G__7626;
count__7597_7606 = G__7627;
i__7598_7607 = G__7628;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.attrs.set_style_BANG_.cljs$lang$applyTo = (function (seq7593){
var G__7594 = cljs.core.first.call(null,seq7593);
var seq7593__$1 = cljs.core.next.call(null,seq7593);
return dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7594,seq7593__$1);
});
dommy.attrs.style = (function dommy$attrs$style(elem,k){
if(cljs.core.truth_(k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null)))].join('')));
}

return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
dommy.attrs.set_px_BANG_ = (function dommy$attrs$set_px_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___7637 = arguments.length;
var i__7201__auto___7638 = (0);
while(true){
if((i__7201__auto___7638 < len__7200__auto___7637)){
args__7207__auto__.push((arguments[i__7201__auto___7638]));

var G__7639 = (i__7201__auto___7638 + (1));
i__7201__auto___7638 = G__7639;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__7631_7640 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7632_7641 = null;
var count__7633_7642 = (0);
var i__7634_7643 = (0);
while(true){
if((i__7634_7643 < count__7633_7642)){
var vec__7635_7644 = cljs.core._nth.call(null,chunk__7632_7641,i__7634_7643);
var k_7645 = cljs.core.nth.call(null,vec__7635_7644,(0),null);
var v_7646 = cljs.core.nth.call(null,vec__7635_7644,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7645,[cljs.core.str(v_7646),cljs.core.str("px")].join(''));

var G__7647 = seq__7631_7640;
var G__7648 = chunk__7632_7641;
var G__7649 = count__7633_7642;
var G__7650 = (i__7634_7643 + (1));
seq__7631_7640 = G__7647;
chunk__7632_7641 = G__7648;
count__7633_7642 = G__7649;
i__7634_7643 = G__7650;
continue;
} else {
var temp__4425__auto___7651 = cljs.core.seq.call(null,seq__7631_7640);
if(temp__4425__auto___7651){
var seq__7631_7652__$1 = temp__4425__auto___7651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7631_7652__$1)){
var c__6945__auto___7653 = cljs.core.chunk_first.call(null,seq__7631_7652__$1);
var G__7654 = cljs.core.chunk_rest.call(null,seq__7631_7652__$1);
var G__7655 = c__6945__auto___7653;
var G__7656 = cljs.core.count.call(null,c__6945__auto___7653);
var G__7657 = (0);
seq__7631_7640 = G__7654;
chunk__7632_7641 = G__7655;
count__7633_7642 = G__7656;
i__7634_7643 = G__7657;
continue;
} else {
var vec__7636_7658 = cljs.core.first.call(null,seq__7631_7652__$1);
var k_7659 = cljs.core.nth.call(null,vec__7636_7658,(0),null);
var v_7660 = cljs.core.nth.call(null,vec__7636_7658,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7659,[cljs.core.str(v_7660),cljs.core.str("px")].join(''));

var G__7661 = cljs.core.next.call(null,seq__7631_7652__$1);
var G__7662 = null;
var G__7663 = (0);
var G__7664 = (0);
seq__7631_7640 = G__7661;
chunk__7632_7641 = G__7662;
count__7633_7642 = G__7663;
i__7634_7643 = G__7664;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.attrs.set_px_BANG_.cljs$lang$applyTo = (function (seq7629){
var G__7630 = cljs.core.first.call(null,seq7629);
var seq7629__$1 = cljs.core.next.call(null,seq7629);
return dommy.attrs.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7630,seq7629__$1);
});
dommy.attrs.px = (function dommy$attrs$px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to "true":
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.attrs.set_attr_BANG_ = (function dommy$attrs$set_attr_BANG_(var_args){
var args7665 = [];
var len__7200__auto___7680 = arguments.length;
var i__7201__auto___7681 = (0);
while(true){
if((i__7201__auto___7681 < len__7200__auto___7680)){
args7665.push((arguments[i__7201__auto___7681]));

var G__7682 = (i__7201__auto___7681 + (1));
i__7201__auto___7681 = G__7682;
continue;
} else {
}
break;
}

var G__7671 = args7665.length;
switch (G__7671) {
case 2:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7219__auto__ = (new cljs.core.IndexedSeq(args7665.slice((3)),(0)));
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7219__auto__);

}
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__7672 = dommy.template.__GT_node_like.call(null,elem);
(G__7672[cljs.core.name.call(null,k)] = v);

return G__7672;
} else {
var G__7673 = dommy.template.__GT_node_like.call(null,elem);
G__7673.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));

return G__7673;
}
} else {
return null;
}
});

dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__7674_7684 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__7675_7685 = null;
var count__7676_7686 = (0);
var i__7677_7687 = (0);
while(true){
if((i__7677_7687 < count__7676_7686)){
var vec__7678_7688 = cljs.core._nth.call(null,chunk__7675_7685,i__7677_7687);
var k_7689__$1 = cljs.core.nth.call(null,vec__7678_7688,(0),null);
var v_7690__$1 = cljs.core.nth.call(null,vec__7678_7688,(1),null);
dommy.attrs.set_attr_BANG_.call(null,elem__$1,k_7689__$1,v_7690__$1);

var G__7691 = seq__7674_7684;
var G__7692 = chunk__7675_7685;
var G__7693 = count__7676_7686;
var G__7694 = (i__7677_7687 + (1));
seq__7674_7684 = G__7691;
chunk__7675_7685 = G__7692;
count__7676_7686 = G__7693;
i__7677_7687 = G__7694;
continue;
} else {
var temp__4425__auto___7695 = cljs.core.seq.call(null,seq__7674_7684);
if(temp__4425__auto___7695){
var seq__7674_7696__$1 = temp__4425__auto___7695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7674_7696__$1)){
var c__6945__auto___7697 = cljs.core.chunk_first.call(null,seq__7674_7696__$1);
var G__7698 = cljs.core.chunk_rest.call(null,seq__7674_7696__$1);
var G__7699 = c__6945__auto___7697;
var G__7700 = cljs.core.count.call(null,c__6945__auto___7697);
var G__7701 = (0);
seq__7674_7684 = G__7698;
chunk__7675_7685 = G__7699;
count__7676_7686 = G__7700;
i__7677_7687 = G__7701;
continue;
} else {
var vec__7679_7702 = cljs.core.first.call(null,seq__7674_7696__$1);
var k_7703__$1 = cljs.core.nth.call(null,vec__7679_7702,(0),null);
var v_7704__$1 = cljs.core.nth.call(null,vec__7679_7702,(1),null);
dommy.attrs.set_attr_BANG_.call(null,elem__$1,k_7703__$1,v_7704__$1);

var G__7705 = cljs.core.next.call(null,seq__7674_7696__$1);
var G__7706 = null;
var G__7707 = (0);
var G__7708 = (0);
seq__7674_7684 = G__7705;
chunk__7675_7685 = G__7706;
count__7676_7686 = G__7707;
i__7677_7687 = G__7708;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.set_attr_BANG_.cljs$lang$applyTo = (function (seq7666){
var G__7667 = cljs.core.first.call(null,seq7666);
var seq7666__$1 = cljs.core.next.call(null,seq7666);
var G__7668 = cljs.core.first.call(null,seq7666__$1);
var seq7666__$2 = cljs.core.next.call(null,seq7666__$1);
var G__7669 = cljs.core.first.call(null,seq7666__$2);
var seq7666__$3 = cljs.core.next.call(null,seq7666__$2);
return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7667,G__7668,G__7669,seq7666__$3);
});

dommy.attrs.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
dommy.attrs.remove_attr_BANG_ = (function dommy$attrs$remove_attr_BANG_(var_args){
var args7709 = [];
var len__7200__auto___7719 = arguments.length;
var i__7201__auto___7720 = (0);
while(true){
if((i__7201__auto___7720 < len__7200__auto___7719)){
args7709.push((arguments[i__7201__auto___7720]));

var G__7721 = (i__7201__auto___7720 + (1));
i__7201__auto___7720 = G__7721;
continue;
} else {
}
break;
}

var G__7714 = args7709.length;
switch (G__7714) {
case 2:
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7219__auto__ = (new cljs.core.IndexedSeq(args7709.slice((2)),(0)));
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7219__auto__);

}
});

dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k))){
elem__$1.className = "";
} else {
elem__$1.removeAttribute(cljs.core.name.call(null,k));
}

return elem__$1;
});

dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__7715_7723 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__7716_7724 = null;
var count__7717_7725 = (0);
var i__7718_7726 = (0);
while(true){
if((i__7718_7726 < count__7717_7725)){
var k_7727__$1 = cljs.core._nth.call(null,chunk__7716_7724,i__7718_7726);
dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k_7727__$1);

var G__7728 = seq__7715_7723;
var G__7729 = chunk__7716_7724;
var G__7730 = count__7717_7725;
var G__7731 = (i__7718_7726 + (1));
seq__7715_7723 = G__7728;
chunk__7716_7724 = G__7729;
count__7717_7725 = G__7730;
i__7718_7726 = G__7731;
continue;
} else {
var temp__4425__auto___7732 = cljs.core.seq.call(null,seq__7715_7723);
if(temp__4425__auto___7732){
var seq__7715_7733__$1 = temp__4425__auto___7732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7715_7733__$1)){
var c__6945__auto___7734 = cljs.core.chunk_first.call(null,seq__7715_7733__$1);
var G__7735 = cljs.core.chunk_rest.call(null,seq__7715_7733__$1);
var G__7736 = c__6945__auto___7734;
var G__7737 = cljs.core.count.call(null,c__6945__auto___7734);
var G__7738 = (0);
seq__7715_7723 = G__7735;
chunk__7716_7724 = G__7736;
count__7717_7725 = G__7737;
i__7718_7726 = G__7738;
continue;
} else {
var k_7739__$1 = cljs.core.first.call(null,seq__7715_7733__$1);
dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k_7739__$1);

var G__7740 = cljs.core.next.call(null,seq__7715_7733__$1);
var G__7741 = null;
var G__7742 = (0);
var G__7743 = (0);
seq__7715_7723 = G__7740;
chunk__7716_7724 = G__7741;
count__7717_7725 = G__7742;
i__7718_7726 = G__7743;
continue;
}
} else {
}
}
break;
}

return elem__$1;
});

dommy.attrs.remove_attr_BANG_.cljs$lang$applyTo = (function (seq7710){
var G__7711 = cljs.core.first.call(null,seq7710);
var seq7710__$1 = cljs.core.next.call(null,seq7710);
var G__7712 = cljs.core.first.call(null,seq7710__$1);
var seq7710__$2 = cljs.core.next.call(null,seq7710__$1);
return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7711,G__7712,seq7710__$2);
});

dommy.attrs.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
dommy.attrs.attr = (function dommy$attrs$attr(elem,k){
if(cljs.core.truth_(k)){
return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else {
return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function dommy$attrs$toggle_attr_BANG_(var_args){
var args7744 = [];
var len__7200__auto___7747 = arguments.length;
var i__7201__auto___7748 = (0);
while(true){
if((i__7201__auto___7748 < len__7200__auto___7747)){
args7744.push((arguments[i__7201__auto___7748]));

var G__7749 = (i__7201__auto___7748 + (1));
i__7201__auto___7748 = G__7749;
continue;
} else {
}
break;
}

var G__7746 = args7744.length;
switch (G__7746) {
case 2:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7744.length)].join('')));

}
});

dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.attrs.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});

dommy.attrs.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else {
return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});

dommy.attrs.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
dommy.attrs.hidden_QMARK_ = (function dommy$attrs$hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
 * Display or hide the given `elem`. Takes an optional boolean `show?`
 * indicating whether to show or hide `elem`.
 */
dommy.attrs.toggle_BANG_ = (function dommy$attrs$toggle_BANG_(var_args){
var args7751 = [];
var len__7200__auto___7755 = arguments.length;
var i__7201__auto___7756 = (0);
while(true){
if((i__7201__auto___7756 < len__7200__auto___7755)){
args7751.push((arguments[i__7201__auto___7756]));

var G__7757 = (i__7201__auto___7756 + (1));
i__7201__auto___7756 = G__7757;
continue;
} else {
}
break;
}

var G__7753 = args7751.length;
switch (G__7753) {
case 2:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7751.length)].join('')));

}
});

dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
var G__7754 = dommy.template.__GT_node_like.call(null,elem);
G__7754.style.display = ((show_QMARK_)?"":"none");

return G__7754;
});

dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));

return elem__$1;
});

dommy.attrs.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.attrs.hide_BANG_ = (function dommy$attrs$hide_BANG_(elem){
var G__7760 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__7760,false);

return G__7760;
});
dommy.attrs.show_BANG_ = (function dommy$attrs$show_BANG_(elem){
var G__7762 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__7762,true);

return G__7762;
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.attrs.bounding_client_rect = (function dommy$attrs$bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__7764 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__7764["constructor"] = Object);

return G__7764;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function dommy$attrs$scroll_into_view(elem,align_with_top_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));
if((window.innerHeight < (top + elem__$1.offsetHeight))){
return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});

//# sourceMappingURL=attrs.js.map