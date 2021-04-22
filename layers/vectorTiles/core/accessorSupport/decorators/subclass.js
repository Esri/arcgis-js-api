// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../../declare","../metadata"],(function(e,r,t,o){function n(e,r){e.read&&("function"==typeof e.read?r.push(e.read):"object"==typeof e.read&&e.read.reader&&r.push(e.read.reader))}function s(e,r){e.write&&("function"==typeof e.write?r.push(e.write):"object"==typeof e.write&&e.write.writer&&r.push(e.write.writer))}function a(e){return e&&!(!e.get&&!e.set)}Object.defineProperty(r,"__esModule",{value:!0}),r.subclass=function(e){return function(r){var i=function(e){var r={values:{},descriptors:{}},t=["__bases__"],i=o.getPropertiesMetadata(e.prototype),p=function(e){var r=[],t=o.getPropertiesMetadata(e.prototype);if(!t)return r;for(var a in t){var i=t[a];i.cast&&r.push(i.cast),i.copy&&r.push(i.copy);var p=i.json;if(p){n(p,r),s(p,r);var c=p.origins;if(c)for(var u in c){var f=c[u];n(f,r),s(f,r)}}}return r}(e);return Object.getOwnPropertyNames(e.prototype).filter((function(r){return-1===t.indexOf(r)&&((!i||!i.hasOwnProperty(r))&&!(!a(Object.getOwnPropertyDescriptor(e.prototype,r))&&-1!==p.indexOf(e.prototype[r])))})).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e.prototype,t);a(o)?r.descriptors[t]=o:r.values[t]=e.prototype[t]})),r}(r),p=function(e){var r=Object.getOwnPropertyNames(e),t=Object.getPrototypeOf(e.prototype).constructor,o=Object.getOwnPropertyNames(Function);o.push("__bases__");var n=Object.getOwnPropertyNames(t),s={values:{},descriptors:{}};return r.filter((function(r){return-1===o.indexOf(r)&&(-1===n.indexOf(r)||t[r]!==e[r])})).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);a(t)?s.descriptors[r]=t:s.values[r]=e[r]})),s}(r);null!=e&&(i.values.declaredClass=e);var c=t(r.__bases__,i.values);for(var u in Object.defineProperties(c.prototype,i.descriptors),p.values)c[u]=p.values[u];return Object.defineProperties(c,p.descriptors),c}}}));