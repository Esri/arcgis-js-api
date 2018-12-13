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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../mathUtils","../stack"],function(t,e,r,n,c){function i(t){return void 0===t&&(t=e.UP),[t[0],t[1],t[2],t[3]]}function o(t,e,r,n){return s(t,e,r,n,c.sv4d.get())}function u(t,e){return void 0===e&&(e=i()),s(t[0],t[1],t[2],t[3],e)}function s(t,e,r,n,c){return void 0===c&&(c=i()),c[0]=t,c[1]=e,c[2]=r,c[3]=n,c}function v(t,e,n){return void 0===n&&(n=i()),r.vec3.copy(n,t),n[3]=e,n}function a(t,e,n){void 0===n&&(n=i()),r.vec3.copy(n,e);var c=r.vec3.dot(e,e);return Math.abs(c-1)>1e-5&&r.vec3.scale(n,n,1/Math.sqrt(c)),f(n,t,n),n}function d(t,e,n,o){return void 0===o&&(o=i()),g(r.vec3.subtract(c.sv3d.get(),t,e),r.vec3.subtract(c.sv3d.get(),n,e),t,o)}function f(t,e,n){return t!==n&&u(t,n),n[3]=-r.vec3.dot(n,e),n}function l(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function g(t,e,n,o){return void 0===o&&(o=i()),a(n,r.vec3.cross(c.sv3d.get(),e,t),o)}function m(t,e,r){return I(t,e.origin,e.direction,!0,!1,r)}function p(t,e,r){return I(t,e.origin,e.vector,!1,!1,r)}function y(t,e,r){return I(t,e.origin,e.vector,!1,!0,r)}function P(t,e){var r=e.center,n=e.radius;return j(t,r)-n>=0}function b(t,e){var r=e.center,n=e.radius;return j(t,r)+n<0}function h(t,e){return j(t,e)>=0}function A(t,e){return j(t,e)<0}function M(t,e){var r=e[0],n=e[1],c=e[2],i=e[3],o=e[4],u=e[5];return t[0]*(t[0]>0?r:i)+t[1]*(t[1]>0?n:o)+t[2]*(t[2]>0?c:u)+t[3]>=0}function O(t,e){var n=r.vec3.dot(t,e.ray.direction),c=-j(t,e.ray.origin);if(c<0&&n>=0)return!1;if(n>-1e-6&&n<1e-6)return c>0;if((c<0||n<0)&&!(c<0&&n<0))return!0;var i=c/n;return n>0?i<e.c1&&(e.c1=i):i>e.c0&&(e.c0=i),e.c0<=e.c1}function x(t,e,n){var i=r.vec3.scale(c.sv3d.get(),t,-t[3]),o=r.vec3.subtract(c.sv3d.get(),e,i),u=F(t,o,c.sv3d.get());return r.vec3.add(n,u,i),n}function F(t,e,n){var i=r.vec3.scale(c.sv3d.get(),t,r.vec3.dot(t,e));return r.vec3.subtract(n,e,i),n}function S(t,e){return Math.abs(j(t,e))}function j(t,e){return r.vec3.dot(t,e)+t[3]}function I(t,e,c,i,o,u){var s=r.vec3.dot(t,c);if(0===s)return!1;var v=-(r.vec3.dot(t,e)+t[3])/s;return o&&(v=i?Math.max(0,v):n.clamp(v,0,1)),!(v<0||!i&&v>1)&&(r.vec3.add(u,e,r.vec3.scale(u,c,v)),!0)}Object.defineProperty(e,"__esModule",{value:!0}),e.create=i,e.wrap=o,e.copy=u,e.fromValues=s,e.fromNormalAndOffset=v,e.fromPositionAndNormal=a,e.fromPoints=d,e.setOffsetFromPoint=f,e.negate=l,e.fromVectorsAndPoint=g,e.intersectRay=m,e.intersectLineSegment=p,e.intersectLineSegmentClamp=y,e.isSphereFullyInside=P,e.isSphereFullyOutside=b,e.isPointInside=h,e.isPointOutside=A,e.isAABBFullyInside=M,e.clip=O,e.projectPoint=x,e.projectVector=F,e.distance=S,e.signedDistance=j,e.UP=[0,0,1,0]});