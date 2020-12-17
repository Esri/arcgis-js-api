/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}e.getInputValueType=n,e.getTransformationType=function(e,i){const l=i||n(e),a=e.valueUnit||"unknown";return"unknown"===l?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"},e.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},e.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
