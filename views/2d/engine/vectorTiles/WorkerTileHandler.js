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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","./WorkerTile","./style/StyleRepository","../../tiling/enums"],function(e,t,r,n,o,i){return function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){this._spriteInfo={},this._glyphInfo={};var e=this._tiles;return e.forEach(function(e){return e.setObsolete()}),e.clear(),r.resolve()},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new o(e);return this._layers=t.layers,r.resolve({data:""})},e.prototype.createTileAndParse=function(e,t){for(var o=this,s=e.key,a=e.cacheTile,l=n.pool.acquire(),u={},p=0,c=Object.keys(e.sourceName2DataAndRefKey);p<c.length;p++){var h=c[p],f=e.sourceName2DataAndRefKey[h];u[h]=f.refKey}return l.initialize(s,u,this,e.rotation),l.setDataAndParse(e.sourceName2DataAndRefKey,t).then(function(e){return a&&l.status!==i.TileStatus.INVALID&&o._tiles.set(s,l),e}).catch(function(e){return l.setObsolete(),n.pool.release(l),o._tiles.has(l.tileKey)&&o._tiles.delete(l.tileKey),r.reject(e)}).catch(function(e){return e}).then(function(e){return a||n.pool.release(l),e})},e.prototype.updateSymbols=function(e){var t=this._tiles.get(e.key);return t?t.updateSymbols(e.rotation):r.reject()},e.prototype.updateStyle=function(e,t){var n=new o(e);return this._layers=n.layers,this._tiles.forEach(function(e,r){e.reparse(t).then(function(r){t.client.invoke("updateTileData",{tileId:e.tileKey,tileData:r.result})})}),r.resolve({data:""})},e.prototype.destructTileData=function(e){return this._tiles.has(e)&&(n.pool.release(this._tiles.get(e)),this._tiles.delete(e)),r.resolve()},e.prototype.fetchSprites=function(e,t,n){var o=[],i=this._spriteInfo;return e.forEach(function(e){void 0===i[e]&&o.push(e)}),0===o.length?r.resolve():t.invoke("getSprites",o,{signal:n&&n.signal}).then(function(e){for(var t in e){var r=e[t];i[t]=r}})},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,n,o,i){var s=[],a=this._glyphInfo[t];return a?n.forEach(function(e){a[e]||s.push(e)}):(a=this._glyphInfo[t]=[],n.forEach(function(e){return s.push(e)})),0===s.length?r.resolve():o.invoke("getGlyphs",{tileID:e,font:t,codePoints:s},i).then(function(e){for(var t in e)a[t]=e[t]})},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}()});