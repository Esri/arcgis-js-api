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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../2d/engine/vectorTiles/SchemaHelper","../../2d/engine/vectorTiles/TileHandler","../../2d/engine/vectorTiles/renderers/Renderer","./TiledLayerView3D"],function(e,r,t,i,l,n,o,a,s,p,c){return function(e){function r(r){return e.call(this)||this}return t(r,e),r.prototype.initialize=function(){var e,r=this,t=this.layer.compatibleTileInfo256,i=this._getTileInfoSupportError(t,this.layer.fullExtent);i?this.addResolvingPromise(l.reject(i)):e=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=r.view.basemapTerrain.tilingScheme,t=e.pixelSize[0];r.schemaHelper=new a(t,r.view.spatialReference.isGeographic);var i;i=256===t?r.layer.compatibleTileInfo256:r.view.spatialReference.isGeographic?r.layer.compatibleTileInfo512:r.layer.tileInfo;var l=r._getTileInfoCompatibilityError(i,e);if(l)throw l;r._set("tileInfo",i)});var o=l.createAbortController();this.tileHandler=new s(this.layer,this.view.pixelRatio,!1,null);var c=this.tileHandler.start({signal:o.signal}),d=this.tileHandler.spriteMosaic;d.then(function(e){return r.renderer=new p(e,r.tileHandler.glyphMosaic,!1)}),this.watch(["layer.currentStyleInfo","view.pixelRatio"],function(){r._tileHandlerController.abort();var e=new s(r.layer,r.view.pixelRatio,!1,null),t=new AbortController,i=e.start({signal:t.signal}),n=e.spriteMosaic;l.all([i,n]).then(function(t){var i=t[1],l=r.tileHandler,n=r.renderer;r.renderer=new p(i,e.glyphMosaic,!1),r.tileHandler=e,r.emit("data-changed"),l.destroy(),n&&n.dispose()})}),this._tileHandlerController=o;var h=l.all([e,c,d]);this.addResolvingPromise(h)},r.prototype.destroy=function(){this.renderer.dispose(),this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},Object.defineProperty(r.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,r=e[0].scale,t=e[e.length-1].scale,i=this.levelRangeFromScaleRange(r,t);return 1===i.minLevel&&256===this.tileInfo.size[0]&&(i.minLevel=0),i},enumerable:!0,configurable:!0}),i([o.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([o.property()],r.prototype,"layer",void 0),i([o.property()],r.prototype,"tileInfo",void 0),i([o.property()],r.prototype,"dataLevelRange",null),i([o.property()],r.prototype,"updatingPercentageValue",void 0),r=i([o.subclass("esri.views.3d.layers.VectorTileLayerView3D")],r)}(o.declared(c))});