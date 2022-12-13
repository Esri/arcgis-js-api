// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../sections/dynamicSettings/supportClasses/FilterUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,t,a,i,n,l,r,o,s){var u=function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness||0,style:i.toGFXValue(t.outlineStyle||i.SOLID)}};return{calcSeries:function(i){var n=i.seriesItems,l=i.chartType,r=i.themeSettings,d=i.visualProperties,c=i.sorting;if(!n.length)return[];var h=n[0],m=[],S={name:"data",data:[]};if(m.push(S),!h.points.length)return m;var p=this._calcStats(i);return h.points.forEach((function(a,c){if(!a.hidden){var m,g=p.values[c],v=g.value,f=v||0,y=p.conditional&&p.conditional.styles[c];m=(m=y&&y.backgroundColor)||e.calcColorForPoint({point:a,seriesItem:h,pointIndex:c,seriesIndex:0,numSeries:n.length,chartType:l,themeSettings:r});var V=u(m,d);m=d.fillOpacity<1?s.getColorWithAlpha(m,d.fillOpacity):m;var I={originalValue:v,x:1,y:t.supportsNegativeValues(l)?f:Math.max(1e-4,f),isUnavailableData:isNaN(v),valueProp:"y",unsortedIndex:c,name:a.label,point:a,fill:m,valuesSumsInSeries:p.absValuesSum,seriesIndex:0,stroke:{color:V.color,width:V.width,style:V.style},isBenchmarked:g.isBenchmarked,unbenchmarkedValue:g.ownValue,unbenchmarkedValuesSumsInSeries:p.unbenchmarkedAbsValuesSum},x=o.getTooltipInfo({yValue:v,pointLabel:a.label,seriesLabel:null,minInSeriesValue:p.minValue,maxInSeriesValue:p.maxValue,sumInSeriesValue:p.valuesSum,absSumInSeriesValue:p.absValuesSum,avgInSeriesValue:p.avgValue,visualProperties:d,chartType:l,conditionalStyling:d.conditionalStyling,conditionalStats:p.conditional&&p.conditional.stats,fieldInfo:a.fieldInfo,decimals:a.value&&a.value.decimals,fill:I.fill,stroke:I.stroke.width>0?I.stroke.color:void 0,isBenchmarked:g.isBenchmarked,unbenchmarkedValue:g.ownValue,chartContainer:i.chartContainer,viewModel:i.viewModel,theme:i.theme,themeSettings:r,dataDrillingPanelInfo:i.dataDrillingPanelInfo,pointName:a.label,seriesName:h.label,areaName:null,featureIndex:i.currentFeatureIndex,isComparisonPoint:!1,comparisonFeatureAttribute:null});I.tooltip=x,S.data.push(I)}})),t.isSortingSupported(l)&&c&&c!==a.NONE&&S.data.sort((function(e,t){return(e.y-t.y)*(c===a.DESC?-1:1)})),m},_calcStats:function(e){var a,i=e.seriesItems[0],o=e.chartType,s=e.viewModel,u=e.visualProperties,d=e.currentFeatureIndex,c=[],h=0,m=0,S=0,p=1e6,g=-1e6,v=i.points,f=u.filter&&u.filter.ranges&&l.getRangeStatistics(u.filter.ranges),y=t.isConditionalStylingSupported(o)&&u.conditionalStyling&&n.getStatistics(u.conditionalStyling);(f||y)&&(a=r.getChartData({filterRangesStats:f,conditionalStats:y,numPoints:v.length,visualProperties:u}));var V=0;v.forEach((function(e,i){var n=function(){if(e.hidden)return{value:void 0};var n=r.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:o,visualProperties:u,viewModel:s,currentFeatureIndex:d,chartData:a}),l=s.getBenchmarkController&&s.getBenchmarkController();return t.isBenchmarkSupported(o)&&l&&l.getAreaIndex()>=0&&l.getAreaIndex()!==d?{value:n-r.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:o,visualProperties:u,viewModel:s,currentFeatureIndex:l.getAreaIndex(),chartData:a}),isBenchmarked:!0,ownValue:n}:{value:n}}();c[i]=n;var l=n.value||0;e.hidden||(V++,h+=l,m+=Math.abs(l),S+=Math.abs(n.ownValue||0),p=Math.min(p,l),g=Math.max(g,l))}));var I=t.isConditionalStylingSupported(o)&&u.conditionalStyling?r.getConditionalStylesForStatsPointValues(c,u):null;return{values:c,conditional:I,valuesSum:h,absValuesSum:m,unbenchmarkedAbsValuesSum:S,minValue:p,maxValue:g,avgValue:h/V}}}}));