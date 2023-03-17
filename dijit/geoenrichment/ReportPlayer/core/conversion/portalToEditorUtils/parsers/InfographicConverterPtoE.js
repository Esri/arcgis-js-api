// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","./infographic/SimpleInfographicParser","./infographic/DynamicInfographicParser","./infographic/AreaDetailsInfographicParser","./infographic/AttachmentsInfographicParser","./infographic/LocatorTableInfographicParser","./infographic/ComparisonTableInfographicParser"],(function(r,o,i,a,e,n,p){var t={},c={};return c[r.STATIC]=o,c[r.ATTACHMENTS]=e,c[r.AREA_DETAILS]=a,c[r.LOCATOR_TABLE]=n,c[r.COMPARISON_TABLE]=p,c[r.AGE_PYRAMID]=i,c[r.TAPESTRY]=i,c[r.PRIZM5]=i,c[r.RELATED_VARS]=i,c[r.ONE_VAR]=i,t.portalToEditor=function(o,i,a){var e=r.fixTapestryNameToWidget(o.attributes.type);if(!r.isSupported(e))throw new Error("Infographic type is not supported.");var n=c[e].portalToEditor(o,a);return n&&a.postProcessInfographicJson&&a.postProcessInfographicJson(o,n),n},t}));