replgoog.provide('replcljs.reader');
replgoog.require('replcljs.core');
replgoog.require('replcljs.analyzer');
replgoog.require('replclojure.string');
replgoog.require('replgoog.string');
replcljs.reader.Reader = {};
replcljs.reader.read_char = (function read_char(reader){
if((function (){var and__3941__auto__ = reader;
if(and__3941__auto__)
{return reader.cljs$reader$Reader$read_char$arity$1;
} else
{return and__3941__auto__;
}
})())
{return reader.cljs$reader$Reader$read_char$arity$1(reader);
} else
{var x__2047__auto__ = (((reader == null))?null:reader);
return (function (){var or__3943__auto__ = (replcljs.reader.read_char[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.reader.read_char["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
replcljs.reader.peek_char = (function peek_char(reader){
if((function (){var and__3941__auto__ = reader;
if(and__3941__auto__)
{return reader.cljs$reader$Reader$peek_char$arity$1;
} else
{return and__3941__auto__;
}
})())
{return reader.cljs$reader$Reader$peek_char$arity$1(reader);
} else
{var x__2047__auto__ = (((reader == null))?null:reader);
return (function (){var or__3943__auto__ = (replcljs.reader.peek_char[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.reader.peek_char["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
replcljs.reader.IPushbackReader = {};
replcljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3941__auto__ = reader;
if(and__3941__auto__)
{return reader.cljs$reader$IPushbackReader$unread$arity$2;
} else
{return and__3941__auto__;
}
})())
{return reader.cljs$reader$IPushbackReader$unread$arity$2(reader,ch);
} else
{var x__2047__auto__ = (((reader == null))?null:reader);
return (function (){var or__3943__auto__ = (replcljs.reader.unread[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.reader.unread["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
replcljs.reader.IndexingReader = {};
replcljs.reader.get_line_number = (function get_line_number(reader){
if((function (){var and__3941__auto__ = reader;
if(and__3941__auto__)
{return reader.cljs$reader$IndexingReader$get_line_number$arity$1;
} else
{return and__3941__auto__;
}
})())
{return reader.cljs$reader$IndexingReader$get_line_number$arity$1(reader);
} else
{var x__2047__auto__ = (((reader == null))?null:reader);
return (function (){var or__3943__auto__ = (replcljs.reader.get_line_number[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.reader.get_line_number["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
replcljs.reader.get_column_number = (function get_column_number(reader){
if((function (){var and__3941__auto__ = reader;
if(and__3941__auto__)
{return reader.cljs$reader$IndexingReader$get_column_number$arity$1;
} else
{return and__3941__auto__;
}
})())
{return reader.cljs$reader$IndexingReader$get_column_number$arity$1(reader);
} else
{var x__2047__auto__ = (((reader == null))?null:reader);
return (function (){var or__3943__auto__ = (replcljs.reader.get_column_number[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.reader.get_column_number["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IndexingReader.get-column-number",reader);
}
}
})().call(null,reader);
}
});
replgoog.provide('replcljs.reader.StringReader');

/**
* @constructor
*/
replcljs.reader.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
replcljs.reader.StringReader.cljs$lang$type = true;
replcljs.reader.StringReader.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.reader/StringReader");
});
replcljs.reader.StringReader.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.reader/StringReader");
});
replcljs.reader.StringReader.prototype.cljs$reader$Reader$ = true;
replcljs.reader.StringReader.prototype.cljs$reader$Reader$read_char$arity$1 = (function (reader){
var self__ = this;
if((self__.s_len > self__.s_pos))
{var r = (self__.s[self__.s_pos]);
self__.s_pos = (self__.s_pos + 1);
return r;
} else
{return null;
}
});
replcljs.reader.StringReader.prototype.cljs$reader$Reader$peek_char$arity$1 = (function (reader){
var self__ = this;
if((self__.s_len > self__.s_pos))
{return (self__.s[self__.s_pos]);
} else
{return null;
}
});
replgoog.provide('replcljs.reader.PushbackReader');

/**
* @constructor
*/
replcljs.reader.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
replcljs.reader.PushbackReader.cljs$lang$type = true;
replcljs.reader.PushbackReader.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.reader/PushbackReader");
});
replcljs.reader.PushbackReader.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.reader/PushbackReader");
});
replcljs.reader.PushbackReader.prototype.cljs$reader$IPushbackReader$ = true;
replcljs.reader.PushbackReader.prototype.cljs$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
if(replcljs.core.truth_(ch))
{if((self__.buf_pos === 0))
{throw (new Error("Pushback buffer is full"));
} else
{}
self__.buf_pos = (self__.buf_pos - 1);
return (self__.buf[self__.buf_pos] = ch);
} else
{return null;
}
});
replcljs.reader.PushbackReader.prototype.cljs$reader$Reader$ = true;
replcljs.reader.PushbackReader.prototype.cljs$reader$Reader$read_char$arity$1 = (function (reader){
var self__ = this;
if((self__.buf_pos < self__.buf_len))
{var r = (self__.buf[self__.buf_pos]);
self__.buf_pos = (self__.buf_pos + 1);
return r;
} else
{return replcljs.reader.read_char.call(null,self__.rdr);
}
});
replcljs.reader.PushbackReader.prototype.cljs$reader$Reader$peek_char$arity$1 = (function (reader){
var self__ = this;
if((self__.buf_pos < self__.buf_len))
{return (self__.buf[self__.buf_pos]);
} else
{return replcljs.reader.peek_char.call(null,self__.rdr);
}
});
replcljs.reader.normalize_newline = (function normalize_newline(rdr,ch){
if(("\r" === ch))
{var c = replcljs.reader.peek_char.call(null,rdr);
if(("\f" === c))
{replcljs.reader.read_char.call(null,rdr);
} else
{}
return "\n";
} else
{return ch;
}
});
replgoog.provide('replcljs.reader.IndexingPushbackReader');

/**
* @constructor
*/
replcljs.reader.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
})
replcljs.reader.IndexingPushbackReader.cljs$lang$type = true;
replcljs.reader.IndexingPushbackReader.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.reader/IndexingPushbackReader");
});
replcljs.reader.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.reader/IndexingPushbackReader");
});
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$IndexingReader$ = true;
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$IndexingReader$get_line_number$arity$1 = (function (reader){
var self__ = this;
return (self__.line + 1);
});
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$IndexingReader$get_column_number$arity$1 = (function (reader){
var self__ = this;
return self__.column;
});
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$IPushbackReader$ = true;
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
if(replcljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
} else
{}
self__.line_start_QMARK_ = self__.prev;
self__.column = (self__.column - 1);
return replcljs.reader.unread.call(null,self__.rdr,ch);
});
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$Reader$ = true;
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$Reader$read_char$arity$1 = (function (reader){
var self__ = this;
var temp__4092__auto__ = replcljs.reader.read_char.call(null,self__.rdr);
if(replcljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;
var ch__$1 = replcljs.reader.normalize_newline.call(null,self__.rdr,ch);
self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = replcljs.reader.newline_QMARK_.call(null,ch__$1);
if(replcljs.core.truth_(self__.line_start_QMARK_))
{self__.column = 0;
self__.line = (self__.line + 1);
} else
{}
self__.column = (self__.column + 1);
return ch__$1;
} else
{return null;
}
});
replcljs.reader.IndexingPushbackReader.prototype.cljs$reader$Reader$peek_char$arity$1 = (function (reader){
var self__ = this;
return replcljs.reader.peek_char.call(null,self__.rdr);
});
/**
* Creates a StringReader from a given string
*/
replcljs.reader.string_reader = (function string_reader(s){
return (new replcljs.reader.StringReader(s,replcljs.core.count.call(null,s),0));
});
/**
* Creates a PushbackReader from a given string
*/
replcljs.reader.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){
return string_push_back_reader.call(null,s,1);
});
var string_push_back_reader__2 = (function (s,buf_len){
return (new replcljs.reader.PushbackReader(replcljs.reader.string_reader.call(null,s),replcljs.core.object_array.call(null,buf_len),buf_len,buf_len));
});
string_push_back_reader = function(s,buf_len){
switch(arguments.length){
case 1:
return string_push_back_reader__1.call(this,s);
case 2:
return string_push_back_reader__2.call(this,s,buf_len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
string_push_back_reader.cljs$lang$arity$1 = string_push_back_reader__1;
string_push_back_reader.cljs$lang$arity$2 = string_push_back_reader__2;
return string_push_back_reader;
})()
;
/**
* Creates an IndexingPushbackReader from a given string
*/
replcljs.reader.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s){
return (new replcljs.reader.IndexingPushbackReader(replcljs.reader.string_push_back_reader.call(null,s),0,1,true,null));
});
var indexing_push_back_reader__2 = (function (s,buf_len){
return (new replcljs.reader.IndexingPushbackReader(replcljs.reader.string_push_back_reader.call(null,s,buf_len),0,1,true,null));
});
indexing_push_back_reader = function(s,buf_len){
switch(arguments.length){
case 1:
return indexing_push_back_reader__1.call(this,s);
case 2:
return indexing_push_back_reader__2.call(this,s,buf_len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
indexing_push_back_reader.cljs$lang$arity$1 = indexing_push_back_reader__1;
indexing_push_back_reader.cljs$lang$arity$2 = indexing_push_back_reader__2;
return indexing_push_back_reader;
})()
;
/**
* Checks whether a given character is whitespace
*/
replcljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3943__auto__ = replgoog.string.isBreakingWhitespace(ch);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
replcljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return replgoog.string.isNumeric(ch);
});
/**
* Checks whether the character is a newline.
*/
replcljs.reader.newline_QMARK_ = (function newline_QMARK_(ch){
return ("\n" === ch);
});
/**
* Checks whether the character begins a comment.
*/
replcljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
replcljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3943__auto__ = replcljs.reader.numeric_QMARK_.call(null,initch);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto__ = (function (){var or__3943__auto____$1 = ("+" === initch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return ("-" === initch);
}
})();
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.reader.numeric_QMARK_.call(null,replcljs.reader.peek_char.call(null,reader));
} else
{return and__3941__auto__;
}
}
});
/**
* @param {...*} var_args
*/
replcljs.reader.reader_error = (function() {
var reader_error__delegate = function (rdr,msg){
var error_msg = replcljs.core.apply.call(null,replcljs.core.str,msg);
throw (new Error([replcljs.core.str(error_msg),replcljs.core.str((((function (){var G__4304 = rdr;
if(G__4304)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4304.cljs$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__4304.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.reader.IndexingReader,G__4304);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.reader.IndexingReader,G__4304);
}
})())?[replcljs.core.str(", on line: "),replcljs.core.str(replcljs.reader.get_line_number.call(null,rdr)),replcljs.core.str(", on column: "),replcljs.core.str(replcljs.reader.get_column_number.call(null,rdr))].join(''):null))].join('')));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (replgoog.isDef(var_args)) {
  msg = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__4305){
var rdr = replcljs.core.first(arglist__4305);
var msg = replcljs.core.rest(arglist__4305);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
replcljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3941__auto__ = !((ch === "#"));
if(and__3941__auto__)
{var and__3941__auto____$1 = !((ch === "'"));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = !((ch === ":"));
if(and__3941__auto____$2)
{return replcljs.reader.macros.call(null,ch);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
replcljs.reader.read_token = (function read_token(rdr,initch){
var sb = (new replgoog.string.StringBuffer(initch));
var ch = replcljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3943__auto__ = (ch == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = replcljs.reader.whitespace_QMARK_.call(null,ch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return replcljs.reader.macro_terminating_QMARK_.call(null,ch);
}
}
})())
{replcljs.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__4306 = (function (){sb.append(ch);
return sb;
})();
var G__4307 = replcljs.reader.read_char.call(null,rdr);
sb = G__4306;
ch = G__4307;
continue;
}
}
break;
}
});
/**
* Reads to the end of a line and returns the line.
*/
replcljs.reader.read_line = (function read_line(rdr){
var sb = (new replgoog.string.StringBuffer());
var ch = replcljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var and__3941__auto__ = (ch == null);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,0,sb.getLength());
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{if((function (){var or__3943__auto__ = (ch === "\n");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (ch === "\r");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return (ch == null);
}
}
})())
{return sb.toString();
} else
{if("\uFDD0'else")
{{
var G__4308 = (function (){sb.append(ch);
return sb;
})();
var G__4309 = replcljs.reader.read_char.call(null,rdr);
sb = G__4308;
ch = G__4309;
continue;
}
} else
{return null;
}
}
}
break;
}
});
replcljs.reader.line_seq = (function line_seq(rdr){
var temp__4092__auto__ = replcljs.reader.read_line.call(null,rdr);
if(replcljs.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return replcljs.core.cons.call(null,line,(new replcljs.core.LazySeq(null,false,(function (){
return line_seq.call(null,rdr);
}),null)));
} else
{return null;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
replcljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch = replcljs.reader.read_char.call(null,reader);
if((function (){var or__3943__auto__ = (ch === "\n");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (ch === "\r");
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return (ch == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
replcljs.reader.int_pattern = replcljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$");
replcljs.reader.ratio_pattern = replcljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
replcljs.reader.float_pattern = replcljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
replcljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
replcljs.reader.match_int = (function match_int(s){
var groups = replcljs.reader.re_find_STAR_.call(null,replcljs.reader.int_pattern,s);
var group3 = (groups[2]);
if(!((function (){var or__3943__auto__ = (group3 == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (group3.length < 1);
}
})()))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);
var a = (replcljs.core.truth_((groups[3]))?[(groups[3]),10]:(replcljs.core.truth_((groups[4]))?[(groups[4]),16]:(replcljs.core.truth_((groups[5]))?[(groups[5]),8]:(replcljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n = (a[0]);
var radix = (a[1]);
if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
replcljs.reader.match_ratio = (function match_ratio(s){
var groups = replcljs.reader.re_find_STAR_.call(null,replcljs.reader.ratio_pattern,s);
var numinator = (groups[1]);
var denominator = (groups[2]);
return (parseInt(numinator) / parseInt(denominator));
});
replcljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
replcljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches = re.exec(s);
if((function (){var and__3941__auto__ = !((matches == null));
if(and__3941__auto__)
{return ((matches[0]) === s);
} else
{return and__3941__auto__;
}
})())
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
replcljs.reader.match_number = (function match_number(s){
if(replcljs.core.truth_(replcljs.reader.re_matches_STAR_.call(null,replcljs.reader.int_pattern,s)))
{return replcljs.reader.match_int.call(null,s);
} else
{if(replcljs.core.truth_(replcljs.reader.re_matches_STAR_.call(null,replcljs.reader.ratio_pattern,s)))
{return replcljs.reader.match_ratio.call(null,s);
} else
{if(replcljs.core.truth_(replcljs.reader.re_matches_STAR_.call(null,replcljs.reader.float_pattern,s)))
{return replcljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
replcljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
replcljs.reader.read_2_chars = (function read_2_chars(reader){
return (new replgoog.string.StringBuffer(replcljs.reader.read_char.call(null,reader),replcljs.reader.read_char.call(null,reader))).toString();
});
replcljs.reader.read_4_chars = (function read_4_chars(reader){
return (new replgoog.string.StringBuffer(replcljs.reader.read_char.call(null,reader),replcljs.reader.read_char.call(null,reader),replcljs.reader.read_char.call(null,reader),replcljs.reader.read_char.call(null,reader))).toString();
});
replcljs.reader.unicode_2_pattern = replcljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
replcljs.reader.octal_pattern = replcljs.core.re_pattern.call(null,"[0-7]{1,3}");
replcljs.reader.unicode_4_pattern = replcljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
replcljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(replcljs.core.truth_(replcljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return replcljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
/**
* @param {...*} var_args
*/
replcljs.reader.make_unicode_char = (function() {
var make_unicode_char__delegate = function (code_str,p__4310){
var vec__4312 = p__4310;
var base = replcljs.core.nth.call(null,vec__4312,0,null);
var base__$1 = (function (){var or__3943__auto__ = base;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return 16;
}
})();
var code = parseInt(code_str,base__$1);
return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__4310 = null;
if (replgoog.isDef(var_args)) {
  p__4310 = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return make_unicode_char__delegate.call(this, code_str, p__4310);
};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__4313){
var code_str = replcljs.core.first(arglist__4313);
var p__4310 = replcljs.core.rest(arglist__4313);
return make_unicode_char__delegate(code_str, p__4310);
});
make_unicode_char.cljs$lang$arity$variadic = make_unicode_char__delegate;
return make_unicode_char;
})()
;
replcljs.reader.escape_char = (function escape_char(buffer,reader){
var ch = replcljs.reader.read_char.call(null,reader);
var mapresult = replcljs.reader.escape_char_map.call(null,ch);
if(replcljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return replcljs.reader.make_unicode_char.call(null,replcljs.reader.validate_unicode_escape.call(null,replcljs.reader.unicode_2_pattern,reader,ch,replcljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return replcljs.reader.make_unicode_char.call(null,replcljs.reader.validate_unicode_escape.call(null,replcljs.reader.unicode_4_pattern,reader,ch,replcljs.reader.read_4_chars.call(null,reader)));
} else
{if(replcljs.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if("\uFDD0'else")
{return replcljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
replcljs.reader.read_past = (function read_past(pred,rdr){
var ch = replcljs.reader.read_char.call(null,rdr);
while(true){
if(replcljs.core.truth_(pred.call(null,ch)))
{{
var G__4314 = replcljs.reader.read_char.call(null,rdr);
ch = G__4314;
continue;
}
} else
{return ch;
}
break;
}
});
replcljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a = replcljs.core.transient$.call(null,replcljs.core.PersistentVector.EMPTY);
while(true){
var ch = replcljs.reader.read_past.call(null,replcljs.reader.whitespace_QMARK_,rdr);
if(replcljs.core.truth_(ch))
{} else
{replcljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return replcljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4090__auto__ = replcljs.reader.macros.call(null,ch);
if(replcljs.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;
var mret = macrofn.call(null,rdr,ch);
{
var G__4315 = (((mret === rdr))?a:replcljs.core.conj_BANG_.call(null,a,mret));
a = G__4315;
continue;
}
} else
{replcljs.reader.unread.call(null,rdr,ch);
var o = replcljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__4316 = (((o === rdr))?a:replcljs.core.conj_BANG_.call(null,a,o));
a = G__4316;
continue;
}
}
}
break;
}
});
replcljs.reader.not_implemented = (function not_implemented(rdr,ch){
return replcljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
replcljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch = replcljs.reader.read_char.call(null,rdr);
var dm = replcljs.reader.dispatch_macros.call(null,ch);
if(replcljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4090__auto__ = replcljs.reader.maybe_read_tagged_type.call(null,rdr,ch);
if(replcljs.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;
return obj;
} else
{return replcljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
replcljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return replcljs.reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
replcljs.reader.read_list = (function read_list(rdr,_){
var vec__4319 = (((function (){var G__4320 = rdr;
if(G__4320)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4320.cljs$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__4320.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.reader.IndexingReader,G__4320);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.reader.IndexingReader,G__4320);
}
})())?replcljs.core.PersistentVector.fromArray([replcljs.reader.get_line_number.call(null,rdr),(replcljs.reader.get_column_number.call(null,rdr) - 1)], true):null);
var line = replcljs.core.nth.call(null,vec__4319,0,null);
var column = replcljs.core.nth.call(null,vec__4319,1,null);
var the_list = replcljs.reader.read_delimited_list.call(null,")",rdr,true);
if(replcljs.core.empty_QMARK_.call(null,the_list))
{return replcljs.core.List.EMPTY;
} else
{return replcljs.core.with_meta.call(null,replcljs.core.apply.call(null,replcljs.core.list,the_list),(replcljs.core.truth_(line)?replcljs.core.ObjMap.fromObject(["\uFDD0'line","\uFDD0'column"],{"\uFDD0'line":line,"\uFDD0'column":column}):null));
}
});
replcljs.reader.read_comment = replcljs.reader.skip_line;
replcljs.reader.read_vector = (function read_vector(rdr,_){
return replcljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
replcljs.reader.read_map = (function read_map(rdr,_){
var l = replcljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(replcljs.core.odd_QMARK_.call(null,replcljs.core.count.call(null,l)))
{replcljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return replcljs.core.apply.call(null,replcljs.core.hash_map,l);
});
replcljs.reader.read_number = (function read_number(reader,initch){
var buffer = (new replgoog.string.StringBuffer(initch));
var ch = replcljs.reader.read_char.call(null,reader);
while(true){
if(replcljs.core.truth_((function (){var or__3943__auto__ = (ch == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = replcljs.reader.whitespace_QMARK_.call(null,ch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return replcljs.reader.macros.call(null,ch);
}
}
})()))
{replcljs.reader.unread.call(null,reader,ch);
var s = buffer.toString();
var or__3943__auto__ = replcljs.reader.match_number.call(null,s);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__4321 = (function (){buffer.append(ch);
return buffer;
})();
var G__4322 = replcljs.reader.read_char.call(null,reader);
buffer = G__4321;
ch = G__4322;
continue;
}
}
break;
}
});
replcljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer = (new replgoog.string.StringBuffer());
var ch = replcljs.reader.read_char.call(null,reader);
while(true){
if((ch == null))
{return replcljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__4323 = (function (){buffer.append(replcljs.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__4324 = replcljs.reader.read_char.call(null,reader);
buffer = G__4323;
ch = G__4324;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if("\uFDD0'default")
{{
var G__4325 = (function (){buffer.append(ch);
return buffer;
})();
var G__4326 = replcljs.reader.read_char.call(null,reader);
buffer = G__4325;
ch = G__4326;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
replcljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
replcljs.reader.read_symbol = (function read_symbol(reader,initch){
var token = replcljs.reader.read_token.call(null,reader,initch);
if(replcljs.core.truth_(replgoog.string.contains(token,"/")))
{return replcljs.core.symbol.call(null,replcljs.core.subs.call(null,token,0,token.indexOf("/")),replcljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return replcljs.reader.special_symbols.call(null,token,replcljs.core.symbol.call(null,token));
}
});
replcljs.reader.read_keyword = (function read_keyword(reader,initch){
var token = replcljs.reader.read_token.call(null,reader,replcljs.reader.read_char.call(null,reader));
var parts = replclojure.string.split.call(null,token,/\//);
var name = replcljs.core.last.call(null,parts);
var ns = (((replcljs.core.count.call(null,parts) > 1))?replclojure.string.join.call(null,"/",replcljs.core.butlast.call(null,parts)):null);
var issue = (((replcljs.core.last.call(null,ns) === ":"))?"namespace can't ends with \":\"":(((replcljs.core.last.call(null,name) === ":"))?"name can't end with \":\"":(((replcljs.core.last.call(null,name) === "/"))?"name can't end with \"/\"":(((replcljs.core.count.call(null,replclojure.string.split.call(null,token,/::/)) > 1))?"name can't contain \"::\"":null))));
if(replcljs.core.truth_(issue))
{return replcljs.reader.reader_error.call(null,reader,"Invalid token (",issue,"): ",token);
} else
{if((function (){var and__3941__auto__ = replcljs.core.not.call(null,ns);
if(and__3941__auto__)
{return (replcljs.core.first.call(null,name) === ":");
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.keyword.call(null,replcljs.core._STAR_ns_sym_STAR_,replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.rest.call(null,name)));
} else
{return replcljs.core.keyword.call(null,ns,name);
}
}
});
replcljs.reader.desugar_meta = (function desugar_meta(f){
if(replcljs.core.symbol_QMARK_.call(null,f))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(replcljs.core.string_QMARK_.call(null,f))
{return replcljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(replcljs.core.keyword_QMARK_.call(null,f))
{return replcljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
replcljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return replcljs.core.list.call(null,sym,replcljs.reader.read.call(null,rdr,true,null,true));
});
});
replcljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return replcljs.reader.reader_error.call(null,rdr,msg);
});
});
replcljs.reader.read_meta = (function read_meta(rdr,_){
var vec__4330 = (((function (){var G__4331 = rdr;
if(G__4331)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4331.cljs$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__4331.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.reader.IndexingReader,G__4331);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.reader.IndexingReader,G__4331);
}
})())?replcljs.core.PersistentVector.fromArray([replcljs.reader.get_line_number.call(null,rdr),(replcljs.reader.get_column_number.call(null,rdr) - 1)], true):null);
var line = replcljs.core.nth.call(null,vec__4330,0,null);
var column = replcljs.core.nth.call(null,vec__4330,1,null);
var m = replcljs.reader.desugar_meta.call(null,replcljs.reader.read.call(null,rdr,true,null,true));
if(replcljs.core.map_QMARK_.call(null,m))
{} else
{replcljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = replcljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__4332 = o;
if(G__4332)
{if((function (){var or__3943__auto__ = (G__4332.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4332.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__4332.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IWithMeta,G__4332);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IWithMeta,G__4332);
}
})())
{var m__$1 = (replcljs.core.truth_((function (){var and__3941__auto__ = line;
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.seq_QMARK_.call(null,o);
} else
{return and__3941__auto__;
}
})())?replcljs.core.assoc.call(null,m,"\uFDD0'line",line,"\uFDD0'column",column):m);
return replcljs.core.with_meta.call(null,o,replcljs.core.merge.call(null,replcljs.core.meta.call(null,o),m__$1));
} else
{return replcljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
replcljs.reader.UNQUOTE = "\uFDD0'__thisInternalKeywordRepresentsUnquoteToTheReader__";
replcljs.reader.UNQUOTE_SPLICING = "\uFDD0'__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__";
replcljs.reader._STAR_gensym_env_STAR_ = replcljs.core.atom.call(null,null);
replcljs.reader._STAR_arg_env_STAR_ = replcljs.core.atom.call(null,null);
replcljs.reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){
var and__3941__auto__ = (function (){var G__4334 = form;
if(G__4334)
{if((function (){var or__3943__auto__ = (G__4334.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4334.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4334.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__4334);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__4334);
}
})();
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,replcljs.core.first.call(null,form),replcljs.reader.UNQUOTE);
} else
{return and__3941__auto__;
}
});
replcljs.reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){
var and__3941__auto__ = (function (){var G__4336 = form;
if(G__4336)
{if((function (){var or__3943__auto__ = (G__4336.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4336.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4336.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__4336);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__4336);
}
})();
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core._EQ_.call(null,replcljs.core.first.call(null,form),replcljs.reader.UNQUOTE_SPLICING);
} else
{return and__3941__auto__;
}
});
replcljs.reader.sqExpandList = (function sqExpandList(sq){
return replcljs.core.doall.call(null,(function (){var iter__2144__auto__ = (function iter__4339(s__4340){
return (new replcljs.core.LazySeq(null,false,(function (){
var s__4340__$1 = s__4340;
while(true){
var temp__4092__auto__ = replcljs.core.seq.call(null,s__4340__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var item = replcljs.core.first.call(null,xs__4579__auto__);
return replcljs.core.cons.call(null,(replcljs.core.truth_(replcljs.reader.isUnquote_QMARK_.call(null,item))?replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"list")),replcljs.core.second.call(null,item)):(replcljs.core.truth_(replcljs.reader.isUnquoteSplicing_QMARK_.call(null,item))?replcljs.core.second.call(null,item):(("\uFDD0'else")?replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"list")),replcljs.reader.syntaxQuote.call(null,item)):null))),iter__4339.call(null,replcljs.core.rest.call(null,s__4340__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,sq);
})());
});
replcljs.reader.syntaxQuote = (function syntaxQuote(form){
if(replcljs.core.truth_(replcljs.core._lookup.call(null,replcljs.analyzer.specials,form,null)))
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),form);
} else
{if(replcljs.core.symbol_QMARK_.call(null,form))
{var sym = form;
var name = replcljs.core.name.call(null,sym);
var ns = replcljs.core.namespace.call(null,sym);
var var$ = replcljs.analyzer.resolve_existing_var.call(null,replcljs.analyzer.empty_env.call(null),sym);
if((function (){var and__3941__auto__ = replcljs.core.not.call(null,ns);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,"#",replcljs.core.last.call(null,name));
} else
{return and__3941__auto__;
}
})())
{var new_name = replcljs.core.subs.call(null,name,0,(replcljs.core.count.call(null,name) - 1));
var gmap = replcljs.core.deref.call(null,replcljs.reader._STAR_gensym_env_STAR_);
if(replcljs.core.not.call(null,gmap))
{replcljs.reader.reader_error.call(null,null,"Gensym literal not in syntax-quote");
} else
{}
var gs = (function (){var or__3943__auto__ = replcljs.core._lookup.call(null,gmap,sym,null);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.gensym.call(null,[replcljs.core.str(new_name),replcljs.core.str("__auto__")].join(''));
}
})();
replcljs.core.swap_BANG_.call(null,replcljs.reader._STAR_gensym_env_STAR_,replcljs.core.assoc,sym,gs);
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),gs);
} else
{if((function (){var and__3941__auto__ = replcljs.core.not.call(null,ns);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,".",replcljs.core.last.call(null,name));
} else
{return and__3941__auto__;
}
})())
{var new_name = replcljs.core.subs.call(null,name,0,(replcljs.core.count.call(null,name) - 1));
var new_var = replcljs.analyzer.resolve_existing_var.call(null,replcljs.analyzer.empty_env.call(null),replcljs.core.symbol.call(null,new_name));
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),(new replcljs.core.Keyword("\uFDD0'name")).call(null,new_var));
} else
{if((function (){var and__3941__auto__ = replcljs.core.not.call(null,ns);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,".",replcljs.core.first.call(null,name));
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),sym);
} else
{if("\uFDD0'else")
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),(new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_existing_var.call(null,replcljs.analyzer.empty_env.call(null),sym)));
} else
{return null;
}
}
}
}
} else
{if(replcljs.core.truth_(replcljs.reader.isUnquote_QMARK_.call(null,form)))
{return replcljs.core.second.call(null,form);
} else
{if(replcljs.core.truth_(replcljs.reader.isUnquoteSplicing_QMARK_.call(null,form)))
{return replcljs.reader.reader_error.call(null,replcljs.reader.rdr,"Reader ~@ splice not in list");
} else
{if((form == null))
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),form);
} else
{if((function (){var G__4348 = form;
if(G__4348)
{if((function (){var or__3943__auto__ = (G__4348.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4348.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__4348.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ICollection,G__4348);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ICollection,G__4348);
}
})())
{if((function (){var G__4349 = form;
if(G__4349)
{if((function (){var or__3943__auto__ = (G__4349.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4349.cljs$core$IRecord$;
}
})())
{return true;
} else
{if((!G__4349.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IRecord,G__4349);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IRecord,G__4349);
}
})())
{return form;
} else
{if((function (){var G__4350 = form;
if(G__4350)
{if((function (){var or__3943__auto__ = (G__4350.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4350.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__4350.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMap,G__4350);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMap,G__4350);
}
})())
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"apply")),(new replcljs.core.Symbol(null,"hash-map")),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"seq")),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"concat")),replcljs.reader.sqExpandList.call(null,replcljs.core.apply.call(null,replcljs.core.concat,replcljs.core.seq.call(null,form))))));
} else
{if((function (){var G__4351 = form;
if(G__4351)
{if((function (){var or__3943__auto__ = (G__4351.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4351.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__4351.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IVector,G__4351);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IVector,G__4351);
}
})())
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"apply")),(new replcljs.core.Symbol(null,"vector")),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"seq")),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"concat")),replcljs.reader.sqExpandList.call(null,form))));
} else
{if((function (){var G__4352 = form;
if(G__4352)
{if((function (){var or__3943__auto__ = (G__4352.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4352.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__4352.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISet,G__4352);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISet,G__4352);
}
})())
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"apply")),(new replcljs.core.Symbol(null,"hash-set")),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"seq")),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"concat")),replcljs.reader.sqExpandList.call(null,replcljs.core.seq.call(null,form)))));
} else
{if(replcljs.core.truth_((function (){var or__3943__auto__ = (function (){var G__4353 = form;
if(G__4353)
{if((function (){var or__3943__auto__ = (G__4353.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4353.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4353.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__4353);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__4353);
}
})();
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var G__4354 = form;
if(G__4354)
{if((function (){var or__3943__auto____$1 = (G__4354.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__4354.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__4354.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IList,G__4354);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IList,G__4354);
}
}
})()))
{var temp__4090__auto__ = replcljs.core.seq.call(null,form);
if(temp__4090__auto__)
{var sq = temp__4090__auto__;
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"seq")),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"concat")),replcljs.reader.sqExpandList.call(null,sq)));
} else
{return replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"list")),null);
}
} else
{if("\uFDD0'else")
{return replcljs.reader.reader_error.call(null,replcljs.reader.rdr,"Unknown Collection type");
} else
{return null;
}
}
}
}
}
}
} else
{if((function (){var or__3943__auto__ = replcljs.core.keyword_QMARK_.call(null,form);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = replcljs.core.number_QMARK_.call(null,form);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return replcljs.core.string_QMARK_.call(null,form);
}
}
})())
{return form;
} else
{if("\uFDD0'else")
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),form);
} else
{return null;
}
}
}
}
}
}
}
}
});
replcljs.reader.read_syntax_quote = (function read_syntax_quote(rdr,_){
var _STAR_gensym_env_STAR_4357 = replcljs.reader._STAR_gensym_env_STAR_;
try{replcljs.reader._STAR_gensym_env_STAR_ = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
var form = replcljs.reader.read.call(null,rdr,true,null,true);
return replcljs.reader.syntaxQuote.call(null,form);
}finally {replcljs.reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_4357;
}});
replcljs.reader.read_unquote = (function read_unquote(rdr,_){
var ch = replcljs.reader.read_char.call(null,rdr);
if(replcljs.core._EQ_.call(null,null,ch))
{return replcljs.reader.reader_error.call(null,rdr,"EOF while reading unquote character");
} else
{if(replcljs.core._EQ_.call(null,"@",ch))
{var o = replcljs.reader.read.call(null,rdr,true,null,true);
return replcljs.core.list.call(null,replcljs.reader.UNQUOTE_SPLICING,o);
} else
{if("\uFDD0'else")
{replcljs.reader.unread.call(null,rdr,ch);
var o = replcljs.reader.read.call(null,rdr,true,null,true);
return replcljs.core.list.call(null,replcljs.reader.UNQUOTE,o);
} else
{return null;
}
}
}
});
replcljs.reader.read_character = (function read_character(rdr,_){
var ch = replcljs.reader.read_char.call(null,rdr);
if(replcljs.core._EQ_.call(null,null,ch))
{replcljs.reader.reader_error.call(null,rdr,"EOF while reading character constant");
} else
{}
var token = replcljs.reader.read_token.call(null,rdr,ch);
if(replcljs.core._EQ_.call(null,1,replcljs.core.count.call(null,token)))
{return token;
} else
{if(replcljs.core._EQ_.call(null,"newline",token))
{return "\n";
} else
{if(replcljs.core._EQ_.call(null,"space",token))
{return " ";
} else
{if(replcljs.core._EQ_.call(null,"tab",token))
{return "\t";
} else
{if(replcljs.core._EQ_.call(null,"backspace",token))
{return "\b";
} else
{if(replcljs.core._EQ_.call(null,"formfeed",token))
{return "\f";
} else
{if(replcljs.core._EQ_.call(null,"return",token))
{return "\r";
} else
{if(replcljs.core._EQ_.call(null,"u",replcljs.core.first.call(null,token)))
{var chars = replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.rest.call(null,token));
replcljs.reader.validate_unicode_escape.call(null,replcljs.reader.unicode_4_pattern,rdr,"u",chars);
var c = replcljs.reader.make_unicode_char.call(null,chars,16);
var cval = parseInt(chars,16);
if((function (){var and__3941__auto__ = (cval >= 55296);
if(and__3941__auto__)
{return (cval <= 57343);
} else
{return and__3941__auto__;
}
})())
{replcljs.reader.reader_error.call(null,rdr,"Invalid character constant: \\",token);
} else
{}
return c;
} else
{if(replcljs.core._EQ_.call(null,"o",replcljs.core.first.call(null,token)))
{var chars = replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.rest.call(null,token));
replcljs.reader.validate_unicode_escape.call(null,replcljs.reader.octal_pattern,rdr,"o",chars);
var c = replcljs.reader.make_unicode_char.call(null,chars,8);
var cval = parseInt(chars,8);
if((cval > 255))
{replcljs.reader.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
} else
{}
return c;
} else
{if("\uFDD0'else")
{return replcljs.reader.reader_error.call(null,rdr,"Unsupported character: \\",token);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});
replcljs.reader.garg = (function garg(n){
var pre = ((replcljs.core._EQ_.call(null,n,-1))?"rest":[replcljs.core.str("p"),replcljs.core.str(n)].join(''));
return replcljs.core.symbol.call(null,[replcljs.core.str(replcljs.core.gensym.call(null,pre)),replcljs.core.str("#")].join(''));
});
replcljs.reader.read_fn = (function read_fn(rdr,_){
if(replcljs.core.truth_(replcljs.core.deref.call(null,replcljs.reader._STAR_arg_env_STAR_)))
{replcljs.reader.reader_error.call(null,null,"nested #()s are not allowed");
} else
{}
var _STAR_arg_env_STAR_4363 = replcljs.reader._STAR_arg_env_STAR_;
try{replcljs.reader._STAR_arg_env_STAR_ = replcljs.core.atom.call(null,replcljs.core.sorted_map.call(null));
replcljs.reader.unread.call(null,rdr,"(");
var form = replcljs.reader.read.call(null,rdr,true,null,true);
var argsyms = replcljs.core.deref.call(null,replcljs.reader._STAR_arg_env_STAR_);
var rargs = replcljs.core.rseq.call(null,argsyms);
var highpair = replcljs.core.first.call(null,rargs);
var higharg = (replcljs.core.truth_(highpair)?replcljs.core.key.call(null,highpair):0);
var args = (((higharg > 0))?replcljs.core.doall.call(null,(function (){var iter__2144__auto__ = (function iter__4365(s__4366){
return (new replcljs.core.LazySeq(null,false,(function (){
var s__4366__$1 = s__4366;
while(true){
var temp__4092__auto__ = replcljs.core.seq.call(null,s__4366__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var i = replcljs.core.first.call(null,xs__4579__auto__);
return replcljs.core.cons.call(null,(function (){var or__3943__auto__ = replcljs.core._lookup.call(null,argsyms,i,null);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.reader.garg.call(null,i);
}
})(),iter__4365.call(null,replcljs.core.rest.call(null,s__4366__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,replcljs.core.range.call(null,1,(1 + higharg)));
})()):replcljs.reader.args);
var restsym = replcljs.core._lookup.call(null,argsyms,-1,null);
var args__$1 = (replcljs.core.truth_(restsym)?replcljs.core.concat.call(null,args,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"&")),restsym], true)):args);
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"fn*")),replcljs.core.vec.call(null,args__$1),form);
}finally {replcljs.reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_4363;
}});
replcljs.reader.registerArg = (function registerArg(n){
var argsyms = replcljs.core.deref.call(null,replcljs.reader._STAR_arg_env_STAR_);
if(replcljs.core.truth_(argsyms))
{} else
{replcljs.reader.reader_error.call(null,replcljs.reader._,"arg literal not in #()");
}
var ret = replcljs.core._lookup.call(null,argsyms,n,null);
if(replcljs.core.truth_(ret))
{return ret;
} else
{var ret__$1 = replcljs.reader.garg.call(null,n);
replcljs.core.swap_BANG_.call(null,replcljs.reader._STAR_arg_env_STAR_,replcljs.core.assoc,n,ret__$1);
return ret__$1;
}
});
replcljs.reader.read_arg = (function read_arg(rdr,pct){
if(replcljs.core.not.call(null,replcljs.core.deref.call(null,replcljs.reader._STAR_arg_env_STAR_)))
{return replcljs.reader.read_symbol.call(null,rdr,"%");
} else
{var ch = replcljs.reader.peek_char.call(null,rdr);
if((function (){var or__3943__auto__ = (ch == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = replcljs.reader.whitespace_QMARK_.call(null,ch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return replcljs.reader.macro_terminating_QMARK_.call(null,ch);
}
}
})())
{return replcljs.reader.registerArg.call(null,1);
} else
{var n = replcljs.reader.read.call(null,rdr,true,null,true);
if(replcljs.core._EQ_.call(null,(new replcljs.core.Symbol(null,"&")),n))
{return replcljs.reader.registerArg.call(null,-1);
} else
{if(!(replcljs.core.number_QMARK_.call(null,n)))
{return replcljs.reader.reader_error.call(null,rdr,"arg literal must be %, %& or %integer");
} else
{if("\uFDD0'else")
{return replcljs.reader.registerArg.call(null,replcljs.core.int$.call(null,n));
} else
{return null;
}
}
}
}
}
});
replcljs.reader.read_set = (function read_set(rdr,_){
return replcljs.core.set.call(null,replcljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
replcljs.reader.read_regex = (function read_regex(reader){
var buffer = "";
var ch = replcljs.reader.read_char.call(null,reader);
while(true){
if((ch == null))
{return replcljs.reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__4367 = [replcljs.core.str(buffer),replcljs.core.str(ch),replcljs.core.str(replcljs.reader.read_char.call(null,reader))].join('');
var G__4368 = replcljs.reader.read_char.call(null,reader);
buffer = G__4367;
ch = G__4368;
continue;
}
} else
{if(("\"" === ch))
{return replcljs.core.re_pattern.call(null,buffer);
} else
{if("\uFDD0'default")
{{
var G__4369 = [replcljs.core.str(buffer),replcljs.core.str(ch)].join('');
var G__4370 = replcljs.reader.read_char.call(null,reader);
buffer = G__4369;
ch = G__4370;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
replcljs.reader.read_discard = (function read_discard(rdr,_){
replcljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
replcljs.reader.macros = (function macros(c){
if((c === "\""))
{return replcljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return replcljs.reader.read_keyword;
} else
{if((c === ";"))
{return replcljs.reader.read_comment;
} else
{if((c === "'"))
{return replcljs.reader.wrapping_reader.call(null,(new replcljs.core.Symbol(null,"quote")));
} else
{if((c === "@"))
{return replcljs.reader.wrapping_reader.call(null,(new replcljs.core.Symbol(null,"deref")));
} else
{if((c === "^"))
{return replcljs.reader.read_meta;
} else
{if((c === "`"))
{return replcljs.reader.read_syntax_quote;
} else
{if((c === "~"))
{return replcljs.reader.read_unquote;
} else
{if((c === "("))
{return replcljs.reader.read_list;
} else
{if((c === ")"))
{return replcljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return replcljs.reader.read_vector;
} else
{if((c === "]"))
{return replcljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return replcljs.reader.read_map;
} else
{if((c === "}"))
{return replcljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return replcljs.reader.read_character;
} else
{if((c === "%"))
{return replcljs.reader.read_arg;
} else
{if((c === "#"))
{return replcljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
replcljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return replcljs.reader.read_set;
} else
{if((s === "("))
{return replcljs.reader.read_fn;
} else
{if((s === "<"))
{return replcljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return replcljs.reader.read_regex;
} else
{if((s === "!"))
{return replcljs.reader.read_comment;
} else
{if((s === "_"))
{return replcljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
replcljs.reader.read = (function() {
var read = null;
var read__1 = (function (reader){
return read.call(null,reader,true,null);
});
var read__3 = (function (reader,eof_is_error,sentinel){
return read.call(null,reader,eof_is_error,sentinel,false);
});
var read__4 = (function (reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = replcljs.reader.read_char.call(null,reader);
if((ch == null))
{if(replcljs.core.truth_(eof_is_error))
{return replcljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(replcljs.reader.whitespace_QMARK_.call(null,ch))
{{
var G__4371 = reader;
var G__4372 = eof_is_error;
var G__4373 = sentinel;
var G__4374 = is_recursive;
reader = G__4371;
eof_is_error = G__4372;
sentinel = G__4373;
is_recursive = G__4374;
continue;
}
} else
{if(replcljs.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__4375 = replcljs.reader.read_comment.call(null,reader,ch);
var G__4376 = eof_is_error;
var G__4377 = sentinel;
var G__4378 = is_recursive;
reader = G__4375;
eof_is_error = G__4376;
sentinel = G__4377;
is_recursive = G__4378;
continue;
}
} else
{if("\uFDD0'else")
{var f = replcljs.reader.macros.call(null,ch);
var res = (replcljs.core.truth_(f)?f.call(null,reader,ch):((replcljs.reader.number_literal_QMARK_.call(null,reader,ch))?replcljs.reader.read_number.call(null,reader,ch):(("\uFDD0'else")?replcljs.reader.read_symbol.call(null,reader,ch):null)));
if((res === reader))
{{
var G__4379 = reader;
var G__4380 = eof_is_error;
var G__4381 = sentinel;
var G__4382 = is_recursive;
reader = G__4379;
eof_is_error = G__4380;
sentinel = G__4381;
is_recursive = G__4382;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
read = function(reader,eof_is_error,sentinel,is_recursive){
switch(arguments.length){
case 1:
return read__1.call(this,reader);
case 3:
return read__3.call(this,reader,eof_is_error,sentinel);
case 4:
return read__4.call(this,reader,eof_is_error,sentinel,is_recursive);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read.cljs$lang$arity$1 = read__1;
read.cljs$lang$arity$3 = read__3;
read.cljs$lang$arity$4 = read__4;
return read;
})()
;
/**
* Reads one object from the string s
*/
replcljs.reader.read_string = (function read_string(s){
var r = replcljs.reader.string_push_back_reader.call(null,s);
return replcljs.reader.read.call(null,r,true,null,false);
});
replcljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(replcljs.core._EQ_.call(null,width,replcljs.core.count.call(null,s)))
{return s;
} else
{if((width < replcljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b = (new replgoog.string.StringBuffer(s));
while(true){
if((b.getLength() < width))
{{
var G__4383 = b.append("0");
b = G__4383;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
replcljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
replcljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return replcljs.core.not.call(null,replcljs.reader.divisible_QMARK_.call(null,num,div));
});
replcljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3941__auto__ = replcljs.reader.divisible_QMARK_.call(null,year,4);
if(replcljs.core.truth_(and__3941__auto__))
{var or__3943__auto__ = replcljs.reader.indivisible_QMARK_.call(null,year,100);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3941__auto__;
}
});
replcljs.reader.days_in_month = (function (){var dim_norm = replcljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap = replcljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return replcljs.core._lookup.call(null,(replcljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month,null);
});
})();
replcljs.reader.parse_and_validate_timestamp = (function (){var timestamp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check = (function (low,n,high,msg){
if((function (){var and__3941__auto__ = (low <= n);
if(and__3941__auto__)
{return (n <= high);
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str([replcljs.core.str(msg),replcljs.core.str(" Failed:  "),replcljs.core.str(low),replcljs.core.str("<="),replcljs.core.str(n),replcljs.core.str("<="),replcljs.core.str(high)].join('')),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"<=")),(new replcljs.core.Symbol(null,"low")),(new replcljs.core.Symbol(null,"n")),(new replcljs.core.Symbol(null,"high"))),replcljs.core.hash_map("\uFDD0'line",857,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4092__auto__ = replcljs.core.map.call(null,replcljs.core.vec,replcljs.core.split_at.call(null,8,replcljs.core.re_matches.call(null,timestamp,ts)));
if(replcljs.core.truth_(temp__4092__auto__))
{var vec__4388 = temp__4092__auto__;
var vec__4389 = replcljs.core.nth.call(null,vec__4388,0,null);
var _ = replcljs.core.nth.call(null,vec__4389,0,null);
var years = replcljs.core.nth.call(null,vec__4389,1,null);
var months = replcljs.core.nth.call(null,vec__4389,2,null);
var days = replcljs.core.nth.call(null,vec__4389,3,null);
var hours = replcljs.core.nth.call(null,vec__4389,4,null);
var minutes = replcljs.core.nth.call(null,vec__4389,5,null);
var seconds = replcljs.core.nth.call(null,vec__4389,6,null);
var milliseconds = replcljs.core.nth.call(null,vec__4389,7,null);
var vec__4390 = replcljs.core.nth.call(null,vec__4388,1,null);
var ___$1 = replcljs.core.nth.call(null,vec__4390,0,null);
var ___$2 = replcljs.core.nth.call(null,vec__4390,1,null);
var ___$3 = replcljs.core.nth.call(null,vec__4390,2,null);
var V = vec__4388;
var vec__4391 = replcljs.core.map.call(null,(function (v){
return replcljs.core.map.call(null,(function (p1__4387_SHARP_){
return parseInt(p1__4387_SHARP_,10);
}),v);
}),replcljs.core.map.call(null,(function (p1__4385_SHARP_,p2__4384_SHARP_){
return replcljs.core.update_in.call(null,p2__4384_SHARP_,replcljs.core.PersistentVector.fromArray([0], true),p1__4385_SHARP_);
}),replcljs.core.PersistentVector.fromArray([replcljs.core.constantly.call(null,null),(function (p1__4386_SHARP_){
if(replcljs.core._EQ_.call(null,p1__4386_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V));
var vec__4392 = replcljs.core.nth.call(null,vec__4391,0,null);
var ___$4 = replcljs.core.nth.call(null,vec__4392,0,null);
var y = replcljs.core.nth.call(null,vec__4392,1,null);
var mo = replcljs.core.nth.call(null,vec__4392,2,null);
var d = replcljs.core.nth.call(null,vec__4392,3,null);
var h = replcljs.core.nth.call(null,vec__4392,4,null);
var m = replcljs.core.nth.call(null,vec__4392,5,null);
var s = replcljs.core.nth.call(null,vec__4392,6,null);
var ms = replcljs.core.nth.call(null,vec__4392,7,null);
var vec__4393 = replcljs.core.nth.call(null,vec__4391,1,null);
var offset_sign = replcljs.core.nth.call(null,vec__4393,0,null);
var offset_hours = replcljs.core.nth.call(null,vec__4393,1,null);
var offset_minutes = replcljs.core.nth.call(null,vec__4393,2,null);
var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));
return replcljs.core.PersistentVector.fromArray([((replcljs.core.not.call(null,years))?1970:y),((replcljs.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((replcljs.core.not.call(null,days))?1:check.call(null,1,d,replcljs.reader.days_in_month.call(null,mo,replcljs.reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((replcljs.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((replcljs.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((replcljs.core.not.call(null,seconds))?0:check.call(null,0,s,((replcljs.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((replcljs.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], true);
} else
{return null;
}
});
})();
replcljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4090__auto__ = replcljs.reader.parse_and_validate_timestamp.call(null,ts);
if(replcljs.core.truth_(temp__4090__auto__))
{var vec__4395 = temp__4090__auto__;
var years = replcljs.core.nth.call(null,vec__4395,0,null);
var months = replcljs.core.nth.call(null,vec__4395,1,null);
var days = replcljs.core.nth.call(null,vec__4395,2,null);
var hours = replcljs.core.nth.call(null,vec__4395,3,null);
var minutes = replcljs.core.nth.call(null,vec__4395,4,null);
var seconds = replcljs.core.nth.call(null,vec__4395,5,null);
var ms = replcljs.core.nth.call(null,vec__4395,6,null);
var offset = replcljs.core.nth.call(null,vec__4395,7,null);
return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return replcljs.reader.reader_error.call(null,null,[replcljs.core.str("Unrecognized date/time syntax: "),replcljs.core.str(ts)].join(''));
}
});
replcljs.reader.read_date = (function read_date(s){
if(replcljs.core.string_QMARK_.call(null,s))
{return replcljs.reader.parse_timestamp.call(null,s);
} else
{return replcljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
replcljs.reader.read_queue = (function read_queue(elems){
if(replcljs.core.vector_QMARK_.call(null,elems))
{return replcljs.core.into.call(null,replcljs.core.PersistentQueue.EMPTY,elems);
} else
{return replcljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
replcljs.reader.read_uuid = (function read_uuid(uuid){
if(replcljs.core.string_QMARK_.call(null,uuid))
{return (new replcljs.core.UUID(uuid));
} else
{return replcljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
replcljs.reader._STAR_tag_table_STAR_ = replcljs.core.atom.call(null,replcljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":replcljs.reader.read_date,"uuid":replcljs.reader.read_uuid,"queue":replcljs.reader.read_queue}));
replcljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag = replcljs.reader.read_symbol.call(null,rdr,initch);
var temp__4090__auto__ = replcljs.core._lookup.call(null,replcljs.core.deref.call(null,replcljs.reader._STAR_tag_table_STAR_),replcljs.core.name.call(null,tag),null);
if(replcljs.core.truth_(temp__4090__auto__))
{var pfn = temp__4090__auto__;
return pfn.call(null,replcljs.reader.read.call(null,rdr,true,null,false));
} else
{return replcljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",replcljs.core.name.call(null,tag)," in ",replcljs.core.pr_str.call(null,replcljs.core.keys.call(null,replcljs.core.deref.call(null,replcljs.reader._STAR_tag_table_STAR_))));
}
});
replcljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__$1 = replcljs.core.name.call(null,tag);
var old_parser = replcljs.core._lookup.call(null,replcljs.core.deref.call(null,replcljs.reader._STAR_tag_table_STAR_),tag__$1,null);
replcljs.core.swap_BANG_.call(null,replcljs.reader._STAR_tag_table_STAR_,replcljs.core.assoc,tag__$1,f);
return old_parser;
});
replcljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__$1 = replcljs.core.name.call(null,tag);
var old_parser = replcljs.core._lookup.call(null,replcljs.core.deref.call(null,replcljs.reader._STAR_tag_table_STAR_),tag__$1,null);
replcljs.core.swap_BANG_.call(null,replcljs.reader._STAR_tag_table_STAR_,replcljs.core.dissoc,tag__$1);
return old_parser;
});

// Analyzer namespace snapshot:
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replcljs.reader"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4396__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4396 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4396__delegate.call(this, m);
};
G__4396.cljs$lang$maxFixedArity = 0;
G__4396.cljs$lang$applyTo = (function (arglist__4397){
var m = replcljs.core.seq(arglist__4397);;
return G__4396__delegate(m);
});
G__4396.cljs$lang$arity$variadic = G__4396__delegate;
return G__4396;
})()
,replcljs.core.hash_map("\uFDD0'defs",replcljs.core.hash_map((new replcljs.core.Symbol(null,"get-line-number")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new replcljs.core.Symbol(null,"replcljs.reader/IndexingReader")),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/get-line-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",25,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-line")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-line")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads to the end of a line and returns the line.","\uFDD0'line",187,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-2-chars")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-2-chars")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",293,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-unquote")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-unquote")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",626,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-4-chars")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-4-chars")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",299,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"indivisible?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"num")),(new replcljs.core.Symbol(null,"div"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"num")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"div")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/indivisible?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",838,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"re-find*")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"re")),(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/re-find*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",222,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"IPushbackReader")),replcljs.core.hash_map("\uFDD0'line",22,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/IPushbackReader"))),(new replcljs.core.Symbol(null,"throwing-reader")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"msg"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"msg")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/throwing-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",486,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"ratio-pattern")),replcljs.core.hash_map("\uFDD0'line",219,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/ratio-pattern"))),(new replcljs.core.Symbol(null,"number-literal?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/number-literal?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether the reader is at the start of a number literal","\uFDD0'line",150,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean"))),(new replcljs.core.Symbol(null,"wrapping-reader")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/wrapping-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",481,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"escape-char")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"buffer")),(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"buffer")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/escape-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",321,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-list")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-list")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",393,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"parse-timestamp")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ts"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ts")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/parse-timestamp")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",880,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"desugar-meta")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/desugar-meta")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",473,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"macros")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"c"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/macros")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",762,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-queue")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"elems"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"elems")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-queue")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",896,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"leap-year?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"year"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"year")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/leap-year?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",842,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"reader-error")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"&")),(new replcljs.core.Symbol(null,"msg"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"msg")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/reader-error")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",164,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"comment-prefix?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/comment-prefix?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether the character begins a comment.","\uFDD0'line",145,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean"))),(new replcljs.core.Symbol(null,"string-reader")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/string-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates a StringReader from a given string","\uFDD0'line",105,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-map")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",410,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"string-push-back-reader")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"buf-len"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"buf-len")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/string-push-back-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates a PushbackReader from a given string","\uFDD0'line",110,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"eof-is-error")),(new replcljs.core.Symbol(null,"sentinel"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"eof-is-error")),(new replcljs.core.Symbol(null,"sentinel")),(new replcljs.core.Symbol(null,"is-recursive"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"eof-is-error")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sentinel")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"eof-is-error")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sentinel")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"is-recursive")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads the first object from a PushbackReader. Returns the object read.\n   If EOF, throws if eof-is-error is true. Otherwise returns sentinel.","\uFDD0'line",794,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-set")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-set")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",737,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"newline?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/newline?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether the character is a newline.","\uFDD0'line",140,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean"))),(new replcljs.core.Symbol(null,"isUnquoteSplicing?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"form"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/isUnquoteSplicing?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",518,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"zero-fill-right")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"width"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"width")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/zero-fill-right")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",826,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-char")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new replcljs.core.Symbol(null,"replcljs.reader/Reader")),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-comment")),replcljs.core.hash_map("\uFDD0'line",404,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-comment"))),(new replcljs.core.Symbol(null,"read-symbol")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-symbol")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",447,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"/")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core//"))),(new replcljs.core.Symbol(null,"unread")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new replcljs.core.Symbol(null,"replcljs.reader/IPushbackReader")),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/unread")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",22,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"parse-and-validate-timestamp")),replcljs.core.hash_map("\uFDD0'line",854,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'private",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/parse-and-validate-timestamp"))),(new replcljs.core.Symbol(null,"read-string")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-string")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads one object from the string s","\uFDD0'line",817,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-meta")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-meta")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",491,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"special-symbols")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"t")),(new replcljs.core.Symbol(null,"not-found"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"t")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"not-found")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/special-symbols")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",440,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"PushbackReader")),replcljs.core.hash_map("\uFDD0'line",45,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocols",replcljs.core.set([(new replcljs.core.Symbol(null,"replcljs.reader/IPushbackReader")),(new replcljs.core.Symbol(null,"replcljs.reader/Reader"))]),"\uFDD0'num-fields",4,"\uFDD0'type",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/PushbackReader"))),(new replcljs.core.Symbol(null,"indexing-push-back-reader")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"s")),(new replcljs.core.Symbol(null,"buf-len"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"buf-len")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/indexing-push-back-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates an IndexingPushbackReader from a given string","\uFDD0'line",117,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-fn")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-fn")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",683,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-uuid")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"uuid"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"uuid")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-uuid")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",903,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"divisible?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"num")),(new replcljs.core.Symbol(null,"div"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"num")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"div")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/divisible?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",834,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"make-unicode-char")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"code-str")),(new replcljs.core.Symbol(null,"&")),replcljs.core.vec([(new replcljs.core.Symbol(null,"base"))])]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"code-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"p__4310")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/make-unicode-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",316,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-number")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",417,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-delimited-list")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"delim")),(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"recursive?"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"delim")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"recursive?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-delimited-list")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",353,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"IndexingPushbackReader")),replcljs.core.hash_map("\uFDD0'line",76,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocols",replcljs.core.set([(new replcljs.core.Symbol(null,"replcljs.reader/IPushbackReader")),(new replcljs.core.Symbol(null,"replcljs.reader/Reader")),(new replcljs.core.Symbol(null,"replcljs.reader/IndexingReader"))]),"\uFDD0'num-fields",5,"\uFDD0'type",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/IndexingPushbackReader"))),(new replcljs.core.Symbol(null,"UNQUOTE-SPLICING")),replcljs.core.hash_map("\uFDD0'line",509,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/UNQUOTE-SPLICING"))),(new replcljs.core.Symbol(null,"UNQUOTE")),replcljs.core.hash_map("\uFDD0'line",508,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/UNQUOTE"))),(new replcljs.core.Symbol(null,"maybe-read-tagged-type")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/maybe-read-tagged-type")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",913,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"*gensym-env*")),replcljs.core.hash_map("\uFDD0'line",512,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/*gensym-env*"))),(new replcljs.core.Symbol(null,"Reader")),replcljs.core.hash_map("\uFDD0'line",18,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/Reader"))),(new replcljs.core.Symbol(null,"octal-pattern")),replcljs.core.hash_map("\uFDD0'line",308,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/octal-pattern"))),(new replcljs.core.Symbol(null,"days-in-month")),replcljs.core.hash_map("\uFDD0'line",848,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'private",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/days-in-month"))),(new replcljs.core.Symbol(null,"garg")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/garg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",679,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"peek-char")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new replcljs.core.Symbol(null,"replcljs.reader/Reader")),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/peek-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"not-implemented")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/not-implemented")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",373,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"whitespace?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/whitespace?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether a given character is whitespace","\uFDD0'line",130,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean"))),(new replcljs.core.Symbol(null,"validate-unicode-escape")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"unicode-pattern")),(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"escape-char")),(new replcljs.core.Symbol(null,"unicode-str"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"unicode-pattern")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"escape-char")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"unicode-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/validate-unicode-escape")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",311,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"escape-char-map")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"c"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/escape-char-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",278,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"isUnquote?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"form"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/isUnquote?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",515,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"re-matches*")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"re")),(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/re-matches*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",262,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-discard")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-discard")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",757,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"match-int")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/match-int")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",230,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-vector")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-vector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",406,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"dispatch-macros")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/dispatch-macros")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",784,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"registerArg")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"n"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/registerArg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",706,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"*tag-table*")),replcljs.core.hash_map("\uFDD0'line",909,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/*tag-table*"))),(new replcljs.core.Symbol(null,"syntaxQuote")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"form"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/syntaxQuote")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",535,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-character")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-character")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",643,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"int-pattern")),replcljs.core.hash_map("\uFDD0'line",218,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/int-pattern"))),(new replcljs.core.Symbol(null,"read-keyword")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-keyword")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",456,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"sqExpandList")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"sq"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"sq")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/sqExpandList")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",521,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-unmatched-delimiter")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-unmatched-delimiter")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",389,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"match-float")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/match-float")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",258,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"StringReader")),replcljs.core.hash_map("\uFDD0'line",33,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocols",replcljs.core.set([(new replcljs.core.Symbol(null,"replcljs.reader/Reader"))]),"\uFDD0'num-fields",3,"\uFDD0'type",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/StringReader"))),(new replcljs.core.Symbol(null,"normalize-newline")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/normalize-newline")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",68,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"match-ratio")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/match-ratio")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",251,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"get-column-number")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new replcljs.core.Symbol(null,"replcljs.reader/IndexingReader")),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/get-column-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",25,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-syntax-quote")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-syntax-quote")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",620,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-past")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"pred")),(new replcljs.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"pred")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-past")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Read until first character that doesn't match pred, returning\n   char.","\uFDD0'line",344,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"skip-line")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/skip-line")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Advances the reader to the end of a line. Returns the reader","\uFDD0'line",207,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"macro-terminating?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/macro-terminating?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",171,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean"))),(new replcljs.core.Symbol(null,"read-string*")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-string*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",429,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-token")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-token")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",177,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-dispatch")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"_"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-dispatch")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",379,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"deregister-tag-parser!")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"tag"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"tag")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/deregister-tag-parser!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",929,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"match-number")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/match-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",271,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"line-seq")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/line-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",202,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"unicode-4-pattern")),replcljs.core.hash_map("\uFDD0'line",309,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/unicode-4-pattern"))),(new replcljs.core.Symbol(null,"read-regex")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-regex")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",741,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"*arg-env*")),replcljs.core.hash_map("\uFDD0'line",513,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/*arg-env*"))),(new replcljs.core.Symbol(null,"IndexingReader")),replcljs.core.hash_map("\uFDD0'line",25,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/IndexingReader"))),(new replcljs.core.Symbol(null,"register-tag-parser!")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"tag")),(new replcljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"tag")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/register-tag-parser!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",922,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"numeric?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/numeric?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether a given character is numeric","\uFDD0'line",135,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean"))),(new replcljs.core.Symbol(null,"read-arg")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"rdr")),(new replcljs.core.Symbol(null,"pct"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"pct")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-arg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",716,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"read-date")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/read-date")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",889,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new replcljs.core.Symbol(null,"unicode-2-pattern")),replcljs.core.hash_map("\uFDD0'line",307,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/unicode-2-pattern"))),(new replcljs.core.Symbol(null,"float-pattern")),replcljs.core.hash_map("\uFDD0'line",220,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader/float-pattern")))),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",replcljs.core.hash_map((new replcljs.core.Symbol(null,"ana")),(new replcljs.core.Symbol(null,"replcljs.analyzer")),(new replcljs.core.Symbol(null,"string")),(new replcljs.core.Symbol(null,"replclojure.string")),(new replcljs.core.Symbol(null,"gstring")),(new replcljs.core.Symbol(null,"replgoog.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",replcljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.reader"))),old);
}));
