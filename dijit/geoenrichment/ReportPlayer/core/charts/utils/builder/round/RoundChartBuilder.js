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

define(["dojo/_base/declare","dojo/_base/lang","../../ThemeCalculator","../../ChartTypes","../../plots/Pie","../../plots/Donut","../../plots/Gauge","../../plots/Ring","../../plots/_TouchPlotEvents","../ChartPlots","./_RoundChartSeriesCalculator","./_GaugeChartSeriesCalculator"],function(e,a,t,l,o,n,s,r,i,c,d,u){return{configureChart:function(e){var a=e.chart,t=e.visualProperties,l=e.chartType,o=e.themeSettings,n=e.viewModel;a.addPlot(c.PRIMARY,this._createPiePlot(t,o,n,l))},_createPiePlot:function(c,d,u,b){var h,f=-1!==c.dataLabels.indexOf("Label"),m=-1!==c.dataLabels.indexOf("Value"),C=-1!==c.dataLabels.indexOf("Percent"),P=a.mixin({},d.dataLabelsStyle,c.dataLabelsStyle),S=(f||m||C)&&b!==l.GAUGE?{labelStyle:c.dataLabelsStackedInColumns?"columns":c.dataLabelsInside?"inside":"outside",htmlLabels:!0,font:t.combineFontString(P),fontColor:P.color,omitLabels:!c.dataLabelsStackedInColumns}:{labels:!1},p=u.dynamicReportInfo&&u.animationAllowed?{animate:!0}:null;switch(b){case l.PIE:h=o;break;case l.DONUT:h=n;break;case l.GAUGE:h=s;break;case l.RING:h=r}return h?(h=e([h,i]),a.mixin({type:h,fontColor:"black"},S,p)):null},calcSeries:function(e){switch(e.chartType){case l.GAUGE:return u.calcSeries(e);default:return d.calcSeries(e)}}}});