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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../request","../../symbols","../../core/devEnvironmentUtils","../../core/Error","../../core/has","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","./jsonUtils","./StyleOrigin","./Thumbnail"],function(e,t,r,n,l,o,a,s,i,u,m,y,f,c){function b(e,t){return N(e).then(function(t){return{data:t.data,baseUrl:i.removeFile(e),styleUrl:e}})}function d(e,t){var r,n=t.portal||u.getDefault(),l=n.url+" - "+(n.user&&n.user.username)+" - "+e;return S[l]||(S[l]=h(e,n).then(function(e){return r=e,e.fetchData()}).then(function(t){return{data:t,baseUrl:r.itemUrl,styleName:e}})),S[l]}function h(e,t){return t.load().then(function(){var r=new m({disableExtraQuery:!0,query:"owner:"+j+" AND type:"+O+' AND typekeywords:"'+e+'"'});return t.queryItems(r)}).then(function(t){var r=t.results,n=null,l=e.toLowerCase();if(r&&Array.isArray(r))for(var a=0,s=r;a<s.length;a++){var i=s[a],u=i.typeKeywords.some(function(e){return e.toLowerCase()===l});if(u&&i.type===O&&i.owner===j){n=i;break}}if(n)return n.load();throw new o("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e})})}function v(e,t){return e.styleUrl?b(e.styleUrl,t):e.styleName?d(e.styleName,t):s.reject(new o("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e,t){return e.name?v(e,t).then(function(r){return w(r,e.name,t)}):s.reject(new o("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function w(e,t,r){for(var a=e.data,u={portal:r.portal,url:i.urlToObject(e.baseUrl),origin:"portal-item"},m=0,b=a.items;m<b.length;m++){var d=b[m],h=function(o){if(o.name!==t)return"continue";var a=i.fromJSON(g(o),u),s=o.thumbnail&&o.thumbnail.href,m=o.thumbnail&&o.thumbnail.imageData;l.isDevEnvironment()&&(a=l.adjustStaticAGOUrl(a),s=l.adjustStaticAGOUrl(s));var b={portal:r.portal,url:i.urlToObject(i.removeFile(a)),origin:"portal-item"};return{value:N(a).then(function(l){var o=y.fromJSON(l.data,b);if(o&&o.isInstanceOf(n.BaseSymbol3D)){if(s){var a=i.fromJSON(s,u);o.thumbnail=new c.default({url:a})}else m&&(o.thumbnail=new c.default({url:"data:image/png;base64,"+m}));e.styleUrl?o.styleOrigin=new f({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new f({portal:r.portal,styleName:e.styleName,name:t}))}return o})}}(d);if("object"==typeof h)return h.value}return s.reject(new o("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}))}function g(e){if(e.formatInfos&&!a("enable-feature:jschmid/force-wosr"))for(var t=0,r=e.formatInfos;t<r.length;t++){var n=r[t];if("gltf"===n.type)return n.href}return e.webRef}function U(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function N(e){var t={responseType:"json"};return t.query={f:"json"},r(i.normalize(e),t)}Object.defineProperty(t,"__esModule",{value:!0});var S={};t.fetchStyle=v,t.resolveWebStyleSymbol=p,t.fetchSymbolFromStyle=w,t.styleNameFromItem=U;var j="esri_en",O="Style"});