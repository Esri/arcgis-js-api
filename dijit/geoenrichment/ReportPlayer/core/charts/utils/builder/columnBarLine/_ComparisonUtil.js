// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","../ChartPlots","../../ChartFilterUtil"],(function(e,i,r,t){return{getComparisonPlotName:function(e,t){return t&&t.chartType===i.LINE&&!i.isLineLike(e)?r.SECONDARY:null},isComparisonInPrimaryPlot:function(e,i){return!this.getComparisonPlotName(e,i)},getEffectiveNumberOfSeries:function(e,i,r,t,n){function o(){return n?e.filter((function(e){return!n[e.label]})).length:e.length}return this.canShowComparison(r,e,t)?t?o():this.isComparisonInPrimaryPlot(i,r)?2*o():o():o()},canShowComparison:function(e,i,r){return e&&(r||1===i.length||2===i.length)},updateSeriesItemsForComparisonInfo:function(r){if(this.canShowComparison(r.comparisonInfo,r.seriesItems,r.isMultiFeatureChart))if(r.isMultiFeatureChart)if(i.isLineLike(r.chartType)){var n=r.seriesItems.slice(),o=t.getFirstSeriesItem(r.seriesItems)||r.seriesItems[0];r.comparisonFeatureAttributes.forEach((function(e){var i=a(e),r={isComparisonSeries:!0,label:i,points:o.points.map((function(r){return{label:r.label,fieldInfo:r.fieldInfo,value:{value:e[r.fieldInfo.name]||0},isComparisonPoint:!0,comparisonFeatureAttribute:e,areaName:i,originalSeriesName:r.originalSeriesName}}))};n.push(r)})),r.seriesItemsWithComparison=n}else{var s=r.seriesItems.map((function(i){var r=e.mixin({},i);return r.points=r.points.slice(),r}));r.comparisonFeatureAttributes.forEach((function(e){s.forEach((function(i){var r=t.getFirstSeriesPoint(i)||i.points[0],n=a(e);i.points.push({label:n,color:r.color,fieldInfo:r.fieldInfo,value:{value:e[r.fieldInfo.name]||0},isComparisonPoint:!0,comparisonFeatureAttribute:e,areaName:n,originalSeriesName:r.originalSeriesName})}))})),r.seriesItems=s,delete r.comparisonInfo}else{n=[];r.seriesItems.forEach((function(t,o){var s;n.push(t);var m=a(r.comparisonFeatureAttributes[0]);if(i.isLineLike(r.chartType)){if(o!==r.seriesItems.length-1)return;s={isComparisonSeries:!0,label:m,points:t.points.map((function(i){return e.mixin({},i)}))}}else s={isComparisonSeries:!0,label:m+(r.seriesItems.length>1?" ("+t.label+")":""),points:t.points.map((function(i){return e.mixin({},i)}))};s.points.forEach((function(e){e.isComparisonPoint=!0,e.comparisonFeatureAttribute=r.comparisonFeatureAttributes[0],e.areaName=m,e.originalSeriesName=t.label})),n.push(s)})),r.seriesItemsWithComparison=n}function a(e){return e.StdGeographyName}}}}));