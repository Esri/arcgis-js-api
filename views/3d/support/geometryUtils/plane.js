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

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../stack"],(function(e,t,r,n,c){function i(e){return void 0===e&&(e=t.UP),[e[0],e[1],e[2],e[3]]}function o(e,t){return void 0===t&&(t=i()),u(e[0],e[1],e[2],e[3],t)}function u(e,t,r,n,c){return void 0===c&&(c=i()),c[0]=e,c[1]=t,c[2]=r,c[3]=n,c}function v(e,t,r){void 0===r&&(r=i()),n.vec3.copy(r,t);var c=n.vec3.dot(t,t);return Math.abs(c-1)>1e-5&&c>1e-12&&n.vec3.scale(r,r,1/Math.sqrt(c)),a(r,e,r),r}function a(e,t,r){return e!==r&&o(e,r),r[3]=-n.vec3.dot(r,t),r}function s(e,t,r,o){return void 0===o&&(o=i()),v(r,n.vec3.cross(c.sv3d.get(),t,e),o)}function d(e,t,r){var i=n.vec3.scale(c.sv3d.get(),e,n.vec3.dot(e,t));return n.vec3.subtract(r,t,i),r}function f(e,t){return n.vec3.dot(e,t)+e[3]}function l(e,t,c,i,o,u){var v=n.vec3.dot(e,c);if(0===v)return!1;var a=-(n.vec3.dot(e,t)+e[3])/v;return o&&(a=i?Math.max(0,a):r.clamp(a,0,1)),!(a<0||!i&&a>1)&&(n.vec3.add(u,t,n.vec3.scale(u,c,a)),!0)}function g(e){return e}Object.defineProperty(t,"__esModule",{value:!0}),t.create=i,t.wrap=function(e,t,r,n){return u(e,t,r,n,c.sv4d.get())},t.copy=o,t.fromValues=u,t.fromNormalAndOffset=function(e,t,r){return void 0===r&&(r=i()),n.vec3.copy(r,e),r[3]=t,r},t.fromPositionAndNormal=v,t.fromPoints=function(e,t,r,o){return void 0===o&&(o=i()),s(n.vec3.subtract(c.sv3d.get(),e,t),n.vec3.subtract(c.sv3d.get(),r,t),e,o)},t.setOffsetFromPoint=a,t.negate=function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},t.fromVectorsAndPoint=s,t.intersectRay=function(e,t,r){return l(e,t.origin,t.direction,!0,!1,r)},t.intersectLineSegment=function(e,t,r){return l(e,t.origin,t.vector,!1,!1,r)},t.intersectLineSegmentClamp=function(e,t,r){return l(e,t.origin,t.vector,!1,!0,r)},t.isSphereFullyInside=function(e,t){var r=t.center,n=t.radius;return f(e,r)-n>=0},t.isSphereFullyOutside=function(e,t){var r=t.center,n=t.radius;return f(e,r)+n<0},t.isPointInside=function(e,t){return f(e,t)>=0},t.isPointOutside=function(e,t){return f(e,t)<0},t.isAABBFullyInside=function(e,t){var r=t[0],n=t[1],c=t[2],i=t[3],o=t[4],u=t[5];return e[0]*(e[0]>0?r:i)+e[1]*(e[1]>0?n:o)+e[2]*(e[2]>0?c:u)+e[3]>=0},t.clip=function(e,t){var r=n.vec3.dot(e,t.ray.direction),c=-f(e,t.ray.origin);if(c<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return c>0;if((c<0||r<0)&&!(c<0&&r<0))return!0;var i=c/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1},t.clipInfinite=function(e,t){var r=n.vec3.dot(e,t.ray.direction),c=-f(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return c>0;var i=c/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1},t.projectPoint=function(e,t,r){var i=n.vec3.scale(c.sv3d.get(),e,-e[3]),o=d(e,n.vec3.subtract(c.sv3d.get(),t,i),c.sv3d.get());return n.vec3.add(r,o,i),r},t.projectVector=d,t.distance=function(e,t){return Math.abs(f(e,t))},t.signedDistance=f,t.normal=g,t.UP=[0,0,1,0]}));