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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","./infographic/StaticInfographicParser","./infographic/DynamicInfographicParser","./infographic/AreaDetailsInfographicParser","./infographic/AttachmentsInfographicParser","./infographic/InterestingFactsInfographicParser"],function(r,i,a,e,n,t,o){var c={},p={};return p[i.STATIC]=a,p[i.ATTACHMENTS]=t,p[i.AREA_DETAILS]=n,p[i.INTERESTING_FACTS]=o,p[i.AGE_PYRAMID]=e,p[i.TAPESTRY]=e,p[i.RELATED_VARS]=e,p[i.ONE_VAR]=e,c.portalToEditor=function(r,a,e){var n=i.fixTapestryNameToWidget(r.attributes.type);return p[n].portalToEditor(r,e)},c});