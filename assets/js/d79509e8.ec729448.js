(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[3137],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},m),{},{components:t})):r.createElement(g,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63491:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],l={id:"core-commands-gnss",title:"Gnss"},s=void 0,c={unversionedId:"core/commands/core-commands-gnss",id:"core/commands/core-commands-gnss",isDocsHomePage:!1,title:"Gnss",description:"gnss.connection",source:"@site/docs/core/commands/gnss.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-gnss",permalink:"/core/commands/core-commands-gnss",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/gnss.md",tags:[],version:"current",frontMatter:{id:"core-commands-gnss",title:"Gnss"},sidebar:"sidebar",previous:{title:"Fileutil",permalink:"/core/commands/core-commands-fileutil"},next:{title:"Hooklib",permalink:"/core/commands/core-commands-hooklib"}},m=[{value:"<code>gnss.connection</code>",id:"gnssconnection",children:[]},{value:"<code>gnss.help</code>",id:"gnsshelp",children:[]},{value:"<code>gnss.load_geofences</code>",id:"gnssload_geofences",children:[]},{value:"<code>gnss.manage</code>",id:"gnssmanage",children:[]}],u={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gnssconnection"},(0,a.kt)("inlineCode",{parentName:"h2"},"gnss.connection")),(0,a.kt)("p",null,"Query the connection class."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"gnsshelp"},(0,a.kt)("inlineCode",{parentName:"h2"},"gnss.help")),(0,a.kt)("p",null,"Shows this help information."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"gnssload_geofences"},(0,a.kt)("inlineCode",{parentName:"h2"},"gnss.load_geofences")),(0,a.kt)("p",null,"Loads geofences.\n",(0,a.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," path to the geofences file")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"gnssmanage"},(0,a.kt)("inlineCode",{parentName:"h2"},"gnss.manage")),(0,a.kt)("p",null,"Runtime management of the underlying service instance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SUPPORTED COMMANDS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hook list|call <name> [argument]... [<key>=<value>]...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"worker list|show|start|pause|resume|kill <name>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reactor list|show <name>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run <key>=<value>..."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"EXAMPLES")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage hook list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage hook call connection_handler gnss_location")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage worker list *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage worker show *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage worker start *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage worker pause *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage worker resume *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage worker kill *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage reactor list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gnss.manage reactor show *")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'gnss.manage run handler="connection" args="[\\"gnss_location\\"]" converter="gnss_location_to_position" returner="cloud"'))))}p.isMDXComponent=!0}}]);