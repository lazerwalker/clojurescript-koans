replgoog.provide('replclojure.string');
replgoog.require('cljsrepl.core');
replgoog.require('replgoog.string.StringBuffer');
replgoog.require('replgoog.string');
replclojure.string.seq_reverse = (function seq_reverse(coll){
return cljsrepl.core.reduce.call(null,cljsrepl.core.conj,cljsrepl.core.List.EMPTY,coll);
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
if(cljsrepl.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(replgoog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljsrepl.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljsrepl.core.str("Invalid match arg: "),cljsrepl.core.str(match)].join('');
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
return cljsrepl.core.apply.call(null,cljsrepl.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.interpose.call(null,separator,coll));
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
if((cljsrepl.core.count.call(null,s) < 2))
{return replclojure.string.upper_case.call(null,s);
} else
{return [cljsrepl.core.str(replclojure.string.upper_case.call(null,cljsrepl.core.subs.call(null,s,0,1))),cljsrepl.core.str(replclojure.string.lower_case.call(null,cljsrepl.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
replclojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljsrepl.core.vec.call(null,[cljsrepl.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljsrepl.core.vec.call(null,[cljsrepl.core.str(s)].join('').split(re));
} else
{var s__$1 = s;
var limit__$1 = limit;
var parts = cljsrepl.core.PersistentVector.EMPTY;
while(true){
if(cljsrepl.core._EQ_.call(null,limit__$1,1))
{return cljsrepl.core.conj.call(null,parts,s__$1);
} else
{var temp__4090__auto__ = cljsrepl.core.re_find.call(null,re,s__$1);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var m = temp__4090__auto__;
var index = s__$1.indexOf(m);
{
var G__4377 = s__$1.substring((index + cljsrepl.core.count.call(null,m)));
var G__4378 = (limit__$1 - 1);
var G__4379 = cljsrepl.core.conj.call(null,parts,s__$1.substring(0,index));
s__$1 = G__4377;
limit__$1 = G__4378;
parts = G__4379;
continue;
}
} else
{return cljsrepl.core.conj.call(null,parts,s__$1);
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
{var ch = cljsrepl.core._lookup.call(null,s,(index - 1),null);
if((function (){var or__3943__auto__ = cljsrepl.core._EQ_.call(null,ch,"\n");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core._EQ_.call(null,ch,"\r");
}
})())
{{
var G__4380 = (index - 1);
index = G__4380;
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
if(cljsrepl.core._EQ_.call(null,length,index))
{return buffer.toString();
} else
{var ch = s.charAt(index);
var temp__4090__auto___4381 = cljsrepl.core._lookup.call(null,cmap,ch,null);
if(cljsrepl.core.truth_(temp__4090__auto___4381))
{var replacement_4382 = temp__4090__auto___4381;
buffer.append([cljsrepl.core.str(replacement_4382)].join(''));
} else
{buffer.append(ch);
}
{
var G__4383 = (index + 1);
index = G__4383;
continue;
}
}
break;
}
});

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"replclojure.string"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4384__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4384 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4384__delegate.call(this, m);
};
G__4384.cljs$lang$maxFixedArity = 0;
G__4384.cljs$lang$applyTo = (function (arglist__4385){
var m = cljsrepl.core.seq(arglist__4385);;
return G__4384__delegate(m);
});
G__4384.cljs$lang$arity$variadic = G__4384__delegate;
return G__4384;
})()
,cljsrepl.core.hash_map("\uFDD0'defs",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"seq-reverse")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"coll"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"coll")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/seq-reverse")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"trim")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/trim")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes whitespace from both ends of string.","\uFDD0'line",106,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"lower-case")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/lower-case")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Converts string to all lower-case.","\uFDD0'line",58,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"split")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"re"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"re")),(new cljsrepl.core.Symbol(null,"limit"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"limit")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/split")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Splits string on a regular expression. Optional argument limit is\n  the maximum number of splits. Not lazy. Returns vector of the splits.","\uFDD0'line",81,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"join")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"coll"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"separator")),(new cljsrepl.core.Symbol(null,"coll"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"coll")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"separator")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"coll")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/join")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns a string of all elements in coll, as returned by (seq coll),\n   separated by an optional separator.","\uFDD0'line",45,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"/")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core//"))),(new cljsrepl.core.Symbol(null,"upper-case")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/upper-case")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Converts string to all upper-case.","\uFDD0'line",53,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"trimr")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/trimr")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes whitespace from the right side of string.","\uFDD0'line",116,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"split-lines")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/split-lines")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Splits s on \n or \r\n.","\uFDD0'line",101,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"triml")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/triml")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes whitespace from the left side of string.","\uFDD0'line",111,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"replace")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"match")),(new cljsrepl.core.Symbol(null,"replacement"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"match")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"replacement")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/replace")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Replaces all instance of match with replacement in s.\n   match/replacement can be:\n\n   string / string\n   pattern / (string or function of match).","\uFDD0'line",23,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"reverse")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/reverse")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Returns s with its characters reversed.","\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"capitalize")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/capitalize")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Converts first character of the string to upper-case, all other\n  characters to lower-case.","\uFDD0'line",63,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"escape")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"cmap"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cmap")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/escape")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Return a new string, using cmap to escape each character ch\n   from s as follows:\n\n   If (cmap ch) is nil, append ch to the new string.\n   If (cmap ch) is non-nil, append (str (cmap ch)) instead.","\uFDD0'line",138,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"blank?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/blank?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","True is s is nil, empty, or contains only whitespace.","\uFDD0'line",133,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"replace-first")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"match")),(new cljsrepl.core.Symbol(null,"replacement"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"match")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"replacement")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/replace-first")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Replaces the first instance of match with replacement in s.\n   match/replacement can be:\n\n   string / string\n   pattern / (string or function of match).","\uFDD0'line",36,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs"),(new cljsrepl.core.Symbol(null,"trim-newline")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string/trim-newline")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Removes all trailing newline \\n or return \\r characters from\n  string.  Similar to Perl's chomp.","\uFDD0'line",121,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/clojure/string.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"gstringbuf")),(new cljsrepl.core.Symbol(null,"replgoog.string.StringBuffer")),(new cljsrepl.core.Symbol(null,"gstring")),(new cljsrepl.core.Symbol(null,"replgoog.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"replace")),(new cljsrepl.core.Symbol(null,"reverse"))]),"\uFDD0'doc",null,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"replclojure.string"))),old);
}));
