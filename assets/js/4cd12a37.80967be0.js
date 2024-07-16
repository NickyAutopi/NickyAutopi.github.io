(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9804],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,y=s["".concat(l,".").concat(d)]||s[d]||m[d]||c;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},32670:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=r(22122),o=r(19756),c=(r(67294),r(3905)),a=["components"],i={id:"core-commands-crypto",title:"Crypto"},l=void 0,p={unversionedId:"core/commands/core-commands-crypto",id:"core/commands/core-commands-crypto",isDocsHomePage:!1,title:"Crypto",description:"crypto.generate_key",source:"@site/docs/core/commands/crypto.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-crypto",permalink:"/core/commands/core-commands-crypto",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/crypto.md",tags:[],version:"current",frontMatter:{id:"core-commands-crypto",title:"Crypto"},sidebar:"sidebar",previous:{title:"Cloud",permalink:"/core/commands/core-commands-cloud"},next:{title:"Cryptoauth",permalink:"/core/commands/core-commands-cryptoauth"}},u=[{value:"<code>crypto.generate_key</code>",id:"cryptogenerate_key",children:[]},{value:"<code>crypto.help</code>",id:"cryptohelp",children:[]},{value:"<code>crypto.query</code>",id:"cryptoquery",children:[]},{value:"<code>crypto.sign_string</code>",id:"cryptosign_string",children:[]}],m={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"cryptogenerate_key"},(0,c.kt)("inlineCode",{parentName:"h2"},"crypto.generate_key")),(0,c.kt)("p",null,"Generates a new key in the Secure Element"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"strong"},"keyid"))," (str/int): key`s id")),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"cryptohelp"},(0,c.kt)("inlineCode",{parentName:"h2"},"crypto.help")),(0,c.kt)("p",null,"Shows this help information."),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"cryptoquery"},(0,c.kt)("inlineCode",{parentName:"h2"},"crypto.query")),(0,c.kt)("p",null,"Queries a given SPM command."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"strong"},"cmd"))," (str): The SPM command to query.")),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"cryptosign_string"},(0,c.kt)("inlineCode",{parentName:"h2"},"crypto.sign_string")),(0,c.kt)("p",null,"Signs a given string using the Secure Element"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"strong"},"data"))," (str): String to be signed"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"strong"},"keyid"))," (str/int): key`s id")))}s.isMDXComponent=!0}}]);