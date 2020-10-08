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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder"],(function(e,t,i,n,a,l,o){return{calcSeries:function(r){var s,u=r.seriesItems,d=t.WAFFLE,f=r.themeSettings,c=r.viewModel,h=r.visualProperties,g=r.currentFeatureIndex,p=[],I=u[0],m={name:"data",data:[]},S=[],v=0,y=0,x=1e6,C=-1e6,P=I.points;if(1===P.length&&(P=P.slice()).push(i.getWaffleOthersPoint()),t.isConditionalStylingSupported(d)&&h.conditionalStyling){var M=n.getStatistics(h.conditionalStyling);s=M&&l.getChartData({conditionalStats:M,numPoints:P.length})}var b=P.every((function(e){return!e.fieldInfo||a.isFieldInfoInPercentState(e.fieldInfo)})),w=h.waffleRangeMin<0;P.forEach((function(e,t){var i;if(t<P.length-1)i=l.getPointValue({point:e,index:t,seriesIndex:0,maxValue:!1,chartType:d,visualProperties:h,viewModel:c,currentFeatureIndex:g,chartData:s,numPoints:P.length}),w=w||i<0;else{var n=S.reduce((function(e,t){return e+t}),0);i=h.waffleRangeMax?Math.max(0,h.waffleRangeMax-n):b?Math.max(0,100-n):0}S[t]=i,v+=i=i||0,y+=Math.abs(i),x=Math.min(x,i),C=Math.max(C,i)}));var V=v/P.length;return P.forEach((function(i,a){var l,s=a===P.length-1,u=S[a],p=u||0;if(t.isConditionalStylingSupported(d)&&h.conditionalStyling){var M=n.getConditionalStyle(p,h.conditionalStyling);l=M&&M.backgroundColor,s&&!h.waffleConditionalStylingOthers&&(l=void 0)}l=l||e.calcColorForPoint({point:i,seriesItem:I,pointIndex:a,isOthersPoint:s,seriesIndex:0,numSeries:1,chartType:d,themeSettings:f});var b=p;s||h.waffleRangeMin&&(b=Math.max(0,b-h.waffleRangeMin)),m.data.push({originalValue:u,x:1,y:b,isUnavailableData:isNaN(u),valueProp:"y",unsortedIndex:a,name:i.label,point:i,fill:l,icon:e.calcIconForPoint(i,l,d),fieldInfo:i.fieldInfo||P[0].fieldInfo,seriesIndex:0,isOthersPoint:s,tooltip:o.getTooltipInfo({yValue:p,pointLabel:i.label,seriesLabel:null,minInSeriesValue:x,maxInSeriesValue:C,sumInSeriesValue:v,absSumInSeriesValue:y,avgInSeriesValue:V,visualProperties:h,chartType:d,conditionalStyling:h.conditionalStyling,fieldInfo:i.fieldInfo||P[0].fieldInfo,decimals:i.value&&i.value.decimals,hasNegativeValues:w,fill:l,chartContainer:r.chartContainer,viewModel:c,theme:r.theme,themeSettings:f,dataDrillingPanelInfo:r.dataDrillingPanelInfo,pointName:i.label,seriesName:I.label,areaName:null,featureIndex:g,isComparisonPoint:!1,comparisonFeatureAttribute:null}),stroke:{width:0}})})),p.push(m),p}}}));