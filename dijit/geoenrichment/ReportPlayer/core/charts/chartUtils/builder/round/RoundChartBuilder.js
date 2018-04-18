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

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartTypes","../../plots/Pie","../../plots/Donut","../../plots/Gauge","../../plots/Ring","../ChartPlots","./_RoundChartSeriesCalculator"],function(e,a,t,l,n,o,s,i,r){return{configureChart:function(e){var a=e.chart,t=e.visualProperties,l=e.chartType,n=e.themeSettings,o=e.viewModel;a.addPlot(i.PRIMARY,this._createPiePlot(t,n,o,l))},_createPiePlot:function(i,r,c,d){var u,b=-1!==i.dataLabels.indexOf("Label"),m=-1!==i.dataLabels.indexOf("Value"),f=-1!==i.dataLabels.indexOf("Percent"),h=e.mixin({},r.dataLabelsStyle,i.dataLabelsStyle),L=(b||m||f)&&d!==t.GAUGE?{labelStyle:i.dataLabelsStackedInColumns?"columns":i.dataLabelsInside?"inside":"outside",htmlLabels:!0,font:a.combineFontString(h),fontColor:h.color,omitLabels:!i.dataLabelsStackedInColumns}:{labels:!1},P=c.dynamicReportInfo&&c.chartAnimationAllowed?{animate:!0}:null;switch(d){case t.PIE:u=l;break;case t.DONUT:u=n;break;case t.GAUGE:u=o;break;case t.RING:u=s}return u?e.mixin({type:u,fontColor:"black"},L,P):null},calcSeries:function(e){return r.calcSeries(e)},getFullSeriesItems:function(e){return e.seriesItems}}});