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

define(["require","exports","../../../../../core/compilerUtils","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../../../../../support/featureFlags"],function(e,r,t,i,o,n){function a(e){if("graphics"!==e.layer.type)return 1;if(i.isNone(e.geometry))return 2;var r=e.geometry.type;switch(r){case"polygon":case"point":case"polyline":break;case"multipoint":case"extent":case"mesh":return 3;default:return t.neverReached(r),3}var a=o.getGraphicEffectiveElevationMode(e);return"on-the-ground"===a||n.enableEditing3D()&&"absolute-height"===a&&!o.hasGraphicFeatureExpressionInfo(e)?0:4}Object.defineProperty(r,"__esModule",{value:!0}),r.isSupportedGraphic=a});