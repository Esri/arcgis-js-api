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

define(["dojo/_base/declare","dojo/_base/lang","../ThemeCalculator","../ChartTypes","../ChartSorting","../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../plots/Pie","../plots/Donut","../plots/Gauge","../plots/Ring","./_ChartDataUtil","./_TooltipInfoBuilder","./_ChartDataLabelBuilder","./ChartPlots","dojo/i18n!../../../../../../../nls/jsapi"],function(t,a,e,n,i,l,o,r,s,d,c,u,g,h,p){p=p.geoenrichment.dijit.ReportPlayer.ReportPlayer;var b={configureChart:function(t){var a=t.chart,e=t.visualProperties,n=t.chartType,i=t.themeSettings,l=t.viewModel;a.addPlot(h.PRIMARY,this._createPiePlot(e,i,l,n))},_createPiePlot:function(t,i,l,c){var u,g=-1!==t.dataLabels.indexOf("Label"),h=-1!==t.dataLabels.indexOf("Value"),p=-1!==t.dataLabels.indexOf("Percent"),b=a.mixin({},i.dataLabelsStyle,t.dataLabelsStyle),S=(g||h||p)&&c!==n.GAUGE?{labelStyle:t.dataLabelsStackedInColumns?"columns":t.dataLabelsInside?"inside":"outside",htmlLabels:!0,font:e.combineFontString(b),fontColor:b.color,omitLabels:!t.dataLabelsStackedInColumns}:{labels:!1},f=l.dynamicReportInfo&&l.chartAnimationAllowed?{animate:!0}:null;switch(c){case n.PIE:u=o;break;case n.DONUT:u=r;break;case n.GAUGE:u=s;break;case n.RING:u=d}return u?a.mixin({type:u,fontColor:"black"},S,f):null},calcSeries:function(t){var a,o=(t.chart,t.seriesItems),r=t.chartType,s=t.themeSettings,d=t.viewModel,h=t.visualProperties,S=t.previewFeatureIndex,f=t.sorting,y=[],m=o[0],C={name:"data",data:[]},v=[],P=0,I=1e6,L=-1e6,x=m.points;if(r===n.GAUGE&&1===x.length&&(x=x.slice(),x.push({label:p.gaugeOthers})),this.supportConditionalStyling(r)&&h.conditionalStyling){var E=l.getStatistics(h.conditionalStyling);E&&m&&(a=c.getChartData(E,x.length))}x.forEach(function(t,e){var i;i=r===n.GAUGE&&1===e?Math.max(0,100-v[0]):c.getPreviewValue(t,e,0,!1,d,S,a),v[e]=i,i=i||0,P+=i,I=Math.min(I,i),L=Math.max(L,i)});var G=P/x.length;return x.forEach(function(t,a){var n,i=v[a],d=i||0;if(b.supportConditionalStyling(r)&&h.conditionalStyling){var c=l.getConditionalStyle(d,h.conditionalStyling);n=c&&c.backgroundColor}n=n||e.calcColorForPoint(t,m,a,0,o.length,r,s),C.data.push({x:1,y:Math.max(1e-4,d),isUnavailableData:isNaN(i),valueProp:"y",unsortedIndex:a,name:t.label,point:t,fill:n,text:g.formatDataLabel(d,t.label,P,h,r),tooltip:u.getTooltipInfo(i,t.label,null,I,L,P,G,h,r,n,h.conditionalStyling),stroke:{width:0}})}),this.supportsSorting(r)&&f&&f!==i.NONE&&C.data.sort(function(t,a){return(t.y-a.y)*(f===i.DESC?-1:1)}),y.push(C),y},supportConditionalStyling:function(t){return n.isConditionalStylingEnabled(t)},supportsSorting:function(t){return n.isSortingEnabled(t)},getFullSeriesItems:function(t){return t.seriesItems}};return b});