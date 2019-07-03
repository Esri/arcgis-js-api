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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartJsonUtil","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder"],function(e,i,n,t,a,l,o){return{calcSeries:function(r){var s,f=(r.chart,r.seriesItems),d=i.WAFFLE,u=r.themeSettings,c=r.viewModel,h=r.visualProperties,g=r.currentFeatureIndex,I=[],p=f[0],S={name:"data",data:[]},m=[],v=0,y=0,x=1e6,C=-1e6,M=p.points;if(1===M.length&&(M=M.slice(),M.push(n.getWaffleOthersPoint())),i.isConditionalStylingEnabled(d)&&h.conditionalStyling){var P=t.getStatistics(h.conditionalStyling);s=P&&l.getChartData({conditionalStats:P,numPoints:M.length})}var b=M.every(function(e){return!e.fieldInfo||a.isFieldInfoInPercentState(e.fieldInfo)}),V=h.waffleRangeMin<0;M.forEach(function(e,i){var n;if(i<M.length-1)n=l.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:d,visualProperties:h,viewModel:c,currentFeatureIndex:g,chartData:s,numPoints:M.length}),V=V||n<0;else{var t=m.reduce(function(e,i){return e+i},0);n=h.waffleRangeMax?Math.max(0,h.waffleRangeMax-t):b?Math.max(0,100-t):0}m[i]=n,n=n||0,v+=n,y+=Math.abs(n),x=Math.min(x,n),C=Math.max(C,n)});var w=v/M.length;return M.forEach(function(n,a){var l,r=a===M.length-1,s=m[a],c=s||0;if(i.isConditionalStylingEnabled(d)&&h.conditionalStyling){var g=t.getConditionalStyle(c,h.conditionalStyling);l=g&&g.backgroundColor,r&&!h.waffleConditionalStylingOthers&&(l=void 0)}l=l||e.calcColorForPoint({point:n,seriesItem:p,pointIndex:a,isOthersPoint:r,seriesIndex:0,numSeries:f.length,chartType:d,themeSettings:u});var I=c;r||h.waffleRangeMin&&(I=Math.max(0,I-h.waffleRangeMin)),S.data.push({originalValue:s,x:1,y:I,isUnavailableData:isNaN(s),valueProp:"y",unsortedIndex:a,name:n.label,point:n,fill:l,icon:e.calcIconForPoint(n,l,d),fieldInfo:n.fieldInfo||M[0].fieldInfo,seriesIndex:0,isOthersPoint:r,tooltip:o.getTooltipInfo({yValue:c,pointLabel:n.label,seriesLabel:null,minInSeriesValue:x,maxInSeriesValue:C,sumInSeriesValue:v,absSumInSeriesValue:y,avgInSeriesValue:w,visualProperties:h,chartType:d,conditionalStyling:h.conditionalStyling,fieldInfo:n.fieldInfo||M[0].fieldInfo,decimals:n.value&&n.value.decimals,hasNegativeValues:V,fill:l}),stroke:{width:0}})}),I.push(S),I}}});