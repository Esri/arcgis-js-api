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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../request","../../core/promiseUtils","../2d/tiling/enums","./WorkerTile","./style/StyleRepository"],function(t,e,r,n,i,o,s){return function(){function t(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return t.prototype.reset=function(){this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(t){return t.setObsolete()}),t.clear(),n.resolve()},t.prototype.getLayers=function(){return this._layers},t.prototype.setLayers=function(t){var e=new s(t);return this._layers=e.layers,n.resolve({data:""})},t.prototype.getTile=function(t,e){var s=this,l=t.key,u=t.cacheTile,a=o.pool.acquire();return a.initialize(t.key,t.refKey,this,t.rotation),r(t.url,{responseType:"array-buffer",signal:e&&e.signal}).then(function(t){return a.setDataAndParse(t.data,e)}).then(function(t){return u&&a.status!==i.TileStatus.INVALID&&s._tiles.set(l,a),t}).catch(function(t){return a.setObsolete(),o.pool.release(a),s._tiles.has(a.tileKey)&&s._tiles.delete(a.tileKey),n.reject(t)}).catch(function(t){return t}).then(function(t){return u||o.pool.release(a),t})},t.prototype.updateSymbols=function(t){var e=this._tiles.get(t.key);return e?e.updateSymbols(t.rotation):n.reject()},t.prototype.updateStyle=function(t,e){var r=new s(t);return this._layers=r.layers,this._tiles.forEach(function(t,r){t.reparse(e).then(function(r){e.client.invoke("updateTileData",{tileId:t.tileKey,tileData:r.result})})}),n.resolve({data:""})},t.prototype.destructTileData=function(t){return this._tiles.has(t)&&(o.pool.release(this._tiles.get(t)),this._tiles.delete(t)),n.resolve()},t.prototype.fetchSprites=function(t,e){var r=[],i=this._spriteInfo;return t.forEach(function(t){void 0===i[t]&&r.push(t)}),0===r.length?n.resolve():e.invoke("getSprites",r).then(function(t){for(var e in t){var r=t[e];i[e]=r}})},t.prototype.getSpriteItems=function(){return this._spriteInfo},t.prototype.fetchGlyphs=function(t,e,r,i){var o=[],s=this._glyphInfo[e];return s?r.forEach(function(t){s[t]||o.push(t)}):(s=this._glyphInfo[e]=[],r.forEach(function(t){return o.push(t)})),0===o.length?n.resolve():i.invoke("getGlyphs",{tileID:t,font:e,codePoints:o}).then(function(t){for(var e in t)s[e]=t[e]})},t.prototype.getGlyphItems=function(t){return this._glyphInfo[t]},t}()});