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

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartSorting","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","./_ComparisonUtil","./_AxisBuilder","./_PointLabelUtil"],function(e,a,t,i,n,s,o,l,r){return{calcSeriesColumnBar:function(n){var u=n.chart,c=n.visualProperties,p=n.seriesItems,d=1===p.length,m=n.seriesItemsWithComparison||p,h=n.chartType,S=n.comparisonInfo,g=n.themeSettings,v=n.viewModel,f=1===m.length&&n.sorting,V=m.length>1&&c.renderColumnBarsInOppositeDirections,I=[],C={minYValue:1/0,maxYValue:-1/0,stackedValues:c.isStacked?[]:null};r.createPointToLabelMap(u);var x={};return m.forEach(function(e,l){if(e.points.length){var p={name:e.label,data:[],isComparisonSeries:e.isComparisonSeries,params:{plot:e.isComparisonSeries&&o.getComparisonPlotName(h,S)||void 0}},y=this._collectStatisticsForSeries(n,e,l,C);a.provideMissingIconsForPoints(e.points,h),e.points.forEach(function(t,n){var o,u=y.values[n],f=u||0,I=n+1;if(c.conditionalStyling){var C=i.getConditionalStyle(f,c.conditionalStyling);o=C&&C.backgroundColor}o=o||a.calcColorForPoint(t,e,n,l,d?1:2,h,g,e.isComparisonSeries,S);var b=s.getTooltipInfo(u,r.getPointLabel(t,v),e.label,y.minInSeries,y.maxInSeries,y.valuesSum,y.absValuesSum,y.avgInSeries,c,h,o,c.conditionalStyling,t.fieldInfo,S?!e.isComparisonSeries:void 0),k=x[I]=x[I]||[];k.push(b),b.getGroup=function(){return k};var P={x:I,y:f*function(){return V&&l>=m.length/2?-1:1}(),originalValue:u,isUnavailableData:isNaN(u),valueProp:"y",unsortedIndex:n,name:r.getPointLabel(t,v),_valuesSumsInSeries:y.absValuesSum,point:t,fill:o,tooltip:b,icon:a.calcIconForPoint(t,o,h),bgIcon:a.calcBackgroundIconForPoint(t,h,g,c),stroke:{width:0}};c.yAxis.showValuesAsWeightsInSeries&&(P.y/=y.absValuesSum/100),p.data.push(P)}),f&&f!==t.NONE&&(p.data.sort(function(e,a){return(e.y-a.y)*(f===t.DESC?-1:1)}),p.data.forEach(function(e,a){var t=a+1;e.x=t})),p.data.forEach(function(e){r.updatePointIndexToLabelMap(u,e.x,e.point,v)}),I.push(p)}},this),C.stackedValues&&(C.stackedValues.sort(function(e,a){return a-e}),C.minYValue=C.stackedValues[C.stackedValues.length-1],C.maxYValue=C.stackedValues[0]),l.prettifyYAxis(C.minYValue,C.maxYValue,c.yAxis.baseLineValue,u,c,h,g,v,I.length),n.plotStat&&(e.mixin(n.plotStat,C),n.plotStat.pointIndexToTooltipsHash=x),I},_collectStatisticsForSeries:function(e,a,t,s){var o=e.visualProperties,l=e.viewModel,r=e.seriesItems,u=e.previewFeatureIndex,c=e.isMultiFeatureChart,p=e.excludedSeriesHash,d=e.selectedComparisonIndex,m=e.ge,h=e.chartType,S=r.length>1&&o.renderColumnBarsInOppositeDirections,g=2===r.length&&S?n.CHART_DATA_SMOOTH:null;if(o.conditionalStyling){var v=i.getStatistics(o.conditionalStyling);v&&r.length&&(g=n.getChartData(v,r[0].points.length,g,!1))}var f=[],V=0,I=0,C=1e6,x=-1e6;return a.points.forEach(function(e,i){var s=n.getPreviewValue(e,i,t,!1,h,o,l,c?i:u,g,a.isComparisonSeries,d,m,!1);f[i]=s,s=s||0,p&&p[a.label]||(V+=s,I+=Math.abs(s),C=Math.min(C,s),x=Math.max(x,s))}),a.points.forEach(function(e,a){var t=f[a],t=o.yAxis.showValuesAsWeightsInSeries?t/I*100:t;s.stackedValues?(s.stackedValues[a]=s.stackedValues[a]||0,s.stackedValues[a]+=t):(s.minYValue=Math.min(t,s.minYValue),s.maxYValue=Math.max(t,s.maxYValue))}),{values:f,valuesSum:V,absValuesSum:I,minInSeries:C,maxInSeries:x,avgInSeries:V/a.points.length}}}});