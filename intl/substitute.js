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

define(["require","exports","../core/Logger","../core/object","../core/string","./date","./number"],(function(e,t,r,n,a,i,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.substitute=void 0;var o=r.getLogger("esri.intl");function s(e){switch(typeof e){case"string":return e;case"number":return u.formatNumber(e);case"boolean":return""+e;default:return e instanceof Date?i.formatDate(e):""}}t.substitute=function(e,t,r){void 0===r&&(r={});var f=r.format,c=void 0===f?{}:f;return a.replace(e,(function(e){return function(e,t,r){var a,f,c=e.indexOf(":");-1===c?a=e.trim():(a=e.slice(0,c).trim(),f=e.slice(c+1).trim());if(!a)return"";var m=n.getDeepValue(a,t);if(null==m)return"";var d=r[f]||r[a];if(d)return function(e,t){switch(t.type){case"date":return i.formatDate(e,t.intlOptions);case"number":return u.formatNumber(e,t.intlOptions);default:return o.warn("missing format descriptor for key {key}"),s(e)}}(m,d);if(f)return function(e,t){switch(t.toLowerCase()){case"dateformat":return i.formatDate(e);case"numberformat":return u.formatNumber(e);default:return o.warn("inline format is unsupported since 4.12: "+t),/^(dateformat|datestring)/i.test(t)?i.formatDate(e):/^numberformat/i.test(t)?u.formatNumber(e):s(e)}}(m,f);return s(m)}(e,t,c)}))}}));