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

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/gl-matrix","../stack","./clipRay","./plane"],function(e,r,t,n,c,o,a){function f(e){if(e){var r=e.planes,t=e.points;return{planes:[a.create(r[0]),a.create(r[1]),a.create(r[2]),a.create(r[3]),a.create(r[4]),a.create(r[5])],points:[n.vec3f64.clone(t[0]),n.vec3f64.clone(t[1]),n.vec3f64.clone(t[2]),n.vec3f64.clone(t[3]),n.vec3f64.clone(t[4]),n.vec3f64.clone(t[5]),n.vec3f64.clone(t[6]),n.vec3f64.clone(t[7])]}}return{planes:[a.create(),a.create(),a.create(),a.create(),a.create(),a.create()],points:[n.vec3f64.create(),n.vec3f64.create(),n.vec3f64.create(),n.vec3f64.create(),n.vec3f64.create(),n.vec3f64.create(),n.vec3f64.create(),n.vec3f64.create()]}}function i(e,r){return void 0===r&&(r=f()),s(e.planes,e.points,r)}function s(e,r,t){void 0===t&&(t=f());for(var c=0;c<6;c++)a.copy(e[c],t.planes[c]);for(var c=0;c<8;c++)n.vec3.copy(t.points[c],r[c]);return t}function v(e,r,t){void 0===t&&(t=f());var o=t.points,a=n.mat4.multiply(c.sm4d.get(),r,e);n.mat4.invert(a,a);for(var i=0;i<8;++i){var s=n.vec4.transformMat4(c.sv4d.get(),P[i],a);n.vec3.set(o[i],s[0]/s[3],s[1]/s[3],s[2]/s[3])}return l(t),t}function l(e){var r=e.planes,t=e.points;a.fromPoints(t[4],t[0],t[3],r[0]),a.fromPoints(t[1],t[5],t[6],r[1]),a.fromPoints(t[4],t[5],t[1],r[2]),a.fromPoints(t[3],t[2],t[6],r[3]),a.fromPoints(t[0],t[1],t[2],r[4]),a.fromPoints(t[5],t[4],t[7],r[5])}function u(e,r){for(var t=e.planes,n=0;n<6;n++)if(a.isSphereFullyInside(t[n],r))return!1;return!0}function p(e,r){return y(e,o.fromRay(r,V.get()))}function m(e,r,t){return y(e,o.fromLineSegmentAndDirection(r,t,V.get()))}function d(e,r){for(var t=e.planes,n=0;n<6;n++){if(a.signedDistance(t[n],r)>0)return!1}return!0}function g(e,r){for(var t=e.planes,n=0;n<6;n++)if(a.isAABBFullyInside(t[n],r))return!1;return!0}function y(e,r){for(var t=e.planes,n=0;n<6;n++)if(!a.clip(t[n],r))return!1;return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.create=f,r.copy=i,r.fromValues=s,r.fromMatrix=v,r.recomputePlanes=l,r.intersectsSphere=u,r.intersectsRay=p,r.intersectsLineSegment=m,r.intersectsPoint=d,r.intersectsAABB=g,r.planePointIndices={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]};var P=[n.vec4f64.fromValues(-1,-1,-1,1),n.vec4f64.fromValues(1,-1,-1,1),n.vec4f64.fromValues(1,1,-1,1),n.vec4f64.fromValues(-1,1,-1,1),n.vec4f64.fromValues(-1,-1,1,1),n.vec4f64.fromValues(1,-1,1,1),n.vec4f64.fromValues(1,1,1,1),n.vec4f64.fromValues(-1,1,1,1)],V=new t.ObjectStack(o.create)});