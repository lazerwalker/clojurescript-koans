// Compiled by ClojureScript 1.7.228 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args12791 = [];
var len__7200__auto___12794 = arguments.length;
var i__7201__auto___12795 = (0);
while(true){
if((i__7201__auto___12795 < len__7200__auto___12794)){
args12791.push((arguments[i__7201__auto___12795]));

var G__12796 = (i__7201__auto___12795 + (1));
i__7201__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var G__12793 = args12791.length;
switch (G__12793) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12791.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__6142__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__12799 = null;
var G__12799__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__12799__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__12799 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12799__2.call(this,self__,k);
case 3:
return G__12799__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12799.cljs$core$IFn$_invoke$arity$2 = G__12799__2;
G__12799.cljs$core$IFn$_invoke$arity$3 = G__12799__3;
return G__12799;
})()
;

jQuery.prototype.apply = (function (self__,args12798){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12798)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12805 = arguments.length;
var i__7201__auto___12806 = (0);
while(true){
if((i__7201__auto___12806 < len__7200__auto___12805)){
args__7207__auto__.push((arguments[i__7201__auto___12806]));

var G__12807 = (i__7201__auto___12806 + (1));
i__7201__auto___12806 = G__12807;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__12803){
var vec__12804 = p__12803;
var speed = cljs.core.nth.call(null,vec__12804,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12804,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq12800){
var G__12801 = cljs.core.first.call(null,seq12800);
var seq12800__$1 = cljs.core.next.call(null,seq12800);
var G__12802 = cljs.core.first.call(null,seq12800__$1);
var seq12800__$2 = cljs.core.next.call(null,seq12800__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__12801,G__12802,seq12800__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args12808 = [];
var len__7200__auto___12811 = arguments.length;
var i__7201__auto___12812 = (0);
while(true){
if((i__7201__auto___12812 < len__7200__auto___12811)){
args12808.push((arguments[i__7201__auto___12812]));

var G__12813 = (i__7201__auto___12812 + (1));
i__7201__auto___12812 = G__12813;
continue;
} else {
}
break;
}

var G__12810 = args12808.length;
switch (G__12810) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12808.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args12815 = [];
var len__7200__auto___12818 = arguments.length;
var i__7201__auto___12819 = (0);
while(true){
if((i__7201__auto___12819 < len__7200__auto___12818)){
args12815.push((arguments[i__7201__auto___12819]));

var G__12820 = (i__7201__auto___12819 + (1));
i__7201__auto___12819 = G__12820;
continue;
} else {
}
break;
}

var G__12817 = args12815.length;
switch (G__12817) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12815.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args12822 = [];
var len__7200__auto___12825 = arguments.length;
var i__7201__auto___12826 = (0);
while(true){
if((i__7201__auto___12826 < len__7200__auto___12825)){
args12822.push((arguments[i__7201__auto___12826]));

var G__12827 = (i__7201__auto___12826 + (1));
i__7201__auto___12826 = G__12827;
continue;
} else {
}
break;
}

var G__12824 = args12822.length;
switch (G__12824) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12822.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args12829 = [];
var len__7200__auto___12832 = arguments.length;
var i__7201__auto___12833 = (0);
while(true){
if((i__7201__auto___12833 < len__7200__auto___12832)){
args12829.push((arguments[i__7201__auto___12833]));

var G__12834 = (i__7201__auto___12833 + (1));
i__7201__auto___12833 = G__12834;
continue;
} else {
}
break;
}

var G__12831 = args12829.length;
switch (G__12831) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12829.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args12836 = [];
var len__7200__auto___12839 = arguments.length;
var i__7201__auto___12840 = (0);
while(true){
if((i__7201__auto___12840 < len__7200__auto___12839)){
args12836.push((arguments[i__7201__auto___12840]));

var G__12841 = (i__7201__auto___12840 + (1));
i__7201__auto___12840 = G__12841;
continue;
} else {
}
break;
}

var G__12838 = args12836.length;
switch (G__12838) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12836.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args12843 = [];
var len__7200__auto___12846 = arguments.length;
var i__7201__auto___12847 = (0);
while(true){
if((i__7201__auto___12847 < len__7200__auto___12846)){
args12843.push((arguments[i__7201__auto___12847]));

var G__12848 = (i__7201__auto___12847 + (1));
i__7201__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var G__12845 = args12843.length;
switch (G__12845) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12843.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args12850 = [];
var len__7200__auto___12853 = arguments.length;
var i__7201__auto___12854 = (0);
while(true){
if((i__7201__auto___12854 < len__7200__auto___12853)){
args12850.push((arguments[i__7201__auto___12854]));

var G__12855 = (i__7201__auto___12854 + (1));
i__7201__auto___12854 = G__12855;
continue;
} else {
}
break;
}

var G__12852 = args12850.length;
switch (G__12852) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12850.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12861 = arguments.length;
var i__7201__auto___12862 = (0);
while(true){
if((i__7201__auto___12862 < len__7200__auto___12861)){
args__7207__auto__.push((arguments[i__7201__auto___12862]));

var G__12863 = (i__7201__auto___12862 + (1));
i__7201__auto___12862 = G__12863;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12859){
var vec__12860 = p__12859;
var speed = cljs.core.nth.call(null,vec__12860,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12860,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq12857){
var G__12858 = cljs.core.first.call(null,seq12857);
var seq12857__$1 = cljs.core.next.call(null,seq12857);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__12858,seq12857__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12868 = arguments.length;
var i__7201__auto___12869 = (0);
while(true){
if((i__7201__auto___12869 < len__7200__auto___12868)){
args__7207__auto__.push((arguments[i__7201__auto___12869]));

var G__12870 = (i__7201__auto___12869 + (1));
i__7201__auto___12869 = G__12870;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12866){
var vec__12867 = p__12866;
var speed = cljs.core.nth.call(null,vec__12867,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12867,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq12864){
var G__12865 = cljs.core.first.call(null,seq12864);
var seq12864__$1 = cljs.core.next.call(null,seq12864);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__12865,seq12864__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12875 = arguments.length;
var i__7201__auto___12876 = (0);
while(true){
if((i__7201__auto___12876 < len__7200__auto___12875)){
args__7207__auto__.push((arguments[i__7201__auto___12876]));

var G__12877 = (i__7201__auto___12876 + (1));
i__7201__auto___12876 = G__12877;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12873){
var vec__12874 = p__12873;
var speed = cljs.core.nth.call(null,vec__12874,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12874,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq12871){
var G__12872 = cljs.core.first.call(null,seq12871);
var seq12871__$1 = cljs.core.next.call(null,seq12871);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__12872,seq12871__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12882 = arguments.length;
var i__7201__auto___12883 = (0);
while(true){
if((i__7201__auto___12883 < len__7200__auto___12882)){
args__7207__auto__.push((arguments[i__7201__auto___12883]));

var G__12884 = (i__7201__auto___12883 + (1));
i__7201__auto___12883 = G__12884;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12880){
var vec__12881 = p__12880;
var speed = cljs.core.nth.call(null,vec__12881,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12881,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq12878){
var G__12879 = cljs.core.first.call(null,seq12878);
var seq12878__$1 = cljs.core.next.call(null,seq12878);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__12879,seq12878__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12889 = arguments.length;
var i__7201__auto___12890 = (0);
while(true){
if((i__7201__auto___12890 < len__7200__auto___12889)){
args__7207__auto__.push((arguments[i__7201__auto___12890]));

var G__12891 = (i__7201__auto___12890 + (1));
i__7201__auto___12890 = G__12891;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12887){
var vec__12888 = p__12887;
var speed = cljs.core.nth.call(null,vec__12888,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12888,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq12885){
var G__12886 = cljs.core.first.call(null,seq12885);
var seq12885__$1 = cljs.core.next.call(null,seq12885);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__12886,seq12885__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12896 = arguments.length;
var i__7201__auto___12897 = (0);
while(true){
if((i__7201__auto___12897 < len__7200__auto___12896)){
args__7207__auto__.push((arguments[i__7201__auto___12897]));

var G__12898 = (i__7201__auto___12897 + (1));
i__7201__auto___12897 = G__12898;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12894){
var vec__12895 = p__12894;
var speed = cljs.core.nth.call(null,vec__12895,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12895,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq12892){
var G__12893 = cljs.core.first.call(null,seq12892);
var seq12892__$1 = cljs.core.next.call(null,seq12892);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__12893,seq12892__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12903 = arguments.length;
var i__7201__auto___12904 = (0);
while(true){
if((i__7201__auto___12904 < len__7200__auto___12903)){
args__7207__auto__.push((arguments[i__7201__auto___12904]));

var G__12905 = (i__7201__auto___12904 + (1));
i__7201__auto___12904 = G__12905;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12901){
var vec__12902 = p__12901;
var speed = cljs.core.nth.call(null,vec__12902,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12902,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq12899){
var G__12900 = cljs.core.first.call(null,seq12899);
var seq12899__$1 = cljs.core.next.call(null,seq12899);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__12900,seq12899__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args12906 = [];
var len__7200__auto___12909 = arguments.length;
var i__7201__auto___12910 = (0);
while(true){
if((i__7201__auto___12910 < len__7200__auto___12909)){
args12906.push((arguments[i__7201__auto___12910]));

var G__12911 = (i__7201__auto___12910 + (1));
i__7201__auto___12910 = G__12911;
continue;
} else {
}
break;
}

var G__12908 = args12906.length;
switch (G__12908) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12906.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args12913 = [];
var len__7200__auto___12916 = arguments.length;
var i__7201__auto___12917 = (0);
while(true){
if((i__7201__auto___12917 < len__7200__auto___12916)){
args12913.push((arguments[i__7201__auto___12917]));

var G__12918 = (i__7201__auto___12917 + (1));
i__7201__auto___12917 = G__12918;
continue;
} else {
}
break;
}

var G__12915 = args12913.length;
switch (G__12915) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12913.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args12920 = [];
var len__7200__auto___12923 = arguments.length;
var i__7201__auto___12924 = (0);
while(true){
if((i__7201__auto___12924 < len__7200__auto___12923)){
args12920.push((arguments[i__7201__auto___12924]));

var G__12925 = (i__7201__auto___12924 + (1));
i__7201__auto___12924 = G__12925;
continue;
} else {
}
break;
}

var G__12922 = args12920.length;
switch (G__12922) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12920.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args12927 = [];
var len__7200__auto___12930 = arguments.length;
var i__7201__auto___12931 = (0);
while(true){
if((i__7201__auto___12931 < len__7200__auto___12930)){
args12927.push((arguments[i__7201__auto___12931]));

var G__12932 = (i__7201__auto___12931 + (1));
i__7201__auto___12931 = G__12932;
continue;
} else {
}
break;
}

var G__12929 = args12927.length;
switch (G__12929) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12927.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args12934 = [];
var len__7200__auto___12937 = arguments.length;
var i__7201__auto___12938 = (0);
while(true){
if((i__7201__auto___12938 < len__7200__auto___12937)){
args12934.push((arguments[i__7201__auto___12938]));

var G__12939 = (i__7201__auto___12938 + (1));
i__7201__auto___12938 = G__12939;
continue;
} else {
}
break;
}

var G__12936 = args12934.length;
switch (G__12936) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12934.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args12941 = [];
var len__7200__auto___12944 = arguments.length;
var i__7201__auto___12945 = (0);
while(true){
if((i__7201__auto___12945 < len__7200__auto___12944)){
args12941.push((arguments[i__7201__auto___12945]));

var G__12946 = (i__7201__auto___12945 + (1));
i__7201__auto___12945 = G__12946;
continue;
} else {
}
break;
}

var G__12943 = args12941.length;
switch (G__12943) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12941.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args12948 = [];
var len__7200__auto___12951 = arguments.length;
var i__7201__auto___12952 = (0);
while(true){
if((i__7201__auto___12952 < len__7200__auto___12951)){
args12948.push((arguments[i__7201__auto___12952]));

var G__12953 = (i__7201__auto___12952 + (1));
i__7201__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var G__12950 = args12948.length;
switch (G__12950) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12948.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args12955 = [];
var len__7200__auto___12958 = arguments.length;
var i__7201__auto___12959 = (0);
while(true){
if((i__7201__auto___12959 < len__7200__auto___12958)){
args12955.push((arguments[i__7201__auto___12959]));

var G__12960 = (i__7201__auto___12959 + (1));
i__7201__auto___12959 = G__12960;
continue;
} else {
}
break;
}

var G__12957 = args12955.length;
switch (G__12957) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12955.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args12962 = [];
var len__7200__auto___12965 = arguments.length;
var i__7201__auto___12966 = (0);
while(true){
if((i__7201__auto___12966 < len__7200__auto___12965)){
args12962.push((arguments[i__7201__auto___12966]));

var G__12967 = (i__7201__auto___12966 + (1));
i__7201__auto___12966 = G__12967;
continue;
} else {
}
break;
}

var G__12964 = args12962.length;
switch (G__12964) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12962.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args12969 = [];
var len__7200__auto___12972 = arguments.length;
var i__7201__auto___12973 = (0);
while(true){
if((i__7201__auto___12973 < len__7200__auto___12972)){
args12969.push((arguments[i__7201__auto___12973]));

var G__12974 = (i__7201__auto___12973 + (1));
i__7201__auto___12973 = G__12974;
continue;
} else {
}
break;
}

var G__12971 = args12969.length;
switch (G__12971) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12969.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__7207__auto__ = [];
var len__7200__auto___12981 = arguments.length;
var i__7201__auto___12982 = (0);
while(true){
if((i__7201__auto___12982 < len__7200__auto___12981)){
args__7207__auto__.push((arguments[i__7201__auto___12982]));

var G__12983 = (i__7201__auto___12982 + (1));
i__7201__auto___12982 = G__12983;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__12979){
var vec__12980 = p__12979;
var context = cljs.core.nth.call(null,vec__12980,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq12976){
var G__12977 = cljs.core.first.call(null,seq12976);
var seq12976__$1 = cljs.core.next.call(null,seq12976);
var G__12978 = cljs.core.first.call(null,seq12976__$1);
var seq12976__$2 = cljs.core.next.call(null,seq12976__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__12977,G__12978,seq12976__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args12984 = [];
var len__7200__auto___12987 = arguments.length;
var i__7201__auto___12988 = (0);
while(true){
if((i__7201__auto___12988 < len__7200__auto___12987)){
args12984.push((arguments[i__7201__auto___12988]));

var G__12989 = (i__7201__auto___12988 + (1));
i__7201__auto___12988 = G__12989;
continue;
} else {
}
break;
}

var G__12986 = args12984.length;
switch (G__12986) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12984.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args12991 = [];
var len__7200__auto___12994 = arguments.length;
var i__7201__auto___12995 = (0);
while(true){
if((i__7201__auto___12995 < len__7200__auto___12994)){
args12991.push((arguments[i__7201__auto___12995]));

var G__12996 = (i__7201__auto___12995 + (1));
i__7201__auto___12995 = G__12996;
continue;
} else {
}
break;
}

var G__12993 = args12991.length;
switch (G__12993) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12991.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args12998 = [];
var len__7200__auto___13001 = arguments.length;
var i__7201__auto___13002 = (0);
while(true){
if((i__7201__auto___13002 < len__7200__auto___13001)){
args12998.push((arguments[i__7201__auto___13002]));

var G__13003 = (i__7201__auto___13002 + (1));
i__7201__auto___13002 = G__13003;
continue;
} else {
}
break;
}

var G__13000 = args12998.length;
switch (G__13000) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12998.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args13005 = [];
var len__7200__auto___13008 = arguments.length;
var i__7201__auto___13009 = (0);
while(true){
if((i__7201__auto___13009 < len__7200__auto___13008)){
args13005.push((arguments[i__7201__auto___13009]));

var G__13010 = (i__7201__auto___13009 + (1));
i__7201__auto___13009 = G__13010;
continue;
} else {
}
break;
}

var G__13007 = args13005.length;
switch (G__13007) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13005.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__13014){
var map__13017 = p__13014;
var map__13017__$1 = ((((!((map__13017 == null)))?((((map__13017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13017):map__13017);
var request = map__13017__$1;
var data = cljs.core.get.call(null,map__13017__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__13017__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__13017,map__13017__$1,request,data,contentType){
return (function (p1__13013_SHARP_){
if(cljs.core.truth_((function (){var and__6130__auto__ = ct;
if(cljs.core.truth_(and__6130__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__6130__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__13013_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__13013_SHARP_;
}
});})(ct,map__13017,map__13017__$1,request,data,contentType))
.call(null,((function (ct,map__13017,map__13017__$1,request,data,contentType){
return (function (p1__13012_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__13012_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__13012_SHARP_;
}
});})(ct,map__13017,map__13017__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args13019 = [];
var len__7200__auto___13022 = arguments.length;
var i__7201__auto___13023 = (0);
while(true){
if((i__7201__auto___13023 < len__7200__auto___13022)){
args13019.push((arguments[i__7201__auto___13023]));

var G__13024 = (i__7201__auto___13023 + (1));
i__7201__auto___13023 = G__13024;
continue;
} else {
}
break;
}

var G__13021 = args13019.length;
switch (G__13021) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13019.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__13026,content,callback){
var vec__13028 = p__13026;
var method = cljs.core.nth.call(null,vec__13028,(0),null);
var uri = cljs.core.nth.call(null,vec__13028,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13034 = arguments.length;
var i__7201__auto___13035 = (0);
while(true){
if((i__7201__auto___13035 < len__7200__auto___13034)){
args__7207__auto__.push((arguments[i__7201__auto___13035]));

var G__13036 = (i__7201__auto___13035 + (1));
i__7201__auto___13035 = G__13036;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__13032){
var vec__13033 = p__13032;
var func = cljs.core.nth.call(null,vec__13033,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq13029){
var G__13030 = cljs.core.first.call(null,seq13029);
var seq13029__$1 = cljs.core.next.call(null,seq13029);
var G__13031 = cljs.core.first.call(null,seq13029__$1);
var seq13029__$2 = cljs.core.next.call(null,seq13029__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__13030,G__13031,seq13029__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13042 = arguments.length;
var i__7201__auto___13043 = (0);
while(true){
if((i__7201__auto___13043 < len__7200__auto___13042)){
args__7207__auto__.push((arguments[i__7201__auto___13043]));

var G__13044 = (i__7201__auto___13043 + (1));
i__7201__auto___13043 = G__13044;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__13040){
var vec__13041 = p__13040;
var sel = cljs.core.nth.call(null,vec__13041,(0),null);
var data = cljs.core.nth.call(null,vec__13041,(1),null);
var handler = cljs.core.nth.call(null,vec__13041,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq13037){
var G__13038 = cljs.core.first.call(null,seq13037);
var seq13037__$1 = cljs.core.next.call(null,seq13037);
var G__13039 = cljs.core.first.call(null,seq13037__$1);
var seq13037__$2 = cljs.core.next.call(null,seq13037__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__13038,G__13039,seq13037__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13050 = arguments.length;
var i__7201__auto___13051 = (0);
while(true){
if((i__7201__auto___13051 < len__7200__auto___13050)){
args__7207__auto__.push((arguments[i__7201__auto___13051]));

var G__13052 = (i__7201__auto___13051 + (1));
i__7201__auto___13051 = G__13052;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__13048){
var vec__13049 = p__13048;
var sel = cljs.core.nth.call(null,vec__13049,(0),null);
var data = cljs.core.nth.call(null,vec__13049,(1),null);
var handler = cljs.core.nth.call(null,vec__13049,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq13045){
var G__13046 = cljs.core.first.call(null,seq13045);
var seq13045__$1 = cljs.core.next.call(null,seq13045);
var G__13047 = cljs.core.first.call(null,seq13045__$1);
var seq13045__$2 = cljs.core.next.call(null,seq13045__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__13046,G__13047,seq13045__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13058 = arguments.length;
var i__7201__auto___13059 = (0);
while(true){
if((i__7201__auto___13059 < len__7200__auto___13058)){
args__7207__auto__.push((arguments[i__7201__auto___13059]));

var G__13060 = (i__7201__auto___13059 + (1));
i__7201__auto___13059 = G__13060;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__13056){
var vec__13057 = p__13056;
var sel = cljs.core.nth.call(null,vec__13057,(0),null);
var handler = cljs.core.nth.call(null,vec__13057,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq13053){
var G__13054 = cljs.core.first.call(null,seq13053);
var seq13053__$1 = cljs.core.next.call(null,seq13053);
var G__13055 = cljs.core.first.call(null,seq13053__$1);
var seq13053__$2 = cljs.core.next.call(null,seq13053__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__13054,G__13055,seq13053__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args13061 = [];
var len__7200__auto___13064 = arguments.length;
var i__7201__auto___13065 = (0);
while(true){
if((i__7201__auto___13065 < len__7200__auto___13064)){
args13061.push((arguments[i__7201__auto___13065]));

var G__13066 = (i__7201__auto___13065 + (1));
i__7201__auto___13065 = G__13066;
continue;
} else {
}
break;
}

var G__13063 = args13061.length;
switch (G__13063) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13061.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args13068 = [];
var len__7200__auto___13071 = arguments.length;
var i__7201__auto___13072 = (0);
while(true){
if((i__7201__auto___13072 < len__7200__auto___13071)){
args13068.push((arguments[i__7201__auto___13072]));

var G__13073 = (i__7201__auto___13072 + (1));
i__7201__auto___13072 = G__13073;
continue;
} else {
}
break;
}

var G__13070 = args13068.length;
switch (G__13070) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13068.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args13075 = [];
var len__7200__auto___13078 = arguments.length;
var i__7201__auto___13079 = (0);
while(true){
if((i__7201__auto___13079 < len__7200__auto___13078)){
args13075.push((arguments[i__7201__auto___13079]));

var G__13080 = (i__7201__auto___13079 + (1));
i__7201__auto___13079 = G__13080;
continue;
} else {
}
break;
}

var G__13077 = args13075.length;
switch (G__13077) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13075.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args13082 = [];
var len__7200__auto___13085 = arguments.length;
var i__7201__auto___13086 = (0);
while(true){
if((i__7201__auto___13086 < len__7200__auto___13085)){
args13082.push((arguments[i__7201__auto___13086]));

var G__13087 = (i__7201__auto___13086 + (1));
i__7201__auto___13086 = G__13087;
continue;
} else {
}
break;
}

var G__13084 = args13082.length;
switch (G__13084) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13082.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args13089 = [];
var len__7200__auto___13092 = arguments.length;
var i__7201__auto___13093 = (0);
while(true){
if((i__7201__auto___13093 < len__7200__auto___13092)){
args13089.push((arguments[i__7201__auto___13093]));

var G__13094 = (i__7201__auto___13093 + (1));
i__7201__auto___13093 = G__13094;
continue;
} else {
}
break;
}

var G__13091 = args13089.length;
switch (G__13091) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13089.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args13096 = [];
var len__7200__auto___13099 = arguments.length;
var i__7201__auto___13100 = (0);
while(true){
if((i__7201__auto___13100 < len__7200__auto___13099)){
args13096.push((arguments[i__7201__auto___13100]));

var G__13101 = (i__7201__auto___13100 + (1));
i__7201__auto___13100 = G__13101;
continue;
} else {
}
break;
}

var G__13098 = args13096.length;
switch (G__13098) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13096.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13105 = arguments.length;
var i__7201__auto___13106 = (0);
while(true){
if((i__7201__auto___13106 < len__7200__auto___13105)){
args__7207__auto__.push((arguments[i__7201__auto___13106]));

var G__13107 = (i__7201__auto___13106 + (1));
i__7201__auto___13106 = G__13107;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq13103){
var G__13104 = cljs.core.first.call(null,seq13103);
var seq13103__$1 = cljs.core.next.call(null,seq13103);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__13104,seq13103__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13110 = arguments.length;
var i__7201__auto___13111 = (0);
while(true){
if((i__7201__auto___13111 < len__7200__auto___13110)){
args__7207__auto__.push((arguments[i__7201__auto___13111]));

var G__13112 = (i__7201__auto___13111 + (1));
i__7201__auto___13111 = G__13112;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq13108){
var G__13109 = cljs.core.first.call(null,seq13108);
var seq13108__$1 = cljs.core.next.call(null,seq13108);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__13109,seq13108__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args13113 = [];
var len__7200__auto___13116 = arguments.length;
var i__7201__auto___13117 = (0);
while(true){
if((i__7201__auto___13117 < len__7200__auto___13116)){
args13113.push((arguments[i__7201__auto___13117]));

var G__13118 = (i__7201__auto___13117 + (1));
i__7201__auto___13117 = G__13118;
continue;
} else {
}
break;
}

var G__13115 = args13113.length;
switch (G__13115) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13113.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13122 = arguments.length;
var i__7201__auto___13123 = (0);
while(true){
if((i__7201__auto___13123 < len__7200__auto___13122)){
args__7207__auto__.push((arguments[i__7201__auto___13123]));

var G__13124 = (i__7201__auto___13123 + (1));
i__7201__auto___13123 = G__13124;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq13120){
var G__13121 = cljs.core.first.call(null,seq13120);
var seq13120__$1 = cljs.core.next.call(null,seq13120);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__13121,seq13120__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args13125 = [];
var len__7200__auto___13128 = arguments.length;
var i__7201__auto___13129 = (0);
while(true){
if((i__7201__auto___13129 < len__7200__auto___13128)){
args13125.push((arguments[i__7201__auto___13129]));

var G__13130 = (i__7201__auto___13129 + (1));
i__7201__auto___13129 = G__13130;
continue;
} else {
}
break;
}

var G__13127 = args13125.length;
switch (G__13127) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13125.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map