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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../ChartTypes","../ChartPlots","./_ComparisonUtil","../../ChartBarThickness"],function(e,t,r,i){function a(e,t,r,a){var n=r/(e||1),o=a.renderColumnBarsInOppositeDirections&&t>1;return n/=a.isStacked?1:o?Math.round(t/2):t,n=Math.round(n),a.columnBarGap?n-=a.columnBarGap:a.columnThickness===i.SMALL?n*=.25:a.columnThickness===i.LARGE?n*=.75:n*=.5,n}return{updateBarSize:function(i){var n=i.chart,o=i.visualProperties,s=i.comparisonInfo,u=i.seriesItems,c=i.chartType,h=i.isMultiFeatureChart,m=i.numComparisonFeatures,p=i.chartSize;if(n&&!e.isLineLike(c)){var p=p||o[e.isColumnLike(c)?"width":"height"],l=0;u.forEach(function(e){l=Math.max(l,e.points.length)}),m&&(l+=m);var f=r.getEffectiveNumberOfSeries(u,c,s,h),d=a(l,f,p,o);n.getPlot(t.PRIMARY).opt.maxBarSize=d,n.getPlot(t.PRIMARY).opt.minBarSize=d,n.dirty=!0}}}});