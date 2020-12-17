/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let i=function(){function e(e){this._gain=e}var i=e.prototype;return i.reset=function(e){this._value=e},i.update=function(e){void 0===this._value?this._value=e:this._value=this._gain*e+(1-this._gain)*this._value},t._createClass(e,[{key:"gain",set:function(e){this._gain=e}},{key:"value",get:function(){return void 0===this._value?0:this._value}}]),e}();e.ExponentialFalloff=i,Object.defineProperty(e,"__esModule",{value:!0})}));
