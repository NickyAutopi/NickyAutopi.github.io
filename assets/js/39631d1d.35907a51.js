(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[4853],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(m,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31489:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=["components"],i={id:"core-commands-spm",title:"Spm"},m=void 0,p={unversionedId:"core/commands/core-commands-spm",id:"core/commands/core-commands-spm",isDocsHomePage:!1,title:"Spm",description:"spm.battery",source:"@site/docs/core/commands/spm.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-spm",permalink:"/core/commands/core-commands-spm",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/spm.md",tags:[],version:"current",frontMatter:{id:"core-commands-spm",title:"Spm"},sidebar:"sidebar",previous:{title:"Socketcan",permalink:"/core/commands/core-commands-socketcan"},next:{title:"Stn",permalink:"/core/commands/core-commands-stn"}},s=[{value:"<code>spm.battery</code>",id:"spmbattery",children:[]},{value:"<code>spm.flash_firmware</code>",id:"spmflash_firmware",children:[]},{value:"<code>spm.fuse</code>",id:"spmfuse",children:[]},{value:"<code>spm.help</code>",id:"spmhelp",children:[]},{value:"<code>spm.led_pwm</code>",id:"spmled_pwm",children:[]},{value:"<code>spm.manage</code>",id:"spmmanage",children:[]},{value:"<code>spm.query</code>",id:"spmquery",children:[]},{value:"<code>spm.reset</code>",id:"spmreset",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"spmbattery"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.battery")),(0,l.kt)("p",null,"Gets current battery voltage"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmflash_firmware"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.flash_firmware")),(0,l.kt)("p",null,"Flashes new SPM firmware to the MCU."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmfuse"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.fuse")),(0,l.kt)("p",null,"Manages the fuse of the MCU."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmhelp"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.help")),(0,l.kt)("p",null,"Shows this help information."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmled_pwm"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.led_pwm")),(0,l.kt)("p",null,"Change PWM frequency and/or duty cycle for LED."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"frequency"))," (float): Change to frequency in Hz."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"duty_cycle"))," (float): Change to duty cycle in percent.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmmanage"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.manage")),(0,l.kt)("p",null,"Runtime management of the underlying service instance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SUPPORTED COMMANDS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hook list|call <name> [argument]... [<key>=<value>]...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"worker list|show|start|pause|resume|kill <name>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reactor list|show <name>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run <key>=<value>..."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXAMPLES")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage hook list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage hook call query_handler status")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage worker list *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage worker show *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage worker start *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage worker pause *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage worker resume *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage worker kill *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage reactor list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spm.manage reactor show *")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'spm.manage run handler="query" args="[\\"status\\"]"'))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmquery"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.query")),(0,l.kt)("p",null,"Queries a given SPM command."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"cmd"))," (str): The SPM command to query.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spmreset"},(0,l.kt)("inlineCode",{parentName:"h2"},"spm.reset")),(0,l.kt)("p",null,"Reset/restart the MCU."))}u.isMDXComponent=!0}}]);