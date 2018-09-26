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

define(["esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","./infographic/StaticInfographicParser","./infographic/DynamicInfographicParser","./infographic/AreaDetailsInfographicParser","./infographic/AttachmentsInfographicParser","./infographic/InterestingFactsInfographicParser","./infographic/LocatorTableInfographicParser","./infographic/ComparisonTableInfographicParser"],function(r,a,i,o,n,e,c,t){var p={},s={};return s[r.STATIC]=a,s[r.ATTACHMENTS]=n,s[r.AREA_DETAILS]=o,s[r.INTERESTING_FACTS]=e,s[r.LOCATOR_TABLE]=c,s[r.COMPARISON_TABLE]=t,s[r.AGE_PYRAMID]=i,s[r.TAPESTRY]=i,s[r.RELATED_VARS]=i,s[r.ONE_VAR]=i,p.portalToEditor=function(a,i,o){var n=r.fixTapestryNameToWidget(a.attributes.type),e=s[n].portalToEditor(a,o);return o.postProcessInfographicJson&&o.postProcessInfographicJson(a,e),e},p});