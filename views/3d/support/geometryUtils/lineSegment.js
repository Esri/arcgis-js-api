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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../mathUtils","../stack"],function(e,t,r,c,n,i,o){function v(e){return e?{origin:n.vec3f64.clone(e.origin),vector:n.vec3f64.clone(e.vector)}:{origin:n.vec3f64.create(),vector:n.vec3f64.create()}}function a(e,t){var r=A.get();return r.origin=e,r.vector=t,r}function s(e,t){return void 0===t&&(t=v()),u(e.origin,e.vector,t)}function u(e,t,r){return void 0===r&&(r=v()),c.vec3.copy(r.origin,e),c.vec3.copy(r.vector,t),r}function d(e,t,r){return void 0===r&&(r=v()),c.vec3.copy(r.origin,e),c.vec3.subtract(r.vector,t,e),r}function g(e,t){var r=c.vec3.subtract(o.sv3d.get(),t,e.origin),n=c.vec3.dot(e.vector,r),v=c.vec3.dot(e.vector,e.vector),a=i.clamp(n/v,0,1),s=c.vec3.subtract(o.sv3d.get(),c.vec3.scale(o.sv3d.get(),e.vector,a),r);return c.vec3.dot(s,s)}function f(e,t){return Math.sqrt(g(e,t))}function l(e,t,r){return p(e,t,0,1,r)}function p(e,t,r,n,v){var a=e.vector,s=e.origin,u=c.vec3.subtract(o.sv3d.get(),t,s),d=c.vec3.length(a),g=c.vec3.dot(a,u)/d;return c.vec3.scale(v,a,i.clamp(g,r,n)),c.vec3.add(v,v,e.origin)}function b(e,t){if(M(e,a(t.origin,t.direction),!1,y)){var r=y.tA,n=y.pB,i=y.distance2;if(r>=0&&r<=1)return i;if(r<0)return c.vec3.squaredDistance(e.origin,n);if(r>1)return c.vec3.squaredDistance(c.vec3.add(o.sv3d.get(),e.origin,e.vector),n)}return null}function m(e,t,r){return!!M(e,t,!0,y)&&(c.vec3.copy(r,y.pA),!0)}function h(e,t){return M(e,t,!0,y)?y.distance2:null}function M(e,t,r,n){var v=e.origin,a=c.vec3.add(o.sv3d.get(),v,e.vector),s=t.origin,u=c.vec3.add(o.sv3d.get(),s,t.vector),d=o.sv3d.get(),g=o.sv3d.get();if(d[0]=v[0]-s[0],d[1]=v[1]-s[1],d[2]=v[2]-s[2],g[0]=u[0]-s[0],g[1]=u[1]-s[1],g[2]=u[2]-s[2],Math.abs(g[0])<1e-6&&Math.abs(g[1])<1e-6&&Math.abs(g[2])<1e-6)return!1;var f=o.sv3d.get();if(f[0]=a[0]-v[0],f[1]=a[1]-v[1],f[2]=a[2]-v[2],Math.abs(f[0])<1e-6&&Math.abs(f[1])<1e-6&&Math.abs(f[2])<1e-6)return!1;var l=d[0]*g[0]+d[1]*g[1]+d[2]*g[2],p=g[0]*f[0]+g[1]*f[1]+g[2]*f[2],b=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],m=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],h=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],M=h*m-p*p;if(Math.abs(M)<1e-6)return!1;var y=l*p-b*m,A=y/M,j=(l+p*A)/m;r&&(A=i.clamp(A,0,1),j=i.clamp(j,0,1));var q=o.sv3d.get(),B=o.sv3d.get();return q[0]=v[0]+A*f[0],q[1]=v[1]+A*f[1],q[2]=v[2]+A*f[2],B[0]=s[0]+j*g[0],B[1]=s[1]+j*g[1],B[2]=s[2]+j*g[2],n.tA=A,n.tB=j,n.pA=q,n.pB=B,n.distance2=c.vec3.squaredDistance(q,B),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.create=v,t.wrap=a,t.copy=s,t.fromValues=u,t.fromPoints=d,t.distance2=g,t.distance=f,t.projectPoint=l,t.projectPointClamp=p,t.closestRayDistance2=b,t.closestLineSegmentPoint=m,t.closestLineSegmentDistance2=h;var y={tA:0,tB:0,pA:n.vec3f64.create(),pB:n.vec3f64.create(),distance2:0},A=new r.ObjectStack(function(){return{origin:null,vector:null}})});