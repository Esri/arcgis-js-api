// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../symbols","../../core/devEnvironmentUtils","../../core/Error","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","../../support/featureFlags","./jsonUtils","./StyleOrigin","./Thumbnail"],(function(e,t,r,n,l,o,a,s,i,u,m,y,f,c,b){Object.defineProperty(t,"__esModule",{value:!0});var p={};function d(e,t,r){var n,l=t.portal||u.getDefault(),o=l.url+" - "+(l.user&&l.user.username)+" - "+e;return p[o]||(p[o]=function(e,t,r){return t.load(r).then((function(){var n=new m({disableExtraQuery:!0,query:"owner:"+N+" AND type:"+w+' AND typekeywords:"'+e+'"'});return t.queryItems(n,r)})).then((function(t){var n=t.results,l=null,o=e.toLowerCase();if(n&&Array.isArray(n))for(var s=0,i=n;s<i.length;s++){var u=i[s];if(u.typeKeywords.some((function(e){return e.toLowerCase()===o}))&&u.type===w&&u.owner===N){l=u;break}}if(!l)throw new a("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return l.load(r)}))}(e,l,r).then((function(e){return n=e,e.fetchData()})).then((function(t){return{data:t,baseUrl:n.itemUrl,styleName:e}}))),p[o]}function v(e,t,r){return e.styleUrl?function(e,t){return g(e,t).then((function(t){return{data:t.data,baseUrl:i.removeFile(e),styleUrl:e}}))}(e.styleUrl,r):e.styleName?d(e.styleName,t,r):s.reject(new a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e,t,r,n,u){for(var m=e.data,p={portal:r.portal,url:i.urlToObject(e.baseUrl),origin:"portal-item"},d=function(a){if(a.name!==t)return"continue";var s=i.fromJSON(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!y.enableWebStyleForceWOSR())for(var r=0,n=e.formatInfos;r<n.length;r++){var l=n[r];if("gltf"===l.type)return l.href}return e.webRef}(a,n),p),m=a.thumbnail&&a.thumbnail.href,d=a.thumbnail&&a.thumbnail.imageData;o.isDevEnvironment()&&(s=o.adjustStaticAGOUrl(s),m=o.adjustStaticAGOUrl(m));var v={portal:r.portal,url:i.urlToObject(i.removeFile(s)),origin:"portal-item"};return{value:g(s,u).then((function(o){var a="cimRef"===n?S(o.data):o.data,s=f.fromJSON(a,v);if(s&&l.isSymbol3D(s)){if(m){var u=i.fromJSON(m,p);s.thumbnail=new b.default({url:u})}else d&&(s.thumbnail=new b.default({url:"data:image/png;base64,"+d}));e.styleUrl?s.styleOrigin=new c({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new c({portal:r.portal,styleName:e.styleName,name:t}))}return s}))}},v=0,h=m.items;v<h.length;v++){var N=d(h[v]);if("object"==typeof N)return N.value}return s.reject(new a("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}))}function S(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function g(e,t){var l=r({responseType:"json",query:{f:"json"}},t);return n(i.normalize(e),l)}t.fetchStyle=v,t.resolveWebStyleSymbol=function(e,t,r,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,r){var n=U.replace(/\{SymbolName\}/gi,e.name);return g(n,r).then((function(e){var r=S(e.data);return f.fromJSON(r,{portal:t.portal,url:i.urlToObject(i.removeFile(n)),origin:"portal-item"})}))}(e,t,n):v(e,t,n).then((function(l){return h(l,e.name,t,r,n)})):s.reject(new a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))},t.fetchSymbolFromStyle=h,t.styleNameFromItem=function(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}};var N="esri_en",w="Style",U="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"}));