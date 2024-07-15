(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[1790],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66180:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"software-updates",title:"Software Updates"},d=void 0,u={unversionedId:"cloud/device_management/software-updates",id:"cloud/device_management/software-updates",isDocsHomePage:!1,title:"Software Updates",description:"In this section, we'll first review how you can update your device and then will move on to reviewing",source:"@site/docs/cloud/device_management/software-updates.md",sourceDirName:"cloud/device_management",slug:"/cloud/device_management/software-updates",permalink:"/cloud/device_management/software-updates",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/cloud/device_management/software-updates.md",tags:[],version:"current",frontMatter:{id:"software-updates",title:"Software Updates"},sidebar:"cloudSidebar",previous:{title:"Move Device to a Dedicated Environment",permalink:"/cloud/device_management/move-to-dedicated-environment"},next:{title:"Introduction",permalink:"/cloud/fleet/fleet-intro"}},l=[{value:"Updating Your Device",id:"updating-your-device",children:[{value:"Update Through the Cloud",id:"update-through-the-cloud",children:[]},{value:"Update With a Command",id:"update-with-a-command",children:[]},{value:"Check if Your Device is Already Performing an Update",id:"check-if-your-device-is-already-performing-an-update",children:[]}]},{value:"Viewing Update Attempts",id:"viewing-update-attempts",children:[]}],p={toc:l};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we'll first review how you can update your device and then will move on to reviewing\nyour device's update attempts."),(0,i.kt)("h2",{id:"updating-your-device"},"Updating Your Device"),(0,i.kt)("p",null,"You can update your device in two main ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update through the Cloud"),(0,i.kt)("li",{parentName:"ol"},"Update with a command")),(0,i.kt)("h3",{id:"update-through-the-cloud"},"Update Through the Cloud"),(0,i.kt)("p",null,"This is the method used most often to update a device, as it allows the rest of the system to interact\nwith the device nicely. To update the device, we will first navigate over to the Software Updates page\nof the Cloud (",(0,i.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"my.autopi.io"),"). There you'll see a page similar to the screenshot\nbelow."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"software-updates-page",src:n(92767).Z})),(0,i.kt)("p",null,"On the right-hand side, at the top of the page, there is the 'Queue Update' button. If your device\ndoesn't have automatic updates enabled (which is the default behavior), you'll need to manually\nqueue the update. Once you press the button, an update will be queued and you'll be asked if you\nwant to update the device right now."),(0,i.kt)("p",null,"If you don't update the device right now, the device will try to perform the update before going to\nsleep. Whether or not the update is performed successfully, the device will go to sleep right after,\nbut if the update failed, it will be retried after it wakes up every time until the update goes\nthrough."),(0,i.kt)("p",null,"In case you ",(0,i.kt)("em",{parentName:"p"},"have"),' enabled automatic updates for your device, then the device will attempt those\nupdates as soon as they are available based on the setting you\'ve set. That can either be "Before\nsleep" or "At start (or before sleep)".'),(0,i.kt)("h3",{id:"update-with-a-command"},"Update With a Command"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be careful with this update procedure. If you're trying to update your device, we recommend that you\nfollow the steps above (Update Through the Cloud), as they are the standard way of updating your\ndevices. However, in certain cases, you might need to manually ask the device to update, which is\nwhy we have this section here."))),(0,i.kt)("p",null,"To perform a manual update on your device, you can run the command below through the web terminal.\nUsing this method will still show an update attempt on the Software Updates page in case you need\nto review the update afterwards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minionutil.update_release force=True\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only run this command through the web terminal, not through the device itself. Otherwise, you might\nnot receive the correct update, as the device might not be able to fetch certain files to perform\nthe correct update"))),(0,i.kt)("h3",{id:"check-if-your-device-is-already-performing-an-update"},"Check if Your Device is Already Performing an Update"),(0,i.kt)("p",null,"There are two general ways that you can determine if an update is currently being run on your device:\nusing the events or by running a command."),(0,i.kt)("h4",{id:"events"},"Events"),(0,i.kt)("p",null,"One of the ways to determine if the device is being updated right now is to check the Events page\nunder Advanced > Events. Here, we're looking for ",(0,i.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-system#release-events"},(0,i.kt)("inlineCode",{parentName:"a"},"system/release/*")),"\nevents, more specifically the ",(0,i.kt)("inlineCode",{parentName:"p"},"system/release/pending"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"system/release/retrying")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"system/release/forcing"),"\nevents. All of those events signify that the device had started an update attempt. If you see a\n",(0,i.kt)("inlineCode",{parentName:"p"},"system/release/failed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"system/release/updated")," or an event that means the device ",(0,i.kt)("a",{parentName:"p",href:"/cloud/device_management/events/cloud-events-system#power-events"},"shut down"),",\nthen the device has likely stopped updating."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It is also possible to fetch the events from the reactor cache with the following command, directly on the device")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reactor.manage context cache")),(0,i.kt)("p",null,"If this list of events contains the above mentioned ",(0,i.kt)("inlineCode",{parentName:"p"},"system/release/pending"),", that means the device us currently applying the update.\nEither during the ",(0,i.kt)("inlineCode",{parentName:"p"},"startup")," states, or during the ",(0,i.kt)("inlineCode",{parentName:"p"},"power.sleep")," command."),(0,i.kt)("h4",{id:"running-saltutilrunning"},"Running ",(0,i.kt)("inlineCode",{parentName:"h4"},"saltutil.running")),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"saltutil.running")," command you can check the jobs the device is currently running. Using this command,\nyou can also determine if your device is currently updating. Here are two general responses you may get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ saltutil.running\n- fun: state.sls\n  jid: req\n  pid: 1124\n  ret: ''\n  arg:\n    - - startup\n")),(0,i.kt)("p",null,"The above response is returned usually when the device has just booted up. It signifies that the\n",(0,i.kt)("inlineCode",{parentName:"p"},"startup")," state is being executed (there is a small startup procedure whenever the device starts up\nand is connected to the server). If you have enqueued an update or your device is setup to try the\nupdate as soon as it starts up, a response like the one above would mean that the update is being\nattempted. Let's take a look at the next possible response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ saltutil.running\n- jid: '20220610114357378648'\n  pid: 1630\n  _stamp: '2022-06-10T11:43:57.382915'\n  ret: event_result\n  arg:\n    - shutdown\n    - pillar:\n        allow_auto_update: true\n      __kwarg__: true\n  fun: state.sls\n- tgt_type: glob\n  jid: '20220610114357091317'\n  tgt: 629c06b123213bf84126afecd44a0340\n  pid: 1627\n  ret: ''\n  user: 2\n  arg:\n    - __kwarg__: true\n      confirm: true\n  fun: power.sleep\n")),(0,i.kt)("p",null,"This one is a bit more complex to look at, but there are a few key things to look at here. The response shows\nus that there are two jobs running - let's start with the second job. That job tells the reader that the device is\ngoing to go to sleep (notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"fun: power.sleep")," line). The ",(0,i.kt)("inlineCode",{parentName:"p"},"power.sleep")," function will put the device\nto sleep, but first, it will execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"shutdown")," state. That ",(0,i.kt)("inlineCode",{parentName:"p"},"shutdown")," state is the first job on the list\nreturned above and it is the one that triggers the update as well. Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_auto_update: true"),' argument,\nwhich signifies the device is most likely attempting the update right now. This type of response is usually seen\nwhen the device has been "forced" to update or it has been setup to attempt updates right before shutting down.'),(0,i.kt)("h2",{id:"viewing-update-attempts"},"Viewing Update Attempts"),(0,i.kt)("p",null,"You are able to review the update release attempts (aka Update Release Runs). They show the update\nprocedure, which operations (states) have been completed successfully and which haven't. There are\nthree times of operations (states) that you can see in an update release run - successful, changed\nand failed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"update-release-run",src:n(70617).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Successful states are states that have been executed without error, but have made no changes on\nthe device."),(0,i.kt)("li",{parentName:"ul"},"Changed states are states that have been executed without error and have made a change on the\ndevice."),(0,i.kt)("li",{parentName:"ul"},"Failed states are states that have been executed with an error. Those states usually have comments\nto try and explain what has gone wrong.")))}c.isMDXComponent=!0},92767:function(e,t,n){"use strict";t.Z=n.p+"assets/images/software-updates-page-23d96fe521fc59d5d0d255ed3fc5e34b.jpg"},70617:function(e,t,n){"use strict";t.Z=n.p+"assets/images/viewing-update-release-run-31aabeb3b8266a1ea183d2200ea7f164.jpg"}}]);