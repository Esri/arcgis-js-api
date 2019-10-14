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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","../../../../core/Logger","../../../../core/mathUtils","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../geometryUtils","../mathUtils","../stack","./ray"],function(e,t,r,c,n,i,a,s,o,u,v,d,l){function g(e){return e?{radius:e.radius,center:o.vec3f64.clone(e.center)}:{radius:1,center:o.vec3f64.create()}}function f(e,t){var r=E.get();return r.radius=e,r.center=t||z,r}function h(e,t){return void 0===t&&(t=g()),m(e.radius,e.center,t)}function m(e,t,r){return void 0===r&&(r=g()),s.vec3.copy(r.center,t),r.radius=e,r}function p(e,t,r){return e!==r&&s.vec3.copy(r.center,e.center),r.radius=e.radius+t,r}function b(e,t,r){return T.error("sphere.setExtent is not yet supported"),e===r?r:h(e,r)}function y(e,t,r){var c=s.vec3.subtract(d.sv3d.get(),t.origin,e.center),n=s.vec3.dot(t.direction,t.direction),i=2*s.vec3.dot(t.direction,c),a=s.vec3.dot(c,c)-e.radius*e.radius,o=i*i-4*n*a;if(o<0)return!1;var u=Math.sqrt(o),v=(-i-u)/(2*n),l=(-i+u)/(2*n);return(v<0||l<v&&l>0)&&(v=l),!(v<0)&&(r&&s.vec3.add(r,t.origin,s.vec3.scale(d.sv3d.get(),t.direction,v)),!0)}function M(e,t,r,c){return y(e,l.fromScreenAtEye(t,r,L),c)}function S(e,t){return y(e,t,null)}function x(e,t,r){if(y(e,t,r))return r;var c=j(e,t,d.sv3d.get());return s.vec3.add(r,t.origin,s.vec3.scale(d.sv3d.get(),t.direction,s.vec3.distance(t.origin,c)/s.vec3.length(t.direction))),r}function j(e,t,r){var c=d.sv3d.get(),n=d.sm4d.get();s.vec3.cross(c,t.origin,t.direction),s.vec3.cross(r,c,t.origin),s.vec3.scale(r,r,1/s.vec3.length(r)*e.radius);var i=U(e,t.origin),o=u.vector.angle(t.origin,r);return a.mat4.identity(n),a.mat4.rotate(n,n,o+i,c),s.vec3.transformMat4(r,r,n),r}function A(e,t,r){return y(e,t,r)?r:(l.closestPoint(t,e.center,r),O(e,r,r))}function O(e,t,r){var c=s.vec3.subtract(d.sv3d.get(),t,e.center),n=s.vec3.scale(d.sv3d.get(),c,e.radius/s.vec3.length(c));return s.vec3.add(r,n,e.center)}function P(e,t){var r=s.vec3.subtract(d.sv3d.get(),t,e.center),c=s.vec3.squaredLength(r),n=e.radius*e.radius;return Math.sqrt(Math.abs(c-n))}function U(e,t){var r=s.vec3.subtract(d.sv3d.get(),t,e.center),c=s.vec3.length(r),i=e.radius+Math.abs(e.radius-c);return n.acosClamped(e.radius/i)}function q(e,t,c,n){var i=s.vec3.subtract(k,t,e.center);switch(c){case 0:var a=v.cartesianToSpherical(i,k),o=a[2];return s.vec3.set(n,-Math.sin(o),Math.cos(o),0);case 1:var a=v.cartesianToSpherical(i,k),u=a[1],o=a[2],d=Math.sin(u);return s.vec3.set(n,-d*Math.cos(o),-d*Math.sin(o),Math.cos(u));case 2:return s.vec3.normalize(n,i);default:return void r.neverReached(c)}}function w(e,t){var r=s.vec3.subtract(C,t,e.center);return s.vec3.length(r)-e.radius}function R(e,t,r,c){var n=w(e,t),i=q(e,t,2,C),a=s.vec3.scale(C,i,r-n);return s.vec3.add(c,t,a),c}Object.defineProperty(t,"__esModule",{value:!0});var T=c.getLogger("esri.views.3d.support.geometryUtils.sphere");t.create=g,t.wrap=f,t.copy=h,t.fromValues=m,t.elevate=p,t.setExtent=b,t.intersectRay=y,t.intersectScreen=M,t.intersectsRay=S,t.intersectRayClosestSilhouette=x,t.closestPointOnSilhouette=j,t.closestPoint=A,t.projectPoint=O,t.distanceToSilhouette=P,t.angleToSilhouette=U;var k=o.vec3f64.create();t.axisAt=q,t.altitudeAt=w,t.setAltitudeAt=R;var E=new i.ObjectStack(function(){return{center:null,radius:0}}),L=l.create(),z=o.vec3f64.create(),C=o.vec3f64.create();Object.freeze(z)});