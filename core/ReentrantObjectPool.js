/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./maybe","./ObjectPool"],(function(e,t,s,o){"use strict";let i=function(e){function o(){var t;return(t=e.apply(this,arguments)||this)._set=new Set,t}t._inheritsLoose(o,e);var i=o.prototype;return i.destroy=function(){e.prototype.destroy.call(this),this._set=s.nullifyNonnullableForDispose(this._set)},i.acquire=function(...t){const s=e.prototype.acquire.call(this,...t);return this._set.delete(s),s},i.release=function(t){t&&!this._set.has(t)&&(e.prototype.release.call(this,t),this._set.add(t))},i._dispose=function(t){this._set.delete(t),e.prototype._dispose.call(this,t)},o}(o);e.ReentrantObjectPool=i,Object.defineProperty(e,"__esModule",{value:!0})}));
