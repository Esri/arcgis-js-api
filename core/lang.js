// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./typedArrayUtil"],function(e,n,t){function r(e,n){var t;if(n)for(t in e)e.hasOwnProperty(t)&&(void 0===e[t]?delete e[t]:e[t]instanceof Object&&r(e[t],!0));else for(t in e)e.hasOwnProperty(t)&&void 0===e[t]&&delete e[t];return e}function i(e){if(!e||"object"!=typeof e||"function"==typeof e)return e;if(t.isInt8Array(e)||t.isUint8Array(e)||t.isUint8ClampedArray(e)||t.isInt16Array(e)||t.isUint16Array(e)||t.isInt32Array(e)||t.isUint32Array(e)||t.isFloat32Array(e)||t.isFloat64Array(e))return t.slice(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer){return e.slice(0,e.byteLength)}var n=e;return"function"==typeof n.clone?n.clone():"function"==typeof n.map&&"function"==typeof n.forEach?n.map(i):"function"==typeof n.notifyChange&&"function"==typeof n.watch?n.clone():a({},e,i)}function o(e,n){return e===n||"number"==typeof e&&isNaN(e)&&"number"==typeof n&&isNaN(n)||"function"==typeof(e||{}).getTime&&"function"==typeof(n||{}).getTime&&e.getTime()===n.getTime()||!1}function f(e){void 0===e&&(e={});for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];for(var r=1,i=arguments.length;r<i;r++)a(e,arguments[r]);return e}function a(e,n,t){var r,i,o={};for(r in n){i=n[r];var f=!(r in o)||o[r]!==i;r in e&&(e[r]===i||!f)||(e[r]=t?t(i):i)}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.fixJson=r,n.clone=i,n.equals=o,n.mixin=f});