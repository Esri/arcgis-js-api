#include <util/normalEncoding.glsl>

#ifdef VV_CUSTOM_MODEL_MATRIX
# ifdef COMPRESSED_NORMALS
vec4 localNormal() { return vvTransformNormal(decodeNormal(normalCompressed), instanceFeatureAttribute); }
# else
vec4 localNormal() { return vvTransformNormal(normal, instanceFeatureAttribute); }
# endif
#else
# ifdef COMPRESSED_NORMALS
vec4 localNormal() { return vec4(decodeNormal(normalCompressed), 1.0); }
# else
vec4 localNormal() { return vec4(normal, 1.0); }
# endif
#endif
