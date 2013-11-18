replgoog.provide('cljsrepl.reader');
replgoog.require('cljsrepl.core');
replgoog.require('cljsrepl.analyzer');
replgoog.require('replclojure.string');
replgoog.require('replgoog.string');
cljsrepl.reader.Reader = {};
cljsrepl.reader.read_char = (function read_char(reader){
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
return (function (){var or__3943__auto__ = (cljsrepl.reader.read_char[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.reader.read_char["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljsrepl.reader.peek_char = (function peek_char(reader){
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
return (function (){var or__3943__auto__ = (cljsrepl.reader.peek_char[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.reader.peek_char["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
cljsrepl.reader.IPushbackReader = {};
cljsrepl.reader.unread = (function unread(reader,ch){
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
return (function (){var or__3943__auto__ = (cljsrepl.reader.unread[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.reader.unread["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
cljsrepl.reader.IndexingReader = {};
cljsrepl.reader.get_line_number = (function get_line_number(reader){
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
return (function (){var or__3943__auto__ = (cljsrepl.reader.get_line_number[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.reader.get_line_number["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
cljsrepl.reader.get_column_number = (function get_column_number(reader){
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
return (function (){var or__3943__auto__ = (cljsrepl.reader.get_column_number[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.reader.get_column_number["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IndexingReader.get-column-number",reader);
}
}
})().call(null,reader);
}
});
replgoog.provide('cljsrepl.reader.StringReader');

/**
* @constructor
*/
cljsrepl.reader.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
cljsrepl.reader.StringReader.cljs$lang$type = true;
cljsrepl.reader.StringReader.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.reader/StringReader");
});
cljsrepl.reader.StringReader.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljsrepl.core._write.call(null,writer__1988__auto__,"cljsrepl.reader/StringReader");
});
cljsrepl.reader.StringReader.prototype.cljs$reader$Reader$ = true;
cljsrepl.reader.StringReader.prototype.cljs$reader$Reader$read_char$arity$1 = (function (reader){
var self__ = this;
if((self__.s_len > self__.s_pos))
{var r = (self__.s[self__.s_pos]);
self__.s_pos = (self__.s_pos + 1);
return r;
} else
{return null;
}
});
cljsrepl.reader.StringReader.prototype.cljs$reader$Reader$peek_char$arity$1 = (function (reader){
var self__ = this;
if((self__.s_len > self__.s_pos))
{return (self__.s[self__.s_pos]);
} else
{return null;
}
});
replgoog.provide('cljsrepl.reader.PushbackReader');

/**
* @constructor
*/
cljsrepl.reader.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
cljsrepl.reader.PushbackReader.cljs$lang$type = true;
cljsrepl.reader.PushbackReader.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.reader/PushbackReader");
});
cljsrepl.reader.PushbackReader.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljsrepl.core._write.call(null,writer__1988__auto__,"cljsrepl.reader/PushbackReader");
});
cljsrepl.reader.PushbackReader.prototype.cljs$reader$IPushbackReader$ = true;
cljsrepl.reader.PushbackReader.prototype.cljs$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
if(cljsrepl.core.truth_(ch))
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
cljsrepl.reader.PushbackReader.prototype.cljs$reader$Reader$ = true;
cljsrepl.reader.PushbackReader.prototype.cljs$reader$Reader$read_char$arity$1 = (function (reader){
var self__ = this;
if((self__.buf_pos < self__.buf_len))
{var r = (self__.buf[self__.buf_pos]);
self__.buf_pos = (self__.buf_pos + 1);
return r;
} else
{return cljsrepl.reader.read_char.call(null,self__.rdr);
}
});
cljsrepl.reader.PushbackReader.prototype.cljs$reader$Reader$peek_char$arity$1 = (function (reader){
var self__ = this;
if((self__.buf_pos < self__.buf_len))
{return (self__.buf[self__.buf_pos]);
} else
{return cljsrepl.reader.peek_char.call(null,self__.rdr);
}
});
cljsrepl.reader.normalize_newline = (function normalize_newline(rdr,ch){
if(("\r" === ch))
{var c = cljsrepl.reader.peek_char.call(null,rdr);
if(("\f" === c))
{cljsrepl.reader.read_char.call(null,rdr);
} else
{}
return "\n";
} else
{return ch;
}
});
replgoog.provide('cljsrepl.reader.IndexingPushbackReader');

/**
* @constructor
*/
cljsrepl.reader.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
})
cljsrepl.reader.IndexingPushbackReader.cljs$lang$type = true;
cljsrepl.reader.IndexingPushbackReader.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.reader/IndexingPushbackReader");
});
cljsrepl.reader.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljsrepl.core._write.call(null,writer__1988__auto__,"cljsrepl.reader/IndexingPushbackReader");
});
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$IndexingReader$ = true;
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$IndexingReader$get_line_number$arity$1 = (function (reader){
var self__ = this;
return (self__.line + 1);
});
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$IndexingReader$get_column_number$arity$1 = (function (reader){
var self__ = this;
return self__.column;
});
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$IPushbackReader$ = true;
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$IPushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
if(cljsrepl.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - 1);
} else
{}
self__.line_start_QMARK_ = self__.prev;
self__.column = (self__.column - 1);
return cljsrepl.reader.unread.call(null,self__.rdr,ch);
});
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$Reader$ = true;
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$Reader$read_char$arity$1 = (function (reader){
var self__ = this;
var temp__4092__auto__ = cljsrepl.reader.read_char.call(null,self__.rdr);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;
var ch__$1 = cljsrepl.reader.normalize_newline.call(null,self__.rdr,ch);
self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljsrepl.reader.newline_QMARK_.call(null,ch__$1);
if(cljsrepl.core.truth_(self__.line_start_QMARK_))
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
cljsrepl.reader.IndexingPushbackReader.prototype.cljs$reader$Reader$peek_char$arity$1 = (function (reader){
var self__ = this;
return cljsrepl.reader.peek_char.call(null,self__.rdr);
});
/**
* Creates a StringReader from a given string
*/
cljsrepl.reader.string_reader = (function string_reader(s){
return (new cljsrepl.reader.StringReader(s,cljsrepl.core.count.call(null,s),0));
});
/**
* Creates a PushbackReader from a given string
*/
cljsrepl.reader.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){
return string_push_back_reader.call(null,s,1);
});
var string_push_back_reader__2 = (function (s,buf_len){
return (new cljsrepl.reader.PushbackReader(cljsrepl.reader.string_reader.call(null,s),cljsrepl.core.object_array.call(null,buf_len),buf_len,buf_len));
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
cljsrepl.reader.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s){
return (new cljsrepl.reader.IndexingPushbackReader(cljsrepl.reader.string_push_back_reader.call(null,s),0,1,true,null));
});
var indexing_push_back_reader__2 = (function (s,buf_len){
return (new cljsrepl.reader.IndexingPushbackReader(cljsrepl.reader.string_push_back_reader.call(null,s,buf_len),0,1,true,null));
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
cljsrepl.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3943__auto__ = replgoog.string.isBreakingWhitespace(ch);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljsrepl.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return replgoog.string.isNumeric(ch);
});
/**
* Checks whether the character is a newline.
*/
cljsrepl.reader.newline_QMARK_ = (function newline_QMARK_(ch){
return ("\n" === ch);
});
/**
* Checks whether the character begins a comment.
*/
cljsrepl.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljsrepl.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3943__auto__ = cljsrepl.reader.numeric_QMARK_.call(null,initch);
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
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.reader.numeric_QMARK_.call(null,cljsrepl.reader.peek_char.call(null,reader));
} else
{return and__3941__auto__;
}
}
});
/**
* @param {...*} var_args
*/
cljsrepl.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
var error_msg = cljsrepl.core.apply.call(null,cljsrepl.core.str,msg);
throw (new Error([cljsrepl.core.str(error_msg),cljsrepl.core.str((((function (){var G__4283 = rdr;
if(G__4283)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4283.cljs$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__4283.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.reader.IndexingReader,G__4283);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.reader.IndexingReader,G__4283);
}
})())?[cljsrepl.core.str(", on line: "),cljsrepl.core.str(cljsrepl.reader.get_line_number.call(null,rdr)),cljsrepl.core.str(", on column: "),cljsrepl.core.str(cljsrepl.reader.get_column_number.call(null,rdr))].join(''):null))].join('')));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (replgoog.isDef(var_args)) {
  msg = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__4284){
var rdr = cljsrepl.core.first(arglist__4284);
var msg = cljsrepl.core.rest(arglist__4284);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljsrepl.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3941__auto__ = !((ch === "#"));
if(and__3941__auto__)
{var and__3941__auto____$1 = !((ch === "'"));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = !((ch === ":"));
if(and__3941__auto____$2)
{return cljsrepl.reader.macros.call(null,ch);
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
cljsrepl.reader.read_token = (function read_token(rdr,initch){
var sb = (new replgoog.string.StringBuffer(initch));
var ch = cljsrepl.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3943__auto__ = (ch == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljsrepl.reader.whitespace_QMARK_.call(null,ch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljsrepl.reader.macro_terminating_QMARK_.call(null,ch);
}
}
})())
{cljsrepl.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__4285 = (function (){sb.append(ch);
return sb;
})();
var G__4286 = cljsrepl.reader.read_char.call(null,rdr);
sb = G__4285;
ch = G__4286;
continue;
}
}
break;
}
});
/**
* Reads to the end of a line and returns the line.
*/
cljsrepl.reader.read_line = (function read_line(rdr){
var sb = (new replgoog.string.StringBuffer());
var ch = cljsrepl.reader.read_char.call(null,rdr);
while(true){
if((function (){var and__3941__auto__ = (ch == null);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,0,sb.getLength());
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
var G__4287 = (function (){sb.append(ch);
return sb;
})();
var G__4288 = cljsrepl.reader.read_char.call(null,rdr);
sb = G__4287;
ch = G__4288;
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
cljsrepl.reader.line_seq = (function line_seq(rdr){
var temp__4092__auto__ = cljsrepl.reader.read_line.call(null,rdr);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var line = temp__4092__auto__;
return cljsrepl.core.cons.call(null,line,(new cljsrepl.core.LazySeq(null,false,(function (){
return line_seq.call(null,rdr);
}),null)));
} else
{return null;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljsrepl.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch = cljsrepl.reader.read_char.call(null,reader);
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
cljsrepl.reader.int_pattern = cljsrepl.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$");
cljsrepl.reader.ratio_pattern = cljsrepl.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljsrepl.reader.float_pattern = cljsrepl.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljsrepl.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
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
cljsrepl.reader.match_int = (function match_int(s){
var groups = cljsrepl.reader.re_find_STAR_.call(null,cljsrepl.reader.int_pattern,s);
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
var a = (cljsrepl.core.truth_((groups[3]))?[(groups[3]),10]:(cljsrepl.core.truth_((groups[4]))?[(groups[4]),16]:(cljsrepl.core.truth_((groups[5]))?[(groups[5]),8]:(cljsrepl.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n = (a[0]);
var radix = (a[1]);
if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljsrepl.reader.match_ratio = (function match_ratio(s){
var groups = cljsrepl.reader.re_find_STAR_.call(null,cljsrepl.reader.ratio_pattern,s);
var numinator = (groups[1]);
var denominator = (groups[2]);
return (parseInt(numinator) / parseInt(denominator));
});
cljsrepl.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljsrepl.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
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
cljsrepl.reader.match_number = (function match_number(s){
if(cljsrepl.core.truth_(cljsrepl.reader.re_matches_STAR_.call(null,cljsrepl.reader.int_pattern,s)))
{return cljsrepl.reader.match_int.call(null,s);
} else
{if(cljsrepl.core.truth_(cljsrepl.reader.re_matches_STAR_.call(null,cljsrepl.reader.ratio_pattern,s)))
{return cljsrepl.reader.match_ratio.call(null,s);
} else
{if(cljsrepl.core.truth_(cljsrepl.reader.re_matches_STAR_.call(null,cljsrepl.reader.float_pattern,s)))
{return cljsrepl.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljsrepl.reader.escape_char_map = (function escape_char_map(c){
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
cljsrepl.reader.read_2_chars = (function read_2_chars(reader){
return (new replgoog.string.StringBuffer(cljsrepl.reader.read_char.call(null,reader),cljsrepl.reader.read_char.call(null,reader))).toString();
});
cljsrepl.reader.read_4_chars = (function read_4_chars(reader){
return (new replgoog.string.StringBuffer(cljsrepl.reader.read_char.call(null,reader),cljsrepl.reader.read_char.call(null,reader),cljsrepl.reader.read_char.call(null,reader),cljsrepl.reader.read_char.call(null,reader))).toString();
});
cljsrepl.reader.unicode_2_pattern = cljsrepl.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljsrepl.reader.octal_pattern = cljsrepl.core.re_pattern.call(null,"[0-7]{1,3}");
cljsrepl.reader.unicode_4_pattern = cljsrepl.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljsrepl.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljsrepl.core.truth_(cljsrepl.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljsrepl.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
/**
* @param {...*} var_args
*/
cljsrepl.reader.make_unicode_char = (function() { 
var make_unicode_char__delegate = function (code_str,p__4289){
var vec__4291 = p__4289;
var base = cljsrepl.core.nth.call(null,vec__4291,0,null);
var base__$1 = (function (){var or__3943__auto__ = base;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return 16;
}
})();
var code = parseInt(code_str,base__$1);
return String.fromCharCode(code);
};
var make_unicode_char = function (code_str,var_args){
var p__4289 = null;
if (replgoog.isDef(var_args)) {
  p__4289 = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_unicode_char__delegate.call(this, code_str, p__4289);
};
make_unicode_char.cljs$lang$maxFixedArity = 1;
make_unicode_char.cljs$lang$applyTo = (function (arglist__4292){
var code_str = cljsrepl.core.first(arglist__4292);
var p__4289 = cljsrepl.core.rest(arglist__4292);
return make_unicode_char__delegate(code_str, p__4289);
});
make_unicode_char.cljs$lang$arity$variadic = make_unicode_char__delegate;
return make_unicode_char;
})()
;
cljsrepl.reader.escape_char = (function escape_char(buffer,reader){
var ch = cljsrepl.reader.read_char.call(null,reader);
var mapresult = cljsrepl.reader.escape_char_map.call(null,ch);
if(cljsrepl.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljsrepl.reader.make_unicode_char.call(null,cljsrepl.reader.validate_unicode_escape.call(null,cljsrepl.reader.unicode_2_pattern,reader,ch,cljsrepl.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljsrepl.reader.make_unicode_char.call(null,cljsrepl.reader.validate_unicode_escape.call(null,cljsrepl.reader.unicode_4_pattern,reader,ch,cljsrepl.reader.read_4_chars.call(null,reader)));
} else
{if(cljsrepl.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if("\uFDD0'else")
{return cljsrepl.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
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
cljsrepl.reader.read_past = (function read_past(pred,rdr){
var ch = cljsrepl.reader.read_char.call(null,rdr);
while(true){
if(cljsrepl.core.truth_(pred.call(null,ch)))
{{
var G__4293 = cljsrepl.reader.read_char.call(null,rdr);
ch = G__4293;
continue;
}
} else
{return ch;
}
break;
}
});
cljsrepl.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentVector.EMPTY);
while(true){
var ch = cljsrepl.reader.read_past.call(null,cljsrepl.reader.whitespace_QMARK_,rdr);
if(cljsrepl.core.truth_(ch))
{} else
{cljsrepl.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljsrepl.core.persistent_BANG_.call(null,a);
} else
{var temp__4090__auto__ = cljsrepl.reader.macros.call(null,ch);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;
var mret = macrofn.call(null,rdr,ch);
{
var G__4294 = (((mret === rdr))?a:cljsrepl.core.conj_BANG_.call(null,a,mret));
a = G__4294;
continue;
}
} else
{cljsrepl.reader.unread.call(null,rdr,ch);
var o = cljsrepl.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__4295 = (((o === rdr))?a:cljsrepl.core.conj_BANG_.call(null,a,o));
a = G__4295;
continue;
}
}
}
break;
}
});
cljsrepl.reader.not_implemented = (function not_implemented(rdr,ch){
return cljsrepl.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljsrepl.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch = cljsrepl.reader.read_char.call(null,rdr);
var dm = cljsrepl.reader.dispatch_macros.call(null,ch);
if(cljsrepl.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4090__auto__ = cljsrepl.reader.maybe_read_tagged_type.call(null,rdr,ch);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;
return obj;
} else
{return cljsrepl.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljsrepl.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljsrepl.reader.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljsrepl.reader.read_list = (function read_list(rdr,_){
var vec__4298 = (((function (){var G__4299 = rdr;
if(G__4299)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4299.cljs$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__4299.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.reader.IndexingReader,G__4299);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.reader.IndexingReader,G__4299);
}
})())?cljsrepl.core.PersistentVector.fromArray([cljsrepl.reader.get_line_number.call(null,rdr),(cljsrepl.reader.get_column_number.call(null,rdr) - 1)], true):null);
var line = cljsrepl.core.nth.call(null,vec__4298,0,null);
var column = cljsrepl.core.nth.call(null,vec__4298,1,null);
var the_list = cljsrepl.reader.read_delimited_list.call(null,")",rdr,true);
if(cljsrepl.core.empty_QMARK_.call(null,the_list))
{return cljsrepl.core.List.EMPTY;
} else
{return cljsrepl.core.with_meta.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.list,the_list),(cljsrepl.core.truth_(line)?cljsrepl.core.ObjMap.fromObject(["\uFDD0'line","\uFDD0'column"],{"\uFDD0'line":line,"\uFDD0'column":column}):null));
}
});
cljsrepl.reader.read_comment = cljsrepl.reader.skip_line;
cljsrepl.reader.read_vector = (function read_vector(rdr,_){
return cljsrepl.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljsrepl.reader.read_map = (function read_map(rdr,_){
var l = cljsrepl.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljsrepl.core.odd_QMARK_.call(null,cljsrepl.core.count.call(null,l)))
{cljsrepl.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,l);
});
cljsrepl.reader.read_number = (function read_number(reader,initch){
var buffer = (new replgoog.string.StringBuffer(initch));
var ch = cljsrepl.reader.read_char.call(null,reader);
while(true){
if(cljsrepl.core.truth_((function (){var or__3943__auto__ = (ch == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljsrepl.reader.whitespace_QMARK_.call(null,ch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljsrepl.reader.macros.call(null,ch);
}
}
})()))
{cljsrepl.reader.unread.call(null,reader,ch);
var s = buffer.toString();
var or__3943__auto__ = cljsrepl.reader.match_number.call(null,s);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__4300 = (function (){buffer.append(ch);
return buffer;
})();
var G__4301 = cljsrepl.reader.read_char.call(null,reader);
buffer = G__4300;
ch = G__4301;
continue;
}
}
break;
}
});
cljsrepl.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer = (new replgoog.string.StringBuffer());
var ch = cljsrepl.reader.read_char.call(null,reader);
while(true){
if((ch == null))
{return cljsrepl.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__4302 = (function (){buffer.append(cljsrepl.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__4303 = cljsrepl.reader.read_char.call(null,reader);
buffer = G__4302;
ch = G__4303;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if("\uFDD0'default")
{{
var G__4304 = (function (){buffer.append(ch);
return buffer;
})();
var G__4305 = cljsrepl.reader.read_char.call(null,reader);
buffer = G__4304;
ch = G__4305;
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
cljsrepl.reader.special_symbols = (function special_symbols(t,not_found){
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
cljsrepl.reader.read_symbol = (function read_symbol(reader,initch){
var token = cljsrepl.reader.read_token.call(null,reader,initch);
if(cljsrepl.core.truth_(replgoog.string.contains(token,"/")))
{return cljsrepl.core.symbol.call(null,cljsrepl.core.subs.call(null,token,0,token.indexOf("/")),cljsrepl.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljsrepl.reader.special_symbols.call(null,token,cljsrepl.core.symbol.call(null,token));
}
});
cljsrepl.reader.read_keyword = (function read_keyword(reader,initch){
var token = cljsrepl.reader.read_token.call(null,reader,cljsrepl.reader.read_char.call(null,reader));
var parts = replclojure.string.split.call(null,token,/\//);
var name = cljsrepl.core.last.call(null,parts);
var ns = (((cljsrepl.core.count.call(null,parts) > 1))?replclojure.string.join.call(null,"/",cljsrepl.core.butlast.call(null,parts)):null);
var issue = (((cljsrepl.core.last.call(null,ns) === ":"))?"namespace can't ends with \":\"":(((cljsrepl.core.last.call(null,name) === ":"))?"name can't end with \":\"":(((cljsrepl.core.last.call(null,name) === "/"))?"name can't end with \"/\"":(((cljsrepl.core.count.call(null,replclojure.string.split.call(null,token,/::/)) > 1))?"name can't contain \"::\"":null))));
if(cljsrepl.core.truth_(issue))
{return cljsrepl.reader.reader_error.call(null,reader,"Invalid token (",issue,"): ",token);
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.not.call(null,ns);
if(and__3941__auto__)
{return (cljsrepl.core.first.call(null,name) === ":");
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.keyword.call(null,cljsrepl.core._STAR_ns_sym_STAR_,cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.rest.call(null,name)));
} else
{return cljsrepl.core.keyword.call(null,ns,name);
}
}
});
cljsrepl.reader.desugar_meta = (function desugar_meta(f){
if(cljsrepl.core.symbol_QMARK_.call(null,f))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljsrepl.core.string_QMARK_.call(null,f))
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljsrepl.core.keyword_QMARK_.call(null,f))
{return cljsrepl.core.PersistentArrayMap.fromArrays([f],[true]);
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
cljsrepl.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljsrepl.core.list.call(null,sym,cljsrepl.reader.read.call(null,rdr,true,null,true));
});
});
cljsrepl.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljsrepl.reader.reader_error.call(null,rdr,msg);
});
});
cljsrepl.reader.read_meta = (function read_meta(rdr,_){
var vec__4309 = (((function (){var G__4310 = rdr;
if(G__4310)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4310.cljs$reader$IndexingReader$;
}
})()))
{return true;
} else
{if((!G__4310.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.reader.IndexingReader,G__4310);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.reader.IndexingReader,G__4310);
}
})())?cljsrepl.core.PersistentVector.fromArray([cljsrepl.reader.get_line_number.call(null,rdr),(cljsrepl.reader.get_column_number.call(null,rdr) - 1)], true):null);
var line = cljsrepl.core.nth.call(null,vec__4309,0,null);
var column = cljsrepl.core.nth.call(null,vec__4309,1,null);
var m = cljsrepl.reader.desugar_meta.call(null,cljsrepl.reader.read.call(null,rdr,true,null,true));
if(cljsrepl.core.map_QMARK_.call(null,m))
{} else
{cljsrepl.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljsrepl.reader.read.call(null,rdr,true,null,true);
if((function (){var G__4311 = o;
if(G__4311)
{if((function (){var or__3943__auto__ = (G__4311.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4311.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__4311.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IWithMeta,G__4311);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IWithMeta,G__4311);
}
})())
{var m__$1 = (cljsrepl.core.truth_((function (){var and__3941__auto__ = line;
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.seq_QMARK_.call(null,o);
} else
{return and__3941__auto__;
}
})())?cljsrepl.core.assoc.call(null,m,"\uFDD0'line",line,"\uFDD0'column",column):m);
return cljsrepl.core.with_meta.call(null,o,cljsrepl.core.merge.call(null,cljsrepl.core.meta.call(null,o),m__$1));
} else
{return cljsrepl.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljsrepl.reader.UNQUOTE = "\uFDD0'__thisInternalKeywordRepresentsUnquoteToTheReader__";
cljsrepl.reader.UNQUOTE_SPLICING = "\uFDD0'__thisInternalKeywordRepresentsUnquoteSplicingToTheReader__";
cljsrepl.reader._STAR_gensym_env_STAR_ = cljsrepl.core.atom.call(null,null);
cljsrepl.reader._STAR_arg_env_STAR_ = cljsrepl.core.atom.call(null,null);
cljsrepl.reader.isUnquote_QMARK_ = (function isUnquote_QMARK_(form){
var and__3941__auto__ = (function (){var G__4313 = form;
if(G__4313)
{if((function (){var or__3943__auto__ = (G__4313.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4313.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4313.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__4313);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__4313);
}
})();
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,cljsrepl.core.first.call(null,form),cljsrepl.reader.UNQUOTE);
} else
{return and__3941__auto__;
}
});
cljsrepl.reader.isUnquoteSplicing_QMARK_ = (function isUnquoteSplicing_QMARK_(form){
var and__3941__auto__ = (function (){var G__4315 = form;
if(G__4315)
{if((function (){var or__3943__auto__ = (G__4315.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4315.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4315.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__4315);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__4315);
}
})();
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core._EQ_.call(null,cljsrepl.core.first.call(null,form),cljsrepl.reader.UNQUOTE_SPLICING);
} else
{return and__3941__auto__;
}
});
cljsrepl.reader.sqExpandList = (function sqExpandList(sq){
return cljsrepl.core.doall.call(null,(function (){var iter__2144__auto__ = (function iter__4318(s__4319){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s__4319__$1 = s__4319;
while(true){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,s__4319__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var item = cljsrepl.core.first.call(null,xs__4579__auto__);
return cljsrepl.core.cons.call(null,(cljsrepl.core.truth_(cljsrepl.reader.isUnquote_QMARK_.call(null,item))?cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"list")),cljsrepl.core.second.call(null,item)):(cljsrepl.core.truth_(cljsrepl.reader.isUnquoteSplicing_QMARK_.call(null,item))?cljsrepl.core.second.call(null,item):(("\uFDD0'else")?cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"list")),cljsrepl.reader.syntaxQuote.call(null,item)):null))),iter__4318.call(null,cljsrepl.core.rest.call(null,s__4319__$1)));
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
cljsrepl.reader.syntaxQuote = (function syntaxQuote(form){
if(cljsrepl.core.truth_(cljsrepl.core._lookup.call(null,cljsrepl.analyzer.specials,form,null)))
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),form);
} else
{if(cljsrepl.core.symbol_QMARK_.call(null,form))
{var sym = form;
var name = cljsrepl.core.name.call(null,sym);
var ns = cljsrepl.core.namespace.call(null,sym);
var var$ = cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.analyzer.empty_env.call(null),sym);
if((function (){var and__3941__auto__ = cljsrepl.core.not.call(null,ns);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,"#",cljsrepl.core.last.call(null,name));
} else
{return and__3941__auto__;
}
})())
{var new_name = cljsrepl.core.subs.call(null,name,0,(cljsrepl.core.count.call(null,name) - 1));
var gmap = cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_gensym_env_STAR_);
if(cljsrepl.core.not.call(null,gmap))
{cljsrepl.reader.reader_error.call(null,null,"Gensym literal not in syntax-quote");
} else
{}
var gs = (function (){var or__3943__auto__ = cljsrepl.core._lookup.call(null,gmap,sym,null);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.gensym.call(null,[cljsrepl.core.str(new_name),cljsrepl.core.str("__auto__")].join(''));
}
})();
cljsrepl.core.swap_BANG_.call(null,cljsrepl.reader._STAR_gensym_env_STAR_,cljsrepl.core.assoc,sym,gs);
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),gs);
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.not.call(null,ns);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,".",cljsrepl.core.last.call(null,name));
} else
{return and__3941__auto__;
}
})())
{var new_name = cljsrepl.core.subs.call(null,name,0,(cljsrepl.core.count.call(null,name) - 1));
var new_var = cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.analyzer.empty_env.call(null),cljsrepl.core.symbol.call(null,new_name));
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,new_var));
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.not.call(null,ns);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,".",cljsrepl.core.first.call(null,name));
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),sym);
} else
{if("\uFDD0'else")
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),(new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.analyzer.empty_env.call(null),sym)));
} else
{return null;
}
}
}
}
} else
{if(cljsrepl.core.truth_(cljsrepl.reader.isUnquote_QMARK_.call(null,form)))
{return cljsrepl.core.second.call(null,form);
} else
{if(cljsrepl.core.truth_(cljsrepl.reader.isUnquoteSplicing_QMARK_.call(null,form)))
{return cljsrepl.reader.reader_error.call(null,cljsrepl.reader.rdr,"Reader ~@ splice not in list");
} else
{if((form == null))
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),form);
} else
{if((function (){var G__4327 = form;
if(G__4327)
{if((function (){var or__3943__auto__ = (G__4327.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4327.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__4327.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ICollection,G__4327);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ICollection,G__4327);
}
})())
{if((function (){var G__4328 = form;
if(G__4328)
{if((function (){var or__3943__auto__ = (G__4328.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4328.cljs$core$IRecord$;
}
})())
{return true;
} else
{if((!G__4328.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IRecord,G__4328);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IRecord,G__4328);
}
})())
{return form;
} else
{if((function (){var G__4329 = form;
if(G__4329)
{if((function (){var or__3943__auto__ = (G__4329.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4329.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__4329.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMap,G__4329);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMap,G__4329);
}
})())
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"apply")),(new cljsrepl.core.Symbol(null,"hash-map")),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"seq")),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"concat")),cljsrepl.reader.sqExpandList.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.concat,cljsrepl.core.seq.call(null,form))))));
} else
{if((function (){var G__4330 = form;
if(G__4330)
{if((function (){var or__3943__auto__ = (G__4330.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4330.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__4330.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IVector,G__4330);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IVector,G__4330);
}
})())
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"apply")),(new cljsrepl.core.Symbol(null,"vector")),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"seq")),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"concat")),cljsrepl.reader.sqExpandList.call(null,form))));
} else
{if((function (){var G__4331 = form;
if(G__4331)
{if((function (){var or__3943__auto__ = (G__4331.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4331.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__4331.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISet,G__4331);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISet,G__4331);
}
})())
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"apply")),(new cljsrepl.core.Symbol(null,"hash-set")),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"seq")),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"concat")),cljsrepl.reader.sqExpandList.call(null,cljsrepl.core.seq.call(null,form)))));
} else
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = (function (){var G__4332 = form;
if(G__4332)
{if((function (){var or__3943__auto__ = (G__4332.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__4332.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__4332.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__4332);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__4332);
}
})();
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var G__4333 = form;
if(G__4333)
{if((function (){var or__3943__auto____$1 = (G__4333.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__4333.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__4333.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IList,G__4333);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IList,G__4333);
}
}
})()))
{var temp__4090__auto__ = cljsrepl.core.seq.call(null,form);
if(temp__4090__auto__)
{var sq = temp__4090__auto__;
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"seq")),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"concat")),cljsrepl.reader.sqExpandList.call(null,sq)));
} else
{return cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"list")),null);
}
} else
{if("\uFDD0'else")
{return cljsrepl.reader.reader_error.call(null,cljsrepl.reader.rdr,"Unknown Collection type");
} else
{return null;
}
}
}
}
}
}
} else
{if((function (){var or__3943__auto__ = cljsrepl.core.keyword_QMARK_.call(null,form);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljsrepl.core.number_QMARK_.call(null,form);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljsrepl.core.string_QMARK_.call(null,form);
}
}
})())
{return form;
} else
{if("\uFDD0'else")
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),form);
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
cljsrepl.reader.read_syntax_quote = (function read_syntax_quote(rdr,_){
var _STAR_gensym_env_STAR_4336 = cljsrepl.reader._STAR_gensym_env_STAR_;
try{cljsrepl.reader._STAR_gensym_env_STAR_ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
var form = cljsrepl.reader.read.call(null,rdr,true,null,true);
return cljsrepl.reader.syntaxQuote.call(null,form);
}finally {cljsrepl.reader._STAR_gensym_env_STAR_ = _STAR_gensym_env_STAR_4336;
}});
cljsrepl.reader.read_unquote = (function read_unquote(rdr,_){
var ch = cljsrepl.reader.read_char.call(null,rdr);
if(cljsrepl.core._EQ_.call(null,null,ch))
{return cljsrepl.reader.reader_error.call(null,rdr,"EOF while reading unquote character");
} else
{if(cljsrepl.core._EQ_.call(null,"@",ch))
{var o = cljsrepl.reader.read.call(null,rdr,true,null,true);
return cljsrepl.core.list.call(null,cljsrepl.reader.UNQUOTE_SPLICING,o);
} else
{if("\uFDD0'else")
{cljsrepl.reader.unread.call(null,rdr,ch);
var o = cljsrepl.reader.read.call(null,rdr,true,null,true);
return cljsrepl.core.list.call(null,cljsrepl.reader.UNQUOTE,o);
} else
{return null;
}
}
}
});
cljsrepl.reader.read_character = (function read_character(rdr,_){
var ch = cljsrepl.reader.read_char.call(null,rdr);
if(cljsrepl.core._EQ_.call(null,null,ch))
{cljsrepl.reader.reader_error.call(null,rdr,"EOF while reading character constant");
} else
{}
var token = cljsrepl.reader.read_token.call(null,rdr,ch);
if(cljsrepl.core._EQ_.call(null,1,cljsrepl.core.count.call(null,token)))
{return token;
} else
{if(cljsrepl.core._EQ_.call(null,"newline",token))
{return "\n";
} else
{if(cljsrepl.core._EQ_.call(null,"space",token))
{return " ";
} else
{if(cljsrepl.core._EQ_.call(null,"tab",token))
{return "\t";
} else
{if(cljsrepl.core._EQ_.call(null,"backspace",token))
{return "\b";
} else
{if(cljsrepl.core._EQ_.call(null,"formfeed",token))
{return "\f";
} else
{if(cljsrepl.core._EQ_.call(null,"return",token))
{return "\r";
} else
{if(cljsrepl.core._EQ_.call(null,"u",cljsrepl.core.first.call(null,token)))
{var chars = cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.rest.call(null,token));
cljsrepl.reader.validate_unicode_escape.call(null,cljsrepl.reader.unicode_4_pattern,rdr,"u",chars);
var c = cljsrepl.reader.make_unicode_char.call(null,chars,16);
var cval = parseInt(chars,16);
if((function (){var and__3941__auto__ = (cval >= 55296);
if(and__3941__auto__)
{return (cval <= 57343);
} else
{return and__3941__auto__;
}
})())
{cljsrepl.reader.reader_error.call(null,rdr,"Invalid character constant: \\",token);
} else
{}
return c;
} else
{if(cljsrepl.core._EQ_.call(null,"o",cljsrepl.core.first.call(null,token)))
{var chars = cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.rest.call(null,token));
cljsrepl.reader.validate_unicode_escape.call(null,cljsrepl.reader.octal_pattern,rdr,"o",chars);
var c = cljsrepl.reader.make_unicode_char.call(null,chars,8);
var cval = parseInt(chars,8);
if((cval > 255))
{cljsrepl.reader.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
} else
{}
return c;
} else
{if("\uFDD0'else")
{return cljsrepl.reader.reader_error.call(null,rdr,"Unsupported character: \\",token);
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
cljsrepl.reader.garg = (function garg(n){
var pre = ((cljsrepl.core._EQ_.call(null,n,-1))?"rest":[cljsrepl.core.str("p"),cljsrepl.core.str(n)].join(''));
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str(cljsrepl.core.gensym.call(null,pre)),cljsrepl.core.str("#")].join(''));
});
cljsrepl.reader.read_fn = (function read_fn(rdr,_){
if(cljsrepl.core.truth_(cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_arg_env_STAR_)))
{cljsrepl.reader.reader_error.call(null,null,"nested #()s are not allowed");
} else
{}
var _STAR_arg_env_STAR_4342 = cljsrepl.reader._STAR_arg_env_STAR_;
try{cljsrepl.reader._STAR_arg_env_STAR_ = cljsrepl.core.atom.call(null,cljsrepl.core.sorted_map.call(null));
cljsrepl.reader.unread.call(null,rdr,"(");
var form = cljsrepl.reader.read.call(null,rdr,true,null,true);
var argsyms = cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_arg_env_STAR_);
var rargs = cljsrepl.core.rseq.call(null,argsyms);
var highpair = cljsrepl.core.first.call(null,rargs);
var higharg = (cljsrepl.core.truth_(highpair)?cljsrepl.core.key.call(null,highpair):0);
var args = (((higharg > 0))?cljsrepl.core.doall.call(null,(function (){var iter__2144__auto__ = (function iter__4344(s__4345){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s__4345__$1 = s__4345;
while(true){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,s__4345__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var i = cljsrepl.core.first.call(null,xs__4579__auto__);
return cljsrepl.core.cons.call(null,(function (){var or__3943__auto__ = cljsrepl.core._lookup.call(null,argsyms,i,null);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.reader.garg.call(null,i);
}
})(),iter__4344.call(null,cljsrepl.core.rest.call(null,s__4345__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,cljsrepl.core.range.call(null,1,(1 + higharg)));
})()):cljsrepl.reader.args);
var restsym = cljsrepl.core._lookup.call(null,argsyms,-1,null);
var args__$1 = (cljsrepl.core.truth_(restsym)?cljsrepl.core.concat.call(null,args,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"&")),restsym], true)):args);
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"fn*")),cljsrepl.core.vec.call(null,args__$1),form);
}finally {cljsrepl.reader._STAR_arg_env_STAR_ = _STAR_arg_env_STAR_4342;
}});
cljsrepl.reader.registerArg = (function registerArg(n){
var argsyms = cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_arg_env_STAR_);
if(cljsrepl.core.truth_(argsyms))
{} else
{cljsrepl.reader.reader_error.call(null,cljsrepl.reader._,"arg literal not in #()");
}
var ret = cljsrepl.core._lookup.call(null,argsyms,n,null);
if(cljsrepl.core.truth_(ret))
{return ret;
} else
{var ret__$1 = cljsrepl.reader.garg.call(null,n);
cljsrepl.core.swap_BANG_.call(null,cljsrepl.reader._STAR_arg_env_STAR_,cljsrepl.core.assoc,n,ret__$1);
return ret__$1;
}
});
cljsrepl.reader.read_arg = (function read_arg(rdr,pct){
if(cljsrepl.core.not.call(null,cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_arg_env_STAR_)))
{return cljsrepl.reader.read_symbol.call(null,rdr,"%");
} else
{var ch = cljsrepl.reader.peek_char.call(null,rdr);
if((function (){var or__3943__auto__ = (ch == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljsrepl.reader.whitespace_QMARK_.call(null,ch);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return cljsrepl.reader.macro_terminating_QMARK_.call(null,ch);
}
}
})())
{return cljsrepl.reader.registerArg.call(null,1);
} else
{var n = cljsrepl.reader.read.call(null,rdr,true,null,true);
if(cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Symbol(null,"&")),n))
{return cljsrepl.reader.registerArg.call(null,-1);
} else
{if(!(cljsrepl.core.number_QMARK_.call(null,n)))
{return cljsrepl.reader.reader_error.call(null,rdr,"arg literal must be %, %& or %integer");
} else
{if("\uFDD0'else")
{return cljsrepl.reader.registerArg.call(null,cljsrepl.core.int$.call(null,n));
} else
{return null;
}
}
}
}
}
});
cljsrepl.reader.read_set = (function read_set(rdr,_){
return cljsrepl.core.set.call(null,cljsrepl.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljsrepl.reader.read_regex = (function read_regex(reader){
var buffer = "";
var ch = cljsrepl.reader.read_char.call(null,reader);
while(true){
if((ch == null))
{return cljsrepl.reader.reader_error.call(null,reader,"EOF while reading regex");
} else
{if(("\\" === ch))
{{
var G__4346 = [cljsrepl.core.str(buffer),cljsrepl.core.str(ch),cljsrepl.core.str(cljsrepl.reader.read_char.call(null,reader))].join('');
var G__4347 = cljsrepl.reader.read_char.call(null,reader);
buffer = G__4346;
ch = G__4347;
continue;
}
} else
{if(("\"" === ch))
{return cljsrepl.core.re_pattern.call(null,buffer);
} else
{if("\uFDD0'default")
{{
var G__4348 = [cljsrepl.core.str(buffer),cljsrepl.core.str(ch)].join('');
var G__4349 = cljsrepl.reader.read_char.call(null,reader);
buffer = G__4348;
ch = G__4349;
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
cljsrepl.reader.read_discard = (function read_discard(rdr,_){
cljsrepl.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljsrepl.reader.macros = (function macros(c){
if((c === "\""))
{return cljsrepl.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljsrepl.reader.read_keyword;
} else
{if((c === ";"))
{return cljsrepl.reader.read_comment;
} else
{if((c === "'"))
{return cljsrepl.reader.wrapping_reader.call(null,(new cljsrepl.core.Symbol(null,"quote")));
} else
{if((c === "@"))
{return cljsrepl.reader.wrapping_reader.call(null,(new cljsrepl.core.Symbol(null,"deref")));
} else
{if((c === "^"))
{return cljsrepl.reader.read_meta;
} else
{if((c === "`"))
{return cljsrepl.reader.read_syntax_quote;
} else
{if((c === "~"))
{return cljsrepl.reader.read_unquote;
} else
{if((c === "("))
{return cljsrepl.reader.read_list;
} else
{if((c === ")"))
{return cljsrepl.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljsrepl.reader.read_vector;
} else
{if((c === "]"))
{return cljsrepl.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljsrepl.reader.read_map;
} else
{if((c === "}"))
{return cljsrepl.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljsrepl.reader.read_character;
} else
{if((c === "%"))
{return cljsrepl.reader.read_arg;
} else
{if((c === "#"))
{return cljsrepl.reader.read_dispatch;
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
cljsrepl.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljsrepl.reader.read_set;
} else
{if((s === "("))
{return cljsrepl.reader.read_fn;
} else
{if((s === "<"))
{return cljsrepl.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljsrepl.reader.read_regex;
} else
{if((s === "!"))
{return cljsrepl.reader.read_comment;
} else
{if((s === "_"))
{return cljsrepl.reader.read_discard;
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
cljsrepl.reader.read = (function() {
var read = null;
var read__1 = (function (reader){
return read.call(null,reader,true,null);
});
var read__3 = (function (reader,eof_is_error,sentinel){
return read.call(null,reader,eof_is_error,sentinel,false);
});
var read__4 = (function (reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljsrepl.reader.read_char.call(null,reader);
if((ch == null))
{if(cljsrepl.core.truth_(eof_is_error))
{return cljsrepl.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljsrepl.reader.whitespace_QMARK_.call(null,ch))
{{
var G__4350 = reader;
var G__4351 = eof_is_error;
var G__4352 = sentinel;
var G__4353 = is_recursive;
reader = G__4350;
eof_is_error = G__4351;
sentinel = G__4352;
is_recursive = G__4353;
continue;
}
} else
{if(cljsrepl.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__4354 = cljsrepl.reader.read_comment.call(null,reader,ch);
var G__4355 = eof_is_error;
var G__4356 = sentinel;
var G__4357 = is_recursive;
reader = G__4354;
eof_is_error = G__4355;
sentinel = G__4356;
is_recursive = G__4357;
continue;
}
} else
{if("\uFDD0'else")
{var f = cljsrepl.reader.macros.call(null,ch);
var res = (cljsrepl.core.truth_(f)?f.call(null,reader,ch):((cljsrepl.reader.number_literal_QMARK_.call(null,reader,ch))?cljsrepl.reader.read_number.call(null,reader,ch):(("\uFDD0'else")?cljsrepl.reader.read_symbol.call(null,reader,ch):null)));
if((res === reader))
{{
var G__4358 = reader;
var G__4359 = eof_is_error;
var G__4360 = sentinel;
var G__4361 = is_recursive;
reader = G__4358;
eof_is_error = G__4359;
sentinel = G__4360;
is_recursive = G__4361;
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
cljsrepl.reader.read_string = (function read_string(s){
var r = cljsrepl.reader.string_push_back_reader.call(null,s);
return cljsrepl.reader.read.call(null,r,true,null,false);
});
cljsrepl.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljsrepl.core._EQ_.call(null,width,cljsrepl.core.count.call(null,s)))
{return s;
} else
{if((width < cljsrepl.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b = (new replgoog.string.StringBuffer(s));
while(true){
if((b.getLength() < width))
{{
var G__4362 = b.append("0");
b = G__4362;
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
cljsrepl.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljsrepl.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljsrepl.core.not.call(null,cljsrepl.reader.divisible_QMARK_.call(null,num,div));
});
cljsrepl.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3941__auto__ = cljsrepl.reader.divisible_QMARK_.call(null,year,4);
if(cljsrepl.core.truth_(and__3941__auto__))
{var or__3943__auto__ = cljsrepl.reader.indivisible_QMARK_.call(null,year,100);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3941__auto__;
}
});
cljsrepl.reader.days_in_month = (function (){var dim_norm = cljsrepl.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap = cljsrepl.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljsrepl.core._lookup.call(null,(cljsrepl.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month,null);
});
})();
cljsrepl.reader.parse_and_validate_timestamp = (function (){var timestamp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check = (function (low,n,high,msg){
if((function (){var and__3941__auto__ = (low <= n);
if(and__3941__auto__)
{return (n <= high);
} else
{return and__3941__auto__;
}
})())
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str([cljsrepl.core.str(msg),cljsrepl.core.str(" Failed:  "),cljsrepl.core.str(low),cljsrepl.core.str("<="),cljsrepl.core.str(n),cljsrepl.core.str("<="),cljsrepl.core.str(high)].join('')),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"<=")),(new cljsrepl.core.Symbol(null,"low")),(new cljsrepl.core.Symbol(null,"n")),(new cljsrepl.core.Symbol(null,"high"))),cljsrepl.core.hash_map("\uFDD0'line",857,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4092__auto__ = cljsrepl.core.map.call(null,cljsrepl.core.vec,cljsrepl.core.split_at.call(null,8,cljsrepl.core.re_matches.call(null,timestamp,ts)));
if(cljsrepl.core.truth_(temp__4092__auto__))
{var vec__4367 = temp__4092__auto__;
var vec__4368 = cljsrepl.core.nth.call(null,vec__4367,0,null);
var _ = cljsrepl.core.nth.call(null,vec__4368,0,null);
var years = cljsrepl.core.nth.call(null,vec__4368,1,null);
var months = cljsrepl.core.nth.call(null,vec__4368,2,null);
var days = cljsrepl.core.nth.call(null,vec__4368,3,null);
var hours = cljsrepl.core.nth.call(null,vec__4368,4,null);
var minutes = cljsrepl.core.nth.call(null,vec__4368,5,null);
var seconds = cljsrepl.core.nth.call(null,vec__4368,6,null);
var milliseconds = cljsrepl.core.nth.call(null,vec__4368,7,null);
var vec__4369 = cljsrepl.core.nth.call(null,vec__4367,1,null);
var ___$1 = cljsrepl.core.nth.call(null,vec__4369,0,null);
var ___$2 = cljsrepl.core.nth.call(null,vec__4369,1,null);
var ___$3 = cljsrepl.core.nth.call(null,vec__4369,2,null);
var V = vec__4367;
var vec__4370 = cljsrepl.core.map.call(null,(function (v){
return cljsrepl.core.map.call(null,(function (p1__4366_SHARP_){
return parseInt(p1__4366_SHARP_,10);
}),v);
}),cljsrepl.core.map.call(null,(function (p1__4364_SHARP_,p2__4363_SHARP_){
return cljsrepl.core.update_in.call(null,p2__4363_SHARP_,cljsrepl.core.PersistentVector.fromArray([0], true),p1__4364_SHARP_);
}),cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.constantly.call(null,null),(function (p1__4365_SHARP_){
if(cljsrepl.core._EQ_.call(null,p1__4365_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V));
var vec__4371 = cljsrepl.core.nth.call(null,vec__4370,0,null);
var ___$4 = cljsrepl.core.nth.call(null,vec__4371,0,null);
var y = cljsrepl.core.nth.call(null,vec__4371,1,null);
var mo = cljsrepl.core.nth.call(null,vec__4371,2,null);
var d = cljsrepl.core.nth.call(null,vec__4371,3,null);
var h = cljsrepl.core.nth.call(null,vec__4371,4,null);
var m = cljsrepl.core.nth.call(null,vec__4371,5,null);
var s = cljsrepl.core.nth.call(null,vec__4371,6,null);
var ms = cljsrepl.core.nth.call(null,vec__4371,7,null);
var vec__4372 = cljsrepl.core.nth.call(null,vec__4370,1,null);
var offset_sign = cljsrepl.core.nth.call(null,vec__4372,0,null);
var offset_hours = cljsrepl.core.nth.call(null,vec__4372,1,null);
var offset_minutes = cljsrepl.core.nth.call(null,vec__4372,2,null);
var offset = (offset_sign * ((offset_hours * 60) + offset_minutes));
return cljsrepl.core.PersistentVector.fromArray([((cljsrepl.core.not.call(null,years))?1970:y),((cljsrepl.core.not.call(null,months))?1:check.call(null,1,mo,12,"timestamp month field must be in range 1..12")),((cljsrepl.core.not.call(null,days))?1:check.call(null,1,d,cljsrepl.reader.days_in_month.call(null,mo,cljsrepl.reader.leap_year_QMARK_.call(null,y)),"timestamp day field must be in range 1..last day in month")),((cljsrepl.core.not.call(null,hours))?0:check.call(null,0,h,23,"timestamp hour field must be in range 0..23")),((cljsrepl.core.not.call(null,minutes))?0:check.call(null,0,m,59,"timestamp minute field must be in range 0..59")),((cljsrepl.core.not.call(null,seconds))?0:check.call(null,0,s,((cljsrepl.core._EQ_.call(null,m,59))?60:59),"timestamp second field must be in range 0..60")),((cljsrepl.core.not.call(null,milliseconds))?0:check.call(null,0,ms,999,"timestamp millisecond field must be in range 0..999")),offset], true);
} else
{return null;
}
});
})();
cljsrepl.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4090__auto__ = cljsrepl.reader.parse_and_validate_timestamp.call(null,ts);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var vec__4374 = temp__4090__auto__;
var years = cljsrepl.core.nth.call(null,vec__4374,0,null);
var months = cljsrepl.core.nth.call(null,vec__4374,1,null);
var days = cljsrepl.core.nth.call(null,vec__4374,2,null);
var hours = cljsrepl.core.nth.call(null,vec__4374,3,null);
var minutes = cljsrepl.core.nth.call(null,vec__4374,4,null);
var seconds = cljsrepl.core.nth.call(null,vec__4374,5,null);
var ms = cljsrepl.core.nth.call(null,vec__4374,6,null);
var offset = cljsrepl.core.nth.call(null,vec__4374,7,null);
return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljsrepl.reader.reader_error.call(null,null,[cljsrepl.core.str("Unrecognized date/time syntax: "),cljsrepl.core.str(ts)].join(''));
}
});
cljsrepl.reader.read_date = (function read_date(s){
if(cljsrepl.core.string_QMARK_.call(null,s))
{return cljsrepl.reader.parse_timestamp.call(null,s);
} else
{return cljsrepl.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljsrepl.reader.read_queue = (function read_queue(elems){
if(cljsrepl.core.vector_QMARK_.call(null,elems))
{return cljsrepl.core.into.call(null,cljsrepl.core.PersistentQueue.EMPTY,elems);
} else
{return cljsrepl.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljsrepl.reader.read_uuid = (function read_uuid(uuid){
if(cljsrepl.core.string_QMARK_.call(null,uuid))
{return (new cljsrepl.core.UUID(uuid));
} else
{return cljsrepl.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljsrepl.reader._STAR_tag_table_STAR_ = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljsrepl.reader.read_date,"uuid":cljsrepl.reader.read_uuid,"queue":cljsrepl.reader.read_queue}));
cljsrepl.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag = cljsrepl.reader.read_symbol.call(null,rdr,initch);
var temp__4090__auto__ = cljsrepl.core._lookup.call(null,cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_tag_table_STAR_),cljsrepl.core.name.call(null,tag),null);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var pfn = temp__4090__auto__;
return pfn.call(null,cljsrepl.reader.read.call(null,rdr,true,null,false));
} else
{return cljsrepl.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljsrepl.core.name.call(null,tag)," in ",cljsrepl.core.pr_str.call(null,cljsrepl.core.keys.call(null,cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_tag_table_STAR_))));
}
});
cljsrepl.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__$1 = cljsrepl.core.name.call(null,tag);
var old_parser = cljsrepl.core._lookup.call(null,cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_tag_table_STAR_),tag__$1,null);
cljsrepl.core.swap_BANG_.call(null,cljsrepl.reader._STAR_tag_table_STAR_,cljsrepl.core.assoc,tag__$1,f);
return old_parser;
});
cljsrepl.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__$1 = cljsrepl.core.name.call(null,tag);
var old_parser = cljsrepl.core._lookup.call(null,cljsrepl.core.deref.call(null,cljsrepl.reader._STAR_tag_table_STAR_),tag__$1,null);
cljsrepl.core.swap_BANG_.call(null,cljsrepl.reader._STAR_tag_table_STAR_,cljsrepl.core.dissoc,tag__$1);
return old_parser;
});

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"cljsrepl.reader"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4375__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4375 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4375__delegate.call(this, m);
};
G__4375.cljs$lang$maxFixedArity = 0;
G__4375.cljs$lang$applyTo = (function (arglist__4376){
var m = cljsrepl.core.seq(arglist__4376);;
return G__4375__delegate(m);
});
G__4375.cljs$lang$arity$variadic = G__4375__delegate;
return G__4375;
})()
,cljsrepl.core.hash_map("\uFDD0'defs",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"get-line-number")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IndexingReader")),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/get-line-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",25,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-line")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-line")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads to the end of a line and returns the line.","\uFDD0'line",187,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-2-chars")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-2-chars")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",293,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-unquote")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-unquote")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",626,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-4-chars")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-4-chars")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",299,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"indivisible?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"num")),(new cljsrepl.core.Symbol(null,"div"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"num")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"div")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/indivisible?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",838,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"re-find*")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"re")),(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/re-find*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",222,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"IPushbackReader")),cljsrepl.core.hash_map("\uFDD0'line",22,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IPushbackReader"))),(new cljsrepl.core.Symbol(null,"throwing-reader")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"msg"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"msg")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/throwing-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",486,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"ratio-pattern")),cljsrepl.core.hash_map("\uFDD0'line",219,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/ratio-pattern"))),(new cljsrepl.core.Symbol(null,"number-literal?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/number-literal?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether the reader is at the start of a number literal","\uFDD0'line",150,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean"))),(new cljsrepl.core.Symbol(null,"wrapping-reader")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"sym"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sym")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/wrapping-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",481,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"escape-char")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"buffer")),(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"buffer")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/escape-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",321,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-list")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-list")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",393,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"parse-timestamp")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ts"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ts")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/parse-timestamp")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",880,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"desugar-meta")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/desugar-meta")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",473,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"macros")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"c"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/macros")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",762,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-queue")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"elems"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"elems")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-queue")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",896,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"leap-year?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"year"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"year")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/leap-year?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",842,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"reader-error")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"&")),(new cljsrepl.core.Symbol(null,"msg"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"msg")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/reader-error")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",164,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"comment-prefix?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/comment-prefix?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether the character begins a comment.","\uFDD0'line",145,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean"))),(new cljsrepl.core.Symbol(null,"string-reader")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/string-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates a StringReader from a given string","\uFDD0'line",105,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-map")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",410,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"string-push-back-reader")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"buf-len"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"buf-len")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/string-push-back-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates a PushbackReader from a given string","\uFDD0'line",110,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"eof-is-error")),(new cljsrepl.core.Symbol(null,"sentinel"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"eof-is-error")),(new cljsrepl.core.Symbol(null,"sentinel")),(new cljsrepl.core.Symbol(null,"is-recursive"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"eof-is-error")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sentinel")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"eof-is-error")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sentinel")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"is-recursive")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads the first object from a PushbackReader. Returns the object read.\n   If EOF, throws if eof-is-error is true. Otherwise returns sentinel.","\uFDD0'line",794,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-set")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-set")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",737,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"newline?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/newline?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether the character is a newline.","\uFDD0'line",140,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean"))),(new cljsrepl.core.Symbol(null,"isUnquoteSplicing?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"form"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/isUnquoteSplicing?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",518,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"zero-fill-right")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"width"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"width")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/zero-fill-right")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",826,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-char")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/Reader")),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-comment")),cljsrepl.core.hash_map("\uFDD0'line",404,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-comment"))),(new cljsrepl.core.Symbol(null,"read-symbol")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-symbol")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",447,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"/")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core//"))),(new cljsrepl.core.Symbol(null,"unread")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IPushbackReader")),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/unread")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",22,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"parse-and-validate-timestamp")),cljsrepl.core.hash_map("\uFDD0'line",854,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'private",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/parse-and-validate-timestamp"))),(new cljsrepl.core.Symbol(null,"read-string")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-string")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Reads one object from the string s","\uFDD0'line",817,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-meta")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-meta")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",491,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"special-symbols")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"t")),(new cljsrepl.core.Symbol(null,"not-found"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"t")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"not-found")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/special-symbols")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",440,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"PushbackReader")),cljsrepl.core.hash_map("\uFDD0'line",45,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocols",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IPushbackReader")),(new cljsrepl.core.Symbol(null,"cljsrepl.reader/Reader"))]),"\uFDD0'num-fields",4,"\uFDD0'type",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/PushbackReader"))),(new cljsrepl.core.Symbol(null,"indexing-push-back-reader")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s")),(new cljsrepl.core.Symbol(null,"buf-len"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"buf-len")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/indexing-push-back-reader")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Creates an IndexingPushbackReader from a given string","\uFDD0'line",117,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-fn")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-fn")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",683,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-uuid")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"uuid"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"uuid")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-uuid")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",903,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"divisible?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"num")),(new cljsrepl.core.Symbol(null,"div"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"num")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"div")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/divisible?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",834,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"make-unicode-char")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"code-str")),(new cljsrepl.core.Symbol(null,"&")),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"base"))])]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"code-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"p__4289")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/make-unicode-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",316,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-number")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",417,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-delimited-list")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"delim")),(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"recursive?"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"delim")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"recursive?")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-delimited-list")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",353,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"IndexingPushbackReader")),cljsrepl.core.hash_map("\uFDD0'line",76,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocols",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IPushbackReader")),(new cljsrepl.core.Symbol(null,"cljsrepl.reader/Reader")),(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IndexingReader"))]),"\uFDD0'num-fields",5,"\uFDD0'type",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IndexingPushbackReader"))),(new cljsrepl.core.Symbol(null,"UNQUOTE-SPLICING")),cljsrepl.core.hash_map("\uFDD0'line",509,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/UNQUOTE-SPLICING"))),(new cljsrepl.core.Symbol(null,"UNQUOTE")),cljsrepl.core.hash_map("\uFDD0'line",508,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/UNQUOTE"))),(new cljsrepl.core.Symbol(null,"maybe-read-tagged-type")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/maybe-read-tagged-type")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",913,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"*gensym-env*")),cljsrepl.core.hash_map("\uFDD0'line",512,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/*gensym-env*"))),(new cljsrepl.core.Symbol(null,"Reader")),cljsrepl.core.hash_map("\uFDD0'line",18,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/Reader"))),(new cljsrepl.core.Symbol(null,"octal-pattern")),cljsrepl.core.hash_map("\uFDD0'line",308,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/octal-pattern"))),(new cljsrepl.core.Symbol(null,"days-in-month")),cljsrepl.core.hash_map("\uFDD0'line",848,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'private",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/days-in-month"))),(new cljsrepl.core.Symbol(null,"garg")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/garg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",679,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"peek-char")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/Reader")),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/peek-char")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"not-implemented")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/not-implemented")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",373,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"whitespace?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/whitespace?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether a given character is whitespace","\uFDD0'line",130,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean"))),(new cljsrepl.core.Symbol(null,"validate-unicode-escape")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"unicode-pattern")),(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"escape-char")),(new cljsrepl.core.Symbol(null,"unicode-str"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"unicode-pattern")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"escape-char")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"unicode-str")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/validate-unicode-escape")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",311,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"escape-char-map")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"c"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"c")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/escape-char-map")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",278,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"isUnquote?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"form"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/isUnquote?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",515,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"re-matches*")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"re")),(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"re")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/re-matches*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",262,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-discard")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-discard")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",757,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"match-int")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/match-int")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",230,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-vector")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-vector")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",406,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"dispatch-macros")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/dispatch-macros")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",784,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"registerArg")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"n"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"n")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/registerArg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",706,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"*tag-table*")),cljsrepl.core.hash_map("\uFDD0'line",909,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/*tag-table*"))),(new cljsrepl.core.Symbol(null,"syntaxQuote")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"form"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"form")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/syntaxQuote")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",535,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-character")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-character")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",643,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"int-pattern")),cljsrepl.core.hash_map("\uFDD0'line",218,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/int-pattern"))),(new cljsrepl.core.Symbol(null,"read-keyword")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-keyword")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",456,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"sqExpandList")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"sq"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"sq")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/sqExpandList")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",521,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-unmatched-delimiter")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-unmatched-delimiter")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",389,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"match-float")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/match-float")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",258,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"StringReader")),cljsrepl.core.hash_map("\uFDD0'line",33,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocols",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"cljsrepl.reader/Reader"))]),"\uFDD0'num-fields",3,"\uFDD0'type",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/StringReader"))),(new cljsrepl.core.Symbol(null,"normalize-newline")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/normalize-newline")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",68,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"match-ratio")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/match-ratio")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",251,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"get-column-number")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'protocol",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IndexingReader")),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/get-column-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",25,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-syntax-quote")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-syntax-quote")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",620,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-past")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"pred")),(new cljsrepl.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"pred")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-past")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Read until first character that doesn't match pred, returning\n   char.","\uFDD0'line",344,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"skip-line")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/skip-line")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Advances the reader to the end of a line. Returns the reader","\uFDD0'line",207,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"macro-terminating?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/macro-terminating?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",171,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean"))),(new cljsrepl.core.Symbol(null,"read-string*")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-string*")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",429,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-token")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"initch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"initch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-token")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",177,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-dispatch")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"_"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"_")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-dispatch")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",379,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"deregister-tag-parser!")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"tag"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"tag")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/deregister-tag-parser!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",929,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"match-number")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/match-number")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",271,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"line-seq")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/line-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",202,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"unicode-4-pattern")),cljsrepl.core.hash_map("\uFDD0'line",309,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/unicode-4-pattern"))),(new cljsrepl.core.Symbol(null,"read-regex")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"reader"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"reader")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-regex")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",741,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"*arg-env*")),cljsrepl.core.hash_map("\uFDD0'line",513,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/*arg-env*"))),(new cljsrepl.core.Symbol(null,"IndexingReader")),cljsrepl.core.hash_map("\uFDD0'line",25,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/IndexingReader"))),(new cljsrepl.core.Symbol(null,"register-tag-parser!")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"tag")),(new cljsrepl.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"tag")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/register-tag-parser!")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",922,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"numeric?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"ch"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"ch")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/numeric?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Checks whether a given character is numeric","\uFDD0'line",135,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean"))),(new cljsrepl.core.Symbol(null,"read-arg")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"rdr")),(new cljsrepl.core.Symbol(null,"pct"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"rdr")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"pct")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-arg")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",716,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"read-date")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/read-date")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",889,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs"),(new cljsrepl.core.Symbol(null,"unicode-2-pattern")),cljsrepl.core.hash_map("\uFDD0'line",307,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/unicode-2-pattern"))),(new cljsrepl.core.Symbol(null,"float-pattern")),cljsrepl.core.hash_map("\uFDD0'line",220,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/reader.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader/float-pattern")))),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"ana")),(new cljsrepl.core.Symbol(null,"cljsrepl.analyzer")),(new cljsrepl.core.Symbol(null,"string")),(new cljsrepl.core.Symbol(null,"replclojure.string")),(new cljsrepl.core.Symbol(null,"gstring")),(new cljsrepl.core.Symbol(null,"replgoog.string"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljsrepl.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.reader"))),old);
}));
