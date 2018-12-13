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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./TiledLayerView3D","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer"],function(e,r,i,t,l,n,a,o,s,c,p){return function(e){function r(r){return e.call(this)||this}return i(r,e),r.prototype.initialize=function(){var e,r,i=this,t=this.layer.compatibleTileInfo256,a=this._getTileInfoSupportError(t,this.layer.fullExtent);a?this.addResolvingPromise(l.reject(a)):r=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=i.view.basemapTerrain.tilingScheme,r=e.pixelSize[0];i.schemaHelper=new s(r,i.view.spatialReference.isWGS84);var t;t=256===r?i.layer.compatibleTileInfo256:i.view.spatialReference.isWGS84?i.layer.compatibleTileInfo512:i.layer.tileInfo;var l=i._getTileInfoCompatibilityError(t,e);if(l)throw l;i.tileInfo=t,i._updateMinMaxDataLevel()});var o=null;e=this._initializeTileHandler(),this.tileHandler=e[0],this.renderer=e[1],o=e[2],this.watch("layer.currentStyleInfo",function(){var e,r,t;o.isFulfilled()||o.cancel(),e=i._initializeTileHandler(),r=e[0],t=e[1],o=e[2],o.then(function(){var e=i.tileHandler;i.renderer=t,i.tileHandler=r,i.emit("data-changed"),e.destroy()})});var c=l.all([r,o]);this.addResolvingPromise(c)},r.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},r.prototype._initializeTileHandler=function(){var e=new c(this.layer,1,!1,null),r=new p,i=e.start();return i.then(function(){r.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,r,i]},t([a.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),t([a.property()],r.prototype,"layer",void 0),t([a.property()],r.prototype,"updatingPercentageValue",void 0),r=t([a.subclass("esri.views.3d.layers.VectorTileLayerView3D")],r)}(a.declared(o))});