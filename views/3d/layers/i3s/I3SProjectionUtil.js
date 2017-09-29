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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/SpatialReference","../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(e,r,a,t,o,c){function n(e,a,c,n,i,d){var m;if(e===r.ReprojectionTypes.PER_VERTEX)m=v(a,c,n,i,d);else if(e===r.ReprojectionTypes.BOUNDINGBOX)m=l(a,c,n,i,d);else{var u=o.mat4d.create();o.mat4d.identity(u);var s=o.mat4d.create();t.computeLinearTransformation(n,c,s,d),m={localTrafo:u,globalTrafo:s}}if(f){var b=[0,0,0,0];t.mbsToMbs(c,n,b,d);for(var p=[0,0,0,0],T=!0,g=0;g<a.length/3-1;g++){var M=[a[3*g],a[3*g+1],a[3*g+2]];o.mat4d.multiplyVec3(m.localTrafo,M,p),o.mat4d.multiplyVec3(m.globalTrafo,p,p),o.vec3d.subtract(p,b,p);var h=o.vec3d.length(p);h>1.1*c[3]&&(T=!1)}T===!1&&console.debug("vertex out of MBS!")}return m}function v(e,r,a,c,n){var v=o.mat4d.create();t.computeLinearTransformation(a,r,v,n);var i=o.mat4d.create();o.mat4d.inverse(v,i);var l=o.mat4d.create();o.mat4d.identity(l);var d=[0,0,0],f=e.length/3;t.vectorToVector(r,a,d,c);for(var m=0;f>m;m+=u){for(var b=Math.min(u,f-m),p=0;b>p;p++)s[3*p]=e[3*(m+p)]+d[0],s[3*p+1]=e[3*(m+p)+1]+d[1],s[3*p+2]=e[3*(m+p)+2]+d[2];t.bufferToBuffer(s,c,0,s,n,0,b);for(var p=0;b>p;p++){var T=s[3*p],g=s[3*p+1],M=s[3*p+2];e[3*(m+p)]=i[0]*T+i[4]*g+i[8]*M+i[12],e[3*(m+p)+1]=i[1]*T+i[5]*g+i[9]*M+i[13],e[3*(m+p)+2]=i[2]*T+i[6]*g+i[10]*M+i[14]}}return{localTrafo:l,globalTrafo:v}}function i(e,r,a,n,v){c.assert(n.equals(t.SphericalRenderSpatialReference));var i=o.mat4d.create();t.computeLinearTransformation(a,r,i,v);var l=o.mat4d.create();o.mat4d.inverse(i,l);for(var d=e.length/3,f=0;d>f;f++){var m=e[3*f],u=e[3*f+1],s=e[3*f+2];e[3*f]=l[0]*m+l[4]*u+l[8]*s,e[3*f+1]=l[1]*m+l[5]*u+l[9]*s,e[3*f+2]=l[2]*m+l[6]*u+l[10]*s}}function l(e,r,a,c,n){for(var v=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],i=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE],l=0;l<e.length/3;l++)for(var f=[e[3*l],e[3*l+1],e[3*l+2]],m=0;3>m;m++)v[m]=Math.min(v[m],f[m]),i[m]=Math.max(i[m],f[m]);var u=d(r,a,c);o.vec3d.add(u,v,v),o.vec3d.add(u,i,i);for(var s=0;3>s;s++)i[s]===v[s]&&(i[s]+=1);for(var b=[[v[0],v[1],v[2]],[i[0],v[1],v[2]],[v[0],i[1],v[2]],[v[0],v[1],i[2]]],p=0;4>p;p++){var T=b[p];t.vectorToVector(T,c,T,n)}var g=o.vec3d.subtract(b[1],b[0],o.vec3d.create()),M=o.vec3d.subtract(b[2],b[0],o.vec3d.create()),h=o.vec3d.subtract(b[3],b[0],o.vec3d.create());o.vec3d.scale(g,1/(i[0]-v[0])),o.vec3d.scale(M,1/(i[1]-v[1])),o.vec3d.scale(h,1/(i[2]-v[2]));var R=o.vec3d.length(g),V=o.vec3d.length(M),E=o.vec3d.length(h);if(Math.abs(R-V)>3||Math.abs(R-E)>3||Math.abs(V-E)>3){for(var l=0;l<e.length/3;l++)e[3*l]*=R,e[3*l+1]*=V,e[3*l+2]*=E;o.vec3d.normalize(g),o.vec3d.normalize(M),o.vec3d.normalize(h)}var A=o.mat4d.createFromMatrixRowMajor([g[0],M[0],h[0],0,g[1],M[1],h[1],0,g[2],M[2],h[2],0,0,0,0,1]),N=[0,0,0,0];t.vectorToVector(r,a,N,n);var j=o.mat4d.createFromMatrixRowMajor([1,0,0,N[0],0,1,0,N[1],0,0,1,N[2],0,0,0,1]);return{globalTrafo:j,localTrafo:A}}function d(e,r,a){return a.wkid===m?[e[0],e[1],e[2]]:e}Object.defineProperty(r,"__esModule",{value:!0});var f=!1,m=a.WGS84.wkid;r.ReprojectionTypes={PER_VERTEX:"perVertex",BOUNDINGBOX:"boundingBox",NO_REPROJECTION:"noReprojection"};var u=1e3,s=new Float64Array(3*u);r.reprojectPoints=n,r.reprojectNormalsPerVertex=i,r.reprojectBoundingBox=l});