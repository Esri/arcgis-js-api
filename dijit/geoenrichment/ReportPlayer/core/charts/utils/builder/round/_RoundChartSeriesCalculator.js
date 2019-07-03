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

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../sections/dynamicSettings/supportClasses/FilterUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,a,l,o,r,s,u){u=u.geoenrichment.dijit.ReportPlayer.ChartContainer;var d={calcLineStyle:function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness||0,style:n.toGFXValue(t.outlineStyle||n.SOLID)}}};return{calcSeries:function(n){var u=(n.chart,n.seriesItems),c=n.chartType,h=n.themeSettings,g=n.viewModel,S=n.visualProperties,y=n.currentFeatureIndex,p=n.sorting,f=[],m=u[0],v={name:"data",data:[]};if(f.push(v),!m||!m.points.length)return f;var C,I=[],x=0,b=0,V=1e6,P=-1e6,T=m.points;if(S.filter&&S.filter.ranges)C=o.getChartData({filterRangesStats:l.getRangeStatistics(S.filter.ranges),numPoints:T.length});else if(t.isConditionalStylingEnabled(c)&&S.conditionalStyling){var D=a.getStatistics(S.conditionalStyling);D&&m&&(C=o.getChartData({conditionalStats:D,numPoints:T.length}))}var E=0;T.forEach(function(e,t){var i=e.hidden?void 0:o.getPointValue({point:e,index:t,seriesIndex:0,maxValue:!1,chartType:c,visualProperties:S,viewModel:g,currentFeatureIndex:y,chartData:C});I[t]=i,i=i||0,e.hidden||(E++,x+=i,b+=Math.abs(i),V=Math.min(V,i),P=Math.max(P,i))});var k=x/E;return T.forEach(function(i,n){if(!i.hidden){var l,o=I[n],g=o||0;if(t.isConditionalStylingEnabled(c)&&S.conditionalStyling){var y=a.getConditionalStyle(g,S.conditionalStyling);l=y&&y.backgroundColor}l=l||e.calcColorForPoint({point:i,seriesItem:m,pointIndex:n,seriesIndex:0,numSeries:u.length,chartType:c,themeSettings:h});var p=d.calcLineStyle(l,S);l=S.fillOpacity<1?s.getColorWithAlpha(l,S.fillOpacity):l;var f={originalValue:o,x:1,y:Math.max(1e-4,g),isUnavailableData:isNaN(o),valueProp:"y",unsortedIndex:n,name:i.label,point:i,fill:l,valuesSumsInSeries:b,seriesIndex:0,stroke:{color:p.color,width:p.width,style:p.style}},C=r.getTooltipInfo({yValue:o,pointLabel:i.label,seriesLabel:null,minInSeriesValue:V,maxInSeriesValue:P,sumInSeriesValue:x,absSumInSeriesValue:b,avgInSeriesValue:k,visualProperties:S,chartType:c,conditionalStyling:S.conditionalStyling,fieldInfo:i.fieldInfo,decimals:i.value&&i.value.decimals,fill:f.fill,stroke:f.stroke.width>0?f.stroke.color:void 0});f.tooltip=C,v.data.push(f)}}),t.isSortingEnabled(c)&&p&&p!==i.NONE&&v.data.sort(function(e,t){return(e.y-t.y)*(p===i.DESC?-1:1)}),f}}});