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

define(["../../ChartTypes","../ChartPlots","./_ComparisonUtil","../../ChartBarThickness"],function(e,i,t,r){function a(e,i,t,a){var n=t/(e||1),o=a.renderColumnBarsInOppositeDirections&&i>1;return n/=a.isStacked?1:o?Math.round(i/2):i,n=Math.round(n),a.columnBarGap?n-=a.columnBarGap:a.columnThickness===r.SMALL?n*=.25:a.columnThickness===r.LARGE?n*=.75:n*=.5,n}return{updateBarSize:function(r){var n=r.chart,o=r.visualProperties,s=r.comparisonInfo,c=r.seriesItems,u=r.chartType,h=r.isMultiFeatureChart,l=r.additionalComparisonAreaIds,m=r.chartSize;if(n&&!e.isLineLike(u)){var m=m||o[e.isColumnLike(u)?"width":"height"],p=0;c.forEach(function(e){p=Math.max(p,e.points.length)});var d=t.getEffectiveNumberOfSeries(c,u,s,h,l),f=a(p,d,m,o);n.getPlot(i.PRIMARY).opt.maxBarSize=f,n.getPlot(i.PRIMARY).opt.minBarSize=f,n.dirty=!0}}}});