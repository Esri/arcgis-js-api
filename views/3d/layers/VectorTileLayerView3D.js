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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../2d/engine/vectorTiles/SchemaHelper","../../2d/engine/vectorTiles/TileHandler","../../2d/engine/vectorTiles/VTLPainter3D","./LayerView3D","./TiledLayerView3D","../terrain/terrainUtils","../../layers/LayerView"],function(e,t,r,i,l,a,n,o,s,p,c,d,h,u){return function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.initialize=function(){var e=this,t=h.test.force512VTL?this.layer.tileInfo:this.layer.compatibleTileInfo256,r=this._getTileInfoSupportError(t,this.layer.fullExtent);if(r)return void this.addResolvingPromise(l.reject(r));var i=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var t=e.view.basemapTerrain.tilingScheme,r=t.pixelSize;e.schemaHelper=new o(r,e.view.spatialReference.isGeographic);var i;i=256===r?e.layer.compatibleTileInfo256:e.view.spatialReference.isGeographic?e.layer.compatibleTileInfo512:e.layer.tileInfo;var l=e._getTileInfoCompatibilityError(i,t);if(l)throw l;e._set("tileInfo",i)}),n=l.createAbortController();this._memCache=this.view.resourceController.memoryController.getMemCache(this.layer.uid,function(t){return e.tileHandler.releaseVectorTile(t)});var c=this.view.resourceController.scheduler;this.tileHandler=new s.TileHandler(this.layer,this.view.pixelRatio,!1,null,this._memCache);var d=this.tileHandler.start({signal:n.signal,scheduler:c}),u=this.tileHandler.spriteMosaic;u.then(function(t){return e.painter=new p.default(t,e.tileHandler.glyphMosaic)});var y=function(){e._tileHandlerController.abort(),e._memCache.clear();var t=new s.TileHandler(e.layer,e.view.pixelRatio,!1,null,e._memCache),r=new AbortController,i=t.start({signal:r.signal,scheduler:c}),a=t.spriteMosaic;e.updatingHandles.addPromise(l.all([i,a]).then(function(r){var i=r[1],l=e.tileHandler,a=e.painter;e.painter=new p.default(i,t.glyphMosaic),e.tileHandler=t,e.emit("data-changed"),l.destroy(),a&&a.dispose()}))};this.updatingHandles.add(this,"layer.currentStyleInfo",y),this.updatingHandles.add(this,"view.pixelRatio",y),this._tileHandlerController=n;var m=l.all([i,d,u]);this.addResolvingPromise(m)},t.prototype.destroy=function(){this._memCache&&(this._memCache.destroy(),this._memCache=null),this.painter&&(this.painter.dispose(),this.painter=null),this.tileHandler&&(this.tileHandler.destroy(),this.tileHandler=null)},Object.defineProperty(t.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale,i=this.levelRangeFromScaleRange(t,r);return 1===i.minLevel&&256===this.tileInfo.size[0]&&(i.minLevel=0),i},enumerable:!0,configurable:!0}),t.prototype.getStats=function(){return{memory:Math.round(this.view.basemapTerrain.getUsedMemoryForLayerView(this)/1024/1024)+" MB (included in Terrain)"}},i([n.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i([n.property()],t.prototype,"layer",void 0),i([n.property()],t.prototype,"tileInfo",void 0),i([n.property()],t.prototype,"dataLevelRange",null),i([n.property()],t.prototype,"updatingProgressValue",void 0),t=i([n.subclass("esri.views.3d.layers.VectorTileLayerView3D")],t)}(n.declared(d.TiledLayerView3D(c.LayerView3D(u))))});