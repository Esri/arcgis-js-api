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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/accessorSupport/decorators","../../../core/promiseUtils","../../../core/watchUtils","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer","./TiledLayerView3D"],function(e,i,r,t,l,n,a,o,s,c,d,p){var h=function(e){function i(i){return e.call(this)||this}return r(i,e),i.prototype.initialize=function(){var e,i=this,r=this.layer.compatibleTileInfo256,t=this._getTileInfoSupportError(r,this.layer.fullExtent);t?this.addResolvingPromise(a.reject(t)):e=o.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=i.view.basemapTerrain.tilingScheme,r=e.pixelSize[0];i.schemeHelper=new s(r,i.view.spatialReference.isWGS84);var t;t=256===r?i.layer.compatibleTileInfo256:i.view.spatialReference.isWGS84?i.layer.compatibleTileInfo512:i.layer.tileInfo;var l=i._getTileInfoCompatibilityError(t,e);if(l)throw l;i.tileInfo=t,i._updateMinMaxDataLevel()});var n;d=this._initializeTileHandler(),this.tileHandler=d[0],this.renderer=d[1],n=d[2],this._tileHandlerPromise=n,this.watch("layer.currentStyleInfo",function(){var e,r,t;i._tileHandlerPromise.isFulfilled()||i._tileHandlerPromise.cancel("cancel"),l=i._initializeTileHandler(),e=l[0],r=l[1],t=l[2],i._tileHandlerPromise=n,t.then(function(){var t=i.tileHandler;i.renderer=r,i.tileHandler=e,i.emit("data-changed"),t.destroy()});var l});var c=l([e,n]);this.addResolvingPromise(c),this.addResolvingPromise(this.getHeightModelInfoResolvingPromise());var d},i.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},i.prototype._initializeTileHandler=function(){var e=new c(this.layer,function(){},1),i=new d,r=e.start();return r.then(function(){i.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,i,r]},t([n.property({aliasOf:"layer.fullExtent"})],i.prototype,"fullExtent",void 0),t([n.property()],i.prototype,"layer",void 0),t([n.property()],i.prototype,"updatingPercentageValue",void 0),i=t([n.subclass("esri.views.3d.layers.VectorTileLayerView3D")],i)}(n.declared(p));return h});