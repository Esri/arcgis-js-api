// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","./DefaultTextureUnits","./GLMaterial","../materials/internal/MaterialUtil"],function(e,t,r,i,u,n,s){var o=function(e){function t(t){var r=e.call(this,t)||this,i=t.textureRep;r.textureRep=i,r.textureId=t.textureId;var u=!!t.initTransparent;return r.initTransparent=u,r.glTextureRef=s.acquireIfNotUndefined(r.textureId,i,r.initTransparent),t.normalTextureId&&(r.glTextureRefNormal=s.acquireIfNotUndefined(t.normalTextureId,i,u)),t.emissiveTextureId&&(r.glTextureRefEmission=s.acquireIfNotUndefined(t.emissiveTextureId,i,u)),t.occlusionTextureId&&(r.glTextureRefOcclusion=s.acquireIfNotUndefined(t.occlusionTextureId,i,u)),t.metallicRoughnessTextureId&&(r.glTextureRefRoughnessMetallness=s.acquireIfNotUndefined(t.metallicRoughnessTextureId,i,u)),r}return i(t,e),t.prototype.dispose=function(){s.releaseIfNotUndefined(this.textureId,this.textureRep)},t.prototype.updateTexture=function(e){e!==this.textureId&&(s.releaseIfNotUndefined(this.textureId,this.textureRep),this.textureId=e,this.glTextureRef=s.acquireIfNotUndefined(this.textureId,this.textureRep,this.initTransparent))},t.prototype.bindTexture=function(e,t){null!=this.glTextureRef&&(t.setUniform1i("tex",u.DefaultTextureUnits.DIFFUSE),e.bindTexture(this.glTextureRef.getGLTexture(),u.DefaultTextureUnits.DIFFUSE)),this.glTextureRefNormal&&(t.setUniform1i("texNormal",u.DefaultTextureUnits.NORMAL),e.bindTexture(this.glTextureRefNormal.getGLTexture(),u.DefaultTextureUnits.NORMAL)),this.glTextureRefEmission&&(t.setUniform1i("texEmission",u.DefaultTextureUnits.EMISSION),e.bindTexture(this.glTextureRefEmission.getGLTexture(),u.DefaultTextureUnits.EMISSION)),this.glTextureRefOcclusion&&(t.setUniform1i("texOcclusion",u.DefaultTextureUnits.OCCLUSION),e.bindTexture(this.glTextureRefOcclusion.getGLTexture(),u.DefaultTextureUnits.OCCLUSION)),this.glTextureRefRoughnessMetallness&&(t.setUniform1i("texMetallicRoughness",u.DefaultTextureUnits.METALLIC_ROUGHNESS),e.bindTexture(this.glTextureRefRoughnessMetallness.getGLTexture(),u.DefaultTextureUnits.METALLIC_ROUGHNESS))},t.prototype.bindTextureScale=function(e,t){var r=this.glTextureRef&&this.glTextureRef.getGLTexture();r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)},t}(n);return function(e){function t(e,t){return r({},e,t)}e.makeCtorParameters=t}(o||(o={})),o});