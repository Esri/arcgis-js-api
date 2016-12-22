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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../Color"],function(o,r,n){function e(o,r){return c(o,r).map(function(o){return o.colors})}function c(o,r){var n=a(o),e=[];return n.forEach(function(o){var n,c=r>0,s=!!o.colorsForClassBreaks;n=c&&s?i(o.colorsForClassBreaks,r):o.colors,e.push({colors:n,scheme:o})}),e}function s(o){var r=a(o),n=[];return r.forEach(function(o){o.colors&&(n=n.concat(o.colors))}),f(n)}function t(o){o.colors&&o.colors.reverse(),o.colorsForClassBreaks&&o.colorsForClassBreaks.forEach(function(o){o.numClasses>1&&o.colors.reverse()})}function l(o){var r=a(o),n=[];return r.forEach(function(o){var r=o;r.outline?n.push(r.outline.color):r.colors&&(n=n.concat(r.colors))}),f(n)}function u(o,r){return o.map(function(o){var e=new n(o);return null!=r&&(e.a=r),e})}function a(o){return[o.primaryScheme].concat(o.secondarySchemes)}function i(o,r){for(var n,e=o.length,c=0;e>c;c++){var s=o[c];if(r<s.numClasses)break;n=s.colors}return n}function f(o){var r={};return o.filter(function(o){var n=!r[o.toHex()];return n&&(r[o.toHex()]=1),n})}r.getColorRamps=e,r.getColorRampsWithSchemes=c,r.getFillColors=s,r.flipColors=t,r.getOutlineColors=l,r.createColors=u});