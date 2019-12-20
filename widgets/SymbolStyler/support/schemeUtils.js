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

define(["require","exports","../../../Color"],function(o,r,e){function n(o,r){return c(o,r).map(function(o){return o.colors})}function c(o,r){var e=a(o),n=[];return e.forEach(function(o){var e,c=r>0,s=!!o.colorsForClassBreaks;e=c&&s?i(o.colorsForClassBreaks,r):o.colors,n.push({colors:e,scheme:o})}),n}function s(o){var r=a(o),e=[];return r.forEach(function(o){o.colors&&(e=e.concat(o.colors))}),f(e)}function t(o){o.colors&&o.colors.reverse(),o.colorsForClassBreaks&&o.colorsForClassBreaks.forEach(function(o){o.numClasses>1&&o.colors.reverse()})}function l(o){var r=a(o),e=[];return r.forEach(function(o){var r=o;r.outline?e.push(r.outline.color):r.colors&&(e=e.concat(r.colors))}),f(e)}function u(o,r){return o.map(function(o){var n=new e(o);return null!=r&&(n.a=r),n})}function a(o){return[o.primaryScheme].concat(o.secondarySchemes)}function i(o,r){for(var e,n=o.length,c=0;c<n;c++){var s=o[c];if(r<s.numClasses)break;e=s.colors}return e}function f(o){var r={};return o.filter(function(o){var e=!r[o.toHex()];return e&&(r[o.toHex()]=1),e})}Object.defineProperty(r,"__esModule",{value:!0}),r.getColorRamps=n,r.getColorRampsWithSchemes=c,r.getFillColors=s,r.flipColors=t,r.getOutlineColors=l,r.createColors=u});