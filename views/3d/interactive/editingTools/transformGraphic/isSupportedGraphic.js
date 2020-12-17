/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../support/elevationInfoUtils"],(function(e,t,o,r){"use strict";e.isSupportedGraphic=function(e){var t;if("graphics"!==(null==(t=e.layer)?void 0:t.type))return 1;if(o.isNone(e.geometry))return 2;switch(e.geometry.type){case"point":break;case"polygon":case"polyline":case"multipoint":case"extent":case"mesh":default:return 3}const s=o.isSome(e.symbol)&&"point-3d"===e.symbol.type&&e.symbol.symbolLayers;return s&&s.length>0&&s.some((e=>"object"===e.type))?"on-the-ground"!==r.getGraphicEffectiveElevationMode(e)&&r.hasGraphicFeatureExpressionInfo(e)?4:0:5},Object.defineProperty(e,"__esModule",{value:!0})}));
