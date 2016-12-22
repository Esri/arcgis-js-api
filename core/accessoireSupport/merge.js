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

define(["dojo/_base/lang"],function(r){var a=function(e,n){return n?Object.keys(n).reduce(function(e,c){var o,t;return"value"===c?e[c]=n[c]:void 0===e[c]?e[c]=r.clone(n[c]):(o=e[c],t=n[c],o!==t&&(Array.isArray(t)||Array.isArray(e)?(o=o?Array.isArray(o)?e[c]=o.concat():e[c]=[o]:e[c]=[],t&&(Array.isArray(t)||(t=[t]),e[c]=o.concat(t))):t&&"object"==typeof t?e[c]=a(o,t):(!o||t)&&(e[c]=t))),e},e||{}):e};return a});