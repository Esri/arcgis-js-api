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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/unitUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/earthUtils","../support/mathUtils"],function(t,e,r,a,n,i,s,u){function o(t,e,r){return"global"===t?new m:new h(e,r)}function c(t,e,r,a){var n=M/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=o;var h=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=a.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,a,i,o){o||(o={near:0,far:0});var h=s.earthRadius,m=t[2]*this.unitInMeters,M=m,y=m-i,d=this.elevationProvider?this.elevationProvider.getElevationBounds():null;d&&(m=y>=0?M-this.unitInMeters*d[0]:this.unitInMeters*d[1]-M);var b={x:a.xmax-a.xmin,y:a.ymax-a.ymin,z:4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin)},I=Math.max(b.x,b.y,b.z);n.vec3.subtract(p,e,t),f[0]=p[0]>0?a.xmax:a.xmin,f[1]=p[1]>0?a.ymax:a.ymin,f[2]=p[2]>0?I/2:-I/2,n.vec3.subtract(f,f,t),n.vec3.normalize(p,p);var g=1.1*n.vec3.dot(f,p),P=g*this.unitInMeters,U=Math.sqrt(m*(m+2*h)),q=Math.max(a.xmax-a.xmin,a.ymax-a.ymin),z=q*l*this.unitInMeters,R=q*v*this.unitInMeters,w=r.clamp((m-R)/(z-R),0,1);w*=w*w;var F=u.lerp(U,P,w);return F*=Math.max(Math.log(Math.abs(y)),1),F=Math.min(F,Math.max(34064e4,I)),F/=this.unitInMeters,c(F,x,this.unitInMeters,o)},t}(),m=function(){function t(){}return t.prototype.compute=function(t,e,a,i,u){u||(u={near:0,far:0});var o=s.earthRadius,h=n.vec3.length(t)-o,m=o+Math.min(0,i),x=Math.abs(h-i),M=Math.max(x,Math.abs(h));return c(1.2*Math.sqrt(M*(M+2*m)),r.clamp(2e4-(Math.log(M)-7.983)/9.011*19e3,1e3,2e4),1,u)},t}(),x=2e4,M=2,l=.001,v=1e-4,f=i.vec3f64.create(),p=i.vec3f64.create()});