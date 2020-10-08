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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./mathUtils","./maybe"],(function(t,e,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PLRUCache=void 0;var r=function(t,e){var o=Math.floor(e/8),i=e-8*o,r=t[o],a=1<<i;t[o]=r|a},a=function(t,e){var o=Math.floor(e/8),i=e-8*o,r=t[o],a=1<<i,n=(r&a)>>i;return t[o]=r&~a|a*(1-n),n},n=function(){function t(t){this._size=t,this._levels=o.log2(this._size),this._index=new Uint8Array(Math.ceil(t/8)),this._data=new Array(t),this._lookupTable=new Map}return t.prototype.with=function(t,e){return this.has(e)?this.get(e):this.set(e,t(e))},t.prototype.has=function(t){return this._lookupTable.has(t)},t.prototype.get=function(t){var e=this._lookupTable.get(t),o=i.isSome(e)?this._getData(e):null;return"object"==typeof o?o:null},t.prototype.set=function(t,e){var o=this._freeIndex(),r=this._data[o]=i.isSome(e)?e:t;return this._lookupTable.set("object"==typeof r?r.cacheKey:r,o),e},t.prototype.clear=function(){for(var t=0;t<this._index.length;t++)this._index[t]=0;for(t=0;t<this._data.length;t++)this._data[t]=null;this._lookupTable.clear()},t.prototype._getData=function(t){for(var e=(1<<this._levels)-1,o=t,i=Math.floor((e+o)/2),a=this._levels-1;a>=0;a--)r(this._index,i),i=Math.floor(i/2);return this._data[t]},t.prototype._freeIndex=function(){for(var t=0,e=0;e<this._levels;e++)t=2*t+1+a(this._index,t);var o=t-((1<<this._levels)-1),i=this._data[o];if(i){var r="object"==typeof i?i.cacheKey:i;this._lookupTable.delete(r)}return o},t}();e.PLRUCache=n}));