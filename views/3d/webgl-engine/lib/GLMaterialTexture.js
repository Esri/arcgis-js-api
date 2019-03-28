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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./DefaultTextureUnits","./GLMaterial","../materials/internal/MaterialUtil"],function(e,t,r,i,n,u){return function(e){function t(t,r,i,n,o,a){void 0===a&&(a=!1);var s=e.call(this,t,r)||this;return s.textureRep=i,s.textureId=n,s.initTransparent=a,s.glTextureRef=u.aquireIfNotUndefined(s.textureId,i,s.initTransparent),o&&(s.glTextureRefNormal=u.aquireIfNotUndefined(o,i,s.initTransparent)),s}return r(t,e),t.prototype.dispose=function(){u.releaseIfNotUndefined(this.textureId,this.textureRep)},t.prototype.updateTexture=function(e){e!==this.textureId&&(u.releaseIfNotUndefined(this.textureId,this.textureRep),this.textureId=e,this.glTextureRef=u.aquireIfNotUndefined(this.textureId,this.textureRep,this.initTransparent))},t.prototype.bindTexture=function(e,t){null!=this.glTextureRef&&(t.setUniform1i("tex",i.DefaultTextureUnits.DIFFUSE),e.bindTexture(this.glTextureRef.getGLTexture(),i.DefaultTextureUnits.DIFFUSE),this.glTextureRefNormal&&(t.setUniform1i("texNormal",i.DefaultTextureUnits.NORMAL),e.bindTexture(this.glTextureRefNormal.getGLTexture(),i.DefaultTextureUnits.NORMAL)))},t.prototype.bindTextureSize=function(e,t){if(null!=this.glTextureRef){var r=this.glTextureRef.getGLTexture();t.setUniform2f("texSize",r.descriptor.width,r.descriptor.height)}},t.prototype.bindTextureScale=function(e,t){var r=this.glTextureRef&&this.glTextureRef.getGLTexture();r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)},t}(n)});