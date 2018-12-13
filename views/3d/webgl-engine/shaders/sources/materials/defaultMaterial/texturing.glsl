float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
  // from:
  //   - OpenGLES Common Profile Specification Version 2.0.25, Section 3.7.7 - Texture Minification
  //   - https://www.opengl.org/discussion_boards/showthread.php/171485-Texture-LOD-calculation-(useful-for-atlasing)
  //   - http://www.linedef.com/virtual-texture-demo.html
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
  return max(0.0, 0.5 * log2(deltaMaxSqr));
}

// based on https://medium.com/@bgolus/anti-aliased-alpha-test-the-esoteric-alpha-to-coverage-8b177335ae4f
float coverageCorrectionFactor(vec2 uv) {
#ifdef ALPHA_COVERAGE_CORRECTION
  const float MipScale = 0.25;
  uv *= texSize;
#ifdef TEXTURE_ATLAS
  uv *= region.zw - region.xy;
#endif
  return 1.0 + max(0.0, calcMipMapLevel(dFdx(uv), dFdy(uv))) * MipScale;
#else
  return 1.0;
#endif
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

