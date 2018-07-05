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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/scaleUtils","../lib/glMatrix","../support/earthUtils","../support/mathUtils"],function(t,e,a,i,n,r){function s(t,e,a){return"global"===t?new o:new m(e,a)}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=s;var m=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=a.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,a,s,m){m||(m={maxFarNearRatio:0,distance:0,minNearDistance:0});var o=n.earthRadius;m.maxFarNearRatio=c,m.minNearDistance=u/this.unitInMeters;var l=t[2]*this.unitInMeters,v=l,p=l-s,y=this.elevationProvider?this.elevationProvider.getElevationBounds():null;y&&(l=p>=0?v-this.unitInMeters*y[0]:this.unitInMeters*y[1]-v);var f={x:a.xmax-a.xmin,y:a.ymax-a.ymin,z:4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin)},N=Math.max(f.x,f.y,f.z);i.vec3d.subtract(e,t,d),M[0]=d[0]>0?a.xmax:a.xmin,M[1]=d[1]>0?a.ymax:a.ymin,M[2]=d[2]>0?N/2:-N/2,i.vec3d.subtract(M,t),i.vec3d.normalize(d);var I=1.1*i.vec3d.dot(M,d),b=I*this.unitInMeters,g=Math.sqrt(l*(l+2*o)),R=Math.max(a.xmax-a.xmin,a.ymax-a.ymin),F=R*h*this.unitInMeters,P=R*x*this.unitInMeters,D=r.clamp((l-P)/(F-P),0,1);return D*=D*D,m.distance=r.lerp(g,b,D),m.distance*=Math.max(Math.log(Math.abs(p)),1),m.distance=Math.min(m.distance,Math.max(34064e4,N)),m.distance/=this.unitInMeters,m},t}(),o=function(){function t(){}return t.prototype.compute=function(t,e,a,s,m){m||(m={maxFarNearRatio:0,minNearDistance:0,distance:0});var o=n.earthRadius,h=i.vec3d.length(t)-o;m.maxFarNearRatio=c,m.minNearDistance=u/1;var x=o+Math.min(0,s),M=Math.abs(h-s),d=Math.max(M,Math.abs(h)),l=Math.sqrt(d*(d+2*x));return m.maxFarNearRatio=r.clamp(2e4-(Math.log(d)-7.983)/9.011*19e3,1e3,2e4),m.distance=1.2*l/1,m},t}(),c=2e4,u=2,h=.001,x=1e-4,M=i.vec3d.create(),d=i.vec3d.create()});