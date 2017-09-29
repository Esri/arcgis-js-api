// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(a){var r={};r.STATIC="static",r.ATTACHMENTS="attachments",r.AREA_DETAILS="areaDetails",r.INTERESTING_FACTS="interestingFacts";var n={AGE_PYRAMID:"AgePyramid",TAPESTRY:"TapestryNEW",RELATED_VARS:"RelatedVariables",ONE_VAR:"OneVar"},e={};for(var t in n)e[n[t]]=!0;a.mixin(r,n);var i={};for(var t in r)i[r[t]]=!0;return r.isDynamic=function(a){return e[a]},r.isSupported=function(a){return i[a]},r});