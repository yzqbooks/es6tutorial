import {sidebar} from "vuepress-theme-hope";

export default sidebar({
  '/bash-tutorial/': 'structure',

  '/clang-tutorial/': 'structure',
  '/css-tutorial/': 'structure',
  '/es6-tutorial/': ['intro.md', 'let.md', 'destructuring.md', 'string.md', 'string-methods.md', 'regex.md', 'number.md', 'function.md', 'array.md', 'object.md', 'object-methods.md', 'operator.md', 'symbol.md', 'set-map.md', 'proxy.md', 'reflect.md', 'promise.md', 'iterator.md', 'generator.md', 'generator-async.md', 'async.md', 'class.md', 'class-extends.md', 'module.md', 'module-loader.md', 'style.md', 'spec.md', 'async-iterator.md', 'arraybuffer.md', 'proposals.md', 'decorator.md', 'reference.md'],
  '/javascript-tutorial/': 'structure',
  '/typescript-tutorial/': ['intro.md', 'basic.md', 'any.md', 'types.md', 'array.md', 'tuple.md', 'symbol.md', 'function.md', 'object.md', 'interface.md', 'class.md', 'generics.md', 'enum.md', 'assert.md', 'module.md', 'namespace.md', 'decorator.md', 'decorator-legacy.md', 'declare.md', 'd.ts.md', 'operator.md', 'mapping.md', 'utility.md', 'comment.md', 'tsconfig.json.md', 'tsc.md'],
  '/git-tutorial/': 'structure',
  '/html-tutorial/': 'structure',
  '/node-tutorial/': 'structure',
  '/ssh-tutorial/': 'structure',
  '/webapi-tutorial/': 'structure',
  // fallback
  // "/": ["" /* / */, "contact" /* /contact.html */, "about" /* /about.html */],
})
