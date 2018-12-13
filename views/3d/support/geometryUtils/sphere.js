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

define(["require","exports","../../../../core/compilerUtils","../../../../core/Logger","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/gl-matrix","../geometryUtils","../mathUtils","../stack","./ray"],function(e,t,r,c,n,i,s,a,o,u){function v(e){return e?{radius:e.radius,center:i.vec3f64.clone(e.center)}:{radius:1,center:i.vec3f64.create()}}function d(e,t){var r=R.get();return r.radius=e,r.center=t||U,r}function l(e,t){return void 0===t&&(t=v()),g(e.radius,e.center,t)}function g(e,t,r){return void 0===r&&(r=v()),i.vec3.copy(r.center,t),r.radius=e,r}function f(e,t,r){return e!==r&&i.vec3.copy(r.center,e.center),r.radius=e.radius+t,r}function h(e,t,r){return w.error("sphere.setExtent is not yet supported"),e===r?r:l(e,r)}function p(e,t,r){var c=i.vec3.subtract(o.sv3d.get(),t.origin,e.center),n=i.vec3.dot(t.direction,t.direction),s=2*i.vec3.dot(t.direction,c),a=i.vec3.dot(c,c)-e.radius*e.radius,u=s*s-4*n*a;if(u<0)return!1;var v=Math.sqrt(u),d=(-s-v)/(2*n),l=(-s+v)/(2*n);return(d<0||l<d&&l>0)&&(d=l),!(d<0)&&(r&&i.vec3.add(r,t.origin,i.vec3.scale(o.sv3d.get(),t.direction,d)),!0)}function b(e,t,r,c){return p(e,u.fromScreenAtEye(t,r,T),c)}function m(e,t){return p(e,t,null)}function y(e,t,r){if(p(e,t,r))return r;var c=M(e,t,o.sv3d.get());return i.vec3.add(r,t.origin,i.vec3.scale(o.sv3d.get(),t.direction,i.vec3.distance(t.origin,c)/i.vec3.length(t.direction))),r}function M(e,t,r){var c=o.sv3d.get(),n=o.sm4d.get();i.vec3.cross(c,t.origin,t.direction),i.vec3.cross(r,c,t.origin),i.vec3.scale(r,r,1/i.vec3.length(r)*e.radius);var a=A(e,t.origin),u=s.vector.angle(t.origin,r);return i.mat4.identity(n),i.mat4.rotate(n,n,u+a,c),i.vec3.transformMat4(r,r,n),r}function S(e,t,r){return p(e,t,r)?r:(u.closestPoint(t,e.center,r),x(e,r,r))}function x(e,t,r){var c=i.vec3.subtract(o.sv3d.get(),t,e.center),n=i.vec3.scale(o.sv3d.get(),c,e.radius/i.vec3.length(c));return i.vec3.add(r,n,e.center)}function j(e,t){var r=i.vec3.subtract(o.sv3d.get(),t,e.center),c=i.vec3.squaredLength(r),n=e.radius*e.radius;return Math.sqrt(Math.abs(c-n))}function A(e,t){var r=i.vec3.subtract(o.sv3d.get(),t,e.center),c=i.vec3.length(r),n=e.radius+Math.abs(e.radius-c);return a.acos(e.radius/n)}function O(e,t,c,n){var s=i.vec3.subtract(o.sv3d.get(),t,e.center);switch(c){case 0:var u=a.cartesianToSpherical(s,o.sv3d.get()),v=u[2];return i.vec3.set(n,-Math.sin(v),Math.cos(v),0);case 1:var u=a.cartesianToSpherical(s,o.sv3d.get()),d=u[1],v=u[2],l=Math.sin(d);return i.vec3.set(n,-l*Math.cos(v),-l*Math.sin(v),Math.cos(d));case 2:return i.vec3.normalize(n,s);default:r.neverReached(c)}}function P(e,t){var r=i.vec3.subtract(o.sv3d.get(),t,e.center);return i.vec3.length(r)-e.radius}function q(e,t,r,c){var n=P(e,t),s=O(e,t,2,o.sv3d.get()),a=i.vec3.scale(o.sv3d.get(),s,r-n);return i.vec3.add(c,t,a),c}Object.defineProperty(t,"__esModule",{value:!0});var w=c.getLogger("esri.views.3d.support.geometryUtils.sphere");t.create=v,t.wrap=d,t.copy=l,t.fromValues=g,t.elevate=f,t.setExtent=h,t.intersectRay=p,t.intersectScreen=b,t.intersectsRay=m,t.intersectRayClosestSilhouette=y,t.closestPointOnSilhouette=M,t.closestPoint=S,t.projectPoint=x,t.distanceToSilhouette=j,t.angleToSilhouette=A,t.axisAt=O,t.altitudeAt=P,t.setAltitudeAt=q;var R=new n.ObjectStack(function(){return{center:null,radius:0}}),T=u.create(),U=i.vec3f64.create();Object.freeze(U)});