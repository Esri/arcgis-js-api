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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],(function(e,t,r,n,i,o,s){return function(){function e(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){this._spriteInfo={},this._glyphInfo={};var e=this._tiles;return e.forEach((function(e){return e.setObsolete()})),e.clear(),i.resolve()},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new s(e.style);return this._layers=t.layers,this._enableCachingTiles=e.enableCachingTiles,i.resolve({data:""})},e.prototype.createTileAndParse=function(e,t){for(var r=this,n=e.key,s=new o,a={},l=0,p=Object.keys(e.sourceName2DataAndRefKey);l<p.length;l++){var h=p[l],u=e.sourceName2DataAndRefKey[h];a[h]=u.refKey}return s.initialize(n,a,this,e.rotation),s.setDataAndParse(e.sourceName2DataAndRefKey,t).then((function(e){return r._enableCachingTiles&&r._tiles.set(n,s),e})).catch((function(e){if(s.setObsolete(),s.release(),!i.isAbortError(e))throw e}))},e.prototype.updateSymbols=function(e,t){var r=this._tiles.get(e.key);return r?r.updateSymbols(e.rotation,t):i.reject()},e.prototype.updateStyle=function(e,t){var r=new s(e);return this._layers=r.layers,this._tiles.forEach((function(e){e.reparse(t).then((function(r){t.client.invoke("updateTileData",{tileId:e.tileKey,tileData:r.result})}))})),i.resolve({data:""})},e.prototype.destructTileData=function(e){if(this._enableCachingTiles){var t=this._tiles.get(e);t&&(t.release(),this._tiles.delete(e))}},e.prototype.fetchSprites=function(e,t,r){var n=[],o=this._spriteInfo;return e.forEach((function(e){void 0===o[e]&&n.push(e)})),0===n.length?i.resolve():t.invoke("getSprites",n,{signal:r&&r.signal}).then((function(e){for(var t in e){var r=e[t];o[t]=r}}))},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,r,n,o){var s=[],a=this._glyphInfo[t];return a?r.forEach((function(e){a[e]||s.push(e)})):(a=this._glyphInfo[t]=[],r.forEach((function(e){return s.push(e)}))),0===s.length?i.resolve():n.invoke("getGlyphs",{tileID:e,font:t,codePoints:s},o).then((function(e){for(var t=0;t<e.length;t++)e[t]&&(a[t]=e[t])}))},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}()}));