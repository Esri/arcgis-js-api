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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],function(e,t,n,o,r){function i(e){var t=e.value,n=e.operations;return{operations:n,value:n.create(t)}}function a(e,t,n){return e.operations.setExtent(e.value,t,n.value),n}function u(e){return{operations:e,value:e.create()}}function c(e,t,n){return void 0===n&&(n=u(e)),n.operations=e,e.copy(t,n.value),n}function s(e,t){return g.operations=e,g.value=t,g}function l(e,t,n){return e.operations.axisAt(e.value,t,2,n)}function v(e,t,n,o){return e.operations.axisAt(e.value,t,n,o)}function f(e,t,n){return e.operations.intersectRay(e.value,t,n)}function p(e,t){return e.operations.intersectRay(e.value,t,null)}function d(e,t,n){return e.operations.closestPoint(e.value,t,n)}function m(e,t,n){return e.operations.intersectRayClosestSilhouette(e.value,t,n)}function A(e,t,n){return e.operations.closestPointOnSilhouette(e.value,t,n)}function y(e,t){return e.operations.distanceToSilhouette(e.value,t)}function x(e,t){return e.operations.altitudeAt(e.value,t)}function S(e,t,n,o){return e.operations.setAltitudeAt(e.value,t,n,o)}function h(e,t,r,i){return t!==i&&n.mat4.copy(i,t),o.vec3.set(b,i[12],i[13],i[14]),S(e,b,r,b),i[12]=b[0],i[13]=b[1],i[14]=b[2],i}function O(e,t,n){return e.operations.elevate(e.value,t,n.value)}function R(e,t,n,r,i){return i[0]=o.vec3.dot(e,t),i[1]=o.vec3.dot(e,n),i[2]=o.vec3.dot(e,r),i}function P(e,t,n,r,i){o.vec3.copy(n,e),o.vec3.copy(C,t),o.vec3.normalize(C,C),o.vec3.cross(r,C,n),o.vec3.cross(i,r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=i,t.setExtent=a,t.createFromOperations=u,t.fromValues=c,t.wrap=s,t.normalAt=l,t.axisAt=v,t.intersectRay=f,t.intersectsRay=p,t.closestPoint=d,t.intersectRayClosestSilhouette=m,t.closestPointOnSilhouette=A,t.distanceToSilhouette=y,t.altitudeAt=x,t.setAltitudeAt=S,t.setAltitudeOfTransformation=h,t.elevate=O;var b=r.vec3f64.create(),g={operations:null,value:null};t.vectorCoordinates=R,t.coordinateSystemFromOneAxisAndNormalVector=P;var C=r.vec3f64.create()});