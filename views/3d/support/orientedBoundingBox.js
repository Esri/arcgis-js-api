// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./aaBoundingBox","../lib/glMatrix"],function(e,a,t,r){function n(e,a){var t=l(e.center,a),r=o(e,a);return t-r>0?1:0>t+r?-1:0}function i(e,a){a||(a=t.create());var r=s.toMat3(e.quaternion,v),n=e.halfSize[0]*Math.abs(r[0])+e.halfSize[1]*Math.abs(r[3])+e.halfSize[2]*Math.abs(r[6]),i=e.halfSize[0]*Math.abs(r[1])+e.halfSize[1]*Math.abs(r[4])+e.halfSize[2]*Math.abs(r[7]),f=e.halfSize[0]*Math.abs(r[2])+e.halfSize[1]*Math.abs(r[5])+e.halfSize[2]*Math.abs(r[8]);return a[0]=e.center[0]-n,a[1]=e.center[1]-i,a[2]=e.center[2]-f,a[3]=e.center[0]+n,a[4]=e.center[1]+i,a[5]=e.center[2]+f,a}function f(e,a){var t=l(e.center,a),r=o(e,a);return t-r}function u(e,a){var t=l(e.center,a),r=o(e,a);return t+r}function c(e,a){for(var t=0;6>t;t++)if(n(e,a[t])>0)return!1;return!0}function h(e,a,t,n){void 0===n&&(n=0),s.conjugate(e.quaternion,z),r.vec3.subtract(a,e.center,S);for(var i=s.multiplyVec3(z,S,S),f=s.multiplyVec3(z,t,m),u=-(1/0),c=1/0,h=0;3>h;h++)if(Math.abs(f[h])>1e-6){var o=(n+e.halfSize[h]-i[h])/f[h],l=(-n-e.halfSize[h]-i[h])/f[h];u=Math.max(u,Math.min(o,l)),c=Math.min(c,Math.max(o,l))}else if(i[h]>e.halfSize[h]+n||i[h]<-e.halfSize[h]-n)return!1;return c>=u}function o(e,a){s.conjugate(e.quaternion,z),s.multiplyVec3(z,a,S);var t=e.halfSize;return Math.abs(S[0]*t[0])+Math.abs(S[1]*t[1])+Math.abs(S[2]*t[2])}function l(e,a){return a[0]*e[0]+a[1]*e[1]+a[2]*e[2]+a[3]}var s=r.quat4,b=r.vec3,M=r.mat3d,z=s.create(),S=b.create(),m=b.create(),v=M.create(),y=function(){function e(e){var a=56,t=0,r=24,n=36,i=e*a;this.buffer=new ArrayBuffer(i),this.obbs=new Array(e);for(var f=0;e>f;f++)this.obbs[f]={center:new Float64Array(this.buffer,a*f+t,3),halfSize:new Float32Array(this.buffer,a*f+r,3),quaternion:new Float32Array(this.buffer,a*f+n,4)}}return e}();a.ObbArray=y,a.intersectPlane=n,a.toAaBoundingBox=i,a.minimumDistancePlane=f,a.maximumDistancePlane=u,a.isVisible=c,a.intersectLine=h});