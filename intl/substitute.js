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

define(["require","exports","../core/Logger","../core/object","../core/string","./date","./number"],(function(e,r,t,n,a,i,u){Object.defineProperty(r,"__esModule",{value:!0});var o=t.getLogger("esri.intl");function f(e){switch(typeof e){case"string":return e;case"number":return u.formatNumber(e);case"boolean":return""+e;default:return e instanceof Date?i.formatDate(e):""}}r.substitute=function(e,r,t){void 0===t&&(t={});var s=t.format,c=void 0===s?{}:s;return a.replace(e,(function(e){return function(e,r,t){var a,s,c=e.indexOf(":");-1===c?a=e.trim():(a=e.slice(0,c).trim(),s=e.slice(c+1).trim());if(!a)return"";var m=n.getDeepValue(a,r);if(null==m)return"";var d=t[s]||t[a];if(d)return function(e,r){switch(r.type){case"date":return i.formatDate(e,r.intlOptions);case"number":return u.formatNumber(e,r.intlOptions);default:return o.warn("missing format descriptor for key {key}"),f(e)}}(m,d);if(s)return function(e,r){switch(r.toLowerCase()){case"dateformat":return i.formatDate(e);case"numberformat":return u.formatNumber(e);default:return o.warn("inline format is unsupported since 4.12: "+r),/^(dateformat|datestring)/i.test(r)?i.formatDate(e):/^numberformat/i.test(r)?u.formatNumber(e):f(e)}}(m,s);return f(m)}(e,r,c)}))}}));