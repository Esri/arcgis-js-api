// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/maybe","./DefaultTextureUnits","./GLMaterial"],(function(e,t,r,i,u,s){return function(e){function t(t){var r=e.call(this,t)||this;return r._textureIDs=new Set,r._textureRepository=t.textureRep,r._textureId=t.textureId,r._initTransparent=!!t.initTextureTransparent,r._texture=r._acquireIfNotUndefined(r._textureId),r._textureNormal=r._acquireIfNotUndefined(t.normalTextureId),r._textureEmissive=r._acquireIfNotUndefined(t.emissiveTextureId),r._textureOcclusion=r._acquireIfNotUndefined(t.occlusionTextureId),r._textureMetallicRoughness=r._acquireIfNotUndefined(t.metallicRoughnessTextureId),r}return r.__extends(t,e),t.prototype.dispose=function(){var e=this;this._textureIDs.forEach((function(t){return e._textureRepository.release(t)})),this._textureIDs.clear()},t.prototype.updateTexture=function(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))},t.prototype.bindTexture=function(e,t){i.isSome(this._texture)&&(t.setUniform1i("tex",u.DefaultTextureUnits.DIFFUSE),e.bindTexture(this._texture.glTexture,u.DefaultTextureUnits.DIFFUSE)),i.isSome(this._textureNormal)&&(t.setUniform1i("normalTexture",u.DefaultTextureUnits.NORMAL),e.bindTexture(this._textureNormal.glTexture,u.DefaultTextureUnits.NORMAL)),i.isSome(this._textureEmissive)&&(t.setUniform1i("texEmission",u.DefaultTextureUnits.EMISSION),e.bindTexture(this._textureEmissive.glTexture,u.DefaultTextureUnits.EMISSION)),i.isSome(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",u.DefaultTextureUnits.OCCLUSION),e.bindTexture(this._textureOcclusion.glTexture,u.DefaultTextureUnits.OCCLUSION)),i.isSome(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",u.DefaultTextureUnits.METALLIC_ROUGHNESS),e.bindTexture(this._textureMetallicRoughness.glTexture,u.DefaultTextureUnits.METALLIC_ROUGHNESS))},t.prototype.bindTextureScale=function(e,t){var r=i.isSome(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)},t.prototype._acquireIfNotUndefined=function(e){if(!i.isNone(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)},t.prototype._releaseIfNotUndefined=function(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))},t}(s.GLMaterial)}));