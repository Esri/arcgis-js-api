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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.estimateSize=t.toArray=t.isFloat64Array=t.isFloat32Array=t.isUint32Array=t.isInt32Array=t.isUint16Array=t.isInt16Array=t.isUint8ClampedArray=t.isUint8Array=t.isInt8Array=t.isArrayBuffer=t.slice=t.forEach=void 0,t.forEach=function(r,t){if(r.forEach)r.forEach(t);else for(var n=0;n<r.length;n++)t(r[n],n,r)},t.slice=function(r,t,n){if(r.slice)return r.slice(t,n);void 0===t?t=0:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t))),void 0===n?n=r.length:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n)));for(var a=Math.max(0,n-t),o=new(0,r.constructor)(a),e=0;e<a;e++)o[e]=r[t+e];return o},t.isArrayBuffer=function(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name},t.isInt8Array=function(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name},t.isUint8Array=function(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name},t.isUint8ClampedArray=function(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name},t.isInt16Array=function(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name},t.isUint16Array=function(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name},t.isInt32Array=function(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name},t.isUint32Array=function(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name},t.isFloat32Array=function(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name},t.isFloat64Array=function(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name},t.toArray=function(r){for(var t=new Array(r.length),n=0;n<r.length;n++)t[n]=r[n];return t},t.estimateSize=function(r){return r?128+r.buffer.byteLength+64:0}}));