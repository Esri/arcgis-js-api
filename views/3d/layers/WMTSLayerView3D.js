// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","../../layers/LayerView","../../layers/RefreshableLayerView"],function(e,t,r,i,n,o,a,l,s,p,u,c,f,d,h){var y=l.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){var e=this,t=p.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var t=function(){return new a("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!e.view.basemapTerrain.tilingSchemeLocked)return s.reject(t());var r,i=e.view.basemapTerrain.tilingScheme,n=e.layer.activeLayer;if(n&&n.tileMatrixSet){r=n.tileMatrixSet;var o=r.tileInfo,l=e._getTileInfoSupportError(o,r.fullExtent)||e._getTileInfoCompatibilityError(o,i);if(l)return s.reject(l)}else{if(!(r=e._getCompatibleTileMatrixSet()))return s.reject(t());n.tileMatrixSetId=r.id}e._set("tileInfo",r.tileInfo),e._set("fullExtent",r.fullExtent),e.layer.fullExtent=r.fullExtent});this.addResolvingPromise(t),this.when(function(){return e._initialized()})},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype.doRefresh=function(e){return o(this,void 0,void 0,function(){return n(this,function(e){return this.suspended?[2]:(this.emit("data-changed"),[2])})})},t.prototype._initialized=function(){var e=this;this.updatingHandles.add(this,"layer.activeLayer.styleId",function(){return e.refresh()}),this.updatingHandles.add(this,"tileMatrixSet",function(){return e.refresh()}),this.updatingHandles.add(this.layer,"activeLayer",function(t){var r=t.tileMatrixSet;if(r){var i=e._getTileInfoError(r.tileInfo,r.fullExtent);i&&(y.error("The selected tile matrix set is not compatible with the view",i),r=null)}else r=e._getCompatibleTileMatrixSet(),r?t.tileMatrixSetId=r.id:y.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()})},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find(function(t){var r=t.tileInfo;return!e._getTileInfoError(r,t.fullExtent)})},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},i([u.property()],t.prototype,"fullExtent",void 0),i([u.property()],t.prototype,"layer",void 0),i([u.property({dependsOn:["layer.activeLayer"]})],t.prototype,"suspended",void 0),i([u.property()],t.prototype,"tileInfo",void 0),t=i([u.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(u.declared(h.RefreshableLayerView(f.TiledLayerView3D(c.LayerView3D(d)))))});