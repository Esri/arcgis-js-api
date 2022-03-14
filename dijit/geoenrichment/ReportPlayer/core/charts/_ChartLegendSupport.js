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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-style","./utils/ChartTypes","./utils/ChartStyleUtil","./utils/ChartCalculator","./legends/ChartLegendTypes","./legends/ChartLegendPlacements","./legends/MinMaxLegend","./legends/SelectableLegend","./legends/ChartLegendSymbols"],(function(e,t,i,s,n,r,l,d,a,h,o,u){return e(null,{legend:null,_placements:[a.LEFT,a.RIGHT,a.TOP,a.BOTTOM],_excludedSeriesHash:null,_createLegend:function(){this._excludedSeriesHash={},this._placements.forEach((function(e){i.remove(this.domNode,"legendPlacement"+e)}),this),this._currentVisualProperties.legend&&(this._currentVisualProperties.legend.type===d.MIN_MAX?this._createMinMaxLegend():this._createSeriesLegend())},_createSeriesLegend:function(){var e=this._currentVisualProperties.legend.series.placement;e!==a.NONE&&(this.legend=new o(t.mixin({chart:this.chart,chartType:this._currentChartType,allowSelect:!!this.viewModel.dynamicReportInfo&&(n.isColumnBarLike(this._currentChartType)||n.isLineLike(this._currentChartType)),isStacked:a.isOnSide(e),isRtlPlacement:e===a.LEFT&&!this.viewModel.isGraphicStyle(),keepItemsTheSameWidth:!0,customLegendSymbol:this._currentVisualProperties.legend.series.symbol,defaultLegendSymbol:u.getDefaultSymbol(this._currentChartType,this.viewModel.isGraphicStyle()),showValues:this._currentChartType===n.WAFFLE,hideLastPoint:this._currentVisualProperties.legend.series.hideOthers,onSeriesExclusionChanged:t.hitch(this,this._onSeriesExclusionChanged)},this._getAdditionalLegendParams())).placeAt(this.getLegendNode()),this._applyStyleToSeriesLegend(),i.add(this.domNode,"legendPlacement"+e))},_applyStyleToSeriesLegend:function(){var e=this.viewModel.getChartDefaultStyles(this.theme),i=t.mixin({},e.legendStyle,this._currentVisualProperties.legend.series.style);this.viewModel.isGraphicStyle()||delete i.backgroundColor,s.set(this.legend.domNode,r.getStyleObjWithUnits(i)),this._currentVisualProperties.legend.series.hasBorder||s.set(this.legend.domNode,"border","none")},_createMinMaxLegend:function(){this._currentVisualProperties.legend.minMax&&this._currentVisualProperties.legend.minMax.placement!==a.NONE&&(this.legend=new h({viewModel:this.viewModel,theme:this.theme,chartType:this._currentChartType}).placeAt(this.getLegendNode()),i.add(this.domNode,"hasMinMaxLegend"),i.add(this.domNode,"legendPlacement"+this._currentVisualProperties.legend.minMax.placement))},_getAdditionalLegendParams:function(){return null},_onSeriesExclusionChanged:function(e){this._excludedSeriesHash=e,this._updateSeries()},_updateLegend:function(){this.legend&&(this._currentVisualProperties.legend.type===d.MIN_MAX?this._updateMinMaxLegend():this._updateSeriesLegend())},_updateSeriesLegend:function(){this.legend.chartWidth=this.domNode.clientWidth-2*l.PRETTY_PADDING;var e=(!this._isMultiFeatureChart||n.isLineLike(this._currentChartType))&&this._currentComparisonInfo&&this._currentVisualProperties.legend.series.showComparison,t=this._currentSeries.filter((function(t){return!t.isComparisonSeries||e}));this.legend.series=t,this.legend.showSeriesData=1===t.length&&!n.isLineLike(this._currentChartType);var i=!!this.viewModel.dynamicReportInfo&&t.length>1;i!==this.legend.allowSelect&&(this.legend.allowSelect=i),this.legend.refresh()},_updateMinMaxLegend:function(){var e=this._currentSeries.filter((function(e){return!e.isComparisonSeries}));this.legend.refresh(e,this._currentVisualProperties)},_destroyLegend:function(){this.legend&&this.legend.destroy(),this.legend=null}})}));