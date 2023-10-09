(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[588],{4672:function(t,n,e){"use strict";e.d(n,{O:function(){return d}});var r,a,i,c=e(7689),u=e(1087),o=e(168),s=e(1109),p=s.Z.ul(r||(r=(0,o.Z)(["\n\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n   margin-right: auto;\n\n"]))),f=s.Z.li(a||(a=(0,o.Z)(["\n\n color:inherit;\n\n transition: transform 0.2s ease;\n\n box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n\n :hover {\n\n    transform: scale(1.05);\n    font-weight: 500;\n\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n }\n\n"]))),l=s.Z.p(i||(i=(0,o.Z)(["\n\n max-width:200px;\n text-align:center;\n\n\n\n"]))),v=e(184),d=function(t){var n=t.movies,e=(0,c.TH)();return(0,v.jsx)(p,{children:n.map((function(t){var n=t.id,r=t.title,a=t.name,i=t.poster_path;return(0,v.jsx)(f,{children:(0,v.jsxs)(u.rU,{to:"/movies/".concat(n),state:{from:e},children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(i),alt:r||a,width:"200"}),(0,v.jsx)(l,{children:r||a})]})},n)}))})}},5588:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var r,a=e(4165),i=e(3433),c=e(5861),u=e(9439),o=e(2791),s=e(3610),p=e(4672),f=e(168),l=e(1109).Z.h1(r||(r=(0,f.Z)(["\n   \n   text-align:center;\n   font-size:24px;\n   margin-bottom: 15px;\n\n"]))),v=e(184),d=function(t){var n=t.children;return(0,v.jsx)(l,{children:n})},h=e(3881),m=e.n(h),g=function(){var t=(0,o.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],f=(0,o.useState)(1),l=(0,u.Z)(f,2),h=l[0],g=l[1],x=(0,o.useState)(!0),b=(0,u.Z)(x,2),y=b[0],Z=b[1];return(0,o.useEffect)((function(){var t=m()((function(t){y||t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<100&&g((function(t){return t+1}))}),1e3);return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[y]),(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,a.Z)().mark((function t(n){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,s.hY)(n);case 4:e=t.sent,r((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(e))})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:return t.prev=11,Z(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(n){return t.apply(this,arguments)}}();t(h)}),[h]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:"Trending today"}),(0,v.jsx)(p.O,{movies:e})]})}},3610:function(t,n,e){"use strict";e.d(n,{Ku:function(){return h},Pg:function(){return v},Ph:function(){return f},fI:function(){return g},hY:function(){return s}});var r=e(4165),a=e(5861),i=e(1243),c=e(1686),u=e.n(c);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="733e69ecbc0d951ee5920192b66b3d6f";function s(t){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("trending/all/day?api_key=".concat(o,"&page=").concat(n));case 3:return e=t.sent,a=e.data,t.abrupt("return",a.results);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",u().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(n));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",u().Notify.failure("".concat(t.t0.message,", plese contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(n,"?api_key=").concat(o));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",u().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(o));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",u().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(o));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",u().Notify.failure("".concat(t.t0.message,", please contact the administrator")));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}},3881:function(t,n,e){var r="Expected a function",a=NaN,i="[object Symbol]",c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt,f="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,l="object"==typeof self&&self&&self.Object===Object&&self,v=f||l||Function("return this")(),d=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return v.Date.now()};function x(t,n,e){var a,i,c,u,o,s,p=0,f=!1,l=!1,v=!0;if("function"!=typeof t)throw new TypeError(r);function d(n){var e=a,r=i;return a=i=void 0,p=n,u=t.apply(r,e)}function x(t){var e=t-s;return void 0===s||e>=n||e<0||l&&t-p>=c}function Z(){var t=g();if(x(t))return w(t);o=setTimeout(Z,function(t){var e=n-(t-s);return l?m(e,c-(t-p)):e}(t))}function w(t){return o=void 0,v&&a?d(t):(a=i=void 0,u)}function j(){var t=g(),e=x(t);if(a=arguments,i=this,s=t,e){if(void 0===o)return function(t){return p=t,o=setTimeout(Z,n),f?d(t):u}(s);if(l)return o=setTimeout(Z,n),d(s)}return void 0===o&&(o=setTimeout(Z,n)),u}return n=y(n)||0,b(e)&&(f=!!e.leading,c=(l="maxWait"in e)?h(y(e.maxWait)||0,n):c,v="trailing"in e?!!e.trailing:v),j.cancel=function(){void 0!==o&&clearTimeout(o),p=0,a=s=i=o=void 0},j.flush=function(){return void 0===o?u:w(g())},j}function b(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&d.call(t)==i}(t))return a;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var e=o.test(t);return e||s.test(t)?p(t.slice(2),e?2:8):u.test(t)?a:+t}t.exports=function(t,n,e){var a=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return b(e)&&(a="leading"in e?!!e.leading:a,i="trailing"in e?!!e.trailing:i),x(t,n,{leading:a,maxWait:n,trailing:i})}}}]);
//# sourceMappingURL=588.5fe74c8c.chunk.js.map