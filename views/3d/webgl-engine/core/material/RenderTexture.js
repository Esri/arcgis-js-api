/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe"],(function(e,t){"use strict";let i=function(){function e(e,i){this._textureRep=e,this._disposed=!1;const s=this._textureRep.acquire(i);s.then((e=>{this._disposed?t.releaseMaybe(e):this._textureRef=e})),this.loadPromise=s}var i=e.prototype;return i.dispose=function(){this._textureRef=t.releaseMaybe(this._textureRef),this._disposed=!0},i.bind=function(e,i,s){const r=t.isSome(this._textureRef)?this._textureRef.glTexture:null;t.isSome(r)&&(e.bindTexture(r,i),e.setUniform2f(s,r.descriptor.width,r.descriptor.height))},e}();e.RenderTexture=i,Object.defineProperty(e,"__esModule",{value:!0})}));
