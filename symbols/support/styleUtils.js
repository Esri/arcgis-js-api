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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../request","../../symbols","../../core/Error","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","./jsonUtils","./StyleOrigin","./Thumbnail"],function(e,t,r,n,l,a,o,s,u,i,y,m){function f(e,t){return w(e).then(function(t){return{data:t.data,baseUrl:o.removeFile(e),styleUrl:e}})}function c(e,t){var r,n=t.portal||s.getDefault(),l=n.url+" - "+(n.user&&n.user.username)+" - "+e;return g[l]||(g[l]=b(e,n).then(function(e){return r=e,e.fetchData()}).then(function(t){return{data:t,baseUrl:r.itemUrl,styleName:e}})),g[l]}function b(e,t){return t.load().then(function(){var r=new u({disableExtraQuery:!0,query:"owner:"+U+" AND type:"+N+' AND typekeywords:"'+e+'"'});return t.queryItems(r)}).then(function(t){var r=t.results,n=null,a=e.toLowerCase();if(r&&Array.isArray(r))for(var o=0,s=r;o<s.length;o++){var u=s[o],i=u.typeKeywords.some(function(e){return e.toLowerCase()===a});if(i&&u.type===N&&u.owner===U){n=u;break}}if(n)return n.load();throw new l("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e})})}function d(e,t){return e.styleUrl?f(e.styleUrl,t):e.styleName?c(e.styleName,t):a.reject(new l("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e,t){return e.name?d(e,t).then(function(r){return p(r,e.name,t)}):a.reject(new l("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function p(e,t,r){for(var s=e.data,u={portal:r.portal,url:o.urlToObject(e.baseUrl),origin:"portal-item"},f=0,c=s.items;f<c.length;f++){var b=c[f],d=function(l){if(l.name!==t)return"continue";var a=o.read(l.webRef,u),s={portal:r.portal,url:o.urlToObject(o.removeFile(a)),origin:"portal-item"};return{value:w(a).then(function(a){var f=i.fromJSON(a.data,s);if(f&&f.isInstanceOf(n.BaseSymbol3D)){if(l.thumbnail)if(l.thumbnail.href){var c=o.read(l.thumbnail.href,u);f.thumbnail=new m.default({url:c})}else l.thumbnail.imageData&&(f.thumbnail=new m.default({url:"data:image/png;base64,"+l.thumbnail.imageData}));e.styleUrl?f.styleOrigin=new y({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(f.styleOrigin=new y({portal:r.portal,styleName:e.styleName,name:t}))}return f})}}(b);if("object"==typeof d)return d.value}return a.reject(new l("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}))}function v(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function w(e){var t={responseType:"json"};return t.query={f:"json"},r(o.normalize(e),t)}Object.defineProperty(t,"__esModule",{value:!0});var g={};t.fetchStyle=d,t.resolveWebStyleSymbol=h,t.fetchSymbolFromStyle=p,t.styleNameFromItem=v;var U="esri_en",N="Style"});