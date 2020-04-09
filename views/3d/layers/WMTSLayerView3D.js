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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/Logger","../../../core/watchUtils","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(e,t,r,i,o,n,a,l,s,p,u,c,h,d){var f=l.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"hasMixedImageFormats",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=s.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then((function(){var t=function(){return new a("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!e.view.basemapTerrain.tilingSchemeLocked)throw t();var r,i=e.view.basemapTerrain.tilingScheme,o=e.layer.activeLayer;if(o&&o.tileMatrixSet){var n=(r=o.tileMatrixSet).tileInfo,l=e._getTileInfoSupportError(n,r.fullExtent)||e._getTileInfoCompatibilityError(n,i);if(l)throw l}else{if(!(r=e._getCompatibleTileMatrixSet()))throw t();o.tileMatrixSetId=r.id}e._set("tileInfo",r.tileInfo),e._set("fullExtent",r.fullExtent),e.layer.fullExtent=r.fullExtent}));this.addResolvingPromise(t),this.when((function(){return e._initialized()}))},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype.doRefresh=function(){return n(this,void 0,void 0,(function(){return o(this,(function(e){return this.suspended?[2]:(this.emit("data-changed"),[2])}))}))},t.prototype._initialized=function(){var e=this;this.updatingHandles.add(this,"layer.activeLayer.styleId",(function(){return e.refresh()})),this.updatingHandles.add(this,"tileMatrixSet",(function(){return e.refresh()})),this.updatingHandles.add(this.layer,"activeLayer",(function(t){var r=t.tileMatrixSet;if(r){var i=e._getTileInfoError(r.tileInfo,r.fullExtent);i&&(f.error("The selected tile matrix set is not compatible with the view",i),r=null)}else(r=e._getCompatibleTileMatrixSet())?t.tileMatrixSetId=r.id:f.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()}))},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find((function(t){var r=t.tileInfo;return!e._getTileInfoError(r,t.fullExtent)}))},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},i([p.property({readOnly:!0})],t.prototype,"hasMixedImageFormats",null),i([p.property()],t.prototype,"fullExtent",void 0),i([p.property()],t.prototype,"layer",void 0),i([p.property({dependsOn:["layer.activeLayer"]})],t.prototype,"suspended",void 0),i([p.property()],t.prototype,"tileInfo",void 0),t=i([p.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(p.declared(d.RefreshableLayerView(c.TiledLayerView3D(u.LayerView3D(h)))))}));