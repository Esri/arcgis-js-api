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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/promise/all","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./TiledLayerView3D","../../vectorTiles/SchemaHelper","../../vectorTiles/TileHandler","../../vectorTiles/renderers/Renderer"],function(e,i,r,t,l,n,a,o,s,c,p,d){return function(e){function i(i){return e.call(this)||this}return r(i,e),i.prototype.initialize=function(){var e,i,r=this,t=this.layer.compatibleTileInfo256,o=this._getTileInfoSupportError(t,this.layer.fullExtent);o?this.addResolvingPromise(n.reject(o)):i=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var e=r.view.basemapTerrain.tilingScheme,i=e.pixelSize[0];r.schemaHelper=new c(i,r.view.spatialReference.isWGS84);var t;t=256===i?r.layer.compatibleTileInfo256:r.view.spatialReference.isWGS84?r.layer.compatibleTileInfo512:r.layer.tileInfo;var l=r._getTileInfoCompatibilityError(t,e);if(l)throw l;r.tileInfo=t,r._updateMinMaxDataLevel()});var s=null;e=this._initializeTileHandler(),this.tileHandler=e[0],this.renderer=e[1],s=e[2],this.watch("layer.currentStyleInfo",function(){var e,i,t;s.isFulfilled()||s.cancel(),e=r._initializeTileHandler(),i=e[0],t=e[1],s=e[2],s.then(function(){var e=r.tileHandler;r.renderer=t,r.tileHandler=i,r.emit("data-changed"),e.destroy()})});var p=l([i,s]);this.addResolvingPromise(p)},i.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},i.prototype._initializeTileHandler=function(){var e=new p(this.layer,function(){},1),i=new d,r=e.start();return r.then(function(){i.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,i,r]},t([o.property({aliasOf:"layer.fullExtent"})],i.prototype,"fullExtent",void 0),t([o.property()],i.prototype,"layer",void 0),t([o.property()],i.prototype,"updatingPercentageValue",void 0),i=t([o.subclass("esri.views.3d.layers.VectorTileLayerView3D")],i)}(o.declared(s))});