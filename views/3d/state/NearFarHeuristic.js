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

define(["require","exports","../../../core/mathUtils","../../../core/mathUtils","../../../core/unitUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/earthUtils"],function(t,e,r,a,n,i,s,o){function u(t,e,r){return"global"===t?new h:new c(e,r)}function m(t,e,r,a){var n=M/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=u;var c=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=n.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,n,s,u){u||(u={near:0,far:0});var c=o.earthRadius,h=t[2]*this.unitInMeters,M=h,y=h-s,d=this.elevationProvider?this.elevationProvider.elevationBounds:null;d&&(h=y>=0?M-this.unitInMeters*d.min:this.unitInMeters*d.max-M);var b={x:n.xmax-n.xmin,y:n.ymax-n.ymin,z:4*Math.max(n.xmax-n.xmin,n.ymax-n.ymin)},I=Math.max(b.x,b.y,b.z);i.vec3.subtract(p,e,t),f[0]=p[0]>0?n.xmax:n.xmin,f[1]=p[1]>0?n.ymax:n.ymin,f[2]=p[2]>0?I/2:-I/2,i.vec3.subtract(f,f,t),i.vec3.normalize(p,p);var g=1.1*i.vec3.dot(f,p),P=g*this.unitInMeters,U=Math.sqrt(h*(h+2*c)),q=Math.max(n.xmax-n.xmin,n.ymax-n.ymin),z=q*l*this.unitInMeters,R=q*v*this.unitInMeters,w=r.clamp((h-R)/(z-R),0,1);w*=w*w;var F=a.lerp(U,P,w);return F*=Math.max(Math.log(Math.abs(y)),1),F=Math.min(F,Math.max(34064e4,I)),F/=this.unitInMeters,m(F,x,this.unitInMeters,u)},t}(),h=function(){function t(){}return t.prototype.compute=function(t,e,a,n,s){s||(s={near:0,far:0});var u=o.earthRadius,c=i.vec3.length(t)-u,h=u+Math.min(0,n),x=Math.abs(c-n),M=Math.max(x,Math.abs(c));return m(1.2*Math.sqrt(M*(M+2*h)),r.clamp(2e4-(Math.log(M)-7.983)/9.011*19e3,1e3,2e4),1,s)},t}(),x=2e4,M=2,l=.001,v=1e-4,f=s.vec3f64.create(),p=s.vec3f64.create()});