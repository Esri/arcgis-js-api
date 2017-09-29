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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],function(e,t,r,o,n,i){var s=function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){var e=new r;this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(e){return e.setObsolete()}),t.clear(),e.resolve(),e.promise},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new i(e);return this._layers=t.layers,o.resolve({data:""})},e.prototype.getTile=function(e,t){var r=this,i=e.key,s=n.pool.acquire();s.initialize(e.key,e.refKey,this,e.rotation);var l=e.cacheTile;return t.invoke("fetchTileData",e.refKey).then(function(e){return s.setDataAndParse(e.protobuff,t).then(function(e){return l&&6!==s.status&&r._tiles.set(i,s),e}).otherwise(function(e){return s.setObsolete(),n.pool.release(s),r._tiles["delete"](s.tileKey),o.reject(e)})}).otherwise(function(e){return s.setObsolete(),r._tiles.has(s.tileKey)&&r._tiles["delete"](s.tileKey),o.reject(e)}).always(function(e){return l||n.pool.release(s),e})},e.prototype.update=function(e){var t=this._tiles.get(e.key);return t?t.updateSymbols(e.rotation):o.reject()},e.prototype.destructTileData=function(e){return this._tiles.has(e.key)&&(n.pool.release(this._tiles.get(e.key)),this._tiles["delete"](e.key)),o.resolve()},e.prototype.fetchSprites=function(e,t){var r=[],n=this._spriteInfo;return e.forEach(function(e){var t=n[e];void 0===t&&r.push(e)}),0===r.length?o.resolve():t.invoke("getSprites",{sprites:r}).then(function(e){var t=e.spriteItems;for(var r in t){var o=t[r];n[r]=o}})},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,r,n){var i=[],s=this._glyphInfo[t];return s?r.forEach(function(e){var t=s[e];t||i.push(e)}):(s=this._glyphInfo[t]=[],r.forEach(function(e){return i.push(e)})),0===i.length?o.resolve():n.invoke("getGlyphs",{tileID:e,font:t,codePoints:i}).then(function(e){var t=e.glyphItems;for(var r in t)s[r]=t[r]})},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}();return s});