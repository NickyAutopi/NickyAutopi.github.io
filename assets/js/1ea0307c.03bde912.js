(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[5766],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58878:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c=["components"],i={id:"core-commands-hostapd",title:"Hostapd"},l=void 0,s={unversionedId:"core/commands/core-commands-hostapd",id:"core/commands/core-commands-hostapd",isDocsHomePage:!1,title:"Hostapd",description:"hostapd.clients",source:"@site/docs/core/commands/hostapd.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-hostapd",permalink:"/core/commands/core-commands-hostapd",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/hostapd.md",tags:[],version:"current",frontMatter:{id:"core-commands-hostapd",title:"Hostapd"},sidebar:"coreSidebar",previous:{title:"Hooklib",permalink:"/core/commands/core-commands-hooklib"},next:{title:"Keyfob",permalink:"/core/commands/core-commands-keyfob"}},d=[{value:"<code>hostapd.clients</code>",id:"hostapdclients",children:[]},{value:"<code>hostapd.clients_changed_trigger</code>",id:"hostapdclients_changed_trigger",children:[]},{value:"<code>hostapd.expect_allow_list_handler</code>",id:"hostapdexpect_allow_list_handler",children:[]},{value:"<code>hostapd.help</code>",id:"hostapdhelp",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hostapdclients"},(0,a.kt)("inlineCode",{parentName:"h2"},"hostapd.clients")),(0,a.kt)("p",null,"Returns all connected clients indexed by their MAC address."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"interface"))," (str): Specific network interface. Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"uap0"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hostapdclients_changed_trigger"},(0,a.kt)("inlineCode",{parentName:"h2"},"hostapd.clients_changed_trigger")),(0,a.kt)("p",null,"Triggers ",(0,a.kt)("inlineCode",{parentName:"p"},"system/hotspot/client/<mac>/connected")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"system/hotspot/client/<mac>/disconnected")," events."),(0,a.kt)("p",null,"The trigger expects the result to be given in the format of what hostapd.clients returns,\nwhich is also the main use case for this trigger."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hostapdexpect_allow_list_handler"},(0,a.kt)("inlineCode",{parentName:"h2"},"hostapd.expect_allow_list_handler")),(0,a.kt)("p",null,"This handler triggers ",(0,a.kt)("inlineCode",{parentName:"p"},"system/hotspot/client/<mac>/not_connected")," events for clients that aren`t\nconnected from the hostapd allow list."),(0,a.kt)("p",null,"In order for the handler to work properly the allow list must be stored in the default hostapd.accept\nfile, which will be the case if the allow list is set through the Advanced Settings in the Cloud."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hostapdhelp"},(0,a.kt)("inlineCode",{parentName:"h2"},"hostapd.help")),(0,a.kt)("p",null,"Shows this help information."))}u.isMDXComponent=!0}}]);