(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[6086],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},g),{},{components:n})):r.createElement(m,a({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57555:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return g},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"create-mini-loggers",title:"Create Loggers"},l=void 0,c={unversionedId:"getting_started/mini/create-mini-loggers",id:"getting_started/mini/create-mini-loggers",isDocsHomePage:!1,title:"Create Loggers",description:"Compared to other AutoPi devices, the Mini only supports a predefined list of PID and CAN loggers (It also support listening on some system Autopi Mini system changes, like the current sleep condition).",source:"@site/docs/getting_started/mini/create_mini_logger.md",sourceDirName:"getting_started/mini",slug:"/getting_started/mini/create-mini-loggers",permalink:"/getting_started/mini/create-mini-loggers",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/mini/create_mini_logger.md",tags:[],version:"current",frontMatter:{id:"create-mini-loggers",title:"Create Loggers"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/getting_started/mini/mini-guides-intro"},next:{title:"Getting Started",permalink:"/getting_started/heavy_duty_vehicles/j1939-getting-started-guide"}},g=[{value:"Creating a Mini Logger",id:"creating-a-mini-logger",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:g};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Compared to other AutoPi devices, the Mini only supports a predefined list of PID and CAN loggers (It also support listening on some system Autopi Mini system changes, like the current sleep condition)."),(0,i.kt)("p",null,"In this guide, we will take a look on how we can create loggers for the AutoPi Mini."),(0,i.kt)("h2",{id:"creating-a-mini-logger"},"Creating a Mini Logger"),(0,i.kt)("p",null,"Let's create a logger for your AutoPi Mini.\nOpen up the AutoPi Mini device view and head over to the loggers page.\nHere, you will see a 'Create' and a 'Restore default' button on the left-hand side.\nClicking on the 'Create' button will open a new window, that looks like the following screenshot:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create PID Logger Window",src:n(14519).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The 'Restore default', as the name suggests, deletes the current loggers and applies default loggers."))),(0,i.kt)("p",null,"Let's look through the fields available:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameter"),": This is the parameter you would like to use.\nSelect one of them from the dropdown menu.\nNote that, some parameter share the same name but can be distinguished by the group they belong to."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Periodic monitoring"),": Shoulde this logger be available in all messages from the AutoPi Mini or only when the logger generates an event (configurable by the 'event on')"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Event on"),": Should a records be made on a specific event.\nSelect an event that should trigger a record in the dropdown list.\nWhen selection an event, new options appear, to configure how that event behaves.\nAs an example, when selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"Ranges Both")," contains a range start and range end field, which allows to configure the range that ",(0,i.kt)("inlineCode",{parentName:"p"},"Ranges Both")," should generate records based on, this can also be seen in the following image:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create PID Logger Window",src:n(18098).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advanced"),": In the advanced section you can modify the sampling rate, which controls how long a value should remain the same before changing."),(0,i.kt)("p",null,"Once you save the Mini Logger, you will see it appear in the Loggers page.\nOnce the settings have ben synchronized to your device, your device will start sending the newly created logger."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this guide we showed how to setup loggers for your AutoPi Mini device.\nIf you need some help with setting a logger up, feel free to reach out to us by writing us a mail\nto ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io"),"."," We also are very happy to receive any feedback, so don't hesitate to let us\nknow your thoughts."))}p.isMDXComponent=!0},14519:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AutoPiMiniLogger-38382a1f2891c331b1f121c5203ebe44.png"},18098:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AutoPiMiniLogger2-fe0a68385d46bf2d7c8eb0b8c99ecb10.png"}}]);