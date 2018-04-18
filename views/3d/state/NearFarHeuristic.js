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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/scaleUtils","../lib/glMatrix","../support/earthUtils","../support/mathUtils"],function(t,e,a,i,r,n){function s(t,e,a){return"global"===t?new c:new o(e,a)}Object.defineProperty(e,"__esModule",{value:!0}),e.createNearFarHeuristic=s;var o=function(){function t(t,e){this.elevationProvider=t,this.unitInMeters=a.getMetersPerUnitForSR(e)}return t.prototype.compute=function(t,e,a,s,o){o||(o={maxFarNearRatio:0,distance:0,minNearDistance:0});var c=r.earthRadius;o.maxFarNearRatio=m,o.minNearDistance=u/this.unitInMeters;var d=t[2]*this.unitInMeters,h=d,p=d-s,y=this.elevationProvider?this.elevationProvider.getElevationBounds():null;y&&(d=p>=0?h-this.unitInMeters*y[0]:this.unitInMeters*y[1]-h);var N={x:a.xmax-a.xmin,y:a.ymax-a.ymin,z:4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin)},f=Math.max(N.x,N.y,N.z);i.vec3d.subtract(e,t,v),l[0]=v[0]>0?a.xmax:a.xmin,l[1]=v[1]>0?a.ymax:a.ymin,l[2]=v[2]>0?f/2:-f/2,i.vec3d.subtract(l,t),i.vec3d.normalize(v);var R=1.1*i.vec3d.dot(l,v),I=R*this.unitInMeters,F=d+c,g=Math.sqrt(F*F-c*c),b=Math.max(a.xmax-a.xmin,a.ymax-a.ymin),q=b*x*this.unitInMeters,D=b*M*this.unitInMeters,P=n.clamp((d-D)/(q-D),0,1);return P*=P*P,o.distance=n.lerp(g,I,P),o.distance*=Math.max(Math.log(Math.abs(p)),1),o.distance=Math.min(o.distance,Math.max(34064e4,f)),o.distance/=this.unitInMeters,o},t}(),c=function(){function t(){}return t.prototype.compute=function(t,e,a,s,o){o||(o={maxFarNearRatio:0,minNearDistance:0,distance:0});var c=r.earthRadius,d=i.vec3d.dot(t,t),h=c*c;if(o.maxFarNearRatio=m,o.minNearDistance=u/1,this.isNemoMode(d,s)){var x=c+s,M=x*x;o.distance=Math.sqrt(d-M)/1}else d>h?(o.maxFarNearRatio=n.clamp(2e4-(Math.log(Math.sqrt(d)-c)-7.983)/9.011*19e3,1e3,2e4),o.distance=Math.sqrt(d-h)/1):o.distance=o.maxFarNearRatio*o.minNearDistance;return o.distance*=1.2,o},t.prototype.isNemoMode=function(t,e){var a=r.earthRadius+d;return t<a*a&&e<h},t}(),m=2e4,u=2,d=2e4,h=-500,x=.001,M=1e-4,l=i.vec3d.create(),v=i.vec3d.create()});