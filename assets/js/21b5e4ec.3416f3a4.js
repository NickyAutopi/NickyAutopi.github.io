(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[3482],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),l=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:e},c),{},{components:n})):a.createElement(h,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},44996:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return o}});var a=n(52263),r=n(13919);function i(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+c:c}(i,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},87998:function(t,e,n){"use strict";var a=n(67294);e.Z=function(t){var e=t.children;return a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},e[0]),a.createElement("div",{className:"col"},e[1]))}},37926:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(44996),s=n(87998),u=["components"],l={id:"installing-heatsink",title:"Install Heatsink"},c=void 0,d={unversionedId:"hardware/autopi_tmu_cm4/installing-heatsink",id:"hardware/autopi_tmu_cm4/installing-heatsink",isDocsHomePage:!1,title:"Install Heatsink",description:"Please read the whole guide in order to have a good understanding of how all the components fit together.",source:"@site/docs/hardware/autopi_tmu_cm4/installing_heatsink.mdx",sourceDirName:"hardware/autopi_tmu_cm4",slug:"/hardware/autopi_tmu_cm4/installing-heatsink",permalink:"/hardware/autopi_tmu_cm4/installing-heatsink",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/hardware/autopi_tmu_cm4/installing_heatsink.mdx",tags:[],version:"current",frontMatter:{id:"installing-heatsink",title:"Install Heatsink"},sidebar:"hardwareSidebar",previous:{title:"Installing External Antennas",permalink:"/hardware/autopi_tmu_cm4/installing_external_antennas"},next:{title:"LED and Button States",permalink:"/hardware/autopi_tmu_cm4/led-and-button"}},p=[{value:"Step-by-Step Guide",id:"step-by-step-guide",children:[]},{value:"Disscussion",id:"disscussion",children:[]}],m={toc:p};function h(t){var e=t.components,n=(0,r.Z)(t,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Before proceeding with the upgrade")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please read the ",(0,i.kt)("strong",{parentName:"p"},"whole guide")," in order to have a good understanding of how all the components fit together."),(0,i.kt)("p",{parentName:"div"},"You need to be careful not to tear or damange some of the cables when handling the casing of the device."))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Prerequesites")," for this guide:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"An AutoPi TMU CM4 device"),(0,i.kt)("li",{parentName:"ul"},"Heatsink package provided by AutoPi")))),(0,i.kt)("h3",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,i.kt)(s.Z,{mdxType:"SideBySide"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 1: "),"Open up the bag with the heatsink and the accessories."),(0,i.kt)("img",{alt:"Step 1",src:(0,o.Z)("/img/hardware/autopi_tmu_cm4/installing_heatsink/heatsink1.jpg")})),(0,i.kt)("br",null),(0,i.kt)(s.Z,{mdxType:"SideBySide"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 2: "),"Find the 4 metal screws and the 4 spacers."),(0,i.kt)("img",{alt:"Step 2",src:(0,o.Z)("/img/hardware/autopi_tmu_cm4/installing_heatsink/heatsink2.jpg")})),(0,i.kt)("br",null),(0,i.kt)(s.Z,{mdxType:"SideBySide"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 3: "),"Apply the thermal tape to the Ethernet IC and the CPU as show on the image."),(0,i.kt)("img",{alt:"Step 3",src:(0,o.Z)("/img/hardware/autopi_tmu_cm4/installing_heatsink/heatsink3.jpg")})),(0,i.kt)("br",null),(0,i.kt)(s.Z,{mdxType:"SideBySide"},(0,i.kt)("p",null,(0,i.kt)("strong",null,"Step 4: "),"Fix the heatsink on the thermal tape and fasten it using the metal screw. Remember to use the spacer between the screw and the heatsink."),(0,i.kt)("img",{alt:"Step 4",src:(0,o.Z)("/img/hardware/autopi_tmu_cm4/installing_heatsink/heatsink4.jpg")})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"disscussion"},"Disscussion"),(0,i.kt)("p",null,"You have now successfully installed a heatsink onto your AutoPi TMU CM4 device."),(0,i.kt)("p",null,"In case you have any questions about installing additional components onto the AutoPi device, don't hesitate to shoot us an email at ",(0,i.kt)("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}h.isMDXComponent=!0}}]);