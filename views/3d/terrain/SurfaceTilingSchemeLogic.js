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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../core/HandleRegistry","./terrainUtils","./TilingScheme"],function(e,t,i,r,n,o,a,l,s){var c=function(e){function t(t){var i=e.call(this,t)||this;return i._changeHandles=new a,i}return i(t,e),t.prototype.initialize=function(){var e=this;this._changeHandles.add(this.layers.on("change",function(){return e._update()})),this._changeHandles.add(this.extentHelper.watch("layerViewsExtent",function(){return e._setAdHocTilingScheme()})),this._update(),this.tilingSchemeLocked||this._setAdHocTilingScheme()},t.prototype.destroy=function(){this._changeHandles.destroy(),this._changeHandles=null},t.prototype._update=function(){var e=this;if(this._waitTask=null,!this.tilingSchemeLocked){var t=this.layers.find(function(t){if(l.isTiledLayer(t)){if(!t.isFulfilled())return!0;if(t.isRejected())return!1;var i=l.getTiledLayerInfo(t,e.viewSpatialReference,e.manifold).tileInfo;return!!i}return!1});if(t)if(t.isResolved()){var i=t,r=l.getTiledLayerInfo(i,this.viewSpatialReference,this.manifold).tileInfo,n=new s(r),o=l.getKnownTiledServiceLevelCap(i.url);1/0>o&&n.capMaxLod(o),this._lockTilingScheme(n)}else this._updateWhen(t)}},t.prototype._updateWhen=function(e){var t=this,i=e.always(function(){i===t._waitTask&&t._update()});this._waitTask=i},t.prototype._lockTilingScheme=function(e){var t=this;if("spherical"===this.manifold){var i=e.levels.length-1;e=e.spatialReference.isWebMercator?s.makeWebMercatorAuxiliarySphere(i):s.makeWGS84WithTileSize(e.pixelSize[0],i)}this.tilingSchemeLocked=!0,this.tilingScheme=e,this.extentHelper.tilingScheme=this.tilingScheme,this._updateTiledLayerExtent(),this._changeHandles.removeAll(),this._changeHandles.add(this.extentHelper.watch("tiledLayersExtent",function(){return t._updateTiledLayerExtent()}))},t.prototype._updateTiledLayerExtent=function(){this.extent=this.extentHelper.tiledLayersExtent},t.prototype._setAdHocTilingScheme=function(){if("spherical"===this.manifold)this.tilingScheme=this.extentHelper.spatialReference.isWebMercator?s.WebMercatorAuxiliarySphere:s.makeWGS84WithTileSize(256),this.extent=this.extentHelper.layerViewsExtent;else{var e=this.extentHelper.layerViewsExtent;e&&(this.tilingScheme=s.fromExtent(e,this.extentHelper.spatialReference),this.extent=e)}},r([n.property()],t.prototype,"tilingScheme",void 0),r([n.property()],t.prototype,"extent",void 0),r([n.property({value:!1})],t.prototype,"tilingSchemeLocked",void 0),r([n.property({constructOnly:!0})],t.prototype,"viewSpatialReference",void 0),r([n.property({constructOnly:!0})],t.prototype,"layers",void 0),r([n.property({constructOnly:!0})],t.prototype,"extentHelper",void 0),r([n.property({constructOnly:!0})],t.prototype,"manifold",void 0),t=r([n.subclass()],t)}(n.declared(o));return c});