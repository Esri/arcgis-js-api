// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./chartUtils/ChartTypes","./chartUtils/ChartStyleUtil","esri/dijit/geoenrichment/SelectableLegend"],function(e,t,i,n,s,r,l,d){return e(null,{legend:null,_excludedSeriesHash:null,_createLegend:function(){if(this._excludedSeriesHash={},"None"!==this._currentVisualProperties.legend.placement){var e=n.create("div",null,this.getLegendNode());this.legend=new d(t.mixin({chart:this.chart,allowSelect:!!this.viewModel.dynamicReportInfo&&(r.isColumnBarLike(this._currentChartType)||this._currentChartType===r.LINE),isRtlPlacement:"Left"===this._currentVisualProperties.legend.placement,keepItemsTheSameWidth:!0,onSeriesExclusionChanged:t.hitch(this,this._onSeriesExclusionChanged)},this._getAdditionalLegendParams()),e);var h=this.viewModel.getChartDefaultStyles(this.theme||this.themeContext),o=t.mixin({},h.legendStyle,this._currentVisualProperties.legend.style);s.set(this.legend.domNode,l.getStyleObjWithUnits(o)),this._currentVisualProperties.legend.hasBorder||s.set(this.legend.domNode,"border","none")}var a=this;this._placements.forEach(function(e){i.remove(a.domNode,"legendPlacement"+e)}),i.add(this.domNode,"legendPlacement"+this._currentVisualProperties.legend.placement)},_getAdditionalLegendParams:function(){return null},_onSeriesExclusionChanged:function(e){this._excludedSeriesHash=e,this._updateSeries()},_updateLegend:function(){if(this.legend){this.legend.series=this._currentSeries,this.legend.showSeriesData=1===this._currentSeriesItems.length||r.isRoundChart(this._currentChartType);var e=!!this.viewModel.dynamicReportInfo&&this._currentSeries.length>1;e!==this.legend.allowSelect&&(this.legend.allowSelect=e),this.legend.refresh()}},_updateSeries:function(){},_destroyLegend:function(){this.legend&&this.legend.destroy(),this.legend=null}})});