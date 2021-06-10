/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../support/elevationInfoUtils"],(function(e,t,r,o){"use strict";function i(e){var t;if("graphics"!==(null==(t=e.layer)?void 0:t.type))return 1;if(r.isNone(e.geometry))return 2;switch(e.geometry.type){case"polygon":case"point":case"polyline":break;case"multipoint":case"extent":case"mesh":default:return 3}return"on-the-ground"!==o.getGraphicEffectiveElevationMode(e)&&o.hasGraphicFeatureExpressionInfo(e)?4:0}e.isSupportedGraphic=i,Object.defineProperty(e,"__esModule",{value:!0})}));
