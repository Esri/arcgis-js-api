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

define(["require","exports","../../declare","../metadata"],function(e,r,t,o){function n(e){return function(r){var o=p(r),n=c(r);null!=e&&(o.values.declaredClass=e);var s=t(r.__bases__,o.values);Object.defineProperties(s.prototype,o.descriptors);for(var a in n.values)s[a]=n.values[a];return Object.defineProperties(s,n.descriptors),s}}function s(e,r){e.read&&("function"==typeof e.read?r.push(e.read):"object"==typeof e.read&&e.read.reader&&r.push(e.read.reader))}function a(e,r){e.write&&("function"==typeof e.write?r.push(e.write):"object"==typeof e.write&&e.write.writer&&r.push(e.write.writer))}function i(e){var r=[],t=o.getPropertiesMetadata(e.prototype);if(!t)return r;for(var n in t){var i=t[n];i.cast&&r.push(i.cast),i.copy&&r.push(i.copy);var p=i.json;if(p){s(p,r),a(p,r);var c=p.origins;if(c)for(var u in c){var f=c[u];s(f,r),a(f,r)}}}return r}function p(e){var r={values:{},descriptors:{}},t=["__bases__"],n=o.getPropertiesMetadata(e.prototype),s=i(e);return Object.getOwnPropertyNames(e.prototype).filter(function(r){return!(-1!==t.indexOf(r)||n&&n.hasOwnProperty(r)||!u(Object.getOwnPropertyDescriptor(e.prototype,r))&&-1!==s.indexOf(e.prototype[r]))}).forEach(function(t){var o=Object.getOwnPropertyDescriptor(e.prototype,t);u(o)?r.descriptors[t]=o:r.values[t]=e.prototype[t]}),r}function c(e){var r=Object.getOwnPropertyNames(e),t=Object.getPrototypeOf(e.prototype).constructor,o=Object.getOwnPropertyNames(Function);o.push("__bases__");var n=Object.getOwnPropertyNames(t),s={values:{},descriptors:{}};return r.filter(function(r){return-1===o.indexOf(r)&&(-1===n.indexOf(r)||t[r]!==e[r])}).forEach(function(r){var t=Object.getOwnPropertyDescriptor(e,r);u(t)?s.descriptors[r]=t:s.values[r]=e[r]}),s}function u(e){return e&&!(!e.get&&!e.set)}Object.defineProperty(r,"__esModule",{value:!0}),r.subclass=n});