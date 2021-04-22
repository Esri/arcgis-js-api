/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","./DefaultTextureUnits","./GLMaterial"],(function(e,t,i,r){"use strict";return function(r){function u(e){var t;return(t=r.call(this,e)||this)._textureIDs=new Set,t._textureRepository=e.textureRep,t._textureId=e.textureId,t._initTransparent=!!e.initTextureTransparent,t._texture=t._acquireIfNotUndefined(t._textureId),t._textureNormal=t._acquireIfNotUndefined(e.normalTextureId),t._textureEmissive=t._acquireIfNotUndefined(e.emissiveTextureId),t._textureOcclusion=t._acquireIfNotUndefined(e.occlusionTextureId),t._textureMetallicRoughness=t._acquireIfNotUndefined(e.metallicRoughnessTextureId),t}e._inheritsLoose(u,r);var s=u.prototype;return s.dispose=function(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()},s.updateTexture=function(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))},s.bindTexture=function(e,r){t.isSome(this._texture)&&(r.setUniform1i("tex",i.DefaultTextureUnits.DIFFUSE),e.bindTexture(this._texture.glTexture,i.DefaultTextureUnits.DIFFUSE)),t.isSome(this._textureNormal)&&(r.setUniform1i("normalTexture",i.DefaultTextureUnits.NORMAL),e.bindTexture(this._textureNormal.glTexture,i.DefaultTextureUnits.NORMAL)),t.isSome(this._textureEmissive)&&(r.setUniform1i("texEmission",i.DefaultTextureUnits.EMISSION),e.bindTexture(this._textureEmissive.glTexture,i.DefaultTextureUnits.EMISSION)),t.isSome(this._textureOcclusion)&&(r.setUniform1i("texOcclusion",i.DefaultTextureUnits.OCCLUSION),e.bindTexture(this._textureOcclusion.glTexture,i.DefaultTextureUnits.OCCLUSION)),t.isSome(this._textureMetallicRoughness)&&(r.setUniform1i("texMetallicRoughness",i.DefaultTextureUnits.METALLIC_ROUGHNESS),e.bindTexture(this._textureMetallicRoughness.glTexture,i.DefaultTextureUnits.METALLIC_ROUGHNESS))},s.bindTextureScale=function(e,i){const r=t.isSome(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?i.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):i.setUniform2f("textureCoordinateScaleFactor",1,1)},s._acquireIfNotUndefined=function(e){if(!t.isNone(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)},s._releaseIfNotUndefined=function(e){t.isNone(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))},u}(r)}));
