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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","./mathUtils"],function(e,c,t,r){function a(){return{direction:t.vec3f64.create(),up:t.vec3f64.create()}}function v(e,c,a,v,n){var d=i;t.vec3.normalize(d,e);var l=t.vec3.dot(d,v),s=l>0;(l=Math.abs(l))>.99&&(l=Math.abs(t.vec3.dot(c,v)),l<.99?(t.vec3.copy(d,c),s&&t.vec3.scale(d,d,-1)):d=null);var u=0;if(d){t.vec3.scale(o,v,t.vec3.dot(v,d)),t.vec3.subtract(d,d,o);var f=t.vec3.dot(d,n),g=f/(t.vec3.length(d)*t.vec3.length(n));t.vec3.cross(o,d,n);u=(t.vec3.dot(o,v)>0?1:-1)*r.rad2deg(r.acos(g))}var h=r.rad2deg(r.acos(-t.vec3.dot(v,e)/t.vec3.length(e)));return a?(a.heading=u,a.tilt=h,a):{heading:u,tilt:h}}Object.defineProperty(c,"__esModule",{value:!0});var i=t.vec3f64.create(),o=t.vec3f64.create();c.createDirectionUp=a,c.directionToHeadingTilt=v});