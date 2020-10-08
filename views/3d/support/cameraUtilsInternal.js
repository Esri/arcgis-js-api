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

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64"],(function(e,c,t,r,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.directionToHeadingTilt=c.createDirectionUp=void 0;var i=a.vec3f64.create(),v=a.vec3f64.create();c.createDirectionUp=function(){return{direction:a.vec3f64.create(),up:a.vec3f64.create()}},c.directionToHeadingTilt=function(e,c,a,o,n){var d=i;r.vec3.normalize(d,e);var l=r.vec3.dot(d,o),s=l>0;(l=Math.abs(l))>.99&&((l=Math.abs(r.vec3.dot(c,o)))<.99?(r.vec3.copy(d,c),s&&r.vec3.scale(d,d,-1)):d=null);var u=0;if(d){r.vec3.scale(v,o,r.vec3.dot(o,d)),r.vec3.subtract(d,d,v);var f=r.vec3.dot(d,n)/(r.vec3.length(d)*r.vec3.length(n));r.vec3.cross(v,d,n),u=(r.vec3.dot(v,o)>0?1:-1)*t.rad2deg(t.acosClamped(f))}var g=t.rad2deg(t.acosClamped(-r.vec3.dot(o,e)/r.vec3.length(e)));return a?(a.heading=u,a.tilt=g,a):{heading:u,tilt:g}}}));