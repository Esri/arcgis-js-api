// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/urlUtils"],function(e,r,t){function n(e){return!!r.match.test(e)}function i(e){var n=t.urlToObject(e),i=n.path.match(r.match);if(!i)return null;var a=i[1],u=i[2],o=i[3],l=i[4],c=u.indexOf("/");return-1!==c&&(u=u.slice(c+1)),{title:s(u),serverType:o,sublayer:null!=l&&""!==l?parseInt(l,10):null,url:{path:a}}}function s(e){return e=e.replace(/\s*[\/_]+\s*/g," "),e[0].toUpperCase()+e.slice(1)}function a(e,r){var t=[];if(e){var n=i(e);n&&n.title&&t.push(n.title)}if(r){var a=s(r);t.push(a)}if(2===t.length){if(-1!==t[0].toLowerCase().indexOf(t[1].toLowerCase()))return t[0];if(-1!==t[1].toLowerCase().indexOf(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function u(e){if(!e)return!1;e=e.toLowerCase();var r=".arcgis.com/",t="//services",n="//tiles",i="//features",s=-1!==e.indexOf(r),a=-1!==e.indexOf(t)||-1!==e.indexOf(n)||-1!==e.indexOf(i);return s&&a}r.serverTypes=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer"],r.match=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+r.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),r.test=n,r.parse=i,r.cleanTitle=s,r.titleFromUrlAndName=a,r.isHostedAgolService=u});