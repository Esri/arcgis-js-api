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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/scaleUtils","../lib/gl-matrix","../support/earthUtils","../support/mathUtils"],function(t,e,r,a,n,i){function s(t,e,r){return"global"===t?new h:new o(e,r)}function u(t,e,r,a){var n=c/r;return t/e>n?(a.far=t,a.near=a.far/e):(a.near=n,a.far=a.near*e),a}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=s;var o=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=r.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,r,s,o){o||(o={near:0,far:0});var h=n.earthRadius,c=t[2]*this.unitInMeters,d=c,p=c-s,f=this.elevationProvider?this.elevationProvider.getElevationBounds():null;f&&(c=p>=0?d-this.unitInMeters*f[0]:this.unitInMeters*f[1]-d);var y={x:r.xmax-r.xmin,y:r.ymax-r.ymin,z:4*Math.max(r.xmax-r.xmin,r.ymax-r.ymin)},I=Math.max(y.x,y.y,y.z);a.vec3d.subtract(e,t,v),l[0]=v[0]>0?r.xmax:r.xmin,l[1]=v[1]>0?r.ymax:r.ymin,l[2]=v[2]>0?I/2:-I/2,a.vec3d.subtract(l,t),a.vec3d.normalize(v);var b=1.1*a.vec3d.dot(l,v),g=b*this.unitInMeters,P=Math.sqrt(c*(c+2*h)),U=Math.max(r.xmax-r.xmin,r.ymax-r.ymin),q=U*x*this.unitInMeters,z=U*M*this.unitInMeters,R=i.clamp((c-z)/(q-z),0,1);R*=R*R;var w=i.lerp(P,g,R);return w*=Math.max(Math.log(Math.abs(p)),1),w=Math.min(w,Math.max(34064e4,I)),w/=this.unitInMeters,u(w,m,this.unitInMeters,o)},t}(),h=function(){function t(){}return t.prototype.compute=function(t,e,r,s,o){o||(o={near:0,far:0});var h=n.earthRadius,m=a.vec3d.length(t)-h,c=h+Math.min(0,s),x=Math.abs(m-s),M=Math.max(x,Math.abs(m));return u(1.2*Math.sqrt(M*(M+2*c)),i.clamp(2e4-(Math.log(M)-7.983)/9.011*19e3,1e3,2e4),1,o)},t}(),m=2e4,c=2,x=.001,M=1e-4,l=a.vec3d.create(),v=a.vec3d.create()});