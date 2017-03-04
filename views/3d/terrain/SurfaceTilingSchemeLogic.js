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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../core/HandleRegistry","./TilingScheme","./terrainUtils"],function(e,t,i,n,r,a,l,o,s){function c(e){return s.isTiledLayer(e)}var h=function(e){function t(){var t=e.call(this)||this;return t._changeHandles=new l,t}return i(t,e),t.prototype.normalizeCtorArgs=function(e){return this._layers=e.layers,this._extentHelper=e.extentHelper,this._manifold=e.manifold,{viewSpatialReference:e.viewSpatialReference}},t.prototype.initialize=function(){var e=this;this._changeHandles.add(this._layers.on("change",function(){return e._update()})),this._changeHandles.add(this._extentHelper.watch("layerViewsExtent",function(){return e._setAdHocTilingScheme()})),this._update(),this.tilingSchemeLocked||this._setAdHocTilingScheme()},t.prototype.destroy=function(){this._changeHandles.destroy(),this._changeHandles=null},t.prototype._update=function(){var e=this;if(this._waitTask=null,!this.tilingSchemeLocked){var t=this._layers.find(function(t){return c(t)?t.isResolved()&&!e._isTileInfoSupported(s.getTileInfo(t),t.fullExtent)?!1:!t.isRejected():void 0});if(t)if(t.isResolved()){var i=t,n=new o(s.getTileInfo(i)),r=s.getKnownTiledServiceLevelCap(i.url);1/0>r&&n.capMaxLod(r),this._lockTilingScheme(n)}else this._updateWhen(t)}},t.prototype._updateWhen=function(e){var t=this,i=e.always(function(){i===t._waitTask&&t._update()});this._waitTask=i},t.prototype._lockTilingScheme=function(e){var t=this;if("spherical"===this._manifold){var i=e.levels.length-1;e=e.spatialReference.isWebMercator?o.makeWebMercatorAuxiliarySphere(i):o.makeWGS84WithTileSize(e.pixelSize[0],i)}this.tilingSchemeLocked=!0,this.tilingScheme=e,this._extentHelper.tilingScheme=this.tilingScheme,this._updateTiledLayerExtent(),this._changeHandles.removeAll(),this._changeHandles.add(this._extentHelper.watch("tiledLayersExtent",function(){return t._updateTiledLayerExtent()}))},t.prototype._updateTiledLayerExtent=function(){this.extent=this._extentHelper.tiledLayersExtent},t.prototype._setAdHocTilingScheme=function(){if("spherical"===this._manifold)this.tilingScheme=this._extentHelper.spatialReference.isWebMercator?o.WebMercatorAuxiliarySphere:o.makeWGS84WithTileSize(256),this.extent=this._extentHelper.layerViewsExtent;else{var e=this._extentHelper.layerViewsExtent;e&&(this.tilingScheme=o.fromExtent(e,this._extentHelper.spatialReference),this.extent=e)}},t.prototype._isTileInfoSupported=function(e,t){return null==s.checkIfTileInfoSupportedForView(e,t,this.viewSpatialReference,this._manifold)},t}(r.declared(a));return n([r.property()],h.prototype,"tilingScheme",void 0),n([r.property()],h.prototype,"extent",void 0),n([r.property({value:!1})],h.prototype,"tilingSchemeLocked",void 0),n([r.property()],h.prototype,"viewSpatialReference",void 0),h=n([r.subclass()],h)});