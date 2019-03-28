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

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,a,l,o){return o=o.geoenrichment.dijit.ReportPlayer.ChartContainer,{calcSeries:function(o){var r=(o.chart,o.seriesItems),s=o.chartType,d=o.themeSettings,u=o.viewModel,c=o.visualProperties,h=o.currentFeatureIndex,S=o.sorting,g=[],p=r[0],y={name:"data",data:[]};if(g.push(y),!p||!p.points.length)return g;var m,v=[],f=0,I=0,C=1e6,x=-1e6,b=p.points;if(i.isConditionalStylingEnabled(s)&&c.conditionalStyling){var V=n.getStatistics(c.conditionalStyling);V&&p&&(m=a.getChartData(V,b.length))}var T=0;b.forEach(function(e,i){var t=e.hidden?void 0:a.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:s,visualProperties:c,viewModel:u,currentFeatureIndex:h,chartData:m});v[i]=t,t=t||0,e.hidden||(T++,f+=t,I+=Math.abs(t),C=Math.min(C,t),x=Math.max(x,t))});var E=f/T;return b.forEach(function(t,a){if(!t.hidden){var o,u=v[a],h=u||0;if(i.isConditionalStylingEnabled(s)&&c.conditionalStyling){var S=n.getConditionalStyle(h,c.conditionalStyling);o=S&&S.backgroundColor}o=o||e.calcColorForPoint({point:t,seriesItem:p,pointIndex:a,seriesIndex:0,numSeries:r.length,chartType:s,themeSettings:d}),y.data.push({originalValue:u,x:1,y:Math.max(1e-4,h),isUnavailableData:isNaN(u),valueProp:"y",unsortedIndex:a,name:t.label,point:t,fill:o,valuesSumsInSeries:I,seriesIndex:0,tooltip:l.getTooltipInfo({yValue:u,pointLabel:t.label,seriesLabel:null,minInSeriesValue:C,maxInSeriesValue:x,sumInSeriesValue:f,absSumInSeriesValue:I,avgInSeriesValue:E,visualProperties:c,chartType:s,color:o,conditionalStyling:c.conditionalStyling,fieldInfo:t.fieldInfo,decimals:t.value&&t.value.decimals}),stroke:{width:0}})}}),i.isSortingEnabled(s)&&S&&S!==t.NONE&&y.data.sort(function(e,i){return(e.y-i.y)*(S===t.DESC?-1:1)}),g}}});