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

define(["dojo/_base/lang"],function(e){var t={createChart:function(t,s,a,l,i,n){var r=i[0].points?i:[{label:"",points:i}];return{isChart:!0,type:t||"Bar",seriesItems:r,visualProperties:e.mixin({width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:"Large",dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:s,align:"center",style:{}},xAxis:{show:!0,showTicks:!0,style:{},title:a||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},yAxis:{show:!0,showTicks:!0,style:{},title:l||"",gridLines:!1,gridLinesCentered:!1,titleStyle:{},labelsAngle:0},legend:{hasBorder:!0,labelParts:"Label",placement:1==r.length?"None":"Bottom",placementOffset:10,style:{}},isStacked:!1,dataLabelsInside:!1},n)}},createDonutChart:function(e,t){return{isChart:!0,type:"Donut",seriesItems:[{points:t}],visualProperties:{width:100,height:100,barBorders:!1,dataLabels:"Value",view3D:!1,origin:0,lineThickness:1,columnThickness:"Medium",dataLabelsStyle:{},dataLabelsDecimals:0,backgroundColor:null,title:{text:e||"",align:"center",style:{}},xAxis:{show:!0},yAxis:{show:!0},legend:{hasBorder:!0,labelParts:"Label",placement:"Bottom",placementOffset:10,style:{}},donutHolePercent:50,donutGap:15,dataLabelsInside:!1,dataLabelsStackedInColumns:!0}}}};return t});