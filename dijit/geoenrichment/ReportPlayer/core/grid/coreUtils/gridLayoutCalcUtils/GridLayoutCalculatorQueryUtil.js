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

define([],function(){var a={};return a.markAsDirty=function(a){a._hasDirtyLayout=!0},a._calcGridHashes=function(a){a._fieldToColumnHash={},a.columns.forEach(function(n){a._fieldToColumnHash[n.field]=n}),a._dataIdToDataHash={},a.store.data.forEach(function(n){a._dataIdToDataHash[n.id]=n}),a._hasDirtyLayout=!1},a.fieldToColumn=function(n,o){return n._hasDirtyLayout&&a._calcGridHashes(n),n._fieldToColumnHash&&n._fieldToColumnHash[o]},a.dataIdToData=function(n,o){return n._hasDirtyLayout&&a._calcGridHashes(n),n._dataIdToDataHash&&n._dataIdToDataHash[o]},a.getSpannedColumns=function(a,n,o){var t=[];if(1>o)return[];var e;return a.columns.some(function(a){return(e||a.field===n)&&(t.push(a),e=!0),t.length===o?!0:void 0}),t},a.getColumnSpannedFields=function(n,o,t){var e=null,r=o.columnSpans&&o.columnSpans[t];if(r>1){e=[];for(var i=a.fieldToColumn(n,t),u=i.index;u<i.index+r;u++)e.push(n.columns[u].field)}return e},a.getRowSpannedData=function(a,n,o){var t=null,e=n.rowSpans&&n.rowSpans[o];if(e>1){t=[];for(var r=n.index;r<n.index+e;r++)t.push(a.store.data[r])}return t},a.getMovableData=function(a,n,o){var t=n.movableIndexHashVertical&&n.movableIndexHashVertical[o];return t&&a.store.data[t]},a.getMovableColumn=function(n,o,t){var e=o.movableFieldsHashHorizontal&&o.movableFieldsHashHorizontal[t];return e&&a.fieldToColumn(n,e)},a});