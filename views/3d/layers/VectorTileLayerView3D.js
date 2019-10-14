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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../2d/engine/vectorTiles/SchemaHelper","../../2d/engine/vectorTiles/TileHandler","../../2d/engine/vectorTiles/renderers/Renderer","./LayerView3D","./TiledLayerView3D","../terrain/terrainUtils","../../layers/LayerView"],function(e,r,t,i,l,a,n,o,s,d,c,p,h,u){return function(e){function r(r){return e.call(this)||this}return t(r,e),r.prototype.initialize=function(){var e=this,r=h.test.force512VTL?this.layer.tileInfo:this.layer.compatibleTileInfo256,t=this._getTileInfoSupportError(r,this.layer.fullExtent);if(t)return void this.addResolvingPromise(l.reject(t));var i=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var r=e.view.basemapTerrain.tilingScheme,t=r.pixelSize;e.schemaHelper=new o(t,e.view.spatialReference.isGeographic);var i;i=256===t?e.layer.compatibleTileInfo256:e.view.spatialReference.isGeographic?e.layer.compatibleTileInfo512:e.layer.tileInfo;var l=e._getTileInfoCompatibilityError(i,r);if(l)throw l;e._set("tileInfo",i)}),n=l.createAbortController();this._memCache=this.view.resourceController.memoryController.getMemCache(this.layer.uid,function(r){return e.tileHandler.releaseVectorTile(r)});var c=this.view.resourceController.scheduler;this.tileHandler=new s(this.layer,this.view.pixelRatio,!1,null,this._memCache);var p=this.tileHandler.start({signal:n.signal,scheduler:c}),u=this.tileHandler.spriteMosaic;u.then(function(r){return e.renderer=new d(r,e.tileHandler.glyphMosaic,!1)});var y=function(){e._tileHandlerController.abort(),e._memCache.clear();var r=new s(e.layer,e.view.pixelRatio,!1,null,e._memCache),t=new AbortController,i=r.start({signal:t.signal,scheduler:c}),a=r.spriteMosaic;e.updatingHandles.addPromise(l.all([i,a]).then(function(t){var i=t[1],l=e.tileHandler,a=e.renderer;e.renderer=new d(i,r.glyphMosaic,!1),e.tileHandler=r,e.emit("data-changed"),l.destroy(),a&&a.dispose()}))};this.updatingHandles.add(this,"layer.currentStyleInfo",y),this.updatingHandles.add(this,"view.pixelRatio",y),this._tileHandlerController=n;var v=l.all([i,p,u]);this.addResolvingPromise(v)},r.prototype.destroy=function(){this._memCache&&(this._memCache.destroy(),this._memCache=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.tileHandler&&(this.tileHandler.destroy(),this.tileHandler=null)},Object.defineProperty(r.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,r=e[0].scale,t=e[e.length-1].scale,i=this.levelRangeFromScaleRange(r,t);return 1===i.minLevel&&256===this.tileInfo.size[0]&&(i.minLevel=0),i},enumerable:!0,configurable:!0}),i([n.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([n.property()],r.prototype,"layer",void 0),i([n.property()],r.prototype,"tileInfo",void 0),i([n.property()],r.prototype,"dataLevelRange",null),i([n.property()],r.prototype,"updatingPercentageValue",void 0),r=i([n.subclass("esri.views.3d.layers.VectorTileLayerView3D")],r)}(n.declared(p.TiledLayerView3D(c.LayerView3D(u))))});