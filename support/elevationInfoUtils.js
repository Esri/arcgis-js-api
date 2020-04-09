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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/maybe","../symbols/support/unitConversionUtils"],(function(e,n,t,o){function r(e,n){var o=!!t.isSome(e)&&e.hasZ;return t.isNone(n)?o?"absolute-height":"on-the-ground":n.mode}function i(e){var n=a(e);return r(e.geometry,n)}function a(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}Object.defineProperty(n,"__esModule",{value:!0}),n.getGeometryEffectiveElevationMode=r,n.getGraphicEffectiveElevationMode=i,n.getGraphicEffectiveElevationInfo=function(e){var n=a(e),i=r(e.geometry,n);return{mode:i,offset:t.isSome(n)&&"on-the-ground"!==i?t.unwrapOr(n.offset,0)*o.getMetersPerUnit(t.unwrapOr(n.unit,"meters")):0}},n.hasGraphicFeatureExpressionInfo=function(e){if("on-the-ground"===i(e))return!1;var n=a(e),o=t.isSome(n)&&n.featureExpressionInfo?n.featureExpressionInfo.expression:null;return!(!o||"0"===o)},n.getZForElevationMode=function(e,n,o){if(!t.isNone(o)){var r=e.hasZ?e.z:0,i=t.isSome(o.offset)?o.offset:0;switch(o.mode){case"absolute-height":return r-i;case"on-the-ground":return 0;case"relative-to-ground":return r-((n.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"ground")||0)+i);case"relative-to-scene":return r-((n.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"scene")||0)+i)}}}}));