(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2768],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},22943:function(e,t,o){"use strict";o.d(t,{$:function(){return r}});var n=o(67294),r=function(e){var t=e.title,o=e.url;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Discussion"),n.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",n.createElement("a",{href:o},t),"."),n.createElement("p",null,"You can also write us an email on ",n.createElement("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}},94691:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=o(22122),r=o(19756),i=(o(67294),o(3905)),l=o(22943),a=["components"],u={id:"local-development-workflow",title:"Local Development Workflow"},s=void 0,p={unversionedId:"getting_started/developer_guides/local-development-workflow",id:"getting_started/developer_guides/local-development-workflow",isDocsHomePage:!1,title:"Local Development Workflow",description:"When doing development with the AutoPi, it is possible to do it all through the Cloud.",source:"@site/docs/getting_started/developer_guides/local_development_workflow.mdx",sourceDirName:"getting_started/developer_guides",slug:"/getting_started/developer_guides/local-development-workflow",permalink:"/getting_started/developer_guides/local-development-workflow",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/developer_guides/local_development_workflow.mdx",tags:[],version:"current",frontMatter:{id:"local-development-workflow",title:"Local Development Workflow"},sidebar:"getting_startedSidebar",previous:{title:"Jumpers",permalink:"/getting_started/developer_guides/jumpers"},next:{title:"Reflashing Your Device",permalink:"/getting_started/developer_guides/reflashing-your-device"}},c=[{value:"Development on RPI With Screen and Keyboard or SSH",id:"development-on-rpi-with-screen-and-keyboard-or-ssh",children:[]},{value:"Remote Development on Dev Machine",id:"remote-development-on-dev-machine",children:[]}],d={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When doing development with the AutoPi, it is possible to do it all through the Cloud."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make changes"),(0,i.kt)("li",{parentName:"ol"},"Push changes to device"),(0,i.kt)("li",{parentName:"ol"},"Restart services"),(0,i.kt)("li",{parentName:"ol"},"Execute module"),(0,i.kt)("li",{parentName:"ol"},"Go to step 1")),(0,i.kt)("p",null,"But while this process can be used, it is much too slow for actual development. So the Cloud should\nbe used for management and to push out code when the development has finished, and not in the\nactual development workflow."),(0,i.kt)("p",null,"Fortunately, there are other much faster alternatives, here are a few ways to do it."),(0,i.kt)("h2",{id:"development-on-rpi-with-screen-and-keyboard-or-ssh"},"Development on RPI With Screen and Keyboard or SSH"),(0,i.kt)("p",null,"You could instead SSH into the device and edit the files directly. When syncing from the cloud,\nthe modules will be put in the following directories, based on the type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/opt/autopi/salt/modules"),(0,i.kt)("li",{parentName:"ul"},"/opt/autopi/salt/returners"),(0,i.kt)("li",{parentName:"ul"},"/opt/autopi/salt/utils"),(0,i.kt)("li",{parentName:"ul"},"/opt/autopi/salt/engines"),(0,i.kt)("li",{parentName:"ul"},"/opt/autopi/salt/states")),(0,i.kt)("p",null,"So you can simply edit/create the files directly, but make sure to avoid clashes with the cloud\nsynced modules, to prevent losing work if you sync the module from the cloud, as that will, without\nasking, overwrite the file on the device, even if you have made local changes to it."),(0,i.kt)("p",null,"When you make changes to the files, to make sure that the minion process picks up on the change,\nyou can either restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"salt-minion")," service, or run this command ",(0,i.kt)("inlineCode",{parentName:"p"},"saltutil.refresh_modules"),"\nwhich reloads the external modules, i.e. your code."),(0,i.kt)("h2",{id:"remote-development-on-dev-machine"},"Remote Development on Dev Machine"),(0,i.kt)("p",null,"Alternatively, another workflow can be to have a script on your development machine that copies\nthe files to the device via ",(0,i.kt)("a",{parentName:"p",href:"https://www.computerhope.com/unix/scp.htm"},(0,i.kt)("inlineCode",{parentName:"a"},"scp")),", that way you can\nmake the changes in your favorite editor. Remember to have the script also either restart the\nminion service or run the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_modules")," command as noted above. Doing development on the local\nmachine is preferable for many, and is also the way we do development in office as it has the\nbenefit of the above solution, but also allows the user to be as productive as possible by in their\npreferred development environment."),(0,i.kt)("p",null,"We hope this helps you get started developing with our device and platform."),(0,i.kt)("p",null,"Remember that we also offer additional more in-depth paid support to get you started with your\nproject: ",(0,i.kt)("a",{parentName:"p",href:"https://shop.autopi.io/products/development-voucher"},"https://shop.autopi.io/products/development-voucher")),(0,i.kt)(l.$,{title:"Local Development Workflow",url:"https://community.autopi.io/t/guide-local-development-workflow/1800",mdxType:"Discussion"}))}m.isMDXComponent=!0}}]);