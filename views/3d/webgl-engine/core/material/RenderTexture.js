/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/promiseUtils"],(function(e,t,s,i){"use strict";let r=function(){function e(e,t){this._textureRep=e,this.loadPromise=null,this._disposed=!1;const r=this._textureRep.acquire(t);i.isPromiseLike(r)?(r.then((e=>{this._disposed?s.releaseMaybe(e):this._textureRef=e})),this.loadPromise=r):this._textureRef=r}return e.prototype.dispose=function(){this._textureRef=s.releaseMaybe(this._textureRef),this._disposed=!0},t._createClass(e,[{key:"glTexture",get:function(){return s.isSome(this._textureRef)?this._textureRef.glTexture:null}}]),e}();e.RenderTexture=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
