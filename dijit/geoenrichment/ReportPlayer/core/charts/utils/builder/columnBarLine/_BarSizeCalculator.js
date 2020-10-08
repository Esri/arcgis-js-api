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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["../../ChartTypes","../ChartPlots","./_ComparisonUtil","../../ChartBarThickness"],(function(e,r,t,i){return{updateBarSize:function(a){var n=a.chart,o=a.visualProperties,s=a.seriesItems,u=a.chartType,c=a.numComparisonFeatures;if(n&&!e.isLineLike(u)){var h=a.chartSize||o[e.isColumnLike(u)?"width":"height"],m=0;s.forEach((function(e){m=Math.max(m,e.points.length)})),c&&(m+=c);var l=t.getEffectiveNumberOfSeries(s,u,a.comparisonInfo,a.isMultiFeatureChart,a.excludedSeriesHash),p=function(e,r,t,a){var n=t/(e||1),o=a.renderColumnBarsInOppositeDirections&&r>1;return n/=a.isStacked?1:o?Math.round(r/2):r,n=Math.round(n),a.columnBarGap?n-=a.columnBarGap:a.columnThickness===i.SMALL?n*=.25:a.columnThickness===i.LARGE?n*=.75:n*=.5,n}(m,l,h,o);n.getPlot(r.PRIMARY).opt.maxBarSize=p,n.getPlot(r.PRIMARY).opt.minBarSize=p,n.dirty=!0}}}}));