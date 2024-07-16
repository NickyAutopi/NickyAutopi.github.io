(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2729],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||u;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,c=new Array(u);c[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<u;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69146:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(22122),o=r(19756),u=(r(67294),r(3905)),c=["components"],i={id:"core-returners-mqtt",title:"Mqtt"},a=void 0,l={unversionedId:"core/returners/core-returners-mqtt",id:"core/returners/core-returners-mqtt",isDocsHomePage:!1,title:"Mqtt",description:"mqtt.returner",source:"@site/docs/core/returners/mqtt.md",sourceDirName:"core/returners",slug:"/core/returners/core-returners-mqtt",permalink:"/core/returners/core-returners-mqtt",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/returners/mqtt.md",tags:[],version:"current",frontMatter:{id:"core-returners-mqtt",title:"Mqtt"},sidebar:"sidebar",previous:{title:"Jsonl",permalink:"/core/returners/core-returners-jsonl"},next:{title:"Introduction",permalink:"/core/services/core-services-intro"}},s=[{value:"<code>mqtt.returner</code>",id:"mqttreturner",children:[]},{value:"<code>mqtt.returner_data</code>",id:"mqttreturner_data",children:[]},{value:"<code>mqtt.returner_job</code>",id:"mqttreturner_job",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,u.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"mqttreturner"},(0,u.kt)("inlineCode",{parentName:"h2"},"mqtt.returner")),(0,u.kt)("p",null,"Return a result to MQTT."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"EXAMPLE")," salt ",(0,u.kt)("inlineCode",{parentName:"p"},"*")," test.ping --return mqtt --return_kwargs ",(0,u.kt)("inlineCode",{parentName:"p"},'{"host": "127.0.0.1", "port": 1883}')),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"mqttreturner_data"},(0,u.kt)("inlineCode",{parentName:"h2"},"mqtt.returner_data")),(0,u.kt)("p",null,"Return any arbitrary data structure to MQTT."),(0,u.kt)("hr",null),(0,u.kt)("h2",{id:"mqttreturner_job"},(0,u.kt)("inlineCode",{parentName:"h2"},"mqtt.returner_job")),(0,u.kt)("p",null,"Return a Salt job result to MQTT."))}m.isMDXComponent=!0}}]);