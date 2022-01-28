/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../support/elevationInfoUtils"],(function(e,r,t,o){"use strict";function i(e){var r;if("graphics"!==(null==(r=e.layer)?void 0:r.type))return 1;if(t.isNone(e.geometry))return 2;switch(e.geometry.type){case"polygon":case"point":case"polyline":case"mesh":break;default:return 3}return"on-the-ground"!==o.getGraphicEffectiveElevationMode(e)&&o.hasGraphicFeatureExpressionInfo(e)?4:0}e.isSupportedGraphic=i,Object.defineProperty(e,"__esModule",{value:!0})}));
