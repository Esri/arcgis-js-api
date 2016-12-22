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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/accessorSupport/decorators","../../../core/Error","../../../core/promiseUtils","../../../core/watchUtils","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer","../../layers/LayerView","./support/LayerViewUpdatingPercentage","../terrain/terrainUtils"],function(e,t,i,r,n,a,l,o,s,p,c,h,d,u,y){function f(){return d}var m=function(e){function t(){e.call(this),this._isUpdating=!1,this.minDataLevel=0,this.maxDataLevel=1/0}return i(t,e),t.prototype.initialize=function(){var e,t=this,i=this.layer.tileInfo256,r=y.checkIfTileInfoSupportedForView(i,this.layer.fullExtent,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var a={layer:this.layer,error:r},d=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":d=new l("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",a);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":d=new l("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);break;default:d=new l("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",a)}this.addResolvingPromise(o.reject(d))}else e=s.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=t.view.basemapTerrain.tilingScheme.pixelSize[0];t.schemeHelper=new p(e);var i=256===e?t.layer.tileInfo256:t.layer.tileInfo;if(!t.view.basemapTerrain.tilingScheme.compatibleWith(i)){var r=new l("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface");return o.reject(r)}});this.tileHandler&&this.tileHandler.destroy();var u=this.layer;u.tileInfo&&u.tileInfo.lods.length>0&&(this.minDataLevel=u.tileInfo.lods[0].level,this.maxDataLevel=u.tileInfo.lods[u.tileInfo.lods.length-1].level),this.tileHandler=new c(this.layer,function(){},1);var f=this.tileHandler.start();f.then(function(){t.renderer=new h(t.tileHandler.spriteMosaic,t.tileHandler.glyphMosaic,!1)});var m=n([e,f]);this.addResolvingPromise(m)},t.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},Object.defineProperty(t.prototype,"isTransparent",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,i){return this.layer.getTileUrl(e,t,i)},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._evaluateUpdatingState=function(e){this._isUpdating=!!e,this.notifyChange("updating")},r([a.property()],t.prototype,"view",void 0),r([a.property()],t.prototype,"layer",void 0),r([a.property({readOnly:!0})],t.prototype,"isTransparent",null),r([a.property()],t.prototype,"updatingPercentageValue",void 0),t=r([a.subclass("esri.views.3d.layers.VectorTileLayerView3D")],t)}(a.declared(f(),u));return m});