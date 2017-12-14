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

define(["./GridDataUtil","esri/dijit/geoenrichment/utils/ArrayUtil"],function(n,e){var i={querySingleCell:function(n,e){e.fieldCell&&(e={rowId:e.fieldCell.rowId,columnId:e.fieldCell.columnId});var d;if(n.getFieldCells().some(function(n){return n.parentGrid&&n.column&&n.gridData?n.columnId!==e.columnId&&n.column.index!==e.columnIndex&&n.column.field!==e.columnField||n.rowId!==e.rowId&&n.gridData.index!==e.rowIndex?void 0:(d=n,!0):void 0}),d)return d;if(e.considerSpans){var l=i.queryColumn(n,e),o=i.queryData(n,e);if(!l||!o)return null;var r=l.index,u=o.index;n.store.data.some(function(e){return n.columns.some(function(l){var o=l.index,c=l.index+(e.columnSpans&&e.columnSpans[l.field]||0),t=e.index,a=e.index+(e.rowSpans&&e.rowSpans[l.field]||0);return r>=o&&c>=r&&u>=t&&a>=u?(d=i.querySingleCell(n,{columnIndex:o,rowIndex:t}),!0):void 0})})}return d},queryColumn:function(n,e){var i;return n.columns.some(function(n){return n.id===e.columnId||n.index===e.columnIndex||n.field===e.columnField?(i=n,!0):void 0}),i},queryData:function(n,e){var i;return n.store.data.some(function(n){return n.id===e.rowId||n.index===e.rowIndex?(i=n,!0):void 0}),i},queryCells:function(n,e){var d=[];if(e.fieldCell){var l=e.rowSpan||1,o=e.columnSpan||1,r=i.querySingleCell(n,e);if(r)for(var u=r.gridData.index;u<r.gridData.index+l;u++)for(var c=r.column.index;c<r.column.index+o;c++){var t=i.querySingleCell(n,{rowIndex:u,columnIndex:c});t&&d.push(t)}}else{if(!Object.keys(e).length)return d;n.getFieldCells().forEach(function(n,i){(void 0===e.cellIndex||i===e.cellIndex)&&(void 0===e.cellIndexes||-1!==e.cellIndexes.indexOf(i))&&(void 0===e.columnId||n.columnId===e.columnId)&&(void 0===e.columnIds||-1!==e.columnIds.indexOf(n.columnId))&&(void 0===e.columnIndex||n.column.index===e.columnIndex)&&(void 0===e.columnIndexes||-1!==e.columnIndexes.indexOf(n.column.index))&&(void 0===e.columnField||n.column.field===e.columnField)&&(void 0===e.columnFields||-1!==e.columnFields.indexOf(n.column.field))&&(void 0===e.rowId||n.rowId===e.rowId)&&(void 0===e.rowIds||-1!==e.rowIds.indexOf(n.rowId))&&(void 0===e.rowIndex||n.gridData.index===e.rowIndex)&&(void 0===e.rowIndexes||-1!==e.rowIndexes.indexOf(n.gridData.index))&&d.push(n)})}return d},getTitleCell:function(e){var d=i.querySingleCell(e,{rowIndex:0,columnIndex:0});return!d||n.getFieldInfo(d)||1!==e.columns.length&&n.getColumnSpan(d)!==e.columns.length?void 0:d},isDynamicFieldCell:function(n,e){return n._dynamicBindings&&n._dynamicBindings[e.column.field]},getDynamicallyBoundColumns:function(n,e){return n._dynamicBindings&&n._dynamicBindings[e.field]},getDynamicallyBoundFieldCells:function(n,e){if(e.column){var d=n._dynamicBindings&&n._dynamicBindings[e.column.field];if(!d)return null;var l=[];return d.forEach(function(d){var o=d&&i.querySingleCell(n,{columnId:d.id,rowId:e.rowId});o&&l.push(o)}),l}},getAllBoundCells:function(n,d,l){var o=[],r={};return d&&d.forEach(function(e){if((!l||l(e))&&!r[e.uniqueId]){r[e.uniqueId]=!0;var d=i.getDynamicallyBoundFieldCells(n,e);d?d.forEach(function(n){o.push(n),r[n.uniqueId]=!0}):o.push(e)}}),e.removeDuplicates(o,"uniqueId")},trimDynamicBindings:function(n,e){var d=[],l={};return e&&e.forEach(function(e){var o=i.getDynamicallyBoundFieldCells(n,e);o&&o.length?(l[o[0].uniqueId]||d.push(o[0]),o.forEach(function(n){l[n.uniqueId]=!0})):d.push(e)}),d},collectFieldInfos:function(e,d){var l=[];d=d||{};var o=d.fieldCells;return d.trimDynamicBinding&&o&&(o=i.trimDynamicBindings(e,o)),o?o.forEach(function(e){var i=n.getFieldInfo(e);i&&l.push(i)}):e.store.data.forEach(function(n){for(var e in n.fieldInfos){var i=n.fieldInfos[e];i&&l.push(i)}}),l},cellHasFloatingTableParent:function(n){function e(n){return n.isFloatingTable?!0:n.parentWidget?e(n.parentWidget):!1}return n&&n.parentGrid?e(n.parentGrid):!1}};return i});