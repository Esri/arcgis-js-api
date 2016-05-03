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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/typescript","../../../core/Accessor","../../../core/HandleRegistry","../../../geometry/SpatialReference","./TilingScheme","./terrainUtils"],function(e,t,i,n,r,a,s,o,l,c){function p(e){return c.isTiledLayer(e)}var h=function(e){function t(){e.apply(this,arguments)}return i(t,e),t.prototype.dojoConstructor=function(){this._changeHandles=new s},t.prototype.normalizeCtorArgs=function(e){return this._layers=e.layers,this._extentHelper=e.extentHelper,this._manifold=e.manifold,{changeCallback:e.changeCallback,viewSpatialReference:e.viewSpatialReference}},t.prototype.initialize=function(){var e=this;this._changeHandles.add(this._layers.on("change",function(){return e._update()})),this._changeHandles.add(this._extentHelper.watch("layerViewsExtent",function(){return e._setAdHocTilingScheme()})),this._update(),this.tilingSchemeLocked||this._setAdHocTilingScheme()},t.prototype.destroy=function(){this._changeHandles.destroy(),this._changeHandles=null},t.prototype._update=function(){var e=this;if(this._waitTask=null,!this.tilingSchemeLocked){var t=this._layers.find(function(t){return p(t)?t.isResolved()&&!e._isTileInfoSupported(t.tileInfo)?!1:!t.isRejected():void 0});if(t)if(t.isResolved()){var i=t,n=new l(i.tileInfo),r=c.getKnownTiledServiceLevelCap(i.url);1/0>r&&n.capMaxLod(r),this._lockTilingScheme(n)}else this._updateWhen(t)}},t.prototype._updateWhen=function(e){var t=this,i=e.always(function(){i===t._waitTask&&t._update()});this._waitTask=i},t.prototype._lockTilingScheme=function(e){var t=this;this.tilingSchemeLocked=!0,this.tilingScheme=e,this._extentHelper.tilingScheme=this.tilingScheme,this._updateTiledLayerExtent(),this._changeHandles.removeAll(),this._changeHandles.add(this._extentHelper.watch("tiledLayersExtent",function(){return t._updateTiledLayerExtent()})),this._signalChange()},t.prototype._updateTiledLayerExtent=function(){this.extent=this._extentHelper.tiledLayersExtent},t.prototype._setAdHocTilingScheme=function(){if("spherical"===this._manifold)this.tilingScheme=this._extentHelper.spatialReference.isWebMercator?l.WebMercatorAuxiliarySphere:l.makeWGS84WithTileSize(256),this.extent=this._extentHelper.layerViewsExtent,this._signalChange();else{var e=this._extentHelper.layerViewsExtent;e&&(this.tilingScheme=l.fromExtent(e,this._extentHelper.spatialReference),this.extent=e,this._signalChange())}},t.prototype._isTileInfoSupported=function(e){if("spherical"!==this._manifold)return!l.checkUnsupported(e)&&e.spatialReference.equals(this.viewSpatialReference);if(e.spatialReference.isWebMercator)return l.WebMercatorAuxiliarySphere.compatibleWith(e);if(e.spatialReference.equals(o.WGS84)){var t=l.makeWGS84WithTileSize(e.rows);return t.compatibleWith(e)}},t.prototype._signalChange=function(){this.changeCallback&&this.changeCallback()},n([r.property()],t.prototype,"tilingScheme",void 0),n([r.property()],t.prototype,"extent",void 0),n([r.property({value:!1})],t.prototype,"tilingSchemeLocked",void 0),n([r.property()],t.prototype,"changeCallback",void 0),n([r.property()],t.prototype,"viewSpatialReference",void 0),t=n([r.subclass()],t)}(a);return h});