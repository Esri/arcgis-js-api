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

define(["require","exports","../lang"],function(r,n,e){function t(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function a(r,n){return r&&r.metadatas&&null!=r.metadatas[n]}function i(r,n){return n?Object.keys(n).reduce(function(r,t){if("value"===t)return r[t]=n[t],r;if(void 0===r[t])return r[t]=e.clone(n[t]),r;var a=r[t],u=n[t];return a===u?r:(Array.isArray(u)||Array.isArray(r)?(a=a?Array.isArray(a)?r[t]=a.concat():r[t]=[a]:r[t]=[],u&&(Array.isArray(u)||(u=[u]),u.forEach(function(r){-1===a.indexOf(r)&&a.push(r)}))):u&&"object"==typeof u?r[t]=i(a,u):r.hasOwnProperty(t)&&!n.hasOwnProperty(t)||(r[t]=u),r)},r||{}):r}function u(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:o(r):r}function o(r){return Array.isArray(r)?r:r.split(".")}function c(r){if(Array.isArray(r)||r.indexOf(",")>-1){for(var n=Array.isArray(r)?r:r.split(","),e=0;e<n.length;e++)n[e]=n[e].trim();return 1===n.length?n[0]:n}return r.trim()}function f(r,n,e,t){var a=c(n);if(Array.isArray(a)){var i=a.map(function(n){return t(r,n.trim(),e)});return{remove:s(function(){return i.forEach(function(r){return r.remove()})})}}return t(r,a.trim(),e)}function s(r){var n=!1;return function(){n||(n=!0,r())}}Object.defineProperty(n,"__esModule",{value:!0}),n.getProperties=t,n.isPropertyDeclared=a,n.merge=i,n.pathToStringOrArray=u,n.pathToArray=o,n.splitPath=c,n.parse=f,n.once=s});