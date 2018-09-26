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

define(["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable","esri/dijit/geoenrichment/ReportPlayer/config","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../sections/sectionUtils/SectionJsonUtil","../utils/builder/utils/ChartDataUtil","../utils/ChartTypes","../../grid/coreUtils/GridDataUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,a,o,r,s,l,u,d){d=d.geoenrichment.dijit.ReportPlayer.ChartContainer;var c=/_P$/i,h={buildSectionJsonFromSeriesItems:function(e,i,o,h,m,f,b){function g(e){function t(){return o[e-1].name||""}return 0===e?h.xAxis.title||"":1===e?m&&!i?d.thisArea:o.length>1?t():h.yAxis.title||"":t()}function v(e){if(0!==e)return o[0].data[e-1].name||""}function _(t,i,a,r){var l=o[t-1].data[i-1],u=l.point.fieldInfo&&c.test(l.point.fieldInfo.name);return l.isUnavailableData?a?n.tables.showUnavailableData?d.unavailableDataShort:"":0:(r=void 0===r?l[l.valueProp]:r,a?s.formatNumber(r,h,u,e):r)}if(o=o.map(function(e){return e=t.mixin({},e),e.data=e.data.slice(),e.data.sort(function(e,t){return e.unsortedIndex-t.unsortedIndex}),e}),i&&l.isColumnBarLike(e)){var S=[];o[0].data.forEach(function(e,i){S.push({name:e.name,data:o.map(function(e){var n=e.data[i];return t.mixin({},n,{name:e.name})})})}),o=S}var p=o[0].data.length+1,C=a.createTable({numColumns:o.length+1,numRows:p,width:f,height:b,processTableCell:function(e,t,i,n,a){e.style.fields[t].verticalAlign="middle",e.style.fields[t].horizontalPadding=5,e.style.fields[t].fontSize=Math.round(15-4*p/50)}});return C.data.data.forEach(function(e,t){C.data.columns.forEach(function(i,n){if(0===t)return void(e[i.field]=g(n));if(0===n)return void(e[i.field]=v(t));var a=_(n,t,!1),o=_(n,t,!0);u.setNumericDataValue(a,e,i.field),e[i.field]=o})}),{sectionJson:r.wrapInDetailsSectionJson(C),numberFormatFunction:function(e,t){return _(t.column.index,t.gridData.index,!0,e)}}}};return e(i,{_tableSection:null,_sorting:null,renderTableForChart:function(e){var t=this;if(this._destroyTable(),e.chartSeries&&e.chartSeries.length){var i={};i.class="chartContainer_tableSection",i.initialWidth=e.width;var n=h.buildSectionJsonFromSeriesItems(e.chartType,e.isMultiFeatureChart,e.chartSeries,e.visualProperties,e.hasComparison,e.width,e.height);i.json=n.sectionJson,e.showAnimation||(n.numberFormatFunction=null),i.viewModel=e.viewModel,i.theme=e.theme,i.tableClass="chartContainerChartTable",i.hasFixedLayout=!1,i.parentWidget=e.parentWidget,i.initialViewMode=this._viewMode||o.PREVIEW_VALUES,i.tableParams={enableNumberAnimation:e.showAnimation,_postCreateFieldCell:function(e){if(n.numberFormatFunction){var t=n.numberFormatFunction;e.setNumberValue(u.getNumericCellValue(e),function(i){return t(i,e)}),setTimeout(function(){n.numberFormatFunction=null})}},onSortingChanged:function(e){t._sorting=e}},this._tableSection=e.viewModel.layoutBuilder.createElement("section",i,e.tableNode),this._tableSection.setResizedHeight(e.height),this._tableSection.getTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(e){this._viewMode!==e&&(this._viewMode=e,this._tableSection&&this._tableSection.setViewMode(e))},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy(),this._tableSection=null},destroy:function(){this._destroyTable(),this.inherited(arguments)}})});