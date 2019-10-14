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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","../ChartPlots","../../ChartFilterUtil"],function(e,i,t,s){return{getComparisonPlotName:function(e,s){return s&&s.chartType===i.LINE&&!i.isLineLike(e)?t.SECONDARY:null},isComparisonInPrimaryPlot:function(e,i){return!this.getComparisonPlotName(e,i)},getEffectiveNumberOfSeries:function(e,i,t,s){return this.canShowComparison(t,e,s)?s?e.length:this.isComparisonInPrimaryPlot(i,t)?2*e.length:e.length:e.length},canShowComparison:function(e,i,t){return e&&(t||1===i.length||2===i.length)},updateSeriesItemsForComparisonInfo:function(t){function r(e){return e.StdGeographyName}if(this.canShowComparison(t.comparisonInfo,t.seriesItems,t.isMultiFeatureChart))if(t.isMultiFeatureChart)if(i.isLineLike(t.chartType)){var n=t.seriesItems.slice(),o=s.getFirstSeriesItem(t.seriesItems)||t.seriesItems[0];t.comparisonFeatureAttributes.forEach(function(e){n.push({isComparisonSeries:!0,label:r(e),points:o.points.map(function(i){return{label:i.label,value:{value:e[i.fieldInfo.name]||0}}})})}),t.seriesItemsWithComparison=n}else{var a=t.seriesItems.map(function(i){var t=e.mixin({},i);return t.points=t.points.slice(),t});t.comparisonFeatureAttributes.forEach(function(e){a.forEach(function(i){var t=s.getFirstSeriesPoint(i)||i.points[0];i.points.push({label:r(e),color:t.color,value:{value:e[t.fieldInfo.name]||0}})})}),t.seriesItems=a,delete t.comparisonInfo}else{var n=[];t.seriesItems.forEach(function(e,s){n.push(e);var o;if(i.isLineLike(t.chartType)){if(s!==t.seriesItems.length-1)return;o={isComparisonSeries:!0,label:r(t.comparisonFeatureAttributes[0]),points:e.points.slice()}}else o={isComparisonSeries:!0,label:r(t.comparisonFeatureAttributes[0])+(t.seriesItems.length>1?" ("+e.label+")":""),points:e.points.slice()};n.push(o)}),t.seriesItemsWithComparison=n}}}});