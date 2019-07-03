#ifdef TEXTURING
  uniform sampler2D tex;
  uniform vec2 texSize;

  #if defined(TEXTURE_ALPHA_MODE_MASK) || defined(TEXTURE_ALPHA_MODE_MASK_BLEND)
  uniform float textureAlphaCutoff;
  #endif

  #ifdef TEXTURE_ATLAS
  varying vec4 regionV;
  #endif

#endif

#if defined(TEXTURING) || defined(TEXTURE_COORDINATES)
varying vec2 vtc;
#endif
