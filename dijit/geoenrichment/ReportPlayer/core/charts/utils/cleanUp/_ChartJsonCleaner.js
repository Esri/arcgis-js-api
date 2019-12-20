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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../ChartTypes","../../legends/ChartLegendTypes","../../legends/ChartLegendPlacements","./_ChartTypeSupports","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,s,t,i,n){var r={};return r.cleanUpJson=function(r,o,l){var a=r.type,d=r.isMultiFeatureChart,p=r.seriesItems.length,c=r.visualProperties,g=l&&l.isBenchmarked;if(e.isSingleSeries(a)&&p>1&&(p=r.seriesItems.length=1),e.hasBackgroundImage(a)||delete c.backgroundImageData,e.isConditionalStylingSupported(a)||delete c.conditionalStyling,e.isSortingSupported(a,p,d)||delete c.sorting,e.canFilterVariables(a,d)||delete c.filter,e.isComparisonSupported(a,d)<p&&delete r.comparisonInfo,2===p&&r.comparisonInfo&&(c.showColumnBarBackground=!1,c.isStacked=!1,c.showValuesAsWeightInStack=!1),d&&r.comparisonInfo&&(r.comparisonInfo.chartType=a),c.legend&&c.legend.series&&(c.legend.type!==s.SERIES||e.isSeriesLegendSupported(a,p,d,!!r.comparisonInfo&&c.legend.series.showComparison)||(c.legend.series.placement=t.NONE)),e.isRenderInOppositeDirectionsSupported(a,p,d)||delete c.renderColumnBarsInOppositeDirections,e.isStackSupported(a,p,d)||(c.isStacked=!1,c.showValuesAsWeightInStack=!1),c.renderColumnBarsInOppositeDirections&&c.isStacked&&(c.renderColumnBarsInOppositeDirections=!0,c.isStacked=!1,c.showValuesAsWeightInStack=!1),c.isStacked||(c.showValuesAsWeightInStack=!1),c.yAxis&&((c.isStacked||c.renderColumnBarsInOppositeDirections)&&(c.yAxis.baseLineValue=0),e.isShowDataAsWeightSupported(a)&&!c.showValuesAsWeightInStack||delete c.yAxis.showValuesAsWeightsInSeries),e.isPictureLike(a)?r.seriesItems.forEach(function(e){e.points&&e.points.forEach(function(e){delete e.color})}):r.seriesItems.forEach(function(e){e.points&&e.points.forEach(function(e){delete e.iconFieldInfo})}),e.isSingleSeries(a)&&r.seriesItems.forEach(function(e){delete e.color}),e.isLineLike(a)&&r.seriesItems.forEach(function(e){d?(delete e.color,delete e.lineThickness,delete e.lineStyle,delete e.lineMarker,delete e.lineMarkerColor,delete e.lineMarkerFillColor,delete e.lineMarkerSize):delete e.multiFeatureLineStyles}),a===e.GAUGE){var u=r.seriesItems[0]&&r.seriesItems[0].points&&r.seriesItems[0].points;if(u&&u.length){u.length=Math.min(2,u.length),u[1]&&delete u[1].fieldInfo;var h=u[0].fieldInfo;h&&n.isFieldInfoInPercentState(h)&&(delete c.gaugeRangeMin,delete c.gaugeRangeMax)}c.gaugeArcPercent>90&&(c.gaugeShowFromToLabels=!1)}if(a===e.WAFFLE){var u=r.seriesItems[0]&&r.seriesItems[0].points&&r.seriesItems[0].points;if(u&&u.length){u.length>1&&delete u[u.length-1].fieldInfo;var h=u[0].fieldInfo;h&&n.isFieldInfoInPercentState(h)&&(delete c.waffleRangeMin,delete c.waffleRangeMax),u.length>1&&delete u[u.length-1].fieldInfo;u.length>2?delete c.waffleRangeMin:delete c.legend}}var f=i.cleanUpJsonForChartType(r,o);return g&&(c=f.visualProperties,c.renderColumnBarsInOppositeDirections=!1,c.isStacked=!1,c.showValuesAsWeightInStack=!1,c.yAxis&&c.yAxis.showValuesAsWeightsInSeries&&(delete c.yAxis.showValuesAsWeightsInSeries,delete c.yAxis.showPercentSymbol)),f},r.supportsVisualProperty=function(e,s,t){return i.supportsVisualProperty(e,s,t)},r});