(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,e,r){},162:function(t,e,r){"use strict";var n=r(148);r.n(n).a},166:function(t,e,r){"use strict";r.r(e);var n={props:{post:Object},computed:{title(){return this.post.frontmatter.title},description(){return this.post.frontmatter.description},updatedAt(){return new Date(this.post.frontmatter.date).toDateString()}}},s=(r(162),r(6)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"last-updated"},[t._v(t._s(t.updatedAt))]),t._v(" "),r("h3",[r("router-link",{attrs:{to:t.post.path}},[t._v(t._s(t.title)+" ")])],1),t._v(" "),r("p",[t._v("\n    "+t._s(t.description)+"\n    "),r("br")]),t._v(" "),r("hr")])}),[],!1,null,"51f36bc8",null);e.default=i.exports}}]);