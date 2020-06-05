/*! For license information please see hmr.57e0cf06.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=38)}({0:function(e,t,r){"use strict";e.exports=r(12),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/Users/user/Project/Tutorial/react-pattern/node_modules/react/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/react/index.js")}}()},10:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,i=c(e),f=1;f<arguments.length;f++){for(var l in r=Object(arguments[f]))o.call(r,l)&&(i[l]=r[l]);if(n){a=n(r);for(var s=0;s<a.length;s++)u.call(r,a[s])&&(i[a[s]]=r[a[s]])}}return i},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/Users/user/Project/Tutorial/react-pattern/node_modules/object-assign/index.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/object-assign/index.js")}}()},12:function(e,t,r){"use strict";var n=r(10),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,_="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function j(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var O=w.prototype=new g;O.constructor=w,n(O,j.prototype),O.isPureReactComponent=!0;var x={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,$=[];function R(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function U(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function T(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var i=!1;if(null===t)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case c:i=!0}}if(i)return n(o,t,""===r?"."+A(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=r+A(a=t[f],f);i+=e(a,l,n,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=_&&t[_]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),f=0;!(a=t.next()).done;)i+=e(a=a.value,l=r+A(a,f++),n,o);else if("object"===a)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(E,"$&/")+"/"),T(e,L,t=R(t,u,n,o)),U(t)}var G={current:null};function q(){var e=G.current;if(null===e)throw Error(v(321));return e}var I={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,H,t=R(null,null,t,r)),U(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(v(143));return e}},t.Component=j,t.Fragment=a,t.Profiler=f,t.PureComponent=w,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)P.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:u,type:e.type,key:c,ref:a,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1",function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/Users/user/Project/Tutorial/react-pattern/node_modules/react/cjs/react.production.min.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/react/cjs/react.production.min.js")}}()},38:function(e,t,r){"use strict";e.exports=r(39),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/Users/user/Project/Tutorial/react-pattern/node_modules/react-hot-loader/patch.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/react-hot-loader/patch.js")}}()},39:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(0))&&"object"==typeof n&&"default"in n?n.default:n;function u(e){return u.warnAboutHMRDisabled&&(u.warnAboutHMRDisabled=!0),o.Children.only(e.children)}u.warnAboutHMRDisabled=!1;var c=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return o.createElement(u,null,o.createElement(e,t))}}:function(e){return e}};c.shouldWrapWithAppContainer=!1;t.AppContainer=u,t.hot=c,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/Users/user/Project/Tutorial/react-pattern/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js")}}else e.register(r,"module.exports","/Users/user/Project/Tutorial/react-pattern/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js")}}()}});