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

define(["require","exports","../../../../core/compilerUtils","../../../../core/Logger","../../../../core/mathUtils","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../geometryUtils","../mathUtils","../stack","./ray"],(function(e,t,r,c,n,i,a,s,o,u,v,d,l){Object.defineProperty(t,"__esModule",{value:!0});var g=c.getLogger("esri.views.3d.support.geometryUtils.sphere");function f(e){return e?{radius:e.radius,center:o.vec3f64.clone(e.center)}:{radius:1,center:o.vec3f64.create()}}function h(e,t){return void 0===t&&(t=f()),m(e.radius,e.center,t)}function m(e,t,r){return void 0===r&&(r=f()),s.vec3.copy(r.center,t),r.radius=e,r}function p(e,t,r){var c=s.vec3.subtract(d.sv3d.get(),t.origin,e.center),n=s.vec3.dot(t.direction,t.direction),i=2*s.vec3.dot(t.direction,c),a=i*i-4*n*(s.vec3.dot(c,c)-e.radius*e.radius);if(a<0)return!1;var o=Math.sqrt(a),u=(-i-o)/(2*n),v=(-i+o)/(2*n);return(u<0||v<u&&v>0)&&(u=v),!(u<0)&&(r&&s.vec3.add(r,t.origin,s.vec3.scale(d.sv3d.get(),t.direction,u)),!0)}function b(e,t,r){var c=d.sv3d.get(),n=d.sm4d.get();s.vec3.cross(c,t.origin,t.direction),s.vec3.cross(r,c,t.origin),s.vec3.scale(r,r,1/s.vec3.length(r)*e.radius);var i=M(e,t.origin),o=u.vector.angle(t.origin,r);return a.mat4.identity(n),a.mat4.rotate(n,n,o+i,c),s.vec3.transformMat4(r,r,n),r}function y(e,t,r){var c=s.vec3.subtract(d.sv3d.get(),t,e.center),n=s.vec3.scale(d.sv3d.get(),c,e.radius/s.vec3.length(c));return s.vec3.add(r,n,e.center)}function M(e,t){var r=s.vec3.subtract(d.sv3d.get(),t,e.center),c=s.vec3.length(r),i=e.radius+Math.abs(e.radius-c);return n.acosClamped(e.radius/i)}t.create=f,t.wrap=function(e,t){var r=A.get();return r.radius=e,r.center=t||P,r},t.copy=h,t.fromValues=m,t.elevate=function(e,t,r){return e!==r&&s.vec3.copy(r.center,e.center),r.radius=e.radius+t,r},t.setExtent=function(e,t,r){return g.error("sphere.setExtent is not yet supported"),e===r?r:h(e,r)},t.intersectRay=p,t.intersectScreen=function(e,t,r,c){return p(e,l.fromScreenAtEye(t,r,O),c)},t.intersectsRay=function(e,t){return p(e,t,null)},t.intersectRayClosestSilhouette=function(e,t,r){if(p(e,t,r))return r;var c=b(e,t,d.sv3d.get());return s.vec3.add(r,t.origin,s.vec3.scale(d.sv3d.get(),t.direction,s.vec3.distance(t.origin,c)/s.vec3.length(t.direction))),r},t.closestPointOnSilhouette=b,t.closestPoint=function(e,t,r){return p(e,t,r)?r:(l.closestPoint(t,e.center,r),y(e,r,r))},t.projectPoint=y,t.distanceToSilhouette=function(e,t){var r=s.vec3.subtract(d.sv3d.get(),t,e.center),c=s.vec3.squaredLength(r),n=e.radius*e.radius;return Math.sqrt(Math.abs(c-n))},t.angleToSilhouette=M;var S=o.vec3f64.create();function x(e,t,c,n){var i=s.vec3.subtract(S,t,e.center);switch(c){case 0:var a=(o=v.cartesianToSpherical(i,S))[2];return s.vec3.set(n,-Math.sin(a),Math.cos(a),0);case 1:var o,u=(o=v.cartesianToSpherical(i,S))[1],d=(a=o[2],Math.sin(u));return s.vec3.set(n,-d*Math.cos(a),-d*Math.sin(a),Math.cos(u));case 2:return s.vec3.normalize(n,i);default:return void r.neverReached(c)}}function j(e,t){var r=s.vec3.subtract(U,t,e.center);return s.vec3.length(r)-e.radius}t.axisAt=x,t.altitudeAt=j,t.setAltitudeAt=function(e,t,r,c){var n=j(e,t),i=x(e,t,2,U),a=s.vec3.scale(U,i,r-n);return s.vec3.add(c,t,a),c};var A=new i.ObjectStack((function(){return{center:null,radius:0}})),O=l.create(),P=o.vec3f64.create(),U=o.vec3f64.create();Object.freeze(P)}));