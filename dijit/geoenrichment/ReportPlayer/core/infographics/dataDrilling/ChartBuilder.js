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

define(["dojo/_base/lang","../../charts/chartUtils/ChartJsonUtil","../infographicUtils/InfographicJsonUtil","../../charts/chartUtils/ChartTypes","./EnrichUtil"],function(e,t,a,s,l){var i={createChart:function(i){var n=i.type||s.BAR,r=i.title,o=i.xAxisTitle,h=i.yAxisTitle,c=i.seriesItems||[{label:"",points:i.points}],d=i.visualProps,u=i.disableComparisonInfo||1!==c.length||!s.isComparisonEnabled(n),g={isChart:!0,type:n,seriesItems:c,visualProperties:e.mixin({width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:"Large",dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:r,align:"center",style:{}},xAxis:{show:!0,showTicks:!0,showLine:!0,style:{},title:o||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},yAxis:{show:!0,showTicks:!0,showLine:!0,style:{},title:h||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},legend:{hasBorder:!0,labelParts:"Label",placement:1===c.length?"None":"Bottom",placementOffset:10,style:{}},isStacked:!1,dataLabelsInside:!1},d),comparisonInfo:u?null:{levels:a.getDefaultLevels(),calculatorName:null,chartType:s.LINE}};return l.buildCalculatorNameForChart(g),t.provideDefaultValueForMissing(g)},createDonutChart:function(e){return this._createRoundChart(s.DONUT,e)},createGaugeChart:function(e){return e.points.length.length=1,this._createRoundChart(s.GAUGE,e)},_createRoundChart:function(e,a){var l=a.title,i=a.points,n={isChart:!0,type:e,seriesItems:[{points:i}],visualProperties:{width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:"Medium",dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:l||"",align:"center",style:{}},xAxis:{show:!0},yAxis:{show:!0},legend:{hasBorder:!0,labelParts:"Label",placement:e===s.GAUGE?"None":"Bottom",placementOffset:10,style:{}},donutHolePercent:50,donutGap:3,dataLabelsInside:!1,dataLabelsStackedInColumns:!0}};return t.provideDefaultValueForMissing(n)}};return i});