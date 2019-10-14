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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","./_StatsCollector","./_VariablesInColumnsBuilder","./_VariablesInRowsBuilder","../../../supportClasses/tableJson/TableJsonResizeUtil"],function(e,s,t,n,i){var a={};return a.buildSectionJsonAndGroups=function(a){var r=a.infographicJson,o=e.clone(r.dataSectionJson.stack[0]),l=s.getStats(r.showThisAreas,a.calculators,a.selectedLevelsCache,a.analysisAreas,a.filterRanges),u=r.variablesInColumns?t.buildForVariablesInColumns(o,l,a):n.buildForVariablesInRows(o,l,a);if(u){u.ranges=s.applyFieldsToRanges(u.fields,u.ranges);var c=u.sectionJson.stack[0];i.resizeTableJsonToFitWidth(c,a.width,{columnWidths:a.columnWidths}),i.resizeTableJsonToFitHeight(c,a.height)}return u},a.getAttributesForGridData=function(e){return e&&e.__attributes},a.getAttributesForColumn=function(e){return e&&e.__attributes},a.getThisAreaIndex=function(e){return e&&e.__thisAreaIndex},a});