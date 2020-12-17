/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./MemCache"],(function(t){"use strict";return function(){function e(e,r){this._storage=new t.MemCacheStorage,this._storage.maxSize=e,r&&this._storage.registerRemoveFunc("",r)}var r=e.prototype;return r.put=function(t,e){this._storage.put(t,e,1,1)},r.pop=function(t){return this._storage.pop(t)},r.get=function(t){return this._storage.get(t)},r.clear=function(){this._storage.clearAll()},r.destroy=function(){this._storage.clearAll()},e}()}));
