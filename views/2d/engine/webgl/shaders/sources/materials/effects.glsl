
// 4x4 color transform matrix whether that last column is the translation component
uniform mat4 u_insideEffectMat4[ MAX_FILTER_COUNT ];
uniform mat4 u_outsideEffectMat4[ MAX_FILTER_COUNT ];

// Alpha associated with each effect. We separate alpha to avoid using 5x5 color matricies
uniform float u_insideOpacities[ MAX_FILTER_COUNT ];
uniform float u_outsideOpacities[ MAX_FILTER_COUNT ];

vec4 getEffectColor(in vec4 color, in float filterFlags) {
  // Unpack premultiplied colors
  vec4 rgbw = vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
  float a = color.a;

  // default visibility filter is index 0, index 1+ are effects
  for (int i = 1; i < EFFECT_COUNT + 1; i++) {
    float bit = getBit(filterFlags, i);

    rgbw = u_insideEffectMat4[ i ] * (bit  * rgbw) + u_outsideEffectMat4[ i ] * ((1.0 - bit) * rgbw);
    a    = u_insideOpacities[ i ]  * (bit  * a)    + u_outsideOpacities[ i ]  * ((1.0 - bit) * a);
  }

  // Output as premultiplied
  return vec4(rgbw.rgb * a, a);
}

vec3 applyFilter(inout vec4 color, inout vec3 pos, in float filterFlags) {
  // Unpack premultiplied colors
  vec4 rgbw = vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
  float a = color.a;

  // default visibility filter is index 0, index 1+ are effects
  for (int i = 0; i < EFFECT_COUNT + 1; i++) {
    float bit = getBit(filterFlags, i);

    rgbw = u_insideEffectMat4[ i ] * (bit  * rgbw) + u_outsideEffectMat4[ i ] * ((1.0 - bit) * rgbw);
    a    = u_insideOpacities[ i ]  * (bit  * a)    + u_outsideOpacities[ i ]  * ((1.0 - bit) * a);
  }

  // Output as premultiplied
  color.rgb = rgbw.rgb * a;
  color.a = a;

  // If we are not visible, clip the vertex if we are doing a hit-test
  pos.z += 2.0 * (1.0 - getBit(filterFlags, 0));
  return pos;
}

vec3 applyFilterLabels(inout vec4 color, inout vec3 pos, in float filterFlags) {
  float bit = getBit(filterFlags, 0);

  pos.z += 2.0 * (1.0 - bit);

  // When outsideLabelsVisible is false, we also clip labels if they fail any effect filter
#ifndef OUTSIDE_LABELS_VISIBLE
  for (int i = 1; i < EFFECT_COUNT + 1; i++) {
    float bit = getBit(filterFlags, i);

    pos.z += 2.0 * (1.0 - bit);
  }
#endif
  return pos;
}
