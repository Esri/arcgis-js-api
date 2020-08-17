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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","./DisjointTimerQuery","./Instancing","./isWebGL2Context","./VertexArrayObjects"],(function(e,t,r,_,n,i){function o(e,t){if(t.compressedTextureS3TC)return null;var r=e.getExtension("WEBGL_compressed_texture_s3tc");return r?{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function u(e,t){if(n.default(e))return{MIN:e.MIN,MAX:e.MAX};if(t.blendMinMax)return null;var r=e.getExtension("EXT_blend_minmax");return r?{MIN:r.MIN_EXT,MAX:r.MAX_EXT}:null}function E(e,t){if(t.textureFilterAnisotropic)return null;var r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return r?{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}:null}function a(e,t){if(n.default(e))return!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float")?{R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F}:null;if(e instanceof WebGLRenderingContext){var r=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),_=!t.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float");return r||_?{RGBA16F:r?r.RGBA16F_EXT:void 0,RGBA32F:_?_.RGBA32F_EXT:void 0}:null}}function T(e,t,r,_,i){if(_&&n.default(e))return!0;if(t[r])return!1;for(var o=0,u=i;o<u.length;o++){var E=u[o];if(e.getExtension(E))return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.loadCapabilities=function(e,t){var n=t&&t.disabledExtensions||{};return{instancing:_.load(e,n),vao:i.load(e,n),compressedTextureS3TC:o(e,n),textureFilterAnisotropic:E(e,n),disjointTimerQuery:r.load(e,n),colorBufferFloat:a(e,n),blendMinMax:u(e,n),depthTexture:T(e,n,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"]),standardDerivatives:T(e,n,"standardDerivatives",!0,["OES_standard_derivatives"]),shaderTextureLOD:T(e,n,"shaderTextureLOD",!0,["EXT_shader_texture_lod"]),textureFloatLinear:T(e,n,"textureFloatLinear",!1,["OES_texture_float_linear"]),fragDepth:T(e,n,"fragDepth",!0,["EXT_frag_depth"])}}}));
