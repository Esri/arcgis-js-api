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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(e,t){return function(){function e(e){if(this._cache={},this._lruQueue=[],e<=0)throw new Error("LRU cache size must be bigger than zero!");this._maxSize=e}return e.prototype.has=function(e){return void 0!==this._cache[e]},e.prototype.insert=function(e,t){if(null!==this.use(e))return void(this._cache[e]=t);this._collect(),this._cache[e]=t,this._lruQueue.unshift(e)},e.prototype.use=function(e){var t=this._cache[e];return t?(this._lruQueue.splice(this._lruQueue.indexOf(e),1),this._lruQueue.unshift(e),t):null},e.prototype.print=function(){for(var e=0,t=this._lruQueue;e<t.length;e++){var u=t[e];console.log("key: "+u+", value: "+this._cache[u])}},e.prototype._collect=function(){if(!(this._lruQueue.length<this._maxSize)){var e=this._lruQueue.pop(),t=this._cache[e];t&&t.release&&t.release(),delete this._cache[e]}},e}()});