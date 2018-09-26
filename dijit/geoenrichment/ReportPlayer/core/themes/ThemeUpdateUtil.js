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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ThemeLibrary","./ThemeUtil"],function(e,i,o,l){var t={};return t.populateMissingStyles=function(t){if(t){t.table.overrideStyles||(t.table={overrideStyles:e.mixin({},t.table)});var n=l.getThemeColors(t),r=o.getDefaultTheme({defaultFontFamilty:t.document.fontFamily,defaultFontSize:t.document.fontSize}),a=t.chart.colors.slice();l.applyThemeColorsToTheme(r,n,a),i.populateObject(t,r,!1);var s=t.chart;s.colors=a,s.icon=s.icon||e.clone(t.infographic.staticInfographic.icon),s.xAxis.lineColor=s.xAxis.lineColor||s.xAxis.axisStyle.color,s.yAxis.lineColor=s.yAxis.lineColor||s.yAxis.axisStyle.color}},t});