/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,i){"use strict";let e=function(){function t(){this._data=new Map,this._miss=0,this._hit=0,this.initialized=!0}var e=t.prototype;return e.init=function(){return Promise.resolve()},e.get=function(){var t=i._asyncToGenerator((function*(t,i){if(this._data.has(t))return this._hit++,this._data.get(t)??void 0;this._miss++}));function e(i,e){return t.apply(this,arguments)}return e}(),e.destroy=function(){},e.put=function(t,i){return this._data.set(t,i),Promise.resolve()},e.remove=function(t){return this._data.delete(t),Promise.resolve()},e.getHitRate=function(){return this._hit/(this._hit+this._miss)},t}();t.IDBMockCache=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
