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

define(["require","exports","./DisjointTimerQuery","./Instancing","./isWebGL2Context","./LoseContext","./VertexArrayObjects"],function(e,t,r,n,_,o,a){function l(e,t){var _=t&&t.disabledExtensions||{},l=t&&t.debugWebGLExtensions||{};return T(e,_,"standardDerivatives",!0,["OES_standard_derivatives"]),{instancing:n.load(e),vao:a.load(e,_),compressedTextureS3TC:i(e,_),textureFilterAnisotropic:E(e,_),disjointTimerQuery:r.load(e,_),textureFloat:f(e,_),colorBufferFloat:x(e,_),blendMinMax:u(e,_),depthTexture:T(e,_,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"]),standardDerivatives:!0,shaderTextureLOD:T(e,_,"shaderTextureLOD",!0,["EXT_shader_texture_lod"]),fragDepth:T(e,_,"fragDepth",!0,["EXT_frag_depth"]),loseContext:o.load(e,l)}}function i(e,t){if(t.compressedTextureS3TC)return null;var r=e.getExtension("WEBGL_compressed_texture_s3tc");return r?{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function u(e,t){if(_.default(e))return{MIN:e.MIN,MAX:e.MAX};if(t.blendMinMax)return null;var r=e.getExtension("EXT_blend_minmax");return r?{MIN:r.MIN_EXT,MAX:r.MAX_EXT}:null}function E(e,t){if(t.textureFilterAnisotropic)return null;var r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return r?{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}:null}function f(e,t){if(_.default(e))return{textureFloat:!0,textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT};if(e instanceof WebGLRenderingContext){var r=!t.textureHalfFloat&&e.getExtension("OES_texture_half_float");return{textureFloat:!t.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!r,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:r?r.HALF_FLOAT_OES:void 0}}}function x(e,t){if(_.default(e)){var r=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float");return r||n?{textureFloat:!!n,textureHalfFloat:!!r,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){var r=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!t.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float");return r||n?{textureFloat:!!n,textureHalfFloat:!!r,RGBA16F:r?r.RGBA16F_EXT:void 0,RGB16F:r?r.RGB16F_EXT:void 0,RGBA32F:n?n.RGBA32F_EXT:void 0}:null}}function T(e,t,r,n,o){if(n&&_.default(e))return!0;if(t[r])return!1;for(var a=0,l=o;a<l.length;a++){var i=l[a];if(e.getExtension(i))return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.loadCapabilities=l});