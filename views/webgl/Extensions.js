// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var i=function(){function e(e,t){if(this._vaoInit=!1,this._angleInstancedArraysInit=!1,this._standardDerivativesInit=!1,this._elementIndexUintInit=!1,this._depthTextureInit=!1,this._textureFilterAnisotropicInit=!1,this._shaderTextureLODInit=!1,this._compressedTextureS3TCInit=!1,this._gl=e,t&&t.disabledExtensions){var i=t.disabledExtensions;i.vao&&(this._vao=null,this._vaoInit=!0),i.angleInstancedArrays&&(this._angleInstancedArrays=null,this._angleInstancedArraysInit=!0),i.standardDerivatives&&(this._standardDerivatives=null,this._standardDerivativesInit=!0),i.elementIndexUint&&(this._elementIndexUint=null,this._elementIndexUintInit=!0),i.depthTexture&&(this._depthTexture=null,this._depthTextureInit=!0),i.textureFilterAnisotropic&&(this._textureFilterAnisotropic=null,this._textureFilterAnisotropicInit=!0),i.compressedTextureS3TC&&(this._compressedTextureS3TC=null,this._compressedTextureS3TCInit=!0),i.shaderTextureLOD&&(this._shaderTextureLOD=null,this._shaderTextureLODInit=!0)}}return Object.defineProperty(e.prototype,"vao",{get:function(){return this._vaoInit||(this._vao=this._gl.getExtension("OES_vertex_array_object")||this._gl.getExtension("MOZ_OES_vertex_array_object")||this._gl.getExtension("WEBKIT_OES_vertex_array_object"),this._vaoInit=!0),this._vao},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"angleInstancedArrays",{get:function(){return this._angleInstancedArraysInit||(this._angleInstancedArrays=this._gl.getExtension("ANGLE_instanced_arrays"),this._angleInstancedArraysInit=!0),this._angleInstancedArrays},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"standardDerivatives",{get:function(){return this._standardDerivativesInit||(this._standardDerivatives=this._gl.getExtension("OES_standard_derivatives"),this._standardDerivativesInit=!0),this._standardDerivatives},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"elementIndexUint",{get:function(){return this._elementIndexUintInit||(this._elementIndexUint=this._gl.getExtension("OES_element_index_uint"),this._elementIndexUintInit=!0),this._elementIndexUint},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"depthTexture",{get:function(){return this._depthTextureInit||(this._depthTexture=this._gl.getExtension("WEBGL_depth_texture")||this._gl.getExtension("MOZ_WEBGL_depth_texture")||this._gl.getExtension("WEBKIT_WEBGL_depth_texture"),this._depthTextureInit=!0),this._depthTexture},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textureFilterAnisotropic",{get:function(){return this._textureFilterAnisotropicInit||(this._textureFilterAnisotropic=this._gl.getExtension("EXT_texture_filter_anisotropic")||this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this._textureFilterAnisotropicInit=!0),this._textureFilterAnisotropic},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shaderTextureLOD",{get:function(){return this._shaderTextureLODInit||(this._shaderTextureLOD=this._gl.getExtension("EXT_shader_texture_lod"),this._shaderTextureLODInit=!0),this._shaderTextureLOD},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"compressedTextureS3TC",{get:function(){return this._compressedTextureS3TCInit||(this._compressedTextureS3TC=this._gl.getExtension("WEBGL_compressed_texture_s3tc"),this._compressedTextureS3TCInit=!0),this._compressedTextureS3TC},enumerable:!0,configurable:!0}),e}();return i});