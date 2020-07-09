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

define(["require","exports","../core/compilerUtils","../core/maybe","../symbols/support/unitConversionUtils"],(function(e,t,o,r,n){function i(e,t){return r.isNone(t)||!t.mode?e?"absolute-height":"on-the-ground":t.mode}function a(e,t){return i(!!r.isSome(e)&&e.hasZ,t)}function s(e){var t=u(e);return a(e.geometry,t)}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getEffectiveElevationMode=i,t.getGeometryEffectiveElevationMode=a,t.getGraphicEffectiveElevationMode=s,t.getGraphicEffectiveElevationInfo=function(e){var t=u(e),o=a(e.geometry,t);return{mode:o,offset:r.isSome(t)&&"on-the-ground"!==o?r.unwrapOr(t.offset,0)*n.getMetersPerUnit(r.unwrapOr(t.unit,"meters")):0}},t.hasGraphicFeatureExpressionInfo=function(e){if("on-the-ground"===s(e))return!1;var t=u(e),o=r.isSome(t)&&t.featureExpressionInfo?t.featureExpressionInfo.expression:null;return!(!o||"0"===o)},t.getZForElevationMode=function(e,t,o){if(!r.isNone(o)&&o.mode){var n=e.hasZ?e.z:0,i=r.isSome(o.offset)?o.offset:0;switch(o.mode){case"absolute-height":return n-i;case"on-the-ground":return 0;case"relative-to-ground":return n-((t.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"ground")||0)+i);case"relative-to-scene":return n-((t.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"scene")||0)+i)}}},t.getConvertedElevation=function(e,t,n,i){if(void 0===i&&(i=null),!r.isNone(n)){var a=r.isSome(i)?i.mode:"absolute-height";if("on-the-ground"===a)return 0;var s=t.hasZ?t.z:0,u=r.isSome(n.offset)?n.offset:0;switch(n.mode){case"absolute-height":s+=u;break;case"on-the-ground":s=e.elevationProvider.getElevation(t.x,t.y,0,t.spatialReference,"ground")||0;break;case"relative-to-ground":s+=(e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"ground")||0)+u;break;case"relative-to-scene":s+=(e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"scene")||0)+u}var l=r.isSome(i)&&r.isSome(i.offset)?i.offset:0;switch(a){case"absolute-height":return s-l;case"relative-to-ground":return s-((e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"ground")||0)+l);case"relative-to-scene":return s-((e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"scene")||0)+l);default:return o.neverReached(a),null}}}}));