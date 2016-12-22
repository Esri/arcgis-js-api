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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./LayerView2D","./support/TileStrategy","../engine/GeoBitmap","../engine/GeoBitmapContainer","../engine/Canvas2DContainer","./support/loader","./support/TileKey","./support/TileInfoView"],function(e,t,i,n,r,a,o,s,p,u,l,h,c){var d=function(e){function t(){e.apply(this,arguments),this._numTileMapCacheRequests=0,this.container=new u}return i(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this._tileContainer=new p,this.container.addChild(this._tileContainer),this.strategy=new o(this._tileContainer,new c(this.layer.tileInfo,this.layer.fullExtent),function(){return e.requestUpdate()},function(t){return e._fetchTile(t)},function(t,i){return e._tileFilter(t,i)})},t.prototype.detach=function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._tileContainer),this._tileContainer=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(0!==this._numTileMapCacheRequests||this.strategy.updating||this.updateRequested)},t.prototype._tileFilter=function(e,t){var i=this,n=this.layer.tilemapCache;if(e.length=0,!n)return e.push.apply(e,t),e;for(var r=0,a=t;r<a.length;r++){var o=a[r],s=h.fromId(o);switch(n.getAvailabilityUpsample(s.level,s.row,s.col,s)){case"unknown":this._numTileMapCacheRequests++,e.push(s.id),n.fetchAvailabilityUpsample(s.level,s.row,s.col,s).always(function(){i.requestUpdate(),i._numTileMapCacheRequests--});break;case"available":-1===e.indexOf(s.id)&&e.push(s.id)}}return e},t.prototype._fetchTile=function(e){var t=h.fromId(e),i=this.layer.getTileUrl(t.level,t.row,t.col);return l.loadImage(i).then(function(e){return new s(e)})},n([r.property({dependsOn:["updateRequested"]})],t.prototype,"updating",void 0),t=n([r.subclass("esri.views.2d.layers.TiledLayerView2D")],t)}(r.declared(a));return d});