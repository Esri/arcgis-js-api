// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/gl-matrix","../stack"],function(e,r,t,i,n){function c(e){return e?{origin:i.vec3f64.clone(e.origin),direction:i.vec3f64.clone(e.direction)}:{origin:i.vec3f64.create(),direction:i.vec3f64.create()}}function o(e,r){var t=p.get();return t.origin=e,t.direction=r,t}function v(e,r){return void 0===r&&(r=c()),u(e.origin,e.direction,r)}function u(e,r,t){return void 0===t&&(t=c()),i.vec3.copy(t.origin,e),i.vec3.copy(t.direction,r),t}function d(e,r,t){void 0===t&&(t=c());var o=i.vec3.set(n.sv3d.get(),r[0],r[1],0);e.unprojectPoint(o,t.origin);var v=i.vec3.set(n.sv3d.get(),r[0],r[1],1),u=e.unprojectPoint(v,n.sv3d.get());return i.vec3.subtract(t.direction,u,t.origin),t}function a(e,r,t){void 0===t&&(t=c()),i.vec3.copy(t.origin,e.eye);var o=i.vec3.set(n.sv3d.get(),r[0],r[1],1),v=e.unprojectPoint(o,n.sv3d.get());return i.vec3.subtract(t.direction,v,t.origin),t}function s(e,r){var t=i.vec3.cross(n.sv3d.get(),i.vec3.normalize(n.sv3d.get(),e.direction),i.vec3.subtract(n.sv3d.get(),r,e.origin));return i.vec3.dot(t,t)}function g(e,r){return Math.sqrt(s(e,r))}function f(e,r,t){var n=i.vec3.dot(e.direction,i.vec3.subtract(t,r,e.origin));return i.vec3.add(t,e.origin,i.vec3.scale(t,e.direction,n)),t}function l(){return{origin:null,direction:null}}Object.defineProperty(r,"__esModule",{value:!0}),r.create=c,r.wrap=o,r.copy=v,r.fromValues=u,r.fromScreen=d,r.fromScreenAtEye=a,r.distance2=s,r.distance=g,r.closestPoint=f,r.createWrapper=l;var p=new t.ObjectStack(l)});