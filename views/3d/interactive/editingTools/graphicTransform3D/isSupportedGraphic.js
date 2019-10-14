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

define(["require","exports","../../../../../core/maybe"],function(e,o,t){function r(e){var o=t.isSome(e.symbol)&&"point-3d"===e.symbol.type&&e.symbol.symbolLayers;return!!o&&o.length>0&&o.some(function(e){return"object"===e.type})&&t.isSome(e.geometry)&&"point"===e.geometry.type&&"graphics"===e.layer.type}Object.defineProperty(o,"__esModule",{value:!0}),o.isSupportedGraphic=r});