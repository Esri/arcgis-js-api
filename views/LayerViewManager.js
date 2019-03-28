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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Error","../core/Handles","../core/promiseUtils","../core/scheduling","../core/watchUtils","../core/accessorSupport/decorators","./LayerViewFactory"],function(e,r,a,s,i,t,o,n,h,l,p,y){return function(e){function r(r){var a=e.call(this)||this;return a._promisesMap=new Map,a._layerViewsMap=new Map,a._handles=new o,a.factory=new y,a.ready=!1,a.layersToLayerViews=function(){var e=new Map;return e.set("view.map.basemap.baseLayers","view.basemapView.baseLayerViews"),e.set("view.map.ground.layers","view.groundView.layerViews"),e.set("view.map.layers","view.layerViews"),e.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"),e}(),a._doWork=a._doWork.bind(a),a.refresh=a.refresh.bind(a),a._handles.add(l.init(a,"view.ready",function(e){return a.ready=e})),a._handles.add(a.watch(["view.map.basemap","view.map.ground","view.map.layers","ready"],a.refresh),"watcher"),a}return a(r,e),r.prototype.destroy=function(){this._handles&&(this.clear(),this.view=null,this.factory.destroy(),this.factory=null,this._handles.destroy(),this._handles=null,this._promisesMap=null,this._layerViewsMap=null,this._map=null)},r.prototype.clear=function(){var e=this;this.destroyed||(this._layerViewsMap.forEach(function(r,a){return e._disposeLayerView(r,a)}),this._promisesMap.forEach(function(e){return e.cancel()}),this._layerViewsMap.clear(),this._promisesMap.clear(),this._refreshCollections())},r.prototype.refresh=function(){var e=this._handles;e.remove("refresh"),e.add(h.schedule(this._doWork),"refresh")},r.prototype.whenLayerView=function(e){return this.refresh(),this._doWork(),this._promisesMap.has(e)?this._promisesMap.get(e):n.reject(new t("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:e}))},r.prototype._doWork=function(){var e=this,r=this._handles,a=this.get("view.map");if(this._map!==a&&(this.clear(),this._map=a),r.has("refresh")){r.remove("refresh"),r.remove("collection-change"),this.factory.paused=!this.ready;var s=this._map&&this._map.allLayers;s&&(s.forEach(this._createLayerView,this),this._refreshCollections(),this._promisesMap.forEach(function(r,a){s.includes(a)||e._disposeLayerView(e._layerViewsMap.get(a),a)}),r.add(s.on("change",this.refresh),"collection-change"))}},r.prototype._refreshCollections=function(){var e=this;this.layersToLayerViews.forEach(function(r,a){e._populateLayerViewsOwners(e.get(a),e.get(r),e.view)})},r.prototype._populateLayerViewsOwners=function(e,r,a){var s=this;if(!e||!r)return void(r&&r.removeAll());var i=0;e.forEach(function(e){var t=s._layerViewsMap.get(e);t&&(t.layer=e,t.parent=a,r.getItemAt(i)!==t&&r.splice(i,0,t),e.layers&&s._populateLayerViewsOwners(e.layers,t.layerViews,t),i+=1)}),i<r.length&&r.splice(i,r.length)},r.prototype._createLayerView=function(e){var r=this,a=this.view,s=this.factory,i=this._layerViewsMap,o=this._promisesMap;if(i.has(e))return void e.load();if(!o.has(e)){var n=s.create(a,e).then(function(s){if(!r._map||!r._map.allLayers.some(function(r){return e===r}))throw new t("view:no-layerview-for-layer","The layer has been removed from the map",{layer:e});return i.set(e,s),r._refreshCollections(),e.emit("layerview-create",{view:a,layerView:s}),a.emit("layerview-create",{layer:e,layerView:s}),s.when()});o.set(e,n),n.then(this.refresh,this.refresh)}},r.prototype._disposeLayerView=function(e,r){if(this._promisesMap.has(r)&&(this._promisesMap.get(r).cancel(),this._promisesMap.delete(r),e)){var a=e.layer,s=e.view;this.factory.dispose(e),e.layer=e.parent=e.view=null,this._layerViewsMap.delete(a),a.emit("layerview-destroy",{view:s,layerView:e}),s.emit("layerview-destroy",{layer:a,layerView:e})}},s([p.property()],r.prototype,"ready",void 0),s([p.property()],r.prototype,"view",void 0),r=s([p.subclass("esri.views.LayerViewManager")],r)}(p.declared(i))});