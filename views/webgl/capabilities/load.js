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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./DisjointTimerQuery","./Instancing","./isWebGL2Context","./LoseContext","./VertexArrayObjects"],(function(e,t,r,n,l,u,_){function o(e,t,r,n,u){if(n&&l.default(e))return!0;if(t[r])return!1;for(var _=0,o=u;_<o.length;_++){var a=o[_];if(e.getExtension(a))return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.loadCapabilities=function(e,t){var a,i,f,E,x,T,F,s,R,d=t&&t.disabledExtensions||{},X=t&&t.debugWebGLExtensions||{},A=null,g=null,S=null,G=null;return{get instancing(){return a||(a=n.load(e)),a},get vao(){return i||(i=_.load(e,d)),i},get compressedTextureS3TC(){return f||(f=function(e,t){if(t.compressedTextureS3TC)return null;var r=e.getExtension("WEBGL_compressed_texture_s3tc");if(!r)return null;return{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}}(e,d)),f},get textureFilterAnisotropic(){return E||(E=function(e,t){if(t.textureFilterAnisotropic)return null;var r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(!r)return null;return{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}}(e,d)),E},get disjointTimerQuery(){return x||(x=r.load(e,d)),x},get textureFloat(){return T||(T=function(e,t){if(l.default(e))return{textureFloat:!0,textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT};if(e instanceof WebGLRenderingContext){var r=!t.textureHalfFloat&&e.getExtension("OES_texture_half_float");return{textureFloat:!t.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!t.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!r,textureHalfFloatLinear:!t.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:r?r.HALF_FLOAT_OES:void 0}}return null}(e,d)),T},get colorBufferFloat(){return F||(F=function(e,t){if(l.default(e)){var r=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_float");return r||n?{textureFloat:!!n,textureHalfFloat:!!r,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){r=!t.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),n=!t.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float");return r||n?{textureFloat:!!n,textureHalfFloat:!!r,RGBA16F:r?r.RGBA16F_EXT:void 0,RGB16F:r?r.RGB16F_EXT:void 0,RGBA32F:n?n.RGBA32F_EXT:void 0}:null}return null}(e,d)),F},get blendMinMax(){return s||(s=function(e,t){if(l.default(e))return{MIN:e.MIN,MAX:e.MAX};if(t.blendMinMax)return null;var r=e.getExtension("EXT_blend_minmax");if(!r)return null;return{MIN:r.MIN_EXT,MAX:r.MAX_EXT}}(e,d)),s},get depthTexture(){return null===A&&(A=o(e,d,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),A},get standardDerivatives(){return null===g&&(g=o(e,d,"standardDerivatives",!0,["OES_standard_derivatives"])),g},get shaderTextureLOD(){return null===S&&(S=o(e,d,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),S},get fragDepth(){return null===G&&(G=o(e,d,"fragDepth",!0,["EXT_frag_depth"])),G},get loseContext(){return R||(R=u.load(e,X)),R}}}}));