(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9622],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(m,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30364:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l=["components"],i={id:"core-commands-log",title:"Log"},m=void 0,p={unversionedId:"core/commands/core-commands-log",id:"core/commands/core-commands-log",isDocsHomePage:!1,title:"Log",description:"log.help",source:"@site/docs/core/commands/log.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-log",permalink:"/core/commands/core-commands-log",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/log.md",tags:[],version:"current",frontMatter:{id:"core-commands-log",title:"Log"},sidebar:"coreSidebar",previous:{title:"Keyfob",permalink:"/core/commands/core-commands-keyfob"},next:{title:"Minionutil",permalink:"/core/commands/core-commands-minionutil"}},s=[{value:"<code>log.help</code>",id:"loghelp",children:[]},{value:"<code>log.kernel</code>",id:"logkernel",children:[]},{value:"<code>log.kernel_iter</code>",id:"logkernel_iter",children:[]},{value:"<code>log.query</code>",id:"logquery",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"loghelp"},(0,a.kt)("inlineCode",{parentName:"h2"},"log.help")),(0,a.kt)("p",null,"Shows this help information."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"logkernel"},(0,a.kt)("inlineCode",{parentName:"h2"},"log.kernel")),(0,a.kt)("p",null,"Print and/or clear the kernel ring buffer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"level"))," (str): Restict output the the given level and higher. Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"err"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"facilities"))," (str): Restrict output to the given list (comma-separated) of facilities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"offset"))," (str): Offset regex to begin from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"clear"))," (bool): Clear after reading.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"logkernel_iter"},(0,a.kt)("inlineCode",{parentName:"h2"},"log.kernel_iter")),(0,a.kt)("p",null,"Helper function to retrieve new kernel log entries (based on cached offset value)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"level"))," (str): Restict output the the given level and higher. Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"err"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"facilities"))," (str): Restrict output to the given list (comma-separated) of facilities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"offset_key"))," (str): Key to get value from result and use as offset. Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"timestamp"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"reset"))," (bool): Reset cached offset value and start over.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"logquery"},(0,a.kt)("inlineCode",{parentName:"h2"},"log.query")),(0,a.kt)("p",null,"Query a log file or any text file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"file"))," (str): Path of log file.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"begin"))," (str): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"^"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"end"))," (str): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"$"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"match"))," (str): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},".*"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"count"))," (int): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"reverse"))," (bool): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"before"))," (int): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"after"))," (int): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"first"))," (int): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"last"))," (int): Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),".")))}u.isMDXComponent=!0}}]);