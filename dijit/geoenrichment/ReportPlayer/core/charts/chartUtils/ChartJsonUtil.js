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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","./ThemeCalculator","./ChartTypes","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,i,l){var a={};return a.getDefaultChartSettings=function(l){l=l||{};var a=e.mixin({},l.font),n={isChart:!0,type:l.chartType||i.COLUMN,seriesItems:[],visualProperties:{width:l.width||400,height:l.height||300,barBorders:!1,dataLabels:"None",view3D:!1,origin:0,lineThickness:t.DEFAULT_LINE_THICKNESS,columnThickness:t.DEFAULT_COLUMN_THICKNESS,dataLabelsStyle:e.mixin({},a),dataLabelsDecimals:0,backgroundColor:null,title:{text:"",align:"center",style:e.mixin({},a)},xAxis:{show:!0,showTicks:!0,style:e.mixin({},a),title:"",gridLines:!1,gridLinesCentered:!1,titleStyle:e.mixin({},a),labelsAngle:0,placement:void 0},yAxis:{show:!0,showTicks:!0,style:e.mixin({},a),title:"",gridLines:!1,gridLinesCentered:!1,titleStyle:e.mixin({},a),labelsAngle:0,placement:void 0},legend:{hasBorder:!0,labelParts:"Label",placement:"Right",placementOffset:10,style:e.mixin({},a)}}};return n.isMultiFeatureChart=!!l.isMultiFeatureChart,e.mixin(n.visualProperties,{backgroundImageData:null,donutHolePercent:t.DEFAULT_DONUT_HOLE_PERCENT,donutGap:t.DEFAULT_DONUT_GAP,ringBackgroundColor:null,isStacked:!1,dataLabelsInside:!1,dataLabelsStackedInColumns:!1,chartIcons:null,floatingIcons:null,showAxisIcons:!1,showChartIcons:!1,floatingTexts:null,sorting:void 0,conditionalStyling:null}),n.visualProperties.xAxis.gridLinesOpacity=1,n.visualProperties.yAxis.gridLinesOpacity=1,n},a.provideDefaultValueForMissing=function(e,t){var i=a.getDefaultChartSettings(t);l.populateObject(e,i)},a.createChartPoint=function(e,t,i,l,a){var n={color:e,label:t,fieldName:i};return l&&(l.isScript?n.script=l:n.calculator=a.calculatorToStatefulName(l)),n},a});