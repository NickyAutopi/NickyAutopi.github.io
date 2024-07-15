(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[5146],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22943:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var i=n(67294),a=function(e){var t=e.title,n=e.url;return i.createElement(i.Fragment,null,i.createElement("h2",null,"Discussion"),i.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",i.createElement("a",{href:n},t),"."),i.createElement("p",null,"You can also write us an email on ",i.createElement("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}},17902:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var i=n(22122),a=n(19756),o=(n(67294),n(3905)),r=n(22943),s=["components"],l={id:"change-device-settings-from-api",title:"Change Device Settings from the REST API"},c=void 0,u={unversionedId:"getting_started/api/change-device-settings-from-api",id:"getting_started/api/change-device-settings-from-api",isDocsHomePage:!1,title:"Change Device Settings from the REST API",description:"Hi all,",source:"@site/docs/getting_started/api/change_device_settings_api.mdx",sourceDirName:"getting_started/api",slug:"/getting_started/api/change-device-settings-from-api",permalink:"/getting_started/api/change-device-settings-from-api",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/api/change_device_settings_api.mdx",tags:[],version:"current",frontMatter:{id:"change-device-settings-from-api",title:"Change Device Settings from the REST API"},sidebar:"getting_startedSidebar",previous:{title:"Introduction",permalink:"/getting_started/api/api-intro"},next:{title:"Command Webhook Callbacks",permalink:"/getting_started/api/command-webhook-callbacks"}},p=[{value:"The Endpoints",id:"the-endpoints",children:[{value:"Retrieve All Configuration Options",id:"retrieve-all-configuration-options",children:[]},{value:"Get the Current State of Configuration Options",id:"get-the-current-state-of-configuration-options",children:[]},{value:"Change Settings and Synchronize Them With Your Device",id:"change-settings-and-synchronize-them-with-your-device",children:[]}]}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hi all,"),(0,o.kt)("p",null,"In this guide we'll explore how you can change your device's advanced settings directly through our\nREST API, without having to go through the AutoPi Cloud system to do it."),(0,o.kt)("p",null,"This guide will assume that you are able to log in to your account and receive a JWT token that you\ncan authenticate with to make the requests (",(0,o.kt)("a",{parentName:"p",href:"/getting_started/api/api-intro"},"here's a section for that"),")."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, the settings endpoints used in this guide aren't documented in our API documentation\n",(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io"},"website"),"."))),(0,o.kt)("p",null,"The rest of the guide also assumes that the API URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.autopi.io/"),". All the endpoints\nthat are described below require you to prepend this API URL in order for them to work properly. If\nyou are a business customer, you will need to prepend the respective URL for your dedicated\nenvironment."),(0,o.kt)("p",null,"Lastly, for the most part, the API works with the primary key of the device instead of the unit id.\nAlthough they have the same type (",(0,o.kt)("inlineCode",{parentName:"p"},"UUID"),"), they aren't the same. You are able to retrieve the\ndevice IDs of all your devices by making a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io/#/dongle/dongle_devices_list"},(0,o.kt)("inlineCode",{parentName:"a"},"/dongle/devices")),'\nwhich retrieves all the devices you own and give you information about them including the "id" and\n"unit_id" values. '),(0,o.kt)("p",null,"Let's get started."),(0,o.kt)("h2",{id:"the-endpoints"},"The Endpoints"),(0,o.kt)("p",null,"There are three endpoints that you're looking at for the most part:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve all available configuration options available for a device"),(0,o.kt)("li",{parentName:"ol"},"Retrieve current settings and their state for a specific device"),(0,o.kt)("li",{parentName:"ol"},"Make changes to the state of the settings for a specific device")),(0,o.kt)("h3",{id:"retrieve-all-configuration-options"},"Retrieve All Configuration Options"),(0,o.kt)("p",null,"One of the more important parts of this whole process will be to actually see all available options\nand their specific UUIDs, as this is what's going to be used to change them later on. The API\nendpoint that you need to call is ",(0,o.kt)("inlineCode",{parentName:"p"},"/dongle/settings/schema/?device_id={{device_id}}")," where\n",(0,o.kt)("inlineCode",{parentName:"p"},"{{device_id}}")," is the primary key of your device. A successful request to that endpoint will\nreturn an array of JSON objects, each object containing information for one configuration that you\ncan change. Let's take a look at an example configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "system.logging.level": {\n        "uuid": "9ae810c7-9069-4f7c-83b5-5f88f50aba4a",\n        "default": "warning",\n        "desc": "The log level of the Salt Minion log. Change if you want more detailed logging.",\n        "choices": [\n            "quiet",\n            "critical",\n            "error",\n            "warning",\n            "info",\n            "profile",\n            "debug",\n            "trace",\n            "garbage",\n            "all"\n        ],\n        "type": "str",\n        "sls": "minion.config"\n    },\n...\n')),(0,o.kt)("p",null,"Above you can see the configuration object for the ",(0,o.kt)("inlineCode",{parentName:"p"},"system.logging.level")," setting. It has a ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),"\nwhich is unique, some ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," value, a ",(0,o.kt)("inlineCode",{parentName:"p"},"desc"),"ription and the data ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of the value which will\nbe important later on when you actually try to change it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"sls")," field is there for metadata on\nhow to handle that configuration internally."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"choices")," field isn't present in all settings, as not all settings are restricted to specific\nvalues. In this case however, it is - you can only set the logging level to a known logging level."),(0,o.kt)("p",null,"There is another field, a ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," field that's present in some integer type settings to define what\nunit the setting is measured in. This is useful for example to distinguish between seconds and\nmilliseconds."),(0,o.kt)("h3",{id:"get-the-current-state-of-configuration-options"},"Get the Current State of Configuration Options"),(0,o.kt)("p",null,"Now that we're familiar with how to see basic information for all configuration options, it's time\nto actually see the values that are saved for them. You can do that by making a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/dongle/settings/?device_id={{device_id}}")," and, same as before, ",(0,o.kt)("inlineCode",{parentName:"p"},"{{device_id}}")," is the primary key\nof your device. A successful request will return another array of JSON objects in the following\nformat:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "9ae810c7-9069-4f7c-83b5-5f88f50aba4a": {\n        "state": "SYNCED",\n        "value": "info"\n    },\n...\n')),(0,o.kt)("p",null,"In this case, the UUID is the one for the ",(0,o.kt)("inlineCode",{parentName:"p"},"system.logging.level")," setting. The ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," field\ndescribes whether the change has been applied to the device. The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," field is the currently\nsaved value for that setting."),(0,o.kt)("h3",{id:"change-settings-and-synchronize-them-with-your-device"},"Change Settings and Synchronize Them With Your Device"),(0,o.kt)("p",null,"Finally, after going through this information, we're able to make a request to change a setting.\nThis time, we're going to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/dongle/settings/?device_id={{device_id}}")," with\na JSON body. It's also important to note here that you do need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," header to\n",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")," as the server will reject the request otherwise. Here's the JSON format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "{{setting_uuid_1}}": {{new_setting_value1}},\n    "{{setting_uuid_2}}": {{new_setting_value2}}\n}\n')),(0,o.kt)("p",null,"Let's take a look at an actual example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "9ae810c7-9069-4f7c-83b5-5f88f50aba4a": "debug"\n}\n')),(0,o.kt)("p",null,"This will ask the server to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"system.logging.level")," setting to a ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," level. If we now\nquery the current settings for our device we can see that the data for that setting has changed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "9ae810c7-9069-4f7c-83b5-5f88f50aba4a": {\n        "state": "MODIFIED",\n        "value": "debug"\n    },\n...\n')),(0,o.kt)("p",null,"Now the setting is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", however it's in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MODIFIED")," state which means that it hasn't\nbeen synced to the device yet. To actually sync the changes, you need to make another ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"/dongle/devices/{{device_id}}/execute/")," with the following request body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "command": "state.sls",\n    "arg": ["pending"],\n    "kwarg": {}\n}\n')),(0,o.kt)("p",null,"Also remember to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," header to ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")," for this request as well. This\nwill trigger the server to push those changes to the device and your device should update soon."),(0,o.kt)("p",null,"With this you should now be able to work with the API that controls the custom settings for your\ndevices."),(0,o.kt)(r.$,{url:"https://community.autopi.io/t/changing-devices-custom-settings-through-rest-api/2438",title:"Changing devices\u2019 custom settings through REST API",mdxType:"Discussion"}))}h.isMDXComponent=!0}}]);