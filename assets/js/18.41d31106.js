(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{230:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"atob-方法解码中文字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atob-方法解码中文字符","aria-hidden":"true"}},[t._v("#")]),t._v(" atob 方法解码中文字符")]),t._v(" "),s("blockquote",[s("p",[t._v("2018-10-11")])]),t._v(" "),s("p",[t._v("由于一些网络通讯协议的限制,你必须使用 window.btoa() 方法对原数据进行编码后，才能进行发送。接收方使用相当于 window.atob() 的方法对接受到的 base64 数据进行解码,得到原数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Zm9v"')]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("atob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zm9v'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "foo"')]),t._v("\n")])])]),s("p",[t._v("atob 这个方法名称乍一看，很奇怪，不知道这个单词什么意思。我们可以理解为 A to B，也就是从 A 到 B。")]),t._v(" "),s("p",[t._v("atob 表示 Base64 字符 to 普通字符，也就是 Base64 解码。")]),t._v(" "),s("p",[t._v("当你在 Chrome console 中执行 "),s("code",[t._v("window.btoa('中文')")]),t._v("会发下会报错。")]),t._v(" "),s("p",[s("code",[t._v("Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.")])]),t._v(" "),s("p",[t._v("这时候我们可以借助 "),s("code",[t._v("encodeURIComponent")]),t._v(" 和 "),s("code",[t._v("decodeURIComponent")]),t._v(" 转义非中文字符。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'中文'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ('JUU0JUI4JUFEJUU2JTk2JTg3')")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("atob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JUU0JUI4JUFEJUU2JTk2JTg3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "中文"')]),t._v("\n")])])])])}],!1,null,null,null);n.default=e.exports}}]);