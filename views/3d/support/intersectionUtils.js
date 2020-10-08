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

define(["require","exports","../../../core/libs/gl-matrix-2/vec2f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./geometryUtils"],(function(e,r,n,t,i,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.closestPointOnRay=r.frustumLineSegment=r.frustumPoint=r.frustumRay=r.frustumSphere=r.planeSphere=void 0,r.planeSphere=function(e,r,n){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]<n},r.frustumSphere=function(e,r,n){var t=r[0],i=r[1],c=r[2];return!(e[0][0]*t+e[0][1]*i+e[0][2]*c+e[0][3]>n)&&(!(e[1][0]*t+e[1][1]*i+e[1][2]*c+e[1][3]>n)&&(!(e[2][0]*t+e[2][1]*i+e[2][2]*c+e[2][3]>n)&&(!(e[3][0]*t+e[3][1]*i+e[3][2]*c+e[3][3]>n)&&(!(e[4][0]*t+e[4][1]*i+e[4][2]*c+e[4][3]>n)&&!(e[5][0]*t+e[5][1]*i+e[5][2]*c+e[5][3]>n)))))},r.frustumRay=function(e,r,n,t){return f(e,r,null,l(t,r,n,!1))},r.frustumPoint=function(e,r){for(var n=0;n<6;n++){if(c.plane.signedDistance(e[n],r)>0)return!1}return!0},r.frustumLineSegment=function(e,r,n,t){return f(e,r,n,l(t,r,n,!0))},r.closestPointOnRay=function(e,r,n,i){var c=t.vec3.dot(r,t.vec3.subtract(i,n,e));return t.vec3.add(i,e,t.vec3.scale(i,r,c)),i};var u={dir:i.vec3f64.create(),len:0,clip:n.vec2f64.create()};function l(e,r,n,i){var c=u;return e?(n&&i&&(c.len=t.vec3.distance(r,n)),t.vec3.copy(c.dir,e)):i?(c.len=t.vec3.distance(r,n),t.vec3.subtract(c.dir,n,r),t.vec3.scale(c.dir,c.dir,1/c.len)):(t.vec3.subtract(c.dir,n,r),t.vec3.normalize(c.dir,c.dir)),c}function a(e,r,n){var i=t.vec3.dot(c.plane.normal(e),n.dir),u=-c.plane.signedDistance(e,r);if(u<0&&i>=0)return!1;if(i>-1e-6&&i<1e-6)return u>0;if((u<0||i<0)&&!(u<0&&i<0))return!0;var l=u/i;return i>0?l<n.clip[1]&&(n.clip[1]=l):l>n.clip[0]&&(n.clip[0]=l),n.clip[0]<=n.clip[1]}function f(e,r,n,t){t.clip[0]=0,t.clip[1]=n?t.len:Number.MAX_VALUE;for(var i=0;i<e.length;i++)if(!a(e[i],r,t))return!1;return!0}}));