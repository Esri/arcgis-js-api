// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/Accessor","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","../../geometry/support/aaBoundingRect","./dehydratedFeatures","../../tasks/support/FeatureSet"],function(e,t,r,n,u,o,i,s,a,l,c,p){var y=function(e){function t(t){var r=e.call(this)||this;return r.features=null,r.layer=null,r.objectIdField=null,r.dataSpatialReference=null,r}return r(t,e),t.prototype.queryFeatures=function(e){var t=this;return this._queryFeatures(e).then(function(e){var r=e.map(function(e){return c.hydrateGraphic(e,t.layer)});return new p({features:r,fields:t.layer?t.layer.fields.slice():null,geometryType:t.layer?t.layer.geometryType:null,spatialReference:t.dataSpatialReference?t.dataSpatialReference.clone():null})})},t.prototype.queryObjectIds=function(e){var t=this;return this.objectIdField?this.queryFeatures(e).then(function(e){return t._getObjectIds(e.features)}):this._rejectQuery("Unsupported query")},t.prototype.queryFeatureCount=function(e){return this.features&&!e?s.resolve(this.features.length):this._queryFeatures(e).then(function(e){return e.length})},t.prototype.queryExtent=function(e){var t=this;return this.queryFeatures(e).then(function(e){return{count:e.features.length,extent:t._getExtent(e.features)}})},t.prototype._queryFeatures=function(e){if(this.features){if(e){if(this._isSupportedQuery(e)){var t=this._createFilters(e);return t.length?this._executeQuery(e,t):this._rejectQuery("Invalid query")}return this._rejectQuery("Unsupported query")}return this._returnAllFeatures()}return this._rejectQuery("Engine not initialized")},t.prototype._returnAllFeatures=function(){return s.resolve(this.features.toArray())},t.prototype._executeQuery=function(e,t){var r=this,n=[];return this.features.forEach(function(u){t.every(function(t){return t.call(r,u,e)})&&n.push(u)}),s.resolve(n)},t.prototype._isSupportedQuery=function(e){var t=!0;return(null!=e.distance||null!=e.geometryPrecision||e.groupByFieldsForStatistics&&e.groupByFieldsForStatistics.length||null!=e.maxAllowableOffset||e.multipatchOption||null!=e.num||e.orderByFields&&e.orderByFields.length||e.outFields&&e.outFields.length||e.outSpatialReference||e.outStatistics&&e.outStatistics.length||e.pixelSize||e.quantizationParameters||e.relationParameter||e.returnDistinctValues||null!=e.start||e.text||e.timeExtent||e.where||e.objectIds&&e.objectIds.length&&!this.objectIdField)&&(t=!1),t},t.prototype._createFilters=function(e){var t=[];return e.objectIds&&e.objectIds.length&&t.push(this._createObjectIdFilter()),e.geometry&&"extent"===e.geometry.type&&"intersects"===e.spatialRelationship&&t.push(this._createExtentFilter()),t},t.prototype._createExtentFilter=function(){return function(e,t){var r=e.geometry;if(!r)return!1;var n=t.geometry;return l.fromExtent(n,d),c.computeAABR(r,f),l.intersects(d,f)}},t.prototype._createObjectIdFilter=function(){var e=this;return function(t,r){var n=t.attributes,u=n&&n[e.objectIdField];return r.objectIds.indexOf(u)>-1}},t.prototype._rejectQuery=function(e){return s.reject(new i(this.declaredClass,e))},t.prototype._getObjectIds=function(e){var t=this.objectIdField,r=[];return e.forEach(function(e){var n=e.attributes,u=n&&n[t];null!=u&&r.push(u)}),r},t.prototype._getExtent=function(e){if(0===e.length)return null;l.empty(d);for(var t=0;t<e.length;t++){var r=e[t].geometry;c.computeAABR(r,f),l.expand(d,f,d)}return new u.Extent({xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3],spatialReference:e[0].geometry.spatialReference})},n([a.property()],t.prototype,"features",void 0),n([a.property({constructOnly:!0})],t.prototype,"layer",void 0),n([a.property()],t.prototype,"objectIdField",void 0),n([a.property()],t.prototype,"dataSpatialReference",void 0),t=n([a.subclass("esri.layers.graphics.QueryEngine")],t)}(a.declared(o)),d=l.create(),f=l.create();return y});