/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/time"],(function(e,i,t,n){"use strict";let s=function(){function e(){this.enabled=!0,this._time=n.Milliseconds(0)}return e.prototype.advance=function({deltaTime:e,fixedTime:i}){return t.isSome(i)?this._time!==i&&(this._time=i,!0):(this._time=n.Milliseconds(this._time+e),0!==e)},i._createClass(e,[{key:"time",get:function(){return this._time}}]),e}(),o=function(e,i){this.deltaTime=e,this.fixedTime=i};e.AnimationTimer=s,e.Parameters=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
