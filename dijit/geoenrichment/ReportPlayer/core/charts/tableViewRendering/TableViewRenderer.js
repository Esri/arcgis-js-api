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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable","esri/dijit/geoenrichment/ReportPlayer/config","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../sections/sectionUtils/SectionJsonUtil","../utils/builder/utils/ChartDataUtil","../utils/ChartTypes","../../grid/coreUtils/GridDataUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,a,o,r,l,s,u,c){c=c.geoenrichment.dijit.ReportPlayer.ChartContainer;var d=/_P$/i,h={buildSectionJsonFromSeriesItems:function(e,i,o,h,b,m,f){function g(e){function t(){return o[e-1].name||""}return 0===e?h.xAxis&&h.xAxis.title||"":1===e?b?i?t():c.thisArea:o.length>1?t():h.yAxis&&h.yAxis.title||"":t()}function S(e){if(0!==e)return o[0].data[e-1].name||""}function _(e,t,i,a){var r=o[e-1].data[t-1],s=r.point.fieldInfo&&d.test(r.point.fieldInfo.name);return r.isUnavailableData?i?n.tables.showUnavailableData?c.unavailableDataShort:"":0:(a=void 0===a?r.originalValue:a,i?l.formatNumber(a,h,s):a)}if(o=o.map(function(e){return e=t.mixin({},e),e.data=e.data.slice(),e.data.sort(function(e,t){return e.unsortedIndex-t.unsortedIndex}),e}),i&&s.isColumnBarLike(e)){var v=[];o[0].data.forEach(function(e,i){v.push({name:e.name,data:o.map(function(e){var n=e.data[i];return t.mixin({},n,{name:e.name})})})}),o=v}var p=o[0].data.length+1,C=f/p-2,y=a.createTable({numColumns:o.length+1,numRows:p,width:m,height:f,processTableCell:function(e,t,i,n,a){e.style.fields[t].verticalAlign="middle",e.style.fields[t].horizontalPadding=5,e.style.fields[t].fontSize=Math.round(Math.min(C,15-4*p/50))}});return y.data.data.forEach(function(e,t){y.data.columns.forEach(function(i,n){if(0===t)return void(e[i.field]=g(n));if(0===n)return void(e[i.field]=S(t));var a=_(n,t,!1),o=_(n,t,!0);u.setNumericDataValue(a,e,i.field),e[i.field]=o})}),{sectionJson:r.wrapInDetailsSectionJson(y),numberFormatFunction:function(e,t){return _(t.column.index,t.gridData.index,!0,e)}}}};return e(i,{_tableSection:null,_sorting:null,renderTableForChart:function(e){var t=this;if(this._destroyTable(),e.chartSeries&&e.chartSeries.length){var i={};i.class="chartContainer_tableSection",i.initialWidth=e.width;var n=h.buildSectionJsonFromSeriesItems(e.chartType,e.isMultiFeatureChart,e.chartSeries,e.visualProperties,e.hasComparison,e.width,e.height);i.json=n.sectionJson;var a=e.viewModel.getDocumentDefaultStyles(e.theme);a.backgroundImage&&a.backgroundImage.data&&(i.json.style={backgroundColor:a.backgroundColor}),e.showAnimation||(n.numberFormatFunction=null),i.viewModel=e.viewModel,i.theme=e.theme,i.tableClass="chartContainerChartTable",i.parentWidget=e.parentWidget,i.initialViewMode=this._viewMode||o.PREVIEW_VALUES,i.tableParams={enableNumberAnimation:e.showAnimation,_postCreateFieldCell:function(e){if(n.numberFormatFunction){var t=n.numberFormatFunction;e.setNumberValue(u.getNumericCellValue(e),function(i){return t(i,e)},!0),setTimeout(function(){n.numberFormatFunction=null})}},onSortingChanged:function(e){t._sorting=e}},this._tableSection=e.viewModel.layoutBuilder.createElement("section",i,e.tableNode),this._tableSection.setHeight(e.height),this._tableSection.getTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(e){this._viewMode!==e&&(this._viewMode=e,this._tableSection&&this._tableSection.setViewMode(e))},getVisualState:function(){return{tableSection:this._tableSection&&this._tableSection.getVisualState()}},setVisualState:function(e){e&&e.tableSection&&this._tableSection&&this._tableSection.setVisualState(e.tableSection)},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy(),this._tableSection=null},destroy:function(){this._destroyTable(),this.inherited(arguments)}})});