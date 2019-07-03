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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/accessorSupport/decorators","../support/projectionUtils","./terrainUtils","./TilingScheme"],function(e,t,i,n,r,o,a,l,s,c){return function(e){function t(t){var i=e.call(this,t)||this;return i._changeHandles=new o,i}return i(t,e),t.prototype.initialize=function(){var e=this;this._changeHandles.add(this.layers.on("change",function(){return e._update()})),this._changeHandles.add(this.extentHelper.watch("layerViewsExtent",function(){return e._setAdHocTilingScheme()})),this._update(),this.tilingSchemeLocked||this._setAdHocTilingScheme()},t.prototype.destroy=function(){this._changeHandles.destroy(),this._changeHandles=null},t.prototype._update=function(){var e=this;if(this._waitTask=null,!this.tilingSchemeLocked){this._set("tilingSchemeDone",!1);var t=this.layers.find(function(t){if(s.isTiledLayer(t)){if(!t.isFulfilled())return!0;if(t.isRejected())return!1;return!!s.getTiledLayerInfo(t,e.viewSpatialReference,e.manifold).tileInfo}return!1});if(t)if(t.isResolved()){var i=t,n=s.getTiledLayerInfo(i,this.viewSpatialReference,this.manifold).tileInfo,r=new c(n),o=s.getKnownTiledServiceLevelCap(i.url);o<1/0&&r.capMaxLod(o),this._set("tilingSchemeDone",!0),this._lockTilingScheme(r)}else this._updateWhen(t);else this._set("tilingSchemeDone",!0)}},t.prototype._updateWhen=function(e){var t=this,i=e.when().catch(function(e){return e}).then(function(){i===t._waitTask&&t._update()});this._waitTask=i},t.prototype._lockTilingScheme=function(e){var t=this;if("spherical"===this.manifold){var i=e.levels.length-1;e.spatialReference.isWebMercator?e=c.makeWebMercatorAuxiliarySphere(i):l.canProjectToWGS84ComparableLonLat(e.spatialReference)&&(e=c.makeGCSWithTileSize(e.spatialReference,e.pixelSize[0],i))}this.tilingSchemeLocked=!0,this.tilingScheme=e,this.extentHelper.tilingScheme=this.tilingScheme,this._updateTiledLayerExtent(),this._changeHandles.removeAll(),this._changeHandles.add(this.extentHelper.watch("tiledLayersExtent",function(){return t._updateTiledLayerExtent()}))},t.prototype._updateTiledLayerExtent=function(){this.extent=this.extentHelper.tiledLayersExtent},t.prototype._setAdHocTilingScheme=function(){if("spherical"===this.manifold){var e=this.extentHelper.spatialReference;e.isWebMercator?this.tilingScheme=c.WebMercatorAuxiliarySphere:l.canProjectToWGS84ComparableLonLat(e)&&(this.tilingScheme=c.makeGCSWithTileSize(e,256)),this.extent=this.extentHelper.layerViewsExtent}else{var t=this.extentHelper.layerViewsExtent;t&&(this.tilingScheme=c.fromExtent(t,this.extentHelper.spatialReference),this.extent=t)}},n([a.property()],t.prototype,"tilingScheme",void 0),n([a.property()],t.prototype,"extent",void 0),n([a.property({value:!1})],t.prototype,"tilingSchemeLocked",void 0),n([a.property({readOnly:!0,value:!1})],t.prototype,"tilingSchemeDone",void 0),n([a.property({constructOnly:!0})],t.prototype,"viewSpatialReference",void 0),n([a.property({constructOnly:!0})],t.prototype,"layers",void 0),n([a.property({constructOnly:!0})],t.prototype,"extentHelper",void 0),n([a.property({constructOnly:!0})],t.prototype,"manifold",void 0),t=n([a.subclass("esri.views.3d.terrain.SurfaceTilingSchemeLogic")],t)}(a.declared(r))});