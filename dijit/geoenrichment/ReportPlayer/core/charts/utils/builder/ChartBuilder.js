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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/config","../ChartTypes","./waffle/WaffleChartBuilder","./round/RoundChartBuilder","./columnBarLine/ColumnBarLineChartBuilder"],(function(r,e,n,a,t){var i={getChartBuilder:function(r){return r===e.WAFFLE?n:r===e.PIE||r===e.DONUT||r===e.GAUGE||r===e.RING?a:t},checkSeriesAreValid:function(e){return!r.charts.showErrorIfHasUnavailableData||!e.some((function(r){return r.data.some((function(r){return r.isUnavailableData}))}))}};return i}));