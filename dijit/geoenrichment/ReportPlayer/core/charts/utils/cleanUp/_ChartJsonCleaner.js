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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../ChartTypes","../../legends/ChartLegendTypes","../../legends/ChartLegendPlacements","./_ChartTypeSupports","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,n,s,i,t){var l={};return l.cleanUpJson=function(l,a){var o=l.type,r=l.isMultiFeatureChart,d=l.seriesItems.length,c=l.visualProperties;if(e.isSingleSeries(o)&&d>1&&(d=l.seriesItems.length=1),e.hasBackgroundImage(o)||delete c.backgroundImageData,e.isConditionalStylingEnabled(o)||delete c.conditionalStyling,e.isSortingEnabled(o,d,r)||delete c.sorting,e.canFilterVariables(o,r)||delete c.filter,e.isComparisonEnabled(o,r)<d&&delete l.comparisonInfo,2===d&&l.comparisonInfo&&(c.showColumnBarBackground=!1,c.isStacked=!1,c.showValuesAsWeightInStack=!1),r&&l.comparisonInfo&&(l.comparisonInfo.chartType=o),c.legend&&c.legend.series&&(c.legend.type!==n.SERIES||e.isSeriesLegendEnabled(o,d,r,!!l.comparisonInfo&&c.legend.series.showComparison)||(c.legend.series.placement=s.NONE)),e.isRenderInOppositeDirectionsEnabled(o,d,r)||delete c.renderColumnBarsInOppositeDirections,e.isStackEnabled(o,d)||(c.fillLineArea=!1,c.isStacked=!1,c.showValuesAsWeightInStack=!1,c.lineAreaOpacity=1),c.renderColumnBarsInOppositeDirections&&c.isStacked&&(c.renderColumnBarsInOppositeDirections=!0,c.isStacked=!1,c.showValuesAsWeightInStack=!1),c.isStacked||(c.showValuesAsWeightInStack=!1),c.yAxis&&((c.isStacked||c.renderColumnBarsInOppositeDirections)&&(c.yAxis.baseLineValue=0),e.isShowDataAsWeightEnabled(o)&&!c.showValuesAsWeightInStack||delete c.yAxis.showValuesAsWeightsInSeries),e.isPictureLike(o)?l.seriesItems.forEach(function(e){e.points&&e.points.forEach(function(e){delete e.color})}):l.seriesItems.forEach(function(e){e.points&&e.points.forEach(function(e){delete e.iconFieldInfo})}),e.isSingleSeries(o)&&l.seriesItems.forEach(function(e){delete e.color}),e.isLineLike(o)&&l.seriesItems.forEach(function(e){r?(delete e.color,delete e.lineThickness,delete e.lineStyle,delete e.lineMarker):delete e.multiFeatureLineStyles}),o===e.GAUGE){var g=l.seriesItems[0]&&l.seriesItems[0].points&&l.seriesItems[0].points;if(g&&g.length){g.length=Math.min(2,g.length),g[1]&&delete g[1].fieldInfo;var f=g[0].fieldInfo;f&&t.isFieldInfoInPercentState(f)&&(delete c.gaugeRangeMin,delete c.gaugeRangeMax)}c.gaugeArcPercent>90&&(c.gaugeShowFromToLabels=!1)}if(o===e.WAFFLE){var g=l.seriesItems[0]&&l.seriesItems[0].points&&l.seriesItems[0].points;if(g&&g.length){g.length>1&&delete g[g.length-1].fieldInfo;var f=g[0].fieldInfo;f&&t.isFieldInfoInPercentState(f)&&(delete c.waffleRangeMin,delete c.waffleRangeMax),g.length>1&&delete g[g.length-1].fieldInfo;g.length>2?delete c.waffleRangeMin:delete c.legend}}return i.cleanUpJsonForChartType(l,a)},l.supportsVisualProperty=function(e,n,s){return i.supportsVisualProperty(e,n,s)},l});