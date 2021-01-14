import "@any-style/types"
import php from "tree-sitter-php"
import html from "tree-sitter-html"
import js from "tree-sitter-javascript"
import css from "tree-sitter-css"

const languages: Map<LANG, any> = new Map()

languages.set('php', php)
languages.set('css', css)
languages.set('js', js)
languages.set('html', html)

export {languages}
