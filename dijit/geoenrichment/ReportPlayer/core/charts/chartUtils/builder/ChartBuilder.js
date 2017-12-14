// COPYRIGHT © 2017 Esri
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

define(["esri/dijit/geoenrichment/ReportPlayer/config","../ChartTypes","./_RoundChartBuilder","./_ColumnBarLineChartBuilder","esri/dijit/geoenrichment/utils/ObjectUtil"],function(n,t,i,r,e){var a={};return a.supportConditionalStyling=function(n){return r.supportConditionalStyling(n)||i.supportConditionalStyling(n)},a.getChartBuilder=function(n){return t.isRoundChart(n)?i:r},a.checkSeriesAreValid=function(t){return n.charts.showErrorIfHasUnavailableData?!t.some(function(n){return n.data.some(function(n){return n.isUnavailableData})}):!0},a});