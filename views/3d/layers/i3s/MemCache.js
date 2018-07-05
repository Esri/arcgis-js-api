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

define(["require","exports"],function(t,i){return function(){function t(t){void 0===t&&(t=10),this.maxSize=t,this._db=new Map,this._size=0,this._age=0,this._hit=0,this._miss=0}return t.prototype.put=function(t,i,e){if(!e||e<0)return void console.warn("Refusing to cache entry with invalid size "+e);if(this._db.has(t)){var s=this._db.get(t);this._size+=e-s.sizeMB,s.entry=i,s.lastUsed=this._age,s.sizeMB=e}else this._db.set(t,{entry:i,sizeMB:e,lastUsed:this._age}),this._size+=e;++this._age,this._size>this.maxSize&&this._removeEntries()},t.prototype.get=function(t){if(this._db.has(t)){var i=this._db.get(t);return i.lastUsed=this._age,++this._age,++this._hit,i.entry}return++this._miss,null},t.prototype.clear=function(){this._db.clear(),this._size=0,this._age=0,this._hit=0,this._miss=0},t.prototype.getSize=function(){return this._size},t.prototype.getHitRate=function(){return this._hit/(this._hit+this._miss)},t.prototype._removeEntries=function(){var t=[];this._db.forEach(function(i,e){t.push([i.lastUsed,e])}),t.sort(function(t,i){return t[0]-i[0]});for(var i=0,e=t;i<e.length;i++){var s=e[i];if(this._size-=this._db.get(s[1]).sizeMB,this._db.delete(s[1]),this._size<.9*this.maxSize)return}},t}()});