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

define(["../../ChartTypes","../utils/ChartDataUtil","../ChartPlots","./_ComparisonUtil","../../ChartBarThickness"],function(t,r,e,i,a){function n(t,r,e,i){var n=e/(t||1),o=i.renderColumnBarsInOppositeDirections&&r>1;return n/=i.isStacked?1:o?Math.round(r/2):r,n=Math.round(n),i.columnBarGap?n-=i.columnBarGap:i.columnThickness===a.SMALL?n*=.25:i.columnThickness===a.LARGE?n*=.75:n*=.5,n}return{updateBarSize:function(r){var a=r.chart,o=r.visualProperties,s=r.comparisonInfo,c=r.seriesItems,h=r.chartType,u=r.chartSize;if(a&&h!==t.LINE){var u=u||o[t.isColumnLike(h)?"width":"height"],l=0;c.forEach(function(t){l=Math.max(l,t.points.length)});var m=n(l,i.getEffectiveNumberOfSeries(c,h,s),u,o);a.getPlot(e.PRIMARY).opt.maxBarSize=m,a.getPlot(e.PRIMARY).opt.minBarSize=m,a.dirty=!0}}}});