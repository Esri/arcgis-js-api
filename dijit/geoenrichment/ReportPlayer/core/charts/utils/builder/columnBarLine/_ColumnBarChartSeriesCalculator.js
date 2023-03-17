// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","../../ChartSorting","../../ChartLineStyles","../../ThemeCalculator","../utils/TooltipInfoBuilder","./_ComparisonUtil","./_AxisBuilder","./_PointLabelUtil","./_StatsBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,i,t,a,r,n,s,o,l,u,c){var h=function(e,i){return{color:c.getColorWithAlpha(i.outlineColor||e,i.outlineOpacity),width:i.outlineThickness,style:a.toGFXValue(i.outlineStyle||a.SOLID)}};return{calcSeriesColumnBar:function(a){var d=a.chart,m=a.visualProperties,S=a.seriesItems,p=1===S.length,I=a.seriesItemsWithComparison||S,g=a.chartType,f=a.comparisonInfo,C=a.themeSettings,v=a.viewModel,x=1===I.length&&a.sorting,y=I.length>1&&m.renderColumnBarsInOppositeDirections,b=[],V=new u({visualProperties:m,seriesItems:I,viewModel:v,currentFeatureIndex:a.currentFeatureIndex,isMultiFeatureChart:a.isMultiFeatureChart,excludedSeriesHash:a.excludedSeriesHash,comparisonFeatureAttributes:a.comparisonFeatureAttributes,chartType:g});l.createPointToLabelMap(d);var k={};I.forEach((function(e,o){if(e.points.length){var u={name:e.label,data:[],isComparisonSeries:e.isComparisonSeries,params:{plot:e.isComparisonSeries&&s.getComparisonPlotName(g,f)||void 0}},S=V.getStatisticsForSeriesAt(o);r.provideMissingIconsForPoints(e.points,g);var A=[];e.points.forEach((function(t,s){var d,x=S.values[s],b=x.value,V=b||0,F=S.conditional&&S.conditional.styles[s];d=(d=F&&F.backgroundColor)||r.calcColorForPoint({point:t,seriesItem:e,pointIndex:s,seriesIndex:o,numSeries:p?1:I.length,chartType:g,themeSettings:C,isComparisonSeries:e.isComparisonSeries,comparisonInfo:f,isMultiFeature:a.isMultiFeatureChart});var P,w,M=h(d,m),T=d;d=m.columnBarOpacity<1?c.getColorWithAlpha(d,m.columnBarOpacity):d,t.hidden&&(P=d,d=T="transparent"),t.hidden&&(w=M.color,M.color="transparent");var B=s+1,L={x:B,y:V*function(){if(y){var e=!a.isMultiFeatureChart&&i.isBarLike(g);return o>=I.length/2?e?1:-1:e?-1:1}return 1}(),originalValue:b,isUnavailableData:isNaN(b),valueProp:"y",unsortedIndex:s,originalIndex:t.originalIndex||s,seriesIndex:o,name:l.getPointLabel(t,v),valuesSumsInSeries:S.absSumInSeries,point:t,fill:d,icon:r.calcIconForPoint(t,T,g),bgIcon:r.calcBackgroundIconForPoint(t,g,C,m),stroke:{color:M.color,width:M.width,style:M.style},unhiddenFillColor:P,unhiddenLineColor:w,isBenchmarked:x.isBenchmarked,unbenchmarkedValue:x.ownValue};if(m.isStacked){var N=m.showValuesAsWeightInStack?S.stackValuesAsWeighedPercents:S.stackValues;L.stackValues=N&&N[s]}m.showValuesAsWeightInStack?L.y=S.weightsInStack?100*S.weightsInStack[s]:0:m.yAxis.showValuesAsWeightsInSeries&&(L.y/=S.absSumInSeries/100);var W=l.getPointLabel(I[0].points[s]||t,v),Y=n.getTooltipInfo({yValue:b,pointLabel:W,seriesLabel:e.label,isSinglePointInSeries:1===e.points.length,minInSeriesValue:S.minInSeries,maxInSeriesValue:S.maxInSeries,sumInSeriesValue:S.sumInSeries,absSumInSeriesValue:S.absSumInSeries,avgInSeriesValue:S.avgInSeries,weightInStack:S.weightsInStack&&S.weightsInStack[s],minInAreasValue:S.minInSeries,maxInAreasValue:S.maxInSeries,sumInAreasValue:S.sumInSeries,absSumInAreasValue:S.absSumInSeries,avgInAreasValue:S.avgInSeries,visualProperties:m,chartType:g,isMultiFeature:a.isMultiFeatureChart,conditionalStyling:m.conditionalStyling,conditionalStats:S.conditional&&S.conditional.stats,fieldInfo:t.fieldInfo,isThisAreaSpecific:f&&!a.isMultiFeatureChart?!e.isComparisonSeries:void 0,isThisAreaSingleSeries:p,decimals:t.value&&t.value.decimals,fill:L.fill,stroke:L.stroke.width>0?L.stroke.color:void 0,isBenchmarked:x.isBenchmarked,unbenchmarkedValue:x.ownValue,chartContainer:a.chartContainer,viewModel:v,theme:a.theme,themeSettings:C,dataDrillingPanelInfo:a.dataDrillingPanelInfo,pointName:a.isMultiFeatureChart?e.label:W,seriesName:t.originalSeriesName||e.label,areaName:t.areaName,featureIndex:x.featureIndex,isComparisonPoint:t.isComparisonPoint,comparisonFeatureAttribute:t.comparisonFeatureAttribute}),D=k[B]=k[B]||[];a.excludedSeriesHash[e.label]||(D.push(Y),A.push(Y)),Y.getGroup=function(){return a.isMultiFeatureChart?A:D},L.tooltip=Y,u.data.push(L)})),x&&x!==t.NONE&&(u.data.sort((function(e,i){return(e.y-i.y)*(x===t.DESC?-1:1)})),u.data.forEach((function(e,i){var t=i+1;e.x=t}))),u.data.forEach((function(e){l.updatePointIndexToLabelMap(d,e.x,o,e.point,v)})),b.push(u)}}),this);var A=V.getTotalStats();return o.prettifyYAxis(A.minYValue,A.maxYValue,d,m,g,C,v,b),a.plotStats&&(e.mixin(a.plotStats,A),a.plotStats.pointIndexToTooltipsHash=k),b},prettifyColumnBarYAxis:function(e){o.prettifyYAxis(e.totalStat.minYValue,e.totalStat.maxYValue,e.chart,e.visualProperties,e.chartType,e.themeSettings,e.viewModel,e.chartSeries,!0,e.chartSize),e.chart.dirty=!0}}}));