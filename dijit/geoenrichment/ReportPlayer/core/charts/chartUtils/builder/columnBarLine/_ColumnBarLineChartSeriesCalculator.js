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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ChartTypes","./_ComparisonUtil","./_ColumnBarChartSeriesCalculator","./_LineChartSeriesCalculator"],function(e,r,i,s,t){return{calcSeries:function(a){if(i.updateSeriesItemsForComparisonInfo(a),a.chartType===r.LINE)return t.calcSeriesLine(a);if(a.seriesItemsWithComparison&&!i.isComparisonInPrimaryPlot(a.chartType,a.comparisonInfo)){for(var o=a.seriesItemsWithComparison,n=[],c=0;c<a.seriesItems.length;c++)n.push(o[2*c+1]);delete a.seriesItemsWithComparison,a.plotStat={};var l=s.calcSeriesColumnBar(a),p=e.mixin({},a);p.seriesItems=n,p.isSecondaryPlot=!0,p.primarySeries=l,p.primaryPlotStat=a.plotStat,p.reverseXY=r.isBarLike(a.chartType),p.oppositeDirections=a.visualProperties.renderColumnBarsInOppositeDirections;var m=t.calcSeriesLine(p);return l.concat(m)}return s.calcSeriesColumnBar(a)}}});