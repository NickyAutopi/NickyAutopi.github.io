(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2549],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22943:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var a=n(67294),r=function(e){var t=e.title,n=e.url;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Discussion"),a.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",a.createElement("a",{href:n},t),"."),a.createElement("p",null,"You can also write us an email on ",a.createElement("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}},59292:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(22943),l=["components"],s={id:"installing-external-antennas",title:"Installing External Antennas"},c=void 0,p={unversionedId:"hardware/legacy_devices/autopi_dongle_gen3/installing-external-antennas",id:"hardware/legacy_devices/autopi_dongle_gen3/installing-external-antennas",isDocsHomePage:!1,title:"Installing External Antennas",description:"This is a step-by-step guide on how to install external 4G and GPS antennas on your AutoPi.",source:"@site/docs/hardware/legacy_devices/autopi_dongle_gen3/installing_external_antennas.mdx",sourceDirName:"hardware/legacy_devices/autopi_dongle_gen3",slug:"/hardware/legacy_devices/autopi_dongle_gen3/installing-external-antennas",permalink:"/hardware/legacy_devices/autopi_dongle_gen3/installing-external-antennas",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/hardware/legacy_devices/autopi_dongle_gen3/installing_external_antennas.mdx",tags:[],version:"current",frontMatter:{id:"installing-external-antennas",title:"Installing External Antennas"},sidebar:"hardwareSidebar",previous:{title:"Developer Kit",permalink:"/hardware/legacy_devices/autopi_dongle_gen3/developer-kit"},next:{title:"OBD Connector Pinout",permalink:"/hardware/legacy_devices/autopi_dongle_gen3/obd-connector-pinout"}},u=[],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a step-by-step guide on how to install external 4G and GPS antennas on your AutoPi."),(0,i.kt)("p",null,"This guide will require a medium level of DIY abilities/skills, and it will involve drilling into\nthe plastic casing of the AutoPi TMU."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," First, you will have to make sure that you have access to the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The External Antenna Kit (you can purchase one ",(0,i.kt)("a",{parentName:"li",href:"https://shop.autopi.io/products/3in1-external-antenna-kit"},"here"),")"),(0,i.kt)("li",{parentName:"ul"},"AutoPi TMU 3rd Gen"),(0,i.kt)("li",{parentName:"ul"},"A drill")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Disassemble the device by opening the four screws located on the backside."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unscrewed device",src:n(21258).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Turn the device around and lift the ",(0,i.kt)("strong",{parentName:"p"},"top part")," while being careful not to damage the\nantenna cable."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lift top part of AutoPi casing",src:n(92264).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Remove the black antenna cable by pulling straight up, while being careful not to\ndamage the modem."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove antenna cable",src:n(85297).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," Hold the OBD connector and lift the device slowly out of the enclosure."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Be careful")," as the speaker and the battery are connected still to the device and the enclosure."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lifting device out of the enclosure",src:n(63921).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6:")," Remove the speaker and the battery connector, while keeping in mind the location of the\nconnectors."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 7:")," Now that you have separated the enclosure from the device, you will see that there are\ndots located around the casing. These dots show placement location for possible antennas."),(0,i.kt)("p",null,"Please note there are ",(0,i.kt)("strong",{parentName:"p"},"5")," possible locations on the side opposite to the OBD port, and 1 on each\nside of the device."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drill locations",src:n(29741).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 8:")," To drill, use a ",(0,i.kt)("strong",{parentName:"p"},"6.5 mm")," drill bit, and drill directly on top of the dots."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 9:")," After drilling, insert the SMA cables through the holes you have created."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SMA cable inserted",src:n(54327).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 10:")," Next, we are starting the reassembly process. First the battery and speaker will be\nconnected, then the device will be slowly put in the enclosure, while being very careful not to\npinch any wires."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 11:")," The next step is to reconnect the SMA cable to the modem by positioning them above the\nconnector and pushing down gently until a click is heard. Please keep in mind that the GPS SMA\ncable will be in the middle of the three connectors. In the picture below, the GPS antenna is the\nGRAY SMA cable."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SMA cable connected",src:n(88470).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 12:")," The top lid of the enclosure will be mounted using the 4 black screws."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Antenna ready device",src:n(18390).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 13:")," Next, the antennas will be connected to the SMA cables, while keeping in mind not to\nmix the GPS antenna with the 4G antenna."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Antennas connected to device",src:n(18488).Z})),(0,i.kt)(o.$,{title:"Installing and using external 4G and GPS antennas on the AutoPi TMU",url:"https://community.autopi.io/t/installing-and-using-external-4g-and-gps-antennas-on-the-autopi-tmu/2376",mdxType:"Discussion"}))}m.isMDXComponent=!0},18390:function(e,t,n){"use strict";t.Z=n.p+"assets/images/antenna_ready_device-f77fd706f72b00f7205465674d763096.jpeg"},18488:function(e,t,n){"use strict";t.Z=n.p+"assets/images/antennas_connected_to_device-768052e214f63b3766f1da389ddff206.jpeg"},29741:function(e,t,n){"use strict";t.Z=n.p+"assets/images/drill_locations-249887bdd820de06020edbfc147e61a7.jpeg"},92264:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lift_top_part_of_autopi_casing-9b30aabc85d9f5ce05610a8f5a394fb5.jpeg"},63921:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lifting_device_out_of_the_enclosure-8ad8d6a7174c7ed0934bd1eb8b456f49.jpeg"},85297:function(e,t,n){"use strict";t.Z=n.p+"assets/images/remove_antenna_cable-5667f3bc6666dac2fed7442ddccbce14.jpeg"},88470:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sma_cable_connected-5667f3bc6666dac2fed7442ddccbce14.jpeg"},54327:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sma_cable_inserted-f63e5758355618bf9e715cf976a62de9.jpeg"},21258:function(e,t,n){"use strict";t.Z=n.p+"assets/images/unscrewed_device-2eba0de488df576cfacf92d4c502d196.jpeg"}}]);