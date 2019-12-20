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

define(["require","exports"],function(r,n){function t(r,n){if(r.forEach)r.forEach(n);else for(var t=0;t<r.length;t++)n(r[t],t,r)}function o(r,n,t){if(r.slice)return r.slice(n,t);void 0===n?n=0:(n<0&&(n+=r.length),n=Math.min(r.length,Math.max(0,n))),void 0===t?t=r.length:(t<0&&(t+=r.length),t=Math.min(r.length,Math.max(0,t)));for(var o=Math.max(0,t-n),a=r.constructor,c=new a(o),e=0;e<o;e++)c[e]=r[n+e];return c}function a(r){return r instanceof ArrayBuffer||r&&r.constructor&&"ArrayBuffer"===r.constructor.name}function c(r){return r instanceof Int8Array||r&&r.constructor&&"Int8Array"===r.constructor.name}function e(r){return r instanceof Uint8Array||r&&r.constructor&&"Uint8Array"===r.constructor.name}function i(r){return r instanceof Uint8ClampedArray||r&&r.constructor&&"Uint8ClampedArray"===r.constructor.name}function u(r){return r instanceof Int16Array||r&&r.constructor&&"Int16Array"===r.constructor.name}function s(r){return r instanceof Uint16Array||r&&r.constructor&&"Uint16Array"===r.constructor.name}function f(r){return r instanceof Int32Array||r&&r.constructor&&"Int32Array"===r.constructor.name}function y(r){return r instanceof Uint32Array||r&&r.constructor&&"Uint32Array"===r.constructor.name}function A(r){return r instanceof Float32Array||r&&r.constructor&&"Float32Array"===r.constructor.name}function l(r){return r instanceof Float64Array||r&&r.constructor&&"Float64Array"===r.constructor.name}function m(r){for(var n=new Array(r.length),t=0;t<r.length;t++)n[t]=r[t];return n}function h(r){return r?128+r.buffer.byteLength+64:0}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=t,n.slice=o,n.isArrayBuffer=a,n.isInt8Array=c,n.isUint8Array=e,n.isUint8ClampedArray=i,n.isInt16Array=u,n.isUint16Array=s,n.isInt32Array=f,n.isUint32Array=y,n.isFloat32Array=A,n.isFloat64Array=l,n.toArray=m,n.estimateSize=h});