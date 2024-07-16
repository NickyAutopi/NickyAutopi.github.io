(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[313],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28365:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],c={id:"cloud-events-intro",title:"Introduction"},l=void 0,s={unversionedId:"cloud/device_management/events/cloud-events-intro",id:"cloud/device_management/events/cloud-events-intro",isDocsHomePage:!1,title:"Introduction",description:"In the Events section, you will find records of specific state changes or",source:"@site/docs/cloud/device_management/events/index.md",sourceDirName:"cloud/device_management/events",slug:"/cloud/device_management/events/cloud-events-intro",permalink:"/cloud/device_management/events/cloud-events-intro",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/device_management/events/index.md",tags:[],version:"current",frontMatter:{id:"cloud-events-intro",title:"Introduction"},sidebar:"sidebar",previous:{title:"Adding a New Widget from Scratch",permalink:"/cloud/device_management/dashboard/adding-a-new-widget-from-scratch"},next:{title:"System",permalink:"/cloud/device_management/events/cloud-events-system"}},u=[],d={toc:u};function m(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the Events section, you will find records of specific state changes or\nconditions encountered by the device. The system running on the device is capable of\nmonitoring and responding to these events, performing additional actions when they\noccur. Each Event includes a timestamp, a tag, and additional data fields."),(0,i.kt)("p",null,"Events play a crucial role in setting up triggers and are also available for\nhistorical reference. Events are categorized into two areas: 'System' and 'Vehicle'.\nIn the Device Management section of the platform, you can access both System and\nVehicle events. However, in the Fleet Management section, you will find only Vehicle\nEvents."),(0,i.kt)("p",null,"For detailed information about Events and their settings, please take a look at the documentation below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud/device_management/events/cloud-events-system"},"System")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cloud/device_management/events/cloud-events-vehicle"},"Vehicle"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AutoPi Cloud Events",src:n(75863).Z})))}m.isMDXComponent=!0},75863:function(e,t,n){"use strict";t.Z=n.p+"assets/images/events_example-ffd7c679ba6704bfab569e9ff6bc99d1.png"}}]);