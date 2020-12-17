/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/promiseUtils"],(function(e,r){"use strict";let t=function(){function e(){this._resolver=null}var t=e.prototype;return t.isHeld=function(){return!!this._resolver},t.acquire=function(){return this._resolver?this._resolver.promise.then((()=>this.acquire())):(this._resolver=r.createResolver(),r.resolve())},t.release=function(){const e=this._resolver;this._resolver=null,e.resolve()},e}();e.default=t,e.withLock=function(e,r,t){return e.acquire().then((()=>r(t))).then((()=>e.release())).catch((r=>{throw e.release(),r}))},Object.defineProperty(e,"__esModule",{value:!0})}));
