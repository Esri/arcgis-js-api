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

define(["require","exports","../core/Logger","../core/object","../core/string","./date","./number"],function(e,r,t,n,a,o,i){function u(e,r,t){void 0===t&&(t={});var n=t.format,o=void 0===n?{}:n;return a.replace(e,function(e){return f(e,r,o)})}function f(e,r,t){var a,o,i=e.indexOf(":");if(-1===i?a=e.trim():(a=e.slice(0,i).trim(),o=e.slice(i+1).trim()),!a)return"";var u=n.getDeepValue(a,r);if(null==u)return"";var f=t[o]||t[a];return f?s(u,f):o?c(u,o):m(u)}function s(e,r){switch(r.type){case"date":return o.formatDate(e,r.intlOptions);case"number":return i.formatNumber(e,r.intlOptions);default:return d.warn("missing format descriptor for key {key}"),m(e)}}function c(e,r){switch(r.toLowerCase()){case"dateformat":return o.formatDate(e);case"numberformat":return i.formatNumber(e);default:return d.warn("inline format is unsupported since 4.12: "+r),/^(dateformat|datestring)/i.test(r)?o.formatDate(e):/^numberformat/i.test(r)?i.formatNumber(e):m(e)}}function m(e){switch(typeof e){case"string":return e;case"number":return i.formatNumber(e);case"boolean":return""+e;default:return e instanceof Date?o.formatDate(e):""}}Object.defineProperty(r,"__esModule",{value:!0});var d=t.getLogger("esri.intl");r.substitute=u});