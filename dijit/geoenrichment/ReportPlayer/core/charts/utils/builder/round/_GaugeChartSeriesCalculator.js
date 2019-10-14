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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,t,i,a,l,n,o,r,s){var u={calcLineStyle:function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness,style:a.toGFXValue(t.outlineStyle||a.SOLID)}}};return{calcSeries:function(a){var d,g=(a.chart,a.seriesItems),c=a.chartType,h=a.themeSettings,f=a.viewModel,p=a.visualProperties,y=a.currentFeatureIndex,S=[],I=g[0],v={name:"data",data:[]},m=[],C=0,x=0,M=1e6,P=-1e6,V=I.points;if(1===V.length&&(V=V.slice(),V.push(i.getGaugeOthersPoint())),t.isConditionalStylingEnabled(c)&&p.conditionalStyling){var b=l.getStatistics(p.conditionalStyling);d=b&&o.getChartData({conditionalStats:b,numPoints:V.length})}var T=V[0],O=n.isFieldInfoInPercentState(T.fieldInfo);V.forEach(function(e,t){var i,a=1===t;if(a){var l=m[0];i=p.gaugeRangeMax?Math.max(0,p.gaugeRangeMax-l):O?Math.max(0,100-l):0}else i=o.getPointValue({point:e,index:0,seriesIndex:0,maxValue:!1,chartType:c,visualProperties:p,viewModel:f,currentFeatureIndex:y,chartData:d});m[t]=i,i=i||0,C+=i,x+=Math.abs(i),M=Math.min(M,i),P=Math.max(P,i)}),0===m[1]&&(V.length=1);var k=C/V.length,w=p.gaugeRangeMin<0||m[0]<0;return V.forEach(function(i,a){var n,o=1===a,d=m[a],f=d||0;if(t.isConditionalStylingEnabled(c)&&p.conditionalStyling){var y=l.getConditionalStyle(f,p.conditionalStyling);n=y&&y.backgroundColor,o&&!p.gaugeConditionalStylingOthers&&(n=void 0)}n=n||e.calcColorForPoint({point:i,seriesItem:I,pointIndex:a,isOthersPoint:o,seriesIndex:0,numSeries:g.length,chartType:c,themeSettings:h});var S=u.calcLineStyle(n,p);n=p.fillOpacity<1?s.getColorWithAlpha(n,p.fillOpacity):n;var b=f;o||p.gaugeRangeMin&&(b=Math.max(0,b-p.gaugeRangeMin));var T={originalValue:d,x:1,y:Math.max(1e-4,b),isUnavailableData:isNaN(d),valueProp:"y",unsortedIndex:a,name:i.label,point:i,fill:n,fieldInfo:V[0].fieldInfo,seriesIndex:0,isOthersPoint:o,stroke:{color:S.color,width:S.width,style:S.style}},O=r.getTooltipInfo({yValue:f,pointLabel:i.label,seriesLabel:null,minInSeriesValue:M,maxInSeriesValue:P,sumInSeriesValue:C,absSumInSeriesValue:x,avgInSeriesValue:k,visualProperties:p,chartType:c,conditionalStyling:p.conditionalStyling,fieldInfo:V[0].fieldInfo,decimals:i.value&&i.value.decimals,hasNegativeValues:w,fill:T.fill,stroke:T.stroke.width>0?T.stroke.color:void 0});T.tooltip=O,v.data.push(T)}),S.push(v),S}}});