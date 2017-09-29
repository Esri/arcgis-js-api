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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Error","../../../core/HandleRegistry","../../../core/Logger","../../../core/promiseUtils","../../../core/watchUtils","./TiledLayerView3D"],function(e,t,i,r,o,n,a,l,s,p,c){var h=l.getLogger("esri.views.3d.layers.WMTSLayerView3d"),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t}return i(t,e),t.prototype.initialize=function(){var e=this,t=p.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var t=e.view.basemapTerrain.tilingScheme,i=e.layer.activeLayer,r=e.layer.findSublayerById(i.id).clone(),o=r.tileMatrixSet;if(o){var a=o.tileInfo,l=e._getTileInfoSupportError(a,o.fullExtent)||e._getTileInfoCompatibilityError(a,t);if(l)return s.reject(l)}else{if(o=e._getCompatibleTileMatrixSet(),!o)return s.reject(new n("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene."));i.tileMatrixSetId=o.id}e.tileInfo=o.tileInfo,e.fullExtent=o.fullExtent,e._updateMinMaxDataLevel()});this.addResolvingPromise(t),this.addResolvingPromise(this.getHeightModelInfoResolvingPromise()),this.then(function(){return e._initialized()})},t.prototype.destroy=function(){this._handles.removeAll()},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype._initialized=function(){var e=this;this._handles.add(this.layer.activeLayer.watch("styleId",function(t){e.refresh()})),this._handles.add(this.layer.watch("activeLayer",function(t){var i=t.tileMatrixSet;if(i){var r=e._getTileInfoError(i.tileInfo,i.fullExtent);r&&(h.error("The selected tile matrix set is not compatible with the view",r),i=null)}else i=e._getCompatibleTileMatrixSet(),i?t.tileMatrixSetId=i.id:h.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()}))},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find(function(t){var i=t.tileInfo;return!e._getTileInfoError(i,t.fullExtent)})},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},r([o.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),r([o.property()],t.prototype,"layer",void 0),r([o.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),t=r([o.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(o.declared(c));return f});