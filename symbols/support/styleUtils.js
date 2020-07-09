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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../symbols","../../core/arrayUtils","../../core/devEnvironmentUtils","../../core/Error","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","../../support/featureFlags","../../support/persistableUrlUtils","./jsonUtils","./StyleOrigin","./Thumbnail"],(function(e,t,r,n,l,o,a,s,i,u,m,y,f,c,b,p,d){Object.defineProperty(t,"__esModule",{value:!0});var v={};function h(e,t,r){var n,l=t.portal||m.getDefault(),o=l.url+" - "+(l.user&&l.user.username)+" - "+e;return v[o]||(v[o]=function(e,t,r){return t.load(r).then((function(){var n=new y({disableExtraQuery:!0,query:"owner:"+w+" AND type:"+j+' AND typekeywords:"'+e+'"'});return t.queryItems(n,r)})).then((function(t){var n=t.results,l=null,o=e.toLowerCase();if(n&&Array.isArray(n))for(var a=0,i=n;a<i.length;a++){var u=i[a];if(u.typeKeywords.some((function(e){return e.toLowerCase()===o}))&&u.type===j&&u.owner===w){l=u;break}}if(!l)throw new s("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return l.load(r)}))}(e,l,r).then((function(e){return n=e,e.fetchData()})).then((function(t){return{data:t,baseUrl:n.itemUrl,styleName:e}}))),v[o]}function S(e,t,r){return e.styleUrl?function(e,t){return U(e,t).then((function(t){return{data:t.data,baseUrl:u.removeFile(e),styleUrl:e}}))}(e.styleUrl,r):e.styleName?h(e.styleName,t,r):i.reject(new s("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function g(e,t,r,n,m){var y=e.data,v={portal:r.portal,url:u.urlToObject(e.baseUrl),origin:"portal-item"},h=o.find(y.items,(function(e){return e.name===t}));if(!h){var S="The symbol name '"+t+"' could not be found";return i.reject(new s("symbolstyleutils:symbol-name-not-found",S,{symbolName:t}))}var g=c.fromJSON(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!f.enableWebStyleForceWOSR())for(var r=0,n=e.formatInfos;r<n.length;r++){var l=n[r];if("gltf"===l.type)return l.href}return e.webRef}(h,n),v),w=h.thumbnail&&h.thumbnail.href,j=h.thumbnail&&h.thumbnail.imageData;a.isDevEnvironment()&&(g=a.adjustStaticAGOUrl(g),w=a.adjustStaticAGOUrl(w));var O={portal:r.portal,url:u.urlToObject(u.removeFile(g)),origin:"portal-item"};return U(g,m).then((function(o){var a="cimRef"===n?N(o.data):o.data,s=b.fromJSON(a,O);if(s&&l.isSymbol3D(s)){if(w){var i=c.fromJSON(w,v);s.thumbnail=new d.default({url:i})}else j&&(s.thumbnail=new d.default({url:"data:image/png;base64,"+j}));e.styleUrl?s.styleOrigin=new p({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new p({portal:r.portal,styleName:e.styleName,name:t}))}return s}))}function N(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function U(e,t){var l=r.__assign({responseType:"json",query:{f:"json"}},t);return n(u.normalize(e),l)}t.fetchStyle=S,t.resolveWebStyleSymbol=function(e,t,r,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,r){var n=O.replace(/\{SymbolName\}/gi,e.name);return U(n,r).then((function(e){var r=N(e.data);return b.fromJSON(r,{portal:t.portal,url:u.urlToObject(u.removeFile(n)),origin:"portal-item"})}))}(e,t,n):S(e,t,n).then((function(l){return g(l,e.name,t,r,n)})):i.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))},t.fetchSymbolFromStyle=g,t.styleNameFromItem=function(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}};var w="esri_en",j="Style",O="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"}));