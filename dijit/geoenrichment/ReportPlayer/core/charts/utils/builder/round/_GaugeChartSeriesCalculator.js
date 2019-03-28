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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder"],function(e,a,i,t,n,l,o){return{calcSeries:function(s){var r,u=(s.chart,s.seriesItems),g=s.chartType,d=s.themeSettings,h=s.viewModel,c=s.visualProperties,f=s.currentFeatureIndex,p=[],I=u[0],S={name:"data",data:[]},m=[],v=0,y=0,x=1e6,C=-1e6,M=I.points;if(1===M.length&&(M=M.slice(),M.push(i.getGaugeOthersPoint())),a.isConditionalStylingEnabled(g)&&c.conditionalStyling){var b=t.getStatistics(c.conditionalStyling);r=b&&l.getChartData(b,M.length)}var P=M[0],V=n.isFieldInfoInPercentState(P.fieldInfo);M.forEach(function(e,a){var i,t=1===a;if(t){var n=m[0];i=c.gaugeRangeMax?Math.max(0,c.gaugeRangeMax-n):V?Math.max(0,100-n):0}else i=l.getPointValue({point:e,index:0,seriesIndex:0,maxValue:!1,chartType:g,visualProperties:c,viewModel:h,currentFeatureIndex:f,chartData:r});m[a]=i,i=i||0,v+=i,y+=Math.abs(i),x=Math.min(x,i),C=Math.max(C,i)}),0===m[1]&&(M.length=1);var T=v/M.length,F=c.gaugeRangeMin<0||m[0]<0;return M.forEach(function(i,n){var l,s=1===n,r=m[n],h=r||0;if(a.isConditionalStylingEnabled(g)&&c.conditionalStyling){var f=t.getConditionalStyle(h,c.conditionalStyling);l=f&&f.backgroundColor,s&&!c.gaugeConditionalStylingOthers&&(l=void 0)}l=l||e.calcColorForPoint({point:i,seriesItem:I,pointIndex:n,isOthersPoint:s,seriesIndex:0,numSeries:u.length,chartType:g,themeSettings:d});var p=h;s||c.gaugeRangeMin&&(p=Math.max(0,p-c.gaugeRangeMin)),S.data.push({originalValue:r,x:1,y:Math.max(1e-4,p),isUnavailableData:isNaN(r),valueProp:"y",unsortedIndex:n,name:i.label,point:i,fill:l,fieldInfo:M[0].fieldInfo,seriesIndex:0,isOthersPoint:s,tooltip:o.getTooltipInfo({yValue:h,pointLabel:i.label,seriesLabel:null,minInSeriesValue:x,maxInSeriesValue:C,sumInSeriesValue:v,absSumInSeriesValue:y,avgInSeriesValue:T,visualProperties:c,chartType:g,color:l,conditionalStyling:c.conditionalStyling,fieldInfo:M[0].fieldInfo,decimals:i.value&&i.value.decimals,hasNegativeValues:F}),stroke:{width:0}})}),p.push(S),p}}});