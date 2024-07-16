(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[1307],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||p[s]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19899:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"cloud-config-rfid",title:"Rfid"},c=void 0,u={unversionedId:"cloud/device_management/advanced_settings/TMU/cloud-config-rfid",id:"cloud/device_management/advanced_settings/TMU/cloud-config-rfid",isDocsHomePage:!1,title:"Rfid",description:"| Name | Description | Type | Default | Unit |",source:"@site/docs/cloud/device_management/advanced_settings/TMU/rfid.md",sourceDirName:"cloud/device_management/advanced_settings/TMU",slug:"/cloud/device_management/advanced_settings/TMU/cloud-config-rfid",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-rfid",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/device_management/advanced_settings/TMU/rfid.md",tags:[],version:"current",frontMatter:{id:"cloud-config-rfid",title:"Rfid"},sidebar:"sidebar",previous:{title:"Power",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-power"},next:{title:"System",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-system"}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ENABLED"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable the RFID reader functionality for your device."),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AUTHORIZED TOKENS"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of RFID authentication tokens. Follow timestamp,duration,rfid structure. Example: 2021-11-23T09:50:00,7200,0011252203"),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);