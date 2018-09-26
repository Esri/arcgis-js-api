#ifdef VV_CUSTOM_MODEL_MATRIX
# ifdef VERTICAL_OFFSET
vec4 localCenter() { return vvTransformPosition(vec3(0, 0, 0), instanceFeatureAttribute); }
# endif
#else
# ifdef VERTICAL_OFFSET
vec4 localCenter() { return vec4(vec3(0, 0, 0), 1.0); }
# endif
#endif
