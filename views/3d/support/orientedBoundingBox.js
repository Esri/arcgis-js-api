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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix","./aaBoundingBox","./dito"],function(e,t,a,n,r){function i(e,t,n){return{center:a.vec3d.createFrom(e[0],e[1],e[2]),halfSize:v.createFrom(t[0],t[1],t[2]),quaternion:S.createFrom(n[0],n[1],n[2],n[3])}}function c(e){return i(e.center,e.halfSize,e.quaternion)}function u(e,t){a.vec3d.set(e.center,t.center),a.vec3.set(e.halfSize,t.halfSize),a.quat4.set(e.quaternion,t.quaternion)}function f(e,t){return t||(t=i([0,0,0],[-1,-1,-1],[0,0,0,1])),r.computeOBB(e,t),t}function o(e,t){var a=z(e.center,t),n=m(e,t);return a>n?1:a<-n?-1:0}function h(e,t){t||(t=n.create());var a=S.toMat3(e.quaternion,x),r=e.halfSize[0]*Math.abs(a[0])+e.halfSize[1]*Math.abs(a[3])+e.halfSize[2]*Math.abs(a[6]),i=e.halfSize[0]*Math.abs(a[1])+e.halfSize[1]*Math.abs(a[4])+e.halfSize[2]*Math.abs(a[7]),c=e.halfSize[0]*Math.abs(a[2])+e.halfSize[1]*Math.abs(a[5])+e.halfSize[2]*Math.abs(a[8]);return t[0]=e.center[0]-r,t[1]=e.center[1]-i,t[2]=e.center[2]-c,t[3]=e.center[0]+r,t[4]=e.center[1]+i,t[5]=e.center[2]+c,t}function l(e,t){return z(e.center,t)-m(e,t)}function s(e,t){return z(e.center,t)+m(e,t)}function b(e,t){return o(e,t[0])<=0&&o(e,t[1])<=0&&o(e,t[2])<=0&&o(e,t[3])<=0&&o(e,t[4])<=0&&o(e,t[5])<=0}function M(e,t,n,r){void 0===r&&(r=0),S.conjugate(e.quaternion,d),a.vec3.subtract(t,e.center,y);for(var i=S.multiplyVec3(d,y,y),c=S.multiplyVec3(d,n,p),u=-1/0,f=1/0,o=0;o<3;o++)if(Math.abs(c[o])>1e-6){var h=(r+e.halfSize[o]-i[o])/c[o],l=(-r-e.halfSize[o]-i[o])/c[o];u=Math.max(u,Math.min(h,l)),f=Math.min(f,Math.max(h,l))}else if(i[o]>e.halfSize[o]+r||i[o]<-e.halfSize[o]-r)return!1;return u<=f}function m(e,t){S.conjugate(e.quaternion,d),S.multiplyVec3(d,t,y);var a=e.halfSize;return Math.abs(y[0]*a[0])+Math.abs(y[1]*a[1])+Math.abs(y[2]*a[2])}function z(e,t){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]}Object.defineProperty(t,"__esModule",{value:!0});var S=a.quat4,v=a.vec3,q=a.mat3d,d=S.create(),y=v.create(),p=v.create(),x=q.create(),A=function(){function e(e){var t=56*e;this.buffer=new ArrayBuffer(t),this.obbs=new Array(e);for(var a=0;a<e;a++)this.obbs[a]={center:new Float64Array(this.buffer,56*a+0,3),halfSize:new Float32Array(this.buffer,56*a+24,3),quaternion:new Float32Array(this.buffer,56*a+36,4)}}return e}();t.ObbArray=A,t.create=i,t.clone=c,t.set=u,t.compute=f,t.intersectPlane=o,t.toAaBoundingBox=h,t.minimumDistancePlane=l,t.maximumDistancePlane=s,t.isVisible=b,t.intersectLine=M});