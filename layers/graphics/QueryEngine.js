// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Error","../../core/promiseUtils","../../geometry/support/graphicsUtils"],function(e,t,r,n,i,o,u,s,c){var l=function(e){function t(){e.apply(this,arguments),this.features=null,this.objectIdField=null}return r(t,e),t.prototype.queryFeatures=function(e){var t;if(this.features)if(e)if(this._isSupportedQuery(e)){var r=this._createFilters(e);t=r.length?this._executeQuery(e,r):this._rejectQuery("Invalid query")}else t=this._rejectQuery("Unsupported query");else t=this._returnAllFeatures();else t=this._rejectQuery("Engine not initialized");return t},t.prototype.queryObjectIds=function(e){return this.objectIdField?this.queryFeatures(e).then(this._getObjectIds.bind(this)):this._rejectQuery("Unsupported query")},t.prototype.queryFeatureCount=function(e){return this.queryFeatures(e).then(function(e){return e.length})},t.prototype.queryExtent=function(e){var t=this;return this.queryFeatures(e).then(function(e){return{count:e.length,extent:t._getExtent(e)}})},t.prototype._returnAllFeatures=function(){return s.resolve(this.features.toArray())},t.prototype._executeQuery=function(e,t){var r=this,n=this.features.filter(function(n){return t.every(function(t){return t.call(r,n,e)})});return s.resolve(n.toArray())},t.prototype._isSupportedQuery=function(e){var t=!0;return(null!=e.distance||null!=e.geometryPrecision||e.groupByFieldsForStatistics&&e.groupByFieldsForStatistics.length||null!=e.maxAllowableOffset||e.multipatchOption||null!=e.num||e.orderByFields&&e.orderByFields.length||e.outFields&&e.outFields.length||e.outSpatialReference||e.outStatistics&&e.outStatistics.length||e.pixelSize||e.quantizationParameters||e.relationParam||e.returnDistinctValues||null!=e.start||e.text||e.timeExtent||e.where||e.objectIds&&e.objectIds.length&&!this.objectIdField)&&(t=!1),t},t.prototype._createFilters=function(e){var t=[];return e.objectIds&&e.objectIds.length&&t.push(this._createObjectIdFilter()),e.geometry&&"extent"===e.geometry.type&&"intersects"===e.spatialRelationship&&t.push(this._createExtentFilter()),t},t.prototype._createExtentFilter=function(){return function(e,t){var r=e.geometry,n=t.geometry;return r&&n.intersects(r)}},t.prototype._createObjectIdFilter=function(){var e=this;return function(t,r){var n=t.attributes,i=n&&n[e.objectIdField];return r.objectIds.indexOf(i)>-1}},t.prototype._rejectQuery=function(e){return s.reject(new u(this.declaredClass,e))},t.prototype._getObjectIds=function(e){var t=this.objectIdField,r=[];return e.forEach(function(e){var n=e.attributes,i=n&&n[t];null!=i&&r.push(i)}),r},t.prototype._getExtent=function(e){return e.length?c.graphicsExtent(e):null},n([i.property()],t.prototype,"features",void 0),n([i.property()],t.prototype,"objectIdField",void 0),t=n([i.subclass("esri.layers.graphics.QueryEngine")],t)}(i.declared(o));return l});