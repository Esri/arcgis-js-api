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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./TiledLayerView3D","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer"],function(e,i,r,t,l,n,a,o,s,c,p,d){return function(e){function i(i){return e.call(this)||this}return r(i,e),i.prototype.initialize=function(){var e,i=this,r=this.layer.compatibleTileInfo256,t=this._getTileInfoSupportError(r,this.layer.fullExtent);t?this.addResolvingPromise(n.reject(t)):e=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=i.view.basemapTerrain.tilingScheme,r=e.pixelSize[0];i.schemeHelper=new c(r,i.view.spatialReference.isWGS84);var t;t=256===r?i.layer.compatibleTileInfo256:i.view.spatialReference.isWGS84?i.layer.compatibleTileInfo512:i.layer.tileInfo;var l=i._getTileInfoCompatibilityError(t,e);if(l)throw l;i.tileInfo=t,i._updateMinMaxDataLevel()});var o;p=this._initializeTileHandler(),this.tileHandler=p[0],this.renderer=p[1],o=p[2],this._tileHandlerPromise=o,this.watch("layer.currentStyleInfo",function(){var e,r,t;i._tileHandlerPromise.isFulfilled()||i._tileHandlerPromise.cancel(),l=i._initializeTileHandler(),e=l[0],r=l[1],t=l[2],i._tileHandlerPromise=o,t.then(function(){var t=i.tileHandler;i.renderer=r,i.tileHandler=e,i.emit("data-changed"),t.destroy()});var l});var s=l([e,o]);this.addResolvingPromise(s);var p},i.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},i.prototype._initializeTileHandler=function(){var e=new p(this.layer,function(){},1),i=new d,r=e.start();return r.then(function(){i.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,i,r]},t([o.property({aliasOf:"layer.fullExtent"})],i.prototype,"fullExtent",void 0),t([o.property()],i.prototype,"layer",void 0),t([o.property()],i.prototype,"updatingPercentageValue",void 0),i=t([o.subclass("esri.views.3d.layers.VectorTileLayerView3D")],i)}(o.declared(s))});