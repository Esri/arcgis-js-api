// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function t(e,r){return r&&r.xoffset?Math.max(e,Math.abs(r.xoffset)):r&&r.yoffset?Math.max(e,Math.abs(r.yoffset)):e}function n(e){for(var r=0,t=0,n=0;n<e.length;n++){var a=e[n].size;"number"==typeof a&&(r+=a,t++)}return r/t}function a(e,r){return"number"==typeof e?e:e&&e.stops&&e.stops.length?n(e.stops):r}function u(e,r){if(!r)return e;var t=r.filter(function(e){return"size"===e.type}),n=t.map(function(r){var t=r.maxSize,n=r.minSize;return(a(t,e)+a(n,e))/2}),u=0,f=n.length;if(0===f)return e;for(var o=0;o<f;o++)u+=n[o];var i=Math.floor(u/f);return Math.max(i,e)}function f(e){if(!e)return 6;var r="visualVariables"in e?u(6,e.visualVariables):6;if("simple"===e.type)return t(r,e.symbol);if("unique-value"===e.type){var n=r;return e.uniqueValueInfos.forEach(function(e){n=t(n,e.symbol)}),n}if("class-breaks"===e.type){var a=r;return e.classBreakInfos.forEach(function(e){a=t(a,e.symbol)}),a}return e.type,r}Object.defineProperty(r,"__esModule",{value:!0}),r.calculateTolerance=f});