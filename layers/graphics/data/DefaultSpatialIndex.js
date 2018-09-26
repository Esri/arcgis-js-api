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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","@dojo/framework/shim/Map","../../../core/Error","../../../core/Logger","./FeatureStore"],function(e,t,r,o,a,n,s){Object.defineProperty(t,"__esModule",{value:!0});var i=n.getLogger("esri.layers.graphics.data.FeatureStore"),u=[],f=function(){function e(e){this._featuresById=new o.default,this._store=new s.default(e)}return Object.defineProperty(e.prototype,"geometryType",{get:function(){return this._store.featureInfo.geometryType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasM",{get:function(){return this._store.featureInfo.hasM},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasZ",{get:function(){return this._store.featureInfo.hasZ},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numFeatures",{get:function(){return this._store.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullBounds",{get:function(){return this._store.bounds},enumerable:!0,configurable:!0}),e.prototype.setEngine=function(e){this._engine=e},e.prototype.add=function(e){if(e){var t=e.objectId;if(null==t)return void i.error(new a("featurestore:invalid-feature","feature id is missing",{feature:e}));var r=this._featuresById.get(t);r?this._store.replace(r,e):this._store.add(e),this._featuresById.set(t,e),this._clearCache()}},e.prototype.addMany=function(e){for(var t=0,r=e;t<r.length;t++){var o=r[t];if(o){var n=o.objectId;if(null!=n){var s=this._featuresById.get(n);s?this._store.replace(s,o):u.push(o),this._featuresById.set(n,o)}else i.error(new a("featurestore:invalid-feature","feature id is missing",{feature:o}))}}this._store.addMany(u),u.length=0,this._clearCache()},e.prototype.clear=function(){this._featuresById.clear(),this._store.clear(),this._clearCache()},e.prototype.removeManyById=function(e){for(var t=0,r=e;t<r.length;t++){var o=r[t];this._store.remove(this._featuresById.get(o)),this._featuresById.delete(o)}this._clearCache()},e.prototype.forEachBounds=function(e,t){this._store.forEachBounds(e,t)},e.prototype.getAllFeatures=function(){return r.from(this._featuresById,function(e){e[0];return e[1]})},e.prototype.getFeature=function(e){return this._featuresById.get(e)},e.prototype.hasFeature=function(e){return this._featuresById.has(e)},e.prototype.forEachFeatureInBounds=function(e,t){this._store.forEachFeatureInBounds(e,t)},e.prototype.mapFeaturesInBounds=function(e,t){return this._store.mapFeaturesInBounds(e,t)},e.prototype.transferIds=function(e,t){for(var r=[],o=0,a=t;o<a.length;o++){var n=a[o],s=this._featuresById.get(n);s&&(this._store.remove(s),this._featuresById.delete(s.objectId),r.push(s))}e.addMany(r),this._clearCache()},e.prototype.transferIdRange=function(e,t,r){for(var o=[],a=t;a<r;a++){var n=this._featuresById.get(a);n&&(this._store.remove(n),this._featuresById.delete(n.objectId),o.push(n))}e.addMany(o),this._clearCache()},e.prototype.transferIf=function(e,t){var r=this,o=[];this._featuresById.forEach(function(e,a){t(e)&&(r._store.remove(e),r._featuresById.delete(e.objectId),o.push(e))}),e.addMany(o),this._clearCache()},e.prototype.transferAll=function(e){var t=this,r=[];this._featuresById.forEach(function(e,o){t._store.remove(e),t._featuresById.delete(e.objectId),r.push(e)}),e.addMany(r),this._clearCache()},e.prototype._clearCache=function(){this._engine&&this._engine.clearCache()},e}();t.default=f});