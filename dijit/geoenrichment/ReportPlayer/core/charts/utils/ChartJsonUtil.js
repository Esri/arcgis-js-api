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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","./ThemeCalculator","./ChartTypes","./ChartDataLabelsTypes","../legends/ChartLegendPlacements","../legends/ChartLegendTypes","./_ChartJsonCleaner","./_ChartJsonClassicReportSupports","esri/dijit/geoenrichment/utils/ObjectUtil","./plots/supportClasses/GaugeLabelPlacement"],function(e,i,t,n,o,a,r,l,s,d){var g={};return g.getDefaultChartSettings=function(r){r=r||{};var l=e.mixin({},r.font),s=e.mixin({},r.font);return delete s.fontSize,{isChart:!0,type:r.chartType||t.COLUMN,isMultiFeatureChart:!!r.isMultiFeatureChart,seriesItems:[],visualProperties:{width:r.width||400,height:r.height||300,barBorders:!1,view3D:!1,origin:0,backgroundColor:void 0,backgroundImageData:void 0,panelBackgroundColor:void 0,title:{text:"",align:"center",style:e.mixin({},l)},xAxis:{show:!0,showTicks:!0,ticksInside:!1,showLine:!0,title:"",titleStyle:e.mixin({},l),style:e.mixin({},l),labelsAngle:0,lineColor:void 0,gridLines:!1,gridLinesCentered:!1,gridLinesColor:void 0,gridLinesOpacity:1,gridLinesThickness:.5,gridLinesStyle:void 0,gridStripes:!1,gridStripesColor:void 0,gridStripesColorAlt:void 0,placement:void 0},yAxis:{show:!0,showTicks:!0,ticksInside:!1,showLine:!0,title:"",titleStyle:e.mixin({},l),style:e.mixin({},l),labelsAngle:0,lineColor:void 0,gridLines:!1,gridLinesCentered:!1,gridLinesColor:void 0,gridLinesOpacity:1,gridLinesThickness:.5,gridLinesStyle:void 0,gridStripes:!1,gridStripesColor:void 0,gridStripesColorAlt:void 0,baseLine:!0,baseLineColor:void 0,baseLineOpacity:1,baseLineThickness:.5,baseLineStyle:void 0,baseLineValue:0,showPercentIndicator:!1,showValuesAsWeightsInSeries:!1,placement:void 0},legend:{type:a.SERIES,series:{placement:o.RIGHT,placementOffset:10,hasBorder:!0,labelParts:"Label",style:e.mixin({},l)},minMax:{placement:o.RIGHT,placementOffset:3,titleStyle:e.mixin({},s),minVariableLabelStyle:e.mixin({},s),maxVariableLabelStyle:e.mixin({},s)}},isStacked:!1,columnThickness:i.DEFAULT_COLUMN_THICKNESS,showColumnBarBackground:!1,columnBarBackgroundColor:void 0,renderColumnBarsInOppositeDirections:!1,columnBarGap:void 0,lineThickness:i.DEFAULT_LINE_THICKNESS,fillLineArea:!1,lineAreaOpacity:1,donutHolePercent:i.DEFAULT_DONUT_HOLE_PERCENT,donutGap:i.DEFAULT_DONUT_GAP,donutArcPercent:i.DEFAULT_DONUT_ARC_PERCENT,gaugeHolePercent:i.DEFAULT_GAUGE_HOLE_PERCENT,gaugeRangeMin:void 0,gaugeRangeMax:void 0,gaugeGap:i.DEFAULT_GAUGE_GAP,gaugeStartAngle:i.DEFAULT_GAUGE_ANGLE,gaugeArcPercent:i.DEFAULT_GAUGE_ARC_PERCENT,gaugeLabelPlacement:d.INSIDE,gaugeLabelStyle:e.mixin({},s),gaugeShowArrow:!1,gaugeArrowLineColor:void 0,gaugeArrowFillColor:void 0,gaugeConditionalStylingIgnoreOthers:!1,gaugeConditionalStylingLabel:!1,ringBackgroundColor:void 0,showWholePictures:!1,dataLabels:n.NONE,dataLabelsStyle:e.mixin({},l),dataLabelsDecimals:0,dataLabelsInside:!1,dataLabelsStackedInColumns:!1,dataLabelsHorizontalAlign:void 0,chartIcons:void 0,floatingIcons:void 0,showAxisIcons:!1,showChartIcons:!1,floatingTexts:void 0,sorting:void 0,conditionalStyling:void 0},comparisonInfo:void 0}},g.provideDefaultValueForMissing=function(e,i){var t=g.getDefaultChartSettings(i);return s.populateObject(e,t),e},g.cleanUpJson=function(e,i){r.cleanUpJson(e,i)},g.filterChartJsonForClassicReport=function(e){return s.filterByPattern(e,l)},g.createChartPoint=function(e,i,t,n,o){return{color:t||"",label:i||e&&e.alias,fieldInfo:e,iconFieldInfo:n,captionFieldInfo:o}},g});