(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[2831],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22885:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"api-intro",title:"Introduction"},l=void 0,u={unversionedId:"getting_started/api/api-intro",id:"getting_started/api/api-intro",isDocsHomePage:!1,title:"Introduction",description:"You are able to use the AutoPi REST API with your browser, which will display our",source:"@site/docs/getting_started/api/index.md",sourceDirName:"getting_started/api",slug:"/getting_started/api/api-intro",permalink:"/getting_started/api/api-intro",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/api/index.md",tags:[],version:"current",frontMatter:{id:"api-intro",title:"Introduction"},sidebar:"getting_startedSidebar",next:{title:"Change Device Settings from the REST API",permalink:"/getting_started/api/change-device-settings-from-api"}},p=[{value:"Authentication",id:"authentication",children:[{value:"API Tokens",id:"api-tokens",children:[]},{value:"JWT Token",id:"jwt-token",children:[]}]},{value:"Sending the Requests Manually Using Postman or Similar",id:"sending-the-requests-manually-using-postman-or-similar",children:[]},{value:"Discussion",id:"discussion",children:[]}],c={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You are able to use the ",(0,i.kt)("a",{parentName:"p",href:"https://api.autopi.io"},"AutoPi REST API")," with your browser, which will display our\nauto-generated documentation portal."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The documentation is auto-generated from our API, which means that the documentation will always reflect the API and\nwill always be up to date, but being auto-generated it unfortunately also does sacrifice some readability, but we\nare working to improve this. And if you find something that you feel is not adequately documented, please let us know."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"api_frontpage",src:n(35834).Z})," "),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"If you want to test the endpoints, you can authenticate in the API documentation portal by setting the token to use\nwhen authenticating. In the picture above you can see there is a green 'Authorize' button which you need to press.\nThis is where you'll be pasting your token."),(0,i.kt)("p",null,"It is possible to authenticate using two different tokens."),(0,i.kt)("h3",{id:"api-tokens"},"API Tokens"),(0,i.kt)("p",null,"It is specifically made for users who want to make requests to the API, and is the recommended way to make\nauthenticated requests to the API."),(0,i.kt)("p",null,"To use the token, send an authorization header like this, in all requests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: APIToken YOUR_TOKEN\n")),(0,i.kt)("h4",{id:"creation-of-the-api-token"},"Creation of the API Token"),(0,i.kt)("p",null,"You can ",(0,i.kt)("strong",{parentName:"p"},"generate the new API Token")," in the AutoPi ",(0,i.kt)("a",{parentName:"p",href:"https://my.autopi.io"},"Cloud"),". Clicking on the in the ",(0,i.kt)("em",{parentName:"p"},"Account tab")," in the side menu gets you to the ",(0,i.kt)("em",{parentName:"p"},"Account Page"),"."),(0,i.kt)("p",null,"On the ",(0,i.kt)("em",{parentName:"p"},"Account")," Page you may see an API Tokens ",(0,i.kt)("em",{parentName:"p"},"tab")," which gets you to the API Token creation part.\nHere you are able to create a new API Token by giving it a name and there is an ",(0,i.kt)("em",{parentName:"p"},"option")," to set an expiration date for the token if you need and clicking the ",(0,i.kt)("em",{parentName:"p"},"Create")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"account_page",src:n(31514).Z})),(0,i.kt)("h3",{id:"jwt-token"},"JWT Token"),(0,i.kt)("p",null,"This token is the one used by the frontend when logging in."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It expires relatively shortly."),(0,i.kt)("li",{parentName:"ul"},"You need to enter you username and password to acquire the token.")),(0,i.kt)("p",null,"You can get the JWT token in two different ways:"),(0,i.kt)("h4",{id:"1-capture-the-token-by-using-the-browser-developer-tools"},"1. Capture the Token by Using the Browser Developer Tools."),(0,i.kt)("p",null,"The easiest way is to capture the token by logging into the Cloud, with the developer tools open in your favourite\nbrowser, with the network tab open, and then skip to step 6 in the below step by step guide."),(0,i.kt)("h4",{id:"2-manually-call-the-auth-endpoint-to-get-the-token"},"2. Manually Call the Auth Endpoint to get the Token."),(0,i.kt)("p",null,"You can follow the steps below to call the login endpoint manually."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Click the "auth" app to fold out the available endpoints.'),(0,i.kt)("li",{parentName:"ol"},'Click the "/auth/login/".'),(0,i.kt)("li",{parentName:"ol"},'Click the "try it out" button to the right.'),(0,i.kt)("li",{parentName:"ol"},"Change the payload to look like this (remove the username field, and fill out the email and password fields, like so:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'   {\n      "email": "your_email",\n      "password": "your_insanely_complex_password"\n   }\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Click the blue "execute" button.'),(0,i.kt)("li",{parentName:"ol"},"Now you can copy the entire token."),(0,i.kt)("li",{parentName:"ol"},'Now click the green "Authorize" button in the top right of the page and paste the token in the field.')),(0,i.kt)("p",null,'Remember to write "Bearer" in front of the token - like so:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.4pXwtyQKCwSrYfcj9O7MGVv5ustPbx0GmYY7jHZL8es\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"After clicking close, you should now be able to call the other authenticated endpoints.")),(0,i.kt)("h2",{id:"sending-the-requests-manually-using-postman-or-similar"},"Sending the Requests Manually Using Postman or Similar"),(0,i.kt)("p",null,"Alternatively, if you are unable to use the above portal, or if you'd rather use something like Postman or similar,\nyou can still see the requests and parameters in the portal, but to call them manually, see the below steps."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authenticating manually w/o interactive API documentation portal"),"\nYou can do the above steps manually by following these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Authentication\nTo obtain an authentication token, send a post request to ",(0,i.kt)("a",{parentName:"p",href:"https://api.autopi.io/auth/login/"},"https://api.autopi.io/auth/login/"),"\nwith header"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Content-Type: application/json\n")),(0,i.kt)("p",{parentName:"li"},"and body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{ "email": "your email address", "password": "your password" }\n')),(0,i.kt)("p",{parentName:"li"},"In the response, you will find the token used to authenticate the below requests")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To request data from our API, the authorization header should be set."),(0,i.kt)("p",{parentName:"li"},'You will need to set the "Authorization" header on the requests. To set the header, use the below values:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"# if you're using a JWT token\nAuthorization: Bearer YOUR_TOKEN\n\n# if you're using an API token\nAuthorization: APIToken YOUR_TOKEN\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using developer tools to see how endpoints are used"),"\nIf you find something where you are unsure how to proceed, you can log in to my.autopi.io and use the developer tools\nof your favourite browser to see the requests and parameters sent by the application, and if you are still experiencing\nissues, you can send us an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io")),(0,i.kt)("p",null,"Happy developing, and as always, if you run into issues, exceptions, have suggestions etc, please let us know."),(0,i.kt)("h2",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community\npage dedicated for this guide: ",(0,i.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/guide-getting-started-with-the-autopi-rest-api/497"},"Guide: Getting started with the AutoPi REST API"),"."))}h.isMDXComponent=!0},31514:function(e,t,n){"use strict";t.Z=n.p+"assets/images/account_overview-a806690fe1aadae78d5d294ec7e1ea71.png"},35834:function(e,t,n){"use strict";t.Z=n.p+"assets/images/api_frontpage-d2e366bace40189a4d20d6cbd45324ac.jpg"}}]);