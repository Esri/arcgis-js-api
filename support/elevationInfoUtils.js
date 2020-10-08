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

define(["require","exports","../core/compilerUtils","../core/maybe","../symbols/support/unitConversionUtils"],(function(e,t,o,n,r){"use strict";function i(e,t){return n.isNone(t)||!t.mode?e?"absolute-height":"on-the-ground":t.mode}function a(e,t){return i(!!n.isSome(e)&&e.hasZ,t)}function s(e){var t=f(e);return a(e.geometry,t)}function f(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getConvertedElevation=t.getZForElevationMode=t.hasGraphicFeatureExpressionInfo=t.getGraphicEffectiveElevationInfo=t.getGraphicEffectiveElevationMode=t.getGeometryEffectiveElevationMode=t.getEffectiveElevationMode=void 0,t.getEffectiveElevationMode=i,t.getGeometryEffectiveElevationMode=a,t.getGraphicEffectiveElevationMode=s,t.getGraphicEffectiveElevationInfo=function(e){var t=f(e),o=a(e.geometry,t);return{mode:o,offset:n.isSome(t)&&"on-the-ground"!==o?n.unwrapOr(t.offset,0)*r.getMetersPerUnit(n.unwrapOr(t.unit,"meters")):0}},t.hasGraphicFeatureExpressionInfo=function(e){if("on-the-ground"===s(e))return!1;var t=f(e),o=n.isSome(t)&&t.featureExpressionInfo?t.featureExpressionInfo.expression:null;return!(!o||"0"===o)},t.getZForElevationMode=function(e,t,o){if(!n.isNone(o)&&o.mode){var r=e.hasZ?e.z:0,i=n.isSome(o.offset)?o.offset:0;switch(o.mode){case"absolute-height":return r-i;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"ground")||0)+i);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"scene")||0)+i)}}},t.getConvertedElevation=function(e,t,r,i){if(void 0===i&&(i=null),!n.isNone(r)){var a=n.isSome(i)?i.mode:"absolute-height";if("on-the-ground"===a)return 0;var s=t.hasZ?t.z:0,f=n.isSome(r.offset)?r.offset:0;switch(r.mode){case"absolute-height":s+=f;break;case"on-the-ground":s=e.elevationProvider.getElevation(t.x,t.y,0,t.spatialReference,"ground")||0;break;case"relative-to-ground":s+=(e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"ground")||0)+f;break;case"relative-to-scene":s+=(e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"scene")||0)+f}var l=n.isSome(i)&&n.isSome(i.offset)?i.offset:0;switch(a){case"absolute-height":return s-l;case"relative-to-ground":return s-((e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"ground")||0)+l);case"relative-to-scene":return s-((e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"scene")||0)+l);default:return o.neverReached(a),null}}}}));