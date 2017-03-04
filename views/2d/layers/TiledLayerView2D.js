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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./LayerView2D","./support/TileStrategy","../engine/Bitmap","../engine/BitmapSource","../engine/BitmapContainer","../engine/Canvas2DContainer","../../../request","./support/TileKey","./support/TileInfoView","./support/TileQueue"],function(e,t,i,n,r,o,l,u,s,a,p,h,c,d,f){var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._tileInfoView=null,t._tileQueue=null,t.container=new p,t.layer=null,t}return i(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._tileQueue.pause(),this._tileQueue.state=e.state,this._tileStrategy.update(e),this._tileQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this._tileContainer=new a,this.container.addChild(this._tileContainer),this._tileInfoView=new d(this.layer.tileInfo,this.layer.fullExtent),this._tileQueue=new f({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new l({container:{addTile:function(t){return e._tileContainer.addChild(t)},removeTile:function(t){return e._tileContainer.removeChild(t)},removeAllTiles:function(){return e._tileContainer.removeAllChildren()}},tileInfoView:this._tileInfoView,requestUpdate:function(){return e.requestUpdate()},fetchTile:function(t){return e._tileQueue.push(c.pool.acquire(t))}})},t.prototype.detach=function(){this._tileStrategy.destroy(),this._tileQueue.clear(),this.container.removeChild(this._tileContainer),this._tileQueue=this._tileStrategy=this._tileInfoView=this._tileContainer=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.getTileBounds=function(e,t){return this._tileStrategy.tileInfoView.getTileBounds(e,t)},t.prototype.getTileCoords=function(e,t){return this._tileStrategy.tileInfoView.getTileCoords(e,t)},t.prototype.getTileResolution=function(e){return this._tileStrategy.tileInfoView.getTileResolution(e)},t.prototype.fetchTile=function(e){var t=this,i=this.layer.tilemapCache;return i?i.fetchAvailabilityUpsample(e.level,e.row,e.col,e).then(function(){return t._fetchImage(e)}):this._fetchImage(e)},t.prototype.isUpdating=function(){return this.attached&&(this._tileStrategy.updating||this.updateRequested)},t.prototype._fetchImage=function(e){var t=this,i=this.layer.getTileUrl(e.level,e.row,e.col),n=h(i,{responseType:"image"}).then(function(i){var n=new s(i.data);return n.coords=t.getTileCoords(n.coords,e),n.resolution=t.getTileResolution(e),new u(n)});return n.always(function(){return c.pool.release(e)}),n},t}(r.declared(o));return n([r.property({dependsOn:["updateRequested"]})],y.prototype,"updating",void 0),y=n([r.subclass("esri.views.2d.layers.TiledLayerView2D")],y)});