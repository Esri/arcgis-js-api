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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,c,t,r,n){Object.defineProperty(c,"__esModule",{value:!0}),c.projectPoint=function(e,c,t){var n=r.vec3.dot(e,c)/r.vec3.dot(e,e);return r.vec3.scale(t,e,n)},c.projectPointSignedLength=function(e,c){return r.vec3.dot(e,c)/r.vec3.length(e)},c.angle=function(e,c){var n=r.vec3.dot(e,c)/(r.vec3.length(e)*r.vec3.length(c));return-t.acosClamped(n)},c.angleAroundAxis=function(e,c,n){r.vec3.normalize(o,e),r.vec3.normalize(v,c);var a=r.vec3.dot(o,v),i=t.acosClamped(a),l=r.vec3.cross(o,o,v);return r.vec3.dot(l,n)<0?2*Math.PI-i:i};var o=n.vec3f64.create(),v=n.vec3f64.create()}));