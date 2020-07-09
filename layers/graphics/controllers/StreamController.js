// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../geometry","../../../Graphic","../../../core/Evented","../../../core/HandleOwner","../../../core/Promise","../../../core/accessorSupport/decorators","../data/StreamFeatureManager","../sources/connections/GeoEventConnection","../../../views/3d/support/EventedSet"],(function(e,t,r,o,n,i,a,s,c,u,p,d){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){this.layer=e,this.collection=t,this._idToGraphic=new Map,this._idToFeature=new Map}return e.prototype.destroy=function(){this._idToGraphic.clear(),this._idToFeature.clear()},e.prototype.add=function(e){var t=n.fromJSON(e);t.sourceLayer=t.layer=this.layer,this._idToFeature.set(e.objectId,e),this._idToGraphic.set(e.objectId,t),this.collection.addMany([t])},e.prototype.forEach=function(e){this._idToFeature.forEach(e)},e.prototype.removeById=function(e){var t=this._idToFeature.get(e),r=this._idToGraphic.get(e);return t&&r?(r.sourceLayer=r.layer=null,this.collection.remove(r),this._idToFeature.delete(e),this._idToGraphic.delete(e),t):null},e.prototype.update=function(e,t){},Object.defineProperty(e.prototype,"size",{get:function(){return this.collection.length},enumerable:!0,configurable:!0}),e}(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphics=new d.EventedSet,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer.when((function(){return e._startup()})))},t.prototype.destroy=function(){this.clear()},t.prototype.clear=function(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.connection||"connected"===this.connection.connectionStatus},enumerable:!0,configurable:!0}),t.prototype._startup=function(){var e=this,t=this.layer,r=t.parsedUrl,n=t.spatialReference,i=t.definitionExpression,a=t.geometryDefinition,s=t.objectIdField,c=t.timeInfo,d=t.purgeOptions,h=o.featureGeometryTypeKebabDictionary.toJSON(this.layer.geometryType);this.clear(),this._set("connection",new p.default(r.path,n,this.layerView.view.spatialReference,h,{geometry:a,where:i})),this.store=new l(this.layer,this.graphics),this.featuresManager=new u.default(this.store,s,c.toJSON(),d),this.handles.add([this.connection.on("feature",(function(t){return e._onFeature(t)})),this.layer.watch("definitionExpression",(function(){return e._startup()})),this.layer.watch("geometryDefinition",(function(){return e._startup()})),this.layer.watch("purgeOptions",(function(){return e._startup()}))]),this._updateIntervalId=setInterval((function(){return e.featuresManager.checkForUpdates()}),64)},t.prototype._onFeature=function(e){this.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{this.featuresManager.add(e)}catch(e){}},r.__decorate([c.property()],t.prototype,"connection",void 0),r.__decorate([c.property()],t.prototype,"layer",void 0),r.__decorate([c.property()],t.prototype,"layerView",void 0),r.__decorate([c.property({readOnly:!0,dependsOn:["connection.connectionStatus"]})],t.prototype,"updating",null),t=r.__decorate([c.subclass("esri.layers.graphics.controllers.StreamController")],t)}(a.HandleOwnerMixin(s.EsriPromiseMixin(i.EventedAccessor)));t.default=h}));