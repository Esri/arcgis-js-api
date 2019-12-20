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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function y(e,r){if(!o(e,r)){var y=e.typeKeywords;y?y.push(r):e.typeKeywords=[r]}}function o(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}function d(e,r){var y=e.typeKeywords;if(y){var o=y.indexOf(r);o>-1&&y.splice(o,1)}}Object.defineProperty(r,"__esModule",{value:!0}),r.addTypeKeyword=y,r.hasTypeKeyword=o,r.removeTypeKeyword=d});