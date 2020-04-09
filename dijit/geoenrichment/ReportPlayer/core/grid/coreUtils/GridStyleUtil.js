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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["./GridLayoutCalculator","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil","../valueField/ValueField"],(function(e,l,t,i){var r={filterCellStyles:function(e){return r._filterCellStyles(e,i.SUPPORTED_STYLES)},filterCellTextStyles:function(e){return r._filterCellStyles(e,i.SUPPORTED_TEXT_STYLES)},_filterCellStyles:function(e,l){var t={};for(var i in e)void 0!==e[i]&&l[i]&&(t[i]=e[i]);return t},combineCellStyle:function(i,o,n,a){var s={};if(r._isContainerCell(i,o,n))a=a||o.style.fields&&o.style.fields[n.field],t.copyOwnJsonProperties(a,s),delete s.backgroundColor;else{var f=i.viewModel.getDocumentDefaultStyles&&i.viewModel.getDocumentDefaultStyles(i.theme);if(t.copyOwnJsonProperties(f,s),delete s.backgroundColor,r._canApplyDefaultTableStyle(i)&&i.viewModel.getTableDefaultStyles&&t.copyOwnJsonProperties(i.viewModel.getTableDefaultStyles(i.theme,"Default"),s),t.copyOwnJsonProperties(o.style,s),i.applyThemeStyle){var d=o.themeStyle&&o.themeStyle.fields&&o.themeStyle.fields[n.field];t.copyOwnJsonProperties(d,s)}if(i.inheritThemeBackground||l.isTransparent(s.backgroundColor)||delete s.backgroundColor,a=a||o.style.fields&&o.style.fields[n.field],t.copyOwnJsonProperties(a,s),s.overrideStyle&&i.viewModel.getTableDefaultStyles){var u=i.viewModel.getTableDefaultStyles(i.theme,s.overrideStyle);if(u)for(var y in u)("backgroundColor"!==y||i.inheritThemeBackground||l.isTransparent(u[y]))&&(s[y]=u[y])}}return s.width=e.calcFieldWidth(i,o,n.field),s.height=e.calcDataHeight(i,o,n.field),r.filterCellStyles(s)},_isContainerCell:function(e,l,t){if(!e.viewModel.isGraphicStyle)return!1;if(e.isReportContainerPageGrid)return!0;var i=l.fieldInfos&&l.fieldInfos[t.field];return!!i&&(!!i.isReportSection||e.isSingleCelledTable()&&(i.isImage||i.isShape||i.isInfographic||i.isChart||i.isMap))},_canApplyDefaultTableStyle:function(e){return!e.viewModel.isGraphicStyle||e.isMultiDataTable()}};return r}));