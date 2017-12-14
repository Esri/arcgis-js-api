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

define(["require","exports","./mathUtils","../lib/glMatrix"],function(e,d,t,c){function a(e,d,a,i,o){var l=v;c.vec3d.normalize(e,l);var n=c.vec3d.dot(l,i),s=n>0;n=Math.abs(n),n>.99&&(n=Math.abs(c.vec3d.dot(d,i)),.99>n?(c.vec3d.set(d,l),s&&c.vec3d.scale(l,-1)):l=null);var g=0;if(l){c.vec3d.scale(i,c.vec3d.dot(i,l),r),c.vec3d.subtract(l,r);var h=c.vec3d.dot(l,o),u=h/(c.vec3d.length(l)*c.vec3d.length(o));c.vec3d.cross(l,o,r);var b=c.vec3d.dot(r,i)>0?1:-1;g=b*t.rad2deg(t.acos(u))}var f=t.rad2deg(t.acos(-c.vec3d.dot(i,e)/c.vec3d.length(e)));return a?(a.heading=g,a.tilt=f,a):{heading:g,tilt:f}}Object.defineProperty(d,"__esModule",{value:!0});var v=c.vec3d.create(),r=c.vec3d.create();d.directionToHeadingTilt=a});