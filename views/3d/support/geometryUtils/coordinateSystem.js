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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,t,n,o,r){function i(e){return{operations:e,value:e.create()}}function a(e,t,n,o){return e.operations.setAltitudeAt(e.value,t,n,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(e){var t=e.value,n=e.operations;return{operations:n,value:n.create(t)}},t.setExtent=function(e,t,n){return e.operations.setExtent(e.value,t,n.value),n},t.createFromOperations=i,t.fromValues=function(e,t,n){return void 0===n&&(n=i(e)),n.operations=e,e.copy(t,n.value),n},t.wrap=function(e,t){return c.operations=e,c.value=t,c},t.normalAt=function(e,t,n){return e.operations.axisAt(e.value,t,2,n)},t.axisAt=function(e,t,n,o){return e.operations.axisAt(e.value,t,n,o)},t.intersectRay=function(e,t,n){return e.operations.intersectRay(e.value,t,n)},t.intersectsRay=function(e,t){return e.operations.intersectRay(e.value,t,null)},t.closestPoint=function(e,t,n){return e.operations.closestPoint(e.value,t,n)},t.intersectRayClosestSilhouette=function(e,t,n){return e.operations.intersectRayClosestSilhouette(e.value,t,n)},t.closestPointOnSilhouette=function(e,t,n){return e.operations.closestPointOnSilhouette(e.value,t,n)},t.distanceToSilhouette=function(e,t){return e.operations.distanceToSilhouette(e.value,t)},t.altitudeAt=function(e,t){return e.operations.altitudeAt(e.value,t)},t.setAltitudeAt=a,t.setAltitudeOfTransformation=function(e,t,r,i){return t!==i&&n.mat4.copy(i,t),o.vec3.set(u,i[12],i[13],i[14]),a(e,u,r,u),i[12]=u[0],i[13]=u[1],i[14]=u[2],i},t.elevate=function(e,t,n){return e.operations.elevate(e.value,t,n.value)};var u=r.vec3f64.create(),c={operations:null,value:null};t.vectorCoordinates=function(e,t,n,r,i){return i[0]=o.vec3.dot(e,t),i[1]=o.vec3.dot(e,n),i[2]=o.vec3.dot(e,r),i},t.coordinateSystemFromOneAxisAndNormalVector=function(e,t,n,r,i){o.vec3.copy(n,e),o.vec3.copy(s,t),o.vec3.normalize(s,s),o.vec3.cross(r,s,n),o.vec3.cross(i,r,n)};var s=r.vec3f64.create()}));