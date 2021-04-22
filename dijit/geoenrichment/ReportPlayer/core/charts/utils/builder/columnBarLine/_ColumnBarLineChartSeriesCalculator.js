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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","./_ComparisonUtil","./_ColumnBarChartSeriesCalculator","./_LineChartSeriesCalculator"],(function(e,r,i,s,t){return{calcSeries:function(o){if(i.updateSeriesItemsForComparisonInfo(o),r.isLineLike(o.chartType))return t.calcSeriesLine(o);if(o.seriesItemsWithComparison&&!i.isComparisonInPrimaryPlot(o.chartType,o.comparisonInfo)){for(var a=o.seriesItemsWithComparison,n=[],p=0;p<o.seriesItems.length;p++)n.push(a[2*p+1]);delete o.seriesItemsWithComparison,o.plotStats=o.plotStats||{};var c=s.calcSeriesColumnBar(o),l=e.mixin({},o);l.seriesItems=n,l.isSecondaryPlot=!0,l.primarySeries=c,l.primaryPlotStat=o.plotStats,l.reverseXY=r.isXAxisVertical(o.chartType),l.oppositeDirections=o.visualProperties.renderColumnBarsInOppositeDirections,l.reverseOrder=l.oppositeDirections&&r.isBarLike(o.chartType);var m=t.calcSeriesLine(l);return c.concat(m)}return s.calcSeriesColumnBar(o)},prettifyColumnBarYAxis:function(e){s.prettifyColumnBarYAxis(e)}}}));