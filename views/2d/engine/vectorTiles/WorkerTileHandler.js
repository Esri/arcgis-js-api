// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],function(t,e,r,n,o){return function(){function t(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return t.prototype.reset=function(){this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(t){return t.setObsolete()}),t.clear(),r.resolve()},t.prototype.getLayers=function(){return this._layers},t.prototype.setLayers=function(t){var e=new o(t);return this._layers=e.layers,r.resolve({data:""})},t.prototype.createTileAndParse=function(t,e){for(var r=this,o=t.key,i=new n,s={},a=0,l=Object.keys(t.sourceName2DataAndRefKey);a<l.length;a++){var u=l[a],f=t.sourceName2DataAndRefKey[u];s[u]=f.refKey}return i.initialize(o,s,this,t.rotation),i.setDataAndParse(t.sourceName2DataAndRefKey,e).then(function(t){return r._tiles.set(o,i),t}).catch(function(t){throw i.setObsolete(),i.release(),t})},t.prototype.updateSymbols=function(t,e){var n=this._tiles.get(t.key);return n?n.updateSymbols(t.rotation,e):r.reject()},t.prototype.updateStyle=function(t,e){var n=new o(t);return this._layers=n.layers,this._tiles.forEach(function(t){t.reparse(e).then(function(r){e.client.invoke("updateTileData",{tileId:t.tileKey,tileData:r.result})})}),r.resolve({data:""})},t.prototype.destructTileData=function(t){if(this._tiles.has(t)){this._tiles.get(t).release(),this._tiles.delete(t)}return r.resolve()},t.prototype.fetchSprites=function(t,e,n){var o=[],i=this._spriteInfo;return t.forEach(function(t){void 0===i[t]&&o.push(t)}),0===o.length?r.resolve():e.invoke("getSprites",o,{signal:n&&n.signal}).then(function(t){for(var e in t){var r=t[e];i[e]=r}})},t.prototype.getSpriteItems=function(){return this._spriteInfo},t.prototype.fetchGlyphs=function(t,e,n,o,i){var s=[],a=this._glyphInfo[e];return a?n.forEach(function(t){a[t]||s.push(t)}):(a=this._glyphInfo[e]=[],n.forEach(function(t){return s.push(t)})),0===s.length?r.resolve():o.invoke("getGlyphs",{tileID:t,font:e,codePoints:s},i).then(function(t){for(var e=0;e<t.length;e++)t[e]&&(a[e]=t[e])})},t.prototype.getGlyphItems=function(t){return this._glyphInfo[t]},t}()});