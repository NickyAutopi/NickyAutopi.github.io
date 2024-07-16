(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[8893],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56367:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),a=["components"],c={id:"core-services-gnss-manager",title:"Gnss Manager"},s=void 0,l={unversionedId:"core/services/core-services-gnss-manager",id:"core/services/core-services-gnss-manager",isDocsHomePage:!1,title:"Gnss Manager",description:"Converters",source:"@site/docs/core/services/gnss_manager.md",sourceDirName:"core/services",slug:"/core/services/core-services-gnss-manager",permalink:"/core/services/core-services-gnss-manager",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/core/services/gnss_manager.md",tags:[],version:"current",frontMatter:{id:"core-services-gnss-manager",title:"Gnss Manager"},sidebar:"sidebar",previous:{title:"Event Reactor",permalink:"/core/services/core-services-event-reactor"},next:{title:"Key Fob Manager",permalink:"/core/services/core-services-key-fob-manager"}},d=[{value:"Converters",id:"converters",children:[{value:"<code>gnss_location_to_position</code>",id:"gnss_location_to_position",children:[]},{value:"<code>nmea_gga_to_dict</code>",id:"nmea_gga_to_dict",children:[]},{value:"<code>nmea_vtg_to_dict</code>",id:"nmea_vtg_to_dict",children:[]}]},{value:"Filters",id:"filters",children:[{value:"<code>significant_position</code>",id:"significant_position",children:[]}]},{value:"Handlers",id:"handlers",children:[{value:"<code>connection</code>",id:"connection",children:[]},{value:"<code>nmea0183_readout</code>",id:"nmea0183_readout",children:[]}]},{value:"Triggers",id:"triggers",children:[{value:"<code>position_event</code>",id:"position_event",children:[]}]}],u={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"converters"},"Converters"),(0,o.kt)("h3",{id:"gnss_location_to_position"},(0,o.kt)("inlineCode",{parentName:"h3"},"gnss_location_to_position")),(0,o.kt)("p",null,"Converts a GNSS location result into position type."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nmea_gga_to_dict"},(0,o.kt)("inlineCode",{parentName:"h3"},"nmea_gga_to_dict")),(0,o.kt)("p",null,"Parses NMEA0183 GGA messages to a dictionary that can be serialized."),(0,o.kt)("p",null,"Example values:"),(0,o.kt)("p",null,"$GPGGA,143824.00,5702.167555,N,00956.116128,E,1,09,0.6,13.9,M,43.0,M,,",(0,o.kt)("em",{parentName:"p"},"55\n$GPGGA,,,,,,0,,,,,,,,"),"66"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nmea_vtg_to_dict"},(0,o.kt)("inlineCode",{parentName:"h3"},"nmea_vtg_to_dict")),(0,o.kt)("p",null,"Parses NMEA0183 VTG messages to a dictionary that can be serialized."),(0,o.kt)("p",null,"Example values:"),(0,o.kt)("p",null,"$GPVTG,,T,0.3,M,0.0,N,0.0,K,A",(0,o.kt)("em",{parentName:"p"},"0E\n$GPVTG,,T,,M,,N,,K,N"),"2C"),(0,o.kt)("h2",{id:"filters"},"Filters"),(0,o.kt)("h3",{id:"significant_position"},(0,o.kt)("inlineCode",{parentName:"h3"},"significant_position")),(0,o.kt)("p",null,"Filter that only returns significant non duplicated positions."),(0,o.kt)("h2",{id:"handlers"},"Handlers"),(0,o.kt)("h3",{id:"connection"},(0,o.kt)("inlineCode",{parentName:"h3"},"connection")),(0,o.kt)("p",null,"Queries a given command down to the connection class."),(0,o.kt)("p",null,"Argumnets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cmd (str): The command to query.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nmea0183_readout"},(0,o.kt)("inlineCode",{parentName:"h3"},"nmea0183_readout")),(0,o.kt)("p",null,"Read and parse all available NMEA0183 sentences through serial connection."),(0,o.kt)("h2",{id:"triggers"},"Triggers"),(0,o.kt)("h3",{id:"position_event"},(0,o.kt)("inlineCode",{parentName:"h3"},"position_event")),(0,o.kt)("p",null,"Listens for position results and triggers position unknown/standstill/moving events."))}p.isMDXComponent=!0}}]);