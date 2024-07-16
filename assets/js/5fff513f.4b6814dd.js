(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[9529],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22943:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(67294),a=function(e){var t=e.title,n=e.url;return r.createElement(r.Fragment,null,r.createElement("h2",null,"Discussion"),r.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",r.createElement("a",{href:n},t),"."),r.createElement("p",null,"You can also write us an email on ",r.createElement("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}},98984:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(22943),s=["components"],c={id:"power-cycle-for-electric-vehicles",title:"Power Cycles"},l=void 0,p={unversionedId:"getting_started/electric_vehicles/power-cycle-for-electric-vehicles",id:"getting_started/electric_vehicles/power-cycle-for-electric-vehicles",isDocsHomePage:!1,title:"Power Cycles",description:"The AutoPi dongle is initially configured to be powered on when the engine of the vehicle is",source:"@site/docs/getting_started/electric_vehicles/power_cycle_for_electric_vehicles.mdx",sourceDirName:"getting_started/electric_vehicles",slug:"/getting_started/electric_vehicles/power-cycle-for-electric-vehicles",permalink:"/getting_started/electric_vehicles/power-cycle-for-electric-vehicles",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/electric_vehicles/power_cycle_for_electric_vehicles.mdx",tags:[],version:"current",frontMatter:{id:"power-cycle-for-electric-vehicles",title:"Power Cycles"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/getting_started/electric_vehicles/electric-vehicles-intro"},next:{title:"Introduction",permalink:"/getting_started/api/api-intro"}},u=[{value:"Setup a PID Logger Using the <code>rpm_motor_event</code> Trigger",id:"setup-a-pid-logger-using-the-rpm_motor_event-trigger",children:[]},{value:"Setup a PID Logger Using the <code>communication_event</code> Trigger",id:"setup-a-pid-logger-using-the-communication_event-trigger",children:[]},{value:"Setup a PID Logger Using a Custom Trigger",id:"setup-a-pid-logger-using-a-custom-trigger",children:[]},{value:"Setup a CAN Logger Using the <code>rpm_engine_event</code> Trigger",id:"setup-a-can-logger-using-the-rpm_engine_event-trigger",children:[]}],g={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The AutoPi dongle is initially configured to be powered on when the engine of the vehicle is\nrunning. When the engine is not running, a sleep timer is created to put the dongle to sleep after\n5 minutes or whatever configured."),(0,o.kt)("p",null,"Behind the scenes this works by using ",(0,o.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-vehicle/#engine-events"},"engine events"),".\nEngine events are triggered based on the RPM values continuously read from the vehicle. For all\nnon-BEVs (Battery Electric Vehicles) this is setup automatically as default because they all\nsupport readout of engine RPM in the same way according to the OBD-II PID standard\n(SAE J1979)."),(0,o.kt)("p",null,"Unfortunately, this is not as simple for BEVs. Here there is no standard and data is read out in\ndifferent ways between makes and models. Two approaches are available:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"if your vehicle can respond to PID requests and/or "),(0,o.kt)("li",{parentName:"ol"},"if your car continuously delivers data on a CAN bus.")),(0,o.kt)("h2",{id:"setup-a-pid-logger-using-the-rpm_motor_event-trigger"},"Setup a PID Logger Using the ",(0,o.kt)("inlineCode",{parentName:"h2"},"rpm_motor_event")," Trigger"),(0,o.kt)("p",null,"This option can be used if your vehicle can respond to PID queries."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Precondition:")," A PID which on request delivers an RPM value related to the movement of the\nvehicle. It could be the RPM of an electric motor, a spinning wheel etc. If you do not know of such\na PID for your model, you can always check the ",(0,o.kt)("em",{parentName:"p"},"Community Library")," on ",(0,o.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"https://my.autopi.io"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The PID must be named 'RPM' or else the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpm_motor_event")," trigger will skip checking the value."))),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"Car Explorer")," > ",(0,o.kt)("strong",{parentName:"p"},"Loggers")," > ",(0,o.kt)("strong",{parentName:"p"},"Create")," > ",(0,o.kt)("strong",{parentName:"p"},"PID"),". Choose your RPM PID and be sure to\nselect the ",(0,o.kt)("em",{parentName:"p"},"rpm_motor_event")," trigger."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting up RPM based PID logger",src:n(4109).Z})," "),(0,o.kt)("p",null,"After the logger has been synced to your device, and the service has been restarted, you should\nstart seeing motor events in the ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,o.kt)("strong",{parentName:"p"},"Events")," page."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-vehicle/#motor-events"},"Click here for documentation on motor events"),"."),(0,o.kt)("h2",{id:"setup-a-pid-logger-using-the-communication_event-trigger"},"Setup a PID Logger Using the ",(0,o.kt)("inlineCode",{parentName:"h2"},"communication_event")," Trigger"),(0,o.kt)("p",null,"This option can be used if you do not have a PID capable of delivering RPM data, but instead have\nanother arbitrary PID that delivers data when the vehicle is moving or active. The actual content\nof the PID response is irrelevant for this trigger to function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Precondition:")," A PID which on request delivers data when the vehicle is active and no response\nwhen the vehicle is inactive. If you do not know any PID to use, you can always check the\n",(0,o.kt)("em",{parentName:"p"},"Community Library")," on ",(0,o.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"https://my.autopi.io"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," There is no restriction on specific naming of the PID."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"Car Explorer")," > ",(0,o.kt)("strong",{parentName:"p"},"Loggers")," > ",(0,o.kt)("strong",{parentName:"p"},"Create")," > ",(0,o.kt)("strong",{parentName:"p"},"PID"),". Choose your arbitrary PID and be sure\nto select the ",(0,o.kt)("inlineCode",{parentName:"p"},"communication_event")," trigger."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting up communication based PID logger",src:n(81238).Z})," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-vehicle/#communication-events"},"Click here for documentation on communication events"),"."),(0,o.kt)("p",null,"Next step is to re-configure the sleep timer functionality to use communication events instead of\nthe default engine/motor events. Go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,o.kt)("strong",{parentName:"p"},"Power")," and change the three\nvalues:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sleep Timer")," > ",(0,o.kt)("strong",{parentName:"p"},"Event Driven")," > ",(0,o.kt)("strong",{parentName:"p"},"Event Regex:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"^vehicle/communication/disconnected")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sleep Timer")," > ",(0,o.kt)("strong",{parentName:"p"},"Event Driven")," > ",(0,o.kt)("strong",{parentName:"p"},"Reason:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"vehicle_communication_disconnected")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sleep Timer")," > ",(0,o.kt)("strong",{parentName:"p"},"Suppress")," > ",(0,o.kt)("strong",{parentName:"p"},"Event Regex:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"^vehicle/communication/established")),(0,o.kt)("p",null,"As shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change events 1",src:n(79159).Z})," "),(0,o.kt)("p",null,"..."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change events 2",src:n(47866).Z})," "),(0,o.kt)("p",null,"After all the changes have been synced to your device, and the service has been restarted, you\nshould start seeing communication events and also ",(0,o.kt)("inlineCode",{parentName:"p"},"system/sleep_timer")," events in the\n",(0,o.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,o.kt)("strong",{parentName:"p"},"Events")," page."),(0,o.kt)("h2",{id:"setup-a-pid-logger-using-a-custom-trigger"},"Setup a PID Logger Using a Custom Trigger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution:")," This option is recommended for expert users only."),(0,o.kt)("p",null,"Instead of using one of the built-in triggers you can provide your own implementation which also\ncan fire your own custom events. The setup procedure is the same as in the example above except\nthat the trigger used is custom. See how to create a custom trigger\n",(0,o.kt)("a",{parentName:"p",href:"/cloud/device_management/services/create-custom-triggers"},"here"),"."),(0,o.kt)("h2",{id:"setup-a-can-logger-using-the-rpm_engine_event-trigger"},"Setup a CAN Logger Using the ",(0,o.kt)("inlineCode",{parentName:"h2"},"rpm_engine_event")," Trigger"),(0,o.kt)("p",null,"This option can be used if your vehicle continuously produces data on a CAN bus while\nactive/driving."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," At the time of writing, this approach can only make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpm_engine_event")," trigger\nand thus produce engine events,\n",(0,o.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-vehicle/#engine-events"},"click here for documentation on engine events"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Precondition:")," A CAN message mapping for your specific vehicle which contains an RPM signal. If\nyou do not know any CAN messages for your vehicle, you can always check the ",(0,o.kt)("em",{parentName:"p"},"Community Library"),"\non ",(0,o.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"https://my.autopi.io"),"."),(0,o.kt)("p",null,"The following example shows how an RPM signal can be found in the ",(0,o.kt)("em",{parentName:"p"},"Community Library")," for vehicles of the make Alfa Romeo.\nGo to ",(0,o.kt)("strong",{parentName:"p"},"OBD Library")," > ",(0,o.kt)("strong",{parentName:"p"},"Community Library")," and specify ",(0,o.kt)("em",{parentName:"p"},"Make"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Community library",src:n(23796).Z})," "),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("em",{parentName:"p"},"RPM")," signal and in the pop-up window click on the button ",(0,o.kt)("em",{parentName:"p"},"Add to my library"),". You have\nnow added the CAN message to your library, and you can use it for logging."),(0,o.kt)("p",null,"Next step is to setup a CAN logger for the RPM signal. Go to ",(0,o.kt)("strong",{parentName:"p"},"Car Explorer")," > ",(0,o.kt)("strong",{parentName:"p"},"Loggers")," >\n",(0,o.kt)("strong",{parentName:"p"},"Create")," > ",(0,o.kt)("strong",{parentName:"p"},"CAN")," and choose the RPM signal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting up CAN signal logger",src:n(20658).Z})," "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The CAN signal must be named 'RPM' or else the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpm_engine_event")," trigger will skip checking the\nvalue."))),(0,o.kt)("p",null,"After the logger has been synced to your device, and the service has been restarted, you should\nstart seeing engine events in the ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,o.kt)("strong",{parentName:"p"},"Events")," page."),(0,o.kt)(i.$,{title:"How to setup power cycle for an electric vehicle",url:"https://community.autopi.io/t/guide-how-to-setup-power-cycle-for-an-electric-vehicle/1668",mdxType:"Discussion"}))}m.isMDXComponent=!0},79159:function(e,t,n){"use strict";t.Z=n.p+"assets/images/change_events_1-546e2803bc1bab1eee0b91189dbec788.png"},47866:function(e,t,n){"use strict";t.Z=n.p+"assets/images/change_events_2-6de9949f0f68547e42d5e06cc95c7ff4.png"},23796:function(e,t,n){"use strict";t.Z=n.p+"assets/images/community_library_screenshot-f3cb7314d1398ac6e9860526397878af.png"},20658:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setting_up_can_signal_logger-71f4bd71a33625e5f743b07414348679.png"},81238:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setting_up_communication_based_pid_logger-bb7fc0f2409c8a32ea64853ff50558fa.png"},4109:function(e,t,n){"use strict";t.Z=n.p+"assets/images/setting_up_rpm_based_pid_logger-ee8734e702321c1a78bc77f417e73ae9.png"}}]);