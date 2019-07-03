// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../symbols","../../core/devEnvironmentUtils","../../core/Error","../../core/has","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","./jsonUtils","./StyleOrigin","./Thumbnail"],function(e,r,t,n,l,o,a,s,i,u,m,y,f,c,b){function p(e,r,t){return O(e,t).then(function(r){return{data:r.data,baseUrl:u.removeFile(e),styleUrl:e}})}function d(e,r,t){var n,l=r.portal||m.getDefault(),o=l.url+" - "+(l.user&&l.user.username)+" - "+e;return D[o]||(D[o]=h(e,l,t).then(function(e){return n=e,e.fetchData()}).then(function(r){return{data:r,baseUrl:n.itemUrl,styleName:e}})),D[o]}function h(e,r,t){return r.load(t).then(function(){var n=new y({disableExtraQuery:!0,query:"owner:"+E+" AND type:"+T+' AND typekeywords:"'+e+'"'});return r.queryItems(n,t)}).then(function(r){var n=r.results,l=null,o=e.toLowerCase();if(n&&Array.isArray(n))for(var s=0,i=n;s<i.length;s++){var u=i[s],m=u.typeKeywords.some(function(e){return e.toLowerCase()===o});if(m&&u.type===T&&u.owner===E){l=u;break}}if(!l)throw new a("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return l.load(t)})}function v(e,r,t){return e.styleUrl?p(e.styleUrl,r,t):e.styleName?d(e.styleName,r,t):i.reject(new a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function S(e,r,t,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?j(e,r,n):v(e,r,n).then(function(l){return g(l,e.name,r,t,n)}):i.reject(new a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function g(e,r,t,n,s){for(var m=e.data,y={portal:t.portal,url:u.urlToObject(e.baseUrl),origin:"portal-item"},p=0,d=m.items;p<d.length;p++){var h=d[p],v=function(a){if(a.name!==r)return"continue";var i=u.fromJSON(w(a,n),y),m=a.thumbnail&&a.thumbnail.href,p=a.thumbnail&&a.thumbnail.imageData;o.isDevEnvironment()&&(i=o.adjustStaticAGOUrl(i),m=o.adjustStaticAGOUrl(m));var d={portal:t.portal,url:u.urlToObject(u.removeFile(i)),origin:"portal-item"};return{value:O(i,s).then(function(o){var a="cimRef"===n?N(o.data):o.data,s=f.fromJSON(a,d);if(s&&l.isSymbol3D(s)){if(m){var i=u.fromJSON(m,y);s.thumbnail=new b.default({url:i})}else p&&(s.thumbnail=new b.default({url:"data:image/png;base64,"+p}));e.styleUrl?s.styleOrigin=new c({portal:t.portal,styleUrl:e.styleUrl,name:r}):e.styleName&&(s.styleOrigin=new c({portal:t.portal,styleName:e.styleName,name:r}))}return s})}}(h);if("object"==typeof v)return v.value}return i.reject(new a("symbolstyleutils:symbol-name-not-found","The symbol name '"+r+"' could not be found",{symbolName:r}))}function N(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function w(e,r){if("cimRef"===r)return e.cimRef;if(e.formatInfos&&!s("enable-feature:jschmid/force-wosr"))for(var t=0,n=e.formatInfos;t<n.length;t++){var l=n[t];if("gltf"===l.type)return l.href}return e.webRef}function U(e){for(var r=0,t=e.typeKeywords;r<t.length;r++){var n=t[r];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function j(e,r,t){var n=q.replace(/\{SymbolName\}/gi,e.name);return O(n,t).then(function(e){var t=N(e.data);return f.fromJSON(t,{portal:r.portal,url:u.urlToObject(u.removeFile(n)),origin:"portal-item"})})}function O(e,r){var l=t({responseType:"json",query:{f:"json"}},r);return n(u.normalize(e),l)}Object.defineProperty(r,"__esModule",{value:!0});var D={};r.fetchStyle=v,r.resolveWebStyleSymbol=S,r.fetchSymbolFromStyle=g,r.styleNameFromItem=U;var E="esri_en",T="Style",q="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"});