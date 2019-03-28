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

define(["dojo/dom-construct","../ChartContainer","./ThemeCalculator","./ChartJsonUtil"],function(e,t,a,n){var r={};return r.createChartPage=function(r,o){var i,c=r.json,l=r.creationParams;n.provideDefaultValueForMissing(c),c=n.cleanUpJson(c,l.viewModel.isGraphicStyle);var u=l.viewModel.getChartDefaultStyles(l.theme);return l.chartTheme=a.getThemeForSettings(c,u,l.isEditMode),o=o||t,i=new o(l,r.node?e.create("div",null,r.node):void 0),"function"==typeof r.placeFunc&&r.placeFunc(i),i.updateChart(c),i},r});