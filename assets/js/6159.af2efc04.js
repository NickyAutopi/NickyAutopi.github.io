/*! For license information please see 6159.af2efc04.js.LICENSE.txt */
(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[6159],{36742:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(19756),o=t(67294),u=t(73727),i=t(52263),a=t(13919),c=t(10412),s=(0,o.createContext)({collectLink:function(){}}),l=t(44996),f=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,m=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,P=(0,r.Z)(e,d),_=(0,i.Z)().siteConfig,E=_.trailingSlash,D=_.baseUrl,O=(0,l.C)().withBaseUrl,A=(0,o.useContext)(s),S=p||g,C=(0,a.Z)(S),j=null==S?void 0:S.replace("pathname://",""),x=void 0!==j?(t=j,w&&function(e){return e.startsWith("/")}(t)?O(t):t):void 0;x&&C&&(x=(0,f.applyTrailingSlash)(x,{trailingSlash:E,baseUrl:D}));var V,k=(0,o.useRef)(!1),L=v?u.OL:u.rU,R=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!R&&C&&null!=x&&window.docusaurus.prefetch(x),function(){R&&V&&V.disconnect()}}),[x,R,C]);var I=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,T=!x||!C||I;return x&&C&&!I&&!y&&A.collectLink(x),T?o.createElement("a",Object.assign({href:x},S&&!C&&{target:"_blank",rel:"noopener noreferrer"},P)):o.createElement(L,Object.assign({},P,{onMouseEnter:function(){k.current||null==x||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var n,t;R&&e&&C&&(n=e,t=function(){null!=x&&window.docusaurus.prefetch(x)},(V=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.unobserve(n),V.disconnect(),t())}))}))).observe(n))},to:x||""},v&&{isActive:m,activeClassName:h}))}},24973:function(e,n,t){"use strict";t.d(n,{Z:function(){return f},I:function(){return l}});var r=t(67294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}function a(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(n,t)}var c=t(64644);function s(e){var n,t=e.id,r=e.message;return null!==(n=c[null!=t?t:r])&&void 0!==n?n:r}function l(e,n){var t,r=e.message;return i(null!==(t=s({message:r,id:e.id}))&&void 0!==t?t:r,n)}function f(e){var n,t=e.children,o=e.id,u=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(n=s({message:t,id:o}))&&void 0!==n?n:t;return r.createElement(a,{values:u},i)}},13919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},28143:function(e,n,t){"use strict";t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(73727)},44996:function(e,n,t){"use strict";t.d(n,{C:function(){return u},Z:function(){return i}});var r=t(52263),o=t(13919);function u(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,u=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(u,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(e,n)}},28084:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=t(52263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var n=o()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function i(e,n){void 0===n&&(n="default");var t=u(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},72389:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(67294),o=t(9913);function u(){return(0,r.useContext)(o._)}},48408:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(28143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=n.getActiveVersion(e,t),a=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=n.getLatestVersion(e),o=n.getActiveDocContext(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},96730:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var r=t(70655),o=t(28143),u=r.__importStar(t(28084)),i=t(48408),a={};n.useAllDocsData=function(){var e;return null!==(e=u.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.useDocsData=function(e){return u.usePluginData("docusaurus-plugin-content-docs",e)};n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(t,r,e)};n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),r=o.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:i.getActiveVersion(t.pluginData,r)}};n.useVersions=function(e){return n.useDocsData(e).versions};n.useLatestVersion=function(e){var t=n.useDocsData(e);return i.getLatestVersion(t)};n.useActiveVersion=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getActiveVersion(t,r)};n.useActiveDocContext=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getActiveDocContext(t,r)};n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getDocVersionSuggestions(t,r)}},41217:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(67294),o=t(99105),u=t(41773),i=t(44996);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,s=e.children,l=(0,u.pe)(n),f=(0,i.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,n&&r.createElement("title",null,l),n&&r.createElement("meta",{property:"og:title",content:l}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},80907:function(e,n,t){"use strict";t.d(n,{Iw:function(){return r.useActiveDocContext},gA:function(){return r.useActivePlugin},WS:function(){return r.useActivePluginAndVersion},zu:function(){return r.useActiveVersion},_r:function(){return r.useAllDocsData},Jo:function(){return r.useDocVersionSuggestions},zh:function(){return r.useDocsData},yW:function(){return r.useLatestVersion},gB:function(){return r.useVersions}});var r=t(96730)},93783:function(e,n,t){"use strict";var r=t(67294),o=t(10412),u="desktop",i="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?u:i:a}n.Z=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),n}},41773:function(e,n,t){"use strict";t.d(n,{pl:function(){return ye},zF:function(){return B},HX:function(){return g},PO:function(){return K},L5:function(){return ae},Cv:function(){return ne},Cn:function(){return Y},kM:function(){return de},WA:function(){return s},os:function(){return h},Mg:function(){return b},_f:function(){return l},PZ:function(){return Ee},bc:function(){return p},MA:function(){return _e},l5:function(){return d},nT:function(){return be},uR:function(){return L},J:function(){return le},Oh:function(){return fe},be:function(){return we},SL:function(){return C},g8:function(){return ee},c2:function(){return A},D9:function(){return S},LU:function(){return o},pe:function(){return w}});var r=t(52263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function l(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,s=a===i?t:t.replace("/"+a+"/","/"),l=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(n)+l}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function h(e,n){return"docs-"+e+"-"+n}var m=t(80907),y=!!m._r,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},P=t(67294),_=["zero","one","two","few","many","other"];function E(e){return _.filter((function(n){return e.includes(n)}))}var D={locale:"en",pluralForms:E(["one","other"]),select:function(e){return 1===e?"one":"other"}};function O(){var e=(0,r.Z)().i18n.currentLocale;return(0,P.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),D;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:E(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),D}var n,t}),[e])}function A(){var e=O();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}function S(e){var n=(0,P.useRef)();return(0,P.useEffect)((function(){n.current=e})),n.current}function C(e){var n=(0,f.TH)(),t=S(n),r=(0,P.useRef)(!0);(0,P.useEffect)((function(){r.current?r.current=!1:e({location:n,previousLocation:t})}),[n])}var j=t(19756),x=t(10412),V=["collapsed"],k=["lazy"];function L(e){var n=e.initialState,t=(0,P.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,P.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var R={display:"none",overflow:"hidden",height:"0px"},I={display:"block",overflow:"visible",height:"auto"};function T(e,n){var t=n?R:I;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function M(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,P.useRef)(!1);(0,P.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight;return{transition:"height "+(null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t))+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return T(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=R.height,u.style.overflow=R.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function Z(e){if(!x.Z.canUseDOM)return e?R:I}function U(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,s=(0,P.useRef)(null);return M({collapsibleRef:s,collapsed:r,animation:u}),P.createElement(t,{ref:s,style:c?void 0:Z(r),onTransitionEnd:function(e){if("height"===e.propertyName){var n=s.current,t=n.style.height;r||parseInt(t,10)!==n.scrollHeight||(T(n,!1),null==i||i(!1)),t===R.height&&(T(n,!0),null==i||i(!0))}},className:a},o)}function N(e){var n=e.collapsed,t=(0,j.Z)(e,V),r=(0,P.useState)(!n),o=r[0],u=r[1];(0,P.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,P.useState)(n),a=i[0],c=i[1];return(0,P.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?P.createElement(U,Object.assign({},t,{collapsed:a})):null}function B(e){var n=e.lazy,t=(0,j.Z)(e,k),r=n?N:U;return P.createElement(r,Object.assign({},t))}var F=t(72389),W=t(86010),z="details_2Ziz",H="isBrowser_2j9b",q="collapsibleContent_3OHp",G=["summary","children"];function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function X(e,n){return!!e&&(e===n||X(e.parentElement,n))}var K=function(e){var n,t=e.summary,r=e.children,o=(0,j.Z)(e,G),u=(0,F.Z)(),i=(0,P.useRef)(null),a=L({initialState:!o.open}),c=a.collapsed,s=a.setCollapsed,l=(0,P.useState)(o.open),f=l[0],d=l[1];return P.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,W.Z)(z,(n={},n[H]=u,n),o.className),onMouseDown:function(e){J(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;J(n)&&X(n,i.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t,P.createElement(B,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},P.createElement("div",{className:q},r)))};var Q=(0,P.createContext)(null);function Y(e){var n=e.children;return P.createElement(Q.Provider,{value:(0,P.useState)(null)},n)}function $(){var e=(0,P.useContext)(Q);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function ee(){var e=$()[0];if(e){var n=e.component;return function(t){return P.createElement(n,Object.assign({},e.props,t))}}return function(){}}function ne(e){var n,t=e.component,r=e.props,o=$()[1],u=(n=r,(0,P.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,P.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,P.useEffect)((function(){return function(){return o(null)}}),[o]),null}var te=function(e){return"docs-preferred-version-"+e},re={save:function(e,n,t){s(te(e),{persistence:n}).set(t)},read:function(e,n){return s(te(e),{persistence:n}).get()},clear:function(e,n){s(te(e),{persistence:n}).del()}};function oe(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=re.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(re.clear(e,t),{preferredVersionName:null})}(e)})),o}function ue(){var e=(0,m._r)(),n=o().docs.versionPersistence,t=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,P.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,P.useEffect)((function(){i(oe({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,t){re.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[i])]}var ie=(0,P.createContext)(null);function ae(e){var n=e.children;return y?P.createElement(ce,null,n):P.createElement(P.Fragment,null,n)}function ce(e){var n=e.children,t=ue();return P.createElement(ie.Provider,{value:t},n)}function se(){var e=(0,P.useContext)(ie);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function le(e){void 0===e&&(e="default");var n=(0,m.zh)(e),t=se(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,P.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}function fe(){var e=(0,m._r)(),n=se()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}var de={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},ve=s("docusaurus.announcement.dismiss"),pe=s("docusaurus.announcement.id"),ge=function(){return"true"===ve.get()},he=function(e){return ve.set(String(e))},me=(0,P.createContext)(null),ye=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,F.Z)(),t=(0,P.useState)((function(){return!!n&&ge()})),r=t[0],u=t[1];(0,P.useEffect)((function(){u(ge())}),[]);var i=(0,P.useCallback)((function(){he(!0),u(!0)}),[]);return(0,P.useEffect)((function(){if(e){var n=e.id,t=pe.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;pe.set(n),r&&he(!1),!r&&ge()||u(!1)}}),[]),(0,P.useMemo)((function(){return{isClosed:r,close:i}}),[r])}();return P.createElement(me.Provider,{value:t},n)},be=function(){var e=(0,P.useContext)(me);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function we(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var Pe=t(24973),_e=function(){return(0,Pe.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function Ee(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}},8802:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(o=u,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(u,i)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var u=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(u).default}})},29964:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},86010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})},70655:function(e,n,t){"use strict";t.r(n),t.d(n,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return m},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return P},__asyncValues:function(){return _},__makeTemplateObject:function(){return E},__importStar:function(){return O},__importDefault:function(){return A},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return C}});var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function a(e,n,t,r){var o,u=arguments.length,i=u<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(n,t,i):o(n,t))||i);return u>3&&i&&Object.defineProperty(n,t,i),i}function c(e,n){return function(t,r){n(t,r,e)}}function s(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function l(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}c((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(a){u=[6,a],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function v(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(g(arguments[n]));return e}function m(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var u=arguments[n],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||n)}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){u.push([e,n,t,r])>1||a(e,n)}))})}function a(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,s):l(u[0][2],t)}catch(r){l(u[0][3],r)}var t}function c(e){a("next",e)}function s(e){a("throw",e)}function l(e,n){e(n),u.shift(),u.length&&a(u[0][0],u[0][1])}}function P(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function E(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var D=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function O(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return D(n,e),n}function A(e){return e&&e.__esModule?e:{default:e}}function S(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function C(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);