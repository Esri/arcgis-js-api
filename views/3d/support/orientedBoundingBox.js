// COPYRIGHT © 2016 Esri
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

define(["require","exports","./aaBoundingBox","../lib/glMatrix"],function(a,e,t,r){function n(a,e){var t=c(a.center,e),r=h(a,e);return t-r>0?1:0>t+r?-1:0}function i(a,e){e||(e=t.create());var r=o.toMat3(a.quaternion,z),n=a.halfSize[0]*Math.abs(r[0])+a.halfSize[1]*Math.abs(r[3])+a.halfSize[2]*Math.abs(r[6]),i=a.halfSize[0]*Math.abs(r[1])+a.halfSize[1]*Math.abs(r[4])+a.halfSize[2]*Math.abs(r[7]),f=a.halfSize[0]*Math.abs(r[2])+a.halfSize[1]*Math.abs(r[5])+a.halfSize[2]*Math.abs(r[8]);return e[0]=a.center[0]-n,e[1]=a.center[1]-i,e[2]=a.center[2]-f,e[3]=a.center[0]+n,e[4]=a.center[1]+i,e[5]=a.center[2]+f,e}function f(a,e){var t=c(a.center,e),r=h(a,e);return Math.max(0,Math.abs(t)-r)}function u(a,e){for(var t=0;6>t;t++)if(n(a,e[t])>0)return!1;return!0}function h(a,e){o.conjugate(a.quaternion,l),o.multiplyVec3(l,e,M);var t=a.halfSize;return Math.abs(M[0]*t[0])+Math.abs(M[1]*t[1])+Math.abs(M[2]*t[2])}function c(a,e){return e[0]*a[0]+e[1]*a[1]+e[2]*a[2]+e[3]}var o=r.quat4,s=r.vec3,b=r.mat3d,l=o.create(),M=s.create(),z=b.create(),S=function(){function a(a){var e=56,t=0,r=24,n=36,i=a*e;this.buffer=new ArrayBuffer(i),this.obbs=new Array(a);for(var f=0;a>f;f++)this.obbs[f]={center:new Float64Array(this.buffer,e*f+t,3),halfSize:new Float32Array(this.buffer,e*f+r,3),quaternion:new Float32Array(this.buffer,e*f+n,4)}}return a}();e.ObbArray=S,e.intersectPlane=n,e.toAaBoundingBox=i,e.minimumDistancePlane=f,e.isVisible=u});