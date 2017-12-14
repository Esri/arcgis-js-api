// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-style"],function(t){function e(e,o,r){if(o=o.toLowerCase(),"auto"===r){if("height"===o)return e.offsetHeight;if("width"===o)return e.offsetWidth}if("fontweight"===o)switch(r){case 700:return"bold";case 400:default:return"normal"}return o in i||(i[o]=n.test(o)),i[o]?t.toPixelValue(e,r):r}var o={};o.get=function(o,i){var n=o.__computedStyle||t.getComputedStyle(o);if("string"==typeof i)return e(o,i,n[i]||o.style[i]);for(var r in i)i[r]=e(o,r,n[r]||o.style[r]);return i},o.cacheComputedStyle=function(e){e&&(e.__computedStyle=t.getComputedStyle(e))},o.clearCache=function(t){t&&delete t.__computedStyle};var i={left:!0,top:!0},n=/margin|padding|width|height|max|min|offset/;return o.set=t.set,o.toPixelValue=t.toPixelValue,o.getComputedStyle=t.getComputedStyle,o});