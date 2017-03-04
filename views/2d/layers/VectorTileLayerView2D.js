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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","./LayerView2D","../engine/StageGL","./support/TileInfoViewPOT","./support/TileStrategy","./support/TileKey","./support/TileQueue","../../../views/vectorTiles/TileHandler","../../../views/vectorTiles/VectorTileContainer"],function(e,t,i,r,n,o,l,s,a,u,h,c,d,p){var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new o,t.container=new s,t}return i(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){var t=this;if(this._vectorTileContainer&&this._vectorTileContainer.isInitialized){if(e.devicePixelRatio!==this._tileHandler.devicePixelRatio)return void this._start();this._tileStrategy.updateTiles(function(e,i){return t._tileHandler.updateTile(e,i)},e),this._tileQueue.pause(),this._tileQueue.state=e.state,this._tileStrategy.update(e),this._tileQueue.resume(),this.notifyChange("updating")}},t.prototype.attach=function(){this._start()},t.prototype.detach=function(){this._stop()},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this._tileStrategy.updating||this.updateRequested)},t.prototype._stop=function(){this._handles.removeAll(),this._vectorTileContainer&&(this._vectorTileContainer.removeAllChildren(),this.container.removeChild(this._vectorTileContainer)),this._tileStrategy&&this._tileStrategy.destroy(),this._tileHandler&&this._tileHandler.stop(),this._vectorTileContainer=this._tileHandler=this._tileStrategy=this._tileInfoView=null},t.prototype._start=function(){var e=this;this._stop(),this._handles.add(this.watch("layer.currentStyleInfo",function(){return e.attach()})),this._vectorTileContainer=new p,this.container.addChild(this._vectorTileContainer),this._tileInfoView=new a(this.layer.tileInfo,this.layer.fullExtent),this._tileQueue=new c({tileInfoView:this._tileInfoView,process:function(t){return e._fetchTile(t)}}),this._tileStrategy=new u({container:{addTile:function(t){return e._vectorTileContainer.addChild(t)},removeTile:function(t){return e._vectorTileContainer.removeChild(t)},removeAllTiles:function(){return e._vectorTileContainer.removeAllChildren()}},tileInfoView:this._tileInfoView,requestUpdate:function(){return e.requestUpdate()},fetchTile:function(t){return e._tileQueue.push(h.from(t))}}),this._tileHandler=new d(this.layer,function(){return e.requestUpdate()},window.devicePixelRatio||1,!0),this._tileHandler.updateTile=this._tileHandler.updateTile.bind(this._tileHandler),this._tileHandler.start().then(function(){e._vectorTileContainer.initialize(e._tileHandler.spriteMosaic,e._tileHandler.glyphMosaic,e.layer.tileInfo,e._tileInfoView),e.requestUpdate()})},t.prototype._fetchTile=function(e){return this._tileHandler.getVectorTile(e,this.updateParameters)},t}(n.declared(l));return _=r([n.subclass("esri.views.2d.layers.VectorTileLayerView2D")],_)});