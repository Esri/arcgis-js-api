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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../lang"],function(r,n,e){function t(r){return r?r.__accessor__?r.__accessor__:r._accessorProps?r._accessorProps:r.propertyInvalidated?r:null:null}function a(r,n){var e=r;return r&&(e.metadatas&&null!=e.metadatas[n]||null!=e.properties)}function i(r,n){return n?Object.keys(n).reduce(function(r,t){if("value"===t)return r[t]=n[t],r;if(void 0===r[t])return r[t]=e.clone(n[t]),r;var a=r[t],u=n[t];return a===u?r:(Array.isArray(u)||Array.isArray(r)?(a=r[t]=a?Array.isArray(a)?a.concat():[a]:[],u&&(Array.isArray(u)||(u=[u]),u.forEach(function(r){-1===a.indexOf(r)&&a.push(r)}))):u&&"object"==typeof u?r[t]=i(a,u):(!r.hasOwnProperty(t)||n.hasOwnProperty(t))&&(r[t]=u),r)},r||{}):r}function u(r){return Array.isArray(r)?r:r.split(".")}function o(r,n,e,t){if(Array.isArray(n)||n.indexOf(",")>-1){var a=Array.isArray(n)?n:n.split(","),i=a.map(function(n){return t(r,n.trim(),e)});return{remove:c(function(){return i.forEach(function(r){return r.remove()})})}}return t(r,n.trim(),e)}function c(r){var n=!1;return function(){n||(n=!0,r())}}function s(r){if(null==r)return f+y++;var n=t(r);return n.uid||(n.uid=f+y++),n.uid}n.getProperties=t,n.isPropertyDeclared=a,n.merge=i,n.pathToArray=u,n.parse=o,n.once=c;var f="uid-",y=0;n.uid=s});