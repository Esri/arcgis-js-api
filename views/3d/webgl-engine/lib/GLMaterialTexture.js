// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./DefaultTextureUnits","./GLMaterial","../materials/internal/MaterialUtil"],function(e,t,r,i,n,u){return function(e){function t(t,r,i,n,s,o,x,f,a){void 0===a&&(a=!1);var l=e.call(this,t,r)||this;return l.textureRep=i,l.textureId=n,l.initTransparent=a,l.glTextureRef=u.acquireIfNotUndefined(l.textureId,i,l.initTransparent),s&&(l.glTextureRefNormal=u.acquireIfNotUndefined(s,i,l.initTransparent)),o&&(l.glTextureRefEmission=u.acquireIfNotUndefined(o,i,l.initTransparent)),x&&(l.glTextureRefOcclusion=u.acquireIfNotUndefined(x,i,l.initTransparent)),f&&(l.glTextureRefRoughnessMetallness=u.acquireIfNotUndefined(f,i,l.initTransparent)),l}return r(t,e),t.prototype.dispose=function(){u.releaseIfNotUndefined(this.textureId,this.textureRep)},t.prototype.updateTexture=function(e){e!==this.textureId&&(u.releaseIfNotUndefined(this.textureId,this.textureRep),this.textureId=e,this.glTextureRef=u.acquireIfNotUndefined(this.textureId,this.textureRep,this.initTransparent))},t.prototype.bindTexture=function(e,t){null!=this.glTextureRef&&(t.setUniform1i("tex",i.DefaultTextureUnits.DIFFUSE),e.bindTexture(this.glTextureRef.getGLTexture(),i.DefaultTextureUnits.DIFFUSE)),this.glTextureRefNormal&&(t.setUniform1i("texNormal",i.DefaultTextureUnits.NORMAL),e.bindTexture(this.glTextureRefNormal.getGLTexture(),i.DefaultTextureUnits.NORMAL)),this.glTextureRefEmission&&(t.setUniform1i("texEmission",i.DefaultTextureUnits.EMISSION),e.bindTexture(this.glTextureRefEmission.getGLTexture(),i.DefaultTextureUnits.EMISSION)),this.glTextureRefOcclusion&&(t.setUniform1i("texOcclusion",i.DefaultTextureUnits.OCCLUSION),e.bindTexture(this.glTextureRefOcclusion.getGLTexture(),i.DefaultTextureUnits.OCCLUSION)),this.glTextureRefRoughnessMetallness&&(t.setUniform1i("texMetallicRoughness",i.DefaultTextureUnits.METALLIC_ROUGHNESS),e.bindTexture(this.glTextureRefRoughnessMetallness.getGLTexture(),i.DefaultTextureUnits.METALLIC_ROUGHNESS))},t.prototype.bindTextureSize=function(e,t){if(null!=this.glTextureRef){var r=this.glTextureRef.getGLTexture();t.setUniform2f("texSize",r.descriptor.width,r.descriptor.height)}},t.prototype.bindTextureScale=function(e,t){var r=this.glTextureRef&&this.glTextureRef.getGLTexture();r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)},t}(n)});