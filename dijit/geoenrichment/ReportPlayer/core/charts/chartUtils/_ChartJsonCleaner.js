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

define(["dojo/_base/lang","./ChartTypes","./ChartDataLabelsTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements","esri/dijit/geoenrichment/ReportPlayer/core/themes/ReportThemes"],function(e,s,i,t,r,a){var n={};return n.cleanUpJson=function(e,i){if(i=i||{},s.isRoundChart(e.type)&&e.seriesItems.length>1&&(e.seriesItems.length=1,delete e.visualProperties.backgroundImageData),s.isConditionalStylingEnabled(e.type)||delete e.visualProperties.conditionalStyling,s.isSortingEnabled(e.type,e.seriesItems.length)||delete e.visualProperties.sorting,s.isComparisonEnabled(e.type)<e.seriesItems.length&&delete e.comparisonInfo,s.isStackEnabled(e.type,e.seriesItems.length)||delete e.visualProperties.isStacked,s.isRenderInOppositeDirectionsEnabled(e.type,e.seriesItems.length)||delete e.visualProperties.renderColumnBarsInOppositeDirections,s.isShowDataAsWeightEnabled(e.type)||delete e.visualProperties.yAxis.showValuesAsWeightsInSeries,e.visualProperties.legend.type!==t.SERIES||s.isSeriesLegendEnabled(e.type,e.seriesItems.length)||(e.visualProperties.legend.series.placement=r.NONE),2===e.seriesItems.length&&e.comparisonInfo&&(e.visualProperties.showColumnBarBackground=!1,e.visualProperties.isStacked=!1),e.visualProperties.renderColumnBarsInOppositeDirections&&e.visualProperties.isStacked&&(e.visualProperties.renderColumnBarsInOppositeDirections=!0,e.visualProperties.isStacked=!1),(e.visualProperties.isStacked||e.visualProperties.renderColumnBarsInOppositeDirections)&&(e.visualProperties.yAxis.baseLineValue=0),i.applyChartTypeSpecificSettings&&n._applyChartTypeSpecificSettings(e,i.reportStyle),e.type===s.GAUGE){var a=e.seriesItems[0]&&e.seriesItems[0].points&&e.seriesItems[0].points[0];"p"===(a&&a.fieldInfo&&a.fieldInfo.statefulName&&a.fieldInfo.statefulName.charAt(0))&&(delete e.visualProperties.gaugeRangeMin,delete e.visualProperties.gaugeRangeMax)}},n._applyChartTypeSpecificSettings=function(e,n){e.visualProperties.legend.series.hasBorder=n===a.CLASSIC,e.visualProperties.legend.type===t.SERIES&&s.isSeriesLegendEnabled(e.type,e.seriesItems.length)&&(e.visualProperties.legend.series.placement=n===a.CLASSIC||e.seriesItems.length>1||e.type===s.PIE||e.type===s.DONUT?r.RIGHT:r.NONE),e.visualProperties.dataLabels=e.type===s.RING?i.LABEL_VALUE:i.NONE},n});