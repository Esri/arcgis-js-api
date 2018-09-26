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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/urlUtils"],function(e,r,t){function n(e){return!!r.match.test(e)}function i(e){var n=t.urlToObject(e),i=n.path.match(r.match);if(!i)return null;var l=i[1],u=i[2],s=i[3],o=i[4],c=u.indexOf("/");return{title:a(-1!==c?u.slice(c+1):u),serverType:s,sublayer:null!=o&&""!==o?parseInt(o,10):null,url:{path:l}}}function a(e){return e=e.replace(/\s*[\/_]+\s*/g," "),e[0].toUpperCase()+e.slice(1)}function l(e,r){var t=[];if(e){var n=i(e);n&&n.title&&t.push(n.title)}if(r){var l=a(r);t.push(l)}if(2===t.length){if(-1!==t[0].toLowerCase().indexOf(t[1].toLowerCase()))return t[0];if(-1!==t[1].toLowerCase().indexOf(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function u(e){if(!e)return!1;e=e.toLowerCase();var r=-1!==e.indexOf(".arcgis.com/"),t=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return r&&t}function s(e,r){return r&&e&&-1!==e.toLowerCase().indexOf(r.toLowerCase())}function o(e,r){return e?t.removeTrailingSlash(t.removeQueryParameters(e,r)):e}function c(e,r,n){if(!r)return{url:r};r=t.removeQueryParameters(r,n);var a,l=t.urlToObject(r),u=i(l.path);return u&&null!=u.sublayer&&(null==e.layerId&&(a=u.sublayer),r=u.url.path),{url:t.removeTrailingSlash(r),layerId:a}}function f(e,r,n,i){var a=null;i?a=n:i=n,t.writeOperationalLayerUrl(r,i),i.url&&null!=e.layerId&&(i.url=t.join(i.url,a,e.layerId.toString()))}Object.defineProperty(r,"__esModule",{value:!0}),r.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],r.match=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),r.test=n,r.parse=i,r.cleanTitle=a,r.titleFromUrlAndName=l,r.isHostedAgolService=u,r.isHostedSecuredProxyService=s,r.sanitizeUrl=o,r.sanitizeUrlWithLayerId=c,r.writeUrlWithLayerId=f});