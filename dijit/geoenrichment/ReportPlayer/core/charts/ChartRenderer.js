// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","esri/dijit/geoenrichment/Deferred","dojo/dom-construct"],(function(e,r,n){var t,i,a,o={isAsync:!0,loadModules:function(){var n=new r;return e(["./ChartContainer","./utils/ThemeCalculator","./utils/ChartJsonUtil"],(function(e,r,c){t=e,i=r,a=c,o.isAsync=!1,n.resolve()})),n.promise},createChartPage:function(e,r){var o,c=e.creationParams.json,s=e.creationParams;a.provideDefaultValueForMissing(c);var d=s.viewModel.isBenchmarkedArea&&s.viewModel.isBenchmarkedArea(s.currentFeatureIndex);c=a.cleanUpJson(c,s.viewModel.isGraphicStyle(),{isBenchmarked:d});var u=s.viewModel.getChartDefaultStyles(s.theme);return s.chartTheme=i.getThemeForSettings(c,u,{isEditMode:s.isEditMode,isBenchmarked:d}),o=new(r=r||t)(s,e.node?n.create("div",null,e.node):void 0),"function"==typeof e.placeFunc&&e.placeFunc(o),o.updateChart(c),o}};return o}));