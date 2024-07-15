(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9362],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9359:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],c={id:"gen-2-intro",title:"Introduction"},u=void 0,s={unversionedId:"hardware/legacy_devices/autopi_dongle/gen-2-intro",id:"hardware/legacy_devices/autopi_dongle/gen-2-intro",isDocsHomePage:!1,title:"Introduction",description:"In this section, we will explore specifics about the generation 2 devices. On this page, you will",source:"@site/docs/hardware/legacy_devices/autopi_dongle/index.md",sourceDirName:"hardware/legacy_devices/autopi_dongle",slug:"/hardware/legacy_devices/autopi_dongle/gen-2-intro",permalink:"/hardware/legacy_devices/autopi_dongle/gen-2-intro",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/hardware/legacy_devices/autopi_dongle/index.md",tags:[],version:"current",frontMatter:{id:"gen-2-intro",title:"Introduction"},sidebar:"hardwareSidebar",previous:{title:"OBD Connector Pinout",permalink:"/hardware/autopi_tmu_socketcan/obd-connector-pinout"},next:{title:"Connection Overview",permalink:"/hardware/legacy_devices/autopi_dongle/connection-overview"}},p=[{value:"Pinout",id:"pinout",children:[]},{value:"Jumper",id:"jumper",children:[]}],l={toc:p};function d(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will explore specifics about the generation 2 devices. On this page, you will\nfind general information like the GPIO pinout and where to put the jumper if you need it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Second generation AutoPi device",src:n(71669).Z})),(0,o.kt)("h2",{id:"pinout"},"Pinout"),(0,o.kt)("p",null,"This image is an overview of the GPIO pinout of the 2",(0,o.kt)("sup",null,"nd")," generation AutoPi."),(0,o.kt)("p",null,'Pins marked with "in use" cannot be used for anything else. This will interrupt the functionality\nof the AutoPi. This I2C bus is used by the AutoPi, but can be shared with other devices. '),(0,o.kt)("p",null,"All other pins are free and their functionality follows that of the Raspberry Pi."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Second generation AutoPi GPIO Pinout",src:n(34851).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you'd like to discuss this topic with us or other fellow community members, you can do so on\nour community page dedicated for this guide:\n",(0,o.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/autopi-gpio-pinout/271"},"AutoPi GPIO Pinout")))),(0,o.kt)("h2",{id:"jumper"},"Jumper"),(0,o.kt)("p",null,"This is a picture of the location of the 5V FORCE pins. You can put a jumper on these pins to\nprevent the AutoPi from going to hibernation. More info ",(0,o.kt)("a",{parentName:"p",href:"/getting_started/developer_guides/jumpers"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Second generation AutoPi Jumper location",src:n(91734).Z})))}d.isMDXComponent=!0},71669:function(e,t,n){"use strict";t.Z=n.p+"assets/images/device-fb2d723c5e42f5f585901768844f7414.png"},34851:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gpio_pinout-5d19248bab6c0d1da5b58358c260ab0f.jpg"},91734:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jumper-11039ddd11106d79b4dcbc95f3142409.jpg"}}]);