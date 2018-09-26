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

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","../utils/ChartDataLabelBuilder","dojo/i18n!esri/nls/jsapi"],function(a,t,e,i,n,l,o,r){return r=r.geoenrichment.dijit.ReportPlayer.ChartContainer,{calcSeries:function(r){var s,u=(r.chart,r.seriesItems),d=r.chartType,c=r.themeSettings,g=r.viewModel,h=r.visualProperties,S=r.currentFeatureIndex,y=r.sorting,f=[],p=u[0],m={name:"data",data:[]},C=[],v=0,b=0,I=1e6,V=-1e6,x=p.points;if(t.isConditionalStylingEnabled(d)&&h.conditionalStyling){var E=i.getStatistics(h.conditionalStyling);E&&p&&(s=n.getChartData(E,x.length))}x.forEach(function(a,t){var e=n.getPreviewValue(a,t,0,!1,d,h,g,S,s);C[t]=e,e=e||0,v+=e,b+=Math.abs(e),I=Math.min(I,e),V=Math.max(V,e)});var D=v/x.length;return x.forEach(function(e,n){var r,s=C[n],g=s||0;if(t.isConditionalStylingEnabled(d)&&h.conditionalStyling){var S=i.getConditionalStyle(g,h.conditionalStyling);r=S&&S.backgroundColor}r=r||a.calcColorForPoint(e,p,n,0,u.length,d,c),m.data.push({originalValue:s,x:1,y:Math.max(1e-4,g),isUnavailableData:isNaN(s),valueProp:"y",unsortedIndex:n,name:e.label,point:e,fill:r,text:o.formatDataLabel(g,e.label,b,h,d),tooltip:l.getTooltipInfo({yValue:s,pointLabel:e.label,seriesLabel:null,minInSeriesValue:I,maxInSeriesValue:V,sumInSeriesValue:v,absSumInSeriesValue:b,avgInSeriesValue:D,visualProperties:h,chartType:d,color:r,conditionalStyling:h.conditionalStyling,fieldInfo:e.fieldInfo,decimals:e.value&&e.value.decimals}),stroke:{width:0}})}),t.isSortingEnabled(d)&&y&&y!==e.NONE&&m.data.sort(function(a,t){return(a.y-t.y)*(y===e.DESC?-1:1)}),f.push(m),f}}});