/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/time"],(function(e,i,t,n){"use strict";let o=function(){function e(e=!0){this.enabled=e,this._time=0}var o=e.prototype;return o.advance=function(e){return this.enabled&&(this._time+=e),t.isNone(this._forcedTime)&&this.enabled&&0!==e},o.stopAtTime=function(e){this._forcedTime=e},i._createClass(e,[{key:"time",get:function(){return t.isSome(this._forcedTime)?this._forcedTime:n.Milliseconds(this._time)}}]),e}();e.AnimationTimer=o,Object.defineProperty(e,"__esModule",{value:!0})}));
