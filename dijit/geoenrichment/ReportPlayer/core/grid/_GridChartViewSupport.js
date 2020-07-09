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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","./coreUtils/chart/ChartViewBuilder","./coreUtils/chart/GridChartUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(t,e,i,h,r){return t(null,{noChartView:!1,_chartViewInfo:null,_chartNode:null,_chartViewBuilder:null,getChartViewOptions:function(){var t=h.getSupportedChartTypes(this),e=h.getTableRowsColumnsInfos(this);return t&&t.length&&e&&{chartType:this._chartViewInfo&&this._chartViewInfo.chartType,chartTypes:t,supportsAltOrientation:this.columns.length>2,columnInfos:e.columnInfos,rowInfos:e.rowInfos,sourceId:this._chartViewInfo&&this._chartViewInfo.sourceId,takeSeriesFromRows:!1}},tableToChart:function(t){return this._removeChart(),this._chartViewInfo=t,this._chartNode=e.create("div",{class:"esriGEAbsoluteStretched"},this.domNode),r.hide(this.mainNode),this._chartViewBuilder=new i({viewModel:this.viewModel,theme:this.theme,grid:this,chartNode:this._chartNode,width:this._width,height:this._height}),this._chartViewBuilder.renderChart(t)},chartToTable:function(){this._removeChart()},_removeChart:function(){this._chartViewInfo&&(this._chartViewInfo=null,this._chartViewBuilder.destroy(),this._chartViewBuilder=null,e.destroy(this._chartNode),this._chartNode=null,r.show(this.mainNode))}})}));