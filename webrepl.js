replgoog.addDependency("base.js", ['replgoog'], []);
replgoog.addDependency("../cljs/core.js", ['cljs.core'], ['replgoog.array', 'replgoog.object', 'replgoog.string.StringBuffer', 'replgoog.string']);
replgoog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'replgoog.string.StringBuffer', 'replgoog.string']);
replgoog.addDependency("../cljs/analyzer.js", ['cljs.analyzer'], ['cljs.core', 'clojure.string']);
replgoog.addDependency("../cljs/reader.js", ['cljs.reader', 'cljs.reader.StringReader', 'cljs.reader.PushbackReader', 'cljs.reader.IndexingPushbackReader'], ['cljs.core', 'cljs.analyzer', 'clojure.string', 'replgoog.string']);
replgoog.addDependency("../cljs/io.js", ['cljs.io', 'cljs.io.File'], ['cljs.core']);
replgoog.addDependency("../cljs/compiler.js", ['cljs.compiler'], ['cljs.core', 'cljs.reader', 'cljs.analyzer', 'clojure.string', 'cljs.io']);
replgoog.addDependency("../cljs/repl.js", ['cljs.repl', 'cljs.user'], ['cljs.core', 'cljs.reader', 'cljs.compiler', 'cljs.analyzer']);
replgoog.addDependency("../82Hnt.js", ['repl'], ['cljs.core', 'cljs.repl']);
