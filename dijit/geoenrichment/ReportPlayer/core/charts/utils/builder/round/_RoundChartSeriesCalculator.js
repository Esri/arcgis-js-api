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

define(["../../ThemeCalculator","../../ChartTypes","../../ChartSorting","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../sections/dynamicSettings/supportClasses/FilterUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,t,a,i,n,l,r,o,s){var u=function(e,t){return{color:s.getColorWithAlpha(t.outlineColor||e,t.outlineOpacity),width:t.outlineThickness||0,style:i.toGFXValue(t.outlineStyle||i.SOLID)}};return{calcSeries:function(i){var l=i.seriesItems,r=i.chartType,d=i.themeSettings,c=i.visualProperties,h=i.sorting;if(!l.length)return[];var m=l[0],p=[],S={name:"data",data:[]};if(p.push(S),!m.points.length)return p;var g=this._calcStats(i);return m.points.forEach((function(a,h){if(!a.hidden){var p,v=g.values[h],f=v.value,y=f||0;if(t.isConditionalStylingSupported(r)&&c.conditionalStyling){var V=n.getConditionalStyle(v.isBenchmarked?v.ownValue:y,c.conditionalStyling);p=V&&V.backgroundColor}p=p||e.calcColorForPoint({point:a,seriesItem:m,pointIndex:h,seriesIndex:0,numSeries:l.length,chartType:r,themeSettings:d});var I=u(p,c);p=c.fillOpacity<1?s.getColorWithAlpha(p,c.fillOpacity):p;var x={originalValue:f,x:1,y:t.supportsNegativeValues(r)?y:Math.max(1e-4,y),isUnavailableData:isNaN(f),valueProp:"y",unsortedIndex:h,name:a.label,point:a,fill:p,valuesSumsInSeries:g.absValuesSum,seriesIndex:0,stroke:{color:I.color,width:I.width,style:I.style},isBenchmarked:v.isBenchmarked,unbenchmarkedValue:v.ownValue,unbenchmarkedValuesSumsInSeries:g.unbenchmarkedAbsValuesSum},C=o.getTooltipInfo({yValue:f,pointLabel:a.label,seriesLabel:null,minInSeriesValue:g.minValue,maxInSeriesValue:g.maxValue,sumInSeriesValue:g.valuesSum,absSumInSeriesValue:g.absValuesSum,avgInSeriesValue:g.avgValue,visualProperties:c,chartType:r,conditionalStyling:c.conditionalStyling,fieldInfo:a.fieldInfo,decimals:a.value&&a.value.decimals,fill:x.fill,stroke:x.stroke.width>0?x.stroke.color:void 0,isBenchmarked:v.isBenchmarked,unbenchmarkedValue:v.ownValue,chartContainer:i.chartContainer,viewModel:i.viewModel,theme:i.theme,themeSettings:d,dataDrillingPanelInfo:i.dataDrillingPanelInfo,pointName:a.label,seriesName:m.label,areaName:null,featureIndex:i.currentFeatureIndex,isComparisonPoint:!1,comparisonFeatureAttribute:null});x.tooltip=C,S.data.push(x)}})),t.isSortingSupported(r)&&h&&h!==a.NONE&&S.data.sort((function(e,t){return(e.y-t.y)*(h===a.DESC?-1:1)})),p},_calcStats:function(e){var a,i=e.seriesItems[0],o=e.chartType,s=e.viewModel,u=e.visualProperties,d=e.currentFeatureIndex,c=[],h=0,m=0,p=0,S=1e6,g=-1e6,v=i.points,f=u.filter&&u.filter.ranges&&l.getRangeStatistics(u.filter.ranges),y=t.isConditionalStylingSupported(o)&&u.conditionalStyling&&n.getStatistics(u.conditionalStyling);(f||y)&&(a=r.getChartData({filterRangesStats:f,conditionalStats:y,numPoints:v.length,visualProperties:u}));var V=0;return v.forEach((function(e,i){var n=function(){if(e.hidden)return{value:void 0};var n=r.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:o,visualProperties:u,viewModel:s,currentFeatureIndex:d,chartData:a}),l=s.getBenchmarkController&&s.getBenchmarkController();return t.isBenchmarkSupported(o)&&l&&l.getAreaIndex()>=0&&l.getAreaIndex()!==d?{value:n-r.getPointValue({point:e,index:i,seriesIndex:0,maxValue:!1,chartType:o,visualProperties:u,viewModel:s,currentFeatureIndex:l.getAreaIndex(),chartData:a}),isBenchmarked:!0,ownValue:n}:{value:n}}();c[i]=n;var l=n.value||0;e.hidden||(V++,h+=l,m+=Math.abs(l),p+=Math.abs(n.ownValue||0),S=Math.min(S,l),g=Math.max(g,l))})),{values:c,valuesSum:h,absValuesSum:m,unbenchmarkedAbsValuesSum:p,minValue:S,maxValue:g,avgValue:h/V}}}}));