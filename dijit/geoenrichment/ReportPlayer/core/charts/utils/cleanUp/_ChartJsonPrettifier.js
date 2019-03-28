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

define(["../ChartTypes","../ChartDataLabelsTypes","../../legends/ChartLegendTypes","../../legends/ChartLegendPlacements"],function(e,t,s,r){var a={};return a.prettifyJson=function(a,n){var i=a.seriesItems.length,l=a.visualProperties;if(l.legend){l.legend.series.hasBorder=!n;if(l.legend.type===s.SERIES&&e.isSeriesLegendEnabled(a.type,i,a.isMultiFeatureChart,!!a.comparisonInfo&&l.legend.series.showComparison)){var p;p=!n||i>1||a.type===e.PIE||a.type===e.DONUT||a.type===e.WAFFLE||a.isMultiFeatureChart?a.isMultiFeatureChart||a.type===e.WAFFLE?r.BOTTOM:r.RIGHT:r.NONE,l.legend.series.placement=p}}l.dataLabels=a.type===e.RING?t.LABEL_VALUE:t.NONE},a});