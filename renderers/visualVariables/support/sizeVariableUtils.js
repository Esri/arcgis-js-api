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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,n){"use strict";function i(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}Object.defineProperty(n,"__esModule",{value:!0}),n.getTransformationType=n.getInputValueType=n.isValidNumber=n.isSizeVariable=void 0,n.isSizeVariable=function(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass},n.isValidNumber=function(e){return null!=e&&!isNaN(e)&&isFinite(e)},n.getInputValueType=i,n.getTransformationType=function(e,n){var a=n||i(e),l=e.valueUnit||"unknown";return"unknown"===a?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===l?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}}));