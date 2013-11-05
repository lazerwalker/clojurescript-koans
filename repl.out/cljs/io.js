replgoog.provide('replcljs.io');
replgoog.require('replcljs.core');
replcljs.io._STAR_clojurescript_home_STAR_ = "../";
replcljs.io._STAR_classpath_suffixes_STAR_ = replcljs.core.PersistentVector.fromArray(["closure/library/closure/","src/cljs/","test/cljs/","./"], true);
replcljs.io.is_node_QMARK_ = (replcljs.core.truth_((function (){try{return require;
}catch (e4694){if(replcljs.core.instance_QMARK_.call(null,Error,e4694))
{var e = e4694;
return null;
} else
{if("\uFDD0'else")
{throw e4694;
} else
{return null;
}
}
}})())?true:false);
replcljs.io.node_fs = (replcljs.core.truth_(replcljs.io.is_node_QMARK_)?require("fs"):null);
replcljs.io.node_path = (replcljs.core.truth_(replcljs.io.is_node_QMARK_)?require("path"):null);
replcljs.io.path_separator = (replcljs.core.truth_(replcljs.io.is_node_QMARK_)?replcljs.io.node_path.sep:"/");
replcljs.io.IFile = {};
replcljs.io.file_read = (function file_read(f){
var path = (((function (){var G__4697 = f;
if(G__4697)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4697.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4697.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4697);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4697);
}
})())?f.getPath():f);
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.readFileSync(path).toString();
} else
{var req = (function (){var G__4698 = (new XMLHttpRequest());
G__4698.open("GET",path,false);
return G__4698;
})();
req.send();
if(replcljs.core._EQ_.call(null,200,req.status))
{return req.responseText;
} else
{throw (new Error([replcljs.core.str("Could not file-read: "),replcljs.core.str(path)].join('')));
}
}
});
replcljs.io.file_write = (function file_write(f,data){
var path = (((function (){var G__4700 = f;
if(G__4700)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4700.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4700.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4700);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4700);
}
})())?f.getPath():f);
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.writeFileSync(path,data);
} else
{throw (new Error("No file-write capability defined for this JS environment"));
}
});
replcljs.io.file_exists_QMARK_ = (function file_exists_QMARK_(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.existsSync(path);
} else
{throw (new Error("No file-exists? capability defined for this JS environment"));
}
});
replcljs.io.file_is_dir_QMARK_ = (function file_is_dir_QMARK_(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.statSync(path).isDirectory();
} else
{throw (new Error("No file-is-dir? capability defined for this JS environment"));
}
});
replcljs.io.file_readdir = (function file_readdir(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.readdirSync(path);
} else
{throw (new Error("No file-readdir capability defined for this JS environment"));
}
});
replcljs.io.file_stat = (function file_stat(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.statSync(path);
} else
{throw (new Error("No file-stat capability defined for this JS environment"));
}
});
replcljs.io.path_normalize = (function path_normalize(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_path.normalize(path);
} else
{throw (new Error("No path-normalize capability defined for this JS environment"));
}
});
replcljs.io.path_resolve = (function path_resolve(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_path.resolve(path);
} else
{throw (new Error("No path-resolve capability defined for this JS environment"));
}
});
replcljs.io.path_dirname = (function path_dirname(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_path.dirname(path);
} else
{throw (new Error("No path-dirname capability defined for this JS environment"));
}
});
replcljs.io.path_basename = (function path_basename(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_path.basename(path);
} else
{throw (new Error("No path-basename capability defined for this JS environment"));
}
});
replcljs.io.mkdir = (function mkdir(path){
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{return replcljs.io.node_fs.mkdirSync(path);
} else
{throw (new Error("No mkdir capability defined for this JS environment"));
}
});
replcljs.io.mkdirs = (function mkdirs(path){
var components = path.split("/");
var cur = [replcljs.core.str(replcljs.core.first.call(null,components)),replcljs.core.str("/")].join('');
var left = replcljs.core.next.call(null,components);
while(true){
if(replcljs.core.not.call(null,replcljs.io.file_exists_QMARK_.call(null,cur)))
{replcljs.io.mkdir.call(null,cur);
} else
{}
if(left)
{{
var G__4701 = [replcljs.core.str(cur),replcljs.core.str(replcljs.core.first.call(null,left)),replcljs.core.str("/")].join('');
var G__4702 = replcljs.core.next.call(null,left);
cur = G__4701;
left = G__4702;
continue;
}
} else
{return null;
}
break;
}
});
replgoog.provide('replcljs.io.File');

/**
* @constructor
*/
replcljs.io.File = (function (pathname){
this.pathname = pathname;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
replcljs.io.File.cljs$lang$type = true;
replcljs.io.File.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.io/File");
});
replcljs.io.File.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.io/File");
});
replcljs.io.File.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (me,writer,opts){
var self__ = this;
return replcljs.core._write.call(null,writer,[replcljs.core.str("#<File "),replcljs.core.str(me.getPath()),replcljs.core.str(">")].join(''));
});
replcljs.io.File.prototype.getParent = (function (){
var self__ = this;
var me = this;
return replcljs.io.path_dirname.call(null,me.getPath());
});
replcljs.io.File.prototype.getPath = (function (){
var self__ = this;
var _ = this;
return replcljs.io.path_normalize.call(null,self__.pathname);
});
replcljs.io.File.prototype.mkdirs = (function (){
var self__ = this;
var _ = this;
return replcljs.io.mkdirs.call(null,self__.pathname);
});
replcljs.io.File.prototype.lastModified = (function (){
var self__ = this;
var _ = this;
return replcljs.io.file_stat.call(null,self__.pathname).mtime.getTime();
});
replcljs.io.File.prototype.exists = (function (){
var self__ = this;
var me = this;
return replcljs.io.file_exists_QMARK_.call(null,me.getPath());
});
replcljs.io.File.prototype.listFiles = (function (){
var self__ = this;
var me = this;
return replcljs.io.file_readdir.call(null,me.getPath());
});
replcljs.io.File.prototype.isDirectory = (function (){
var self__ = this;
var me = this;
return replcljs.io.file_is_dir_QMARK_.call(null,me.getPath());
});
replcljs.io.File.prototype.getAbsoluteFile = (function (){
var self__ = this;
var me = this;
return (new replcljs.io.File(me.getAbsolutePath()));
});
replcljs.io.File.prototype.getParentFile = (function (){
var self__ = this;
var me = this;
return (new replcljs.io.File(me.getParent()));
});
replcljs.io.File.prototype.getCanonicalFile = (function (){
var self__ = this;
var me = this;
return me.getAbsoluteFile();
});
replcljs.io.File.prototype.getAbsolutePath = (function (){
var self__ = this;
var me = this;
return replcljs.io.path_resolve.call(null,me.getPath());
});
replcljs.io.File.prototype.getName = (function (){
var self__ = this;
var me = this;
return replcljs.io.path_basename.call(null,me.getPath());
});
replcljs.io.File.prototype.toString = (function (){
var self__ = this;
var me = this;
return me.getPath();
});
replcljs.io.File.prototype.getCanonicalPath = (function (){
var self__ = this;
var me = this;
return me.getAbsolutePath();
});
replcljs.io.File.prototype.cljs$io$IFile$ = true;
replcljs.io.file = (function() {
var file = null;
var file__1 = (function (path){
var path__$1 = (((function (){var G__4707 = path;
if(G__4707)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4707.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4707.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4707);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4707);
}
})())?path.getPath():path);
return (new replcljs.io.File(path__$1));
});
var file__2 = (function (parent,path){
var parent__$1 = (((function (){var G__4708 = parent;
if(G__4708)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4708.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4708.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4708);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4708);
}
})())?parent.getPath():parent);
var path__$1 = (((function (){var G__4709 = path;
if(G__4709)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4709.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4709.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4709);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.io.IFile,G__4709);
}
})())?path.getPath():path);
return (new replcljs.io.File([replcljs.core.str(parent__$1),replcljs.core.str(replcljs.io.path_separator),replcljs.core.str(path__$1)].join('')));
});
file = function(parent,path){
switch(arguments.length){
case 1:
return file__1.call(this,parent);
case 2:
return file__2.call(this,parent,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file.cljs$lang$arity$1 = file__1;
file.cljs$lang$arity$2 = file__2;
return file;
})()
;
/**
* A tree seq on replcljs.io.Files
*/
replcljs.io.file_seq = (function file_seq(dir){
return replcljs.core.tree_seq.call(null,(function (f){
return f.isDirectory();
}),(function (d){
return replcljs.core.map.call(null,(function (p1__4703_SHARP_){
return (new replcljs.io.File([replcljs.core.str(d),replcljs.core.str(replcljs.io.path_separator),replcljs.core.str(p1__4703_SHARP_)].join('')));
}),d.listFiles());
}),dir);
});
if(replcljs.core.truth_(replcljs.io.is_node_QMARK_))
{var prog_4711 = replcljs.io.path_dirname.call(null,(process.argv[1]));
replcljs.io._STAR_clojurescript_home_STAR_ = replcljs.io.path_resolve.call(null,[replcljs.core.str(prog_4711),replcljs.core.str("/..")].join(''));
} else
{}
/**
* Find the file on the "classpath" (which consists of every element
* of *classpath-suffixes* appended to *clojurescript-home*. Only works
* in Node mode for now.
*/
replcljs.io.resource = (function resource(file){
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core._EQ_.call(null,"/",replcljs.core.first.call(null,file));
if(and__3941__auto__)
{return replcljs.io.file_exists_QMARK_.call(null,file);
} else
{return and__3941__auto__;
}
})()))
{return replcljs.io.path_resolve.call(null,file);
} else
{var finder = (function (p1__4710_SHARP_){
var p = [replcljs.core.str(replcljs.io._STAR_clojurescript_home_STAR_),replcljs.core.str("/"),replcljs.core.str(p1__4710_SHARP_),replcljs.core.str("/"),replcljs.core.str(file)].join('');
if(replcljs.core.truth_(replcljs.io.file_exists_QMARK_.call(null,p)))
{return p;
} else
{return null;
}
});
var found = replcljs.core.some.call(null,finder,replcljs.io._STAR_classpath_suffixes_STAR_);
if(replcljs.core.truth_(found))
{return replcljs.io.path_resolve.call(null,found);
} else
{return null;
}
}
});

// Analyzer namespace snapshot:
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replcljs.io"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4712__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4712 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4712__delegate.call(this, m);
};
G__4712.cljs$lang$maxFixedArity = 0;
G__4712.cljs$lang$applyTo = (function (arglist__4713){
var m = replcljs.core.seq(arglist__4713);;
return G__4712__delegate(m);
});
G__4712.cljs$lang$arity$variadic = G__4712__delegate;
return G__4712;
})()
,replcljs.core.hash_map("\uFDD0'defs",replcljs.core.hash_map((new replcljs.core.Symbol(null,"file-write")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"f")),(new replcljs.core.Symbol(null,"data"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-write")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",31,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"*clojurescript-home*")),replcljs.core.hash_map("\uFDD0'line",4,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/*clojurescript-home*"))),(new replcljs.core.Symbol(null,"file")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]),replcljs.core.vec([(new replcljs.core.Symbol(null,"parent")),(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",173,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"path-dirname")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/path-dirname")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",74,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"is-node?")),replcljs.core.hash_map("\uFDD0'line",12,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/is-node?"))),(new replcljs.core.Symbol(null,"mkdirs")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/mkdirs")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",92,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"/")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core//"))),(new replcljs.core.Symbol(null,"mkdir")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/mkdir")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",86,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"node-path")),replcljs.core.hash_map("\uFDD0'line",14,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/node-path"))),(new replcljs.core.Symbol(null,"file-read")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"f"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-read")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",19,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"file-is-dir?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-is-dir?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",44,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"path-resolve")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/path-resolve")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",68,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"file-exists?")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-exists?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",38,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"node-fs")),replcljs.core.hash_map("\uFDD0'line",13,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/node-fs"))),(new replcljs.core.Symbol(null,"resource")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"file"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"file")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/resource")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Find the file on the \"classpath\" (which consists of every element\n  of *classpath-suffixes* appended to *clojurescript-home*. Only works\n  in Node mode for now.","\uFDD0'line",197,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"file-seq")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"dir"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"dir")),"\uFDD0'tag",(new replcljs.core.Symbol(null,"replcljs.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","A tree seq on replcljs.io.Files","\uFDD0'line",182,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"*classpath-suffixes*")),replcljs.core.hash_map("\uFDD0'line",7,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/*classpath-suffixes*"))),(new replcljs.core.Symbol(null,"file-readdir")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-readdir")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"path-separator")),replcljs.core.hash_map("\uFDD0'line",16,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/path-separator"))),(new replcljs.core.Symbol(null,"path-normalize")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/path-normalize")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",62,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"IFile")),replcljs.core.hash_map("\uFDD0'line",17,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/IFile"))),(new replcljs.core.Symbol(null,"File")),replcljs.core.hash_map("\uFDD0'line",102,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'protocols",replcljs.core.set([(new replcljs.core.Symbol(null,"replcljs.io/Object")),(new replcljs.core.Symbol(null,"replcljs.io/IFile")),(new replcljs.core.Symbol(null,"replcljs.core/IPrintWithWriter"))]),"\uFDD0'num-fields",1,"\uFDD0'type",true,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/File"))),(new replcljs.core.Symbol(null,"path-basename")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/path-basename")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",80,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new replcljs.core.Symbol(null,"file-stat")),replcljs.core.hash_map("\uFDD0'arglists",replcljs.core.list((new replcljs.core.Symbol(null,"quote")),replcljs.core.list(replcljs.core.vec([(new replcljs.core.Symbol(null,"path"))]))),"\uFDD0'method-params",replcljs.core.list(replcljs.core.vec([replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io/file-stat")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",56,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",null,"\uFDD0'uses",null,"\uFDD0'excludes",replcljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.io"))),old);
}));
