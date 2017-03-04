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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/accessorSupport/decorators","../../../core/Error","../../../core/promiseUtils","../../../core/watchUtils","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer","../../layers/LayerView","./support/LayerViewUpdatingPercentage","../terrain/terrainUtils"],function(e,t,i,r,n,a,l,o,s,c,p,h,d,u,y){var f=function(e){function t(t){var i=e.call(this)||this;return i._isUpdating=!1,i.minDataLevel=0,i.maxDataLevel=1/0,i}return i(t,e),t.prototype.initialize=function(){var e,t=this,i=this.layer.tileInfo256,r=y.checkIfTileInfoSupportedForView(i,this.layer.fullExtent,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var a={layer:this.layer,error:r},p=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":p=new l("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",a);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":p=new l("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);break;default:p=new l("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",a)}this.addResolvingPromise(o.reject(p))}else e=s.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=t.view.basemapTerrain.tilingScheme.pixelSize[0];t.schemeHelper=new c(e);var i=256===e?t.layer.tileInfo256:t.layer.tileInfo;if(!t.view.basemapTerrain.tilingScheme.compatibleWith(i)){var r=new l("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface");return o.reject(r)}});var h=this.layer;h.tileInfo&&h.tileInfo.lods.length>0&&(this.minDataLevel=h.tileInfo.lods[0].level,this.maxDataLevel=h.tileInfo.lods[h.tileInfo.lods.length-1].level);var d;f=this._initializeTileHandler(),this.tileHandler=f[0],this.renderer=f[1],d=f[2],this._tileHandlerPromise=d,this.watch("layer.currentStyleInfo",function(){var e,i,r;t._tileHandlerPromise.isFulfilled()||t._tileHandlerPromise.cancel("cancel"),n=t._initializeTileHandler(),e=n[0],i=n[1],r=n[2],t._tileHandlerPromise=d,r.then(function(){var r=t.tileHandler;t.renderer=i,t.tileHandler=e,t.emit("data-changed"),r.destroy()});var n});var u=n([e,d]);this.addResolvingPromise(u);var f},t.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},Object.defineProperty(t.prototype,"isTransparent",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,i){return this.layer.getTileUrl(e,t,i)},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._evaluateUpdatingState=function(e){this._isUpdating=!!e,this.notifyChange("updating")},t.prototype._initializeTileHandler=function(){var e=new p(this.layer,function(){},1),t=new h,i=e.start();return i.then(function(){t.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,t,i]},t}(a.declared(d,u));return r([a.property()],f.prototype,"view",void 0),r([a.property()],f.prototype,"layer",void 0),r([a.property({readOnly:!0})],f.prototype,"isTransparent",null),r([a.property()],f.prototype,"updatingPercentageValue",void 0),f=r([a.subclass("esri.views.3d.layers.VectorTileLayerView3D")],f)});