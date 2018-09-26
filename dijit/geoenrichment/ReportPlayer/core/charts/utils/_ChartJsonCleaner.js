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

define(["./ChartTypes","./ChartDataLabelsTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements"],function(e,s,i,t){var a={};return a.cleanUpJson=function(s,n){n=n||{};var r=s.type,l=s.isMultiFeatureChart,o=s.seriesItems.length,p=s.visualProperties;if(e.isRoundChart(r)&&o>1&&(o=s.seriesItems.length=1,delete p.backgroundImageData),e.isConditionalStylingEnabled(r)||delete p.conditionalStyling,e.isSortingEnabled(r,o,l)||delete p.sorting,e.isComparisonEnabled(r,l)<o&&delete s.comparisonInfo,e.isStackEnabled(r,o)||(delete p.fillLineArea,delete p.isStacked,p.lineAreaOpacity=1),e.isRenderInOppositeDirectionsEnabled(r,o,l)||delete p.renderColumnBarsInOppositeDirections,e.isShowDataAsWeightEnabled(r)||delete p.yAxis.showValuesAsWeightsInSeries,p.legend.type!==i.SERIES||e.isSeriesLegendEnabled(r,o,l)||(p.legend.series.placement=t.NONE),2===o&&s.comparisonInfo&&(p.showColumnBarBackground=!1,p.isStacked=!1),p.renderColumnBarsInOppositeDirections&&p.isStacked&&(p.renderColumnBarsInOppositeDirections=!0,p.isStacked=!1),(p.isStacked||p.renderColumnBarsInOppositeDirections)&&(p.yAxis.baseLineValue=0),n.applyChartTypeSpecificSettings&&a._applyChartTypeSpecificSettings(s,n.isGraphicStyle),l&&s.comparisonInfo&&(s.comparisonInfo.chartType=r),r===e.GAUGE){var d=s.seriesItems[0]&&s.seriesItems[0].points&&s.seriesItems[0].points[0];"p"===(d&&d.fieldInfo&&d.fieldInfo.statefulName&&d.fieldInfo.statefulName.charAt(0))&&(delete p.gaugeRangeMin,delete p.gaugeRangeMax),p.gaugeArcPercent>90&&(p.gaugeShowFromToLabels=!1)}},a._applyChartTypeSpecificSettings=function(a,n){if(a.visualProperties.legend.series.hasBorder=!n,a.visualProperties.legend.type===i.SERIES&&e.isSeriesLegendEnabled(a.type,a.seriesItems.length,a.isMultiFeatureChart)){var r;r=!n||a.seriesItems.length>1||a.type===e.PIE||a.type===e.DONUT||a.isMultiFeatureChart?a.isMultiFeatureChart?t.BOTTOM:t.RIGHT:t.NONE,a.visualProperties.legend.series.placement=r}a.visualProperties.dataLabels=a.type===e.RING?s.LABEL_VALUE:s.NONE},a});