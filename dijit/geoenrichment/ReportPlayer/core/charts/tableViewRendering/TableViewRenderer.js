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

define(["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable","esri/dijit/geoenrichment/ReportPlayer/config","../../supportClasses/TableUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../sections/sectionUtils/SectionJsonUtil","../chartUtils/builder/utils/ChartDataUtil","../../grid/coreUtils/GridDataUtil","dojo/i18n!../../../../../../nls/jsapi"],function(e,t,i,a,n,o,r,s,l,d){d=d.geoenrichment.dijit.ReportPlayer.ChartContainer;var c=/_P$/i,h={buildSectionJsonFromSeriesItems:function(e,i,o,h,u,b){function f(t){function i(){return e[t-1].name||""}return 0===t?"":1===t?h?d.thisArea:e.length>1?i():"":i()}function m(t){if(0!==t)return e[0].data[t-1].name||""}function _(t,n,r){var l=e[t-1].data[n-1],h=c.test(l.point.fieldInfo.name);if(l.isUnavailableData)return r?a.tables.showUnavailableData?d.unavailableDataShort:"":0;var u=l[l.valueProp];return r?s.formatNumber(u,i,h,o):u}e=e.map(function(e){return e=t.mixin({},e),e.data=e.data.slice(),e.data.sort(function(e,t){return e.unsortedIndex-t.unsortedIndex}),e});var S=n.createTable({numColumns:e.length+1,numRows:e[0].data.length+1,width:u,height:b});return S.data.data.forEach(function(e,t){S.data.columns.forEach(function(i,a){return 0===t?void(e[i.field]=f(a)):0===a?void(e[i.field]=m(t)):(l.setNumericDataValue(_(a,t,!1),e,i.field),void(e[i.field]=_(a,t,!0)))})}),r.wrapInDetailsSectionJson(S)}};return e(i,{_tableSection:null,renderTableForChart:function(e){if(this._destroyTable(),e.chartSeries&&e.chartSeries.length){var t={};t.class="chartContainer_tableSection",t.initialWidth=e.width,t.json=h.buildSectionJsonFromSeriesItems(e.chartSeries,e.visualProperties,e.chartType,e.hasComparison,e.width,e.height),t.viewModel=e.viewModel,t.theme=e.theme,t.tableClass="chartContainerChartTable",t.hasFixedLayout=!1,t.parentWidget=e.parentWidget,this._provideParamsForTableSection(t,e),this._tableSection=e.viewModel.layoutBuilder.createElement("section",t,e.tableNode),this._tableSection.setResizedHeight(e.height),this._tableSection.setViewMode(this._viewMode||o.PREVIEW_VALUES)}},_provideParamsForTableSection:function(e,t){},_viewMode:null,setViewMode:function(e){this._viewMode!==e&&(this._viewMode=e,this._tableSection&&this._tableSection.setViewMode(e))},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy(),this._tableSection=null},destroy:function(){this._destroyTable(),this.inherited(arguments)}})});