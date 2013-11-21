replgoog.addDependency("base.js", ['replgoog'], []);
replgoog.addDependency("../cljs/core.js", ['cljs.core'], ['replgoog.string', 'replgoog.array', 'replgoog.object', 'replgoog.string.StringBuffer']);
replgoog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'replgoog.string', 'replgoog.string.StringBuffer']);
replgoog.addDependency("../cljs/analyzer.js", ['cljs.analyzer'], ['cljs.core', 'clojure.string']);
replgoog.addDependency("../cljs/io.js", ['cljs.io'], ['cljs.core']);
replgoog.addDependency("../cljs/reader.js", ['cljs.reader'], ['cljs.analyzer', 'cljs.core', 'replgoog.string', 'clojure.string']);
replgoog.addDependency("../cljs/compiler.js", ['cljs.compiler'], ['cljs.io', 'cljs.analyzer', 'cljs.core', 'clojure.string', 'cljs.reader']);
replgoog.addDependency("../cljs/repl.js", ['cljs.repl'], ['cljs.analyzer', 'cljs.compiler', 'cljs.core', 'cljs.reader']);
replgoog.addDependency("../IDcUG.js", ['repl'], ['cljs.core', 'cljs.repl']);
