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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,t,a,d){function n(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.glsl(r||(r=a(["\n    #ifndef GL_EXT_shader_texture_lod\n      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {\n        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));\n        return max(0.0, 0.5 * log2(deltaMaxSqr));\n      }\n    #endif\n\n    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {\n      //[umin, vmin, umax, vmax]\n      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;\n      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;\n\n      // calculate derivative of continuous texture coordinate\n      // to avoid mipmapping artifacts caused by manual wrapping in shader\n      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;\n      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;\n\n      #ifdef GL_EXT_shader_texture_lod\n        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);\n      #else\n        // use bias to compensate for difference in automatic vs desired mipmap level\n        vec2 dUVdxAuto = dFdx(uvAtlas);\n        vec2 dUVdyAuto = dFdy(uvAtlas);\n        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);\n        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);\n\n        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);\n      #endif\n    }\n  "],["\n    #ifndef GL_EXT_shader_texture_lod\n      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {\n        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));\n        return max(0.0, 0.5 * log2(deltaMaxSqr));\n      }\n    #endif\n\n    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {\n      //[umin, vmin, umax, vmax]\n      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;\n      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;\n\n      // calculate derivative of continuous texture coordinate\n      // to avoid mipmapping artifacts caused by manual wrapping in shader\n      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;\n      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;\n\n      #ifdef GL_EXT_shader_texture_lod\n        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);\n      #else\n        // use bias to compensate for difference in automatic vs desired mipmap level\n        vec2 dUVdxAuto = dFdx(uvAtlas);\n        vec2 dUVdyAuto = dFdy(uvAtlas);\n        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);\n        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);\n\n        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);\n      #endif\n    }\n  "]))))}Object.defineProperty(t,"__esModule",{value:!0}),t.TextureAtlasLookup=n;var r});