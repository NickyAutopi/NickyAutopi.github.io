(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[1834],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||s[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54344:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"core-commands-avrdude",title:"Avrdude"},u=void 0,d={unversionedId:"core/commands/core-commands-avrdude",id:"core/commands/core-commands-avrdude",isDocsHomePage:!1,title:"Avrdude",description:"avrdude.flash",source:"@site/docs/core/commands/avrdude.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-avrdude",permalink:"/core/commands/core-commands-avrdude",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/avrdude.md",tags:[],version:"current",frontMatter:{id:"core-commands-avrdude",title:"Avrdude"},sidebar:"sidebar",previous:{title:"Audio",permalink:"/core/commands/core-commands-audio"},next:{title:"Ble",permalink:"/core/commands/core-commands-ble"}},c=[{value:"<code>avrdude.flash</code>",id:"avrdudeflash",children:[]},{value:"<code>avrdude.fuse</code>",id:"avrdudefuse",children:[]},{value:"<code>avrdude.help</code>",id:"avrdudehelp",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"avrdudeflash"},(0,o.kt)("inlineCode",{parentName:"h2"},"avrdude.flash")),(0,o.kt)("p",null,"Flash hex file to MCU."),(0,o.kt)("p",null,"WARNING: Only use this command with caution as it can misconfigure the MCU and leave it in an unusable state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"hex_file"))," (str): Path of hex file.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"part_id"))," (str): Part ID. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"t88"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"prog_id"))," (str): ID of programmer. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"autopi"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"raise_on_error"))," (bool): Raise an error upon failure. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"no_write"))," (bool): No actual write to MCU. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"avrdudefuse"},(0,o.kt)("inlineCode",{parentName:"h2"},"avrdude.fuse")),(0,o.kt)("p",null,"Get or set fuse value of MCU."),(0,o.kt)("p",null,"WARNING: Only use this command with caution as it can misconfigure the MCU and leave it in an unusable state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"name"))," (str): Name of the fuse.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"part_id"))," (str): Part ID. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"t88"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"prog_id"))," (str): ID of programmer. Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"autopi"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"value"))," (str): Fuse byte value to write.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"avrdudehelp"},(0,o.kt)("inlineCode",{parentName:"h2"},"avrdude.help")),(0,o.kt)("p",null,"Shows this help information."))}m.isMDXComponent=!0}}]);