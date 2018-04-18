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

define(["dojo/_base/lang","../infographicUtils/InfographicJsonUtil","../../charts/chartUtils/ChartJsonUtil","../../charts/chartUtils/ChartTypes","../../charts/chartUtils/ChartBarThickness","../../charts/legends/ChartLegendTypes","./EnrichUtil"],function(e,t,a,s,i,l,n){return{createChart:function(r){var o=r.type||s.BAR,h=r.title,c=r.xAxisTitle,d=r.yAxisTitle,u=r.seriesItems||[{label:"",points:r.points}],g=r.visualProps,p=r.disableComparisonInfo||1!==u.length||!s.isComparisonEnabled(o),b={isChart:!0,type:o,seriesItems:u,visualProperties:e.mixin({width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:i.LARGE,dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:h,align:"center",style:{}},xAxis:{show:!0,showTicks:!0,showLine:!0,style:{},title:c||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},yAxis:{show:!0,showTicks:!0,showLine:!0,style:{},title:d||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},legend:{type:l.SERIES,series:{hasBorder:!0,labelParts:"Label",placement:1===u.length?"None":"Bottom",placementOffset:10,style:{}},minMax:{}},isStacked:!1,dataLabelsInside:!1},g),comparisonInfo:p?null:{levels:t.getDefaultLevels(),calculatorName:null,chartType:s.LINE}};return n.buildCalculatorNameForChart(b),a.provideDefaultValueForMissing(b)},createDonutChart:function(e){return this._createRoundChart(s.DONUT,e)},createGaugeChart:function(e){return e.points.length.length=1,this._createRoundChart(s.GAUGE,e)},_createRoundChart:function(e,t){var i=t.title,n=t.points,r={isChart:!0,type:e,seriesItems:[{points:n}],visualProperties:{width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:i||"",align:"center",style:{}},xAxis:{show:!0},yAxis:{show:!0},legend:{type:l.SERIES,series:{hasBorder:!0,labelParts:"Label",placement:e===s.GAUGE?"None":"Bottom",placementOffset:10,style:{}},minMax:{}},donutHolePercent:50,donutGap:3,dataLabelsInside:!1,dataLabelsStackedInColumns:!0}};return a.provideDefaultValueForMissing(r)}}});