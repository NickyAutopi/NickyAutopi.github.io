(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9148],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return a},kt:function(){return v}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},a=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),f=l(t),v=o,m=f["".concat(s,".").concat(v)]||f[v]||p[v]||u;return t?n.createElement(m,c(c({ref:r},a),{},{components:t})):n.createElement(m,c({ref:r},a))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,c=new Array(u);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<u;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40448:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return a},default:function(){return f}});var n=t(22122),o=t(19756),u=(t(67294),t(3905)),c=["components"],i={id:"core-returners-event-result",title:"Event Result"},s=void 0,l={unversionedId:"core/returners/core-returners-event-result",id:"core/returners/core-returners-event-result",isDocsHomePage:!1,title:"Event Result",description:"event_result.returner",source:"@site/docs/core/returners/event_result.md",sourceDirName:"core/returners",slug:"/core/returners/core-returners-event-result",permalink:"/core/returners/core-returners-event-result",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/returners/event_result.md",tags:[],version:"current",frontMatter:{id:"core-returners-event-result",title:"Event Result"},sidebar:"coreSidebar",previous:{title:"Event",permalink:"/core/returners/core-returners-event"},next:{title:"Jsonl",permalink:"/core/returners/core-returners-jsonl"}},a=[{value:"<code>event_result.returner</code>",id:"event_resultreturner",children:[]}],p={toc:a};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,u.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"event_resultreturner"},(0,u.kt)("inlineCode",{parentName:"h2"},"event_result.returner")),(0,u.kt)("p",null,"Publishes an entire job result on the minion`s local event bus."))}f.isMDXComponent=!0}}]);