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

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,t,o,n,r){"use strict";function i(e){return{operations:e,value:e.create()}}function a(e,t,o,n){return e.operations.setAltitudeAt(e.value,t,o,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.coordinateSystemFromOneAxisAndNormalVector=t.vectorCoordinates=t.elevate=t.setAltitudeOfTransformation=t.setAltitudeAt=t.altitudeAt=t.distanceToSilhouette=t.closestPointOnSilhouette=t.intersectRayClosestSilhouette=t.closestPoint=t.intersectsRay=t.intersectRay=t.axisAt=t.normalAt=t.wrap=t.fromValues=t.createFromOperations=t.setExtent=t.create=void 0,t.create=function(e){var t=e.value,o=e.operations;return{operations:o,value:o.create(t)}},t.setExtent=function(e,t,o){return e.operations.setExtent(e.value,t,o.value),o},t.createFromOperations=i,t.fromValues=function(e,t,o){return void 0===o&&(o=i(e)),o.operations=e,e.copy(t,o.value),o},t.wrap=function(e,t){return u.operations=e,u.value=t,u},t.normalAt=function(e,t,o){return e.operations.axisAt(e.value,t,2,o)},t.axisAt=function(e,t,o,n){return e.operations.axisAt(e.value,t,o,n)},t.intersectRay=function(e,t,o){return e.operations.intersectRay(e.value,t,o)},t.intersectsRay=function(e,t){return e.operations.intersectRay(e.value,t,null)},t.closestPoint=function(e,t,o){return e.operations.closestPoint(e.value,t,o)},t.intersectRayClosestSilhouette=function(e,t,o){return e.operations.intersectRayClosestSilhouette(e.value,t,o)},t.closestPointOnSilhouette=function(e,t,o){return e.operations.closestPointOnSilhouette(e.value,t,o)},t.distanceToSilhouette=function(e,t){return e.operations.distanceToSilhouette(e.value,t)},t.altitudeAt=function(e,t){return e.operations.altitudeAt(e.value,t)},t.setAltitudeAt=a,t.setAltitudeOfTransformation=function(e,t,r,i){return t!==i&&o.mat4.copy(i,t),n.vec3.set(s,i[12],i[13],i[14]),a(e,s,r,s),i[12]=s[0],i[13]=s[1],i[14]=s[2],i},t.elevate=function(e,t,o){return e.operations.elevate(e.value,t,o.value)};var s=r.vec3f64.create(),u={operations:null,value:null};t.vectorCoordinates=function(e,t,o,r,i){return i[0]=n.vec3.dot(e,t),i[1]=n.vec3.dot(e,o),i[2]=n.vec3.dot(e,r),i},t.coordinateSystemFromOneAxisAndNormalVector=function(e,t,o,r,i){n.vec3.copy(o,e),n.vec3.copy(c,t),n.vec3.normalize(c,c),n.vec3.cross(r,c,o),n.vec3.cross(i,r,o)};var c=r.vec3f64.create()}));