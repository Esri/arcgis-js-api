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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","./infographic/StaticInfographicParser","./infographic/DynamicInfographicParser","./infographic/AreaDetailsInfographicParser","./infographic/AttachmentsInfographicParser","./infographic/InterestingFactsInfographicParser","./infographic/LocatorTableInfographicParser","./infographic/ComparisonTableInfographicParser"],function(r,i,a,o,n,e,t,c,p){var s={},f={};return f[i.STATIC]=a,f[i.ATTACHMENTS]=e,f[i.AREA_DETAILS]=n,f[i.INTERESTING_FACTS]=t,f[i.LOCATOR_TABLE]=c,f[i.COMPARISON_TABLE]=p,f[i.AGE_PYRAMID]=o,f[i.TAPESTRY]=o,f[i.RELATED_VARS]=o,f[i.ONE_VAR]=o,s.portalToEditor=function(r,a,o){var n=i.fixTapestryNameToWidget(r.attributes.type),e=f[n].portalToEditor(r,o);return o.postProcessInfographicJson&&o.postProcessInfographicJson(r,e),e},s});