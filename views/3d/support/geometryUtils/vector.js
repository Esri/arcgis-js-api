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

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,t,c,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.angleAroundAxis=t.angle=t.projectPointSignedLength=t.projectPoint=void 0,t.projectPoint=function(e,t,c){var r=n.vec3.dot(e,t)/n.vec3.dot(e,e);return n.vec3.scale(c,e,r)},t.projectPointSignedLength=function(e,t){return n.vec3.dot(e,t)/n.vec3.length(e)},t.angle=function(e,t){var r=n.vec3.dot(e,t)/(n.vec3.length(e)*n.vec3.length(t));return-c.acosClamped(r)},t.angleAroundAxis=function(e,t,r){n.vec3.normalize(o,e),n.vec3.normalize(i,t);var v=n.vec3.dot(o,i),a=c.acosClamped(v),l=n.vec3.cross(o,o,i);return n.vec3.dot(l,r)<0?2*Math.PI-a:a};var o=r.vec3f64.create(),i=r.vec3f64.create()}));