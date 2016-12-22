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

define(["../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(r,e,a){var t=e.vec3d,o=e.mat4d,n=a.assert,c=!1,i=4326,l={PER_VERTEX:"perVertex",BOUNDINGBOX:"boundingBox",NO_REPROJECTION:"noReprojection"},f=1e3,u=new Float64Array(3*f),v={ReprojectionTypes:l,reprojectPoints:function(e,a,n,i,f,u,v){if(e===l.PER_VERTEX)var s=this.reprojectPointsPerVertex(a,n,f,u,v,i);else if(e===l.BOUNDINGBOX)s=this.reprojectBoundingBox(a,n,f,u,v);else{var b=o.create();o.identity(b);var m=o.create();r.computeLinearTransformation(f,n,m,v),s={localTrafo:b,globalTrafo:m}}if(c){var g=[0,0,0,0];r.mbsToMbs(n,f,g,v);for(var p=[0,0,0,0],T=!0,h=0;h<a.length/3-1;h++){var M=[a[3*h],a[3*h+1],a[3*h+2]];o.multiplyVec3(s.localTrafo,M,p),o.multiplyVec3(s.globalTrafo,p,p),t.subtract(p,g,p);var d=t.length(p);d>1.1*n[3]&&(T=!1)}T===!1&&console.debug("vertex out of MBS!")}return s},reprojectPointsPerVertex:function(e,a,t,n,c,i){var l=o.create();r.computeLinearTransformation(t,a,l,c);var v=o.create();v=o.inverse(l,v);var s=o.create();if(o.identity(s),!i){var b=[0,0,0],m=e.length/3;r.vectorToVector(a,t,b,n);for(var g=0,p=0;m>p;p+=f){var T=Math.min(f,m-p);for(g=0;T>g;g++)u[3*g]=e[3*(p+g)]+b[0],u[3*g+1]=e[3*(p+g)+1]+b[1],u[3*g+2]=e[3*(p+g)+2]+b[2];r.bufferToBuffer(u,n,0,u,c,0,T);var h,M,d;for(g=0;T>g;g++)h=u[3*g],M=u[3*g+1],d=u[3*g+2],e[3*(p+g)]=v[0]*h+v[4]*M+v[8]*d+v[12],e[3*(p+g)+1]=v[1]*h+v[5]*M+v[9]*d+v[13],e[3*(p+g)+2]=v[2]*h+v[6]*M+v[10]*d+v[14]}}return{localTrafo:s,globalTrafo:l}},reprojectNormalsPerVertex:function(e,a,t,c,i){n(c.equals(r.SphericalRenderSpatialReference));var l=o.create();r.computeLinearTransformation(t,a,l,i);var f=o.create();f=o.inverse(l,f);for(var u,v,s,b=e.length/3,m=0;b>m;m++)u=e[3*m],v=e[3*m+1],s=e[3*m+2],e[3*m]=f[0]*u+f[4]*v+f[8]*s,e[3*m+1]=f[1]*u+f[5]*v+f[9]*s,e[3*m+2]=f[2]*u+f[6]*v+f[10]*s},reprojectBoundingBox:function(e,a,n,c,i){for(var l=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],f=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE],u=0;u<e.length/3;u++)for(var v=[e[3*u],e[3*u+1],e[3*u+2]],s=0;3>s;s++)l[s]=Math.min(l[s],v[s]),f[s]=Math.max(f[s],v[s]);var b=this.geographicToProjected(a,n,c);t.add(b,l,l),t.add(b,f,f);for(var m=0;3>m;m++)f[m]==l[m]&&(f[m]+=1);for(var g=[[l[0],l[1],l[2]],[f[0],l[1],l[2]],[l[0],f[1],l[2]],[l[0],l[1],f[2]]],p=0;4>p;p++){var T=g[p];r.vectorToVector(T,c,T,i)}var h=t.subtract(g[1],g[0],t.create()),M=t.subtract(g[2],g[0],t.create()),d=t.subtract(g[3],g[0],t.create());t.scale(h,1/(f[0]-l[0])),t.scale(M,1/(f[1]-l[1])),t.scale(d,1/(f[2]-l[2]));var V=t.length(h),E=t.length(M),j=t.length(d);if(Math.abs(V-E)>3||Math.abs(V-j)>3||Math.abs(E-j)>3){for(u=0;u<e.length/3;u++)e[3*u]*=V,e[3*u+1]*=E,e[3*u+2]*=j;t.normalize(h),t.normalize(M),t.normalize(d)}var A=o.createFromMatrixRowMajor([h[0],M[0],d[0],0,h[1],M[1],d[1],0,h[2],M[2],d[2],0,0,0,0,1]),N=[0,0,0,0];r.vectorToVector(a,n,N,i);var x=o.createFromMatrixRowMajor([1,0,0,N[0],0,1,0,N[1],0,0,1,N[2],0,0,0,1]);return{globalTrafo:x,localTrafo:A}},geographicToProjected:function(r,e,a){return a.wkid===i?[r[0],r[1],r[2]]:r}};return v});