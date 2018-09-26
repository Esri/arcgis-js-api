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

define(["dojo/_base/lang","../../ChartTypes","../ChartPlots"],function(e,i,n){return{getComparisonPlotName:function(e,s){return s&&s.chartType===i.LINE&&!i.isLineLike(e)?n.SECONDARY:null},isComparisonInPrimaryPlot:function(e,i){return!this.getComparisonPlotName(e,i)},getEffectiveNumberOfSeries:function(e,i,n,s,t){return this.canShowComparison(n,e,s)?s?e.length+1+(t?t.length:0):this.isComparisonInPrimaryPlot(i,n)?2*e.length:e.length:e.length},canShowComparison:function(e,i,n){return e&&(n||1===i.length||2===i.length)},updateSeriesItemsForComparisonInfo:function(n){function s(e){return n.ge.getFieldValueAt("StdGeographyName",e)}if(this.canShowComparison(n.comparisonInfo,n.seriesItems,n.isMultiFeatureChart)){var t=[n.selectedComparisonAreaId];if(n.additionalComparisonAreaIds&&(t=t.concat(n.additionalComparisonAreaIds)),n.isMultiFeatureChart)if(i.isLineLike(n.chartType)){var o=n.seriesItems.slice();t.forEach(function(e){o.push({isComparisonSeries:!0,label:s(e),points:n.seriesItems[0].points.map(function(i){return{label:i.label,value:{value:n.ge.getFieldValueAt(i.fieldInfo.name,e)}}})})}),n.seriesItemsWithComparison=o}else{var r=n.seriesItems.map(function(i){var n=e.mixin({},i);return n.points=n.points.slice(),n});t.forEach(function(e){r.forEach(function(i){var t=i.points[0];i.points.push({label:s(e),color:t.color,value:{value:n.ge.getFieldValueAt(t.fieldInfo.name,e)}})})}),n.seriesItems=r,delete n.comparisonInfo}else{var o=[];n.seriesItems.forEach(function(e,i){o.push(e),o.push({isComparisonSeries:!0,label:s(n.selectedComparisonAreaId)+(n.seriesItems.length>1?" ("+e.label+")":""),points:e.points.slice()})}),n.seriesItemsWithComparison=o}}}}});