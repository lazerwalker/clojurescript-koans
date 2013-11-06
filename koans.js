goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.array', 'goog.array', 'goog.object', 'goog.object', 'goog.string.StringBuffer', 'goog.string.StringBuffer', 'goog.string', 'goog.string']);
goog.addDependency("../dommy/utils.js", ['dommy.utils'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string.StringBuffer', 'goog.string.StringBuffer', 'goog.string', 'goog.string']);
goog.addDependency("../dommy/attrs.js", ['dommy.attrs'], ['cljs.core', 'clojure.string', 'clojure.string']);
goog.addDependency("../dommy/template.js", ['dommy.template'], ['cljs.core', 'dommy.attrs', 'dommy.attrs', 'clojure.string', 'clojure.string']);
goog.addDependency("../dommy/core.js", ['dommy.core'], ['cljs.core', 'dommy.template', 'dommy.template', 'dommy.attrs', 'dommy.attrs', 'dommy.utils', 'dommy.utils', 'clojure.string', 'clojure.string']);
goog.addDependency("../koans/core.js", ['koans.core'], ['cljs.core', 'dommy.utils', 'dommy.core']);