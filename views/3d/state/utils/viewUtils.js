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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../support/mathUtils"],function(e,t,r,c){function i(e,t,i){e.worldUpAtPosition(t,o),r.vec3.subtract(a,i,t);var n=r.vec3.length(a);return 0===n?0:c.acos(r.vec3.dot(a,o)/n)}Object.defineProperty(t,"__esModule",{value:!0}),t.viewAngle=i;var o=r.vec3f64.create(),a=r.vec3f64.create()});