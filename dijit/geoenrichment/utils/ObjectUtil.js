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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/number"],function(r){var t={};return t.populateObject=function(r,t,o){function e(r,t){if(r&&t)for(var n in r)void 0===t[n]?t[n]=r[n]:"object"==typeof t[n]?e(r[n],t[n]):o&&(t[n]=r[n])}e(t,r)},t.traverseObject=function(r,o){for(var e in r){var n=r[e];o(n),n&&"object"==typeof n&&t.traverseObject(n,o)}},t.formatNumber=function(t,o,e){if(0>o)return r.format(t);var n=r.format(t,{places:o});if(e||!o||!n)return n;for(var f=n.length;o>0&&"0"==n.charAt(f-1);)f--,--o||f--;return n.substr(0,f)},t.copyOwnJsonProperties=function(r,t,o){t=t||{};for(var e in r){var n=r[e];r.hasOwnProperty(e)&&"function"!=typeof n&&(n&&"object"==typeof n&&o&&(n=o(e,n)),void 0!==n&&(t[e]=n))}return t},t});