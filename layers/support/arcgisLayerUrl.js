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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/urlUtils"],function(e,r,t){function i(e){return!!r.match.test(e)}function n(e){var i=t.urlToObject(e),n=i.path.match(r.match);if(!n)return null;var o=n[1],a=n[2],u=n[3],c=n[4],l=a.indexOf("/");return{title:s(-1!==l?a.slice(l+1):a),serverType:u,sublayer:null!=c&&""!==c?parseInt(c,10):null,url:{path:o}}}function s(e){return e=e.replace(/\s*[\/_]+\s*/g," "),e[0].toUpperCase()+e.slice(1)}function o(e,r){var t=[];if(e){var i=n(e);i&&i.title&&t.push(i.title)}if(r){var o=s(r);t.push(o)}if(2===t.length){if(-1!==t[0].toLowerCase().indexOf(t[1].toLowerCase()))return t[0];if(-1!==t[1].toLowerCase().indexOf(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function a(e){if(!e)return!1;e=e.toLowerCase();var r=".arcgis.com/",t="//services",i="//tiles",n="//features",s=-1!==e.indexOf(r),o=-1!==e.indexOf(t)||-1!==e.indexOf(i)||-1!==e.indexOf(n);return s&&o}function u(e,r){return r&&e&&-1!==e.toLowerCase().indexOf(r.toLowerCase())}r.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],r.match=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),r.test=i,r.parse=n,r.cleanTitle=s,r.titleFromUrlAndName=o,r.isHostedAgolService=a,r.isHostedSecuredProxyService=u});