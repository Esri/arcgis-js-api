/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../isSupportedGraphicUtils"],(function(e,r,t,o,p){"use strict";function i(e){var r;if("graphics"!==(null==(r=e.layer)?void 0:r.type))return p.SupportedGraphicResult.GRAPHICS_LAYER_MISSING;if(t.isNone(e.geometry))return p.SupportedGraphicResult.GEOMETRY_MISSING;switch(e.geometry.type){case"polygon":case"point":case"polyline":case"mesh":break;default:return p.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED}return"on-the-ground"!==o.getGraphicEffectiveElevationMode(e)&&o.hasGraphicFeatureExpressionInfo(e)?p.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED:p.SupportedGraphicResult.SUPPORTED}e.isSupportedGraphic=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
