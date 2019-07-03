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

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../mathUtils"],function(e,t,n,c){function r(e,t,c){var r=o(e,t);return n.vec3.scale(c,e,r)}function o(e,t){return n.vec3.dot(e,t)/n.vec3.length(e)}function i(e,t){var r=n.vec3.dot(e,t)/(n.vec3.length(e)*n.vec3.length(t));return-c.acos(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.projectPoint=r,t.projectPointSignedLength=o,t.angle=i});