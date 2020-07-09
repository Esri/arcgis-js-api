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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/mathUtils","../../../core/unitUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/earthUtils"],(function(t,e,r,a,n,i,s,u){Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=function(t,e,r){return"global"===t?new m:new o(e,r)};var o=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=n.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,n,s,o){o||(o={near:0,far:0});var m=t[2]*this.unitInMeters,x=m,p=m-s,y=this.elevationProvider?this.elevationProvider.elevationBounds:null;y&&(m=p>=0?x-this.unitInMeters*y.min:this.unitInMeters*y.max-x);var d={x:n.xmax-n.xmin,y:n.ymax-n.ymin,z:4*Math.max(n.xmax-n.xmin,n.ymax-n.ymin)},b=Math.max(d.x,d.y,d.z);i.vec3.subtract(f,e,t),v[0]=f[0]>0?n.xmax:n.xmin,v[1]=f[1]>0?n.ymax:n.ymin,v[2]=f[2]>0?b/2:-b/2,i.vec3.subtract(v,v,t),i.vec3.normalize(f,f);var I=1.1*i.vec3.dot(v,f)*this.unitInMeters,g=Math.sqrt(m*(m+2*u.earthRadius)),P=Math.max(n.xmax-n.xmin,n.ymax-n.ymin),U=P*M*this.unitInMeters,R=P*l*this.unitInMeters,q=r.clamp((m-R)/(U-R),0,1);q*=q*q;var z=a.lerp(g,I,q);return z*=Math.max(Math.log(Math.abs(p)),1),z=Math.min(z,Math.max(34064e4,b)),c(z/=this.unitInMeters,h,this.unitInMeters,o)},t}(),m=function(){function t(){}return t.prototype.compute=function(t,e,a,n,s){s||(s={near:0,far:0});var o=i.vec3.length(t)-u.earthRadius,m=u.earthRadius+Math.min(0,n),h=Math.abs(o-n),x=Math.max(h,Math.abs(o));return c(1.2*Math.sqrt(x*(x+2*m)),r.clamp(2e4-(Math.log(x)-7.983)/9.011*19e3,1e3,2e4),1,s)},t}();function c(t,e,r,a){var n=x/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}var h=2e4,x=2,M=.001,l=1e-4,v=s.vec3f64.create(),f=s.vec3f64.create()}));