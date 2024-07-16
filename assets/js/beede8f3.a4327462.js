(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[7153],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),g=d(a),u=n,c=g["".concat(p,".").concat(u)]||g[u]||s[u]||o;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},22943:function(t,e,a){"use strict";a.d(e,{$:function(){return n}});var r=a(67294),n=function(t){var e=t.title,a=t.url;return r.createElement(r.Fragment,null,r.createElement("h2",null,"Discussion"),r.createElement("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on our community page dedicated for this guide: ",r.createElement("a",{href:a},e),"."),r.createElement("p",null,"You can also write us an email on ",r.createElement("a",{href:"mailto:support@autopi.io"},"support@autopi.io"),". We usually respond back in 24 hours on working days."))}},31385:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=a(22943),l=["components"],p={id:"export-data-from-api",title:"Export Data from API"},d=void 0,m={unversionedId:"getting_started/api/export-data-from-api",id:"getting_started/api/export-data-from-api",isDocsHomePage:!1,title:"Export Data from API",description:"The API has endpoints that allows the user to retrieve all the telemetry data from devices.",source:"@site/docs/getting_started/api/export_data_from_api.mdx",sourceDirName:"getting_started/api",slug:"/getting_started/api/export-data-from-api",permalink:"/getting_started/api/export-data-from-api",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/getting_started/api/export_data_from_api.mdx",tags:[],version:"current",frontMatter:{id:"export-data-from-api",title:"Export Data from API"},sidebar:"sidebar",previous:{title:"Change Device Settings from the REST API",permalink:"/getting_started/api/change-device-settings-from-api"},next:{title:"Send Device Data to Own Server",permalink:"/getting_started/api/send-device-data-to-own-server"}},s=[{value:"Aggregated Data",id:"aggregated-data",children:[{value:"Example",id:"example",children:[]},{value:"Field",id:"field",children:[]}]},{value:"Raw Data",id:"raw-data",children:[{value:"Example",id:"example-1",children:[]}]},{value:"How to Export Trips",id:"how-to-export-trips",children:[]}],g={toc:s};function u(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The API has endpoints that allows the user to retrieve all the telemetry data from devices.\nThere is two different endpoint available."),(0,o.kt)("h2",{id:"aggregated-data"},"Aggregated Data"),(0,o.kt)("p",null,"This data is aggregated by interval and a method (average, min, max), and is among other\nthings used for the charts in our frontend dashboard."),(0,o.kt)("p",null,"The aggregated data can be retrieved by using this endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /logbook/storage/read/\n")),(0,o.kt)("p",null,"Additional API documentation here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io/#/logbook/logbook_storage_read_list"},"https://api.autopi.io/#/logbook/logbook_storage_read_list")),(0,o.kt)("p",null,"The endpoint takes the following parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"device_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the device ",(0,o.kt)("strong",{parentName:"td"},"(not the unit_id)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"field"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The field that the value should be retrieved from. See 'Field' below")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"field_type"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The type of the field. See 'Field' below. ","[float, geo_point, string, long]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"from_utc"),(0,o.kt)("td",{parentName:"tr",align:"left"},'From time in UTC. ISO format. "2020-01-01T00:00:00.000Z"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"to_utc"),(0,o.kt)("td",{parentName:"tr",align:"left"},'To time in UTC. ISO format. "2020-01-01T00:00:00.000Z"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"interval"),(0,o.kt)("td",{parentName:"tr",align:"left"},"This is the interval to use when aggregating. ie. data for 24 hour queried with interval set to '1h' will return 24 data points, one for each hour. Ignored when aggregation is set to 'none'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"aggregation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Method used when aggregating data into the specified interval. ","[average, min, max, none]",".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"size"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Only used when aggregation is set to 'none', and will then return non aggregated values.")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"How get logged altitude aggregated into 1 minute average values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /logbook/storage/read/\n    ?device_id=6a6c53b5-e18e-4301-9c95-2516006bf7c6\n    &field=track.pos.alt\n    &field_type=float\n    &aggregation=avg\n    &from_utc=2020-07-06T10:03:36.352Z\n    &to_utc=2020-07-06T12:18:14.050Z\n    &interval=1m\n")),(0,o.kt)("h3",{id:"field"},"Field"),(0,o.kt)("p",null,"To know which fields you can retrieve data from, you can get the list from the following endpoint:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io/#/logbook/logbook_storage_fields_list"},"https://api.autopi.io/#/logbook/logbook_storage_fields_list")),(0,o.kt)("p",null,"This will return all the available fields that can be queried, including the type of the field.\nThe data type can be derived from the fields, like so:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Datatype"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.speed.value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.speed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.bat.level"),(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.bat")))),(0,o.kt)("p",null,"etc."),(0,o.kt)("p",null,"This is the list of data types currently available from a standard device."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Datatype"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"acc.xyz")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ec2x.data_usage")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.ambiant_air_temp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.bat")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.coolant_temp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.engine_load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.fuel_level")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.intake_temp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.rpm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"obd.speed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"rpi.temp")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"track.pos")))),(0,o.kt)("p",null,"\u200b"),(0,o.kt)("h2",{id:"raw-data"},"Raw Data"),(0,o.kt)("p",null,"The raw data is not aggregated or treated in any way, it is in the same format as it was when it was sent by the device. Remember to keep the time frame of your search narrows to be sure you'll get data back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /logbook/storage/raw/\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io/#/logbook/logbook_storage_raw_list"},"https://api.autopi.io/#/logbook/logbook_storage_raw_list")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"device_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the device ",(0,o.kt)("strong",{parentName:"td"},"(not the unit id)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"data_type"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optional. The datatype to retrieve. Will return all datatypes of omitted. See 'Field' above.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"start_utc"),(0,o.kt)("td",{parentName:"tr",align:"left"},'From time in UTC. ISO format. "2020-01-01T00:00:00.000Z"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"end_utc"),(0,o.kt)("td",{parentName:"tr",align:"left"},'To time in UTC. ISO format. "2020-01-01T00:00:00.000Z"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"use_upload_time"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optional. If false (default), ",(0,o.kt)("em",{parentName:"td"},"start_utc")," and ",(0,o.kt)("em",{parentName:"td"},"end_utc")," will mean 'period when the data was ",(0,o.kt)("strong",{parentName:"td"},"recorded"),"'. If true, ",(0,o.kt)("em",{parentName:"td"},"start_utc")," and ",(0,o.kt)("em",{parentName:"td"},"end_utc")," will mean 'period when the data was ",(0,o.kt)("strong",{parentName:"td"},"uploaded"),"'.")))),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"How get logged position objects raw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET logbook/storage/raw/\n    ?device_id=6a6c53b5-e18e-4301-9c95-2516006bf7c6\n    &data_type=track.pos\n    &start_utc=2020-11-24T10:13:21.276594Z\n    &end_utc=2020-11-24T11:07:07.177850Z\n")),(0,o.kt)("h2",{id:"how-to-export-trips"},"How to Export Trips"),(0,o.kt)("p",null,"To get trips data you will have to first retrieve the list of trips, and then retrieve the data\nthat you need for the duration of the trip."),(0,o.kt)("p",null,"The trips endpoint here can give you the trips. (The trips can also be exported to excel/csv\nformat from the trips page) ",(0,o.kt)("a",{parentName:"p",href:"https://api.autopi.io/#/logbook/logbook_trips_list"},"https://api.autopi.io/#/logbook/logbook_trips_list")),(0,o.kt)("p",null,"The reason that there is no single endpoint way to retrieve all data for a specific trip is because\nthere can be a lot of data for trips, and our system can query and filter very large amounts of data\nvery very fast, but the downside is that it is not really geared towards downloading large amounts\nof data in one go."),(0,o.kt)("p",null,"For enterprise customers we also support automatic exporting of trips which will call a webhook on\nan external system signalling that an export can be downloaded."),(0,o.kt)(i.$,{title:"Exporting telemetry data",url:"https://community.autopi.io/t/exporting-telemetry-data/2458/1",mdxType:"Discussion"}))}u.isMDXComponent=!0}}]);