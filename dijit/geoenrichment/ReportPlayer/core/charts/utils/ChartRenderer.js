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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/dom-construct","../ChartContainer","./ThemeCalculator"],function(e,t,n){var a={};return a.createChartPage=function(a,r){var o,c=a.json,u=a.creationParams,i=u.viewModel.getChartDefaultStyles(u.theme);return u.chartTheme=n.getThemeForSettings(c,i),r=r||t,o=new r(u,a.node?e.create("div",null,a.node):void 0),"function"==typeof a.placeFunc&&a.placeFunc(o),o.updateChart(c),o},a});