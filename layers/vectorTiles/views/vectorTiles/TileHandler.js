// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/has","dojo/promise/all","../../request","../../core/LRUCache","../../core/promiseUtils","../../core/requireUtils","../../core/workers","../2d/tiling/TileKey","./GeometryUtils","./GlyphMosaic","./GlyphSource","./SpriteMosaic","./SpriteSource","./TileIndex","./VectorTileDisplayObject","module"],(function(e,t,i,n,o,r,s,l,a,c,u,p,h,d,y,f,_,g,v){var b=new s(10),T=new Map;return function(){function t(e,t,i,n,o){void 0===n&&(n=!1),this.devicePixelRatio=i,this.allowUpdates=n,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._tileIndex=null,this._updateQueue=new Map,this._ongoingRequests=new Map,this._vectorTileLayer=e,this._styleRepository=e.styleRepository,this._requestUpdate=t}return t.prototype.destroy=function(){this.stop(),this._vectorTileLayer=this._requestUpdate=this._styleRepository=null,this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null)},Object.defineProperty(t.prototype,"initialized",{get:function(){return this._broadcastPromise&&this._broadcastPromise.isFulfilled()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ongoingRequestCount",{get:function(){return this._ongoingRequests.size},enumerable:!0,configurable:!0}),t.prototype.start=function(){var t=this;this.stop();var r=this._styleRepository,s=new f(r.sprite,this.devicePixelRatio);s.devicePixelRatio=this.devicePixelRatio;var l=s.load().then((function(){t._spriteMosaic=new y(1024,1024,250),t._spriteMosaic.setSpriteSource(s),n("stable-symbol-rendering")&&t._spriteMosaic.preloadSpriteItems()})),u=new d(r.glyphs);this._glyphMosaic=new h(1024,1024,u);var p=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),_=c.open(a.getAbsMid("./WorkerTileHandler",e,v),{client:this}).then((function(e){t._connection=e})),g=new i((function(e){l.isFulfilled()||l.cancel(),p.isFulfilled()||p.cancel(),_.isFulfilled()||_.cancel()}));return o([l,p,_]).then((function(e){o(t._connection.broadcast("setLayers",r.styleJSON)).then((function(){g.resolve()}))})),this._broadcastPromise=g.promise,this._broadcastPromise},t.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel(),this._updateQueue.forEach((function(e){return e.cancel()})),this._ongoingRequests.forEach((function(e){return e.cancel()})),this._connection&&(this._connection.close(),this._connection=null)},t.prototype.updateTile=function(e,t){var i=this;if(!this.allowUpdates)return l.resolve(null);if(!this._broadcastPromise.isFulfilled()||!this._connection)return l.reject(new Error("no connection"));var n,o=Math.round(p.degToByte(t.state.rotation));if(e.rotation===o)return l.resolve(null);var r=e.key;return this._updateQueue.has(r.id)&&(n=this._updateQueue.get(r.id)).cancel(),e.rotation=o,n=this._connection.invoke("update",{key:e.id,rotation:o},null,{client:e.client}).then((function(t){return e.updateSymbolData(t),t})).always((function(){i._updateQueue.delete(r.id)})),this._updateQueue.set(e.id,n),n},t.prototype.getVectorTileWithLRC=function(e,t,i,n){var o=this;void 0===n&&(n=0);var r=new u(e,t,i,0);return this.getRefKey(r).then((function(e){var t=new g(r,e,o._vectorTileLayer.tileInfo,o._styleRepository,0);return e?o.getTileData(t.key,0).then((function(e){return t.setData(e.tileData,e.client),t})):(t.setData(null,null),t)}))},t.prototype.getTileData=function(e,t){var i=this;return this._broadcastPromise.isFulfilled()&&this._connection?this.getRefKey(e).then((function(n){if(!n)return l.resolve(null);var o=Math.round(p.degToByte(t));return i._getTileData(i._connection,e,n,o).then((function(e){return e&&e.tileData?{tileData:e.tileData,client:e.client}:l.reject("No data")}))})):l.reject(new Error("no connection"))},t.prototype.getRefKey=function(e){return this._tileIndex?this._tileIndex.dataKey(e):l.resolve(e)},t.prototype.fetchTileData=function(e){var t=u.pool.acquire(e),i=this._vectorTileLayer.getTileUrl(t.level,t.row,t.col);return u.pool.release(t),r(i,{callbackParamName:"callback",responseType:"array-buffer"}).then((function(e){return{result:e.data,transferList:[e.data]}}))},t.prototype.getSprites=function(e){return this._spriteMosaic.getSpriteItems(e)},t.prototype.getGlyphs=function(e){return this._glyphMosaic.getGlyphItems(e.tileID,e.font,e.codePoints)},t.prototype.getStyleRepository=function(){return this._styleRepository},t.prototype.getTileIndex=function(){return this._tileIndex},t.prototype._getTileData=function(e,t,i,n){var o=this,r={client:null},s=this._ongoingRequests.get(t.id);return s||(s=this._connection.invoke("getTile",{key:t.id,refKey:i.id,rotation:n,cacheTile:this.allowUpdates},null,r).then((function(e){return o._ongoingRequests.delete(t.id),{tileData:e,client:r.client}})).catch((function(e){return o._ongoingRequests.delete(t.id),o._connection.invoke("destructTileData",t.id,null,r),l.reject(e)})),this._ongoingRequests.set(t.id,s),s)},t.prototype._fetchTileMap=function(e){var t=this;if(this._vectorTileLayer.capabilities.operations.supportsTileMap&&this._vectorTileLayer.tilemapCache)return this._tileIndex=new _(this._vectorTileLayer.tilemapCache),l.resolve();if(!e)return l.resolve();if(b.has(e))return this._tileIndex=b.use(e),l.resolve();if(T.has(e))return T.get(e).then((function(e){t._tileIndex=new _(e.data)}));var i=r(e,{callbackParamName:"callback",responseType:"json"});return i.then((function(i){t._tileIndex=new _(i.data),T.delete(e),b.insert(e,t._tileIndex)})),T.set(e,i),i},t}()}));