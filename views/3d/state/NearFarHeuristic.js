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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/support/scaleUtils","../support/earthUtils","../support/mathUtils"],function(t,e,r,a,n,i){function s(t,e,r){return"global"===t?new m:new o(e,r)}function u(t,e,r,a){var n=c/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=s;var o=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=a.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,a,s,o){o||(o={near:0,far:0});var m=n.earthRadius,c=t[2]*this.unitInMeters,f=c,p=c-s,y=this.elevationProvider?this.elevationProvider.getElevationBounds():null;y&&(c=p>=0?f-this.unitInMeters*y[0]:this.unitInMeters*y[1]-f);var d={x:a.xmax-a.xmin,y:a.ymax-a.ymin,z:4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin)},g=Math.max(d.x,d.y,d.z);r.vec3.subtract(v,e,t),l[0]=v[0]>0?a.xmax:a.xmin,l[1]=v[1]>0?a.ymax:a.ymin,l[2]=v[2]>0?g/2:-g/2,r.vec3.subtract(l,l,t),r.vec3.normalize(v,v);var I=1.1*r.vec3.dot(l,v),b=I*this.unitInMeters,P=Math.sqrt(c*(c+2*m)),U=Math.max(a.xmax-a.xmin,a.ymax-a.ymin),q=U*x*this.unitInMeters,z=U*M*this.unitInMeters,R=i.clamp((c-z)/(q-z),0,1);R*=R*R;var w=i.lerp(P,b,R);return w*=Math.max(Math.log(Math.abs(p)),1),w=Math.min(w,Math.max(34064e4,g)),w/=this.unitInMeters,u(w,h,this.unitInMeters,o)},t}(),m=function(){function t(){}return t.prototype.compute=function(t,e,a,s,o){o||(o={near:0,far:0});var m=n.earthRadius,h=r.vec3.length(t)-m,c=m+Math.min(0,s),x=Math.abs(h-s),M=Math.max(x,Math.abs(h));return u(1.2*Math.sqrt(M*(M+2*c)),i.clamp(2e4-(Math.log(M)-7.983)/9.011*19e3,1e3,2e4),1,o)},t}(),h=2e4,c=2,x=.001,M=1e-4,l=r.vec3f64.create(),v=r.vec3f64.create()});