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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","./DefaultTextureUnits","./GLMaterial","../materials/internal/MaterialUtil"],(function(e,t,r,i,u,n,s){var l=function(e){function t(t){var r=e.call(this,t)||this,i=t.textureRep;r.textureRep=i,r.textureId=t.textureId,r.initTransparent=!!t.initTextureTransparent;var u=function(e){return s.acquireIfNotUndefined(e,i,r.initTransparent)};return r.glTextureRef=u(r.textureId),t.normalTextureId&&(r.glTextureRefNormal=u(t.normalTextureId)),t.emissiveTextureId&&(r.glTextureRefEmission=u(t.emissiveTextureId)),t.occlusionTextureId&&(r.glTextureRefOcclusion=u(t.occlusionTextureId)),t.metallicRoughnessTextureId&&(r.glTextureRefRoughnessMetallness=u(t.metallicRoughnessTextureId)),r}return i(t,e),t.prototype.dispose=function(){s.releaseIfNotUndefined(this.textureId,this.textureRep)},t.prototype.updateTexture=function(e){e!==this.textureId&&(s.releaseIfNotUndefined(this.textureId,this.textureRep),this.textureId=e,this.glTextureRef=s.acquireIfNotUndefined(this.textureId,this.textureRep,this.initTransparent))},t.prototype.bindTexture=function(e,t){null!=this.glTextureRef&&(t.setUniform1i("tex",u.DefaultTextureUnits.DIFFUSE),e.bindTexture(this.glTextureRef.glTexture,u.DefaultTextureUnits.DIFFUSE)),this.glTextureRefNormal&&(t.setUniform1i("normalTexture",u.DefaultTextureUnits.NORMAL),e.bindTexture(this.glTextureRefNormal.glTexture,u.DefaultTextureUnits.NORMAL)),this.glTextureRefEmission&&(t.setUniform1i("texEmission",u.DefaultTextureUnits.EMISSION),e.bindTexture(this.glTextureRefEmission.glTexture,u.DefaultTextureUnits.EMISSION)),this.glTextureRefOcclusion&&(t.setUniform1i("texOcclusion",u.DefaultTextureUnits.OCCLUSION),e.bindTexture(this.glTextureRefOcclusion.glTexture,u.DefaultTextureUnits.OCCLUSION)),this.glTextureRefRoughnessMetallness&&(t.setUniform1i("texMetallicRoughness",u.DefaultTextureUnits.METALLIC_ROUGHNESS),e.bindTexture(this.glTextureRefRoughnessMetallness.glTexture,u.DefaultTextureUnits.METALLIC_ROUGHNESS))},t.prototype.bindTextureScale=function(e,t){var r=this.glTextureRef&&this.glTextureRef.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)},t}(n.GLMaterial);return function(e){e.makeCtorParameters=function(e,t){return r({},e,t)}}(l||(l={})),l}));