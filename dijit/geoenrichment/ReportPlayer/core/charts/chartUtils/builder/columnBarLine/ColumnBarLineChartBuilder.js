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

define(["dojo/_base/lang","dojox/charting/axis2d/Default","../../ThemeCalculator","../../ChartTypes","../../plots/ClusteredColumns","../../plots/StackedColumns","../../plots/ClusteredBars","../../plots/StackedBars","../../plots/PictureClusteredColumns","../../plots/PictureClusteredBars","../../plots/Lines","../../plots/StackedLines","../../plots/Areas","../../plots/StackedAreas","../../../../themes/ReportThemes","../utils/ChartDataLabelBuilder","../ChartPlots","./_ColumnBarLineChartSeriesCalculator","./_ColumnBarLineChartGridPlotBuilder","./_ComparisonUtil","./_BarSizeCalculator","./_AxisBuilder","./_PointLabelUtil"],function(e,a,t,r,i,l,o,s,n,d,u,c,m,P,p,C,f,h,S,b,A,L,y){return{configureChart:function(e){var a=e.chart,t=e.visualProperties,r=e.chartType,i=e.themeSettings,l=e.viewModel;y.createPointToLabelMap(a),this._addPrimaryPlot(e),this._addSecondaryPlot(e),this._configureBackgroundGridPlot(e),a.addAxis("x",L.createXAxis(null,t,r,i,l,a)),a.addAxis("y",L.createYAxis(null,t,r,i,l,a))},_configureBackgroundGridPlot:function(e){return S.configureBackgroundGridPlot(e)},_getLabelsParams:function(e){var a=-1!==e.dataLabels.indexOf("Label"),t=-1!==e.dataLabels.indexOf("Value"),r=-1!==e.dataLabels.indexOf("Percent"),i=e.dataLabelsInside?"inside":"outside";return a||t||r?{precision:0,labels:!0,labelStyle:i,labelHorizontalAlign:e.dataLabelsHorizontalAlign,htmlLabels:!0,labelOffset:5,labelFunc:function(a){return C.formatDataLabel(a.originalValue,a.name,a._valuesSumsInSeries,e)}}:null},_addPrimaryPlot:function(a){var t=a.chart,C=a.visualProperties,h=a.chartType,S=a.viewModel,b=this._getLabelsParams(C),A=S.dynamicReportInfo&&S.chartAnimationAllowed?{animate:!0}:null;switch(h){case r.COLUMN:t.addPlot(f.PRIMARY,e.mixin({type:C.isStacked?l:i},b,A));break;case r.BAR:t.addPlot(f.PRIMARY,e.mixin({type:C.isStacked?s:o},b,A));break;case r.LINE:t.addPlot(f.PRIMARY,e.mixin({type:C.fillLineArea?C.isStacked?P:m:C.isStacked?c:u,markers:S.reportStyle===p.GRAPHIC},A));break;case r.PICTURE_COLUMN:t.addPlot(f.PRIMARY,e.mixin({type:n},b,A));break;case r.PICTURE_BAR:t.addPlot(f.PRIMARY,e.mixin({type:d},b,A))}},_addSecondaryPlot:function(a){var t=a.chart,r=a.chartType,i=a.comparisonInfo;i&&!b.isComparisonInPrimaryPlot(r,i)&&(t.addPlot(f.SECONDARY,e.mixin({type:u,markers:!0})),t.movePlotToFront(f.SECONDARY))},updateBarSize:function(e){return A.updateBarSize(e)},calcSeries:function(e){return h.calcSeries(e)},getFullSeriesItems:function(e){return b.updateSeriesItemsForComparisonInfo(e),e.seriesItemsWithComparison||e.seriesItems}}});