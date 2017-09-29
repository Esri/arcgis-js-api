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

define(["./GridDataUtil"],function(n){var e={querySingleCell:function(n,l){l.fieldCell&&(l={rowId:l.fieldCell.rowId,columnId:l.fieldCell.columnId});var o;if(n.getFieldCells().some(function(n){return n.parentGrid&&n.column&&n.gridData?n.columnId!==l.columnId&&n.column.index!==l.columnIndex&&n.column.field!==l.columnField||n.rowId!==l.rowId&&n.gridData.index!==l.rowIndex?void 0:(o=n,!0):void 0}),o)return o;if(l.considerSpans){var r=e.queryColumn(n,l),d=e.queryData(n,l);if(!r||!d)return null;var i=r.index,u=d.index;n.store.data.some(function(l){return n.columns.some(function(r){var d=r.index,t=r.index+(l.columnSpans&&l.columnSpans[r.field]||0),c=l.index,a=l.index+(l.rowSpans&&l.rowSpans[r.field]||0);return i>=d&&t>=i&&u>=c&&a>=u?(o=e.querySingleCell(n,{columnIndex:d,rowIndex:c}),!0):void 0})})}return o},queryColumn:function(n,e){var l;return n.columns.some(function(n){return n.id===e.columnId||n.index===e.columnIndex||n.field===e.columnField?(l=n,!0):void 0}),l},queryData:function(n,e){var l;return n.store.data.some(function(n){return n.id===e.rowId||n.index===e.rowIndex?(l=n,!0):void 0}),l},queryCells:function(n,l){var o=[];if(l.fieldCell){var r=l.rowSpan||1,d=l.columnSpan||1,i=e.querySingleCell(n,l);if(i)for(var u=i.gridData.index;u<i.gridData.index+r;u++)for(var t=i.column.index;t<i.column.index+d;t++){var c=e.querySingleCell(n,{rowIndex:u,columnIndex:t});c&&o.push(c)}}else n.getFieldCells().forEach(function(n){(n.columnId===l.columnId||n.column.index===l.columnIndex||n.column.field===l.columnField||n.rowId===l.rowId||n.gridData.index===l.rowIndex)&&o.push(n)});return o},getTitleCell:function(l){var o=e.querySingleCell(l,{rowIndex:0,columnIndex:0});return!o||n.getFieldInfo(o)||1!=l.columns.length&&n.getColumnSpan(o)!=l.columns.length?void 0:o}};return e});