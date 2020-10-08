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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../2d/engine/vectorTiles/SchemaHelper","../../2d/engine/vectorTiles/TileHandler","../../2d/engine/vectorTiles/VTLPainter3D","./LayerView3D","./TiledLayerView3D","../terrain/terrainUtils","../../layers/LayerView"],(function(e,t,i,r,l,a,n,o,s,c,d,h,p){"use strict";return function(e){function t(t){return e.call(this,t)||this}return i.__extends(t,e),t.prototype.initialize=function(){var e=this,t=h.test.force512VTL?this.layer.tileInfo:this.layer.compatibleTileInfo256,i=this._getTileInfoSupportError(t,this.layer.fullExtent);if(i)this.addResolvingPromise(r.reject(i));else{var a=l.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then((function(){var t,i=e.view.basemapTerrain.tilingScheme,r=i.pixelSize;e.schemaHelper=new n(r,e.view.spatialReference.isGeographic),t=256===r?e.layer.compatibleTileInfo256:e.view.spatialReference.isGeographic?e.layer.compatibleTileInfo512:e.layer.tileInfo;var l=e._getTileInfoCompatibilityError(t,i);if(l)throw l;e._set("tileInfo",t)})),c=r.createAbortController();this._memCache=this.view.resourceController.memoryController.getMemCache(this.layer.uid,(function(t){return e.tileHandler.releaseVectorTile(t)}));var d=this.view.resourceController.scheduler;this.tileHandler=new o.TileHandler(this.layer,this.view.pixelRatio,this._memCache);var p=this.tileHandler.start({signal:c.signal,scheduler:d}),u=this.tileHandler.spriteMosaic;u.then((function(t){return e.painter=new s.default(t,e.tileHandler.glyphMosaic)})),p.then((function(){return c=null}));var y=function(){c&&c.abort(),c=r.createAbortController(),e._memCache.clear();var t=new o.TileHandler(e.layer,e.view.pixelRatio,e._memCache),i=t.start({signal:c.signal,scheduler:d}),l=t.spriteMosaic;i.then((function(){return c=null})),e.updatingHandles.addPromise(r.all([i,l]).then((function(i){var r=i[1],l=e.tileHandler,a=e.painter;e.painter=new s.default(r,t.glyphMosaic),e.tileHandler=t,e.emit("data-changed"),l.destroy(),a&&a.dispose()})))};this.updatingHandles.add(this,"layer.currentStyleInfo",y),this.updatingHandles.add(this,"view.pixelRatio",y);var f=r.all([a,p,u]);this.addResolvingPromise(f)}},t.prototype.destroy=function(){this._memCache&&(this._memCache.destroy(),this._memCache=null),this.painter&&(this.painter.dispose(),this.painter=null),this.tileHandler&&(this.tileHandler.destroy(),this.tileHandler=null)},Object.defineProperty(t.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,i);return 1===r.minLevel&&256===this.tileInfo.size[0]&&(r.minLevel=0),r},enumerable:!1,configurable:!0}),i.__decorate([a.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i.__decorate([a.property()],t.prototype,"layer",void 0),i.__decorate([a.property()],t.prototype,"tileInfo",void 0),i.__decorate([a.property()],t.prototype,"dataLevelRange",null),i.__decorate([a.property()],t.prototype,"updatingProgressValue",void 0),t=i.__decorate([a.subclass("esri.views.3d.layers.VectorTileLayerView3D")],t)}(d.TiledLayerView3D(c.LayerView3D(p)))}));