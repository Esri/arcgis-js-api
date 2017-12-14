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

define(["require","exports","../lib/glMatrix","../../../geometry/support/scaleUtils","../support/mathUtils","../support/earthUtils"],function(t,e,a,i,r,n){function s(t,e,a){return"global"===t?new c:new o(e,a)}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=s;var o=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=i.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,i,s,o){o||(o={maxFarNearRatio:0,distance:0,minNearDistance:0});var c=n.earthRadius;o.maxFarNearRatio=m,o.minNearDistance=u/this.unitInMeters;var d=t[2]*this.unitInMeters,h=d,p=d-s,y=this.elevationProvider?this.elevationProvider.getElevationBounds():null;y&&(d=p>=0?h-this.unitInMeters*y[0]:this.unitInMeters*y[1]-h);var N={x:i.xmax-i.xmin,y:i.ymax-i.ymin,z:4*Math.max(i.xmax-i.xmin,i.ymax-i.ymin)},f=Math.max(N.x,N.y,N.z);a.vec3d.subtract(e,t,v),l[0]=v[0]>0?i.xmax:i.xmin,l[1]=v[1]>0?i.ymax:i.ymin,l[2]=v[2]>0?f/2:-f/2,a.vec3d.subtract(l,t),a.vec3d.normalize(v);var R=1.1*a.vec3d.dot(l,v),I=R*this.unitInMeters,F=d+c,g=Math.sqrt(F*F-c*c),b=Math.max(i.xmax-i.xmin,i.ymax-i.ymin),q=b*x*this.unitInMeters,D=b*M*this.unitInMeters,P=r.clamp((d-D)/(q-D),0,1);return P*=P*P,o.distance=r.lerp(g,I,P),o.distance*=Math.max(Math.log(Math.abs(p)),1),o.distance=Math.min(o.distance,Math.max(34064e4,f)),o.distance/=this.unitInMeters,o},t}(),c=function(){function t(){}return t.prototype.compute=function(t,e,i,s,o){o||(o={maxFarNearRatio:0,minNearDistance:0,distance:0});var c=1,d=n.earthRadius,h=a.vec3d.dot(t,t),x=d*d;if(o.maxFarNearRatio=m,o.minNearDistance=u/c,this.isNemoMode(h,s)){var M=d+s,l=M*M;o.distance=Math.sqrt(h-l)/c}else h>x?(o.maxFarNearRatio=r.clamp(2e4-(Math.log(Math.sqrt(h)-d)-7.983)/9.011*19e3,1e3,2e4),o.distance=Math.sqrt(h-x)/c):o.distance=o.maxFarNearRatio*o.minNearDistance;return o.distance*=1.2,o},t.prototype.isNemoMode=function(t,e){var a=n.earthRadius+d,i=a*a;return i>t&&h>e},t}(),m=2e4,u=2,d=2e4,h=-500,x=.001,M=1e-4,l=a.vec3d.create(),v=a.vec3d.create()});