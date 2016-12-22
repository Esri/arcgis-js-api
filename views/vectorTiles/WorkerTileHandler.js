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

define(["require","exports","dojo/Deferred","../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],function(t,e,r,n,o,i){var s=function(){function t(){this._tiles={},this._spriteInfo={},this._glyphInfo={}}return t.prototype.reset=function(){var t=new r;this._spriteInfo={},this._glyphInfo={};var e=this._tiles;for(var n in e){var o=e[n];o&&o.setObsolete()}return this._tiles={},t.resolve(),t.promise},t.prototype.getLayers=function(){return this._layers},t.prototype.setLayers=function(t){var e=new i(t);return this._layers=e.layers,n.resolve({data:""})},t.prototype.getTile=function(t,e){var r=this,i=t.key,s=new o(t.key,t.refKey,this,t.rotation),u=t.cacheTile;return e.invoke("fetchTileData",t.refKey).then(function(t){return s.setDataAndParse(t.protobuff,e).then(function(t){return u&&6!==s.status&&(r._tiles[i]=s),t}).otherwise(function(t){return s.setObsolete(),n.reject(t)})}).otherwise(function(t){return s.setObsolete(),r._tiles[s.tileKey]&&delete r._tiles[s.tileKey],n.reject(t)}).always(function(t){return t})},t.prototype.update=function(t){var e=this._tiles[t.key];return e?e.updateSymbols(t.rotation):n.reject()},t.prototype.destructTileData=function(t){return this._tiles[t.key]&&delete this._tiles[t.key],n.resolve()},t.prototype.fetchSprites=function(t,e){var r=[],o=this._spriteInfo;return t.forEach(function(t){var e=o[t];void 0===e&&r.push(t)}),0===r.length?n.resolve():e.invoke("getSprites",{sprites:r}).then(function(t){var e=t.spriteItems;for(var r in e){var n=e[r];o[r]=n}})},t.prototype.getSpriteItems=function(){return this._spriteInfo},t.prototype.fetchGlyphs=function(t,e,r,o){var i=[],s=this._glyphInfo[e];return s?r.forEach(function(t){var e=s[t];e||i.push(t)}):(s=this._glyphInfo[e]=[],r.forEach(function(t){return i.push(t)})),0===i.length?n.resolve():o.invoke("getGlyphs",{tileID:t,font:e,codePoints:i}).then(function(t){var e=t.glyphItems;for(var r in e)s[r]=e[r]})},t.prototype.getGlyphItems=function(t){return this._glyphInfo[t]},t}();return s});