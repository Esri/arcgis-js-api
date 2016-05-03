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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../support/projectionUtils","../../lib/glMatrix"],function(r,e){var a=e.vec3d,o=e.mat4d,t=!1,n=4326,c={PER_VERTEX:"perVertex",BOUNDINGBOX:"boundingBox",NO_REPROJECTION:"noReprojection"},i=1e3,l=new Float64Array(3*i),f={ReprojectionTypes:c,reprojectPoints:function(e,n,i,l,f,u,v,s){if(e===c.PER_VERTEX)var b=this.reprojectPointsPerVertex(n,i,l,u,v,s,f);else if(e===c.BOUNDINGBOX)b=this.reprojectBoundingBox(n,l,u,v,s);else{var m=o.create();o.identity(m);var g=o.create();r.computeLinearTransformation(u,l,g,s),b={localTrafo:m,globalTrafo:g}}if(t){var T=[0,0,0,0];r.mbsToMbs(l,u,T,s);for(var h=[0,0,0,0],M=!0,p=0;p<n.length/3-1;p++){var d=[n[3*p],n[3*p+1],n[3*p+2]];o.multiplyVec3(b.localTrafo,d,h),o.multiplyVec3(b.globalTrafo,h,h),a.subtract(h,T,h);var V=a.length(h);V>1.1*l[3]&&(M=!1)}M===!1&&console.debug("vertex out of MBS!")}return b},reprojectPointsPerVertex:function(e,a,t,n,c,f,u){var v=o.create();r.computeLinearTransformation(n,t,v,f);var s=o.create();s=o.inverse(v,s);var b=o.create();if(o.identity(b),!u){var m=[0,0,0],g=e.length/3;r.vectorToVector(t,n,m,c);for(var T=0,h=0;g>h;h+=i){var M=Math.min(i,g-h);for(T=0;M>T;T++)l[3*T]=e[3*(h+T)]+m[0],l[3*T+1]=e[3*(h+T)+1]+m[1],l[3*T+2]=e[3*(h+T)+2]+m[2];r.bufferToBuffer(l,c,0,l,f,0,M);var p,d,V;for(T=0;M>T;T++)p=l[3*T],d=l[3*T+1],V=l[3*T+2],e[3*(h+T)]=s[0]*p+s[4]*d+s[8]*V+s[12],e[3*(h+T)+1]=s[1]*p+s[5]*d+s[9]*V+s[13],e[3*(h+T)+2]=s[2]*p+s[6]*d+s[10]*V+s[14]}}return{localTrafo:b,globalTrafo:v}},reprojectBoundingBox:function(e,t,n,c,i){for(var l=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],f=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE],u=0;u<e.length/3;u++)for(var v=[e[3*u],e[3*u+1],e[3*u+2]],s=0;3>s;s++)l[s]=Math.min(l[s],v[s]),f[s]=Math.max(f[s],v[s]);var b=this.geographicToProjected(t,n,c);a.add(b,l,l),a.add(b,f,f);for(var m=0;3>m;m++)f[m]==l[m]&&(f[m]+=1);for(var g=[[l[0],l[1],l[2]],[f[0],l[1],l[2]],[l[0],f[1],l[2]],[l[0],l[1],f[2]]],T=0;4>T;T++){var h=g[T];r.vectorToVector(h,c,h,i)}var M=a.subtract(g[1],g[0],a.create()),p=a.subtract(g[2],g[0],a.create()),d=a.subtract(g[3],g[0],a.create());a.scale(M,1/(f[0]-l[0])),a.scale(p,1/(f[1]-l[1])),a.scale(d,1/(f[2]-l[2]));var V=a.length(M),E=a.length(p),A=a.length(d);if(Math.abs(V-E)>3||Math.abs(V-A)>3||Math.abs(E-A)>3){for(u=0;u<e.length/3;u++)e[3*u]*=V,e[3*u+1]*=E,e[3*u+2]*=A;a.normalize(M),a.normalize(p),a.normalize(d)}var j=o.createFromMatrixRowMajor([M[0],p[0],d[0],0,M[1],p[1],d[1],0,M[2],p[2],d[2],0,0,0,0,1]),N=[0,0,0,0];r.vectorToVector(t,n,N,i);var x=o.createFromMatrixRowMajor([1,0,0,N[0],0,1,0,N[1],0,0,1,N[2],0,0,0,1]);return{globalTrafo:x,localTrafo:j}},geographicToProjected:function(r,e,a){return a.wkid===n?[r[0],r[1],r[2]]:r}};return f});