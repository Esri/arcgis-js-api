/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/time"],(function(e,t,i,n){"use strict";let r=function(){function e(){this.enabled=!0,this._time=0}return e.prototype.advance=function(e){return i.isSome(e.forcedTime)?this._time!==e.forcedTime&&(this._time=e.forcedTime,!0):!(!this.enabled||0===e.dt)&&(this._time+=e.dt,!0)},t._createClass(e,[{key:"time",get:function(){return n.Milliseconds(this._time)}}]),e}();e.AnimationTimer=r,Object.defineProperty(e,"__esModule",{value:!0})}));
