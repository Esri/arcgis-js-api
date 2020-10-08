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

define(["require","exports","../../../../core/mathUtils","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../stack"],(function(e,t,c,r,n,i,o){"use strict";function a(e){return e?{origin:i.vec3f64.clone(e.origin),vector:i.vec3f64.clone(e.vector)}:{origin:i.vec3f64.create(),vector:i.vec3f64.create()}}function v(e,t){var c=l.get();return c.origin=e,c.vector=t,c}function s(e,t,c){return void 0===c&&(c=a()),n.vec3.copy(c.origin,e),n.vec3.copy(c.vector,t),c}function u(e,t){var r=n.vec3.subtract(o.sv3d.get(),t,e.origin),i=n.vec3.dot(e.vector,r),a=n.vec3.dot(e.vector,e.vector),v=c.clamp(i/a,0,1),s=n.vec3.subtract(o.sv3d.get(),n.vec3.scale(o.sv3d.get(),e.vector,v),r);return n.vec3.dot(s,s)}function d(e,t,r,i,a){var v=e.vector,s=e.origin,u=n.vec3.subtract(o.sv3d.get(),t,s),d=n.vec3.length(v),g=n.vec3.dot(v,u)/d;return n.vec3.scale(a,v,c.clamp(g,r,i)),n.vec3.add(a,a,e.origin)}function g(e,t,r,i){var a=e.origin,v=n.vec3.add(o.sv3d.get(),a,e.vector),s=t.origin,u=n.vec3.add(o.sv3d.get(),s,t.vector),d=o.sv3d.get(),g=o.sv3d.get();if(d[0]=a[0]-s[0],d[1]=a[1]-s[1],d[2]=a[2]-s[2],g[0]=u[0]-s[0],g[1]=u[1]-s[1],g[2]=u[2]-s[2],Math.abs(g[0])<1e-6&&Math.abs(g[1])<1e-6&&Math.abs(g[2])<1e-6)return!1;var f=o.sv3d.get();if(f[0]=v[0]-a[0],f[1]=v[1]-a[1],f[2]=v[2]-a[2],Math.abs(f[0])<1e-6&&Math.abs(f[1])<1e-6&&Math.abs(f[2])<1e-6)return!1;var l=d[0]*g[0]+d[1]*g[1]+d[2]*g[2],p=g[0]*f[0]+g[1]*f[1]+g[2]*f[2],m=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],b=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],h=(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*b-p*p;if(Math.abs(h)<1e-6)return!1;var y=(l*p-m*b)/h,M=(l+p*y)/b;r&&(y=c.clamp(y,0,1),M=c.clamp(M,0,1));var P=o.sv3d.get(),A=o.sv3d.get();return P[0]=a[0]+y*f[0],P[1]=a[1]+y*f[1],P[2]=a[2]+y*f[2],A[0]=s[0]+M*g[0],A[1]=s[1]+M*g[1],A[2]=s[2]+M*g[2],i.tA=y,i.tB=M,i.pA=P,i.pB=A,i.distance2=n.vec3.squaredDistance(P,A),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.closestLineSegmentDistance2=t.closestLineSegmentPoint=t.closestRayDistance2=t.projectPointClamp=t.pointAt=t.projectPoint=t.distance=t.distance2=t.fromPoints=t.fromValues=t.copy=t.wrap=t.create=void 0,t.create=a,t.wrap=v,t.copy=function(e,t){return void 0===t&&(t=a()),s(e.origin,e.vector,t)},t.fromValues=s,t.fromPoints=function(e,t,c){return void 0===c&&(c=a()),n.vec3.copy(c.origin,e),n.vec3.subtract(c.vector,t,e),c},t.distance2=u,t.distance=function(e,t){return Math.sqrt(u(e,t))},t.projectPoint=function(e,t,c){return d(e,t,0,1,c)},t.pointAt=function(e,t,c){return n.vec3.add(c,e.origin,n.vec3.scale(c,e.vector,t))},t.projectPointClamp=d,t.closestRayDistance2=function(e,t){if(g(e,v(t.origin,t.direction),!1,f)){var c=f.tA,r=f.pB,i=f.distance2;if(c>=0&&c<=1)return i;if(c<0)return n.vec3.squaredDistance(e.origin,r);if(c>1)return n.vec3.squaredDistance(n.vec3.add(o.sv3d.get(),e.origin,e.vector),r)}return null},t.closestLineSegmentPoint=function(e,t,c){return!!g(e,t,!0,f)&&(n.vec3.copy(c,f.pA),!0)},t.closestLineSegmentDistance2=function(e,t){return g(e,t,!0,f)?f.distance2:null};var f={tA:0,tB:0,pA:i.vec3f64.create(),pB:i.vec3f64.create(),distance2:0},l=new r.ObjectStack((function(){return{origin:null,vector:null}}))}));