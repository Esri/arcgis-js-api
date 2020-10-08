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

define(["require","exports"],(function(A,P){"use strict";Object.defineProperty(P,"__esModule",{value:!0}),P.default="data:image/png;base64,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"}));