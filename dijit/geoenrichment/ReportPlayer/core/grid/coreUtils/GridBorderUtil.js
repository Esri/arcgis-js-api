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

define(["../../themes/BorderStyles","../../themes/ThemeLibrary","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes"],function(e,r,t){var o={};return o.getBorderStyle=function(e,r,l,d,n){return e.renderBordersFromTheme?o._getThemeBorderStyle(e,r,l,d,n):e.getViewMode()===t.EDIT?e.editModeBorderLineStyle&&o._getAllBorderStyle(d,n,e.editModeBorderLineStyle.width,e.editModeBorderLineStyle.color):e.previewModeBorderLineStyle&&o._getAllBorderStyle(d,n,e.previewModeBorderLineStyle.width,e.previewModeBorderLineStyle.color)},o._getAllBorderStyle=function(e,r,t,o,l){return{l:t,r:e?t:0,t:t,b:r?t:0,color:o,style:l}},o._getThemeBorderStyle=function(t,l,d,n,i){var y=t.viewModel.getDocumentDefaultStyles(t.theme||t.themeContext).border||r.getDefaultBorderSettings();if(y){var s=y.thickness,c=y.lineStyle,S=y.color;switch(y.style){case e.ALL:return o._getAllBorderStyle(n,i,s,S,c);case e.OUTER_ONLY:return{l:0===d.index?s:0,r:n?s:0,t:0===l.index?s:0,b:i?s:0,color:S,style:c};case e.INNER_ONLY:return{l:d.index>0?s:0,t:l.index>0?s:0,color:S,style:c};case e.HORIZONTAL_INNER_ONLY:return{t:l.index>0?s:0,color:S,style:c};case e.VERTICAL_INNER_ONLY:return{l:d.index>0?s:0,color:S,style:c};default:return t.noBorderLineStyle&&o._getAllBorderStyle(n,i,t.noBorderLineStyle.width,t.noBorderLineStyle.color)}}},o});