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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../../ChartTypes","../ChartPlots"],function(e,n){return{getComparisonPlotName:function(o,s){return s&&s.chartType===e.LINE&&o!==e.LINE?n.SECONDARY:null},isComparisonInPrimaryPlot:function(e,n){return!this.getComparisonPlotName(e,n)},getEffectiveNumberOfSeries:function(e,n,o){return this.canShowComparison(o,e)&&this.isComparisonInPrimaryPlot(n,o)?2*e.length:e.length},canShowComparison:function(e,n){return e&&(1===n.length||2===n.length)},updateSeriesItemsForComparisonInfo:function(e){if(this.canShowComparison(e.comparisonInfo,e.seriesItems)){var n=[];e.seriesItems.forEach(function(o,s){n.push(o),n.push({isComparisonSeries:!0,label:e.selectedComparisonAreaName+(e.seriesItems.length>1?" ("+o.label+")":""),points:o.points.slice()})}),e.seriesItemsWithComparison=n}}}});