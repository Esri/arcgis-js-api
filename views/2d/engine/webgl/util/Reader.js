/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function t(t){this._pos=0,this._buffer=t,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}var i=t.prototype;return i.readInt32=function(){return this._i32View[this._pos++]},i.readF32=function(){return this._f32View[this._pos++]},t}()}));
