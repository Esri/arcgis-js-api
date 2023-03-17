/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(t){this._gain=t}var i=t.prototype;return i.reset=function(t){this._value=t},i.update=function(t){void 0===this._value?this._value=t:this._value=this._gain*t+(1-this._gain)*this._value},e._createClass(t,[{key:"gain",set:function(t){this._gain=t}},{key:"value",get:function(){return void 0===this._value?0:this._value}}]),t}();t.ExponentialFalloff=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
