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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/declare","../../ChartTypes","../../ChartDataLabelsTypes","../../plots/ClusteredColumns","../../plots/StackedColumns","../../plots/ClusteredBars","../../plots/StackedBars","../../plots/PictureClusteredColumns","../../plots/PictureClusteredBars","../../plots/Lines","../../plots/StackedLines","../../plots/Areas","../../plots/StackedAreas","../../plots/_TouchPlotEvents","../utils/ChartDataLabelBuilder","../ChartPlots","./_ColumnBarLineChartSeriesCalculator","./_ColumnBarLineChartGridPlotBuilder","./_ComparisonUtil","./_BarSizeCalculator","./_AxisBuilder","./_PointLabelUtil"],function(e,a,t,r,i,l,s,o,n,c,d,u,p,C,P,m,h,f,y,b,L,S,_){return{configureChart:function(e){var a=e.chart,t=e.visualProperties,r=e.chartType,i=e.themeSettings,l=e.viewModel;_.createPointToLabelMap(a),this._addPrimaryPlot(e),this._addSecondaryPlot(e),this._configureBackgroundGridPlot(e),a.addAxis("x",S.createXAxis(null,t,r,i,l,a)),a.addAxis("y",S.createYAxis(null,t,r,i,l,a))},_configureBackgroundGridPlot:function(e){return y.configureBackgroundGridPlot(e)},_getLabelsParams:function(e){var a=r.hasLabel(e.dataLabels),t=r.hasValue(e.dataLabels),i=r.hasPercent(e.dataLabels),l=e.dataLabelsInside?"inside":"outside";return a||t||i?{labels:!0,labelStyle:l,labelOffset:5,labelFunc:function(a){return m.formatDataLabel(a,e)}}:null},_addPrimaryPlot:function(r){function m(e){e.type=a([e.type,P]),f.addPlot(h.PRIMARY,e)}var f=r.chart,y=r.visualProperties,b=r.chartType,L=r.viewModel,S=this._getLabelsParams(y),_=L.animationAllowed?{animate:!0}:null;switch(b){case t.COLUMN:m(e.mixin({type:y.isStacked?l:i},S,_));break;case t.BAR:m(e.mixin({type:y.isStacked?o:s},S,_));break;case t.LINE:case t.VERTICAL_LINE:m(e.mixin({type:y.fillLineArea?y.isStacked?C:p:y.isStacked?u:d,markers:L.isGraphicStyle},_));break;case t.PICTURE_COLUMN:m(e.mixin({type:n},S,_));break;case t.PICTURE_BAR:m(e.mixin({type:c},S,_))}},_addSecondaryPlot:function(t){var r=t.chart,i=t.chartType,l=t.comparisonInfo;l&&!b.isComparisonInPrimaryPlot(i,l)&&(r.addPlot(h.SECONDARY,e.mixin({type:a([d,P]),markers:!0})),r.movePlotToFront(h.SECONDARY))},updateBarSize:function(e){L.updateBarSize(e)},prettifyColumnBarYAxis:function(e){f.prettifyColumnBarYAxis(e)},calcSeries:function(e){return f.calcSeries(e)}}});