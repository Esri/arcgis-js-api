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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder"],(function(e,t,n,i,a,l,o){return{calcSeries:function(r){var s,u=r.seriesItems,d=t.WAFFLE,f=r.themeSettings,c=r.viewModel,h=r.visualProperties,g=r.currentFeatureIndex,p=[],I=u[0],m={name:"data",data:[]},S=[],v=0,y=0,x=1e6,C=-1e6,P=I.points;if(1===P.length&&(P=P.slice()).push(n.getWaffleOthersPoint()),t.isConditionalStylingSupported(d)&&h.conditionalStyling){var M=i.getStatistics(h.conditionalStyling);s=M&&l.getChartData({conditionalStats:M,numPoints:P.length})}var b=P.every((function(e){return!e.fieldInfo||a.isFieldInfoInPercentState(e.fieldInfo)})),V=h.waffleRangeMin<0;P.forEach((function(e,t){var n;if(t<P.length-1)n=l.getPointValue({point:e,index:t,seriesIndex:0,maxValue:!1,chartType:d,visualProperties:h,viewModel:c,currentFeatureIndex:g,chartData:s,numPoints:P.length}),V=V||n<0;else{var i=S.reduce((function(e,t){return e+t}),0);n=h.waffleRangeMax?Math.max(0,h.waffleRangeMax-i):b?Math.max(0,100-i):0}S[t]=n,v+=n=n||0,y+=Math.abs(n),x=Math.min(x,n),C=Math.max(C,n)}));var w=v/P.length,F=t.isConditionalStylingSupported(d)&&h.conditionalStyling?l.getConditionalStylesForStatsPointValues(S,h):null;return P.forEach((function(t,n){var i,a=n===P.length-1,l=S[n],s=l||0;if(F){var u=F.styles[n];i=u&&u.backgroundColor,a&&!h.waffleConditionalStylingOthers&&(i=void 0)}i=i||e.calcColorForPoint({point:t,seriesItem:I,pointIndex:n,isOthersPoint:a,seriesIndex:0,numSeries:1,chartType:d,themeSettings:f});var p=s;a||h.waffleRangeMin&&(p=Math.max(0,p-h.waffleRangeMin)),m.data.push({originalValue:l,x:1,y:p,isUnavailableData:isNaN(l),valueProp:"y",unsortedIndex:n,name:t.label,point:t,fill:i,icon:e.calcIconForPoint(t,i,d),fieldInfo:t.fieldInfo||P[0].fieldInfo,seriesIndex:0,isOthersPoint:a,tooltip:o.getTooltipInfo({yValue:s,pointLabel:t.label,seriesLabel:null,minInSeriesValue:x,maxInSeriesValue:C,sumInSeriesValue:v,absSumInSeriesValue:y,avgInSeriesValue:w,visualProperties:h,chartType:d,conditionalStyling:h.conditionalStyling,conditionalStats:F&&F.stats,fieldInfo:t.fieldInfo||P[0].fieldInfo,decimals:t.value&&t.value.decimals,hasNegativeValues:V,fill:i,chartContainer:r.chartContainer,viewModel:c,theme:r.theme,themeSettings:f,dataDrillingPanelInfo:r.dataDrillingPanelInfo,pointName:t.label,seriesName:I.label,areaName:null,featureIndex:g,isComparisonPoint:!1,comparisonFeatureAttribute:null}),stroke:{width:0}})})),p.push(m),p}}}));