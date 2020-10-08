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

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../core/libs/gl-matrix-2/vec4","../../../../core/libs/gl-matrix-2/vec4f64","../stack","./clipRay","./plane"],(function(e,r,t,c,n,i,o,a,f,s,l){"use strict";function v(e){if(e){var r=e.planes,t=e.points;return{planes:[l.create(r[0]),l.create(r[1]),l.create(r[2]),l.create(r[3]),l.create(r[4]),l.create(r[5])],points:[i.vec3f64.clone(t[0]),i.vec3f64.clone(t[1]),i.vec3f64.clone(t[2]),i.vec3f64.clone(t[3]),i.vec3f64.clone(t[4]),i.vec3f64.clone(t[5]),i.vec3f64.clone(t[6]),i.vec3f64.clone(t[7])]}}return{planes:[l.create(),l.create(),l.create(),l.create(),l.create(),l.create()],points:[i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create()]}}function u(e,r,t){void 0===t&&(t=v());for(var c=0;c<6;c++)l.copy(e[c],t.planes[c]);for(c=0;c<8;c++)n.vec3.copy(t.points[c],r[c]);return t}function m(e){var r=e.planes,t=e.points;l.fromPoints(t[4],t[0],t[3],r[0]),l.fromPoints(t[1],t[5],t[6],r[1]),l.fromPoints(t[4],t[5],t[1],r[2]),l.fromPoints(t[3],t[2],t[6],r[3]),l.fromPoints(t[0],t[1],t[2],r[4]),l.fromPoints(t[5],t[4],t[7],r[5])}function p(e,r){for(var t=0;t<6;t++)if(!l.clip(e[t],r))return!1;return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.planePointIndices=r.intersectsAABB=r.intersectsPoint=r.intersectsLineSegment=r.intersectClipRay=r.intersectsRay=r.intersectsSphere=r.recomputePlanes=r.fromMatrix=r.fromValues=r.copy=r.create=void 0,r.create=v,r.copy=function(e,r){return void 0===r&&(r=v()),u(e.planes,e.points,r)},r.fromValues=u,r.fromMatrix=function(e,r,t){void 0===t&&(t=v());var i=t.points,a=c.mat4.multiply(f.sm4d.get(),r,e);c.mat4.invert(a,a);for(var s=0;s<8;++s){var l=o.vec4.transformMat4(f.sv4d.get(),d[s],a);n.vec3.set(i[s],l[0]/l[3],l[1]/l[3],l[2]/l[3])}return m(t),t},r.recomputePlanes=m,r.intersectsSphere=function(e,r){for(var t=0;t<6;t++)if(l.isSphereFullyInside(e[t],r))return!1;return!0},r.intersectsRay=function(e,r){return p(e,s.fromRay(r,g.get()))},r.intersectClipRay=function(e,r){for(var t=0;t<6;t++){var c=e[t];if(!l.clipInfinite(c,r))return!1}return!0},r.intersectsLineSegment=function(e,r,t){return p(e,s.fromLineSegmentAndDirection(r,t,g.get()))},r.intersectsPoint=function(e,r){for(var t=0;t<6;t++){if(l.signedDistance(e[t],r)>0)return!1}return!0},r.intersectsAABB=function(e,r){for(var t=0;t<6;t++)if(l.isAABBFullyInside(e[t],r))return!1;return!0},r.planePointIndices={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]};var d=[a.vec4f64.fromValues(-1,-1,-1,1),a.vec4f64.fromValues(1,-1,-1,1),a.vec4f64.fromValues(1,1,-1,1),a.vec4f64.fromValues(-1,1,-1,1),a.vec4f64.fromValues(-1,-1,1,1),a.vec4f64.fromValues(1,-1,1,1),a.vec4f64.fromValues(1,1,1,1),a.vec4f64.fromValues(-1,1,1,1)],g=new t.ObjectStack(s.create)}));