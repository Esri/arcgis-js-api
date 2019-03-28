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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/unitUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/earthUtils","../support/mathUtils"],function(t,e,r,a,n,i,s){function u(t,e,r){return"global"===t?new h:new c(e,r)}function o(t,e,r,a){var n=x/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=u;var c=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=r.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,r,n,u){u||(u={near:0,far:0});var c=i.earthRadius,h=t[2]*this.unitInMeters,x=h,p=h-n,y=this.elevationProvider?this.elevationProvider.getElevationBounds():null;y&&(h=p>=0?x-this.unitInMeters*y[0]:this.unitInMeters*y[1]-x);var d={x:r.xmax-r.xmin,y:r.ymax-r.ymin,z:4*Math.max(r.xmax-r.xmin,r.ymax-r.ymin)},b=Math.max(d.x,d.y,d.z);a.vec3.subtract(f,e,t),v[0]=f[0]>0?r.xmax:r.xmin,v[1]=f[1]>0?r.ymax:r.ymin,v[2]=f[2]>0?b/2:-b/2,a.vec3.subtract(v,v,t),a.vec3.normalize(f,f);var I=1.1*a.vec3.dot(v,f),g=I*this.unitInMeters,P=Math.sqrt(h*(h+2*c)),U=Math.max(r.xmax-r.xmin,r.ymax-r.ymin),q=U*M*this.unitInMeters,z=U*l*this.unitInMeters,R=s.clamp((h-z)/(q-z),0,1);R*=R*R;var w=s.lerp(P,g,R);return w*=Math.max(Math.log(Math.abs(p)),1),w=Math.min(w,Math.max(34064e4,b)),w/=this.unitInMeters,o(w,m,this.unitInMeters,u)},t}(),h=function(){function t(){}return t.prototype.compute=function(t,e,r,n,u){u||(u={near:0,far:0});var c=i.earthRadius,h=a.vec3.length(t)-c,m=c+Math.min(0,n),x=Math.abs(h-n),M=Math.max(x,Math.abs(h));return o(1.2*Math.sqrt(M*(M+2*m)),s.clamp(2e4-(Math.log(M)-7.983)/9.011*19e3,1e3,2e4),1,u)},t}(),m=2e4,x=2,M=.001,l=1e-4,v=n.vec3f64.create(),f=n.vec3f64.create()});