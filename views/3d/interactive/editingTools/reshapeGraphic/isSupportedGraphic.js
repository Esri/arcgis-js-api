/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../../geometry/Circle","../../../../../support/elevationInfoUtils"],(function(e,t,r,o){"use strict";function n(e){return i(e).result}function u(e){return i(e).geometry}function i(e){var n;if("graphics"!==(null==(n=e.layer)?void 0:n.type))return{result:1,geometry:null};if(t.isNone(e.geometry))return{result:2,geometry:null};return"on-the-ground"!==o.getGraphicEffectiveElevationMode(e)&&o.hasGraphicFeatureExpressionInfo(e)?{result:4,geometry:null}:"point"!==e.geometry.type&&"polyline"!==e.geometry.type&&("polygon"!==e.geometry.type||e.geometry instanceof r)?{result:3,geometry:null}:{result:0,geometry:e.geometry}}e.geometryOfSupportedGraphic=u,e.isSupportedGraphic=n,Object.defineProperty(e,"__esModule",{value:!0})}));
