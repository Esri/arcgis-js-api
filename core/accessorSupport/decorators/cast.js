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

define(["require","exports","../metadata","../ensureType"],function(t,e,a,r){function n(t){var e="_meta"in t?r.ensureType(t):t;return function(){for(var t=[],a=0;a<arguments.length;a++)t[a-0]=arguments[a];return t.push(e),"number"==typeof t[2]?u.apply(this,t):o.apply(this,t)}}function o(t,e,r,n){a.getPropertyMetadata(t,e).cast=n}function u(t,e,r,n){a.getParameterMetadata(t,e,r).cast=n}function i(t){return function(e,r,n){var o=a.getPropertyMetadata(e,t);o.cast=e[r]}}function s(t,e,r){if(a.hasParametersMetadata(t,e)){var n=a.getParametersMetadata(t,e).filter(function(t){return null!=t.cast});if(!n.length)return void console.warn("Method "+t.declaredClass+"::"+e+" is decorated with @autocast but no parameters are decorated");var o=r.value;return r.value=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var a=0,r=n;a<r.length;a++){var u=r[a];t[u.index]=u.cast(t[u.index])}return o.apply(this,t)},r}}function c(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return 3!==t.length||"string"!=typeof t[1]?1===t.length&&"[object Function]"===f.call(t[0])?n(t[0]):1===t.length&&"string"==typeof t[0]?i(t[0]):void 0:void 0}var f=Object.prototype.toString;e.autocastMethod=s,e.cast=c});