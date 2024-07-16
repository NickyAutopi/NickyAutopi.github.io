(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[4792],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38949:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={id:"cloud-config-docker",title:"Docker"},l=void 0,u={unversionedId:"cloud/device_management/advanced_settings/TMU/cloud-config-docker",id:"cloud/device_management/advanced_settings/TMU/cloud-config-docker",isDocsHomePage:!1,title:"Docker",description:"| Name | Description | Type | Default | Unit |",source:"@site/docs/cloud/device_management/advanced_settings/TMU/docker.md",sourceDirName:"cloud/device_management/advanced_settings/TMU",slug:"/cloud/device_management/advanced_settings/TMU/cloud-config-docker",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-docker",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/device_management/advanced_settings/TMU/docker.md",tags:[],version:"current",frontMatter:{id:"cloud-config-docker",title:"Docker"},sidebar:"sidebar",previous:{title:"Cloud Storage",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-cloud-storage"},next:{title:"Key Fob",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-key-fob"}},d=[],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENABLED"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable support for docker containers. Enabling this will install balena-engine on the device."),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CONTAINER WHITELIST"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of container names that will be whitelisted, so that the docker release process will not remove them during the deploy process."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0}}]);