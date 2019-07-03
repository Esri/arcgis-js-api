// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/dom-style"],function(e){function t(e){return"string"==typeof e?e.replace(n,""):e}function o(t,o,i){if(o=o.toLowerCase(),"auto"===i){if("height"===o)return t.offsetHeight;if("width"===o)return t.offsetWidth}if("fontweight"===o)switch(String(i)){case"700":return"bold";case"400":default:return"normal"}return o in r||(r[o]=u.test(o)),r[o]?e.toPixelValue(t,i):i}var i={},n=/^-webkit-/;i.get=function(i,n){var r,u=i.__computedStyle||e.getComputedStyle(i);if("string"==typeof n)r=o(i,n,u[n]||i.style[n]);else{for(var l in n)n[l]=o(i,l,u[l]||i.style[l]);r=n}return t(r)},i.cacheComputedStyle=function(t){if(t)return t.__computedStyle=e.getComputedStyle(t)},i.setComputedStyleCache=function(e,t){e&&(e.__computedStyle=t)},i.clearCache=function(e){e&&delete e.__computedStyle};var r={left:!0,top:!0},u=/margin|padding|width|height|max|min|offset/;return i.set=e.set,i.toPixelValue=e.toPixelValue,i.getComputedStyle=e.getComputedStyle,i});