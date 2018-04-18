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

define(["require","exports","../lib/glMatrix","./mathUtils"],function(e,d,t,c){function a(e,d,a,i,o){var l=v;t.vec3d.normalize(e,l);var n=t.vec3d.dot(l,i),s=n>0;(n=Math.abs(n))>.99&&(n=Math.abs(t.vec3d.dot(d,i)),n<.99?(t.vec3d.set(d,l),s&&t.vec3d.scale(l,-1)):l=null);var g=0;if(l){t.vec3d.scale(i,t.vec3d.dot(i,l),r),t.vec3d.subtract(l,r);var h=t.vec3d.dot(l,o),u=h/(t.vec3d.length(l)*t.vec3d.length(o));t.vec3d.cross(l,o,r);g=(t.vec3d.dot(r,i)>0?1:-1)*c.rad2deg(c.acos(u))}var b=c.rad2deg(c.acos(-t.vec3d.dot(i,e)/t.vec3d.length(e)));return a?(a.heading=g,a.tilt=b,a):{heading:g,tilt:b}}Object.defineProperty(d,"__esModule",{value:!0});var v=t.vec3d.create(),r=t.vec3d.create();d.directionToHeadingTilt=a});