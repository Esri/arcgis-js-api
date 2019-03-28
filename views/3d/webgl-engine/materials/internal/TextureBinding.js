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

define(["require","exports","../../../../../core/maybe"],function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r){var n=this;this._textureRep=t,this._textureId=e,this._options=r,this._textureRef=i.map(this._textureId,function(t){return n._textureRep.aquire(t,!!n._options.initTransparent)})}return t.prototype.dispose=function(){var t=this;this._textureRef=i.map(this._textureId,function(e){t._textureRep.release(e)})},t.prototype.bind=function(t,e){if(i.isSome(this._textureRef)&&(e.setUniform1i(this._options.textureUniform,this._options.textureUnit),t.bindTexture(this._textureRef.getGLTexture(),this._options.textureUnit),this._options.textureSizeUniform)){var r=this._textureRef.getGLTexture();e.setUniform2f(this._options.textureSizeUniform,r.descriptor.width,r.descriptor.height)}},t.prototype.update=function(t){var e=this;t!==this._textureId&&(i.map(this._textureId,function(t){e._textureRep.release(t)}),this._textureRef=i.map(t,function(t){return e._textureRep.aquire(t,!!e._options.initTransparent)}))},t}();e.TextureBinding=r});