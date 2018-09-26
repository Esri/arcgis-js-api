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

define(["dojo/_base/lang","dojo/_base/declare","../../ChartTypes","../../plots/ClusteredColumns","../../plots/StackedColumns","../../plots/ClusteredBars","../../plots/StackedBars","../../plots/PictureClusteredColumns","../../plots/PictureClusteredBars","../../plots/Lines","../../plots/StackedLines","../../plots/Areas","../../plots/StackedAreas","../../plots/_TouchPlotEvents","../utils/ChartDataLabelBuilder","../ChartPlots","./_ColumnBarLineChartSeriesCalculator","./_ColumnBarLineChartGridPlotBuilder","./_ComparisonUtil","./_BarSizeCalculator","./_AxisBuilder","./_PointLabelUtil"],function(e,a,t,i,r,l,n,o,s,d,c,u,p,m,P,C,b,f,L,S,h,y){return{configureChart:function(e){var a=e.chart,t=e.visualProperties,i=e.chartType,r=e.themeSettings,l=e.viewModel;y.createPointToLabelMap(a),this._addPrimaryPlot(e),this._addSecondaryPlot(e),this._configureBackgroundGridPlot(e),a.addAxis("x",h.createXAxis(null,t,i,r,l,a)),a.addAxis("y",h.createYAxis(null,t,i,r,l,a))},_configureBackgroundGridPlot:function(e){return f.configureBackgroundGridPlot(e)},_getLabelsParams:function(e){var a=-1!==e.dataLabels.indexOf("Label"),t=-1!==e.dataLabels.indexOf("Value"),i=-1!==e.dataLabels.indexOf("Percent"),r=e.dataLabelsInside?"inside":"outside";return a||t||i?{precision:0,labels:!0,labelStyle:r,labelHorizontalAlign:e.dataLabelsHorizontalAlign,htmlLabels:!0,labelOffset:5,labelFunc:function(a){return P.formatDataLabel(a.originalValue,a.name,a._valuesSumsInSeries,e)}}:null},_addPrimaryPlot:function(P){function b(e){e.type=a([e.type,m]),f.addPlot(C.PRIMARY,e)}var f=P.chart,L=P.visualProperties,S=P.chartType,h=P.viewModel,y=this._getLabelsParams(L),_=h.dynamicReportInfo&&h.animationAllowed?{animate:!0}:null;switch(S){case t.COLUMN:b(e.mixin({type:L.isStacked?r:i},y,_));break;case t.BAR:b(e.mixin({type:L.isStacked?n:l},y,_));break;case t.LINE:case t.VERTICAL_LINE:b(e.mixin({type:L.fillLineArea?L.isStacked?p:u:L.isStacked?c:d,markers:h.isGraphicStyle},_));break;case t.PICTURE_COLUMN:b(e.mixin({type:o},y,_));break;case t.PICTURE_BAR:b(e.mixin({type:s},y,_))}},_addSecondaryPlot:function(t){var i=t.chart,r=t.chartType,l=t.comparisonInfo;l&&!L.isComparisonInPrimaryPlot(r,l)&&(i.addPlot(C.SECONDARY,e.mixin({type:a([d,m]),markers:!0})),i.movePlotToFront(C.SECONDARY))},updateBarSize:function(e){return S.updateBarSize(e)},calcSeries:function(e){return b.calcSeries(e)}}});