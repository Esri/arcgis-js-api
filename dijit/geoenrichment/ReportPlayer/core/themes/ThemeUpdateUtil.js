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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ThemeLibrary","./ThemeUtil"],function(e,i,o,t){var c={};return c.populateMissingStyles=function(c){if(c){c.table.overrideStyles||(c.table={overrideStyles:e.mixin({},c.table)}),c.icon||(c.icon=e.clone(c.infographic.staticInfographic.icon),c.highlightedIcon=e.clone(c.infographic.staticInfographic.highlightedIcon)),c.chart.icon||(c.chart.icon=e.clone(c.infographic.staticInfographic.icon)),c.chart.xAxis.lineColor||(c.chart.xAxis.lineColor=c.chart.xAxis.axisStyle.color,c.chart.yAxis.lineColor=c.chart.yAxis.axisStyle.color);var r=t.getThemeColors(c),l=c.chart.colors.slice(),a=c.chart.colors3series&&c.chart.colors3series.slice(),n=o.getDefaultTheme({defaultFontFamilty:c.document.fontFamily,defaultFontSize:c.document.fontSize});t.applyThemeColorsToTheme({theme:n,colors:r,chartColors:l,colors3series:a}),i.populateObject(c,n,!1)}},c});