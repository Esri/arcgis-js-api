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

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","../utils/ChartDataLabelBuilder","dojo/i18n!esri/nls/jsapi"],function(e,t,a,i,n,l,o,r){return r=r.geoenrichment.dijit.ReportPlayer.ChartContainer,{calcSeries:function(r){var s,u=(r.chart,r.seriesItems),d=r.chartType,c=r.themeSettings,h=r.viewModel,g=r.visualProperties,S=r.currentFeatureIndex,p=r.sorting,y=[],m=u[0],f={name:"data",data:[]},I=[],v=0,C=0,b=1e6,x=-1e6,V=m.points;if(t.isConditionalStylingEnabled(d)&&g.conditionalStyling){var T=i.getStatistics(g.conditionalStyling);T&&m&&(s=n.getChartData(T,V.length))}V.forEach(function(e,t){var a=n.getPointValue({point:e,index:t,seriesIndex:0,maxValue:!1,chartType:d,visualProperties:g,viewModel:h,currentFeatureIndex:S,chartData:s});I[t]=a,a=a||0,v+=a,C+=Math.abs(a),b=Math.min(b,a),x=Math.max(x,a)});var D=v/V.length;return V.forEach(function(a,n){var r,s=I[n],h=s||0;if(t.isConditionalStylingEnabled(d)&&g.conditionalStyling){var S=i.getConditionalStyle(h,g.conditionalStyling);r=S&&S.backgroundColor}r=r||e.calcColorForPoint({point:a,seriesItem:m,pointIndex:n,seriesIndex:0,numSeries:u.length,chartType:d,themeSettings:c}),f.data.push({originalValue:s,x:1,y:Math.max(1e-4,h),isUnavailableData:isNaN(s),valueProp:"y",unsortedIndex:n,name:a.label,point:a,fill:r,text:o.formatDataLabel(h,a.label,C,g,d),tooltip:l.getTooltipInfo({yValue:s,pointLabel:a.label,seriesLabel:null,minInSeriesValue:b,maxInSeriesValue:x,sumInSeriesValue:v,absSumInSeriesValue:C,avgInSeriesValue:D,visualProperties:g,chartType:d,color:r,conditionalStyling:g.conditionalStyling,fieldInfo:a.fieldInfo,decimals:a.value&&a.value.decimals}),stroke:{width:0}})}),t.isSortingEnabled(d)&&p&&p!==a.NONE&&f.data.sort(function(e,t){return(e.y-t.y)*(p===a.DESC?-1:1)}),y.push(f),y}}});