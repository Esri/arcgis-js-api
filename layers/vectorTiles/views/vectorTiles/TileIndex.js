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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../core/promiseUtils","../../layers/support/TilemapCache","../2d/tiling/TileKey"],function(e,t,r,i,o){return function(){function e(e){if(e instanceof i)this._tilemapCache=e;else{if(!(e&&"index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}return e.prototype.dataKey=function(e){if(this._tilemapCache){var t=e.level,r=e.row,i=e.col,l=new o(e);return this._tilemapCache.fetchAvailabilityUpsample(t,r,i,l).then(function(){return l}).catch(function(e){if(e&&"cancel"===e.dojoType)throw e;return l.level=t,l.row=r,l.col=i,l})}return this._getIndexedDataKey(e)},e.prototype.forEach=function(e,t,r,i,o){this._callback=o,this._maxLevel=t+e,this._forEach(this._tilemap,t,r,i)},e.prototype._forEach=function(e,t,r,i){0!==e&&(this._callback(t,r,i),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*r,2*i),this._forEach(e[1],t+1,2*r,2*i+1),this._forEach(e[2],t+1,2*r+1,2*i),this._forEach(e[3],t+1,2*r+1,2*i+1)))},e.prototype._getIndexedDataKey=function(e){var t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return r.resolve(null);for(var i=e;0!==i.level;)i=new o(i.level-1,i.row>>1,i.col>>1,i.world),t.push(i);var l,a,n=this._tilemap,c=t.pop();if(1===n)return r.resolve(c);for(;t.length;)if(l=t.pop(),a=(1&l.col)+((1&l.row)<<1),n){if(0===n[a]){c=null;break}if(1===n[a]){c=l;break}c=l,n=n[a]}return r.resolve(c)},e}()});