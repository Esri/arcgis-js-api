/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t){this.store=t}var e=t.prototype;return e.destroy=function(){this.store.destroy()},e.get=function(t){return this.store.get(t)},e.put=function(t,e){this.store.put(t,e,e.values.byteLength+256)},t}();t.ElevationQueryTileCache=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
