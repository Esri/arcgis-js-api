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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix"],function(e,t,n){function o(e){var t=e.value,n=e.operations;return{operations:n,value:n.create(t)}}function r(e,t,n){return e.operations.setExtent(e.value,t,n.value),n}function i(e){return{operations:e,value:e.create()}}function a(e,t,n){return void 0===n&&(n=i(e)),n.operations=e,e.copy(t,n.value),n}function u(e,t){return P.operations=e,P.value=t,P}function s(e,t,n){return e.operations.axisAt(e.value,t,2,n)}function c(e,t,n,o){return e.operations.axisAt(e.value,t,n,o)}function l(e,t,n){return e.operations.intersectRay(e.value,t,n)}function v(e,t){return e.operations.intersectRay(e.value,t,null)}function f(e,t,n){return e.operations.closestPoint(e.value,t,n)}function p(e,t,n){return e.operations.intersectRayClosestSilhouette(e.value,t,n)}function d(e,t,n){return e.operations.closestPointOnSilhouette(e.value,t,n)}function A(e,t){return e.operations.distanceToSilhouette(e.value,t)}function y(e,t){return e.operations.altitudeAt(e.value,t)}function m(e,t,n,o){return e.operations.setAltitudeAt(e.value,t,n,o)}function x(e,t,o,r){return t!==r&&n.mat4.copy(r,t),n.vec3.set(R,r[12],r[13],r[14]),m(e,R,o,R),r[12]=R[0],r[13]=R[1],r[14]=R[2],r}function S(e,t,n){return e.operations.elevate(e.value,t,n.value)}function h(e,t,o,r,i){return i[0]=n.vec3.dot(e,t),i[1]=n.vec3.dot(e,o),i[2]=n.vec3.dot(e,r),i}function O(e,t,o,r,i){n.vec3.copy(o,e),n.vec3.copy(C,t),n.vec3.normalize(C,C),n.vec3.cross(r,C,o),n.vec3.cross(i,r,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=o,t.setExtent=r,t.createFromOperations=i,t.fromValues=a,t.wrap=u,t.normalAt=s,t.axisAt=c,t.intersectRay=l,t.intersectsRay=v,t.closestPoint=f,t.intersectRayClosestSilhouette=p,t.closestPointOnSilhouette=d,t.distanceToSilhouette=A,t.altitudeAt=y,t.setAltitudeAt=m,t.setAltitudeOfTransformation=x,t.elevate=S;var R=n.vec3f64.create(),P={operations:null,value:null};t.vectorCoordinates=h,t.coordinateSystemFromOneAxisAndNormalVector=O;var C=n.vec3f64.create()});