// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../../../../core/executeAsync","../../../../../core/MapPool","../../../../../core/promiseUtils","../../../../../core/SetPool","../../../engine/webgl/displayObjectUtils","../../../engine/webgl/TileData","../../../engine/webgl/Utils"],function(e,t,r,o,i,n,a,s,l){function c(e){return e.outline&&"none"!==e.outline.style}function u(e,t){l.isMarkerSymbol(e)||l.isLineSymbol(e)?t.add(e):l.isFillSymbol(e)&&(t.add(e),c(e)&&t.add(e.outline))}function h(e,t){if(!t.has(e)){t.set(e,new Set);for(var r=e.text,o=t.get(e),i=r.length,n=0;n<i;n++){var a=r.charCodeAt(n);o.add(a)}}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e){this.type="symbol",this._symbolToMosaicItemMap=new Map,this._symbolToMosaicItemMap.clear(),this._objectIdField=e.objectIdField,this._geometryType=e.geometryType,this._rendererInfo=e.rendererInfo,this._devicePixelRatio=e.devicePixelRatio,this._textureManager=e.textureManager}return e.prototype.destroy=function(){this._symbolToMosaicItemMap.clear()},e.prototype.getTileData=function(e,t){var r=this;return t&&t.features&&0!==t.features.length?i.when(this._getMosaicItems(t.features)).then(function(){return r._createTileData(t.features)}).then(function(t){return{tileKey:e,data:t}}):i.resolve({tileKey:e,data:null})},e.prototype._createTileData=function(e){var t=this,o=[],i={},n=0;return r(function(){var r=e[n];n++;var s=a.getDisplayObject(r,t._objectIdField,t._rendererInfo,t._geometryType,t._devicePixelRatio,t._symbolToMosaicItemMap,i);return o.push(s),n===e.length}).then(function(){return s.create(o,i)})},e.prototype._getMosaicItems=function(e){var t=n.acquire(),r=o.acquire(),a=this._rendererInfo;a.renderer.backgroundFillSymbol&&u(a.renderer.backgroundFillSymbol,t);for(var s,c=0;c<e.length;c++){s=e[c];var f=a.getSymbol(s);f&&(l.isTextSymbol(f)?h(f,r):u(f,t))}if(0===t.size&&0===r.size)return n.release(t),o.release(r),i.resolve();var y=o.acquire(),m=[],g=this._symbolToMosaicItemMap,d=0;return t.forEach(function(e){g.has(e)||(y.set(d,e),m.push({symbol:e.toJSON(),id:d}),d++)}),r.forEach(function(e,t){if(g.has(t)){var r=g.get(t),o=r.glyphMosaicItems,i=[];e.forEach(function(e){(o&&o.length<e||!o[e])&&(i[e]=e)}),i.length>0&&(y.set(d,t),m.push({symbol:t.toJSON(),id:d,glyphIds:i}),d++)}else{y.set(d,t);var n=new Array(e.size);e.forEach(function(e){return n.push(e)}),m.push({symbol:t.toJSON(),id:d,glyphIds:n}),d++}}),m.length>0?this._getMaterialItems(m).then(function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t],a=y.get(n.id);if(a)if(l.isTextSymbol(a))if(g.has(a)){var s=g.get(a),c=s.glyphMosaicItems,u=n.mosaicItem.glyphMosaicItems;if(u)for(var h=0;h<u.length;h++)null!=u[h]&&(c[h]=u[h])}else g.set(a,n.mosaicItem);else g.set(a,n.mosaicItem)}return o.release(y),i.resolve()}):(n.release(t),o.release(r),i.resolve())},e.prototype._getMaterialItems=function(e){var t=e;if(!t||0===t.length)return i.resolve([]);for(var r=[],o=0,n=t;o<n.length;o++){var a=n[o];r.push(this._textureManager.rasterizeItem(a.symbol,a.glyphIds))}return i.all(r).then(function(e){return e.map(function(e,t){return{id:t,mosaicItem:e}})})},e}();t.SymbolProcessor=f});