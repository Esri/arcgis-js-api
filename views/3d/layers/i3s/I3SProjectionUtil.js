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

define(["require","exports","../../lib/glMatrix","../../support/projectionUtils"],function(e,r,t,a){function o(e,r,o,f,v,d){var l=e.data,p=e.offsetIdx,s=e.strideIdx;t.vec3d.set(r,c),c[2]+=o;var u=t.mat4d.create();a.computeLinearTransformation(f,c,u,d);var m=t.mat4d.create();t.mat4d.inverse(u,m);var T=t.mat4d.create();t.mat4d.identity(T);var R=[0,0,0],j=l.length/s;a.vectorToVector(c,f,R,v);for(var x=0;x<j;x+=n){for(var E=Math.min(n,j-x),b=0;b<E;b++){var y=p+s*(x+b);i[3*b]=l[y]+R[0],i[3*b+1]=l[y+1]+R[1],i[3*b+2]=l[y+2]+R[2]}a.bufferToBuffer(i,v,0,i,d,0,E);for(var b=0;b<E;b++){var O=i[3*b],P=i[3*b+1],_=i[3*b+2],g=p+s*(x+b);l[g]=m[0]*O+m[4]*P+m[8]*_+m[12],l[g+1]=m[1]*O+m[5]*P+m[9]*_+m[13],l[g+2]=m[2]*O+m[6]*P+m[10]*_+m[14]}}return{localTrafo:T,globalTrafo:u}}Object.defineProperty(r,"__esModule",{value:!0}),r.ReprojectionTypes={PER_VERTEX:"perVertex",NO_REPROJECTION:"noReprojection"};var n=1e3,i=new Float64Array(3*n),c=t.vec3d.create();r.reprojectPoints=o});