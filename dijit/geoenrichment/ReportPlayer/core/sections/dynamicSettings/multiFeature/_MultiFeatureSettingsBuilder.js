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

define(["../../../infographics/InfographicTypes","../../../grid/coreUtils/GridDataUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes"],function(e,t,i,l){var r={};return r.provideMultiFeatureSettings=function(e){if(!e.viewModel.dynamicReportInfo.isMultiFeature||e.elementUsageType!==l.PAGE_PANEL_SECTION)return null;var t;return e.getTables().some(function(e){return e.isSingleCelledTable()&&r._checkSingleCelledTable(e)?(t=!0,!0):!e.isMultiFeatureTable()&&r._checkMultiCelledTable(e)?(t=!0,!0):void 0}),t&&{canSelectFeatures:t}},r._checkSingleCelledTable=function(i){var l=i.getFirstCell();if(t.isChartCell(l)&&!l.content.isMultiFeatureChart())return!0;if(t.isInfographicCell(l)){var r=l.content.getType();if(!e.supportsMultiFeature(r))return!0;if((r===e.AREA_DETAILS||r===e.ATTACHMENTS)&&i.viewModel.dynamicReportInfo.attachmentsStore&&i.viewModel.dynamicReportInfo.attachmentsStore.supportsMultipleAreas)return!0}},r._checkMultiCelledTable=function(e){if(e.getFieldCells().some(function(e){var l=t.getFieldInfo(e);if(l&&!i.isAreaAttributesFieldInfo(l))return t.isVariableFieldCell(e)}))return!0},r});