/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../../core/has.js";import{isNone as e}from"../../../../../core/maybe.js";import{getGraphicEffectiveElevationMode as r,hasGraphicFeatureExpressionInfo as o}from"../../../../../support/elevationInfoUtils.js";import{SupportedGraphicResult as t}from"../isSupportedGraphicUtils.js";function i(i){if("graphics"!==i.layer?.type)return t.GRAPHICS_LAYER_MISSING;if(e(i.geometry))return t.GEOMETRY_MISSING;switch(i.geometry.type){case"polygon":case"point":case"polyline":case"mesh":break;default:return t.GEOMETRY_TYPE_UNSUPPORTED}return"on-the-ground"!==r(i)&&o(i)?t.ELEVATION_MODE_UNSUPPORTED:t.SUPPORTED}export{i as isSupportedGraphic};
