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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder"],(function(e,i,t,n,a,l,o){return{calcSeries:function(r){r.chart;var s,u=r.seriesItems,f=i.WAFFLE,d=r.themeSettings,c=r.viewModel,h=r.visualProperties,g=r.currentFeatureIndex,p=[],I=u[0],S={name:"data",data:[]},m=[],v=0,y=0,x=1e6,C=-1e6,M=I.points;if(1===M.length&&(M=M.slice()).push(t.getWaffleOthersPoint()),i.isConditionalStylingSupported(f)&&h.conditionalStyling){var P=n.getStatistics(h.conditionalStyling);s=P&&l.getChartData({conditionalStats:P,numPoints:M.length})}var V=M.every((function(e){return!e.fieldInfo||a.isFieldInfoInPercentState(e.fieldInfo)})),w=h.waffleRangeMin<0;M.forEach((function(e,i){var t;if(i<M.length-1)t=l.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:f,visualProperties:h,viewModel:c,currentFeatureIndex:g,chartData:s,numPoints:M.length}),w=w||t<0;else{var n=m.reduce((function(e,i){return e+i}),0);t=h.waffleRangeMax?Math.max(0,h.waffleRangeMax-n):V?Math.max(0,100-n):0}m[i]=t,v+=t=t||0,y+=Math.abs(t),x=Math.min(x,t),C=Math.max(C,t)}));var b=v/M.length;return M.forEach((function(t,a){var l,r=a===M.length-1,s=m[a],c=s||0;if(i.isConditionalStylingSupported(f)&&h.conditionalStyling){var g=n.getConditionalStyle(c,h.conditionalStyling);l=g&&g.backgroundColor,r&&!h.waffleConditionalStylingOthers&&(l=void 0)}l=l||e.calcColorForPoint({point:t,seriesItem:I,pointIndex:a,isOthersPoint:r,seriesIndex:0,numSeries:u.length,chartType:f,themeSettings:d});var p=c;r||h.waffleRangeMin&&(p=Math.max(0,p-h.waffleRangeMin)),S.data.push({originalValue:s,x:1,y:p,isUnavailableData:isNaN(s),valueProp:"y",unsortedIndex:a,name:t.label,point:t,fill:l,icon:e.calcIconForPoint(t,l,f),fieldInfo:t.fieldInfo||M[0].fieldInfo,seriesIndex:0,isOthersPoint:r,tooltip:o.getTooltipInfo({yValue:c,pointLabel:t.label,seriesLabel:null,minInSeriesValue:x,maxInSeriesValue:C,sumInSeriesValue:v,absSumInSeriesValue:y,avgInSeriesValue:b,visualProperties:h,chartType:f,conditionalStyling:h.conditionalStyling,fieldInfo:t.fieldInfo||M[0].fieldInfo,decimals:t.value&&t.value.decimals,hasNegativeValues:w,fill:l}),stroke:{width:0}})})),p.push(S),p}}}));