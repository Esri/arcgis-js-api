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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/Warning","../../support/pointCloud/PointSizeFixedSizeAlgorithm","../../support/pointCloud/PointSizeSplatAlgorithm"],function(e,t,n,o,i){function r(e){return e?p[e.type]||null:null}function u(e,t,o){var i=r(e);if(i){var u=new i;return u.read(e,o),u}return o&&o.messages&&e&&o.messages.push(new n("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null}function l(e){var t=r(e);return t?t.fromJSON(e):null}Object.defineProperty(t,"__esModule",{value:!0});var p={pointCloudFixedSizeAlgorithm:o.default,pointCloudSplatAlgorithm:i.default};t.read=u,t.fromJSON=l});