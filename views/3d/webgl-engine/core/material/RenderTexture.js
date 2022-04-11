/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../../core/promiseUtils"],(function(e,t,i){"use strict";let s=function(){function e(e,s){this._textureRep=e,this._disposed=!1;const r=this._textureRep.acquire(s);i.isPromiseLike(r)?(r.then((e=>{this._disposed?t.releaseMaybe(e):this._textureRef=e})),this.loadPromise=r):this._textureRef=r}var s=e.prototype;return s.dispose=function(){this._textureRef=t.releaseMaybe(this._textureRef),this._disposed=!0},s.bind=function(e,i,s){const r=t.isSome(this._textureRef)?this._textureRef.glTexture:null;t.isSome(r)&&(e.bindTexture(r,i),e.setUniform2f(s,r.descriptor.width,r.descriptor.height))},e}();e.RenderTexture=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
