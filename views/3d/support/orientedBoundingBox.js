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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/support/aaBoundingBox","./dito","./geometryUtils"],function(e,t,a,n,r,i){function c(e,t,n){return{center:a.vec3f64.clone(e),halfSize:a.vec3f32.clone(t),quaternion:a.quatf32.clone(n)}}function f(e){return c(e.center,e.halfSize,e.quaternion)}function u(e,t){a.vec3.copy(t.center,e.center),a.vec3.copy(t.halfSize,e.halfSize),a.quat.copy(t.quaternion,e.quaternion)}function o(e,t){return t||(t=c([0,0,0],[-1,-1,-1],[0,0,0,1])),r.computeOBB(e,t),t}function s(e,t){var a=i.plane.signedDistance(t,e.center),n=z(e,t);return a>n?1:a<-n?-1:0}function l(e,t){t||(t=n.create());var r=a.mat3.fromQuat(q,e.quaternion),i=e.halfSize[0]*Math.abs(r[0])+e.halfSize[1]*Math.abs(r[3])+e.halfSize[2]*Math.abs(r[6]),c=e.halfSize[0]*Math.abs(r[1])+e.halfSize[1]*Math.abs(r[4])+e.halfSize[2]*Math.abs(r[7]),f=e.halfSize[0]*Math.abs(r[2])+e.halfSize[1]*Math.abs(r[5])+e.halfSize[2]*Math.abs(r[8]);return t[0]=e.center[0]-i,t[1]=e.center[1]-c,t[2]=e.center[2]-f,t[3]=e.center[0]+i,t[4]=e.center[1]+c,t[5]=e.center[2]+f,t}function h(e,t){return i.plane.signedDistance(t,e.center)-z(e,t)}function b(e,t){return i.plane.signedDistance(t,e.center)+z(e,t)}function m(e,t){return s(e,t.planes[0])<=0&&s(e,t.planes[1])<=0&&s(e,t.planes[2])<=0&&s(e,t.planes[3])<=0&&s(e,t.planes[4])<=0&&s(e,t.planes[5])<=0}function v(e,t,n,r){void 0===r&&(r=0),a.quat.conjugate(S,e.quaternion),a.vec3.subtract(p,t,e.center);for(var i=a.vec3.transformQuat(p,p,S),c=a.vec3.transformQuat(M,n,S),f=-1/0,u=1/0,o=0;o<3;o++)if(Math.abs(c[o])>1e-6){var s=(r+e.halfSize[o]-i[o])/c[o],l=(-r-e.halfSize[o]-i[o])/c[o];f=Math.max(f,Math.min(s,l)),u=Math.min(u,Math.max(s,l))}else if(i[o]>e.halfSize[o]+r||i[o]<-e.halfSize[o]-r)return!1;return f<=u}function z(e,t){a.quat.conjugate(S,e.quaternion),a.vec3.transformQuat(p,t,S);var n=e.halfSize;return Math.abs(p[0]*n[0])+Math.abs(p[1]*n[1])+Math.abs(p[2]*n[2])}Object.defineProperty(t,"__esModule",{value:!0});var S=a.quatf32.create(),p=a.vec3f32.create(),M=a.vec3f32.create(),q=a.mat3f32.create(),g=function(){function e(e){var t=56*e;this.buffer=new ArrayBuffer(t),this.obbs=new Array(e);for(var n=0;n<e;n++)this.obbs[n]={center:a.vec3f64.createView(this.buffer,56*n+0),halfSize:a.vec3f32.createView(this.buffer,56*n+24),quaternion:a.quatf32.createView(this.buffer,56*n+36)}}return e}();t.ObbArray=g,t.create=c,t.clone=f,t.set=u,t.compute=o,t.intersectPlane=s,t.toAaBoundingBox=l,t.minimumDistancePlane=h,t.maximumDistancePlane=b,t.isVisible=m,t.intersectLine=v});