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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./mathUtils"],function(e,c,t,r,a){function v(){return{direction:r.vec3f64.create(),up:r.vec3f64.create()}}function i(e,c,r,v,i){var d=o;t.vec3.normalize(d,e);var l=t.vec3.dot(d,v),s=l>0;(l=Math.abs(l))>.99&&(l=Math.abs(t.vec3.dot(c,v)),l<.99?(t.vec3.copy(d,c),s&&t.vec3.scale(d,d,-1)):d=null);var f=0;if(d){t.vec3.scale(n,v,t.vec3.dot(v,d)),t.vec3.subtract(d,d,n);var u=t.vec3.dot(d,i),g=u/(t.vec3.length(d)*t.vec3.length(i));t.vec3.cross(n,d,i);f=(t.vec3.dot(n,v)>0?1:-1)*a.rad2deg(a.acos(g))}var h=a.rad2deg(a.acos(-t.vec3.dot(v,e)/t.vec3.length(e)));return r?(r.heading=f,r.tilt=h,r):{heading:f,tilt:h}}Object.defineProperty(c,"__esModule",{value:!0});var o=r.vec3f64.create(),n=r.vec3f64.create();c.createDirectionUp=v,c.directionToHeadingTilt=i});