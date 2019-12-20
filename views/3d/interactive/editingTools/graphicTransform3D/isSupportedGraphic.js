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

define(["require","exports","../../../../../core/compilerUtils","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../../../../../support/featureFlags"],function(e,t,r,o,n,i){function s(e){if("graphics"!==e.layer.type)return 1;if(o.isNone(e.geometry))return 2;var t=e.geometry.type;switch(t){case"point":break;case"polygon":case"polyline":case"multipoint":case"extent":case"mesh":return 3;default:return r.neverReached(t),3}var s=o.isSome(e.symbol)&&"point-3d"===e.symbol.type&&e.symbol.symbolLayers;if(!(s&&s.length>0&&s.some(function(e){return"object"===e.type})))return 5;var a=n.getGraphicEffectiveElevationMode(e);return"on-the-ground"===a||i.enableEditing3D()&&"absolute-height"===a&&!n.hasGraphicFeatureExpressionInfo(e)?0:4}Object.defineProperty(t,"__esModule",{value:!0}),t.isSupportedGraphic=s});