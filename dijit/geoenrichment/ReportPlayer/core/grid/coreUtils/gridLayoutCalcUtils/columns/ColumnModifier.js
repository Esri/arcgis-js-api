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

define(["../GridLayoutCalculatorQueryUtil","./ColumnDataUtil","./_ColumnModifierNormal","./_ColumnModifierLoose"],function(e,i,l,t){var o={},n={getColumnToChange:function(l,t,o,n){var d=e.getMovableColumn(l,t,o.field);if(d){n-=i.calcFieldWidth(l,t,o.field,d.field)}return{column:d||o,width:n}}},d={finalResizeGridCells:function(e){e.getFieldCells().forEach(function(l){l.setWidth(i.calcFieldWidth(e,l.gridData,l.column.field))}),i.recalcGridWidth(e)}},c={recalcToStick:function(e){var l=e.columns[e.columns.length-1];e.store.data.some(function(t,o){if(!e.looseResize&&o)return!0;var n=0;e.columns.forEach(function(o){o!==l&&(n+=i.getFieldWidth(e,t,o.field))}),i.setFieldWidth(e,t,l.field,i.getAllowedWidth(e)-n)})}};return o.adjustColumnWidth=function(e,i,o,u){var a=n.getColumnToChange(e,i,o,u);(e.looseResize?t:l).adjustColumnWidth(e,i,a.column,a.width),e.stickToRight&&c.recalcToStick(e),d.finalResizeGridCells(e)},o.getAffectedCells=function(e,i,l){return e.looseResize?t.getAffectedCells(e,i,l):null},o});