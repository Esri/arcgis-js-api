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

define(["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable","esri/dijit/geoenrichment/ReportPlayer/config","../../supportClasses/TableUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../sections/sectionUtils/SectionJsonUtil","../utils/builder/utils/ChartDataUtil","../../grid/coreUtils/GridDataUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,a,o,r,s,l,u){u=u.geoenrichment.dijit.ReportPlayer.ChartContainer;var d=/_P$/i,c={buildSectionJsonFromSeriesItems:function(e,i,o,c,h,b){function m(t){function n(){return e[t-1].name||""}return 0===t?i.xAxis.title||"":1===t?c?u.thisArea:e.length>1?n():i.yAxis.title||"":n()}function f(t){if(0!==t)return e[0].data[t-1].name||""}function g(t,a,r,l){var c=e[t-1].data[a-1],h=d.test(c.point.fieldInfo.name);return c.isUnavailableData?r?n.tables.showUnavailableData?u.unavailableDataShort:"":0:(l=void 0===l?c[c.valueProp]:l,r?s.formatNumber(l,i,h,o):l)}e=e.map(function(e){return e=t.mixin({},e),e.data=e.data.slice(),e.data.sort(function(e,t){return e.unsortedIndex-t.unsortedIndex}),e});var _=e[0].data.length+1,S=a.createTable({numColumns:e.length+1,numRows:_,width:h,height:b,processTableCell:function(e,t,i,n,a){e.style.fields[t].verticalAlign="middle",e.style.fields[t].horizontalPadding=5,e.style.fields[t].fontSize=Math.round(15-4*_/50)}});return S.data.data.forEach(function(e,t){S.data.columns.forEach(function(i,n){if(0===t)return void(e[i.field]=m(n));if(0===n)return void(e[i.field]=f(t));var a=g(n,t,!1),o=g(n,t,!0);l.setNumericDataValue(a,e,i.field),e[i.field]=o})}),{sectionJson:r.wrapInDetailsSectionJson(S),numberFormatFunction:function(e,t){return g(t.column.index,t.gridData.index,!0,e)}}}};return e(i,{_tableSection:null,_sorting:null,renderTableForChart:function(e){var t=this;if(this._destroyTable(),e.chartSeries&&e.chartSeries.length){var i={};i.class="chartContainer_tableSection",i.initialWidth=e.width;var n=c.buildSectionJsonFromSeriesItems(e.chartSeries,e.visualProperties,e.chartType,e.hasComparison,e.width,e.height);i.json=n.sectionJson,e.showAnimation||(n.numberFormatFunction=null),i.viewModel=e.viewModel,i.theme=e.theme,i.tableClass="chartContainerChartTable",i.hasFixedLayout=!1,i.parentWidget=e.parentWidget,i.tableParams={enableNumberAnimation:e.showAnimation,_postCreateFieldCell:function(e){if(n.numberFormatFunction){var t=n.numberFormatFunction;e.setNumberValue(l.getNumericCellValue(e),function(i){return t(i,e)}),setTimeout(function(){n.numberFormatFunction=null})}},onSortingChanged:function(e){t._sorting=e}},this._tableSection=e.viewModel.layoutBuilder.createElement("section",i,e.tableNode),this._tableSection.setResizedHeight(e.height),this._tableSection.setViewMode(this._viewMode||o.PREVIEW_VALUES),this._tableSection.getTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(e){this._viewMode!==e&&(this._viewMode=e,this._tableSection&&this._tableSection.setViewMode(e))},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy(),this._tableSection=null},destroy:function(){this._destroyTable(),this.inherited(arguments)}})});