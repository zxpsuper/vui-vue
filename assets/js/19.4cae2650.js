(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{176:function(t,n,e){"use strict";e.r(n);var o={methods:{throttleFunction:function(){this.$Message.error("你点击了节流按钮")},normalFunction:function(){this.$Message.error("你点击了普通按钮")},decounceFunction:function(){this.$Message.error("你点击了防抖按钮")}}},r=e(0),c=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Throttle",{attrs:{time:1e3,isDebounce:""}},[e("span",{on:{click:t.decounceFunction}},[e("Button",{attrs:{color:"purple",light:""}},[t._v("防抖按钮")])],1)]),t._v(" "),e("Throttle",{attrs:{time:2e3,events:"click"}},[e("span",{on:{click:t.throttleFunction}},[e("Button",{attrs:{color:"orange"}},[t._v("节流按钮")])],1)]),t._v(" "),e("Button",{attrs:{color:"green",light:""},nativeOn:{click:function(n){return t.normalFunction(n)}}},[t._v("普通按钮")])],1)},[],!1,null,null,null);n.default=c.exports}}]);