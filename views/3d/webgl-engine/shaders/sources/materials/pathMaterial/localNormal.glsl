#include <util/normalEncoding.glsl>

# ifdef COMPRESSED_NORMALS
vec4 localNormal() { return vec4(decodeNormal(normalCompressed), 1.0); }
# else
vec4 localNormal() { return vec4(normal, 1.0); }
# endif
