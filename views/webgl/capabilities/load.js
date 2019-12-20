// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./DisjointTimerQuery","./Instancing","./isWebGL2Context","./LoseContext","./VertexArrayObjects"],function(t,e,n,r,o,u,_){function l(t,e){var o,l,T,F,R,s,O,X,b,d=e&&e.disabledExtensions||{},A=e&&e.debugWebGLExtensions||{},S=null,g=null,G=null,B=null;return{get instancing(){return o||(o=r.load(t)),o},get vao(){return l||(l=_.load(t,d)),l},get compressedTextureS3TC(){return T||(T=i(t,d)),T},get textureFilterAnisotropic(){return F||(F=f(t,d)),F},get disjointTimerQuery(){return R||(R=n.load(t,d)),R},get textureFloat(){return s||(s=E(t,d)),s},get colorBufferFloat(){return O||(O=c(t,d)),O},get blendMinMax(){return X||(X=a(t,d)),X},get depthTexture(){return null===S&&(S=x(t,d,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),S},get standardDerivatives(){return null===g&&(g=x(t,d,"standardDerivatives",!0,["OES_standard_derivatives"])),g},get shaderTextureLOD(){return null===G&&(G=x(t,d,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),G},get fragDepth(){return null===B&&(B=x(t,d,"fragDepth",!0,["EXT_frag_depth"])),B},get loseContext(){return b||(b=u.load(t,A)),b}}}function i(t,e){if(e.compressedTextureS3TC)return null;var n=t.getExtension("WEBGL_compressed_texture_s3tc");return n?{COMPRESSED_RGB_S3TC_DXT1:n.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:n.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:n.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:n.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function a(t,e){if(o.default(t))return{MIN:t.MIN,MAX:t.MAX};if(e.blendMinMax)return null;var n=t.getExtension("EXT_blend_minmax");return n?{MIN:n.MIN_EXT,MAX:n.MAX_EXT}:null}function f(t,e){if(e.textureFilterAnisotropic)return null;var n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return n?{MAX_TEXTURE_MAX_ANISOTROPY:n.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:n.TEXTURE_MAX_ANISOTROPY_EXT}:null}function E(t,e){if(o.default(t))return{textureFloat:!0,textureFloatLinear:!e.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t.HALF_FLOAT};if(t instanceof WebGLRenderingContext){var n=!e.textureHalfFloat&&t.getExtension("OES_texture_half_float");return{textureFloat:!e.textureFloat&&!!t.getExtension("OES_texture_float"),textureFloatLinear:!e.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!!n,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:n?n.HALF_FLOAT_OES:void 0}}return null}function c(t,e){if(o.default(t)){var n=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),r=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_float");return n||r?{textureFloat:!!r,textureHalfFloat:!!n,R16F:t.R16F,RG16F:t.RG16F,RGBA16F:t.RGBA16F,R32F:t.R32F,RG32F:t.RG32F,RGBA32F:t.RGBA32F,R11F_G11F_B10F:t.R11F_G11F_B10F,RGB16F:t.RGB16F}:null}if(t instanceof WebGLRenderingContext){var n=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),r=!e.colorBufferFloat&&t.getExtension("WEBGL_color_buffer_float");return n||r?{textureFloat:!!r,textureHalfFloat:!!n,RGBA16F:n?n.RGBA16F_EXT:void 0,RGB16F:n?n.RGB16F_EXT:void 0,RGBA32F:r?r.RGBA32F_EXT:void 0}:null}return null}function x(t,e,n,r,u){if(r&&o.default(t))return!0;if(e[n])return!1;for(var _=0,l=u;_<l.length;_++){var i=l[_];if(t.getExtension(i))return!0}return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.loadCapabilities=l});