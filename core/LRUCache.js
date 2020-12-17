/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./MemCache"],(function(t,e){"use strict";return function(){function r(t,r){this._storage=new e.MemCacheStorage,this._storage.maxSize=t,r&&this._storage.registerRemoveFunc("",r)}var n=r.prototype;return n.put=function(t,e,r){this._storage.put(t,e,r,1)},n.pop=function(t){return this._storage.pop(t)},n.get=function(t){return this._storage.get(t)},n.clear=function(){this._storage.clearAll()},n.destroy=function(){this._storage.clearAll()},t._createClass(r,[{key:"maxSize",get:function(){return this._storage.maxSize},set:function(t){this._storage.maxSize=t}}]),r}()}));
