// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],(function(e,t,r,n,i){return function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){this._spriteInfo={},this._glyphInfo={};var e=this._tiles;return e.forEach((function(e){return e.setObsolete()})),e.clear(),r.resolve()},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new i(e.style);return this._layers=t.layers,this._enableCachingTiles=e.enableCachingTiles,r.resolve({data:""})},e.prototype.createTileAndParse=function(e,t){for(var i=this,o=e.key,s=new n,a={},l=0,h=Object.keys(e.sourceName2DataAndRefKey);l<h.length;l++){var u=h[l],f=e.sourceName2DataAndRefKey[u];a[u]=f.refKey}return s.initialize(o,a,this,e.rotation),s.setDataAndParse(e.sourceName2DataAndRefKey,t).then((function(e){return i._enableCachingTiles&&i._tiles.set(o,s),e})).catch((function(e){if(s.setObsolete(),s.release(),!r.isAbortError(e))throw e}))},e.prototype.updateSymbols=function(e,t){var n=this._tiles.get(e.key);return n?n.updateSymbols(e.rotation,t):r.reject()},e.prototype.updateStyle=function(e,t){var n=new i(e);return this._layers=n.layers,this._tiles.forEach((function(e){e.reparse(t).then((function(r){t.client.invoke("updateTileData",{tileId:e.tileKey,tileData:r.result})}))})),r.resolve({data:""})},e.prototype.destructTileData=function(e){if(this._enableCachingTiles){var t=this._tiles.get(e);t&&(t.release(),this._tiles.delete(e))}},e.prototype.fetchSprites=function(e,t,n){var i=[],o=this._spriteInfo;return e.forEach((function(e){void 0===o[e]&&i.push(e)})),0===i.length?r.resolve():t.invoke("getSprites",i,{signal:n&&n.signal}).then((function(e){for(var t in e){var r=e[t];o[t]=r}}))},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,n,i,o){var s=[],a=this._glyphInfo[t];return a?n.forEach((function(e){a[e]||s.push(e)})):(a=this._glyphInfo[t]=[],n.forEach((function(e){return s.push(e)}))),0===s.length?r.resolve():i.invoke("getGlyphs",{tileID:e,font:t,codePoints:s},o).then((function(e){for(var t=0;t<e.length;t++)e[t]&&(a[t]=e[t])}))},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}()}));