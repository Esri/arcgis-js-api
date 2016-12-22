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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/promiseUtils","./LayerView2D","../engine/StageGL","./support/TileInfoViewPOT","./support/TileStrategy","./support/TileKey","../../../views/vectorTiles/TileHandler","../../../views/vectorTiles/VectorTileContainer"],function(e,t,i,r,n,o,l,a,s,c,h,d,p){var u,_=function(e){function t(){e.apply(this,arguments),this.container=new a}return i(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){if(this._vectorTileContainer&&this._vectorTileContainer.isInitialized){if(e.devicePixelRatio!==this._tileHandler.devicePixelRatio)return void this._initialize();this._tileStrategy.updateTiles(u,e),this._tileStrategy.update(e),this.notifyChange("updating")}},t.prototype.attach=function(){var e=this;this._tileInfoView=new s(this.layer.tileInfo,this.layer.fullExtent),this.watch("layer.currentStyleInfo",function(){e._initialize()}),this._initialize()},t.prototype.detach=function(){console.log("detach"),this.container.removeChild(this._vectorTileContainer),this._tileStrategy.destroy(),this._tileStrategy=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this._tileStrategy.updating||this.updateRequested)},t.prototype._initialize=function(){var e=this;this._vectorTileContainer&&(this._vectorTileContainer.removeAllChildren(),this.container.removeChild(this._vectorTileContainer)),this._vectorTileContainer=new p,this.container.addChild(this._vectorTileContainer),this._tileStrategy&&this._tileStrategy.destroy(),this._tileHandler&&this._tileHandler.stop(),this._tileHandler=new d(this.layer,function(){return e.requestUpdate()},window.devicePixelRatio||1,!0),this._tileStrategy=new c(this._vectorTileContainer,this._tileInfoView,function(){e.requestUpdate()},function(t,i){return e._tileHandler.getVectorTile(h.fromId(t),i)}),u=this._tileHandler.updateTile.bind(this._tileHandler),this._tileHandler.start().then(function(){e._vectorTileContainer.initialize(e._tileHandler.spriteMosaic,e._tileHandler.glyphMosaic,e.layer.tileInfo,e._tileInfoView),e.requestUpdate()}).otherwise(function(e){return o.reject(e)})},t=r([n.subclass("esri.views.2d.layers.NewVectorTileLayerView2D")],t)}(n.declared(l));return _});