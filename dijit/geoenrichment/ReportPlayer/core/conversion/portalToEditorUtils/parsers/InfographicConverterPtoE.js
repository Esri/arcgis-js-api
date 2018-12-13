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

define(["esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","./infographic/SimpleInfographicParser","./infographic/DynamicInfographicParser","./infographic/AreaDetailsInfographicParser","./infographic/AttachmentsInfographicParser","./infographic/InterestingFactsInfographicParser","./infographic/LocatorTableInfographicParser","./infographic/ComparisonTableInfographicParser"],function(r,i,a,o,e,n,c,p){var t={},s={};return s[r.STATIC]=i,s[r.ATTACHMENTS]=e,s[r.AREA_DETAILS]=o,s[r.INTERESTING_FACTS]=n,s[r.LOCATOR_TABLE]=c,s[r.COMPARISON_TABLE]=p,s[r.AGE_PYRAMID]=a,s[r.TAPESTRY]=a,s[r.RELATED_VARS]=a,s[r.ONE_VAR]=a,t.portalToEditor=function(i,a,o){var e=r.fixTapestryNameToWidget(i.attributes.type),n=s[e].portalToEditor(i,o);return n&&o.postProcessInfographicJson&&o.postProcessInfographicJson(i,n),n},t});