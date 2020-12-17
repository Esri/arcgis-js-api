/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./ObjectPool"],(function(e){"use strict";let n=function(){function n(n=50,r=50){this._pool=new e(Map,void 0,(e=>e.clear()),r,n)}var t=n.prototype;return t.acquire=function(){return this._pool.acquire()},t.release=function(e){this._pool.release(e)},n.acquire=function(){return r.acquire()},n.release=function(e){return r.release(e)},n}();const r=new n(100);return n}));
