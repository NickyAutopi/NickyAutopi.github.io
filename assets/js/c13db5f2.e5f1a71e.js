(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[3661],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72357:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"command-webhook-callbacks",title:"Command Webhook Callbacks"},c=void 0,l={unversionedId:"getting_started/api/command-webhook-callbacks",id:"getting_started/api/command-webhook-callbacks",isDocsHomePage:!1,title:"Command Webhook Callbacks",description:"It is possible to get notified via webhook when a command completes on a device.",source:"@site/docs/getting_started/api/command-callbacks.md",sourceDirName:"getting_started/api",slug:"/getting_started/api/command-webhook-callbacks",permalink:"/getting_started/api/command-webhook-callbacks",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/api/command-callbacks.md",tags:[],version:"current",frontMatter:{id:"command-webhook-callbacks",title:"Command Webhook Callbacks"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/getting_started/api/api-intro"},next:{title:"Change Device Settings from the REST API",permalink:"/getting_started/api/change-device-settings-from-api"}},d=[{value:"Overview",id:"overview",children:[]},{value:"1. Executing a Command With Callback",id:"1-executing-a-command-with-callback",children:[]},{value:"2. Getting Notified by the Webhook Request.",id:"2-getting-notified-by-the-webhook-request",children:[]},{value:"3. Debugging: Getting Information About the Scheduled Callback",id:"3-debugging-getting-information-about-the-scheduled-callback",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to get notified via webhook when a command completes on a device."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Execute command through the API"),(0,i.kt)("li",{parentName:"ol"},"If the device does respond, a webhook request is sent with the result of the command."),(0,i.kt)("li",{parentName:"ol"},"If the device does not respond, it will eventually time out (default timeout: 120 seconds), and this will cause a timeout request to be sent to your server. ")),(0,i.kt)("p",null,"Note that if the device responds with a command result after the timeout, it will still send the ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMAND_EXECUTED")," payload, even after the ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," payload has been sent."),(0,i.kt)("h3",{id:"1-executing-a-command-with-callback"},"1. Executing a Command With Callback"),(0,i.kt)("p",null,"The way this works is that if you specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"callback_url")," field when sending a request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dongle/devices/{id}/execute/")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/dongle/devices/{id}/execute_raw/")," endpoint, the server will send a callback to the requested url when the server receives the response from the device."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The fields that contains the command and arguments for the two endpoints are a bit different, but the callback fields is the same for both of them. "),(0,i.kt)("p",{parentName:"div"},"See the difference in the autogenerated ",(0,i.kt)("a",{parentName:"p",href:"https://api.autopi.io/#/dongle/dongle_devices_execute_command"},"API documentation")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'POST /dongle/devices/{DEVICE_ID}/execute[_raw]/\n{\n    "command": "{COMMAND}",\n    "callback_url": "{CALLBACK_URL}",\n    "callback_timeout": 1-600 // default 120 seconds\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jid": "{JOB_ID}",\n    "minions": [\n        "{UNIT_ID}"\n    ]\n}\n')),(0,i.kt)("h3",{id:"2-getting-notified-by-the-webhook-request"},"2. Getting Notified by the Webhook Request."),(0,i.kt)("p",null,"The request sent to your server looks like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'HEADERS\n{\n    \'Content-Type\': \'application/json\',\n    \'X-Request-Signature\': {HMAC_SIGNATURE},\n}\n\nBODY\n{\n    "response": {\n        "tag": "salt/job/{JOB_ID}/ret/{UNIT_ID}",\n        "data": {\n            "fun_args": [],\n            "jid": "{JOB_ID}",\n            "return": true,\n            "retcode": 0,\n            "success": true,\n            "cmd": "_return",\n            "_stamp": "2022-01-01T00:00:00.000000",\n            "fun": "{COMMAND}",\n            "id": "{UNIT_ID}"\n        }\n    },\n    "jid": "{JOB_ID}",\n    "state": "COMMAND_EXECUTED" | "TIMEOUT",\n    "success": true,\n    "device_id": {DEVICE_ID}\n}\n')),(0,i.kt)("h4",{id:"verifying-the-requests-using-the-hmac-signature"},"Verifying the Requests Using the HMAC Signature."),(0,i.kt)("p",null,"The response contains a HMAC sign in the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Request-Signature")," header that can be used to verify the integrity of the webhook request.\nThe response json is signed with HMAC SHA-256 using the Authorization header used for executing the command (Without the 'APIToken' or 'Bearer' part)."),(0,i.kt)("p",null,"Example python code that verifies the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import hmac\nimport hashlib\n\nsecret = "API Token or JWT token without Bearer or APIToken postfix"\nwebhook_signature = "xxxxxxxxxxx"\n\njson_body = "{}"\n\ncalculated_signature = hmac.new(hmac_secret.encode(\'utf-8\'), json_body, hashlib.sha256).hexdigest()\nvalid = hmac.compare_digest(calculated_signature, webhook_signature)\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Each response always includes a unique job id, so no two request signatures are the same."))),(0,i.kt)("h3",{id:"3-debugging-getting-information-about-the-scheduled-callback"},"3. Debugging: Getting Information About the Scheduled Callback"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/dongle/devices/{DEVICE_ID}/callback/{JOB_ID}/")," endpoint allows you to get the callback object from our system."),(0,i.kt)("p",null,"Each callback will be stored in our system for 2 days before automatically expiring."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'GET /dongle/devices/{DEVICE_ID}/callback/{JOB_ID}/\n{\n    // Contains all requests that are sent to your server, it will retry the request up to 5 times.\n    "sent_requests": [\n        {\n            "timestamp": "2022-01-01T00:00:00.000000Z",\n            "state": "COMMAND_EXECUTED",\n            "success": true,\n            "response_statuscode": 200\n        }\n    ],\n    "url": "{CALLBACK_URL}",\n    "timestamp": "2022-01-01T00:00:00.000000Z",\n    // uuid used internally for keeping track of the timeout task.\n    "timeout_task_id": "UUID",\n    // Information about the command executed\n    "command": {\n        "returner": null,\n        "command": "{COMMAND}",\n        "arg": []\n    },\n    // The timeout valud used for the callback.\n    "timeout": 60,\n    "device_id": "{DEVICE_ID}"\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The response will look different based on what command was executed."),(0,i.kt)("p",{parentName:"div"},"If you execute a module, the response will look like the above, but if you instead trigger a state run, like if you use want to sync the pending changes to the device ",(0,i.kt)("inlineCode",{parentName:"p"},"state.sls pending"),", then the response will include the whole result of the pending states that was executed."))))}m.isMDXComponent=!0}}]);