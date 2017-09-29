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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./GridLayoutCalculator","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t){var l={};return l.combineCellStyle=function(l,o,i,r){var n={},a=l.viewModel.getDocumentDefaultStyles&&l.viewModel.getDocumentDefaultStyles(l.theme||l.themeContext);if(t.copyOwnJsonProperties(a,n),l.viewModel.getTableDefaultStyles&&t.copyOwnJsonProperties(l.viewModel.getTableDefaultStyles(l.theme||l.themeContext,"Default"),n),t.copyOwnJsonProperties(o.style,n),delete n.fields,l.applyThemeStyle){var d=o.themeStyle&&o.themeStyle.fields&&o.themeStyle.fields[i.field];t.copyOwnJsonProperties(d,n)}if(l.inheritThemeBackground||delete n.backgroundColor,r=r||o.style.fields&&o.style.fields[i.field],t.copyOwnJsonProperties(r,n),n.width=e.calcFieldWidth(l,o,i.field),n.height=e.calcDataHeight(l,o,i.field),n.overrideStyle&&l.viewModel.getTableDefaultStyles){var s=l.viewModel.getTableDefaultStyles(l.theme||l.themeContext,n.overrideStyle);if(s)for(var c in s)("backgroundColor"!==c||l.inheritThemeBackground)&&(n[c]=s[c])}return l.renderCellBackground||(n.backgroundColor="transparent"),n},l});