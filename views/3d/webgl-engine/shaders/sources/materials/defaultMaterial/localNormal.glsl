#include <util/normalEncoding.glsl>

#ifdef VV_CUSTOM_MODEL_MATRIX
  # if (NORMALS == NORMALS_COMPRESSED)
    vec4 localNormal() { return vvTransformNormal(decodeNormal(normalCompressed), instanceFeatureAttribute); }
  # elif (NORMALS == NORMALS_DEFAULT)
    vec4 localNormal() { return vvTransformNormal(normal, instanceFeatureAttribute); }
  # endif
#else
  # if (NORMALS == NORMALS_COMPRESSED)
    vec4 localNormal() { return vec4(decodeNormal(normalCompressed), 1.0); }
  # elif (NORMALS == NORMALS_DEFAULT)
    vec4 localNormal() { return vec4(normal, 1.0); }
  # endif
#endif
