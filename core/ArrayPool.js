/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["./ObjectPool"],(function(e){"use strict";function n(e){e.length=0}let r=function(){function r(r=50,t=50){this._pool=new e(Array,void 0,n,t,r)}var o=r.prototype;return o.acquire=function(){return this._pool.acquire()},o.release=function(e){this._pool.release(e)},o.prune=function(){this._pool.prune(0)},r.acquire=function(){return t.acquire()},r.release=function(e){return t.release(e)},r.prune=function(){t.prune()},r}();const t=new r(100);return r}));
