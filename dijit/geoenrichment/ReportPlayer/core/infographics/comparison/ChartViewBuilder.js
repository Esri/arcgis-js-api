// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../charts/utils/ChartJsonUtil","../../charts/legends/ChartLegendPlacements","../../themes/ThemeUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],(function(t,e,r,i,h,n){return t(null,{viewModel:null,theme:null,parentWidget:null,chartNode:null,width:null,height:null,chartSeriesItems:null,_chartContainer:null,_chartType:null,constructor:function(t){e.mixin(this,t)},renderChart:function(t){this._chartType=t.chartType;var e=this.viewModel.layoutBuilder.getClass("chart");return e.isAsync?n.showProgressPromise(this.parentWidget.domNode,e.loadModules()).then(this._doRenderChart.bind(this)):this._doRenderChart()},_doRenderChart:function(){this._chartContainer=this.viewModel.layoutBuilder.createElement("chart",{node:this.chartNode,creationParams:{json:this._getChartJson(),viewModel:this.viewModel,theme:this._createTheme(),parentWidget:this.parentWidget,enableAxisLabelsAutoTilt:!0}})},_createTheme:function(){var t=e.mixin({},this.theme);return t.chart=e.mixin({},t.chart),t.chart.colors=h.generateChartColors(null,t.chart.colors[0],{gradientFactor:.75,numLighterColors:Math.max(0,Math.min(1,this.chartSeriesItems.length-4))}),t},_getChartJson:function(){var t=r.getDefaultChartSettings({chartType:this._chartType,width:this.width,height:this.height,seriesItems:this.chartSeriesItems});return t.visualProperties.legend.series.placement=i.BOTTOM,t},destroy:function(){this._chartContainer&&this._chartContainer.destroy(),this._chartContainer=null}})}));