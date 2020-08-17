// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","../../../charts/utils/ChartTypes","../../../charts/utils/ChartDataLabelsTypes","../../../charts/utils/ChartJsonUtil","../../../charts/legends/ChartLegendPlacements","./GridChartUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],(function(e,t,i,s,r,h,a,n){return e(null,{viewModel:null,theme:null,grid:null,chartNode:null,width:null,height:null,_chartContainer:null,_chartType:null,_seriesInRows:null,_sourceId:null,constructor:function(e){t.mixin(this,e)},renderChart:function(e){this._chartType=e.chartType,this._seriesInRows=e.altOrientation,this._sourceId=e.sourceId;var t=this.viewModel.layoutBuilder.getClass("chart");return t.isAsync?n.showProgressPromise(this.grid.domNode,t.loadModules()).then(this._doRenderChart.bind(this)):this._doRenderChart()},_doRenderChart:function(){this._chartContainer=this.viewModel.layoutBuilder.createElement("chart",{node:this.chartNode,json:this._getChartJson(),creationParams:{viewModel:this.viewModel,theme:this.theme,parentWidget:this.grid,enableAxisLabelsAutoTilt:!0}})},_getChartJson:function(){var e=r.getDefaultChartSettings({chartType:this._chartType,width:this.width,height:this.height,seriesItems:a.createChartSeriesItems(this.grid,{chartType:this._chartType,seriesInRows:this._seriesInRows,sourceId:this._sourceId})});return(e.seriesItems.length>1||i.isSingleSeries(this._chartType))&&(e.visualProperties.legend.series.placement=h.BOTTOM),this._chartType===i.RING&&(e.visualProperties.dataLabels=s.LABEL_VALUE),i.isSingleSeries(this._chartType)?e.visualProperties.title.text=e.seriesItems[0]&&e.seriesItems[0].label||"":e.visualProperties.title.text=a.getChartTitle(this.grid),e},destroy:function(){this._chartContainer&&this._chartContainer.destroy(),this._chartContainer=null}})}));
