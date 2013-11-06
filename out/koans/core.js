goog.provide('koans.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
koans.core.enter_key = 13;
koans.core.input_with_code = (function input_with_code(before,after){var dom5793 = document.createElement("div");if("code")
{dom5793.setAttribute("id","code");
} else
{}
dom5793.appendChild((function (){var dom5794 = document.createElement("span");if("before")
{dom5794.className = [cljs.core.str(dom5794.className),cljs.core.str(" "),cljs.core.str("before")].join('').trim();
} else
{}
dom5794.appendChild(dommy.template.__GT_node_like.call(null,before));
return dom5794;
})());
dom5793.appendChild((function (){var dom5795 = document.createElement("input");if("user-input")
{dom5795.className = [cljs.core.str(dom5795.className),cljs.core.str(" "),cljs.core.str("user-input")].join('').trim();
} else
{}
return dom5795;
})());
dom5793.appendChild((function (){var dom5796 = document.createElement("span");if("after")
{dom5796.className = [cljs.core.str(dom5796.className),cljs.core.str(" "),cljs.core.str("after")].join('').trim();
} else
{}
dom5796.appendChild(dommy.template.__GT_node_like.call(null,after));
return dom5796;
})());
return dom5793;
});
koans.core.input_string = (function input_string(){return clojure.string.join.call(null," ",cljs.core.PersistentVector.fromArray([dommy.core.text.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("before"))[0])),dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[0])),dommy.core.text.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("after"))[0]))], true));
});
koans.core.evaluate_koan = (function evaluate_koan(){return console.log(koans.core.input_string.call(null));
});
/**
* @param {...*} var_args
*/
koans.core.show_koan = (function() { 
var show_koan__delegate = function (p__5797){var map__5799 = p__5797;var map__5799__$1 = ((cljs.core.seq_QMARK_.call(null,map__5799))?cljs.core.apply.call(null,cljs.core.hash_map,map__5799):map__5799);var after = cljs.core.get.call(null,map__5799__$1,new cljs.core.Keyword(null,"after","after",1106639182));var before = cljs.core.get.call(null,map__5799__$1,new cljs.core.Keyword(null,"before","before",3915985649));var input = koans.core.input_with_code.call(null,before,after);dommy.core.append_BANG_.call(null,document.body,input);
return dommy.core.listen_BANG_.call(null,input,new cljs.core.Keyword(null,"keypress","keypress",1530666166),(function (e){if(cljs.core._EQ_.call(null,e.charCode,koans.core.enter_key))
{return koans.core.evaluate_koan.call(null);
} else
{return null;
}
}));
};
var show_koan = function (var_args){
var p__5797 = null;if (arguments.length > 0) {
  p__5797 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return show_koan__delegate.call(this,p__5797);};
show_koan.cljs$lang$maxFixedArity = 0;
show_koan.cljs$lang$applyTo = (function (arglist__5800){
var p__5797 = cljs.core.seq(arglist__5800);
return show_koan__delegate(p__5797);
});
show_koan.cljs$core$IFn$_invoke$arity$variadic = show_koan__delegate;
return show_koan;
})()
;
document.onready = (function (){return koans.core.show_koan.call(null,new cljs.core.Keyword(null,"before","before",3915985649),"before",new cljs.core.Keyword(null,"after","after",1106639182),"after");
});

//@ sourceMappingURL=core.js.map