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

define(["../../ThemeCalculator","../../ChartTypes","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","../utils/ChartDataLabelBuilder","dojo/i18n!esri/nls/jsapi"],function(e,a,t,i,l,n,o,r){return r=r.geoenrichment.dijit.ReportPlayer.ChartContainer,{calcSeries:function(s){var u,g=(s.chart,s.seriesItems),d=s.chartType,h=s.themeSettings,c=s.viewModel,f=s.visualProperties,p=s.currentFeatureIndex,S=[],m=g[0],v={name:"data",data:[]},y=[],I=0,C=0,b=1e6,x=-1e6,M=m.points;if(1===M.length&&(M=M.slice(),M.push({label:r.gaugeOthers})),a.isConditionalStylingEnabled(d)&&f.conditionalStyling){var V=t.getStatistics(f.conditionalStyling);V&&m&&(u=l.getChartData(V,M.length))}var P=M[0],T=i.isFieldInfoInPercentState(P.fieldInfo);M.forEach(function(e,a){var t;if(0===a)t=l.getPreviewValue(e,0,0,!1,d,f,c,p,u);else if(1===a){var i=y[0];t=f.gaugeRangeMax?Math.max(0,f.gaugeRangeMax-i):T?Math.max(0,100-i):0}y[a]=t,t=t||0,I+=t,C+=Math.abs(t),b=Math.min(b,t),x=Math.max(x,t)}),0===y[1]&&(M.length=1);var D=I/M.length;y[0],y[1];return M.forEach(function(i,l){var r,s=y[l],u=s||0;if(a.isConditionalStylingEnabled(d)&&f.conditionalStyling){var c=t.getConditionalStyle(u,f.conditionalStyling);r=c&&c.backgroundColor,1===l&&f.gaugeConditionalStylingIgnoreOthers&&(r=void 0)}r=r||e.calcColorForPoint(i,m,l,0,g.length,d,h);var p=u;0===l&&f.gaugeRangeMin&&(p=Math.max(0,p-f.gaugeRangeMin)),v.data.push({originalValue:s,x:1,y:Math.max(1e-4,p),isUnavailableData:isNaN(s),valueProp:"y",unsortedIndex:l,name:i.label,point:i,fill:r,text:o.formatDataLabel(u,i.label,C,f,d),tooltip:n.getTooltipInfo({yValue:u,pointLabel:i.label,seriesLabel:null,minInSeriesValue:b,maxInSeriesValue:x,sumInSeriesValue:I,absSumInSeriesValue:C,avgInSeriesValue:D,visualProperties:f,chartType:d,color:r,conditionalStyling:f.conditionalStyling,fieldInfo:i.fieldInfo,decimals:i.value&&i.value.decimals}),stroke:{width:0}})}),S.push(v),S}}});