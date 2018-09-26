#ifdef VV_CUSTOM_MODEL_MATRIX
vec4 localPosition() { return vvTransformPosition(position, instanceFeatureAttribute); }
#else
vec4 localPosition() { return vec4(position, 1.0); }
#endif
