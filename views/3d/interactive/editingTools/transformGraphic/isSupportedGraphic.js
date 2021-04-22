/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../support/elevationInfoUtils"],(function(e,t,o,r){"use strict";function n(e){var t;if("graphics"!==(null==(t=e.layer)?void 0:t.type))return 1;if(o.isNone(e.geometry))return 2;switch(e.geometry.type){case"point":break;case"polygon":case"polyline":return 0;case"multipoint":case"extent":case"mesh":default:return 3}const n=o.isSome(e.symbol)&&"point-3d"===e.symbol.type&&e.symbol.symbolLayers;if(!(n&&n.length>0&&n.some((e=>"object"===e.type))))return 5;return"on-the-ground"!==r.getGraphicEffectiveElevationMode(e)&&r.hasGraphicFeatureExpressionInfo(e)?4:0}e.isSupportedGraphic=n,Object.defineProperty(e,"__esModule",{value:!0})}));
