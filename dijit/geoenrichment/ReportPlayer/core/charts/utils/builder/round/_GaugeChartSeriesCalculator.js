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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,t,i,a,n,l,o,r,s){var u=function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness,style:a.toGFXValue(t.outlineStyle||a.SOLID)}};return{calcSeries:function(a){a.chart;var d,g=a.seriesItems,h=a.chartType,c=a.themeSettings,p=a.viewModel,f=a.visualProperties,m=a.currentFeatureIndex,S=[],I=g[0],y={name:"data",data:[]},v=[],C=0,x=0,M=1e6,P=-1e6,b=I.points;if(1===b.length&&(b=b.slice()).push(i.getGaugeOthersPoint()),t.isConditionalStylingSupported(h)&&f.conditionalStyling){var V=n.getStatistics(f.conditionalStyling);d=V&&o.getChartData({conditionalStats:V,numPoints:b.length})}var T=b[0],O=l.isFieldInfoInPercentState(T.fieldInfo);b.forEach((function(e,t){var i;if(1===t){var a=v[0];i=f.gaugeRangeMax?Math.max(0,f.gaugeRangeMax-a):O?Math.max(0,100-a):0}else i=o.getPointValue({point:e,index:0,seriesIndex:0,maxValue:!1,chartType:h,visualProperties:f,viewModel:p,currentFeatureIndex:m,chartData:d});v[t]=i,C+=i=i||0,x+=Math.abs(i),M=Math.min(M,i),P=Math.max(P,i)})),0===v[1]&&(b.length=1);var w=C/b.length,D=f.gaugeRangeMin<0||v[0]<0;return b.forEach((function(i,l){var o,d=1===l,S=v[l],V=S||0;if(t.isConditionalStylingSupported(h)&&f.conditionalStyling){var T=n.getConditionalStyle(V,f.conditionalStyling);o=T&&T.backgroundColor,d&&!f.gaugeConditionalStylingOthers&&(o=void 0)}o=o||e.calcColorForPoint({point:i,seriesItem:I,pointIndex:l,isOthersPoint:d,seriesIndex:0,numSeries:g.length,chartType:h,themeSettings:c});var O=u(o,f);o=f.fillOpacity<1?s.getColorWithAlpha(o,f.fillOpacity):o;var F=V;d||f.gaugeRangeMin&&(F=Math.max(0,F-f.gaugeRangeMin));var k={originalValue:S,x:1,y:Math.max(1e-4,F),isUnavailableData:isNaN(S),valueProp:"y",unsortedIndex:l,name:i.label,point:i,fill:o,fieldInfo:b[0].fieldInfo,seriesIndex:0,isOthersPoint:d,stroke:{color:O.color,width:O.width,style:O.style}},N=r.getTooltipInfo({yValue:V,pointLabel:i.label,seriesLabel:null,minInSeriesValue:M,maxInSeriesValue:P,sumInSeriesValue:C,absSumInSeriesValue:x,avgInSeriesValue:w,visualProperties:f,chartType:h,conditionalStyling:f.conditionalStyling,fieldInfo:b[0].fieldInfo,decimals:i.value&&i.value.decimals,hasNegativeValues:D,fill:k.fill,stroke:k.stroke.width>0?k.stroke.color:void 0,chartContainer:a.chartContainer,viewModel:p,theme:a.theme,themeSettings:c,dataDrillingPanelInfo:a.dataDrillingPanelInfo,pointName:i.label,seriesName:I.label,areaName:null,featureIndex:m,isComparisonPoint:!1,comparisonFeatureAttribute:null});k.tooltip=N,y.data.push(k)})),S.push(y),S}}}));