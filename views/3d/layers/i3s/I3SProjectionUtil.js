// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/earthUtils","../../support/projectionUtils","../../webgl-engine/lib/localOrigin"],function(r,e,t,a,o,n,i,c){function f(r,e,a,o){var n=l(r,e,a).center,c=t.mat4f64.create();return i.computeLinearTransformation(a,n,c,o),c}function v(r,e,t,o,n,c,f){var v=r.data,u=r.offsetIdx,l=r.strideIdx;a.vec3.copy(M,e),M[2]+=o;var d=[0,0,0],m=v.length/l;i.vectorToVector(M,n,d,c);for(var p=0;p<m;p+=h){for(var g=Math.min(h,m-p),b=0;b<g;b++){var x=u+l*(p+b);s[3*b+0]=v[x+0]+d[0],s[3*b+1]=v[x+1]+d[1],s[3*b+2]=v[x+2]+d[2]}i.bufferToBuffer(s,c,0,s,f,0,g);for(var b=0;b<g;b++){var T=s[3*b+0],_=s[3*b+1],I=s[3*b+2],O=u+l*(p+b);v[O+0]=t[0]*T+t[4]*_+t[8]*I+t[12],v[O+1]=t[1]*T+t[5]*_+t[9]*I+t[13],v[O+2]=t[2]*T+t[6]*_+t[10]*I+t[14]}}}function u(r,e,t,a){var o=l(r,e,t),n=o.center,f=o.id;return i.vectorToVector(n,t,n,a),c.fromVector(n,f)}function l(r,e,t){var a,i,c,f=o.vec3f64.create(),v=r[3],u=Math.ceil(Math.log(v)*Math.LOG2E/m),l=Math.pow(2,u*m+d);if(t.isGeographic){var h=l/n.earthRadius*180/Math.PI;i=Math.round(r[1]/h);var s=Math.max(-90,Math.min(90,i*h)),M=h/Math.cos((Math.abs(s)-h/2)/180*Math.PI);a=Math.round(r[0]/M);var p=a*M;f[0]=p,f[1]=s}else a=Math.round(r[0]/l),i=Math.round(r[1]/l),f[0]=a*l,f[1]=i*l;var g=r[2]+e;return c=Math.round(g/l),f[2]=c*l,{center:f,id:u+"_"+a+"_"+i+"_"+c}}Object.defineProperty(e,"__esModule",{value:!0});var h=1e3,s=new Float64Array(3*h),M=o.vec3f64.create();e.computeGlobalTransformation=f,e.reprojectPoints=v,e.createOrigin=u;var d=1,m=5-d});