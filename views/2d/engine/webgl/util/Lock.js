/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/promiseUtils"],(function(e,r){"use strict";let t=function(){function e(){this._resolver=null}var t=e.prototype;return t.isHeld=function(){return!!this._resolver},t.acquire=async function(){if(!this._resolver)return this._resolver=r.createResolver(),Promise.resolve();await this._resolver.promise,await this.acquire()},t.release=function(){const e=this._resolver;this._resolver=null,e.resolve()},e}();async function s(e,r,t){try{await e.acquire(),await r(t),e.release()}catch(s){throw e.release(),s}}e.default=t,e.withLock=s,Object.defineProperty(e,"__esModule",{value:!0})}));
