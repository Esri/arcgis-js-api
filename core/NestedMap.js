/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let o=function(){function e(){this._outer=new Map}var o=e.prototype;return o.clear=function(){this._outer.clear()},o.get=function(e,t){var o;return null==(o=this._outer.get(e))?void 0:o.get(t)},o.set=function(e,t,o){const n=this._outer.get(e);n?n.set(t,o):this._outer.set(e,new Map([[t,o]]))},o.delete=function(e,t){const o=this._outer.get(e);o&&(o.delete(t),0===o.size&&this._outer.delete(e))},o.forEach=function(e){this._outer.forEach(((t,o)=>e(t,o)))},t._createClass(e,[{key:"empty",get:function(){return 0===this._outer.size}}]),e}();e.NestedMap=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
