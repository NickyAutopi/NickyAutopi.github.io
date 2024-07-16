(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[1898],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79585:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(22122),o=a(19756),i=(a(67294),a(3905)),r=["components"],s={id:"fleet-templates",title:"Templates"},l=void 0,c={unversionedId:"cloud/fleet/fleet-templates",id:"cloud/fleet/fleet-templates",isDocsHomePage:!1,title:"Templates",description:"The template functionality makes it possible for a user to manage the configuration of a range of devices by",source:"@site/docs/cloud/fleet/templates.md",sourceDirName:"cloud/fleet",slug:"/cloud/fleet/fleet-templates",permalink:"/cloud/fleet/fleet-templates",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/fleet/templates.md",tags:[],version:"current",frontMatter:{id:"fleet-templates",title:"Templates"},sidebar:"sidebar",previous:{title:"Nested Customers",permalink:"/cloud/fleet/nested-customers"},next:{title:"Introduction",permalink:"/cloud/device_management/device-management-intro"}},d=[{value:"Features",id:"features",children:[{value:"Advanced Configuration",id:"advanced-configuration",children:[]},{value:"Modules (Custom Code)",id:"modules-custom-code",children:[]},{value:"Services",id:"services",children:[]},{value:"Triggers and Jobs",id:"triggers-and-jobs",children:[]},{value:"Loggers",id:"loggers",children:[]}]},{value:"Functionality",id:"functionality",children:[]}],p={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The template functionality makes it possible for a user to manage the configuration of a range of devices by\nsetting up a template with the required functionality, and then applying that to a number of devices."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Temlates overview",src:a(64529).Z})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"A template can contain the following configurations."),(0,i.kt)("h3",{id:"advanced-configuration"},"Advanced Configuration"),(0,i.kt)("p",null,"Most ",(0,i.kt)("a",{parentName:"p",href:"/cloud/device_management/advanced_settings/TMU/cloud-config-intro"},"advanced configuration settings")," are available to be specified for a template. Options that aren't available for templates have been removed because they are too specific for each device and it doesn't make sense to set in a template."),(0,i.kt)("p",null,"The table shows the settings currently associated to the template, and clicking the edit button will open the settings UI, with all available settings."),(0,i.kt)("h3",{id:"modules-custom-code"},"Modules (Custom Code)"),(0,i.kt)("p",null,"Modules are created the same way for templates as they are for normal devices; chose a type depending on what you need the module for, and when creating a custom module of type service, it will automatically create a custom service for you and associate that to the same template."),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/cloud/device_management/services/services-intro"},"Read more here"),"."),(0,i.kt)("h4",{id:"creating-custom-services"},"Creating Custom Services"),(0,i.kt)("p",null,"Creating a custom service does not not autocreate a custom module as of now, so if you want to create a custom service, you should instead go create a custom module of the type service, then a service will be automatically created."),(0,i.kt)("h4",{id:"overriding-default-services"},"Overriding Default Services"),(0,i.kt)("p",null,"To override a default engine, like the obd_manager from a template, you can simply create a new service which has the same name as the default service."),(0,i.kt)("h3",{id:"triggers-and-jobs"},"Triggers and Jobs"),(0,i.kt)("p",null,"Triggers and Jobs are created the same way for templates as they are for normal devices."),(0,i.kt)("p",null,"More info about ",(0,i.kt)("a",{parentName:"p",href:"/cloud/device_management/cloud-jobs"},"Jobs")," and ",(0,i.kt)("a",{parentName:"p",href:"/cloud/fleet/triggers/a-guide-to-triggers"},"Triggers")),(0,i.kt)("h3",{id:"loggers"},"Loggers"),(0,i.kt)("p",null,"Loggers are created similarly to how they are for regular devices. They are a little different since creating loggers on a template will create buses\nas well. A prerequisite to setting up Tempalted Loggers is to have already created some CAN Messages and CAN Signals or PIDs in the Library."),(0,i.kt)("h4",{id:"templated-can-loggers"},"Templated CAN Loggers"),(0,i.kt)("p",null,"To create a templated CAN logger, find the ",(0,i.kt)("inlineCode",{parentName:"p"},"Loggers")," tab in the template you would like to edit, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"CAN"),". You will be presented\nwith a window like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create can logger",src:a(57143).Z})),(0,i.kt)("p",null,"Here you will need to select the CAN signal you'd like to log, and set the bus configuration. In a guide on\n",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd_library/car-explorer-library-manual#importing-library-items-from-files"},"importing CAN messages and signals through DBC files"),"\nwe imported some signals related to the seat temperatures. Here we can see those:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select logged signal",src:a(80204).Z})),(0,i.kt)("p",null,"The first logger you create on a template will always create a bus that's associated to that template. More buses will be created when loggers\nare created with a protocol, which none of the existing buses are set to. Multiple buses with the same protocol are not supported. When you click\non the Bus dropdown, you will see both the buses that are associated to the template, and the buses which are 'supported' by the message. If one\nof these buses is selected, it will prefil the Protocol and Baudrate fields (there are no association made between the selected bus and the newly\ncreated logger/bus/template)."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Message supported buses")," section refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Used by Vehicle(s)")," dropdown in the CAN Message edit window in the library."),(0,i.kt)("p",{parentName:"div"},"  ",(0,i.kt)("img",{alt:"Logger buses",src:a(61988).Z})))),(0,i.kt)("p",null,"Let's say this signal can be logged on a bus with protocol ID 6 and default baudrate. You'd set the parameter values, save, and the next logger you\ncreate for this template, you can choose to fill these fields using the bus that was just created."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Can logger buses with tempalte bus",src:a(50810).Z})),(0,i.kt)("h4",{id:"templated-pids"},"Templated PIDs"),(0,i.kt)("p",null,"The process for creating templated PID loggers is very similar as for CAN loggers. Go to the template's ",(0,i.kt)("inlineCode",{parentName:"p"},"Loggers")," tab, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"PID"),".\nYou'll be presented with a window similar to this:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(90056).Z},"Logger buses")),(0,i.kt)("p",null,"Most of this is identical to what you'd see when ",(0,i.kt)("a",{parentName:"p",href:"/cloud/obd-ii/create-pid-loggers/#creating-the-logger"},"creating PID loggers for devices"),", with\nthe exception of Bus settings. Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/cloud/fleet/fleet-templates/#templated-can-loggers"},"templated CAN loggers section")," to get\nan idea of how they work. A notable difference here is that for PID loggers, the Bus is optional. If one's not specified, the PID will be logged\nusing the vehicle's default bus."),(0,i.kt)("h2",{id:"functionality"},"Functionality"),(0,i.kt)("p",null,"To use the templates, the common usage is the following."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a template with a descriptive name."),(0,i.kt)("li",{parentName:"ol"},"Make some changes to the template - change configuration, add loggers, custom code, etc."),(0,i.kt)("li",{parentName:"ol"},'Add some devices to the template by clicking the devices tab and then "Add Device(s)", find one or more devices to add, and click save.'),(0,i.kt)("li",{parentName:"ol"},'Now to actually apply any of the changes to the devices, you should click "apply" on the template to apply the template to all associated devices, or to apply it one by one, click apply on each device.')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'To ensure reproducible behavior, please make sure to keep the configuration on each device as "clean" as possible, as that will make it easier to manage, and try to keep manual changes to devices with a template applied, as few as possible to avoid any colissions between the changes made manual and the changes from the template.'))))}u.isMDXComponent=!0},90056:function(e,t,a){"use strict";t.Z=a.p+"assets/files/template_create_pid_logger-81e9ffeaadf4a2d96e780339d4ad72fe.png"},61988:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_can_logger_buses-67364ad3b801054cbdb0ff6243b732b6.png"},50810:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_can_logger_buses_with_template_bus-94d5827027220b2d6ebf6010bed94e28.png"},57143:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_create_can_logger-7c04421b3cd90378680d4656a08497b4.png"},64529:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_overview-ad52367c59204876ba1c83fbda30a190.png"},80204:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template_select_logged_signal-d9a481a62f12897db3373907a2eb5abe.png"}}]);