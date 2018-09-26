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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../lib/gl-matrix"],function(e,r,n){function t(e,r,n){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]<n}function c(e,r,n){var t=r[0],c=r[1],u=r[2];return!(e[0][0]*t+e[0][1]*c+e[0][2]*u+e[0][3]>n)&&(!(e[1][0]*t+e[1][1]*c+e[1][2]*u+e[1][3]>n)&&(!(e[2][0]*t+e[2][1]*c+e[2][2]*u+e[2][3]>n)&&(!(e[3][0]*t+e[3][1]*c+e[3][2]*u+e[3][3]>n)&&(!(e[4][0]*t+e[4][1]*c+e[4][2]*u+e[4][3]>n)&&!(e[5][0]*t+e[5][1]*c+e[5][2]*u+e[5][3]>n)))))}function u(e,r,n,t){return a(e,r,null,f(t,r,n,!1))}function i(e,r){for(var n=0;n<6;n++){if(v(e[n],r)<0)return!1}return!0}function d(e,r,n,t){return a(e,r,n,f(t,r,n,!0))}function l(e,r,t,c){var u=n.vec3d.dot(r,n.vec3d.subtract(t,e,c));return n.vec3d.add(e,n.vec3d.scale(r,u,c),c),c}function f(e,r,t,c){var u=s;return e?(t&&c&&(u.len=n.vec3d.dist(r,t)),n.vec3d.set(e,u.dir)):c?(u.len=n.vec3d.dist(r,t),n.vec3d.scale(n.vec3d.subtract(t,r,u.dir),1/u.len)):n.vec3d.normalize(n.vec3d.subtract(t,r,u.dir)),u}function v(e,r){return-n.vec3d.dot(r,e)-e[3]}function o(e,r,t){var c=n.vec3d.dot(e,t.dir),u=v(e,r);if(u<0&&c>=0)return!1;if(c>-1e-6&&c<1e-6)return u>0;if((u<0||c<0)&&!(u<0&&c<0))return!0;var i=u/c;return c>0?i<t.clip[1]&&(t.clip[1]=i):i>t.clip[0]&&(t.clip[0]=i),t.clip[0]<=t.clip[1]}function a(e,r,n,t){t.clip[0]=0,t.clip[1]=n?t.len:Number.MAX_VALUE;for(var c=0;c<e.length;c++)if(!o(e[c],r,t))return!1;return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.planeSphere=t,r.frustumSphere=c,r.frustumRay=u,r.frustumPoint=i,r.frustumLineSegment=d,r.closestPointOnRay=l;var s={dir:n.vec3d.create(),len:0,clip:n.vec2d.create()}});