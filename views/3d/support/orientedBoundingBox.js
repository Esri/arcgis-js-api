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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/aaBoundingBox","../lib/glMatrix","./dito","./geometryUtils"],function(e,t,a,n,r,i){function c(e,t,a){return{center:n.vec3d.createFrom(e[0],e[1],e[2]),halfSize:v.createFrom(t[0],t[1],t[2]),quaternion:S.createFrom(a[0],a[1],a[2],a[3])}}function u(e){return c(e.center,e.halfSize,e.quaternion)}function o(e,t){n.vec3d.set(e.center,t.center),n.vec3.set(e.halfSize,t.halfSize),n.quat4.set(e.quaternion,t.quaternion)}function f(e,t){return t||(t=c([0,0,0],[-1,-1,-1],[0,0,0,1])),r.computeOBB(e,t),t}function h(e,t){var a=i.plane.distance(t,e.center),n=z(e,t);return a>n?1:a<-n?-1:0}function l(e,t){t||(t=a.create());var n=S.toMat3(e.quaternion,g),r=e.halfSize[0]*Math.abs(n[0])+e.halfSize[1]*Math.abs(n[3])+e.halfSize[2]*Math.abs(n[6]),i=e.halfSize[0]*Math.abs(n[1])+e.halfSize[1]*Math.abs(n[4])+e.halfSize[2]*Math.abs(n[7]),c=e.halfSize[0]*Math.abs(n[2])+e.halfSize[1]*Math.abs(n[5])+e.halfSize[2]*Math.abs(n[8]);return t[0]=e.center[0]-r,t[1]=e.center[1]-i,t[2]=e.center[2]-c,t[3]=e.center[0]+r,t[4]=e.center[1]+i,t[5]=e.center[2]+c,t}function s(e,t){return i.plane.distance(t,e.center)-z(e,t)}function b(e,t){return i.plane.distance(t,e.center)+z(e,t)}function m(e,t){return h(e,t[0])<=0&&h(e,t[1])<=0&&h(e,t[2])<=0&&h(e,t[3])<=0&&h(e,t[4])<=0&&h(e,t[5])<=0}function M(e,t,a,r){void 0===r&&(r=0),S.conjugate(e.quaternion,p),n.vec3.subtract(t,e.center,y);for(var i=S.multiplyVec3(p,y,y),c=S.multiplyVec3(p,a,q),u=-1/0,o=1/0,f=0;f<3;f++)if(Math.abs(c[f])>1e-6){var h=(r+e.halfSize[f]-i[f])/c[f],l=(-r-e.halfSize[f]-i[f])/c[f];u=Math.max(u,Math.min(h,l)),o=Math.min(o,Math.max(h,l))}else if(i[f]>e.halfSize[f]+r||i[f]<-e.halfSize[f]-r)return!1;return u<=o}function z(e,t){S.conjugate(e.quaternion,p),S.multiplyVec3(p,t,y);var a=e.halfSize;return Math.abs(y[0]*a[0])+Math.abs(y[1]*a[1])+Math.abs(y[2]*a[2])}Object.defineProperty(t,"__esModule",{value:!0});var S=n.quat4,v=n.vec3,d=n.mat3d,p=S.create(),y=v.create(),q=v.create(),g=d.create(),x=function(){function e(e){var t=56*e;this.buffer=new ArrayBuffer(t),this.obbs=new Array(e);for(var a=0;a<e;a++)this.obbs[a]={center:new Float64Array(this.buffer,56*a+0,3),halfSize:new Float32Array(this.buffer,56*a+24,3),quaternion:new Float32Array(this.buffer,56*a+36,4)}}return e}();t.ObbArray=x,t.create=c,t.clone=u,t.set=o,t.compute=f,t.intersectPlane=h,t.toAaBoundingBox=l,t.minimumDistancePlane=s,t.maximumDistancePlane=b,t.isVisible=m,t.intersectLine=M});