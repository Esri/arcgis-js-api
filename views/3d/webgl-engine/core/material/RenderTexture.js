/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe"],(function(e,t){"use strict";let r=function(){function e(e,r){this._textureRep=e,this._textureId=r,this._textureRef=t.applySome(this._textureId,(e=>this._textureRep.acquire(e)))}var r=e.prototype;return r.dispose=function(){this._textureRef=t.applySome(this._textureId,(e=>{this._textureRep.release(e)}))},r.bind=function(e,r,i,u,s){if(t.isSome(this._textureRef)&&(r.setUniform1i(i,u),e.bindTexture(this._textureRef.glTexture,u),s)){const e=this._textureRef.glTexture;r.setUniform2f(s,e.descriptor.width,e.descriptor.height)}},e}();e.RenderTexture=r,Object.defineProperty(e,"__esModule",{value:!0})}));
