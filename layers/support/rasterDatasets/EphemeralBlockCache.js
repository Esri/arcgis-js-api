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

define(["require","exports","../../../core/MapUtils"],(function(t,e,r){return function(){function t(t,e){void 0===t&&(t=15e3),void 0===e&&(e=5e3),this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e)}return t.prototype.decreaseRefCount=function(t,e){var r=t+"/"+e,i=this._cachedBlocks;if(i.has(r)){var o=i.get(r);return o.refCount--,o.refCount<=0&&(i.delete(r),o.controller&&o.controller.abort()),o.refCount}return 0},t.prototype.getBlock=function(t,e){var r=t+"/"+e,i=this._cachedBlocks;if(i.has(r)){var o=i.get(r);return o.ts=Date.now(),o.refCount++,i.delete(r),i.set(r,o),o.block}return null},t.prototype.putBlock=function(t,e,r,i){void 0===i&&(i=null);var o=this._cachedBlocks,n=t+"/"+e;if(o.has(n)){var s=o.get(n);s.ts=Date.now(),s.refCount++}else o.set(n,{block:r,ts:Date.now(),refCount:1,controller:i});this.trim(),this.updateTimer()},t.prototype.deleteBlock=function(t,e){var r=this._cachedBlocks,i=t+"/"+e;r.has(i)&&r.delete(i)},t.prototype.updateMaxSize=function(t){this._size=t,this.trim()},t.prototype.empty=function(){this._cachedBlocks.clear(),this.clearTimer()},t.prototype.getCurrentSize=function(){return this._cachedBlocks.size},t.prototype.updateTimer=function(){var t=this;if(null==this._timer){var e=this._cachedBlocks;this._timer=setInterval((function(){for(var i=r.pairsOfMap(e),o=Date.now(),n=0;n<i.length&&i[n][1].ts<=o-t._duration;n++)e.delete(i[n][0]);0===e.size&&t.clearTimer()}),this._interval)}},t.prototype.trim=function(){var t=this._cachedBlocks;if(!(-1===this._size||this._size>=t.size))for(var e=r.pairsOfMap(t),i=0;i<e.length-this._size;i++)t.delete(e[i][0])},t.prototype.clearTimer=function(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)},t}()}));