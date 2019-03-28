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

define(["require","exports","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f32","../../../core/libs/gl-matrix-2/quat","../../../core/libs/gl-matrix-2/quatf32","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f32","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/aaBoundingBox","./dito","./geometryUtils"],function(e,t,a,n,r,i,c,f,u,o,s,l){function h(e,t,a){return{center:u.vec3f64.clone(e),halfSize:f.vec3f32.clone(t),quaternion:i.quatf32.clone(a)}}function b(e){return h(e.center,e.halfSize,e.quaternion)}function m(e,t){c.vec3.copy(t.center,e.center),c.vec3.copy(t.halfSize,e.halfSize),r.quat.copy(t.quaternion,e.quaternion)}function v(e,t){return t||(t=h([0,0,0],[-1,-1,-1],[0,0,0,1])),s.computeOBB(e,t),t}function z(e,t){var a=l.plane.signedDistance(t,e.center),n=x(e,t);return a>n?1:a<-n?-1:0}function S(e,t){t||(t=o.create());var n=a.mat3.fromQuat(w,e.quaternion),r=e.halfSize[0]*Math.abs(n[0])+e.halfSize[1]*Math.abs(n[3])+e.halfSize[2]*Math.abs(n[6]),i=e.halfSize[0]*Math.abs(n[1])+e.halfSize[1]*Math.abs(n[4])+e.halfSize[2]*Math.abs(n[7]),c=e.halfSize[0]*Math.abs(n[2])+e.halfSize[1]*Math.abs(n[5])+e.halfSize[2]*Math.abs(n[8]);return t[0]=e.center[0]-r,t[1]=e.center[1]-i,t[2]=e.center[2]-c,t[3]=e.center[0]+r,t[4]=e.center[1]+i,t[5]=e.center[2]+c,t}function p(e,t){return l.plane.signedDistance(t,e.center)-x(e,t)}function M(e,t){return l.plane.signedDistance(t,e.center)+x(e,t)}function q(e,t){return z(e,t.planes[0])<=0&&z(e,t.planes[1])<=0&&z(e,t.planes[2])<=0&&z(e,t.planes[3])<=0&&z(e,t.planes[4])<=0&&z(e,t.planes[5])<=0}function g(e,t,a,n){void 0===n&&(n=0),r.quat.conjugate(d,e.quaternion),c.vec3.subtract(y,t,e.center);for(var i=c.vec3.transformQuat(y,y,d),f=c.vec3.transformQuat(B,a,d),u=-1/0,o=1/0,s=0;s<3;s++)if(Math.abs(f[s])>1e-6){var l=(n+e.halfSize[s]-i[s])/f[s],h=(-n-e.halfSize[s]-i[s])/f[s];u=Math.max(u,Math.min(l,h)),o=Math.min(o,Math.max(l,h))}else if(i[s]>e.halfSize[s]+n||i[s]<-e.halfSize[s]-n)return!1;return u<=o}function x(e,t){r.quat.conjugate(d,e.quaternion),c.vec3.transformQuat(y,t,d);var a=e.halfSize;return Math.abs(y[0]*a[0])+Math.abs(y[1]*a[1])+Math.abs(y[2]*a[2])}Object.defineProperty(t,"__esModule",{value:!0});var d=i.quatf32.create(),y=f.vec3f32.create(),B=f.vec3f32.create(),w=n.mat3f32.create(),D=function(){function e(e){var t=56*e;this.buffer=new ArrayBuffer(t),this.obbs=new Array(e);for(var a=0;a<e;a++)this.obbs[a]={center:u.vec3f64.createView(this.buffer,56*a+0),halfSize:f.vec3f32.createView(this.buffer,56*a+24),quaternion:i.quatf32.createView(this.buffer,56*a+36)}}return e}();t.ObbArray=D,t.create=h,t.clone=b,t.set=m,t.compute=v,t.intersectPlane=z,t.toAaBoundingBox=S,t.minimumDistancePlane=p,t.maximumDistancePlane=M,t.isVisible=q,t.intersectLine=g});