(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8097],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||c;return n?t.createElement(f,a(a({ref:r},p),{},{components:n})):t.createElement(f,a({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55502:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var t=n(22122),o=n(19756),c=(n(67294),n(3905)),a=["components"],s={id:"core-services-process-manager",title:"Process Manager"},i=void 0,u={unversionedId:"core/services/core-services-process-manager",id:"core/services/core-services-process-manager",isDocsHomePage:!1,title:"Process Manager",description:"Handlers",source:"@site/docs/core/services/process_manager.md",sourceDirName:"core/services",slug:"/core/services/core-services-process-manager",permalink:"/core/services/core-services-process-manager",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/services/process_manager.md",tags:[],version:"current",frontMatter:{id:"core-services-process-manager",title:"Process Manager"},sidebar:"coreSidebar",previous:{title:"Obd Manager",permalink:"/core/services/core-services-obd-manager"},next:{title:"Rfid Manager",permalink:"/core/services/core-services-rfid-manager"}},p=[{value:"Handlers",id:"handlers",children:[{value:"<code>manage_process</code>",id:"manage_process",children:[]}]}],l={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"handlers"},"Handlers"),(0,c.kt)("h3",{id:"manage_process"},(0,c.kt)("inlineCode",{parentName:"h3"},"manage_process")),(0,c.kt)("p",null,"Starts a new process if it`s not already started."))}d.isMDXComponent=!0}}]);