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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../declare","../metadata"],function(e,t,r,o){function a(e){return function(t){var o=c(t),a=u(t);null!=e&&(o.values.declaredClass=e);var s=r(t.__bases__,o.values);n(s),Object.defineProperties(s.prototype,o.descriptors);for(var p in a.values)s[p]=a.values[p];return Object.defineProperties(s,a.descriptors),s}}function n(e){var t=Object.getPrototypeOf(e.prototype),r=e._meta&&e._meta.bases,o=e._meta&&e._meta.parents;if(t&&r&&o&&!(o.length<=1))for(var a=1;a<r.length;a++){var n=r[a],s=n.__accessorMetadata__&&n.__accessorMetadata__.properties,p=t;if(t=Object.getPrototypeOf(t),-1!==o.indexOf(n))for(var i=Object.getOwnPropertyNames(n.prototype),c=0,u=i;c<u.length;c++){var d=u[c];if("initialized"!==d&&"constructed"!==d&&"destroyed"!==d&&!(s&&d in s)){var y=Object.getOwnPropertyDescriptor(n.prototype,d);f(y)&&Object.defineProperty(p,d,y)}}}}function s(e,t){e.read&&("function"==typeof e.read?t.push(e.read):"object"==typeof e.read&&e.read.reader&&t.push(e.read.reader))}function p(e,t){e.write&&("function"==typeof e.write?t.push(e.write):"object"==typeof e.write&&e.write.writer&&t.push(e.write.writer))}function i(e){var t=[],r=o.getPropertiesMetadata(e.prototype);if(!r)return t;for(var a in r){var n=r[a];n.cast&&t.push(n.cast),n.copy&&t.push(n.copy);var i=n.json;if(i){s(i,t),p(i,t);var c=i.origins;if(c)for(var u in c){var f=c[u];s(f,t),p(f,t)}}}return t}function c(e){var t={values:{},descriptors:{}},r=["__bases__"],a=o.getPropertiesMetadata(e.prototype),n=i(e);return Object.getOwnPropertyNames(e.prototype).filter(function(t){return!(-1!==r.indexOf(t)||a&&a.hasOwnProperty(t)||!f(Object.getOwnPropertyDescriptor(e.prototype,t))&&-1!==n.indexOf(e.prototype[t]))}).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e.prototype,r);f(o)?t.descriptors[r]=o:t.values[r]=e.prototype[r]}),t}function u(e){var t=Object.getOwnPropertyNames(e),r=Object.getPrototypeOf(e.prototype).constructor,o=Object.getOwnPropertyNames(Function);o.push("__bases__","caller","arguments");var a=Object.getOwnPropertyNames(r),n={values:{},descriptors:{}};return t.filter(function(t){return-1===o.indexOf(t)&&(-1===a.indexOf(t)||r[t]!==e[t])}).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);f(r)?n.descriptors[t]=r:n.values[t]=e[t]}),n}function f(e){return e&&!(!e.get&&!e.set)}Object.defineProperty(t,"__esModule",{value:!0}),t.subclass=a});