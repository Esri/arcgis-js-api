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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./GLMaterial","../materials/internal/MaterialUtil"],function(e,t,r,i,n){return function(e){function t(t,r,i,u,s){void 0===s&&(s=!1);var d=e.call(this,t,r)||this;return d.textureRep=i,d.textureId=u,d.initTransparent=s,d.glTextureRef=n.aquireIfNotUndefined(d.textureId,i,d.initTransparent),d}return r(t,e),t.prototype.dispose=function(){n.releaseIfNotUndefined(this.textureId,this.textureRep)},t.prototype.updateTexture=function(e){e!==this.textureId&&(n.releaseIfNotUndefined(this.textureId,this.textureRep),this.textureId=e,this.glTextureRef=n.aquireIfNotUndefined(this.textureId,this.textureRep,this.initTransparent))},t.prototype.renderTexture=function(e){var t=this.textureRep.getTexture(this.textureId);t&&t.dirty&&t.redraw&&t.redraw()},t.prototype.bindTexture=function(e,t){null!=this.glTextureRef&&(t.setUniform1i("tex",0),e.bindTexture(this.glTextureRef.getGLTexture()))},t.prototype.bindTextureSize=function(e,t){if(null!=this.glTextureRef){var r=this.glTextureRef.getGLTexture();t.setUniform2f("texSize",r.descriptor.width,r.descriptor.height)}},t}(i)});