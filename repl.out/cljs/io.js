replgoog.provide('cljsrepl.io');
replgoog.require('cljsrepl.core');
cljsrepl.io._STAR_clojurescript_home_STAR_ = "../";
cljsrepl.io._STAR_classpath_suffixes_STAR_ = cljsrepl.core.PersistentVector.fromArray(["closure/library/closure/","src/cljs/","test/cljs/","./"], true);
cljsrepl.io.is_node_QMARK_ = (cljsrepl.core.truth_((function (){try{return require;
}catch (e4673){if(cljsrepl.core.instance_QMARK_.call(null,Error,e4673))
{var e = e4673;
return null;
} else
{if("\uFDD0'else")
{throw e4673;
} else
{return null;
}
}
}})())?true:false);
cljsrepl.io.node_fs = (cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_)?require("fs"):null);
cljsrepl.io.node_path = (cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_)?require("path"):null);
cljsrepl.io.path_separator = (cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_)?cljsrepl.io.node_path.sep:"/");
cljsrepl.io.IFile = {};
cljsrepl.io.file_read = (function file_read(f){
var path = (((function (){var G__4676 = f;
if(G__4676)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4676.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4676.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4676);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4676);
}
})())?f.getPath():f);
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.readFileSync(path).toString();
} else
{var req = (function (){var G__4677 = (new XMLHttpRequest());
G__4677.open("GET",path,false);
return G__4677;
})();
req.send();
if(cljsrepl.core._EQ_.call(null,200,req.status))
{return req.responseText;
} else
{throw (new Error([cljsrepl.core.str("Could not file-read: "),cljsrepl.core.str(path)].join('')));
}
}
});
cljsrepl.io.file_write = (function file_write(f,data){
var path = (((function (){var G__4679 = f;
if(G__4679)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4679.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4679.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4679);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4679);
}
})())?f.getPath():f);
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.writeFileSync(path,data);
} else
{throw (new Error("No file-write capability defined for this JS environment"));
}
});
cljsrepl.io.file_exists_QMARK_ = (function file_exists_QMARK_(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.existsSync(path);
} else
{throw (new Error("No file-exists? capability defined for this JS environment"));
}
});
cljsrepl.io.file_is_dir_QMARK_ = (function file_is_dir_QMARK_(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.statSync(path).isDirectory();
} else
{throw (new Error("No file-is-dir? capability defined for this JS environment"));
}
});
cljsrepl.io.file_readdir = (function file_readdir(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.readdirSync(path);
} else
{throw (new Error("No file-readdir capability defined for this JS environment"));
}
});
cljsrepl.io.file_stat = (function file_stat(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.statSync(path);
} else
{throw (new Error("No file-stat capability defined for this JS environment"));
}
});
cljsrepl.io.path_normalize = (function path_normalize(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_path.normalize(path);
} else
{throw (new Error("No path-normalize capability defined for this JS environment"));
}
});
cljsrepl.io.path_resolve = (function path_resolve(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_path.resolve(path);
} else
{throw (new Error("No path-resolve capability defined for this JS environment"));
}
});
cljsrepl.io.path_dirname = (function path_dirname(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_path.dirname(path);
} else
{throw (new Error("No path-dirname capability defined for this JS environment"));
}
});
cljsrepl.io.path_basename = (function path_basename(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_path.basename(path);
} else
{throw (new Error("No path-basename capability defined for this JS environment"));
}
});
cljsrepl.io.mkdir = (function mkdir(path){
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{return cljsrepl.io.node_fs.mkdirSync(path);
} else
{throw (new Error("No mkdir capability defined for this JS environment"));
}
});
cljsrepl.io.mkdirs = (function mkdirs(path){
var components = path.split("/");
var cur = [cljsrepl.core.str(cljsrepl.core.first.call(null,components)),cljsrepl.core.str("/")].join('');
var left = cljsrepl.core.next.call(null,components);
while(true){
if(cljsrepl.core.not.call(null,cljsrepl.io.file_exists_QMARK_.call(null,cur)))
{cljsrepl.io.mkdir.call(null,cur);
} else
{}
if(left)
{{
var G__4680 = [cljsrepl.core.str(cur),cljsrepl.core.str(cljsrepl.core.first.call(null,left)),cljsrepl.core.str("/")].join('');
var G__4681 = cljsrepl.core.next.call(null,left);
cur = G__4680;
left = G__4681;
continue;
}
} else
{return null;
}
break;
}
});
replgoog.provide('cljsrepl.io.File');

/**
* @constructor
*/
cljsrepl.io.File = (function (pathname){
this.pathname = pathname;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
cljsrepl.io.File.cljs$lang$type = true;
cljsrepl.io.File.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.io/File");
});
cljsrepl.io.File.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljsrepl.core._write.call(null,writer__1988__auto__,"cljsrepl.io/File");
});
cljsrepl.io.File.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (me,writer,opts){
var self__ = this;
return cljsrepl.core._write.call(null,writer,[cljsrepl.core.str("#<File "),cljsrepl.core.str(me.getPath()),cljsrepl.core.str(">")].join(''));
});
cljsrepl.io.File.prototype.getParent = (function (){
var self__ = this;
var me = this;
return cljsrepl.io.path_dirname.call(null,me.getPath());
});
cljsrepl.io.File.prototype.getPath = (function (){
var self__ = this;
var _ = this;
return cljsrepl.io.path_normalize.call(null,self__.pathname);
});
cljsrepl.io.File.prototype.mkdirs = (function (){
var self__ = this;
var _ = this;
return cljsrepl.io.mkdirs.call(null,self__.pathname);
});
cljsrepl.io.File.prototype.lastModified = (function (){
var self__ = this;
var _ = this;
return cljsrepl.io.file_stat.call(null,self__.pathname).mtime.getTime();
});
cljsrepl.io.File.prototype.exists = (function (){
var self__ = this;
var me = this;
return cljsrepl.io.file_exists_QMARK_.call(null,me.getPath());
});
cljsrepl.io.File.prototype.listFiles = (function (){
var self__ = this;
var me = this;
return cljsrepl.io.file_readdir.call(null,me.getPath());
});
cljsrepl.io.File.prototype.isDirectory = (function (){
var self__ = this;
var me = this;
return cljsrepl.io.file_is_dir_QMARK_.call(null,me.getPath());
});
cljsrepl.io.File.prototype.getAbsoluteFile = (function (){
var self__ = this;
var me = this;
return (new cljsrepl.io.File(me.getAbsolutePath()));
});
cljsrepl.io.File.prototype.getParentFile = (function (){
var self__ = this;
var me = this;
return (new cljsrepl.io.File(me.getParent()));
});
cljsrepl.io.File.prototype.getCanonicalFile = (function (){
var self__ = this;
var me = this;
return me.getAbsoluteFile();
});
cljsrepl.io.File.prototype.getAbsolutePath = (function (){
var self__ = this;
var me = this;
return cljsrepl.io.path_resolve.call(null,me.getPath());
});
cljsrepl.io.File.prototype.getName = (function (){
var self__ = this;
var me = this;
return cljsrepl.io.path_basename.call(null,me.getPath());
});
cljsrepl.io.File.prototype.toString = (function (){
var self__ = this;
var me = this;
return me.getPath();
});
cljsrepl.io.File.prototype.getCanonicalPath = (function (){
var self__ = this;
var me = this;
return me.getAbsolutePath();
});
cljsrepl.io.File.prototype.cljs$io$IFile$ = true;
cljsrepl.io.file = (function() {
var file = null;
var file__1 = (function (path){
var path__$1 = (((function (){var G__4686 = path;
if(G__4686)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4686.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4686.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4686);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4686);
}
})())?path.getPath():path);
return (new cljsrepl.io.File(path__$1));
});
var file__2 = (function (parent,path){
var parent__$1 = (((function (){var G__4687 = parent;
if(G__4687)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4687.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4687.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4687);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4687);
}
})())?parent.getPath():parent);
var path__$1 = (((function (){var G__4688 = path;
if(G__4688)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__4688.cljs$io$IFile$;
}
})()))
{return true;
} else
{if((!G__4688.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4688);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.io.IFile,G__4688);
}
})())?path.getPath():path);
return (new cljsrepl.io.File([cljsrepl.core.str(parent__$1),cljsrepl.core.str(cljsrepl.io.path_separator),cljsrepl.core.str(path__$1)].join('')));
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
* A tree seq on cljsrepl.io.Files
*/
cljsrepl.io.file_seq = (function file_seq(dir){
return cljsrepl.core.tree_seq.call(null,(function (f){
return f.isDirectory();
}),(function (d){
return cljsrepl.core.map.call(null,(function (p1__4682_SHARP_){
return (new cljsrepl.io.File([cljsrepl.core.str(d),cljsrepl.core.str(cljsrepl.io.path_separator),cljsrepl.core.str(p1__4682_SHARP_)].join('')));
}),d.listFiles());
}),dir);
});
if(cljsrepl.core.truth_(cljsrepl.io.is_node_QMARK_))
{var prog_4690 = cljsrepl.io.path_dirname.call(null,(process.argv[1]));
cljsrepl.io._STAR_clojurescript_home_STAR_ = cljsrepl.io.path_resolve.call(null,[cljsrepl.core.str(prog_4690),cljsrepl.core.str("/..")].join(''));
} else
{}
/**
* Find the file on the "classpath" (which consists of every element
* of *classpath-suffixes* appended to *clojurescript-home*. Only works
* in Node mode for now.
*/
cljsrepl.io.resource = (function resource(file){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core._EQ_.call(null,"/",cljsrepl.core.first.call(null,file));
if(and__3941__auto__)
{return cljsrepl.io.file_exists_QMARK_.call(null,file);
} else
{return and__3941__auto__;
}
})()))
{return cljsrepl.io.path_resolve.call(null,file);
} else
{var finder = (function (p1__4689_SHARP_){
var p = [cljsrepl.core.str(cljsrepl.io._STAR_clojurescript_home_STAR_),cljsrepl.core.str("/"),cljsrepl.core.str(p1__4689_SHARP_),cljsrepl.core.str("/"),cljsrepl.core.str(file)].join('');
if(cljsrepl.core.truth_(cljsrepl.io.file_exists_QMARK_.call(null,p)))
{return p;
} else
{return null;
}
});
var found = cljsrepl.core.some.call(null,finder,cljsrepl.io._STAR_classpath_suffixes_STAR_);
if(cljsrepl.core.truth_(found))
{return cljsrepl.io.path_resolve.call(null,found);
} else
{return null;
}
}
});

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"cljsrepl.io"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4691__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4691 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4691__delegate.call(this, m);
};
G__4691.cljs$lang$maxFixedArity = 0;
G__4691.cljs$lang$applyTo = (function (arglist__4692){
var m = cljsrepl.core.seq(arglist__4692);;
return G__4691__delegate(m);
});
G__4691.cljs$lang$arity$variadic = G__4691__delegate;
return G__4691;
})()
,cljsrepl.core.hash_map("\uFDD0'defs",cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"file-write")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f")),(new cljsrepl.core.Symbol(null,"data"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"data")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-write")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",31,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"*clojurescript-home*")),cljsrepl.core.hash_map("\uFDD0'line",4,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/*clojurescript-home*"))),(new cljsrepl.core.Symbol(null,"file")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"parent")),(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",173,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"path-dirname")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/path-dirname")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",74,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"is-node?")),cljsrepl.core.hash_map("\uFDD0'line",12,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/is-node?"))),(new cljsrepl.core.Symbol(null,"mkdirs")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/mkdirs")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",92,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"/")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core//"))),(new cljsrepl.core.Symbol(null,"mkdir")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/mkdir")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",86,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"node-path")),cljsrepl.core.hash_map("\uFDD0'line",14,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/node-path"))),(new cljsrepl.core.Symbol(null,"file-read")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"f"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"f")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-read")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",19,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"file-is-dir?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-is-dir?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",44,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"path-resolve")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/path-resolve")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",68,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"file-exists?")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-exists?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",38,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"node-fs")),cljsrepl.core.hash_map("\uFDD0'line",13,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/node-fs"))),(new cljsrepl.core.Symbol(null,"resource")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"file"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"file")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/resource")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Find the file on the \"classpath\" (which consists of every element\n  of *classpath-suffixes* appended to *clojurescript-home*. Only works\n  in Node mode for now.","\uFDD0'line",197,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"file-seq")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"dir"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"dir")),"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"cljsrepl.io.File")),"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-seq")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","A tree seq on cljsrepl.io.Files","\uFDD0'line",182,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"*classpath-suffixes*")),cljsrepl.core.hash_map("\uFDD0'line",7,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'dynamic",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/*classpath-suffixes*"))),(new cljsrepl.core.Symbol(null,"file-readdir")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-readdir")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",50,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"path-separator")),cljsrepl.core.hash_map("\uFDD0'line",16,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/path-separator"))),(new cljsrepl.core.Symbol(null,"path-normalize")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/path-normalize")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",62,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"IFile")),cljsrepl.core.hash_map("\uFDD0'line",17,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'protocol-symbol",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/IFile"))),(new cljsrepl.core.Symbol(null,"File")),cljsrepl.core.hash_map("\uFDD0'line",102,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs","\uFDD0'protocols",cljsrepl.core.set([(new cljsrepl.core.Symbol(null,"cljsrepl.io/Object")),(new cljsrepl.core.Symbol(null,"cljsrepl.io/IFile")),(new cljsrepl.core.Symbol(null,"cljsrepl.core/IPrintWithWriter"))]),"\uFDD0'num-fields",1,"\uFDD0'type",true,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/File"))),(new cljsrepl.core.Symbol(null,"path-basename")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/path-basename")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",80,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs"),(new cljsrepl.core.Symbol(null,"file-stat")),cljsrepl.core.hash_map("\uFDD0'arglists",cljsrepl.core.list((new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.list(cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"path"))]))),"\uFDD0'method-params",cljsrepl.core.list(cljsrepl.core.vec([cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"path")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io/file-stat")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",56,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/michaelwalker/Dropbox/Code/cljs-in-cljs/src/cljs/cljs/io.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",null,"\uFDD0'uses",null,"\uFDD0'excludes",cljsrepl.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.io"))),old);
}));
