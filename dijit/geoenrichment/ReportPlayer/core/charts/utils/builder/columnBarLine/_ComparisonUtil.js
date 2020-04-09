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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","../ChartPlots","../../ChartFilterUtil"],(function(e,i,t,s){return{getComparisonPlotName:function(e,s){return s&&s.chartType===i.LINE&&!i.isLineLike(e)?t.SECONDARY:null},isComparisonInPrimaryPlot:function(e,i){return!this.getComparisonPlotName(e,i)},getEffectiveNumberOfSeries:function(e,i,t,s,r){function n(){return r?e.filter((function(e){return!r[e.label]})).length:e.length}return this.canShowComparison(t,e,s)?s?n():this.isComparisonInPrimaryPlot(i,t)?2*n():n():n()},canShowComparison:function(e,i,t){return e&&(t||1===i.length||2===i.length)},updateSeriesItemsForComparisonInfo:function(t){if(this.canShowComparison(t.comparisonInfo,t.seriesItems,t.isMultiFeatureChart))if(t.isMultiFeatureChart)if(i.isLineLike(t.chartType)){var r=t.seriesItems.slice(),n=s.getFirstSeriesItem(t.seriesItems)||t.seriesItems[0];t.comparisonFeatureAttributes.forEach((function(e){r.push({isComparisonSeries:!0,label:a(e),points:n.points.map((function(i){return{label:i.label,value:{value:e[i.fieldInfo.name]||0}}}))})})),t.seriesItemsWithComparison=r}else{var o=t.seriesItems.map((function(i){var t=e.mixin({},i);return t.points=t.points.slice(),t}));t.comparisonFeatureAttributes.forEach((function(e){o.forEach((function(i){var t=s.getFirstSeriesPoint(i)||i.points[0];i.points.push({label:a(e),color:t.color,value:{value:e[t.fieldInfo.name]||0}})}))})),t.seriesItems=o,delete t.comparisonInfo}else{r=[];t.seriesItems.forEach((function(e,s){var n;if(r.push(e),i.isLineLike(t.chartType)){if(s!==t.seriesItems.length-1)return;n={isComparisonSeries:!0,label:a(t.comparisonFeatureAttributes[0]),points:e.points.slice()}}else n={isComparisonSeries:!0,label:a(t.comparisonFeatureAttributes[0])+(t.seriesItems.length>1?" ("+e.label+")":""),points:e.points.slice()};r.push(n)})),t.seriesItemsWithComparison=r}function a(e){return e.StdGeographyName}}}}));