/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../layers/support/timeUtils"],(function(e,t,i,n){"use strict";let s=function(){function e(e=!0){this.enabled=e,this._time=0}var s=e.prototype;return s.advance=function(e){this.enabled&&(this._time+=e)},s.stopAtTime=function(e){this._forcedTime=e},t._createClass(e,[{key:"time",get:function(){return i.isSome(this._forcedTime)?this._forcedTime:n.Milliseconds(this._time)}}]),e}();e.AnimationTimer=s,Object.defineProperty(e,"__esModule",{value:!0})}));
