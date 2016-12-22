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

define(["require","exports","../../declare","../metadata"],function(r,t,e,n){function o(r){return function(t){var n=i(t),o=s(t);null!=r&&(n.declaredClass=r);var a=e(t.__bases__,n);for(var p in o)a[p]=o[p];return a}}function a(r){var t=[],e=n.getPropertiesMetadata(r.prototype);if(!e)return t;for(var o in e){var a=e[o];a.cast&&t.push(a.cast),a.copy&&t.push(a.copy);var i=a.json;if(i){i.read&&t.push(i.read),i.write&&t.push(i.write);var s=i.origins;if(s)for(var p in s){var u=s[p];u.read&&t.push(u.read),u.write&&t.push(u.write)}}}return t}function i(r){var t={},e=["__bases__"],o=n.getPropertiesMetadata(r.prototype),i=a(r),s=Object.getOwnPropertyNames(r.prototype);return s.filter(function(t){return-1!==e.indexOf(t)?!1:o&&o.hasOwnProperty(t)?!1:-1!==i.indexOf(r.prototype[t])?!1:!0}).forEach(function(e){t[e]=r.prototype[e]}),t}function s(r){var t=Object.getOwnPropertyNames(r),e=Object.getOwnPropertyNames(Object.getPrototypeOf(r.prototype).constructor);e.push("__bases__");var n={};return t.filter(function(r){return-1===e.indexOf(r)}).forEach(function(t){n[t]=r[t]}),n}t.subclass=o});