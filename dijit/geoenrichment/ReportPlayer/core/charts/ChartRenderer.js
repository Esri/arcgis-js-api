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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","esri/dijit/geoenrichment/Deferred","dojo/dom-construct"],function(e,t,n){var r,i,o,a={};return a.isAsync=!0,a.loadModules=function(){var n=new t;return e(["./ChartContainer","./utils/ThemeCalculator","./utils/ChartJsonUtil"],function(e,t,c){r=e,i=t,o=c,a.isAsync=!1,n.resolve()}),n.promise},a.createChartPage=function(e,t){var a,c=e.json,s=e.creationParams;o.provideDefaultValueForMissing(c),c=o.cleanUpJson(c,s.viewModel.isGraphicStyle);var u=s.viewModel.getChartDefaultStyles(s.theme);return s.chartTheme=i.getThemeForSettings(c,u,s.isEditMode),t=t||r,a=new t(s,e.node?n.create("div",null,e.node):void 0),"function"==typeof e.placeFunc&&e.placeFunc(a),a.updateChart(c),a},a});