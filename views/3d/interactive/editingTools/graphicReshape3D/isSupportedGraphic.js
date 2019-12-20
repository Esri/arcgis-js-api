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

define(["require","exports","../../../../../core/compilerUtils","../../../../../core/maybe","../../../../../geometry/Circle","../../../../../support/elevationInfoUtils","../../../../../support/featureFlags"],function(e,r,t,i,n,a,o){function s(e){if("graphics"!==e.layer.type)return 1;var r=e.geometry;if(i.isNone(r))return 2;var s=r.type;switch(s){case"polygon":if(r instanceof n)return 3;break;case"polyline":break;case"point":case"multipoint":case"extent":case"mesh":return 3;default:return t.neverReached(s),3}var c=a.getGraphicEffectiveElevationMode(e);return"on-the-ground"===c||o.enableEditing3D()&&"absolute-height"===c&&!a.hasGraphicFeatureExpressionInfo(e)?0:4}Object.defineProperty(r,"__esModule",{value:!0}),r.isSupportedGraphic=s});