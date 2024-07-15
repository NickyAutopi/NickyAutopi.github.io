(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[4601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(v,c(c({ref:t},u),{},{components:n})):o.createElement(v,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38254:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),c=["components"],a={id:"connection-overview",title:"Connection Overview"},l=void 0,s={unversionedId:"hardware/legacy_devices/autopi_dongle/connection-overview",id:"hardware/legacy_devices/autopi_dongle/connection-overview",isDocsHomePage:!1,title:"Connection Overview",description:"This is a diagram shows the connection possibilities of the second generation AutoPi.",source:"@site/docs/hardware/legacy_devices/autopi_dongle/connection_overview.md",sourceDirName:"hardware/legacy_devices/autopi_dongle",slug:"/hardware/legacy_devices/autopi_dongle/connection-overview",permalink:"/hardware/legacy_devices/autopi_dongle/connection-overview",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/hardware/legacy_devices/autopi_dongle/connection_overview.md",tags:[],version:"current",frontMatter:{id:"connection-overview",title:"Connection Overview"},sidebar:"hardwareSidebar",previous:{title:"Introduction",permalink:"/hardware/legacy_devices/autopi_dongle/gen-2-intro"},next:{title:"OBD Connector Pinout",permalink:"/hardware/legacy_devices/autopi_dongle/obd-connector-pinout"}},u=[{value:"Discussion",id:"discussion",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a diagram shows the connection possibilities of the second generation AutoPi."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Upstream USB connector to RPi"),(0,i.kt)("li",{parentName:"ol"},"GPIO Jumper to always force 5V on the RPi (disables sleep timers from hardware)"),(0,i.kt)("li",{parentName:"ol"},"OBD-II connector to vehicle"),(0,i.kt)("li",{parentName:"ol"},"JST connector for external speaker"),(0,i.kt)("li",{parentName:"ol"},"GPIO pins for RPi and external connections"),(0,i.kt)("li",{parentName:"ol"},"SIM card slot"),(0,i.kt)("li",{parentName:"ol"},"USB connectors for external use")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connection overview",src:n(90398).Z})),(0,i.kt)("h2",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on\nour community page dedicated for this guide:\n",(0,i.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/autopi-gen-2-connection-overview/691"},"AutoPi GEN 2 connection overview")))}d.isMDXComponent=!0},90398:function(e,t,n){"use strict";t.Z=n.p+"assets/images/connection_overview-1db366220725915e0e1cc692e34222de.jpeg"}}]);