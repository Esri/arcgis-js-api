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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EuclideanSegment=void 0;var c=function(){function e(e,t){void 0===e&&(e=r.vec3f64.create()),void 0===t&&(t=r.vec3f64.create()),this.startRenderSpace=e,this.endRenderSpace=t,this.type="euclidean"}return e.prototype.eval=function(e,t){i.vec3.lerp(t,this.startRenderSpace,this.endRenderSpace,e)},e}();t.EuclideanSegment=c}));