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

define(["dojo/_base/declare","dojo/_base/lang","../../charts/utils/ChartJsonUtil","../../charts/legends/ChartLegendPlacements","../../themes/ThemeUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(t,e,i,r,n,s){return t(null,{viewModel:null,theme:null,parentWidget:null,chartNode:null,width:null,height:null,chartSeriesItems:null,_chartContainer:null,constructor:function(t){e.mixin(this,t)},renderChart:function(){this._chartContainer=this.viewModel.layoutBuilder.createElement("chart",{node:this.chartNode,json:this._getChartJson(),creationParams:{viewModel:this.viewModel,theme:this._createTheme(),parentWidget:this.parentWidget}})},_createTheme:function(){var t=e.mixin({},this.theme);return t.chart=e.mixin({},t.chart),t.chart.colors=n.generateChartColors(null,t.chart.colors[0],{gradientFactor:.75,numLighterColors:Math.max(0,Math.min(1,this.chartSeriesItems.length-4))}),t},_getChartJson:function(){var t=i.getDefaultChartSettings({width:this.width,height:this.height,seriesItems:this.chartSeriesItems});t.visualProperties.legend.series.placement=r.BOTTOM;var e=this.chartSeriesItems[0].points.length,n=(this.width-50)/e+20,h=s.getMeasureContext({style:"font-size:10px"});return this.chartSeriesItems[0].points.some(function(t){return h.measureText(t.label).w>n})&&(t.visualProperties.xAxis.labelsAngle=20),h.destroy(),t},destroy:function(){this._chartContainer&&this._chartContainer.destroy(),this._chartContainer=null}})});