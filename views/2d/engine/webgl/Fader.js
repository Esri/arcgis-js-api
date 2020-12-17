/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t=400){this.duration=t,this._lastTime=0,this._elapsed=0,this._value=0,this._finished=!1}var i=e.prototype;return i.reset=function(){this._lastTime=0,this._elapsed=0,this._value=0},i.step=function(){const t=performance.now();if(0===this._lastTime)return this._lastTime=t,this._value=0,!0;if(this._elapsed>=this.duration)return!0;const e=t-this._lastTime;return this._elapsed+=e,this._lastTime=t,this._value=Math.min(this._elapsed/this.duration,1),!1},t._createClass(e,[{key:"value",get:function(){return this._value}}]),e}()}));
