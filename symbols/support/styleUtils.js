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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../request","../../symbols","../../core/devEnvironmentUtils","../../core/Error","../../core/has","../../core/promiseUtils","../../core/urlUtils","../../portal/Portal","../../portal/PortalQueryParams","./jsonUtils","./StyleOrigin","./Thumbnail"],function(e,r,t,n,l,o,a,s,i,u,m,y,f,c){function b(e,r){return N(e).then(function(r){return{data:r.data,baseUrl:i.removeFile(e),styleUrl:e}})}function d(e,r){var t,n=r.portal||u.getDefault(),l=n.url+" - "+(n.user&&n.user.username)+" - "+e;return S[l]||(S[l]=h(e,n).then(function(e){return t=e,e.fetchData()}).then(function(r){return{data:r,baseUrl:t.itemUrl,styleName:e}})),S[l]}function h(e,r){return r.load().then(function(){var t=new m({disableExtraQuery:!0,query:"owner:"+j+" AND type:"+O+' AND typekeywords:"'+e+'"'});return r.queryItems(t)}).then(function(r){var t=r.results,n=null,l=e.toLowerCase();if(t&&Array.isArray(t))for(var a=0,s=t;a<s.length;a++){var i=s[a],u=i.typeKeywords.some(function(e){return e.toLowerCase()===l});if(u&&i.type===O&&i.owner===j){n=i;break}}if(!n)throw new o("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return n.load()})}function v(e,r){return e.styleUrl?b(e.styleUrl,r):e.styleName?d(e.styleName,r):s.reject(new o("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e,r){return e.name?v(e,r).then(function(t){return w(t,e.name,r)}):s.reject(new o("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function w(e,r,t){for(var a=e.data,u={portal:t.portal,url:i.urlToObject(e.baseUrl),origin:"portal-item"},m=0,b=a.items;m<b.length;m++){var d=b[m],h=function(o){if(o.name!==r)return"continue";var a=i.fromJSON(g(o),u),s=o.thumbnail&&o.thumbnail.href,m=o.thumbnail&&o.thumbnail.imageData;l.isDevEnvironment()&&(a=l.adjustStaticAGOUrl(a),s=l.adjustStaticAGOUrl(s));var b={portal:t.portal,url:i.urlToObject(i.removeFile(a)),origin:"portal-item"};return{value:N(a).then(function(l){var o=y.fromJSON(l.data,b);if(o&&n.isSymbol3D(o)){if(s){var a=i.fromJSON(s,u);o.thumbnail=new c.default({url:a})}else m&&(o.thumbnail=new c.default({url:"data:image/png;base64,"+m}));e.styleUrl?o.styleOrigin=new f({portal:t.portal,styleUrl:e.styleUrl,name:r}):e.styleName&&(o.styleOrigin=new f({portal:t.portal,styleName:e.styleName,name:r}))}return o})}}(d);if("object"==typeof h)return h.value}return s.reject(new o("symbolstyleutils:symbol-name-not-found","The symbol name '"+r+"' could not be found",{symbolName:r}))}function g(e){if(e.formatInfos&&!a("enable-feature:jschmid/force-wosr"))for(var r=0,t=e.formatInfos;r<t.length;r++){var n=t[r];if("gltf"===n.type)return n.href}return e.webRef}function U(e){for(var r=0,t=e.typeKeywords;r<t.length;r++){var n=t[r];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function N(e){var r={responseType:"json"};return r.query={f:"json"},t(i.normalize(e),r)}Object.defineProperty(r,"__esModule",{value:!0});var S={};r.fetchStyle=v,r.resolveWebStyleSymbol=p,r.fetchSymbolFromStyle=w,r.styleNameFromItem=U;var j="esri_en",O="Style"});