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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../stack"],(function(e,r,n,t,c,i,o,d){"use strict";function v(e){return e?{origin:o.vec3f64.clone(e.origin),direction:o.vec3f64.clone(e.direction)}:{origin:o.vec3f64.create(),direction:o.vec3f64.create()}}function a(e,r,n){return void 0===n&&(n=v()),i.vec3.copy(n.origin,e),i.vec3.copy(n.direction,r),n}function s(e,r,n){void 0===n&&(n=v());var o=t.castRenderScreenPointArray3(c.vec2.copy(d.sv3d.get(),r));o[2]=0,e.unprojectPoint(o,n.origin);var a=t.castRenderScreenPointArray3(c.vec2.copy(d.sv3d.get(),r));a[2]=1;var s=e.unprojectPoint(a,d.sv3d.get());return i.vec3.subtract(n.direction,s,n.origin),n}function u(e,r,n){void 0===n&&(n=v()),i.vec3.copy(n.origin,e.eye);var t=i.vec3.set(d.sv3d.get(),r[0],r[1],1),c=e.unprojectPoint(t,d.sv3d.get());return i.vec3.subtract(n.direction,c,n.origin),n}function f(e,r){var n=i.vec3.cross(d.sv3d.get(),i.vec3.normalize(d.sv3d.get(),e.direction),i.vec3.subtract(d.sv3d.get(),r,e.origin));return i.vec3.dot(n,n)}function g(){return{origin:null,direction:null}}Object.defineProperty(r,"__esModule",{value:!0}),r.createWrapper=r.closestPoint=r.distance=r.distance2=r.fromRenderAtEye=r.fromScreenAtEye=r.fromRender=r.fromScreen=r.fromValues=r.fromPoints=r.copy=r.wrap=r.create=void 0,r.create=v,r.wrap=function(e,r){var n=l.get();return n.origin=e,n.direction=r,n},r.copy=function(e,r){return void 0===r&&(r=v()),a(e.origin,e.direction,r)},r.fromPoints=function(e,r,n){return void 0===n&&(n=v()),i.vec3.copy(n.origin,e),i.vec3.subtract(n.direction,r,e),n},r.fromValues=a,r.fromScreen=function(e,r,n){return void 0===n&&(n=v()),s(e,e.screenToRender(r,t.castRenderScreenPointArray3(d.sv3d.get())),n)},r.fromRender=s,r.fromScreenAtEye=function(e,r,n){return void 0===n&&(n=v()),u(e,e.screenToRender(r,t.castRenderScreenPointArray3(d.sv3d.get())),n)},r.fromRenderAtEye=u,r.distance2=f,r.distance=function(e,r){return Math.sqrt(f(e,r))},r.closestPoint=function(e,r,n){var t=i.vec3.dot(e.direction,i.vec3.subtract(n,r,e.origin));return i.vec3.add(n,e.origin,i.vec3.scale(n,e.direction,t)),n},r.createWrapper=g;var l=new n.ObjectStack(g)}));