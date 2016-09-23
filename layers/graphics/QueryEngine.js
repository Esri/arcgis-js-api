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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","../../core/promiseUtils","../../core/Error","../../geometry/support/graphicsUtils"],function(e,t,r,n,i,u){var s="QueryEngine",o=e(null,{constructor:function(e){t.mixin(this,e)},features:null,objectIdField:null,queryFeatures:function(e){var t;if(this.features)if(e)if(this._isSupportedQuery(e)){var r=this._createFilters(e);t=r.length?this._executeQuery(e,r):this._rejectQuery("Invalid query")}else t=this._rejectQuery("Unsupported query");else t=this._returnAllFeatures();else t=this._rejectQuery("Engine not initialized");return t},queryObjectIds:function(e){return this.objectIdField?this.queryFeatures(e).then(this._getObjectIds.bind(this)):this._rejectQuery("Unsupported query")},queryFeatureCount:function(e){return this.queryFeatures(e).then(function(e){return e.length}.bind(this))},queryExtent:function(e){return this.queryFeatures(e).then(function(e){return{count:e.length,extent:this._getExtent(e)}}.bind(this))},_returnAllFeatures:function(){return n.resolve(this.features.toArray())},_executeQuery:function(e,t){var n,i=new r;return n=this.features.filter(function(r){return t.every(function(t){return t.call(this,r,e)},this)},this),i.resolve(n.toArray()),i.promise},_isSupportedQuery:function(e){var t;return t=null!=e.distance||null!=e.geometryPrecision||e.groupByFieldsForStatistics&&e.groupByFieldsForStatistics.length||null!=e.maxAllowableOffset||e.multipatchOption||null!=e.num||e.orderByFields&&e.orderByFields.length||e.outFields&&e.outFields.length||e.outSpatialReference||e.outStatistics&&e.outStatistics.length||e.pixelSize||e.quantizationParameters||e.relationParam||e.returnDistinctValues||null!=e.start||e.text||e.timeExtent||e.where||e.objectIds&&e.objectIds.length&&!this.objectIdField?!1:!0},_createFilters:function(e){var t=[];return e.objectIds&&e.objectIds.length&&t.push(this._createObjectIdFilter()),e.geometry&&"extent"===e.geometry.type&&"intersects"===e.spatialRelationship&&t.push(this._createExtentFilter()),t},_createExtentFilter:function(){return function(e,t){var r=e.geometry,n=t.geometry;return r&&n.intersects(r)}},_createObjectIdFilter:function(){return function(e,t){var r=e.attributes,n=r&&r[this.objectIdField];return t.objectIds.indexOf(n)>-1}},_rejectQuery:function(e){return n.reject(new i(s,e))},_getObjectIds:function(e){var t=this.objectIdField,r=[];return e.forEach(function(e){var n=e.attributes,i=n&&n[t];null!=i&&r.push(i)}),r},_getExtent:function(e){return e.length?u.graphicsExtent(e):null}});return o});