// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/earthUtils","../../support/projectionUtils"],(function(r,a,t,e,o,i,n){Object.defineProperty(a,"__esModule",{value:!0});var c=new Float64Array(3e3),f=o.vec3f64.create();a.computeGlobalTransformation=function(r,a,e,o){var i=u(r,a,e),c=t.mat4f64.create();return n.computeLinearTransformation(e,i,c,o),c},a.reprojectPoints=function(r,a,t,o,i,u,h){var s=r.data,v=r.offsetIdx,l=r.strideIdx;e.vec3.copy(f,a),f[2]+=o;var M=[0,0,0],d=s.length/l;n.vectorToVector(f,i,M,u);for(var p=0;p<d;p+=1e3){for(var m=Math.min(1e3,d-p),g=0;g<m;g++){var b=v+l*(p+g);c[3*g+0]=s[b+0]+M[0],c[3*g+1]=s[b+1]+M[1],c[3*g+2]=s[b+2]+M[2]}n.bufferToBuffer(c,u,0,c,h,0,m);for(g=0;g<m;g++){var x=c[3*g+0],I=c[3*g+1],P=c[3*g+2],T=v+l*(p+g);s[T+0]=t[0]*x+t[4]*I+t[8]*P+t[12],s[T+1]=t[1]*x+t[5]*I+t[9]*P+t[13],s[T+2]=t[2]*x+t[6]*I+t[10]*P+t[14]}}};function u(r,a,t){var e=o.vec3f64.create(),n=r[3],c=Math.ceil(Math.log(n)*Math.LOG2E/4),f=Math.pow(2,4*c+1);if(t.isGeographic){var u=f/i.earthRadius*180/Math.PI,h=Math.round(r[1]/u),s=Math.max(-90,Math.min(90,h*u)),v=u/Math.cos((Math.abs(s)-u/2)/180*Math.PI),l=(M=Math.round(r[0]/v))*v;e[0]=l,e[1]=s}else{var M=Math.round(r[0]/f);h=Math.round(r[1]/f);e[0]=M*f,e[1]=h*f}var d=r[2]+a,p=Math.round(d/f);return e[2]=p*f,e}a.getLocalOrigin=u}));