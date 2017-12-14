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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/accessorSupport/decorators","../../../core/promiseUtils","../../../core/watchUtils","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer","./TiledLayerView3D"],function(e,r,i,t,l,n,a,o,s,c,p,d){var u=function(e){function r(r){return e.call(this)||this}return i(r,e),r.prototype.initialize=function(){var e,r=this,i=this.layer.compatibleTileInfo256,t=this._getTileInfoSupportError(i,this.layer.fullExtent);t?this.addResolvingPromise(a.reject(t)):e=o.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=r.view.basemapTerrain.tilingScheme,i=e.pixelSize[0];r.schemeHelper=new s(i,r.view.spatialReference.isWGS84);var t;t=256===i?r.layer.compatibleTileInfo256:r.view.spatialReference.isWGS84?r.layer.compatibleTileInfo512:r.layer.tileInfo;var l=r._getTileInfoCompatibilityError(t,e);if(l)throw l;r.tileInfo=t,r._updateMinMaxDataLevel()});var n;p=this._initializeTileHandler(),this.tileHandler=p[0],this.renderer=p[1],n=p[2],this._tileHandlerPromise=n,this.watch("layer.currentStyleInfo",function(){var e,i,t;r._tileHandlerPromise.isFulfilled()||r._tileHandlerPromise.cancel("cancel"),l=r._initializeTileHandler(),e=l[0],i=l[1],t=l[2],r._tileHandlerPromise=n,t.then(function(){var t=r.tileHandler;r.renderer=i,r.tileHandler=e,r.emit("data-changed"),t.destroy()});var l});var c=l([e,n]);this.addResolvingPromise(c);var p},r.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},r.prototype._initializeTileHandler=function(){var e=new c(this.layer,function(){},1),r=new p,i=e.start();return i.then(function(){r.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,r,i]},t([n.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),t([n.property()],r.prototype,"layer",void 0),t([n.property()],r.prototype,"updatingPercentageValue",void 0),r=t([n.subclass("esri.views.3d.layers.VectorTileLayerView3D")],r)}(n.declared(d));return u});