// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../languageUtils"],(function(e,r,t){"use strict";function a(e){for(var r=0,t=0;t<e.length;t++)r+=e[t];return r/e.length}function n(e){for(var r=a(e),t=0,n=0;n<e.length;n++)t+=Math.pow(r-e[n],2);return t/e.length}Object.defineProperty(r,"__esModule",{value:!0}),r.calculateStat=r.decodeStatType=void 0,r.decodeStatType=function(e){switch(e.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""},r.calculateStat=function(e,r,u){switch(void 0===u&&(u=1e3),e.toLowerCase()){case"distinct":return function(e,r){for(var a=[],n={},u=[],s=0;s<e.length;s++){if(void 0!==e[s]&&null!==e[s]&&e[s]!==t.voidOperation){var c=e[s];if(t.isNumber(c)||t.isString(c))void 0===n[c]&&(a.push(c),n[c]=1);else{for(var i=!1,o=0;o<u.length;o++)!0===t.equalityTest(u[o],c)&&(i=!0);!1===i&&(u.push(c),a.push(c))}}if(a.length>=r&&-1!==r)return a}return a}(r,u);case"avg":case"mean":return a(t.toNumberArray(r));case"min":return Math.min.apply(Math,t.toNumberArray(r));case"sum":return function(e){for(var r=0,t=0;t<e.length;t++)r+=e[t];return r}(t.toNumberArray(r));case"max":return Math.max.apply(Math,t.toNumberArray(r));case"stdev":case"stddev":return Math.sqrt(n(t.toNumberArray(r)));case"var":case"variance":return n(t.toNumberArray(r));case"count":return r.length}return 0}}));