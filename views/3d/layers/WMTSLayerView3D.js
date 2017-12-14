// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Error","../../../core/HandleRegistry","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","./TiledLayerView3D"],function(e,t,r,i,n,o,a,l,s,c,p){var f=l.getLogger("esri.views.3d.layers.WMTSLayerView3d"),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=c.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var t=function(){return new o("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!e.view.basemapTerrain.tilingSchemeLocked)return s.reject(t());var r,i=e.view.basemapTerrain.tilingScheme,n=e.layer.activeLayer;if(n&&n.tileMatrixSet){r=n.tileMatrixSet;var a=r.tileInfo,l=e._getTileInfoSupportError(a,r.fullExtent)||e._getTileInfoCompatibilityError(a,i);if(l)return s.reject(l)}else{if(r=e._getCompatibleTileMatrixSet(),!r)return s.reject(t());n.tileMatrixSetId=r.id}e.tileInfo=r.tileInfo,e.fullExtent=r.fullExtent,e._updateMinMaxDataLevel()});this.addResolvingPromise(t),this.when(function(){return e._initialized()})},t.prototype.destroy=function(){this._handles.removeAll()},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype._initialized=function(){var e=this;this._handles.add(this.layer.activeLayer.watch("styleId",function(t){e.refresh()})),this._handles.add(this.layer.watch("activeLayer",function(t){var r=t.tileMatrixSet;if(r){var i=e._getTileInfoError(r.tileInfo,r.fullExtent);i&&(f.error("The selected tile matrix set is not compatible with the view",i),r=null)}else r=e._getCompatibleTileMatrixSet(),r?t.tileMatrixSetId=r.id:f.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()}))},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find(function(t){var r=t.tileInfo;return!e._getTileInfoError(r,t.fullExtent)})},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},i([n.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i([n.property()],t.prototype,"layer",void 0),i([n.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),t=i([n.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(n.declared(p));return h});