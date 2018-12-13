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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Error","../core/Handles","../core/promiseUtils","../core/scheduling","../core/watchUtils","../core/accessorSupport/decorators","./LayerViewFactory"],function(e,r,s,a,i,t,o,n,h,l,p,y){return function(e){function r(){var r=e.call(this)||this;return r._promisesMap=new Map,r._layerViewsMap=new Map,r._handles=new o,r.factory=new y,r.ready=!1,r.layersToLayerViews=function(){var e=new Map;return e.set("view.map.basemap.baseLayers","view.basemapView.baseLayerViews"),e.set("view.map.ground.layers","view.groundView.layerViews"),e.set("view.map.layers","view.layerViews"),e.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"),e}(),r._doWork=r._doWork.bind(r),r.refresh=r.refresh.bind(r),r._handles.add(l.init(r,"view.ready",function(e){return r.ready=e})),r._handles.add(r.watch(["view.map.basemap","view.map.ground","view.map.layers","ready"],r.refresh),"watcher"),r}return s(r,e),r.prototype.destroy=function(){this._handles&&(this.clear(),this.view=null,this.factory.destroy(),this.factory=null,this._handles.destroy(),this._handles=null,this._promisesMap=null,this._layerViewsMap=null,this._map=null)},r.prototype.clear=function(){this.destroyed||(this._layerViewsMap.forEach(this._disposeLayerView,this),this._promisesMap.forEach(function(e){return e.cancel()}),this._layerViewsMap.clear(),this._promisesMap.clear(),this._refreshCollections())},r.prototype.refresh=function(){var e=this._handles;e.remove("refresh"),e.add(h.schedule(this._doWork),"refresh")},r.prototype.whenLayerView=function(e){return this.refresh(),this._doWork(),this._promisesMap.has(e)?this._promisesMap.get(e):n.reject(new t("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:e}))},r.prototype._doWork=function(){var e=this,r=this._handles,s=this.get("view.map");if(this._map!==s&&(this.clear(),this._map=s),r.has("refresh")){r.remove("refresh"),r.remove("collection-change"),this.factory.paused=!this.ready;var a=this._map&&this._map.allLayers;a&&(a.forEach(this._createLayerView,this),this._refreshCollections(),this._promisesMap.forEach(function(r,s){a.includes(s)||e._disposeLayerView(e._layerViewsMap.get(s),s)}),r.add(a.on("change",this.refresh),"collection-change"))}},r.prototype._refreshCollections=function(){var e=this;this.layersToLayerViews.forEach(function(r,s){e._populateLayerViewsOwners(e.get(s),e.get(r),e.view)})},r.prototype._populateLayerViewsOwners=function(e,r,s){var a=this;if(!e||!r)return void(r&&r.removeAll());var i=0;e.forEach(function(e){var t=a._layerViewsMap.get(e);t&&(t.layer=e,t.parent=s,r.getItemAt(i)!==t&&r.splice(i,0,t),e.layers&&a._populateLayerViewsOwners(e.layers,t.layerViews,t),i+=1)}),i<r.length&&r.splice(i,r.length)},r.prototype._createLayerView=function(e){var r=this,s=this.view,a=this.factory,i=this._layerViewsMap,o=this._promisesMap;if(i.has(e))return void e.load();if(!o.has(e)){var n=a.create(s,e).then(function(a){if(!r._map||!r._map.allLayers.some(function(r){return e===r}))throw new t("view:no-layerview-for-layer","The layer has been removed from the map",{layer:e});return i.set(e,a),r._refreshCollections(),e.emit("layerview-create",{view:s,layerView:a}),s.emit("layerview-create",{layer:e,layerView:a}),a.when()});o.set(e,n),n.then(this.refresh,this.refresh)}},r.prototype._disposeLayerView=function(e,r){if(this._promisesMap.has(r)&&(this._promisesMap.get(r).cancel(),this._promisesMap.delete(r),e)){var s=e.layer,a=e.view;this.factory.dispose(e),e.layer=e.parent=e.view=null,this._layerViewsMap.delete(s),s.emit("layerview-destroy",{view:a,layerView:e}),a.emit("layerview-destroy",{layer:s,layerView:e})}},a([p.property()],r.prototype,"ready",void 0),a([p.property()],r.prototype,"view",void 0),r=a([p.subclass("esri.views.LayerViewManager")],r)}(p.declared(i))});