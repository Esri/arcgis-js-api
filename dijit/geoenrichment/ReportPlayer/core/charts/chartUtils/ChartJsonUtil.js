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

define(["dojo/_base/lang","./ThemeCalculator","./ChartTypes","esri/dijit/geoenrichment/utils/ObjectUtil","./plots/supportClasses/GaugeLabelPlacement"],function(e,i,t,n,l){var a={};return a.getDefaultChartSettings=function(n){n=n||{};var a=e.mixin({},n.font),o=e.mixin({},n.font);delete o.fontSize;var r={isChart:!0,type:n.chartType||t.COLUMN,seriesItems:[],visualProperties:{width:n.width||400,height:n.height||300,barBorders:!1,dataLabels:"None",view3D:!1,origin:0,lineThickness:i.DEFAULT_LINE_THICKNESS,columnThickness:i.DEFAULT_COLUMN_THICKNESS,dataLabelsStyle:e.mixin({},a),dataLabelsDecimals:0,backgroundColor:null,title:{text:"",align:"center",style:e.mixin({},a)},xAxis:{show:!0,showTicks:!0,ticksInside:!1,showLine:!0,title:"",titleStyle:e.mixin({},a),style:e.mixin({},a),labelsAngle:0,lineColor:void 0,gridLines:!1,gridLinesCentered:!1,gridLinesOpacity:1,placement:void 0},yAxis:{show:!0,showTicks:!0,ticksInside:!1,showLine:!0,title:"",titleStyle:e.mixin({},a),style:e.mixin({},a),labelsAngle:0,lineColor:void 0,gridLines:!1,gridLinesCentered:!1,gridLinesOpacity:1,placement:void 0},legend:{hasBorder:!0,labelParts:"Label",placement:"Right",placementOffset:10,style:e.mixin({},a)}},comparisonInfo:null};return r.isMultiFeatureChart=!!n.isMultiFeatureChart,e.mixin(r.visualProperties,{backgroundImageData:null,isStacked:!1,showColumnBarBackground:!1,columnBarBackgroundColor:null,fillLineArea:!1,donutHolePercent:i.DEFAULT_DONUT_HOLE_PERCENT,donutGap:i.DEFAULT_DONUT_GAP,donutArcPercent:i.DEFAULT_DONUT_ARC_PERCENT,gaugeHolePercent:i.DEFAULT_GAUGE_HOLE_PERCENT,gaugeGap:i.DEFAULT_GAUGE_GAP,gaugeStartAngle:i.DEFAULT_GAUGE_ANGLE,gaugeArcPercent:i.DEFAULT_GAUGE_ARC_PERCENT,gaugeLabelPlacement:l.INSIDE,gaugeLabelStyle:e.mixin({},o),gaugeShowArrow:!1,gaugeArrowLineColor:null,gaugeArrowFillColor:null,ringBackgroundColor:null,showWholePictures:!1,dataLabelsInside:!1,dataLabelsStackedInColumns:!1,dataLabelsHorizontalAlign:null,chartIcons:null,floatingIcons:null,showAxisIcons:!1,showChartIcons:!1,floatingTexts:null,sorting:void 0,conditionalStyling:null}),r},a.provideDefaultValueForMissing=function(e,i){var t=a.getDefaultChartSettings(i);return n.populateObject(e,t),e},a.createChartPoint=function(e,i,t,n,l){return{color:t||"",label:i||e&&e.alias,fieldInfo:e,iconFieldInfo:n,captionFieldInfo:l}},a});