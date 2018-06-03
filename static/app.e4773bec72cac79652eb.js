(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{24:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return l});var r=n(52),o=!!t.env.DEBUG_API,c=Object(r.a)({version:"/v0",config:{databaseURL:"https://hacker-news.firebaseio.com"}});function u(t){o&&console.log("fetching ".concat(t,"..."));var e=c.cachedItems;return e&&e.has(t)?(o&&console.log("cache hit for ".concat(t,".")),Promise.resolve(e.get(t))):new Promise(function(n,r){c.child(t).once("value",function(r){var c=r.val();c&&(c.__lastUpdated=Date.now()),e&&e.set(t,c),o&&console.log("fetched ".concat(t,".")),n(c)},r)})}function i(t){return c.cachedIds&&c.cachedIds[t]?Promise.resolve(c.cachedIds[t]):u("".concat(t,"stories"))}function a(t){return Promise.all(t.map(function(t){return function(t){return u("item/".concat(t))}(t)}))}function f(t){return u("user/".concat(t))}function l(t,e){var n=!0,r=c.child("".concat(t,"stories")),o=function(t){n?n=!1:e(t.val())};return r.on("value",o),function(){r.off("value",o)}}c.onServer&&function t(){a((c.cachedIds.top||[]).slice(0,30));setTimeout(t,9e5)}()}).call(this,n(28))},27:function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"loading",function(){return h}),n.d(r,"activeType",function(){return m}),n.d(r,"itemsPerPage",function(){return y}),n.d(r,"items",function(){return v}),n.d(r,"users",function(){return g}),n.d(r,"lists",function(){return w});var o=n(13),c=n(14),u=n(9),i=n(53),a="SET_LOADING",f="SET_ACTIVE_TYPE",l="SET_LIST",s="SET_ITEMS",p="SET_USER";function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){b(t,e,n[e])})}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return e.loading;default:return t}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return e.activeType;default:return t}},y=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:20},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return d({},t,e.items.reduce(function(t,e){return e&&(t[e.id]=e),t},{}));default:return t}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return d({},t,b({},e.id,e.user||!1));default:return t}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{top:[],new:[],show:[],ask:[],job:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return d({},t,b({},e.listType,e.ids));default:return t}},O=n(24),j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=t.activeType,r=t.itemsPerPage,o=t.lists;if(!n)return[];var c=(e-1)*r,u=e*r;return o[n].slice(c,u)},_=function(t,e){return j(t,e).map(function(e){return t.items[e]}).filter(function(t){return t})},E=function(t){return{type:a,loading:t}},P=function(t){return{type:f,activeType:t}},T=function(t,e){return{type:l,listType:t,ids:e}},S=function(t){return{type:s,items:t}},k=function(t,e){return{type:p,id:t,user:e}},C=function(t,e){return function(n){return n(P(t)),Object(O.a)(t).then(function(e){return n(T(t,e))}).then(function(){return n(N(e))})}},I=function(t){return function(e,n){var r=Date.now(),o=n();return(t=t.filter(function(t){var e=o.items[t];return!e||r-e.__lastUpdated>18e4})).length?Object(O.b)(t).then(function(t){return e(S(t))}):Promise.resolve()}},N=function(t){return function(e,n){return e(I(j(n(),t)))}},A=function(t){return function(e,n){return n().users[t]?Promise.resolve():Object(O.c)(t).then(function(n){return e(k(t,n))})}};function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"g",function(){return D}),n.d(e,"i",function(){return E}),n.d(e,!1,function(){return P}),n.d(e,"h",function(){return T}),n.d(e,!1,function(){return S}),n.d(e,!1,function(){return k}),n.d(e,"e",function(){return C}),n.d(e,"d",function(){return I}),n.d(e,"c",function(){return N}),n.d(e,"f",function(){return A}),n.d(e,!1,function(){return j}),n.d(e,"a",function(){return _});var D=Object(o.a)(),R=u.d;e.b=function(t){return Object(u.e)(Object(u.c)(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){x(t,e,n[e])})}return t}({},r,{router:c.c})),t,R(Object(u.a)(Object(c.b)(D),i.a)))}},37:function(t,e,n){"use strict";var r=n(12),o=n.n(r),c=n(1),u=n.n(c),i=n(8);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return"boolean"!=typeof e&&(n=e,e=!0),function(r){var c,a,d,b=function(e){function o(e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r=l(this,s(o).call(this,e,n)),t.__inject__&&t.__inject__(r.props.staticContext),r.setTitle(),r}var c,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,u.a.PureComponent),c=o,(i=[{key:"setTitle",value:function(){var t="function"==typeof n?n.call(this,this):n;t&&Promise.resolve(t).then(function(t){t&&(document.title="React Hackernews | ".concat(t))})}},{key:"render",value:function(){return u.a.createElement(r,this.props)}}])&&f(c.prototype,i),a&&f(c,a),o}();return c=b,a="displayName",d="Ssr".concat(r.displayName||r.name||"Component"),a in c?Object.defineProperty(c,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[a]=d,o()(e?Object(i.d)(b):b,r)}};function b(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,"").split(".").slice(-3);return"www"===e[0]&&e.shift(),e.join(".")}function h(t){var e=Date.now()/1e3-Number(t);return e<3600?m(~~(e/60)," minute"):e<86400?m(~~(e/3600)," hour"):m(~~(e/86400)," day")}function m(t,e){return 1===t?t+e:t+e+"s"}n.d(e,"a",function(){return b}),n.d(e,"c",function(){return h}),n.d(e,"b",function(){return y}),n.d(e,"d",function(){return d});var y={}},52:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(35),o=n.n(r);n(69);function c(t){var e=t.config,n=t.version;return o.a.initializeApp(e),o.a.database().ref(n)}},58:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=n.n(o),u=n(26),i=n(57),a=n.n(i),f=n(38),l=n(14),s=n(27),p=n(98),d=n(8),b=n(46),h=n(15),m=n(31),y=n(37);n(60);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}function j(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(t){return Object(u.asyncComponent)({resolve:t})},S=function(t){return T(function(){return n.e(2).then(n.bind(null,97)).then(function(e){return e.default(t)})})},k=[{path:"/",exact:!0,component:function(){return c.a.createElement(d.a,{to:"/top"})}},{path:"/top/:page(\\d+)?",component:S("top")},{path:"/new/:page(\\d+)?",component:S("new")},{path:"/show/:page(\\d+)?",component:S("show")},{path:"/ask/:page(\\d+)?",component:S("ask")},{path:"/job/:page(\\d+)?",component:S("job")},{path:"/item/:id(\\d+)",component:T(function(){return n.e(1).then(n.bind(null,96))})},{path:"/user/:id",component:T(function(){return n.e(0).then(n.bind(null,99))})},{path:"*",component:function(t){function e(t,n){var r;return g(this,e),(r=j(this,_(e).call(this,t,n))).props.staticContext&&(r.props.staticContext.code=404),r}return E(e,c.a.PureComponent),O(e,[{key:"render",value:function(){return"Custom 404 Page, will you implement it?"}}]),e}()}],C={entering:{opacity:0},entered:{opacity:1}},I=Object(h.c)(r=function(t){function e(){return g(this,e),j(this,_(e).apply(this,arguments))}return E(e,c.a.PureComponent),O(e,[{key:"componentDidMount",value:function(){y.b.appMounted=!0}},{key:"render",value:function(){var t=this.props.location;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"inner"},c.a.createElement(h.b,{to:"/",exact:!0},c.a.createElement("img",{className:"logo",src:"/public/logo-48.png",alt:"logo"})),["top","new","show","ask","job"].map(function(t){return c.a.createElement(h.b,{key:t,to:"/".concat(t)},Object(p.a)(t))}),c.a.createElement("a",{className:"github",href:"https://github.com/JounQin/react-hackernews",target:"_blank",rel:"noopener noreferrer"},"Built with React.js"))),c.a.createElement(m.TransitionGroup,{component:o.Fragment},c.a.createElement(m.Transition,{timeout:200,key:t.pathname.split("/")[1],mountOnEnter:!0,unmountOnExit:!0},function(e){return c.a.createElement("div",{className:"view",style:C[e]},Object(b.a)(k,null,{location:t}))})))}}]),e}())||r,N=Object(s.b)(window.__INITIAL_STATE__),A=window.ASYNC_COMPONENTS_STATE;delete window.__INITIAL_STATE__,delete window.ASYNC_COMPONENTS_STATE;var x;x=c.a.createElement(u.AsyncComponentProvider,{rehydrateState:A},c.a.createElement(f.a,{store:N},c.a.createElement(l.a,{history:s.g},c.a.createElement(I,null)))),a()(x).then(function(){return Object(o.hydrate)(x,document.getElementById("app"))}),("https:"===location.protocol||["127.0.0.1","localhost"].includes(location.hostname))&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},60:function(t,e,n){},77:function(t,e,n){t.exports=n(58)}},[[77,3,4]]]);