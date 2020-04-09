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

define(["require","exports","../../../../core/ObjectStack","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../stack"],(function(e,r,n,t,c,i,o,v){function d(e){return e?{origin:o.vec3f64.clone(e.origin),direction:o.vec3f64.clone(e.direction)}:{origin:o.vec3f64.create(),direction:o.vec3f64.create()}}function a(e,r,n){return void 0===n&&(n=d()),i.vec3.copy(n.origin,e),i.vec3.copy(n.direction,r),n}function u(e,r,n){void 0===n&&(n=d());var o=t.castRenderScreenPointArray3(c.vec2.copy(v.sv3d.get(),r));o[2]=0,e.unprojectPoint(o,n.origin);var a=t.castRenderScreenPointArray3(c.vec2.copy(v.sv3d.get(),r));a[2]=1;var u=e.unprojectPoint(a,v.sv3d.get());return i.vec3.subtract(n.direction,u,n.origin),n}function s(e,r,n){void 0===n&&(n=d()),i.vec3.copy(n.origin,e.eye);var t=i.vec3.set(v.sv3d.get(),r[0],r[1],1),c=e.unprojectPoint(t,v.sv3d.get());return i.vec3.subtract(n.direction,c,n.origin),n}function g(e,r){var n=i.vec3.cross(v.sv3d.get(),i.vec3.normalize(v.sv3d.get(),e.direction),i.vec3.subtract(v.sv3d.get(),r,e.origin));return i.vec3.dot(n,n)}function f(){return{origin:null,direction:null}}Object.defineProperty(r,"__esModule",{value:!0}),r.create=d,r.wrap=function(e,r){var n=l.get();return n.origin=e,n.direction=r,n},r.copy=function(e,r){return void 0===r&&(r=d()),a(e.origin,e.direction,r)},r.fromPoints=function(e,r,n){return void 0===n&&(n=d()),i.vec3.copy(n.origin,e),i.vec3.subtract(n.direction,r,e),n},r.fromValues=a,r.fromScreen=function(e,r,n){return void 0===n&&(n=d()),u(e,e.screenToRender(r,t.castRenderScreenPointArray3(v.sv3d.get())),n)},r.fromRender=u,r.fromScreenAtEye=function(e,r,n){return void 0===n&&(n=d()),s(e,e.screenToRender(r,t.castRenderScreenPointArray3(v.sv3d.get())),n)},r.fromRenderAtEye=s,r.distance2=g,r.distance=function(e,r){return Math.sqrt(g(e,r))},r.closestPoint=function(e,r,n){var t=i.vec3.dot(e.direction,i.vec3.subtract(n,r,e.origin));return i.vec3.add(n,e.origin,i.vec3.scale(n,e.direction,t)),n},r.createWrapper=f;var l=new n.ObjectStack(f)}));