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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/dom-style"],(function(e){var t={},o=/^-webkit-/;t.get=function(t,i){var n,u=t.__computedStyle||e.getComputedStyle(t);if("string"==typeof i)n=r(t,i,u[i]||t.style[i]);else{for(var l in i)i[l]=r(t,l,u[l]||t.style[l]);n=i}return function(e){return"string"==typeof e?e.replace(o,""):e}(n)},t.cacheComputedStyle=function(t){if(t)return t.__computedStyle=e.getComputedStyle(t)},t.setComputedStyleCache=function(e,t){e&&(e.__computedStyle=t)},t.clearCache=function(e){e&&delete e.__computedStyle};var i={left:!0,top:!0},n=/margin|padding|width|height|max|min|offset/;function r(t,o,r){if(o=o.toLowerCase(),"auto"===r){if("height"===o)return t.offsetHeight;if("width"===o)return t.offsetWidth}if("fontweight"===o)switch(String(r)){case"700":return"bold";case"400":default:return"normal"}return o in i||(i[o]=n.test(o)),i[o]?e.toPixelValue(t,r):r}return t.set=e.set,t.toPixelValue=e.toPixelValue,t.getComputedStyle=e.getComputedStyle,t}));