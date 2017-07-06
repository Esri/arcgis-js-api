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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../declare","../metadata"],function(e,r,t,n){function o(e){return function(r){var n=f(r),o=p(r);null!=e&&(n.declaredClass=e);var a=t(r.__bases__,n);for(var i in o)a[i]=o[i];return a}}function a(e,r){e.read&&("function"==typeof e.read?r.push(e.read):"object"==typeof e.read&&e.read.reader&&r.push(e.read.reader))}function i(e,r){e.write&&("function"==typeof e.write?r.push(e.write):"object"==typeof e.write&&e.write.writer&&r.push(e.write.writer))}function u(e){var r=[],t=n.getPropertiesMetadata(e.prototype);if(!t)return r;for(var o in t){var u=t[o];u.cast&&r.push(u.cast),u.copy&&r.push(u.copy);var f=u.json;if(f){a(f,r),i(f,r);var p=f.origins;if(p)for(var c in p){var s=p[c];a(s,r),i(s,r)}}}return r}function f(e){var r={},t=["__bases__"],o=n.getPropertiesMetadata(e.prototype),a=u(e),i=Object.getOwnPropertyNames(e.prototype);return i.filter(function(r){return-1!==t.indexOf(r)?!1:o&&o.hasOwnProperty(r)?!1:-1!==a.indexOf(e.prototype[r])?!1:!0}).forEach(function(t){r[t]=e.prototype[t]}),r}function p(e){var r=Object.getOwnPropertyNames(e),t=Object.getPrototypeOf(e.prototype).constructor,n=Object.getOwnPropertyNames(Function);n.push("__bases__");var o=Object.getOwnPropertyNames(t),a={};return r.filter(function(r){return-1!==n.indexOf(r)?!1:-1===o.indexOf(r)?!0:t[r]!==e[r]?!0:!1}).forEach(function(r){a[r]=e[r]}),a}Object.defineProperty(r,"__esModule",{value:!0}),r.subclass=o});