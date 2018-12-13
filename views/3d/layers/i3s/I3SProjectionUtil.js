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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../support/earthUtils","../../support/projectionUtils","../../webgl-engine/lib/localOrigin"],function(r,t,e,a,o,n){function i(r,t,a,n){var i=u(r,t,a).center,c=e.mat4f64.create();return o.computeLinearTransformation(a,i,c,n),c}function c(r,t,a,n,i,c,f){var u=r.data,M=r.offsetIdx,d=r.strideIdx;e.mat4.invert(s,a),e.vec3.copy(l,t),l[2]+=n;var m=[0,0,0],p=u.length/d;o.vectorToVector(l,i,m,c);for(var g=0;g<p;g+=v){for(var b=Math.min(v,p-g),x=0;x<b;x++){var T=M+d*(g+x);h[3*x]=u[T]+m[0],h[3*x+1]=u[T+1]+m[1],h[3*x+2]=u[T+2]+m[2]}o.bufferToBuffer(h,c,0,h,f,0,b);for(var x=0;x<b;x++){var _=h[3*x],I=h[3*x+1],O=h[3*x+2],P=M+d*(g+x);u[P]=s[0]*_+s[4]*I+s[8]*O+s[12],u[P+1]=s[1]*_+s[5]*I+s[9]*O+s[13],u[P+2]=s[2]*_+s[6]*I+s[10]*O+s[14]}}}function f(r,t,e,a){var i=u(r,t,e),c=i.center,f=i.id;return o.vectorToVector(c,e,c,a),n.fromVector(c,f)}function u(r,t,o){var n,i,c,f=e.vec3f64.create(),u=r[3],v=Math.ceil(Math.log(u)*Math.LOG2E/d),h=Math.pow(2,v*d+M);if(o.isGeographic){var l=h/a.earthRadius*180/Math.PI;i=Math.round(r[1]/l);var s=Math.max(-90,Math.min(90,i*l)),m=l/Math.cos((Math.abs(s)-l/2)/180*Math.PI);n=Math.round(r[0]/m);var p=n*m;f[0]=p,f[1]=s}else n=Math.round(r[0]/h),i=Math.round(r[1]/h),f[0]=n*h,f[1]=i*h;var g=r[2]+t;return c=Math.round(g/h),f[2]=c*h,{center:f,id:v+"_"+n+"_"+i+"_"+c}}Object.defineProperty(t,"__esModule",{value:!0});var v=1e3,h=new Float64Array(3*v),l=e.vec3f64.create(),s=e.mat4f64.create();t.computeGlobalTransformation=i,t.reprojectPoints=c,t.createOrigin=f;var M=1,d=5-M});