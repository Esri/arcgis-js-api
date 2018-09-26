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

define(["require","exports","../../lib/gl-matrix","../../support/earthUtils","../../support/projectionUtils"],function(r,t,e,a,o){function n(r,t,a,n){var i=v(r,t,a).center,c=e.mat4d.create();return o.computeLinearTransformation(a,i,c,n),c}function i(r,t,a,n,i,c,v){var s=r.data,M=r.offsetIdx,l=r.strideIdx;e.mat4d.inverse(a,f),e.vec3d.set(t,h),h[2]+=n;var p=[0,0,0],m=s.length/l;o.vectorToVector(h,i,p,c);for(var b=0;b<m;b+=u){for(var g=Math.min(u,m-b),x=0;x<g;x++){var T=M+l*(b+x);d[3*x]=s[T]+p[0],d[3*x+1]=s[T+1]+p[1],d[3*x+2]=s[T+2]+p[2]}o.bufferToBuffer(d,c,0,d,v,0,g);for(var x=0;x<g;x++){var _=d[3*x],I=d[3*x+1],P=d[3*x+2],j=M+l*(b+x);s[j]=f[0]*_+f[4]*I+f[8]*P+f[12],s[j+1]=f[1]*_+f[5]*I+f[9]*P+f[13],s[j+2]=f[2]*_+f[6]*I+f[10]*P+f[14]}}}function c(r,t,e,a){var n=v(r,t,e),i=n.center,c=n.id;return o.vectorToVector(i,e,i,a),{vec3:i,id:c}}function v(r,t,o){var n,i,c,v=e.vec3d.create(),u=r[3],d=Math.ceil(Math.log(u)*Math.LOG2E/M),h=Math.pow(2,d*M+s);if(o.isGeographic){var f=h/a.earthRadius*180/Math.PI;i=Math.round(r[1]/f);var l=Math.max(-90,Math.min(90,i*f)),p=f/Math.cos((Math.abs(l)-f/2)/180*Math.PI);n=Math.round(r[0]/p);var m=n*p;v[0]=m,v[1]=l}else n=Math.round(r[0]/h),i=Math.round(r[1]/h),v[0]=n*h,v[1]=i*h;var b=r[2]+t;return c=Math.round(b/h),v[2]=c*h,{center:v,id:d+"_"+n+"_"+i+"_"+c}}Object.defineProperty(t,"__esModule",{value:!0});var u=1e3,d=new Float64Array(3*u),h=e.vec3d.create(),f=e.mat4d.create();t.computeGlobalTransformation=n,t.reprojectPoints=i,t.createOrigin=c;var s=1,M=5-s});