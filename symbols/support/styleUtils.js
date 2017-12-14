// COPYRIGHT © 2017 Esri
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

define(["require","exports","../Symbol3D","./jsonUtils","./Thumbnail","./StyleOrigin","../../core/urlUtils","../../core/promiseUtils","../../core/Error","../../request","../../portal/Portal","../../portal/PortalQueryParams"],function(e,t,r,n,l,a,o,s,u,i,y,m){function f(e,t){return w(e).then(function(t){return{data:t.data,baseUrl:o.removeFile(e),styleUrl:e}})}function c(e,t){var r,n=t.portal||y.getDefault(),l=n.url+" - "+(n.user&&n.user.username)+" - "+e;return g[l]||(g[l]=b(e,n).then(function(e){return r=e,e.fetchData()}).then(function(t){var n={data:t,baseUrl:r.itemUrl,styleName:e};return n})),g[l]}function b(e,t){return t.load().then(function(){var r=new m({disableExtraQuery:!0,query:"owner:"+U+" AND type:"+N+' AND typekeywords:"'+e+'"'});return t.queryItems(r)}).then(function(t){var r=t.results,n=null,l=e.toLowerCase();if(r&&Array.isArray(r))for(var a=0,o=r;a<o.length;a++){var s=o[a],i=s.typeKeywords.some(function(e){return e.toLowerCase()===l});if(i&&s.type===N&&s.owner===U){n=s;break}}if(n)return n.load();throw new u("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e})})}function d(e,t){return e.styleUrl?f(e.styleUrl,t):e.styleName?c(e.styleName,t):s.reject(new u("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function h(e,t){return e.name?d(e,t).then(function(r){return p(r,e.name,t)}):s.reject(new u("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function p(e,t,i){for(var y=e.data,m={portal:i.portal,url:o.urlToObject(e.baseUrl),origin:"portal-item"},f=function(s){if(s.name!==t)return"continue";var u=o.read(s.webRef,m),y={portal:i.portal,url:o.urlToObject(o.removeFile(u)),origin:"portal-item"};return{value:w(u).then(function(u){var f=n.fromJSON(u.data,y);if(f&&f.isInstanceOf(r)){if(s.thumbnail)if(s.thumbnail.href){var c=o.read(s.thumbnail.href,m);f.thumbnail=new l["default"]({url:c})}else s.thumbnail.imageData&&(f.thumbnail=new l["default"]({url:"data:image/png;base64,"+s.thumbnail.imageData}));e.styleUrl?f.styleOrigin=new a({portal:i.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(f.styleOrigin=new a({portal:i.portal,styleName:e.styleName,name:t}))}return f})}},c=0,b=y.items;c<b.length;c++){var d=b[c],h=f(d);if("object"==typeof h)return h.value}return s.reject(new u("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}))}function v(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function w(e){var t={responseType:"json"};return t.query={f:"json"},i(o.normalize(e),t)}Object.defineProperty(t,"__esModule",{value:!0});var g={};t.fetchStyle=d,t.resolveWebStyleSymbol=h,t.fetchSymbolFromStyle=p,t.styleNameFromItem=v;var U="esri_en",N="Style"});