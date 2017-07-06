// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","./GLMaterialBase","./MaterialUtil"],function(e,t,r,i,u){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t,r,i,n,a){void 0===a&&(a=!1);var s=e.call(this,t,i,n)||this;return s.params=r,s.textureRep=n,s.initTransparent=a,s.glTextureRef=u.aquireIfNotUndefined(r.textureId,r.initTexture,n,a),s}return r(t,e),t.prototype.updateTexture=function(e){var t=this.params;t.textureId!==e&&(u.releaseIfNotUndefined(t.textureId,this.textureRep),t.textureId=e,this.glTextureRef=u.aquireIfNotUndefined(t.textureId,t.initTexture,this.textureRep,this.initTransparent))},t.prototype.renderTexture=function(e){var t=this.textureRep.getTexture(this.params.textureId);t&&t.dirty&&t.redraw&&t.redraw()},t.prototype.bindTexture=function(e,t){null!=this.glTextureRef&&(t.setUniform1i("tex",0),e.bindTexture(this.glTextureRef.getGLTexture()))},t.prototype.bindTextureSize=function(e,t){if(null!=this.glTextureRef){var r=this.glTextureRef.getGLTexture();t.setUniform2f("texSize",r.descriptor.width,r.descriptor.height)}},t.prototype.dispose=function(){u.releaseIfNotUndefined(this.params.textureId,this.textureRep)},t}(i["default"]);t.GLMaterialTextureBase=n,t["default"]=n});