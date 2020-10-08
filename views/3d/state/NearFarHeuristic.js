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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/mathUtils","../../../core/unitUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/geodesicConstants"],(function(t,e,r,a,n,i,s,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=void 0,e.createNearFarHeuristic=function(t,e,r){return 1===t?new c:new u(e,r)};var u=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=n.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,n,s,u){u||(u={near:0,far:0});var c=t[2]*this.unitInMeters,x=c,y=c-s,d=this.elevationProvider?this.elevationProvider.elevationBounds:null;d&&(c=y>=0?x-this.unitInMeters*d.min:this.unitInMeters*d.max-x);var p={x:n.xmax-n.xmin,y:n.ymax-n.ymin,z:4*Math.max(n.xmax-n.xmin,n.ymax-n.ymin)},I=Math.max(p.x,p.y,p.z);i.vec3.subtract(f,e,t),l[0]=f[0]>0?n.xmax:n.xmin,l[1]=f[1]>0?n.ymax:n.ymin,l[2]=f[2]>0?I/2:-I/2,i.vec3.subtract(l,l,t),i.vec3.normalize(f,f);var b=1.1*i.vec3.dot(l,f)*this.unitInMeters,g=Math.sqrt(c*(c+2*o.earthRadius)),P=Math.max(n.xmax-n.xmin,n.ymax-n.ymin),R=P*v*this.unitInMeters,U=P*M*this.unitInMeters,q=r.clamp((c-U)/(R-U),0,1);q*=q*q;var z=a.lerp(g,b,q);return z*=Math.max(Math.log(Math.abs(y)),1),z=Math.min(z,Math.max(34064e4,I)),m(z/=this.unitInMeters,h,this.unitInMeters,u)},t}(),c=function(){function t(){}return t.prototype.compute=function(t,e,a,n,s){s||(s={near:0,far:0});var u=i.vec3.length(t)-o.earthRadius,c=o.earthRadius+Math.min(0,n),h=Math.abs(u-n),x=Math.max(h,Math.abs(u));return m(1.2*Math.sqrt(x*(x+2*c)),r.clamp(2e4-(Math.log(x)-7.983)/9.011*19e3,1e3,2e4),1,s)},t}();function m(t,e,r,a){var n=x/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}var h=2e4,x=2,v=.001,M=1e-4,l=s.vec3f64.create(),f=s.vec3f64.create()}));