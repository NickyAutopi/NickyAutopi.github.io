(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8986],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=d(n),m=r,p=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return n?i.createElement(p,a(a({ref:t},s),{},{components:n})):i.createElement(p,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var i=n(52263),r=n(13919);function o(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,d=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+s:s}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},86079:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return f}});var i=n(22122),r=n(19756),o=(n(67294),n(3905)),a=(n(44996),["components"]),c={id:"cloud-config-mini-intro",title:"Introduction"},u=void 0,d={unversionedId:"cloud/device_management/advanced_settings/mini/cloud-config-mini-intro",id:"cloud/device_management/advanced_settings/mini/cloud-config-mini-intro",isDocsHomePage:!1,title:"Introduction",description:"The configuration settings controls the behaviour of the AutoPi Mini device.",source:"@site/docs/cloud/device_management/advanced_settings/mini/index.md",sourceDirName:"cloud/device_management/advanced_settings/mini",slug:"/cloud/device_management/advanced_settings/mini/cloud-config-mini-intro",permalink:"/cloud/device_management/advanced_settings/mini/cloud-config-mini-intro",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/device_management/advanced_settings/mini/index.md",tags:[],version:"current",frontMatter:{id:"cloud-config-mini-intro",title:"Introduction"},sidebar:"sidebar",previous:{title:"Wifi",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-wifi"},next:{title:"Software Updates",permalink:"/cloud/device_management/software-updates"}},s=[],l={toc:s};function f(e){var t=e.components,c=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The configuration settings controls the behaviour of the AutoPi Mini device."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Like any AutoPi cloud functionality, configuration settings can be changed programmatically through the AutoPi REST API. For more information see our ",(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io/"},"API docs page"),"."))),(0,o.kt)("p",null,"You can control a lot of different things on the device. Each of the settings is explained in details on the following pages. (WIP)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AutoPi Cloud Configuration",src:n(10729).Z})))}f.isMDXComponent=!0},10729:function(e,t,n){"use strict";t.Z=n.p+"assets/images/configuration_mini-a85ba2e34d03a8126f9e7ced9ed547d1.png"}}]);