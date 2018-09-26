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

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartSorting","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","./_ComparisonUtil","./_AxisBuilder","./_PointLabelUtil"],function(e,a,i,t,s,n,l,o,r){return{calcSeriesColumnBar:function(s){var u=s.chart,c=s.visualProperties,m=s.seriesItems,S=1===m.length,d=s.seriesItemsWithComparison||m,p=s.chartType,h=s.comparisonInfo,g=s.themeSettings,I=s.viewModel,V=1===d.length&&s.sorting,v=d.length>1&&c.renderColumnBarsInOppositeDirections,f=[],x={minYValue:1/0,maxYValue:-1/0,stackedValues:c.isStacked?[]:null};r.createPointToLabelMap(u);var C={};return d.forEach(function(e,o){if(e.points.length){var m={name:e.label,data:[],isComparisonSeries:e.isComparisonSeries,params:{plot:e.isComparisonSeries&&l.getComparisonPlotName(p,h)||void 0}},b=this._collectStatisticsForSeries(s,e,o,x);a.provideMissingIconsForPoints(e.points,p);var y=[];e.points.forEach(function(i,l){var u,V=b.values[l],f=V||0,x=l+1;if(c.conditionalStyling){var A=t.getConditionalStyle(f,c.conditionalStyling);u=A&&A.backgroundColor}u=u||a.calcColorForPoint(i,e,l,o,S?1:2,p,g,e.isComparisonSeries,h);var M=n.getTooltipInfo({yValue:V,pointLabel:r.getPointLabel(i,I),seriesLabel:e.label,minInSeriesValue:b.minInSeries,maxInSeriesValue:b.maxInSeries,sumInSeriesValue:b.valuesSum,absSumInSeriesValue:b.absValuesSum,avgInSeriesValue:b.avgInSeries,minInAreasValue:b.minInSeries,maxInAreasValue:b.maxInSeries,sumInAreasValue:b.valuesSum,absSumInAreasValue:b.absValuesSum,avgInAreasValue:b.avgInSeries,visualProperties:c,chartType:p,isMultiFeature:s.isMultiFeatureChart,color:u,conditionalStyling:c.conditionalStyling,fieldInfo:i.fieldInfo,isThisAreaSpecific:h&&!s.isMultiFeatureChart?!e.isComparisonSeries:void 0,isThisAreaSingleSeries:S,decimals:i.value&&i.value.decimals}),P=C[x]=C[x]||[];P.push(M),y.push(M),M.getGroup=function(){return s.isMultiFeatureChart?y:P};var T={x:x,y:f*function(){return v&&o>=d.length/2?-1:1}(),originalValue:V,isUnavailableData:isNaN(V),valueProp:"y",unsortedIndex:l,seriesIndex:o,name:r.getPointLabel(i,I),_valuesSumsInSeries:b.absValuesSum,point:i,fill:u,tooltip:M,icon:a.calcIconForPoint(i,u,p),bgIcon:a.calcBackgroundIconForPoint(i,p,g,c),stroke:{width:0}};c.yAxis.showValuesAsWeightsInSeries&&(T.y/=b.absValuesSum/100),m.data.push(T)}),V&&V!==i.NONE&&(m.data.sort(function(e,a){return(e.y-a.y)*(V===i.DESC?-1:1)}),m.data.forEach(function(e,a){var i=a+1;e.x=i})),m.data.forEach(function(e){r.updatePointIndexToLabelMap(u,e.x,e.point,I)}),f.push(m)}},this),x.stackedValues&&(x.stackedValues.sort(function(e,a){return a-e}),x.minYValue=x.stackedValues[x.stackedValues.length-1],x.maxYValue=x.stackedValues[0]),o.prettifyYAxis(x.minYValue,x.maxYValue,c.yAxis.baseLineValue,u,c,p,g,I,f.length),s.plotStat&&(e.mixin(s.plotStat,x),s.plotStat.pointIndexToTooltipsHash=C),f},_collectStatisticsForSeries:function(e,a,i,n){var l=e.visualProperties,o=e.viewModel,r=e.seriesItems,u=e.currentFeatureIndex,c=e.isMultiFeatureChart,m=e.excludedSeriesHash&&e.excludedSeriesHash[a.label],S=e.selectedComparisonAreaId,d=e.ge,p=e.chartType,h=r.length>1&&l.renderColumnBarsInOppositeDirections,g=2===r.length&&h?s.CHART_DATA_SMOOTH:null;if(l.conditionalStyling){var I=t.getStatistics(l.conditionalStyling);I&&r.length&&(g=s.getChartData(I,r[0].points.length,g,!1))}var V=[],v=0,f=0,x=1e6,C=-1e6;return a.points.forEach(function(e,t){var n=s.getPreviewValue(e,t,i,!1,p,l,o,c?t:u,g,a.isComparisonSeries,S,d,!1);V[t]=n,n=n||0,m||(v+=n,f+=Math.abs(n),x=Math.min(x,n),C=Math.max(C,n))}),m||a.points.forEach(function(e,a){var i=V[a],i=l.yAxis.showValuesAsWeightsInSeries?i/f*100:i;n.stackedValues?(n.stackedValues[a]=n.stackedValues[a]||0,n.stackedValues[a]+=i):(n.minYValue=Math.min(i,n.minYValue),n.maxYValue=Math.max(i,n.maxYValue))}),{values:V,valuesSum:v,absValuesSum:f,minInSeries:x,maxInSeries:C,avgInSeries:v/a.points.length}}}});