// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64"],function(e,c,t,r,a){function v(){return{direction:a.vec3f64.create(),up:a.vec3f64.create()}}function i(e,c,a,v,i){var d=o;r.vec3.normalize(d,e);var l=r.vec3.dot(d,v),s=l>0;(l=Math.abs(l))>.99&&(l=Math.abs(r.vec3.dot(c,v)),l<.99?(r.vec3.copy(d,c),s&&r.vec3.scale(d,d,-1)):d=null);var f=0;if(d){r.vec3.scale(n,v,r.vec3.dot(v,d)),r.vec3.subtract(d,d,n);var u=r.vec3.dot(d,i),g=u/(r.vec3.length(d)*r.vec3.length(i));r.vec3.cross(n,d,i);f=(r.vec3.dot(n,v)>0?1:-1)*t.rad2deg(t.acosClamped(g))}var h=t.rad2deg(t.acosClamped(-r.vec3.dot(v,e)/r.vec3.length(e)));return a?(a.heading=f,a.tilt=h,a):{heading:f,tilt:h}}Object.defineProperty(c,"__esModule",{value:!0});var o=a.vec3f64.create(),n=a.vec3f64.create();c.createDirectionUp=v,c.directionToHeadingTilt=i});