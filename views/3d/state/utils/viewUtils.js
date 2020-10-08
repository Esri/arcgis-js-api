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

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,t,r,c,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.viewAngle=void 0,t.viewAngle=function(e,t,i){e.worldUpAtPosition(t,o),c.vec3.subtract(v,i,t);var l=c.vec3.length(v);return 0===l?0:r.acosClamped(c.vec3.dot(v,o)/l)};var o=i.vec3f64.create(),v=i.vec3f64.create()}));