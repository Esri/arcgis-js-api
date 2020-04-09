// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./typedArrayUtil"],(function(e,n,t){function r(e,n,t){var r,i,o={};for(r in n){i=n[r];var f=!(r in o)||o[r]!==i;r in e&&(e[r]===i||!f)||(e[r]=t?t(i):i)}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.fixJson=function e(n,t){var r;if(t)for(r in n)n.hasOwnProperty(r)&&(void 0===n[r]?delete n[r]:n[r]instanceof Object&&e(n[r],!0));else for(r in n)n.hasOwnProperty(r)&&void 0===n[r]&&delete n[r];return n},n.clone=function e(n){if(!n||"object"!=typeof n||"function"==typeof n)return n;if(t.isInt8Array(n)||t.isUint8Array(n)||t.isUint8ClampedArray(n)||t.isInt16Array(n)||t.isUint16Array(n)||t.isInt32Array(n)||t.isUint32Array(n)||t.isFloat32Array(n)||t.isFloat64Array(n))return t.slice(n);if(n instanceof Date)return new Date(n.getTime());if(n instanceof ArrayBuffer)return n.slice(0,n.byteLength);if(n instanceof Map){var i=new Map;return n.forEach((function(n,t){i.set(t,e(n))})),i}if(n instanceof Set){var o=new Set;return n.forEach((function(n){o.add(e(n))})),o}var f=n;return"function"==typeof f.clone?f.clone():"function"==typeof f.map&&"function"==typeof f.forEach?f.map(e):"function"==typeof f.notifyChange&&"function"==typeof f.watch?f.clone():r({},n,e)},n.equals=function(e,n){return e===n||"number"==typeof e&&isNaN(e)&&"number"==typeof n&&isNaN(n)||"function"==typeof(e||{}).getTime&&"function"==typeof(n||{}).getTime&&e.getTime()===n.getTime()||!1},n.mixin=function(e){void 0===e&&(e={});for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];for(var i=0,o=n;i<o.length;i++){var f=o[i];r(e,f)}return e}}));