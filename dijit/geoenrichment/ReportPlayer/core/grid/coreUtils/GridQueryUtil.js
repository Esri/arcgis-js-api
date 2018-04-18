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

define(["./GridDataUtil","esri/dijit/geoenrichment/utils/ArrayUtil"],function(n,e){var i={querySingleCell:function(n,e){e.fieldCell&&(e={rowId:e.fieldCell.rowId,columnId:e.fieldCell.columnId});var l;if(n.getFieldCells().some(function(n){if(n.parentGrid&&n.column&&n.gridData)return n.columnId!==e.columnId&&n.column.index!==e.columnIndex&&n.column.field!==e.columnField||n.rowId!==e.rowId&&n.gridData.index!==e.rowIndex?void 0:(l=n,!0)}),l)return l;if(e.considerSpans){var d=i.queryColumn(n,e),o=i.queryData(n,e);if(!d||!o)return null;var r=d.index,u=o.index;n.store.data.some(function(e){return n.columns.some(function(d){var o=d.index,c=d.index+(e.columnSpans&&e.columnSpans[d.field]||0),t=e.index,a=e.index+(e.rowSpans&&e.rowSpans[d.field]||0);if(o<=r&&c>=r&&t<=u&&a>=u)return l=i.querySingleCell(n,{columnIndex:o,rowIndex:t}),!0})})}return l},queryColumn:function(n,e){var i;return n.columns.some(function(n){if(n.id===e.columnId||n.index===e.columnIndex||n.field===e.columnField)return i=n,!0}),i},queryData:function(n,e){var i;return n.store.data.some(function(n){if(n.id===e.rowId||n.index===e.rowIndex)return i=n,!0}),i},queryCells:function(n,e){var l=[];if(e.fieldCell){var d=e.rowSpan||1,o=e.columnSpan||1,r=i.querySingleCell(n,e);if(r)for(var u=r.gridData.index;u<r.gridData.index+d;u++)for(var c=r.column.index;c<r.column.index+o;c++){var t=i.querySingleCell(n,{rowIndex:u,columnIndex:c});t&&l.push(t)}}else{if(!Object.keys(e).length)return l;n.getFieldCells().forEach(function(n,i){void 0!==e.cellIndex&&i!==e.cellIndex||void 0!==e.cellIndexes&&-1===e.cellIndexes.indexOf(i)||void 0!==e.columnId&&n.columnId!==e.columnId||void 0!==e.columnIds&&-1===e.columnIds.indexOf(n.columnId)||void 0!==e.columnIndex&&n.column.index!==e.columnIndex||void 0!==e.columnIndexes&&-1===e.columnIndexes.indexOf(n.column.index)||void 0!==e.columnField&&n.column.field!==e.columnField||void 0!==e.columnFields&&-1===e.columnFields.indexOf(n.column.field)||void 0!==e.rowId&&n.rowId!==e.rowId||void 0!==e.rowIds&&-1===e.rowIds.indexOf(n.rowId)||void 0!==e.rowIndex&&n.gridData.index!==e.rowIndex||void 0!==e.rowIndexes&&-1===e.rowIndexes.indexOf(n.gridData.index)||l.push(n)})}return l},getTitleCell:function(e){var l=i.querySingleCell(e,{rowIndex:0,columnIndex:0});if(l&&!n.getFieldInfo(l)&&(1===e.columns.length||n.getColumnSpan(l)===e.columns.length))return l},isDynamicFieldCell:function(n,e){return n._dynamicBindings&&n._dynamicBindings[e.column.field]},getDynamicallyBoundColumns:function(n,e){return n._dynamicBindings&&n._dynamicBindings[e.field]},getDynamicallyBoundFieldCells:function(n,e){if(e.column){var l=n._dynamicBindings&&n._dynamicBindings[e.column.field];if(!l)return null;var d=[];return l.forEach(function(l){var o=l&&i.querySingleCell(n,{columnId:l.id,rowId:e.rowId});o&&d.push(o)}),d}},getAllBoundCells:function(n,l,d){var o=[],r={};return l&&l.forEach(function(e){if((!d||d(e))&&!r[e.uniqueId]){r[e.uniqueId]=!0;var l=i.getDynamicallyBoundFieldCells(n,e);l?l.forEach(function(n){o.push(n),r[n.uniqueId]=!0}):o.push(e)}}),e.removeDuplicates(o,"uniqueId")},trimDynamicBindings:function(n,e){var l=[],d={};return e&&e.forEach(function(e){var o=i.getDynamicallyBoundFieldCells(n,e);o&&o.length?(d[o[0].uniqueId]||l.push(o[0]),o.forEach(function(n){d[n.uniqueId]=!0})):l.push(e)}),l},collectFieldInfos:function(e,l){var d=[];l=l||{};var o=l.fieldCells;return l.trimDynamicBinding&&o&&(o=i.trimDynamicBindings(e,o)),o?o.forEach(function(e){var i=n.getFieldInfo(e);i&&d.push(i)}):e.store.data.forEach(function(n){for(var e in n.fieldInfos){var i=n.fieldInfos[e];i&&d.push(i)}}),d},cellHasFloatingTableParent:function(n){function e(n){return!!n.isFloatingTable||!!n.parentWidget&&e(n.parentWidget)}return!(!n||!n.parentGrid)&&e(n.parentGrid)}};return i});