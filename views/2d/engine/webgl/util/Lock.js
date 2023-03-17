/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils"],(function(e,r,t){"use strict";let n=function(){function e(){this._resolver=null}var n=e.prototype;return n.isHeld=function(){return!!this._resolver},n.acquire=function(){var e=r._asyncToGenerator((function*(){this._resolver?(yield this._resolver.promise,yield this.acquire()):this._resolver=t.createResolver()}));function n(){return e.apply(this,arguments)}return n}(),n.release=function(){const e=this._resolver;this._resolver=null,e?.resolve()},e}();function i(e,r,t){return o.apply(this,arguments)}function o(){return(o=r._asyncToGenerator((function*(e,r,t){try{yield e.acquire(),yield r(t),e.release()}catch(n){throw e.release(),n}}))).apply(this,arguments)}e.Lock=n,e.withLock=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
