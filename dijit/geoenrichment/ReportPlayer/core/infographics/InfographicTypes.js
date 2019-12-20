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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(r){var A={};A.STATIC="static",A.ATTACHMENTS="attachments",A.AREA_DETAILS="areaDetails",A.INTERESTING_FACTS="interestingFacts",A.LOCATOR_TABLE="locatorTable",A.COMPARISON_TABLE="comparisonTable";var t={AGE_PYRAMID:"AgePyramid",ONE_VAR:"OneVar",RELATED_VARS:"RelatedVariables",TAPESTRY:"Tapestry",PRIZM5:"Prizm5"},n={};for(var T in t)n[t[T]]=!0;r.mixin(A,t);var e={};for(var T in A)e[A[T]]=!0;return A.isDynamic=function(r){return n[r]},A.isSupported=function(r){return e[r]},A.isTableLike=function(r){return r===A.AREA_DETAILS||r===A.LOCATOR_TABLE||r===A.COMPARISON_TABLE},A.fixTapestryNameToWidget=function(r){return"TapestryNEW"===r?"Tapestry":r},A.fixTapestryNameToData=function(r){return"Tapestry"===r?"TapestryNEW":r},A.supportsMultiFeature=function(r){return r===A.COMPARISON_TABLE||r===A.LOCATOR_TABLE||r===A.ATTACHMENTS||r===A.AREA_DETAILS},A.supportsComparison=function(r){return r===A.ONE_VAR||r===A.AGE_PYRAMID||r===A.RELATED_VARS||r===A.COMPARISON_TABLE},A.isDynamicWithFiltering=function(r){return r===A.ONE_VAR||r===A.AGE_PYRAMID||r===A.RELATED_VARS},A});