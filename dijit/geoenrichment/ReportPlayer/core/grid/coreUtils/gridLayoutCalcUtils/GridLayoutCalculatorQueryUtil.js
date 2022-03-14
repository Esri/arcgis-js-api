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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define([],(function(){var a={markAsDirty:function(a){a._fieldToColumnHash=null,a._dataIdToDataHash=null},_calcGridHashes:function(a){a._fieldToColumnHash={},a.columns.forEach((function(n){a._fieldToColumnHash[n.field]=n})),a._dataIdToDataHash={},a.rows.forEach((function(n){a._dataIdToDataHash[n.id]=n}))},fieldToColumn:function(n,o){return n._fieldToColumnHash||a._calcGridHashes(n),n._fieldToColumnHash&&n._fieldToColumnHash[o]},dataIdToData:function(n,o){return n._dataIdToDataHash||a._calcGridHashes(n),n._dataIdToDataHash&&n._dataIdToDataHash[o]},getSpannedColumns:function(a,n,o){var e,l=[];return o<1?[]:(a.columns.some((function(a){if((e||a.field===n)&&(l.push(a),e=!0),l.length===o)return!0})),l)},getColumnSpannedFields:function(n,o,e){var l=null,u=o.fieldToRowSpanSourceDataIndex&&o.fieldToRowSpanSourceDataIndex[e],t=(o=void 0!==u?n.rows[u]:o).columnSpans&&o.columnSpans[e];if(t>1){l=[];for(var d=a.fieldToColumn(n,e),i=n.columns.indexOf(d),r=i;r<i+t;r++)l.push(n.columns[r].field)}return l},getRowSpannedData:function(a,n,o){var e=null,l=n.fieldToColumnSpanSourceField&&n.fieldToColumnSpanSourceField[o]||o,u=n.rowSpans&&n.rowSpans[l];if(u>1){e=[];for(var t=a.rows.indexOf(n),d=t;d<t+u;d++)e.push(a.rows[d])}return e},getMovableData:function(a,n,o){var e=n.movableIndexHashVertical&&n.movableIndexHashVertical[o];return e&&a.rows[e]},getMovableColumn:function(n,o,e){var l=o.movableFieldsHashHorizontal&&o.movableFieldsHashHorizontal[e];return l&&a.fieldToColumn(n,l)}};return a}));