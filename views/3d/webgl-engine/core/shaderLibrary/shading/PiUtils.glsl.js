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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(t,n,e,o){"use strict";var l,s;Object.defineProperty(n,"__esModule",{value:!0}),n.PiUtils=void 0,n.PiUtils=function(t){t.vertex.code.add(o.glsl(l||(l=e.__makeTemplateObject(["\n    const float PI = 3.141592653589793;\n  "],["\n    const float PI = 3.141592653589793;\n  "])))),t.fragment.code.add(o.glsl(s||(s=e.__makeTemplateObject(["\n    const float PI = 3.141592653589793;\n    const float LIGHT_NORMALIZATION = 1.0 / PI;\n    const float INV_PI = 0.3183098861837907;\n    const float HALF_PI = 1.570796326794897;\n    "],["\n    const float PI = 3.141592653589793;\n    const float LIGHT_NORMALIZATION = 1.0 / PI;\n    const float INV_PI = 0.3183098861837907;\n    const float HALF_PI = 1.570796326794897;\n    "]))))}}));