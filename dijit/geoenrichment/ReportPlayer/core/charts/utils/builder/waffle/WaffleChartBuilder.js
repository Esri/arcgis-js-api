// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../plots/waffle/Waffle","../../plots/_TouchPlotEvents","../ChartPlots","./_SeriesCalculator"],(function(e,a,t,l,o,r){return{configureChart:function(r){var n=a.mixin({type:e([t,l]),labelFunc:function(e){return ChartDataLabelBuilder.formatDataLabel(e,r.visualProperties)},animate:r.viewModel.isAnimationAllowed()});r.chart.addPlot(o.PRIMARY,n)},calcSeries:function(e){return r.calcSeries(e)}}}));