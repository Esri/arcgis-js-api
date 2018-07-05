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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../core/promiseUtils","../2d/tiling/enums","./WorkerTile","./style/StyleRepository"],function(e,t,r,n,o,i,s){return function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){var e=new r;this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(e){return e.setObsolete()}),t.clear(),e.resolve(),e.promise},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new s(e);return this._layers=t.layers,n.resolve({data:""})},e.prototype.getTile=function(e,t){var r=this,s=e.key,l=i.pool.acquire();l.initialize(e.key,e.refKey,this,e.rotation);var u=e.cacheTile;return t.invoke("fetchTileData",e.refKey).then(function(e){return l.setDataAndParse(e,t).then(function(e){return u&&l.status!==o.TileStatus.INVALID&&r._tiles.set(s,l),e}).catch(function(e){return l.setObsolete(),i.pool.release(l),r._tiles.delete(l.tileKey),n.reject(e)})}).catch(function(e){return l.setObsolete(),r._tiles.has(l.tileKey)&&r._tiles.delete(l.tileKey),n.reject(e)}).always(function(e){return u||i.pool.release(l),e})},e.prototype.update=function(e){var t=this._tiles.get(e.key);return t?t.updateSymbols(e.rotation):n.reject()},e.prototype.destructTileData=function(e){return this._tiles.has(e)&&(i.pool.release(this._tiles.get(e)),this._tiles.delete(e)),n.resolve()},e.prototype.fetchSprites=function(e,t){var r=[],o=this._spriteInfo;return e.forEach(function(e){void 0===o[e]&&r.push(e)}),0===r.length?n.resolve():t.invoke("getSprites",r).then(function(e){for(var t in e){var r=e[t];o[t]=r}})},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,r,o){var i=[],s=this._glyphInfo[t];return s?r.forEach(function(e){s[e]||i.push(e)}):(s=this._glyphInfo[t]=[],r.forEach(function(e){return i.push(e)})),0===i.length?n.resolve():o.invoke("getGlyphs",{tileID:e,font:t,codePoints:i}).then(function(e){for(var t in e)s[t]=e[t]})},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}()});