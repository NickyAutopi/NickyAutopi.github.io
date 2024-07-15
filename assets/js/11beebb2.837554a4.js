(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2834],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return v}});var n=t(67294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),v=c,f=p["".concat(s,".").concat(v)]||p[v]||d[v]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function v(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40833:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=t(22122),c=t(19756),o=(t(67294),t(3905)),a=["components"],i={id:"core-services-event-reactor",title:"Event Reactor"},s=void 0,l={unversionedId:"core/services/core-services-event-reactor",id:"core/services/core-services-event-reactor",isDocsHomePage:!1,title:"Event Reactor",description:"Filters",source:"@site/docs/core/services/event_reactor.md",sourceDirName:"core/services",slug:"/core/services/core-services-event-reactor",permalink:"/core/services/core-services-event-reactor",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/services/event_reactor.md",tags:[],version:"current",frontMatter:{id:"core-services-event-reactor",title:"Event Reactor"},sidebar:"coreSidebar",previous:{title:"Ec2X Manager",permalink:"/core/services/core-services-ec2x-manager"},next:{title:"Gnss Manager",permalink:"/core/services/core-services-gnss-manager"}},u=[{value:"Filters",id:"filters",children:[{value:"<code>alternating_cache_event</code>",id:"alternating_cache_event",children:[]}]},{value:"Handlers",id:"handlers",children:[{value:"<code>cache</code>",id:"cache",children:[]}]},{value:"Returners",id:"returners",children:[{value:"<code>module_result_cache</code>",id:"module_result_cache",children:[]}]}],d={toc:u};function p(e){var r=e.components,t=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"filters"},"Filters"),(0,o.kt)("h3",{id:"alternating_cache_event"},(0,o.kt)("inlineCode",{parentName:"h3"},"alternating_cache_event")),(0,o.kt)("p",null,"Filter that only returns alternating/changed events from cache."),(0,o.kt)("h2",{id:"handlers"},"Handlers"),(0,o.kt)("h3",{id:"cache"},(0,o.kt)("inlineCode",{parentName:"h3"},"cache")),(0,o.kt)("p",null,"Manages cached data."),(0,o.kt)("h2",{id:"returners"},"Returners"),(0,o.kt)("h3",{id:"module_result_cache"},(0,o.kt)("inlineCode",{parentName:"h3"},"module_result_cache")),(0,o.kt)("p",null,"Stores/caches a module result in context."))}p.isMDXComponent=!0}}]);