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

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,t,i,a,n,l,o,r,s){var u=function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness,style:a.toGFXValue(t.outlineStyle||a.SOLID)}};return{calcSeries:function(a){a.chart;var d,g=a.seriesItems,h=a.chartType,c=a.themeSettings,p=a.viewModel,f=a.visualProperties,S=a.currentFeatureIndex,y=[],I=g[0],v={name:"data",data:[]},m=[],C=0,x=0,M=1e6,P=-1e6,V=I.points;if(1===V.length&&(V=V.slice()).push(i.getGaugeOthersPoint()),t.isConditionalStylingSupported(h)&&f.conditionalStyling){var T=n.getStatistics(f.conditionalStyling);d=T&&o.getChartData({conditionalStats:T,numPoints:V.length})}var b=V[0],O=l.isFieldInfoInPercentState(b.fieldInfo);V.forEach((function(e,t){var i;if(1===t){var a=m[0];i=f.gaugeRangeMax?Math.max(0,f.gaugeRangeMax-a):O?Math.max(0,100-a):0}else i=o.getPointValue({point:e,index:0,seriesIndex:0,maxValue:!1,chartType:h,visualProperties:f,viewModel:p,currentFeatureIndex:S,chartData:d});m[t]=i,C+=i=i||0,x+=Math.abs(i),M=Math.min(M,i),P=Math.max(P,i)})),0===m[1]&&(V.length=1);var k=C/V.length,w=f.gaugeRangeMin<0||m[0]<0;return V.forEach((function(i,a){var l,o=1===a,d=m[a],p=d||0;if(t.isConditionalStylingSupported(h)&&f.conditionalStyling){var S=n.getConditionalStyle(p,f.conditionalStyling);l=S&&S.backgroundColor,o&&!f.gaugeConditionalStylingOthers&&(l=void 0)}l=l||e.calcColorForPoint({point:i,seriesItem:I,pointIndex:a,isOthersPoint:o,seriesIndex:0,numSeries:g.length,chartType:h,themeSettings:c});var y=u(l,f);l=f.fillOpacity<1?s.getColorWithAlpha(l,f.fillOpacity):l;var T=p;o||f.gaugeRangeMin&&(T=Math.max(0,T-f.gaugeRangeMin));var b={originalValue:d,x:1,y:Math.max(1e-4,T),isUnavailableData:isNaN(d),valueProp:"y",unsortedIndex:a,name:i.label,point:i,fill:l,fieldInfo:V[0].fieldInfo,seriesIndex:0,isOthersPoint:o,stroke:{color:y.color,width:y.width,style:y.style}},O=r.getTooltipInfo({yValue:p,pointLabel:i.label,seriesLabel:null,minInSeriesValue:M,maxInSeriesValue:P,sumInSeriesValue:C,absSumInSeriesValue:x,avgInSeriesValue:k,visualProperties:f,chartType:h,conditionalStyling:f.conditionalStyling,fieldInfo:V[0].fieldInfo,decimals:i.value&&i.value.decimals,hasNegativeValues:w,fill:b.fill,stroke:b.stroke.width>0?b.stroke.color:void 0});b.tooltip=O,v.data.push(b)})),y.push(v),y}}}));