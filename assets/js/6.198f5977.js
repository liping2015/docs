(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(t,s,a){"use strict";a.r(s);var n=a(0),c=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"方法基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法基础")]),t._v(" "),a("p",[a("strong",[t._v("一、处理正则的方法有：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("test")])]),t._v(" "),a("li",[a("code",[t._v("match")])]),t._v(" "),a("li",[a("code",[t._v("exec")])]),t._v(" "),a("li",[a("code",[t._v("compile")])]),t._v(" "),a("li",[a("code",[t._v("search")])]),t._v(" "),a("li",[a("code",[t._v("replace")])]),t._v(" "),a("li",[a("code",[t._v("split")])])]),t._v(" "),a("p",[a("strong",[t._v("1、"),a("code",[t._v("test")]),t._v(" 返回 "),a("code",[t._v("true/false")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token regex"}},[t._v("/a/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("strong",[t._v("2、"),a("code",[t._v("match")]),t._v(" 返回匹配结果")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'abca'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/a/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// ["a", "a"]')]),t._v("\n")])])]),a("p",[a("strong",[t._v("3、"),a("code",[t._v("exec")]),t._v(" 相当于"),a("code",[t._v("match")]),t._v("的非全局")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token regex"}},[t._v("/a/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exec")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'abca'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// ["a", index: 0, input: "abca"]')]),t._v("\n")])])]),a("p",[a("strong",[t._v("4、"),a("code",[t._v("compile")]),t._v(" 重新编译规则")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pattern "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/a/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token string"}},[t._v("'abca'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{attrs:{class:"token comment"}},[t._v('// ["a", index: 0, input: "abca"]')]),t._v("\npattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("compile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/a/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token string"}},[t._v("'abca'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// ["a", "a"]')]),t._v("\n")])])]),a("p",[a("strong",[t._v("5、"),a("code",[t._v("search")]),t._v(" 返回第一次匹配到的索引")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'abca'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/(a)/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("replace")]),t._v(" 匹配替换")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'ab'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/a/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'c'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// cb")]),t._v("\n\n"),a("span",{attrs:{class:"token string"}},[t._v("'ab'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/(a)(b)/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'$2$1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ba")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("split")]),t._v(" 匹配字符串分隔成数组")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'a,v,c'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/,/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// ["a", "v", "c"]')]),t._v("\n")])])]),a("p",[a("strong",[t._v("附加：获取匹配字符串，多个规则用括号括起来，"),a("code",[t._v("RegExp")]),t._v("是挂在"),a("code",[t._v("window")]),t._v("上的一个方法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token regex"}},[t._v("/(a)(b)/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRegExp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// a")]),t._v("\nRegExp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// b")]),t._v("\n")])])])])}],!1,null,null,null);c.options.__file="base.md";s.default=c.exports}}]);