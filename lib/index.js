"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.languages = void 0;
require("@any-style/types");
var tree_sitter_php_1 = __importDefault(require("tree-sitter-php"));
var tree_sitter_html_1 = __importDefault(require("tree-sitter-html"));
var tree_sitter_javascript_1 = __importDefault(require("tree-sitter-javascript"));
var tree_sitter_css_1 = __importDefault(require("tree-sitter-css"));
var languages = new Map();
exports.languages = languages;
languages.set('php', tree_sitter_php_1["default"]);
languages.set('css', tree_sitter_css_1["default"]);
languages.set('js', tree_sitter_javascript_1["default"]);
languages.set('html', tree_sitter_html_1["default"]);
