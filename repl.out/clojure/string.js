replgoog.provide('replclojure.string');
replgoog.require('replcljs.core');
replgoog.require('replgoog.string.StringBuffer');
replgoog.require('replgoog.string');
replclojure.string.seq_reverse = (function seq_reverse(coll){
return replcljs.core.reduce.call(null,replcljs.core.conj,replcljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
replclojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
*
* string / string
* pattern / (string or function of match).
*/
replclojure.string.replace = (function replace(s,match,replacement){
if(replcljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(replgoog.string.regExpEscape(match),"g")),replacement);
} else
{if(replcljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [replcljs.core.str("Invalid match arg: "),replcljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
*
* string / string
* pattern / (string or function of match).
*/
replclojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
replclojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return replcljs.core.apply.call(null,replcljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
replclojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
replclojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
replclojure.string.capitalize = (function capitalize(s){
if((replcljs.core.count.call(null,s) < 2))
{return replclojure.string.upper_case.call(null,s);
} else
{return [replcljs.core.str(replclojure.string.upper_case.call(null,replcljs.core.subs.call(null,s,0,1))),replcljs.core.str(replclojure.string.lower_case.call(null,replcljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
replclojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return replcljs.core.vec.call(null,[replcljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return replcljs.core.vec.call(null,[replcljs.core.str(s)].join('').split(re));
} else
{var s__$1 = s;
var limit__$1 = limit;
var parts = replcljs.core.PersistentVector.EMPTY;
while(true){
if(replcljs.core._EQ_.call(null,limit__$1,1))
{return replcljs.core.conj.call(null,parts,s__$1);
} else
{var temp__4090__auto__ = replcljs.core.re_find.call(null,re,s__$1);
if(replcljs.core.truth_(temp__4090__auto__))
{var m = temp__4090__auto__;
var index = s__$1.indexOf(m);
{
var G__4398 = s__$1.substring((index + replcljs.core.count.call(null,m)));
var G__4399 = (limit__$1 - 1);
var G__4400 = replcljs.core.conj.call(null,parts,s__$1.substring(0,index));
s__$1 = G__4398;
limit__$1 = G__4399;
parts = G__4400;
continue;
}
} else
{return replcljs.core.conj.call(null,parts,s__$1);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
replclojure.string.split_lines = (function split_lines(s){
return replclojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
replclojure.string.trim = (function trim(s){
return replgoog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
replclojure.string.triml = (function triml(s){
return replgoog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
replclojure.string.trimr = (function trimr(s){
return replgoog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
replclojure.string.trim_newline = (function trim_newline(s){
var index = s.length;
while(true){
if((index === 0))
{return "";
} else
{var ch = replcljs.core._lookup.call(null,s,(index - 1),null);
if((function (){var or__3943__auto__ = replcljs.core._EQ_.call(null,ch,"\n");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core._EQ_.call(null,ch,"\r");
}
})())
{{
var G__4401 = (index - 1);
index = G__4401;
continue;
}
} else
{return s.substring(0,index);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
replclojure.string.blank_QMARK_ = (function blank_QMARK_(s){
return replgoog.string.isEmptySafe(s);
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
*
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
replclojure.string.escape = (function escape(s,cmap){
var buffer = (new replgoog.string.StringBuffer());
var length = s.length;
var index = 0;
while(true){
if(replcljs.core._EQ_.call(null,length,index))
{return buffer.toString();
} else
{var ch = s.charAt(index);
var temp__4090__auto___4402 = replcljs.core._lookup.call(null,cmap,ch,null);
if(replcljs.core.truth_(temp__4090__auto___4402))
{var replacement_4403 = temp__4090__auto___4402;
buffer.append([replcljs.core.str(replacement_4403)].join(''));
} else
{buffer.append(ch);
}
{
var G__4404 = (index + 1);
index = G__4404;
continue;
}
}
break;
}
});

// Analyzer namespace snapshot:
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replclojure.string"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4405__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4405 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4405__delegate.call(this, m);
};
G__4405.cljs$lang$maxFixedArity = 0;
G__4405.cljs$lang$applyTo = (function (arglist__4406){
var m = replcljs.core.seq(arglist__4406);;
return G__4405__delegate(m);
});
G__4405.cljs$lang$arity$variadic = G__4405__delegate;
return G__4405;
})()
,replcljs.core.hash_map("\uFDD0'defs",replcljs.core.hash_map((new replcljs.core.Symbol(null,"seq-reverse")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"coll"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"coll")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/seq-reverse")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"trim")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/trim")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes whitespace from both ends of string.","\uFDD0'line",106,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"lower-case")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/lower-case")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Converts string to all lower-case.","\uFDD0'line",58,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"split")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"re"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"re")),(new replcljs.core.Symbol(null,"limit"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"limit")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/split")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Splits string on a regular expression. Optional argument limit is\n  the maximum number of splits. Not lazy. Returns vector of the splits.","\uFDD0'line",81,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"join")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"coll"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"separator")),(new replcljs.core.Symbol(null,"coll"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"coll")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"separator")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"coll")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/join")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a string of all elements in coll, as returned by (seq coll),\n   separated by an optional separator.","\uFDD0'line",45,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"/")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core//"))),(new replcljs.core.Symbol(null,"upper-case")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/upper-case")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Converts string to all upper-case.","\uFDD0'line",53,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"trimr")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/trimr")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes whitespace from the right side of string.","\uFDD0'line",116,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"split-lines")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/split-lines")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Splits s on \n or \r\n.","\uFDD0'line",101,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"triml")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/triml")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes whitespace from the left side of string.","\uFDD0'line",111,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"replace")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"match")),(new replcljs.core.Symbol(null,"replacement"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"match")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replacement")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/replace")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Replaces all instance of match with replacement in s.\n   match/replacement can be:\n\n   string / string\n   pattern / (string or function of match).","\uFDD0'line",23,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"reverse")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/reverse")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns s with its characters reversed.","\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"capitalize")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/capitalize")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Converts first character of the string to upper-case, all other\n  characters to lower-case.","\uFDD0'line",63,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"escape")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"cmap"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"cmap")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/escape")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Return a new string, using cmap to escape each character ch\n   from s as follows:\n\n   If (cmap ch) is nil, append ch to the new string.\n   If (cmap ch) is non-nil, append (str (cmap ch)) instead.","\uFDD0'line",138,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"blank?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/blank?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","True is s is nil, empty, or contains only whitespace.","\uFDD0'line",133,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"replace-first")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"match")),(new replcljs.core.Symbol(null,"replacement"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"match")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replacement")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/replace-first")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Replaces the first instance of match with replacement in s.\n   match/replacement can be:\n\n   string / string\n   pattern / (string or function of match).","\uFDD0'line",36,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new replcljs.core.Symbol(null,"trim-newline")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string/trim-newline")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes all trailing newline \\n or return \\r characters from\n  string.  Similar to Perl's chomp.","\uFDD0'line",121,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",replcljs.core.hash_map((new replcljs.core.Symbol(null,"gstringbuf")),(new replcljs.core.Symbol(null,"replgoog.string.StringBuffer")),(new replcljs.core.Symbol(null,"gstring")),(new replcljs.core.Symbol(null,"replgoog.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",replcljs.core.set([(new replcljs.core.Symbol(null,"replace")),(new replcljs.core.Symbol(null,"reverse"))]),"\uFDD0'doc",null,"\uFDD0'name",(new replcljs.core.Symbol(null,"replclojure.string"))),old);
}));
