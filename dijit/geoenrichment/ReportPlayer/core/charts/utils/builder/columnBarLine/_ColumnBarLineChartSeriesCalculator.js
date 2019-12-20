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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","./_ComparisonUtil","./_ColumnBarChartSeriesCalculator","./_LineChartSeriesCalculator"],function(e,r,i,s,t){return{calcSeries:function(a){if(i.updateSeriesItemsForComparisonInfo(a),r.isLineLike(a.chartType))return t.calcSeriesLine(a);if(a.seriesItemsWithComparison&&!i.isComparisonInPrimaryPlot(a.chartType,a.comparisonInfo)){for(var o=a.seriesItemsWithComparison,n=[],l=0;l<a.seriesItems.length;l++)n.push(o[2*l+1]);delete a.seriesItemsWithComparison,a.plotStats=a.plotStats||{};var c=s.calcSeriesColumnBar(a),p=e.mixin({},a);p.seriesItems=n,p.isSecondaryPlot=!0,p.primarySeries=c,p.primaryPlotStat=a.plotStats,p.reverseXY=r.isXAxisVertical(a.chartType),p.oppositeDirections=a.visualProperties.renderColumnBarsInOppositeDirections;var m=t.calcSeriesLine(p);return c.concat(m)}return s.calcSeriesColumnBar(a)},prettifyColumnBarYAxis:function(e){s.prettifyColumnBarYAxis(e)}}});