// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/dom-geometry","./GridDataUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil"],(function(n,e,i,o,r){var l={querySingleCell:function(n,e){var i;if(e.fieldCell&&(e={rowId:e.fieldCell.row.id,columnId:e.fieldCell.column.id}),n.getCells().some((function(n){if(n.parentGrid&&n.column&&n.row)return n.column.id!==e.columnId&&n.column.index!==e.columnIndex&&n.column.field!==e.columnField||n.row.id!==e.rowId&&n.row.index!==e.rowIndex?void 0:(i=n,!0)})),i)return i;if(e.considerSpans){var o=l.queryColumn(n,e),r=l.queryData(n,e);if(!o||!r)return null;var u=o.index,d=r.index;n.rows.some((function(e){return n.columns.some((function(o){var r=o.index,t=o.index+(e.columnSpans&&e.columnSpans[o.field]||0),c=e.index,s=e.index+(e.rowSpans&&e.rowSpans[o.field]||0);if(r<=u&&t>=u&&c<=d&&s>=d)return i=l.querySingleCell(n,{columnIndex:r,rowIndex:c}),!0}))}))}return i},queryColumn:function(n,e){var i;return n.columns.some((function(n){if(n.id===e.columnId||n.index===e.columnIndex||n.field===e.columnField)return i=n,!0})),i},queryData:function(n,e){var i;return n.rows.some((function(n){if(n.id===e.rowId||n.index===e.rowIndex)return i=n,!0})),i},queryCells:function(n,e){if(e.fieldCell){var i=[],o=e.rowSpan||1,r=e.columnSpan||1,u=l.querySingleCell(n,e);if(u)for(var d=u.row.index;d<u.row.index+o;d++)for(var t=u.column.index;t<u.column.index+r;t++){var c=l.querySingleCell(n,{rowIndex:d,columnIndex:t});c&&i.push(c)}return i}return this.queryCellsInArray(n.getCells(),e)},queryCellsInArray:function(n,e){var i=[];return Object.keys(e).length?(n.forEach((function(n,o){void 0!==e.cellIndex&&o!==e.cellIndex||void 0!==e.cellIndexes&&-1===e.cellIndexes.indexOf(o)||void 0!==e.columnId&&n.column.id!==e.columnId||void 0!==e.columnIds&&-1===e.columnIds.indexOf(n.column.id)||void 0!==e.columnIndex&&n.column.index!==e.columnIndex||void 0!==e.columnIndexes&&-1===e.columnIndexes.indexOf(n.column.index)||void 0!==e.columnField&&n.column.field!==e.columnField||void 0!==e.columnFields&&-1===e.columnFields.indexOf(n.column.field)||void 0!==e.rowId&&n.row.id!==e.rowId||void 0!==e.rowIds&&-1===e.rowIds.indexOf(n.row.id)||void 0!==e.rowIndex&&n.row.index!==e.rowIndex||void 0!==e.rowIndexes&&-1===e.rowIndexes.indexOf(n.row.index)||i.push(n)})),i):i},isDynamicFieldCell:function(n,e){return n._dynamicBindings&&n._dynamicBindings[e.column.field]},getDynamicallyBoundColumns:function(n,e){return n._dynamicBindings&&n._dynamicBindings[e.field]},getDynamicallyBoundFieldCells:function(n,e){if(e.column){var i=n._dynamicBindings&&n._dynamicBindings[e.column.field];if(!i)return null;var o=[];return i.forEach((function(i){var r=i&&l.querySingleCell(n,{columnId:i.id,rowId:e.row.id});r&&o.push(r)})),o}},getAllBoundCells:function(n,e,o){var r=[],u={};return e&&e.forEach((function(e){if((!o||o(e))&&!u[e.uniqueId]){u[e.uniqueId]=!0;var i=l.getDynamicallyBoundFieldCells(n,e);i?i.forEach((function(n){r.push(n),u[n.uniqueId]=!0})):r.push(e)}})),i.removeDuplicates(r,"uniqueId")},trimDynamicBindings:function(n,e){var i=[],o={};return e&&e.forEach((function(e){var r=l.getDynamicallyBoundFieldCells(n,e);r&&r.length?(o[r[0].uniqueId]||i.push(r[0]),r.forEach((function(n){o[n.uniqueId]=!0}))):i.push(e)})),i},collectFieldInfos:function(n,i){var o=[],r=(i=i||{}).fieldCells||n.getCells();return i.trimDynamicBinding&&r&&(r=l.trimDynamicBindings(n,r)),r&&r.forEach((function(n){var i=e.getFieldInfo(n);i&&o.push(i)})),o},cellHasFloatingTableParent:function(n){if(!n||!n.parentGrid)return!1;return function n(e){return(!e.isSection||!e.isDataDrillingView)&&(!!e.isFloatingTable||!!e.parentWidget&&n(e.parentWidget))}(n.parentGrid)},isMouseOver:function(n){return r.isMouseOverBox(l.getBBox(n))},getOverFieldCell:function(n,e){var i,o=(e=e||{}).cellFilter||function(){return!0};return n.getForegroundFloatingCells({topFirst:!0}).some((function(n){if(o(n)&&n.isMouseOver())return i=n,!0})),i||n.getCells().some((function(n){if(o(n)&&n.isMouseOver())return i=n,!0})),i||n.getBackgroundFloatingCells({topFirst:!0}).some((function(n){if(o(n)&&n.isMouseOver())return i=n,!0})),i},getBBox:function(e,i){var r=e.isSingleCelledTable()&&e.getFirstCell().getAngle();return"number"==typeof r&&0!==r?e.getFirstCell().getBBox(i):i&&i.noTransformation?o.noTransformPosition(e.domNode):n.position(e.domNode)}};return l}));