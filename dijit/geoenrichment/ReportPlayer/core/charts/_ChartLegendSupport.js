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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./chartUtils/ChartTypes","./chartUtils/ChartStyleUtil","./legends/ChartLegendTypes","./legends/ChartLegendPlacements","./legends/MinMaxLegend","esri/dijit/geoenrichment/SelectableLegend"],function(e,t,i,n,s,r,l,d,a,h,o){return e(null,{legend:null,_placements:[a.LEFT,a.RIGHT,a.TOP,a.BOTTOM],_excludedSeriesHash:null,_createLegend:function(){this._excludedSeriesHash={},this._placements.forEach(function(e){i.remove(this.domNode,"legendPlacement"+e)},this),this._currentVisualProperties.legend.type===d.MIN_MAX?this._createMinMaxLegend():this._createSeriesLegend()},_createSeriesLegend:function(){this._currentVisualProperties.legend.series.placement!==a.NONE&&(this.legend=new o(t.mixin({chart:this.chart,allowSelect:!!this.viewModel.dynamicReportInfo&&(r.isColumnBarLike(this._currentChartType)||this._currentChartType===r.LINE),isRtlPlacement:this._currentVisualProperties.legend.series.placement===a.LEFT,keepItemsTheSameWidth:!0,onSeriesExclusionChanged:t.hitch(this,this._onSeriesExclusionChanged)},this._getAdditionalLegendParams())).placeAt(this.getLegendNode()),this._applyStyleToSeriesLegend(),i.add(this.domNode,"legendPlacement"+this._currentVisualProperties.legend.series.placement))},_applyStyleToSeriesLegend:function(){var e=this.viewModel.getChartDefaultStyles(this.theme),i=t.mixin({},e.legendStyle,this._currentVisualProperties.legend.series.style);s.set(this.legend.domNode,l.getStyleObjWithUnits(i)),this._currentVisualProperties.legend.series.hasBorder||s.set(this.legend.domNode,"border","none")},_createMinMaxLegend:function(){this._currentVisualProperties.legend.minMax.placement!==a.NONE&&(this.legend=new h({viewModel:this.viewModel,theme:this.theme}).placeAt(this.getLegendNode()),i.add(this.domNode,"hasMinMaxLegend"),i.add(this.domNode,"legendPlacement"+this._currentVisualProperties.legend.minMax.placement))},_getAdditionalLegendParams:function(){return null},_onSeriesExclusionChanged:function(e){this._excludedSeriesHash=e,this._updateSeries()},_updateLegend:function(){var e=this._currentSeries.filter(function(e){return!e.isComparisonSeries});if(this.legend)if(this._currentVisualProperties.legend.type===d.MIN_MAX)this.legend.refresh(e,this._currentVisualProperties);else{this.legend.series=e,this.legend.showSeriesData=1===e.length&&this._currentChartType!==r.LINE;var t=!!this.viewModel.dynamicReportInfo&&e.length>1;t!==this.legend.allowSelect&&(this.legend.allowSelect=t),this.legend.refresh()}},_updateSeries:function(){},_destroyLegend:function(){this.legend&&this.legend.destroy(),this.legend=null}})});