// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../GridLayoutCalculatorQueryUtil","./ColumnDataUtil","./_ColumnModifierNormal","./_ColumnModifierLoose"],(function(e,l,i,t){var o={},n=function(i,t,o,n){var u=e.getMovableColumn(i,t,o.field);u&&(n-=l.calcFieldWidth(i,t,o.field,u.field));return{column:u||o,width:n}},u=function(e){e.getCells().forEach((function(i){i.setWidth(l.calcFieldWidth(e,i.row,i.column.field))})),l.recalcGridWidth(e)},d=function(e){var i=e.columns[e.columns.length-1];e.rows.some((function(t,o){if(!e.looseResize&&o)return!0;var n=0;e.columns.forEach((function(o){o!==i&&(n+=l.getFieldWidth(e,t,o.field))})),l.setFieldWidth(e,t,i.field,l.getAllowedWidth(e)-n)}))};return o.adjustColumnWidth=function(e,l,o,c){var f=n(e,l,o,c);(e.looseResize?t:i).adjustColumnWidth(e,l,f.column,f.width),e.stickToRight&&d(e),u(e)},o.getAffectedCells=function(e,l,i){return e.looseResize?t.getAffectedCells(e,l,n(e,l,i).column):null},o}));