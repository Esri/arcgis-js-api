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

define(["../../ThemeCalculator","../../ChartTypes","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","../utils/ChartDataLabelBuilder","dojo/i18n!esri/nls/jsapi"],function(e,a,t,i,n,l,o,r){return r=r.geoenrichment.dijit.ReportPlayer.ChartContainer,{calcSeries:function(s){var u,d=(s.chart,s.seriesItems),g=s.chartType,h=s.themeSettings,c=s.viewModel,p=s.visualProperties,f=s.currentFeatureIndex,m=[],S=d[0],I={name:"data",data:[]},y=[],v=0,x=0,C=1e6,b=-1e6,M=S.points;if(1===M.length&&(M=M.slice(),M.push({label:r.gaugeOthers})),a.isConditionalStylingEnabled(g)&&p.conditionalStyling){var V=t.getStatistics(p.conditionalStyling);V&&S&&(u=n.getChartData(V,M.length))}var P=M[0],T=i.isFieldInfoInPercentState(P.fieldInfo);M.forEach(function(e,a){var t;if(0===a)t=n.getPointValue({point:e,index:0,seriesIndex:0,maxValue:!1,chartType:g,visualProperties:p,viewModel:c,currentFeatureIndex:f,chartData:u});else if(1===a){var i=y[0];t=p.gaugeRangeMax?Math.max(0,p.gaugeRangeMax-i):T?Math.max(0,100-i):0}y[a]=t,t=t||0,v+=t,x+=Math.abs(t),C=Math.min(C,t),b=Math.max(b,t)}),0===y[1]&&(M.length=1);var D=v/M.length;y[0],y[1];return M.forEach(function(i,n){var r,s=y[n],u=s||0;if(a.isConditionalStylingEnabled(g)&&p.conditionalStyling){var c=t.getConditionalStyle(u,p.conditionalStyling);r=c&&c.backgroundColor,1===n&&p.gaugeConditionalStylingIgnoreOthers&&(r=void 0)}r=r||e.calcColorForPoint({point:i,seriesItem:S,pointIndex:n,seriesIndex:0,numSeries:d.length,chartType:g,themeSettings:h});var f=u;0===n&&p.gaugeRangeMin&&(f=Math.max(0,f-p.gaugeRangeMin)),I.data.push({originalValue:s,x:1,y:Math.max(1e-4,f),isUnavailableData:isNaN(s),valueProp:"y",unsortedIndex:n,name:i.label,point:i,fill:r,text:o.formatDataLabel(u,i.label,x,p,g),tooltip:l.getTooltipInfo({yValue:u,pointLabel:i.label,seriesLabel:null,minInSeriesValue:C,maxInSeriesValue:b,sumInSeriesValue:v,absSumInSeriesValue:x,avgInSeriesValue:D,visualProperties:p,chartType:g,color:r,conditionalStyling:p.conditionalStyling,fieldInfo:i.fieldInfo,decimals:i.value&&i.value.decimals}),stroke:{width:0}})}),m.push(I),m}}});