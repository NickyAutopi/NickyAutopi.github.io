(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[636],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),g=m(n),c=r,k=g["".concat(d,".").concat(c)]||g[c]||p[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84136:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],o={id:"cloud-config-accelerometer",title:"Accelerometer"},d=void 0,m={unversionedId:"cloud/device_management/advanced_settings/TMU/cloud-config-accelerometer",id:"cloud/device_management/advanced_settings/TMU/cloud-config-accelerometer",isDocsHomePage:!1,title:"Accelerometer",description:"| Name | Description | Type | Default | Unit |",source:"@site/docs/cloud/device_management/advanced_settings/TMU/accelerometer.md",sourceDirName:"cloud/device_management/advanced_settings/TMU",slug:"/cloud/device_management/advanced_settings/TMU/cloud-config-accelerometer",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-accelerometer",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/device_management/advanced_settings/TMU/accelerometer.md",tags:[],version:"current",frontMatter:{id:"cloud-config-accelerometer",title:"Accelerometer"},sidebar:"cloudSidebar",previous:{title:"Introduction",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-intro"},next:{title:"Alerts",permalink:"/cloud/device_management/advanced_settings/TMU/cloud-config-alerts"}},u=[{value:"Gyroscope",id:"gyroscope",children:[]},{value:"Logger",id:"logger",children:[]},{value:"Motion Events",id:"motion-events",children:[]},{value:"Wake On Motion",id:"wake-on-motion",children:[]}],p={toc:u};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAMPLING RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"How many samples per second? Increasing this will affect system performance negatively. Only change this value if you know what you are doing."),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"12.5"),(0,l.kt)("td",{parentName:"tr",align:null},"Hz")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RANGE"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of g-forces being measured."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"g")))),(0,l.kt)("h2",{id:"gyroscope"},"Gyroscope"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SAMPLING RATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Gyroscope sampling rate. How often will the gyroscope sample new data? A value of 0 means the gyroscope is disabled."),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Hz")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RANGE"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of degrees per second that the gyroscope will measure."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"250"),(0,l.kt)("td",{parentName:"tr",align:null},"deg/s")))),(0,l.kt)("h2",{id:"logger"},"Logger"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RETURNERS"),(0,l.kt)("td",{parentName:"tr",align:null},"Which cloud returner(s) should be used?"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FILTER DUPLICATES"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter out duplicate measurements?"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMALS"),(0,l.kt)("td",{parentName:"tr",align:null},"More decimals means a lot more data. Be very careful about increasing this value."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"motion-events"},"Motion Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger motion events based on XYZ measurements?"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHAKE PERCENTAGE"),(0,l.kt)("td",{parentName:"tr",align:null},"Percentage of positive motion detections required within duration period to conclude shaking."),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"90"),(0,l.kt)("td",{parentName:"tr",align:null},"%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHAKE G THRESHOLD"),(0,l.kt)("td",{parentName:"tr",align:null},"G force threshold for shaking detection. Disabled when set to zero."),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"0.01"),(0,l.kt)("td",{parentName:"tr",align:null},"g")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JOLT DURATION"),(0,l.kt)("td",{parentName:"tr",align:null},"How long in seconds should the G force threshold be observed over?"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEBOUNCE DELAY"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum delay in seconds between triggering events."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JOLT G THRESHOLD"),(0,l.kt)("td",{parentName:"tr",align:null},"G force threshold for jolting detection. Disabled when set to zero."),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"g")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHAKE DURATION"),(0,l.kt)("td",{parentName:"tr",align:null},"How long in seconds should the G force threshold be observed over?"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"s")))),(0,l.kt)("h2",{id:"wake-on-motion"},"Wake On Motion"),(0,l.kt)("p",null,"Devices with a hardware version of ",(0,l.kt)("strong",{parentName:"p"},"5.1")," and earlier have the wake on motion available, this includes Gen 2 devices as well."),(0,l.kt)("p",null,"Devices with a hardware version of ",(0,l.kt)("strong",{parentName:"p"},"5.2")," and above ",(0,l.kt)("strong",{parentName:"p"},"don't")," support wake on motion."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SENSITIVITY"),(0,l.kt)("td",{parentName:"tr",align:null},"The sensitivity of a trigger for the motions/jolts. Minimum value is 0 and maximum value is 127. The sensitivity value defines how much G force is required to trigger a wake event using the formula ",(0,l.kt)("inlineCode",{parentName:"td"},"sensitivity * 0.063 = G")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MODE"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable the device to wake up whenever it detects motion or transient (jolt) acceleration of the device. Transient mode detects jolts (fast movements), while motion mode detects even slow and steady changes in accelerometer readings."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h4",{id:"axes"},"Axes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Z"),(0,l.kt)("td",{parentName:"tr",align:null},"Wake if motion/jolt is detected on the Z axis."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"Wake if motion/jolt is detected on the X axis."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Wake if motion/jolt is detected on the Y axis."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0}}]);