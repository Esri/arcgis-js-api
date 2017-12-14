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

define(["esri/dijit/geoenrichment/utils/ObjectUtil","./ThemeLibrary","./ThemeUtil"],function(e,i,o){var l={};return l.populateMissingStyles=function(l){if(l){var t=o.getThemeColors(l),n=i.getDefaultTheme({defaultFontFamilty:l.document.fontFamily,defaultFontSize:l.document.fontSize}),r=l.chart.colors.slice();o.applyThemeColorsToTheme(n,t,r),e.populateObject(l,n,!1);var c=l.chart;c.colors=r,c.icon=c.icon||lang.clone(l.infographic.staticInfographic.icon),c.xAxis.lineColor=c.xAxis.lineColor||c.xAxis.axisStyle.color,c.yAxis.lineColor=c.yAxis.lineColor||c.yAxis.axisStyle.color}},l});