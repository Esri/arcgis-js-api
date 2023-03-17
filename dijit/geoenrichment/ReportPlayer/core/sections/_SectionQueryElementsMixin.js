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

define(["dojo/_base/declare","../grid/coreUtils/GridDataUtil","../infographics/InfographicTypes","../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../supportClasses/ElementUsageTypes"],(function(e,t,n,r,i){return e(null,{_queryElementsById:function(e,t){return this._getStackElements(t).filter((function(t){return t.stackId===e}))},getStackElements:function(e){return this._getStackElements(e)},containsElement:function(e){return-1!==this._stackElements.indexOf(e)},_getStackElements:function(e){return e?this._stackElements.slice().reverse():this._stackElements},isTrueTable:function(e){return e&&!this.isImageTable(e)&&!this.isMapTable(e)&&!this.isEmptyTable(e)},isEmptyTable:function(e){return e&&!(e.columns.length>0&&e.rows.length>0)},getTables:function(e){return this._queryElementsById("table",e)},getTrueTables:function(e){return this.getTables(e).filter((function(e){return this.isTrueTable(e)}),this)},getFirstTrueTable:function(){return this.getTrueTables()[0]},getLastTrueTable:function(){var e=this.getTrueTables();return e[e.length-1]},getDataTables:function(){return this.isDataSection()?this.getTrueTables():[]},hasNonEmptyTables:function(){return!!this.getTrueTables().length},hasTablesThatFitHeight:function(){return this.getTrueTables().some((function(e){return e.needScaleToFitHeight()}))},hasMultiFeatureTables:function(){return this.getTrueTables().some((function(e){return e.isMultiFeatureTable()}))},hasLocatorTables:function(){return this.getTrueTables().some((function(e){return e.isLocatorTable&&e.isLocatorTable()}))},hasLocatorHeaderTables:function(){return this.getTrueTables().some((function(e){return e.isLocatorHeaderTable&&e.isLocatorHeaderTable()}))},hasLocatorFooterTables:function(){return this.getTrueTables().some((function(e){return e.isLocatorFooterTable&&e.isLocatorFooterTable()}))},hasSummarizeTables:function(){return this.getTrueTables().some((function(e){return e.isSummarizeTable&&e.isSummarizeTable()}))},hasImages:function(){return!!this.getImages().length},getImages:function(e){return this.getTables(e).filter((function(e){return this.isImageTable(e)}),this).map((function(e){return e.getFirstCell().content}))},hasOnlyImage:function(){return 1===this._stackElements.length&&this.getImages().length},hasMapImages:function(){return!!this.getMapImages().length},getMapImages:function(e){return this.getTables(e).filter((function(e){return this.isMapTable(e)}),this).map((function(e){return e.getFirstCell().content}))},hasChart:function(){var e=0;return this.getTrueTables().forEach((function(n){n.getCells().forEach((function(n){t.isChartCell(n)&&e++}))})),e},getChart:function(){var e;return this.getTrueTables().some((function(n){n.getCells().some((function(n){if(t.isChartCell(n))return e=n.content,!0}))})),e},getChartJson:function(){var e;return this.getTrueTables().some((function(t){if(e=t.getChartJson())return!0})),e},hasSingleInfographic:function(e){return 1===this.getTables().length&&this.getTables()[0].isSingleCelledTable()&&this.hasInfographic(e)},getInfographicType:function(){var e=this.getInfographicWithTable();return e&&e.type},hasInfographic:function(e){var n=0;return this.getTrueTables().forEach((function(r){return r.getCells().forEach((function(r){!t.isInfographicCell(r)||e&&t.getFieldInfo(r).infographicJson.type!==e||n++}))})),n},getInfographic:function(){var e=this.getInfographicWithTable();return e&&e.infographic},getInfographicWithTable:function(){var e,n;return this.getTrueTables().some((function(r){return r.getCells().some((function(i){if(t.isInfographicCell(i))return e=i.content,n=r,!0}))})),e?{infographic:e,table:n,type:e.getType()}:null},getInfographicJson:function(){var e;return this.getTrueTables().some((function(t){if(e=t.getInfographicJson())return!0})),e},getMovableElements:function(){return this._stackElements.filter((function(e){return e.isGrid||e.isImage||e.isMap}))},hasPageBreak:function(){return!!this._queryElementsById("pageBreak").length},canSwitchFeatures:function(){return this.elementUsageType===i.PAGE_PANEL_SECTION&&(this.getTrueTables().some((function(t){if(t.isSingleCelledTable()){if(this._checkSingleCelledTable(t))return e=!0,!0}else if(!t.isMultiFeatureTable()&&this._checkMultiCelledTable(t))return e=!0,!0}),this),e);var e},_checkSingleCelledTable:function(e){var r=e.getFirstCell();if(t.isChartCell(r)&&!r.content.isMultiFeatureChart())return!0;if(!t.isInfographicCell(r))return!1;var i=r.content.getType();return!n.supportsMultiFeature(i)||(!(i!==n.AREA_DETAILS&&i!==n.ATTACHMENTS||!e.viewModel.dynamicReportInfo||!e.viewModel.dynamicReportInfo.attachmentsStore||!e.viewModel.dynamicReportInfo.attachmentsStore.supportsMultipleAreas)||void 0)},_checkMultiCelledTable:function(e){if(e.getCells().some((function(e){var n=t.getFieldInfo(e);if(n&&!r.isAreaAttributesFieldInfo(n))return t.isVariableLikeFieldCell(e)})))return!0}})}));