/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../isSupportedGraphicUtils"],(function(e,t,r,p,o){"use strict";function i(e){if("graphics"!==e.layer?.type)return o.SupportedGraphicResult.GRAPHICS_LAYER_MISSING;if(r.isNone(e.geometry))return o.SupportedGraphicResult.GEOMETRY_MISSING;switch(e.geometry.type){case"polygon":case"point":case"polyline":case"mesh":break;default:return o.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED}return"on-the-ground"!==p.getGraphicEffectiveElevationMode(e)&&p.hasGraphicFeatureExpressionInfo(e)?o.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED:o.SupportedGraphicResult.SUPPORTED}e.isSupportedGraphic=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
