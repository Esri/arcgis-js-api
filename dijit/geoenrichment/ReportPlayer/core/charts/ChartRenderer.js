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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","esri/dijit/geoenrichment/Deferred","dojo/dom-construct"],function(e,r,n){var t,i,a,o={};return o.isAsync=!0,o.loadModules=function(){var n=new r;return e(["./ChartContainer","./utils/ThemeCalculator","./utils/ChartJsonUtil"],function(e,r,c){t=e,i=r,a=c,o.isAsync=!1,n.resolve()}),n.promise},o.createChartPage=function(e,r){var o,c=e.json,d=e.creationParams;a.provideDefaultValueForMissing(c);var s=d.viewModel.isBenchmarkedArea&&d.viewModel.isBenchmarkedArea(d.currentFeatureIndex);c=a.cleanUpJson(c,d.viewModel.isGraphicStyle,{isBenchmarked:s});var u=d.viewModel.getChartDefaultStyles(d.theme);return d.chartTheme=i.getThemeForSettings(c,u,{isEditMode:d.isEditMode,isBenchmarked:s}),r=r||t,o=new r(d,e.node?n.create("div",null,e.node):void 0),"function"==typeof e.placeFunc&&e.placeFunc(o),o.updateChart(c),o},o});