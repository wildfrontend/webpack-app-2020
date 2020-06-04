!function(e){function t(t){for(var o,i,c=t[0],u=t[1],s=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(l&&l(t);d.length;)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={1:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([41,0]),r()}({11:function(e,t,r){"use strict";r.r(t),r.d(t,"__DO_NOT_USE__ActionTypes",(function(){return a})),r.d(t,"applyMiddleware",(function(){return b})),r.d(t,"bindActionCreators",(function(){return f})),r.d(t,"combineReducers",(function(){return s})),r.d(t,"compose",(function(){return y})),r.d(t,"createStore",(function(){return c}));var o=r(18),n=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function i(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var u=e,s=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function v(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var r=f.indexOf(e);f.splice(r,1),l=null}}}function b(e){if(!i(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=u(s,e)}finally{d=!1}for(var t=l=f,r=0;r<t.length;r++){(0,t[r])()}return e}function h(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,b({type:a.REPLACE})}function m(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(v())}return r(),{unsubscribe:t(r)}}})[o.a]=function(){return this},e}return b({type:a.INIT}),(n={dispatch:b,subscribe:y,getState:v,replaceReducer:h})[o.a]=m,n}function u(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),r={},o=0;o<t.length;o++){var n=t[o];0,"function"==typeof e[n]&&(r[n]=e[n])}var i,c=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:a.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var o=!1,n={},a=0;a<c.length;a++){var s=c[a],l=r[s],f=e[s],d=l(f,t);if(void 0===d){var p=u(s,t);throw new Error(p)}n[s]=d,o=o||d!==f}return(o=o||c.length!==Object.keys(e).length)?n:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return l(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var o in e){var n=e[o];"function"==typeof n&&(r[o]=l(n,t))}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),o=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},n={getState:r.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map((function(e){return e(n)}));return v({},r,{dispatch:o=y.apply(void 0,a)(r.dispatch)})}}}(function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/redux/es/redux.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/redux/es/redux.js")}})()},18:function(e,t,r){"use strict";(function(e,o){var n,a=r(24);n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:o;var i=Object(a.a)(n);t.a=i,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/symbol-observable/es/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/symbol-observable/es/index.js")}}()}).call(this,r(21),r(32)(e))},23:function(e,t,r){"use strict";var o=r(11).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?o:o.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/redux-devtools-extension/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/redux-devtools-extension/index.js")}}()},24:function(e,t,r){"use strict";function o(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return o})),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/symbol-observable/es/ponyfill.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/symbol-observable/es/ponyfill.js")}}()},26:function(e,t,r){t.hot=function(e){return e},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/react-hot-loader/root.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/react-hot-loader/root.js")}}()},32:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/webpack/buildin/harmony-module.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/webpack/buildin/harmony-module.js")}}()},41:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(17),i=r.n(a),c=r(3),u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,l=function(e){function t(){return e.call(this,"redux-react-hook requires your Redux store to be passed through context via the <StoreContext.Provider>")||this}return function(e,t){function r(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(Error);function f(e,t){return e===t}function d(e){return e+1}var p,v,y,b,h=(v=(void 0===p?{}:p).defaultEqualityCheck,y=void 0===v?f:v,{StoreContext:b=Object(o.createContext)(null),useDispatch:function(){var e=Object(o.useContext)(b);if(!e)throw new l;return e.dispatch},useMappedState:function(e,t){void 0===t&&(t=y);var r=Object(o.useContext)(b);if(!r)throw new l;var n=Object(o.useMemo)((function(){return t=e,function(e){return o!==e&&(o=e,r=t(e)),r};var t,r,o}),[e]),a=r.getState(),i=n(a),c=Object(o.useState)(0)[1],u=Object(o.useRef)(i),f=Object(o.useRef)(n);return s((function(){u.current=i,f.current=n})),s((function(){var e=!1,o=function(){if(!e){var o=f.current(r.getState());t(o,u.current)||c(d)}};o();var n=r.subscribe(o);return function(){e=!0,n()}}),[r]),i}}.StoreContext);!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/node_modules/redux-react-hook/dist/index.es.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/redux-react-hook/dist/index.es.js")}}();var m=r(11),j=r(23),O={name:"Tom"};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/store/reducers/player.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/store/reducers/player.js")}}();var w=Object(m.combineReducers)({player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return e}});function g(e){var t=[m.applyMiddleware.apply(void 0,[])],r=j.composeWithDevTools.apply(void 0,t);return Object(m.createStore)(w,e,r)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/store/reducers/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/store/reducers/index.js")}}(),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/store/configureStore.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/store/configureStore.js")}}();var E=r(26),x=r(1),_=function(){return n.a.createElement("div",null,"Home")};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/pages/Home.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/pages/Home.js")}}();var P=function(){return n.a.createElement("div",null,"About")};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/pages/About.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/pages/About.js")}}();var T=[{id:1,name:"apple"},{id:2,name:"banana"},{id:3,name:"cat"},{id:4,name:"dog"}],L=function(){var e=Object(x.n)().url;return n.a.createElement("div",null,"Topics",n.a.createElement("ul",null,T.map((function(t,r){return n.a.createElement("li",null,n.a.createElement(c.Link,{to:"".concat(e,"/").concat(t.id)},t.name))})),n.a.createElement("li",null,n.a.createElement(c.Link,{to:"".concat(e,"/24/asdg/asdg/sdg/g")},"errror test"))))};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/pages/Topics/Topics.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/pages/Topics/Topics.js")}}();var U=function(){var e=Object(x.l)();return n.a.createElement("div",null,n.a.createElement("h1",null,"404"),n.a.createElement("h3",null,"No match for ",n.a.createElement("code",null,e.pathname)))};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/pages/ErrorPage/404.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/pages/ErrorPage/404.js")}}();var H=[{id:1,name:"apple"},{id:2,name:"banana"},{id:3,name:"cat"},{id:4,name:"dog"}],S=function(){var e=Object(x.n)().url,t=Object(x.m)().id;return H.some((function(e){return e.id===t}))?n.a.createElement("div",null,"Topic:",t,n.a.createElement("pre",null,"url:",e)):n.a.createElement(U,null)};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/pages/Topics/Topic/Topic.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/pages/Topics/Topic/Topic.js")}}();var G=function(){var e=Object(x.n)().url;return n.a.createElement(x.g,null,n.a.createElement(x.d,{exact:!0,path:e},n.a.createElement(L,null)),n.a.createElement(x.d,{path:"".concat(e,"/:id")},n.a.createElement(S,null)))};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/routes/topics.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/routes/topics.js")}}();var k=function(){return n.a.createElement(x.g,null,n.a.createElement(x.d,{exact:!0,path:"/"},n.a.createElement(_,null)),n.a.createElement(x.d,{path:"/about"},n.a.createElement(P,null)),n.a.createElement(x.d,{path:"/topics"},n.a.createElement(G,null)),n.a.createElement(x.d,{path:"*"},n.a.createElement(U,null)))};!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/routes/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/routes/index.js")}}();var N=Object(E.hot)((function(){return n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c.Link,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(c.Link,{to:"/about"},"about")),n.a.createElement("li",null,n.a.createElement(c.Link,{to:"/topics"},"Topics"))),n.a.createElement(k,null))}));!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/App.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/App.js")}}();var I=function(){return n.a.createElement(h.Provider,{value:g},n.a.createElement(c.BrowserRouter,null,n.a.createElement(N,null)))};i.a.render(n.a.createElement(I,null),document.getElementById("app")),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:exports;if(r)if("function"!=typeof r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var n=void 0;try{n=r[o]}catch(e){continue}e.register(n,o,"/Users/user/Project/Tutorial/react-pattern/src/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/src/index.js")}}()}});