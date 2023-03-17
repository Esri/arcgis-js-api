/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t){this._store=t}var e=t.prototype;return e.destroy=function(){this._store.destroy()},e.get=function(t){return this._store.get(t)},e.put=function(t,e){this._store.put(t,e,e.values.byteLength+256)},t}();t.ElevationQueryTileCache=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
