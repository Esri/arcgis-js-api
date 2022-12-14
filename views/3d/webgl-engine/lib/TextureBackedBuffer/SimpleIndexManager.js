/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let n=function(){function e(e){this._maxCount=e,this._nextIndex=0,this._recycledIndices=[]}var n=e.prototype;return n.acquire=function(){return this._recycledIndices.length>0?this._recycledIndices.pop():this.availableCount?this._nextIndex++:void 0},n.release=function(e){this._recycledIndices.push(e)},t._createClass(e,[{key:"activeCount",get:function(){return this._nextIndex-this._recycledIndices.length}},{key:"availableCount",get:function(){return this._recycledIndices.length+this._maxCount-this._nextIndex}}]),e}();e.SimpleIndexManager=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
