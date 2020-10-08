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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/urlUtils","../../support/persistableUrlUtils"],(function(e,r,i,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isServerOrServicesAGOLUrl=r.isWmsServer=r.writeUrlWithLayerId=r.sanitizeUrlWithLayerId=r.sanitizeUrl=r.isHostedSecuredProxyService=r.isHostedAgolService=r.titleFromUrlAndName=r.cleanTitle=r.parse=r.isArcGISUrl=r.serverTypes=void 0,r.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"];var s=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),n=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i");function l(e){var r=i.urlToObject(e),t=r.path.match(s)||r.path.match(n);if(!t)return null;var l=t[1],o=t[2],u=t[3],v=t[4],c=o.indexOf("/");return{title:a(-1!==c?o.slice(c+1):o),serverType:u,sublayer:null!=v&&""!==v?parseInt(v,10):null,url:{path:l}}}function a(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}r.isArcGISUrl=function(e){return!!s.test(e)},r.parse=l,r.cleanTitle=a,r.titleFromUrlAndName=function(e,r){var i=[];if(e){var t=l(e);t&&t.title&&i.push(t.title)}if(r){var s=a(r);i.push(s)}if(2===i.length){if(-1!==i[0].toLowerCase().indexOf(i[1].toLowerCase()))return i[0];if(-1!==i[1].toLowerCase().indexOf(i[0].toLowerCase()))return i[1]}return i.join(" - ")},r.isHostedAgolService=function(e){if(!e)return!1;var r=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),i=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return r&&i},r.isHostedSecuredProxyService=function(e,r){return r&&e&&-1!==e.toLowerCase().indexOf(r.toLowerCase())},r.sanitizeUrl=function(e,r){return e?i.removeTrailingSlash(i.removeQueryParameters(e,r)):e},r.sanitizeUrlWithLayerId=function(e,r,t){if(!r)return{url:r};r=i.removeQueryParameters(r,t);var s,n=l(i.urlToObject(r).path);return n&&null!=n.sublayer&&(null==e.layerId&&(s=n.sublayer),r=n.url.path),{url:i.removeTrailingSlash(r),layerId:s}},r.writeUrlWithLayerId=function(e,r,s,n,l){t.write(r,n,"url",l),n.url&&null!=e.layerId&&(n.url=i.join(n.url,s,e.layerId.toString()))},r.isWmsServer=function(e){if(!e)return!1;var r=e.toLowerCase(),i=-1!==r.indexOf("/services/"),t=-1!==r.indexOf("/mapserver/wmsserver"),s=-1!==r.indexOf("/imageserver/wmsserver"),n=-1!==r.indexOf("/wmsserver");return i&&(t||s||n)},r.isServerOrServicesAGOLUrl=function(e){if(!e)return!1;var r=new i.Url(i.makeAbsolute(e)).authority.toLowerCase();return"server.arcgisonline.com"===r||"services.arcgisonline.com"===r}}));