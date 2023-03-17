/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],(function(e,t,s){"use strict";let r=function(){function e(){this._result=!1}return e.prototype.dispose=function(){this._program=s.disposeMaybe(this._program)},t._createClass(e,[{key:"result",get:function(){return s.isSome(this._program)&&(this._result=this._test(this._program),this.dispose()),this._result}}]),e}();e.WebGLDriverTestModule=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
