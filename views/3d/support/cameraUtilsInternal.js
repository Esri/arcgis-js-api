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

define(["require","exports","../lib/gl-matrix","./mathUtils"],function(e,t,c,d){function a(){return{direction:c.vec3d.create(),up:c.vec3d.create()}}function r(e,t,a,r,n){var o=v;c.vec3d.normalize(e,o);var l=c.vec3d.dot(o,r),s=l>0;(l=Math.abs(l))>.99&&(l=Math.abs(c.vec3d.dot(t,r)),l<.99?(c.vec3d.set(t,o),s&&c.vec3d.scale(o,-1)):o=null);var u=0;if(o){c.vec3d.scale(r,c.vec3d.dot(r,o),i),c.vec3d.subtract(o,i);var g=c.vec3d.dot(o,n),h=g/(c.vec3d.length(o)*c.vec3d.length(n));c.vec3d.cross(o,n,i);u=(c.vec3d.dot(i,r)>0?1:-1)*d.rad2deg(d.acos(h))}var f=d.rad2deg(d.acos(-c.vec3d.dot(r,e)/c.vec3d.length(e)));return a?(a.heading=u,a.tilt=f,a):{heading:u,tilt:f}}Object.defineProperty(t,"__esModule",{value:!0});var v=c.vec3d.create(),i=c.vec3d.create();t.createDirectionUp=a,t.directionToHeadingTilt=r});