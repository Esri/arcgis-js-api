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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","../../utils/InfographicJsonUtil","../../../charts/utils/ChartJsonUtil","../../../charts/utils/ChartTypes","../../../charts/utils/ChartBarThickness","../../../charts/legends/ChartLegendTypes","./EnrichUtil"],function(e,t,a,s,i,l,n){return{createChart:function(r){var o=r.type||s.BAR,h=r.title,d=r.seriesItems||[{label:"",points:r.points}],u=r.visualProps,c=1!==d.length||!s.isComparisonEnabled(o),g={isChart:!0,type:o,seriesItems:d,visualProperties:e.mixin({width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:i.LARGE,dataLabelsStyle:{fontSize:12},dataLabelsDecimals:0,backgroundColor:null,title:{text:h,align:"center",style:{fontSize:16}},xAxis:{show:!0,showTicks:!0,style:{fontSize:12},title:"",gridLines:!1,gridLinesCentered:!1,titleStyle:{fontSize:13},labelsAngle:0},yAxis:{show:!0,showTicks:!0,style:{fontSize:12},title:"",gridLines:!1,gridLinesCentered:!1,titleStyle:{fontSize:13},labelsAngle:0},legend:{type:l.SERIES,series:{hasBorder:!0,labelParts:"Label",placement:1===d.length?"None":"Bottom",placementOffset:10,style:{fontSize:12}},minMax:{}},isStacked:!1,dataLabelsInside:!1},u),comparisonInfo:c?null:{levels:t.getDefaultLevels(),calculatorName:null,chartType:s.LINE}};return n.buildCalculatorNameForChart(g),a.provideDefaultValueForMissing(g)},createDonutChart:function(e){return this._createRoundChart(s.DONUT,e)},createGaugeChart:function(e){return e.points.length.length=1,this._createRoundChart(s.GAUGE,e)},_createRoundChart:function(e,t){var i=t.title,n=t.points,r={isChart:!0,type:e,seriesItems:[{points:n}],visualProperties:{width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,dataLabelsStyle:{fontSize:12},dataLabelsDecimals:0,backgroundColor:null,title:{text:i||"",align:"center",style:{fontSize:16}},xAxis:{show:!0},yAxis:{show:!0},legend:{type:l.SERIES,series:{hasBorder:!0,labelParts:"Label",placement:e===s.GAUGE?"None":"Bottom",placementOffset:10,style:{fontSize:12}},minMax:{}},donutHolePercent:50,donutGap:3,dataLabelsInside:!1,dataLabelsStackedInColumns:!0}};return a.provideDefaultValueForMissing(r)}}});