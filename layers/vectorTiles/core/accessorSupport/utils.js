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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../lang"],(function(r,n,e){function t(r){return Array.isArray(r)?r:r.split(".")}function a(r){if(Array.isArray(r)||r.indexOf(",")>-1){for(var n=Array.isArray(r)?r:r.split(","),e=0;e<n.length;e++)n[e]=n[e].trim();return 1===n.length?n[0]:n}return r.trim()}function i(r){var n=!1;return function(){n||(n=!0,r())}}Object.defineProperty(n,"__esModule",{value:!0}),n.getProperties=function(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null},n.isPropertyDeclared=function(r,n){return r&&r.metadatas&&null!=r.metadatas[n]},n.merge=function r(n,t){return t?Object.keys(t).reduce((function(n,a){if("value"===a)return n[a]=t[a],n;if(void 0===n[a])return n[a]=e.clone(t[a]),n;var i=n[a],u=t[a];return i===u?n:(Array.isArray(u)||Array.isArray(n)?(i=i?Array.isArray(i)?n[a]=i.concat():n[a]=[i]:n[a]=[],u&&(Array.isArray(u)||(u=[u]),u.forEach((function(r){-1===i.indexOf(r)&&i.push(r)})))):u&&"object"==typeof u?n[a]=r(i,u):n.hasOwnProperty(a)&&!t.hasOwnProperty(a)||(n[a]=u),n)}),n||{}):n},n.pathToStringOrArray=function(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:t(r):r},n.pathToArray=t,n.splitPath=a,n.parse=function(r,n,e,t){var u=a(n);if(Array.isArray(u)){var o=u.map((function(n){return t(r,n.trim(),e)}));return{remove:i((function(){return o.forEach((function(r){return r.remove()}))}))}}return t(r,u.trim(),e)},n.once=i}));