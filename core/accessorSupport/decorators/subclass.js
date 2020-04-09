// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../declare","../metadata"],(function(e,t,r,o){function a(e,t){e.read&&("function"==typeof e.read?t.push(e.read):"object"==typeof e.read&&e.read.reader&&t.push(e.read.reader))}function n(e,t){e.write&&("function"==typeof e.write?t.push(e.write):"object"==typeof e.write&&e.write.writer&&t.push(e.write.writer))}function s(e){return e&&!(!e.get&&!e.set)}Object.defineProperty(t,"__esModule",{value:!0}),t.subclass=function(e){return function(t){var p=function(e){var t={values:{},descriptors:{}},r=["__bases__"],p=o.getPropertiesMetadata(e.prototype),i=function(e){var t=[],r=o.getPropertiesMetadata(e.prototype);if(!r)return t;for(var s in r){var p=r[s];p.cast&&t.push(p.cast),p.copy&&t.push(p.copy);var i=p.json;if(i){a(i,t),n(i,t);var c=i.origins;if(c)for(var u in c){var f=c[u];a(f,t),n(f,t)}}}return t}(e);return Object.getOwnPropertyNames(e.prototype).filter((function(t){return-1===r.indexOf(t)&&((!p||!p.hasOwnProperty(t))&&!(!s(Object.getOwnPropertyDescriptor(e.prototype,t))&&-1!==i.indexOf(e.prototype[t])))})).forEach((function(r){var o=Object.getOwnPropertyDescriptor(e.prototype,r);s(o)?t.descriptors[r]=o:t.values[r]=e.prototype[r]})),t}(t),i=function(e){var t=Object.getOwnPropertyNames(e),r=Object.getPrototypeOf(e.prototype).constructor,o=Object.getOwnPropertyNames(Function);o.push("__bases__","caller","arguments");var a=Object.getOwnPropertyNames(r),n={values:{},descriptors:{}};return t.filter((function(t){return-1===o.indexOf(t)&&(-1===a.indexOf(t)||r[t]!==e[t])})).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);s(r)?n.descriptors[t]=r:n.values[t]=e[t]})),n}(t);null!=e&&(p.values.declaredClass=e);var c=r(t.__bases__,p.values);for(var u in function(e){var t=Object.getPrototypeOf(e.prototype),r=e._meta&&e._meta.bases,o=e._meta&&e._meta.parents;if(!t||!r||!o||o.length<=1)return;for(var a=1;a<r.length;a++){var n=r[a],p=n.__accessorMetadata__&&n.__accessorMetadata__.properties,i=t;if(t=Object.getPrototypeOf(t),-1!==o.indexOf(n))for(var c=Object.getOwnPropertyNames(n.prototype),u=0,f=c;u<f.length;u++){var d=f[u];if("initialized"!==d&&"constructed"!==d&&"destroyed"!==d&&!(p&&d in p)){var y=Object.getOwnPropertyDescriptor(n.prototype,d);s(y)&&Object.defineProperty(i,d,y)}}}}(c),Object.defineProperties(c.prototype,p.descriptors),i.values)c[u]=i.values[u];return Object.defineProperties(c,i.descriptors),c}}}));