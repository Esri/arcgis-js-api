// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(A){var r={STATIC:"static",ATTACHMENTS:"attachments",AREA_DETAILS:"areaDetails",INTERESTING_FACTS:"interestingFacts",LOCATOR_TABLE:"locatorTable",COMPARISON_TABLE:"comparisonTable"},t={AGE_PYRAMID:"AgePyramid",ONE_VAR:"OneVar",RELATED_VARS:"RelatedVariables",TAPESTRY:"Tapestry",PRIZM5:"Prizm5"},n={};for(var T in t)n[t[T]]=!0;A.mixin(r,t);var e={};for(var T in r)e[r[T]]=!0;return r.isDynamic=function(A){return n[A]},r.isSupported=function(A){return e[A]},r.isTableLike=function(A){return A===r.AREA_DETAILS||A===r.LOCATOR_TABLE||A===r.COMPARISON_TABLE},r.fixTapestryNameToWidget=function(A){return"TapestryNEW"===A?"Tapestry":A},r.fixTapestryNameToData=function(A){return"Tapestry"===A?"TapestryNEW":A},r.supportsMultiFeature=function(A){return A===r.COMPARISON_TABLE||A===r.LOCATOR_TABLE||A===r.ATTACHMENTS||A===r.AREA_DETAILS},r.supportsComparison=function(A){return A===r.ONE_VAR||A===r.AGE_PYRAMID||A===r.RELATED_VARS||A===r.COMPARISON_TABLE},r.isDynamicWithFiltering=function(A){return A===r.ONE_VAR||A===r.AGE_PYRAMID||A===r.RELATED_VARS},r}));