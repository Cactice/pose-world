_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&u||!p.has(f)?(p.add(f),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},E4MH:function(e,t,n){e.exports={reactStrictMode:!0,basePath:"/brain-whatever",webpack:{},parser:"@typescript-eslint/parser",extends:["plugin:@typescript-eslint/recommended","plugin:react/recommended"],plugins:["@typescript-eslint","react"],rules:{"react/react-in-jsx-scope":"off"},globals:{React:"writable"}}},TaPz:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YFqc"),u=n.n(o),i=n("apO0"),c=a.a.createElement;t.default=function(){return c(i.a,{title:"About | Next.js + TypeScript Example"},c("h1",null,"About"),c("p",null,"This is the about page"),c("p",null,c(u.a,{href:"/"},c("a",null,"Go home"))))}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),u=(n("qXWd"),n("48fX")),i=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},apO0:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("g4pe"),u=n.n(o),i=(n("q4sD"),n("E4MH")),c=a.a.createElement;t.a=function(e){var t=e.children,n=e.title,r=void 0===n?"This is the default title":n;return c("div",null,c(u.a,null,c("title",null,r),c("meta",{charSet:"utf-8"}),c("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),c("link",{rel:"shortcut icon",href:"".concat(i.basePath,"/favicon.ico")})),t)}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),u=n("elyg"),i=n("nOHt"),c=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,u.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,u.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=o.Children.only(v),M=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),_=r(w,2),I=_[0],k=_[1],C=o.default.useCallback((function(e){I(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[M,I]);(0,o.useEffect)((function(){var e=k&&t&&(0,u.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,k,g,t,n]);var x={ref:C,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:i}))}(e,n,d,p,h,m,y,g)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var E="undefined"!==typeof g?g:n&&n.locale,A=n&&n.isLocaleDomain&&(0,u.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);x.href=A||(0,u.addBasePath)((0,u.addLocale)(p,E,n&&n.defaultLocale))}return o.default.cloneElement(b,x)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),u=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},q4sD:function(e,t,n){},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,u=r.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!u&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n("q1tI"),o=n("0G5g"),u="undefined"!==typeof IntersectionObserver;var i=new Map}},[["hIud",0,2,1,3]]]);