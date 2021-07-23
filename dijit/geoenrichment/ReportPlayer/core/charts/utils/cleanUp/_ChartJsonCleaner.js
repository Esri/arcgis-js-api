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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../ChartTypes","../ChartDataLabelsTypes","../../legends/ChartLegendTypes","../../legends/ChartLegendPlacements","./_ChartTypeSupports","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],(function(e,s,t,i,n,o){var r={cleanUpJson:function(r,l,a){var d=r.type,p=r.isMultiFeatureChart,c=r.seriesItems.length,g=r.visualProperties,u=a&&a.isBenchmarked;if(e.isSingleSeries(d)&&c>1&&(c=r.seriesItems.length=1),e.hasBackgroundImage(d)||delete g.backgroundImageData,e.isConditionalStylingSupported(d)||delete g.conditionalStyling,e.isSortingSupported(d,c,p)||delete g.sorting,e.canFilterVariables(d,p)||delete g.filter,e.isComparisonSupported(d,p)<c&&delete r.comparisonInfo,2===c&&r.comparisonInfo&&(g.showColumnBarBackground=!1,g.isStacked=!1,g.showValuesAsWeightInStack=!1),p&&r.comparisonInfo&&(r.comparisonInfo.chartType=d),g.legend&&g.legend.series&&(g.legend.type!==t.SERIES||e.isSeriesLegendSupported(d,c,p,!!r.comparisonInfo&&g.legend.series.showComparison)||(g.legend.series.placement=i.NONE)),e.isRenderInOppositeDirectionsSupported(d,c,p)||delete g.renderColumnBarsInOppositeDirections,e.isStackSupported(d,c,p)||(g.isStacked=!1,g.showValuesAsWeightInStack=!1),g.renderColumnBarsInOppositeDirections&&g.isStacked&&(g.renderColumnBarsInOppositeDirections=!0,g.isStacked=!1,g.showValuesAsWeightInStack=!1),g.isStacked||(g.showValuesAsWeightInStack=!1),g.yAxis&&((g.isStacked||g.renderColumnBarsInOppositeDirections)&&(g.yAxis.baseLineValue=0),e.isShowDataAsWeightSupported(d)&&!g.showValuesAsWeightInStack||delete g.yAxis.showValuesAsWeightsInSeries),e.isPictureLike(d)?r.seriesItems.forEach((function(e){e.points&&e.points.forEach((function(e){delete e.color}))})):r.seriesItems.forEach((function(e){e.points&&e.points.forEach((function(e){delete e.iconFieldInfo}))})),e.isSingleSeries(d)&&r.seriesItems.forEach((function(e){delete e.color})),e.isLineLike(d)&&r.seriesItems.forEach((function(e){p?(delete e.color,delete e.lineThickness,delete e.lineStyle,delete e.lineMarker,delete e.lineMarkerColor,delete e.lineMarkerFillColor,delete e.lineMarkerSize):delete e.multiFeatureLineStyles})),d===e.GAUGE){var h,I;if((h=r.seriesItems[0]&&r.seriesItems[0].points&&r.seriesItems[0].points)&&h.length)h.length=Math.min(2,h.length),h[1]&&delete h[1].fieldInfo,(I=h[0].fieldInfo)&&o.isFieldInfoInPercentState(I)&&(delete g.gaugeRangeMin,delete g.gaugeRangeMax);g.gaugeArcPercent>90&&(g.gaugeShowFromToLabels=!1)}d===e.WAFFLE&&((h=r.seriesItems[0]&&r.seriesItems[0].points&&r.seriesItems[0].points)&&h.length&&(h.length>1&&delete h[h.length-1].fieldInfo,(I=h[0].fieldInfo)&&o.isFieldInfoInPercentState(I)&&(delete g.waffleRangeMin,delete g.waffleRangeMax),h.length>1&&delete h[h.length-1].fieldInfo,h.length>2?delete g.waffleRangeMin:delete g.legend));var f=n.cleanUpJsonForChartType(r,l);return u&&((g=f.visualProperties).renderColumnBarsInOppositeDirections=!1,g.isStacked=!1,g.showValuesAsWeightInStack=!1,g.yAxis&&g.yAxis.showValuesAsWeightsInSeries&&(delete g.yAxis.showValuesAsWeightsInSeries,delete g.yAxis.showPercentSymbol),s.hasPercent(g.dataLabels)&&(g.dataLabels=s.buildType({label:s.hasLabel(g.dataLabels),value:!0})),delete f.comparisonInfo),f},supportsProperty:function(e,s,t){return n.supportsProperty(e,s,t)}};return r}));