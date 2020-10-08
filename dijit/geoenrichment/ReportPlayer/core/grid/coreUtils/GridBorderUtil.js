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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["../../themes/PageBorderStyles","../../themes/ThemeLibrary","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes"],(function(e,r,t){var o={getBorderStyle:function(e,r,l,d,i){var n;return n=e.renderBordersFromTheme?o._getThemeBorderStyle(e,r,l,d,i):e.getViewMode()===t.EDIT?e.editModeBorderLineStyle&&o._getAllBorderStyle(d,i,e.editModeBorderLineStyle.width,e.editModeBorderLineStyle.color):e.previewModeBorderLineStyle&&o._getAllBorderStyle(d,i,e.previewModeBorderLineStyle.width,e.previewModeBorderLineStyle.color),o._toBorderStyleFormat(n)},_getAllBorderStyle:function(e,r,t,o,l){return{l:t,r:e?t:0,t:t,b:r?t:0,color:o,style:l}},_getThemeBorderStyle:function(t,l,d,i,n){var y=t.viewModel.getDocumentDefaultStyles(t.theme).border||r.getDefaultBorderSettings();if(y){var c=y.thickness,s=y.lineStyle,S=y.color;switch(y.style){case e.ALL:return o._getAllBorderStyle(i,n,c,S,s);case e.OUTER_ONLY:return{l:0===d.index?c:0,r:i?c:0,t:0===l.index?c:0,b:n?c:0,color:S,style:s};case e.INNER_ONLY:return{l:d.index>0?c:0,t:l.index>0?c:0,color:S,style:s};case e.HORIZONTAL_INNER_ONLY:return{t:l.index>0?c:0,color:S,style:s};case e.VERTICAL_INNER_ONLY:return{l:d.index>0?c:0,color:S,style:s};default:return t.noThemeBorderLineStyle&&o._getAllBorderStyle(i,n,t.noThemeBorderLineStyle.width,t.noThemeBorderLineStyle.color)}}},_toBorderStyleFormat:function(e){return e&&{borderTopColor:e.color,borderTopWidth:e.t,borderTopOpacity:1,borderTopStyle:e.style,borderRightColor:e.color,borderRightWidth:e.r,borderRightOpacity:1,borderRightStyle:e.style,borderBottomColor:e.color,borderBottomWidth:e.b,borderBottomOpacity:1,borderBottomStyle:e.style,borderLeftColor:e.color,borderLeftWidth:e.l,borderLeftOpacity:1,borderLeftStyle:e.style}}};return o}));