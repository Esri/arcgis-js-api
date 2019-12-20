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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../sections/dynamicSettings/supportClasses/FilterUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,a,i,n,l,r,o,s,u){u=u.geoenrichment.dijit.ReportPlayer.ChartContainer;var c={calcLineStyle:function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness||0,style:i.toGFXValue(t.outlineStyle||i.SOLID)}}};return{calcSeries:function(i){var l=i.seriesItems,r=i.chartType,u=i.themeSettings,d=i.visualProperties,h=i.sorting;if(!l.length)return[];var m=l[0],S=[],p={name:"data",data:[]};if(S.push(p),!m.points.length)return S;var g=this._calcStats(i);return m.points.forEach(function(a,i){if(!a.hidden){var h,S=g.values[i],v=S.value,y=v||0;if(t.isConditionalStylingSupported(r)&&d.conditionalStyling){var f=n.getConditionalStyle(S.isBenchmarked?S.ownValue:y,d.conditionalStyling);h=f&&f.backgroundColor}h=h||e.calcColorForPoint({point:a,seriesItem:m,pointIndex:i,seriesIndex:0,numSeries:l.length,chartType:r,themeSettings:u});var V=c.calcLineStyle(h,d);h=d.fillOpacity<1?s.getColorWithAlpha(h,d.fillOpacity):h;var I={originalValue:v,x:1,y:t.supportsNegativeValues(r)?y:Math.max(1e-4,y),isUnavailableData:isNaN(v),valueProp:"y",unsortedIndex:i,name:a.label,point:a,fill:h,valuesSumsInSeries:g.absValuesSum,seriesIndex:0,stroke:{color:V.color,width:V.width,style:V.style},isBenchmarked:S.isBenchmarked,unbenchmarkedValue:S.ownValue,unbenchmarkedValuesSumsInSeries:g.unbenchmarkedAbsValuesSum},C=o.getTooltipInfo({yValue:v,pointLabel:a.label,seriesLabel:null,minInSeriesValue:g.minValue,maxInSeriesValue:g.maxValue,sumInSeriesValue:g.valuesSum,absSumInSeriesValue:g.absValuesSum,avgInSeriesValue:g.avgValue,visualProperties:d,chartType:r,conditionalStyling:d.conditionalStyling,fieldInfo:a.fieldInfo,decimals:a.value&&a.value.decimals,fill:I.fill,stroke:I.stroke.width>0?I.stroke.color:void 0,isBenchmarked:S.isBenchmarked,unbenchmarkedValue:S.ownValue});I.tooltip=C,p.data.push(I)}}),t.isSortingSupported(r)&&h&&h!==a.NONE&&p.data.sort(function(e,t){return(e.y-t.y)*(h===a.DESC?-1:1)}),S},_calcStats:function(e){var a,i=e.seriesItems[0],o=e.chartType,s=e.viewModel,u=e.visualProperties,c=e.currentFeatureIndex,d=[],h=0,m=0,S=0,p=1e6,g=-1e6,v=i.points;if(u.filter&&u.filter.ranges)a=r.getChartData({filterRangesStats:l.getRangeStatistics(u.filter.ranges),numPoints:v.length});else if(t.isConditionalStylingSupported(o)&&u.conditionalStyling){var y=n.getStatistics(u.conditionalStyling);y&&i&&(a=r.getChartData({conditionalStats:y,numPoints:v.length}))}var f=0;return v.forEach(function(e,i){var n=function(){if(e.hidden)return{value:void 0};var n=r.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:o,visualProperties:u,viewModel:s,currentFeatureIndex:c,chartData:a}),l=s.getBenchmarkController&&s.getBenchmarkController();if(t.isBenchmarkSupported(o)&&l&&l.getAreaIndex()>=0&&l.getAreaIndex()!==c){return{value:n-r.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:o,visualProperties:u,viewModel:s,currentFeatureIndex:l.getAreaIndex(),chartData:a}),isBenchmarked:!0,ownValue:n}}return{value:n}}();d[i]=n;var l=n.value||0;e.hidden||(f++,h+=l,m+=Math.abs(l),S+=Math.abs(n.ownValue||0),p=Math.min(p,l),g=Math.max(g,l))}),{values:d,valuesSum:h,absValuesSum:m,unbenchmarkedAbsValuesSum:S,minValue:p,maxValue:g,avgValue:h/f}}}});