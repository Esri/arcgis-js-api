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

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],function(e,r,t,c,i){function o(e,r,i){e.worldUpAtPosition(r,a),c.vec3.subtract(l,i,r);var o=c.vec3.length(l);return 0===o?0:t.acosClamped(c.vec3.dot(l,a)/o)}Object.defineProperty(r,"__esModule",{value:!0}),r.viewAngle=o;var a=i.vec3f64.create(),l=i.vec3f64.create()});