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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/Warning","./PointSizeFixedSizeAlgorithm","./PointSizeSplatAlgorithm"],(function(e,t,n,i,r){Object.defineProperty(t,"__esModule",{value:!0});var o={pointCloudFixedSizeAlgorithm:i.default,pointCloudSplatAlgorithm:r.default};function u(e){return e&&o[e.type]||null}t.read=function(e,t,i){var r=u(e);if(r){var o=new r;return o.read(e,i),o}return i&&i.messages&&e&&i.messages.push(new n("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:i})),null},t.fromJSON=function(e){var t=u(e);return t?t.fromJSON(e):null}}));