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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/accessorSupport/decorators","../../../core/Error","../../../core/promiseUtils","../../../core/watchUtils","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer","../../layers/LayerView","./support/LayerViewUpdatingPercentage","../terrain/terrainUtils"],function(e,i,t,r,n,a,l,o,s,c,p,h,d,u,f){var y=function(e){function i(i){var t=e.call(this)||this;return t._isUpdating=!1,t.minDataLevel=0,t.maxDataLevel=1/0,t}return t(i,e),i.prototype.initialize=function(){var e,i=this,t=this.layer.tileInfo256,r=f.checkIfTileInfoSupportedForView(t,this.layer.fullExtent,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var a={layer:this.layer,error:r},p=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":p=new l("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",a);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":p=new l("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);break;default:p=new l("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",a)}this.addResolvingPromise(o.reject(p))}else e=s.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=i.view.basemapTerrain.tilingScheme.pixelSize[0];i.schemeHelper=new c(e,i.view.spatialReference.isWGS84);var t;if(t=256===e?i.layer.tileInfo256:i.view.spatialReference.isWGS84?i.layer.compatibleTileInfo512:i.layer.tileInfo,!i.view.basemapTerrain.tilingScheme.compatibleWith(t)){var r=new l("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface");return o.reject(r)}});var h=this.layer;h.tileInfo&&h.tileInfo.lods.length>0&&(this.minDataLevel=h.tileInfo.lods[0].level,this.maxDataLevel=h.tileInfo.lods[h.tileInfo.lods.length-1].level);var d;y=this._initializeTileHandler(),this.tileHandler=y[0],this.renderer=y[1],d=y[2],this._tileHandlerPromise=d,this.watch("layer.currentStyleInfo",function(){var e,t,r;i._tileHandlerPromise.isFulfilled()||i._tileHandlerPromise.cancel("cancel"),n=i._initializeTileHandler(),e=n[0],t=n[1],r=n[2],i._tileHandlerPromise=d,r.then(function(){var r=i.tileHandler;i.renderer=t,i.tileHandler=e,i.emit("data-changed"),r.destroy()});var n});var u=n([e,d]);this.addResolvingPromise(u);var y},i.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},Object.defineProperty(i.prototype,"isTransparent",{get:function(){return!0},enumerable:!0,configurable:!0}),i.prototype.getTileUrl=function(e,i,t){return this.layer.getTileUrl(e,i,t)},i.prototype.isUpdating=function(){return this._isUpdating},i.prototype._evaluateUpdatingState=function(e){this._isUpdating=!!e,this.notifyChange("updating")},i.prototype._initializeTileHandler=function(){var e=new p(this.layer,function(){},1),i=new h,t=e.start();return t.then(function(){i.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,i,t]},i}(a.declared(d,u));return r([a.property()],y.prototype,"view",void 0),r([a.property()],y.prototype,"layer",void 0),r([a.property({readOnly:!0})],y.prototype,"isTransparent",null),r([a.property()],y.prototype,"updatingPercentageValue",void 0),y=r([a.subclass("esri.views.3d.layers.VectorTileLayerView3D")],y)});