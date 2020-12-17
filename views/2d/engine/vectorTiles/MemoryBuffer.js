/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function r(t){this._array=[],t<=0&&console.error("strideInBytes must be positive!"),this._stride=t}var e=r.prototype;return e.reset=function(){this.array.length=0},e.toBuffer=function(){return new Uint32Array(this._array).buffer},r.i1616to32=function(t,r){return 65535&t|r<<16},r.i8888to32=function(t,r,e,n){return 255&t|(255&r)<<8|(255&e)<<16|n<<24},r.i8816to32=function(t,r,e){return 255&t|(255&r)<<8|e<<16},t._createClass(r,[{key:"array",get:function(){return this._array}},{key:"index",get:function(){return 4*this._array.length/this._stride}},{key:"itemSize",get:function(){return this._stride}},{key:"sizeInBytes",get:function(){return 4*this._array.length}}]),r}()}));
