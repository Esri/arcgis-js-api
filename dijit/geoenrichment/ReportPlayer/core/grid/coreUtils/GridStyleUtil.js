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

define(["./GridLayoutCalculator","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil","../ValueField"],function(e,l,t,i){var r={};return r.filterCellStyles=function(e){return r._filterCellStyles(e,i.SUPPORTED_STYLES)},r.filterCellTextStyles=function(e){return r._filterCellStyles(e,i.SUPPORTED_TEXT_STYLES)},r._filterCellStyles=function(e,l){var t={};for(var i in e)void 0!==e[i]&&l[i]&&(t[i]=e[i]);return t},r.combineCellStyle=function(i,o,n,s){var a={},f=i.viewModel.getDocumentDefaultStyles&&i.viewModel.getDocumentDefaultStyles(i.theme);if(t.copyOwnJsonProperties(f,a),i.viewModel.getTableDefaultStyles&&t.copyOwnJsonProperties(i.viewModel.getTableDefaultStyles(i.theme,"Default"),a),t.copyOwnJsonProperties(o.style,a),delete a.fields,i.applyThemeStyle){var d=o.themeStyle&&o.themeStyle.fields&&o.themeStyle.fields[n.field];t.copyOwnJsonProperties(d,a)}if(i.inheritThemeBackground||l.isTransparent(a.backgroundColor)||delete a.backgroundColor,s=s||o.style.fields&&o.style.fields[n.field],t.copyOwnJsonProperties(s,a),a.width=e.calcFieldWidth(i,o,n.field),a.height=e.calcDataHeight(i,o,n.field),a.overrideStyle&&i.viewModel.getTableDefaultStyles){var u=i.viewModel.getTableDefaultStyles(i.theme,a.overrideStyle);if(u)for(var y in u)("backgroundColor"!==y||i.inheritThemeBackground||l.isTransparent(u[y]))&&(a[y]=u[y])}if(i.viewModel.isGraphicStyle&&i.isSingleCelledTable()){var c=o.fieldInfos&&o.fieldInfos[n.field];c&&(c.isInfographic||c.isChart)&&(a.backgroundColor="transparent")}return r.filterCellStyles(a)},r});