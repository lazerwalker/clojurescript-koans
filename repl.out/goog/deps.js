replgoog.addDependency("debug/error.js", ['replgoog.debug.Error'], []);
replgoog.addDependency("string/string.js", ['replgoog.string', 'replgoog.string.Unicode'], []);
replgoog.addDependency("asserts/asserts.js", ['replgoog.asserts', 'replgoog.asserts.AssertionError'], ['replgoog.debug.Error', 'replgoog.string']);
replgoog.addDependency("array/array.js", ['replgoog.array', 'replgoog.array.ArrayLike'], ['replgoog.asserts']);
replgoog.addDependency("object/object.js", ['replgoog.object'], []);
replgoog.addDependency("string/stringbuffer.js", ['replgoog.string.StringBuffer'], []);