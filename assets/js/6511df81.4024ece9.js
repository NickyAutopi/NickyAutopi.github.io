(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[7975],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,p=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return n?a.createElement(p,r(r({ref:t},d),{},{components:n})):a.createElement(p,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26175:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"obd-ii-intro",title:"Introduction"},l=void 0,c={unversionedId:"cloud/obd-ii/obd-ii-intro",id:"cloud/obd-ii/obd-ii-intro",isDocsHomePage:!1,title:"Introduction",description:"Working with the CAN bus is on your own risk. Playback and sending commands to the vehicle can be",source:"@site/docs/cloud/obd-ii/index.md",sourceDirName:"cloud/obd-ii",slug:"/cloud/obd-ii/obd-ii-intro",permalink:"/cloud/obd-ii/obd-ii-intro",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/obd-ii/index.md",tags:[],version:"current",frontMatter:{id:"obd-ii-intro",title:"Introduction"},sidebar:"cloudSidebar",previous:{title:"Templates",permalink:"/cloud/fleet/fleet-templates"},next:{title:"Automatic OBD Logger Pausing",permalink:"/cloud/obd-ii/automatic-obd-logger-pausing"}},d=[{value:"PIDs (Parameter IDs)",id:"pids-parameter-ids",children:[]},{value:"CAN Messages and CAN Signals",id:"can-messages-and-can-signals",children:[]},{value:"Loggers for Your Device",id:"loggers-for-your-device",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Working with the CAN bus is on your own risk. Playback and sending commands to the vehicle can be\nused to control functions in the vehicle affecting the behavior of the vehicle. We recommend that\nyou ",(0,i.kt)("strong",{parentName:"p"},"NEVER")," do testing on a vehicle in motion and that you have the parking brake enabled while you\ntest."))),(0,i.kt)("p",null,"Most, if not all, vehicles have an OBD-II port. It is a port that allows technicians to communicate\nwith the vehicle, diagnose problems and so on. Using this port with the AutoPi you are able to get\nreal time data from the vehicle and display that data on your Cloud dashboard. In this guide, we\nwill explore the basics of OBD-II communication: we will explore the two main ways vehicles\ncommunicate on their CAN bus and in further guides we will talk about how they can be used to\nlog data (create the so-called loggers) through an AutoPi device."),(0,i.kt)("h2",{id:"pids-parameter-ids"},"PIDs (Parameter IDs)"),(0,i.kt)("p",null,"Parameter IDs or PIDs are specific codes that can be used to request data from the vehicle. An\nexternal device (usually known as external test equipment device) can send a PID request on the CAN\nbus and an ECU (Electronic Control Unit) in the vehicle will send a PID response containing the\ndata that was requested in hexadecimal format. Here is an example PID request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"7DF # 02 01 0C 00 00 00 00 00\n")),(0,i.kt)("p",null,"This PID, when sent to the CAN bus of a vehicle that implements the OBD-II standard, will request\nthe current RPM value (Revolutions Per Minute). We won't spend time trying to completely understand\nwhat this PID means, that is done in one of the following guides."),(0,i.kt)("p",null,"However, the general structure of a PID is the following. There is a header that defines who sent\nthe PID. The hashtag symbol (#) separates the header from the payload. The payload holds data that\nis to be interpreted by the receiver of this PID request."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The OBD-II standard is followed strictly only by vehicles that have an internal combustion engine\n(ICE vehicles). Some ICE vehicles might have some extended functionality on top of the standard\ndefaults."),(0,i.kt)("p",{parentName:"div"},"On the other hand, hybrid and electric vehicles don't always follow that standard. In fact, in our\nexperience those types of vehicles have an entirely different set of PIDs available. This means\nthat it is much more difficult to find out how to communicate on the CAN bus of a non-ICE vehicle\nas they are usually different than what the OBD-II standard defines."))),(0,i.kt)("p",null,"After the PID has been sent on the CAN bus, an ECU on the vehicle will see the request and respond\nwith another PID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# request, same as above\n7DF # 02 01 0C 00 00 00 00 00\n\n# response from ECU\n7E8 # 04 41 0C 0F A0 00 00 00\n")),(0,i.kt)("p",null,"The response will hold the information that was requested - the current RPM value. If we take a\nlook at the 4th and 5th bytes of the response body (",(0,i.kt)("inlineCode",{parentName:"p"},"0F A0"),"), convert them to decimal values and\nfollow the formula ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUE / 4")," we will find out that the current RPM is 1000."),(0,i.kt)("p",null,"Each PID has to be interpreted differently. Some PIDs have formulas, others just need to be\nconverted from hex form to decimal. Now, let's move on to explaining the other way vehicles\ncommunicate on their CAN busses."),(0,i.kt)("h2",{id:"can-messages-and-can-signals"},"CAN Messages and CAN Signals"),(0,i.kt)("p",null,"CAN messages look very similar to how PIDs are represented. They also have a header (also known as\nidentifier) and a payload (body) separated by a hash sign. However, the difference between CAN\nmessages and PIDs is that CAN messages are continuously sent on the CAN bus of a vehicle without\nthe need to make a specific request."),(0,i.kt)("p",null,"The body of a CAN message is constructed from the so-called CAN signals. A simple way to understand\nCAN signals is by looking at an example CAN message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"256 # 94 19 00 30 00 92 00 C7\n")),(0,i.kt)("p",null,"As you can see, it is not much different than the PID presented above. However, this is a CAN\nmessage and so the structure is different - for example, the first byte of a PID usually tells the\nreceiver how long the response body is, while for CAN messages that is not the case. Instead, there\nis a DBC file, usually created by the manufacturers of the vehicle, that defines the structure of\nCAN messages and CAN signals. We will take a look at those in a different guide."),(0,i.kt)("h2",{id:"loggers-for-your-device"},"Loggers for Your Device"),(0,i.kt)("p",null,"With your AutoPi device you are able to setup loggers that will communicate on the CAN bus and extract data for you to view on demand in the Cloud's dashboard.\nYou can setup loggers with PIDs or with CAN messages, depending on what your vehicle's type of communication is."),(0,i.kt)("p",null,"In the following couple of guides we will explore how you can create ",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd-ii/create-pid-loggers"},"PID Loggers"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd-ii/create-can-signal-loggers"},"CAN Signal Loggers"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"To finalize this introduction, we now know there are two major types of communication that can\nhappen on a CAN bus - there's the PIDs and CAN messages. PIDs are less chatty on the CAN bus, they follow the\nrequest-response model. The ECUs in a vehicle will only report data if they are asked about it."),(0,i.kt)("p",null,"On the other hand, we also have vehicles that communicate with CAN messages. The ECUs in those\ntypes of vehicles will continuously communicate on the CAN bus, reporting the latest available data.\nThis makes the CAN bus of vehicles that communicate in this manner much more chatty, usually\ndumping large amounts of data at a time."))}u.isMDXComponent=!0}}]);