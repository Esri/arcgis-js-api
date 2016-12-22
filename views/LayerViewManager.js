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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor","../core/Error","../core/HandleRegistry","../core/Scheduler","../core/promiseUtils","../core/watchUtils","./LayerViewFactory"],function(e,r,s,i,t,a,o,h,n,l,p,y){var c=function(e){function r(){var r=this;e.call(this),this._promisesMap=new Map,this._layerViewsMap=new Map,this._handles=new h,this.factory=new y,this.ready=!1,this.layersToLayerViews=function(){var e=new Map;return e.set("view.map.basemap.baseLayers","view.basemapView.baseLayerViews"),e.set("view.map.ground.layers","view.groundView.layerViews"),e.set("view.map.layers","view.layerViews"),e.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"),e}(),this._doWork=this._doWork.bind(this),this.refresh=this.refresh.bind(this),this._handles.add(p.init(this,"view.ready",function(e){return r.ready=e})),this._handles.add(this.watch(["view.map.basemap","view.map.ground","view.map.layers","ready"],this.refresh),"watcher")}return s(r,e),r.prototype.destroy=function(){this.view=null,this.empty(),this.factory.destroy(),this.factory=null,this._handles.destroy(),this._handles=null,this._promisesMap=null,this._layerViewsMap=null,this._map=null},r.prototype.empty=function(){this._layerViewsMap.forEach(this._disposeLayerView,this),this._promisesMap.forEach(function(e){return e.cancel()}),this._layerViewsMap.clear(),this._promisesMap.clear(),this._refreshCollections()},r.prototype.refresh=function(){var e=this._handles;e.remove("refresh"),e.add(n.schedule(this._doWork),"refresh")},r.prototype.whenLayerView=function(e){return this.refresh(),this._doWork(),this._promisesMap.has(e)?this._promisesMap.get(e):l.reject(new o("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:e}))},r.prototype._doWork=function(){var e=this,r=this._handles,s=this.get("view.map");if(this._map!==s&&(this.empty(),this._map=s),r.has("refresh")){r.remove("refresh"),r.remove("collection-change"),this.factory.paused=!this.ready;var i=this._map&&this._map.allLayers;i&&(i.forEach(this._createLayerView,this),this._refreshCollections(),this._promisesMap.forEach(function(r,s){i.includes(s)||e._disposeLayerView(e._layerViewsMap.get(s),s)}),r.add(i.on("change",this.refresh),"collection-change"))}},r.prototype._refreshCollections=function(){var e=this;this.layersToLayerViews.forEach(function(r,s){e._populateLayerViewsOwners(e.get(s),e.get(r),e.view)})},r.prototype._populateLayerViewsOwners=function(e,r,s){var i=this;if(!e||!r)return void(r&&r.removeAll());var t=0;e.forEach(function(e){var a=i._layerViewsMap.get(e);a&&(a.layer=e,a.parent=s,r.getItemAt(t)!==a&&r.splice(t,0,a),e.layers&&i._populateLayerViewsOwners(e.layers,a.layerViews,a),t+=1)}),t<r.length&&r.splice(t,r.length)},r.prototype._createLayerView=function(e){var r=this,s=this.view,i=this.factory,t=this._layerViewsMap,a=this._promisesMap;if(t.has(e))return void e.load();if(!a.has(e)){var h=i.create(s,e).then(function(i){var a=r._map&&r._map.allLayers.some(function(r){return e===r});if(!a)throw new o("view:no-layerview-for-layer","The layer has been removed from the map",{layer:e});return t.set(e,i),r._refreshCollections(),e.emit("layerview-create",{view:s,layerView:i}),s.emit("layerview-create",{layer:e,layerView:i}),l.resolve(i)});a.set(e,h),h.always(this.refresh)}},r.prototype._disposeLayerView=function(e,r){if(this._promisesMap.has(r)&&(this._promisesMap.get(r).cancel(),this._promisesMap["delete"](r),e)){var s=e.layer,i=e.view,t=this.factory;t.dispose(e),e.layer=e.parent=e.view=null,this._layerViewsMap["delete"](s),s.emit("layerview-destroy",{view:i,layerView:e}),i.emit("layerview-destroy",{layer:s,layerView:e})}},i([t.property()],r.prototype,"ready",void 0),i([t.property()],r.prototype,"view",void 0),r=i([t.subclass("esri.views.LayerViewManager")],r)}(t.declared(a));return c});