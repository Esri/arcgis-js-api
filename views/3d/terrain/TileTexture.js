/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t){this._texture=t,this.type="tile-texture",this._refCount=1}var r=e.prototype;return r.retain=function(){++this._refCount},r.release=function(){--this._refCount,0===this._refCount&&this._texture.dispose()},r.generateMipmap=function(){this._texture.generateMipmap()},t._createClass(e,[{key:"texture",get:function(){return this._texture}},{key:"descriptor",get:function(){return this._texture.descriptor}}]),e}()}));
