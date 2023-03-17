/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let n=function(){function e(){this._outer=new Map}var n=e.prototype;return n.clear=function(){this._outer.clear()},n.get=function(e,t){return this._outer.get(e)?.get(t)},n.set=function(e,t,n){const o=this._outer.get(e);o?o.set(t,n):this._outer.set(e,new Map([[t,n]]))},n.delete=function(e,t){const n=this._outer.get(e);n&&(n.delete(t),0===n.size&&this._outer.delete(e))},n.forEach=function(e){this._outer.forEach(((t,n)=>e(t,n)))},t._createClass(e,[{key:"empty",get:function(){return 0===this._outer.size}}]),e}();e.NestedMap=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
