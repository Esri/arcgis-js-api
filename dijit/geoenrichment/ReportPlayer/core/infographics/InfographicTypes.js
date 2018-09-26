// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(r){var t={};t.STATIC="static",t.ATTACHMENTS="attachments",t.AREA_DETAILS="areaDetails",t.INTERESTING_FACTS="interestingFacts",t.LOCATOR_TABLE="locatorTable",t.COMPARISON_TABLE="comparisonTable";var a={AGE_PYRAMID:"AgePyramid",TAPESTRY:"Tapestry",RELATED_VARS:"RelatedVariables",ONE_VAR:"OneVar"},e={};for(var n in a)e[a[n]]=!0;r.mixin(t,a);var T={};for(var n in t)T[t[n]]=!0;return t.isDynamic=function(r){return e[r]},t.isSupported=function(r){return T[r]},t.fixTapestryNameToWidget=function(r){return"TapestryNEW"===r?"Tapestry":r},t.fixTapestryNameToData=function(r){return"Tapestry"===r?"TapestryNEW":r},t.supportsMultiFeature=function(r){return"OneVar"===r||r===t.COMPARISON_TABLE||r===t.LOCATOR_TABLE||r===t.ATTACHMENTS||r===t.AREA_DETAILS},t.supportsComparison=function(r){return r&&"Tapestry"!==r},t});