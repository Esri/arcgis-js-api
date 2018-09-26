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

define([],function(){var a={};return a.markAsDirty=function(a){a._fieldToColumnHash=null,a._dataIdToDataHash=null},a._calcGridHashes=function(a){a._fieldToColumnHash={},a.columns.forEach(function(n){a._fieldToColumnHash[n.field]=n}),a._dataIdToDataHash={},a.store.data.forEach(function(n){a._dataIdToDataHash[n.id]=n})},a.fieldToColumn=function(n,o){return n._fieldToColumnHash||a._calcGridHashes(n),n._fieldToColumnHash&&n._fieldToColumnHash[o]},a.dataIdToData=function(n,o){return n._dataIdToDataHash||a._calcGridHashes(n),n._dataIdToDataHash&&n._dataIdToDataHash[o]},a.getSpannedColumns=function(a,n,o){var e=[];if(o<1)return[];var t;return a.columns.some(function(a){if((t||a.field===n)&&(e.push(a),t=!0),e.length===o)return!0}),e},a.getColumnSpannedFields=function(n,o,e){var t=null,l=o.columnSpans&&o.columnSpans[e];if(l>1){t=[];for(var r=a.fieldToColumn(n,e),u=r.index;u<r.index+l;u++)t.push(n.columns[u].field)}return t},a.getRowSpannedData=function(a,n,o){var e=null,t=n.rowSpans&&n.rowSpans[o];if(t>1){e=[];for(var l=n.index;l<n.index+t;l++)e.push(a.store.data[l])}return e},a.getMovableData=function(a,n,o){var e=n.movableIndexHashVertical&&n.movableIndexHashVertical[o];return e&&a.store.data[e]},a.getMovableColumn=function(n,o,e){var t=o.movableFieldsHashHorizontal&&o.movableFieldsHashHorizontal[e];return t&&a.fieldToColumn(n,t)},a});