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

define(["dojo/_base/lang","dojox/charting/axis2d/Default","../../ThemeCalculator","../../ChartTypes","../../plots/ClusteredColumns","../../plots/StackedColumns","../../plots/ClusteredBars","../../plots/StackedBars","../../plots/PictureClusteredColumns","../../plots/PictureClusteredBars","../../plots/Lines","../../plots/StackedLines","../../plots/Areas","../../plots/StackedAreas","../utils/ChartDataLabelBuilder","../ChartPlots","./_ColumnBarLineChartSeriesCalculator","./_ColumnBarLineChartGridPlotBuilder","./_ComparisonUtil","./_BarSizeCalculator","./_AxisBuilder","./_PointLabelUtil"],function(e,a,t,r,i,l,s,o,n,d,u,c,m,P,p,C,f,S,b,h,L,A){return{configureChart:function(e){var a=e.chart,t=e.visualProperties,r=e.chartType,i=e.themeSettings,l=e.viewModel;A.createPointToLabelMap(a),this._addPrimaryPlot(e),this._addSecondaryPlot(e),this._configureBackgroundGridPlot(e),a.addAxis("x",L.createXAxis(null,t,r,i,l,a)),a.addAxis("y",L.createYAxis(null,t,r,i,l,a))},_configureBackgroundGridPlot:function(e){return S.configureBackgroundGridPlot(e)},_getLabelsParams:function(e){var a=-1!==e.dataLabels.indexOf("Label"),t=-1!==e.dataLabels.indexOf("Value"),r=-1!==e.dataLabels.indexOf("Percent"),i=e.dataLabelsInside?"inside":"outside";return a||t||r?{precision:0,labels:!0,labelStyle:i,labelHorizontalAlign:e.dataLabelsHorizontalAlign,htmlLabels:!0,labelOffset:5,labelFunc:function(a){return p.formatDataLabel(a.originalValue,a.name,a._valuesSumsInSeries,e)}}:null},_addPrimaryPlot:function(a){var t=a.chart,p=a.visualProperties,f=a.chartType,S=a.viewModel,b=this._getLabelsParams(p),h=S.dynamicReportInfo&&S.animationAllowed?{animate:!0}:null;switch(f){case r.COLUMN:t.addPlot(C.PRIMARY,e.mixin({type:p.isStacked?l:i},b,h));break;case r.BAR:t.addPlot(C.PRIMARY,e.mixin({type:p.isStacked?o:s},b,h));break;case r.LINE:t.addPlot(C.PRIMARY,e.mixin({type:p.fillLineArea?p.isStacked?P:m:p.isStacked?c:u,markers:S.isGraphicStyle},h));break;case r.PICTURE_COLUMN:t.addPlot(C.PRIMARY,e.mixin({type:n},b,h));break;case r.PICTURE_BAR:t.addPlot(C.PRIMARY,e.mixin({type:d},b,h))}},_addSecondaryPlot:function(a){var t=a.chart,r=a.chartType,i=a.comparisonInfo;i&&!b.isComparisonInPrimaryPlot(r,i)&&(t.addPlot(C.SECONDARY,e.mixin({type:u,markers:!0})),t.movePlotToFront(C.SECONDARY))},updateBarSize:function(e){return h.updateBarSize(e)},calcSeries:function(e){return f.calcSeries(e)},getFullSeriesItems:function(e){return b.updateSeriesItemsForComparisonInfo(e),e.seriesItemsWithComparison||e.seriesItems}}});