(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[670],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8880:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),l=n(19756),i=(n(67294),n(3905)),o=["components"],a={id:"core-commands-fileutil",title:"Fileutil"},u=void 0,c={unversionedId:"core/commands/core-commands-fileutil",id:"core/commands/core-commands-fileutil",isDocsHomePage:!1,title:"Fileutil",description:"fileutil.grep",source:"@site/docs/core/commands/fileutil.md",sourceDirName:"core/commands",slug:"/core/commands/core-commands-fileutil",permalink:"/core/commands/core-commands-fileutil",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/commands/fileutil.md",tags:[],version:"current",frontMatter:{id:"core-commands-fileutil",title:"Fileutil"},sidebar:"sidebar",previous:{title:"Ec2X",permalink:"/core/commands/core-commands-ec2x"},next:{title:"Gnss",permalink:"/core/commands/core-commands-gnss"}},p=[{value:"<code>fileutil.grep</code>",id:"fileutilgrep",children:[]},{value:"<code>fileutil.line_count</code>",id:"fileutilline_count",children:[]},{value:"<code>fileutil.load_yaml</code>",id:"fileutilload_yaml",children:[]},{value:"<code>fileutil.remove_all</code>",id:"fileutilremove_all",children:[]},{value:"<code>fileutil.upload</code>",id:"fileutilupload",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fileutilgrep"},(0,i.kt)("inlineCode",{parentName:"h2"},"fileutil.grep")),(0,i.kt)("p",null,"Match lines in a text file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pattern"))," (str): Regex pattern to match."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"file"))," (str): File to search in.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tail_lines"))," (int): How many of the last matched lines should be included? Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to include all lines. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fileutilline_count"},(0,i.kt)("inlineCode",{parentName:"h2"},"fileutil.line_count")),(0,i.kt)("p",null,"Returns count of new line characters in a file."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fileutilload_yaml"},(0,i.kt)("inlineCode",{parentName:"h2"},"fileutil.load_yaml")),(0,i.kt)("p",null,"Load a file as YAML or return default."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fileutilremove_all"},(0,i.kt)("inlineCode",{parentName:"h2"},"fileutil.remove_all")),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"file.remove")," but with many at once."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fileutilupload"},(0,i.kt)("inlineCode",{parentName:"h2"},"fileutil.upload")),(0,i.kt)("p",null,"Uploads a file (by default gzipped) to a service."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ARGUMENTS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"path"))," (str): Path to the file.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"gzip"))," (bool): Gzip it? Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"service"))," (str): The service to be used (Possible: ",(0,i.kt)("inlineCode",{parentName:"li"},"dropbox"),"). Default is None."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"token"))," (str): The token to use when uploading (Required when using ",(0,i.kt)("inlineCode",{parentName:"li"},"dropbox")," service)")))}d.isMDXComponent=!0}}]);