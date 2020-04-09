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

define(["require","exports","../../core/urlUtils"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"];var i=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),n=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i");function s(e){var r=t.urlToObject(e),s=r.path.match(i)||r.path.match(n);if(!s)return null;var l=s[1],u=s[2],o=s[3],v=s[4],c=u.indexOf("/");return{title:a(-1!==c?u.slice(c+1):u),serverType:o,sublayer:null!=v&&""!==v?parseInt(v,10):null,url:{path:l}}}function a(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}r.isArcGISUrl=function(e){return!!i.test(e)},r.parse=s,r.cleanTitle=a,r.titleFromUrlAndName=function(e,r){var t=[];if(e){var i=s(e);i&&i.title&&t.push(i.title)}if(r){var n=a(r);t.push(n)}if(2===t.length){if(-1!==t[0].toLowerCase().indexOf(t[1].toLowerCase()))return t[0];if(-1!==t[1].toLowerCase().indexOf(t[0].toLowerCase()))return t[1]}return t.join(" - ")},r.isHostedAgolService=function(e){if(!e)return!1;var r=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),t=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return r&&t},r.isHostedSecuredProxyService=function(e,r){return r&&e&&-1!==e.toLowerCase().indexOf(r.toLowerCase())},r.sanitizeUrl=function(e,r){return e?t.removeTrailingSlash(t.removeQueryParameters(e,r)):e},r.sanitizeUrlWithLayerId=function(e,r,i){if(!r)return{url:r};r=t.removeQueryParameters(r,i);var n,a=s(t.urlToObject(r).path);return a&&null!=a.sublayer&&(null==e.layerId&&(n=a.sublayer),r=a.url.path),{url:t.removeTrailingSlash(r),layerId:n}},r.writeUrlWithLayerId=function(e,r,i,n,s){t.write(r,n,"url",s),n.url&&null!=e.layerId&&(n.url=t.join(n.url,i,e.layerId.toString()))},r.isWmsServer=function(e){if(!e)return!1;var r=e.toLowerCase(),t=-1!==r.indexOf("/services/"),i=-1!==r.indexOf("/mapserver/wmsserver"),n=-1!==r.indexOf("/imageserver/wmsserver"),s=-1!==r.indexOf("/wmsserver");return t&&(i||n||s)},r.isServerOrServicesAGOLUrl=function(e){if(!e)return!1;var r=new t.Url(t.makeAbsolute(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}}));