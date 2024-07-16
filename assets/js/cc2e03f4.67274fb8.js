(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[5962],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99948:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"4g-internet-setup-troubleshooting",title:"4G Internet Setup Troubleshooting"},s=void 0,p={unversionedId:"getting_started/cm4/4g-internet-setup-troubleshooting",id:"getting_started/cm4/4g-internet-setup-troubleshooting",isDocsHomePage:!1,title:"4G Internet Setup Troubleshooting",description:"You are experiencing issues connecting to the internet, when connected to the WiFi hotspot on the AutoPi Dongle.",source:"@site/docs/getting_started/cm4/4g_internet_setup_troubleshooting.md",sourceDirName:"getting_started/cm4",slug:"/getting_started/cm4/4g-internet-setup-troubleshooting",permalink:"/getting_started/cm4/4g-internet-setup-troubleshooting",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/cm4/4g_internet_setup_troubleshooting.md",tags:[],version:"current",frontMatter:{id:"4g-internet-setup-troubleshooting",title:"4G Internet Setup Troubleshooting"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/getting_started/cm4/guides-intro"},next:{title:"Getting Started",permalink:"/getting_started/mini/mini-guides-intro"}},u=[{value:"Prerequisites:",id:"prerequisites",children:[]},{value:"Check SIM Card",id:"check-sim-card",children:[]},{value:"Check Modem on Hardware",id:"check-modem-on-hardware",children:[]},{value:"Check Modem Setup",id:"check-modem-setup",children:[]},{value:"Checking qmi-manager Status",id:"checking-qmi-manager-status",children:[]},{value:"Further Checking of Network",id:"further-checking-of-network",children:[]},{value:"Tweaks",id:"tweaks",children:[]},{value:"Check Connections",id:"check-connections",children:[]},{value:"Discussion",id:"discussion",children:[]}],c={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You are experiencing issues connecting to the internet, when connected to the WiFi hotspot on the AutoPi Dongle. "),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,a.kt)("p",null,"Before following this guide, you must have completed the initial ",(0,a.kt)("a",{parentName:"p",href:"/getting_started/cm4/guides-intro"},"setup guide"),"."),(0,a.kt)("h3",{id:"check-sim-card"},"Check SIM Card"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your SIM card must be setup for data. To check this, insert the SIM into another device, like a smartphone or similar. When inserted in the other device you must be able to browse the web.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you ordered a branded version of the AutoPi (Verizon/AT&T), please verify that the network carrier of the SIM card is the same as the brand of the AutoPi.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that the SIM card is not pin locked and if it is that you have entered the pin code in the settings. "))),(0,a.kt)("h3",{id:"check-modem-on-hardware"},"Check Modem on Hardware"),(0,a.kt)("p",null,"In the terminal on the WiFi, check that the modem has been found. This can be done by writing the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "lsusb" ')),(0,a.kt)("p",null,"The output of the command should be similar to this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"lsusb",src:n(61629).Z})),(0,a.kt)("p",null,"The important part to look for is the Modem. The ID will be different depending on which modem your device is equipped with:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Modem Manufacturer")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"ID")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Quectel"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2c7c:0121"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Telit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1bc7:1031"))))),(0,a.kt)("p",null,"If you ordered a 4G edition and you don't find the modem in your list, then please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io")),(0,a.kt)("h3",{id:"check-modem-setup"},"Check Modem Setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check PDP Context:"),(0,a.kt)("br",{parentName:"p"}),"\n","If your devices is using a Telit Modem is using software version 1.22.7 or newer,\nThere's a command you can run to verify that the modem has been set up correctly. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modem.connection pdp_context")),(0,a.kt)("p",null,"This should return a message that looks like either."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"value:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"- apn: ''"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"cid: 1"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"pdp_type: IPV4V6"),"  "),(0,a.kt)("p",null,"or",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"value:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"- apn: ''"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"cid: 1"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"pdp_type: IPV4V6"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"- apn: 'ims'"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"cid: 2"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"pdp_type: IPV4V6"),"  "),(0,a.kt)("p",null,"Incase your software version is older than 1.22.7, you can run the following command to get the same information. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modem.connection execute AT+CGDCONT?")),(0,a.kt)("p",null,"This should return a message that looks like either. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'data: \'+CGDCONT: 1, "IPV4V6","",0,0,0,0\''),(0,a.kt)("br",{parentName:"p"}),"\n","or",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Data:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},'- \'+CGDCONT:1,"IPV4V6","",0,0,0,0\''),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},'- \'+CGDCONT:2,"IPV4V6","ims","",0,0,0,0\'')),(0,a.kt)("p",null,"If you get the second message after running either command then you can reconfigure the modem by running these three commands."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "systemctl stop qmi-manager"')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modem.connection execute AT+CGDCONT=2")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "systemctl restart qmi-manager"')),(0,a.kt)("p",null,"After restarting your devices you can run the first command again to verify you get the first message. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check Firmware Switch:"),(0,a.kt)("br",{parentName:"p"}),"\n","Check if the firmware switch is set correctly by running this command if you are using software version 1.22.7 or newer."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modem.connection active_firmware_image"),"  "),(0,a.kt)("p",null,"this should return a message that looks like this.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'_stamp: "the curent date"'),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"_type: active_firmware_image"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"net_conf:global"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"storage_conf: ram"),(0,a.kt)("br",{parentName:"p"}),"\n","Here we are looking to see if the net_conf is set to global."),(0,a.kt)("p",null,"Incase your software version is older than 1.22.7, you can run the following command to get the same informaiton.  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modem.connection execute AT#FWSWITCH?")),(0,a.kt)("p",null,"This should return with a message that looks like this. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data:'FWSWITCH:40:1'"),"  "),(0,a.kt)("p",null,"Incase the FWSWITCH does not start with 40 or net_conf is not global this can be reconfigured manually by running the following command."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modem.connection execute AT#FWSWITCH=40,1")),(0,a.kt)("h3",{id:"checking-qmi-manager-status"},"Checking qmi-manager Status"),(0,a.kt)("p",null,"The device contains a software manager, which ensure stable connection to the internet. This is called qmi-manager. To check status, please write the following command in the terminal:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "qmi-manager status"')),(0,a.kt)("p",null,"The output should be similar what you can see in the image below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"qmistatus",src:n(11892).Z})),(0,a.kt)("h3",{id:"further-checking-of-network"},"Further Checking of Network"),(0,a.kt)("p",null,"If your device still isn't online, you can try running the following two commands. They will tell you a bit more about why the network manager fails:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "qmi-manager down"'),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "qmi-manager up"')),(0,a.kt)("p",null,"If the last command reports issue with detecting the SIM card, then double check the orientation of the SIM card and try again."),(0,a.kt)("h3",{id:"tweaks"},"Tweaks"),(0,a.kt)("p",null,"If you experience connection issues where the connection drops sometimes and/or if it is online, but not shown as online on my.autopi.io, then you can try to tweak the MTU from the default value: 1500, to a lower value, in increments (ex. 1500 -> 1450 -> etc).\nThis can be done on the local configuration tool, by connecting to the device hotspot and opening local.autopi.io in your browser."),(0,a.kt)("p",null,"From the terminal located in the top right corner on the webpage, you can run the following two commands to update the MTU and save the changes."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"grains.set qmi:mtu xxxx"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"state.sls network.wwan.qmi.config")),(0,a.kt)("p",null,"To verify that these changes have been saved, you can run the following two commands, here you want to check that first command retruns the same value you set, and that the seconed command where mtu= the same value as the one we set.    "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"grains.get qmi:mtu"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "cat /etc/udhcpc/qmi.override"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For US Verizon customers, please try this MTU: 1428.     "),(0,a.kt)("li",{parentName:"ul"},"For other customer, please try this MTU: 1280.")),(0,a.kt)("p",null,"If the connection is still not online, then please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io")," for additional help."),(0,a.kt)("h3",{id:"check-connections"},"Check Connections"),(0,a.kt)("p",null,"You can to check if the device can connect to the internet though the 4g connection you can run the following command."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "ping -c 5 -I wwan0 google.com"')),(0,a.kt)("p",null,"You can also check the connection to the autopi cloud service by running the following command. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cmd.run "curl -v my.autopi.io"')),(0,a.kt)("h3",{id:"discussion"},"Discussion"),(0,a.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide:\n",(0,a.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/4g-internet-setup-troubleshooting/235"},"4G internet setup troubleshooting")))}m.isMDXComponent=!0},61629:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lsusb-5f720494e7c939aced31596788e0738a.jpg"},11892:function(e,t,n){"use strict";t.Z=n.p+"assets/images/qmistatus-6ad71a946e4c0f10d004161b3bdb9339.jpg"}}]);