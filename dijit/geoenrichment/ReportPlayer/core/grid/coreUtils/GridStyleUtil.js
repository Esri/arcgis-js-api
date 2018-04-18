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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./GridLayoutCalculator","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil","../../themes/ReportThemes","../ValueField"],function(e,l,t,i,r){var o={};return o.filterCellStyles=function(e){return o._filterCellStyles(e,r.SUPPORTED_STYLES)},o.filterCellTextStyles=function(e){return o._filterCellStyles(e,r.SUPPORTED_TEXT_STYLES)},o._filterCellStyles=function(e,l){var t={};for(var i in e)void 0!==e[i]&&l[i]&&(t[i]=e[i]);return t},o.combineCellStyle=function(r,n,s,a){var f={},d=r.viewModel.getDocumentDefaultStyles&&r.viewModel.getDocumentDefaultStyles(r.theme);if(t.copyOwnJsonProperties(d,f),r.viewModel.getTableDefaultStyles&&t.copyOwnJsonProperties(r.viewModel.getTableDefaultStyles(r.theme,"Default"),f),t.copyOwnJsonProperties(n.style,f),delete f.fields,r.applyThemeStyle){var u=n.themeStyle&&n.themeStyle.fields&&n.themeStyle.fields[s.field];t.copyOwnJsonProperties(u,f)}if(r.inheritThemeBackground||l.isTransparent(f.backgroundColor)||delete f.backgroundColor,a=a||n.style.fields&&n.style.fields[s.field],t.copyOwnJsonProperties(a,f),f.width=e.calcFieldWidth(r,n,s.field),f.height=e.calcDataHeight(r,n,s.field),f.overrideStyle&&r.viewModel.getTableDefaultStyles){var y=r.viewModel.getTableDefaultStyles(r.theme,f.overrideStyle);if(y)for(var S in y)("backgroundColor"!==S||r.inheritThemeBackground||l.isTransparent(y[S]))&&(f[S]=y[S])}if(r.viewModel.reportStyle!==i.CLASSIC&&r.isSingleCelledTable()){var c=n.fieldInfos&&n.fieldInfos[s.field];c&&(c.isInfographic||c.isChart)&&(f.backgroundColor="transparent")}return o.filterCellStyles(f)},o});