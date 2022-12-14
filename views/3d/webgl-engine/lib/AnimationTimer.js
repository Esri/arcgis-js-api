/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/time"],(function(e,t,i){"use strict";let n=function(){function e(){this.enabled=!0,this._time=i.Milliseconds(0)}return e.prototype.advance=function(e){return this._time!==e.time&&(this._time=e.time,!0)},t._createClass(e,[{key:"time",get:function(){return this._time}}]),e}();e.AnimationTimer=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
