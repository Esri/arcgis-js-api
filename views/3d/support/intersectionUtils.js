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

define(["require","exports","../../../core/libs/gl-matrix-2/vec2f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64"],(function(e,r,n,t,c){Object.defineProperty(r,"__esModule",{value:!0}),r.planeSphere=function(e,r,n){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]<n},r.frustumSphere=function(e,r,n){var t=r[0],c=r[1],i=r[2];return!(e[0][0]*t+e[0][1]*c+e[0][2]*i+e[0][3]>n)&&(!(e[1][0]*t+e[1][1]*c+e[1][2]*i+e[1][3]>n)&&(!(e[2][0]*t+e[2][1]*c+e[2][2]*i+e[2][3]>n)&&(!(e[3][0]*t+e[3][1]*c+e[3][2]*i+e[3][3]>n)&&(!(e[4][0]*t+e[4][1]*c+e[4][2]*i+e[4][3]>n)&&!(e[5][0]*t+e[5][1]*c+e[5][2]*i+e[5][3]>n)))))},r.frustumRay=function(e,r,n,t){return o(e,r,null,u(t,r,n,!1))},r.frustumPoint=function(e,r){for(var n=0;n<6;n++){if(l(e[n],r)<0)return!1}return!0},r.frustumLineSegment=function(e,r,n,t){return o(e,r,n,u(t,r,n,!0))},r.closestPointOnRay=function(e,r,n,c){var i=t.vec3.dot(r,t.vec3.subtract(c,n,e));return t.vec3.add(c,e,t.vec3.scale(c,r,i)),c};var i={dir:c.vec3f64.create(),len:0,clip:n.vec2f64.create()};function u(e,r,n,c){var u=i;return e?(n&&c&&(u.len=t.vec3.distance(r,n)),t.vec3.copy(u.dir,e)):c?(u.len=t.vec3.distance(r,n),t.vec3.subtract(u.dir,n,r),t.vec3.scale(u.dir,u.dir,1/u.len)):(t.vec3.subtract(u.dir,n,r),t.vec3.normalize(u.dir,u.dir)),u}function l(e,r){return-t.vec3.dot(r,e)-e[3]}function f(e,r,n){var c=t.vec3.dot(e,n.dir),i=l(e,r);if(i<0&&c>=0)return!1;if(c>-1e-6&&c<1e-6)return i>0;if((i<0||c<0)&&!(i<0&&c<0))return!0;var u=i/c;return c>0?u<n.clip[1]&&(n.clip[1]=u):u>n.clip[0]&&(n.clip[0]=u),n.clip[0]<=n.clip[1]}function o(e,r,n,t){t.clip[0]=0,t.clip[1]=n?t.len:Number.MAX_VALUE;for(var c=0;c<e.length;c++)if(!f(e[c],r,t))return!1;return!0}}));