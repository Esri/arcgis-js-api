/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let n=function(){function e(e){this.maxCount=e,this._nextIndex=0,this.recycledIndices=[]}var n=e.prototype;return n.acquire=function(){return this.recycledIndices.length>0?this.recycledIndices.pop():this.availableCount?this._nextIndex++:void 0},n.release=function(e){this.recycledIndices.push(e)},t._createClass(e,[{key:"activeCount",get:function(){return this._nextIndex-this.recycledIndices.length}},{key:"availableCount",get:function(){return this.recycledIndices.length+this.maxCount-this._nextIndex}}]),e}();e.SimpleIndexManager=n,Object.defineProperty(e,"__esModule",{value:!0})}));
