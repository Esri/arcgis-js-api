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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","../../../../core/Logger","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../geometryUtils","../mathUtils","../stack","./ray"],function(e,t,r,c,n,i,a,s,o,u,v,d){function l(e){return e?{radius:e.radius,center:s.vec3f64.clone(e.center)}:{radius:1,center:s.vec3f64.create()}}function g(e,t){var r=k.get();return r.radius=e,r.center=t||L,r}function f(e,t){return void 0===t&&(t=l()),h(e.radius,e.center,t)}function h(e,t,r){return void 0===r&&(r=l()),a.vec3.copy(r.center,t),r.radius=e,r}function p(e,t,r){return e!==r&&a.vec3.copy(r.center,e.center),r.radius=e.radius+t,r}function b(e,t,r){return T.error("sphere.setExtent is not yet supported"),e===r?r:f(e,r)}function m(e,t,r){var c=a.vec3.subtract(v.sv3d.get(),t.origin,e.center),n=a.vec3.dot(t.direction,t.direction),i=2*a.vec3.dot(t.direction,c),s=a.vec3.dot(c,c)-e.radius*e.radius,o=i*i-4*n*s;if(o<0)return!1;var u=Math.sqrt(o),d=(-i-u)/(2*n),l=(-i+u)/(2*n);return(d<0||l<d&&l>0)&&(d=l),!(d<0)&&(r&&a.vec3.add(r,t.origin,a.vec3.scale(v.sv3d.get(),t.direction,d)),!0)}function y(e,t,r,c){return m(e,d.fromScreenAtEye(t,r,E),c)}function M(e,t){return m(e,t,null)}function S(e,t,r){if(m(e,t,r))return r;var c=x(e,t,v.sv3d.get());return a.vec3.add(r,t.origin,a.vec3.scale(v.sv3d.get(),t.direction,a.vec3.distance(t.origin,c)/a.vec3.length(t.direction))),r}function x(e,t,r){var c=v.sv3d.get(),n=v.sm4d.get();a.vec3.cross(c,t.origin,t.direction),a.vec3.cross(r,c,t.origin),a.vec3.scale(r,r,1/a.vec3.length(r)*e.radius);var s=P(e,t.origin),u=o.vector.angle(t.origin,r);return i.mat4.identity(n),i.mat4.rotate(n,n,u+s,c),a.vec3.transformMat4(r,r,n),r}function j(e,t,r){return m(e,t,r)?r:(d.closestPoint(t,e.center,r),A(e,r,r))}function A(e,t,r){var c=a.vec3.subtract(v.sv3d.get(),t,e.center),n=a.vec3.scale(v.sv3d.get(),c,e.radius/a.vec3.length(c));return a.vec3.add(r,n,e.center)}function O(e,t){var r=a.vec3.subtract(v.sv3d.get(),t,e.center),c=a.vec3.squaredLength(r),n=e.radius*e.radius;return Math.sqrt(Math.abs(c-n))}function P(e,t){var r=a.vec3.subtract(v.sv3d.get(),t,e.center),c=a.vec3.length(r),n=e.radius+Math.abs(e.radius-c);return u.acos(e.radius/n)}function q(e,t,c,n){var i=a.vec3.subtract(U,t,e.center);switch(c){case 0:var s=u.cartesianToSpherical(i,U),o=s[2];return a.vec3.set(n,-Math.sin(o),Math.cos(o),0);case 1:var s=u.cartesianToSpherical(i,U),v=s[1],o=s[2],d=Math.sin(v);return a.vec3.set(n,-d*Math.cos(o),-d*Math.sin(o),Math.cos(v));case 2:return a.vec3.normalize(n,i);default:r.neverReached(c)}}function w(e,t){var r=a.vec3.subtract(z,t,e.center);return a.vec3.length(r)-e.radius}function R(e,t,r,c){var n=w(e,t),i=q(e,t,2,z),s=a.vec3.scale(z,i,r-n);return a.vec3.add(c,t,s),c}Object.defineProperty(t,"__esModule",{value:!0});var T=c.getLogger("esri.views.3d.support.geometryUtils.sphere");t.create=l,t.wrap=g,t.copy=f,t.fromValues=h,t.elevate=p,t.setExtent=b,t.intersectRay=m,t.intersectScreen=y,t.intersectsRay=M,t.intersectRayClosestSilhouette=S,t.closestPointOnSilhouette=x,t.closestPoint=j,t.projectPoint=A,t.distanceToSilhouette=O,t.angleToSilhouette=P;var U=s.vec3f64.create();t.axisAt=q,t.altitudeAt=w,t.setAltitudeAt=R;var k=new n.ObjectStack(function(){return{center:null,radius:0}}),E=d.create(),L=s.vec3f64.create(),z=s.vec3f64.create();Object.freeze(L)});