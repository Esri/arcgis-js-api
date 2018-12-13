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

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/gl-matrix","../mathUtils","../stack"],function(e,t,r,c,n,i){function o(e){return e?{origin:c.vec3f64.clone(e.origin),vector:c.vec3f64.clone(e.vector)}:{origin:c.vec3f64.create(),vector:c.vec3f64.create()}}function v(e,t){var r=y.get();return r.origin=e,r.vector=t,r}function a(e,t){return void 0===t&&(t=o()),s(e.origin,e.vector,t)}function s(e,t,r){return void 0===r&&(r=o()),c.vec3.copy(r.origin,e),c.vec3.copy(r.vector,t),r}function u(e,t,r){return void 0===r&&(r=o()),c.vec3.copy(r.origin,e),c.vec3.subtract(r.vector,t,e),r}function d(e,t){var r=c.vec3.subtract(i.sv3d.get(),t,e.origin),o=c.vec3.dot(e.vector,r),v=c.vec3.dot(e.vector,e.vector),a=n.clamp(o/v,0,1),s=c.vec3.subtract(i.sv3d.get(),c.vec3.scale(i.sv3d.get(),e.vector,a),r);return c.vec3.dot(s,s)}function g(e,t){return Math.sqrt(d(e,t))}function f(e,t,r){return l(e,t,0,1,r)}function l(e,t,r,o,v){var a=e.vector,s=e.origin,u=c.vec3.subtract(i.sv3d.get(),t,s),d=c.vec3.length(a),g=c.vec3.dot(a,u)/d;return c.vec3.scale(v,a,n.clamp(g,r,o)),c.vec3.add(v,v,e.origin)}function p(e,t){if(h(e,v(t.origin,t.direction),!1,M)){var r=M.tA,n=M.pB,o=M.distance2;if(r>=0&&r<=1)return o;if(r<0)return c.vec3.squaredDistance(e.origin,n);if(r>1)return c.vec3.squaredDistance(c.vec3.add(i.sv3d.get(),e.origin,e.vector),n)}return null}function b(e,t,r){return!!h(e,t,!0,M)&&(c.vec3.copy(r,M.pA),!0)}function m(e,t){return h(e,t,!0,M)?M.distance2:null}function h(e,t,r,o){var v=e.origin,a=c.vec3.add(i.sv3d.get(),v,e.vector),s=t.origin,u=c.vec3.add(i.sv3d.get(),s,t.vector),d=i.sv3d.get(),g=i.sv3d.get();if(d[0]=v[0]-s[0],d[1]=v[1]-s[1],d[2]=v[2]-s[2],g[0]=u[0]-s[0],g[1]=u[1]-s[1],g[2]=u[2]-s[2],Math.abs(g[0])<1e-6&&Math.abs(g[1])<1e-6&&Math.abs(g[2])<1e-6)return!1;var f=i.sv3d.get();if(f[0]=a[0]-v[0],f[1]=a[1]-v[1],f[2]=a[2]-v[2],Math.abs(f[0])<1e-6&&Math.abs(f[1])<1e-6&&Math.abs(f[2])<1e-6)return!1;var l=d[0]*g[0]+d[1]*g[1]+d[2]*g[2],p=g[0]*f[0]+g[1]*f[1]+g[2]*f[2],b=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],m=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],h=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],M=h*m-p*p;if(Math.abs(M)<1e-6)return!1;var y=l*p-b*m,A=y/M,j=(l+p*A)/m;r&&(A=n.clamp(A,0,1),j=n.clamp(j,0,1));var q=i.sv3d.get(),B=i.sv3d.get();return q[0]=v[0]+A*f[0],q[1]=v[1]+A*f[1],q[2]=v[2]+A*f[2],B[0]=s[0]+j*g[0],B[1]=s[1]+j*g[1],B[2]=s[2]+j*g[2],o.tA=A,o.tB=j,o.pA=q,o.pB=B,o.distance2=c.vec3.squaredDistance(q,B),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.create=o,t.wrap=v,t.copy=a,t.fromValues=s,t.fromPoints=u,t.distance2=d,t.distance=g,t.projectPoint=f,t.projectPointClamp=l,t.closestRayDistance2=p,t.closestLineSegmentPoint=b,t.closestLineSegmentDistance2=m;var M={tA:0,tB:0,pA:c.vec3f64.create(),pB:c.vec3f64.create(),distance2:0},y=new r.ObjectStack(function(){return{origin:null,vector:null}})});