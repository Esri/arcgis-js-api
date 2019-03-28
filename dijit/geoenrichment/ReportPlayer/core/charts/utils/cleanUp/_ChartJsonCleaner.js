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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../ChartTypes","../../legends/ChartLegendTypes","../../legends/ChartLegendPlacements","./_ChartTypeSupports","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,n,s,i,t){var o={};return o.cleanUpJson=function(o,r){var l=o.type,a=o.isMultiFeatureChart,d=o.seriesItems.length,g=o.visualProperties;if(e.isSingleSeries(l)&&d>1&&(d=o.seriesItems.length=1),e.hasBackgroundImage(l)||delete g.backgroundImageData,e.isConditionalStylingEnabled(l)||delete g.conditionalStyling,e.isSortingEnabled(l,d,a)||delete g.sorting,e.isComparisonEnabled(l,a)<d&&delete o.comparisonInfo,2===d&&o.comparisonInfo&&(g.showColumnBarBackground=!1,g.isStacked=!1),a&&o.comparisonInfo&&(o.comparisonInfo.chartType=l),g.legend&&g.legend.series&&(g.legend.type!==n.SERIES||e.isSeriesLegendEnabled(l,d,a,!!o.comparisonInfo&&g.legend.series.showComparison)||(g.legend.series.placement=s.NONE)),e.isRenderInOppositeDirectionsEnabled(l,d,a)||delete g.renderColumnBarsInOppositeDirections,e.isStackEnabled(l,d)||(delete g.fillLineArea,delete g.isStacked,g.lineAreaOpacity=1),g.renderColumnBarsInOppositeDirections&&g.isStacked&&(g.renderColumnBarsInOppositeDirections=!0,g.isStacked=!1),g.yAxis&&((g.isStacked||g.renderColumnBarsInOppositeDirections)&&(g.yAxis.baseLineValue=0),e.isShowDataAsWeightEnabled(l)||delete g.yAxis.showValuesAsWeightsInSeries),e.isPictureLike(l)?o.seriesItems.forEach(function(e){e.points&&e.points.forEach(function(e){delete e.color})}):o.seriesItems.forEach(function(e){e.points&&e.points.forEach(function(e){delete e.iconFieldInfo})}),e.isSingleSeries(l)&&o.seriesItems.forEach(function(e){delete e.color}),l===e.GAUGE){var p=o.seriesItems[0]&&o.seriesItems[0].points&&o.seriesItems[0].points;if(p&&p.length){p.length=Math.min(2,p.length),p[1]&&delete p[1].fieldInfo;var c=p[0].fieldInfo;c&&t.isFieldInfoInPercentState(c)&&(delete g.gaugeRangeMin,delete g.gaugeRangeMax)}g.gaugeArcPercent>90&&(g.gaugeShowFromToLabels=!1)}if(l===e.WAFFLE){var p=o.seriesItems[0]&&o.seriesItems[0].points&&o.seriesItems[0].points;if(p&&p.length){p.length>1&&delete p[p.length-1].fieldInfo;var c=p[0].fieldInfo;c&&t.isFieldInfoInPercentState(c)&&(delete g.waffleRangeMin,delete g.waffleRangeMax),p.length>1&&delete p[p.length-1].fieldInfo;p.length>2?delete g.waffleRangeMin:delete g.legend}}return i.cleanUpJsonForChartType(o,r)},o.supportsVisualProperty=function(e,n,s){return i.supportsVisualProperty(e,n,s)},o});