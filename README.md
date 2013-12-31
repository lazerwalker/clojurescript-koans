ClojureScript Koans Online
==========================
http://clojurescriptkoans.com

The ClojureScript Koans are a fun and easy way to get started with ClojureScript. No experience with Clojure or ClojureScript is assumed or required, and since they're run in-browser they don't require a functioning Clojure development environment.

They are adapted from the [Clojure Koans](http://clojurekoans.com), with some minor changes to accomodate the differences between Clojure and ClojureScript.

Unlike most other browser-based ClojureScript evaluation environments, the ClojureScript Koans don't require a connection to a server-side REPL. Rather, they are run in a purely in-browser REPL powered by @kanaka's [cljs-in-cljs](https://github.com/kanaka/clojurescript) project. This means that they are nothing more than static HTML, CSS, and ClojureScript files.


Development
-----------
You will need both [Leiningen](http://leiningen.org) and a functioning copy of the cljs-in-cljs version of the `cljsc` compiler in your PATH. For instructions on installing cljs-in-cljs, see https://github.com/lazerwalker/clojurescript-in-clojurescript.

If you wish to edit the project's stylesheets, you will need to have [Sass](http://sass-lang.com) and [Compass](http://compass-style.org) installed. The project contains a Compass `config.rb` file.

### Editing the Koans
The koans themselves live in the `src/koans/meditations` folder. For a given set, the `koans` variable should contain a sequence of description strings and their matching S-expressions. Within the S-expressions, any instances of `:__` will be replaced by an input box. There are instances where ClojureScript's `pr-str` function will alter the displayed form of an expression (e.g. replacing quote characters with a `(quote)` expression); if this happens, you can quote the entire S-expression to have it displayed exactly as written.

If you need to define new functions for a section, add them to the `fns` vector. Like the koans, a function may either be a quoted S-expression or a string, and any instances of the symbol `:__` will be replaced with an input field. If you wish to specify proper indentation, whitespace is maintained in the string form. In either case, syntax highlighting will automatically be applied.

If you want to create a new category of koans, you will also need to add your category to the structure in `meditations.cljs`.


### Helper Scripts
The `script` folder contains a number of helpful scripts. All are designed to be run from the root project directory.

`build-repl`: Recompiles just the REPL core using cljs-in-cljs.

`build`: Recompiles the REPL core, and does a clean recompile of the application code.

`deploy`: If you're hosting the site on GitHub Pages, this will deploy the latest version of your code. It merges your current branch into the `gh-pages` branch, generates a static copy with compiled JS/CSS, and then pushes the `gh-pages` branch to your default remote. See the script's source for caveats.


Contributing
------------
Pull requests are encouraged!


License
-------
The use and distribution terms for this software are covered by the Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php) which can be found in the file epl-v10.html at the root of this distribution. By using this software in any fashion, you are agreeing to be bound by the terms of this license.
