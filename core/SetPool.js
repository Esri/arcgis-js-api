/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";let e=function(){function e(){this._pool=[],this._set=new Set}var n=e.prototype;return n.acquire=function(){if(0===this._pool.length)return new Set;const e=this._pool.pop();return this._set.delete(e),e},n.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return t.acquire()},e.release=function(e){return t.release(e)},e}();const t=new e;return e}));
