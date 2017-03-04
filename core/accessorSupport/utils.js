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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../lang"],function(r,n,t){function e(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function i(r,n){return r&&r.metadatas&&null!=r.metadatas[n]}function a(r,n){return n?Object.keys(n).reduce(function(r,e){if("value"===e)return r[e]=n[e],r;if(void 0===r[e])return r[e]=t.clone(n[e]),r;var i=r[e],u=n[e];return i===u?r:(Array.isArray(u)||Array.isArray(r)?(i=i?Array.isArray(i)?r[e]=i.concat():r[e]=[i]:r[e]=[],u&&(Array.isArray(u)||(u=[u]),u.forEach(function(r){-1===i.indexOf(r)&&i.push(r)}))):u&&"object"==typeof u?r[e]=a(i,u):(!r.hasOwnProperty(e)||n.hasOwnProperty(e))&&(r[e]=u),r)},r||{}):r}function u(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:o(r):r}function o(r){return Array.isArray(r)?r:r.split(".")}function c(r){if(Array.isArray(r)||r.indexOf(",")>-1){for(var n=Array.isArray(r)?r:r.split(","),t=0;t<n.length;t++)n[t]=n[t].trim();return 1===n.length?n[0]:n}return r.trim()}function f(r,n,t,e){var i=c(n);if(Array.isArray(i)){var a=i.map(function(n){return e(r,n.trim(),t)});return{remove:s(function(){return a.forEach(function(r){return r.remove()})})}}return e(r,i.trim(),t)}function s(r){var n=!1;return function(){n||(n=!0,r())}}function y(r){if(null==r)return l++;var n=e(r);return null==n.uid&&(n.uid=l++),n.uid}n.getProperties=e,n.isPropertyDeclared=i,n.merge=a,n.pathToStringOrArray=u,n.pathToArray=o,n.splitPath=c,n.parse=f,n.once=s;var l=0;n.uid=y});