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

define(["require","exports","../../core/urlUtils"],function(e,r,t){function i(e){return!!r.match.test(e)}function n(e){var i=t.urlToObject(e),n=i.path.match(r.match);if(!n)return null;var a=n[1],u=n[2],l=n[3],o=n[4],f=u.indexOf("/");return{title:s(-1!==f?u.slice(f+1):u),serverType:l,sublayer:null!=o&&""!==o?parseInt(o,10):null,url:{path:a}}}function s(e){return e=e.replace(/\s*[\/_]+\s*/g," "),e[0].toUpperCase()+e.slice(1)}function a(e,r){var t=[];if(e){var i=n(e);i&&i.title&&t.push(i.title)}if(r){var a=s(r);t.push(a)}if(2===t.length){if(-1!==t[0].toLowerCase().indexOf(t[1].toLowerCase()))return t[0];if(-1!==t[1].toLowerCase().indexOf(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function u(e){if(!e)return!1;e=e.toLowerCase();var r=-1!==e.indexOf(".arcgis.com/"),t=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return r&&t}function l(e,r){return r&&e&&-1!==e.toLowerCase().indexOf(r.toLowerCase())}function o(e,r){return e?t.removeTrailingSlash(t.removeQueryParameters(e,r)):e}function f(e,r,i){if(!r)return{url:r};r=t.removeQueryParameters(r,i);var s,a=t.urlToObject(r),u=n(a.path);return u&&null!=u.sublayer&&(null==e.layerId&&(s=u.sublayer),r=u.url.path),{url:t.removeTrailingSlash(r),layerId:s}}function c(e,r,i,n,s){t.write(r,n,"url",s),n.url&&null!=e.layerId&&(n.url=t.join(n.url,i,e.layerId.toString()))}function v(e){if(!e)return!1;var r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),i=-1!==r.indexOf("/mapserver/wmsserver"),n=-1!==r.indexOf("/imageserver/wmsserver"),s=-1!==r.indexOf("/wmsserver");return t&&(i||n||s)}Object.defineProperty(r,"__esModule",{value:!0}),r.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],r.match=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),r.test=i,r.parse=n,r.cleanTitle=s,r.titleFromUrlAndName=a,r.isHostedAgolService=u,r.isHostedSecuredProxyService=l,r.sanitizeUrl=o,r.sanitizeUrlWithLayerId=f,r.writeUrlWithLayerId=c,r.isWmsServer=v});