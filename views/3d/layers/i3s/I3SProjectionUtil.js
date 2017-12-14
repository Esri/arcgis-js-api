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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../support/projectionUtils","../../lib/glMatrix","../../webgl-engine/lib/Util"],function(e,r,a,t,o){function n(e,o,n,l,f,d){var v;if(e===r.ReprojectionTypes.PER_VERTEX)v=i(o,n,l,f,d);else{var s=t.mat4d.create();t.mat4d.identity(s);var m=t.mat4d.create();a.computeLinearTransformation(l,n,m,d),v={localTrafo:s,globalTrafo:m}}if(c){var u=[0,0,0,0];a.mbsToMbs(n,l,u,d);for(var p=[0,0,0,0],T=!0,b=o.data,g=o.offsetIdx,x=o.strideIdx,E=0;E<b.length/x;E++){var R=g+x*E,y=[b[R],b[R+1],b[R+2]];t.mat4d.multiplyVec3(v.localTrafo,y,p),t.mat4d.multiplyVec3(v.globalTrafo,p,p),t.vec3d.subtract(p,u,p);var j=t.vec3d.length(p);j>1.1*n[3]&&(T=!1)}T===!1&&console.debug("vertex out of MBS!")}return v}function i(e,r,o,n,i){var l=e.data,c=e.offsetIdx,v=e.strideIdx,s=t.mat4d.create();a.computeLinearTransformation(o,r,s,i);var m=t.mat4d.create();t.mat4d.inverse(s,m);var u=t.mat4d.create();t.mat4d.identity(u);var p=[0,0,0],T=l.length/v;a.vectorToVector(r,o,p,n);for(var b=0;T>b;b+=f){for(var g=Math.min(f,T-b),x=0;g>x;x++){var E=c+v*(b+x);d[3*x]=l[E]+p[0],d[3*x+1]=l[E+1]+p[1],d[3*x+2]=l[E+2]+p[2]}a.bufferToBuffer(d,n,0,d,i,0,g);for(var x=0;g>x;x++){var R=d[3*x],y=d[3*x+1],j=d[3*x+2],E=c+v*(b+x);l[E]=m[0]*R+m[4]*y+m[8]*j+m[12],l[E+1]=m[1]*R+m[5]*y+m[9]*j+m[13],l[E+2]=m[2]*R+m[6]*y+m[10]*j+m[14]}}return{localTrafo:u,globalTrafo:s}}function l(e,r,n,i,l){o.assert(i.equals(a.SphericalECEFSpatialReference));var c=t.mat4d.create();a.computeLinearTransformation(n,r,c,l);var f=t.mat4d.create();t.mat4d.inverse(c,f);for(var d=e.data,v=e.offsetIdx,s=e.strideIdx,m=d.length/s,u=0;m>u;u++){var p=v+s*u,T=d[p],b=d[p+1],g=d[p+2];d[p]=f[0]*T+f[4]*b+f[8]*g,d[p+1]=f[1]*T+f[5]*b+f[9]*g,d[p+2]=f[2]*T+f[6]*b+f[10]*g}}Object.defineProperty(r,"__esModule",{value:!0});var c=!1;r.ReprojectionTypes={PER_VERTEX:"perVertex",NO_REPROJECTION:"noReprojection"};var f=1e3,d=new Float64Array(3*f);r.reprojectPoints=n,r.reprojectNormalsPerVertex=l});