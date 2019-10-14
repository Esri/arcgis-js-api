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

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../core/libs/gl-matrix-2/vec4","../../../../core/libs/gl-matrix-2/vec4f64","../stack","./clipRay","./plane"],function(e,r,t,c,n,o,a,f,i,s,v){function l(e){if(e){var r=e.planes,t=e.points;return{planes:[v.create(r[0]),v.create(r[1]),v.create(r[2]),v.create(r[3]),v.create(r[4]),v.create(r[5])],points:[o.vec3f64.clone(t[0]),o.vec3f64.clone(t[1]),o.vec3f64.clone(t[2]),o.vec3f64.clone(t[3]),o.vec3f64.clone(t[4]),o.vec3f64.clone(t[5]),o.vec3f64.clone(t[6]),o.vec3f64.clone(t[7])]}}return{planes:[v.create(),v.create(),v.create(),v.create(),v.create(),v.create()],points:[o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create()]}}function u(e,r){return void 0===r&&(r=l()),m(e.planes,e.points,r)}function m(e,r,t){void 0===t&&(t=l());for(var c=0;c<6;c++)v.copy(e[c],t.planes[c]);for(var c=0;c<8;c++)n.vec3.copy(t.points[c],r[c]);return t}function p(e,r,t){void 0===t&&(t=l());var o=t.points,f=c.mat4.multiply(i.sm4d.get(),r,e);c.mat4.invert(f,f);for(var s=0;s<8;++s){var v=a.vec4.transformMat4(i.sv4d.get(),S[s],f);n.vec3.set(o[s],v[0]/v[3],v[1]/v[3],v[2]/v[3])}return d(t),t}function d(e){var r=e.planes,t=e.points;v.fromPoints(t[4],t[0],t[3],r[0]),v.fromPoints(t[1],t[5],t[6],r[1]),v.fromPoints(t[4],t[5],t[1],r[2]),v.fromPoints(t[3],t[2],t[6],r[3]),v.fromPoints(t[0],t[1],t[2],r[4]),v.fromPoints(t[5],t[4],t[7],r[5])}function g(e,r){for(var t=0;t<6;t++)if(v.isSphereFullyInside(e[t],r))return!1;return!0}function y(e,r){return x(e,s.fromRay(r,A.get()))}function P(e,r,t){return x(e,s.fromLineSegmentAndDirection(r,t,A.get()))}function b(e,r){for(var t=0;t<6;t++){if(v.signedDistance(e[t],r)>0)return!1}return!0}function V(e,r){for(var t=0;t<6;t++)if(v.isAABBFullyInside(e[t],r))return!1;return!0}function x(e,r){for(var t=0;t<6;t++)if(!v.clip(e[t],r))return!1;return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.create=l,r.copy=u,r.fromValues=m,r.fromMatrix=p,r.recomputePlanes=d,r.intersectsSphere=g,r.intersectsRay=y,r.intersectsLineSegment=P,r.intersectsPoint=b,r.intersectsAABB=V,r.planePointIndices={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]};var S=[f.vec4f64.fromValues(-1,-1,-1,1),f.vec4f64.fromValues(1,-1,-1,1),f.vec4f64.fromValues(1,1,-1,1),f.vec4f64.fromValues(-1,1,-1,1),f.vec4f64.fromValues(-1,-1,1,1),f.vec4f64.fromValues(1,-1,1,1),f.vec4f64.fromValues(1,1,1,1),f.vec4f64.fromValues(-1,1,1,1)],A=new t.ObjectStack(s.create)});