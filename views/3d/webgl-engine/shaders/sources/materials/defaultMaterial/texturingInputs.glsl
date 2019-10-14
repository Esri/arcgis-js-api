#ifdef TEXTURE_COLOR
  uniform sampler2D tex;

  #if defined(TEXTURE_ALPHA_MODE_MASK) || defined(TEXTURE_ALPHA_MODE_MASK_BLEND)
    uniform float textureAlphaCutoff;
  #endif
#endif

#if defined(TEXTURE_COORDINATES)
  varying vec2 vtc;

  #ifdef TEXTURE_ATLAS
    varying vec4 regionV;
    uniform vec2 atlasSize;
  #endif
#endif
