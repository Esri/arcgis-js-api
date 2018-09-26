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

define(["dojo/_base/lang","../utils/InfographicJsonUtil","../../charts/utils/ChartJsonUtil","../../charts/utils/ChartTypes","../../charts/utils/ChartBarThickness","../../charts/legends/ChartLegendTypes","./EnrichUtil"],function(e,t,s,a,l,i,n){return{createChart:function(r){var o=r.type||a.BAR,h=r.title,d=r.xAxisTitle,u=r.yAxisTitle,c=r.seriesItems||[{label:"",points:r.points}],g=r.visualProps,p=r.disableComparisonInfo||1!==c.length||!a.isComparisonEnabled(o),b={isChart:!0,type:o,seriesItems:c,visualProperties:e.mixin({width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:l.LARGE,dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:h,align:"center",style:{}},xAxis:{show:!0,showTicks:!0,showLine:!0,style:{},title:d||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},yAxis:{show:!0,showTicks:!0,showLine:!0,style:{},title:u||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},legend:{type:i.SERIES,series:{hasBorder:!0,labelParts:"Label",placement:1===c.length?"None":"Bottom",placementOffset:10,style:{}},minMax:{}},isStacked:!1,dataLabelsInside:!1},g),comparisonInfo:p?null:{levels:t.getDefaultLevels(),calculatorName:null,chartType:a.LINE}};return n.buildCalculatorNameForChart(b),s.provideDefaultValueForMissing(b)},createDonutChart:function(e){return this._createRoundChart(a.DONUT,e)},createGaugeChart:function(e){return e.points.length.length=1,this._createRoundChart(a.GAUGE,e)},_createRoundChart:function(e,t){var l=t.title,n=t.points,r={isChart:!0,type:e,seriesItems:[{points:n}],visualProperties:{width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:l||"",align:"center",style:{}},xAxis:{show:!0},yAxis:{show:!0},legend:{type:i.SERIES,series:{hasBorder:!0,labelParts:"Label",placement:e===a.GAUGE?"None":"Bottom",placementOffset:10,style:{}},minMax:{}},donutHolePercent:50,donutGap:3,dataLabelsInside:!1,dataLabelsStackedInColumns:!0}};return s.provideDefaultValueForMissing(r)}}});