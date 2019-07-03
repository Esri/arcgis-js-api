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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/Handles","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./TiledLayerView3D","../../layers/RefreshableLayerView"],function(e,t,r,i,o,n,a,l,s,p,c,u,h,f){var d=s.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new l,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=c.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var t=function(){return new a("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!e.view.basemapTerrain.tilingSchemeLocked)return p.reject(t());var r,i=e.view.basemapTerrain.tilingScheme,o=e.layer.activeLayer;if(o&&o.tileMatrixSet){r=o.tileMatrixSet;var n=r.tileInfo,l=e._getTileInfoSupportError(n,r.fullExtent)||e._getTileInfoCompatibilityError(n,i);if(l)return p.reject(l)}else{if(!(r=e._getCompatibleTileMatrixSet()))return p.reject(t());o.tileMatrixSetId=r.id}e._set("tileInfo",r.tileInfo),e._set("fullExtent",r.fullExtent),e.layer.fullExtent=r.fullExtent});this.addResolvingPromise(t),this.when(function(){return e._initialized()})},t.prototype.destroy=function(){this._handles.removeAll()},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype.doRefresh=function(e){return n(this,void 0,void 0,function(){return o(this,function(e){return this.suspended?[2]:(this.emit("data-changed"),[2])})})},t.prototype._initialized=function(){var e=this;this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return e.refresh()})),this._handles.add(this.layer.watch("activeLayer",function(t){var r=t.tileMatrixSet;if(r){var i=e._getTileInfoError(r.tileInfo,r.fullExtent);i&&(d.error("The selected tile matrix set is not compatible with the view",i),r=null)}else r=e._getCompatibleTileMatrixSet(),r?t.tileMatrixSetId=r.id:d.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()}))},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find(function(t){var r=t.tileInfo;return!e._getTileInfoError(r,t.fullExtent)})},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},i([u.property()],t.prototype,"fullExtent",void 0),i([u.property()],t.prototype,"layer",void 0),i([u.property({dependsOn:["layer.activeLayer"]})],t.prototype,"suspended",void 0),i([u.property()],t.prototype,"tileInfo",void 0),t=i([u.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(u.declared(h,f))});