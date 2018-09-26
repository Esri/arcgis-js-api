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

define(["require","exports","dojo/Deferred","../../request","../../core/promiseUtils","../2d/tiling/enums","./WorkerTile","./style/StyleRepository"],function(e,t,r,n,o,i,s,l){return function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){var e=new r;this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(e){return e.setObsolete()}),t.clear(),e.resolve(),e.promise},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new l(e);return this._layers=t.layers,o.resolve({data:""})},e.prototype.getTile=function(e,t){var r=this,l=e.key,u=s.pool.acquire();u.initialize(e.key,e.refKey,this,e.rotation);var a=e.cacheTile;return n(e.url,{responseType:"array-buffer"}).then(function(e){return u.setDataAndParse(e.data,t).then(function(e){return a&&u.status!==i.TileStatus.INVALID&&r._tiles.set(l,u),e}).catch(function(e){return u.setObsolete(),s.pool.release(u),r._tiles.delete(u.tileKey),o.reject(e)})}).catch(function(e){return u.setObsolete(),r._tiles.has(u.tileKey)&&r._tiles.delete(u.tileKey),o.reject(e)}).always(function(e){return a||s.pool.release(u),e})},e.prototype.update=function(e){var t=this._tiles.get(e.key);return t?t.updateSymbols(e.rotation):o.reject()},e.prototype.destructTileData=function(e){return this._tiles.has(e)&&(s.pool.release(this._tiles.get(e)),this._tiles.delete(e)),o.resolve()},e.prototype.fetchSprites=function(e,t){var r=[],n=this._spriteInfo;return e.forEach(function(e){void 0===n[e]&&r.push(e)}),0===r.length?o.resolve():t.invoke("getSprites",r).then(function(e){for(var t in e){var r=e[t];n[t]=r}})},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,r,n){var i=[],s=this._glyphInfo[t];return s?r.forEach(function(e){s[e]||i.push(e)}):(s=this._glyphInfo[t]=[],r.forEach(function(e){return i.push(e)})),0===i.length?o.resolve():n.invoke("getGlyphs",{tileID:e,font:t,codePoints:i}).then(function(e){for(var t in e)s[t]=e[t]})},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}()});