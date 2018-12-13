#ifdef TEXTURING
uniform sampler2D tex;
uniform vec2 texSize;

#ifdef TEXTURE_ALPHA_TEST
uniform float textureAlphaCutoff;
#endif

varying vec2 vtc;

#ifdef TEXTURE_ATLAS
varying vec4 regionV;
#endif

#endif
