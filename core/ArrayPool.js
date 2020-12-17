/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./ObjectPool"],(function(n){"use strict";const e=Array.prototype.splice;function t(n){n.length=0}let r=function(){function r(e=50,r=50){this._pool=new n(Array,void 0,t,r,e)}var u=r.prototype;return u.acquire=function(){return this._pool.acquire()},u.copy=function(n){const t=this.acquire();return n.unshift(0,0),e.apply(t,n),n.splice(0,2),t},u.release=function(n){this._pool.release(n)},u.prune=function(){this._pool.prune(0)},r.acquire=function(){return o.acquire()},r.copy=function(n){return o.copy(n)},r.release=function(n){return o.release(n)},r.prune=function(){o.prune()},r}();const o=new r(100);return r}));
