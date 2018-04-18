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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../request","../../core/Error","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","../Symbol3D","./jsonUtils","./StyleOrigin","./Thumbnail"],function(e,t,r,n,l,a,o,s,u,i,y,m){function f(e,t){return w(e).then(function(t){return{data:t.data,baseUrl:a.removeFile(e),styleUrl:e}})}function c(e,t){var r,n=t.portal||o.getDefault(),l=n.url+" - "+(n.user&&n.user.username)+" - "+e;return g[l]||(g[l]=b(e,n).then(function(e){return r=e,e.fetchData()}).then(function(t){return{data:t,baseUrl:r.itemUrl,styleName:e}})),g[l]}function b(e,t){return t.load().then(function(){var r=new s({disableExtraQuery:!0,query:"owner:"+U+" AND type:"+N+' AND typekeywords:"'+e+'"'});return t.queryItems(r)}).then(function(t){var r=t.results,l=null,a=e.toLowerCase();if(r&&Array.isArray(r))for(var o=0,s=r;o<s.length;o++){var u=s[o],i=u.typeKeywords.some(function(e){return e.toLowerCase()===a});if(i&&u.type===N&&u.owner===U){l=u;break}}if(l)return l.load();throw new n("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e})})}function d(e,t){return e.styleUrl?f(e.styleUrl,t):e.styleName?c(e.styleName,t):l.reject(new n("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e,t){return e.name?d(e,t).then(function(r){return p(r,e.name,t)}):l.reject(new n("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function p(e,t,r){for(var o=e.data,s={portal:r.portal,url:a.urlToObject(e.baseUrl),origin:"portal-item"},f=0,c=o.items;f<c.length;f++){var b=c[f],d=function(n){if(n.name!==t)return"continue";var l=a.read(n.webRef,s),o={portal:r.portal,url:a.urlToObject(a.removeFile(l)),origin:"portal-item"};return{value:w(l).then(function(l){var f=i.fromJSON(l.data,o);if(f&&f.isInstanceOf(u)){if(n.thumbnail)if(n.thumbnail.href){var c=a.read(n.thumbnail.href,s);f.thumbnail=new m.default({url:c})}else n.thumbnail.imageData&&(f.thumbnail=new m.default({url:"data:image/png;base64,"+n.thumbnail.imageData}));e.styleUrl?f.styleOrigin=new y({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(f.styleOrigin=new y({portal:r.portal,styleName:e.styleName,name:t}))}return f})}}(b);if("object"==typeof d)return d.value}return l.reject(new n("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}))}function v(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function w(e){var t={responseType:"json"};return t.query={f:"json"},r(a.normalize(e),t)}Object.defineProperty(t,"__esModule",{value:!0});var g={};t.fetchStyle=d,t.resolveWebStyleSymbol=h,t.fetchSymbolFromStyle=p,t.styleNameFromItem=v;var U="esri_en",N="Style"});