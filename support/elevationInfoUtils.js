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

define(["require","exports","../core/maybe"],function(e,o,n){function r(e,o){var r=!!n.isSome(e)&&e.hasZ;return n.isNone(o)?r?"absolute-height":"on-the-ground":"relative-to-ground"!==o.mode||!n.isNone(o.offset)&&0!==o.offset||!n.isSome(e)||"point"!==e.type||r&&0!==e.z?o.mode:"on-the-ground"}function t(e){var o=u(e);return r(e.geometry,o)}function i(e){var o=u(e),t=r(e.geometry,o);return{mode:t,offset:n.isSome(o)&&"on-the-ground"!==t?o.offset:0,featureExpressionInfo:n.isSome(o)&&"on-the-ground"!==t?o.featureExpressionInfo:null}}function f(e){if("on-the-ground"===t(e))return!1;var o=u(e),r=n.isSome(o)&&o.featureExpressionInfo?o.featureExpressionInfo.expression:null;return!(!r||"0"===r)}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}Object.defineProperty(o,"__esModule",{value:!0}),o.getGeometryEffectiveElevationMode=r,o.getGraphicEffectiveElevationMode=t,o.getGraphicEffectiveElevationInfo=i,o.hasGraphicFeatureExpressionInfo=f});