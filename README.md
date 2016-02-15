ClojureScript Koans Online
==========================
http://clojurescriptkoans.com

The ClojureScript Koans are a fun and easy way to get started with ClojureScript. No experience with Clojure or ClojureScript is assumed or required, and since they're run in-browser they don't require a functioning Clojure development environment.

They are adapted from the [Clojure Koans](http://clojurekoans.com), with some minor changes to accommodate the differences between Clojure and ClojureScript.

Unlike most other browser-based ClojureScript evaluation environments, the ClojureScript Koans don't require a connection to a server-side REPL. Rather, they are run in a purely in-browser REPL powered by @kanaka's [cljs-in-cljs](https://github.com/kanaka/clojurescript) project. This means that they are nothing more than static HTML, CSS, and ClojureScript files.

LOOKING FOR MAINTAINER
======================

So, here's the deal. The ClojureScript Koans are very broken right now, in many web browsers (see [this issue](https://github.com/lazerwalker/clojurescript-koans/issues/13)). While the fix might be simple, I strongly suspect it is not.

When this was built, ClojureScript wasn't self-hosting. That is, compiling ClojureScript code could only happen on the JVM, meaning something like the Koans wouldn't be able to compile your ClojureScript code in-browser. To make the ClojureScript Koans happen, I relied on a thrown-together "cljs-in-cljs" project the wonderful @kanaka threw together over a weekend. The app itself has two side-by-side ClojureScript and Google Closure stacks running: a "modern" (at least at the time) stack to run the actual app logic, and @kanaka's self-hosted stack purely for compilation.

Some aspect of this jerry-rigged system has broken down. A short-term fix might involve figuring out what's broken and patching it, but now that ClojureScript is self-hosted, the "correct" solution is to rip out all of the duct tape and migrate the app to a single modern CLJS stack.

Most frustratingly, I have no spare time right now to dedicate to fixing this. Not even the time to investigate the quick hack-y solution, let alone the real one. It breaks my heart, but things are what they are. 

So here's the deal: if you're looking for a fun project to dive into some ClojureScript, I'd love for you to check this out. I'll happily turn the project over to a maintainer who wants to give this the love it deserves.

To be quite honest, I'm skeptical someone will pop out of the woodwork. That being said, I've been getting many emails the past few weeks about the site being down; I feel like losing this resource would be a Bad Thing™ for the ClojureScript world, and I want to do what I can with my limited resources to try to see if there's a way to save this project. 

So please, get in touch. I'm happy to help in any way I can if you're interested in helping. If you're new to open source, or new to ClojureScript, this could be a great way to get your feet wet and make a meaningful contribution.

Thanks!

-@lazerwalker



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
