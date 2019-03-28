float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
  // from:
  //   - OpenGLES Common Profile Specification Version 2.0.25, Section 3.7.7 - Texture Minification
  //   - https://www.opengl.org/discussion_boards/showthread.php/171485-Texture-LOD-calculation-(useful-for-atlasing)
  //   - http://www.linedef.com/virtual-texture-demo.html
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
  return max(0.0, 0.5 * log2(deltaMaxSqr));
}

vec4 textureAtlasLookup(sampler2D tex, vec2 uv, vec4 region, vec2 texSize) {
  //[umin, vmin, umax, vmax]
  vec2 atlasScale = region.zw - region.xy;
  vec2 uvAtlas = fract(uv) * atlasScale + region.xy;

  vec4 texColor;

  // calculate derivative of continuous texture coordinate
  // to avoid mipmapping artifacts caused by manual wrapping in shader
  vec2 dUVdx = dFdx(uv) * atlasScale;
  vec2 dUVdy = dFdy(uv) * atlasScale;

#ifdef GL_EXT_shader_texture_lod
  return texture2DGradEXT(tex, uvAtlas, dUVdx, dUVdy);
#else
  // use bias to compensate for difference in automatic vs desired mipmap level
  vec2 dUVdxAuto = dFdx(uvAtlas);
  vec2 dUVdyAuto = dFdy(uvAtlas);
  float mipMapLevel = calcMipMapLevel(dUVdx * texSize, dUVdy * texSize);
  float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * texSize, dUVdyAuto * texSize);

  return texture2D(tex, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}

vec4 textureLookup(sampler2D tex, vec2 uv) {
#ifdef TEXTURE_ATLAS
  return textureAtlasLookup(tex, uv, regionV, texSize);
#else
  return texture2D(tex, uv);
#endif
}

/**
 * Based on the texture alpha mode:
 * - discards fragments if necessary
 * - adjusts read texture alpha if necessary
 */
void discardOrAdjustTextureAlpha(inout vec4 texColor) {
  // if the texture alpha mode is set to "mask"
  // the resulting alpha is either 0.0 (discard) or 1.0
  #if defined(TEXTURE_ALPHA_MODE_MASK)
    if (texColor.a < textureAlphaCutoff) {
      discard;
    } else {
      texColor.a = 1.0;
    }
  // if the texture alpha mode is set to "maskBlend"
  // the resulting alpha is either 0.0 (discard) or untouched for further use in blending
  #elif defined(TEXTURE_ALPHA_MODE_MASK_BLEND)
    if (texColor.a < textureAlphaCutoff) {
      discard;
    }
  // if the texture alpha mode is set to "opaque"
  // the resulting alpha is always 1.0
  #elif defined(TEXTURE_ALPHA_MODE_OPAQUE)
    texColor.a = 1.0;
  // for "blend" we don't need to do anyting
  #else // defined(TEXTURE_ALPHA_MODE_BLEND)

  #endif
}



